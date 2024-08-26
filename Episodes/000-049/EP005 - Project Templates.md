---
status: "complete"
fc-date:
  year: 2018
  month: 08
  day: 31
fc-category: "podcast"
podcast: "Automators"
published: 2018-08-31
duration: 2420
formattedduration: "00:40:20"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/5"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators005.mp3"
episode: 5
title: "5: Project Templates"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode of Automators David and Rose get nerdy with project templates. They start out with what a project template is and how it can help you, and go through using basic project templates all the way up to more complex options. While both of them are OmniFocus users, project templates can be used in any task management system - and is something that everyone can use.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 005 Discussion](https://talk.automators.fm/t/automators-5-project-templates/1670)
	- [Automators 05: Project Planning](https://talk.automators.fm/t/automators-5-project-planning/1669)
	- [Automators 05: Using Drafts to Create OmniFocus Project Templates](https://talk.automators.fm/t/automators-5-using-drafts-to-create-omnifocus-project-templates/1668)

# Sponsors
- None.

# Show Notes
- [The Checklist Manifesto: How to Get Things Right - Atul Gawande](https://www.amazon.com/Checklist-Manifesto-How-Things-Right/dp/0312430000/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=automatorsfm-20&linkId=dd64574463e2b2f0e77c9695d190b0f0&language=en_US)
- [xkcd: Is It Worth the Time?](https://xkcd.com/1205/) - A comic demonstrating when automation actually pays off.
- [xkcd: Automation](https://xkcd.com/1319/) - A comic showing how you can spend more time automating things than time you gave - but as said in the podcast this isn't always the case!
- [Screencast: Project Planning with MacSparky](https://youtu.be/6FMS4c3S9p8) - In this example, David demonstrates how to build a Siri Shortcut Script to create a new project template in OmniFocus.
- [OmniFocusVideo Field Guide - MacSparky](https://www.macsparky.com/omnifocus/) - Contains 45 minutes of material for project templates
- [Populate Template Placeholders in OmniFocus--curtclifton.net](http://curtclifton.net/poptemp) - Take a project with «variables» and replace those with words and create a new project with AppleScript
- [How to Fill Out OmniFocus Project Templates with Workflow | Colter Reed](https://colterreed.com/how-to-fill-out-omnifocus-project-templates-with-workflow/)
- [Tweaking OmniFocus: Project Template AppleScript - MacSparky](https://www.macsparky.com/blog/2011/1/14/tweaking-omnifocus-project-template-applescript.html)
- [Using Drafts 5 TaskPaper with OmniFocus | Rosemary Orchard](https://www.rosemaryorchard.com/blog/using-drafts-5-taskpaper-with-omnifocus)
- [Screencast: Using Drafts to Create OmniFocus Project Templates](https://youtu.be/xit6JLmbnZY) - In this screencast Rose demonstrates how to use the action group she created for [[Drafts]] to create a project for OmniFocus.
- [OF TaskPaper | Drafts Action Directory](https://actions.getdrafts.com/g/1F6) - The action group that Rose created in [[Drafts]] to enable easy TaskPaper creation and manipulation.
- [Workflow: Essay To OmniFocus](https://workflow.is/workflows/b26737b265064cfcbe1e7ff96bef7189) - Dynamic creation of an essay project for OmniFocus
- [Workflow: Essay To Things](https://workflow.is/workflows/22bd0892decf40a9a9b10aebf5a84701) - Dynamic creation of an essay project for Things
- [Workflow: OmniFocus Travel Plans | Rosemary Orchard](https://www.rosemaryorchard.com/blog/omnifocus-travel-plans)
- [TripList Pro - Packing List Manager](https://itunes.apple.com/us/app/id793137330?at=1010lumu) - The packing list app Rose uses
- [Bookworm - Podcast Book Club](https://bookworm.fm/) - A podcast hosted by Joe Buhlig and Mike Schmitz in which they review books.
- [How to Create OmniFocus Projects with Workflow | Colter Reed](https://colterreed.com/how-to-create-omnifocus-projects-with-workflow/)
- [Templates and Predefined Lists in Things - Matthew Palmer](https://matthewpalmer.net/blog/2015/01/23/templates-predefined-lists-things-mac/index.html)
- [Create Travel Checklist in Things with AppleScript - Coding Bull Junky](https://codingbulljunky.wordpress.com/2016/09/13/create-travel-checklist-with-applescript/)
- [Creating Projects with Relative Due Dates in Todoist (Reddit)](https://www.reddit.com/r/todoist/comments/94afre/template_set_deadlines_based_on_final_due_date/)
- [Automators 1 Screencast: Numbers & Fantastical for Batch Events](https://youtu.be/tvlrZpEklbw) - From episode 1, Rose demonstrates the numbers sheet and [[Keyboard Maestro]] Macro you can use to bulk add lots of similar events to your calendar.
- [Create OmniFocus Project Templates with AppleScript | Colter Reed](https://colterreed.com/create-omnifocus-project-templates-with-applescript/) - Colter shows you how you can build project templates (for OmniFocus but you could also translate this to Things) in AppleScript and offers example scripts too.

# Transcription

| Time Index | Transcription                                                                                                           |
|:---------- |:----------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, this is Automators, and this week's topic is Project Templates.                                                  |
| 00:06      | I'm Rose Orchard, and joined by my co-host, David Sparks.                                                               |
| 00:09      | We're going to talk to you about how to automate your technology to do your work for you.                               |
| 00:13      | Hi, David.                                                                                                              |
| 00:14      | Hi, Rose.                                                                                                               |
| 00:15      | How are you doing?                                                                                                      |
| 00:16      | I'm doing great.                                                                                                        |
| 00:17      | We got through July, I had trips, there were fires, you name it, I dealt with it.                                       |
| 00:24      | One thing that really helped me was I was able to automate all my project creation.                                     |
| 00:28      | That's one thing that went well in July.                                                                                |
| 00:30      | Yes.                                                                                                                    |
| 00:31      | I have to say, template creation is so helpful when you're getting really busy, because you've                          |
| 00:38      | got so many things going on at once, and just being able to be like, click, and you have                                |
| 00:42      | that list of stuff that you need to deal with without having to sit down and go, did I remember                         |
| 00:46      | widget A, or is it widget B for this?                                                                                   |
| 00:50      | Yeah.                                                                                                                   |
| 00:51      | That's a stress saver, as well as a time saver.                                                                         |
| 00:53      | Yeah, I guess let's go a little meta on this before we get into the details.                                            |
| 00:57      | A few years ago, I read a book called [The Checklist Manifesto](https://atulgawande.com/book/the-checklist-manifesto/). |
| 01:01      | Don't even remember the author's name.                                                                                  |
| 01:03      | Didn't prep for this.                                                                                                   |
| 01:04      | Sorry.                                                                                                                  |
| 01:05      | I'll put it in the show notes.                                                                                          |
| 01:06      | That was a good book.                                                                                                   |
| 01:07      | A guy was a surgeon talking about how checklists really help you get things right, not make                             |
| 01:11      | mistakes.                                                                                                               |
| 01:12      | I felt like for the day job, the lawyer job, that would be particularly useful for me                                   |
| 01:17      | to have a lot of checklists, because I represent a lot of companies and I don't want to get                             |
| 01:21      | anything wrong.                                                                                                         |
| 01:22      | But it's true for everything I do, so I would make these checklists, and then a few years                               |
| 01:28      | ago, [Omni Group]() made it possible for you to template projects into [OmniFocus](), which is                                  |
| 01:34      | my task manager.                                                                                                        |
| 01:36      | That just changed everything for me.                                                                                    |
| 01:38      | The ability to generate those project templates allows you to auto-create very complex projects                         |
| 01:45      | on the drop of a hat.                                                                                                   |
| 01:46      | If anything you do as a student, as a business person, as a firefighter, or whatever you                                |
| 01:55      | do for your living, if you do anything repeatedly, turning those into simple things that you can                        |
| 02:00      | enable with one button is a total game changer.                                                                         |
| 02:04      | If you look at my [[Workflow]] / [[Shortcuts\|Siri Shortcuts]] list of actions, a big chunk of those are                             |
| 02:10      | [[OmniFocus]] project templates.                                                                                            |
| 02:12      | At this point, it's to such an extent that I think I probably create more tasks for                                     |
| 02:16      | myself on templates than I do by typing in individual tasks.                                                            |
| 02:21      | Yeah, I have to agree.                                                                                                  |
| 02:23      | I've got to the point now where for a lot of things, there's the same sort of things                                    |
| 02:28      | I need to do, so I need to make sure I'm a programmer.                                                                  |
| 02:32      | For example, I would need to make sure that I have database tables, that I've set up                                    |
| 02:35      | the standard calls that I'm going to need to make as functions and things like that,                                    |
| 02:40      | so that I can make things work faster, more efficiently, and also sort of everything.                                   |
| 02:47      | Not just my project, but also my code is in the same format every time, so other people                                 |
| 02:50      | working with my code actually don't have to go wait what or do these bits go in again.                                  |
| 02:57      | It's very clear for them because it's always the same format, so it's very useful and it                                |
| 03:02      | really helps me get work done.                                                                                          |
| 03:04      | So if you've got anything in your life that is a similar project repeated, this is something                            |
| 03:11      | you want to look into, and I almost would argue that almost anybody could find a use                                    |
| 03:15      | for this if you're managing tasks through an application.                                                               |
| 03:19      | We're going to focus on [[OmniFocus]] a lot today because both Rose and I use it, but we are                                |
| 03:22      | going to cover [[Things[[]]]] and a few other apps that do some of this too, but we're going                                    |
| 03:28      | to focus on [[OmniFocus]] because that's where we're spending our time on it.                                               |
| 03:33      | I guess another point I'd make is that it doesn't have to be identical projects.                                        |
| 03:38      | It can be similar projects because once you start using these, we'll talk about it today                                |
| 03:44      | and we're going to share some.                                                                                          |
| 03:45      | You can add variables to these, so names and labels and even dates and timing can change                                |
| 03:52      | if you set it up right.                                                                                                 |
| 03:54      | So once you set one of these up, it can be for similar projects just as easily as it                                    |
| 03:59      | can be for identical projects.                                                                                          |
| 04:00      | Yeah, I mean, one of the templates I'm going to share today is it's not a template in                                   |
| 04:05      | a sense that you would think of.                                                                                        |
| 04:06      | It asks me several questions and then it generates the project for me based on that.                                    |
| 04:12      | It's something that is completely flexible because every time it's from my essays, every                                |
| 04:18      | time I get a new essay, guess what?                                                                                     |
| 04:20      | It's got different parameters on it, but actually you can still make a template out of that.                            |
| 04:25      | Even if you think there's nothing in my life that I can template, do you ever go on holiday?                            |
| 04:29      | You have a packing list.                                                                                                |
| 04:30      | That's a template.                                                                                                      |
| 04:31      | Yeah, and one of the beauties of this, and I don't want to overwhelm everybody at the                                   |
| 04:35      | beginning of the show, but think about the fact that a template does not have to make                                   |
| 04:40      | just one list for you.                                                                                                  |
| 04:42      | As an example, when I get a new legal client, I run off a single script that creates a project                          |
| 04:49      | template to get the retainer agreement prepared, a project template that gets the whole set                             |
| 04:55      | up on the computer for the new client, and then a project template that does a bunch                                    |
| 04:58      | of other things as the new onboarding process.                                                                          |
| 05:02      | There's multiple lists that can come out of one script, so not only do you have to consider                             |
| 05:09      | making single project templates, you can have multiple project templates.                                               |
| 05:13      | Your life can get a lot easier with this stuff if you just spend a little time setting it                               |
| 05:17      | up.                                                                                                                     |
| 05:18      | Definitely.                                                                                                             |
| 05:19      | It's well worth it.                                                                                                     |
| 05:20      | Sometimes you always have to think with automation, how much time am I spending automating this                         |
| 05:25      | versus how much time is it going to pay off?                                                                            |
| 05:27      | What I find with project templates, even if I spend a little bit more time automating                                   |
| 05:31      | it than I would like, it actually really helps me because it helps me evaluate my task management                       |
| 05:36      | system and go, am I doing this right?                                                                                   |
| 05:38      | Am I doing this wrong?                                                                                                  |
| 05:40      | And to make sure that things really work how I would like them to.                                                      |
| 05:44      | Can I just go down a rabbit hole on that for a minute?                                                                  |
| 05:47      | Because it's a very common chart that people look at to say, how much time do you spend                                 |
| 05:52      | optimising something versus how much time does it save you over the lifetime of whatever                                |
| 05:57      | you're doing?                                                                                                           |
| 05:58      | And I understand the math of that.                                                                                      |
| 06:00      | I understand that if you spend five hours optimising something that will save you one                                   |
| 06:08      | minute once a month, it's going to take a long time to get that back.                                                   |
| 06:13      | But I think there's a couple things that people overlook in that math quite often.                                      |
| 06:16      | The first is, if you're spending five hours learning something that isn't just going to                                 |
| 06:20      | help you save that one minute, but it's going to give you the skill set necessary to find                               |
| 06:25      | all sorts of minutes you save with little additional time.                                                              |
| 06:29      | Because like, for instance, these [[OmniFocus]] project templates, we're going to talk a little                             |
| 06:34      | bit about how you create those scripts.                                                                                 |
| 06:36      | The first one, you're going to lose money on that, you're going to lose time on it.                                     |
| 06:40      | Because learning how it works is just going to take longer than you're going to get back.                               |
| 06:45      | But once you have the system down, you can duplicate it and create new ones very easily                                 |
| 06:50      | and suddenly that starts working for you.                                                                               |
| 06:52      | So don't be really hard on yourself with that math when you're first learning a new skill,                              |
| 06:58      | if it's something that's repeatable or usable in other automation scenarios.                                            |
| 07:04      | Definitely.                                                                                                             |
| 07:05      | And it's one of those things, especially with something that's completely new to you.                                   |
| 07:09      | Yes, you're going to spend a lot more time automating it.                                                               |
| 07:12      | But at the same time, if you're enjoying it, that's not a waste of time.                                                |
| 07:16      | You've got to do things that you enjoy in your life.                                                                    |
| 07:18      | And I know I love automating things and sitting down playing with code, things like that.                               |
| 07:23      | Maybe you don't love sitting down playing with code and you are just here and you want                                  |
| 07:26      | to take our automation and run with it.                                                                                 |
| 07:28      | That's great.                                                                                                           |
| 07:29      | Do that.                                                                                                                |
| 07:30      | But if you have an interest in learning these things, it's well worth spending some of                                  |
| 07:34      | the time on it to do that.                                                                                              |
| 07:35      | Yeah, I totally agree.                                                                                                  |
| 07:37      | And it's just delightful when you get this stuff in place.                                                              |
| 07:40      | And like for me, when a new client says, okay, let's start working together and I agree that                            |
| 07:46      | I accept them.                                                                                                          |
| 07:48      | I just open up [[Shortcuts\|Siri Shortcuts]] or [[Workflow]], I tap one button, type in their name and just                                |
| 07:54      | a couple other variables and then OmniFocus gets populated and Trello Projects gets set                                 |
| 08:00      | up.                                                                                                                     |
| 08:01      | And like all this stuff that would take me, realistically, probably a half hour to do                                   |
| 08:05      | gets down to a fraction of a minute.                                                                                    |
| 08:09      | And it just makes me so happy.                                                                                          |
| 08:11      | Now that didn't happen overnight.                                                                                       |
| 08:12      | It took a while to get that stuff tuned, but it definitely pays for itself.                                             |
| 08:16      | Yeah.                                                                                                                   |
| 08:17      | And the great thing about this as well is if you come across something when, for example,                               |
| 08:20      | in your case, when you're working with a client that, oh, right, I should have probably covered                         |
| 08:24      | this in this setup project.                                                                                             |
| 08:27      | We can add that not just to that project, but you can go back and add it to the template                                |
| 08:30      | as well.                                                                                                                |
| 08:31      | And then you're never going to forget it again.                                                                         |
| 08:33      | And that's where project templates really pay off for me.                                                               |
| 08:36      | They're constantly evolving.                                                                                            |
| 08:37      | They're really always exactly the same thing.                                                                           |
| 08:40      | Yeah.                                                                                                                   |
| 08:41      | And as we're talking about that, let's kind of stumble into some of the template stuff                                  |
| 08:46      | we use.                                                                                                                 |
| 08:47      | And as I'm talking about the law practice, I'm going to just share a couple.                                            |
| 08:51      | But for one of my favourites is I often, I'm largely a transactional attorney.                                          |
| 08:56      | People hire me to write contracts for them and help them negotiate deals.                                               |
| 09:01      | So there's two scenarios.                                                                                               |
| 09:03      | Sometimes people will say, I need you to create a contract.                                                             |
| 09:06      | And then the other one is some people say, somebody that wants to do business with me                                   |
| 09:11      | just gave me this contract.                                                                                             |
| 09:12      | Can you review it for me?                                                                                               |
| 09:13      | Those are two different project templates for me, and for instance, the project template,                               |
| 09:20      | I'm sorry, the contract template review, I'm sorry, I'm running it here while I talk.                                   |
| 09:24      | So I make sure I get everything listed.                                                                                 |
| 09:28      | It's a different set of problems than someone just asking to create a new one.                                          |
| 09:34      | And so what I do is I just open up Siri shortcuts or workflow, wherever, whenever you're listening                      |
| 09:39      | to this.                                                                                                                |
| 09:41      | And it asks me two things, ask me the name of the client and the type of contract.                                      |
| 09:44      | Once I trigger it, and then once I do that, it goes ahead and creates a project template                                |
| 09:50      | for me.                                                                                                                 |
| 09:51      | And in that project template, it's got a whole bunch of stuff that I have to do.                                        |
| 09:55      | I mean, I have to save a copy to my network, I have to save a copy of the contract.                                     |
| 10:01      | Because one of the things we do is we track it, we track versions as we go back and forth.                              |
| 10:06      | And then I have to, I usually try and get on the phone with the client and discuss what                                 |
| 10:12      | their goals are and what the work they're doing is.                                                                     |
| 10:15      | Because just because someone gives you a contract doesn't mean you have a full understanding                            |
| 10:18      | of what your client's doing, and that changes the way you review it.                                                    |
| 10:21      | Then I have a whole process where I go through and I review it, and I mark it up.                                       |
| 10:26      | And then I create notes for the client, and then we do a telephone call afterwards, and                                 |
| 10:29      | then I create revisions.                                                                                                |
| 10:31      | And it's about a 12-step process to go through.                                                                         |
| 10:35      | And even when I get to the end and we finalise a contract, then I have a task that's three                              |
| 10:40      | months later where I send the client an email or call them up and say, how's that thing                                 |
| 10:45      | going?                                                                                                                  |
| 10:46      | Now that we got it over the goal line and you signed it and you're doing the work, in                                   |
| 10:50      | the first three months, are there any problems that we need to address?                                                 |
| 10:53      | Sometimes you find that the contract doesn't really reflect what you ended up doing.                                    |
| 10:57      | So we need to get on the phone with the other side and make adjustments.                                                |
| 11:00      | So all of that stuff, if I were to sit down and type that out or try to remember that                                   |
| 11:06      | every time I got a new contract review for a client, it would take a lot of time, and                                   |
| 11:11      | I might have to keep a list written down or something.                                                                  |
| 11:14      | And none of that's necessary now.                                                                                       |
| 11:15      | I just open up [[Workflow]] or [[Shortcuts\|Siri Shortcuts]].                                                                              |
| 11:19      | I have to say that for the next month.                                                                                  |
| 11:21      | I can't wait till they release iOS 12, so we can just say Siri Shortcuts.                                               |
| 11:24      | But I open up the appropriate app, I push the button, I type that in, and it just happens                               |
| 11:28      | for me.                                                                                                                 |
| 11:30      | And that's just one example, it's a simple thing, you know, where it's the only variables                               |
| 11:35      | I'm using are the name of the client and the name of the contract, but it's just you're                                 |
| 11:41      | running a script.                                                                                                       |
| 11:42      | Yeah.                                                                                                                   |
| 11:43      | And that's great.                                                                                                       |
| 11:44      | I mean, I found, for me, the best way that I created some of these project templates,                                   |
| 11:49      | because I mean, creating a project template is not just something that you sit down and                                 |
| 11:52      | boom, here's a nice pretty project template in front of you.                                                            |
| 11:54      | You need to sit and think about it.                                                                                     |
| 11:55      | So one of the things that I did is I looked at previous projects I'd done, and I actually                               |
| 12:02      | copied them out.                                                                                                        |
| 12:04      | If you copy from [[OmniFocus]], you get [[Taskpaper]], but every project management application out                             |
| 12:08      | there or task management application out there should have a way of copying a project                                   |
| 12:12      | and exporting it in some kind of format that you can manipulate.                                                        |
| 12:15      | If it doesn't, please maybe look into that and find out why you can't do that, because                                  |
| 12:20      | if you can't get your tasks out, I would be slightly concerned.                                                         |
| 12:23      | So I copied them out into [[Taskpaper]] format, and I actually used [[Drafts]].                                                 |
| 12:28      | It has a [[Taskpaper]] formatting, so [[Taskpaper]] is its own task management system, actually,                                |
| 12:34      | but you can use the formatting with applications like [[OmniFocus]].                                                        |
| 12:38      | And it's great because then you can look at that and you can see, okay, what tasks did                                  |
| 12:42      | I have as my basis?                                                                                                     |
| 12:43      | Okay, what did I forget here?                                                                                           |
| 12:45      | Look at another one.                                                                                                    |
| 12:46      | Well, I did this in this project, but I didn't do it in that project.                                                   |
| 12:48      | And then put these things together to really create the true project template as a starter.                             |
| 12:54      | Yeah, so Taskpaper is the language, I guess I'm putting that in air quotes, if you could                                |
| 12:59      | see me, that you use to create these project templates for OmniFocus.                                                   |
| 13:03      | And Taskpaper is a separate task system.                                                                                |
| 13:06      | So the way it works is you'd have a line of text, and then under that you would indent                                  |
| 13:11      | one piece.                                                                                                              |
| 13:12      | It's almost like a plain text task management system, but there are tags you can put, and                               |
| 13:19      | they usually use the at symbols.                                                                                        |
| 13:21      | For instance, this one for the contract review project, it starts with, it says, contract                               |
| 13:27      | review project for client.                                                                                              |
| 13:29      | And then at the end, it says at parallel open per in false, close per in.                                               |
| 13:34      | So if you can visualise that, that the parallel tag, which is whether the project runs all                              |
| 13:41      | the tasks at once or one at a time, I'm setting that as false.                                                          |
| 13:45      | So what we've got is a task, we're creating a project where it only exposes the next available                          |
| 13:51      | action because the contract review process is very linear and you have to go in a specific                              |
| 13:56      | order.                                                                                                                  |
| 13:57      | So I've got in that parallel false.                                                                                     |
| 13:59      | Now I know this is going to make somebody's head buzz as they're listening, and if you're                               |
| 14:02      | really want a lot of help with this, I hate to say this because it's like self, what is                                 |
| 14:07      | it, peddling my stuff on the show, but the OmniFocus field guide has 45 minutes that                                    |
| 14:14      | teaches you how to write these scripts.                                                                                 |
| 14:16      | At the end, the latest update has a lot of stuff in there, so you can get that if you                                   |
| 14:22      | want.                                                                                                                   |
| 14:23      | But anyway, so then you go through, and then the next one I would say save to storage,                                  |
| 14:28      | and I'd say save to client storage, and I'm going to talk a minute about variables, but                                 |
| 14:32      | then you say at context, tech, and that is an [[OmniFocus]], I have a context called tech,                                  |
| 14:38      | and you're just giving it a specific tech, and there's a whole bunch of these tags like                                 |
| 14:42      | at flagged means that you're making it a flag task.                                                                     |
| 14:45      | You can also set defer dates and due dates with these.                                                                  |
| 14:48      | So you write out the project in this kind of sort of [[Taskpaper]] code, and then the actual                                |
| 14:55      | workflow, we're going to share this, so you're going to be able to look at this, and I'll                               |
| 14:58      | share this one, I usually don't try to share legal stuff, but I don't see anything bad with                             |
| 15:01      | this one, where it's real simple, you ask for an input, you say, the first thing you                                    |
| 15:06      | do in workflow is say, you know, what is the type of contract, and then the person answers                              |
| 15:12      | with text, you know, he answers, says, what's the name of the client, and then you answer                               |
| 15:16      | with text, and you set variables to both of those, and then you take, you combine that                                  |
| 15:21      | [[Taskpaper]] text that I was just talking about, you put that into a text field, and then you                              |
| 15:26      | drop in those variables, you collect it at the appropriate places, so like in the first                                 |
| 15:30      | line where it says, contract review for client, the word contract and word client are variables.                        |
| 15:37      | So you're inserting, so if I were to say, you know, underwater basket weaving contract                                  |
| 15:42      | for rows, those would be the insertions that go in there, and that's all it is, and then                                |
| 15:48      | the last thing you do is there's a simple action in Workflow or in [[Shortcuts\|Siri Shortcuts]], say                                   |
| 15:55      | a [[Taskpaper]] at [[OmniFocus]], and it just creates the project in [[OmniFocus]], it's a one, two,                                |
| 16:01      | three, it's a six step workflow, it's not very much to it, but you do have to understand                                |
| 16:06      | that Taskpaper stuff.                                                                                                   |
| 16:07      | Well, one of the things that I've done, I like to use [[Drafts]], which is a fabulous application                       |
| 16:13      | for automation, and I actually created [[OF Taskpaper Action Group for Drafts\|an OmniFocus Taskpaper action group]], so if you're going,                         |
| 16:20      | okay, I want to insert a tag for people who are aware [[OmniFocus]] switched from one singular                              |
| 16:28      | context to having the option of having multiple tags from Omni, from version two to version                             |
| 16:34      | three, and you can use context still in the [[Taskpaper]], that works absolutely fine, or                                   |
| 16:39      | you can use tags, you could use both, you should make sure that it doesn't conflict                                     |
| 16:44      | ideally, so that one of your tags is in the context field, but I've created an action                                   |
| 16:50      | group, so if you're there going, okay, I want to add a tag, you just press the tag, and                                 |
| 16:54      | it inputs that for you, so you can just type into the tag section directly, and then keep                               |
| 16:59      | going, and it's got all of this already prepared, so you don't really need to think about it,                           |
| 17:04      | it's there, and it's nice and easy to use, which is very, very helpful.                                                 |
| 17:08      | And we'll share that as well, and one of my biggest complaints about [[Workflow]]/                                    |
| 17:15      | [[Shortcuts\|Siri Shortcuts]], and I've spoke with Ari about this, is the text field.                                                |
| 17:19      | It's not very easy to work in, if you have more than a few lines of text, like trying                                   |
| 17:24      | to scroll around inside of it as hard, it's almost impossible for me on the phone with                                  |
| 17:29      | my ham fingers, but on the iPad, I can more or less work around it, but it's just not                                   |
| 17:34      | very convenient, so using something like [[Drafts]] to do that text heavy part really makes a                                |
| 17:40      | lot of sense.                                                                                                           |
| 17:41      | Definitely, and I mean, one of the things that we haven't talked about yet is storing                                   |
| 17:46      | these templates, where do you store them?                                                                               |
| 17:49      | Clearly, you're storing some of them in [[Shortcuts]] or [[Workflow]], I'm storing some in [[Drafts]], are                          |
| 17:54      | you storing any of your templates anywhere else?                                                                        |
| 17:56      | Yeah, I've got, in [[Ulysses]], just the folder set aside with a pile of these things, and                                |
| 18:01      | I write them there.                                                                                                     |
| 18:02      | And then what I do is, and like I said, I've got 30 of these things, these templates, and                               |
| 18:07      | a lot of them started with one or two good ones, and then I like the one to create a                                    |
| 18:14      | new contract versus edit an existing one, they kind of, whatever one I did first, I                                     |
| 18:20      | copied it and then just started making changes from there.                                                              |
| 18:24      | And then what I do is, I write them in Ulysses, and I just use all caps terms for what are                              |
| 18:28      | going to become variables once you put it in workflow, because, and that's the problem                                  |
| 18:33      | with the text field in workflow slash [[Shortcuts\|Siri Shortcuts]], is you've got to go in and manually                             |
| 18:39      | assign those variables in the app, you can't do that anywhere else, unless Rose knows something                         |
| 18:43      | I don't.                                                                                                                |
| 18:44      | I do know something that you don't know, but keep going.                                                                |
| 18:47      | Okay, so the way I've traditionally done is I go in the text field, I select the all caps                               |
| 18:52      | terms, and then I replace them with a variable or a magic variable.                                                     |
| 18:56      | How are you doing it?                                                                                                   |
| 18:57      | Well, I mean, there's the replace text function, actually, in workflow, which is very powerful,                         |
| 19:03      | and what you can do is you can set it to match case, and this works really well for you because                         |
| 19:08      | you write your variables in all caps, so you could have your text field and you just paste                              |
| 19:12      | into that, or you could even theoretically have it get a Ulysses sheet by the [[Ulysses]]                                   |
| 19:18      | sheet ID, so you can keep editing it in Ulysses, and then just grab that sheet every time,                              |
| 19:22      | and then you can use the replace text to just replace the all caps thing with the variable                              |
| 19:28      | that you're looking for.                                                                                                |
| 19:29      | Yeah, I considered using [[Ulysses]] as a data source that way, but my concern was, I need                                  |
| 19:35      | the stuff to work all the time, and if for some reason [[Ulysses]] hasn't downloaded the                                    |
| 19:41      | file, or you know how it goes, cloud storage, all that stuff, and honestly, once I set                                  |
| 19:47      | these things, they are kind of set and forget, if I need to make a change, I will go and                                |
| 19:50      | just tweak it a little bit in the automation app, but yeah, I get where you're coming from,                             |
| 19:55      | but the text replacement was a good idea.                                                                               |
| 19:58      | Yeah, and you can do the same thing with [[Drafts]] as well.                                                            |
| 20:01      | You could store a file in [[iCloud]] or [[Dropbox]] and use that as a basis as well.                                            |
| 20:08      | One thing I do is, I store some templates in OmniFocus itself in a folder called templates.                             |
| 20:14      | I'm very creative at naming these things, and I wrote a guest post for Colter Reid on                                   |
| 20:21      | his blog about replacing the variables, so I'm sure you've actually written a blog post                                 |
| 20:27      | about it.                                                                                                               |
| 20:28      | You tweaked Curt Clifton's [[AppleScript]] template for projects at some point.                                         |
| 20:32      | I did the workflow version of that and posted about it on his blog for him, and so you can                              |
| 20:38      | grab the variables, and what Curt originally did, I believe you kept it as well, is they                                |
| 20:44      | use French quotation marks, so for people who aren't aware of what French quotation                                     |
| 20:49      | marks look like off the top of your head, that's two smaller than or less than symbols                                  |
| 20:55      | on one side, and it's a special symbol, it's not just writing two smaller than sides and                                |
| 21:01      | then two greater than symbols at the other end, and the enclose a variable with those,                                  |
| 21:07      | and then I can go through and parse that out.                                                                           |
| 21:11      | It's a set of two workflows there, and I'll make sure that there's a link to that post                                  |
| 21:14      | in the show notes as well.                                                                                              |
| 21:17      | When you think about that, and obviously this has been an iterative process for me over                                 |
| 21:21      | the years, I used Curt Clifton and wrote an amazing script in the old days.                                             |
| 21:25      | I think I even worked with [[OmniFocus]] version one, that you would use an existing template                               |
| 21:30      | project you created and you ran it from inside [[OmniFocus]].                                                               |
| 21:35      | It was actually quite powerful, but putting it all in [[Workflow]] for me was the magic moment                              |
| 21:41      | where I could just open up [[Workflow]] and press a button and just make this stuff happen.                                 |
| 21:47      | One of the things I didn't mention is the add [[Taskpaper]] to [[OmniFocus]] action in [[Workflow]]                                 |
| 21:53      | has got increasingly more powerful, and when it first started, it would just dump the project                           |
| 21:59      | at the root level of your projects, now you can put them in the inbox, you can attach                                   |
| 22:06      | them to a specific folder or a specific project, so depending on what you're doing, I have                              |
| 22:11      | one whenever I sign up a new sponsor for [macsparky.com](https://macsparky.com), somebody wants to sponsor the                                   |
| 22:16      | blog for a week.                                                                                                        |
| 22:18      | I have a project template I run, and that has all the things you think it would have,                                   |
| 22:21      | like two weeks before the ad runs, it reminds me to email the sponsor and ask for artwork                               |
| 22:26      | and talking points and all the way through the end of billing and confirming I get paid.                                |
| 22:33      | But I don't need to put those in the root level of my projects because I have a specific                                |
| 22:37      | folder that holds all of those sponsor projects in [[OmniFocus]], so when I run that script, it                             |
| 22:43      | just drops the list right inside the folder that has that.                                                              |
| 22:51      | An interesting thing about that one, because I haven't talked about this yet, is the two                                |
| 22:54      | things it asks me for is the date the ad is going to run and the name of the sponsor,                                   |
| 23:00      | and using date math in [[OmniFocus]], and we'll make sure we post at least one sample that                                  |
| 23:04      | has date math in it, you can use that date to do all sorts of things, so if you have                                    |
| 23:12      | a sales presentation that's due on May 1st, you can have it give you tasks at May 1st                                   |
| 23:18      | minus 30 days, so 30 days in advance you start getting warnings and all the things you need                             |
| 23:22      | to do.                                                                                                                  |
| 23:23      | That's one thing that I really like, and I'm pretty certain that things has the ability                                 |
| 23:28      | to parse dates like this as well, where you can just type in May 30th minus 30D and it                                  |
| 23:35      | will figure out, hey, that's minus 30 days and done, and you don't, of course it's possible                             |
| 23:40      | to calculate all of this stuff in workflow in advance, and depending on which task management                           |
| 23:45      | application you're using, that may be the best solution for you, but it's really, really                                |
| 23:49      | useful to be able to just do that as part of the template, especially if you know that                                  |
| 23:54      | things, this has got to happen here, and then two weeks later, that's going to happen,                                  |
| 23:57      | and then 24 hours before this event, that's going to happen, and so on, that's really                                   |
| 24:02      | useful.                                                                                                                 |
| 24:03      | Hey, let's just go back and forth with a couple of our favourite project templates we're                                |
| 24:06      | currently running, and any tricks we had to do to make them work.                                                       |
| 24:11      | I just did one, so you go.                                                                                              |
| 24:13      | Okay, well, I mentioned it earlier, and I'll go into a bit more detail now, essays for                                  |
| 24:17      | my masters, I'm currently studying for my masters in computing, software engineering,                                   |
| 24:23      | and as part of this, I have to write a surprising number of essays, which I actually enjoy,                             |
| 24:28      | but one of the things I like to do is every time I complete part of the essay, I like                                   |
| 24:33      | to check it off.                                                                                                        |
| 24:34      | I am very, very success-oriented or goal-oriented in that respect, so what I do is I have this                          |
| 24:39      | template.                                                                                                               |
| 24:40      | I never would have guessed, Rose, never would have guessed.                                                             |
| 24:42      | Well, what this does is it starts by asking me how many top-level questions there are.                                  |
| 24:47      | So for example, say there are six questions, and then it goes through each of those, and                                |
| 24:51      | it asks me how many subsections there are.                                                                              |
| 24:53      | So question one might have part A, part B, and part C. And then for each of those, it                                   |
| 24:58      | will ask me if there are sub-questions, again, because sometimes it's question one, part                                |
| 25:04      | A, section I, and then someone, it does Roman numerals from there, in which you would usually                           |
| 25:11      | speak as numbers, but that's confusing if you're listening.                                                             |
| 25:15      | And then I go through and it generates that and adds it to my OmniFocus for me, which is                                |
| 25:20      | so nice to use, because then I can take everything off, and it says the whole project have a                            |
| 25:25      | due date of when the essay is due, actually about 12 hours before the essay is due, just                                |
| 25:30      | to make sure, and adds it also to my [[OmniFocus]] for me, straight into the project for the                                |
| 25:36      | current module that I'm studying.                                                                                       |
| 25:38      | I have one.                                                                                                             |
| 25:40      | I talked about the legal stuff, but I also have them for the nerd site, like I have one                                 |
| 25:46      | for an Automator's episode, and that's a very simple one, you know, it just kind of goes                                |
| 25:52      | through and it asks me what the publish date is, what the recording date is, what the episode                           |
| 25:58      | name is.                                                                                                                |
| 25:59      | I have two versions of I have one that is for, that has shows with a guest and the one                                  |
| 26:03      | that has shows that does not have a guest, because with a guest, you have to add a whole                                |
| 26:06      | bunch of tasks to confirm with the guest that they're going to be there and get them the                                |
| 26:10      | appropriate information and even send them a thank you note after the show publishes.                                   |
| 26:15      | But it's like a 14 step thing where I go through and everything I need to do in the process                             |
| 26:21      | of creating a podcast from starting the outline to, you know, dealing with sponsors and recording                       |
| 26:27      | and doing post production, all that stuff just goes on a checklist for me.                                              |
| 26:31      | And I do one of those for every episode of all the podcasts I make, and it started out                                  |
| 26:36      | as a [[Mac Power Users]] template, and then it expanded to a [[Mac Power Users]] template for                                   |
| 26:41      | shows with guests, because I realised I needed the several one.                                                         |
| 26:44      | Then when I started the [[Free Agents]], I duplicated those and made it for the [Free Agents]] with                            |
| 26:49      | some small tweaks, like changing Katie to Jason and then Jason to Mike, and then when                                   |
| 26:55      | we started the show, I duplicated them and made them for Automators and I like this show                                |
| 26:59      | because this show has the [[YouTube]] and the screencast production and I had to add pieces                                 |
| 27:05      | for that as well.                                                                                                       |
| 27:06      | It's kind of morphed over time into six very similar but different project templates, but                               |
| 27:11      | I have a total of six that deal with the creation of podcasts.                                                          |
| 27:15      | We really ought to compare our podcast project templates because I have just the one, it's                              |
| 27:22      | a workflow for Automators as well and asks me which episode it is and depending on whether                              |
| 27:29      | or not you're going to be posting the show or I'm going to be posting the show, it adds                                 |
| 27:33      | some slightly different tasks, so it adds some extra things for me if I'm posting the                                   |
| 27:37      | show and things like that and other stuff.                                                                              |
| 27:40      | It's very useful to make sure that I don't forget everything, especially because I'm                                    |
| 27:43      | new to all of this.                                                                                                     |
| 27:44      | All right, let's hear a new one, another one from you.                                                                  |
| 27:47      | All right, the next one is travel templates.                                                                            |
| 27:51      | I like to travel, love to travel, and it's really nice to have something so that I don't                                |
| 27:57      | get somewhere and realise, hey, I was planning to go from A to B, but I didn't book or research                         |
| 28:03      | any kind of transport to get from A to B. Huh, what do I do now?                                                        |
| 28:09      | That did previously happen to me in a very long ago life when I was not using [[OmniFocus]],                                |
| 28:16      | but yes, I now have a travel template project and I don't actually use [[OmniFocus]] for my                                 |
| 28:24      | packing list.                                                                                                           |
| 28:25      | I use another application called [[TripList Pro]], which is really nice, it integrates                                      |
| 28:30      | the trip it, but this tells me, hey, don't forget to pack clothing, don't forget to                                     |
| 28:35      | pack technology, don't forget to pack your carry-on, things like that, just so that I've                                |
| 28:39      | got the big picture items so I can make sure that I've got things and after this most recent                            |
| 28:43      | trip when I forgot my purse on the way here and my purse being wallet in American and                                   |
| 28:48      | I had to be rescued by a lovely friend who got a taxi to the airport and dropped it off,                                |
| 28:52      | I will be adding pack purse to that list.                                                                               |
| 28:54      | I didn't know that, so a purse, so men carry purses as well.                                                            |
| 28:59      | No, men carry wallets.                                                                                                  |
| 29:02      | What Americans call a purse is what British women usually call a handbag.                                               |
| 29:08      | So I got confused then, what do Americans call wallet, what do British people call that?                                |
| 29:15      | If it's for a woman, it's a purse, if it's for a man, it's a wallet.                                                    |
| 29:17      | Gotcha.                                                                                                                 |
| 29:18      | All right.                                                                                                              |
| 29:19      | Yeah, there you go.                                                                                                     |
| 29:20      | I'm getting that.                                                                                                       |
| 29:21      | Cultural knowledge bonus from today.                                                                                    |
| 29:25      | I got myself in so much trouble walking around London this year, but I think I should probably                          |
| 29:30      | skip that.                                                                                                              |
| 29:32      | So I listened to [[Mike Schmitz]], who's a co-host on [[Free Agents]], also has a book called [[Bookworm]]                          |
| 29:38      | where him and [[Joe Buhlig]] read productivity books, they're animals, they read like one                                   |
| 29:43      | a week and I read like one in 10 that they cover.                                                                       |
| 29:48      | If they both really love it, then I may read it.                                                                        |
| 29:52      | But I decided, if I'm going to read, because I'm not as into productivity books as Mike                                 |
| 29:57      | is, and I understand both sides of that argument, blah, blah, blah.                                                     |
| 30:01      | But if I do decide to read one of these, I want to make sure I get something out of                                     |
| 30:04      | it.                                                                                                                     |
| 30:05      | And so I have a little project I run every time I pick up one of those types of books,                                  |
| 30:10      | and it just involves getting the book, reading the book, taking notes, and then kind of like                            |
| 30:15      | summarising for myself.                                                                                                 |
| 30:17      | And then I even have a thing at the end about sharing it if I really liked it, as there's                               |
| 30:21      | some people that in my life that I think could benefit from reading that book, or even maybe                            |
| 30:25      | checking in with [[Mike Schmitz\|Mike]], who is the reader of all those books.                                                            |
| 30:28      | So I have a little [[OmniFocus]] project template for how to read a book.                                                   |
| 30:33      | So I don't think you get any nerdier than that.                                                                         |
| 30:37      | No.                                                                                                                     |
| 30:38      | I mean, sometimes that is the easiest way to make sure that you really get things out                                   |
| 30:43      | of it, especially I find project templates can be quite good if I'm struggling with a                                   |
| 30:47      | project maybe because I'm not sure where to start or maybe because I'm just not so keen                                 |
| 30:51      | on the project.                                                                                                         |
| 30:52      | Once I've got the template, it's easy to look at it and go, if I just spent five minutes                                |
| 30:56      | doing this first action, well, I've got the ball rolling, I've done something.                                          |
| 31:00      | And then I look up four hours later and go, okay, well, that's progress.                                                |
| 31:04      | So it's a nice anti-procrastination tactic too.                                                                         |
| 31:08      | Yeah.                                                                                                                   |
| 31:09      | Yeah.                                                                                                                   |
| 31:10      | But I guess the point is, I think I'd like you to cross, is that this stuff can really                                  |
| 31:14      | help you.                                                                                                               |
| 31:15      | Yes.                                                                                                                    |
| 31:16      | I think you're going to automate it where it's just part of your life.                                                  |
| 31:19      | It becomes a habit.                                                                                                     |
| 31:20      | And once it becomes a habit, it gets to be really powerful.                                                             |
| 31:22      | Yes, definitely.                                                                                                        |
| 31:23      | You got any more you want to share?                                                                                     |
| 31:27      | I do have a few.                                                                                                        |
| 31:28      | I've got one for my blog posts and this, I'm still trying to figure out the best possible                               |
| 31:34      | workflow for collecting blog post ideas and so on.                                                                      |
| 31:37      | But for posting a blog post, I have a little workflow that just adds certain things.                                    |
| 31:42      | It depends on if the blog post or, for example, if I've recorded a podcast episode with somebody                        |
| 31:49      | other than David, then it prompts me through a couple of things and adds a reminder to                                  |
| 31:57      | post it as well and make sure that I get everything right just because there are a couple of things                     |
| 32:02      | there that might need tweaking in the background, depending on exactly what I'm doing.                                  |
| 32:06      | And that's a nice helpful one for me.                                                                                   |
| 32:09      | I've got a whole fleet of these project templates based on production stuff, like if I'm making                         |
| 32:14      | a video, if I'm making a screencast, if I'm making a screencast for somebody else's software                            |
| 32:18      | as opposed to a screencast for one of my books or video projects, because there's a ton                                 |
| 32:24      | of things you need to do in that process and I absolutely rely on templates for all of                                  |
| 32:29      | that.                                                                                                                   |
| 32:30      | Yes.                                                                                                                    |
| 32:31      | Yeah.                                                                                                                   |
| 32:32      | It's really, really useful.                                                                                             |
| 32:33      | I'm just checking which other ones I have.                                                                              |
| 32:37      | Of course, I have one for creating an automation for somebody else, so somebody has asked me                            |
| 32:43      | to help them out with an automation and I'm giving it a go.                                                             |
| 32:46      | I've got time to do it.                                                                                                 |
| 32:47      | And I have a couple of things which are questions that I should prompt them for and other things                        |
| 32:53      | like that so that I really understand what I'm doing.                                                                   |
| 32:56      | Yeah.                                                                                                                   |
| 32:57      | I've got them for a bunch of the legal stuff.                                                                           |
| 33:00      | If someone asked me to make a new company for them, that's a checklist.                                                 |
| 33:06      | I've got a bunch of them here.                                                                                          |
| 33:07      | It starts to get into the weeds of the law stuff.                                                                       |
| 33:10      | One thing I'd like to add to this, so I talked earlier about the advantage of doing it through                          |
| 33:15      | [[Workflow]] or [[Shortcuts\|Siri Shortcuts]] is you can stack them.                                                                       |
| 33:18      | You can run multiple project templates on one set of variables, but you can also add                                    |
| 33:23      | additional applications like the podcast one.                                                                           |
| 33:26      | You can have it at a calendar event on the day that you're recording the podcast.                                       |
| 33:32      | I usually try to spend an hour or two before recording doing preparation for the recording.                             |
| 33:38      | So I can create a second event two hours before to prepare for the show.                                                |
| 33:44      | Or you can open apps that are friendly to this type of automation like [[Ulysses]] or [[Bear]]                                  |
| 33:49      | and write text.                                                                                                         |
| 33:51      | Just think it through because once you collect those variables to run the template, and that's                          |
| 33:55      | the reason you're collecting them, what else could you do with those variables so you don't                             |
| 33:59      | have to type it again somewhere else?                                                                                   |
| 34:01      | Just think about it.                                                                                                    |
| 34:02      | Yeah.                                                                                                                   |
| 34:03      | Yeah, that's really, really useful as well.                                                                             |
| 34:06      | And I mean, some of my projects are just, you know, they're quite large.                                                |
| 34:11      | So what I've done is I just duplicated them in [[OmniFocus]], stuck them in the templates                                   |
| 34:14      | folder, and then I share it from the template folder into [[Workflow]] and it goes through and                              |
| 34:19      | it fixes it for me, asks me for a couple of the variables, and done.                                                    |
| 34:24      | That's it.                                                                                                              |
| 34:25      | So it does save massive amounts of time, and more importantly, it saves me time after                                   |
| 34:31      | I've completed the project because it doesn't turn up that, hey, I actually forgot X, Y,                                |
| 34:35      | Z that was super important.                                                                                             |
| 34:36      | Yeah.                                                                                                                   |
| 34:37      | Rose and I will screencast a few of these and publish them at the show.                                                 |
| 34:41      | By the way, can I just say, I know how many people download this show, and I look at the                                |
| 34:46      | numbers of the views on the YouTube screencasts we make, and they are a small fraction of                               |
| 34:52      | the number of you listening to the show.                                                                                |
| 34:53      | So I don't know if we're just doing such a good job that you don't need to watch the                                    |
| 34:56      | videos or you don't care about the videos.                                                                              |
| 34:58      | And if you want us to keep doing the videos, you should watch them because it's just kind                               |
| 35:02      | of shocking to me how few people are watching those videos.                                                             |
| 35:06      | Yes.                                                                                                                    |
| 35:07      | But we are on [[YouTube]] and we do have a channel where all of these are, and we've titled                                 |
| 35:12      | them so that you can easily find it.                                                                                    |
| 35:13      | So if it was an episode one thing that you're looking for, then you can find it.                                        |
| 35:18      | We have had some really nice comments on it, people asking for things, people talking about                             |
| 35:21      | them in the forums, which is great, but yeah, it would be nice if some people watched them                              |
| 35:25      | as well.                                                                                                                |
| 35:26      | Yeah, I don't mind, I mean, if people don't really care, it's quite time consuming to                                   |
| 35:30      | make them.                                                                                                              |
| 35:31      | So if people don't care, we'll figure that out.                                                                         |
| 35:35      | But I don't know, I'm thinking the optimist, if you know, I think we're doing such a good                               |
| 35:40      | job that they're just sitting down and just creating them, they're like, I don't need                                   |
| 35:44      | to see no stinking video.                                                                                               |
| 35:45      | I got it.                                                                                                               |
| 35:46      | Yes.                                                                                                                    |
| 35:47      | Yeah.                                                                                                                   |
| 35:48      | One thing we should mention, of course, is [[OmniFocus]] is definitely not the only application                             |
| 35:54      | that you can automate project templates in, is it?                                                                      |
| 35:57      | No, it's not.                                                                                                           |
| 35:59      | Most of the, I think the upper tier task managers have tried to account for this somehow.                               |
| 36:06      | [[Things]] has got a whole system for it.                                                                                   |
| 36:10      | I played with it a little bit.                                                                                          |
| 36:12      | Honestly I haven't gone into it nearly as deep as I have with [[OmniFocus]].                                                |
| 36:15      | No, but we do have some links for the show notes where I've had a look around and some                                  |
| 36:21      | people have got some things together where they figured out how they're automating [[Things]].                              |
| 36:27      | I did use to do this for my work projects.                                                                              |
| 36:30      | And one of the things that I did for that was I used [[Microsoft Excel\|Excel]].                                                             |
| 36:34      | And [[Microsoft Excel\|Excel]] is one of those tools that you can do an awful lot with it.                                                   |
| 36:38      | Sometimes you can do a lot of things with it, maybe you shouldn't necessarily be doing.                                 |
| 36:42      | Some people use it as databases, but it's great actually for tasks.                                                     |
| 36:45      | If you remember episode one, calendar events.                                                                           |
| 36:48      | I had this crazy workflow where I was creating a series of events in [[Numbers]] and importing                              |
| 36:56      | them into [[Fantastical]].                                                                                                  |
| 36:58      | And you can use date math in numbers or [[Microsoft Excel\|Excel]].                                                                          |
| 37:04      | And you can then export that as a CSV and a lot of task management applications will                                    |
| 37:08      | take a CSV as input.                                                                                                    |
| 37:09      | And to do this is one of them.                                                                                          |
| 37:11      | And so you could theoretically create an entire project in a spreadsheet and then import it                             |
| 37:16      | into the task manager of your choice, which is quite useful too.                                                        |
| 37:19      | Yeah.                                                                                                                   |
| 37:20      | And one point I'd like to add to all of this is before you write this and say, well, what                               |
| 37:24      | about [[JavaScript]] for [[OmniFocus]]?                                                                                         |
| 37:26      | You know, that's new and that automates task management as well.                                                        |
| 37:29      | And I say, you have a very good point and just hold on.                                                                 |
| 37:32      | We'll get there.                                                                                                        |
| 37:33      | Yes.                                                                                                                    |
| 37:34      | We'll get there.                                                                                                        |
| 37:35      | A separate episode, but we'll get there.                                                                                |
| 37:36      | Well, Rose, are you inspired to go create more templates?                                                               |
| 37:40      | Yeah.                                                                                                                   |
| 37:41      | I think I need more.                                                                                                    |
| 37:43      | My list of approximately 40, most of which are work-related and kind of boring for most                                 |
| 37:48      | people, are looking kind of small at the moment.                                                                        |
| 37:51      | I think I need to add to that.                                                                                          |
| 37:53      | Maybe double it.                                                                                                        |
| 37:54      | It's 80 templates.                                                                                                      |
| 37:55      | A good number.                                                                                                          |
| 37:56      | Yeah.                                                                                                                   |
| 37:57      | I think like even just like silly things, if you're one of those anal retentive people                                  |
| 38:01      | that likes to like write down every movie you see and take your thoughts on it, you                                     |
| 38:06      | know, those people are out there, you could create a template for that.                                                 |
| 38:09      | I mean, no matter what you do.                                                                                          |
| 38:11      | I mean, I think if I was a student again, I could see how I would template the heck out                                 |
| 38:16      | of that process.                                                                                                        |
| 38:17      | Oh, yeah.                                                                                                               |
| 38:18      | Definitely.                                                                                                             |
| 38:19      | Because there's just so much of it that's repetitive.                                                                   |
| 38:20      | Yeah.                                                                                                                   |
| 38:21      | But anyway, we're going to do some screencasts.                                                                         |
| 38:23      | We're going to show you how we do it, hopefully inspire you to create a few of your own.                                |
| 38:27      | And I do want to say that that, you know, the return on that investment does kind of                                    |
| 38:32      | hockey stick.                                                                                                           |
| 38:35      | You get a lot of return if you spend a little time on it.                                                               |
| 38:37      | Once you get rolling and make one or two, then you even just take one of the ones Rose                                  |
| 38:41      | and I are going to post and just duplicate it and just start making changes for yourself.                               |
| 38:46      | This stuff makes a lot of difference.                                                                                   |
| 38:49      | Yes, most definitely.                                                                                                   |
| 38:51      | It's extremely powerful and all you have to do to get started is play, basically.                                       |
| 38:55      | So I highly recommend it.                                                                                               |
| 38:57      | Amen, sister.                                                                                                           |
| 38:58      | All right.                                                                                                              |
| 38:59      | Well, that does it for the Automator's episode five.                                                                    |
| 39:03      | Let us know how you're doing with this stuff.                                                                           |
| 39:05      | We've got a forum and love to hear from you in there.                                                                   |
| 39:09      | That'd be a great place to share some of your own templates and project management templates.                           |
| 39:15      | We do have a bunch of links for you if you're on [[Things]], but if you have some things, stuff                             |
| 39:18      | you want to share there, please do, because Rose and I, neither one of us use it every                                  |
| 39:21      | day.                                                                                                                    |
| 39:22      | So we're not the best people to give you advice on it, but we'd love to see talk on                                     |
| 39:25      | that in the forum.                                                                                                      |
| 39:27      | Anything else, Rose?                                                                                                    |
| 39:28      | Well, you can find that forum at [talk.automators.fm](https://talk.automators.fm) and there are a bunch of very lovely Automators                     |
| 39:35      | fans in there who have been doing all sorts of crazy and wonderful automation things.                                   |
| 39:39      | So it's a good place to go and visit, regardless of whether or not this episode has everything                          |
| 39:44      | in it that you need.                                                                                                    |
| 39:45      | There will be something extra in there, guaranteed.                                                                     |
| 39:48      | So what you're telling me is it'd be helpful if I gave the name of the website.                                         |
| 39:52      | No, no, I'm just following up.                                                                                          |
| 39:55      | All right, we'll see you all in two weeks.                                                                              |
| 39:58      | Please go watch the videos, enjoy all the extra content we give you, and keep automating.                               |
| 40:04      | Yes, and you can find me on Twitter and MicroBlog @rosemaryorchard, David, where can people                          |
| 40:09      | find you?                                                                                                               |
| 40:10      | At [macsparky.com](https://macsparky.com).                                                                                                      |
| 40:11      | Wonderful.                                                                                                              |
| 40:12      | And yeah, we will see you in the forums.                                                                                |
