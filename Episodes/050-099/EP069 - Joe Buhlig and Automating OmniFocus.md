---
status: "incomplete"
fc-date:
  year: 2021
  month: 02
  day: 12
fc-category: "podcast"
podcast: "Automators"
published: 2021-02-12
duration: 5329
formattedduration: "01:28:49"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Joe Buhlig"]
notetype: "episode"
showpage: "http://relay.fm/automators/69"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators069.mp3"
episode: 69
title: "69: Joe Buhlig and Automating OmniFocus"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
The Omni Group has released a remarkable automation platform for their apps, including OmniFocus. In this episode, automator Joe Buhlig joins to talk about his automation journey and working with the Omni Group's new platform.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Joe Buhlig]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 069 Discussion](https://talk.automators.fm/t/69-joe-buhlig-and-automating-omnifocus/10528)

# Sponsors
- [[Sync Up (Sponsor)|Sync Up, a OneDrive podcast]] - takes you behind the scenes of OneDrive.
- [[PDFpen (Sponsor)|PDFpen, from Smile]] - The all-purpose PDF editor for Mac, iPad and iPhone.
- [[HelloFresh (Sponsor)|HelloFresh]] - Use code `automators10` for ten free meals with free shipping.

# Show Notes
### Credits
*The Automators*  
- [Rosemary Orchard](https://rosemaryorchard.com)  
- [David Sparks](https://www.macsparky.com)

*The Editor*  
- [Jim Metzendorf](https://twitter.com/jmetzendorf)

*The Fixer*  
- [Kerry Provanzano](https://twitter.com/ciaokerryciao)
* * *
- [Joe Buhlig | an analog mind in a digital world](https://joebuhlig.com/)
- [Omni-Automation](https://omni-automation.com/)
- [OmniFocus & Omni Automation](https://omni-automation.com/omnifocus/index.html)
- [The JavaScript Beginner's Handbook (2020 Edition)](https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/)
- [JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
- [JavaScript Guide - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Learn JavaScript | Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
- [Omni Automation Plug-In: Complete and Await Reply](https://omni-automation.com/omnifocus/plug-in-complete-await.html)
- [The OmniFocus Update Reviews Script Comes to iOS](https://joebuhlig.com/the-omnifocus-update-reviews-script-comes-to-ios/)
- [OmniFocus Tag On Joe Buhlig | an analog mind in a digital world](https://joebuhlig.com/tag/omnifocus/)
- [Auto-Parsing Tasks in OmniFocus on iOS](https://joebuhlig.com/autoparsing-tasks-in-omnifocus-on-ios/)
- [joebuhlig/OFScripts: A collection of the AppleScripts I use to extend OmniFocus.](https://github.com/joebuhlig/OFScripts)
- [OmniFocus Plug-In Collection](https://www.omni-automation.com/omnifocus/actions.html)
- [Omni Automation Plug-In: Complete and Await Reply](https://www.omni-automation.com/omnifocus/plug-in-complete-await.html)
- [Eloquent JavaScript, 3rd Edition](https://amzn.to/2MeVtvX)
- [Hazel Keeping OmniFocus Updated](https://joebuhlig.com/hazel-keeping-omnifocus-updated/)
- [OmniFocus Auto-Parser (Original in AppleScript)](https://joebuhlig.com/omnifocus-auto-parser/)
- [Auto-Parsing Tasks in OmniFocus on iOS](https://joebuhlig.com/autoparsing-tasks-in-omnifocus-on-ios/)
- [OmniFocus Plug-In Collection](https://omni-automation.com/omnifocus/actions.html)
- [OmniFocus Automation topics - The Omni Group Forums](https://discourse.omnigroup.com/c/omnifocus/omnifocus-automation/6)
- [Omni Automation Plug-In: Task with Tasks](https://www.omni-automation.com/omnifocus/plug-in-task-with-task.html)
- [Move Selected Projects into New Folder](https://omni-automation.com/omnifocus/database.html#OF0109)
- [Push-Out Project Due Date](https://omni-automation.com/omnifocus/project.html#OF0121)
- [Copy Selected OmniFocus Tasks to OmniPlan](https://omni-automation.com/omnifocus/app-to-app.html#OF0120)

# Transcription
  
| Time Index | Transcription                                                                                          |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators. My name is Rosemary Orchard, and I'm here with David                |
| 00:06      | Sparks, and we're going to talk about making your technology do hopefully everything for               |
| 00:11      | you. Hey, David, how are you today?                                                                    |
| 00:12      | Great, Rose. I am very excited about talking automation with my automation buddy, Rose.                |
| 00:19      | Oh, yeah. Yeah, because we are, of course, joined by a guest today, and that guest is                  |
| 00:24      | none other than the fabulous, the amazing Joe Buhlig. Welcome to the show, Joe.                         |
| 00:28      | Yeah. Thanks, team. Thanks for having me.                                                              |
| 00:31      | Of course. When I looked at [[Skype]] and it said I hadn't talked to you in over a year,                   |
| 00:34      | I felt really bad.                                                                                     |
| 00:36      | I was kind of sad.                                                                                     |
| 00:37      | So I'm glad you came on the show, Joe.                                                                 |
| 00:39      | It is very last minute, but I was very excited to see your text about it.                              |
| 00:42      | So I'm excited to be here. It'll be a good one.                                                        |
| 00:44      | Well, we're going to talk today about the [[OmniFocus]] automation, which is a very powerful               |
| 00:50      | automation tool that Omni Group has had. It actually applies to all of their apps, but                   |
| 00:54      | OmniFocus, nerds unite, right? And Joe is someone who's published on this and written scripts for it,    |
| 01:02      | and also just a great automator and a nerdy guy. So we thought we got to get you on the                |
| 01:07      | show anyway. So thanks for coming.                                                                     |
| 01:09      | Certainly. Certainly. I know OmniFocus is one of those tools that I feel like I've,                    |
| 01:14      | like I cut my teeth scripting on the Mac with OmniFocus. So this is like right up my wheelhouse.       |
| 01:19      | Super excited about it.                                                                                |
| 01:21      | Back home.                                                                                             |
| 01:21      | Yeah. Yeah. And actually, one of the things I really love about this, Joe, is you're the               |
| 01:26      | person who got me into really creating my own OmniFocus or Omni Automation scripts for                  |
| 01:32      | OmniFocus. Because years ago, you wrote this task parser script, which used the transport text thing.  |
| 01:39      | And I used that for years with [[AppleScript]]. And I realised that I really wanted it on my phone         |
| 01:43      | as well. And that's the first scripts I created. So I was really glad to see that you've done          |
| 01:47      | an official updated version of that recently. Because that's honestly one of the things                |
| 01:53      | that helps keep my OmniFocus working, just having automation options and the ability to                |
| 01:58      | have tasks appear at the right time.                                                                   |
| 02:01      | That's really cool. I didn't know that's what helped you get into it. I've seen a lot of               |
| 02:04      | your scripts, Rose, but that's kind of cool. I didn't know I had inspired you. That's exciting.        |
| 02:09      | You did. And I'm very grateful for that because it really got me to dive more into scripting           |
| 02:13      | OmniFocus inside of OmniFocus instead of outside of it with Keep On My Show and [[Drafts]] and             |
| 02:19      | shortcuts, which are all, of course, great ways to automate a task management system.                  |
| 02:23      | But sometimes you just really need to get inside it and go nuts. And that's where I'm                  |
| 02:29      | really having a lot of fun recently. Sure. Sure.                                                       |
| 02:32      | Okay. Now, before we get started, there's something I need to sort out here. Okay.                     |
| 02:37      | Joe Buhlig has made a reputation for himself on the internet as, and this is what he calls             |
| 02:43      | himself, analog Joe, right? So I'm clear, right? Yep. You are correct.                                 |
| 02:50      | Yeah. You do videos on how you do your tasks in your little paper notebook with your fancy             |
| 02:54      | fountain pen. And then you get these, like these amazing OmniFocus scripts that just                   |
| 03:00      | show up once in a while. I need clarification, Joe. What exactly are you doing?                        |
| 03:07      | I am confusing everybody as best I can. That is my one and only task recently on the internet.         |
| 03:12      | But yes, I run a site analogjoe.com, which is all about basically managing your life in a               |
| 03:20      | notebook or in the analog space. But I tend to have a pretty strong emphasis on the digital            |
| 03:30      | as well. And that's primarily because a lot of what I focus on is how does the analog help             |
| 03:36      | impact what I do digitally and vice versa? Like how do I pick the right tool for the task? Because     |
| 03:43      | so much of what we can do on the computer, like if I spend so much time on the computer, it ends       |
| 03:50      | up just being a place that I hang out as opposed to a tool to get a task accomplished. And for me,     |
| 03:57      | whenever I've, when I've figured that out and I started moving a lot of like my daily task lists       |
| 04:02      | and my long term project lists and such to pen and paper, it made the computer more of a thing         |
| 04:11      | that accomplishes certain actions for me as opposed to let's go hang out on the computer for seven     |
| 04:17      | hours. So for me, that really helps my ADD is very grateful for that change. But I still have          |
| 04:25      | some pretty heavy OmniFocus uses, of course, just which is why some of the scripting and               |
| 04:32      | stuff comes out. And my primary use for that in the last couple of months has been primarily for       |
| 04:38      | managing like templated projects. And when we all have these, right, you've got a certain              |
| 04:43      | a piece of say it take a blog article where you've got a checklist of things that you always have      |
| 04:47      | to do for it, the things you always forget, like, you know, tweeting about the fact that you wrote     |
| 04:51      | a blog post. So you have all these tasks that you need. And it's always in this checklist form,        |
| 04:58      | at least I think it should be. And I have a lot of these that I have happening on a regular basis.     |
| 05:04      | And it just to me, it doesn't make sense to try to manage that in a paper notebook when I could        |
| 05:09      | just click a button. And here's a templated projects type in a name and I'm done like that.            |
| 05:14      | That to me is gold. And that's my primary reason I've got OmniFocus in the mix. I of course,           |
| 05:21      | have a lot of other tools that I use as well. But yeah, I use the two of them to interface             |
| 05:25      | with each other pretty heavily. Yeah, I mean, I feel like OmniFocus, and they used to sponsor          |
| 05:30      | Mac Power users, so, you know, consider me a shell. But the I've been using them forever.              |
| 05:36      | I just spent two weeks in [[Todoist]] because everybody's been talking about it so long. And               |
| 05:39      | it really isn't [[OmniFocus]], you know, I mean, it's just like the automation, there's a couple           |
| 05:44      | things about it. But the automation is one of the reasons I like it, because like you, I have many,    |
| 05:50      | many automated projects where I throw a shortcut or push a button and something takes off.             |
| 05:56      | And I understand the difference between your analog and your digital system.                           |
| 06:01      | I kind of look at the same idea with time blocking. It's that, you know, my task list                  |
| 06:07      | is infinite. My time is finite. So, you know, a task manager that lets me surface the things I         |
| 06:14      | actually want to work on so I can address them somewhere else, whether it's in a paper notebook        |
| 06:18      | or on my calendar is something really powerful to have. Yeah, for sure. I know, like for me,           |
| 06:25      | I end up making a list on the notebook every morning. And that's the list I work off of,               |
| 06:32      | which has me going to the computer and then off the computer back and forth quite a bit                |
| 06:37      | throughout the day. Yeah. Well, the Omni Group, and I guess we should talk about kind of your           |
| 06:44      | history with automation before we get into it, but the Omni Group has done something pretty             |
| 06:48      | remarkable with their own automation language. But how did you get started with automation?            |
| 06:55      | With automation in general, honestly, I think it was OmniFocus to be completely honest. I don't        |
| 07:02      | know that for sure, but I know I started blogging back in 2014, which seems like ages ago at this      |
| 07:10      | point. And I had an article that I wrote about my OmniFocus setup and workflow, which is               |
| 07:17      | way back at this point. And it did pretty well. And I had a few things that I was wanting OmniFocus    |
| 07:24      | to do at the time, but it wouldn't do those. So I started exploring like, okay, how do I get           |
| 07:31      | certain things into it? Because that was my big thing is I was trying to keep everything in OmniFocus  |
| 07:36      | at the time. Yeah. So I was exploring some of the Siri into OmniFocus bits at the time, which          |
| 07:42      | were not straightforward like they are today. Yeah. You know, it was back when you had to use like     |
| 07:47      | this [[Apple Reminders\|Reminders]] trick to get it in there. So I learned some of that. I set up an OmniFocus              |
| 07:53      | hotspot of sorts with [[Hazel]], which is kind of a slick one as well. And then that kind of cut my        |
| 08:01      | teeth on scripting in general, I think, because then I started diving into some of the someday         |
| 08:07      | maybe list auto parsing type processes like what Rose was referring to earlier. But then that also     |
| 08:14      | helped me dive into more of like the TextExpander scripting and stuff I've done. I've done quite a    |
| 08:19      | bit with like [[Alfred]] as well. So it's kind of helped me dive into some of these other places.          |
| 08:26      | But I think for me, as far as like scripting things and automating things like on my Mac               |
| 08:30      | specifically, that has been primarily in OmniFocus, which, you know, of course is what our topic is    |
| 08:38      | here today. But that's, I think that's where the bulk of my beginnings were with that. I mean,         |
| 08:44      | obviously I could go back and we could go into some of my corporate days with Excel automation         |
| 08:48      | and stuff, but that had more to do with writing formulas in Excel than it did with writing scripts     |
| 08:55      | for it. I've actually got into that, but that's a whole different world. For sure. When I, I mean,     |
| 09:01      | like 20 years ago, I ran almost all of my legal stuff through WordBasic. I don't think they've         |
| 09:07      | made WordBasic anymore, but that was actually pretty powerful if you wanted to do some automation.     |
| 09:14      | But the OmniFocus automation, I think, is interesting that they have built around. And                 |
| 09:21      | I think I really admire the work they've done in order to make their app more automation friendly.     |
| 09:27      | I mean, initially, when OmniFocus released, all the Omni apps always have great AppleScript support.   |
| 09:35      | And I guess let's just do a little history lesson here for a minute.                                   |
| 09:38      | You know, so they had the AppleScript and OmniFocus was a Mac app. I mean, it was, it grew            |
| 09:45      | out of Kinklesst GTD, which was an Omni Outliner kind of plug-in or add-on. Either of you guys          |
| 09:53      | have been around long enough to remember that, except before your time. It was before me.              |
| 09:58      | I think that was before my time. Yeah. So, yeah, they made, I forget his name, but there was a guy,    |
| 10:06      | a photographer. Man, I really feel bad. I forget his name right now. But anyway, he came, Ethan        |
| 10:12      | Schoonover wrote these plugins basically for Omni Outliner to turn it into kind of a GTD style         |
| 10:18      | task manager. And we were all, and on the Mac, there were no good task managers. As weird as           |
| 10:24      | that sounds, because now there are so many good ones, but back then there were no good ones.           |
| 10:28      | And Ethan Schoonover made these plugins with OmniOutliner. Then the Omni Group actually made           |
| 10:32      | a separate product, but they started with excellent AppleScript support. But then after,              |
| 10:37      | and I don't know, have you guys either of you done any AppleScript stuff in OmniFocus?                |
| 10:44      | Yeah. Yeah. I mean, all the tools you need are there. But the problem is, of course,                   |
| 10:49      | AppleScript doesn't exist on the iPhone and iPad, which emerged after the app.                        |
| 10:54      | And so then the Omni Group did the shortcut support for OmniFocus, which Rose and I have               |
| 11:01      | talked about at length on the show. And that's how I trigger so many of my templated projects.         |
| 11:06      | But then after Sal Soghoianin left Apple, he started working with Omni Group. And I guess Sal's not       |
| 11:15      | the only person. I know a lot of people at Omni are smart and we're thinking about this, but they      |
| 11:19      | wanted to come up with a scripting language that would allow you to work on both iPhone,               |
| 11:26      | iPad, and Mac. So you write your automation once and it works on all platforms. And that's what        |
| 11:34      | they've done. And I think they've done it very well, honestly, because it's pretty slick, kind of      |
| 11:40      | going back to some of those first scripts I was referring to earlier. Those were all built on          |
| 11:45      | AppleScript, which was great. You could do a lot with that. But I've been a primary Mac user for      |
| 11:55      | pretty much my entire Apple existence. And I've done some things with the iPad in the past,            |
| 12:01      | but I've just learned like I'm a Mac and iPhone personally. I've had great, but it just doesn't        |
| 12:06      | fit a lot of my workflows. So whenever I was working on a lot of these Omni focus setups,              |
| 12:13      | it's always been AppleScript, which is why when Sal came on and started helping them develop this     |
| 12:20      | whole Omni automation ecosystem for being kind of a universal plug-in structure,                       |
| 12:26      | like I immediately wanted to move a lot of my scripts over to this setup. But it of course             |
| 12:33      | means you're rebuilding them from the ground up. So it takes some time. And with me having kind of     |
| 12:38      | this hybrid system, it wasn't as important to me personally. But as I've moved back into Omni          |
| 12:45      | focus, it's like, okay, obviously, this is a no-brainer. Let's move some of this stuff over.           |
| 12:50      | Because again, it is super powerful. Yeah. And I feel like what they've done is really an evolution.   |
| 12:57      | I mean, it is so good now because of all the steps they've taken over the years.                       |
| 13:02      | But what they've created is it's largely a JavaScript language, but it's a little bit                  |
| 13:08      | different. I mean, I've been able to fiddle with it and I'm not a programmer. It's not that hard.      |
| 13:14      | And the cool part is you make these plug-in scripts. And when you install them into Omni               |
| 13:21      | focus, you install them directly into the app, you're essentially adding feature sets to the app.      |
| 13:28      | And you can install them locally on a specific installation. So like, you can just install             |
| 13:34      | it on your laptop. So if there's a script, you just want to run your laptop. But even better,          |
| 13:38      | you can install it basically to the cloud. And then every instance of Omni focus iPhone down to        |
| 13:45      | the biggest iMac is going to have those scripts available to them and be able to do work for you.      |
| 13:52      | And the best part is, if you're listening to this and saying, blah, blah, blah,                        |
| 13:56      | I don't have time for JavaScript. Time to turn this podcast off. Stop for a second. Because            |
| 14:01      | there's a massive library of these things out there already now that people like Joe and Rose          |
| 14:06      | have made. And they've shared. And so many of the features you may want to add have already            |
| 14:13      | been scripted. And all you have to do is go to a website and download them and install them.           |
| 14:17      | That's one of the reasons why I really love this. Because I mean, it's using JavaScript,               |
| 14:22      | which is the same as [[Drafts]] and the same as, you know, Scriptable and other applications as well.      |
| 14:26      | So that means that if you if you learn this, then you're going to be able to turn your hand to         |
| 14:30      | automating, you know, automating and [[Scriptable]] full stop, but also doing more detail, more complex    |
| 14:37      | automations in [[Drafts]], which we spoke to [[Stephen Millard]] about on the last episode. But what I         |
| 14:43      | really love is, you know, it is, you know, it's relatively easy to wrap your head around once          |
| 14:50      | you understand, you know, the structures of the individual items. Okay, so what is a task and          |
| 14:55      | what properties does it have? And how can I use those? So a task has a name, so I can access,          |
| 15:00      | you know, the dot name property of it and so on, and go from there, which means that, you know,        |
| 15:05      | once once you've wrapped your head around the model, it's not that crazy and everything is             |
| 15:11      | actually relatively logical to access because, you know, things have got logical names, like the       |
| 15:16      | name of a task is its name, and the note of a task is its note. And, you know, people can              |
| 15:21      | probably figure out where everything else is going to be from those two examples, which I really       |
| 15:26      | like. Yeah. And so using the existing library, the way I learned it, there was two things I did.       |
| 15:31      | The first thing is I went over to omni-automation.com, which is a website that I believe is put        |
| 15:37      | together by [[Sal Soghoian]]. Yep. And he has collected a bunch of educational resources on this whole      |
| 15:45      | Omni scripting language. And this doesn't just work with [[OmniFocus]], this also works with [[OmniOutliner]]          |
| 15:49      | and [[OmniGraffle]]. And so you can do, you know, you can use the scripting across their apps.    |
| 15:54      | But he has a lot of teaching material there, but he also has a lot of very simple, downloadable        |
| 16:00      | scripts that you can deconstruct and then start changing variables and start realising how it's        |
| 16:05      | all put together. And then it's just a question of learning the knowledge of the tools and gluing      |
| 16:11      | these things together. And he does it in a way where you see the script, you can download the script,  |
| 16:16      | you can modify the script. And or you can just take the completed one that he's made and install       |
| 16:21      | it in [[OmniFocus]] and start using it. So I would recommend, even if you don't have any knowledge         |
| 16:27      | of [[JavaScript]], to go in there and play with this. There are some good online resources for learning    |
| 16:36      | JavaScript though. So if you want to get like more of a basic JavaScript programming language,         |
| 16:42      | I learned it on a website. Let me look it up. Where did you guys learn JavaScript?                     |
| 16:49      | I learned it because my boss at work told me, hey, you can't do this entire website in PHP             |
| 16:55      | and HTML. We need some JavaScript. And so I ended up googling bits and pieces to try and               |
| 17:01      | figure it out. And I don't think I've ever sat down to learn JavaScript. I've just figured             |
| 17:05      | stuff out as I went, which I would suggest is probably not the ideal approach to do it if              |
| 17:11      | you're learning for the purpose of automation. If you're learning for the purposes of web              |
| 17:16      | development and you already have another language under your belt, that's fine. But for development,   |
| 17:21      | you might or for scripting and automation, I'm guessing Joe might have a couple of suggestions,        |
| 17:27      | though you've of course been diving in scripting before Joe.                                           |
| 17:31      | Yeah. So the nice thing is like with JavaScript, if you come from a web development background,        |
| 17:36      | you really don't have to learn it. Like you already know it pretty much. So                            |
| 17:40      | there's that side of it. I will say though, I don't think we should under emphasise the importance     |
| 17:46      | of this Omni Automation site that Sal's put together, because it's one of the best documentation       |
| 17:51      | sites I've run across. And I've been through hundreds of these things. And like for me,                |
| 17:56      | when I learned JavaScript, it was because I had a client paying me to build a website. It's like,      |
| 18:02      | well, I guess I'm going to have to pick this up like now because someone's paying me to do it.         |
| 18:06      | So I went to at the time, it was W3 schools to run through, and I just ran through all of their        |
| 18:14      | quick tutorials on JavaScript. And that gave me kind of a base. What is the syntax? How do I format    |
| 18:21      | this? And it still throws me off because I learned with putting a semicolon at the end of everything   |
| 18:26      | and all of the stuff and Omni Automation does not have that. And it still messes me up. So             |
| 18:32      | you can put it in there, but it doesn't seem like it matters or not.                                   |
| 18:34      | I mean, it's one of those things where I would suggest if you're learning scripting,                   |
| 18:39      | then it's probably not a bad idea to put the semicolon at the end of a line when you think             |
| 18:43      | you finished something. Because basically, what that's saying is, hey, this section is                 |
| 18:48      | complete and it should work. And then if it's not complete, and it doesn't work, it's going to hit     |
| 18:54      | the semicolon and say, hey, unexpected semicolon, which for you as a person learning the scripting     |
| 18:59      | is really useful indicator that something is wrong in that line. If you don't have that semicolon,     |
| 19:05      | it's going to continue on to the next line and keep reading and trying to figure it out,               |
| 19:10      | which can be a good thing, can be a bad thing. Personally, I am a big fan of the semicolon,            |
| 19:15      | a because a lot of my day job is PHP based, and I have to use semicolons anyway. And so whenever       |
| 19:20      | I look at Python, my brain just goes, what? Yeah, Python does not have semicolons at the end of        |
| 19:27      | lines. It uses indentation instead, which is a whole different ballgame. But basically, the            |
| 19:33      | semicolon breaks things up so that you know that, yes, there is supposed to be a break here,           |
| 19:39      | which is good or bad. W3Schools is really good. There's also the JavaScript Beginners Handbook         |
| 19:45      | by Flavio Cops, which I've got a link to in the show notes. It's online. It's part of free code        |
| 19:50      | camp. It's free. And it has 27 sections, including history, just JavaScript, a brief intro to          |
| 19:58      | JavaScript, and a section on semicolons, which will probably disagree with what I just said.           |
| 20:04      | But that's okay, because, you know, everybody has their own opinion. I'm just offering mine.           |
| 20:09      | But yeah, it goes through a lot of things. The other resource I would 110% recommend                   |
| 20:15      | is Mozilla's developer documentation. Now, this is not something where you necessarily want to         |
| 20:21      | start with this. But if you are looking for a function, like, for example,                             |
| 20:26      | you're looking to see if you can find out if something is included in something else.                  |
| 20:31      | So for example, if the word Joe includes an E, then that's something where you would type              |
| 20:38      | includes into the search on the Mozilla developer documentation website. And it would come back        |
| 20:43      | with strings and arrays and so on and things like that. And you can find things and find               |
| 20:48      | out how they work with some simple examples. So there's links to all of those in the show notes.       |
| 20:53      | Yeah, and just looking back, so the way I learned it, and this is a good place to start for a          |
| 20:57      | beginner is [Code Academy](https://codecademy.com), codeacademy.com. I don't know, like five years ago,                          |
| 21:03      | I went through their JavaScript course back before Omni Automation was a glimmer in                    |
| 21:08      | sales to go in and can case his eyes. But it's just having that knowledge has been very useful         |
| 21:14      | because I learned, I am a script or I am not a programmer like you guys. And so I've only learned      |
| 21:21      | automation in programming through automation. And so I was pretty fluent in AppleScript,              |
| 21:27      | but I knew JavaScript was kind of like the next thing that everybody was going to be using because     |
| 21:32      | of the multi-platform nature of it. So I went through that. Also, I did the Lynda course,             |
| 21:37      | I created the Lynda course for [[OmniFocus]], which you know, one of the side benefits of that is        |
| 21:44      | I get access to the Lynda.com stuff. And I went through a bunch of their JavaScript stuff as well.    |
| 21:48      | But if you don't know anything about JavaScript, honestly, just go through the [Code Academy](https://codecademy.com) course     |
| 21:52      | and then head over to the Omni Automation website. This is like a weekend project and you can be       |
| 21:58      | doing a lot more of this than you think you can. Something else I would just throw in that mix too     |
| 22:03      | because when it comes to writing scripts and doing this, I find that it's quite helpful to have        |
| 22:11      | a script that you want to make and then try to find out how to put those pieces together and           |
| 22:17      | just try making it. I have learned so much in just trying to build something as opposed to trying to   |
| 22:23      | take tutorials and stuff. The bulk of my development background and experience comes from doing        |
| 22:30      | exactly that, not running through courses and stuff. Now, I'm not trying to undercut the value of      |
| 22:34      | doing that because I think that there is a lot of value in taking the courses and doing that.          |
| 22:39      | I just find that me personally just trying to build something, I learn a ton doing that. Probably      |
| 22:44      | takes me a lot longer to do it that way. But I do pick up a lot just by reading other people's         |
| 22:50      | scripts and trying to grab pieces of individual code banks here and there to try to put together       |
| 22:57      | what I want. That goes a long ways for me. Yeah. I would say if you don't know what a variable is,     |
| 23:02      | then you probably want to read either the beginner's handbook, do the tutorial on code academy,        |
| 23:07      | read eloquent JavaScript, something like that. If you do know what a variable is and that sort         |
| 23:12      | of thing, then you can definitely start with just trying to piece bits together. Of course,            |
| 23:18      | as we mentioned at the top of the show, you can just take other people's scripts and use them          |
| 23:21      | as they are. You don't even have to change them if you don't want to. Yeah. I feel like the trick      |
| 23:26      | is, first, you got to know what tools are in the box. If you don't know what's in the toolbox,         |
| 23:32      | do one of the courses. But then after that, it really is... I mean, that's the way I Apple             |
| 23:37      | Script, even though I've read many books and do it, I still like hunting back at stuff. The beauty     |
| 23:43      | of [[AppleScript]] is it's been around so long that the web is full of great snippets to solve a problem  |
| 23:49      | in [[AppleScript]] that's already pre-written code. Army Automation isn't as new, however,                |
| 23:57      | and we're going to talk about that right after this.                                                   |
| 24:00      | This episode of Automators is brought to you by Sync Up, a OneDrive podcast.                            |
| 24:04      | I love finding new podcasts to listen to. It's one of those things that actually can really            |
| 24:08      | improve my day, just giving me new voices and new perspectives. If you're looking for a new            |
| 24:13      | shape to listen to, Sync Up takes you behind the scenes of OneDrive so you can learn about how          |
| 24:17      | to connect files, share your documents, and work from anywhere. And you'll get to hear about the       |
| 24:22      | design and development side of things too. Each show covers a dedicated topic, guest interviews,       |
| 24:27      | news and announcements, plus a special topic outside the technology norm.                              |
| 24:32      | Topics include day to compliance in governments, day security, and of course, one of our favourites,    |
| 24:38      | automation. I recently listened to their episode from January, where they were talking about,          |
| 24:43      | among other things, the importance of focusing on the well-being both at home and at work.             |
| 24:48      | Of course, a lot of people have been struggling with this over the last year,                          |
| 24:51      | so it was great to see how these people are handling it. Go listen to it now. Just search              |
| 24:56      | for Sync Up wherever you get your podcasts. That's S-Y-N-C-U-P, or just click on the link               |
| 25:02      | in the show notes. Go check it out. Our thanks to Sync Up and Microsoft for their support of this       |
| 25:07      | show and all of Relay FM. All right, so Joe, now Omni has got to a point where we can write this cool |
| 25:15      | kind of JavaScript variant feature to add features to their applications. Tell us about                |
| 25:22      | your experience with it and what you're doing. Yeah, so there's a couple of things I've learned        |
| 25:27      | in the process, because yes, it's super simple to get into having built scripts and put scripts and    |
| 25:37      | code into a lot of different projects. There are some things, like I've had some back and forth with   |
| 25:44      | Ken Case on it via Twitter. There's some just tweaks here and there that they don't have in            |
| 25:50      | the system yet, but he's always been super great at like, oh, yeah, that's because of X, Y, and Z,     |
| 25:55      | or at one point, I know they pushed a quick update to OmniFocus because it's something I found that    |
| 26:00      | was missing with the API on it. So they're super responsive and I love that. I can tell that it's      |
| 26:07      | still kind of a young language setup, which is fine, because they're also amazing and I'm shocked      |
| 26:14      | at how much they have in it, given how young this thing is. But I do know that it's pretty standard,   |
| 26:20      | because if you look at some of these scripts and the way that the templates are set up,                |
| 26:26      | they have your standard putting metadata at the top, who wrote it, what do you call it,                |
| 26:31      | what version is it, describe it, like that stuff is pretty standard at the top of these.               |
| 26:36      | So just seeing that is really, really nice, because I love to be able to see those scripts and then    |
| 26:42      | know where did that come from, or rather, who did I steal that from? Because I just copy pasted it,    |
| 26:48      | like that's, I had to do that because I've got one, one of the first scripts I wrote on this Omni      |
| 26:54      | Automation Platform in JavaScript was just a standard placeholder templates script, which I            |
| 27:00      | know there are a bunch of these out there, but I couldn't find one that did exactly what I wanted.     |
| 27:05      | So I knew I could take somebody's and tweak it, which is what I did. And I just took somebody's        |
| 27:12      | script from the discourse forums that Omni Group has and tweaked it, but I had forgotten where it      |
| 27:18      | came from and I was like, I should probably figure this out before I record with Rose and David.       |
| 27:22      | So I just looked at that metadata at the beginning to tell me where that, where that came from,        |
| 27:27      | which is super nice. So I love that they have that up there. The rest of it's pretty standard,         |
| 27:34      | to be honest with you, like it's, it's all JavaScript flowing. So it's, it's easy to follow            |
| 27:39      | it. I find it very easy to read. Maybe that's because I've written it for so long now, but             |
| 27:44      | I don't know. I like it. It's, it's simple. It doesn't take a lot to do some very basic things         |
| 27:51      | in the language. And I love that it's very universal. One thing that I know that kind of tripped me up |
| 27:59      | when I first started is like, there's a big difference in the file extension names with this.          |
| 28:05      | So you have like dot OmniJS, but there's also dot OmniFocusJS or [[OmniGraffle]]e, OmniOutliner,            |
| 28:13      | or OmniPlan, I think as well. But if you have it, if it's a specific script for OmniFocus,             |
| 28:20      | I'd highly, highly recommend you do it all in one file and do it as a dot OmniFocusJS,                 |
| 28:26      | because then people can just double click it and it installs it. And it's super simple to              |
| 28:30      | share it that way. So anyway, that's me rambling a little bit on it, but I don't know. I really        |
| 28:35      | like it. It's a, it's a pretty slick setup. Yeah. I mean, that template script is one,                 |
| 28:40      | I'm working, I feel like everybody has their own version of it, you know, but the, but I'm working     |
| 28:46      | on it too, because I intend to move all of my templates into their JavaScript templating system        |
| 28:53      | because it's, you know, it's better. I think it's faster. I mean, Shortcuts is awesome,                |
| 29:00      | but Shortcuts is a little rickety, you know, it's, it's like a whole different system driving a        |
| 29:05      | different system where this is all integrated into the application. It feels much more like an         |
| 29:09      | application feature, but I've decided I'm going to make my templates very specific, because I have     |
| 29:16      | like, I don't know, 60 templates that I use, and they're all very customised. I mean, are you forming  |
| 29:22      | a California LLC? Well, then I have a template that I use when I, you know, do that for you.           |
| 29:28      | So I'm going to move all of them over in that way. Most of the templates I found are filling           |
| 29:32      | the blank templates, and I don't really want that. I want one that's going to automate as much of it   |
| 29:38      | as possible. So I'm going to do some work upfront on that. Sure. I have a question for both of you,    |
| 29:43      | because this is one of the things I've been wrestling with, because on the one hand, I love            |
| 29:46      | to have, you know, my templates 100% in OmniFocus. How are you handling relative due or defer dates    |
| 29:54      | with those scripts? Because that's one of the things I love about having my templates in [[Drafts]],       |
| 29:59      | because then I can have a variable for my due date and have minus three days or whatever,              |
| 30:04      | you know, next to it. And then that gets parsed when it gets pasted into OmniFocus.                    |
| 30:09      | But that's something I've yet to figure out how to handle in OmniFocus itself.                         |
| 30:14      | That was exactly the issue I had, and why I ended up like tweaking one for myself. So the way that     |
| 30:22      | the one I have works, and I can share this with you, is I have a folder, I have a directory on         |
| 30:29      | my computer that has a bunch of text files with Taskpaper formatted templates. And I tend to highly   |
| 30:36      | recommend that because generally that text file is easily transportable to other systems. So I         |
| 30:42      | don't have to keep it in [[Drafts]]. I don't have to keep like these system like template projects in      |
| 30:47      | OmniFocus. It can be outside of that. So it doesn't clutter up my project list. So I have a folder     |
| 30:53      | for OmniFocus templates that are just Taskpaper formatted lists. And I do have those placeholders     |
| 31:01      | in that system. And then the script in OmniFocus, whenever I hit the button for it, which I have       |
| 31:08      | a trick for how I do that to explain that in a second. But whenever I hit the plugin for that,         |
| 31:14      | it pulls up that directory asks me which template. And depending on which of those files I open it     |
| 31:20      | then goes through and does the placeholder replacement. But if you use the dates on that,              |
| 31:25      | you can do exactly what you're talking about like minus seven days or plus four hours, you can do      |
| 31:30      | all of that after that date. So that way you can get all the relative pieces to that.                  |
| 31:36      | That makes a lot of sense. And I love that idea. And I'll probably go with that. Because I mean,       |
| 31:43      | one of the reasons why I have all of them in [[Drafts]] at the moment is because I have my scripts in      |
| 31:47      | [[Drafts]], of course, to pick out the placeholders and import them. But I can easily export all of        |
| 31:53      | my templates to a single folder. Yeah. Yeah. Now I want to point out I do cheat a little bit with      |
| 32:00      | this because I'm so lazy that I didn't want to go to the menu to hit the button. And I didn't          |
| 32:05      | want to clutter up my toolbar with it. So this, this gets in the weeds a little bit, but there is      |
| 32:11      | a way with a URL to run one of these scripts. Yeah. And it's a little bit messy to set up. This        |
| 32:18      | is one of the things I want them to change. Like I want to be able to just tell it to run a script     |
| 32:24      | based on the name, but they have like running the script as JavaScript URL encoded, which is a         |
| 32:30      | whole other thing too. I don't like that, but I think it does work. However, I have an Elgato         |
| 32:38      | [[Stream Deck]] sitting in front of me on my desk. If you know what that is, it's basically a macro pad.   |
| 32:43      | This thing is amazing. But because you can run you are like open URLs with the [[Stream Deck]],            |
| 32:49      | I actually have a button on this thing that just says OF template. And I can just press that button.   |
| 32:55      | It opens up OmniFocus and pulls up that template dialogue all in one button. So it's, it's super,      |
| 33:02      | super fast to pull that up and to run it. So yes. But again, you're getting in the weeds when you      |
| 33:08      | start doing stuff like that. Yeah, that was one of the things I've been struggling with as well,       |
| 33:12      | because I'd love to automatically run scripts, but I don't want the script to be in the URL.           |
| 33:16      | I want it to be, you know, saved in a file that I can then open and [[BBEdit]] or text edit or       |
| 33:22      | Textastic or whatever. I tend to use Textastic on iOS and a [[BBEdit]] on my Mac to edit my Omni group     |
| 33:31      | or OmniFocus scripts. Yeah. Another way you could do that, at least on the Mac is you could run it     |
| 33:36      | through a palette in [[Keyboard Maestro]] because you could trigger URLs the same way. In fact,            |
| 33:43      | that may be the way you're using it with your [[Stream Deck]]. I don't know. But I can think of a          |
| 33:48      | couple ways to do that. I think it'd be more complicated to pull that off on iPhone and iPad.          |
| 33:53      | I'd have to stop and think about it. And now you have me worried because I'm just early in my          |
| 33:58      | template project, but you're right. I'm going to have like 60 things show up on my share sheet         |
| 34:03      | in OmniFocus to create these templates. Maybe I need to make it like one big template with a           |
| 34:09      | choose from in it or something. I don't know. Sure. There's more work to do. Yeah. Have the            |
| 34:13      | templates saved in a file and then pull up the contents of the folder and choose from those.           |
| 34:19      | That'll be the easy way to handle it. Or even have subfolders and then have                            |
| 34:26      | ones for MacSparky Law, MacSparky Automators, MacSparky MPU, stuff like that. Split it up.          |
| 34:33      | Joe, have you saved? This is a total selfish question, but have you shared your template               |
| 34:39      | system yet? I haven't. No, I haven't. I can do that. I'll make a note here and do that. It's           |
| 34:45      | pretty simple to do, but I do want to point out like one of the nice things about doing the            |
| 34:50      | text file, Taskpaper formatted stuff is you can have multiple projects in a single Taskpaper or      |
| 34:58      | text file. I do this for some of our regular like bookworm episodes because there's two different      |
| 35:06      | projects for me. The process like a templated checklist for recording the show, but then               |
| 35:13      | there's another one for posting like the video recordings that we have for it. Those are two           |
| 35:18      | separate projects to me because they have different deadlines based on when they're being released.    |
| 35:24      | So I just have a single bookworm recording template file for that, but there's two different           |
| 35:29      | projects that get created whenever I run that. So depending on how your setup works, like there's      |
| 35:34      | a lot of power in how you set up the Taskpaper side of it because, you know, Omni Group is amazing    |
| 35:40      | and how they set that side of it up too. Yeah. I mean, really, you have an abundance of options        |
| 35:45      | here. Like you could, I could still fully run this thing in shortcuts without a problem. I'm           |
| 35:51      | switching it over because I'm a nerd, not really because of any other reason. The other thing is       |
| 35:56      | I've saved some of these Taskpaper formats to TextExpander macros with fill-in fields and I          |
| 36:05      | can create them on the Mac with that as well. I mean, there's so many ways to skin this cat.           |
| 36:10      | Right. In fact, let's move on past templates for a minute and talk about some of the other             |
| 36:16      | stuff you can do. Ken Case told me about this when they first started developing it.                   |
| 36:21      | And the thing that stood out to me even in the early stages was this really is way more than a         |
| 36:27      | templating system, which you've always been able to do in OmniFocus one way or another. This is a      |
| 36:32      | way to create new features in an application to scratch an individual itch. And a great example        |
| 36:40      | of that is one of the scripts that Rosemary has shared and it is a check off task and follow-up        |
| 36:46      | later. I forget exactly what the name of it is, Rose. Did I get that right? Yeah. Yeah. So I believe    |
| 36:53      | this is based on the, I think maybe I stole this from you Joe or somebody else. I don't remember.        |
| 36:59      | It's a complete and a wait reply. So the idea is that you mark the currently selected task as          |
| 37:07      | completed and then you add another task, which is waiting on reply colon and then the name of the      |
| 37:13      | task that you just completed straight after it and add a waiting on task to it ideally, a tag to       |
| 37:19      | it ideally. So that then it should find that tag and then go ahead and add it, which at least for      |
| 37:29      | me works pretty well and is very handy at work because I frequently have to think about a reply.       |
| 37:35      | I can't just fire open up the email client and fire for reply, especially I have to translate          |
| 37:40      | everything into another language. It requires a little bit more thought, especially if I'm             |
| 37:44      | emailing somebody important. So I have this because then I have notes to myself to reply               |
| 37:50      | to these more important emails that require more thought. And then when I complete that task,          |
| 37:55      | then I hit the button and it says, hey, and now you're waiting on a reply from this person.            |
| 38:00      | Yeah. I mean, that's a problem we have all the time. You have a task to send an email to somebody,     |
| 38:06      | but then you need to check back on that. And how do you do that? Yeah, I think that script comes       |
| 38:11      | from Curt Clifton. That's who I was thinking of. Yeah, you and Curt Clifton definitely inspired        |
| 38:16      | me a lot when I first got into scripting OmniFocus. And in fact, I think my entire collection of       |
| 38:20      | AppleScripts came pretty much from the two of you over the years. And Curt used to work               |
| 38:26      | for Omni Group actually, no longer does, but still has lots of great scripts out there.                |
| 38:31      | I mean, doesn't like every OmniFocus AppleScript at some point go back to Curt Clifton.               |
| 38:37      | I mean, he's like the original source. And the thing is, so Rose made this cool script and             |
| 38:44      | the way you trigger it once you install it is you just go and you can do it from the sharing menu      |
| 38:49      | on the iOS device or you can do it from the scripting menu right on the Mac and the menu bar.          |
| 38:53      | And like one thing that it doesn't do is it doesn't give you a URL link back to the original           |
| 39:02      | task, you know, when I was using, I've been using Rose's script. I'm like, you know,                   |
| 39:07      | it'd be really handy to me if I could go back and look at that original one because maybe              |
| 39:10      | there was something in the notes or something. So I'm going to add some to this to give me a URL       |
| 39:17      | callback. I'm pretty sure that wouldn't be that difficult. No, and there is even a line in there,      |
| 39:22      | David, line 24 URL from string, that if you just remove the dot open at the end, that's giving you     |
| 39:30      | the URL of the currently the newly created task. So instead of what you want to do is you want to      |
| 39:36      | you just move it up and add it to the to the to the dupe task, zero, probably. So yeah, so you         |
| 39:45      | it's basically done. I just have to move a line of code and yeah, and get the ID from from another     |
| 39:51      | one. But that's what I love about this is like, Hey, here's a new feature in the app, but I want       |
| 39:57      | to tweak it a little bit for me. And with just a little bit of knowledge, it's really not that hard.   |
| 40:03      | And, and I, you know, an app where it can build its own features, I mean, for users,                   |
| 40:11      | who doesn't want that, right? Especially if you're listening to the automators podcast.                |
| 40:15      | That's one of the things that, you know, will will keep me in OmniFocus for a very long time.          |
| 40:19      | The fact that I can build my own features and make it work exactly the way I need for it.              |
| 40:23      | I'm very fortunate in the data model works for me. And I understand there are some people for whom,    |
| 40:28      | you know, the data model, you know, doesn't necessarily do what they need. I'm very fortunate          |
| 40:32      | it does. And I can add all of these features and I can automate getting a lot of stuff into            |
| 40:36      |OmniFocusas well, which is a double-edged sword. Because it means I suddenly have an                  |
| 40:41      | awful lot of tasks in my in my forecast. Task lists or infinite time is not just remember that.          |
| 40:47      | Exactly. But this is, this is the beauty of what they've done, right? So because Omni Group has        |
| 40:55      | been so particular with allowing automation and allowing this stuff and setting up these whole         |
| 41:02      | systems, if it doesn't do what you need it to do in a very specific scenario, you can add it.          |
| 41:09      | Like this, that's just the whole beauty of this. Like this is changing the topic here                  |
| 41:14      | slightly. But this goes back to one of the early scripts that I wrote had to do with updating the      |
| 41:21      | review dates on projects. Because it still baffles me that they don't have like a scheduled review     |
| 41:27      | time in OmniFocus. Like I want to do my weekly review on Friday mornings. Like why can I not           |
| 41:34      | review all of my weekly reviewed projects on Friday mornings? Like that to me doesn't make             |
| 41:39      | sense. I understand what they're trying to do and they're like how their review structure works.       |
| 41:44      | But that never made sense to me, which is why I wrote a script for updating those review dates,        |
| 41:49      | because I felt like that was a feature that I wanted. So I just wrote a script that would              |
| 41:54      | change those review dates so that the review projects would show up when they're supposed to.          |
| 41:58      | If I do a review on Fridays, and then I do a month review on the first of the month and do             |
| 42:04      | an annual review, like it can change those review dates to when it should happen. So like that type    |
| 42:09      | of change and adding that type of feature is completely possible, which is part of what I              |
| 42:14      | love about OmniFocus. I wish I was talking to you guys. I kind of wish I was using it for absolutely   |
| 42:21      | everything at the moment, but I know I shouldn't do that for me. So it's a little disheartening in     |
| 42:27      | that sense. But it's a thing I absolutely love about the tool, which is why whenever I originally      |
| 42:32      | decided I need a tool for managing like templated projects and stuff, like it's a no brainer. Like     |
| 42:37      | this is the exact tool that I felt I should be using for it. Yeah. Yeah. And I have to say,            |
| 42:43      | I've been using your script. You put it out in middle of January-ish. And I immediately went,          |
| 42:51      | yes, yes, this is one that I've needed because especially thanks to a certain global pandemic          |
| 42:57      | last year, I got way off base with all my reviews. And I thought, you know what, I just need,          |
| 43:02      | I need to be able to reset it, but I don't want to have to go back to my Mac to reset it.              |
| 43:06      | And I was sitting there curled up in a pile of blankets on the sofa, bench watching castle             |
| 43:10      | going, oh wait, yeah, I can actually just download this and install it right here on my iPad without   |
| 43:16      | having to move. I could have installed it on my iPhone. And that's one of the things that makes,       |
| 43:21      | that for me makes the scripting so much better as well. The fact that it does work                     |
| 43:26      | on my iPhone and my iPad as well as my Mac, because previously I was running all sorts of              |
| 43:32      | hacks and tricks to try and get stuff to run automatically on my Mac when things happen.               |
| 43:36      | So Zapier would send something off to OmniFocus usually via email. And then I had it run a             |
| 43:44      | [[Keyboard Maestro]] macro to sync OmniFocus on my Mac. So it would ping the [[Keyboard Maestro]] URL,         |
| 43:52      | which would then run the AppleScript in OmniFocus to tell OmniFocus to sync.                          |
| 43:57      | And then it would sleep for five minutes. And then it would ping another keyboard                      |
| 44:00      | maestro macro URL that would say, hey, the sync's finished. Now run the past the inbox task script,    |
| 44:08      | which was your original AppleScript, Joe, that really got me interested in doing a lot of this        |
| 44:13      | stuff with OmniFocus. But it was just so fragile. And sometimes the sync wouldn't finish or sometimes  |
| 44:20      | my Mac would just be offline and stuff like that. And then I'd open up my inbox on my iPad and go,     |
| 44:25      | why are these things in the wrong place? And I can't fix it on my iPhone. And now I can just           |
| 44:30      | fix it on all the platforms because I can run the script anywhere.                                     |
| 44:33      | Yeah. And that's the advantage of the multi platform scripting language is all the                     |
| 44:36      | Rube Goldberg stuff just goes out the window. You don't need any of that anymore.                      |
| 44:41      | Yeah, exactly. And it just means that things are more stable. And I've yet to 100% decide how I        |
| 44:47      | want things to be automatically parsed for my inbox because I have the script and it would be          |
| 44:53      | great if it ran automatically after stuff was put into my inbox. And maybe one day that will be        |
| 44:58      | an element of OmniFocus for the web having a web based API to run all this stuff on. I don't know      |
| 45:04      | that's pure speculation. That will be wonderful if I could do that. Just FYI, I can if you're          |
| 45:08      | listening. But for the time being, it's great because what happens is it does that and then            |
| 45:15      | it pings me through push cut is what I'm using for this and says, hey, you know, open OmniFocus        |
| 45:21      | to run the script. And so I open OmniFocus and I run the script and then it's done.                    |
| 45:25      | And that's really not a bad solution because it means it works.                                        |
| 45:29      | I used to joke with some of the OmniFocus developers that they should add a feature                    |
| 45:34      | that if I defer a task three times, you know, I used to do a lot more task deferring than I            |
| 45:38      | do now. But if I defer it three times that it automatically just deletes it from my library.           |
| 45:44      | It's like, okay, you had three chances and you didn't do it. You're never going to do it. I'm          |
| 45:48      | deleting this. I could build that now. You could. You could just just save defer colon zero in the     |
| 45:55      | note of every single task and then don't defer it using the defer buttons, defer it using a script,    |
| 46:01      | and then it will automatically increment that number. And if it goes, hey, three, then I don't         |
| 46:06      | know, maybe it forces you to a web page of a bomb exploding and deletes the task or something.         |
| 46:11      | Yeah, exactly.                                                                                         |
| 46:12      | This episode of Automators is brought to you by PDFpen from our friends at Smile.                      |
| 46:18      | Power through PDFs with the Mac community's favourite PDF editor,                                       |
| 46:22      | so you can fall in love with work again. With PDFpen, you can show PDFs who's boss,                    |
| 46:27      | edit any PDF with a click of a button, fix typos and add text as easily as you would in Word.          |
| 46:33      | Breathe new life into paper documents with the magic of OCR, turn images of handwritten and            |
| 46:38      | printed text into content you can search, copy and edit. Protect your content,                         |
| 46:43      | ensure your documents are safe to share through passive protection, metadata removal, and true         |
| 46:48      | redaction. Look like a pro. Impress your boss, your colleagues and your clients with efficient,        |
| 46:53      | secure and 100% digital workflows. Fill out, sign and copy edit like it's 2021.                        |
| 47:00      | I love PDFpen Pro. My accountant recently sent me a whole bunch of documents through to sign.          |
| 47:04      | It was about 30 pages of documents and they said, please sign, but not with typing.                    |
| 47:10      | Well, of course, as you and I know, that's not necessarily going to mean printed out and sign          |
| 47:16      | it, though I think that is what they intended. Instead, I use PDFs magic signature function            |
| 47:21      | where I've saved my signature and then I just dragged and dropped it into place on every single        |
| 47:25      | document. Perfect. And my accountant was impressed that I had the documents back in an hour instead    |
| 47:31      | of the three days they were expecting, of which I'm sure two days would have been sourcing             |
| 47:35      | ink cartridges for my printer. PDFpen and PDFpen Pro were of PDFpen for iPhone and iPhone for          |
| 47:41      | seamless editing across devices with cloud services such as iCloud [[Dropbox]], Google Drive,              |
| 47:46      | OneDrive, and more. Learn more about PDFpen and PDFpen Pro at smilesoftware.com/podcast.         |
| 47:53      | So when I first heard this was coming, one of my failures was I didn't think big enough. To me,        |
| 48:00      | I was thinking this is going to be great to add little features to the application that I would        |
| 48:06      | like to solve that nobody else would, just to make it work better for me. But what I didn't            |
| 48:11      | realise is that the community was going to go nuts. And now there is a whole subculture of             |
| 48:17      | people creating [[Kanban]] style planning in OmniFocus. And I know there's one script out,                 |
| 48:26      | but Joe, I know you've also thrown your hat in the ring on this stuff.                                 |
| 48:28      | Yeah. Yeah. So this is, you know, we were just talking about, as we record this, it's not out          |
| 48:34      | yet, but it will be by the time this releases. But I was trying to, well, let me back up,              |
| 48:41      | what I'm doing in OmniFocus is managing pieces of content that I'm releasing. So a content             |
| 48:46      | calendar of sorts. It's very common for folks in the content creation world to run a [[Kanban]] of         |
| 48:52      | some sort, because they want to know where each piece of content is in the process. Have I started     |
| 48:56      | this yet? You know, is it just waiting for publish? Is it waiting for, you know, where's it at in the  |
| 49:01      | process? And I've not ever been one that uses a [[Kanban]], but I've seen it used a lot. And I know        |
| 49:10      | that, you know, given the simplicity of what I'm doing in OmniFocus, I call it simple, some may        |
| 49:16      | call it complicated, who knows. But I wanted some form of a way to see which pieces of article,        |
| 49:22      | like which content pieces that I'm planning over the next month. Have I started? Which ones are        |
| 49:28      | in progress right now? And which ones are stalled? Like kind of what am I waiting for? Maybe I'm       |
| 49:33      | waiting for them to be published. Where are these things at in the process? That way I know            |
| 49:38      | which ones I should be working on each day. Well, I was digging around on the Omni Automation site     |
| 49:44      | we were talking about earlier. And there is a set of scripts there for running a [[Kanban]] setup,         |
| 49:53      | which I thought, great. So I downloaded that. And I quickly realised that runs on tasks. But           |
| 49:58      | I'm operating on projects, which is completely different. And it doesn't really work that way.         |
| 50:03      | It's like, I could set up like a meta project, like a pseudo project, and then manage the task         |
| 50:08      | there. But then that doesn't change where the projects lie. Like it just gets messy.                   |
| 50:12      | Yeah, it sounds kind of flimsy that it's going to break quickly.                                       |
| 50:16      | Totally. So I took those scripts. I altered all of them to where they operate on a selected            |
| 50:25      | project and not a selected task. So then they do change the tags and such. Essentially, the way        |
| 50:32      | that stuff works is it gives you a perspective that you can then see list form, like grouped lists     |
| 50:41      | of which projects are in the queue, which ones are you currently working on, which ones you're         |
| 50:47      | waiting for, which ones have you completed, like those are kind of the main categories that it         |
| 50:52      | operates off of. So that's how I've tweaked it. I set up a perspective that shows me that [[Kanban]]       |
| 50:58      | view. And then I've got the scripts that does the adding removing and such of the tags appropriately   |
| 51:05      | to move projects between those different categories. But again, I couldn't find anything that had      |
| 51:12      | this all operating on a project level in my head. That was exactly what other people would want.       |
| 51:18      | But that's how this stuff goes, right? What I want is obviously what you want, right? So then          |
| 51:23      | why didn't you do it my way? It doesn't really work that way. So of course, I took the ones that       |
| 51:29      | were on the site. I tweaked them. I'm in the process of publishing those. But yeah, it's been          |
| 51:36      | kind of nice. The more I've used that, the more I realised that, yeah, this is something I probably    |
| 51:40      | should have done a long time ago. But here we are. Sometimes it just takes a while to get there.       |
| 51:46      | And that's the thing, isn't it? With almost all systems, especially ones where automation is           |
| 51:52      | involved, it takes a little while and multiple iterations to get you to the point where you're         |
| 51:56      | there going, yes, of course, this is the solution. Of course, I should be doing it this way. This      |
| 52:00      | is the way to do it. Why is everybody else not doing it this way? And the answer, of course, is        |
| 52:04      | it's personal. You have to make it work for you. And that's what I really love about this,             |
| 52:09      | because I've been trying out the [[Kanban]] method that I believe the forum user handle of the             |
| 52:17      | person who created this is Vishay, for the original one. And I'm looking forward to seeing             |
| 52:24      | yours, because that's one of the things I realised. A lot of what I'm doing, it's not                  |
| 52:29      | where an individual task is. And tasks are relatively unimportant, they're very small                  |
| 52:35      | stepping stones to get me from A to B. It's where is this in the grand scheme of this folder           |
| 52:41      | for things, because the folder is the area that I need to be focusing on right now. And                |
| 52:46      | I need to know what is in progress at work. But I don't need to know very specifically                 |
| 52:50      | that I am in the process of writing this tiny little part here for this really big project.            |
| 52:55      | I need to know that in general, I've done something to move the needle on that project,                |
| 52:58      | and I've got them all rolling. So yeah, that's something I'm going to be probably borrowing            |
| 53:05      | from you. And I will almost certainly end up using some artistic license to modify it to suit          |
| 53:11      | my exact needs. That's the beauty of this. That is the beauty of this.                                 |
| 53:16      | And also the underlying idea behind this is really just tag-based sort. It's not that hard,            |
| 53:22      | except to do that manually would defeat the purpose. It would be so hard to do this manually.          |
| 53:27      | You have to have automation in order to make this an effective tool. And you've got the                |
| 53:33      | tools to make this automation. So I love that this stuff is going on. And it hasn't been out           |
| 53:41      | that long now, has it been out four or five months now? I guess we're kind of behind,                  |
| 53:45      | but we wanted to cover this on the show for a while. But I wanted to wait until the library            |
| 53:49      | got big enough that people who don't want a script have a lot to choose from. And man,                 |
| 53:53      | you do right now, you do have a lot to choose from. Yeah, because if you look at this [[Kanban]]           |
| 53:59      | setup, it's very similar to Rose, your script of the complete and await reply. Maybe I should          |
| 54:05      | call it Kurt's script. I don't know, between the two of you. I would credit it to Kurt. I took         |
| 54:09      | all of his logic and I just translated it into JavaScript. So really, it's all his.                    |
| 54:13      | But it's very similar, right? So you have a task that you have, in this case, a project that you       |
| 54:18      | have selected. And all it's doing is removing a tag and putting another one on it. That's it.          |
| 54:25      | And then you have a perspective or a view that shows you that view, you know, you can set it up        |
| 54:31      | to where you have individual, you know, you could open multiple windows and have it look like columns  |
| 54:36      | if you want. I think there's a blog post out I've seen that that has kind of that view. Mine           |
| 54:40      | doesn't really work that way. You could do it. Like you could set up individual windows and get it     |
| 54:45      | to show you that view. But I don't need it there. That's totally fine with me. But                     |
| 54:52      | it's essentially the same thing. All it's doing is removing a tag and adding a new one. But when       |
| 54:56      | you put it into a script where it just does those two steps, remove tag, add tag on that project,      |
| 55:03      | it removes all of the resistance to using the whole setup because that's that's a lot of what          |
| 55:09      | got me into scripting, like from a philosophical stance, because removing the resistance to            |
| 55:15      | doing that small action, it may take me a while. I may never actually make up the time it took me      |
| 55:20      | to put like to get that script running. But it gives me something that I will actually use.            |
| 55:28      | And then it helps me see things and understand things at a level that I couldn't see or understand     |
| 55:32      | previously. Thus, I'm better off as a net result. So not to wax philosophical, but this is all         |
| 55:41      | something that I think is super important for me anyway, because it does help me visualise             |
| 55:47      | things in a different way that then allows me to act on them in the long term, which is exactly        |
| 55:52      | what I wanted. And the other thing it does is it never makes a mistake. You don't accidentally         |
| 55:58      | delete the wrong tag or insert the wrong tag. It's reliably repeatable, which is what you get          |
| 56:06      | from automation. Yeah, exactly. And that's one of the things that I love. Because ever since           |
| 56:12      | tagging became a thing in OmniFocus, of course, you can have multiple tags on an item. But if I'm      |
| 56:18      | moving this forward, then I need it to get this tag when that tag is removed. And if I'm moving        |
| 56:23      | backward, then I need to go the other way. And that's something that is 100% going to happen           |
| 56:28      | with a script. Assuming, of course, that I program the script correctly, but that's entirely on me.    |
| 56:34      | So Joe, what this whole thing started with Rose, at least, is your auto parsing script.                |
| 56:40      | Explain what that is and how you made the transition from [[AppleScript]] to Omni JavaScript.             |
| 56:47      | Sure. So at the time, when that came about, I was creating someday maybe tasks. I had a whole          |
| 56:57      | bunch of projects in OmniFocus for someday maybe lists. And I was lazy. And I wanted to be able to     |
| 57:07      | put things into those individual lists without having to manually type in what project it goes         |
| 57:14      | to once it was in the OmniFocus inbox. And the way that I was putting things into                      |
| 57:20      | the OmniFocus inbox was via [[Drafts]], because [[Drafts]] is phenomenal and everybody in the world should     |
| 57:25      | be using it. And I wanted a way to pre format the task title in [[Drafts]], send it to the inbox,          |
| 57:37      | and let OmniFocus automatically put it where it belongs. And my head, that was pretty simple.          |
| 57:43      | But I couldn't find any way to do that. So I did some digging, and I thought, I'll create some form    |
| 57:50      | of a syntax. You know, this is a thing I think [[Todoist]] was doing this for a while, maybe they          |
| 57:55      | still do it, where you could create a syntax of things that go into that title, and then it just       |
| 58:00      | knew what was there and could parse it into which one is the project, which one is the context,        |
| 58:05      | because this was pre tags, what's the deferred eight, all the things. And I discovered in the          |
| 58:12      | process of building that script that OmniFocus had a piece of code in their AppleScripting            |
| 58:22      | dictionary that did all of that parsing for you. They already had a syntax built. All it needed        |
| 58:29      | was a wrapper around it that would tell it which tasks to run that parse process on. So I kind of      |
| 58:38      | put some wrappers around that, and then set it all up with, and I'm trying to remember how I did it    |
| 58:43      | at the time, I think I was using [[Hazel]] to where it would know when my OmniFocus database had changed,  |
| 58:52      | and it would run that script at any point when that database had changed, which was just awesome       |
| 58:57      | because it meant I could just send it in there. OmniFocus would sync because it got a new inbox        |
| 59:02      | task. And then that meant that the database modified date would change. So then [[Hazel]] would run the    |
| 59:07      | rule, which would run the AppleScript, which then parsed the inbox item, and then my someday          |
| 59:14      | maybes would show up where they were supposed to be without me having to do anything other than        |
| 59:20      | create the someday maybe list in [[Drafts]], action it off with the correct someday maybe list,            |
| 59:26      | and it just magically showed up where it was supposed to be in OmniFocus with all the correct          |
| 59:31      | contexts, projects, all the things. Absolutely loved that. And I think that has been something         |
| 59:38      | a lot of people have used based on the replies and the shares and stuff I see via Twitter and          |
| 59:44      | email and stuff. It's a pretty common script that people love. I mean, obviously, Rose,                |
| 59:48      | I know you've gotten into it as well. And it made sense to me that that would then be translated       |
| 59:56      | into this Omni Automation system. I was a little concerned whenever I embarked on transferring         |
| 01:00:06   | it over that that little one liner of doing the parse text wouldn't exist in the JavaScript            |
| 01:00:13   | side of things. So I was a little worried, but thankfully, they did bring it over. So that             |
| 01:00:19   | meant that all I had to do was create the same logic in JavaScript. The only thing I                   |
| 01:00:26   | have found with doing that transferring is I don't know that there's a way to just automatically       |
| 01:00:32   | run it on iOS or iPadOS. I don't think I've found a way to do that. I thought I was close              |
| 01:00:39   | at one point with a home automation via shortcuts where you could potentially run it at a certain      |
| 01:00:44   | time during the day, but it's messy as far as the security goes and actually actioning it off          |
| 01:00:50   | because OmniFocus has to be open and it's not quite there for that side of it, but it is possible      |
| 01:00:57   | to have that script on iOS or iPadOS and then just manually run that. So if you load up your           |
| 01:01:03   | inbox with a bunch of stuff, you can hit it and it just auto parses things out. So super glad          |
| 01:01:08   | that one's been able to come over. But that is one that, again, I'm not actively using it today        |
| 01:01:14   | because I'm not really using the inbox in OmniFocus, but I know that a lot of people absolutely love   |
| 01:01:19   | that thing. Yeah. So here is a fun little Easter egg piece of trivia for both of you and of course     |
| 01:01:26   | everybody listening. I actually requested the transport text early on because I was originally         |
| 01:01:31   | using your script Joe and I wanted to be able to use it in JavaScript. And so I fired off an email     |
| 01:01:36   | and they go back to me and said, yeah, sure, that seems like a reasonable thing to add.                |
| 01:01:41   | And they added it. So, you know, things have come a full circle.                                       |
| 01:01:44   | That's really cool. Good call. Well, I'm glad you did that because that's a cool,                      |
| 01:01:49   | I mean, it's a simple one-liner and it's easy for them to add. So I'm glad they did it.                |
| 01:01:54   | Yes. Yeah, I am too. And yeah, a couple of months ago, actually probably about a year ago              |
| 01:02:02   | or coming up on a year ago, just as I was starting moving back to the UK, I realised that there        |
| 01:02:07   | were a lot of things that I needed to do. And I was getting stuff just sort of added by through        |
| 01:02:15   | the share sheet, but specifically from the IKEA website or local supermarkets or hardware stores       |
| 01:02:21   | and things like that. And so what I did is I built my own version of your task auto parser,            |
| 01:02:28   | which the first thing it does is it checks if the task name starts with the dash dash and then if      |
| 01:02:32   | it does, then it does the new task by parsing transport text. That's the one-liner pretty much.        |
| 01:02:38   | And then it deletes the original task and moves on from there. But then I emptied it up a little       |
| 01:02:44   | bit. And I did this impossibly, the least efficient method possible, because to start with, I was      |
| 01:02:51   | just doing, I'm buying a lot of things from IKEA or I'm going to go to IKEA and look at a lot of       |
| 01:02:55   | things. So I'm just going to add IKEA. And then there was Wilco and Argos and B&M. And things          |
| 01:03:01   | just kind of spiraled a little bit out of control. So I probably ought to go back and tidy this up     |
| 01:03:06   | and make it prettier and smarter. But I'm going to put a link in the show notes to my version of       |
| 01:03:11   | this, because I think it's a very good example of what you can do, even if you're not really           |
| 01:03:16   | thinking about how to script. Because I've got a very simple, if the task name includes dash and       |
| 01:03:21   | then space IKEA in all capitals, and the task note includes the IKEA.com website, then find the IKEA   |
| 01:03:29   | tag and add the IKEA tag to the task, and then take the dash IKEA out of the name of the task,         |
| 01:03:35   | because I don't need the name of the store in it if I've got a tag. And I do pretty much the           |
| 01:03:40   | exact same thing for several other places. I also have two supermarkets in there. So I add an extra    |
| 01:03:46   | tag for the supermarkets, just a generic supermarket tag. And I found that this really helps with      |
| 01:03:54   | clearing up my inbox in general. And I also at some point was having an issue with two spaces.         |
| 01:04:00   | So there's just a really simple thing at the bottom, which is task dot name equals task dot            |
| 01:04:03   | name dot replace quotation mark two spaces close quotation mark comma quotation mark space,            |
| 01:04:10   | quotation mark, and then dot trim, which removes extra spaces from the beginning of the end. So        |
| 01:04:16   | it's replacing two spaces with a single space in the task name, because I apparently had an issue      |
| 01:04:21   | with that at some point, I'm not sure where it was coming from. But I just thought I'll just tidy      |
| 01:04:26   | things up at the same time, which this runs over all of the tasks in my inbox. So if there's two       |
| 01:04:31   | spaces in the name of any of the tasks in my inbox, they get cleaned up as well at the same            |
| 01:04:35   | time as it goes through and it handles stuff that I need to buy and, you know, things like that.       |
| 01:04:40   | And it honestly just worked really, really well for me. So I'm very pleased that you inspired me       |
| 01:04:46   | there, Joe. Yeah, it's a really cool way to do that, because I know a lot of folks have used           |
| 01:04:51   | the email in process to yeah, and they'll tweak the subject line that's going into OmniFocus to        |
| 01:04:59   | include the syntax, but they'll do that with automations via Zapier, or if this than that,             |
| 01:05:06   | with JIRA tasks and such, like they'll use it in that form to automatically get things into            |
| 01:05:12   | their OmniFocus database and put where they belong. So I mean, sky's limit, right? There's tons of     |
| 01:05:17   | ways that you can use that thing. Yeah, I don't use this script, but I was just thinking if you        |
| 01:05:22   | wanted to automatically trigger it, and you had [[Keyboard Maestro]], I don't see why you couldn't         |
| 01:05:26   | set a time trigger and [[Keyboard Maestro]] to run the menu command. Yeah, that's actually what I          |
| 01:05:31   | have running now. I just have a time trigger in [[Keyboard Maestro]], and I think it's running just        |
| 01:05:36   | every hour or so. And then if I go through and I'm planning another shopping spree in IKEA,            |
| 01:05:43   | I moved in about six months ago, so it's about time to start figuring out what things aren't           |
| 01:05:48   | working and go shopping again, at least doing a cook and collect. So I've been adding a lot of         |
| 01:05:53   | stuff from IKEA again. But I go through and I manually run it if I've just added a ton of tasks,       |
| 01:06:00   | but other than that, it just gets cleaned up automatically, and it's great. I love it.                 |
| 01:06:04   | Yeah, but so the beauty of this script, though, is you can, no matter how you put tasks in,            |
| 01:06:09   | [[Drafts]] is a good way, you can do all the details. You want due dates, notes,                           |
| 01:06:17   | and the new version supports tags as opposed to context, so it's great.                                |
| 01:06:23   | Yes, yeah. And I should note for anybody listening who's there going,                                  |
| 01:06:27   | wait, is this Toss Paper? This is not the same format or syntax as Toss Paper. Transport text          |
| 01:06:32   | predates Toss Paper by quite a lot, at least as far as OmniFocus is concerned. I think Toss Paper      |
| 01:06:39   | might have existed back then, but OmniFocus wasn't using it, that's for sure. So it is different,      |
| 01:06:44   | but it's relatively easy to get a handle on, and I pretty much just use it for anything added by       |
| 01:06:51   | a Zapier, and then, of course, parsing out stores that I'm going to buy stuff from.                    |
| 01:06:59   | My only gripe with this is that the default for dates is a due date. If you only have one day          |
| 01:07:04   | that puts a due date in, and I think that I'm on the anti-due date campaign, so I wish that it         |
| 01:07:11   | deferred to, that it defaulted to a single date being a deferred date as opposed to a due date,        |
| 01:07:16   | but I think that's actually in the transport algorithm.                                                |
| 01:07:20   | Yeah, yeah, that's the transport algorithm, but David, you could modify it, and you could say,         |
| 01:07:25   | okay, if there is only one date, so when you create the task by parsing transport text,                |
| 01:07:33   | you could say, hey, if the due date is set on the new task, then set the deferred date to the          |
| 01:07:39   | due date and the due date to nothing, and then be done with it.                                        |
| 01:07:43   | Yeah, and you can move that.                                                                           |
| 01:07:45   | So you could do that with Omni-Automation, that's doable.                                              |
| 01:07:49   | I'm trying to remember, Rose, maybe you know this, because it's been a while since I've                |
| 01:07:54   | like done individual testing on the individual pieces in the transport text piece, but if you          |
| 01:07:59   | have, because it uses the, I'm drawing a blank, hashtag pound sign for each of the due date,           |
| 01:08:06   | or the deferred date and the due date, I think if you leave the first one blank                        |
| 01:08:12   | and put a date on the second one, it might, but I'm not 100% on that.                                  |
| 01:08:18   | If you put two of them in there, I think it leaves the due date blank, but I'm not certain,            |
| 01:08:22   | I'd have to test that to be sure.                                                                      |
| 01:08:24   | Yeah, I am not certain either, but I do have a link to your very original blog post in the             |
| 01:08:29   | show notes, which I am just trying to open up, which you had the original AppleScript one,             |
| 01:08:35   | which I believe was in 2015, yeah, and you had a little link somewhere as to,                          |
| 01:08:45   | yeah, and here we go, and it's got something.                                                          |
| 01:08:48   | I know that the new article, I've got that syntax reiterated on that, so the most recent               |
| 01:08:53   | article I wrote on it, when it moved over to iOS, I have that there, because I know,                   |
| 01:08:57   | like what you're saying, David, if you have that hashtag dates and there's only one of those,          |
| 01:09:03   | it defaults it to a due date.                                                                          |
| 01:09:05   | If you have two of them, the first date is the deferred date, the second one is the due date,          |
| 01:09:09   | but if I recall correctly, I think you can do that hashtag date and then do a second hashtag           |
| 01:09:15   | and leave it blank, I think that gets you there, but I'm not certain I'd have to test it.              |
| 01:09:21   | Yeah, I don't use the script, so it's not that big of a deal for me, but it is impressive.             |
| 01:09:28   | I guess I really should start thinking about using it, because I add a lot of tasks via [[Drafts]],        |
| 01:09:33   | but usually it's like kind of a watch thing, you know, it's like I just yell at my wrist for a         |
| 01:09:38   | minute and then it gets moved to OmniFocus later.                                                      |
| 01:09:42   | Sure.                                                                                                  |
| 01:09:42   | This episode of The Automators is brought to you by HelloFresh.                                        |
| 01:09:48   | Go to hellofresh.com/automators10 for 10 free meals, including free shipping.                    |
| 01:09:55   | With HelloFresh, you get fresh pre-measured ingredients and mouthwater and seasonal recipes            |
| 01:10:00   | delivered right to your door.                                                                          |
| 01:10:02   | They cut out the stressful meal planning and grocery store trips, so you can enjoy cooking             |
| 01:10:07   | and get dinner on the table in about 30 minutes or less.                                               |
| 01:10:09   | And their easy eats offering has tons of quick and easy meal solutions, like 10 to 20 minute            |
| 01:10:15   | meals, low prep recipes, and quick breakfasts and lunch.                                               |
| 01:10:19   | All of them are perfect if you have a busy schedule.                                                   |
| 01:10:22   | I get a lot of joy out of cooking for my family, but the shopping part isn't my thing, and the         |
| 01:10:27   | problem is I get in the habit of cooking the same things over and over again.                          |
| 01:10:31   | HelloFresh has changed that.                                                                           |
| 01:10:33   | I can pick out interesting recipes and I get all the ingredients delivered right to my door.           |
| 01:10:37   | I cook alone, I put on a cool podcast or an audio book, and I make dinner, and I really enjoy doing    |
| 01:10:43   | it, and everybody digs the food I'm making with HelloFresh because it's different, interesting,        |
| 01:10:48   | and very tasteful.                                                                                     |
| 01:10:50   | You can go for something traditional, like their Kraft Burger, which is delicious,                     |
| 01:10:55   | or something really interesting, like their Firecracker Meatballs or pork carnitas tacos.              |
| 01:11:00   | I like spicy recipes, and the HelloFresh spicy menus are all great.                                    |
| 01:11:05   | But don't take my word for it.                                                                         |
| 01:11:07   | Go to HelloFresh.com/Automators 10.                                                              |
| 01:11:10   | That's Automators with 1-0 at the end.                                                                 |
| 01:11:12   | And if you use that code, you get 10 free meals, including free shipping.                              |
| 01:11:16   | That's HelloFresh.com/Automators 1-0.                                                            |
| 01:11:20   | Code Automators 10 to get those 10 free meals, including free shipping.                                |
| 01:11:24   | HelloFresh is America's number one meal kit, and I am a believer.                                      |
| 01:11:28   | Our thanks go to HelloFresh for their support of the Automators and Olive Relay FM.                    |
| 01:11:35   | Okay, guys, so I probably got this wrong.                                                              |
| 01:11:38   | But if there's somebody listening that is not intimately knowledgeable with JavaScript,                |
| 01:11:43   | we should have probably covered this earlier in the episode.                                           |
| 01:11:45   | So if you're listening, congratulations.                                                               |
| 01:11:49   | Let's talk through kind of the mechanics for someone who doesn't want a script,                        |
| 01:11:53   | but wants to take advantage of this stuff.                                                             |
| 01:11:54   | And I think the first step is probably going to the Omni Automation website                            |
| 01:11:59   | to the plugin collection, and we'll have that in the show notes.                                       |
| 01:12:03   | It's a web page that you can go to on your Mac or your iOS devices,                                    |
| 01:12:07   | and there's a nice grid there of this growing list of automations                                      |
| 01:12:12   | that people like Joe and Rosemary have contributed along with a lot of other really smart people.      |
| 01:12:17   | Yeah, I would definitely say that's the place to start,                                                |
| 01:12:19   | because it's got a lot of good stuff here.                                                             |
| 01:12:22   | And if you're looking for something specific, then of course you can Google it,                        |
| 01:12:25   | and you'll probably stumble across somebody's website like Joe's.                                      |
| 01:12:28   | But I would say if you're looking for something,                                                       |
| 01:12:30   | and you just want to see what's possible, there's import Taskpaper document here.                     |
| 01:12:34   | There's iCal file for task.                                                                            |
| 01:12:37   | There's add todays forecast, which creates a new window or a tab on macOS                                |
| 01:12:43   | displaying the forecast for the current day, things like that.                                         |
| 01:12:45   | So there's a lot of different options here.                                                            |
| 01:12:47   | And so I would say that is a good place to get started.                                                |
| 01:12:50   | What about you, Joe?                                                                                   |
| 01:12:52   | Yeah, I know there's a ton on that.                                                                    |
| 01:12:55   | If you Google for things, you can find a lot of them as well.                                          |
| 01:12:59   | I've really enjoyed looking through what people are sharing                                            |
| 01:13:02   | or working through on their forums,                                                                    |
| 01:13:05   | because it's interesting to see what people are attempting to pull off.                                |
| 01:13:08   | Because personally, I find that kind of as an inspiration to figure out,                               |
| 01:13:12   | okay, well, what could I do?                                                                           |
| 01:13:14   | Like, oh, people are trying to do X, Y, and Z.                                                         |
| 01:13:17   | They're trying to, you know, activate a project based on the weather conditions.                       |
| 01:13:22   | Oh, I could probably do that.                                                                          |
| 01:13:24   | So there's like, there's all sorts of things that you could find                                       |
| 01:13:27   | and start to explore, but because people are sharing them on the forums                                |
| 01:13:33   | or like on the Omni-automation site,                                                                   |
| 01:13:35   | it makes it super simple to just grab something that somebody else has.                                |
| 01:13:38   | Just dump it into a file and you're done.                                                              |
| 01:13:40   | And some of the most basic ones are the most useful.                                                   |
| 01:13:44   | Like, they have one that will open a selected perspective in a separate tab,                           |
| 01:13:50   | which sounds dumb, but I mean, you can automate that process.                                          |
| 01:13:54   | If you want to set up, you know,                                                                       |
| 01:13:55   | I want to open OmniFocus just to work on my day job or whatever,                                       |
| 01:13:59   | you could use a script like that to automate that process.                                             |
| 01:14:02   | And just like Joe was saying earlier,                                                                  |
| 01:14:04   | every little bit of friction you remove makes it easier to get your work done.                         |
| 01:14:09   | That's like a very short script.                                                                       |
| 01:14:11   | I mean, there's a lot of stuff in here that anybody could download                                     |
| 01:14:16   | and fiddle with a little bit.                                                                          |
| 01:14:18   | Yeah, I mean, I created one.                                                                           |
| 01:14:20   | There's one here, copy, plain text, and delete.                                                        |
| 01:14:22   | Somebody asked, I believe it was in the Omni Group [[Slack]] channel                                        |
| 01:14:25   | for OmniFocus and other Omni application users.                                                        |
| 01:14:30   | They said, you know, I just want to be able to copy a task as plain text                               |
| 01:14:33   | and then delete it.                                                                                    |
| 01:14:34   | But of course copying defaults to copying Taskpaper, at least on iOS.                                 |
| 01:14:38   | And they wanted very specifically plain text                                                           |
| 01:14:40   | so they could select a list of tasks, just have the name,                                              |
| 01:14:43   | and then delete them when they were done.                                                              |
| 01:14:45   | And so I created a short little plug-in,                                                               |
| 01:14:49   | which I can't remember how many lines it is.                                                           |
| 01:14:52   | I think it's 26 lines in total, and a good 10 of those lines                                           |
| 01:14:56   | are just the metadata at the top.                                                                      |
| 01:14:58   | So in reality, the script's, you know, about 15 lines.                                                 |
| 01:15:02   | And it just, you know, sets the pace board to a list of the names of the tasks                         |
| 01:15:07   | and then deletes the tasks, and that's it.                                                             |
| 01:15:09   | And there's all sorts of great stuff in here.                                                          |
| 01:15:13   | And to install these, I think it's the easiest on the Mac,                                             |
| 01:15:17   | but you can also do it on iPad and iPhone.                                                             |
| 01:15:19   | You just download the plug-in, which is essentially a text file                                        |
| 01:15:23   | that says OmniFocus.js at the end.                                                                     |
| 01:15:27   | And then in the OmniFocus application with the recent version,                                         |
| 01:15:33   | they've added a new menu option called, I believe, Automation.                                         |
| 01:15:37   | And it windows up, and I can't even find OmniFocus right now.                                          |
| 01:15:40   | Yeah, yeah.                                                                                            |
| 01:15:41   | I mean, actually, if, so it depends on how the plug-in is created,                                     |
| 01:15:44   | and Joe touched on this earlier, didn't you, Joe, with the extension.                                  |
| 01:15:47   | So if it says it's a .omnifocusjs, then if you open it,                                                |
| 01:15:51   | it should just open an OmniFocus. .omnioutlinerjs should open an OmniOutliner,                          |
| 01:15:55   | and I think people get the idea.                                                                       |
| 01:15:57   | If it's a .omnijs, though, then it's, you're going to have to tell it                                   |
| 01:16:01   | what application to open that in.                                                                      |
| 01:16:03   | But there are, there should be a folder in iCloud.                                                     |
| 01:16:07   | For example, OmniFocus, as we've been talking about today,                                             |
| 01:16:10   | there should be a plug-ins folder inside of that,                                                      |
| 01:16:12   | where you just stick the file, and that's, you know, that's where it goes.                             |
| 01:16:16   | If you're dealing with an omnijs file, and, you know,                                                  |
| 01:16:20   | it's not opening the right place, you can just put it in the folder.                                   |
| 01:16:23   | And then to run these, you don't need to do anything.                                                  |
| 01:16:26   | There's an Automation window on Mac, menu on macOS,                                                    |
| 01:16:31   | and on iOS, you just use the share sheet.                                                              |
| 01:16:34   | And so if, for example, you, you want to write it in your inbox,                                       |
| 01:16:38   | then you, you know, you just tap on the share sheet from your inbox,                                   |
| 01:16:41   | and then you scroll down, and underneath copy, there's, there's a whole, you know,                     |
| 01:16:46   | section where I've got, at a folder for each month, a signed priority,                                 |
| 01:16:50   | you know, some different [[Kanban]] ones, because I've been playing with that                              |
| 01:16:52   | complete in a wait reply, versus my inbox tasks, packing lists for a trip,                             |
| 01:16:57   | and things like that, update reviews, thank you, Joe.                                                  |
| 01:17:00   | Or sorts of things.                                                                                    |
| 01:17:01   | And so that, that's really how you get started.                                                        |
| 01:17:04   | There's also like the Automation menu on iOS too, like bottom right on that.                           |
| 01:17:09   | Yeah, but that's something you need to activate.                                                       |
| 01:17:11   | That's not on by default for everybody.                                                                |
| 01:17:13   | Sure.                                                                                                  |
| 01:17:14   | This is, this is where it gets like, when you get deep into this,                                      |
| 01:17:17   | it's like, wait, which are these are the default settings?                                             |
| 01:17:19   | I don't remember what I've customised anymore.                                                         |
| 01:17:21   | Yeah.                                                                                                  |
| 01:17:22   | So people are looking for development mode for OmniFocus for iOS.                                      |
| 01:17:26   | Then if they tap into the settings and then scroll down,                                               |
| 01:17:30   | there should be an automation section in the menu.                                                     |
| 01:17:32   | And there's a configure plugins option where you should be able to see plugins                         |
| 01:17:36   | in iCloud Drive.                                                                                       |
| 01:17:37   | And you can also add linked folders, things like that.                                                 |
| 01:17:40   | But if you toggle on developer mode, that's when you'll get that,                                      |
| 01:17:44   | that menu in, in the bottom bar.                                                                       |
| 01:17:46   | It's, it's a square with a forward pointing greater than sign,                                         |
| 01:17:51   | and then underscore, and that's indicating the terminal.                                               |
| 01:17:54   | And then you can configure plugins here.                                                               |
| 01:17:57   | You've got the API reference and an automation console where you can                                   |
| 01:18:00   | theoretically just type, you know, code and have it do stuff.                                          |
| 01:18:05   | Personally, I would recommend that people create a file and type their code                            |
| 01:18:10   | in the file and run, and have, and run that inside of OmniFocus.                                       |
| 01:18:14   | A, because it's very easy to split screen it.                                                          |
| 01:18:16   | And B, because once you type the code into the console and then execute it,                            |
| 01:18:20   | well, then you have to copy and paste it back to get it back and edit it.                              |
| 01:18:24   | Because, you know, you, you've sent it, you've run the code.                                           |
| 01:18:27   | And that was definitely something that took me a little bit to wrap my head                            |
| 01:18:30   | around to start with the writing code in the console is not necessarily                                |
| 01:18:33   | great if you, you know, want to script.                                                                |
| 01:18:36   | It's great for testing whether or not a line will give you what you're expecting,                      |
| 01:18:40   | but not so great necessarily for doing all the day to day actual running of scripts.                   |
| 01:18:44   | And they also have, once you activate developer mode,                                                  |
| 01:18:47   | they can promote a link to their API reference.                                                        |
| 01:18:50   | So if you want to like dig into the weeds or if you're having trouble                                  |
| 01:18:53   | figuring out, well, how do I deal with a flag?                                                         |
| 01:18:55   | You know, you can go in there and they've got the whole syntax laid out for you.                       |
| 01:18:59   | Yeah.                                                                                                  |
| 01:19:00   | And when we say API reference, I should note that that does not mean Web API.                          |
| 01:19:04   | That means how Omni Automation works.                                                                  |
| 01:19:07   | It's, you know, a programming interface.                                                               |
| 01:19:10   | So that's how you get details of tasks and things like that.                                           |
| 01:19:13   | That's not necessarily how you can, you know, make stuff magically happen over the Internet.           |
| 01:19:17   | And also in this configure menu, I mentioned earlier that you can install                              |
| 01:19:22   | the scripts just on a individual device or across all your devices.                                    |
| 01:19:27   | I generally install all of them on the iCloud.                                                         |
| 01:19:30   | So they're, they're spread out across all my devices.                                                  |
| 01:19:33   | If I have a script, I want to be able to run on my phone or my iMac.                                   |
| 01:19:36   | Yeah.                                                                                                  |
| 01:19:37   | Yeah.                                                                                                  |
| 01:19:38   | Same.                                                                                                  |
| 01:19:39   | Another thing on the Mac, because that's my primary tool.                                              |
| 01:19:43   | If you install one of these scripts, once you've, you know, open the OmniFocus.js file,                |
| 01:19:49   | it installs it into your automation menu that's up there.                                              |
| 01:19:53   | But if you want to make it super, super easy to get to, if you go to view and then customise           |
| 01:19:58   | toolbar, you can add it to the toolbar itself.                                                         |
| 01:20:02   | And then it's just a one button click.                                                                 |
| 01:20:04   | That's exactly what I did with the, the [[Kanban]] scripts we were talking about earlier.                  |
| 01:20:09   | They're just all in the menu bar up there or the toolbar.                                              |
| 01:20:12   | That way I can just click the individual ones I want to show me the [[Kanban]] perspective                 |
| 01:20:17   | or show me the ones that are, or move this project to, to do or in progress or waiting,                |
| 01:20:23   | clear it all out, call it done.                                                                        |
| 01:20:25   | Like you can just put those in that toolbar and it makes it super, super quick to get to.              |
| 01:20:30   | Yes.                                                                                                   |
| 01:20:31   | Yeah.                                                                                                  |
| 01:20:32   | I would definitely recommend adding scripts there.                                                     |
| 01:20:33   | I think that's a feature a lot of people may not be aware with OmniFocus.                              |
| 01:20:36   | You can put perspectives in the toolbar.                                                               |
| 01:20:39   | You can put a lot of stuff in the toolbar and make that left column almost irrelevant.                 |
| 01:20:45   | So I rarely have the left column displayed because I have so much stuff in my toolbar.                 |
| 01:20:50   | Yeah.                                                                                                  |
| 01:20:51   | Yeah.                                                                                                  |
| 01:20:52   | Same.                                                                                                  |
| 01:20:53   | What are some of your favourites from the list that we haven't talked about today?                      |
| 01:20:58   | We haven't talked about today.                                                                         |
| 01:21:00   | Oh, David.                                                                                             |
| 01:21:01   | We've talked about a lot.                                                                              |
| 01:21:04   | David's definitely being sneaky.                                                                       |
| 01:21:07   | One of the plugins that I've created, which I feel is very useful specifically for me,                 |
| 01:21:15   | which maybe is not so important for other people.                                                      |
| 01:21:20   | But for me, especially with heavy iPad use for OmniFocus is I found it's a little bit                  |
| 01:21:26   | tricky at times to create a task with multiple subtasks and have it set.                               |
| 01:21:31   | So actually this is all the subtasks are sequential and whether or not the main task is completed      |
| 01:21:36   | by its children.                                                                                       |
| 01:21:37   | So I created a script.                                                                                 |
| 01:21:39   | We can put all links to this in the show notes where it will ask you for the main task when            |
| 01:21:44   | you run it.                                                                                            |
| 01:21:45   | And then it's got, I believe, five fields for subtasks.                                                |
| 01:21:49   | You could potentially have more, but I just went with five because that seems right enough             |
| 01:21:55   | for me.                                                                                                |
| 01:21:56   | It's a good start.                                                                                     |
| 01:21:57   | You can always add more if you need to.                                                                |
| 01:21:59   | And it's not a particularly well written script.                                                       |
| 01:22:01   | It was something that I threw together in a hurry, but basically it has a feel for the                 |
| 01:22:05   | main task.                                                                                             |
| 01:22:06   | It's got two check boxes, whether or not the main task is sequential.                                  |
| 01:22:10   | It defaults to parallel.                                                                               |
| 01:22:12   | And whether or not the main task should be automatically completed by the child tasks                  |
| 01:22:16   | when all those are completed.                                                                          |
| 01:22:17   | And then it's got five fields for subtasks that you just type in.                                      |
| 01:22:21   | And so you just fill in those and it adds all of those items to, well, your inbox.                     |
| 01:22:28   | And then you can file it off wherever.                                                                 |
| 01:22:30   | And I found that this is very useful because I, one of the things I love about OmniFocus               |
| 01:22:35   | is that infinite depth and that I can go as deep as I like.                                            |
| 01:22:38   | And so being able to add a task with multiple subtasks is great.                                       |
| 01:22:43   | Here's one that I wrote this one a while back for in AppleScript, but it's a read books               |
| 01:22:52   | script.                                                                                                |
| 01:22:53   | And it's one that, you know, I was using a lot and I dabble with it still occasionally,                |
| 01:23:00   | but being someone who podcasts about books as well, like I always end up reading books                 |
| 01:23:06   | on a schedule.                                                                                         |
| 01:23:07   | So I wanted something that told me like, how many pages do I need to read each day in order            |
| 01:23:12   | to hit my goal for when I'm going to finish reading a book.                                            |
| 01:23:16   | So I wrote a script that would ask for the title of the book, the day you were going                   |
| 01:23:19   | to start reading the book, the day you needed to be done reading the book, and then the                |
| 01:23:23   | number of pages in the book.                                                                           |
| 01:23:25   | So it would ask for those four pieces of information.                                                  |
| 01:23:28   | And then based on your inputs to that, it would break out the book into however many                   |
| 01:23:33   | number of days were there, say it's 14, it would take the 200 pages or so and create                   |
| 01:23:39   | tasks for each day with due dates for each day of how many pages you're supposed to be,                |
| 01:23:44   | where are you supposed to be at in the book and such.                                                  |
| 01:23:47   | So I wrote that in AppleScript and someone took that and converted it to the Omni Automation          |
| 01:23:53   | setup.                                                                                                 |
| 01:23:54   | So I can get you a link to this, but yeah, they've got it set up in the exact same way                 |
| 01:23:58   | I do.                                                                                                  |
| 01:23:59   | They just converted it over to the JavaScript setup so you can run it on any of the devices            |
| 01:24:03   | now.                                                                                                   |
| 01:24:04   | I was going to say, if somebody hasn't already done this, I will do this by the time the               |
| 01:24:08   | show goes live, but I'm very glad to hear somebody has done it.                                        |
| 01:24:13   | I've got a couple maintenance scripts here that I run all the time from some fella named               |
| 01:24:17   | Auto Automator, pretty sure that's Sal.                                                                |
| 01:24:21   | But they're simple plugins, but they're useful.                                                        |
| 01:24:25   | One of them, because I group client projects in folders, and sometimes I get two or three              |
| 01:24:31   | of these projects together, I need to put them into a folder, he's got a script that                   |
| 01:24:35   | moves selected projects into a new folder, which is a simple process, but it's harrowing               |
| 01:24:42   | to do it on touch devices where you're trying to drag projects to land on a folder and make            |
| 01:24:47   | sure it actually gets to the right one, and if it lands in the wrong one, then getting                 |
| 01:24:51   | back to the whole automation for accuracy problem.                                                     |
| 01:24:55   | And this one does a really good job of called move selected projects into a new folder.                |
| 01:25:00   | And then he has another one that allows you to push out project due dates.                             |
| 01:25:03   | So if you do have a due dates and suddenly you've got a bunch of due dates that aren't                 |
| 01:25:07   | really applicable, my advice would be remove the due dates if you can.                                 |
| 01:25:11   | But if you can't, there's a script where you can move the due date on multiple projects                |
| 01:25:16   | and both of those are by a by Sal.                                                                     |
| 01:25:18   | Yes.                                                                                                   |
| 01:25:19   | Yeah.                                                                                                  |
| 01:25:20   | These are these are both really handy.                                                                 |
| 01:25:21   | And I just put links to both of those in the show notes for people as well.                            |
| 01:25:24   | Well, I guess the point is that the Omni Group has done something really great here and they've        |
| 01:25:32   | given the users the ability to create features in their application via JavaScript.                    |
| 01:25:39   | And if you're an automation fan, this is something you should definitely be looking into.              |
| 01:25:43   | I would definitely agree because even if all you want to do is just copy and paste bits                |
| 01:25:49   | out from scripts that do the bits that you need or chain it together and copy and paste                |
| 01:25:55   | whole scripts and put them into one, that's something you can do and it works.                         |
| 01:25:59   | And I would encourage people to definitely explore automation with their task management               |
| 01:26:05   | to see how they can make it easier for themselves.                                                     |
| 01:26:08   | And one thing we haven't even mentioned is you can use this stuff to move data between                 |
| 01:26:12   | Omni applications.                                                                                     |
| 01:26:13   | So like if you're an OmniPlan user, but you outline a project in OmniFocus, you could                  |
| 01:26:19   | run a script.                                                                                          |
| 01:26:20   | I'm not sure if it exists yet, but it could be written.                                                |
| 01:26:22   | Yep.                                                                                                   |
| 01:26:23   | There's copy selected OmniFocus tasks to OmniPlan.                                                     |
| 01:26:26   | All right.                                                                                             |
| 01:26:27   | I'll put it into the show notes.                                                                       |
| 01:26:28   | It's already done.                                                                                     |
| 01:26:29   | But the idea of moving them between OmniOutliner, OmniPlan, OmniFocus, all really sharing data        |
| 01:26:35   | between them makes a ton of sense and all of that's possible with this scripting language.             |
| 01:26:42   | So Joe, if somebody's listening and they want more from Joe, where do they go?                         |
| 01:26:50   | Two places I would point you to.                                                                       |
| 01:26:51   | If you want absolutely everything I do, it all gets posted at joebuhlig.com.                         |
| 01:26:55   | Any links, all the scripts and stuff we've talked about, you can get to all of it there.               |
| 01:27:00   | If you specifically want to see the, what am I trying to say, the OmniFocus stuff that                 |
| 01:27:07   | I've done, you can go to joebuhlig.com/tag slash OmniFocus.                                    |
| 01:27:12   | That'll show you all the stuff I've done about it, including the content calendar thing we             |
| 01:27:16   | were talking about, the stream recording for that.                                                     |
| 01:27:20   | If you're fascinated by the analog stuff, I've been doing a lot of stuff with analog                   |
| 01:27:23   | Joe.                                                                                                   |
| 01:27:24   | That's my other home on the internet, but between those two, you'll find pretty much                   |
| 01:27:30   | everything I do.                                                                                       |
| 01:27:32   | And we've got links to all of those in the show notes.                                                 |
| 01:27:35   | Joe didn't say it in the show, but I know for a fact that all of these JavaScript he                   |
| 01:27:38   | writes, he first writes it with a broad tip nib fountain pen.                                          |
| 01:27:44   | Right?                                                                                                 |
| 01:27:45   | That's how you write your code, right?                                                                 |
| 01:27:47   | Definitely false.                                                                                      |
| 01:27:48   | I thought you were more of a fine nib guy, really.                                                     |
| 01:27:53   | I'm a mix.                                                                                             |
| 01:27:55   | Yeah, I am a mix.                                                                                      |
| 01:27:56   | It depends.                                                                                            |
| 01:27:57   | I do titles and such with broads or mediums, and I do a lot of my day-to-day stuff with                |
| 01:28:03   | fines or extra fines.                                                                                  |
| 01:28:05   | All right.                                                                                             |
| 01:28:06   | Well, either way, Joe, I really appreciate you coming on.                                              |
| 01:28:10   | First of all, I appreciate all the work you've done to make OmniFocus better for all of us             |
| 01:28:14   | and over the years, and also coming on the show today to share some of that with the                   |
| 01:28:18   | audience.                                                                                              |
| 01:28:19   | My pleasure.                                                                                           |
| 01:28:20   | It's been a joy.                                                                                       |
| 01:28:21   | Thanks for having me.                                                                                  |
| 01:28:22   | If you're one of the automators, you can find us over at relay.fm/automators.                    |
| 01:28:26   | There'll be a lot of links in today's show notes, so go check them out.                                |
| 01:28:29   | If you've got OmniFocus, you owe it to yourself to check this stuff out.                               |
| 01:28:33   | It's just so powerful, and it is really fun.                                                           |
| 01:28:37   | Thanks to our sponsors, Sync Up, a OneDrive podcast, PDF pin from Smile, and HelloFresh,                |
| 01:28:42   | and we'll see you in a couple of weeks.                                                                |
| 01:28:44   | Goodbye, everyone.                                                                                     |
