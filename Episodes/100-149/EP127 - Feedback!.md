---
status: "incomplete"
fc-date:
  year: 2023
  month: 05
  day: 06
fc-category: "podcast"
podcast: "Automators"
published: 2023-05-06
duration: 4741
formattedduration: "01:19:01"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/127"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators127.mp3"
episode: 127
title: "127: Feedback!"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
It's time for some automation feedback. Topics include task inbox processing, automated check-ins, dumping automation confirmations with Shortcuts, home automation, and time tracking.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 127 Discussion](https://talk.automators.fm/t/127-feedback/15721)

# Sponsors
- [[Network to Code (Sponsor)|Network to Code]] - Your Network Automation Strategy Begins with Data. Explore Nautobot now.
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.

# Show Notes
- [Getting Things Done® - David Allen's GTD® Methodology](https://gettingthingsdone.com/)
- [PushCut | Automatically show your favourite site's recent news on your homescreen](https://www.pushcut.io/)
- [Data Jar](https://datajar.app/)
- [Timery for Toggl](https://Timeryapp.com/)
- [Timing Automatic Mac Time Tracker – Manual Timers Optional](https://timingapp.com/?lang=en)
- [Presence Sensor FP2](https://www.aqara.com/us/product/presence-sensor-fp2)
- [HOOBS™ – USER FRIENDLY HOME AUTOMATION FOR EVERYONE](https://hoobs.com/)

# Transcription
  
| Time Index | Transcription                                                                                          |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automate as the Automation Podcast, where we talk about how to meet your         |
| 00:06      | technology, do everything for you, at least as far as possible.                                        |
| 00:10      | I haven't quite yet figured out the Laundry situation, but you know, I'm working on it.                |
| 00:15      | I'm Rosemary Orchard, and I'm joined, as always, by David Sparks.                                      |
| 00:18      | Hey, David, how are you?                                                                               |
| 00:19      | Great, Rosemary, and super happy to be talking to you again about automation.                          |
| 00:24      | This is going to be a fun one today.                                                                   |
| 00:26      | We've got a bunch of feedback covering a variety of automation topics, so let's dig in.                |
| 00:33      | Yeah, and it's great.                                                                                  |
| 00:35      | We've got some feedback we've kind of grouped together, because there are some similar topics,         |
| 00:39      | and then there's some other feedback that we just put in that we would love to address,                |
| 00:44      | because there's so many questions.                                                                     |
| 00:46      | I love it.                                                                                             |
| 00:47      | And also, for anybody who hasn't tried it, Relay.fm has a lovely new feedback for it.                  |
| 00:51      | If you go to Relay.fm slash Automators, you can send us feedback, and it just puts it                  |
| 00:57      | into a big list where we can see everything, and it's just really nice.                                |
| 01:02      | Of course, you can also post in the forums and so on.                                                  |
| 01:04      | We do keep an eye on that, but we are enjoying the fact that we have lots of feedback and              |
| 01:10      | some wonderful listeners who've got some really great questions for us.                                |
| 01:13      | Yeah, but before we get through that, just want to clarify, we do have the Automators                  |
| 01:17      | Max, which is the ad-free version of the show.                                                         |
| 01:20      | Today, we also have additional content, and we'll be talking about Rose's experimentation              |
| 01:24      | with smart display screens.                                                                            |
| 01:26      | So I guess we got that going for us, too.                                                              |
| 01:29      | But let's dig in.                                                                                      |
| 01:30      | Chris wrote in about GTD process, and inbox reminders, love the show.                                  |
| 01:36      | I'm relatively new to automation with no coding or scripting experience.                               |
| 01:39      | Okay, I'm going to insert here.                                                                        |
| 01:41      | Chris, that's totally fine.                                                                            |
| 01:42      | You can be an automator without having to be a coder.                                                  |
| 01:45      | I'm looking for someplace where I can learn scripting on iOS shortcuts.                                |
| 01:49      | All right, and he says, the shortcut I'm currently looking to create is, if I have any reminders       |
| 01:54      | in my iOS [[Apple Reminders\|Reminders]] inbox on a specific list, can I show notification at a specific time               |
| 02:00      | to sort the inbox GTD style?                                                                           |
| 02:02      | Well, this is one of those things where there is no one solution for this because everybody            |
| 02:09      | has a solution for whatever their system is.                                                           |
| 02:14      | And the good news is, Chris is specified here nicely that he's using, or they're using                 |
| 02:20      | the iOS [[Apple Reminders\|Reminders]] app.                                                                                 |
| 02:23      | And so this is nice because it's easy to hook into with a number of different things.                  |
| 02:29      | And so I have a suggestion, and there's two possible ways that you could run this.                     |
| 02:38      | And both of them involve push cut, which, full disclosure, I am one of the development                 |
| 02:42      | team of, but I'll explain why in a minute.                                                             |
| 02:45      | So to start with, you could build a shortcut that will just basically check if there is                |
| 02:50      | anything in this inbox list in [[Apple Reminders\|Reminders]].                                                              |
| 02:54      | So that would just be *Find Reminders* where that's the action.                                          |
| 02:58      | And then you set the list to the inbox list.                                                           |
| 03:01      | And then you probably want to add a completed or is not completed into that as well.                   |
| 03:06      | So that's what you're doing.                                                                           |
| 03:07      | You're finding your reminders where, and then you did account action.                                  |
| 03:11      | So you found your reminders that are in the inbox that aren't completed, just in case                  |
| 03:14      | there's anything that is completed in the inbox.                                                       |
| 03:17      | And then you add your account action.                                                                  |
| 03:18      | So you've got a count of those reminders.                                                              |
| 03:20      | And then simply you can add an if and say, if count is greater than zero, okay, perfect.               |
| 03:29      | So we've now got, we know that it's more than one, or we know it's one or more.                        |
| 03:34      | Then we need to send notification.                                                                     |
| 03:36      | And this is where I would use push cut specifically to send the notification because that notification |
| 03:40      | that it sends you can then actually do something that you want it to do.                               |
| 03:45      | For example, if you want to open [[Apple Reminders\|Reminders]] to that list, it could run a shortcut and                   |
| 03:50      | open [[Apple Reminders\|Reminders]] to that list.                                                                           |
| 03:52      | Or it could open, you know, when you tap it, it could run a shortcut that walks you through            |
| 03:57      | processing your inbox or, you know, something else if you wanted it to.                                |
| 04:03      | But the way that you would run your shortcut with your finding the actions, your counting              |
| 04:08      | the actions and the if and sending the notification is either through a shortcut automation or         |
| 04:14      | through a shortcut run on a push cut automation server.                                                |
| 04:19      | And it's entirely up to you how you prefer to do it.                                                   |
| 04:21      | The shortcuts automation has the advantage of it's on your device.                                     |
| 04:24      | You don't have to have a dedicated device running, you know, shortcuts in the background.              |
| 04:29      | The automation server has the advantage of it can, you know, go, ooh, but today is a                   |
| 04:33      | bank holiday, and so we're actually going to not run this at our usual time, we'll run                 |
| 04:40      | it at a different time and schedule it, you know, alternatively.                                       |
| 04:44      | So yeah, there's a couple of options there.                                                            |
| 04:46      | But that's how I do it.                                                                                |
| 04:47      | I don't know if you've got any other advice you'd include there, David.                                |
| 04:50      | Well, first I want to point out the excellent use of the count term that Rose was talking              |
| 04:56      | about in her shortcut, because I think a lot of people getting new to shortcuts don't                  |
| 05:02      | realise how useful that is.                                                                            |
| 05:05      | It's a really easy function to understand in shortcuts, and it gives you a way to set                  |
| 05:11      | if statements.                                                                                         |
| 05:12      | And it just, I just find it super useful for all types of shortcut actions.                            |
| 05:17      | And Rose is using it here very brilliantly with respect to figuring out if there's anything            |
| 05:21      | in your inbox before it's telling you to check it.                                                     |
| 05:24      | That said, I will tell you, Chris, I have several of these.                                            |
| 05:27      | I use OmniFocus for them, but [[Apple Reminders\|Reminders]] is a very good app, and I seriously considered                 |
| 05:33      | switching to it earlier this year.                                                                     |
| 05:35      | And the way I do those things is less fancy.                                                           |
| 05:40      | I just set a repeating task, and then you can set the repeating task to show up with                   |
| 05:47      | an alert, and I add the word consider to the beginning.                                                |
| 05:51      | So I'll just say, consider clearing inbox every day at 4 p.m.                                          |
| 05:56      | And if I know there's nothing in the inbox, I just check it as done, because I considered              |
| 06:00      | it and I decided not to do it.                                                                         |
| 06:02      | If I know there's stuff in there, I'll go deal with it, and I'll check it off as well.                 |
| 06:06      | And there is the repeat functions, and a lot of the better task managers, including apps               |
| 06:12      | like [[Apple Reminders\|Reminders]] and OmniFocus, have very powerful repeat functions, and this is a form of automation.   |
| 06:18      | Like one of the things I really like the way OmniFocus does is you can set it on a weekly              |
| 06:23      | basis, but you can select which day, so you can maybe just do it Monday through Friday,                |
| 06:28      | and then you have it reset upon completion.                                                            |
| 06:34      | So if you complete it on Saturday, it'll show up for the next Monday, and you don't have               |
| 06:40      | to keep up with it every day, but whenever you check the box off, it catches itself up                 |
| 06:43      | for you.                                                                                               |
| 06:44      | You know, there's nothing worse than those repeat formulas where it'll give you like                   |
| 06:48      | five of them, because you didn't do it every day for five days.                                        |
| 06:52      | The OmniFocus method is a little cleaner than that.                                                    |
| 06:55      | But you can use these kind of repeating functions in a task manager for a lot of automation            |
| 07:02      | stuff.                                                                                                 |
| 07:03      | Right now, it's spring.                                                                                |
| 07:04      | My little bonsai trees need fertiliser every two weeks.                                                |
| 07:08      | I have a repeating function in a task manager to remind me to do that every two weeks.                 |
| 07:14      | So this is stuff that isn't as fancy as Rose's Automation, and frankly, not as cool.                   |
| 07:20      | But you can put it together in two or three minutes or less, really, once you understand               |
| 07:26      | it.                                                                                                    |
| 07:27      | You can put it together in seconds, and that's good enough for me for a lot of things like             |
| 07:31      | this.                                                                                                  |
| 07:32      | Yes.                                                                                                   |
| 07:33      | Yeah.                                                                                                  |
| 07:34      | I think that's one of those things where it really depends, you know, using a repeating                |
| 07:36      | task is very simple.                                                                                   |
| 07:38      | However, I know personally, if I see the same reminder every single day, I'll basically become         |
| 07:44      | immune to it, especially when a chunk of the time there isn't necessarily anything there.              |
| 07:50      | And I mean, one of the things I've done, which I'm just going to sort of share with everyone           |
| 07:55      | because I think it's quite useful, is I will say, you know, hey, Apple lady, add this to               |
| 08:00      | the shopping list or the grocery list.                                                                 |
| 08:04      | And then things will add and add it to those lists.                                                    |
| 08:07      | And what then happens is I have a shortcut run periodically that just pulls those things               |
| 08:11      | out and dumps them into the right list in OmniFocus for me so that then I don't even                   |
| 08:16      | have to actually deal with processing this stuff, it just gets pulled in and it will                   |
| 08:21      | appear in the perspective that I use when I'm going around the supermarket to buy food,                |
| 08:26      | or it will appear automatically on the list for this store because it's wheat killer.                  |
| 08:30      | And so when it gets added to OmniFocus, I've automatically tagged it with the right store              |
| 08:34      | and add in the description, which kind of wheat killer it is that I need to buy so that                |
| 08:38      | I don't forget what it is.                                                                             |
| 08:41      | And that, you know, that makes a big difference for me.                                                |
| 08:45      | So doing a little bit of the processing automatically can help.                                        |
| 08:48      | And then I don't have to actually worry so much about doing so much processing because                 |
| 08:53      | I've automated some of that away.                                                                      |
| 08:55      | Yeah.                                                                                                  |
| 08:56      | And that, I mean, that's one of the killer features of [[Apple Reminders\|Reminders]] is how good it works                  |
| 08:59      | with that lady that you say hey to.                                                                    |
| 09:04      | And I actually don't even go that far with stuff like that because those lists for me                  |
| 09:08      | are shared with my wife.                                                                               |
| 09:11      | So the grocery list, the home goods list, the hardware store, all that stuff just stays                |
| 09:17      | in [[Apple Reminders\|Reminders]] and then whenever I find myself in one of those places, I just open it up                 |
| 09:22      | and look and see what's there.                                                                         |
| 09:24      | But again, you know, all this stuff are various flavours of automation and Chris is getting             |
| 09:29      | started on the journey.                                                                                |
| 09:31      | You should definitely dig in on shortcuts.                                                             |
| 09:34      | I feel like that is a great place to start because everything in there is kind of self-contained       |
| 09:40      | little actions, but as you start to learn the nooks and crannies of it, you can actually               |
| 09:44      | do quite powerful automation on it.                                                                    |
| 09:48      | And there's a ton of useful resources out there.                                                       |
| 09:50      | I mean, Rose wrote a book, I have a field guide, there's other people out there, [[Matthew Cassinelli\|Matt Cassinelli]] |
| 09:55      | , for example, teaching, and there's a lot of good resources out there to learn              |
| 09:59      | how to do this stuff, but you don't really need to go crazy to start using automation                  |
| 10:06      | in your life.                                                                                          |
| 10:07      | That's kind of one of my rants on shortcuts is I understand that you can make very extensive           |
| 10:12      | shortcuts and super long ones, but I feel like for people getting started, you need                    |
| 10:16      | to understand that you can also make one and two step shortcuts that are, those are equally            |
| 10:20      | automation and sometimes they're even better, right?                                                   |
| 10:24      | They don't break, you know, they're not so fragile and they just work day in and day                   |
| 10:30      | out.                                                                                                   |
| 10:31      | So don't be afraid of making little ones and don't feel like you're not an automator                   |
| 10:35      | if you make one action shortcuts, if it automates something, you're an automator.                      |
| 10:39      | That's the whole point of the show, really, you know.                                                  |
| 10:41      | Yeah, it really is.                                                                                    |
| 10:44      | And this actually leads us into the next piece of feedback that we had, which was a question           |
| 10:49      | that's come in anonymously for us, the automators.                                                     |
| 10:54      | And we've been given a little bit of background.                                                       |
| 10:56      | So this person works across multiple locations with a number of different companies who don't          |
| 11:00      | talk to each other.                                                                                    |
| 11:01      | It sounds like a recipe for disaster and the perfect situation for automation to me.                   |
| 11:07      | And this person has a frequently or a recurring work commitment every third Tuesday and ad             |
| 11:13      | hoc commitments at short notice, but they need to do regular manual checks to make sure                |
| 11:17      | they're told people that they need them to be available, that they're not busy at another              |
| 11:20      | site, they're not clashing with family, school and holidays.                                           |
| 11:23      | And they've missed stuff loads of times and would like to know how we'd approach this.                 |
| 11:29      | And my first thought, honestly, with this was create a checklist in [[Apple Reminders\|Reminders]] and have                 |
| 11:35      | it repeat automatically for the Tuesdays.                                                              |
| 11:39      | And then make a template from it so that you can create it for those ad hoc events.                    |
| 11:45      | Like that was my first starting point.                                                                 |
| 11:47      | I don't know if you would just start with that as well, David, or something even simpler               |
| 11:50      | than that.                                                                                             |
| 11:51      | No, I think you're right on it.                                                                        |
| 11:53      | And that shortcut that you make, you could do a lot with it.                                           |
| 11:56      | Like you could make reminders list, you could create calendar events, you could even automate          |
| 12:01      | that shortcut to send an email to everyone to let them know what's happening.                          |
| 12:06      | And because...                                                                                         |
| 12:07      | Well, yeah.                                                                                            |
| 12:08      | Yeah.                                                                                                  |
| 12:09      | If you go with a shortcut, you can.                                                                    |
| 12:10      | I was just going to start with just a simple [[Apple Reminders\|Reminders]] checklist that repeats because now              |
| 12:13      | there's templates and reminders.                                                                       |
| 12:15      | You can do that.                                                                                       |
| 12:16      | Now, I would love to go through and use a shortcut for more of it, but it depends on                   |
| 12:21      | your workflow.                                                                                         |
| 12:22      | Like, can you create the events using [[Shortcuts]]?                                                       |
| 12:25      | Are you in charge of creating these ad hoc events or do these ad hoc events kind of just               |
| 12:29      | get added to your calendar and you just have to deal with stuff?                                       |
| 12:31      | Because if it's you're creating them, a shortcut to create the event, create the checklist to          |
| 12:36      | check in and so on is great.                                                                           |
| 12:37      | But if you just kind of get told, hey, this is going to happen, you need to be here, I'd               |
| 12:42      | probably go with a shortcut that checks your calendar to see if something's there and adds             |
| 12:47      | like the actual event into a list in [[Data Jar]] so that you can exclude it from the list                 |
| 12:52      | as you go through and repeat it.                                                                       |
| 12:55      | But it really depends on what end of things you're on for that.                                        |
| 12:58      | Yeah.                                                                                                  |
| 12:59      | And shortcuts-based project planning is really meat and potatoes automation for me.                    |
| 13:03      | I use it all the time.                                                                                 |
| 13:06      | Maybe let me just kind of explain through one that I do for project-based kind of ad                   |
| 13:11      | hoc stuff that I do to give you some ideas and then Rose can help me plus it up a bit.                 |
| 13:18      | But an example would be if I'm going to release something into the MacSparky Labs, I have             |
| 13:22      | a shortcut called Labs content and when I open it up and I'm going from memory here,                   |
| 13:29      | I don't have it in front of me, I'm going to open it madly while we're talking.                        |
| 13:33      | But while I open it up, it prompts me for a few things.                                                |
| 13:37      | What's the title of the content, but this has a calendar date and relate to it too.                    |
| 13:41      | What is the ideal day that you want to release it?                                                     |
| 13:45      | And the nice thing is with shortcuts, it has excellent date support and the ability to                 |
| 13:50      | create calendar events.                                                                                |
| 13:52      | So if this correspondent had an ad hoc event show up, he could or she could make a shortcut            |
| 13:59      | that prompts, well, what is the event and when is it?                                                  |
| 14:03      | When is the deadline or when is the meeting related to it?                                             |
| 14:07      | And you could just put that in and the beauty is once you put that into a shortcut, then               |
| 14:12      | shortcuts can do things with it.                                                                       |
| 14:14      | For instance, you could have it prepare an email to everyone and not only could you tell               |
| 14:22      | them, you could embed the date and the time of the event, you could also work, do math                 |
| 14:27      | on that date and time.                                                                                 |
| 14:28      | So you could say, hey, everybody, we just got noticed we've got a big sales presentation               |
| 14:32      | on Friday, June 17.                                                                                    |
| 14:35      | And I'd like to schedule a planning call with the whole team two days before on Friday,                |
| 14:42      | June 15th or Wednesday, June 15th.                                                                     |
| 14:44      | And what you do is in the shortcut, you can have it subtract days, weeks, hours, date.                 |
| 14:50      | So you subtract two days from it.                                                                      |
| 14:53      | And then you can insert that in the text for that email that gets sent out via the shortcut.           |
| 14:58      | And then you can also create the event on the calendar for the preparation event as well               |
| 15:03      | as the sales presentation.                                                                             |
| 15:06      | And you could create a note in an Apple shared note folder, or you could create, like in               |
| 15:12      | my case, I do it with Kraft.                                                                           |
| 15:14      | My team uses the Kraft application.                                                                    |
| 15:16      | We create a new page in Kraft for every new project and everybody can see it and it can                |
| 15:22      | fill it in.                                                                                            |
| 15:24      | And it's just kind of shocking to me with something as simple as shortcuts, how far                    |
| 15:28      | down the rabbit hole you can go on creating project setups.                                            |
| 15:32      | And I love doing this.                                                                                 |
| 15:33      | I've got like all the major stuff in my life.                                                          |
| 15:36      | I've got a shortcut I can run that does all the work for me.                                           |
| 15:39      | Yes.                                                                                                   |
| 15:40      | Yeah.                                                                                                  |
| 15:41      | Same for me.                                                                                           |
| 15:42      | So I'm in the office approximately once every three weeks.                                             |
| 15:45      | It's usually on Thursdays.                                                                             |
| 15:46      | Next coming week, so we're talking on the Monday this week, it's on Wednesday.                         |
| 15:51      | Last time we were in the office, it was on a Friday.                                                   |
| 15:53      | So just a simple repeat every three week checklist of put this stuff in your bag, put the laptop       |
| 15:58      | in the bag, put a charger for the laptop in the bag.                                                   |
| 16:01      | Basically there's a packing list and then there's stuff to prepare such as actually                    |
| 16:05      | putting like water in my water bottle to put in my bag.                                                |
| 16:10      | And a simple repeating checklist mostly works aside from the fact that it's not actually               |
| 16:16      | every three weeks that we're in the office.                                                            |
| 16:19      | And every so often I need to bring something special with me.                                          |
| 16:22      | So what I do instead is I run through and I find all of the events which are in the calendar.          |
| 16:29      | And that's relatively simple to do.                                                                    |
| 16:33      | And once it's in the calendar, it doesn't change for me.                                               |
| 16:37      | But regardless, even if it did, the way that I'm handling this is I have a shortcut that               |
| 16:42      | I go through and it looks for all of the events like this and it looks up to seven years in            |
| 16:47      | the future just because it defined calendar events where ultimately it looks seven days                |
| 16:52      | in the future.                                                                                         |
| 16:54      | And I can't actually remember now if I changed it to months or years, but either way, it's             |
| 16:57      | checking the way out.                                                                                  |
| 16:59      | There's never that many in the calendar anyway.                                                        |
| 17:02      | And then it grabs them all and it is actually sorted by date with like the soonest to the              |
| 17:09      | furthest away.                                                                                         |
| 17:11      | And then it goes through them.                                                                         |
| 17:12      | It just checks then if that date is in [[Data Jar]].                                                       |
| 17:15      | So I use [[Data Jar]] for this.                                                                            |
| 17:18      | And so if that date is in [[Data Jar]], then it knows that that particular day in the office               |
| 17:23      | has already been handled as in it's created the checklist, it's created the relevant calendar          |
| 17:29      | events for me and so on.                                                                               |
| 17:31      | I know it's coming out of my calendar, but I have other calendar events for like the train             |
| 17:34      | that I need to get and so on and so forth.                                                             |
| 17:37      | And then if it isn't there, then it goes through and it adds the, you know, get the train to           |
| 17:41      | the office or drive to the office or whatever it is.                                                   |
| 17:45      | And you know, it adds actually adds to my time blocking calendar as well for like, hey,                |
| 17:50      | you actually need to plan to pack, which is good because I actually don't have time tomorrow.          |
| 17:54      | So I packed today instead, because my Tuesdays are busy.                                               |
| 17:57      | So I had to pack on Monday, so I had to move that block.                                               |
| 18:01      | It's not particularly smart.                                                                           |
| 18:02      | It just dumps it into the evening before.                                                              |
| 18:04      | So I have to shuffle things around, but you know, I could make that smarter if I wanted                |
| 18:07      | to, but there is an element of manual, you know, management to that area of my life,                   |
| 18:13      | because just because I'm free at that moment in time doesn't mean that it's a great moment             |
| 18:17      | in time mentally for me to do that thing.                                                              |
| 18:20      | And yeah, and it'll add checklists into OmniFocus and so on.                                           |
| 18:24      | And then, you know, then it adds that date into the list and [[Data Jar]] so that it knows                 |
| 18:28      | that that's been handled and that does mean that if a day gets rearranged for some reason,             |
| 18:34      | which hasn't happened yet since I've been running this system, then I am going to end                  |
| 18:38      | up with duplicates and I'm going to have to go through and delete them.                                |
| 18:41      | But I also include the date of the event in the title.                                                 |
| 18:45      | So there it's there in the title of the checklist in OmniFocus.                                        |
| 18:50      | And it's in the notes of the event in the calendar and so on.                                          |
| 18:55      | So I can just search for office day with the date in the right format, and then I can delete           |
| 19:00      | the things that need to go away.                                                                       |
| 19:02      | And if I needed to, I could create a shortcut to remove those as well.                                 |
| 19:06      | But I haven't felt a need to do that yet.                                                              |
| 19:09      | But yeah, for me, just iterating through, you know, all of these things and adding the                 |
| 19:14      | appropriate checklists and the calendar events to my system works very well.                           |
| 19:19      | But it really depends, you know, I'm on the receiving end of I get something added to                  |
| 19:24      | my calendar and have to deal with it.                                                                  |
| 19:27      | If you're on the creating end where you're creating the things, then you have perhaps                  |
| 19:32      | different options.                                                                                     |
| 19:33      | I'm not going to say more options because it really depends, but there are different                   |
| 19:35      | options available.                                                                                     |
| 19:36      | Yeah.                                                                                                  |
| 19:37      | And just to kind of return to some of the other issues, like when you're putting together              |
| 19:42      | a project or a project planning automation, there are categories of things you may want                |
| 19:48      | to do.                                                                                                 |
| 19:49      | Like usually you want to make a calendar event.                                                        |
| 19:51      | Well, I'll tell you one of the traps of calendar events is getting the time right because shortcuts    |
| 19:56      | is always tracking the time of an event.                                                               |
| 19:58      | And if you don't put it in, it may take the time that you inserted or something.                       |
| 20:03      | But if you look at the time details of a time entry and shortcuts, you'll see that you can             |
| 20:08      | turn the time off.                                                                                     |
| 20:10      | And so like when you're going ahead to send the message to your co-workers and you're                  |
| 20:17      | saying we're going to have a meeting on such and such a date, you don't have to display                |
| 20:22      | the time.                                                                                              |
| 20:23      | But that's when it catches me.                                                                         |
| 20:24      | No, you can format the date to remove the time.                                                        |
| 20:26      | Yeah.                                                                                                  |
| 20:27      | So that catches me on occasion.                                                                        |
| 20:30      | Another one thing you might want to do is add tasks, and it just depends on what your                  |
| 20:33      | task manager of choice is.                                                                             |
| 20:35      | But most of them have good support, [[Apple Reminders\|Reminders]], OmniFocus, things, they all have good shortcut         |
| 20:40      | support.                                                                                               |
| 20:41      | Inevitably, if you're doing this, you're probably going to want to make a text field, which            |
| 20:45      | I find very useful, the text box, where you can either make the text that goes into the                |
| 20:50      | project description, like if it's an Apple Note or like in my case, Kraft.                             |
| 20:56      | But feel free to call those variables, but right click on them and make sure you only                  |
| 21:00      | put as much information in as you need.                                                                |
| 21:03      | The beauty of magic variables and shortcuts just can't be understated because you can                  |
| 21:07      | change the information you get out of it.                                                              |
| 21:10      | And then the last piece of it, the word of advice I would give you is usually at the                   |
| 21:14      | end you want, if you're going to send an email out to everyone, I generate that email text             |
| 21:19      | with all the variables that you've collected and created and modified, and you can have                |
| 21:24      | it save the recipient.                                                                                 |
| 21:26      | So if you have the same recipients all the time, that makes it really easy.                            |
| 21:30      | But make sure you don't check the box to send automatically, just check the box so it shows            |
| 21:36      | the compose sheet after the shortcut runs, unless you're really, really confident.                     |
| 21:41      | I don't like to send out emails with robots without me reading the verse.                              |
| 21:46      | And often I go in and make a little changer adjustment, but it does the heavy lifting                  |
| 21:50      | for you.                                                                                               |
| 21:51      | But you think in those categories, email, calendar event, tasks, project management                    |
| 21:56      | page, and before you know it, you can automate the stuff really quickly, and it'll take                |
| 22:01      | you an hour or so to do it the first time, but once you get it figured out in the future,              |
| 22:06      | whenever those ad hoc events come in, you trigger a shortcut, you look super organised                 |
| 22:11      | to all your coworkers, and that's automation, baby.                                                    |
| 22:15      | Yeah, yeah, it really is.                                                                              |
| 22:17      | And also something like what you're saying there, David, with the email, I also just                   |
| 22:23      | will circle back to format date in a moment because I had a thought about that, so remind              |
| 22:26      | me of that if I don't get to it.                                                                       |
| 22:28      | But with the email, what you can do is you could have it send one email to you and show                |
| 22:35      | the compose sheet.                                                                                     |
| 22:38      | And so what I'm thinking here is in the case of you don't want to just blanket email a                 |
| 22:42      | bucket of 20 coworkers with the exact same email, even putting everybody in the BCC                    |
| 22:48      | field, you want to send it to people individually.                                                     |
| 22:52      | What you could do is you could start by sending the email to yourself so that it pops up and           |
| 22:57      | shows you the email, and then you can make any tweaks that need making, like select everything         |
| 23:04      | and copy it, and then you could iterate through that list of 20 people or however many people          |
| 23:10      | it is, hopefully it's not 20 people, because if it is, somebody needs to actually create               |
| 23:13      | a system for dealing with this for you to make sure that everybody is dealing with it,                 |
| 23:19      | it sounds like a system would be needed for that.                                                      |
| 23:22      | Let's say it's five people.                                                                            |
| 23:23      | If you start by emailing it to yourself, you don't even have to send that email.                       |
| 23:27      | You could just have it pop up in the compose sheet, make any tweaks, copy, paste, and then             |
| 23:32      | just make sure that instead of high, I'm going to assume that your name is J, and so instead           |
| 23:41      | of it saying high J, make sure it does something like name underscore name in all caps or something    |
| 23:46      | and that it can just replace that, but that it could iterate through the list of people                |
| 23:50      | and send stuff to them one by one with just replacing that little bit once you've had                  |
| 23:56      | a look and made sure everything's okay, and to go back to what you were saying, David,                 |
| 24:00      | about the date function, often including the time.                                                     |
| 24:04      | One of the things I discovered, oh gosh, I'm not sure when I discovered it now, but it                 |
| 24:08      | hasn't been there forever, is the format date function in shortcuts.                                   |
| 24:13      | There's an action for formatting the date.                                                             |
| 24:15      | You don't have to use this.                                                                            |
| 24:16      | You can just insert a date action and then format it on insert, but you're going to have               |
| 24:22      | to do it every single time.                                                                            |
| 24:24      | Whereas if you use a format date action and you need to use that date in a couple of places,           |
| 24:28      | then you can reuse the formatting, the format date also, or sorry, adjust date has the option          |
| 24:34      | to adjust the date to the start or the end of day, and I believe it may even have the                  |
| 24:39      | option for the start of the week, and that has been very useful for me because that way                |
| 24:43      | I can just say it like, hey, okay, so now I know that this is midnight on this day, so                 |
| 24:49      | I know that it's this day and then everything kind of just adds on from there, which makes             |
| 24:54      | a big difference to me.                                                                                |
| 24:55      | So yeah, you get to reuse format date and you can adjust it to the start of the day.                   |
| 24:59      | Yeah, I've always found that trying to automate calendar information with shortcuts always             |
| 25:05      | felt a little like difficult to me, and there's a lot of, I'm sorry, in [[AppleScript]], I miss            |
| 25:11      | spoke, formatting dates in AppleScript has always been difficult for me, and it's just                 |
| 25:16      | really because they use, the way they tell time is weird, and I don't even, Rose will                  |
| 25:23      | know the exact language, but basically they're counting from the, I don't know, was at the             |
| 25:26      | beginning of time, what is that?                                                                       |
| 25:28      | So it's June 1st, 1970 in [[Unix]] time, but there's also Coco time, which is another, I don't             |
| 25:37      | remember where that starts from, but that starts from a different time, and that of                    |
| 25:41      | course is a separate thing, and that's going to make things a bit more complicated, so                 |
| 25:45      | yeah.                                                                                                  |
| 25:46      | It's harrowing, and every time I do it, I have to go back and relearn, because it's                    |
| 25:49      | just, I don't do it every day, I do it once every year, and then I realise, oh yeah, this              |
| 25:54      | is terrible, but shortcuts makes it so much easier to deal with dates, that's, you know,               |
| 25:59      | we talk often on the show how there's different platforms, well, I feel like shortcuts definitely      |
| 26:04      | wins when it comes to working with dates, and it just gets better over time, like we used              |
| 26:08      | to have to run separate actions to format the date, but now you can insert the variable                |
| 26:12      | and format it right there.                                                                             |
| 26:14      | Though I will say, if you're going to format it the same way a couple of times, save yourself          |
| 26:18      | the trouble and use a single format date action, because then you don't have like, you know,           |
| 26:24      | two formats that are the same, and one format that's almost the same, but just a little                |
| 26:27      | bit different, and that's where it gets a bit, yeah.                                                   |
| 26:30      | And that gets you in trouble for sure, like I'll give you an example of this, like I,                  |
| 26:35      | in addition to doing a bunch of stuff, when I make these projects for these content things,            |
| 26:39      | I also have a page in Craft, which is like the master list of active projects, and I                   |
| 26:46      | was inserting, I was basically recreating the file name on that page inside double brackets,           |
| 26:52      | which in essence creates a link to that page, but it wasn't working, and I couldn't figure             |
| 26:57      | out why, and then I suddenly realised what I was doing was I had a slightly different                  |
| 27:01      | format on the date for the file name versus the end thing I inserted, and you know, just               |
| 27:06      | like dumb stuff like that, you sometimes you create your own problems, but either way,                 |
| 27:12      | this anonymous listener wrote in and asked us to tell him what time it was, and we built               |
| 27:16      | a Rolex watch, so I hope something in there was of help, help to you, but yeah, but Rosa,              |
| 27:23      | can you tell Rosa and I get excited about this stuff?                                                  |
| 27:25      | I think just a little.                                                                                 |
| 27:26      | Yeah, yeah, we definitely do, and I think that's great, because there's a whole bunch                  |
| 27:30      | more feedback that we'll get to just after this.                                                       |
| 27:35      | This episode of Automators is brought to you by Network to Code.                                       |
| 27:38      | Network to Code is a leading provider of network automation solutions.                                 |
| 27:42      | They help companies transform the way their networks are deployed, managed, and consumed               |
| 27:46      | through a combination of software and services.                                                        |
| 27:48      | In short, they bridge the gap between DevOps and network engineering.                                  |
| 27:52      | Network to Code is also the proud sponsor of Nautobot project.                                         |
| 27:56      | Nautobot is a free and open source network source of truth and network automation platform,            |
| 28:02      | and that's Nautobot as in network automation bot, in case you were wondering.                          |
| 28:06      | Is the network CDMB you wish you'd always had?                                                         |
| 28:09      | Are you struggling to manage network inventory?                                                        |
| 28:11      | Do you wish you had a better built-in solution to drive your network automation?                       |
| 28:16      | If so, you've got to check out Nautobot.                                                               |
| 28:18      | Everything from inventory, IP addresses, VLANs, and even routing protocols and firewall policies       |
| 28:24      | can be stored and modeled.                                                                             |
| 28:26      | Nautobot is the authoritative source of truth for the network.                                         |
| 28:29      | Not only does Nautobot help you manage your data, but it also has a rich developer API                 |
| 28:34      | and ecosystem apps that actually do network automation.                                                |
| 28:38      | Nautobot apps are also free and open source.                                                           |
| 28:41      | You can use them to do things like network backups, comfort compliance, model firewall                 |
| 28:45      | policies, and so much more.                                                                            |
| 28:47      | Network automation begins with data.                                                                   |
| 28:50      | Get control of your data and take back control of your network with Nautobot.                          |
| 28:55      | Ready to explore Nautobot?                                                                             |
| 28:56      | Head over to go.networktocode.com/automators to learn about all things Nautobot.                 |
| 29:03      | Go to go.networktocode.com/automators.                                                           |
| 29:07      | Our thanks to Network To Code for their support of this show.                                          |
| 29:10      | Okay, John asks, I have an iOS automation to pause music when I get in my car, but it                  |
| 29:16      | asks me every time I get in to run it, is there a way to just have it run without the                  |
| 29:20      | interaction?                                                                                           |
| 29:22      | So the first thing that I thought of is, I'm guessing that there's two options here.                   |
| 29:29      | John could be using Bluetooth to trigger this.                                                         |
| 29:31      | If it is a Bluetooth shortcuts automation trigger, there is no way to turn off Ask Before              |
| 29:38      | Running.                                                                                               |
| 29:39      | This is a security thing.                                                                              |
| 29:40      | Apple have decided that you can't do that.                                                             |
| 29:43      | Or you didn't notice that there is an Ask Before Running trigger that you can turn off.                |
| 29:48      | Guessing based on the John's asking this question is John's looked for this and hasn't found               |
| 29:52      | it.                                                                                                    |
| 29:53      | So it's probably that you're using Bluetooth.                                                          |
| 29:56      | If your car has CarPlay, I recommend using CarPlay instead and the CarPlay trigger specifically        |
| 30:03      | so that you can turn off Ask Before Running and voila.                                                 |
| 30:07      | If your car doesn't have CarPlay, then I hope that the Bluetooth is set to the vehicle type.           |
| 30:14      | So in the settings app on your iPhone when you tap on Bluetooth, and then if you pick                  |
| 30:20      | something that you're connected to such as, for example, if I select this headphone adapter,           |
| 30:28      | when you're connected to it, you can actually change the type so you can specify as a car.             |
| 30:33      | And then the focus mode for driving can enable automatically when it thinks you're driving.            |
| 30:40      | And that will include when it's connected to the car Bluetooth.                                        |
| 30:47      | And so then you can actually use the driving focus mode enabling as your proxy for running             |
| 30:54      | this.                                                                                                  |
| 30:55      | So when the driving focus mode is enabled, then, you know, play some music or whatever                 |
| 30:59      | it is.                                                                                                 |
| 31:00      | So that is what I would suggest, assuming that CarPlay is not an option.                               |
| 31:05      | But that Ask Before Running trigger, that is something that I think a lot of people kind               |
| 31:10      | of skip over because they've like, right, I built a shortcut and I've done the things                  |
| 31:13      | and now I'm just going, yeah, yeah, yeah, done, done, done.                                            |
| 31:15      | So make sure that you've definitely turned that off.                                                   |
| 31:17      | Yeah, I think I honestly can't think of a time that that's been an option and I haven't                |
| 31:22      | turned it off.                                                                                         |
| 31:23      | I mean, it's just like, I don't want notifications for my shortcuts.                                   |
| 31:26      | I made the shortcut, it's fine.                                                                        |
| 31:28      | But I do understand why they exist.                                                                    |
| 31:30      | Apple is worried about security, like the Bluetooth example is a good one.                             |
| 31:35      | If your phone connects to some random Bluetooth and stuff starts automatically happening on            |
| 31:40      | your phone, that could be bad, right?                                                                  |
| 31:43      | I think shortcuts is pretty safe, I mean, but yeah, there's no limit on what ill will                  |
| 31:50      | people could do if they were able to hijack you through shortcuts and a Bluetooth connection.          |
| 31:55      | But that's the thinking at Apple.                                                                      |
| 31:58      | If you go back in time, Chase, I'm sorry, if you go back in time, John, you'll see that                |
| 32:05      | Apple didn't let you turn it off on hardly anything at the beginning.                                  |
| 32:09      | And over the years, they've kind of softened on it.                                                    |
| 32:11      | And hopefully every year, it gets a little easier.                                                     |
| 32:14      | But sometimes if you don't have the switch to turn it off, there's no way to stop it.                  |
| 32:19      | Yeah.                                                                                                  |
| 32:20      | And it's just one of those things where if you don't have, you know, the way to detect                 |
| 32:26      | that you're connected to the car other than that, then unfortunately, you may kind of                  |
| 32:30      | be stuck with upgrading your car.                                                                      |
| 32:31      | But before you do that, consider doing things like sticking an NFC tag on the dash of your             |
| 32:36      | car.                                                                                                   |
| 32:37      | And so you just kind of tap your phone to the NFC tag, don't actually have to tap it.                  |
| 32:41      | It's that area right above, it's kind of like behind the face ID sensor.                               |
| 32:45      | If you have one of those, you know, in the middle at the top, you just have to hover                   |
| 32:49      | your phone over it while unlocked.                                                                     |
| 32:51      | But if you've got face ID and or an Apple Watch, then your phone is probably going to                  |
| 32:55      | unlock when you pick it up.                                                                            |
| 32:58      | And it recognises either your face or your watch is nearby.                                            |
| 33:01      | And then you can just kind of hover it over that and then it will run it from there.                   |
| 33:05      | That may be a good alternative to upgrading your car.                                                  |
| 33:07      | Certainly a heck of a lot cheaper to try out.                                                          |
| 33:10      | And yeah, just give those a try.                                                                       |
| 33:13      | And yeah, pay attention to which automations you are, or automation triggers you are using             |
| 33:19      | in shortcuts.                                                                                          |
| 33:20      | Some of them are more automated than others.                                                           |
| 33:22      | Rose, what do you, what kind of automation are you running when you enter your car?                    |
| 33:27      | I'm imagining your phone like cooks you coffee or something.                                           |
| 33:30      | What happens when you enter your car?                                                                  |
| 33:32      | I mean, I don't drink coffee.                                                                          |
| 33:33      | So, so no, it doesn't do that.                                                                         |
| 33:35      | Let me see.                                                                                            |
| 33:36      | When I connect to CarPlay, so I have a number of these which apparently are disabled because           |
| 33:40      | I have, you know, done, I've tried out a bunch of stuff over, over time.                               |
| 33:48      | And at the moment, honestly, it's not running anything.                                                |
| 33:53      | So that's because most of the time, you know, my phone, I've, I've, I've set up everything             |
| 33:59      | else so that it's automated because did you know that in the Maps app, so you've got your              |
| 34:06      | favourites that you can add in the Maps app, so favourite sort of locations, and those appear            |
| 34:11      | in a nice little list on the side in CarPlay.                                                          |
| 34:14      | But when you are in the Maps app on your phone, if you look at sort of the favourites area              |
| 34:20      | in Maps and you tap on more on the right hand side, so it shows you a list, if you then                |
| 34:24      | tap on the info bubble and scroll down, then there is a share ETA option where you can                 |
| 34:29      | automatically share your ETA at an address within a person.                                            |
| 34:33      | So that means that then, you know, I get in my car, and I tap on the place that I want                 |
| 34:39      | to go, and it automatically starts sharing my ETA, and this works on Android as well                   |
| 34:43      | as iOS.                                                                                                |
| 34:44      | On Android, it'll send them text messages, like it'll send them a text message now, it'll              |
| 34:47      | send them a text message if there's a significant delay of some kind, and then it sends them           |
| 34:51      | one like a couple of minutes before you arrive.                                                        |
| 34:55      | But yeah, like, you know, and so it does that, and most of the time, my phone will just kind           |
| 34:59      | of automatically play music, and I do have Do Not Disturb while driving automatically enabled,               |
| 35:08      | and Do Not Disturb, while driving, when enabled, automatically it turns off announce notifications     |
| 35:13      | for me.                                                                                                |
| 35:15      | And then when I turn Do Not Disturb, when I turn my driving focus off, then announce                   |
| 35:20      | notifications gets turned back on, which means that if I want notifications while I'm in               |
| 35:25      | the car, I can just turn off the driving focus mode, don't worry folks, I'm still limited              |
| 35:30      | to what appears on my dashboard with CarPlay, so I'm not going to be getting emails and                |
| 35:35      | stuff through, but it means that I have a way of just toggling announce notifications                  |
| 35:39      | on and off, like, from my wrist really quickly, like, as I get into the car, you know, I drop          |
| 35:46      | my phone into the console, and the [[MagSafe]] puck kind of walks onto the back, and then                  |
| 35:52      | I can just, you know, turn it off on my wrist before I go anywhere if I want to, or not.               |
| 36:00      | You know, I usually leave Do Not Disturb While Driving enabled, but I found being able to have announce      |
| 36:08      | notifications automatically disabled, and then turn it back on very easily is quite nice               |
| 36:12      | when, you know, if I'm driving other people around and so on.                                          |
| 36:15      | But what about you, David?                                                                             |
| 36:17      | What automations are you running?                                                                      |
| 36:18      | I was kind of relieved when you said you don't do a lot, because I don't either.                       |
| 36:22      | But I, that, that Share ETA, I use that almost every time I drive, you know, if I'm going              |
| 36:28      | to visit someone, I do it, if I'm heading home and my wife is home, and a power trick                  |
| 36:34      | here is you can trigger Siri and say, share my ETA with Daisy, or share my ETA with Rose,              |
| 36:40      | and you don't even have to navigate through the menu system.                                           |
| 36:43      | You can just say that.                                                                                 |
| 36:44      | It is right at the bottom when you are navigating somewhere with CarPlay, which I love, but            |
| 36:50      | I really love the fact that you can just have it automatically on certain locations.                   |
| 36:54      | So if I'm driving to my parents' house, like when I tap on my parents in CarPlay, it automatically     |
| 36:59      | shares my ETA with my mom.                                                                             |
| 37:00      | Yeah.                                                                                                  |
| 37:01      | So, you know, by, by just navigating to the location my ETA is shared, it's not shortcuts,             |
| 37:06      | but it's an automation.                                                                                |
| 37:07      | It's great.                                                                                            |
| 37:08      | I love it.                                                                                             |
| 37:09      | Yeah.                                                                                                  |
| 37:10      | Agreed.                                                                                                |
| 37:11      | So, anyway, my car works, the phone kind of gets tucked away when I plug it into CarPlay,              |
| 37:16      | so I've never attempted to look at it, and I am a huge fan of CarPlay.                                 |
| 37:21      | [[Stephen Hackett\|Stephen]] and I did a whole episode of [[Mac Power Users]] on it, and I just feel like it's                   |
| 37:26      | got exactly the right balance.                                                                         |
| 37:28      | I don't want it to give me all the information when I'm driving.                                       |
| 37:31      | I want to be safe, but it does have enough, and I just think they've done a really good                |
| 37:36      | job on that.                                                                                           |
| 37:37      | I want to see if we get any updates for that this year.                                                |
| 37:41      | But the, in general, I feel like, you know, we kind of went down a rabbit hole there.                  |
| 37:47      | Oh, the other thing I do with CarPlay, or it's not really CarPlay, whenever I get home,                |
| 37:53      | I also yell to Siri to unlock the front door, and it works every time.                                 |
| 37:58      | I love that.                                                                                           |
| 37:59      | Yeah.                                                                                                  |
| 38:00      | When you get to the front door, it's unlocked, and it's great.                                         |
| 38:02      | Yeah.                                                                                                  |
| 38:03      | So I've got patio doors to my place, which I usually use as my entrance.                               |
| 38:08      | And so from [[Home Assistant]], I made them into a fake cover, a fake garage door in [[HomeKit]].              |
| 38:17      | So I share a fake garage door to [[HomeKit]], which means that on my car dash, you know,                   |
| 38:23      | so I reverse into my parking space, and I always reverse into my parking space, well,                  |
| 38:28      | I say always.                                                                                          |
| 38:29      | Nearly always reverse into my parking space, so the reversing camera is enabled, and I                 |
| 38:32      | turn off the engine, and it goes back to CarPlay.                                                      |
| 38:35      | It ends the route automatically because I've turned off the engine, and I'm at my location.            |
| 38:39      | I don't know what magic it's using to do that, but that's fine with me, I love it.                     |
| 38:44      | And so I can then just tap on the little icon at the bottom.                                           |
| 38:47      | It's on the bottom right for me, because my car's a right-hand drive, it'll be on the                  |
| 38:50      | bottom left for the vast majority of our listeners who have left-hand drive cars.                      |
| 38:54      | And that is either, like, a grid of four, sort of, like, rounded squares across two                    |
| 39:01      | rounded squares down, or it's a, like, a big rectangle with, like, some smaller rectangles.            |
| 39:10      | And because I have Siri suggestions enabled, and also if I tap on the four by two grid,                |
| 39:15      | then I can just tap in that same spot, and because the other icon appears, but I have                  |
| 39:19      | Siri suggestions enabled, and this is really important, because then that shows up on my               |
| 39:24      | dashboard.                                                                                             |
| 39:26      | So I can then have the patio doors appear on my dashboard, I tap it, and it unlocks them,              |
| 39:31      | and I get out of the car and walk into the house, and that's it.                                       |
| 39:34      | And that's really nice.                                                                                |
| 39:35      | One last power tip here is put the addresses of your events and your calendar, and then                |
| 39:41      | when you get in your car, it'll also automatically tell you, you know, give you directions.            |
| 39:45      | Yeah, I will pop up and suggest that you might want those, which is awesome.                           |
| 39:48      | Yeah, I really love that.                                                                              |
| 39:51      | Now Chase wrote in, and I knew this question was coming, Rose, because I've been playing               |
| 39:55      | with this, I'm sure you have been too.                                                                 |
| 39:57      | He says, hello, automators, have you tested out using [[ChatGPT]] to write any automations                |
| 40:03      | as a launching point?                                                                                  |
| 40:04      | And Chase has used it to write auto hotkey for his Windows work computer, and now he's                 |
| 40:08      | looking into [[AppleScript]].                                                                             |
| 40:10      | What do you guys think?                                                                                |
| 40:14      | So I mean, I have very strong opinions about whether or not AI, which is a bit of a misnomer,          |
| 40:20      | it's not actually intelligent folks, it's an algorithm, it's not really learning, it's                 |
| 40:25      | collecting data and using the same algorithm to apply its knowledge is actually good or                |
| 40:31      | bad.                                                                                                   |
| 40:32      | But in my personal experience for code, it is not a good idea.                                         |
| 40:38      | And I'm going to add some caveats to this.                                                             |
| 40:41      | But in general, what it produces, it's very confident about the results, and it looks                  |
| 40:48      | good at a glance.                                                                                      |
| 40:50      | But either you're probably asking, you could be asking a very simple question, it gets                 |
| 40:55      | it right straight off the bat, and that's fine.                                                        |
| 40:58      | You could be very good at what you're doing, and you're just asking it as a like, okay,                |
| 41:01      | well, if there's 17 different ways to solve this pick one for me, in which case you can                |
| 41:06      | sort of look at it and take it with the heavy dose of salt that you need out of the salt               |
| 41:11      | mine, in fact, most of the salt mine, and massage the response to be correct and actually              |
| 41:17      | work in the situations you need.                                                                       |
| 41:19      | Or you may be on a middle ground of you're asking a more complex question, but you don't               |
| 41:24      | necessarily understand the nuances of the answer.                                                      |
| 41:26      | Now, with automation, you're probably going to be okay.                                                |
| 41:30      | But I would advise people to be very cautious in assuming that what it produces is correct,            |
| 41:35      | and it's certainly not optimised.                                                                      |
| 41:37      | I'm going to use [[Home Assistant]] as an example of this, because there is a fairly significant           |
| 41:42      | problem with [[Home Assistant]] and [[ChatGPT]].                                                              |
| 41:45      | They are using it to be clear, but you shouldn't use it to create [[Home Assistant]] automations           |
| 41:49      | or scripts, because what happens in [[Home Assistant]] is you have two sort of parts.                      |
| 41:55      | So you've got a domain, like light, switch, etc.                                                       |
| 41:59      | And then you've got services that you can call from that, like turn on and turn off.                   |
| 42:03      | Okay, well, that works for, for, you know, a light and a switch.                                       |
| 42:07      | It doesn't work for weather and so on, which is another domain, but [[ChatGPT]] is smart enough           |
| 42:13      | to understand that the big that comes before the dot and the bit that comes after the dot              |
| 42:17      | can be independent to an extent of one another, but it is not smart enough to know that the            |
| 42:23      | bit that comes after the dot, the service call, is limited and only come ties into some                |
| 42:28      | bits before the dot.                                                                                   |
| 42:29      | So it will suggest things like turning the weather off or something like that to do things.            |
| 42:35      | So I would advise people to be cautious and make sure that, you know, you're using this                |
| 42:39      | to help boost your knowledge with some idea of what's going on.                                        |
| 42:44      | And I would suggest not necessarily going straight to [[ChatGPT]], but making sure that                   |
| 42:48      | you use the other resources available, such as Stack Overflow and so on as well, because               |
| 42:52      | there's a lot of stuff out there on the internet, especially for AppleScript already, where           |
| 42:57      | somebody's written exactly what you want.                                                              |
| 43:01      | And yeah, especially as we find more and more [[ChatGPT]] answers being posted on the internet,           |
| 43:06      | that feeds the data set, which especially if it's wrong, is them feeding it more wrong                 |
| 43:11      | data, in which case it's going to keep thinking that wrong is right and producing more stuff.          |
| 43:16      | And yeah, it's interesting.                                                                            |
| 43:19      | Like I personally wouldn't use it other than, you know, like maybe to kind of do coin toss             |
| 43:26      | type things, but it's been very confidently incorrect about a large number of things in                |
| 43:32      | the past.                                                                                              |
| 43:33      | And I think there's enough things in life that we have being confidently incorrect that                |
| 43:38      | we could possibly skip this for automation purposes.                                                   |
| 43:41      | But what about you, David?                                                                             |
| 43:42      | Well, I think I'm more optimistic than you.                                                            |
| 43:44      | The key question and the key phrase in Chase's question is using it as a launching point.              |
| 43:50      | And I think it can work.                                                                               |
| 43:51      | I mean, AppleScript to me is the one I keep throwing at these and it has the hardest time             |
| 43:56      | with, because AppleScript was really meant to be kind of human, writable and readable.               |
| 44:01      | I mean, we've had salsa going on the show to talk about that in the past.                              |
| 44:04      | So it's a weird language and I feel like [[ChatGPT]] stumbles on that one.                                |
| 44:10      | I've had it write scripts for me just for tests.                                                       |
| 44:12      | We did some stuff on this in the Max Bracken Labs and it's sometimes it's okay and sometimes           |
| 44:18      | it needs work.                                                                                         |
| 44:19      | But as a launching point, it can work and Rose makes a great point.                                    |
| 44:23      | If you do a Google search and somebody's already written the script for you, you don't need            |
| 44:27      | a launching point.                                                                                     |
| 44:28      | You just grab the script and you're off to the races.                                                  |
| 44:32      | But if you're just hitting a brick wall, you can't find any good examples on the internet.             |
| 44:38      | Using [[ChatGPT]] for I have subscribed because I'm trying to figure out this stuff like everybody        |
| 44:44      | else while Rose was talking, I asked it, write an AppleScript to ask for a date and present           |
| 44:50      | a dialogue box with a date two days before that.                                                       |
| 44:54      | And this script looks to me like it'll work.                                                           |
| 44:57      | I haven't, you know, I just did this and I haven't had time.                                           |
| 45:00      | But the thing that it did that I haven't seen it do before is it inserted remarks.                     |
| 45:05      | So it says, here's the section where we're going to prompt the user for the date.                      |
| 45:09      | Here's the section where we're going to convert the date to an object.                                 |
| 45:12      | Here's the section where we're going to do date math.                                                  |
| 45:14      | And like all of that stuff can be very hard to find sometimes on the internet and even                 |
| 45:19      | being able to take little pieces of a [[ChatGPT]] generated automation script and dedicate                |
| 45:26      | to something you can use is it could be useful.                                                        |
| 45:28      | So these things are going to get better and more useful.                                               |
| 45:32      | They're not going to really teach it to you the way someone, you know, a human can, but                |
| 45:36      | they will hopefully give you some jumping off points, but everything Rose says is true                 |
| 45:42      | as well.                                                                                               |
| 45:43      | I feel like we need humans involved in computer programming.                                           |
| 45:46      | Yeah, I could, first of all, I think humans have better ideas than computers that are                  |
| 45:50      | just, you know, regurgitating what they find on the internet.                                          |
| 45:53      | And secondly, you know, if they turn, if the computers can program themselves, we're all               |
| 45:58      | done for, right?                                                                                       |
| 45:59      | I mean, isn't that the beginning of the end?                                                           |
| 46:02      | My favourite joke related to this is there are two schools of thought when it comes to,                 |
| 46:10      | you know, automated programming.                                                                       |
| 46:13      | One school of thought is that programmers will program themselves out of a job by, you                 |
| 46:16      | know, yeah, automating all of this.                                                                    |
| 46:18      | The other school of thought is incredibly hard to understand because they're too busy                  |
| 46:21      | laughing so hard.                                                                                      |
| 46:23      | Yeah, yeah.                                                                                            |
| 46:25      | Like it's just one of those things where, you know, it does feel like, you know, maybe                 |
| 46:30      | people are going to watch it themselves out of a job.                                                  |
| 46:32      | I'm not saying that's not going to happen.                                                             |
| 46:33      | I'm saying that there are some questions that solving them is a much bigger challenge than             |
| 46:39      | you think.                                                                                             |
| 46:40      | And so, yeah, take whatever you're given from these things with a grain of salt.                       |
| 46:44      | Do not assume that it's correct if it does not provide references, [[ChatGPT]] does not.                  |
| 46:50      | Then you should absolutely go and check to make sure that it is, you know, doing the                   |
| 46:56      | right thing.                                                                                           |
| 46:57      | If it says, you know, Charles Dickens was born in 2003, you're probably going to notice                |
| 47:01      | that that's wrong.                                                                                     |
| 47:02      | But if you pick a date out of thin air that you don't necessarily know, such as 1857,                  |
| 47:08      | unless you happen to know when Charles Dickens was born, I don't.                                      |
| 47:10      | If it is 1857, then bingo, I'm awesome at trivia, maybe, or maybe not.                                 |
| 47:17      | But yeah, like you should definitely be checking on these things and looking at stuff to make          |
| 47:22      | sure that you understand what it's doing.                                                              |
| 47:24      | So never just take a script for an automation that [[ChatGPT]] has given you and just use it              |
| 47:29      | without thinking, read through it, make sure you understand it and go from there.                      |
| 47:33      | Yeah.                                                                                                  |
| 47:34      | Somebody told me that you should think of [[ChatGPT]] or any of these large language models               |
| 47:38      | as an intern, you know.                                                                                |
| 47:41      | If you brought an intern into your company and you asked an intern a question, would                   |
| 47:45      | you make a decision on that intern's answer?                                                           |
| 47:48      | No, you would go deeper.                                                                               |
| 47:50      | But if you had the intern do some initial research for you, that would make sense.                     |
| 47:54      | And then you would follow up to figure out if your intern knew what the heck he or she                 |
| 47:58      | was talking about.                                                                                     |
| 48:00      | And that's kind of the way you've got to approach this stuff.                                          |
| 48:02      | But I do think, getting back to Chase, this is a good resource if you're learning Apple                |
| 48:08      | Script and you can't figure out how to do something, you can't find it on the internet.                |
| 48:12      | You know, go ahead and ask the question, see what it comes up with.                                    |
| 48:14      | It's getting better.                                                                                   |
| 48:16      | [[AppleScript]] to me, I think, is the hardest one for [[ChatGPT]] to get right.                             |
| 48:20      | Like I had it do some JavaScript for me and everything was super clean.                                |
| 48:24      | I have it too.                                                                                         |
| 48:25      | [[AppleScript]] and sometimes it falls flat on its face.                                                  |
| 48:27      | So just be wary.                                                                                       |
| 48:30      | But I don't think it's a terrible idea to give it a shot.                                              |
| 48:33      | Absolutely.                                                                                            |
| 48:34      | Yeah.                                                                                                  |
| 48:35      | Using it as a jumping off point is a great way to get started.                                         |
| 48:40      | This episode of The Automators is brought to you by Electric, go to electric.ai slash                  |
| 48:46      | automators and unbury yourself from your IT tasks and get a free pair of beat solo three               |
| 48:51      | wireless headphones when you schedule a qualifying meeting.                                            |
| 48:55      | I know there's a lot of you out there that are running your own small business and you're              |
| 48:59      | listening to The Automators, you're super nerdy, you're able to do a bunch of the IT                   |
| 49:03      | stuff yourself.                                                                                        |
| 49:05      | I'm here to tell you right now, you should not be doing that.                                          |
| 49:08      | That is not why you run the business.                                                                  |
| 49:10      | The business is there to do the business, not the IT.                                                  |
| 49:14      | So what you want to do is get someone to help you out with that so you can focus on the                |
| 49:18      | business and make it successful.                                                                       |
| 49:19      | Now I'm telling you this because I have failed at this many times and I have learned the               |
| 49:24      | lesson the hard way.                                                                                   |
| 49:25      | So don't be like me, hire Electric so they can do the IT for you and you can build your                |
| 49:29      | empire.                                                                                                |
| 49:30      | Now the team over at Electric knows small businesses, maybe like yours, face these challenges.         |
| 49:35      | That's why they're on hand to help with the time consuming parts of your business like                 |
| 49:40      | standardised device security with best in class device management software.                            |
| 49:44      | So you can implement best practices across the board and be ready to scale.                            |
| 49:49      | Employee onboarding, man, that can take so much time, but Electric will do it for you                  |
| 49:53      | saving you the average of eight hours per request, keeping a single point of visibility                |
| 49:58      | into your IT environment to control your devices, networks and applications.                           |
| 50:03      | They do simplified reporting that allows you to achieve and maintain compliance and they               |
| 50:07      | have proactive IT recommendations and automated workflows to make IT easy to manage for even           |
| 50:14      | non-technical users.                                                                                   |
| 50:16      | And look, if you're hearing this and you think your company could use some of the above services,      |
| 50:20      | but you're not sure where to start, Electric's experts will guide you through the process              |
| 50:25      | and establish standardised IT processes for your organisation.                                         |
| 50:29      | This is definitely something you want to offload and that's what Electric is there for.                |
| 50:34      | Don't make my same mistakes and said get Electric on your side, get some professional IT help          |
| 50:39      | and get back to work.                                                                                  |
| 50:40      | Now for automators listeners, Electric is offering a free pair of Beats Solo 3 headphones              |
| 50:46      | for taking a qualified meeting.                                                                        |
| 50:47      | Just go to electric.ai/automators.                                                               |
| 50:51      | Once again, electric.ai/automators, go there now to get your free pair of Beats                  |
| 51:00      | Solo 3 headphones today for scheduling a meeting.                                                      |
| 51:03      | And our thanks to Electric for their support of the automators and all of Relay FM.                    |
| 51:08      | Yeah, I got an email from Mark.                                                                        |
| 51:11      | I actually know this guy, I met him a long time ago at Macworld and it was nice hearing                |
| 51:16      | from him.                                                                                              |
| 51:17      | But he said, look, he's been hearing me talk about time tracking and he's decided to give              |
| 51:21      | it a try.                                                                                              |
| 51:22      | But he wants to use an automation-friendly platform for it.                                            |
| 51:25      | Mark, you're speaking my language, but you know, so the two he was looking at was Timer                |
| 51:30      | and Timing.                                                                                            |
| 51:31      | And honestly, those are the two good ones.                                                             |
| 51:33      | We did a whole show on Mac Power Users two or three years ago and we didn't really get                 |
| 51:38      | too heavy into automation on that show because that's not really what we do there.                     |
| 51:42      | But both of these are automation-friendly applications and so just generically kind of                 |
| 51:51      | breaking it down.                                                                                      |
| 51:52      | Timery plugs into the toggle kind of system, which is a free web service where you can                 |
| 51:58      | track time, but Timery is like a front end for it.                                                     |
| 52:02      | And the developer is really smart and has made some of the best catalyst apps on the                   |
| 52:09      | Mac and he also has the great apps on iOS and iPhone, and he has incorporated automation               |
| 52:14      | like at every step of the way.                                                                         |
| 52:16      | And this one particularly does well with shortcuts.                                                    |
| 52:21      | Like they've got actions and shortcuts that do just about everything.                                  |
| 52:25      | And this is like Rose said, probably a separate show, but like one of the things I like in             |
| 52:30      | Timery is you can make a shortcut to trigger a timer, but you could also, while you're                 |
| 52:36      | at it, like if you're triggering a timer, let's say to do work on client work, well,                   |
| 52:41      | why don't you also have it put you in a work focus mode?                                               |
| 52:45      | Why don't you have it also put the music on that you like when you do work?                            |
| 52:50      | And so think of it as an opportunity not just to trigger a timer, but to just create the               |
| 52:56      | atmosphere or the environment to do the work.                                                          |
| 52:58      | And we talk about setups all the time.                                                                 |
| 53:02      | This is a great example of that.                                                                       |
| 53:03      | So the timer, he fortunately works in a way where you can make a trigger to toggle the                 |
| 53:10      | timer or you could have turning the timer on trigger further automation.                               |
| 53:14      | So it allows you to kind of go both direction with it.                                                 |
| 53:17      | But the way I do it is I have a series of shortcuts that when I trigger them and and                   |
| 53:25      | I just say, you know, start work timer and that's the name of the shortcut.                            |
| 53:29      | And if I start typing that in with any of your shortcut launcher of choice, then it                    |
| 53:35      | turns on the work timer, sets the focus mode and just does everything I need to get work               |
| 53:40      | going.                                                                                                 |
| 53:41      | And I find that automation of that is super easy.                                                      |
| 53:45      | Now you could also do it with time ring because it's a shortcut based trigger.                         |
| 53:50      | You could also have it show up automatically without you manually triggering it.                       |
| 53:55      | I'll give you one example here and I'll let Rose talk.                                                 |
| 53:57      | I haven't talked in too long, but for instance, when I open the Kindle app on my phone or              |
| 54:02      | my iPad, then it sees that's a trigger because that can be a trigger in shortcuts when you             |
| 54:07      | open an app and that triggers the reading mode and that sets the reading focus mode                    |
| 54:13      | and it turns on the reading timer through timer and just does everything for me.                       |
| 54:18      | So you can kind of go through the day mark without having to do a lot of, you know, manually           |
| 54:25      | throwing triggers.                                                                                     |
| 54:26      | Now, I get some people like to manually throw the triggers.                                            |
| 54:30      | Sometimes I do too.                                                                                    |
| 54:31      | I think it helps you change your context, but if you want to bring automation to the game,             |
| 54:36      | that's the first one.                                                                                  |
| 54:37      | We're going to get to timing in a second, but that's kind of it for time ring.                         |
| 54:40      | Yeah, I definitely recommend, you know, you really want to tie this in to everything else              |
| 54:45      | that you would need to do so that you don't have to do another 21 actions as you move                  |
| 54:51      | into a mode.                                                                                           |
| 54:53      | And that for me is why the automation is key and timing and Timery are both great for this,            |
| 54:59      | for different reasons.                                                                                 |
| 55:00      | You know, I personally tend towards timing, Timery, but timing is great for, you know,                 |
| 55:08      | the slightly more granular, what was I doing at this moment, I'm on my Mac because, you                |
| 55:12      | know, I find it very easy to get a bit sidetracked at times so that I end up just, you know, doing,    |
| 55:18      | you know, something different.                                                                         |
| 55:19      | And it's nice to be able to figure out with timing specifically when I kind of went a                  |
| 55:25      | little off-piste, not necessarily in a bad way, that can also be a good way.                           |
| 55:29      | But yeah, just what was going on there.                                                                |
| 55:32      | I kind of wish these apps had the ability just to measure in like 10 minute increments.                |
| 55:38      | I mean, I really don't care about getting it down to the second.                                       |
| 55:43      | I mean, when I do time tracking, it's just to figure out where I'm spending my time.                   |
| 55:48      | I'm not, you know, I'm not billing clients anymore, so I don't need that granularity.                  |
| 55:52      | I feel like one mistake all of these make is they just lean into that detail so heavy                  |
| 55:57      | that it actually makes it more tedious to use the app.                                                 |
| 56:01      | You can, in Timery, you can tell it round, you know, you can say round to the nearest                  |
| 56:06      | half hour or 10 minutes or whatever.                                                                   |
| 56:08      | But I just, I would prefer it to just say, okay, don't even give me the option to insert               |
| 56:15      | seconds or minutes.                                                                                    |
| 56:16      | And, but that's just my own personal little thing.                                                     |
| 56:20      | I don't think there's a lot of people that want that, but, but the automation story for                |
| 56:23      | Timery I think is a good one, but it really begins and ends with shortcuts, but it has                 |
| 56:28      | super robust shortcuts.                                                                                |
| 56:31      | You can make it, you can only trigger a time, a Timery event with a shortcut.                          |
| 56:35      | You can also have Timery event shortcut triggered by other events like I just explained with           |
| 56:40      | my Kindle app opening up and they, he just continues, I forget the developer's name.                   |
| 56:46      | Right.                                                                                                 |
| 56:47      | It's right on the tip of my tongue.                                                                    |
| 56:48      | Joe.                                                                                                   |
| 56:49      | Yeah.                                                                                                  |
| 56:50      | Joe just continues to improve it.                                                                      |
| 56:51      | I'm on the beta and like, it seems like every few days there's a new version.                          |
| 56:54      | He's always figuring out all the rough spots of that app and, and making it smoother.                  |
| 56:59      | And that's an excellent option if you want to do some, some automatic time tracking.                   |
| 57:05      | Yes.                                                                                                   |
| 57:06      | Yeah.                                                                                                  |
| 57:07      | Definitely.                                                                                            |
| 57:08      | Timing on the Mac is, is great because it just, it just watches what you're doing                      |
| 57:10      | and it's like, okay, so you've set this up.                                                            |
| 57:12      | So like, you know, this application or, you know, this website, you know, tracks to this               |
| 57:17      | or whatever.                                                                                           |
| 57:18      | And that, that is awesome.                                                                             |
| 57:20      | And I love that you can achieve some of the similar things by like, you know, as David                 |
| 57:23      | said, you know, when I open the Kindle app, start, you know, this, this timer so that                  |
| 57:27      | I know that I was doing this.                                                                          |
| 57:29      | And that is great for, for those things, but on the Mac, I find it, it's a little nicer.               |
| 57:36      | It just sort of, it's entirely in the background and shortcuts on iOS is still a little bit            |
| 57:42      | more, I'm going to hop into the foreground and just let you know that I did the thing,                 |
| 57:46      | which, you know, has advantages and disadvantages, there's, there's definitely both to that.           |
| 57:50      | But yeah, we'll have to follow up at some point, maybe a bit later in the year on how                  |
| 57:56      | we're doing this because I've been, you know, tweaking my time tracking approach and what              |
| 58:01      | exactly is my time tracking for and how do I sort of categorise it, which has affected                 |
| 58:07      | the automations that I'm using for this, which is really nice.                                         |
| 58:11      | Yeah.                                                                                                  |
| 58:12      | And I would say if you spend primarily your time on the Macintosh, you really should look              |
| 58:16      | at timing because it tracks what's going on, on your computer and the automation, I mean,              |
| 58:22      | there's lots of automation and I could go deeper down the rabbit hole because with timing,             |
| 58:25      | you can write AppleScripts to do pretty much anything you can do with Timer, but, and I've            |
| 58:29      | done some of that.                                                                                     |
| 58:31      | But the real automation of timing really is you just train it whenever I'm at this web                 |
| 58:36      | page and then track that as recording the automators podcast because you only go to                    |
| 58:41      | this web page when you're recording the automators podcast and you can teach it over time and          |
| 58:46      | over, it gets so automated because as it learns, as you teach it, what you're doing, it puts           |
| 58:53      | everything in projects for you and the data is super accurate because it knows the moment              |
| 58:58      | you open the application, the moment you went to that window, the moment you left it.                  |
| 59:02      | So it's, it is a whole separate form of automation, but you have a lot of options, Mark.               |
| 59:08      | Yeah, you really do.                                                                                   |
| 59:10      | And I think one of those things is, you know, just continue to look for opportunities that             |
| 59:15      | you can, you can, you know, enhance and take from there.                                               |
| 59:19      | And as with all these things, you don't ever have to say, that's it, it's done.                        |
| 59:24      | I'm never touching it again, you know, do something for now, anything to get you started               |
| 59:29      | and then come back and have a dabble and play again later.                                             |
| 59:33      | It could be next week, it could be tomorrow, it could be next month or even next year.                 |
| 59:38      | But you know, don't don't lock yourself into thinking that your, your automation is finished.          |
| 59:43      | Just get yourself at a point where it works and then come back to it later so that you                 |
| 59:49      | can improve it once you figured out whether or not any of it's working for you to start                |
| 59:53      | with.                                                                                                  |
| 59:54      | So Joseph wrote in, which robot vac should I buy?                                                      |
| 59:59      | And this question is like, this is a dangerous question, like, because then Rose is going              |
| 01:00:05   | to tell me why the current robot vac I have, which is like four or five years old is terrible          |
| 01:00:11   | and I need to buy a new one.                                                                           |
| 01:00:13   | But I can tell you, I just have the iRobot robot vac, I have the basic one, but it does                |
| 01:00:18   | have a little station where it lands and empties its bag out.                                          |
| 01:00:23   | And my current automation scheme is I, as I'm walking out the door, I tap the little                   |
| 01:00:28   | button and he goes off and does his work when I'm out of the room.                                     |
| 01:00:32   | And I'm just not, I'm just not far down the robot vac, vac rabbit hole.                                |
| 01:00:38   | But I feel like Rose is going to, is going to make me nervous now.                                     |
| 01:00:42   | What are you doing, Rose?                                                                              |
| 01:00:43   | Well, maybe I'm going to make you nervous, maybe I'm not.                                              |
| 01:00:46   | So there is something important that you need to know if you have never used a robot vacuum            |
| 01:00:50   | or robot mop before, or even if you have, which is the, they are not big, powerful vacuums,            |
| 01:00:57   | you know, like the kind that you drag around, possibly literally doing the dragging, possibly          |
| 01:01:02   | lighter weight, whatever, you know, they, they are not going to have as much suction                   |
| 01:01:06   | and so on as those do.                                                                                 |
| 01:01:08   | But because they can just run every day, they can run while you're asleep or, you know,                |
| 01:01:13   | while you're in a meeting in another room or whatever, they can, by doing things frequently,           |
| 01:01:19   | be as effective as a human.                                                                            |
| 01:01:20   | Like every single morning, while I am in my morning standup meeting, the meeting where                 |
| 01:01:25   | everybody at work tells everyone, you know, this is what I've been up to, this is what                 |
| 01:01:28   | I'm going to be working on, have a nice day, it only takes 15 minutes with 15 people.                  |
| 01:01:34   | But, you know, we do that, and while I'm doing that, my robot mops and vacuums my kitchen              |
| 01:01:40   | for me.                                                                                                |
| 01:01:41   | So then I know my kitchen floor is clean, so, you know, if a fork drops on the floor,                  |
| 01:01:46   | I do not have to be like, oh, God, that's, you know, that's terrible, that needs to go                 |
| 01:01:49   | into the dishwasher in a 90 minute, you know, bacteria killing cycle.                                  |
| 01:01:53   | I can't just, you know, get a wash and use it.                                                         |
| 01:01:56   | And this, you know, this is great, because it does it every day.                                       |
| 01:02:01   | The thing with a robot vacuum, of course, because it's quite small is it's got a relatively            |
| 01:02:06   | small dirt bin, which is why David's got the one that can empty itself.                                |
| 01:02:10   | So it can just go back and empty the bin, and voila, it's done.                                        |
| 01:02:17   | And I have the same sort of thing.                                                                     |
| 01:02:19   | Now I have an ECOVACS D-Bot, I think it's the D7, but it is a robot vacuum, and it's                  |
| 01:02:29   | a mop, and it has a garage.                                                                            |
| 01:02:31   | So it can go back to the garage, and it can clean its mop heads, it's got an empty and                 |
| 01:02:34   | a clean, it's got a dirty and a clean water tank, so it can take clean water, wash the                 |
| 01:02:39   | mop heads, and then, you know, it pumps the water into the dirty water, it can refill                  |
| 01:02:43   | itself, and it can empty its own dirt bin.                                                             |
| 01:02:46   | And it will go around, and the reason why I got this one is if the mop heads are attached,             |
| 01:02:50   | it just doesn't go on to carpet.                                                                       |
| 01:02:52   | So even if my kitchen door is open, it's not going to come into the living room if the                 |
| 01:02:56   | mop heads are on.                                                                                      |
| 01:02:57   | If the mop heads are off, it will go off and clean everything around, you know, around                 |
| 01:03:03   | the house, which is lovely.                                                                            |
| 01:03:06   | You can get ones which will lift their mop section as they go on to carpet, that may                   |
| 01:03:10   | be preferable for some people, the Roborock ones can do that, but it really depends on                 |
| 01:03:16   | the kind of flooring you have as to what it is that you're going to want.                              |
| 01:03:21   | These things can be incredibly cheap, Prime Day sales, Anker does the eufy range of                  |
| 01:03:26   | robot vacuums, I had one of those before, it was great.                                                |
| 01:03:30   | Personally I went with the auto emptying and self-cleaning mop heads because I will                    |
| 01:03:36   | forget to do this, and there is nothing worse than coming home and finding that your robot             |
| 01:03:40   | vacuum barfed dust all over your carpet and having to vacuum up what the robot vacuum                  |
| 01:03:46   | un-vacumed by accident, but yeah, there's a lot of options out there.                                  |
| 01:03:51   | It kind of depends on what you can get on sale and what your needs are.                                |
| 01:03:55   | If you're in a split level home, either a dumber robot vacuum, which doesn't have a                    |
| 01:04:00   | map or one that can do multiple maps is probably going to be a win, or two robot vacuums if            |
| 01:04:06   | you've got the cash to splash.                                                                         |
| 01:04:07   | That's how I'm not tempted, I mean I feel like my answer would be get whichever one                    |
| 01:04:15   | you want.                                                                                              |
| 01:04:16   | I just don't think, they all kind of do the same thing, the trick is getting them to                   |
| 01:04:20   | go frequently.                                                                                         |
| 01:04:21   | Now, if you are someone who isn't home, let's say you go to the office five days a week                |
| 01:04:27   | and you want to be able to trigger the robot vacuum while you're at work, well then you                |
| 01:04:32   | need one that's got a few more features that can do it for you.                                        |
| 01:04:36   | But for me, fortunately, I'm not, I work from home and I don't have a scheduled time.                  |
| 01:04:41   | In fact, I tried to schedule this one at some point and then one night at 2 AM I woke up,              |
| 01:04:46   | I thought there was a thief in the house and it was just the robot vacuum bumping into                 |
| 01:04:49   | things in my studio.                                                                                   |
| 01:04:52   | I actually kind of like the manual nature of it, but what I would say is I think these                 |
| 01:04:57   | things have got a lot better since I bought mine.                                                      |
| 01:05:00   | That being said, mine runs at least once a day and I've replaced the battery I have,                   |
| 01:05:07   | I've got kind of the system down, I've replaced the roller, I've definitely been kind of getting       |
| 01:05:12   | the most out of this one and it does a great job.                                                      |
| 01:05:16   | I mean, once in a while I'll come in here because the room has a mixture of carpet                     |
| 01:05:20   | and hardwood floors and the back door leads out into the garden and sometimes I track                  |
| 01:05:25   | mud and sometimes the robot can't get that and I'll have to come in and mop up a little                |
| 01:05:29   | bit.                                                                                                   |
| 01:05:30   | But in general, these are some of the cleanest floors in the house and it's all in my little           |
| 01:05:35   | studio because my robot vacuum.                                                                        |
| 01:05:37   | So I guess my answer is you really can't go wrong.                                                     |
| 01:05:40   | Get one that's got some good reviews and just decide how far down the rabbit hole you want             |
| 01:05:44   | to go on automation.                                                                                   |
| 01:05:45   | I feel like automation is really where it starts getting more expensive.                               |
| 01:05:48   | It definitely can do.                                                                                  |
| 01:05:50   | That said, for me, I love the fact that this just runs every day at 9.45 AM and that, well,            |
| 01:05:56   | it runs Monday to Friday 9.45 AM and that's great.                                                     |
| 01:05:59   | I don't need to worry that my kitchen floor is ever not going to be cleaned every so often.            |
| 01:06:07   | As I'm throwing stuff in the laundry really quickly before work, I might get a little                  |
| 01:06:11   | bit of washing powder on the floor or something.                                                       |
| 01:06:13   | Well, it's going to get cleaned up so I don't have to worry about it and that is lovely.               |
| 01:06:19   | It doesn't mean that I can just throw things on the floor and expect the robot vacuum and              |
| 01:06:23   | mop to deal with them.                                                                                 |
| 01:06:25   | It will only be able to do what it's capable of doing.                                                 |
| 01:06:29   | These things aren't amazing, but a tiny little bit of washing powder or fabric softener or             |
| 01:06:35   | something that hits the floor, it's going to deal with that.                                           |
| 01:06:38   | The only thing I have to watch is want to go into the kitchen after stand up if I want                 |
| 01:06:42   | to grab a second breakfast because I am secretly part hobbit, that I have to practice my Disney        |
| 01:06:50   | on ice routine and walk like a penguin because otherwise, you'll be doing the slip and slide.          |
| 01:06:56   | Because don't be good fun.                                                                             |
| 01:06:58   | I would like to see that someday, Rose.                                                                |
| 01:07:01   | I have to say ever since I started taking acrobatics classes that unfortunately for everybody          |
| 01:07:08   | else has got a little less entertaining because I'm pretty good at just gliding now.                   |
| 01:07:15   | My mum used to be a figure skater.                                                                     |
| 01:07:17   | Maybe I inherited that ability.                                                                        |
| 01:07:18   | I don't know, but as it is, I'm having a lot of fun gliding across my kitchen floor                    |
| 01:07:22   | when I forget that it's slipperier than I remembered.                                                  |
| 01:07:29   | This episode of Automators is brought to you by TextExpander.                                          |
| 01:07:32   | When you work in a small team, every moment counts.                                                    |
| 01:07:34   | You don't want to be wasting your time finding video conferencing details to send to a new             |
| 01:07:38   | client.                                                                                                |
| 01:07:39   | You don't want to track down the same M4Qs from the company website again and again.                   |
| 01:07:43   | These are the kind of things you want to get your fingertips so you can get your work                  |
| 01:07:46   | done faster, and that's why you need TextExpander.                                                     |
| 01:07:50   | With TextExpander, you can access what you type the most with just a few keystrokes, allowing          |
| 01:07:54   | you to work faster and eliminate repetition, letting you focus on what matters most to                 |
| 01:07:59   | you.                                                                                                   |
| 01:08:00   | TextExpander's powerful shortcuts and abbreviations streamline your team's work.                       |
| 01:08:04   | All you have to do is type a short abbreviation and TextExpander does the rest for you.                |
| 01:08:08   | You just build a collect and your most commonly used phrases, messages, URLs and more right            |
| 01:08:13   | within TextExpander, then create your chosen abbreviation and they'll be with you wherever             |
| 01:08:17   | you type.                                                                                              |
| 01:08:18   | You can even customise snippets by having them automatically fill in dates, fill in the blank          |
| 01:08:22   | fields, timestamps and more.                                                                           |
| 01:08:23   | This will make sure that you keep the personality and the communication you send.                      |
| 01:08:28   | TextExpander is available on any device you use across any app you use, on Mac, Windows,               |
| 01:08:32   | Chrome and iOS.                                                                                        |
| 01:08:33   | I use TextExpander for all sorts, like making sure that when I type in tomorrow's date,                |
| 01:08:38   | it's actually tomorrow's date and it's correctly formatted, and you know, I just love that             |
| 01:08:43   | I don't make sure that I get the little things right, as well as the big stuff.                        |
| 01:08:46   | It's there helping me bridge all of those gaps, so that I don't have to think about                    |
| 01:08:50   | being productive, I just am productive.                                                                |
| 01:08:53   | If Repetitive Typing is getting you down, you need TextExpander.                                       |
| 01:08:56   | Check out TextExpander today at textexpander.com/automators and you can get 20% off your         |
| 01:09:02   | first year.                                                                                            |
| 01:09:03   | There's textexpander.com/automators to say goodbye to Repetitive Typing.                         |
| 01:09:08   | Our thanks to TextExpander for their support of this show.                                             |
| 01:09:11   | All right, Ty wrote in, he says, love the show, getting started learning to automate                   |
| 01:09:15   | his office and workflow, and he was listening to our [[Myke Hurley]] show where we talked about            |
| 01:09:19   | [[Home Assistant]], and before he was a [[Home Assistant]] user, he was a Hoops user.                          |
| 01:09:25   | We've talked about that on the show as well.                                                           |
| 01:09:28   | Hoops uses integrations and turns them into a bridge in the system with a QR code to scan              |
| 01:09:35   | it to [[HomeKit]].                                                                                         |
| 01:09:36   | I was able to bring the ring video doorbell into [[HomeKit]] with great ease.                              |
| 01:09:41   | Rose, are you getting experience with Hoops?                                                           |
| 01:09:43   | Yeah, a little bit of experience with Hoops.                                                           |
| 01:09:46   | It's one of those things where it's definitely nice and easy because you just kind of buy              |
| 01:09:51   | the box, you plug it in and it works.                                                                  |
| 01:09:53   | Under the hood, it's basically running Homebridge.                                                     |
| 01:09:56   | So if anybody's going, oh, that sounds really easy, it is running Homebridge.                          |
| 01:10:02   | If you have a computer at home like a Synology or something, you can definitely run this               |
| 01:10:08   | yourself and you can make it a lot easier for yourself.                                                |
| 01:10:14   | So Hoops is great.                                                                                     |
| 01:10:15   | I personally prefer [[Home Assistant]] for a load of the stuff, but yeah, there's a lot of great           |
| 01:10:21   | options out there.                                                                                     |
| 01:10:22   | It's worth considering.                                                                                |
| 01:10:24   | That said, at the moment, a Hoops starter box is on sale for $249.99, so I feel like                   |
| 01:10:33   | if somebody is looking at using this to solve their home automation problems, definitely               |
| 01:10:38   | take a look at Homebridge and [[Home Assistant]] first because they are free.                              |
| 01:10:42   | If you already have Hoops, that's great.                                                               |
| 01:10:47   | It works.                                                                                              |
| 01:10:48   | It's wonderful.                                                                                        |
| 01:10:49   | That's good.                                                                                           |
| 01:10:50   | Yeah, don't feel that you need to spend $250 to solve the gaps in your home automation                 |
| 01:10:55   | system.                                                                                                |
| 01:10:56   | The minimum would be worth saving some of that money so that you can maybe just buy upgraded           |
| 01:11:02   | automation devices, which will then work with [[Matter]] and [[HomeKit]] in the near future.                   |
| 01:11:07   | How long do you think we're going to have to wait for Matter to really land?                           |
| 01:11:13   | I mean, I kind of feel like to an extent it's already here.                                            |
| 01:11:15   | I got the new SwitchBot Hub the other day, which I've only just started playing with                   |
| 01:11:20   | it, but that's a Matter Hub.                                                                           |
| 01:11:22   | That will integrate the things like the curtains, the SwitchBot curtains that I have into [[HomeKit]]      |
| 01:11:27   | directly as well as [[Home Assistant]], which is great.                                                    |
| 01:11:31   | I'm looking forward to giving that a better try.                                                       |
| 01:11:33   | I've only just set it up, so I can't really talk about that yet.                                       |
| 01:11:37   | It feels like there's a lot of Matter-compatible devices here, and they're already bringing            |
| 01:11:42   | things into systems that previously they weren't able to do, they weren't compatible with.             |
| 01:11:49   | That said, the [[Matter]] and [[Thread]] spec, they're not fully rolled out yet, so there are limitations      |
| 01:11:55   | to that, but we're definitely going down that path already.                                            |
| 01:11:59   | It's coming faster than I thought it would.                                                            |
| 01:12:02   | I still don't think that if you've got a bunch of Hue lights, you should be throwing                   |
| 01:12:06   | them out to buy Matter-compatible ones.                                                                |
| 01:12:08   | A, because Hue's got a hub coming, and just buy the new hub of people, please don't buy                |
| 01:12:12   | all new light bulbs.                                                                                   |
| 01:12:13   | That'll be very expensive.                                                                             |
| 01:12:15   | And B, if AIM broke, don't fix it, don't change stuff that works just because there's                  |
| 01:12:20   | a theoretically better one out there.                                                                  |
| 01:12:22   | If you're, for example, light bulb is too dim, and therefore you are looking to get                    |
| 01:12:26   | a brighter light bulb, and you find a brighter light bulb that is also Matter-compatible,              |
| 01:12:32   | then that's great.                                                                                     |
| 01:12:33   | Bio means upgrade that, but yeah, don't throw away the stuff that's working just to get                |
| 01:12:37   | it matched your stuff, it doesn't matter, at least with that much.                                     |
| 01:12:45   | Don't replace equipment, but if you're buying new equipment, try and get Matter, because               |
| 01:12:49   | I think that's what you're going to want to have in a few years, or even sooner.                       |
| 01:12:55   | Another home kit product that is making the news right now is the Aqara Presence Sensor                |
| 01:12:59   | FP2.                                                                                                   |
| 01:13:00   | I can tell you, I've had like seven different listeners send me links to various reviews               |
| 01:13:07   | and links to this product.                                                                             |
| 01:13:09   | I wanted to talk to you about it, Rose.                                                                |
| 01:13:10   | I actually looked at it, they're still not available on Amazon as we record this, apparently           |
| 01:13:14   | they sold out very quickly.                                                                            |
| 01:13:17   | This is, it looks like a different device than the Aqara Human Presence Sensor that                    |
| 01:13:22   | I ordered from Aliexpress, but I'm not sure.                                                           |
| 01:13:27   | What do you know about it?                                                                             |
| 01:13:28   | So Aqara has two FP products, they've got the FP1 and the FP2.                                         |
| 01:13:36   | I'm just double-checking to refresh my memory.                                                         |
| 01:13:38   | I know that the FP1 is a Zigbee-based present sensor and the FP2 is Wi-Fi-based.                       |
| 01:13:44   | Personally, I dislike Wi-Fi connected devices simply because why do I need more things on              |
| 01:13:51   | my network that can talk to their own servers?                                                         |
| 01:13:55   | That doesn't seem to make a huge amount of sense.                                                      |
| 01:13:58   | This one is, it's a bit of a different form factor, and it works more or less the same                 |
| 01:14:04   | way in that it's supposed to be detecting things, but it's specifically, I think, supposed             |
| 01:14:11   | to be a ceiling-mounted one versus a wall-mounted one, but if you mount it on, well, you can           |
| 01:14:18   | mount it on either, but if you mount it on the ceiling, then it can do things like fall                |
| 01:14:21   | detection and so on.                                                                                   |
| 01:14:26   | It can check different zones and so on, but that only works well if you've got a really                |
| 01:14:31   | big open room that it can see all of, and you can define different areas of that room                  |
| 01:14:36   | very clearly.                                                                                          |
| 01:14:37   | There's a very precise linear boundary, and it makes sense to do so.                                   |
| 01:14:44   | It's one of those things.                                                                              |
| 01:14:45   | I've heard very good things about it.                                                                  |
| 01:14:46   | I've heard a lot of people loving it.                                                                  |
| 01:14:49   | I did initially have some difficulties with my FP1, which is the Zigbee-based one, and                 |
| 01:14:54   | then I went through a couple of forum threads, fortunately the [[Home Assistant]] forum had some           |
| 01:14:59   | and some other places, and it turned out, essentially, I was understanding how the sensors sense       |
| 01:15:05   | things a little bit.                                                                                   |
| 01:15:07   | I hadn't quite understood the labels, the way that they've been translated from Chinese                |
| 01:15:12   | didn't quite tally up, and it turns out now I have a perfectly working [[Human Presence Sensor\|human presence sensor]],                  |
| 01:15:18   | which is great, but yeah, the FP2 should be able to do multi-person detection.                 |
| 01:15:23   | It's got a built-in light sensor.                                                                      |
| 01:15:25   | It can do zone positioning, interference compensation on the Aqara hub.                                |
| 01:15:30   | It does local automations to an extent with other Aqara products.                                      |
| 01:15:35   | I wouldn't necessarily want it to do that, but yeah, it's got some nice things in there.               |
| 01:15:43   | The availability is the most difficult part.                                                           |
| 01:15:45   | I was able to pick up the FP1 on Aliexpress pretty easily, not hugely expensive at the                 |
| 01:15:50   | time, and it just plugs into a USB slot.                                                               |
| 01:15:54   | I'm not quite sure exactly what this uses for power, but just like the FP1, this is                    |
| 01:15:59   | going to be a powered device, it's not running on battery.                                             |
| 01:16:03   | When you say the FP1, is that the same thing as the [[Human Presence Sensor\|human presence sensor]] that I bought?               |
| 01:16:07   | That's what we have.                                                                                   |
| 01:16:08   | Yes.                                                                                                   |
| 01:16:09   | Yeah.                                                                                                  |
| 01:16:10   | Well, it's interesting times.                                                                          |
| 01:16:11   | People seem to really like it.                                                                         |
| 01:16:13   | If I can get my hands on one, I'm going to get one and try it out just to talk about it                |
| 01:16:15   | on the show.                                                                                           |
| 01:16:16   | I'm with you.                                                                                          |
| 01:16:17   | Generally, I find Wi-Fi devices a little slower, and they make everything a little worse               |
| 01:16:22   | on my Wi-Fi network.                                                                                   |
| 01:16:24   | Most I don't like to have a lot of them, but I'm super curious to see how this works.                  |
| 01:16:27   | My biggest gripe with the FP1 is a little bit, it's just a little slow, and it's not                   |
| 01:16:34   | working quite as I thought.                                                                            |
| 01:16:37   | I thought if I had this in here, and wanted to talk about my studio automation another                 |
| 01:16:41   | day, but I've been working on it, but I would thought that it would always know I was in               |
| 01:16:45   | here.                                                                                                  |
| 01:16:46   | But when I have it on, sometimes the lights still just go off for no reason.                           |
| 01:16:50   | I really have to combine it with an IR sensor in order to make it work the way I want, and             |
| 01:16:55   | I would like that to be just a one sensor thing.                                                       |
| 01:16:57   | I would like that to be one thing I can really rely on, and I don't think it's quite there             |
| 01:17:01   | yet.                                                                                                   |
| 01:17:02   | I have to say, now I've got mine in my living room, I've slowly been able to remove the                |
| 01:17:08   | other triggers from my automations as sensors, and so things just work.                                |
| 01:17:16   | But in my flat, I also have the advantage of a good chunk of the time, it's just me.                   |
| 01:17:21   | So I don't need to worry too much about other people being involved, counting how many people          |
| 01:17:26   | are present would certainly be interesting, but at the same time, it's not that crazy                  |
| 01:17:33   | to do.                                                                                                 |
| 01:17:35   | For me, I basically just need a binary.                                                                |
| 01:17:39   | Is somebody else here?                                                                                 |
| 01:17:40   | Yes or no?                                                                                             |
| 01:17:41   | Yeah, most of the time, the answer to that is maybe no, and I don't really need my automations         |
| 01:17:45   | to work differently for that.                                                                          |
| 01:17:47   | So yeah.                                                                                               |
| 01:17:48   | Well, either way, I feel like we're on the verge of something here with these human                    |
| 01:17:52   | present sensors, and if they do work reliably, it's going to make the automation story so              |
| 01:17:58   | much easier for people.                                                                                |
| 01:17:59   | You can just have one that says, when I'm in the room, turn the lights on, when I leave                |
| 01:18:02   | the room, turn the lights off, that kind of stuff reliably, that will be awesome.                      |
| 01:18:07   | So I hope that in the next six to 12 months, this becomes a thing that everybody can access,           |
| 01:18:12   | and it just works solidly, and my fingers are crossed for that.                                        |
| 01:18:17   | Yeah, it's exciting to see what's coming down the line for home automation in all of                   |
| 01:18:22   | the areas.                                                                                             |
| 01:18:23   | And it's good.                                                                                         |
| 01:18:24   | We'll have to talk about your home automation in the studio another time, David.                       |
| 01:18:28   | Maybe even next episode might have a little bit of time for that.                                      |
| 01:18:31   | I think we'll be able to fit that in.                                                                  |
| 01:18:33   | All right.                                                                                             |
| 01:18:34   | Well, we'll do that then.                                                                              |
| 01:18:35   | And in the meantime, gang, we are the Automators Podcast.                                              |
| 01:18:39   | You can find us over at relay.fm slash Automators.                                                     |
| 01:18:42   | Thank you to our sponsors today.                                                                       |
| 01:18:44   | That's our friends at Network to Code, Electric, and TextExpander.                                   |
| 01:18:48   | On Automators Max Day, we're going to be talking about smart screen displays and automation,           |
| 01:18:53   | which is going to be really fun, regardless.                                                           |
| 01:18:55   | We will see you next time.                                                                             |
| 01:18:56   | Goodbye, folks.                                                                                        |
