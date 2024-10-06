---
status: "complete"
fc-date:
  year: 2018
  month: 07
  day: 06
fc-category: "podcast"
podcast: "Automators"
published: 2018-07-06
duration: 2241
formattedduration: "00:37:21"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/1"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators001_RevA.mp3"
episode: 1
title: "1: Automating Calendar Events"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Starting with (complex) repeats, working all the way up to AppleScript - with examples. We take you through approximately 10 ways to automate calendar events!

# Hosts
```dataviewjs
dv.paragraph(dv.current().hosts.map(host => "- [[" + host + "]]"));
```
# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 001 Discussion](https://talk.automators.fm/t/automators-1-automating-calendar-events/353)
	- [Automators 01: Workflow Copy a Calendar Event](https://talk.automators.fm/t/automators-01-workflow-copy-a-calendar-event/1590/1)
	- [Automators 01: Automating Travel Time](https://talk.automators.fm/t/automators-01-automating-travel-time/1591/1)
	- [Automators 01: Block Events with Workflow](https://talk.automators.fm/t/automators-01-block-events-with-workflow/1592/1)
	- [Automators 01: Numbers and Fantastical for Batch Events](https://talk.automators.fm/t/automators-01-numbers-fantastical-for-batch-events/1589)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile Software]] - Multiply your team’s productivity.

# Show Notes
After lots of planning, Rose and David get to roll up their sleeves and start automating. Their first subject is those elusive calendar events that take so long to create. (So many presses and clicks!)

First, they agree that repeating events can actually be a form of automation, especially when you take it to the next level. David is obsessive about hyper-scheduling and, as a result, needs to make a lot of calendar events. He does it all using automation. Rose doesn’t like to remember directions to her dentist and, as a result, made a wicked Workflow workflow. Around this point, David opines that he could solve his travel-time problem with a Workflow (and after recording, actually created the nerdy solution and added it to show notes).

Rose figured out a way to use a combination of Numbers, Fantastical, and Keyboard Maestro on Mac to bulk create a LOT of calendar events and this marks the first instance of AppleScript, albeit a short one, for the first time to the podcast.

Around this time, our hosts wander into cloud services and pay homage to IFTTT and Zapier.

Then they wrap up, having given you, dear listener, a pile of ways to avoid ever manually creating a calendar event again.

- [Detailed Post](https://rosemaryorchard.com/blog/automators-episode-1) - This blog post contains all of the links, downloads, and screencasts for the various automations discussed in this episode.
- [Automators Talk](https://talk.automators.fm/c/episodes) - Discuss the episode and examples on our forum.
- [YouTube Channel](https://www.youtube.com/channel/UCvpU-_RS85Y7q5PZsAaH87w) - Here you can find all of our screencasts (including the Memoji video from episode 0).
- [Workflow: Event Templates](https://workflow.is/workflows/434bd4cf625f419282aee780d3414a4c) - This workflow can pair with one of the next two to create an event in your calendar and also a slightly longer event in your work calendar.
- [Workflow: Add Event To Work Calendar (Menu)](https://workflow.is/workflows/7028582e422441209e36690ab4621b94) - This Workflow asks if the previous event you created (triggered by the last workflow) is in working time and if so adds a longer event to your work calendar.
- [Workflow: Add Event To Work Calendar (Auto)](https://workflow.is/workflows/3a0dd365141d4146981c1297148f2a24) - This one does the same as the above Workflow, except it's 100% automated - no questions needed!
- [MacSparky: The Hyper-Scheduling Experiment](https://www.macsparky.com/blog/2018/2/the-hyper-scheduling-experiment)
- [Workflow: Block Scheduling Events (Screencast)](https://youtu.be/mRDUdsRBiIk) - How MacSparky schedules some of his events from the above hyper-scheduling.
- [Workflow: Block Schedule](https://workflow.is/workflows/4568f7c24b8e415c9e77305b26e4768e) - The workflow covered in the above screencast.
- [Workflow: Copy an Event (Screencast)](https://youtu.be/BNYbLxzKx2M) - Rose shows you how you can use Workflow to copy a calendar event.
- [Workflow: Copy a Calendar Event](https://workflow.is/workflows/ac14868356bd40a4b9223bbac1a844df) - The workflow from the above screencast.
- [Mac Power Users 418: Workflows with Rose Orchard](https://www.relay.fm/mpu/418)
- [Numbers and Fantastical for Batch Event Creation (Screencast)](https://youtu.be/tvlrZpEklbw) - How to use that crazy number sheet and Keyboard Maestro to create potentially hundreds of events with Fantastical.
- [Workflow: Clipboard Events to Fantastical](https://workflow.is/workflows/8be06c81e6f4408687a1a5ca1e8b772d) - A workflow to replace the above Keyboard Maestro macro - should you be working on iOS.
- [Drafts Action: Events in Fantastical](https://actions.getdrafts.com/a/1ED)
- [Fantastical Video Guides](https://flexibits.com/fantastical/videos)
- [Adding Travel Time before and after events (Screencast)](https://youtu.be/Do6UWlnO_5g) - David breaks down his Workflow which adds travel time to and from events for you.
- [Workflow: Event Review](https://workflow.is/workflows/cda1965b59ae4ef19ece6958be097187)

# Transcription

| Time Index | Transcription                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm Rose Orchard and joined by my co-host, David Sparks.                                                        |
| 00:05      | And this is Automators, where we talk about how to automate your technology to do your                                 |
| 00:09      | work for you.                                                                                                          |
| 00:10      | Hello, David.                                                                                                          |
| 00:11      | Hello, Rosemary.                                                                                                       |
| 00:12      | You want to talk about some calendar stuff?                                                                            |
| 00:14      | Oh, yes.                                                                                                               |
| 00:15      | Yeah.                                                                                                                  |
| 00:16      | We can do so much with automating calendar events.                                                                     |
| 00:19      | You spend so much time planning a new podcast and getting everything just right.                                       |
| 00:24      | It's really fun when you sit down at the microphone and say, let's go.                                                 |
| 00:28      | Yes.                                                                                                                   |
| 00:29      | It is.                                                                                                                 |
| 00:30      | This is a very exciting moment.                                                                                        |
| 00:31      | All right.                                                                                                             |
| 00:32      | So we decided to start off this show talking about automating calendars.                                               |
| 00:36      | And I think it's because calendars are something everybody's dealing with all the time.                                |
| 00:41      | And it is ripe for automation.                                                                                         |
| 00:45      | Very often you're going to have similar appointments or similar actions you do with calendar events.                   |
| 00:51      | And Rose and I have both gone really deep on that.                                                                     |
| 00:53      | So we thought it'd be fun to share with you some of our automation related to calendars                                |
| 00:57      | today.                                                                                                                 |
| 00:58      | Yes.                                                                                                                   |
| 00:59      | And there's an awful lot that you can do.                                                                              |
| 01:00      | Even appointments that don't happen regularly, but are kind of the same, that's the point                              |
| 01:05      | where you can really get started.                                                                                      |
| 01:06      | For example, I can never remember exactly where my dentist is.                                                         |
| 01:10      | I've got the address, but then when I get there, it's like, oh, which lift is it that                                  |
| 01:14      | I need to use?                                                                                                         |
| 01:15      | And which floor do I get out on?                                                                                       |
| 01:17      | And do I turn left or right after I get out of the lift?                                                               |
| 01:19      | Things like that, that's the sort of place where you can save yourself a lot of time                                   |
| 01:23      | and make your life easier as well.                                                                                     |
| 01:25      | So how do you automate around that?                                                                                    |
| 01:27      | Well, for things like my dentist appointments, doctor appointments, hairdresser appointments,                          |
| 01:32      | I have a very simple workflow, which is a menu and it asks me which kind of appointment                                |
| 01:39      | it is.                                                                                                                 |
| 01:40      | And then it automatically inputs the name of the appointment, the address and notes                                    |
| 01:45      | in the appointment and sets a specific reminder for me as well.                                                        |
| 01:49      | And I've gone one step further.                                                                                        |
| 01:51      | Also, if this appointment is in work time, so something like a dentist or a doctor appointment,                        |
| 01:55      | which is more difficult to make outside of working hours, it adds an extra event to my                                 |
| 01:59      | work calendar as well, which just says private appointment on it to make sure that people                              |
| 02:03      | at work don't try and put me in for a meeting at the same time.                                                        |
| 02:05      | Yeah.                                                                                                                  |
| 02:06      | Okay.                                                                                                                  |
| 02:07      | So you're doing that with [[Workflow]], correct?                                                                       |
| 02:09      | On the iOS?                                                                                                            |
| 02:10      | Yeah.                                                                                                                  |
| 02:11      | Because most of the time I've got my iPhone with me and so that's the machine that I'm                                 |
| 02:15      | going to be using to do a lot of my automation just because it's right there in my hand.                               |
| 02:20      | And just a warning in this show, not every show is going to be the same, but in this                                   |
| 02:24      | show we're going to talk about workflow a lot because it is so convenient for calendar                                 |
| 02:29      | event management and the tools are actually quite powerful.                                                            |
| 02:33      | You can download workflow for free, [[Apple]] owns it, they just announced that they're                                    |
| 02:37      | going to be switching over to these Siri shortcuts, which both Rose and I were in San Jose when                        |
| 02:43      | it happened and talked to several people and it sounds like all the workflow stuff is going                            |
| 02:47      | to come over to Siri shortcut.                                                                                         |
| 02:48      | So if you're listening to this in the future, first welcome and congratulations on your                                |
| 02:53      | time travel and second, you'll be able to do this in [[Shortcuts\|Siri shortcuts]] as well.                            |
| 02:58      | So when you're doing this thing for your dentist, so you said there's a selection.                                     |
| 03:04      | So what is the workflow command and we're going to put this in the show now so you can                                 |
| 03:07      | download it, but just kind of generally explain the steps you're taking in [[Workflow]].                               |
| 03:12      | Well the very first thing it does is it asks me when the appointment is because I'm after                              |
| 03:16      | running this just after talking to somebody on the telephone and I don't know about you                                |
| 03:19      | but my memory is like a goldfish, if I don't write down exactly what it is first, the date                             |
| 03:24      | and the time, I'm going to forget it.                                                                                  |
| 03:26      | So the first thing that it does is it takes the date and the time from me and then that's                              |
| 03:30      | an ask for inputs with the selection date and time.                                                                    |
| 03:33      | Yeah, so it makes it really easy to use drag a box over and it's a date.                                               |
| 03:38      | And then after that I have a menu action and I've got three different entries in there.                                |
| 03:44      | I've got dentist, I've got doctor and I've got hair and then inside each of those entries                              |
| 03:51      | in the menu there's a calendar action to add an event to my calendar and before that there                             |
| 03:58      | is a just time which changes the duration.                                                                             |
| 04:03      | So I know for example a hair appointment is probably going to be 30 minutes at most but                                |
| 04:08      | with the doctor or the dentist I'm going to be waiting for a while because they can't                                  |
| 04:11      | really run on time that easily, things always come up for them.                                                        |
| 04:14      | So that gives me an hour for the appointment and this is then the end date for the appointment.                        |
| 04:19      | So the first date that I gave him right at the beginning is the start and then it adjusts                              |
| 04:23      | the date to be the end date and then it takes all of this information and some pre-filled                              |
| 04:27      | information that I've put into each of the create calendar event actions.                                              |
| 04:31      | So and let me just interrupt there.                                                                                    |
| 04:33      | So you're saying like you put in the address and maybe which direction you walk when you                               |
| 04:37      | get out of the elevator.                                                                                               |
| 04:38      | Exactly, and that goes into notes and depending on what kind of appointment it is, it has                              |
| 04:42      | a predefined alert as well so I don't forget because if you don't turn up to your dentist                              |
| 04:47      | on time they're not going to be very happy with you are they?                                                          |
| 04:51      | Yeah, and that's it.                                                                                                   |
| 04:52      | It creates the event.                                                                                                  |
| 04:53      | Yeah, that's it.                                                                                                       |
| 04:54      | It's very, very simple.                                                                                                |
| 04:55      | You could even put into that and then like you said, so how does it know if it's work                                  |
| 05:00      | time or not to put it into your work calendar?                                                                         |
| 05:03      | Well, I tend to, I actually have it run another workflow.                                                              |
| 05:09      | So I have it run a workflow and it just, and that workflow is very simple.                                             |
| 05:13      | It does the, it has a menu and says, is this appointment inside work time or outside of                                |
| 05:19      | work time?                                                                                                             |
| 05:20      | Yeah.                                                                                                                  |
| 05:21      | If I say it's inside of work time, then it asked me to choose the event from my calendar,                              |
| 05:25      | adds 30 minutes at the beginning and at the end and then puts it in my work calendar for                               |
| 05:28      | me.                                                                                                                    |
| 05:29      | And I will be putting both of these workflows in the show notes because sometimes you do                               |
| 05:32      | need to put personal appointments in your work calendar as well.                                                       |
| 05:36      | And I like to just put them in as private appointments.                                                                |
| 05:40      | And that's possibly something other people will be wanting to use as well.                                             |
| 05:43      | And that was clever what you talked about, putting, adding 30 minutes to the front and                                 |
| 05:47      | end of it.                                                                                                             |
| 05:48      | So you've got travel time covered.                                                                                     |
| 05:50      | Travel time and automation is, I think, another thing, right?                                                          |
| 05:53      | I almost listed that as one of my favourite automation routines is taking an event and                                 |
| 06:00      | a workflow can absolutely do this and say, okay, add a separate event for travel time                                  |
| 06:06      | to and back.                                                                                                           |
| 06:07      | And you can make it, like, if you want to get fancy, you can make it a menu selection                                  |
| 06:09      | where you can pick how long it's going to take.                                                                        |
| 06:12      | And you know, like where [[Apple]], like [[Apple\|Apple's]] [[Apple Calendar\|calendar]] app has the option to put travel             |
| 06:16      | time in, but it only gives you travel time getting there.                                                              |
| 06:20      | Like a lot of times I have events that are away from the office or the home.                                           |
| 06:24      | It takes 30 minutes to get there, but I have to get back afterwards.                                                   |
| 06:27      | So I still need to cover that time in my calendar with [[Automator]], or I'm sorry, with [[Workflow]].                 |
| 06:33      | I call it automator because it's like the automator for iOS, but with workflow you can                                 |
| 06:37      | actually automate that process.                                                                                        |
| 06:39      | Now if you had told me earlier, your workflow could look at and figure out what time work                              |
| 06:44      | was open and then automatically run the second script to add the work event.                                           |
| 06:50      | I was going to be really impressed.                                                                                    |
| 06:51      | Well, I can do that.                                                                                                   |
| 06:53      | And I do, I have done an extended automation that's got that as well.                                                  |
| 06:57      | And I'll put that third workflow in there as well.                                                                     |
| 06:59      | But if you're new to workflow and look at it and it's a bit overwhelming, then maybe                                   |
| 07:02      | go with the two workflow solutions to start with because it's a lot simpler to work with.                              |
| 07:07      | And honestly, there is diminishing returns on this stuff.                                                              |
| 07:10      | I mean, we're, we're making a show about automation, but we also don't want it to be                                   |
| 07:14      | crazy.                                                                                                                 |
| 07:15      | Like some of the automation I'm going to share later, there's some manual steps in there                               |
| 07:18      | that I have made manual on purpose.                                                                                    |
| 07:21      | And sometimes it just makes sense to do it that way, but, but I like that Rose.                                        |
| 07:25      | So you've got, every time you make an appointment with, you know, your hairdresser, your doctor,                       |
| 07:29      | whatever you've got, all the directions and all the appointments taken care of, you don't                              |
| 07:33      | need to add the address.                                                                                               |
| 07:35      | And it's just a simple workflow.                                                                                       |
| 07:36      | Yeah.                                                                                                                  |
| 07:37      | And it's very simple.                                                                                                  |
| 07:38      | And it just saves me time when I make these appointments because often when you make this                              |
| 07:44      | kind of appointment, you're probably going to be pressed for time anyway.                                              |
| 07:47      | And you, you know, you've had to take time out of your day to call these people and make                               |
| 07:50      | the appointment.                                                                                                       |
| 07:51      | Let's save you a little bit of time afterwards, after that, at the very least.                                         |
| 07:54      | Well, I've got a similar one, but it's not quite as complicated.                                                       |
| 07:58      | And it's just a, because I do what I call [[Hyper Scheduling\|hyper scheduling]] or block scheduling a lot             |
| 08:03      | of times, and there are certain parts of the day that are pretty routine for me.                                       |
| 08:07      | And I'm still, I guess new enough to this, or I still like the motivation of having those                              |
| 08:12      | blocks on the calendar.                                                                                                |
| 08:13      | Like I have a certain block of time that I'll deal with email and I kind of try to stick                               |
| 08:17      | to that.                                                                                                               |
| 08:18      | So I don't let email take over the day and I have a block of time for working out a block                              |
| 08:21      | of time for, you know, some of the, the various things I do, and they generally follow a specific                      |
| 08:28      | order from six a.m. to about 10 a.m. every day.                                                                        |
| 08:32      | And then after that, it's getting into specific client projects or whatever I'm doing.                                 |
| 08:36      | So there's a couple of ways to deal with this.                                                                         |
| 08:39      | I mean, if you're in a calendar app, you can just literally block and copy prior events                                |
| 08:44      | that have the same blocks, but sometimes I'm not, sometimes I'm out on the road and I haven't                          |
| 08:49      | calendared myself for those blocks.                                                                                    |
| 08:51      | So I went ahead and made a workflow for that.                                                                          |
| 08:54      | And it's the easiest possible workflow.                                                                                |
| 08:56      | All it is is four events that are set at a specific time.                                                              |
| 09:00      | And one of the nice things about [[Workflow]] is you can schedule the events relative to the                           |
| 09:04      | day you run the workflow, like today or tomorrow.                                                                      |
| 09:07      | And so that's something, frankly, that [[Automator]] doesn't do very well on the Mac.                                  |
| 09:12      | But anyway, so with workflow, you can make a very simple list of events, automatically                                 |
| 09:16      | create them, push one button and the events are already created.                                                       |
| 09:19      | And creating events on iOS and your iPhone and iPad isn't necessarily always very easy.                                |
| 09:26      | So doing this through workflow really saves you a lot of time.                                                         |
| 09:29      | And I'll go ahead and list that.                                                                                       |
| 09:30      | I'll put that one up as well.                                                                                          |
| 09:32      | With these workflows we talk about when we say we're going to put it up, the app has                                   |
| 09:35      | a really nice function where you can give a link.                                                                      |
| 09:39      | You can put a public link up to the workflow itself.                                                                   |
| 09:42      | So if you're listening and you're interested to try these out, download the [[Workflow]] app                           |
| 09:47      | and then just go to the show notes site for Automators.                                                                |
| 09:51      | And then we'll have a description and a link.                                                                          |
| 09:54      | Just click the link from your iOS device, your iPad or your iPhone, and it's going to automatically                    |
| 09:58      | import that workflow so you can use it.                                                                                |
| 10:01      | And then once you start looking through it, you can customise it.                                                      |
| 10:05      | For instance, with the version that Rose puts up, I'm assuming you're not going to put your                            |
| 10:09      | actual dentist address there.                                                                                          |
| 10:11      | He'll put some placeholder or something.                                                                               |
| 10:13      | So you would go through and just replace the address.                                                                  |
| 10:16      | And with my events, I'm going to have some very generic ones.                                                          |
| 10:19      | You can go through and change the names.                                                                               |
| 10:21      | And guess what?                                                                                                        |
| 10:22      | Once you do that, you're an automator.                                                                                 |
| 10:23      | You done it.                                                                                                           |
| 10:24      | That's it.                                                                                                             |
| 10:25      | You know, first 10 minutes of the show.                                                                                |
| 10:26      | You already won.                                                                                                       |
| 10:27      | Yes.                                                                                                                   |
| 10:28      | Definitely.                                                                                                            |
| 10:29      | All right.                                                                                                             |
| 10:30      | Something people don't think about in terms of automation with calendars that I do all                                 |
| 10:34      | the time is just repeating events.                                                                                     |
| 10:36      | I mean, that is an automation where your computer is creating events for you.                                          |
| 10:40      | And that has got a lot better over the years, making a repeating event.                                                |
| 10:46      | You have a lot of options with [[Apple Calendar\|Calendar]] for Mac OS.                                                |
| 10:50      | You can make it daily, weekly, monthly, yearly, custom, like you can say every, you know,                              |
| 10:56      | every second Tuesday of the month or something like that.                                                              |
| 10:59      | In fact, Rose and I did that when we were setting our recording schedule for the show.                                 |
| 11:03      | We decided we're going to record on a certain day of the month, every month.                                           |
| 11:07      | We didn't write a script for it.                                                                                       |
| 11:09      | We just did a repeating event and it's taken care of.                                                                  |
| 11:12      | We did the same thing for the publication.                                                                             |
| 11:14      | Yep.                                                                                                                   |
| 11:15      | And it's very, very simple.                                                                                            |
| 11:16      | And a lot of people think of repeating calendar events as sort of daily, weekly, monthly,                              |
| 11:22      | yearly, but in every single calendar application that there is, I've checked it with Google                            |
| 11:26      | and I've checked in Outlook.                                                                                           |
| 11:28      | I've checked in all of them.                                                                                           |
| 11:29      | They all have the option to do custom repeats, which can be something like on the third Tuesday                        |
| 11:34      | of every month or every second Friday, things like that, which make life a lot easier.                                 |
| 11:39      | If you've got a slightly irregular recurring event, you could even do every 13 years if                                |
| 11:45      | you wanted to.                                                                                                         |
| 11:46      | Yeah.                                                                                                                  |
| 11:47      | And maybe you're afraid of commitment.                                                                                 |
| 11:48      | You know, you're thinking, I don't want to do this and I'm going to have this calendar                                 |
| 11:51      | event.                                                                                                                 |
| 11:52      | I'm going to feel like I have to do it.                                                                                |
| 11:54      | And even though I always do it on the second Tuesday of the month, once in a while, I have                             |
| 11:58      | to go to the dentist where you turn left and you get out of the elevator.                                              |
| 12:02      | And so there's going to be occasional exceptions.                                                                      |
| 12:04      | I don't want to bother with a repeating event.                                                                         |
| 12:07      | It's silly because the good news is when you have an exception, you have a repeating event,                            |
| 12:11      | you can move it.                                                                                                       |
| 12:12      | It's not like carved in stone in your digital calendar.                                                                |
| 12:15      | You just move it.                                                                                                      |
| 12:16      | When you do the calendar apps will generally prompt you to say, now are you moving it to                               |
| 12:20      | this new time permanently going forward or is this just a one-time exception?                                          |
| 12:25      | And that's what I do all the time.                                                                                     |
| 12:26      | I say, no, this is a one-time exception.                                                                               |
| 12:28      | And then you're still fine and everything's calendar in the future.                                                    |
| 12:32      | Yes.                                                                                                                   |
| 12:33      | And you can actually set an end date on repeating calendar events as well.                                             |
| 12:37      | So you can say that it's going to start, for example, next Tuesday, and it will repeat                                 |
| 12:41      | every third Tuesday for six months, and then it stops, which is great for this.                                        |
| 12:46      | I always like to spend some time writing articles for MacSparky on Saturdays, usually from                             |
| 12:51      | like 9 AM to like noon, I just sit and write stuff for the following week.                                             |
| 12:56      | So for some reason, I was having trouble remembering to develop that habit.                                            |
| 13:00      | And even though in the back of my mind, Saturday morning is writing time, I just created a                             |
| 13:06      | repeating calendar event for it, and it just, it really helped me out in terms of reminding                            |
| 13:11      | me every Saturday to get on my horse and start writing.                                                                |
| 13:14      | Yes.                                                                                                                   |
| 13:15      | And you can add reminders to calendar events as well, which is especially helpful going                                |
| 13:18      | back to your travel time calendar events, going there and coming back.                                                 |
| 13:22      | Well, you know, when you're going there, it's nice not to have the reminder when it's time                             |
| 13:26      | to leave, but to have a reminder 15 minutes before it's time to leave.                                                 |
| 13:29      | So you've got time to grab your iPad or your laptop or whatever it is that you need to                                 |
| 13:33      | take with you and make sure your documents are ready before you get in the car instead                                 |
| 13:37      | of running out of the door as soon as your phone notifies you.                                                         |
| 13:40      | Do you remember when we used to be able to attach [[AppleScript]]                                                      |
| 13:45      | the Mac?                                                                                                               |
| 13:46      | Well, you still can, actually.                                                                                         |
| 13:48      | It's possible.                                                                                                         |
| 13:49      | You can.                                                                                                               |
| 13:50      | You just have to use...                                                                                                |
| 13:51      | I thought they took that out.                                                                                          |
| 13:52      | No, it was at least in my version when I was last looking at it.                                                       |
| 13:56      | You can use Automator as well to execute something when a calendar event happens.                                      |
| 14:04      | You just have to look and it's...                                                                                      |
| 14:06      | I believe the correct way to do it now is just through [[Automator]], but then you can add                             |
| 14:11      | it as a specific alarm to that event.                                                                                  |
| 14:15      | All right.                                                                                                             |
| 14:16      | It's hidden in there somewhere, but you can definitely find this sort of thing.                                        |
| 14:19      | Yeah.                                                                                                                  |
| 14:20      | It used to be right in the calendar event.                                                                             |
| 14:22      | You could trigger a script.                                                                                            |
| 14:23      | You could add a script right to the event.                                                                             |
| 14:25      | Then when the event shows up, the script runs, which was like a great way to do things                                 |
| 14:29      | like back in the old days when you'd want to make sure you run on your maintenance scripts.                            |
| 14:33      | You could just attach it to an [[AppleScript]] to a calendar event.                                                    |
| 14:36      | Yes.                                                                                                                   |
| 14:37      | But nowadays, if you use [[Google Calendar\|Google calendars]], then you can have [[IFTTT\|If This Then That]] trigger |
| 14:41      | when a calendar event starts, which is really powerful.                                                                |
| 14:44      | Yeah.                                                                                                                  |
| 14:45      | And that's a nice thing.                                                                                               |
| 14:46      | Using a calendar event to start an automation is something that you may want to do.                                    |
| 14:51      | Yes.                                                                                                                   |
| 14:52      | And I think a lot of people are going to have a lot of fun with that.                                                  |
| 14:56      | This episode of Automators is brought to you by Smile Software, makers of PDF pen and                                  |
| 15:01      | TextExpander.                                                                                                          |
| 15:02      | Today, I want to tell you about TextExpander for teams.                                                                |
| 15:06      | It's a simple way to make typing faster.                                                                               |
| 15:08      | You can set up shortcuts, which expanded to words, sentences, paragraphs, or even whole                                |
| 15:13      | documents.                                                                                                             |
| 15:14      | And the best part of it all is you can share it with everyone you work with.                                           |
| 15:18      | These responses are easily accessible and even searchable to make sure everyone can                                    |
| 15:23      | find the best response.                                                                                                |
| 15:24      | You can even make these snippets more powerful by using [[AppleScript]] and [[JavaScript]] to automate                         |
| 15:29      | things.                                                                                                                |
| 15:31      | TextExpander for teams allows everyone to be on the same page, which helps avoid confusing                             |
| 15:35      | your team and your customers.                                                                                          |
| 15:38      | Let your best writers do the writing and as soon as they make a change, it will be changed                             |
| 15:42      | for everyone.                                                                                                          |
| 15:44      | TextExpander is available on Mac, iOS, Windows, and even the web, so everyone can use these                            |
| 15:50      | snippets on all of their platforms all the time.                                                                       |
| 15:54      | If you're in a larger team, then TextExpander supports single sign-on and grouping accounts,                           |
| 15:59      | which includes identity providers like G Suite, Octa, 1Login, and means your newest employees                          |
| 16:05      | can start using this great tool in even less time.                                                                     |
| 16:09      | TextExpander multiplies your team's productivity.                                                                      |
| 16:12      | It makes an up-to-date, shared knowledge easily available for everyone.                                                |
| 16:16      | Visit textexpander.com/podcast to learn more, and don't forget to tell them that you                                   |
| 16:21      | heard about it on Automators.                                                                                          |
| 16:23      | Our thanks to TextExpander from Smile for their support of this show.                                                  |
| 16:27      | Another bit, I guess I'll call this automation, although it's not really, it's just copy                               |
| 16:33      | and paste.                                                                                                             |
| 16:34      | If you have repeating events, so maybe on Monday you look at your calendar and you're                                  |
| 16:39      | like, okay, I'm going to spend the first two hours working on this big work project                                    |
| 16:44      | every day.                                                                                                             |
| 16:45      | You could just create one entry of the event, hit Command-C, and then hit Command-D a bunch                            |
| 16:49      | of times, and then you drag it and set it up into your positions.                                                      |
| 16:52      | I'm not sure that even qualifies automation, but it's in the ballpark.                                                 |
| 16:56      | Yeah.                                                                                                                  |
| 16:57      | On iOS, in the native [[Apple Calendar\|calendar]] app, you actually can't copy events, at the very least not easily.  |
| 17:05      | I've got a little workflow, which I will include in the show notes, which lets you copy a                              |
| 17:09      | calendar event, and then you just modify the date and the time, for example, and you run                               |
| 17:13      | it again, and voila, you have a new calendar event.                                                                    |
| 17:16      | Yeah.                                                                                                                  |
| 17:17      | You can do the same thing without a workflow script if you use [[Fantastical]] or [[BusyCal]].                         |
| 17:22      | Yes.                                                                                                                   |
| 17:23      | They have built-in functions for that, which is really nice.                                                           |
| 17:26      | Just long press, and then they have a duplicate button, and then you can set the start time                            |
| 17:30      | and it'll set up a duplicate event.                                                                                    |
| 17:32      | Yes.                                                                                                                   |
| 17:33      | Okay.                                                                                                                  |
| 17:34      | Every so often, somebody is possibly going to dump a list of events on you.                                            |
| 17:38      | If you're a parent, it might be that your child's school sends home a list of events                                   |
| 17:43      | that's going to be happening throughout the year, like parent teacher conferences, sports                              |
| 17:46      | days, things like that.                                                                                                |
| 17:48      | Maybe you are a sports fan and you just want to put all of your team's sports fixtures                                 |
| 17:53      | in your calendar, or maybe you are an athlete yourself.                                                                |
| 17:56      | Or sometimes, I know as a university student, I would get lists of seemingly random lectures                           |
| 18:02      | that I would be required to attend.                                                                                    |
| 18:04      | What's really useful is if you can actually dump all of these into your calendar at once.                              |
| 18:11      | Sometimes they come nicely formatted, so you can just go, hey, [[Fantastical]], deal with this                         |
| 18:14      | for me.                                                                                                                |
| 18:16      | Sometimes you need to do a little bit of tweaking before you can do that.                                              |
| 18:19      | To do that, I have a [[Numbers]] spreadsheet.                                                                          |
| 18:21      | Now, you're probably thinking, [[Numbers]], spreadsheet, [[Apple Calendar\|Calendar]], what's happening here?          |
| 18:27      | What I do is I just paste it in so that what I paste in goes into the very first column                                |
| 18:31      | becomes the title of the event, and then I can add things like the location, the start                                 |
| 18:35      | time, how long it's going to last.                                                                                     |
| 18:37      | If I want, I can add a URL or an alert and the calendar name, and then the spreadsheet                                 |
| 18:42      | will give me in one column a nice list of all of these events, which I can then parse                                  |
| 18:48      | in Fantastical, just to make my life that much easier.                                                                 |
| 18:51      | Because especially if the sports events, they're probably going to be home and away.                                   |
| 18:56      | Every other event, you're going to be able to put in your team's home ground, and then                                 |
| 19:01      | the other ones, you might need to find out where they are if you're going to be attending                              |
| 19:05      | those and the location is important.                                                                                   |
| 19:07      | Yeah.                                                                                                                  |
| 19:08      | So then you've got a list in the number spreadsheet, and something you could do here, like lawyers                     |
| 19:13      | do this all the time, you'll say, okay, we've got a trial date on November 1st.                                        |
| 19:18      | Well, there's a whole bunch of triggers that come before that.                                                         |
| 19:22      | There's a deadline to file witness statements or whatever.                                                             |
| 19:26      | Whatever project you're working on, think about things that relate to a big date you                                   |
| 19:31      | put in.                                                                                                                |
| 19:32      | Maybe you have the graduation party on June 1st, but you want to make sure you've got                                  |
| 19:39      | the cake ordered by a week before that, and you want to make sure that you've got the                                  |
| 19:43      | invitations out at least three weeks before that.                                                                      |
| 19:46      | With numbers, you can create automation-infected numbers to say, take the June 1st date, and                           |
| 19:51      | you can do date math in the number spreadsheet, and then you can generate a whole bunch of                             |
| 19:56      | additional events in numbers before you run the automation routine.                                                    |
| 19:59      | So we're kind of doing automation on automation at that point.                                                         |
| 20:03      | Yes.                                                                                                                   |
| 20:04      | And it's great because then you've got this list of events, and of course, you can just                                |
| 20:06      | copy and paste this fantastical thing into [[Fantastical]], but I mean, we're automators,                              |
| 20:12      | right?                                                                                                                 |
| 20:13      | Right.                                                                                                                 |
| 20:14      | So I've got a [[Keyboard Maestro]] macro, a workflow, and a [[Drafts]] action.                                         |
| 20:19      | So that's one for Mac 2 for iOS, where you can actually take this list of events and dump                              |
| 20:24      | it into Fantastical and just have Fantastical add it straight to your calendar, boom, everything's                     |
| 20:29      | in there.                                                                                                              |
| 20:30      | You could add five events.                                                                                             |
| 20:31      | You could add 500 events, and it will just do it for you, which is so powerful.                                        |
| 20:36      | Yeah.                                                                                                                  |
| 20:37      | So, and just, we haven't mentioned [[Keyboard Maestro]] yet, but it is one of the most powerful                        |
| 20:42      | tools for automation on your Mac, and it allows you to do lots of things, just about anything.                         |
| 20:48      | You can tell it to click on a certain place in the screen.                                                             |
| 20:51      | It doesn't matter.                                                                                                     |
| 20:52      | And so, what Rose is doing is just saying, okay, I wanted you to grab a field out of the                               |
| 20:57      | thing.                                                                                                                 |
| 20:58      | Well, actually, what I'm doing is I'm copying it to the clipboard, and then it's going through                         |
| 21:02      | every single line in the clipboard, and sending that off to [[Fantastical]] Forest.                                    |
| 21:06      | So you're saving it, but it's running as one event, and it's parsing that, and then going                              |
| 21:11      | to [[Fantastical]] with each one, and just dumping the phrase, and [[Fantastical]] has the amazing                     |
| 21:17      | ability to create events with just a line of text.                                                                     |
| 21:19      | So you could say, graduation party, June 1, 6 p.m. to 8 p.m., and then if you put slash                                |
| 21:25      | p, it would put it on your personal calendar.                                                                          |
| 21:28      | So once you put that into [[Fantastical]], it does it for you, but what she's done is just                             |
| 21:33      | allowed this [[Keyboard Maestro]] script to do the act of putting it into [[Fantastical]] for                          |
| 21:38      | you.                                                                                                                   |
| 21:39      | Yes, which is great.                                                                                                   |
| 21:40      | I mean, if you just got one event, you can paste it into [[Fantastical]] yourself, but if                              |
| 21:44      | you just had one event, you're probably not going to look to automate it, but if you've                                |
| 21:47      | got more than one event, that's where this comes in really useful.                                                     |
| 21:51      | And the workflow works in the same way.                                                                                |
| 21:53      | It takes all of the lines on your clipboard, and it puts them into [[Fantastical]], and the                            |
| 21:58      | draft section takes all of the lines in the current draft and sends those over to [[Fantastical]]                      |
| 22:02      | as well.                                                                                                               |
| 22:03      | And the beauty of this is the actual composition of the [[Fantastical]] line, she's done just                          |
| 22:08      | by grabbing individual fields and pasting them into kind of the results field or the                                   |
| 22:13      | [[Fantastical]] field, so you don't have to compose it yourself, it's done for you.                                    |
| 22:18      | So the [[Fantastical]] field in numbers is a slightly complex formula with ifs and so on, which                        |
| 22:25      | obviously you're welcome to take apart, it basically checks a field to blank.                                          |
| 22:29      | And if the event name or the start date are blank, then it just won't give you an option                               |
| 22:34      | to add it because, well, you need to have a little bit of information to put that on                                   |
| 22:38      | your calendar.                                                                                                         |
| 22:39      | Yeah, and you do need to kind of understand how [[Fantastical]] works, and we're not going                             |
| 22:43      | to do a whole show on that here, but I'll put it in the show notes.                                                    |
| 22:46      | I did a whole series of videos for Fantastical on their website, and it shows you exactly                              |
| 22:52      | how their parser works, and it's worth learning that if you're going to do this stuff because,                         |
| 22:57      | like I said, just you can put a specific calendar in it, you can put location information, there's                     |
| 23:02      | a whole lot of stuff you can do if you understand how that works.                                                      |
| 23:06      | Yes.                                                                                                                   |
| 23:07      | And I mean, the spreadsheet is set up to help you, but I would definitely recommend watching                           |
| 23:10      | David's video on how Fantastical works, just because that's another way to automate things.                            |
| 23:15      | You can just write a sentence into Fantastical on their natural language parser, it will                               |
| 23:19      | figure it out.                                                                                                         |
| 23:20      | Yeah, but Rose, putting it into [[Numbers]] spreadsheet, having [[Numbers]] automatically create the                   |
| 23:24      | [[Fantastical]] field, and then use your [[Keyboard Maestro]] to create all events, that was genius.                   |
| 23:29      | I got to give that one to you.                                                                                         |
| 23:31      | Well, it happened because I got given a list of, I'm not kidding, 68 lectures that I needed                            |
| 23:37      | to attend one semester at university, and I went, I'm not putting this in my calendar,                                 |
| 23:41      | I'm making my computer, put this in my calendar.                                                                       |
| 23:44      | And that's what happened.                                                                                              |
| 23:45      | You first talked about that on an episode of [[Mac Power Users]], that's one of my other                               |
| 23:48      | podcasts, which where we go deep on some of this stuff as well, I'll put a link to that                                |
| 23:52      | so you can listen to Rose go into deep how she actually figured that out.                                              |
| 23:57      | All right, we have not talked about in this show, [[AppleScript]].                                                     |
| 24:03      | So [[AppleScript]] is a scripting language on the Mac that allows you to do all sorts of                               |
| 24:07      | things.                                                                                                                |
| 24:09      | It's an interesting language, it's supposed to be written for humans.                                                  |
| 24:11      | So we're thinking for automators, this is something you may want to learn.                                             |
| 24:15      | It only works on the Mac, but it does give you a lot of power on the Mac.                                              |
| 24:20      | And the one thing I've learned, have we done podcasting for about 10 years now, is you                                 |
| 24:24      | never talk about [[AppleScript]] on a podcast because very detailed commands, you know, and you've                     |
| 24:29      | got to get the syntax just right.                                                                                      |
| 24:31      | But we have created a little automation [[AppleScript]] on how to create a calendar event.                             |
| 24:38      | We're going to put in the show notes and you can download it.                                                          |
| 24:41      | What you do is just open that in the editor on the Mac, the [[AppleScript]] editor, and you                            |
| 24:45      | can run it.                                                                                                            |
| 24:46      | And once you see it, it tells you like set the number of hours.                                                        |
| 24:49      | Well, you can, that's pretty obvious, you can write in whatever number that is.                                        |
| 24:53      | You can do some automation with that stuff.                                                                            |
| 24:55      | So feel free to play with that and have some fun.                                                                      |
| 24:58      | But I think that's as far as we're going to go with [[AppleScript]] in this episode.                                   |
| 25:01      | Yeah.                                                                                                                  |
| 25:02      | The only thing I'll say about it is the [[AppleScript]] is somewhat inflexible.                                            |
| 25:08      | So you might want to look, if you do have [[Fantastical]], [[Fantastical]] is also [[AppleScript\|AppleScriptable]]    |
| 25:13      | and you can make it parse sentences through [[AppleScript]], which I will also have a version                              |
| 25:18      | of that you can get, which of course is a little bit easier, especially if you already                                 |
| 25:23      | have a list of events that you want to add and you just need it parsed and put onto your                               |
| 25:27      | calendar.                                                                                                              |
| 25:28      | Yeah.                                                                                                                  |
| 25:29      | And where that makes sense is where you have like rows at 60 events.                                                   |
| 25:31      | I mean, because doing it for one or two doesn't make sense.                                                            |
| 25:34      | Fantastical has got a keyboard shortcut for as long as it takes you to type in the sentence,                           |
| 25:38      | you're going to create the event.                                                                                      |
| 25:40      | So there's no need of scripting that.                                                                                  |
| 25:43      | It's always that balance we're trying for.                                                                             |
| 25:46      | What about cloud-based automation?                                                                                     |
| 25:49      | You can do some cloud stuff for events as well.                                                                        |
| 25:52      | There's a great service called if this than that, I think we already mentioned it once                                 |
| 25:54      | on the show.                                                                                                           |
| 25:56      | They work particularly well with [[Google Calendar]], if you want to automate your calendar.                           |
| 26:01      | But they can also work with the [[iCloud]] stuff if you want.                                                          |
| 26:05      | So you can create an event.                                                                                            |
| 26:07      | And the nice thing about that is if it's web-based, it can be triggered by almost anything.                            |
| 26:12      | You can say if the weather, you know, look at the weather site and if the weather's good                               |
| 26:18      | and look at the surf report, if the waves are over such a level, create a calendar event                               |
| 26:22      | to go surfing.                                                                                                         |
| 26:23      | Wouldn't that be great if I just had an automatic surfing event show up on my calendar every                           |
| 26:27      | week or so?                                                                                                            |
| 26:28      | That's what I need in my life.                                                                                         |
| 26:30      | Well every time I get an email from you, it adds a 20-minute appointment to my calendar                                |
| 26:33      | so that I can make sure that I get the time to sit down and read it and give you a good                                |
| 26:36      | answer.                                                                                                                |
| 26:37      | Uh-oh.                                                                                                                 |
| 26:38      | Wow.                                                                                                                   |
| 26:39      | There you go.                                                                                                          |
| 26:40      | I figure it's worth it.                                                                                                |
| 26:41      | Yeah.                                                                                                                  |
| 26:42      | Yeah.                                                                                                                  |
| 26:43      | It adds everything as a trigger.                                                                                       |
| 26:44      | And with this and that, you can also use, for example, [[Google]] or [[Microsoft 365\|Office 365]] calendars           |
| 26:49      | as a trigger for an event.                                                                                             |
| 26:51      | So you can say, hey, when this event starts, add a file to my [[Dropbox]] so that I can take                           |
| 26:55      | notes in it and add the information from the calendar event at the top of the file for                                 |
| 27:00      | me.                                                                                                                    |
| 27:01      | Yeah.                                                                                                                  |
| 27:02      | And I'm just thinking out loud, you know, talking about the dentist appointment and                                    |
| 27:07      | the work calendar.                                                                                                     |
| 27:08      | You could say monitor and if an event is created about going to the dentist, I believe we could                        |
| 27:13      | probably have it create a separate event on the work calendar and you could automate                                   |
| 27:16      | that through cloud automation.                                                                                         |
| 27:18      | Yes.                                                                                                                   |
| 27:19      | Depending on your work's policies, you may or may not be able to do that.                                              |
| 27:21      | I unfortunately am not able to do that because of our security and privacy policy.                                     |
| 27:25      | Yeah.                                                                                                                  |
| 27:26      | But if your work uses [[Google G-Suite]] or Office 365, then you can probably automate that,                           |
| 27:33      | which would of course be really useful for you because iOS, you can use that as a trigger                              |
| 27:38      | if you add an event to any iOS calendar, you can use that as a trigger to trigger something                            |
| 27:44      | on if this and that.                                                                                                   |
| 27:45      | Yeah.                                                                                                                  |
| 27:46      | And the piece of that where people run into trouble, because we're not even the automation                             |
| 27:50      | I just suggested, doesn't involve reading the work calendar, it just involves writing                                  |
| 27:54      | to it.                                                                                                                 |
| 27:55      | But even that sometimes is too much for some companies.                                                                |
| 27:57      | They don't want web services running to calendars.                                                                     |
| 28:00      | Yes.                                                                                                                   |
| 28:01      | Yeah.                                                                                                                  |
| 28:02      | But the beauty of all this, I mean, that's kind of the reason we're doing the show is                                  |
| 28:04      | once you start putting these little puzzle pieces together in your brain, you're going                                 |
| 28:09      | to find reasons in your life to use them.                                                                              |
| 28:11      | Maybe your kid gets on a soccer team and they've got all these practices.                                              |
| 28:16      | So you set up a number spreadsheet, throw it in, and it automatically creates all the                                  |
| 28:19      | events for you.                                                                                                        |
| 28:21      | Yeah.                                                                                                                  |
| 28:22      | And it's great because then you can take David's workflow to add travel time to and                                    |
| 28:26      | from it so that you know half an hour before you need to leave that you need to leave so                               |
| 28:29      | you can make sure your child has got their kit ready.                                                                  |
| 28:34      | If your child is of the age where you're still having to check on that for them.                                       |
| 28:38      | So it's really useful.                                                                                                 |
| 28:39      | And then maybe you could automate it to check the web to see if the team keeps losing and                              |
| 28:44      | maybe you just need to start drinking after each soccer game because it's so sad.                                      |
| 28:49      | I don't know.                                                                                                          |
| 28:50      | Well, then it could add something to your calendar that says, hey, night out at the                                    |
| 28:53      | bar with David and Rose.                                                                                               |
| 28:54      | There you go.                                                                                                          |
| 28:56      | We got you covered.                                                                                                    |
| 28:57      | Oh, yes.                                                                                                               |
| 28:58      | On the subject of cloud automation, we talked about it this and that.                                                  |
| 29:01      | The other one is [[Zapier]].                                                                                           |
| 29:02      | The [[Zapier]] is a subscription based cloud automation, much more powerful.                                           |
| 29:06      | They've got a lot more hooks into the internet.                                                                        |
| 29:09      | We're going to talk more about those going forward with certain episodes.                                              |
| 29:14      | Because of the kind of the far reaching idea behind the show, there'll be some shows where                             |
| 29:18      | we focus on some services over others.                                                                                 |
| 29:20      | We're not going to get in [[Zapier]] today.                                                                            |
| 29:21      | It can do the same calendar stuff and even more.                                                                       |
| 29:24      | But you know, web based calendaring is a thing and it's something to consider.                                         |
| 29:28      | But we're getting towards the end.                                                                                     |
| 29:29      | We're trying to keep the show to about 30 minutes.                                                                     |
| 29:30      | Rose, I thought it'd be fun to kind of share some of our favourite automation that we do                               |
| 29:35      | for calendars.                                                                                                         |
| 29:36      | I'll go first this time and mine is a little workflow I made a while ago and it's a meeting                            |
| 29:43      | confirmation workflow that I just do in the workflow app.                                                              |
| 29:47      | And how it works is, let's see if I can do this from memory.                                                           |
| 29:50      | The first thing it does is it looks at my calendar, but it only looks at my legal calendar,                            |
| 29:55      | my day job.                                                                                                            |
| 29:56      | I'm a lawyer.                                                                                                          |
| 29:57      | Often I have to go meet people and there's nothing worse than looking fancy, getting                                   |
| 30:04      | in your car, driving somewhere and the person doesn't show up.                                                         |
| 30:06      | So every Monday I run this workflow that looks at all of my events for the upcoming week and                           |
| 30:13      | only in my legal calendar.                                                                                             |
| 30:15      | So it cuts everything else out and it only looks for events with a location because if                                 |
| 30:20      | I'm meeting somebody, I've added the location date of the calendar event.                                              |
| 30:23      | So then I actually get a fairly abbreviated list of events that have a location that I'm                               |
| 30:27      | going to this week.                                                                                                    |
| 30:29      | And then you select one and then it goes through and it prepares an email and it prepares                              |
| 30:35      | the email, the subject line, it uses automation in a workflow.                                                         |
| 30:40      | And by the way, I'm going to post this one as well so you can see it.                                                  |
| 30:42      | Maybe I'll even do a little screencast of this one.                                                                    |
| 30:45      | And it pulls out the name of the event, the location, the time.                                                        |
| 30:48      | So it creates the email, writes in the subject line with all that information and then it                              |
| 30:53      | writes a brief email to the person attending.                                                                          |
| 30:57      | And once again, summarises the event, the date, the time, the location, even puts the                                  |
| 31:00      | address of the place there.                                                                                            |
| 31:02      | And I actually write it as if it's just coming from my computer and it's automated because                             |
| 31:06      | I don't really want to get into a long conversation with the client via email just because I sent                      |
| 31:10      | a reminder.                                                                                                            |
| 31:11      | And it prepares the email.                                                                                             |
| 31:13      | And then I tap one button to select the event, it prepares the email.                                                  |
| 31:18      | Then I type in the recipient names and I could automate that but I don't.                                              |
| 31:22      | This is one of those examples where I don't necessarily want to automate the recipient                                 |
| 31:26      | because sometimes I have other people I want to add to the event and get them email notifications                      |
| 31:31      | and it doesn't take that long to just put it in as I run the automation routine.                                       |
| 31:36      | But then I just tap the send button and very quickly I'm able to send out a batch of reminders                         |
| 31:42      | for all of my meetings for the week.                                                                                   |
| 31:44      | That's really useful and I'm going to have to steal that because I have had that occasionally                          |
| 31:47      | at work where I have a meeting and nobody's there except me.                                                           |
| 31:51      | Yeah, I was thinking about it for the show this week and why am I not doing this for                                   |
| 31:55      | telephone calls as well because I have a bunch of scheduled calls during the week.                                     |
| 31:59      | So I've now duplicated all, I'll put this one up too.                                                                  |
| 32:02      | We have so much stuff for you this week but I'll go ahead and put that one up as well.                                 |
| 32:07      | It's a simpler one but just says, hey, we've got a call scheduled for Tuesday at 3 p.m.                                |
| 32:12      | You know, talk to you then.                                                                                            |
| 32:13      | And then I always say I'll call you and that way I don't have the thing where everybody's                              |
| 32:17      | calling each other at the same time.                                                                                   |
| 32:19      | Yes.                                                                                                                   |
| 32:20      | Well, I have a, it's not exactly the same, it's similar.                                                               |
| 32:25      | So I have one which I run every week and it gets the calendar events from the last week                                |
| 32:30      | on certain calendars.                                                                                                  |
| 32:32      | So for example, I'm subscribed to the [[Relay FM]] live recording calendar because they have                           |
| 32:37      | some really cool shows and it's really nice to sit in the chat and hear them recorded                                  |
| 32:40      | live.                                                                                                                  |
| 32:42      | And so I have one that gets the important calendar events from the week and it just goes through                       |
| 32:48      | them with me and it just acts as a trigger list so that then I can think, oh yeah, right,                              |
| 32:53      | I had that meeting on Thursday and we said we were going to meet again in three weeks                                  |
| 32:56      | but nobody organised the calendar appointment.                                                                         |
| 32:58      | Well I should do that now because if I remember now, well, somebody's remembered.                                      |
| 33:03      | So I do a lot of that which is really useful.                                                                          |
| 33:05      | I actually have two of these workflows.                                                                                |
| 33:06      | I have one work one and then I have one personal one so I can do a review at work and then                             |
| 33:10      | another review at home later.                                                                                          |
| 33:13      | So this is upcoming events, I don't understand.                                                                        |
| 33:16      | This is events that have happened in the last week and events happening in the next week.                              |
| 33:21      | So it's good because that way I realise, oh, I've got a meeting on Monday at 9 a.m.                                    |
| 33:25      | I need to make sure that I'm in the office on time so I can set an earlier alarm perhaps                               |
| 33:30      | or if there's an event on Wednesday and then I realise well actually these people who are                              |
| 33:36      | supposed to be in the meeting with me are on holiday, well then I'm not going to be                                    |
| 33:39      | sitting there in the meeting all on my own waiting for them to show up.                                                |
| 33:42      | What's the difference between that and just looking at your calendar?                                                  |
| 33:45      | I like the way that it formats things because what it does is it actually takes all of the                             |
| 33:50      | events and it just puts the previous events together in a [[Drafts]] note for me so that I                             |
| 33:55      | can make any notes that I need to do and it just shows me the upcoming events and asks                                 |
| 33:59      | me if I want to add any tasks to my calendar based on this.                                                            |
| 34:02      | Sorry, any tasks to my [[OmniFocus]] and then with the [[OmniFocus]] ones it of course adds                            |
| 34:07      | tasks to [[OmniFocus]] for me if I've added anything and with the previous ones it goes into Dev                       |
| 34:14      | and Think.                                                                                                             |
| 34:15      | Yes, exactly.                                                                                                          |
| 34:16      | All right, well listen, that's it.                                                                                     |
| 34:20      | We made it through the first episode, nothing blew up, that's always good.                                             |
| 34:24      | Lots of automation today, hopefully we've inspired you to think a little bit about how                                 |
| 34:28      | you can automate your calendar.                                                                                        |
| 34:31      | There's going to be lots of links.                                                                                     |
| 34:33      | This show of all the shows I've ever done, we're going to have a lot of extra content                                  |
| 34:37      | because of the nature of a show about automation.                                                                      |
| 34:40      | So what we're going to do is we're going to flip every episode, so Rose for episode                                    |
| 34:47      | one is going to do the main post on the show at her blog, Rose, where is that at?                                      |
| 34:53      | That is at rosemaryorchard.com.                                                                                        |
| 34:55      | And then we're going to have a combined feed and then like the second episode the links                                |
| 35:01      | will go on a post on mine.                                                                                             |
| 35:02      | Now in that we're going to have links to some of these workflows we talked about, we're                                |
| 35:06      | going to have a link to that crazy [[AppleScript]].                                                                    |
| 35:10      | We're even going to do a couple of videos.                                                                             |
| 35:11      | I don't want to promise a video with every episode, but we're going to try and regularly                               |
| 35:14      | do some screencast videos to show how some of these work.                                                              |
| 35:18      | And then we're going to combine that into a feed over at, I believe it's automators.fm.                                |
| 35:24      | That's correct.                                                                                                        |
| 35:25      | And so if you just want to follow that feed, they'll all get fed into that.                                            |
| 35:29      | So like as there's a lot of content in the show, I think it's Friday, you know, go home,                               |
| 35:35      | think about some stuff you can do, maybe go to the website tomorrow, download a couple                                 |
| 35:38      | of these scripts and see if you can customise them to make them work for you.                                          |
| 35:43      | In addition, we have set up a discourse forum for the show.                                                            |
| 35:47      | Yes.                                                                                                                   |
| 35:48      | I think this is a show that is very much audience participation, you know, because I'm sure                            |
| 35:53      | you came up with some great ideas for automation.                                                                      |
| 35:54      | We didn't on the show.                                                                                                 |
| 35:56      | We want you to share them with the world.                                                                              |
| 35:57      | So there's a, there's a episode listing in the forum so you can go in and add automations,                             |
| 36:03      | links, whatever you can think of to help along and I would recommend people go there                                   |
| 36:09      | and take a look at that as well.                                                                                       |
| 36:10      | We'll put the link in the show notes.                                                                                  |
| 36:12      | Maybe some of the listeners will have even better ideas than we did and we can see some                                |
| 36:16      | of that stuff.                                                                                                         |
| 36:17      | Yes.                                                                                                                   |
| 36:18      | And you're also welcome to post your own automations in the forum.                                                     |
| 36:20      | So there's a sort of free area as well as the episodes area where you can post that                                    |
| 36:25      | really cool workflow that you've got or maybe you've got this amazing [[AppleScript]] that you've                      |
| 36:28      | been using and you want to show it off or maybe you have an idea of something that you                                 |
| 36:33      | want to automate and you don't know how to get started and so we can try and help you                                  |
| 36:37      | out and I'm sure everybody else in the forum will try and help out as well and give you                                |
| 36:41      | some ideas.                                                                                                            |
| 36:42      | Yeah.                                                                                                                  |
| 36:43      | We're very excited about the show.                                                                                     |
| 36:44      | We want to build a little automation community of helping nerds.                                                       |
| 36:47      | So please participate.                                                                                                 |
| 36:48      | Go check it out.                                                                                                       |
| 36:50      | It's a brand new show.                                                                                                 |
| 36:51      | So we have to ask, you know, if you have time, go into [[iTunes]] and give us a review and let                         |
| 36:56      | people know that really helps us find new listeners as we get the show started.                                        |
| 37:00      | And I can't wait to share more of this with you.                                                                       |
| 37:04      | We are on [[Twitter]] as Automators FM.                                                                                |
| 37:08      | Yes.                                                                                                                   |
| 37:09      | I am at MacSparky and Rose, you're Rosemary Orchard.                                                                   |
| 37:12      | Is that it?                                                                                                            |
| 37:13      | Yes.                                                                                                                   |
| 37:14      | Yes, they are.                                                                                                         |
| 37:15      | Okay.                                                                                                                  |
| 37:16      | And we'll see you soon.                                                                                                |
| 37:17      | Yes.                                                                                                                   |
| 37:18      | Thank you.                                                                                                             |

