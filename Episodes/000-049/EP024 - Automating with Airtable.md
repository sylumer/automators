---
status: "incomplete"
fc-date:
  year: 2019
  month: 05
  day: 24
fc-category: "podcast"
podcast: "Automators"
published: 2019-05-24
duration: 3792
formattedduration: "01:03:12"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/24"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators024.mp3"
episode: 24
title: "24: Automating with Airtable"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David are getting serious about Airtable, the online-based database/spreadsheet/thingy. In this episode, they explain how Airtable works, how they're using it to Automate the Automators, and additional uses for Airtable.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 024 Discussion](https://talk.automators.fm/t/automators-24-automating-with-airtable/4813)

# Sponsors
- [[Luna Display (Sponsor)|Luna Display]] - The only hardware solution that turns your iPad into a wireless display for your Mac.
- [[Backblaze (Sponsor)|Backblaze]] - Unlimited cloud backup for Macs and PCs.

# Show Notes
- [The Automators Orange County Meetup](https://www.eventbrite.com/e/automators-orange-county-meetup-tickets-59398172533?aff=utm_source%3Deb_email%26utm_medium%3Demail%26utm_campaign%3Dnew_event_email&utm_term=eventurl_text) - Join us next week in Orange County.
- [The Keyboard Maestro Field Guide](https://learn.macsparky.com/p/km) - Introductory Pricing is About to End. Your purchase: 1. Helps you become a Mac Ninja; 2. Pays for David's shoes. - WIN WIN!
- [David's Airtable Video Demonstration](https://youtu.be/wjKYhxks50M) - See how two automators automate Automators. 😇
- [Rose's Video on How She Uses Airtable for Her Editorial Schedule](https://youtu.be/-4HSATi6abU)
- [Adapt Podcast](https://www.relay.fm/adapt)
- [Timery](http://Timeryapp.com/)
- [Airtable](https://airtable.com/)
- [Quip](https://quip.com/)

# Transcription

| Time Index | Transcription                                                                                        |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm David Sparks and joined by my co-host, Rosemary Orchard, and this is Automators           |
| 00:07      | where we talk about how to automate your technology to do your work for you.                         |
| 00:13      | Hello, Rosemary.                                                                                     |
| 00:14      | How are you today?                                                                                   |
| 00:15      | I am very, very, very excited about today's topic, David, but we've got a lot to cover,              |
| 00:20      | haven't we?                                                                                          |
| 00:21      | Yeah.                                                                                                |
| 00:22      | We're talking about [[Airtable]] today.                                                                  |
| 00:23      | We've been teasing it on the show for a while.                                                       |
| 00:25      | Both of us have kind of dug in deeper on this application, and now it's just obvious                 |
| 00:29      | that we have to cover it, so we're going to, I think we've got a really great show.                  |
| 00:33      | But before we get there, there is some news.                                                         |
| 00:35      | First of all, thank you, everybody, who bought T-shirts and hoodies.                                 |
| 00:38      | We really appreciate it.                                                                             |
| 00:40      | We got some milk money out of it, and some really cool T-shirts and hoodies are heading              |
| 00:44      | out.                                                                                                 |
| 00:45      | Hopefully, we'll see you wearing them up at [[WWDC]] or wherever we bump into you.                       |
| 00:50      | Also, I have released the Keyboard Master of Field Guide.                                            |
| 00:54      | Hooray.                                                                                              |
| 00:55      | Yes, and this has been coming for a while.                                                           |
| 00:57      | We've been teasing it for quite a long time.                                                         |
| 00:59      | Yeah, I feel like I've been talking about it too long, but it's a challenging app to                 |
| 01:05      | cover in a field guide, but I'm really happy with the way it came out.                               |
| 01:09      | The analogy I use in one of the videos is, [[Keyboard Maestro]] is like a massive box of                 |
| 01:16      | Lego that's been dumped on your desk with no instructions.                                           |
| 01:20      | There's just so much you can do with that application to automate your Mac.                          |
| 01:24      | I spent a lot of time going through it and finding a way to explain it, and I think it               |
| 01:30      | came out great.                                                                                      |
| 01:31      | Yes, and you've got over 76 videos, so I've been going through and pecking through it                |
| 01:36      | and just grabbing videos here and there as they catch my eye, and I'm really enjoying                |
| 01:40      | it.                                                                                                  |
| 01:41      | I'm learning a lot, even though I use [[Keyboard Maestro]] myself all the time.                          |
| 01:45      | In my head, that was the ultimate test.                                                              |
| 01:46      | Can I do anything in here that would teach Rosemary Orchard something if I did that?                 |
| 01:51      | Yes.                                                                                                 |
| 01:52      | I feel like I won.                                                                                   |
| 01:53      | Yes, but we're having a listener competition.                                                        |
| 01:55      | You have to guess which parts of it I didn't know.                                                   |
| 01:59      | The structure of it is there is the basics and then also explains all the triggers and               |
| 02:04      | all the actions you can do, but then there's also a section there where I just give you              |
| 02:07      | all of the cool [[Keyboard Maestro]] scripts I use, and then you can download them, install              |
| 02:13      | them, and automate them or adjust them.                                                              |
| 02:16      | Like I said, the feedback's been good, and I'm really happy with the way it came out.                |
| 02:21      | Thank you, everyone.                                                                                 |
| 02:22      | It's on sale.                                                                                        |
| 02:23      | It's only $29.                                                                                       |
| 02:24      | It's on sale for $24 for a very short time, the launch window, and I wanted to make sure             |
| 02:28      | the Automator's audience knew about it.                                                              |
| 02:31      | Head over to learn.macsparky.com and get your copy before the price goes up.                         |
| 02:38      | As well as producing awesome stuff, you can meet us.                                                 |
| 02:44      | As David mentioned earlier, if you are coming to [[WWDC]], we've got a meet up there.                     |
| 02:51      | Prices up for that are unfortunately now sold out officially that free tickets, but keep             |
| 02:56      | an eye out just in case anybody doesn't need their ticket and releases it, and you can               |
| 03:00      | still grab a spot.                                                                                   |
| 03:02      | The other meet up that we're doing before [[WWDC]] is near you, isn't it, David?                          |
| 03:07      | It's Orange County.                                                                                  |
| 03:08      | We have the Orange County meetup.                                                                    |
| 03:10      | We've still got some space available.                                                                |
| 03:11      | If you want to join in, we've got a location now.                                                    |
| 03:14      | We've settled on the date.                                                                           |
| 03:15      | It's May 31st at 6 p.m.                                                                              |
| 03:18      | It's near the Irvine Spectrum, and it's going to be a lot of fun.                                    |
| 03:22      | I think if you're in the Southern California area, we'd love to have you.                            |
| 03:27      | Yes, definitely.                                                                                     |
| 03:28      | While we're on the topic of meetups, just to keep things rolling, if anybody listening               |
| 03:33      | is attending Macstock this year that is at the end of July, then both you and I are going            |
| 03:39      | to be there, and we're both speaking.                                                                |
| 03:41      | It would be a great opportunity to meet some of you if we haven't got to meet you before             |
| 03:46      | or meet you again if we have got to meet you before somehow, and to see everybody and hopefully      |
| 03:52      | learn something about everybody else.                                                                |
| 03:55      | I love how much we're getting you over in the States this year, Rose.                                |
| 03:58      | Oh, Christ.                                                                                          |
| 03:59      | I've been there twice already, and I've got another three trips planned so far.                      |
| 04:03      | I feel like I spend my life on planes, and I've just spent the last two weekends on planes           |
| 04:07      | within Europe, and I'm spending this weekend on a plane as well.                                     |
| 04:11      | Racking up your frequent flyer miles.                                                                |
| 04:13      | I'm going to, I've never been, my daughter just won a fancy competition there, producing             |
| 04:17      | one of her plays in Nebraska.                                                                        |
| 04:19      | I've never been in Nebraska.                                                                         |
| 04:20      | I'm looking forward to that, so I'm going to be heading there, but that's not a meet up               |
| 04:25      | or anything.                                                                                         |
| 04:26      | That's a family thing.                                                                               |
| 04:27      | Anyway, we have been talking about this app, Timery, which was in beta forever, and I always         |
| 04:34      | felt bad when we talked about it, but if you're into time tracking, we did a show on that.           |
| 04:39      | Timery is the application for toggle that toggle should have made, and that allows to                |
| 04:45      | put it.                                                                                              |
| 04:46      | Yeah, it is the best iOS app for toggle and time tracking that there is.                             |
| 04:51      | I've tried a lot of them.                                                                            |
| 04:53      | Yeah, so if you're doing time tracking, particularly if you're using toggle, Timery has shipped.     |
| 04:58      | Yay.                                                                                                 |
| 04:59      | So we'll put it in the show notes.                                                                   |
| 05:00      | You can go download it and check it out, and congratulations to the developer.                       |
| 05:03      | I know that there was a lot of work in this app, and I hope, I wish him much success.                |
| 05:09      | Yes.                                                                                                 |
| 05:10      | Just before we get into all of the [[Airtable]] goodness, we should mention there is another             |
| 05:14      | new show on Relay FM called Adapt, which some of our listeners might be interested in.               |
| 05:19      | Yeah, I think there's a huge overlap with our audience and the Adapt audience, and Adapt             |
| 05:24      | is all about the iPad and giving more out of the iPad.                                               |
| 05:27      | Of course, our friend [[Federico Viticci\|Federico's]] behind it, and I think it's going to be a great show.               |
| 05:32      | Yes, it's [[Federico Viticci]] and Ryan Christoffel, both of them are actually Mac stories.               |
| 05:38      | [[Federico Viticci]], of course, being Mr. Mac stories himself, but it's definitely an app                |
| 05:43      | that I'm sure many of our listeners will enjoy, or a podcast rather, perhaps on the                  |
| 05:48      | brain today.                                                                                         |
| 05:49      | There we go.                                                                                         |
| 05:50      | Well, we're actually here to talk today about what we're going to do with [[Airtable]].                  |
| 05:55      | [[Airtable]], if you've never heard of it before, it's a spreadsheet slash database application          |
| 06:02      | based on the internet.                                                                               |
| 06:04      | It's a web-based app, and this first came on my radar several years ago.                             |
| 06:09      | They were emailing me as they were getting launched, and I was at the time pretty happy              |
| 06:14      | with numbers, because most of the spreadsheet type stuff I did was on my local machine.              |
| 06:20      | I liked having it local, and I really didn't need the features that [[Airtable]] brought to              |
| 06:24      | the table, but over time, I started playing with it and increasingly finding uses for                |
| 06:31      | it to the extent that [[Airtable]] is now open on my screen every day for one reason or another.         |
| 06:38      | One of the things we've done is we've converted much of the show management over to what I           |
| 06:44      | think to be a very good [[Airtable]] table.                                                              |
| 06:47      | It's like a shortcut, shortcut, [[Airtable]] table, I don't know how we're going to get                  |
| 06:52      | through this.                                                                                        |
| 06:53      | It's actually an [[Airtable]] base, which contains tables.                                               |
| 06:56      | There we go.                                                                                         |
| 06:58      | Yeah.                                                                                                |
| 06:59      | Multiple levels of abstraction.                                                                      |
| 07:00      | But either way, it's a very powerful app, and we thought today we'd like to talk through             |
| 07:04      | how we're using it for the show and explain some of the features, because I think anybody            |
| 07:08      | hearing this may trigger a few ideas in your head how you can automate your life with [[Airtable]].      |
| 07:14      | And then we'll wrap up the show with some other uses we're doing with [[Airtable]] as well.              |
| 07:18      | So I guess we should just get started.                                                               |
| 07:20      | Well, yes, but just to get started, we need to go back to the beginning, don't we?                   |
| 07:24      | Because we didn't start out with [[Airtable]].                                                           |
| 07:26      | We started out with notes.                                                                           |
| 07:28      | Yeah.                                                                                                |
| 07:29      | Yeah.                                                                                                |
| 07:30      | And it's not terrible, which sounds like a criticism, but really Apple Notes is pretty               |
| 07:35      | good.                                                                                                |
| 07:36      | And the collaboration was decent as well.                                                            |
| 07:37      | We could see who had added what, but it quickly grew out of control, and it was difficult            |
| 07:42      | to find which ideas that we already marked as in progress for recording, or it's definitely          |
| 07:49      | in planning and things like that.                                                                    |
| 07:51      | And everything was just all over the place.                                                          |
| 07:54      | And there are some things we do with the show.                                                       |
| 07:55      | I mean, the way we produce the show is Rose and I switch shows.                                      |
| 07:59      | I do even.                                                                                           |
| 08:00      | She does odd.                                                                                        |
| 08:01      | So whichever one of us...                                                                            |
| 08:02      | It's our show.                                                                                       |
| 08:03      | In fact, if you're listening, if you want to know the secret, it's whoever reads the                 |
| 08:07      | opening title.                                                                                       |
| 08:08      | They're the one doing the post-production and all the other work on the show.                        |
| 08:13      | But you can't really track that through an Apple Note without manually doing it.                     |
| 08:17      | So we wanted to automate a whole bunch of that stuff.                                                |
| 08:20      | And we're also constantly getting ideas for potential guests, and we wanted a better                 |
| 08:24      | way to track that.                                                                                   |
| 08:27      | And I think we came up with a pretty good solution.                                                  |
| 08:30      | And of course, whatever we did needed to be a collaboration tool, because we're in two               |
| 08:35      | different continents, but we both want to access the data and make sure it's always up to date,      |
| 08:39      | which immediately removes something like numbers.                                                    |
| 08:42      | Yeah.                                                                                                |
| 08:43      | I mean, if there are some other solutions, we could have maybe gone with Google Sheets               |
| 08:47      | or something like this.                                                                              |
| 08:48      | But [[Airtable]], it's just because it's more than a halfway house between a spreadsheet                 |
| 08:55      | and a database.                                                                                      |
| 08:56      | It is more database than spreadsheet, but it's user-friendly in the same way a spreadsheet           |
| 08:59      | is.                                                                                                  |
| 09:00      | So you can do these great things like grouping, and so you can group by specific fields in           |
| 09:05      | your database, which makes life so much easier.                                                      |
| 09:07      | So that, for example, I'm jumping ahead a little bit here, but in our show planning,                 |
| 09:12      | we have a status field, and all of our shows are grouped by status.                                  |
| 09:16      | So we can see what's in planning, what's scheduled, and what things are still in the                 |
| 09:20      | idea status.                                                                                         |
| 09:21      | And then down under the idea status, we've got everything that we've already released,               |
| 09:25      | which just makes it a lot easier to keep on top of all of this.                                      |
| 09:30      | Oh, yeah.                                                                                            |
| 09:32      | That is one of the best features, but we are definitely getting ahead of ourselves.                  |
| 09:36      | Let's start with some basics and get to that, because some of that is the payoff at the              |
| 09:42      | end.                                                                                                 |
| 09:43      | Definitely.                                                                                          |
| 09:44      | So what are the things we need to track?                                                             |
| 09:47      | For every show we make, we've got a show number, we've got a show title, we've got an episode        |
| 09:55      | title in the database, which was Rose's idea, I thought was pretty cool.                             |
| 09:59      | It just does some database work to grab the number plus the title and combines them.                 |
| 10:05      | And then we've got guests, which of course, we'll get into a little bit more detail, but             |
| 10:09      | essentially guests is its own table, and then we just link to this, which means that we              |
| 10:13      | can have a bunch of information about the guest, and then the thing that we want to                  |
| 10:16      | reference stored with the guest, but then we can also see them and we can also see how               |
| 10:21      | many episodes we've done with each guest and things like that.                                       |
| 10:24      | Of course, all of our guests have only been on once so far, but that doesn't mean they               |
| 10:27      | can't come back.                                                                                     |
| 10:28      | Yeah.                                                                                                |
| 10:29      | And the idea for our show, I mean, one of the challenges we have is tracking guests,                 |
| 10:34      | because quite often people pitch themselves or somebody pitches somebody else, and we                |
| 10:38      | keep information on those folks, so we may want to use them at some point in the future.             |
| 10:44      | We've got our own list of people that we'd like to put on someday.                                   |
| 10:46      | So in the old days, we would have a separate Apple Network where we just kept that list              |
| 10:51      | and we would move the names between different categories.                                            |
| 10:55      | And now we've got a part of our air table database for the show is a sheet, I guess,                 |
| 11:03      | for lack of a better term that has a list of all these guests with all our notes.                    |
| 11:09      | And then you can easily, one of the things you can do in air table, which we haven't                 |
| 11:13      | really said explicitly, but it's really cool, is you can link data between different sheets          |
| 11:18      | or even different tables.                                                                            |
| 11:20      | So once we decide to make a show with that guest, once it goes into planning or pre-production       |
| 11:27      | on that guest, we link that guest's record from that sheet on the main show tracking                 |
| 11:32      | sheet.                                                                                               |
| 11:33      | I guess we'll make a video or something kind of showing up a bit of this.                            |
| 11:38      | We can't share everything because we just can't.                                                     |
| 11:43      | But we're going to share as much as we can so you can see how this works.                            |
| 11:46      | You just, you link the guest to that show tracking sheet and then suddenly the guest                 |
| 11:52      | sheet gets better data because it knows what show they're attached to and the show tracking          |
| 11:58      | sheet has a link to all that information we already have on the guest.                               |
| 12:00      | So it saves you work and kind of keeps everything together.                                          |
| 12:05      | Yeah, it does.                                                                                       |
| 12:07      | And I mean, that's the beauty of this because it does allow you to store so much information         |
| 12:11      | in one place and sort it and filter it by all the different columns, you can do almost               |
| 12:17      | anything with the data.                                                                              |
| 12:19      | Anyway, back to our show planning sheet, we also have, we have notes, which is just,                 |
| 12:24      | so when you come up with an idea, so for example, automating automations with air table, what        |
| 12:30      | are we actually going to cover in this?                                                              |
| 12:32      | So you scribble down some notes and then we have the show outline table, which is when               |
| 12:36      | we move it from our idea status to the planning status.                                              |
| 12:41      | And that's when we create a quip document.                                                           |
| 12:43      | So we don't have the entire show outline in air table.                                               |
| 12:46      | We could, there's nothing stopping us, but we are using quip just because it's easy to               |
| 12:50      | share one quip document with a guest when, when you're recording.                                    |
| 12:55      | And we do like to have our outlines and share them with people.                                      |
| 12:59      | And honestly, quip is a better tool to outline a podcast than air table.                             |
| 13:03      | So but it, because that's also a web tool, it's very easy to create a link to that page              |
| 13:10      | and embed it in the air table.                                                                       |
| 13:12      | So as you're working through the air table, if you want to get to the outline, you just              |
| 13:16      | push the link and then it gets you straight to the appropriate quip document.                        |
| 13:20      | It's, it's very clever the way the whole thing ties together.                                        |
| 13:23      | Well, it seemed more clever where we get to the Zapier Automation that actually does that            |
| 13:28      | automatically for us.                                                                                |
| 13:29      | Yeah.                                                                                                |
| 13:30      | We're going to explain that in a little bit, but, but then, you know, Rose had talked earlier        |
| 13:35      | that we've got this, this one field in air table.                                                    |
| 13:38      | And this is one of the power features of air table, I believe is a status.                           |
| 13:43      | We call it status, but I mean, it's basically a multi select field where you can create              |
| 13:48      | entries.                                                                                             |
| 13:49      | You can add new ones, but, or you can have a preset group of entries.                                |
| 13:54      | And for ours, we've got several, we got planning, scheduled, recorded, released or idea stage.       |
| 14:00      | So for every show idea we have, we've got one, it's in one of those different statuses.              |
| 14:08      | And with air table like Rose was saying, you can then go into the document, you know, by,            |
| 14:14      | by its default, it gives you what they call the grid view, which looks very much like                |
| 14:18      | a spreadsheet.                                                                                       |
| 14:19      | But if you click on that in air table, then you can, you can add custom views and the                |
| 14:25      | custom views are often planned around that status.                                                   |
| 14:29      | And the status view is great because then I can, you know, we can, both of us can see                |
| 14:33      | what exactly is in planning, what's in pre production, et cetera.                                    |
| 14:37      | And just think, think about that for a minute with whatever you're managing data in your             |
| 14:41      | life, if you could immediately set it up.                                                            |
| 14:44      | It's kind of like pivot tables in a spreadsheet, but not exactly.                                    |
| 14:49      | But the nice thing here I think is when you combine the power to dynamically resort the              |
| 14:54      | table based on project status, and you combine that with the fact that this is a collaborative       |
| 14:59      | tool and people on the other end can get that same view or a different view.                         |
| 15:05      | It gets really powerful.                                                                             |
| 15:07      | It does.                                                                                             |
| 15:08      | And this is what makes it so good because it's designed for collaboration, which means               |
| 15:13      | you don't end up with weird things like data collisions and stuff like that, which can               |
| 15:17      | of course happen elsewhere.                                                                          |
| 15:19      | You know, if we had, I don't know, say an SQL lite database saved in [[Dropbox]], well,                  |
| 15:25      | to start with that wouldn't do very well with [[Dropbox]] is sinking.                                    |
| 15:27      | And secondly, if we both opened it at the same time, it might actually just explode                  |
| 15:32      | and cause the end of automators, or at the very least the end of our tears list, which               |
| 15:35      | of course is something.                                                                              |
| 15:36      | And we do not want.                                                                                  |
| 15:39      | So yes.                                                                                              |
| 15:40      | And setting that up is really easy.                                                                  |
| 15:42      | All you have to do is when you create a, you know, I think of it as a spreadsheet.                   |
| 15:47      | I understand what you mean.                                                                          |
| 15:48      | The fact that it's really more of a database than a spreadsheet, but it's user friendly              |
| 15:52      | in the same way a spreadsheet is.                                                                    |
| 15:53      | If you can open numbers and play around with it, you will do just five at their table.               |
| 15:57      | Exactly.                                                                                             |
| 15:58      | And the nice thing is you can then go through and I mean, to set up this status field or             |
| 16:05      | this multi-select, it's simply just changing the field type and then typing them in, anybody         |
| 16:10      | can do it.                                                                                           |
| 16:11      | We're going to talk later about other ways we use it, but one of my other projects I'll              |
| 16:15      | mention later, I noticed that some of my team members started making additions and changes           |
| 16:20      | to the status field on that project because, and neither of them had any training or use             |
| 16:25      | prior of [[Airtable]].                                                                                   |
| 16:27      | Yeah.                                                                                                |
| 16:28      | And that's what's great about this, you know, you can settle this up and you can share it            |
| 16:31      | with other people who don't have to know how it works because it's fairly obvious.                   |
| 16:35      | It's a table and you fill it out.                                                                    |
| 16:37      | And that's it.                                                                                       |
| 16:38      | And it supports all the expected cell types that you would think of, you know, dates,                |
| 16:43      | checkboxes, text, you know, different types of digits and numbers, just anything you can             |
| 16:50      | think of that you need or currencies are also supported.                                             |
| 16:54      | And it can even do things like barcodes and stuff like that, which is great if you need              |
| 16:58      | that sort of thing.                                                                                  |
| 17:01      | So the status field is key to keeping the show running.                                              |
| 17:05      | Let's talk about some of the other fields that we're using.                                          |
| 17:08      | Yeah.                                                                                                |
| 17:09      | So we've got a responsible field, which I mean, David mentioned just now, each one                   |
| 17:12      | of us takes in turn.                                                                                 |
| 17:13      | So this is David's episode and it's as David's episode in [[Airtable]], which actually I used            |
| 17:19      | feed into a couple of other things as well, like for example, the Automators.fm website,             |
| 17:24      | which posts the blog post episode as well as each podcast episode and links to the videos.           |
| 17:31      | That knows who is in charge of the episode, so whose blog posts we really need to grab               |
| 17:35      | for it because of this [[Airtable]], which is amazing.                                                   |
| 17:40      | And then after that, we've got recording date and release date.                                      |
| 17:43      | And then we have just three very simple checkbox fields, whether or not the episode's recorded,      |
| 17:47      | whether or not David's recorded his ad, and whether or not I've recorded my ad because               |
| 17:51      | we like to share all of the duties when it comes to automators.                                      |
| 17:55      | Yeah.                                                                                                |
| 17:56      | And that is good information to display, but it also is useful data for some of the other            |
| 18:05      | fields we talk about.                                                                                |
| 18:06      | And we're going to get into the way we use that data right after this.                               |
| 18:12      | This episode of Automators is brought to you by our awesome friends at Luna Display.                 |
| 18:16      | They are the makers of the only hardware solution that turns your iPad into a wireless display       |
| 18:20      | for your Mac.                                                                                        |
| 18:21      | That means you'll have a second display that's super portable with basically zero lag and            |
| 18:25      | gorgeous image quality.                                                                              |
| 18:27      | I was on a plane last weekend, and I'm probably going to be on planes again this weekend,            |
| 18:31      | but last weekend it was great.                                                                       |
| 18:32      | The seat next to me was free, so I got out my MacBook Air.                                           |
| 18:35      | I folded down the tray table in the middle.                                                          |
| 18:37      | I let the person on the other side have the other half of the tray table, as you do, but             |
| 18:41      | I could use my iPad with Luna Display.                                                               |
| 18:43      | And I'm pretty certain that the guy sat on the other side, his eyes were like popping                |
| 18:47      | out of his head because I was moving things between my iPad and my Mac screen, and then              |
| 18:52      | I was touching things on my iPad screen and using everything everywhere.                             |
| 18:55      | I just had this whole extra 11 inches of display, which doesn't sound like much, but that's          |
| 18:59      | sometimes all you need to make your life easier.                                                     |
| 19:03      | Setting up extra screens can be fiddly, but with Luna Display it couldn't be easier.                 |
| 19:07      | Just plug a small bit of hardware into your Mac and you're good to go.                               |
| 19:10      | Plus, everything works over WiFi.                                                                    |
| 19:13      | But you're a busy person, so you might be travelling without a WiFi connection, just                 |
| 19:16      | like I was on that plane.                                                                            |
| 19:18      | Don't worry.                                                                                         |
| 19:19      | Just connect with USB.                                                                               |
| 19:21      | It's super simple to get set up and you'll love that extra screen real estate.                       |
| 19:25      | Luna Display is a complete extension to your Mac.                                                    |
| 19:28      | It supports external keyboards as well as Apple Pencil and touch interactions.                       |
| 19:32      | It basically turns your Mac into a touchscreen device.                                               |
| 19:35      | And the all new liquid video engine brings a significantly reduced latency and a faster              |
| 19:40      | screen refresh rate.                                                                                 |
| 19:43      | Listeners of Automators can get an exclusive 10% discount on Luna Display.                           |
| 19:47      | Just go to lunadisplay.com and enter the promo code AUTOMATORS at checkout.                          |
| 19:52      | That's lunadisplay.com and promo code AUTOMATORS at checkout.                                        |
| 19:57      | Go there now, upgrade your setup.                                                                    |
| 19:59      | You're going to love it.                                                                             |
| 20:00      | LunaDisplay.com promo code AUTOMATORS and get 10% off.                                               |
| 20:06      | So one of the things I really like about our general status view is that we're adding this           |
| 20:11      | data.                                                                                                |
| 20:12      | You know, did I record my ad, for instance?                                                          |
| 20:14      | But the thing that's cool about it is that because our table is a database in addition               |
| 20:19      | to being a spreadsheet, it pulls that data and uses it in other places.                              |
| 20:24      | And one of the, I guess, tabs or sheets that we use is in addition to the show status is             |
| 20:31      | open items.                                                                                          |
| 20:33      | And this is a great place to go for someone who makes a podcast.                                     |
| 20:37      | Usually it's got my name on it, more than Roses, to be honest.                                       |
| 20:40      | It depends.                                                                                          |
| 20:41      | So open items, the idea is that it will look at that data to make sure for, like, if the             |
| 20:47      | show is recorded, Sparky's ad, and if not, then it shows us an open item for me.                     |
| 20:53      | Yeah.                                                                                                |
| 20:54      | Yeah.                                                                                                |
| 20:55      | And we can also put other tasks in here as well, which is really useful.                             |
| 20:57      | So for example, just after we record this, I'm going to send out a meet up regarding the              |
| 21:01      | Orange County, an email regarding the Orange County meet up just to make sure everybody               |
| 21:05      | knows when it is and where it is.                                                                    |
| 21:07      | Because we hadn't confirmed the time and date until today, you may well receive this before          |
| 21:12      | the podcast goes out due to the magic of time travel.                                                |
| 21:16      | But it's good to be able to just do this and keep on top of things.                                  |
| 21:20      | Though, I have to say, when we get collaborative tasks in OmniFocus, some of the tasks may disappear |
| 21:27      | from here and just magically appear in your OmniFocus, David.                                        |
| 21:30      | Yeah.                                                                                                |
| 21:31      | Well, that would make sense.                                                                         |
| 21:32      | And having fewer places ago would be an improvement.                                                 |
| 21:35      | But it is nice that this is here and is dynamically generated.                                       |
| 21:41      | That's the thing I like about it, is you don't have to go and manually add it.                       |
| 21:44      | Once we set this up, we automated it.                                                                |
| 21:46      | So whether or not the ad is done, creates the event or other things, I mean, we can                  |
| 21:52      | manually add to this list, but much of this stuff just shows up automatically.                       |
| 21:56      | And that's great.                                                                                    |
| 21:57      | Yeah.                                                                                                |
| 21:58      | Yeah.                                                                                                |
| 21:59      | And again, there's Zap here.                                                                         |
| 22:00      | I'm involved to do a lot of this.                                                                    |
| 22:01      | So we'll explain that in a bit.                                                                      |
| 22:03      | And there's constant questions when you're working with a partner on a project, that                 |
| 22:07      | things just come up.                                                                                 |
| 22:08      | I mean, as we were planning the shirt thing, we used that field quite a bit as we planned            |
| 22:12      | that.                                                                                                |
| 22:13      | And right now, we've got all these meetups.                                                          |
| 22:14      | So that's taken up a bunch of space in the open items.                                               |
| 22:17      | But it's a great way to work together.                                                               |
| 22:20      | And obviously, not everybody out there is making a nerdy podcast.                                    |
| 22:25      | But I would like to think that the stuff we're talking about here and the way we're using            |
| 22:27      | this could be applied in a lot of contexts.                                                          |
| 22:30      | Yes.                                                                                                 |
| 22:31      | And I'm very sure it can be.                                                                         |
| 22:33      | And of course, you don't have to necessarily stay completely on topic.                               |
| 22:36      | I did have an open item in here earlier, which was to ask David about Disney tickets because         |
| 22:41      | I'm going to go and visit him and sleep on this very comfortable sofa bed or so I've                 |
| 22:44      | been promised just before dubbed up.                                                                 |
| 22:46      | So I get to go visit the real Disney.                                                                |
| 22:48      | I'm taking Rose to the original.                                                                     |
| 22:50      | Yeah.                                                                                                |
| 22:51      | And I'm super excited.                                                                               |
| 22:53      | Yeah.                                                                                                |
| 22:54      | No pressure, but if you don't like it, that's going to change our relationship.                      |
| 22:59      | The thing is, is I'm very, very, very excited, so I think I'm just going to like it anyway.          |
| 23:06      | I talked earlier about the guest database, but that's something else that we use quite               |
| 23:11      | often.                                                                                               |
| 23:12      | And not everybody that gets on the list eventually becomes a guest, but it's a nice way to keep      |
| 23:17      | track of all that stuff as it comes in.                                                              |
| 23:20      | And once again, it's just an easy location and convenient to both hosts.                             |
| 23:26      | The collaboration stuff, I probably am going to say this too much today, but I have never            |
| 23:31      | really had a reliable collaboration database experience.                                             |
| 23:37      | Mac Power users for since almost the beginning has run on a Google Sheet, which has been             |
| 23:42      | great, but it just doesn't have the same power behind it that the Sarah Table does.                  |
| 23:48      | And it is quite an improvement.                                                                      |
| 23:51      | It is, yes.                                                                                          |
| 23:52      | And it's also great because, for example, I mean, we'll get to the host overview table               |
| 23:56      | in a moment, but for example, in the guests, we have a contact person.                               |
| 24:00      | So it doesn't mean that, for example, only I can get in contact with [[Tim Nahumck]] from the              |
| 24:06      | last episode on [[Drafts]], but it means that, for example, I was the person that reached                |
| 24:10      | out to Tim and got him on the episode for that one.                                                  |
| 24:13      | So I'm perhaps the primary contact person, which means that if we ever get in, are in                |
| 24:17      | doubt about, oh, right, wait, I don't think I've got this person's email address.                    |
| 24:22      | Well, I know who does because it's definitely Rose that organised the episode.                       |
| 24:27      | So it does help us out to keep on top of this.                                                       |
| 24:31      | Yeah.                                                                                                |
| 24:32      | And just let's talk about the host overview in general.                                              |
| 24:35      | How did we create that?                                                                              |
| 24:36      | So [[Airtable]] actually has something built in called collaborators, which are all the people           |
| 24:41      | associated with an [[Airtable]] base.                                                                    |
| 24:44      | However, there is one small problem with this, and that is via the API, you can't get a list         |
| 24:50      | of the collaborators and the IDs.                                                                    |
| 24:52      | Now there are open requests for this on the [[Airtable]] forums, and I'm very sure they're               |
| 24:56      | going to add it at some point, but right now it's not there.                                         |
| 25:01      | So to make it a little bit easier for scripting purposes, I just added a host overview table         |
| 25:07      | where we've got each of our names, and then this references everything else in all of                |
| 25:13      | the other tables.                                                                                    |
| 25:14      | So for example, I can see where the open items, what items are assigned to me versus what            |
| 25:19      | items are assigned to David, from the show planning table, which episode to mine and                 |
| 25:23      | which episode to David's, guests who belongs to me, air quotes there because I don't think           |
| 25:30      | [[Matthew Cassinelli]] really belongs to me, but I helped organise the episode with him, and             |
| 25:37      | things like that.                                                                                    |
| 25:38      | And it's just great for just keeping on top of everything so that we can do that.                    |
| 25:42      | Though the ads to record and things like that don't go in here, they specifically go into            |
| 25:47      | open items.                                                                                          |
| 25:49      | And then the other thing we do is we also track the show accounting, because while the show          |
| 25:56      | isn't particularly expensive to produce, we just have little items.                                  |
| 26:00      | I bought some stickers for Rose, and we're going to have to account for t-shirts and                 |
| 26:06      | just the different things that we have between us, the domain name.                                  |
| 26:10      | And then we keep track of the money, so next time Rose and I have to balance out the expenses,       |
| 26:17      | you both know exactly what they are.                                                                 |
| 26:19      | Yeah.                                                                                                |
| 26:20      | And it's just generally helpful for keeping on top of things and knowing, for example,               |
| 26:25      | forum hosting is very cheap, but knowing that at the moment I'm paying for that, so that             |
| 26:29      | if David buys stickers and that works out to a year of forum hosting, then actually,                 |
| 26:34      | I probably owe David some money versus him owing me money.                                          |
| 26:37      | Not that we're making a big thing of it because none of this stuff is expensive at all.              |
| 26:42      | But it's just a good idea because I don't know about you, David, but I always find that              |
| 26:46      | money can create bad feelings between friends very quickly if you don't know what's going            |
| 26:50      | on.                                                                                                  |
| 26:51      | So I'd much rather stay on top of it because I want to be on your good side.                         |
| 26:54      | That's never been a thing for me, but I've never really dealt with enough money to make              |
| 27:00      | it matter, I guess.                                                                                  |
| 27:01      | That's a very good point.                                                                            |
| 27:03      | Sometimes it can just be like, oh, I let that person 20 and they didn't give it back.                |
| 27:08      | Well, maybe that was a good 20 to get rid of that person, but on the other hand, it may              |
| 27:12      | cause a rift between friends for life.                                                               |
| 27:14      | My fear is always with people that I'm going to screw it up somehow and make them mad.               |
| 27:18      | You know what I mean?                                                                                |
| 27:19      | Like I'm going to miss something.                                                                    |
| 27:20      | You know what I mean, right?                                                                         |
| 27:22      | Yeah, I do know what you mean.                                                                       |
| 27:24      | Yeah.                                                                                                |
| 27:25      | It's like I always get nervous.                                                                      |
| 27:26      | Like usually when we go out with friends, there's only two ways I do the check.                      |
| 27:30      | Either we either split it or I just pay it because I don't want, whenever they get the               |
| 27:34      | calculators out, I just get nervous.                                                                 |
| 27:36      | It's like, oh, they're going to think I'm screwing them somehow.                                     |
| 27:39      | Yeah.                                                                                                |
| 27:40      | Yeah.                                                                                                |
| 27:41      | I know what you mean.                                                                                |
| 27:42      | And I mean, thankfully we're both very easygoing, which makes all this easier, but also being        |
| 27:47      | super organised about everything also makes life much easier.                                        |
| 27:51      | Yeah.                                                                                                |
| 27:52      | Yeah.                                                                                                |
| 27:53      | But so putting in accounting, she made a lot of sense.                                               |
| 27:54      | And really the fact is we run this whole show from a single air table that granted we                |
| 27:59      | use quip to actually make the show content.                                                          |
| 28:04      | But I mean, all of the administration of the show is done through the single air table               |
| 28:07      | database.                                                                                            |
| 28:08      | And that didn't just happen overnight.                                                               |
| 28:10      | They took us some time to develop it and it was kind of almost like a software project.              |
| 28:14      | We would add features.                                                                               |
| 28:15      | Usually the smartest features came from Rose, which shouldn't surprise anybody.                      |
| 28:19      | I'd say it was an equal split of who added which one specifically.                                   |
| 28:27      | But I did have a little more experience, I think, with this when I started.                          |
| 28:30      | So I added things like some of the formula columns, which automatically, if there's an               |
| 28:34      | episode number, it automatically puts the episode number, colon, and then the show title, forest,    |
| 28:39      | which also means that our episodes happen to be ordered, otherwise they're all alphabetically.       |
| 28:44      | Which makes sense.                                                                                   |
| 28:45      | Yeah.                                                                                                |
| 28:46      | It's nice.                                                                                           |
| 28:48      | And it's honestly a work in progress too.                                                            |
| 28:50      | I feel like we're still finding things to change about it and fix with it as we go forward.          |
| 28:56      | But it's been a really satisfying experience.                                                        |
| 29:01      | I'd heard about air table for years and this and a couple of the projects over the last              |
| 29:05      | six months have got me much more into it.                                                            |
| 29:08      | And you what else got me into air table was when I finally bit the bullet and started                |
| 29:12      | paying for Zapier.                                                                                   |
| 29:14      | And I knew there was so much air table integration with Zapier that I just went for it.              |
| 29:22      | You want to talk about automation a little bit?                                                      |
| 29:24      | Yeah.                                                                                                |
| 29:25      | So I mean, one of the things that we do is Zapier is watching air table.                             |
| 29:30      | Now one thing that you do need to be aware of if you are using Zapier with air table                 |
| 29:35      | is Zapier will trigger on a row in air table once.                                                   |
| 29:38      | And that's across all your Zaps.                                                                     |
| 29:40      | Basically, it's trying to avoid data collision, which is a very smart way to do it.                  |
| 29:44      | This does mean, unfortunately, you may run into some weird cases where you've triggered              |
| 29:50      | one Zap with a row and then it won't automatically trigger with that again.                          |
| 29:55      | But for automators, that's never a problem, thankfully.                                              |
| 29:59      | So what we do is whenever a show goes into planning or scheduled and it does not have                |
| 30:07      | a show outline.                                                                                      |
| 30:09      | So we have a special view set up for this, which I don't think David or I ever looked                |
| 30:12      | at is, and it's called create quip documents and we're very literal with the naming because          |
| 30:18      | whenever something appears here, Zapier is watching that and it goes, oh, I need to make             |
| 30:23      | a quip document.                                                                                     |
| 30:24      | And it does exactly that.                                                                            |
| 30:26      | It makes a quip document for us.                                                                     |
| 30:28      | It shares it with David and myself and it tries to put it in the automators folder.                  |
| 30:31      | There was a bug the other day where it didn't make it into the automators folder, which              |
| 30:34      | I still need to investigate, I have to say.                                                          |
| 30:37      | But then it takes everything out of the notes column and it sticks that in the document              |
| 30:43      | and it adds our header for us and it figures it out based on who's in the responsible column         |
| 30:49      | as to whether or not it should, the header information should say, hello, I'm David                  |
| 30:53      | Sparks or hello, I'm Rosemary Orchard, so that we always say the right thing.                        |
| 30:58      | And it takes me.                                                                                     |
| 30:59      | It sucks when I say hello, I'm Rosemary Orchard.                                                     |
| 31:01      | It really does.                                                                                      |
| 31:02      | I know it does.                                                                                      |
| 31:03      | And it sounds so weird.                                                                              |
| 31:04      | You need to stop doing that.                                                                         |
| 31:05      | The accent's all wrong.                                                                              |
| 31:07      | I know.                                                                                              |
| 31:09      | And then it takes the recording date and the release date and puts that in there as well.            |
| 31:13      | And it adds a couple of other headers, like which of our sponsors are our sponsors for               |
| 31:17      | the day and things like that, so that we've got all of the information ready.                        |
| 31:23      | And then it takes the link to that quip document and it puts it back into automators, the air        |
| 31:30      | table base for us, so that we can just click.                                                        |
| 31:34      | And this doesn't necessarily happen instantly, but it happens very quickly.                          |
| 31:39      | And that's all that counts.                                                                          |
| 31:40      | So it's a very useful tool, I have to say.                                                           |
| 31:44      | And that's just one zap.                                                                             |
| 31:45      | Yeah.                                                                                                |
| 31:46      | And it's just a good player.                                                                         |
| 31:48      | If you're looking for cloud-based solutions, it's a good player and that it collaborates             |
| 31:53      | with everything.                                                                                     |
| 31:54      | I mean, using Zapier, I've got connections between base camp and air table and billing               |
| 32:01      | systems and it all ties together really nicely.                                                      |
| 32:05      | And that's one of the things I like about it.                                                        |
| 32:08      | I mean, I keep saying it, but if you work with more than one person on a set of data,                |
| 32:14      | this is a tool you should at least spend a little time playing with to see if this scratches         |
| 32:19      | the itch for you because it is just so good at that collaboration.                                   |
| 32:24      | It really, really is.                                                                                |
| 32:26      | And I have to say, this is obviously considerably better than our previous solution with Apple       |
| 32:31      | Notes, but I can't think of a tool better suited to managing a podcast than air table.               |
| 32:38      | I mean, there probably are tools, but for managing a collaborative podcast the way                   |
| 32:42      | we do, especially I use shortcuts to add ideas all the time.                                         |
| 32:47      | And just being able to do that is perfect.                                                           |
| 32:50      | Yeah.                                                                                                |
| 32:51      | And I actually just go in because they have an app for the iPhone and the iPad.                      |
| 32:56      | So if something occurs to me, I'll just go in and add it.                                            |
| 32:59      | So I probably should do a shortcut because if I had any complaints about it, air table               |
| 33:04      | in general, I feel like the iOS implementation isn't perfect.                                        |
| 33:08      | It could be better.                                                                                  |
| 33:10      | I really don't like the cell formatting stuff you do and the iOS app.                                |
| 33:14      | I mean, if you open a cell or open it, it gives you all the various elements of it that              |
| 33:22      | you can go through and tick off, but it's not, it could be done a lot better, I think.               |
| 33:28      | Yes, it could.                                                                                       |
| 33:29      | And also, so one of the things we haven't covered yet at all are views.                              |
| 33:35      | And so as well as a basic table layout, Zapia, sorry, Zapia air table can also do things           |
| 33:43      | like a calendar view and a [[Kanban]] view and all sorts of these things.                                |
| 33:47      | So for example, we have a calendar, we've got two calendar views, we've got a calendar               |
| 33:51      | view for recording and then we've got a calendar view for release when we can see when things        |
| 33:57      | are actually due to be released so that we can make sure that we're recording ahead of               |
| 34:01      | time because otherwise trying to edit it last minute is not fun as our editor, I'm sure              |
| 34:07      | would tell you, he has done it before and he's wizard, but let's try and avoid that.                 |
| 34:12      | And so we can do that.                                                                               |
| 34:14      | And the great thing about the calendar views, and this is something we'll get to in the              |
| 34:17      | further use cases, is you can subscribe to these in iCloud Calendar or in Google Calendar,           |
| 34:23      | which means that you can trigger even more automations with them.                                    |
| 34:26      | Yeah, or I mean, not only can you trigger automations with them, you can also just automatically     |
| 34:33      | update your own calendar with the data out of the out of the database.                               |
| 34:36      | I mean, there's two really two levels of automation you get through the calendar view.               |
| 34:40      | Yeah.                                                                                                |
| 34:41      | And I have to say, I'm not, we're not subscribed or at least I'm not subscribed to either of         |
| 34:46      | the calendars for air table because we actually have one single shared calendar between David        |
| 34:52      | and myself, where we put all the recording and the releases and we've titled the releases            |
| 34:58      | so we know whose release belongs to who, et cetera, et cetera, which I have to say works             |
| 35:04      | very well, especially we have time zones involved and anybody who's worked with time zones knows     |
| 35:11      | that they're not easy and it's much easier to just let Apple handle that for us, I have              |
| 35:16      | to say.                                                                                              |
| 35:17      | Hey, how do you handle time zones in general, because I feel like you probably have to deal          |
| 35:20      | with them more than most people.                                                                     |
| 35:22      | I mean, in Vienna, you're a bit on an island in our little nerd community.                           |
| 35:26      | I am a bit.                                                                                          |
| 35:27      | The [[Federico Viticci]] is on the same time zone as me, and [[Myke Hurley]] is only one hour behind,         |
| 35:32      | which, you know, I'm not completely on my, but I use this great app called CalZones by               |
| 35:38      | underscore David Smith, and he's made a bunch of great applications, pedometer, plus, plus,          |
| 35:43      | sweet, plus, plus, activity, plus, plus, you can tell that there's a theme with his apps.            |
| 35:49      | But CalZones, aside from having a fabulous name, is a really, really good calendar for               |
| 35:55      | time zones.                                                                                          |
| 35:56      | So when I'm scheduling something, it's got a horizontal time picker, and that means that             |
| 36:02      | I can see the time that the event would be in my time zone, but I can also see, and I've             |
| 36:07      | given certain time zones names.                                                                      |
| 36:09      | So I have San Jose, and it's been renamed to David because you are in the San Francisco              |
| 36:17      | time zone, at least usually, unless you're traveling.                                                |
| 36:21      | And for example, [[Stephen Hackett]] is in central time zone, so I've renamed central to Stephen         |
| 36:25      | Hackett and things like that, which means that if I'm trying to schedule something,                  |
| 36:28      | I can immediately see, not just for me, but for everybody else involved, what time zones             |
| 36:33      | are there?                                                                                           |
| 36:34      | Which means that if I'm trying to schedule something with, say, my co-author, Brian,                 |
| 36:36      | who lives in Japan, you know, I can see, well, you know, he's X many hours ahead of me.              |
| 36:41      | So this, well, this would be, you know, like six o'clock his time, and that's a pretty               |
| 36:44      | good time to try and talk to him versus, you know, like, two o'clock in the afternoon                |
| 36:48      | when he's at work.                                                                                   |
| 36:50      | So yeah, I use CalZones for that, basically, and nothing else.                                       |
| 36:54      | Yeah, I've given my individual names to it, like, Vienna is Rose for me, but it's funny              |
| 37:01      | how Vienna has, on all my systems, Vienna, I'm always aware of what time it is in Vienna.            |
| 37:07      | In Fantastical, they have a cool feature where you can put on the right side of this,              |
| 37:14      | the calendar day, you know, on the left side, it's your time on the right side of some other         |
| 37:18      | time zone.                                                                                           |
| 37:19      | I always use Vienna for that as well.                                                                |
| 37:20      | I'm just freaked out.                                                                                |
| 37:21      | I'm going to, and I know that you use do not disturb and everything, but I'm freaked out.            |
| 37:25      | I'm going to like send you a text and it's going to be 3am or something and wake you                 |
| 37:29      | up.                                                                                                  |
| 37:30      | So.                                                                                                  |
| 37:31      | Well, there's good news.                                                                             |
| 37:32      | A, I always use do not to serve, and B, I'm a heavy sleeper, so one text message will                |
| 37:35      | not wake me up, but you'll be very pleased to hear that you're on the right side of my               |
| 37:39      | Fantastical as well.                                                                               |
| 37:40      | All right.                                                                                           |
| 37:41      | All right.                                                                                           |
| 37:42      | Yes.                                                                                                 |
| 37:43      | So, back to air table.                                                                               |
| 37:45      | Yes.                                                                                                 |
| 37:46      | Yes.                                                                                                 |
| 37:47      | Sorry.                                                                                               |
| 37:48      | A little side check there.                                                                           |
| 37:49      | Yeah.                                                                                                |
| 37:50      | That's okay.                                                                                         |
| 37:51      | So, yes.                                                                                             |
| 37:52      | So, we were talking about Zapier and some of the actions that we do.                                 |
| 37:57      | And David mentioned earlier, we've got this great table called open items in our automated           |
| 38:02      | space.                                                                                               |
| 38:03      | And this is something that I deal with with Zapier, so it checks once a day to make sure             |
| 38:10      | that we don't have any outstanding ads, and I do this once a day because I don't want                |
| 38:15      | to add a stupid number of tasks to our open items because I haven't programmed this very             |
| 38:24      | intelligently at all, but essentially what I do is I'm using Zapier.                                 |
| 38:29      | And I mentioned before that an air table, Zapier can only trigger once on an air table               |
| 38:35      | record.                                                                                              |
| 38:36      | However, there is also the ability to find a record with Zapier, which means that every              |
| 38:42      | day, 4 p.m. my time, which is 7 a.m. your time, I believe, it goes and it checks and                 |
| 38:51      | it goes, hmm, okay.                                                                                  |
| 38:52      | So I'm going to check on the Automator's Table, and I'm specifically going to check                  |
| 38:56      | on show planning.                                                                                    |
| 38:58      | This is the wrong Automator's Table.                                                                 |
| 38:59      | Sorry, I'm just modifying my Zap as I come out of Sprocket, which is always a good idea.             |
| 39:08      | And so it checks and it looks for anything that has been recorded, where we haven't recorded         |
| 39:13      | the ads.                                                                                             |
| 39:14      | So, for example, if we are talking to a listener or somebody we're interviewing for the show,        |
| 39:21      | we're not going to necessarily record the adverts, right, when we do the show, we want               |
| 39:26      | to do them afterwards because we want to make sure that our attention is not split to give           |
| 39:30      | everybody the experience that they're truly expecting.                                               |
| 39:34      | And so we can search and we can find things and you can limit things to a specific view.             |
| 39:39      | And so we've actually got a view called Outstanding Ads.                                             |
| 39:43      | And then what it does is it checks if there's anything in Outstanding Ads and it will just           |
| 39:48      | punt this into the open items for us, meaning that if I have not recorded an ad from Attic           |
| 39:55      | Music, then it's going to tell me to do that, which I think is pretty useful to have.                |
| 40:01      | Yeah.                                                                                                |
| 40:02      | And just imagine whatever it is you're doing for work, whether it's getting your quarterly           |
| 40:06      | reports done or whatnot, tying individual responsible persons to outstanding items with              |
| 40:13      | a collaborative database is actually pretty powerful.                                                |
| 40:17      | And it's a project management solution.                                                              |
| 40:21      | It's a database management solution.                                                                 |
| 40:24      | I'm really impressed with [[Airtable]].                                                                  |
| 40:26      | Yeah, me too.                                                                                        |
| 40:28      | I absolutely am.                                                                                     |
| 40:29      | Because there's so many things you can do with it.                                                   |
| 40:30      | So for example, if you're looking, if you use Zapier to look for a record, then it can               |
| 40:38      | create a record if it doesn't find it and that's just built in.                                      |
| 40:41      | And it's a very well-documented API.                                                                 |
| 40:45      | So every time you create a base in [[Airtable]] and you create a table in that base, if you              |
| 40:50      | add one record, okay, you just have to add one sample record and you can fill it with,               |
| 40:55      | I don't know, chocolate as your keyword or all the way across if that's what you want                |
| 41:00      | to do.                                                                                               |
| 41:01      | You can then go to the [[Airtable]] API and they generate documentation for your specific [[Airtable]]       |
| 41:10      | for you so that you can learn how to use this.                                                       |
| 41:13      | And it's really easy to use in shortcuts.                                                            |
| 41:17      | It could be easier to use, I will give it that, but it's very well-documented, making                |
| 41:21      | it much easier to get a hold of all of this information that you need.                               |
| 41:27      | Yeah, tell me a little bit about your three shortcuts you're using with [[Airtable]].                    |
| 41:32      | How'd you build them and what are you using?                                                         |
| 41:33      | And I think I need to create a set.                                                                  |
| 41:35      | Well, I mean, to start with, you need an API key, which you can get in your account information      |
| 41:41      | in [[Airtable]].                                                                                         |
| 41:42      | And then what I do is it depends on which [[Airtable]] I'm interacting with.                             |
| 41:49      | So I've got quite a few different Airtables.                                                         |
| 41:52      | But let's say that I'm interacting with show planning and I want to add my idea as a show.           |
| 41:56      | So the first thing I need is I'm going to need the title and then I will optionally                  |
| 42:00      | add any notes to this title and notes can be empty, that's not your problem.                         |
| 42:06      | And then you have a URL and you do a get contents of URL.                                            |
| 42:11      | And then you need to change this to the advanced one and it will be a post.                          |
| 42:16      | And so you authenticate against the API and then you post it data and everything is in               |
| 42:22      | a dictionary called fields and you put the data in there.                                            |
| 42:25      | And this is something where you're going to need to look at the documentation for your               |
| 42:29      | specific [[Airtable]] base because otherwise whatever I say is going to be wrong, it's not going         |
| 42:34      | to match up with anybody else's information.                                                         |
| 42:36      | But yeah, so you look at that.                                                                       |
| 42:39      | And there are certain fields that you need for that and certain fields are optional.                 |
| 42:44      | And so for show planning, we have to fill out the title.                                             |
| 42:48      | And I always set that to an idea as well.                                                            |
| 42:51      | And then I add the notes if there are any notes and that's it.                                       |
| 42:57      | And I just do that and then it's done.                                                               |
| 43:00      | So Siri Shortcuts, it's basically text collection, user input and then an API call.                  |
| 43:07      | And that's probably the tricky part is just getting the API call set up right.                       |
| 43:10      | That is the tricky part.                                                                             |
| 43:11      | I will also note that I've done a little enhancement because usually when I have one idea, I have    |
| 43:17      | several other ideas.                                                                                 |
| 43:20      | And so what I do is in my get idea, after this, I split on new lines and I will share                |
| 43:28      | a sample one with a sample [[Airtable]] for the show notes.                                              |
| 43:34      | And I split and repeat with each, which means that then for each of these titles, I can              |
| 43:39      | add any notes that I want.                                                                           |
| 43:41      | And so if I come up with five ideas at once, I can just scribble them all down quickly.              |
| 43:46      | She says, making a typing motion with her thumbs in midair, which probably looks very weird          |
| 43:50      | if anyone were watching me, but thankfully this is audio, not video.                                 |
| 43:56      | And then these pop up and then they come back at me, giving me an option, the time to think          |
| 44:02      | about them and add any notes I thought of and things like that, and then they get pushed             |
| 44:07      | up to [[Airtable]].                                                                                      |
| 44:08      | I'm super curious.                                                                                   |
| 44:09      | I'm going to try it.                                                                                 |
| 44:10      | I'm curious about how much faster it is than just going into the app and adding them manually,       |
| 44:15      | I guess.                                                                                             |
| 44:16      | For me, it's quite a bit faster just because the way the [[Airtable]] app works, and I actually          |
| 44:23      | left my phone somewhere for this episode, I'm not quite sure where it's, so I'm doing                |
| 44:27      | everything off the top of my head as far as shortcuts goes.                                          |
| 44:32      | When you open the app, you've got to navigate to the right base, which may or may not be             |
| 44:36      | the one that you're currently in.                                                                    |
| 44:37      | Then you have to open the right table in the right base, and then you have to press the              |
| 44:40      | plus button, and then it pops up a modal and you have to fill out the information.                   |
| 44:46      | And then you have to scroll to the bottom and then click OK.                                         |
| 44:49      | And that modal is what I was talking about earlier, that I'm not really happy with the               |
| 44:52      | way.                                                                                                 |
| 44:53      | I feel like that could be done better.                                                               |
| 44:54      | Yes.                                                                                                 |
| 44:55      | I think it could be as well, but this is where shortcuts and actually [[Drafts]] can come in             |
| 45:00      | really handy because [[Drafts]], of course, is very scriptable, as we know from the last                 |
| 45:04      | episode with Tim.                                                                                    |
| 45:06      | And you can do all sorts of things, including post a bunch of data to [[Airtable]], and you              |
| 45:11      | can get data back from [[Airtable]] with the API, which means that you can do things like start          |
| 45:16      | writing plot posts, spatial ideas that are stored in your [[Airtable]].                                  |
| 45:20      | And then you could also, like this would be a good one in Siri Shortcuts, once you've                |
| 45:24      | got the API sorted out, you could pre-populate a bunch of them, like if you had different            |
| 45:29      | types of work things you do all the time, you just duplicate the script once you get                 |
| 45:33      | it.                                                                                                  |
| 45:34      | And then Siri Shortcuts has the ability to run Siri Shortcuts.                                       |
| 45:38      | So you make kind of a menu shortcut, a select from list shortcut, and just put five or ten           |
| 45:45      | of these things in there.                                                                            |
| 45:46      | So all you're doing is the minimal amount of data entry because all the standard fields              |
| 45:52      | you fill out already and just make a different version of the shortcut for each of the standard      |
| 45:57      | ways you're going to fill it out.                                                                    |
| 46:00      | I do that with OmniFocus in box items, there's no reason I couldn't do that with [[Airtable]]            |
| 46:04      | as well.                                                                                             |
| 46:05      | All right, I'm going to get an API key, I'm going to do it, I'm going to get that set                |
| 46:08      | up.                                                                                                  |
| 46:09      | And the great thing about [[Airtable]] is you have one API key for all of your bases, including          |
| 46:14      | bases that other people have shared with you, which means that you don't need to have tons           |
| 46:18      | of different authentication information.                                                             |
| 46:20      | And I will make a little video about interacting with [[Airtable]] through Shortcuts for our listeners   |
| 46:26      | because I think that this is something that people are definitely going to benefit from              |
| 46:32      | because it's a very easy way to get data into a trusted system which you can then reorganise         |
| 46:37      | and that doesn't need to be a task management system, it can be any kind of system, it could         |
| 46:42      | be your someday maybe list.                                                                          |
| 46:44      | Well, I want to talk about other ways we're using [[Airtable]], but before we do that, I want            |
| 46:49      | to take a minute to talk about our next sponsor.                                                     |
| 46:52      | And that's our friends over at Backblaze.                                                            |
| 46:54      | This episode of The Automators is brought to you by Backblaze, the unlimited cloud backup            |
| 47:00      | for Macs and PCs that starts at just $6 a month.                                                     |
| 47:04      | Now, backup is important.                                                                            |
| 47:06      | I mean, we talk about it on Mac Power Use All Time, we also talk about it here on Automators.        |
| 47:10      | It's something that you have to have.                                                                |
| 47:13      | I mean, if you're spending all your time automating your Mac, what is your backup solution?          |
| 47:18      | And I don't believe that one backup is enough.                                                       |
| 47:21      | And honestly, I don't even think two backups is enough if they're in the same location.              |
| 47:26      | If you've got, you know, a backup in your closet and a backup on your desk and your                  |
| 47:30      | house burns down, guess what, you don't have any backups.                                            |
| 47:34      | So I've always believed strongly in off-site backups and Backblaze is the service that I             |
| 47:39      | use.                                                                                                 |
| 47:40      | I've been a customer of theirs for, I don't know, five or six years now.                             |
| 47:44      | They backup my Mac and it's great for just $6 a month, it's unlimited.                               |
| 47:49      | So not only, and I'm one that they lose money on, let's be honest, I hope they're not listening      |
| 47:54      | to this, but I'm bad for them, you know.                                                             |
| 47:57      | I've got my iMac with two terabytes of storage plus an attached drive with another five terabytes    |
| 48:05      | of storage that's attached to it all the time.                                                       |
| 48:07      | But you know, Backblaze doesn't care, they back all that up for me.                                  |
| 48:10      | I've got seven terabytes in their cloud and I just love having it there because if my                |
| 48:15      | house burns down, if someone breaks in and steals my computer and the backup drive, I'm              |
| 48:19      | good, I can get it back from them.                                                                   |
| 48:22      | They've got some great services that I really love.                                                  |
| 48:25      | First of all, you can get a free 15-day trial.                                                       |
| 48:28      | There's no credit card required.                                                                     |
| 48:30      | Just go to backblaze.com/automators and get yourself started.                                  |
| 48:34      | But they, you know, a couple of things I like, they backup everything, documents, music,             |
| 48:38      | photos, videos, drawings, everything that's important to you gets backed up.                         |
| 48:42      | Now if you need access to the files, in addition to having a great backup, they've got a cool        |
| 48:48      | iOS app that allows you to get access to those files.                                                |
| 48:51      | I was in Hawaii once on vacation and I desperately needed a file that was on my archive drive        |
| 48:57      | attached to my iMac at home.                                                                         |
| 48:59      | [[VPN]] wasn't working, I couldn't figure out why.                                                       |
| 49:03      | I was pulling my hair out and then I realised, oh, wait a second, Backblaze.                         |
| 49:06      | So I just wanted my Backblaze app downloaded the file, I was good to go.                             |
| 49:10      | They have backed up over 750 petabytes.                                                              |
| 49:14      | That's the equivalent of 750 million gigabytes.                                                      |
| 49:17      | I looked it up because I didn't know what that meant.                                                |
| 49:20      | If you've got a data disaster, one of the things to do, you don't have to download everything        |
| 49:24      | over the internet if you lose your drive, they'll ship you a hard drive with all your                |
| 49:28      | data on it.                                                                                          |
| 49:29      | And once you've restored it, you can send the hard drive back to them for a full refund.             |
| 49:34      | They've just solved this problem, gang, and it's like I said, $6 a month, why are you                |
| 49:39      | even thinking about it?                                                                              |
| 49:40      | They've restored over 35 billion files, that's a lot of saved projects.                              |
| 49:46      | It just gives you peace of mind.                                                                     |
| 49:47      | One of the ways I use Backblaze in addition to my own account is when my daughter went               |
| 49:51      | off to college, I knew she was never going to plug her laptop into a hard drive.                     |
| 49:57      | We have a backup drive for her.                                                                      |
| 49:59      | I just don't think she's going to be good at doing that.                                             |
| 50:01      | So I just installed Backblaze and bought her an account before she left and it's great               |
| 50:06      | knowing that all of her data is getting backed up.                                                   |
| 50:08      | I haven't heard about it yet, but you know, there's going to be the day when her paper               |
| 50:12      | gets fried or something goes wrong and she's going to call me in a panic and I'm going               |
| 50:17      | to be able to be a hero.                                                                             |
| 50:19      | Hero dad, you don't get to do that very often, but Backblaze helps you out.                          |
| 50:22      | Anyway, avoid that looming data disaster, go to backblaze.com/automators for your              |
| 50:28      | unrestricted free trial and let them know you heard about it here on the automators.                 |
| 50:33      | We really appreciate that.                                                                           |
| 50:34      | It helps us keep the lights on.                                                                      |
| 50:36      | It's backblaze.com/automators, go there now.                                                   |
| 50:40      | Thank you Backblaze for saving us from countless data disasters and your support of this show        |
| 50:44      | and relay of him.                                                                                    |
| 50:47      | So now we get to talk about some of the other ways that we use our air table and it's not            |
| 50:54      | just for automating it, automators, because we need more A's in our administrative title.            |
| 50:59      | Yeah.                                                                                                |
| 51:00      | Well, I think that, you know, like everything that's cool that comes in your life as soon            |
| 51:04      | as you start realising the power of it, you start extending the usage.                               |
| 51:08      | And the more I, the deeper I got into air table, the more I realised, oh, there's a bunch            |
| 51:12      | of stuff I'm doing with numbers that I want to switch over to air table.                             |
| 51:17      | We have, I essentially forked the automators spreadsheet to the focused podcast.                     |
| 51:23      | It's different though.                                                                               |
| 51:24      | I approve.                                                                                           |
| 51:25      | It's funny though, because it really has evolved differently because we have different needs         |
| 51:29      | on that show.                                                                                        |
| 51:30      | And that's the nice thing about it is you can, you can very easily start changing.                   |
| 51:34      | I mean, they're very different from each other at this point, but any, you know, getting             |
| 51:39      | back to the idea of collaboration, you know, Mike and I are always doing the same thing              |
| 51:42      | where planning shows and trying to get everything done.                                              |
| 51:45      | One of the big uses for me of air table was this keyboard Maestro field guide.                       |
| 51:51      | It was essential.                                                                                    |
| 51:52      | Now, the way I plan these field guides out, I mean, there's a whole bunch of stuff I do,             |
| 51:58      | kind of what I call monk mode where I'm spending a bunch of my own time, you know, thinking          |
| 52:01      | about it, outlining it.                                                                              |
| 52:02      | I've got my nodes.                                                                                   |
| 52:03      | I've got Omni outlines.                                                                             |
| 52:04      | I got all kinds of stuff going on.                                                                   |
| 52:07      | But then there, I do have people helping me with the production and, you know, I have                |
| 52:11      | some people helping with the post production, all the, you know, there's just a million              |
| 52:16      | little switches to throw and uploads and closed captioning.                                          |
| 52:20      | There's just a bunch of little things that need to get done as you get one of these products         |
| 52:24      | ready to launch.                                                                                     |
| 52:25      | And so I've started to get some people to help me with it.                                           |
| 52:28      | I'm trying to not do it all myself.                                                                  |
| 52:30      | And the air table was key for that.                                                                  |
| 52:33      | And it was that status field.                                                                        |
| 52:34      | I mean, the team that was helping me, we all would sort by status.                                   |
| 52:40      | And as one person would finish something, they'd mark the status, you know, back to                  |
| 52:44      | me and I, and you can colour code them, which is something I thought was very useful.                 |
| 52:47      | So I colour coded them for each person.                                                               |
| 52:50      | So whoever was looking at the field, whether it was a list of all the videos organised               |
| 52:55      | by, you know, the order that the user sees them or whether they were organised by status,            |
| 53:00      | they could very quickly see anything that was their colour that would require action                  |
| 53:04      | by them.                                                                                             |
| 53:06      | It wasn't quite as advanced as what we're doing with automators, but it still was very               |
| 53:10      | useful having this stuff together.                                                                   |
| 53:12      | Yeah, I can believe that.                                                                            |
| 53:14      | I mean, I, a lot of the other air tables that I have are not collaborative, but just from            |
| 53:19      | using this one, you know, the collaboration stuff and the colour coding and the grouping,             |
| 53:26      | it's so good.                                                                                        |
| 53:27      | And after we created the, the automators base, I created about six others, which I thought           |
| 53:34      | maybe was going a bit too far.                                                                       |
| 53:36      | And then I realised that actually no, this is super helpful.                                         |
| 53:41      | So I've created an editorial calendar for my blog because I want to put more things                  |
| 53:46      | on there, and I had a little bit of an instant a couple of weeks ago where all of my, my             |
| 53:52      | micro feed, which usually would go to micro.blog was feeding into everything else.                    |
| 53:57      | And so I apologise if you've got a lot of swarm updates that weekend because I check                 |
| 54:01      | into things, but I put, I've got my editorial calendar in here now.                                  |
| 54:05      | So I've got dates.                                                                                   |
| 54:06      | So for example, as we record this episode, Timery has not launched yet, but we know it's             |
| 54:11      | coming.                                                                                              |
| 54:12      | And so I've got Timery in there.                                                                     |
| 54:13      | And I've specified that that needs to go out on the day that Timery will release on.                 |
| 54:17      | And that's already drafted.                                                                          |
| 54:19      | And I've got another blog post that I need to finish later today.                                    |
| 54:22      | And I've got all sorts of things.                                                                    |
| 54:24      | And I've got blog posts about automators episodes in there as well.                                  |
| 54:27      | And this is where I am subscribed to the calendar because I've made a calendar out of this.          |
| 54:32      | And I've subscribed to this on my phone.                                                             |
| 54:36      | And it means that I can see, right?                                                                  |
| 54:37      | Well, I need to get that, that article written about Timery and how I'm using it put together        |
| 54:45      | so that it's ready to go.                                                                            |
| 54:46      | And then are you putting those as all day events?                                                    |
| 54:48      | Yeah.                                                                                                |
| 54:49      | Yeah.                                                                                                |
| 54:50      | So these just show up as all day events, but they're not blocking my calendar.                       |
| 54:53      | And it also means they show up right at the top of the day and they'll be there throughout           |
| 54:56      | the day.                                                                                             |
| 54:57      | So it's not like you blink and you miss them, which is something I've had before.                    |
| 55:01      | And I do actually use these with my time blocking.                                                   |
| 55:06      | We may have to come back and do another episode on automating calendars specifically for time        |
| 55:09      | blocking.                                                                                            |
| 55:10      | Yeah.                                                                                                |
| 55:11      | Because I'm using this information.                                                                  |
| 55:14      | So I'm looking ahead in my calendar to see if there's an article and then asking myself              |
| 55:18      | whether or not I've written it.                                                                      |
| 55:20      | And if I haven't written it, then I'm scheduling a couple of hours to do that in my calendar.        |
| 55:24      | And it's really nice because even the, you know, when it's wearing its spreadsheet hat,              |
| 55:28      | it's a spreadsheet.                                                                                  |
| 55:29      | It does all sorts of great stuff like I'm just looking at the keyboard measure right                 |
| 55:32      | now.                                                                                                 |
| 55:33      | I've been telling everybody it's just under four hours.                                              |
| 55:35      | Well, according to the most recent data that was updated by the editor, it's four hours              |
| 55:40      | and four seconds, you know, but it's tracking the time and doing the addition in the database        |
| 55:47      | for me.                                                                                              |
| 55:48      | So it's great.                                                                                       |
| 55:49      | I use it for tracking sponsors, you know, payment status and all that stuff.                         |
| 55:55      | I haven't, I'm not collaborating on that, but that may be one I eventually bring someone             |
| 55:58      | in to help me out with.                                                                              |
| 56:02      | On the legal side of my life, I represent a bunch of companies and there's all sorts                 |
| 56:07      | of compliance requirements for these companies.                                                      |
| 56:09      | I have a paralegal helping in me out with a bunch of that.                                           |
| 56:13      | And I used to do it in a number of spreadsheets.                                                     |
| 56:15      | Now I'm doing it with air table and I do have a collaborator in that database to make sure           |
| 56:19      | we get everything done exactly as it's supposed to be.                                               |
| 56:22      | And it's just, you know, a collaborative spreadsheet slash database.                                 |
| 56:27      | I know that's not, that's obvious to a lot of people that have been using it for many                |
| 56:30      | years, but in my experience, they've always been super complicated.                                  |
| 56:34      | They've been hard to get other people to buy into that it's been heavy software for lack             |
| 56:39      | of a better term where this is a light web tool that does, it's as powerful as I need                |
| 56:44      | it to be.                                                                                            |
| 56:45      | And it opens up a lot of options.                                                                    |
| 56:48      | Yes, it does.                                                                                        |
| 56:49      | And because of this API, which I know I've been talking about to death, I'm just going               |
| 56:53      | to mention it again, you can integrate this into something like [[Drafts]] as well.                      |
| 56:57      | So I've made, I've got a couple of different actions for [[Drafts]].                                     |
| 57:00      | I've got one in my blog post workspace, I've got one in my suite set up workspace.                   |
| 57:05      | And this means that I can grab things which are currently marked as ideas in my air table            |
| 57:11      | basis and I can change them from idea to draft and I can just get working on them.                   |
| 57:16      | And I take the, the idea of the draft once I've created it and I put that back in air                |
| 57:22      | table, which means that from air table, I've got a link that can open [[Drafts]] and because             |
| 57:26      | [[Drafts]] is on Mac and iOS, that link works everywhere.                                                |
| 57:30      | So it's, it's amazing because it helps me do things that it means that I'm not jumping               |
| 57:34      | back and forth between applications, which does make me lose focus when I, when I'm working.         |
| 57:40      | And I can just, you know, hit the button, scroll, pick an idea, press the button and                 |
| 57:45      | I've got a draft right in front of me with any notes that I already had.                             |
| 57:50      | And I'm good to go.                                                                                  |
| 57:53      | So Rose, I guess we like air table.                                                                  |
| 57:57      | Maybe.                                                                                               |
| 57:58      | After we've been gushing about it for an hour.                                                       |
| 58:00      | I mean, it's, it's so flexible and we've not even covered things like the rollup, the,               |
| 58:08      | the rollup field type.                                                                               |
| 58:10      | So I'm just going to go into this a little bit because if you want to see what this looks            |
| 58:15      | like, air table actually has a bunch of sample bases, which I would highly recommend that            |
| 58:19      | you look at, and I believe there's one which is like small business accounting or freelancing        |
| 58:23      | expenses or something like that.                                                                     |
| 58:25      | And they have these great example fields called rollups.                                             |
| 58:30      | And a rollup field is summarising data from records that are linked to this table.                   |
| 58:37      | So that means that, for example, and I'm just looking at my, I've got a, I've got an air             |
| 58:42      | table table called professional nerd.                                                                |
| 58:43      | How nerdy is that?                                                                                   |
| 58:45      | Essentially, it's everything I do with which theoretically these business likes, so for              |
| 58:49      | example, writing for the suite setup and things like that.                                           |
| 58:52      | And I have a row for every month.                                                                    |
| 58:57      | And I keep track of all of my income and expenses in there.                                          |
| 59:01      | And then I do rollups so that I have like a sum of how much income versus how much was               |
| 59:07      | in expenses every month.                                                                             |
| 59:09      | And this is just really useful to have because then, you know, I know where the money's going.       |
| 59:14      | And it's in many ways better than budgeting software, though I'm using budgeting software            |
| 59:17      | for my personal budget.                                                                              |
| 59:19      | Maybe I should move that to air table two.                                                           |
| 59:21      | Why not?                                                                                             |
| 59:22      | Why not?                                                                                             |
| 59:23      | Yeah.                                                                                                |
| 59:24      | I mean, it's, it's very, very powerful.                                                              |
| 59:27      | It's great.                                                                                          |
| 59:28      | And the fact that I'm using a, you know, because like I use the online billing system and I          |
| 59:36      | have base camp and I have Zapier, all of a sudden I can really make this stuff dance with            |
| 59:41      | each other.                                                                                          |
| 59:42      | And it's great.                                                                                      |
| 59:43      | And the air table is definitely a player in that as well.                                            |
| 59:46      | Well, I, I, I'm a fan and I'm glad that we were able to give this application a show.                |
| 59:53      | If you're out there and you're using the air table, let us know how you're doing it in               |
| 59:56      | the forums.                                                                                          |
| 59:57      | We'd like to hear interesting uses.                                                                  |
| 59:59      | We've got, you know, feedback shows coming up.                                                       |
| 01:00:00   | We can talk about that.                                                                              |
| 01:00:02   | If you haven't used air table and any of this perks your interest, go sign up.                       |
| 01:00:07   | It's free.                                                                                           |
| 01:00:08   | You know, I'm, I'm using the free account.                                                           |
| 01:00:09   | I guess that's something I should have said at the beginning and I'm fine.                           |
| 01:00:12   | I, you know, the limitations for the free account are pretty liberal with air table.                 |
| 01:00:17   | So I, it's not costing me anything either, which is kind of great.                                   |
| 01:00:21   | Yes.                                                                                                 |
| 01:00:23   | And I have to say I was actually running into the limitation.                                        |
| 01:00:27   | There's a limit on the number of rows you can have on the free plan with air table on                |
| 01:00:31   | one of my basis on my professional nerd base for the really curious people.                          |
| 01:00:36   | And then I realised actually all of my things for the suite setup, they actually belong              |
| 01:00:40   | in their own base called the suite setup.                                                            |
| 01:00:42   | So I duplicated my base and I deleted all the extraneous tables from the second one and              |
| 01:00:47   | just renamed it and then deleted the suite setup things from the first one.                          |
| 01:00:50   | And I am not running into the limitations anymore because I don't have duplicate data                |
| 01:00:56   | everywhere, which is of course the death of row limitations.                                         |
| 01:01:01   | Yeah.                                                                                                |
| 01:01:02   | Well, I do think they've set that bar at the right point to, if you get to the point                 |
| 01:01:05   | where you're using that many rows, you should pay for it.                                            |
| 01:01:08   | Honestly.                                                                                            |
| 01:01:09   | Oh yeah, absolutely.                                                                                 |
| 01:01:10   | Um, but it's not like so few rows that you can't enjoy using the app, you know, at all               |
| 01:01:16   | without paying.                                                                                      |
| 01:01:17   | So yeah, go download it and I'm sorry, don't download it.                                            |
| 01:01:20   | There's nothing to download.                                                                         |
| 01:01:21   | I guess you can download the app on the iOS app.                                                     |
| 01:01:23   | Yeah.                                                                                                |
| 01:01:24   | And there's a Mac OS app as well, which is on the air table website.                                 |
| 01:01:27   | You know, I knew that.                                                                               |
| 01:01:28   | I tried it.                                                                                          |
| 01:01:29   | I just use it in the web.                                                                            |
| 01:01:30   | I don't use it.                                                                                      |
| 01:01:31   | I don't use there.                                                                                   |
| 01:01:32   | I found putting it in my doc was worthwhile.                                                         |
| 01:01:37   | We should note air table doesn't work offline, which means that if you're, for example, spending     |
| 01:01:42   | a lot of time on planes, it won't work there.                                                        |
| 01:01:45   | However, the way I've set up all of my bases, if I need information offline, it's already            |
| 01:01:50   | offline.                                                                                             |
| 01:01:51   | Yeah.                                                                                                |
| 01:01:52   | Because I spend so much time traveling, that's just what I do.                                       |
| 01:01:56   | Everything's available offline that can be made available offline to me.                             |
| 01:02:00   | But in general, because of the amazing power that's behind our table, I don't see this               |
| 01:02:05   | as a negative, really, in the grand scheme of things.                                                |
| 01:02:09   | Nah, neither.                                                                                        |
| 01:02:10   | Neither.                                                                                             |
| 01:02:11   | It's a great app.                                                                                    |
| 01:02:12   | So let us know how you're using it over at the forums, send us a note, tweet us, whatever.           |
| 01:02:18   | When we do a feedback show, we'd love to talk about how other folks are using air table.             |
| 01:02:23   | The automation, one thing I'm particularly interested in how people are tying it to other            |
| 01:02:27   | web services, because I think that's the real payoff of doing these types of web service.            |
| 01:02:33   | And I'd love to hear how people are using it and what kind of problems they're solving.              |
| 01:02:37   | Oh, yeah.                                                                                            |
| 01:02:38   | And I'm willing to bet that there are many interesting problems.                                     |
| 01:02:41   | And even if you're using it for work and you can't tell us in detail, give us an overview,           |
| 01:02:46   | because I'm very curious to see how everybody else is using it.                                      |
| 01:02:49   | We are the Automators.                                                                               |
| 01:02:50   | You can find us over at automators.fm.                                                               |
| 01:02:52   | You can find our shows at relay.fm.                                                                  |
| 01:02:55   | Automators, you can join the talk over at talk.automators.fm over at the forum.                      |
| 01:03:04   | Thank you to our sponsors, Luna Display and Backplates, and we'll see you next time.                 |
