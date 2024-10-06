---
status: "incomplete"
fc-date:
  year: 2023
  month: 05
  day: 19
fc-category: "podcast"
podcast: "Automators"
published: 2023-05-19
duration: 4527
formattedduration: "01:15:27"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/128"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators128.mp3"
episode: 128
title: "128: Airtable Automation"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Some of the Automators' favourite apps are upping their automation game with updates to Airtable, Drafts, and iOS.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 128 Discussion](https://talk.automators.fm/t/128-airtable-automation/15771)

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[Factor (Sponsor)|Factor]] - Healthy, fully-prepared food delivered to your door.

# Show Notes
- [Introduction - Airtable Web API](https://airtable.com/developers/web/api/introduction)
- [Using Airtable with Drafts - Integration Guides - Drafts Community](https://forums.getdrafts.com/t/using-airtable-with-drafts/14030)
- [Airtable API key deprecation notice | Airtable Support](https://support.airtable.com/docs/airtable-api-key-deprecation-notice)
- [ Airtable | Drafts Script Reference](https://scripting.getdrafts.com/classes/[[Airtable]])
- [Changelog - [[Airtable]] Web API](https://airtable.com/developers/web/api/changelog)
- [Release Notes | Drafts User Guide](https://docs.getdrafts.com/changelog/#airtable-support)
- [Services | Drafts User Guide](https://docs.getdrafts.com/docs/actions/steps/services#airtable)
- [Drafts Templates | Drafts User Guide](https://docs.getdrafts.com/docs/actions/templates/drafts-templates)
- [Mustache Templates | Drafts User Guide](https://docs.getdrafts.com/docs/actions/templates/mustache)
- [{{ mustache }}](https://mustache.github.io/)
- [Mustache Prompt for Drafts](https://davisonreiber.com/blog/2020/12/mustache-prompt-for-drafts)
- [Drafts Directory | Drafts Directory](https://actions.getdrafts.com/)
- [Use Focus on your iPhone or iPad - Apple Support](https://support.apple.com/en-us/HT212608)
- [What’s new in Shortcuts - Apple Support](https://support.apple.com/en-us/HT213544)
- [Turn on or schedule a Focus on iPhone - Apple Support](https://support.apple.com/guide/iphone/turn-a-focus-on-or-off-iph5c3f5b77b/ios)
- [What’s new in Shortcuts - Apple Support](https://support.apple.com/en-us/HT213544)

# Transcription
  
| Time Index | Transcription                                                                                             |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm David Sparks and joined by my co-host, Rosemary Orchard, and this is The                       |
| 00:05      | Automators, where we talk about how to automate your technology to do your work for you.                  |
| 00:11      | Hello, Rosemary.                                                                                          |
| 00:12      | Hey, David.                                                                                               |
| 00:13      | How are you today?                                                                                        |
| 00:14      | I am great, and always looking forward to talking to some automators.                                     |
| 00:17      | We've got a lot on deck for today's show, but also we are recording this as [[WWDC]] is getting               |
| 00:25      | closer, and [[Apple]] gives us our annual list of goodies for automation.                                     |
| 00:30      | We've got some show content planned on that.                                                              |
| 00:32      | If you've got some big wish, something you'd like to see [[Apple]] improve or add to automation,              |
| 00:38      | let us know.                                                                                              |
| 00:39      | It may show up in the future show.                                                                        |
| 00:40      | We'd love to hear about it.                                                                               |
| 00:41      | There's a forum on the website where you can send us feedback.                                            |
| 00:44      | That'd be probably the best way to get it to us, and I mean, that's all coming just around                |
| 00:50      | the corner.                                                                                               |
| 00:51      | Yeah, it is.                                                                                              |
| 00:52      | It's always exciting theorising what [[Apple]] are going to give us, having those hopes and                   |
| 00:56      | dreams, which may be granted, or maybe... I'm not going to say smashed, deferred by another               |
| 01:03      | year, but one of the things that I have noticed, and I'm sure you've noticed this as well,                |
| 01:08      | David, is [[Apple]], they give us the big stuff at [[WWDC]], but they tell us what's their big                    |
| 01:13      | stuff that's coming.                                                                                      |
| 01:15      | Not all of that comes out in September or October, but then other stuff will come in                      |
| 01:19      | throughout the year as well, even though we weren't expecting it, and we'll talk about                    |
| 01:23      | some shortcuts updates that have happened relatively recently later.                                      |
| 01:28      | It's quite nice getting that stuff, so we've got the big gift time of the year where we                   |
| 01:32      | get to find out about all the cool stuff, and then we get the little gift times, which                    |
| 01:36      | just give us those little benefits and bonuses, as well as the bug fixes and improvements                 |
| 01:41      | that we all know and love.                                                                                |
| 01:43      | Amen.                                                                                                     |
| 01:44      | Today, we're here, we've got a couple topics, but the main one today is [[Airtable]].                         |
| 01:49      | [[Airtable]] feels like the app that comes up so often on our show, guests use it, you and                    |
| 01:55      | I use it, and they have always been automation-friendly.                                                  |
| 02:00      | That's one of the reasons why I think we've always been such fans, but that has got better                |
| 02:04      | recently.                                                                                                 |
| 02:05      | Yeah, it has, and it's not just that it's got better, it's changed a little bit as well.                  |
| 02:13      | First of all, a little public service announcement here.                                                  |
| 02:16      | If you are a user of [[Airtable]] and you have been ignoring the emails and things from them                  |
| 02:20      | about the API stuff, you should know that the way that the API tokens work is going                       |
| 02:25      | to change, which means that if you have a token that you've had for a couple of years,                    |
| 02:29      | you're going to need to update that and replace that.                                                     |
| 02:32      | They've got a little blog post explaining how and why the API keys are being deprecated,                  |
| 02:37      | essentially, better security.                                                                             |
| 02:39      | We love better security.                                                                                  |
| 02:41      | Even in this case, it really is for your security, as well as everything else.                            |
| 02:45      | If you've ever accidentally included your [[Airtable]] token in a shortcut that you've sent to a              |
| 02:49      | friend and gone, oh, no, I shouldn't have done that, well, then this update is for you.                   |
| 02:55      | Or if you're [[Matthew Cassinelli]], as he mentioned on the recent episode of iOS Day where he's               |
| 02:59      | accidentally revealed it on a stream more than once, replacing that token was pretty                      |
| 03:04      | awkward and tricky.                                                                                       |
| 03:05      | Now they have personal access tokens as well as OAuth for integration so that you can do                  |
| 03:11      | a sign-in workflow like you would sign in with [[Apple]] with things you would sign in with                   |
| 03:15      | [[Airtable]] to authenticate something, which basically just means you just need to create                    |
| 03:19      | a new token, stick that in your shortcuts, and be done with it, but that does mean you're                 |
| 03:24      | going to have to go back and touch all those old [[Airtable]] shortcuts.                                      |
| 03:27      | If you're doing that, it might be a good time to update them to do something like, I don't                |
| 03:31      | know, maybe what I do, which is get your API token out of [[Data Jar]] so that then you've                     |
| 03:36      | only got one place that you need to update your token if you need to change something                     |
| 03:39      | later.                                                                                                    |
| 03:40      | Yeah.                                                                                                     |
| 03:41      | I mean, it's nice.                                                                                        |
| 03:42      | I feel like the product has matured.                                                                      |
| 03:44      | I mean, it started with all these great automation hooks in it, but as it's become adopted by             |
| 03:51      | big, fancy companies, they've had to button down their security a bit, and congratulations                |
| 03:58      | on the next level to [[Airtable]].                                                                            |
| 04:02      | Yeah.                                                                                                     |
| 04:04      | That next level to [[Airtable]] comes with some changes.                                                      |
| 04:07      | Now, they have a nice handy change look on their website, so you can actually go through                  |
| 04:11      | and read all of the changes.                                                                              |
| 04:15      | One of the things that they have done is they've actually updated.                                        |
| 04:19      | You can still, if you go to api.airtable.com, it will redirect you to the actual [[Airtable]]                 |
| 04:26      | API documentation page, which has moved, but it's okay.                                                   |
| 04:31      | It still works the same way it did before, where you can click on a table or an [[Airtable]]                  |
| 04:37      | base and get your documentation for your specific use case, but they've also improved                     |
| 04:43      | things so that you can click on, for example, sync CSV data over on the left and see, what                |
| 04:50      | does sync CSV data mean?                                                                                  |
| 04:52      | How can I do this and why would I do this, maybe?                                                         |
| 04:56      | And then figure out how to do that, and each of these API setups that you can use tells                   |
| 05:03      | you what kind of authentication you'll need as well, so there might be some things which                  |
| 05:07      | would need OAuth authentication, but pretty much everything will let you use a personal                   |
| 05:10      | access token from all the things we've been using anyway, so that's going to be nice and                  |
| 05:14      | easy so you can go through and check stuff there, and yeah, it's quite nice being able                    |
| 05:19      | to see how do I delete multiple records at once and things like that, and just as a generic               |
| 05:26      | option instead of purely the specific, this is how I do this with my base before, where                   |
| 05:31      | you then have to figure out the abstract version.                                                         |
| 05:33      | I just want to take a minute to talk about how we're using [[Airtable]] at this point.                        |
| 05:38      | I mean, the product's evolving and both of us have uses for it.                                           |
| 05:43      | I'll go first.                                                                                            |
| 05:45      | I'm not using it as with as much automation as I probably should to be truthful.                          |
| 05:52      | I've got, though, [[Airtable]] is very handy for team database and tracking communications.                   |
| 06:00      | For instance, I've got one where I list all the sponsors that I have on the various things                |
| 06:06      | I do, not the podcast, but the other stuff, and I share that with someone who helps me                    |
| 06:10      | do the back-end, getting the posts up, making sure everything's done, the bills go out,                   |
| 06:15      | et cetera, and it's just so handy because it's like a very powerful, I guess, database                    |
| 06:21      | tool.                                                                                                     |
| 06:22      | It also has a spreadsheet element to it.                                                                  |
| 06:26      | We can both update it and keep track of everything.                                                       |
| 06:30      | I can use several of the cloud-based automation tools to send me notes like when a payment                |
| 06:35      | comes in, and then another big use for me with [[Airtable]], in fact, really the biggest                      |
| 06:41      | use for me with [[Airtable]] is the field guides that I make.                                                 |
| 06:46      | We try to bunch of different tools to track status of how things are going.                               |
| 06:51      | We had Google Docs, we had shared [[Apple]] documents, and we tried all these different systems.              |
| 06:57      | The one, though, that immediately stuck for us was [[Airtable]].                                              |
| 07:02      | For each new field guide, we have this [[Airtable]], and I can see who's working on it, like if               |
| 07:07      | there's editing being done by someone else.                                                               |
| 07:11      | Then I can see if it's on his desk, if it needs closed captioning, I can see that.                        |
| 07:16      | I can see exactly where it is in the production pipeline.                                                 |
| 07:20      | We have all these different filters applied, so you can change the view.                                  |
| 07:23      | If I just want to see the ones that I'm actively working on this week, I push one button and              |
| 07:28      | it's there.                                                                                               |
| 07:29      | It's just such a great database application, but the inclusion of a simple cloud interface                |
| 07:36      | where anybody can get in and access it and create their own views, this app is really                     |
| 07:42      | great.                                                                                                    |
| 07:43      | I've never paid for it.                                                                                   |
| 07:44      | I've always been using it to such a degree that I'm not using it enough to require to                     |
| 07:49      | pay, but man, I'm getting so much value out of this free product for me.                                  |
| 07:55      | Yeah.                                                                                                     |
| 07:56      | I do pay for [[Airtable]], and so I'm on the pro plan.                                                        |
| 08:02      | Just a little clarification.                                                                              |
| 08:03      | In [[Airtable]], you've got your databases, which are your individual databases slash spreadsheet-y           |
| 08:07      | things because they've got an individual tab, so you can have multiple tables in your database            |
| 08:11      | to use the pure programming terminology, kind of like she's a spreadsheet, and then you                   |
| 08:17      | can have views on each one of those.                                                                      |
| 08:19      | The number of records in your base is limited, but your base is kind of living in groups,                 |
| 08:26      | and you pay for a plan for that group and for the number of people in the group.                          |
| 08:31      | If you've got seven people in a group who are all sharing 10 bases, then you need to                      |
| 08:35      | pay for each of the seven people for that pro plan.                                                       |
| 08:40      | I'm fortunate I was able to get the bases that I need to keep lots of data in into plans                  |
| 08:46      | just for me or into a group with a plan just for me, and so I pay for that, and I've got                  |
| 08:53      | unlimited extensions.                                                                                     |
| 08:55      | I've got as many records per bases I want and so on.                                                      |
| 09:00      | There's also a plus plan, which allows you to have three extensions per base, three sync                  |
| 09:04      | integrations, and 5,000 records.                                                                          |
| 09:06      | I did hit the 5,000 records on quite a few of my Airtables at some point, and so I just                   |
| 09:12      | went for the pro plan because I wanted to play with those extensions as well.                             |
| 09:16      | The thing that I really like about [[Airtable]] is what you were saying, David, it's kind                     |
| 09:20      | of like a spreadsheet database.                                                                           |
| 09:22      | It looks very user friendly, which is nice.                                                               |
| 09:24      | It's pretty when you go to look at it, but for me, the real killer is the fact that I                     |
| 09:28      | can have different views.                                                                                 |
| 09:30      | You've got a grid view, which kind of looks a little bit like a spreadsheet.                              |
| 09:33      | There's a form view to enable easy data entry.                                                            |
| 09:37      | There's a [[Kanban]] view to allow you to do sort of [[Kanban]] type things with stuff.                           |
| 09:41      | There's a list view and a gallery view, and you can choose which bits of information you                  |
| 09:46      | see on each poster representation in the gallery.                                                         |
| 09:52      | And then there's some pro options, which are timelines and Gantt charts, which are the                    |
| 09:57      | other reason why I'm using the pro plan because I really wanted some timelines and some Gantt             |
| 10:01      | charts for some of my stuff, but for example, we have a shared [[Airtable]] for Automators,                   |
| 10:09      | which has got our show planning in, so that's got columns for the episode number and the                  |
| 10:13      | title and guests and things like that.                                                                    |
| 10:16      | And then it combines the episode number and the title or the guest name to make the actual                |
| 10:20      | episode title, which is then used to automatically create Google documents for us.                        |
| 10:26      | And we have a status field, which is very nice.                                                           |
| 10:29      | And then this in a [[Kanban]] view can move across automatically from or can be dragged across                |
| 10:34      | from planning to, I can't remember the one that comes after planning, to be honest, I've                  |
| 10:40      | kind of forgotten.                                                                                        |
| 10:41      | There we go.                                                                                              |
| 10:42      | Scheduled, recorded.                                                                                      |
| 10:43      | And then there's also some options for idea and released.                                                 |
| 10:48      | And it's really nice to have that as our options, but then we've got two calendars,                       |
| 10:53      | which are automatically generated from this.                                                              |
| 10:55      | It shows us our recording calendar, and it can also show us a release calendar, so that                   |
| 10:59      | we'll know when something is going to be released and can see that automatically and subscribe            |
| 11:05      | to that if we want to, but we don't have to.                                                              |
| 11:09      | And it's just very useful to be able to go through and have this.                                         |
| 11:13      | And then, so our main sort of table or area is the show planning, but then we also have                   |
| 11:20      | separate sections for guests.                                                                             |
| 11:22      | So any guests that we've had on the show or we'd like to have on the show have an entry                   |
| 11:26      | there.                                                                                                    |
| 11:27      | We can note down who the primary contact person is, so if I'm the primary person who talks                |
| 11:31      | to them or if you are David.                                                                              |
| 11:34      | And then we've got a list of the past episodes they've been on, so if, for example, Ken Case              |
| 11:40      | came on the show, then we'd be able to look at it and go, well, he was last on an episode                 |
| 11:43      | 51.                                                                                                       |
| 11:44      | And so it's probably time that we asked him if he'd be open to coming back there.                         |
| 11:49      | But yeah, it's nice to be able to just sort of go through and have this.                                  |
| 11:56      | And it's nice to look at, you look at it and you're not immediately going, ooh, this is                   |
| 12:01      | a really techie dev tool.                                                                                 |
| 12:02      | I mean, it's not, depending on what views you use and so on, it may not be the prettiest                  |
| 12:08      | tool in the world because it's got a lot of data, but that's kind of up to you and what                   |
| 12:11      | data you put in there.                                                                                    |
| 12:13      | But where it really excels is the integrations.                                                           |
| 12:15      | I mentioned, when we plan automators, it automatically creates a Google blog for us.                      |
| 12:21      | And that happens through make.com where it plugs out a bunch of data and it creates a                     |
| 12:28      | Google doc for us and reformats some stuff.                                                               |
| 12:30      | And then it puts a link to the Google doc in the record in [[Airtable]] for us so that we                     |
| 12:34      | can just click on that and go to it and ta-da, we're there.                                               |
| 12:38      | And that is really, for me, where the magic gets massively extended because all of this                   |
| 12:44      | stuff is available through the various APIs and whether you want to just write a shortcut                 |
| 12:50      | or use [[Drafts]] or something to interact with [[Airtable]] directly or if you want to use a                     |
| 12:54      | service like [[Make]] or that was previously called [[Make\|Integromat]] Zapier or if this and that, then              |
| 13:01      | you've got options there, which is really nice.                                                           |
| 13:03      | I feel like this is a no-brainer if you're working with a team and you're not using [[Notion]].               |
| 13:10      | I think there is a bit of a tipping point with [[Notion]] because you can do a lot of this                    |
| 13:14      | with [[Notion]] tables, but [[Airtable]] is better at it in my experience and it's more automation                |
| 13:22      | friendly.                                                                                                 |
| 13:23      | So even if you're using [[Notion]], you could make the argument that you'd want an [[Airtable]],                  |
| 13:26      | but I know a lot of people that use [[Notion]] that put this kind of information in [[Notion]]                    |
| 13:31      | tables themselves, but I do think it really just shines with collaboration.                               |
| 13:38      | Yes, absolutely it does.                                                                                  |
| 13:41      | And it's really nice to be able to just have that information in a way that everybody can                 |
| 13:46      | look at it and because you can create views and you can share those views with other people,              |
| 13:51      | you can say whether a view is collaborative or on the pro plans, you can also say if it's                 |
| 13:55      | only available for you and also if it's locked so that people can't change it.                            |
| 14:01      | But the fact that you can have views that are shared, then that means that somebody says,                 |
| 14:06      | okay, well, I'm in show planning and I'm looking at the recording and I don't see episode 128,            |
| 14:13      | then you can say, well, are you in May?                                                                   |
| 14:15      | Are you definitely in the right month?                                                                    |
| 14:17      | You know, May 2023 because it's right there.                                                              |
| 14:21      | And yeah, you know that you're looking at the same thing at the same time, which definitely               |
| 14:25      | makes a huge difference when it comes to this sort of thing.                                              |
| 14:27      | Yeah, and you're going to end up talking me into the pro plan before we finish for us.                    |
| 14:32      | I can already see.                                                                                        |
| 14:33      | Well, I don't know if I will.                                                                             |
| 14:34      | It's one of those things.                                                                                 |
| 14:35      | The pro plan, because you have essentially folders for basis and anybody that you share                   |
| 14:42      | bases within that folder needs to have the pro plan paid for and you pay for the plans                    |
| 14:47      | per folder as well, it could end up getting pricey pretty quickly if you need to share                    |
| 14:52      | a lot of data with a lot of people and have everybody sort of interact with it and move                   |
| 14:56      | it around.                                                                                                |
| 14:57      | Yeah, that's it.                                                                                          |
| 14:58      | And that's what always gets me in trouble when I look at how much it costs because you're                 |
| 15:01      | right, I've got multiple people accessing the data.                                                       |
| 15:04      | Yeah, exactly.                                                                                            |
| 15:06      | And that's not really a surprise that that happens.                                                       |
| 15:10      | It's just one of those things.                                                                            |
| 15:13      | We're lucky that the automators stuff so far hasn't needed to go into the pro plan section,               |
| 15:18      | but at some point it might need to.                                                                       |
| 15:20      | I recently, the iOS Today feedback that gets sent into the show iOS Today recently hit the                |
| 15:27      | free plan limit of the number of rows in the table.                                                       |
| 15:30      | And I was able to simply go through and delete all the stuff that was marked as done over                 |
| 15:35      | a year ago.                                                                                               |
| 15:36      | And it turns out that pretty nicely cleaned it up and solved that problem for us.                         |
| 15:42      | But if you've got a lot of data, then it can end up needing you to upgrade to the next                    |
| 15:49      | plan.                                                                                                     |
| 15:50      | But at the same time, it $10 a month per person in that group, maybe not so bad, especially               |
| 15:57      | considering the fact you get automatic table syncing, five gigabytes of attachments.                      |
| 16:01      | You can even do form branding and stuff, which if you're using it for customer feedback,                  |
| 16:06      | or in your case, the Sparky Labs submissions or requests are similar, then that could be                  |
| 16:12      | really nice.                                                                                              |
| 16:13      | Plus six months of revision and snapshot history.                                                         |
| 16:16      | Yeah, if you want to go back and see what changes you made, then that could be worthwhile.                |
| 16:21      | And the reason why I don't really run into a problem with this is my field guides are                     |
| 16:25      | usually around 100 videos, so it's 100 lines, then we make a new base for each guide.                     |
| 16:32      | So we're just never going to hit it with the way we're using it.                                          |
| 16:37      | But it's a great app.                                                                                     |
| 16:39      | And I'm really pleased to see that they're expanding their APIs and making it even better                 |
| 16:46      | for people that want to automate.                                                                         |
| 16:48      | Yes.                                                                                                      |
| 16:49      | Yeah, exactly.                                                                                            |
| 16:50      | So one of the things that's coming to the API, which some people, myself included, have                   |
| 16:57      | asked for before, is the ability to get a list of your bases and the list of views in                     |
| 17:02      | the bases through the API.                                                                                |
| 17:05      | Now I should say, this says it's coming, which is great.                                                  |
| 17:10      | We love this.                                                                                             |
| 17:11      | But the downside of this coming is the fact that that is an enterprise-only feature.                      |
| 17:16      | So you'd need to be on the enterprise plan to get that, which is kind of a shame, but                     |
| 17:20      | I get it at the same time.                                                                                |
| 17:21      | They have to have limits.                                                                                 |
| 17:23      | And I believe various integrations can also hook into that without you needing to pay                     |
| 17:31      | for the enterprise plan.                                                                                  |
| 17:32      | That's how Zapier gets a list of all of the different bases and so on that you've got                     |
| 17:36      | available to apply your Zapier's apps to.                                                                 |
| 17:43      | This episode of The Automators is brought to you by ExpressVPN, go to expressvpn.com                      |
| 17:50      | to get high-speed secure and anonymous VPN services, and you get three extra months for                   |
| 17:55      | free.                                                                                                     |
| 17:56      | It's so easy now to have multiple streaming services and the cost of them adds up.                        |
| 18:01      | That's why it can be good to discover ways to make the most out of your existing subscriptions.           |
| 18:07      | Quite often streaming services like Netflix actually have thousands more shows than you                   |
| 18:11      | think.                                                                                                    |
| 18:12      | You just don't see them because they give you different shows depending on where you're                   |
| 18:16      | located.                                                                                                  |
| 18:17      | So what you see on Netflix here is completely different to what someone in Italy or South                 |
| 18:21      | Korea sees, but using the ExpressVPN app, you can change your online location.                            |
| 18:28      | ExpressVPN has over 90 countries to choose from, so when you run out of stuff to watch,                   |
| 18:33      | you can switch to another country to unlock new shows.                                                    |
| 18:35      | Lately, I had a back to the future itch, so I watched it on Canadian Netflix, and it's                    |
| 18:41      | still great.                                                                                              |
| 18:42      | And I do that by tapping one button to change my country and refreshing the page.                         |
| 18:47      | That means you don't need to pay for an extra streaming service to watch new stuff.                       |
| 18:51      | At less than $7 a month, ExpressVPN pays for itself and so much more.                                     |
| 18:55      | It's a no-brainer.                                                                                        |
| 18:57      | So if you want to get way more shows and save money while you're at it, go to expressvpn.com              |
| 19:02      |/automators.                                                                                         |
| 19:04      | Don't forget to use the automators link so you can get three extra months for free.                       |
| 19:08      | expressvpn.com/automators.                                                                   |
| 19:14      | Expressvpn.com/automators to learn more.                                                            |
| 19:17      | And our thanks to ExpressVPN for their support of the automators and all of Relay FM.                     |
| 19:23      | All right, now, [[Airtable]] also got some great new integration with one of our favourite apps                |
| 19:31      | [[Drafts]].                                                                                                   |
| 19:32      | Yeah, it did.                                                                                             |
| 19:34      | So this came out in [[Drafts]] update 37, which came out a little while ago, not that long                    |
| 19:40      | ago.                                                                                                      |
| 19:41      | But yeah, and it's been there for a little bit, and I've kind of been kicking the tires                   |
| 19:46      | on it and playing with it a bit, because I have a lot of stuff that uses [[Airtable]] and                     |
| 19:51      | [[Drafts]] already.                                                                                           |
| 19:53      | And what I was doing is I was just writing scripts and using the API through the API                      |
| 20:00      | documentation and so on to do this.                                                                       |
| 20:02      | And that was fine.                                                                                        |
| 20:05      | It certainly worked.                                                                                      |
| 20:06      | But it meant that if I needed to be able to, say, update a record, I had to go through                    |
| 20:13      | and create a script for it to do that.                                                                    |
| 20:18      | And now [[Drafts]] is added, not just scripting support, which we'll get to in a little bit,                  |
| 20:23      | but they've added a simple action to actually send data to [[Airtable]].                                      |
| 20:31      | And so now in the actions that you create, and these are the actions that display on                      |
| 20:36      | the right-hand side with [[Drafts]], so you'll need the [[Drafts]] pro subscription to be able                    |
| 20:41      | to create and edit actions.                                                                               |
| 20:44      | But then once you've got that, as you create an action, one of the things that you can                    |
| 20:48      | do is actually send to [[Airtable]].                                                                          |
| 20:51      | And so there is an [[Airtable]] option right there, which is just nice as one of the steps.                   |
| 20:57      | It's a simple UI step, there's no scripting involved, really.                                             |
| 21:01      | And then you can actually use that information to do whatever it is you want with.                        |
| 21:07      | And I really appreciate the fact that Greg has gone through and done this, because being                  |
| 21:13      | able to add something there does just make it nice and easy.                                              |
| 21:19      | And I think a lot of people would like to be able to do more with things like [[Drafts]],                     |
| 21:23      | but the idea of scripting scares them a little bit, and that's understandable.                            |
| 21:28      | So now you don't actually have to start by writing a script to do this, or start by borrowing             |
| 21:32      | somebody else's script.                                                                                   |
| 21:33      | You can start by using the nice, simple UI action to do so.                                               |
| 21:37      | Yeah.                                                                                                     |
| 21:38      | I mean, [[Drafts]] updates are so great.                                                                      |
| 21:41      | And if you ever have time, if you're a [[Drafts]] user, you should check out their release notes              |
| 21:46      | page, because first of all, they're currently on version 39.                                              |
| 21:50      | I think it's the only app I know that's on version 39, but that's partially just the                      |
| 21:54      | way he numbers them.                                                                                      |
| 21:55      | But it also is true, it seems like every update has substantial new features.                             |
| 22:01      | In addition to the air table stuff in update 38, they added a mail drop where you can automatically       |
| 22:07      | send a note to your [[Drafts]] with a secret email address.                                                   |
| 22:11      | And that's part of the pro plan, but I've already incorporated that into some of my                       |
| 22:15      | automation.                                                                                               |
| 22:16      | You know, anytime I want to capture text and I just send it to that, that mail drop number,               |
| 22:21      | I can, I can get it in my draft.                                                                          |
| 22:24      | So if you were like working at somebody else's computer, or you're on a public machine or                 |
| 22:27      | whatever, you can just send it off and put it in very quickly, that that was a huge feature.              |
| 22:33      | And then they also came out with the most recent version open AI support.                                 |
| 22:39      | So it's got [[ChatGPT]] scripting built into the application.                                                |
| 22:43      | There's just, there's no app like [[Drafts]] on the iPhone.                                                   |
| 22:47      | There aren't many apps you can say that about, but there just really isn't anything like                  |
| 22:50      | this.                                                                                                     |
| 22:51      | No, no.                                                                                                   |
| 22:52      | And I think that's the thing.                                                                             |
| 22:53      | It is a special link.                                                                                     |
| 22:55      | It's mentioned in so many episodes and used so much of the time by, you know, not just                    |
| 22:59      | us, but also a lot of the folks listening to this show, because it is such a useful                       |
| 23:05      | and powerful app.                                                                                         |
| 23:06      | So one of the things that you can use in the air table support for creating records is                    |
| 23:12      | you can use [[Drafts]] tags.                                                                                  |
| 23:14      | Now tags are something that you can use in, for example, an insert text action in [[Drafts]],                 |
| 23:20      | where you would use two square brackets to open something and then you type a thing and                   |
| 23:26      | then you type two closing square brackets.                                                                |
| 23:29      | But these, these things that you can insert, for example, could be for the word created.                  |
| 23:36      | And just the word created is going to insert the created date of the draft.                               |
| 23:40      | But then not only do you have that, you've also got, you know, the title of the draft,                    |
| 23:45      | the actual content of the draft, you know, the whole draft.                                               |
| 23:48      | And you've also got ones that you can create.                                                             |
| 23:52      | So you can actually have an action that creates a template, or you can use a prompt to ask                |
| 23:58      | you for things.                                                                                           |
| 24:00      | And then you've got your default, such as the UID, which is the unique identifier for                     |
| 24:03      | the draft, a permalink, a safe title.                                                                     |
| 24:07      | Which is, you know, any weird characters that might not let you save something into a file                |
| 24:13      | system removed, a display title, so it will remove any spaces at the start and the end                    |
| 24:20      | of your title.                                                                                            |
| 24:21      | And it will also remove the hashes at the beginning of a title too, a trimmed body.                       |
| 24:26      | So it'll get you the body of your draft, but take any white space and blank lines and spaces              |
| 24:31      | away from the start and the end.                                                                          |
| 24:34      | You can get your selection, you can get the tags, you can get the title.                                  |
| 24:37      | You can get specific lines.                                                                               |
| 24:39      | So if you type line, and then you type a pipe, and then you type two, that will give you                  |
| 24:43      | line two of your draft.                                                                                   |
| 24:45      | You type line pipe two dot dot five, it'll give you lines two through five.                               |
| 24:50      | But if you just type line two dot dot, then it'll give you lines two through to the end                   |
| 24:55      | of the draft.                                                                                             |
| 24:56      | And this is, this is really useful because you can combine all of this, and you can then                  |
| 25:00      | take that into that air table action that I was talking about.                                            |
| 25:03      | So that means that you can do things like insert the longitude at which you created your draft            |
| 25:08      | into an air table field record.                                                                           |
| 25:10      | Because you've got that information and you don't have to, you know, you touch a script                   |
| 25:14      | at all.                                                                                                   |
| 25:15      | You can literally open the draft [[Drafts]] templates site, which I'm going to link in the show notes.        |
| 25:23      | And then you can copy the bits that you want and then paste them into the air table action                |
| 25:29      | and done.                                                                                                 |
| 25:31      | And if you want, you can even do things like format the dates in pretty ways or not so                    |
| 25:36      | pretty ways if you want things like ISO formats.                                                          |
| 25:39      | And it's just really useful to be able to do things like that, like, you know, you can                    |
| 25:44      | even get your current clipboard using this.                                                               |
| 25:48      | And so because this is an option and it links into everything else, you know, that's the                  |
| 25:54      | simple templating.                                                                                        |
| 25:55      | Imagine, David, that you need to create a series of records.                                              |
| 25:58      | For example, you're upcoming, you know, or you're creating a new field guide.                             |
| 26:02      | So you create some [[Drafts]], which will let you, you know, do some scripting to, you know,                  |
| 26:09      | create the [[Drafts]] of the actual, you know, individual videos that you want to create                      |
| 26:14      | or, you know, ideas.                                                                                      |
| 26:15      | And then you, you know, use some prompts to ask you some questions.                                       |
| 26:18      | And then, you know, snap, send this over to air table, but you can even have like air                     |
| 26:23      | table have a link back to your draft.                                                                     |
| 26:26      | Maybe that only works for you because you're not sharing your [[Drafts]] with anybody else,                   |
| 26:29      | but that's still there.                                                                                   |
| 26:31      | So that you've got that and, you know, it's, it's really nice to be able to do that.                      |
| 26:37      | So often [[Drafts]] becomes like a front end for other services and that exactly that way,                    |
| 26:43      | because it just gives you an easy way, you know, to capture the text and turn it into                     |
| 26:47      | something more powerful.                                                                                  |
| 26:49      | Yes, exactly.                                                                                             |
| 26:51      | And I think that's the thing, you know, I've been using it a lot for packing lists recently,                   |
| 26:56      | because I've got some, some trips up coming that I'm going to need to, you know, take                     |
| 27:00      | stuff on.                                                                                                 |
| 27:01      | And it's been really nice and simple and easy to just, you know, be able to have a [[Drafts]]                |
| 27:06      | widget on my phone, which shows me, you know, a couple of things that gives me a plus to                  |
| 27:10      | create a new draft.                                                                                       |
| 27:11      | It's got a sort of clipboard icon, which will create a draft for my clipboard.                            |
| 27:15      | But now I've got my workspaces and I can see that I've got three packing lists.                                |
| 27:19      | If I tap on packing lists, it will open my packing lists workspace and it will give me my list of packing lists          |
| 27:24      | right there and I can tap on, you know, one of them and just go straight to that.                         |
| 27:30      | But I could also just run actions because, you know, if I wanted to have something that                   |
| 27:34      | pops up, you know, it pops up in [[Drafts]] and it pops up in a prompt and says, okay, you                    |
| 27:38      | know, what's the name?                                                                                    |
| 27:40      | And then the next prompt says and, you know, where?                                                       |
| 27:44      | And then, you know, maybe it takes those two and it takes the date and time today.                        |
| 27:48      | And then it creates an air table record for me.                                                           |
| 27:51      | I can put that in a widget as well so that I've got this ability to quickly start creating                |
| 27:56      | text somewhere and just use it from the home screen of my phone.                                          |
| 28:00      | But it's no longer just a text tool, it is an automation tool that happens to use text                    |
| 28:09      | as a lot of it, but you don't actually have to create a draft to do a lot of the automation,              |
| 28:13      | which is really cool.                                                                                     |
| 28:14      | Yeah, and because Greg never rests, they've also added mustache templates to [[Drafts]], which                |
| 28:21      | is another markup syntax, I guess you'd call it.                                                          |
| 28:24      | How do you use mustache?                                                                                  |
| 28:26      | Yes, I do use mustache.                                                                                   |
| 28:28      | I would say it's a markup syntax.                                                                         |
| 28:30      | It's not like markdown is, for example.                                                                   |
| 28:33      | But essentially, you know, going back to the insert text action that I mentioned before,                  |
| 28:38      | where you could just have it insert, you know, the title of a draft, for example, I'm not                 |
| 28:42      | quite sure why you'd want to reinsert the title in your current draft, but moving on                      |
| 28:46      | from that, say you have an action that creates a new draft, okay, this is a much more common              |
| 28:52      | one.                                                                                                      |
| 28:53      | Well, you might want to say, okay, like, hey, if I'm creating this as a flagged draft,                    |
| 29:00      | then I want these words to appear.                                                                        |
| 29:02      | But if it's not flagged, then I want those words to appear instead.                                       |
| 29:08      | And this is something you can do with mustache templating, and you can write this into the                |
| 29:14      | create draft or the insert text actions, and then use that, you know, as part of this.                    |
| 29:21      | So I mentioned before the two square brackets on [[Drafts]] template tags and templates, this                 |
| 29:28      | mustache templating uses two curly brackets.                                                              |
| 29:31      | And so that lets you, you know, see the difference very quickly and easily.                               |
| 29:36      | And then you can say, for example, two curly brackets, and then is flagged, which will tell               |
| 29:43      | you if it is flagged.                                                                                     |
| 29:45      | So with flagged, because it's a Boolean, you'd actually put a hash in front of it.                        |
| 29:48      | But then, you know, you've got things like two curly brackets in the word title will                      |
| 29:51      | give you the title of the draft, two curly brackets in the word tags gives you the tags                   |
| 29:56      | permalink is permalink body is body, UUID is UUID, you'll sense that there's a common                     |
| 30:01      | theme here where a lot of these things are available as template tags as well, which                      |
| 30:04      | is great.                                                                                                 |
| 30:07      | But because, you know, this is mustache templating, this is something that already exists and             |
| 30:10      | is used in other places, then you can also have, for example, hash tag markdown inside                    |
| 30:17      | of those curly brackets, which will then filter the thing that comes out of there from a                  |
| 30:23      | markdown to HTML conversion.                                                                              |
| 30:25      | You can also uppercase things and lowercase things, URL escape things, HTML escape things,                |
| 30:31      | or even [[JavaScript]] escape things.                                                                         |
| 30:33      | So if you want to be able to insert some raw [[JavaScript]] and have it, you know, escape                     |
| 30:36      | so that it doesn't run or something, then you can do that.                                                |
| 30:40      | And I just think it's a really nice sign of how powerful this stuff has become that not                   |
| 30:46      | only are people asking for this, people are using it as well, you know, you end up seeing                 |
| 30:50      | it in the draft forums because, you know, so many people are going, oh, wait, wait,                       |
| 30:55      | this is cool.                                                                                             |
| 30:56      | And they see an example of how somebody else is using it and go, okay, I really need this.                |
| 31:01      | And yeah, it just, every time I look at [[Drafts]], I feel like I've missed about 17 releases.                |
| 31:08      | And I've still found so many new features like during that time that I don't feel like                    |
| 31:13      | I could have missed anything anyway.                                                                      |
| 31:14      | Yeah.                                                                                                     |
| 31:15      | And I'm like looking at the mustache implementation, trying to figure out ways I can use it.              |
| 31:19      | But like an automator, almost more than using it is just the knowledge that it exists.                    |
| 31:24      | Like one of the things I can access is specific line numbers in the draft.                                |
| 31:28      | So if you had like a line that always had the people at the meeting, you could say that's                 |
| 31:33      | line four.                                                                                                |
| 31:34      | Yeah.                                                                                                     |
| 31:35      | But then you can access that in whatever you're generating from the text and location and date            |
| 31:42      | data.                                                                                                     |
| 31:43      | I mean, even your longitude and latitude, because it's on a phone that has access to                      |
| 31:48      | more data, you can change date formatting, it's really powerful.                                          |
| 31:53      | Yeah.                                                                                                     |
| 31:54      | Yeah.                                                                                                     |
| 31:55      | It really is.                                                                                             |
| 31:56      | I've been doing some nice things with it, and you know, I should note that it sounds                      |
| 31:59      | like we're saying that the mustache templating just came out in [[Drafts]].                                   |
| 32:03      | It did.                                                                                                   |
| 32:04      | It came out like a couple of years ago at the end of 2020.                                                |
| 32:07      | But so it's been there for a while, but I've just seen more and more people recently messaging            |
| 32:13      | me going, oh, like, have you been playing with this?                                                      |
| 32:15      | Because I've recently found a great use case for it.                                                      |
| 32:17      | So it felt like it was a good time to mention it on automators.                                           |
| 32:20      | And there was also a very cool action linked in the forums a little while ago about a great               |
| 32:25      | [[Drafts]] action called mustache prompt, which I'll link to in the show notes so that you                    |
| 32:32      | can find out about that.                                                                                  |
| 32:34      | And essentially, what it will do is it will let you create mustache templates through                     |
| 32:40      | scripts a little more easily if that's something you'd like to do.                                        |
| 32:44      | So you can have, like, your two curly brackets to open and date, colon, and then you can                  |
| 32:49      | give it a date name or a variable name, and then it will pop up a date picker for you,                    |
| 32:55      | which is really nice when you want to be able to create [[Drafts]] templates, like complex [[Drafts]]            |
| 33:02      | templates perhaps, but you don't want to have to go through to the trouble of writing lots                |
| 33:06      | of scripts and so on.                                                                                     |
| 33:08      | So yeah, you can just include this action and run from there, which, you know, I like                     |
| 33:13      | the fact as well in [[Drafts]], you can include an action.                                                    |
| 33:16      | So if you've created an action, you're like, oh, but I need to do this again, but I don't                 |
| 33:24      | need to, you know, do that bit over there, then what you can do is you can include the                    |
| 33:27      | original action or you can duplicate it and create a new one that you can include in both                 |
| 33:31      | or whatever it is you like so that you've got some nice centralised logic instead of                      |
| 33:35      | inventing the wheel again and again.                                                                      |
| 33:37      | Yeah, I just went through the thing with [[Drafts]] where I kind of rebuilt the look and feel                 |
| 33:42      | of the app.                                                                                               |
| 33:43      | You know, that's another thing you can do is script, you know, which colours you use                       |
| 33:47      | and fonts and all that, because I found myself tempted by some of the third party tech senators           |
| 33:52      | out there, I played with a few of them and they all look pretty, but none of them have                    |
| 33:57      | the [[Drafts]] power.                                                                                         |
| 33:58      | So I decided to make [[Drafts]].                                                                              |
| 34:00      | It's easier to make [[Drafts]] look pretty than to make a pretty app have these features.                     |
| 34:03      | If that makes sense, you know, so.                                                                        |
| 34:05      | It definitely is.                                                                                         |
| 34:06      | Yeah.                                                                                                     |
| 34:07      | So I've gone through and redid that.                                                                      |
| 34:10      | Are you into that, Rose?                                                                                  |
| 34:11      | I mean, do you spend a lot of time setting up the look and feel of your [[Drafts]]?                           |
| 34:15      | Honestly, I find that I tend to sort of forget that this exists for a long period of time                 |
| 34:21      | because everything's just working.                                                                        |
| 34:23      | And then I'll find myself going, hmm, you know, why aren't I using [[Drafts]] for this thing?                 |
| 34:27      | Or why didn't I reach for [[Drafts]] for this?                                                                |
| 34:29      | And then I'll go through and, you know, update a template or something so that I've got a                 |
| 34:33      | nicer preview of something or tweak a theme so that it's got some slightly nicer colours                   |
| 34:38      | or that thing that was bugging me where this text was italic, but I didn't really want                    |
| 34:42      | it to be italic, you know, it goes changes, you know, and the fact that you can do that                   |
| 34:48      | is really nice.                                                                                           |
| 34:50      | So one thing I have done though is my workspaces have different themes applied to them so that            |
| 34:55      | when I open a particular workspace, I can, you know, I can tell where I am in [[Drafts]]                     |
| 35:00      | because of the theming.                                                                                   |
| 35:01      | And then, you know, my default for opening [[Drafts]] is it sets the workspace to my default                  |
| 35:07      | workspace and then, you know, has that theme applied.                                                     |
| 35:12      | But yeah, so I have got some of the theming and so on in there a little bit.                              |
| 35:17      | There's some really great ones that you can download from the [[Drafts]] action site.                         |
| 35:21      | The action site is kind of a little misnomer now because it's got actions, it's got themes,               |
| 35:24      | it's got workspaces, action groups, but it did start as the place where you can get all                   |
| 35:29      | of the draft stuff.                                                                                       |
| 35:30      | So it's going to be around for a while, which is great because it's got so much there.                    |
| 35:34      | Yeah, there are people out there for whom [[BBEdit]] is the hammer and everything is a nail.                 |
| 35:39      | When it comes to text for me, [[Drafts]] is the hammer.                                                       |
| 35:42      | For me, [[Drafts]] is more of a toolbox.                                                                      |
| 35:44      | Yeah, sure.                                                                                               |
| 35:45      | Maybe it doesn't have all the power tools in it necessarily, but those have slowly been                   |
| 35:50      | sneaking in over time with everything else because, you know, every time, as we mentioned,                |
| 35:55      | every time you look at the change look, there's new stuff in [[Drafts]] and, you know, it releases            |
| 35:59      | new updates pretty frequently.                                                                            |
| 36:01      | You know, big ones, I should say, not like small bug fixes and improvements, though obviously             |
| 36:06      | Greg does release those with, you know, [[Drafts]] as needed, but there are, you know, there                  |
| 36:13      | are a lot of things that are available in [[Drafts]] and every so often, you know, you look                   |
| 36:18      | at it and go, hmm, I wonder if, oh my God, I can do all of these things.                                  |
| 36:22      | That's amazing.                                                                                           |
| 36:23      | I want to do that.                                                                                        |
| 36:25      | And then I fall down a rabbit hole and spend four days writing draft sections and things                  |
| 36:28      | like that, which is great.                                                                                |
| 36:31      | Going back to [[Airtable]], let's talk about that because [[Drafts]] scripting support is also there              |
| 36:36      | as well.                                                                                                  |
| 36:37      | Yes.                                                                                                      |
| 36:38      | Yeah.                                                                                                     |
| 36:39      | And the action support for [[Drafts]] is, basic is the wrong word for it, but it's essentially                |
| 36:45      | just create an [[Airtable]] record.                                                                           |
| 36:49      | But if you want more, then, of course, there's more power available through scripting.                    |
| 36:53      | And just like you could before, you can just use, you know, HTTP actions to integrate                     |
| 36:58      | with the API.                                                                                             |
| 36:59      | So if you did that before, you don't need to change that.                                                 |
| 37:02      | But what you can now do is you can actually create [[Airtable]] instances and use those in                    |
| 37:08      | your actions instead.                                                                                     |
| 37:10      | So instead of, you know, creating a HTTP call and, you know, spinning it all up with                      |
| 37:14      | the headers and stuff so that you can talk to [[Drafts]], you can now actually do this directly               |
| 37:18      | with [[Airtable]] through the scripting support.                                                              |
| 37:21      | And I have been working on updating some of my actions for this because, of course, with                  |
| 37:26      | the change of token, I need to update the token in [[Drafts]].                                                |
| 37:30      | Now, updating the token in [[Drafts]] is not a problem.                                                       |
| 37:32      | It's not difficult to do.                                                                                 |
| 37:33      | But I decided to make it much better and just update to use everything with the new [[Airtable]]              |
| 37:40      | integration instead, so that I've got all of that as well, which is quite nice.                           |
| 37:46      | And so allow me to go through and have a little bit of a spring clean in some of my draft                 |
| 37:49      | sections too to get rid of those that I don't need anymore.                                               |
| 37:52      | Yeah, it's like second level automation for [[Airtable]].                                                     |
| 37:56      | Yeah, yeah, it really is.                                                                                 |
| 37:58      | And it's just really nice.                                                                                |
| 38:00      | You know, this gives you the opportunity to get your base schema to list your bases.                      |
| 38:05      | And then, of course, you can create records, list records, and update records, which are                  |
| 38:09      | the things that you're most likely to be able to want to be able to do at any time.                       |
| 38:14      | There isn't support for deleting records.                                                                 |
| 38:17      | But that is, I believe, a very deliberate design choice because I'm sure a lot of people                  |
| 38:22      | would accidentally delete stuff and get a little cranky when they'd done so.                              |
| 38:26      | And of course, you can still do that via the HTTP requests if you need to.                                |
| 38:31      | So I find that I tend not to delete records through things like this.                                     |
| 38:36      | It tends to be through automated actions, through something like [[Make]] or Zapier, where                    |
| 38:40      | it can have a view which will collect the things which will need deleting and then they                   |
| 38:45      | will get deleted sort of periodically every 24 hours or once a week or once a month or                    |
| 38:50      | something instead of doing it as part of what I'm doing at the moment.                                    |
| 38:54      | Yeah, and I don't mind automating deletion, but I would just add a caveat there that be                   |
| 39:00      | very, very careful when you set that up through automation.                                               |
| 39:04      | Make sure your ANDs and your ORs are separated properly.                                                 |
| 39:08      | Yeah.                                                                                                     |
| 39:09      | Yeah.                                                                                                     |
| 39:10      | So my trick for that is if you're going to automate an [[Airtable]] record deletion, start                    |
| 39:14      | by adding a new column and call it deleted and make it a checkbox column.                                 |
| 39:18      | And then to start with, instead of actually deleting the records, set the checkbox to                     |
| 39:22      | true and see what happens.                                                                                |
| 39:24      | And if some things get the checkbox that you didn't want to have the checkbox, then it's                  |
| 39:28      | great.                                                                                                    |
| 39:29      | You can uncheck the checkbox and go back and tweak your automation and try again.                         |
| 39:33      | And then afterwards, when you're happy with it and you know that everything's right, then                 |
| 39:36      | you can delete the records.                                                                               |
| 39:38      | But if you've got a checkbox to check to start with, then that is a good place to go.                     |
| 39:43      | What you don't want is to have a thousand records delete unintentionally.                                 |
| 39:47      | Exactly.                                                                                                  |
| 39:52      | This episode of Automators is brought to you by Electric.                                                 |
| 39:55      | Turning a small business into an empire takes work and you have to keep your ear to the                   |
| 39:58      | ground for things that will help you take it to the next level.                                           |
| 40:01      | But this can be hard when your attention is pulled in different directions because that's                 |
| 40:05      | the reality of being a boss.                                                                              |
| 40:07      | The team over at Electric knows small businesses, maybe like yours, face these challenges.                |
| 40:11      | That's why they're on hand to help with time consuming parts of your business, like standardised          |
| 40:15      | device security with the best in-class device management software so you can implement best               |
| 40:19      | practices across the board and be ready to scale.                                                         |
| 40:23      | Employee onboarding and off-boarding done for you, saving you an average of eight hours                   |
| 40:26      | per request, keeping a single point of visibility into your IT environment to control your devices,       |
| 40:32      | networks and applications, simplify reporting that allows you to achieve and maintain compliance,         |
| 40:37      | and proactive IT recommendations and automated workflows, making IT EVC to manage even for                |
| 40:42      | non-technical users.                                                                                      |
| 40:44      | And look, if you're hearing this and you think your company could use some of the above                   |
| 40:47      | services but you're not sure where to start, Electric's experts will guide you through                    |
| 40:51      | the process of establishing standardised IT processes for your organisation.                              |
| 40:57      | Delegating is critical when it comes to getting stuff done.                                               |
| 41:00      | There are plenty of times where, yes, you can and should do it all, but when it comes                     |
| 41:04      | to running a business, if you're spending eight hours onboarding a new employee when                      |
| 41:08      | you should be spending eight hours, you know, preparing the thing that actually the company               |
| 41:12      | is about, then that's not just eight hours because that's a lot more time.                                |
| 41:17      | Nobody else can do that.                                                                                  |
| 41:18      | You're now behind.                                                                                        |
| 41:19      | You can't catch up again.                                                                                 |
| 41:20      | So there are many times where I would have loved to have something like Electric and                      |
| 41:24      | anybody who's thinking, gosh, IT is taking way too long with this sort of thing and they're               |
| 41:28      | doing the IT themselves really needs to go and check out Electric.                                        |
| 41:32      | For Automators listeners, Electric is offering a free pair of beat solo free headphones for               |
| 41:36      | taking a qualified meeting.                                                                               |
| 41:37      | Just go to electric.ai slash Automators, that's electric.ai slash Automators.                             |
| 41:42      | Go there now to get your free pair of beat solo free headphones today for scheduling                      |
| 41:46      | a meeting.                                                                                                |
| 41:47      | Our thanks to Electric for their support of this show.                                                    |
| 41:51      | So we have an update coming out after the show releases, iOS 16.5, which is admittedly                    |
| 41:58      | a smaller update than 16.4, not only for shortcuts, but for the operating system in general.              |
| 42:04      | So we do have a few updates that will be hitting your device as you update to 16.5.                       |
| 42:09      | Yeah, yeah, we do.                                                                                        |
| 42:12      | One of them is, for those of you who've noticed, there was a screen time sync bug in iOS 16.4             |
| 42:20      | where the usage of the app wouldn't sync properly between platforms and that was really bugging           |
| 42:25      | me on some things and I'm sure it was bugging some other people as well.                                  |
| 42:29      | And that's not fixed, which is great.                                                                     |
| 42:32      | This is not the only thing, but what I've really been, I was quite happy in some ways                     |
| 42:38      | to see that there weren't really any shortcuts updates in iOS 16.5 because that means that                |
| 42:46      | the shortcuts team were working super hard and was coming at [[WWDC]].                                        |
| 42:50      | So yeah, that's always exciting when it's like 16.5 is here, but is there a specific                      |
| 42:57      | shortcut update?                                                                                          |
| 42:58      | And there are a couple of little tweaks that might be in there, some sort of bug fixes                    |
| 43:02      | and improvements, but there aren't any release updates that people have explicitly noticed,               |
| 43:10      | which is quite good because that means shortcuts team are working hard and quite frankly, they            |
| 43:13      | gave us a pretty nice present list in 16.4 and I've been playing with that stuff a lot                    |
| 43:20      | and it's been really helpful for me to be able to use some of these features now because                  |
| 43:26      | I think that was one of the things that I was missing before.                                             |
| 43:29      | Being able to intercom is quite cool, but the things that are really making a big difference              |
| 43:36      | for me are things like being able to toggle the always on display and being able to log                   |
| 43:40      | out on my Mac or put my display to sleep as part of a shortcut.                                           |
| 43:45      | And that has actually been huge as far as my shortcuts usage on macOS and iOS goes because                |
| 43:54      | being able to toggle and out certifications has actually been very, very nice.                            |
| 43:58      | Yeah, 16.4 was a big update in terms of automation and I think you're right.                              |
| 44:04      | I think that was kind of the last push for iOS 16 and after that they probably move full                  |
| 44:10      | time into what we're going to get at the [[WWDC]] next month.                                                 |
| 44:15      | But you're right, I also feel like there's a lot of really good quality of life improvements.             |
| 44:21      | You talked about intercom, I just want to bang the drum on that one more time.                            |
| 44:25      | I am increasingly fighting excuses to send text to my HomePods.                                          |
| 44:30      | It's just a great way to get a notification and because it's scriptable through shortcuts,                |
| 44:36      | it's very easy.                                                                                           |
| 44:38      | So any text that you can write a script to generate can come out of your HomePods and                    |
| 44:45      | I'm continuing to find uses for it.                                                                       |
| 44:47      | Like I give it audio alerts for me like in the day or to switch to a different production                 |
| 44:55      | thing that I'm working on.                                                                                |
| 44:56      | It's just a really good system for me.                                                                    |
| 44:59      | I love the audio component of it.                                                                         |
| 45:01      | Yes, yeah, it really is.                                                                                  |
| 45:03      | I mean, I live alone so I have considerably less uses for this but I have been tying this                 |
| 45:09      | into my washing machine and tumble dryer and dishwasher updates so that when they're actually             |
| 45:15      | clean, need emptying, then it can intercom if I'm at home or I mean, it can intercom                      |
| 45:19      | if I'm not at home but the automation I've been using is only when I'm at home to intercom                |
| 45:24      | and say, hey, the washing machine is done, which is surprisingly effective for getting                    |
| 45:29      | me out of my chair.                                                                                       |
| 45:30      | The first time it happened, I think I possibly needed some assistance to be scraped off the               |
| 45:33      | ceiling because my HomePod talked to me and I didn't prompt it to do so directly beforehand.             |
| 45:40      | But you know, it is nice having that there and I can imagine for those folks with families                |
| 45:45      | and so on having the ability to have intercom say, you know, data is ready with just the                  |
| 45:50      | tap of a button, it would be, you know, very, very handy.                                                 |
| 45:54      | Agreed.                                                                                                   |
| 45:55      | I really feel like overall, I guess we could just look at iOS 16 in general.                              |
| 46:01      | I feel like we had a good year for automation, probably the best year for automation from                 |
| 46:07      | [[Apple]] that we've had yet, frankly, the, you know, it was harder in the years prior.                       |
| 46:13      | It seems like every year they were expanding, you know, first they had to get shortcuts                   |
| 46:17      | working, then they had to kind of get the second tier tool set installed, which they                      |
| 46:22      | didn't have the first year, then they had to get the Mac version running, which I believe                 |
| 46:26      | was, you know, it took some time to get that right.                                                       |
| 46:29      | But this was the first full year we had where they didn't have one of those boil the ocean                |
| 46:34      | projects going on, and I feel like a lot of little subtle changes showed up because now                   |
| 46:40      | they can spend time on that stuff.                                                                        |
| 46:42      | Yeah, yeah.                                                                                               |
| 46:43      | And I think that's the thing, isn't it?                                                                   |
| 46:45      | You know, once you're not dealing with everything is on fire, then it's suddenly much easier              |
| 46:50      | to go, oh, wait, this thing is bugging people, you know, or they've been asking for this                  |
| 46:56      | or it would be really nice if we could expand and add this.                                               |
| 47:00      | And then they've been able to go and do so.                                                               |
| 47:01      | So for me, one of the things that I have really been benefiting from massively as far as the              |
| 47:07      | shortcut updates goes is, I mean, this is partially the focus mode integration, but                       |
| 47:12      | it's also then available as an action in shortcuts.                                                       |
| 47:15      | Things like toggling the always on display is really, really useful and also toggling                     |
| 47:20      | announce notifications.                                                                                   |
| 47:21      | Now, announce notifications can't be toggled through the focus modes directly, but it can                 |
| 47:26      | be toggled through shortcuts, which means that I can turn on announce notifications                       |
| 47:31      | with certain focus modes.                                                                                 |
| 47:34      | So you know, it obviously announced certifications can be turned on automatically with car play           |
| 47:40      | and that's great.                                                                                         |
| 47:42      | But I actually usually have a period of time when I get home after I've driven home from                  |
| 47:47      | somewhere where I'm going to be sort of, you know, dashing around the house, sorting things               |
| 47:51      | out, putting things away and things like that.                                                            |
| 47:53      | And during that time, I still don't want to be missing any notifications, especially if                   |
| 47:56      | I've been having a conversation with somebody sort of on and off in the car through messages              |
| 48:01      | and Siri helping us communicate.                                                                          |
| 48:05      | And so what I found now is that when I, when my driving mode disables, it checks if I'm                   |
| 48:10      | at home or approximately at home, and then if I am, then it will turn on announce notifications           |
| 48:16      | for me by turning on another focus mode, which is, I can't remember what I've called that                 |
| 48:22      | focus mode now.                                                                                           |
| 48:23      | I'll have to have a look after the show, but I have a focus mode, which is essentially                    |
| 48:26      | Rose is going slightly mad, and then it has announce notifications on, and that focus                     |
| 48:32      | mode gets turned on for half an hour after I get, or for a period of half an hour when                    |
| 48:38      | I get home, if I've been driving.                                                                         |
| 48:41      | And then I can also use that when doing other things as well, which is just, it's really                  |
| 48:45      | nice that all of this can sort of tie in together so that you have all of these options.                  |
| 48:51      | And also, fun fact, the airdrop preference receiving stuff.                                               |
| 48:56      | I actually at the weekend created a shortcut for a friend that is on the home screen of                   |
| 49:02      | their phone.                                                                                              |
| 49:03      | So now when they tap on it, it pops up and asks them, Hey, do you want airdrop for everyone?              |
| 49:07      | Then they tap yes to confirm.                                                                             |
| 49:08      | And that just turns on airdrop to everyone for 10 minutes because that's all it can do.                   |
| 49:13      | But that's, you know, that was something that they were, they were struggling a little bit                |
| 49:17      | and they, they've got some motor issues, so they're struggling a little bit to tap and                    |
| 49:21      | hold in the control centre to get into those preference areas and going into settings                     |
| 49:27      | can take, you know, quite a few taps, but now they have a home screen button for it,                      |
| 49:30      | which is great.                                                                                           |
| 49:31      | I really feel like that's a separate topic for some day.                                                  |
| 49:34      | We should build a whole group of automations you can create for non-geek friends through                  |
| 49:40      | shortcuts because there's a lot of little things like that where people have trouble                      |
| 49:45      | changing settings or making something happen that they could really use every day, but                    |
| 49:49      | they're never going to go figure out how to do it and they're going to forget how to                      |
| 49:53      | do it, but you give them an airdrop button and it, it changes the, you know, the airdrop                  |
| 49:58      | recipients.                                                                                               |
| 49:59      | And I feel like that's something we should probably cover a day because I think a lot                     |
| 50:03      | of them, I think a lot of listeners would have good ideas for that too, but it's just                     |
| 50:08      | something that for non-nerd friends would, you can allow them to take advantage of shortcuts              |
| 50:12      | even if we're kind of doing the work for them.                                                            |
| 50:15      | Yeah.                                                                                                     |
| 50:16      | Yeah.                                                                                                     |
| 50:17      | So I created a shortcut for my ballet t-shirt because the music was formatted with the exercise           |
| 50:21      | off to the name of the track.                                                                             |
| 50:23      | And of course, as far as she's concerned, the exercise is the most important part.                        |
| 50:26      | So I was able to create a little shortcut that just shows her the list with the exercise                  |
| 50:30      | first and the name of the track second, which just solved the whole problem for her.                      |
| 50:34      | And she's really thrilled with it.                                                                        |
| 50:36      | She probably thinks you're a rock star now.                                                               |
| 50:38      | Well, she certainly greatly appreciated my assistance, which was lovely.                                  |
| 50:42      | I mean, I greatly appreciate her ballet classes.                                                          |
| 50:44      | So I think that that was beneficial for both of us there.                                                 |
| 50:48      | But yeah, what other iOS 16.4 and macOS 13.3 and watchOS 9.4 updates are you using in                     |
| 50:54      | Shortcuts, David?                                                                                         |
| 50:55      | Well, one of the ones I wanted to talk to you about is you're putting the computer to                     |
| 51:00      | sleep with the shortcut because starting with 16.4, you can shut down, restart, lock                      |
| 51:06      | display, log out, sleep, and put the device to sleep all with shortcuts.                                  |
| 51:12      | I mean, not all those are on all the platforms, but you know, I mean, like the restart is                 |
| 51:17      | on the phone, whereas the put display to sleep is on the Mac.                                             |
| 51:24      | But you are using those.                                                                                  |
| 51:25      | Could you tell us a little bit how you're using those?                                                    |
| 51:27      | Because I haven't really found a use for it.                                                              |
| 51:30      | I have the [[Apple]] keyboard and maybe that's why I don't find a use for it because I've                     |
| 51:34      | got the touch ID button.                                                                                  |
| 51:35      | I just press the button when I walk away and it takes care of it for me.                                  |
| 51:39      | Yeah.                                                                                                     |
| 51:40      | So one of the things that I'm using this for is actually, and this is part of a longer                    |
| 51:46      | shortcut that I wrote that is then run through [[Keyboard Maestro]] of all things, actually.                  |
| 51:52      | I could probably have written everything that I needed to do in [[Keyboard Maestro]], but as                  |
| 51:55      | it is, I only have my iPad with me and I realised I needed to run a series of actions on my               |
| 52:00      | Mac that was at home and shut it down and my internet connection wasn't great.                            |
| 52:05      | So I wasn't confident that I was going to be able to remote desktop in my home internet                   |
| 52:08      | and that was fine, but my internet where I was with my iPad was not great and I wanted                    |
| 52:13      | to do a bunch of things there and then shut it down.                                                      |
| 52:16      | Actually, no, I think I wanted to restart it.                                                             |
| 52:19      | That was it.                                                                                              |
| 52:20      | But it doesn't matter either way what I wanted to do.                                                     |
| 52:23      | So I wrote a shortcut that would do pretty much everything.                                               |
| 52:26      | The only thing I had to try and do via remote desktop, which did work, was add a sleep action             |
| 52:33      | in there because the sleep action is only available on the Mac.                                           |
| 52:36      | It's not available on iOS.                                                                                |
| 52:39      | So it's log out, sleep and put display to sleep on our Mac OS only, sorry.                                |
| 52:45      | But yeah, so I had this and so it just kind of ran through, ran some scripts to clear                     |
| 52:52      | some stuff up and so on and then it restarted the machine for me, which worked great.                     |
| 52:57      | I was very pleased with it and I came home a couple of hours later and my machine had                     |
| 53:02      | been restarted as I had hoped it would be.                                                                |
| 53:06      | So yeah, I've just added this into some other stuff.                                                      |
| 53:10      | It tends to be where I've already got a shortcut that I am using as part of a shutdown routine            |
| 53:17      | and then I can just add the shutdown or the restart or the put display to sleep into that                 |
| 53:22      | instead of having it as a separate action run through something else afterwards.                          |
| 53:28      | But it's quite nice, at the end of my day, I don't just put my display to sleep or sleep                  |
| 53:34      | my computer.                                                                                              |
| 53:35      | I actually have an action that I run that will quit any apps that I probably don't want                   |
| 53:40      | to leave running overnight or don't need to leave running overnight and do everything                     |
| 53:45      | and then put the machine to sleep or shut it down depending.                                              |
| 53:48      | So for example, before I go into the office, we had some feedback asking for a project                    |
| 53:53      | and prep a little while ago and I mentioned, before I go into the office, I have a checklist              |
| 53:57      | that I follow of a bunch of things to do.                                                                 |
| 54:00      | One of the things I do is I run a shortcut, which will kill a bunch of apps that I don't                  |
| 54:04      | need and things like that and shut my machine down.                                                       |
| 54:08      | Now, you might be thinking, shut your machine down, surely that kills all the apps.                       |
| 54:11      | It does, unless the restart apps option is checked.                                                       |
| 54:16      | But this is quite nice because then it can do all these things and it will actually pop                   |
| 54:21      | up the checklist in OmniFocus for a little bit and then a little bit later it will then                   |
| 54:27      | start shutting down my machine.                                                                           |
| 54:29      | That's the whole automation that I've got running with a bunch of steps excluded.                         |
| 54:33      | The fact that I can have the end of the section or the final puzzle piece as it were in shortcuts         |
| 54:42      | also shut the machine down for me is great because now when I get to the office, I don't                  |
| 54:46      | have to worry that I've had loads of servers and stuff running in the background and it's                 |
| 54:51      | killed my battery life.                                                                                   |
| 54:54      | Another thing I've been playing with more is True Tone.                                                   |
| 54:57      | I feel like True Tone is something I have a mixed feelings toward.                                        |
| 55:01      | When it first came out, I tried it and I couldn't tell that it made any difference, but at the            |
| 55:06      | same time, I've really been trying to work on sleeping more regularly and being more                      |
| 55:12      | careful about this stuff, so I re-enabled it, I don't know, three or four months ago.                     |
| 55:17      | One of the nice new features is I can now add an automation trigger not only to turn                      |
| 55:21      | it on, but to turn it off.                                                                                |
| 55:23      | If I'm doing something in the evening and I notice my screen is True Tone-ing itself                      |
| 55:27      | to yellow, I can run a script that takes it out, I can also incorporate it into things                    |
| 55:33      | like if I'm going to start screencasting, I want to do a screencast setup, I always                       |
| 55:36      | make a point of turning True Tone off and it's just a nice little trigger, it's not                       |
| 55:41      | something I need all the time, but [[Apple]] gave that to me for free with 16.4 and I find it                 |
| 55:47      | sneaking its way into several of my shortcuts now.                                                        |
| 55:50      | Yes, and it's just really nice to be able to do things like that, like turning on and                     |
| 55:55      | off and out notifications or turning on and off [[Stage Manager]] as well, which, you know,                   |
| 56:01      | it all adds up.                                                                                           |
| 56:03      | And the fact that things like your device details can now get the OS build number, that                   |
| 56:09      | doesn't sound like a big deal, but then I've got, for example, my PushCut Automation Server,               |
| 56:13      | which is sitting right here, which is a great device and I kind of forget it exists a lot                 |
| 56:19      | of the time, which is good and bad for all of the reasons.                                                |
| 56:22      | The bad part is that I forget that it needs updating because it's just sitting there running              |
| 56:28      | shortcuts all the time.                                                                                   |
| 56:30      | And so I have a shortcut now that runs until it's weak that checks the current OS build                   |
| 56:36      | number and checks whether or not I should have updated it and if I should, then it                        |
| 56:39      | tells me it adds a thing to OmniFocus to do so.                                                           |
| 56:44      | And find photos can now find your screen recordings, which is great because then you don't actually       |
| 56:49      | have to, you know, figure out a different way to filter your screen recordings in shortcuts.              |
| 56:54      | So now I can actually get my screen recordings from today and decide if I want to keep them               |
| 56:59      | or not.                                                                                                   |
| 57:00      | And that's the sort of thing that ends up adding up a lot for productivity improvements                   |
| 57:05      | with automation.                                                                                          |
| 57:07      | And I really believe that the trick to this is knowing of the existence of these actions                  |
| 57:13      | with shortcuts, well, any automation, but particularly shortcuts, because when you                        |
| 57:18      | start building automations, if you know that you have the ability to run that toggle or                   |
| 57:24      | to turn off True Tone, then you may have a circumstance where it makes sense to use it,                   |
| 57:30      | but you're never going to use it if you don't know it's there.                                            |
| 57:32      | Exactly.                                                                                                  |
| 57:33      | And I think that's the thing where, you know, if you, yeah, you don't know what you don't                 |
| 57:39      | know, right?                                                                                              |
| 57:40      | But by hopefully listening to this podcast and others, you'll find out about all these                    |
| 57:44      | things where you can do things that you wanted to solve.                                                  |
| 57:49      | And that's where it all ends up sort of adding up because, yeah, I think a lot of my automation           |
| 57:55      | ideas and so on come from just somebody mentioned something and they might not be talking automation,     |
| 58:00      | but because they mentioned something, it then twink, you know, makes something click in                   |
| 58:05      | my brain and, you know, that trigger is fired.                                                            |
| 58:08      | And then suddenly my brain goes, oh, well, that's useful.                                                 |
| 58:13      | You know, so, yeah, it's nice.                                                                            |
| 58:15      | You know, you can now move a window on macOS with shortcuts, which you couldn't do before.                |
| 58:21      | And of course, all these things got a little bit more powerful as, you know, time went                    |
| 58:25      | on just because more apps are adding their own shortcut sections.                                         |
| 58:29      | So moving a window on its own might not be something you want to do, but once you've                      |
| 58:32      | got an action from an app that you do want to have a window open for it, but maybe the                    |
| 58:37      | app always opens the window, you know, in the middle of your current display and you want                 |
| 58:42      | it to move into the top right hand corner of your secondary display, well, now you can                    |
| 58:46      | do that.                                                                                                  |
| 58:47      | And you can combine that all together with shortcuts.                                                     |
| 58:50      | Can I just say, Rose, that I think the inflection of your inner voice is precious.                        |
| 58:56      | You know, that, oh, you can now do this thing.                                                            |
| 58:59      | Yeah.                                                                                                     |
| 59:00      | Oh.                                                                                                       |
| 59:01      | Yeah.                                                                                                     |
| 59:02      | Yeah.                                                                                                     |
| 59:03      | It's, is it the meerkats?                                                                                 |
| 59:05      | I think it might be the meerkats in Madagascar where they're all sitting there and they go,               |
| 59:11      | oh, at the same time.                                                                                     |
| 59:13      | Yes.                                                                                                      |
| 59:14      | Yes.                                                                                                      |
| 59:15      | Well, that's Rose and me when we're looking at shortcut stools, gang.                                     |
| 59:17      | That's it.                                                                                                |
| 59:18      | We are the meerkats.                                                                                      |
| 59:19      | Well, there are worse things in life, you know, at least we've got nice big eyes.                         |
| 59:27      | This episode of The Automators is brought to you by Factor.                                               |
| 59:30      | Go to factormeals.com/automators50 for healthy, fully prepared food, delivered to                   |
| 59:36      | your door and get 50% off your first box.                                                                 |
| 59:39      | Spring is here and who doesn't want wholesome and convenient meals to energise you for warmer,            |
| 59:45      | more active days and to keep you on track and reaching your goals.                                        |
| 59:49      | Factor is America's number one ready to eat meal kit and can help you fuel up fast with                   |
| 59:54      | ready to eat meals delivered straight to your door.                                                       |
| 59:57      | You'll save time, eat well and tackle everything on your to-do list.                                      |
| 01:00:02   | If you're too busy to cook, you can skip the trip to the grocery store, skip the chopping,                |
| 01:00:06   | prepping and cleaning up too.                                                                             |
| 01:00:08   | Fresh fresh, never frozen meals are ready in just two minutes.                                            |
| 01:00:12   | So all you have to do is heat and enjoy, then get back outside to soak up the warmer weather.             |
| 01:00:18   | Factor offers delicious flavour packed options on the menu each week to fit a variety of                   |
| 01:00:22   | lifestyles including keto, calorie smart, which are around or less than 550 calories                      |
| 01:00:28   | per serving, vegan and veggie, which you have the option to add protein on selected                       |
| 01:00:34   | meals and protein plus, which gives you 30 grams of protein or more per serving.                          |
| 01:00:39   | And because they're prepared by chefs and approved by dietitians, each meal has everything                |
| 01:00:44   | you need.                                                                                                 |
| 01:00:45   | With more than 34 weekly options, there's always something new to try, plus you can                       |
| 01:00:49   | choose from more than 45 add-ons including breakfast items like apple cinnamon pancakes,                  |
| 01:00:56   | bacon and cheddar egg bites and potato bacon and egg breakfast skillet plus cold pressed                  |
| 01:01:01   | juices, shakes and smoothies.                                                                             |
| 01:01:03   | And if you're looking to pack in more protein, you can add on filling options like a salmon               |
| 01:01:08   | filet or chicken wings to your factor meal.                                                               |
| 01:01:11   | Not only is factor cheaper than take out, but meals are ready faster than restaurant                      |
| 01:01:15   | delivery in just two minutes and you can rest assured you're making a sustainable choice                  |
| 01:01:21   | because factor offsets 100% of their delivery emissions to your door, source 100% renewable               |
| 01:01:27   | electricity for their production sites and offices and features sustainably sourced seafood               |
| 01:01:32   | in their meals.                                                                                           |
| 01:01:33   | I like to cook dinner for my wife when she's off at work and when she comes home, I like                  |
| 01:01:37   | to have it ready for her.                                                                                 |
| 01:01:39   | So I signed up for factor to give it a try and man, it's good.                                            |
| 01:01:42   | We got stuffed pepper casserole and it was delicious.                                                     |
| 01:01:45   | String beans, stuffed peppers, got it ready in no time at all and it was honestly much                    |
| 01:01:51   | better than something I could have made and it was delicious.                                             |
| 01:01:55   | And the two minute thing is right, you can get these meals ready in no time.                              |
| 01:01:59   | This may get factor and enjoy clean eating without the hassle.                                            |
| 01:02:03   | Simply choose your meals and enjoy fresh, flavour packed meals delivered to your door                      |
| 01:02:08   | ready in just two minutes, no prep, no mess.                                                              |
| 01:02:11   | Head to factormeals.com/automators 5050 you got to put that at the end and use the                  |
| 01:02:17   | code automators 50 to get 50% off your first box.                                                         |
| 01:02:21   | That's code automators 50 at factormeals.com/automators 50 to get that 50% off your                 |
| 01:02:28   | first box.                                                                                                |
| 01:02:29   | Give it a try.                                                                                            |
| 01:02:30   | You won't regret it.                                                                                      |
| 01:02:31   | And our thanks to factor for their support of the automators podcast and all of relay                     |
| 01:02:35   | FM.                                                                                                       |
| 01:02:36   | Well, we're trying to keep up with questions and answers.                                                 |
| 01:02:40   | There's always a lot coming in.                                                                           |
| 01:02:43   | We got a couple.                                                                                          |
| 01:02:44   | One was on mastodon.                                                                                      |
| 01:02:45   | Yeah.                                                                                                     |
| 01:02:46   | Yeah.                                                                                                     |
| 01:02:47   | So I had some feedback sent to me on mastodon, which was lovely as just saying that after                 |
| 01:02:53   | our recent Q&A episode or automators feedback show, that the segment where we talked about                |
| 01:03:02   | our project list and specifically my automations from my day at the office, it really spoke               |
| 01:03:07   | to Josh.                                                                                                  |
| 01:03:08   | And so he's created his own little shortcut to schedule events in a calendar and create                   |
| 01:03:12   | a little bag checklist as well as things to do the day before such as ironing an outfit                   |
| 01:03:16   | and setting the alarm earlier.                                                                            |
| 01:03:19   | And so he was really grateful that I shared that and I'm really glad I did as well because                |
| 01:03:22   | it is the sort of thing where, okay, yeah, a checklist of this stuff might be kind of                     |
| 01:03:29   | almost silly and redundant in some ways, but that day that you forget your charger will                   |
| 01:03:33   | be the day that you think, why don't I use a checklist for this stuff?                                    |
| 01:03:37   | And this is why I always use a checklist.                                                                 |
| 01:03:39   | Last time I was in the office, my boss didn't even ask anybody else in the room.                          |
| 01:03:42   | He just came and said, Rose, do you have a USB key that's got 32 gigabytes of moral                       |
| 01:03:46   | storage on it?                                                                                            |
| 01:03:47   | And it's like, yes, yes, I do.                                                                            |
| 01:03:48   | I have one of these in my handbag at old times because I'm a weirdo and it's USB-C at one                 |
| 01:03:53   | end and USB-A at the other.                                                                               |
| 01:03:54   | It's a sand desk for anybody who's curious, but I have my checklist, so I have things                     |
| 01:03:59   | like that with me at old times and that is just really helpful.                                           |
| 01:04:02   | Checklists are never bad ideas.                                                                           |
| 01:04:05   | Let's just say that straight out.                                                                         |
| 01:04:06   | Don't ever shame yourself for having a checklist.                                                         |
| 01:04:10   | That's how airplanes stay in the sky.                                                                     |
| 01:04:12   | Yep, exactly.                                                                                             |
| 01:04:13   | That's how airplanes stay in the sky, how surgeries go successfully and a number of                       |
| 01:04:17   | other things which you can read about in [The Checklist Manifesto](https://atulgawande.com/book/the-checklist-manifesto/), but that's also basically               |
| 01:04:21   | how my life runs.                                                                                         |
| 01:04:22   | My checklist every day consists of check if I need to do this, check if I need to do                      |
| 01:04:27   | that, check if I need to do the other thing.                                                              |
| 01:04:28   | And if I don't need to do them, I get to check them off.                                                  |
| 01:04:30   | If I do need to do them, then when I check them, there's a thing in the notes where                       |
| 01:04:34   | I can add those texts in there for me, so yeah, those tasks in, so that makes my life                     |
| 01:04:40   | easier.                                                                                                   |
| 01:04:41   | I heard from Mike, love listening to you guys, but I'm confused, which automation platform                |
| 01:04:47   | should I learn first, [[Shortcuts]], [[AppleScript]], [[Java]], what?                                                 |
| 01:04:50   | He said what.                                                                                             |
| 01:04:51   | Okay.                                                                                                     |
| 01:04:52   | Well, I have a very good piece of advice for Mike that I'm going to start with.                           |
| 01:04:56   | Do not learn Java.                                                                                        |
| 01:04:57   | If you want something scripty, you probably mean [[JavaScript]].                                              |
| 01:05:02   | If you learn Java, you're going to be doing a lot of typing, long variable names and class                |
| 01:05:06   | names and function names are common in Java, in fact, that's the style, choice of language.               |
| 01:05:11   | You may want [[JavaScript]] because that can run on your phone and your iPad and a Mac.                       |
| 01:05:16   | You might want shortcuts because if you don't have any experience with writing automations,               |
| 01:05:21   | it's quite nice to have blocks that you can drag and drop into place.                                     |
| 01:05:24   | [[AppleScript]] could be a good choice if you're just looking to automate stuff on the Mac.                   |
| 01:05:29   | Keyboard maestro might be a good choice if you want to be able to download lots of Mac                    |
| 01:05:33   | automations that people have already made and just use them.                                              |
| 01:05:37   | It really kind of depends.                                                                                |
| 01:05:38   | What do you think, David?                                                                                 |
| 01:05:39   | I think it depends on what problem you're trying to solve.                                                |
| 01:05:44   | If you just want to start learning automation, I would recommend shortcuts because it's very              |
| 01:05:50   | easy to get started.                                                                                      |
| 01:05:52   | It's drag and drop like Rose was saying.                                                                  |
| 01:05:54   | What I would emphasise is do not try to make 100 action shortcuts.                                        |
| 01:06:00   | Just make short little shortcuts that solve little problems.                                              |
| 01:06:03   | Honestly, I think that's what it's really best at.                                                        |
| 01:06:07   | You'll be surprised with an afternoon, how much you can learn and how quickly you can                     |
| 01:06:13   | bring this into your life and start getting some benefit from it.                                         |
| 01:06:16   | I think that's a very easy honour app.                                                                     |
| 01:06:19   | Trying to start with [[AppleScript]] is a bad idea because it's a programming language and it's               |
| 01:06:24   | a little bit funky as a programming language.                                                             |
| 01:06:27   | You could spend months at it before you really get good enough to use it, whereas shortcuts               |
| 01:06:32   | are going to get immediate payoff.                                                                        |
| 01:06:36   | If you're trying to solve specific problems, then it's a different story.                                 |
| 01:06:41   | You've got a bunch of documents and you want to just get really good at automating documents.             |
| 01:06:45   | I would recommend Learn [[Hazel]].                                                                            |
| 01:06:47   | Hazel's a great app, but it really shines when it's managing documents.                                   |
| 01:06:56   | If you're doing something like shortcuts and you're getting good at it, but you want to                   |
| 01:06:59   | go level deeper, then I think you go to [[Keyboard Maestro]], which has some more powerful tools.             |
| 01:07:05   | I know that people will write me saying there's things that shortcuts can do that Keyboard                |
| 01:07:08   | Maestro can't, but I'm going to assume you've already got a handle on shortcuts when you                  |
| 01:07:13   | go to [[Keyboard Maestro]] and then you can combine them.                                                     |
| 01:07:17   | The good knowledge of all this, I really think, is that all this stuff at this point builds               |
| 01:07:21   | on each other.                                                                                            |
| 01:07:24   | Once you learn shortcuts, maybe you go to [[Keyboard Maestro]], then suddenly things like                     |
| 01:07:28   | [[AppleScript]], [[JavaScript]], all that stuff becomes additive and you can learn it as you need                 |
| 01:07:35   | it.                                                                                                       |
| 01:07:36   | My recommendation if you're getting started with automation, start easy and I can confidently             |
| 01:07:42   | say no matter which [[Apple]] platform you're on, that's shortcuts.                                           |
| 01:07:46   | I would definitely also recommend shortcuts.                                                              |
| 01:07:49   | If you're a programmer and you've already done some of this stuff before, maybe even                      |
| 01:07:55   | if it was a while ago and you're like, I'm not sure about drag and drop blocks, I kind                    |
| 01:07:59   | of really wanted to type something, I'd definitely be recommending [[JavaScript]] as the language             |
| 01:08:05   | just because then you can create actions for [[Obsidian]] or extensions for [[Obsidian]].                         |
| 01:08:10   | You can create actions for [[Drafts]].                                                                        |
| 01:08:12   | You can create [[Safari]] bookmarklets and all sorts of things.                                               |
| 01:08:16   | That gives you a lot of options and especially with things like Scriptable and so on, then                |
| 01:08:23   | [[JavaScript]] is just a good place to start for that, but really, you should probably look                   |
| 01:08:30   | at shortcuts first and don't forget if you're there going, okay, but what if I can't do                   |
| 01:08:34   | something in Shortcuts and I need [[AppleScript]] or I need [[Drafts]] or any [[Keyboard Maestro]]?                   |
| 01:08:40   | Well, Shortcuts has got great action support for lots of things and more importantly, those               |
| 01:08:46   | apps have got action support in Shortcuts, so you can run a [[Drafts]] action on a draft                      |
| 01:08:51   | or on text, you can run [[AppleScript]], you can run a [[Keyboard Maestro]] macro, it's called                    |
| 01:08:55   | Execute Macro, that's the name of the action, but you can do all of these things from the                 |
| 01:09:00   | other stuff, so if you find that you can just download this bit from here or copy that bit                |
| 01:09:04   | from there, then you can stick it all together, duct tape, superglue, WD-40, whatever it is               |
| 01:09:11   | you need, you can stick all that stuff in your automation.                                                |
| 01:09:14   | Your automation does not have to be pretty, your automation has to work and do the thing                  |
| 01:09:17   | that you need, and then once you figure out how to make it do the thing that you need                     |
| 01:09:21   | it to do, then at some point you can come back and work or make it look pretty, but                       |
| 01:09:26   | a pretty automation that doesn't work is useless, an automation that works is priceless.                  |
| 01:09:30   | Yeah, and spend a little time, and if you're getting started from just the beginning, like                |
| 01:09:34   | I said, just make some small shortcuts, you'll be surprised how quickly you can start picking             |
| 01:09:39   | this stuff up and spend some time going through the available actions, Rose has a book, I                 |
| 01:09:44   | have a field guide, there's resources out there where you can learn about this stuff,                     |
| 01:09:48   | but just becoming aware of the tool set is going to send you right on your way, Mike,                     |
| 01:09:53   | you're going to be great.                                                                                 |
| 01:09:55   | We also heard from Susan, she's like, you guys keep talking about focus modes, I want                     |
| 01:10:00   | to take better advantage of them, but I don't know how to get started, any advice?                        |
| 01:10:04   | Well, I mean, my first piece of advice would be if you're not already using the sleep and                 |
| 01:10:09   | the driving focus modes, you should take a look at those.                                                 |
| 01:10:12   | If you don't drive and therefore driving focus mode seems useless to you, but you do commute,             |
| 01:10:16   | for example, you take trains or buses or walk, cycle, whatever, then look at creating commuting           |
| 01:10:22   | focus mode instead, which gives you the things that you need, because for me, the power of                |
| 01:10:27   | focus mode really is, yes, there are shortcuts or automations that can take advantage of                  |
| 01:10:33   | focus modes and be triggered by focus mode starting and ending, but for me, the biggest                   |
| 01:10:41   | things come from doing things like customising the screens that I see, changing which calendars           |
| 01:10:46   | show up, so filtering my calendars, filtering my inboxes, automatically changing my watch                 |
| 01:10:51   | face and so on.                                                                                           |
| 01:10:53   | So if when you go to the gym, you want a particular watch face, well, or when you do a workout            |
| 01:10:57   | at home, you want a particular watch face, you want a fitness focus mode and you want                     |
| 01:11:01   | to set a watch face for it.                                                                               |
| 01:11:03   | If you want wallpaper at the weekend that looks like this, then you can create a weekend                  |
| 01:11:09   | focus mode.                                                                                               |
| 01:11:10   | It doesn't have to turn off any notifications or turn anything else on, it can just change                |
| 01:11:17   | your lock screen.                                                                                         |
| 01:11:18   | But you can also change your home screens and things like that as well.                                   |
| 01:11:22   | And don't forget the schedules, you can have multiple schedules for focus mode, so that                   |
| 01:11:26   | means you can have multiple locations, multiple apps, multiple time sets, all sorts of things.            |
| 01:11:33   | So really, I would just go in and look at the focus filters and see if you used Evan                      |
| 01:11:38   | Think, then you can filter your databases.                                                                |
| 01:11:41   | If you use Good Links, you can filter your tags, if you use One Password, you can choose                  |
| 01:11:45   | the account or collection that you want to use, Agenda, Messages, [[Safari]], Streaks, all                    |
| 01:11:51   | of these apps, even Tasked has got support for this and [[Safari]].                                           |
| 01:11:55   | And then you've also got things like you're always on display, the appearance and low                     |
| 01:11:59   | power mode.                                                                                               |
| 01:12:00   | So you can turn on and off the always on display, set your appearance to light mode or dark               |
| 01:12:05   | mode and have low power mode turn on or off automatically as part of a focus mode.                        |
| 01:12:12   | So maybe you've got a trip coming up and you're going to be doing some travel or you're not               |
| 01:12:17   | going to have access to power.                                                                            |
| 01:12:18   | So maybe you create a travel focus mode, which also puts your phone in low power mode so                  |
| 01:12:22   | that you have low power mode on all the time when you're traveling.                                       |
| 01:12:26   | That could be quite useful.                                                                               |
| 01:12:27   | Yeah.                                                                                                     |
| 01:12:28   | And I would recommend also, like where a few minutes ago I was saying, don't make a                       |
| 01:12:34   | hundred step shortcut.                                                                                    |
| 01:12:36   | I feel like every time I talk about focus modes, I am recommending you set up a hundred                   |
| 01:12:40   | step shortcut.                                                                                            |
| 01:12:42   | I think I have gone so far down the rabbit hole of focus modes that I've lost the thread                  |
| 01:12:47   | for some people that just want it to be easy.                                                             |
| 01:12:49   | I was talking to a MacSparky labs member recently who, you know, when they go to church,                 |
| 01:12:55   | his wife just didn't want the phone to ring, except if it was like her daughter.                          |
| 01:12:58   | So he set up a really simple focus mode, you know, punched a hole in it for a few select                  |
| 01:13:04   | people, and he added a location trigger.                                                                  |
| 01:13:06   | So when she gets to church, it turns on automatically when she leaves church, it turns off automatically. |
| 01:13:12   | And it really should be that simple.                                                                      |
| 01:13:14   | So my recommendation, Susan would be to find some part of your life where you would like                  |
| 01:13:20   | to change the way you interact with your device, you know, where you want it to be less noisy             |
| 01:13:26   | and build a simple focus mode for that and start simple and then just start gradually                     |
| 01:13:31   | adding on to it.                                                                                          |
| 01:13:32   | And as you learn the process of doing that, it'll come natural.                                           |
| 01:13:37   | If you listen to Automators, you'll figure it out.                                                          |
| 01:13:39   | And then before you know it, you'll start making more.                                                    |
| 01:13:42   | Boy, I sure hope one of the announcements we get at [[WWDC\|WWDCs]], they give us more than 10                      |
| 01:13:47   | focus modes.                                                                                              |
| 01:13:48   | But I'm an edge case.                                                                                     |
| 01:13:52   | I think a lot of people are just fine with just a couple, you know, two or three of them.                 |
| 01:13:57   | But the way to get started is just pick an area of your life where you want your phone                    |
| 01:14:00   | to be less busy in your life and set up a focus mode for it.                                              |
| 01:14:05   | Yeah.                                                                                                     |
| 01:14:06   | Yeah, exactly.                                                                                            |
| 01:14:07   | And I mean, it is as simple as that.                                                                      |
| 01:14:10   | And if you think, well, I don't have any areas in my life where I don't, where, you know,                 |
| 01:14:14   | I want to fill through that, think then a little more laterally of I would like my wallpaper              |
| 01:14:19   | to be different or I would like to have completely different widgets on the home screen of my             |
| 01:14:25   | phone.                                                                                                    |
| 01:14:26   | So you create another home screen and you show that home screen instead or something                      |
| 01:14:29   | like that because there are so many things that you can do with this.                                     |
| 01:14:33   | So it is a case of go, have a little play and check out [[Apple]] has a little guide as                       |
| 01:14:38   | well on focus modes.                                                                                      |
| 01:14:40   | So we can put a link to that in the show notes so that folks can have a look there.                       |
| 01:14:45   | But yeah, it is just a case of start simple and then see what happens.                                    |
| 01:14:52   | All right.                                                                                                |
| 01:14:53   | I think we'll end it there.                                                                               |
| 01:14:54   | We are the Automators Podcast.                                                                            |
| 01:14:55   | You can find this at relay.fm/automators.                                                           |
| 01:14:59   | You can find our forums at talk.automators.fm.                                                            |
| 01:15:02   | I want to thank our sponsors today.                                                                       |
| 01:15:05   | That's our friends at Express VPN, Electric and Factor.                                                   |
| 01:15:09   | On Automators Max today, Rose and I are going to talk about transitioning and auditing existing           |
| 01:15:15   | automations.                                                                                              |
| 01:15:16   | We've got some cool stuff to talk about there.                                                            |
| 01:15:17   | That is the ad-free version of the show.                                                                  |
| 01:15:19   | If you subscribe, you're going to get that.                                                               |
| 01:15:21   | Otherwise, we'll see you next time.                                                                       |
| 01:15:23   | Goodbye, folks.                                                                                           |
