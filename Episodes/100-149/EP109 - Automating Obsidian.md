---
status: "incomplete"
fc-date:
  year: 2022
  month: 08
  day: 27
fc-category: "podcast"
podcast: "Automators"
published: 2022-08-27
duration: 5754
formattedduration: "01:35:54"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/109"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators109.mp3"
episode: 109
title: "109: Automating Obsidian"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
From simple improvements to deep cross-linking and pages which update, there's a lot you can automate within your note-taking app of choice. In this episode, the automation gang take on Obsidian, and all of its plugins.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 109 Discussion](https://talk.automators.fm/t/109-automating-obsidian/14253)

# Sponsors
- [[Setapp (Sponsor)|Setapp]] - more than 200 powerful apps for your Mac.
- [[Doppler (Sponsor)|Doppler]] - Sync environment variables at scale.
- [[Trade (Sponsor)|Trade]] - Save Big, Support Small Roasters.
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.

# Show Notes
- [Obsidian](https://obsidian.md/)
- [Plugins - Obsidian](https://obsidian.md/plugins)
- [Plugin: Advanced Tables](https://obsidian.md/plugins?id=table-editor-obsidian)
- [Templates - Obsidian Help](https://help.obsidian.md/Plugins/Templates)
- [Command palette - Obsidian Help](https://help.obsidian.md/Plugins/Command+palette)
- [workspaces - Obsidian Help](https://help.obsidian.md/Plugins/workspaces)
- [Themes and plugins - Obsidian Help](https://help.obsidian.md/Contributing+to+Obsidian/Themes+and+plugins)
- [for Theme Designers - Obsidian Hub - Obsidian Publish](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/for+Theme+Designers)
- [Obsidian Sync](https://obsidian.md/sync)
- [Introduction to Obsidian Sync - Obsidian Help](https://help.obsidian.md/Obsidian+Sync/Introduction+to+Obsidian+Sync)
- [GitHub - ryanjamurphy/workbench-obsidian: A plugin to help you collect working materials.](https://github.com/ryanjamurphy/workbench-obsidian)
- [Plugin: Better Codeblock](https://obsidian.md/plugins?id=obsidian-better-codeblock)
- [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)
- [Plugin: Paste URL into Selection](https://obsidian.md/plugins?id=url-into-selection)
- [Plugin: Note Auto Creator](https://obsidian.md/plugins?search=obsidian-note-autocreator)
- [Plugin: Note Auto Mover](https://obsidian.md/plugins?search=auto-note-mover)
- [Plugin: Tasks](https://obsidian.md/plugins?id=obsidian-tasks-plugin)
- [Plugin: Link Headers Directly](https://obsidian.md/plugins?search=link-headers-directly)
- [Plugin: Dynamic Table of Contents](https://obsidian.md/plugins?search=obsidian-dynamic-toc)
- [Plugin: Advanced New File](https://obsidian.md/plugins?search=obsidian-advanced-new-file)
- [Introduction - Templater](https://silentvoid13.github.io/Templater/)
- [Plugin: Advanced New File](https://obsidian.md/plugins?search=obsidian-advanced-new-file)
- [Plugin: Advanced New Folder](https://obsidian.md/plugins?search=obsidian-advanced-new-folder)
- [Plugin: Embedded Note Titles](https://obsidian.md/plugins?search=obsidian-embedded-note-titles)
- [Using Obsidian URI - Obsidian Help](https://help.obsidian.md/Advanced+topics/Using+obsidian+URI)
	- The URL Scheme documentation
- [Plugin: Advanced Obsidian URI](https://obsidian.md/plugins?id=obsidian-advanced-uri)
- [Obsidian Advanced URI](https://vinzent03.github.io/obsidian-advanced-uri/)
- Yes, it can open a workspace!
- [Community - Obsidian](https://obsidian.md/community)
- [Plugin: Txt as MD](https://obsidian.md/plugins?id=txt-as-md-obsidian)

# Transcription
  
| Time Index | Transcription                                                                                      |
| :--------- | :------------------------------------------------------------------------------------------------- |
| 00:00      | Hello and welcome to Automators,                                                                   |
| 00:04      | the automation podcast where we get all of the technology,                                         |
| 00:07      | apps, gadgets, the whole lot to do all of your bidding for you.                                    |
| 00:11      | I am Rosemary Orchard and I'm joined by my fellow co-host,                                         |
| 00:13      | David Sparks. Hey, David, how are you today?                                                       |
| 00:15      | I am excellent, Rose.                                                                              |
| 00:17      | I'm always happy to be here talking automation with you.                                           |
| 00:20      | Today, we are zeroing in our automation eyeballs on [[Obsidian]].                                      |
| 00:26      | Yeah. We've danced around [[Obsidian]]                                                                 |
| 00:29      | before we talked about it a bit here and there.                                                    |
| 00:31      | It's made its way into various episodes.                                                           |
| 00:33      | We had Ryan Murphy on the show in episode 88.                                                      |
| 00:36      | Obviously, he's a big [[Obsidian]] user,                                                               |
| 00:38      | he's created plugins and so on for it.                                                             |
| 00:40      | But you and I use [[Obsidian]] every day.                                                              |
| 00:43      | I don't know about you, David,                                                                     |
| 00:45      | but it feels like my [[Obsidian]] usage is                                                             |
| 00:46      | literally increasing on a daily basis at the moment.                                               |
| 00:49      | I feel like I've introduced five people at work to it                                              |
| 00:51      | in relatively short order and they're all just loving it.                                          |
| 00:55      | It's just a really useful app that has                                                             |
| 00:59      | become a really crucial part of my workflow and it's                                               |
| 01:02      | automatable, which for me,                                                                         |
| 01:04      | I know it's a requirement if I'm looking for a new app,                                            |
| 01:07      | but I'm sure it is for a lot of our listeners as well.                                             |
| 01:09      | Yeah. I mean, it really is an impressive app                                                       |
| 01:12      | and it comes up on the show and I know some people                                                 |
| 01:14      | really aren't interested in obsidian,                                                              |
| 01:16      | but a lot of people are.                                                                           |
| 01:17      | The interesting thing, the automation side of                                                      |
| 01:19      | this app is interesting because the app has                                                        |
| 01:23      | certain automations built into it.                                                                 |
| 01:25      | There is a very robust third-party plug-in community                                               |
| 01:29      | that is creating automation stuff for it.                                                          |
| 01:32      | But then there's also like a different vector of                                                   |
| 01:34      | automation because obsidian's database is                                                          |
| 01:36      | just a folder full of markdown files.                                                              |
| 01:38      | So all your normal automation tools can                                                            |
| 01:43      | interact with the [[Obsidian]] database very easily.                                                   |
| 01:45      | So there's just a lot of ways to get into that.                                                    |
| 01:49      | I know both of us have been cobbling together                                                      |
| 01:52      | systems as we use the app or I thought,                                                            |
| 01:54      | well, let's just do a check-in and see what we're doing.                                           |
| 01:58      | Yeah. Yeah. So I think,                                                                            |
| 02:00      | I mean, we should probably start at the beginning, right?                                          |
| 02:02      | So for people who aren't familiar with [[Obsidian]] or                                                 |
| 02:04      | people who haven't heard before,                                                                   |
| 02:06      | how were you using obsidian?                                                                       |
| 02:07      | And of course, you know, checking in that you're                                                   |
| 02:09      | still using it the same way as you were before.                                                    |
| 02:11      | Yeah. How are we using obsidian?                                                                   |
| 02:13      | So David, how are you using obsidian?                                                              |
| 02:15      | Well, I mean, obsidian, if you've never heard of it,                                               |
| 02:17      | and I doubt there are many people in the audience that have,                                       |
| 02:20      | haven't, but it is                                                                                 |
| 02:23      | an application that lays on top of                                                                 |
| 02:25      | a folder of markdown files and it                                                                  |
| 02:27      | gives you a way to navigate those files                                                            |
| 02:30      | and link them together and perform                                                                 |
| 02:32      | actions on them via plugins.                                                                       |
| 02:34      | It's like a tool belt that you strap on to text.                                                   |
| 02:38      | And that is why so many of us love it because                                                      |
| 02:42      | it is just a folder full of text files at the end of the day.                                      |
| 02:45      | There's nothing proprietary about it,                                                              |
| 02:46      | very easy to get your data out there.                                                              |
| 02:49      | I mean, there's nothing to it.                                                                     |
| 02:50      | And so that being said,                                                                            |
| 02:53      | I find it extremely useful primarily for idea                                                      |
| 02:57      | generation, review, note-taking.                                                                   |
| 03:01      | Like I have a folder in obsidian,                                                                  |
| 03:03      | we talked about this on a fairly recent episode of                                                 |
| 03:05      | focused or maybe a future episode of focused.                                                      |
| 03:08      | I lose track of when I record things for us.                                                       |
| 03:10      | But I have one called Ideas for Now,                                                               |
| 03:13      | where I kind of keep a note on big ideas I'm thinking about,                                       |
| 03:16      | and they can link to books I've read or media I've consumed.                                       |
| 03:20      | And I just love the ability that it's so                                                           |
| 03:22      | nimble to let me jump around data that way.                                                        |
| 03:25      | But it also can become what you call a                                                             |
| 03:28      | personal knowledge management tool,                                                                |
| 03:30      | where you keep details and notes of things                                                         |
| 03:34      | that you're just managing in your life.                                                            |
| 03:36      | Like when did your dog get the vaccination kind of information, right?                             |
| 03:40      | I mean, something that like historically,                                                          |
| 03:42      | people would probably put an Evernote.                                                             |
| 03:43      | It's good for stuff like that.                                                                     |
| 03:46      | But in some ways it's better because there are just text files                                     |
| 03:48      | that can be linked and there's no proprietary database involved.                                   |
| 03:52      | I use it for writing because it's a great writing tool                                             |
| 03:56      | because they're just markdown files.                                                               |
| 03:58      | But a lot of the blog posts and more substantial pieces I've written in                            |
| 04:03      | the last year or two have been started life as an [[Obsidian]] markdown file.                          |
| 04:08      | So I use it for a lot.                                                                             |
| 04:09      | I mean, that sounds like me.                                                                       |
| 04:11      | I mean, I've got kind of two split primary uses for [[Obsidian]].                                      |
| 04:16      | And that's split in the sense that I have two different volts.                                     |
| 04:20      | And I have limited it to just two different volts in that I have my work                           |
| 04:25      | vault and I have my personal vault.                                                                |
| 04:27      | And I don't tend to split things up beyond that vault wise.                                        |
| 04:31      | It's just either it's for work or it's for me.                                                     |
| 04:34      | And then within that, obviously I've got my folders and so on to help me                           |
| 04:37      | organise files as is appropriate and using tags and so on.                                         |
| 04:42      | But one of the things that I have found over time is that as my usage                              |
| 04:46      | expands and changes, it's actually really nice to have those split up                              |
| 04:51      | so that I don't necessarily have the same plugins installed in all the                             |
| 04:54      | vaults because I mean, I'm hoping we can talk about some of our                                    |
| 04:58      | favourite not necessarily strictly automation related, but, you know,                               |
| 05:02      | making work, making [[Obsidian]] work better for us plugins in a bit.                                  |
| 05:06      | But some of the plugins that I have for my personal stuff, I just don't need                       |
| 05:09      | for work and vice versa.                                                                           |
| 05:12      | It tends to be more personal ones not needed for work rather than work                             |
| 05:15      | ones not needed for personal because I do a lot of code in my free time as well.                   |
| 05:19      | But it's really useful to just be able to go, hey,                                                 |
| 05:22      | this is where I'm going to have my reference data.                                                 |
| 05:25      | For me, a lot of text still starts in [[Drafts]].                                                      |
| 05:29      | Like if I'm not sure what something is or where it's going or whatever,                            |
| 05:33      | I don't think about it.                                                                            |
| 05:33      | It goes in [[Drafts]] and then I can send it off wherever later.                                       |
| 05:37      | We'll come back to integrating [[Obsidian]] with other apps in a bit.                                  |
| 05:41      | But for me, it is just like this is data and I want to keep it.                                    |
| 05:45      | It's going in here and then I can add my tags and so on.                                           |
| 05:48      | And I don't know about you, David, but I really like the [[YAML]] frontmatter                          |
| 05:52      | where you can put a dash dash dash at the start of a file.                                         |
| 05:55      | And then you have key value pairs.                                                                 |
| 05:57      | So you write, you know, a word, colon, and then whatever the value is for that.                    |
| 06:02      | So if you wanted to, that's where you could say write a title.                                     |
| 06:05      | And if you want to write multiple things, you could separate them with commas                      |
| 06:08      | or on a new line, indent it by two spaces at a dash and then a space                               |
| 06:14      | and then whatever the list item is, which is how I do tags.                                        |
| 06:17      | But I use this for custom things as well.                                                          |
| 06:20      | So I'm just looking at, I have home documentation.                                                 |
| 06:24      | I'm such a nerd, David, I've got a network folder                                                  |
| 06:27      | where I've documented a whole bunch of things on my network.                                       |
| 06:30      | And each of those things that I've documented has a [[YAML]] header at the top.                        |
| 06:36      | And it's got like the IP address, the MAC address, what room something's in,                       |
| 06:39      | a category that something's in the connection type,                                                |
| 06:41      | whether it's a wireless or a wired connection.                                                     |
| 06:44      | And if a fixed IP address has been assigned.                                                       |
| 06:48      | So that I know, you know, what it is.                                                              |
| 06:50      | And that actually ties in really well for a whole bunch of other things.                           |
| 06:56      | Because I've got all this data, but it's not like I have to write it out                           |
| 06:59      | in some kind of way and then like match it out later.                                              |
| 07:02      | Because I think that for a lot of people with notes can end up being a bit of a problem            |
| 07:07      | because they do want a database attached in some way.                                              |
| 07:12      | In that they need to be able to add metadata.                                                      |
| 07:15      | But they don't necessarily actually want to, you know,                                             |
| 07:18      | like do you want an air table and a file, a folder full of markdown files?                         |
| 07:22      | Maybe, maybe not.                                                                                  |
| 07:23      | It depends on how well you're going to be actually actively linking those.                         |
| 07:27      | And I found for me in a lot of cases, I can just put the data in the file.                         |
| 07:31      | And that works really well.                                                                        |
| 07:32      | Yeah, I agree.                                                                                     |
| 07:33      | And I just feel like the whole thing is very elegant.                                              |
| 07:39      | And once you start using it and getting an understanding                                           |
| 07:42      | for some of the plugins we talk about today,                                                       |
| 07:44      | that [[YAML]] metadata becomes super valuable.                                                         |
| 07:46      | Like you can, like I have one that's just a status flag, you know, it's a tag.                     |
| 07:51      | And then I can use some of the plugins we're going to talk about later                             |
| 07:54      | to create tables based on project status.                                                          |
| 07:57      | Or there's just so much I can do with this application.                                            |
| 08:01      | And as you dig into it, it gets even more powerful.                                                |
| 08:05      | And this is, this is like red meat for automators,                                                 |
| 08:07      | because like all of a sudden we can really just take a folder full of markdown files               |
| 08:13      | and just make them dance for us.                                                                   |
| 08:14      | Now, I will tell you, by the way, I only use one vault.                                            |
| 08:18      | And I don't know if that's good or bad,                                                            |
| 08:20      | but I've got a lot, everything in one big bucket right now.                                        |
| 08:24      | I have started moving some data out of [[Obsidian]].                                                   |
| 08:27      | And that is, yeah, primarily it's craft, you know, craft is out there too,                         |
| 08:33      | which is a similar type of application.                                                            |
| 08:36      | It allows back linking and relational notes.                                                       |
| 08:39      | And, but it's a block based editor, so it's different.                                             |
| 08:42      | And it's more graphically friendly.                                                                |
| 08:44      | It's prettier, but it doesn't have a lot of features [[Obsidian]] does.                                |
| 08:48      | For instance, it doesn't have into an encryption,                                                  |
| 08:50      | which is something I like and some other features.                                                 |
| 08:53      | So they're kind of different animals.                                                              |
| 08:55      | But one of the things craft does much better than [[Obsidian]] is collaboration.                       |
| 09:00      | And so I've got a few people helping me                                                            |
| 09:02      | with getting all the content together for MacSparky.                                              |
| 09:05      | And we were running into problems with like proofreading                                           |
| 09:08      | and kind of keeping on top of things,                                                              |
| 09:10      | where I'm working on newsletters and blog posts                                                    |
| 09:12      | and the team members weren't able to see them because they were in craft.                          |
| 09:16      | I'm sorry, they were in [[Obsidian]], you know.                                                        |
| 09:17      | So, so I created a shared craft that a bunch of us share.                                          |
| 09:22      | And I have a lot of data going in there now                                                        |
| 09:25      | that is stuff that they would need to see.                                                         |
| 09:28      | And I, I'm moving that data out of [[Obsidian]],                                                       |
| 09:31      | which is another source of automation.                                                             |
| 09:33      | How do you move it from one to the next?                                                           |
| 09:36      | But it's not really a problem.                                                                     |
| 09:39      | It's not that I don't like [[Obsidian]].                                                               |
| 09:40      | It's just like [[Obsidian]] really isn't built for that type of collaboration.                         |
| 09:44      | Yeah.                                                                                              |
| 09:45      | And, and I'm thinking about some of my personal PKM stuff,                                         |
| 09:48      | like where, when did the dog get the shots?                                                        |
| 09:51      | I'm not sure I want that clouding up my [[Obsidian]] database.                                         |
| 09:54      | That makes sense.                                                                                  |
| 09:54      | Well, that's what another vault could be really useful for.                                        |
| 09:58      | Because I have a similar problem at work, you know.                                                |
| 10:00      | Sometimes I'm, I make a note and, you know,                                                        |
| 10:02      | then somebody actually needs the same data that's in my note.                                      |
| 10:06      | Well, it's a markdown file.                                                                        |
| 10:08      | So I can just drag and drop the markdown file                                                      |
| 10:10      | and to [[Slack]] and send it to them and they can read it.                                             |
| 10:12      | We have markdown files in our, in our code base                                                    |
| 10:15      | and in a bunch of other places.                                                                    |
| 10:16      | So people are familiar with them and they open them up                                             |
| 10:18      | and it looks decent to them.                                                                       |
| 10:21      | But the thing I found when it comes to sharing for me                                              |
| 10:24      | is, so Microsoft has Azure DevOps.                                                                 |
| 10:28      | So they've got a whole bunch of things.                                                            |
| 10:30      | And one of the features that's inside of that is a wiki.                                           |
| 10:33      | And this wiki, David, is markdown based.                                                           |
| 10:36      | I'm in love, like, you know, I was all in favor of the wiki                                        |
| 10:39      | and then I found out that it was markdown                                                          |
| 10:40      | and I'm just all over that thing.                                                                  |
| 10:42      | And it's great because I write up stuff locally                                                    |
| 10:45      | and then somebody says, oh, hey, you know,                                                         |
| 10:46      | actually does anybody know how to do this?                                                         |
| 10:48      | And I'm like, oh, wait, I wrote my own docs on this.                                               |
| 10:50      | I'll copy and paste that into a wiki.                                                              |
| 10:52      | And then, you know, I've put it in the wiki                                                        |
| 10:54      | and other people improve it and enhance it because, yeah,                                          |
| 10:59      | just a plain text file is really difficult to collaborate on.                                      |
| 11:03      | You know, this is why Google Docs is so popular, right?                                            |
| 11:07      | Because you can have 16 people typing into Google Docs                                             |
| 11:09      | at the same time.                                                                                  |
| 11:10      | And unless you all lose your internet connection,                                                  |
| 11:13      | like it's going to handle it just fine.                                                            |
| 11:16      | But a lot of services aren't built for that.                                                       |
| 11:18      | And, you know, that's not what they're designed for.                                               |
| 11:20      | That's not what [[Obsidian]] is for.                                                                   |
| 11:21      | So I certainly don't blame them when that is the case.                                             |
| 11:25      | So if you do need to collaborate,                                                                  |
| 11:26      | I'm sure Craft is great for you.                                                                   |
| 11:28      | I personally really struggle with block-based editors.                                             |
| 11:32      | It just breaks my brain in some kind of way.                                                       |
| 11:34      | I look at it and my brain's like, nope,                                                            |
| 11:36      | no, this doesn't look right.                                                                       |
| 11:37      | This doesn't feel right.                                                                           |
| 11:38      | I don't like it.                                                                                   |
| 11:39      | Why can't I just, you know, tap into this                                                          |
| 11:41      | and then select and go down here?                                                                  |
| 11:43      | And it wants to select a whole block?                                                              |
| 11:45      | No, I just wanted like these three lines over here.                                                |
| 11:48      | It doesn't matter that they're split into two and a half blocks or something.                      |
| 11:52      | So yeah, but, you know, it is a great alternative.                                                 |
| 11:56      | And, you know, we're going to talk quite a bit                                                     |
| 11:58      | about some of the plugins in a moment.                                                             |
| 12:00      | But a lot of the other things that we're doing,                                                    |
| 12:03      | I'm sure are applicable to, you know,                                                              |
| 12:05      | pretty much every text editor out there,                                                           |
| 12:07      | regardless of what you're doing,                                                                   |
| 12:09      | even if it doesn't necessarily directly apply.                                                     |
| 12:11      | I'm sure, you know, bearing it in mind, you know,                                                  |
| 12:15      | if you're on a Mac, [[Keyboard Maestro]] has click-it image.                                             |
| 12:17      | That'll get you a long way in a lot of places                                                      |
| 12:19      | if you can't quite get there entirely with the automation tools                                    |
| 12:24      | that you would prefer.                                                                             |
| 12:25      | But there's a solution to every problem.                                                           |
| 12:28      | And [[Obsidian]] plugins, certainly,                                                                   |
| 12:31      | if you look at that community plugin list,                                                         |
| 12:33      | boy, oh boy, that is a solution                                                                    |
| 12:34      | to a heck of a lot of problems right there.                                                        |
| 12:36      | Yeah, and [[Obsidian]] is an electron app,                                                             |
| 12:38      | which a lot of people lock it for that.                                                            |
| 12:40      | You know, it's not a native quote unquote Mac app,                                                 |
| 12:43      | but that doesn't change the fact that there is a lot you can do                                    |
| 12:46      | with automation here.                                                                              |
| 12:48      | And like you said, as we get through the show,                                                     |
| 12:51      | there's a lot of topics.                                                                           |
| 12:52      | So we're going to dig through it a piece at a time.                                                |
| 12:55      | And both of us are doing a ton of automation in [[Obsidian]]                                           |
| 12:58      | and we thought it'd be, you know,                                                                  |
| 12:59      | it's time to share the wealth here.                                                                |
| 13:03      | This episode of Automators is brought to you by Setup.                                             |
| 13:05      | There's an app for everything these days.                                                          |
| 13:07      | Some are great and others not so much.                                                             |
| 13:10      | How do you quickly find the right one for you?                                                     |
| 13:12      | A great way to discover new quality apps                                                           |
| 13:15      | and get all the tools you need to get the work done is Setup,                                      |
| 13:17      | a subscription for Mac and iPhone apps.                                                            |
| 13:20      | Setup packs over 240 high quality apps into one.                                                   |
| 13:23      | There's an app for almost any task,                                                                |
| 13:25      | so you don't need to look in tons of places to find what you need.                                 |
| 13:27      | With Setup, you can think about your tasks, not apps.                                              |
| 13:31      | Setup has a dedicated curation team that only selects the highest quality apps.                    |
| 13:34      | Plus, instead of paying thousands of dollars for separate licenses,                                |
| 13:37      | there's just one flat monthly fee.                                                                 |
| 13:39      | New apps are added to Setup regularly.                                                             |
| 13:41      | Updates are free and all apps are full-featured pro versions.                                      |
| 13:45      | Until September 15th, use code Automators to get a month free trial.                               |
| 13:49      | Head over to setup.com and redeem your code.                                                       |
| 13:51      | That's setup.com code Automators.                                                                  |
| 13:55      | Our thanks to Setup for their support of this show and all of Relay FM.                            |
| 14:01      | So, David, we were teasing this before the ad.                                                     |
| 14:04      | What plugins are we using?                                                                         |
| 14:06      | Let's talk non-automation for a minute                                                             |
| 14:08      | and just give folks some ideas of some of the other stuff,                                         |
| 14:10      | because I think that helps people understand what it is we're doing.                               |
| 14:14      | With the app, for me, honestly, one of my favourites is the Advanced Tables plugin.                 |
| 14:21      | I love that.                                                                                       |
| 14:22      | So, you have a markdown table for people who don't know it's that pipe character,                  |
| 14:25      | that vertical character, and then you have a space                                                 |
| 14:29      | and then you write whatever it is that's going in the column                                       |
| 14:30      | and then you do another space and a pipe character and so on.                                      |
| 14:34      | But it gets really messy when you're just writing text.                                            |
| 14:37      | And the Advanced Tables editor, when you tap space                                                 |
| 14:39      | and then another pipe, it just straightens everything up                                           |
| 14:42      | and it lines everything up so it looks like a table in text.                                       |
| 14:46      | And then when you do the preview, of course, it looks like a table there as well.                  |
| 14:49      | And that really, really helps.                                                                     |
| 14:52      | That really makes it really easy for me to just do all of my table stuff.                          |
| 14:58      | I've certainly used it.                                                                            |
| 15:00      | I mentioned the Wiki stuff before.                                                                 |
| 15:02      | If I have to write a table that I know is going into the Wiki,                                     |
| 15:04      | yeah, I write it in [[Obsidian]] and then I copy it over to the Wiki when I'm done.                    |
| 15:08      | Yeah, because the formatting is automatic with this plugin.                                        |
| 15:11      | And tables were not part of the original spec of Markdown                                          |
| 15:15      | as John Gruber created it, but they came later.                                                    |
| 15:19      | And I always find it tedious to create tables in Markdown.                                         |
| 15:22      | And as soon as I installed this plugin, I'm like, yep, okay, that solved the problem.              |
| 15:27      | So yeah, that's a great plugin to automate creating tables.                                        |
| 15:32      | Even some of the core plugins, I think, are worth talking about.                                   |
| 15:36      | They have a built-in template plugin.                                                              |
| 15:40      | And there's also an advanced third-party plugin.                                                   |
| 15:43      | But the built-in template plugin, I think, is actually pretty good.                                |
| 15:47      | The way it works is you can create any document and then save it as a template.                    |
| 15:52      | Usually you save it to a specific location.                                                        |
| 15:55      | I've created a folder in [[Obsidian]] called templates.                                                |
| 15:57      | And you can put subfolders in there too, which is really nice.                                     |
| 16:01      | You can put tokens in there for like the title and the date.                                       |
| 16:04      | It's not super deep in its support for tokenised information, but you get the basics.              |
| 16:12      | But using them is just so easy.                                                                    |
| 16:14      | Like, the way I've done it is I've mapped, because the other automation trick in [[Obsidian]]          |
| 16:19      | is you can map any keyboard shortcut to anything you do in the application.                        |
| 16:23      | It has, like, it is truly anything that the app does.                                              |
| 16:28      | It gives you an option to create a keyboard shortcut for it.                                       |
| 16:31      | So for me, if I hit Command T, it opens up the template chooser.                                   |
| 16:36      | And then I just type a few letters of the template name,                                           |
| 16:39      | AUT for Automator's Episode.                                                                       |
| 16:42      | And then it just dumps the text into a new document with all the, you know,                        |
| 16:47      | the [[YAML]] data for automators and status and recording information in Google Docs.                  |
| 16:53      | All that stuff just gets dumped right on the page.                                                 |
| 16:56      | And it's super useful.                                                                             |
| 16:57      | And even though there's more advanced template stuff you can do in obsidian,                       |
| 17:01      | this one's enough for a lot of people.                                                             |
| 17:03      | Yeah, yeah, it absolutely is.                                                                      |
| 17:05      | You're kind of starting us down the rabbit hole of the automation plugins already, which is great. |
| 17:11      | But I have to say, I started actually with the more advanced third-party one.                      |
| 17:16      | We'll have to talk about [[Templater]] in a little bit.                                                |
| 17:18      | For work I'm finding, a little of the time, I actually am fine with just the built-in templates.   |
| 17:23      | I don't need super crazy custom things.                                                            |
| 17:26      | And another trick that I have, which, you know, I'd like to sort of,                               |
| 17:33      | I feel like I need to remind people of because people forget about it,                             |
| 17:36      | is the command palette is a native [[Obsidian]] plugin.                                                |
| 17:39      | And if you enable it, when you hit command P, if you're on the Mac control P,                      |
| 17:43      | if you're using it on Linux or Windows, then it just opens up a list of commands.                  |
| 17:48      | And you can start typing and it's like [[Alfred]] built into [[Obsidian]] for just [[Obsidian]] things.        |
| 17:53      | And it's really useful because you don't have to go and, you know,                                 |
| 17:58      | like remember exactly what keyboard shortcut things are and so on,                                 |
| 18:02      | and you can pin certain commands so that they show up really easily.                               |
| 18:06      | And, you know, that is a really useful tool for people,                                            |
| 18:10      | especially people who are getting started with obsidian,                                           |
| 18:13      | but even people who know [[Obsidian]] really well because you install a new plugin,                    |
| 18:16      | it'll add links there, you know, even if it's third-party plugin,                                  |
| 18:21      | that's something that it can do. And so that's one of my favourites.                                |
| 18:26      | Yeah, and it gives you all of the commands related because a lot of third-party plugins            |
| 18:30      | have more than one command related to them.                                                        |
| 18:33      | And so you hit command P, just type the name of the plugin,                                        |
| 18:36      | and you're going to find a list of the things you can do.                                          |
| 18:39      | It's one of the discoverable ways to really use a new plugin.                                      |
| 18:42      | Of course, you should read the documentation,                                                      |
| 18:44      | but you can also just hit command P and start like pushing buttons and see what happens.           |
| 18:48      | And related to that is the open command command O,                                                 |
| 18:53      | which searches the whole database, like [[Alfred]],                                                    |
| 18:57      | and gets you into files extremely quickly.                                                         |
| 19:00      | And I feel like when you put O and P together,                                                     |
| 19:03      | and then I add T for the templates,                                                                |
| 19:06      | there is a lot of kickoff work I can do in [[Obsidian]] with just those three letters.                 |
| 19:13      | Yes, yeah, I think that that is entirely fair.                                                     |
| 19:17      | And yeah, there's a lot that you end up realising that you can do                                  |
| 19:22      | when you just go back to a clean, brand new [[Obsidian]] install.                                      |
| 19:26      | I've recently installed it on a, oh, my mom's machine, actually.                                   |
| 19:30      | She was looking to make some notes and wanted a really good,                                       |
| 19:32      | simple application that she could use,                                                             |
| 19:35      | and that work would let her install on her work machine.                                           |
| 19:38      | And so I got her to ask her IT department if she could install [[Obsidian]].                           |
| 19:42      | She's used Markdown before, obviously.                                                             |
| 19:44      | And they said, yeah, sure, that's not a problem.                                                   |
| 19:46      | We'll quite happily install that one for you.                                                      |
| 19:48      | You'll be saving notes into SharePoint,                                                            |
| 19:51      | I think is where her notes are going to go.                                                        |
| 19:54      | Because, of course, [[Obsidian]] is just a folder of Markdown files,                                   |
| 19:57      | so it'll go wherever you want.                                                                     |
| 19:59      | And yeah, and she was off to the races pretty quickly                                              |
| 20:03      | once they got that installed, and I showed her a couple of little bits on it.                      |
| 20:07      | But one of the things that I've been playing with more recently,                                   |
| 20:11      | and I don't know why I ignored it for so long,                                                     |
| 20:13      | are the workspaces, where you can save and then reload a workspace,                                |
| 20:19      | which includes the pain layout, your sidebar state,                                                |
| 20:22      | so if your sidebar is expanded or collapsed, and open files.                                       |
| 20:27      | And for me, that's really useful because I've ended up just, you know,                             |
| 20:31      | finding myself coming back to certain things time and time again.                                  |
| 20:35      | And some of my workspaces are ephemeral, they will disappear over time,                            |
| 20:38      | you know, I'll spin them up while I've been                                                        |
| 20:41      | automating my parents' house for them, and then I don't need that anymore,                         |
| 20:45      | so I will get rid of that workspace,                                                               |
| 20:47      | because I'm not going to be opening that particular setup                                          |
| 20:50      | with the open file and certain open folders                                                        |
| 20:55      | that I will be using on such a regular basis.                                                      |
| 20:58      | But that's available through the command palette as well,                                          |
| 21:00      | so I can just say, hey, you know, like command P workspace,                                        |
| 21:04      | and then I'd use the arrow keys to make sure it's managed workspaces.                              |
| 21:08      | And then I'm off to go, or actually load workspaces                                                |
| 21:13      | when I'm thinking of, because you can load a specific workspace that way,                          |
| 21:16      | which is really nice.                                                                              |
| 21:18      | So yeah, yeah, that's something that is well worth looking at.                                     |
| 21:21      | I'll put a link to all of these, of course, in the show notes for everyone,                        |
| 21:24      | but are you using workspaces, David?                                                               |
| 21:26      | Yeah, same thing, you know, to me, I don't use it,                                                 |
| 21:30      | I don't have like a default space I open up every day,                                             |
| 21:33      | but I make custom workspaces when I'm working on important projects,                               |
| 21:37      | and I want to just kind of get back to that.                                                       |
| 21:40      | I should really, frankly, expand my use of workspaces,                                             |
| 21:42      | because I think you could use it also just in different setups.                                    |
| 21:46      | And yeah, man, love that.                                                                          |
| 21:49      | You know, while we're talking about it,                                                            |
| 21:50      | I think maybe I got ahead of myself a little bit.                                                  |
| 21:53      | Just out of curiosity, what are your favourite themes?                                              |
| 21:56      | Because I know that you can do kind of automated or adjacent                                       |
| 22:00      | as you can change the look and feel of [[Obsidian]].                                                   |
| 22:02      | Do you have like favourite themes you use?                                                          |
| 22:04      | I do, but I think I'm just using the dark theme most of the time.                                  |
| 22:10      | And I have it, so I have a plugin which adapts [[Obsidian]] to the system,                             |
| 22:17      | so that it appears using light mode and dark mode.                                                 |
| 22:20      | And I'm just trying to figure out if I do have another                                             |
| 22:23      | something installed that changes the colours and so on,                                             |
| 22:26      | because I'm sure I did install something.                                                          |
| 22:29      | But maybe I ended up getting rid of it                                                             |
| 22:31      | because I was shuffling things around.                                                             |
| 22:33      | I briefly tried many more vaults.                                                                  |
| 22:36      | That did not work for me very well at all.                                                         |
| 22:38      | It turns out that my brain was not happy with that.                                                |
| 22:42      | But what I did end up doing when I consolidated everything back                                    |
| 22:46      | is I didn't just go back to my original setup.                                                     |
| 22:48      | Of course, I had a backup.                                                                         |
| 22:50      | You know, making a backup of an [[Obsidian]] vault is easy.                                            |
| 22:53      | You copy the folder, that's it.                                                                    |
| 22:55      | But I ended up going through and carefully                                                         |
| 22:58      | just reinstalling the things that I needed                                                         |
| 23:00      | because I realised I had about 20,000 plugins installed                                            |
| 23:02      | and I wasn't using a good chunk of them.                                                           |
| 23:04      | So I just went through and installed the ones                                                      |
| 23:06      | that I wanted manually, which worked.                                                              |
| 23:08      | But I don't think I'm using a particular theme right now.                                          |
| 23:12      | What about you, David?                                                                             |
| 23:13      | Rose, this is such a journey for me.                                                               |
| 23:15      | I try them all.                                                                                    |
| 23:17      | So my friend Nick Milo made Cybertron,                                                             |
| 23:19      | which is cool and it's got a lot of colours in it.                                                  |
| 23:21      | But I find myself going to kind of the simple ones.                                                |
| 23:23      | I like Nord.                                                                                       |
| 23:26      | There's one called Deep Work that I like.                                                          |
| 23:28      | There's a ripoff of the things kind of look.                                                       |
| 23:33      | I'm always trying different ones.                                                                  |
| 23:34      | So right now, I've got one called Iceberg I'm working in.                                          |
| 23:37      | But I do find it kind of fun to change it around over time.                                        |
| 23:41      | But that, so that's the first thing is like,                                                       |
| 23:43      | yeah, what did you make?                                                                           |
| 23:44      | And the second is, how are you syncing your data?                                                  |
| 23:47      | Because that actually does affect your automation tricks,                                          |
| 23:51      | depending on where your data is located.                                                           |
| 23:52      | Yeah, I'm doing the, not 100% recommended,                                                         |
| 23:58      | but also not entirely discouraged approach, David.                                                 |
| 24:01      | I am double syncing [[Obsidian]].                                                                      |
| 24:04      | Okay.                                                                                              |
| 24:04      | I do use [[Obsidian]] Sync.                                                                            |
| 24:06      | [[Obsidian]] Sync is my primary preferred method                                                       |
| 24:08      | for getting everything across all my devices.                                                      |
| 24:10      | And the reason for this is on iOS, if you want [[Obsidian]],                                           |
| 24:15      | you want your [[Obsidian]] Vault synced.                                                               |
| 24:17      | You have a choice between using iCloud and [[Obsidian]] Sync                                           |
| 24:20      | and [[Obsidian]] Sync, or not using [[Obsidian]] on mobile,                                                |
| 24:24      | unfortunately, you can maybe work around it                                                        |
| 24:26      | with third-party applications,                                                                     |
| 24:28      | but you can't access [[Dropbox]].                                                                      |
| 24:30      | And this is kind of [[Dropbox]] plus [[Apple]],                                                            |
| 24:34      | apparently, according to [[Dropbox]].                                                                  |
| 24:36      | I'm not sure how much.                                                                             |
| 24:37      | I 100% believe that because if little indie developers                                             |
| 24:40      | can make a folder available in the Files app and [[Dropbox]] can't,                                    |
| 24:45      | I'm wondering if that's more of a management decision                                              |
| 24:48      | than a developer capability issue.                                                                 |
| 24:50      | But either way, you can't use [[Dropbox]] there.                                                       |
| 24:53      | But [[Dropbox]] is my preferred method for syncing things,                                             |
| 24:56      | generally, because then I can integrate stuff using [[Make]]                                           |
| 25:00      | and Zapier, and if this and that,                                                                  |
| 25:03      | and other online and amazing automations                                                           |
| 25:05      | and just have stuff dropped in wherever,                                                           |
| 25:07      | and it magically appears.                                                                          |
| 25:08      | So I am double syncing.                                                                            |
| 25:10      | And I am being very careful about this.                                                            |
| 25:12      | I double sync on exactly one machine and no others.                                                |
| 25:16      | There is one machine in the mix that will sync                                                     |
| 25:18      | my [[Obsidian]] Vault to [[Obsidian]] Sync and to [[Dropbox]],                                                 |
| 25:21      | and nothing else does.                                                                             |
| 25:23      | Everything else does not cross the streams.                                                        |
| 25:25      | It only accesses either [[Dropbox]] or the [[Obsidian]] Sync.                                              |
| 25:30      | If I'm actually using [[Obsidian]], it's using [[Obsidian]] Sync,                                          |
| 25:34      | and then automations go in via [[Dropbox]] in a couple of places,                                      |
| 25:36      | just to make that a bit easier on me.                                                              |
| 25:39      | But that's how I'm doing it.                                                                       |
| 25:41      | I'm guessing, David, you're using the wonderful [[Obsidian]] Sync,                                     |
| 25:45      | which is, I think it's now a little bit pricier                                                    |
| 25:49      | than it used to be.                                                                                |
| 25:50      | There was a discount originally,                                                                   |
| 25:51      | if you were signing up before they were finished with everything,                                  |
| 25:57      | because it was sort of in beta for a while.                                                        |
| 25:59      | Yeah, when you were up on the high wire,                                                           |
| 26:01      | I am behind the railings, because I am just using [[Obsidian]] Sync.                                   |
| 26:06      | I did pay for it before they raised the price.                                                     |
| 26:10      | I think the deal was you get it.                                                                   |
| 26:11      | If you got in it early, you got that price going forward.                                          |
| 26:15      | But who knows?                                                                                     |
| 26:16      | I mean, the future will tell.                                                                      |
| 26:17      | But I'm paying whatever the original price was for the Sync.                                       |
| 26:21      | $5 a month.                                                                                        |
| 26:22      | Yeah.                                                                                              |
| 26:22      | And what I like about it is that it is an end-to-end encryption.                                   |
| 26:27      | I put the password in, they don't have my password,                                                |
| 26:29      | so my data is really, really secure.                                                               |
| 26:32      | And the way you make that work is you don't put it                                                 |
| 26:35      | generally in [[Dropbox]] or iCloud.                                                                    |
| 26:36      | You put it locally, even on your iPhone and your iPad.                                             |
| 26:40      | You can store this stuff locally.                                                                  |
| 26:41      | And there's a couple things I like about that.                                                     |
| 26:44      | Number one is it's end-to-end encrypted.                                                           |
| 26:46      | And it's in nobody's cloud, except that double encrypted cloud                                     |
| 26:51      | for [[Obsidian]].                                                                                      |
| 26:53      | I guess it's not that big of a deal,                                                               |
| 26:54      | not that I'm no longer a lawyer.                                                                   |
| 26:56      | But still, I don't mind having things end-to-end encrypted.                                        |
| 26:59      | And then the second piece of that Sync for me                                                      |
| 27:02      | is that now I can point [[Keyboard Maestro]] or shortcuts                                              |
| 27:05      | at the local folder of files.                                                                      |
| 27:09      | And I know you can do it on [[Dropbox]] too,                                                           |
| 27:10      | but just feel safer pointing it at something                                                       |
| 27:13      | that's not cloud synced otherwise.                                                                 |
| 27:15      | And know it's going to do what you ask it to do.                                                   |
| 27:17      | The downside, of course, is I lose all the great Zapier                                            |
| 27:21      | and cloud-based automation stuff that I'm sure you're doing.                                       |
| 27:24      | Yeah, yeah.                                                                                        |
| 27:24      | For me, it really is kind of a crucial part of my workflow                                         |
| 27:28      | to just have notes appear when they're supposed to appear.                                         |
| 27:31      | So I'm not having to go tap a button to make a note                                                |
| 27:34      | to be able to write the thing.                                                                     |
| 27:35      | I just open it up and kind of seeing it there as a file                                            |
| 27:39      | is part of the workflow for, and I'm not going to do this now.                                     |
| 27:42      | You know, I open it up, I can see things.                                                          |
| 27:45      | I have a very advanced named tag, David.                                                           |
| 27:48      | It's called Needs Completion.                                                                      |
| 27:51      | Actually, no, it's just called to do.                                                              |
| 27:52      | Sorry, folks.                                                                                      |
| 27:53      | I was trying to get a bit crazy there,                                                             |
| 27:55      | but I tried Needs Completion for about three weeks,                                                |
| 27:57      | and nothing got completed.                                                                         |
| 28:00      | So I went back to good old to do as my tag.                                                        |
| 28:03      | And if it's tagged with to do,                                                                     |
| 28:04      | that means that there is stuff in that note                                                        |
| 28:05      | that I should be actively working on and completing.                                               |
| 28:08      | If it is not tagged with that,                                                                     |
| 28:12      | then that is kind of just a note that's there,                                                     |
| 28:14      | and it may end up with stuff added to it on a regular basis,                                       |
| 28:17      | or not, it might just end up as reference.                                                         |
| 28:20      | But, you know, it's a very simple system for just,                                                 |
| 28:23      | this is something that we'll need filling out,                                                     |
| 28:25      | and so that then whatever the next part is can happen.                                             |
| 28:28      | And that's what I put in most of my notes.                                                         |
| 28:31      | They're automatically created, actually.                                                           |
| 28:34      | Yeah, no, the double encryption thing is,                                                          |
| 28:37      | or the double sync is not necessarily something                                                    |
| 28:39      | that everybody needs.                                                                              |
| 28:41      | Or even if you don't have it always on Mac,                                                        |
| 28:43      | then you can have, you know,                                                                       |
| 28:44      | [[Keyboard Maestro]] picking up things from [[Dropbox]]                                                    |
| 28:47      | and then doing stuff with them.                                                                    |
| 28:49      | I've actually done that with a variety of automations                                              |
| 28:52      | for quite a while.                                                                                 |
| 28:53      | I was having a file put into [[Dropbox]]                                                               |
| 28:56      | with data in it, JSON format,                                                                      |
| 28:59      | and [[Keyboard Maestro]] picked that up                                                                |
| 29:02      | when my machine was on and running,                                                                |
| 29:04      | and then just go,                                                                                  |
| 29:05      | hey, I'm just going to go off and create a folder                                                  |
| 29:07      | and a bunch of files with this                                                                     |
| 29:09      | so that I could do various other things.                                                           |
| 29:12      | And, you know, that would be another solution,                                                     |
| 29:14      | and I would consider doing that                                                                    |
| 29:15      | if I couldn't sync through [[Dropbox]] as well.                                                        |
| 29:18      | But thus far, I mean, I have plenty of backups.                                                    |
| 29:22      | I have all the backups, but thus far, it's working great.                                          |
| 29:24      | And I think that the real key to this is really,                                                   |
| 29:27      | like, only double sync on one device.                                                              |
| 29:29      | That's what they say if you really need to do that.                                                |
| 29:31      | And so that's what I'm doing.                                                                      |
| 29:35      | And that works really well for me.                                                                 |
| 29:37      | So I'm quite pleased with that.                                                                    |
| 29:40      | I also love the fact that if you go on their                                                       |
| 29:42      | security and privacy section for [[Obsidian]] sync,                                                    |
| 29:45      | and you look at the end-to-end encryption section,                                                 |
| 29:48      | they have a part of,                                                                               |
| 29:49      | if you forget your password,                                                                       |
| 29:50      | your data is unusable forever.                                                                     |
| 29:53      | And that is exactly how end-to-end encryption should work.                                         |
| 29:55      | There is no way to recover it if you lose that password.                                           |
| 29:58      | So don't lose that password, folks.                                                                |
| 29:59      | There's a managed encryption option                                                                |
| 30:01      | if you want to just keep your data safe.                                                           |
| 30:03      | But you don't want to risk losing the password,                                                    |
| 30:06      | where they will help you out                                                                       |
| 30:08      | and create an encryption password for you                                                          |
| 30:10      | and store it on their servers.                                                                     |
| 30:14      | But they're not going to access your data                                                          |
| 30:15      | without your permission.                                                                           |
| 30:16      | So that's pretty nice.                                                                             |
| 30:18      | But yeah.                                                                                          |
| 30:19      | And the way you're storing the data,                                                               |
| 30:20      | if you're making local backups,                                                                    |
| 30:22      | you are backing your data up.                                                                      |
| 30:23      | So that's there too.                                                                               |
| 30:26      | Some other, I think, some plugins                                                                  |
| 30:28      | that are automation adjacent,                                                                      |
| 30:30      | but not focused on automation.                                                                     |
| 30:32      | Let's start with Workbench.                                                                        |
| 30:34      | That one, I feel like, is such a great thing.                                                      |
| 30:36      | I mean, so much of automation is about capture                                                     |
| 30:39      | and Workbench is a plugin built in about capture, really.                                          |
| 30:43      | That's the way I view it.                                                                          |
| 30:45      | Yeah.                                                                                              |
| 30:45      | Yeah.                                                                                              |
| 30:45      | I mean, we had Ryan Murphy come on the show, right?                                                |
| 30:47      | So that tells us folks a lot.                                                                      |
| 30:50      | But yeah, obsidian, you know,                                                                      |
| 30:54      | being, you know, taking up your probably in it,                                                    |
| 30:55      | looking at things anyway.                                                                          |
| 30:57      | And when you have an idea for something else                                                       |
| 31:00      | you can just throw it into the Workbench note.                                                     |
| 31:04      | And that just keeps everything handy, ready for you.                                               |
| 31:08      | And then you can do whatever it is with it                                                         |
| 31:11      | that you might want or need.                                                                       |
| 31:13      | And I particularly like the fact                                                                   |
| 31:15      | that I can control the name of my Workbench note                                                   |
| 31:18      | and I can also control the line prefix for every item.                                             |
| 31:20      | So I've customised this to be dash space,                                                          |
| 31:23      | open square bracket space, closer bracket space,                                                   |
| 31:26      | which means it's a task.                                                                           |
| 31:27      | So then by default, everything that gets added,                                                    |
| 31:30      | every new line added to my Workbench is a task,                                                    |
| 31:32      | which works perfectly for me because it either needs doing                                         |
| 31:35      | or it needs converting into a proper note                                                          |
| 31:37      | and something magical coming out of it.                                                            |
| 31:39      | And so that's what I do.                                                                           |
| 31:41      | How have you configured Workbench, David?                                                          |
| 31:44      | Just, I'm using the default setup.                                                                 |
| 31:47      | I love the name Workbench.                                                                         |
| 31:48      | It pushes all my buttons and it's a place,                                                         |
| 31:51      | it's a clearing house, really, for me.                                                             |
| 31:53      | Yeah.                                                                                              |
| 31:54      | And so it's a great way to capture stuff                                                           |
| 31:56      | when I'm already in there.                                                                         |
| 31:57      | As I mentioned before, a lot of stuff ends up in [[Dropbox\|Dropbox's]].                                        |
| 31:59      | Like I'm just capturing this and I'll deal with it later.                                          |
| 32:02      | But if I'm already in [[Obsidian]]                                                                     |
| 32:03      | and I'm looking at things and realising,                                                           |
| 32:05      | oh, right, I need to have a look at this or that,                                                  |
| 32:07      | then I will make notes in my Workbench                                                             |
| 32:12      | to help me keep things getting done.                                                               |
| 32:15      | Another one I use, and this is definitely                                                          |
| 32:18      | the developer in me talking, is BetterCodeBlock.                                                   |
| 32:21      | So BetterCodeBlock allows you to have blocks of code                                               |
| 32:25      | in your text in [[Obsidian]], and a block of code,                                                     |
| 32:30      | if it's a block, has three backticks and a new line                                                |
| 32:33      | and then all of your code, and then three backticks again.                                         |
| 32:36      | And BetterCodeBlock has title, line numbers,                                                       |
| 32:42      | and a collapse button, which is very nice                                                          |
| 32:44      | if you just want to be able to expand and collapse that section.                                   |
| 32:47      | And the other part of this that for me is absolutely crucial                                       |
| 32:50      | is those first three backticks,                                                                    |
| 32:52      | where I've got backtick, backtick, backtick.                                                       |
| 32:55      | Before the new line, I have the word there                                                         |
| 32:58      | of whatever kind of code it is.                                                                    |
| 33:01      | So if I'm pasting [[JavaScript]] code, then I'll type JS.                                              |
| 33:04      | If it's PHP, I type PHP, and if it's Ruby, I'll type RB                                            |
| 33:07      | or Py for Python.                                                                                  |
| 33:09      | And those all combined together mean                                                               |
| 33:12      | that whenever I'm pasting a chunk of text in there,                                                |
| 33:15      | I know it's going to be correctly syntax highlighted,                                              |
| 33:17      | and I'm going to have useful information                                                           |
| 33:20      | that will help me identify quickly                                                                 |
| 33:21      | what this colourful block of stuff is                                                               |
| 33:23      | without actually reading the text.                                                                 |
| 33:26      | Yeah, that's something I'm never going to use.                                                     |
| 33:29      | Exactly, but if other people listening may well                                                    |
| 33:31      | want something like that or think,                                                                 |
| 33:33      | how this is interesting, I wonder if there's something                                             |
| 33:36      | that will let me do something similar                                                              |
| 33:38      | with whatever it is they're looking for.                                                           |
| 33:40      | No, and I think it makes sense.                                                                    |
| 33:41      | And the other one I want to talk about for sure                                                    |
| 33:44      | because it is the foundation of some of the automation                                             |
| 33:46      | we're going to talk about is [[Dataview]].                                                             |
| 33:48      | So [[Dataview]], I don't even know                                                                     |
| 33:50      | if I can describe it.                                                                              |
| 33:52      | Basically, it's an indexing, displaying algorithm                                                  |
| 33:57      | that you can customise and apply to all of your files.                                             |
| 34:00      | So it looks at all your files.                                                                     |
| 34:02      | The most basic example is say,                                                                     |
| 34:05      | give me a list of every file in this folder                                                        |
| 34:09      | that has the tag active in it,                                                                     |
| 34:11      | and then you get all your active documents in that folder.                                         |
| 34:15      | I mean, it can go a lot further, though.                                                           |
| 34:19      | Oh, yeah. Yeah, like I mentioned my network diagram before,                                        |
| 34:22      | or like my network documentation.                                                                  |
| 34:25      | Well, I have a network diagram which I've done in Mermaid,                                         |
| 34:28      | which is something that [[Obsidian]] supports,                                                         |
| 34:31      | where you can just sort of write dashes and arrows                                                 |
| 34:35      | and like use brackets to link things together, essentially.                                        |
| 34:38      | Somebody made a markdown diagramming language called Mermaid.                                      |
| 34:41      | Yeah, I mean, it's been around for quite a while,                                                  |
| 34:44      | but it works really well.                                                                          |
| 34:46      | It sounds crazy, but it's not that hard.                                                           |
| 34:48      | Not that hard, really, to learn, either.                                                           |
| 34:50      | I've made some mermaid documents, too.                                                             |
| 34:52      | Mm-hmm, yeah.                                                                                      |
| 34:53      | Well, I have a mermaid diagram for my network, of course I do,                                     |
| 34:56      | but I also have a date of view table,                                                              |
| 34:58      | because every device on my network is a markdown file,                                             |
| 35:02      | as I mentioned earlier, with the AML headers.                                                      |
| 35:05      | But all of those headers can get pulled out of those files                                         |
| 35:08      | to be turned into a table.                                                                         |
| 35:10      | So then I can have, you know, a list of my devices at a table,                                     |
| 35:14      | and I can see their IP addresses,                                                                  |
| 35:15      | whether they're hardwired or Wi-Fi,                                                                |
| 35:18      | if they've got a fixed IP address or not,                                                          |
| 35:19      | MAC addresses and so on.                                                                           |
| 35:21      | And that's in a table, automatically.                                                              |
| 35:24      | And I update where those documents in that table updates,                                          |
| 35:27      | because that table is just reading the data out of the files.                                      |
| 35:30      | And that is the magic part for me,                                                                 |
| 35:32      | because it doesn't require me to enter data in multiple places                                     |
| 35:36      | to get multiple views.                                                                             |
| 35:37      | That is anti-automation, as far as I'm concerned.                                                  |
| 35:41      | It just lets me, you know, keep everything in sync,                                                |
| 35:45      | is the wrong word, because you're not syncing it.                                                  |
| 35:47      | It's just reading the data.                                                                        |
| 35:49      | But that's kind of the point.                                                                      |
| 35:52      | Rows are so much you can do with [[Obsidian]].                                                         |
| 35:54      | That's the hard thing about this topic.                                                            |
| 35:56      | Every time we start into it, it's like,                                                            |
| 35:57      | I don't want to lose the listeners.                                                                |
| 35:59      | But this has been the automation-adjacent portion                                                  |
| 36:04      | of the plugins.                                                                                    |
| 36:05      | We have more that we're going to talk about                                                        |
| 36:07      | where you actually automate.                                                                       |
| 36:10      | This episode of The Automators is brought to you by Trade Coffee.                                  |
| 36:13      | Save big and support small roasters.                                                               |
| 36:16      | Get $30 off your first order.                                                                      |
| 36:18      | Just go to drinktrade.com/automators.                                                        |
| 36:22      | We're so happy to have Trade Coffee                                                                |
| 36:24      | as a sponsor of The Automators.                                                                    |
| 36:25      | Even though I don't drink coffee, I'm a happy customer.                                            |
| 36:29      | And that's because I got some Trade Coffee for my wife.                                            |
| 36:32      | And now I'm like a hero.                                                                           |
| 36:34      | We signed up for some Trade Coffee.                                                                |
| 36:37      | Specifically, we leaned into the Dark Rose collection                                              |
| 36:39      | and she got some great coffee.                                                                     |
| 36:41      | The one that really landed with her                                                                |
| 36:42      | was Mother Tongue's Nebula Dark Rose from Oakland, California.                                     |
| 36:46      | She's hooked and she wants more.                                                                   |
| 36:48      | I love the simplicity on it.                                                                       |
| 36:50      | We signed up.                                                                                      |
| 36:51      | Coffee showed up.                                                                                  |
| 36:52      | Wife was happy.                                                                                    |
| 36:53      | All is good.                                                                                       |
| 36:54      | When you become a Trade Coffee customer,                                                           |
| 36:56      | you'll get the freshest and best-tasting coffee                                                    |
| 36:58      | you've ever made at home.                                                                          |
| 37:00      | And the coffee you'll be drinking                                                                  |
| 37:01      | will be from the country's best independent craft roasters,                                        |
| 37:04      | which helps those small businesses out, too.                                                       |
| 37:07      | And this is cool.                                                                                  |
| 37:08      | Trade's coffee team actually taste-tests thousands of coffees                                      |
| 37:11      | to keep 450 different kinds live                                                                   |
| 37:13      | and ready to ship every day.                                                                       |
| 37:15      | Everyone has that one coffee they just love                                                        |
| 37:17      | and Trade will help you find it.                                                                   |
| 37:19      | Trade is confident they'll match you right the first time.                                         |
| 37:22      | And if they don't, just give them your feedback                                                    |
| 37:25      | and an actual coffee expert will work with you                                                     |
| 37:27      | to send a brand new bag for free.                                                                  |
| 37:29      | When you sign up for Trade Coffee,                                                                 |
| 37:30      | they send you freshly roasted beans                                                                |
| 37:32      | from 60 of the country's best craft roasters.                                                      |
| 37:35      | Small businesses who pay farmers fair prices                                                       |
| 37:38      | to sustainably source the greatest beans from around the world.                                    |
| 37:42      | It just takes answering a couple questions                                                         |
| 37:43      | to get your personalised variety of coffees delivered                                              |
| 37:46      | fresh to you as often as you like.                                                                 |
| 37:49      | So far, they've delivered over 5 million bags of fresh coffee                                      |
| 37:52      | with more than 750,000 positive reviews.                                                           |
| 37:56      | My wife works really hard,                                                                         |
| 37:57      | and I want to do nice things for her.                                                              |
| 37:59      | And getting her better coffee with Trade Coffee                                                    |
| 38:01      | has been one of the nicest things I've been able to do for her                                     |
| 38:04      | in a while.                                                                                        |
| 38:04      | And I'm really happy to be able to do it, and you can, too.                                        |
| 38:08      | Right now, Trade is offering new subscribers                                                       |
| 38:10      | a total of $30 off your first order plus free shipping                                             |
| 38:14      | when you go to drinktrade.com/automators.                                                     |
| 38:17      | That's more than 40 cups of coffee for free.                                                       |
| 38:20      | Get started by taking their quiz at drinktrade.com/automators                                 |
| 38:24      | and let Trade find you a coffee you'll love.                                                       |
| 38:27      | That URL, one more time,                                                                           |
| 38:29      | drinktrade.com/automators for $30 off.                                                        |
| 38:33      | And our thanks to Trade for the support of the automators                                          |
| 38:36      | and all of Relay FM.                                                                               |
| 38:39      | So there's a whole group of plugins for [[Obsidian]]                                                   |
| 38:42      | that are full-on automation tools.                                                                 |
| 38:44      | And these are community plugins, by and large.                                                     |
| 38:48      | But there's several that you and I have been using                                                 |
| 38:51      | and playing with that I think automators should be aware of.                                       |
| 38:54      | Yeah.                                                                                              |
| 38:55      | Let's start with the easy one, paste URL into selection.                                           |
| 38:58      | Yeah, now this sounds so simple, right?                                                            |
| 39:01      | Like, you select some text, you paste,                                                             |
| 39:03      | and if it's URL, it just makes it into a URL.                                                      |
| 39:07      | So I'll put the square brackets around it                                                          |
| 39:08      | with the round brackets afterwards,                                                                |
| 39:09      | and whatever was on your clipboard goes into the round brackets.                                   |
| 39:12      | But I swear this saves me so much time.                                                            |
| 39:15      | It's ridiculous.                                                                                   |
| 39:16      | I keep expecting to see an update note to [[Obsidian]]                                                 |
| 39:19      | where there's going to be a checkbox,                                                              |
| 39:21      | and this is a built-in thing.                                                                      |
| 39:22      | I mean, this feels to me like one that is on the [[Sherlocking\|Sherlock]] list.                                    |
| 39:25      | I mean, how is that not already in?                                                                |
| 39:27      | But that little plugin, I use it every day, and I love it.                                         |
| 39:31      | Yeah, yeah, it just saves.                                                                         |
| 39:33      | You know, even if it only saves me a split second,                                                 |
| 39:35      | because otherwise it would be what,                                                                |
| 39:37      | Command K and Command V, and I think this is actually                                              |
| 39:39      | replaced Command K for me,                                                                         |
| 39:41      | and it checks if there's a URL in the clipboard.                                                   |
| 39:43      | I don't even remember how it works now.                                                            |
| 39:45      | I just know that it works.                                                                         |
| 39:47      | So, yeah, I just hit Command V, and it pastes basically,                                           |
| 39:49      | which is perfect.                                                                                  |
| 39:51      | But even if it's one keyboard shortcut, it saves me.                                               |
| 39:53      | You know, it's saving me a keyboard shortcut every time,                                           |
| 39:55      | so I have to do less thinking.                                                                     |
| 39:57      | And the time saving is one thing,                                                                  |
| 39:59      | but it's also the other piece of automation.                                                       |
| 40:01      | It's reliable.                                                                                     |
| 40:03      | Like, when I, if I find up, I'm typing brackets,                                                   |
| 40:05      | and, you know, parentheses,                                                                        |
| 40:07      | inevitably I'm going to miss one or something,                                                     |
| 40:09      | and it's not going to work.                                                                        |
| 40:11      | And this just, it's just rock solid.                                                               |
| 40:13      | You hit the button, it goes in, you move on.                                                       |
| 40:15      | Yes, exactly.                                                                                      |
| 40:17      | And I think that that is, you know,                                                                |
| 40:19      | something that we, we don't joke about it.                                                         |
| 40:21      | It is true.                                                                                        |
| 40:23      | Like, copy-paste is an automation.                                                                 |
| 40:25      | And in my opinion,                                                                                 |
| 40:27      | improving your copy-paste method                                                                   |
| 40:29      | is a valid automation.                                                                             |
| 40:31      | So I feel like, you know,                                                                          |
| 40:33      | there's definitely something to be said for that.                                                  |
| 40:35      | And there is also                                                                                  |
| 40:37      | another one,                                                                                       |
| 40:39      | which I really like,                                                                               |
| 40:41      | which is Note Auto Creator,                                                                        |
| 40:43      | where in [[Obsidian]],                                                                                 |
| 40:45      | if you put two sets of square brackets around a note,                                              |
| 40:47      | or around some text, sorry,                                                                        |
| 40:49      | then that makes it into a clickable link.                                                          |
| 40:51      | And then, you know,                                                                                |
| 40:53      | you can click on it and go to the note,                                                            |
| 40:55      | and it's fine if the note exists,                                                                  |
| 40:57      | but what if the note doesn't exist?                                                                |
| 40:59      | Well, you would create the note at that point,                                                     |
| 41:01      | and then you, you know, type into it,                                                              |
| 41:03      | and so no Auto Creator just                                                                        |
| 41:05      | automatically creates it for you.                                                                  |
| 41:07      | So it's just already there,                                                                        |
| 41:09      | which is perfect for me.                                                                           |
| 41:11      | It just removes, like, that one step of,                                                           |
| 41:13      | wait, I'm skimming for it in the sidebar,                                                          |
| 41:15      | because I know I've linked it,                                                                     |
| 41:17      | but where is it? It's not here.                                                                    |
| 41:19      | What happened? No, it is just                                                                      |
| 41:21      | automatically existing now.                                                                        |
| 41:23      | I don't like that it doesn't auto-create that note.                                                |
| 41:25      | You know, I've worked with other,                                                                  |
| 41:27      | like, linking apps in the past                                                                     |
| 41:29      | that auto-generate those notes,                                                                    |
| 41:31      | and I feel like it just creates a lot of stuff.                                                    |
| 41:33      | I want the ability to, you know,                                                                   |
| 41:35      | in the future, create a note on a linked idea,                                                     |
| 41:37      | but not necessarily today,                                                                         |
| 41:39      | and I don't want to, like,                                                                         |
| 41:41      | put a bunch of empty notes into my database.                                                       |
| 41:43      | So I'm actually okay                                                                               |
| 41:45      | with the default behaviour,                                                                         |
| 41:47      | but I'm glad this exists.                                                                          |
| 41:49      | I think for a lot of people like you,                                                              |
| 41:51      | if I put two brackets on, I want a note,                                                           |
| 41:53      | and that's just not me.                                                                            |
| 41:55      | Yeah, yeah, for me, I'm only going to be linking it                                                |
| 41:57      | if I am making the note,                                                                           |
| 41:59      | and I'm often, like, writing down,                                                                 |
| 42:01      | like, you know, I'll be writing some text                                                          |
| 42:03      | and be like, okay, well, I need to write about this bit                                            |
| 42:05      | and this bit and this bit, and they're going to be separate notes.                                 |
| 42:07      | Just, like, link those, and then                                                                   |
| 42:09      | they all exist automatically.                                                                      |
| 42:11      | And so I can go into them and just, like,                                                          |
| 42:13      | process and work through each one                                                                  |
| 42:15      | to just fill that out with data                                                                    |
| 42:17      | as I go, and because of my workflow                                                                |
| 42:19      | that works really well for me.                                                                     |
| 42:21      | But, you know, as you said, it doesn't work for you,                                               |
| 42:23      | but that's fine. It's an option.                                                                   |
| 42:25      | It probably indicates that I link too much                                                         |
| 42:27      | is what it does.                                                                                   |
| 42:29      | I mean, maybe, maybe not.                                                                          |
| 42:31      | But equally, you know, it really depends                                                           |
| 42:33      | on how you decide that linking works for you.                                                      |
| 42:35      | For me, linking only works                                                                         |
| 42:37      | if there is something at the other end of the link.                                                |
| 42:39      | Otherwise, it's kind of like a signpost pointing,                                                  |
| 42:41      | you know, to the side of the road,                                                                 |
| 42:43      | but there is no junction.                                                                          |
| 42:45      | There is no road to go down.                                                                       |
| 42:47      | There is, theoretically,                                                                           |
| 42:49      | the possibility of a road in the future,                                                           |
| 42:51      | but there is no road yet.                                                                          |
| 42:53      | For me, if I'm creating the link,                                                                  |
| 42:55      | this road is under construction                                                                    |
| 42:57      | and will be here soon.                                                                             |
| 42:59      | At the very least, you know,                                                                       |
| 43:01      | the fact that I intended                                                                           |
| 43:03      | to write something about this,                                                                     |
| 43:05      | and then I've got, of course, the date                                                             |
| 43:07      | that the file was created and everything,                                                          |
| 43:09      | so I know what was going on there,                                                                 |
| 43:11      | which is just very useful for me.                                                                  |
| 43:13      | Yeah, yeah. So I don't do that.                                                                    |
| 43:15      | It's just a different way of approaching it,                                                       |
| 43:17      | but I have lots of unbuilt roads                                                                   |
| 43:19      | in my [[Obsidian]] database,                                                                           |
| 43:21      | but, you know, I'll get there someday, or I won't.                                                 |
| 43:23      | We'll see. Yes.                                                                                    |
| 43:25      | Auto note mover, that's another nice, basic one.                                                   |
| 43:27      | Yeah, yeah.                                                                                        |
| 43:29      | It moves notes for you automatically.                                                              |
| 43:31      | You know, we've talked                                                                             |
| 43:33      | about [[Hazel]] on the show.                                                                           |
| 43:35      | Well, this is kind of a mini-[[Hazel]] for obsidian,                                                   |
| 43:37      | only obsidian,                                                                                     |
| 43:39      | but you can register the tag                                                                       |
| 43:41      | or the title of a note                                                                             |
| 43:43      | you want to move to a rule,                                                                        |
| 43:45      | and when the active note,                                                                          |
| 43:47      | so the note that you're currently working on,                                                      |
| 43:49      | matches the rule, it gets moved.                                                                   |
| 43:51      | So it only gets moved when you actually,                                                           |
| 43:53      | you know, like, open it up to do stuff with it,                                                    |
| 43:55      | which is quite nice.                                                                               |
| 43:57      | And, you know,                                                                                     |
| 43:59      | it will, you know,                                                                                 |
| 44:01      | give you a warning if                                                                              |
| 44:03      | you can't find the folder,                                                                         |
| 44:05      | or the folder's already got a note with this name,                                                 |
| 44:07      | but it can work really well,                                                                       |
| 44:09      | especially if you've got, you know,                                                                |
| 44:11      | the automations that you're working on,                                                            |
| 44:13      | and you don't want to be, you know,                                                                |
| 44:15      | feeding things directly deep into your [[Obsidian]] folder                                             |
| 44:17      | or something, and you just want to drop everything                                                 |
| 44:19      | into one particular folder where you can have                                                      |
| 44:21      | auto note mover pick up everything                                                                 |
| 44:23      | and just shuffle things around for you                                                             |
| 44:25      | within obsidian, which is very nice.                                                               |
| 44:27      | Another one                                                                                        |
| 44:29      | that I think qualifies as an automation plugin                                                     |
| 44:31      | is tasks.                                                                                          |
| 44:33      | You were saying earlier that you were auto-generating                                              |
| 44:35      | some tasks. Are you using the tasks plugin?                                                        |
| 44:37      | I am not.                                                                                          |
| 44:39      | No. So, you know,                                                                                  |
| 44:41      | I don't really generate tasks.                                                                     |
| 44:43      | I just have tags,                                                                                  |
| 44:45      | which tell me, like, hey, this note needs                                                          |
| 44:47      | something done with it, but it's not                                                               |
| 44:49      | specifically, you know,                                                                            |
| 44:51      | like, you need to go, like,                                                                        |
| 44:53      | there is a list of tasks here.                                                                     |
| 44:55      | For me, I found personally that                                                                    |
| 44:57      | if I'm trying to, you know,                                                                        |
| 44:59      | manage my tasks in obsidian,                                                                       |
| 45:01      | then I end up not looking in omnifocus,                                                            |
| 45:03      | which is where the actual work is,                                                                 |
| 45:05      | and that can be a little bit problematic.                                                          |
| 45:07      | So, I tend not to.                                                                                 |
| 45:09      | I went on a similar journey. I tried it                                                            |
| 45:11      | for, like, a month, and I did a whole thing                                                        |
| 45:13      | in the MacSparky Labs on it, but ultimately,                                                      |
| 45:15      | [[Obsidian]] is my task manager,                                                                       |
| 45:17      | and I'm sorry, ultimately,                                                                         |
| 45:19      |OmniFocusis my task manager, [[Obsidian]] is not,                                                     |
| 45:21      | but if you're interested in                                                                        |
| 45:23      | doing tasks there, there's a ton of                                                                |
| 45:25      | automation built in, where you can                                                                 |
| 45:27      | have it auto-generate lists                                                                        |
| 45:29      | and filter lists based on tag.                                                                     |
| 45:31      | It's kind of like a data view                                                                      |
| 45:33      | built feature set,                                                                                 |
| 45:35      | but just for task management,                                                                      |
| 45:37      | and I know there's quite a few people                                                              |
| 45:39      | that do that, so that's another kind                                                               |
| 45:41      | of automation task-related                                                                         |
| 45:43      | plugin. So many,                                                                                   |
| 45:45      | so many plugins, Rose.                                                                             |
| 45:47      | Yes, yes, there are many plugins,                                                                  |
| 45:49      | but also, you know, there are many good plugins,                                                   |
| 45:51      | and I feel like                                                                                    |
| 45:53      | without having a little bit of time                                                                |
| 45:55      | to just go and explore all of these                                                                |
| 45:57      | things, you know, and,                                                                             |
| 45:59      | you know, taking, it's not necessarily                                                             |
| 46:01      | a wrong turn, but taking a bit of a detour                                                         |
| 46:03      | to see whether or not this is right for you                                                        |
| 46:05      | can work really well.                                                                              |
| 46:07      | I've ended up, because a lot of people                                                             |
| 46:09      | do use [[Obsidian]] for daily notes                                                                    |
| 46:11      | and keeping track of their tasks and                                                               |
| 46:13      | things. I did that experiment in obsidian,                                                         |
| 46:15      | and for me, I didn't                                                                               |
| 46:17      | like having a kind of daily log                                                                    |
| 46:19      | mixed in with all of my notes.                                                                     |
| 46:21      | It was not                                                                                         |
| 46:23      | very efficient, and it felt like it was clattering                                                 |
| 46:25      | at my search for things when I knew I was just searching                                           |
| 46:27      | for the data rather                                                                                |
| 46:29      | than information about when I'd done something,                                                    |
| 46:31      | but I do like knowing when I did things,                                                           |
| 46:33      | so I ended up splitting that stuff over to agenda.                                                 |
| 46:35      | But because                                                                                        |
| 46:37      | there's deep links in both, I can link one to the other                                            |
| 46:39      | very simply,                                                                                       |
| 46:41      | which, you know, works                                                                             |
| 46:43      | very well for me.                                                                                  |
| 46:45      | And speaking of links, one of the things                                                           |
| 46:47      | that I use is a link headers                                                                       |
| 46:49      | directly plugin, which                                                                             |
| 46:51      | allows me to link a header within a note                                                           |
| 46:53      | directly instead of,                                                                               |
| 46:55      | you know, just linking the                                                                         |
| 46:57      | the note title, and then                                                                           |
| 46:59      | having, you know, like the                                                                         |
| 47:01      | header after that, I can just have                                                                 |
| 47:03      | the header title linked                                                                            |
| 47:05      | automatically. I love that one too.                                                                |
| 47:07      | I mean, I'm such a fan of                                                                          |
| 47:09      | interlinking                                                                                       |
| 47:11      | information, and                                                                                   |
| 47:13      | like you, my [[Obsidian]] data is precious                                                             |
| 47:15      | to me, and that's one of the reasons                                                               |
| 47:17      | why I'm                                                                                            |
| 47:19      | pulling back a little bit from                                                                     |
| 47:21      | certain categories of data I put in there,                                                         |
| 47:23      | because I want the searches to                                                                     |
| 47:25      | be more efficient, and                                                                             |
| 47:27      | I want [[Obsidian]] to be where my best                                                                |
| 47:29      | ideas are, and sometimes                                                                           |
| 47:31      | I feel like I've cluttered it up too                                                               |
| 47:33      | much, but with this plugin                                                                         |
| 47:35      | you can not only link to a note                                                                    |
| 47:37      | like if you've got a two-page note                                                                 |
| 47:39      | but, you know, you have a heading on the second page                                               |
| 47:41      | that is important for a future link                                                                |
| 47:43      | you can do that, and that                                                                          |
| 47:45      | that automation goes everywhere. You can                                                           |
| 47:47      | put it in OmniFocus, you can                                                                       |
| 47:49      | put it, you can, you know, you can do                                                              |
| 47:51      | anything with it, anywhere that you can open a link                                                |
| 47:53      | you can, you can get there,                                                                        |
| 47:55      | you can even put it in Kraft, so                                                                   |
| 47:57      | no matter how you're                                                                               |
| 47:59      | tying all this stuff together                                                                      |
| 48:01      | the more focus you can get with your                                                               |
| 48:03      | linking the better. I was very happy when this one                                                 |
| 48:05      | released. Yes,                                                                                     |
| 48:07      | yes, so was I.                                                                                     |
| 48:09      | Though another one, which                                                                          |
| 48:11      | it took me a bit longer to find than perhaps it should                                             |
| 48:13      | have, which I really love, is                                                                      |
| 48:15      | the dynamic table of contents.                                                                     |
| 48:17      | So, where you've got all of your headers                                                           |
| 48:19      | in a file, and, you know, some of my files are                                                     |
| 48:21      | pretty long with a lot of headers, but                                                             |
| 48:23      | something I'm used to as a developer is being                                                      |
| 48:25      | able to see a list of all of my functions in a                                                     |
| 48:27      | programming file, and I really                                                                     |
| 48:29      | like having the same feature when I'm looking                                                      |
| 48:31      | at my huge blocks of code, being able to                                                           |
| 48:33      | see all of my headers, and so I can                                                                |
| 48:35      | scroll up and down to them by just clicking on them.                                               |
| 48:37      | And the dynamic table of contents                                                                  |
| 48:39      | has certainly made that a                                                                          |
| 48:41      | lot easier at times, because                                                                       |
| 48:43      | you know, just like I like automatically                                                           |
| 48:45      | having notes created for links                                                                     |
| 48:47      | I will create the headers and then go back                                                         |
| 48:49      | and fill in the content afterwards.                                                                |
| 48:51      | So, being able to just, you know, go up to the top,                                                |
| 48:53      | click on the header that I'm looking for and                                                       |
| 48:55      | go down to it and do the work there                                                                |
| 48:57      | makes my life a lot easier.                                                                        |
| 48:59      | And it's all                                                                                       |
| 49:01      | so easy. It's just like you install                                                                |
| 49:03      | the plugin and now you've added the feature.                                                       |
| 49:05      | I mean, I think that's                                                                             |
| 49:07      | another reason. It's hard to, like,                                                                |
| 49:09      | communicate this, because some people listen to us                                                 |
| 49:11      | and we sound like, you know, we're in some sort of                                                 |
| 49:13      | [[Obsidian]] cult, but it's like,                                                                      |
| 49:15      | it's just so amazing that you've got this app                                                      |
| 49:17      | you use, and then somebody somewhere                                                               |
| 49:19      | created a little plugin that added                                                                 |
| 49:21      | a feature that is exactly what you needed.                                                         |
| 49:23      | And every day there are                                                                            |
| 49:25      | new ones getting dropped. It's like, it's so fun.                                                  |
| 49:27      | Yes, it is                                                                                         |
| 49:29      | a lot of fun, but not only is it fun,                                                              |
| 49:31      | but it can genuinely                                                                               |
| 49:33      | change and shape                                                                                   |
| 49:35      | workflows.                                                                                         |
| 49:37      | And I think that is something that it took                                                         |
| 49:39      | me a little while to figure out,                                                                   |
| 49:41      | you know, like,                                                                                    |
| 49:43      | do I want to shape my workflow                                                                     |
| 49:45      | and force [[Obsidian]] into it, or do I                                                                |
| 49:47      | want to let my workflow be shaped by obsidian?                                                     |
| 49:49      | And the answer is it's kind of                                                                     |
| 49:51      | it's not 50-50,                                                                                    |
| 49:53      | but it's very much give and take. I start with                                                     |
| 49:55      | an idea in my head of this is how it's going to work                                               |
| 49:57      | and that's how I'm going to do that.                                                               |
| 49:59      | And then I                                                                                         |
| 50:01      | end up looking for something and finding                                                           |
| 50:03      | maybe not exactly what it is I was looking for,                                                    |
| 50:05      | though I frequently do find that,                                                                  |
| 50:07      | but something very similar or something                                                            |
| 50:09      | better where I see it and immediately                                                              |
| 50:11      | it occurs to me this is a much better solution                                                     |
| 50:13      | for the problem that I had than what I thought                                                     |
| 50:15      | I was going to do.                                                                                 |
| 50:17      | And I found that that is definitely                                                                |
| 50:19      | a benefit of having such                                                                           |
| 50:21      | a big community as part of it as well                                                              |
| 50:23      | who's able to create things                                                                        |
| 50:25      | or ask other people to create things based                                                         |
| 50:27      | on their requests and requirements,                                                                |
| 50:29      | because you do end up with                                                                         |
| 50:31      | it's not conflicting plugins,                                                                      |
| 50:33      | but just similar plugins                                                                           |
| 50:35      | that do the same thing.                                                                            |
| 50:37      | [[Obsidian]] has built-in template support.                                                            |
| 50:39      | The built-in template support is                                                                   |
| 50:41      | excellent, it's robust, it's very simple, it works.                                                |
| 50:43      | And then there's [[Templater]],                                                                        |
| 50:45      | which is a great plugin.                                                                           |
| 50:47      | It's so good.                                                                                      |
| 50:49      | And it allows you to create and use templates                                                      |
| 50:51      | just the same way as the built-in one.                                                             |
| 50:53      | Only these templates are                                                                           |
| 50:55      | on steroids. You can                                                                               |
| 50:57      | have it do all sorts of things.                                                                    |
| 50:59      | I've got custom [[JavaScript]] in there                                                                |
| 51:01      | doing things when I                                                                                |
| 51:03      | create stuff, but also I just                                                                      |
| 51:05      | have like little snippets                                                                          |
| 51:07      | type things which                                                                                  |
| 51:09      | are blocks that I can embed in any                                                                 |
| 51:11      | node with [[Templater]]                                                                                |
| 51:13      | because that's something it can do.                                                                |
| 51:15      | And it's great that somebody                                                                       |
| 51:17      | started out with this and then they're                                                             |
| 51:19      | just keeping going and there's full                                                                |
| 51:21      | documentation for it as well, which is                                                             |
| 51:23      | naturally one of my favourite parts.                                                                |
| 51:25      | But it's                                                                                           |
| 51:27      | just so good to see a variety.                                                                     |
| 51:29      | I think there's like 638 plugins                                                                   |
| 51:31      | as we look at this right now.                                                                      |
| 51:33      | Yeah, 638 community plugins                                                                        |
| 51:35      | and the plugin directory.                                                                          |
| 51:37      | It's a hell of a lot of plugins, David.                                                            |
| 51:39      | Yeah, you know, did you                                                                            |
| 51:41      | worry about that? I mean, as we                                                                    |
| 51:43      | start to invest in                                                                                 |
| 51:45      | our own workflows with these plugins,                                                              |
| 51:47      | what if the developer                                                                              |
| 51:49      | or the plugin decides, you know, life                                                              |
| 51:51      | got too busy and they're not going to do anymore?                                                  |
| 51:53      | There is no real way to monetise it                                                                |
| 51:55      | shortly of just sending them some money.                                                           |
| 51:57      | Yeah, well                                                                                         |
| 51:59      | all these plugins because of the way that they're created                                          |
| 52:01      | are open source                                                                                    |
| 52:03      | that you can't have a close                                                                        |
| 52:05      | source plugin.                                                                                     |
| 52:07      | I mean, you could try and obfuscate                                                                |
| 52:09      | the file and make it really difficult to read                                                      |
| 52:11      | and do stuff with, but that's                                                                      |
| 52:13      | not how the [[Obsidian]] plugin system works.                                                          |
| 52:15      | It's a pile of code files                                                                          |
| 52:17      | which fortunately they have a built-in way                                                         |
| 52:19      | and the preferences took easily search and install                                                 |
| 52:21      | all of these. But                                                                                  |
| 52:23      | because it's open source, you know,                                                                |
| 52:25      | I would say like 95, 99%                                                                           |
| 52:27      | of these even, at least the ones I've                                                              |
| 52:29      | looked at, all of them are on GitHub.                                                              |
| 52:31      | And so if somebody did stop                                                                        |
| 52:33      | working on it, then somebody else                                                                  |
| 52:35      | could fork it. That's what you do                                                                  |
| 52:37      | when you want to take                                                                              |
| 52:39      | something that exists and add something to it                                                      |
| 52:41      | on GitHub.                                                                                         |
| 52:43      | So you would fork it and add your own feature                                                      |
| 52:45      | and maybe they would be open                                                                       |
| 52:47      | to having people make pull requests back                                                           |
| 52:49      | and keep it in the existing repository or                                                          |
| 52:51      | maybe you'd end up                                                                                 |
| 52:53      | maintaining your own version or getting somebody else                                              |
| 52:55      | too. But I think                                                                                   |
| 52:57      | the thing that I have                                                                              |
| 52:59      | seen thus far with [[Obsidian]]                                                                        |
| 53:01      | and all of plugins                                                                                 |
| 53:03      | is I don't                                                                                         |
| 53:05      | feel like I've seen a time where a plugin                                                          |
| 53:07      | has significantly been broken                                                                      |
| 53:09      | by an update to [[Obsidian]].                                                                          |
| 53:11      | And I'm sure                                                                                       |
| 53:13      | that that is in a large part                                                                       |
| 53:15      | due to how hard                                                                                    |
| 53:17      | the developers behind some of these                                                                |
| 53:19      | really complex plugins work                                                                        |
| 53:21      | to keep everything working.                                                                        |
| 53:23      | But also I think that that is partially the part                                                   |
| 53:25      | of the [[Obsidian]] developers themselves                                                              |
| 53:27      | going, hey, we know that the community                                                             |
| 53:29      | is pretty important to this app                                                                    |
| 53:31      | so we're going to keep an eye on                                                                   |
| 53:33      | what we're doing and see if the most popular                                                       |
| 53:35      | stuff breaks. And they seem like                                                                   |
| 53:37      | some very nice folks there. I think there's actually two of them                                   |
| 53:39      | who are doing the main development                                                                 |
| 53:41      | and they've got an iOS app,                                                                        |
| 53:43      | an Android app, a Mac OS app                                                                       |
| 53:45      | and a Windows app and a Linux app                                                                  |
| 53:47      | and that's five apps folks.                                                                        |
| 53:49      | Plus don't forget that you've got [[Apple Silicon]]                                                    |
| 53:51      | and you've got                                                                                     |
| 53:53      | [[Apple]] Intel machines                                                                               |
| 53:55      | and then you've got Windows and you've got the Windows Linux                                       |
| 53:57      | sub system and all of the different                                                                |
| 53:59      | Linux varieties. There's a heck of a lot of stuff                                                  |
| 54:01      | going on and add Android and iOS                                                                   |
| 54:03      | into the mix and I genuinely                                                                       |
| 54:05      | don't know when these folks are sleeping                                                           |
| 54:07      | but they are                                                                                       |
| 54:09      | working really hard on this and                                                                    |
| 54:11      | as best I can tell                                                                                 |
| 54:13      | obviously I don't have access to the source code                                                   |
| 54:15      | of [[Obsidian]] itself but as best I can tell                                                          |
| 54:17      | they're deliberately                                                                               |
| 54:19      | being careful and they're documenting                                                              |
| 54:21      | properly how people making plugins                                                                 |
| 54:23      | should do things                                                                                   |
| 54:25      | so that                                                                                            |
| 54:27      | it won't just break overnight                                                                      |
| 54:29      | and if you start                                                                                   |
| 54:31      | using a plugin and it seems                                                                        |
| 54:33      | to have no updates in a while                                                                      |
| 54:35      | and then something gets broken                                                                     |
| 54:37      | you know you can just try asking                                                                   |
| 54:39      | the person but if they are busy then                                                               |
| 54:41      | maybe somebody else will just create the same plugin                                               |
| 54:43      | or maybe the [[Obsidian]] developers will add it as a feature                                          |
| 54:45      | if enough people ask for it.                                                                       |
| 54:47      | Yeah, well and they just keep coming                                                               |
| 54:49      | like another automation friendly one is                                                            |
| 54:51      | the advanced new file                                                                              |
| 54:53      | plugin. It gives                                                                                   |
| 54:55      | you the ability to                                                                                 |
| 54:57      | you know generally create a new file                                                               |
| 54:59      | and just command in and you've got a new                                                           |
| 55:01      | blank file this allows you to do                                                                   |
| 55:03      | a whole bunch more. Yeah, yeah                                                                     |
| 55:05      | like just put it in this particular folder                                                         |
| 55:07      | which you know for me                                                                              |
| 55:09      | a lot of the times that I'm creating a folder                                                      |
| 55:13      | a lot of the times when I'm creating a file                                                        |
| 55:15      | I do want to put it in a                                                                           |
| 55:17      | particular folder to start with instead of                                                         |
| 55:19      | putting it in the root of my directory                                                             |
| 55:21      | the very top level                                                                                 |
| 55:23      | and then moving it somewhere else later                                                            |
| 55:27      | the move it somewhere else later bit                                                               |
| 55:29      | just doesn't really happen                                                                         |
| 55:31      | so I end up just creating all of my new files                                                      |
| 55:33      | with the                                                                                           |
| 55:35      | advanced new file option                                                                           |
| 55:37      | and then I just put it in the right folder in the first place                                      |
| 55:39      | and that skips the step later.                                                                     |
| 55:41      | And if you dig that there's another plugin                                                         |
| 55:43      | from another developer called advanced new folder                                                  |
| 55:45      | which does the same thing and lets you set a destination                                           |
| 55:47      | so you don't put it in your root                                                                   |
| 55:49      | or wherever. I mean I do                                                                           |
| 55:51      | occasionally find an [[Obsidian]]                                                                      |
| 55:53      | weird things in weird places.                                                                      |
| 55:55      | I was going through a folder of medical                                                            |
| 55:57      | notes and I had                                                                                    |
| 55:59      | a list of quotes from Yoda in there                                                                |
| 56:01      | like well how did this get here, you know                                                          |
| 56:03      | well                                                                                               |
| 56:05      | got here it did.                                                                                   |
| 56:07      | That's not very Yoda-ism but I'm trying David                                                    |
| 56:09      | I'm trying. That was it                                                                            |
| 56:11      | that was perfect.                                                                                  |
| 56:13      | But you know just to                                                                               |
| 56:15      | clarify how you fix that right                                                                     |
| 56:17      | you can attach it. Well no not even                                                                |
| 56:19      | that you can attach a keyboard shortcut to anything.                                               |
| 56:21      | So control m                                                                                       |
| 56:23      | I've mapped to move                                                                                |
| 56:25      | and you just hit control m and start typing                                                        |
| 56:27      | the name quotes or wherever you want                                                               |
| 56:29      | that file to go when it's selected                                                                 |
| 56:31      | you hit control m type a few letters                                                               |
| 56:33      | and then enter and off it goes.                                                                    |
| 56:35      | It's very easy to move                                                                             |
| 56:37      | with automation. Yeah                                                                              |
| 56:39      | yeah yeah and I love that                                                                          |
| 56:41      | because I create my notes in the right                                                             |
| 56:43      | place to start with unless something's gone                                                        |
| 56:45      | wrong you know I tend not to end up needing                                                        |
| 56:47      | to move files but if I did                                                                         |
| 56:49      | I'd definitely map a keyboard shortcut to it                                                       |
| 56:51      | but one of the things I found myself doing                                                         |
| 56:53      | and I realised                                                                                     |
| 56:55      | I was                                                                                              |
| 56:57      | organising paperclips                                                                              |
| 56:59      | I think is my favourite way to explain this                                                         |
| 57:01      | I was renaming                                                                                     |
| 57:03      | notes okay and then I was trying to change                                                         |
| 57:05      | the H1 in my notes to match                                                                        |
| 57:07      | the new note title because                                                                         |
| 57:09      | you know it was different then                                                                     |
| 57:11      | and that was not                                                                                   |
| 57:13      | okay because the information was wrong                                                             |
| 57:15      | we had a couple of features that got renamed                                                       |
| 57:17      | at work and I wanted to rename my notes                                                            |
| 57:19      | and so I started and I looked and there's                                                          |
| 57:21      | a gripe looking called a header sync                                                               |
| 57:23      | and I thought cool that'll do it and then I found                                                  |
| 57:25      | a better one embedded note                                                                         |
| 57:27      | titles it takes whatever                                                                           |
| 57:29      | the file name is of the note                                                                       |
| 57:31      | and embeds it as a H1 above                                                                        |
| 57:33      | your note so you it's only there when                                                              |
| 57:35      | you're looking at it in [[Obsidian]] it doesn't actually                                               |
| 57:37      | like edit it                                                                                       |
| 57:39      | and put it in the file for you                                                                     |
| 57:41      | it just shows it there and that                                                                    |
| 57:43      | for me is perfect because then I don't have to worry about                                         |
| 57:45      | things syncing or not syncing                                                                      |
| 57:47      | and updating stuff if I rename the file                                                            |
| 57:49      | it gets it it appears there                                                                        |
| 57:51      | perfectly and that that just                                                                       |
| 57:53      | you know saves me                                                                                  |
| 57:55      | a couple of seconds maybe                                                                          |
| 57:57      | to you know every so often if I would                                                              |
| 57:59      | rename a bunch of files I'd have to go through                                                     |
| 58:01      | and you know do a whole bunch of work on that                                                      |
| 58:03      | but you know it certainly                                                                          |
| 58:05      | you know it's an automation                                                                        |
| 58:07      | this episode                                                                                       |
| 58:09      | of Automators is brought to you by Doppler                                                         |
| 58:11      | in software development secrets are                                                                |
| 58:13      | private pieces of information that act as keys                                                     |
| 58:15      | and those keys unlock protective                                                                   |
| 58:17      | resources or sensitive data                                                                        |
| 58:19      | this can be stressful to configure and manage especially                                           |
| 58:21      | when sharing secrets across different teams and clouds                                             |
| 58:23      | thankfully those days are over                                                                     |
| 58:25      | introducing Doppler the world's                                                                    |
| 58:27      | first universal secrets platform                                                                   |
| 58:29      | it enables developers to automate the pain away                                                    |
| 58:31      | of managing secrets along with                                                                     |
| 58:33      | those hidden files used to manage them known as                                                    |
| 58:35      | M files                                                                                            |
| 58:37      | Doppler is your team's central source of truth                                                     |
| 58:39      | apps and app configuration                                                                         |
| 58:41      | secrets across all your environments and                                                           |
| 58:43      | clouds whether they're in Docker                                                                   |
| 58:45      | AWS, Vercel or                                                                                     |
| 58:47      | anywhere else Doppler works                                                                        |
| 58:49      | where you work and as your stack evolves                                                           |
| 58:51      | Doppler remains simple                                                                             |
| 58:53      | from startups to enterprises more than                                                             |
| 58:55      | 11,000 customers big and small                                                                     |
| 58:57      | are using Doppler so they can keep their secrets                                                   |
| 58:59      | and app configuration sync across devices                                                          |
| 59:01      | environments and team members                                                                      |
| 59:03      | say goodbye to M files set                                                                         |
| 59:05      | up Doppler for your team in less than four minutes                                                 |
| 59:07      | sign up for Doppler.com                                                                            |
| 59:09      | slash L slash                                                                                      |
| 59:11      | automators that's all lowercase                                                                    |
| 59:13      | that's Doppler.com                                                                                 |
| 59:15      | slash L/automators                                                                           |
| 59:17      | all lowercase go there                                                                             |
| 59:19      | now our thanks to Doppler for their support                                                        |
| 59:21      | of this show and all of Relay FM                                                                  |
| 59:23      | so                                                                                                 |
| 59:25      | David we were talking before                                                                       |
| 59:27      | you know that we can we can get stuff                                                              |
| 59:29      | into [[Obsidian]] from [[Drafts]] and keyboard                                                             |
| 59:31      | my show and [[Hazel]] have also come up as                                                             |
| 59:33      | has Zapier                                                                                         |
| 59:35      | [[Make]] and [[Make\|Integromat]]                                                                                |
| 59:37      | or as it used to be called and if this and that                                                    |
| 59:39      | what                                                                                               |
| 59:41      | would you say your favourite non [[Obsidian]]                                                           |
| 59:43      | automation is for [[Obsidian]]                                                                         |
| 59:45      | well I'm going to put a pin                                                                        |
| 59:47      | in keyboard my show and                                                                            |
| 59:49      | shortcuts because they are                                                                         |
| 59:51      | probably my favourite but                                                                           |
| 59:53      | the one that I keep finding                                                                        |
| 59:55      | useful is [[Hazel]] and                                                                                |
| 59:57      | like what we talked                                                                                |
| 59:59      | earlier about [[YAML]] and tags like you                                                               |
| 01:00:01   | can put a tag in like one of my most                                                               |
| 01:00:03   | commonly used tags is active                                                                       |
| 01:00:05   | and then I've got one called planning                                                              |
| 01:00:07   | and I've got one called shipped                                                                    |
| 01:00:09   | you know and I                                                                                     |
| 01:00:11   | have [[Hazel]] look at certain                                                                         |
| 01:00:13   | folders in my [[Obsidian]] database                                                                    |
| 01:00:15   | because it's local and                                                                             |
| 01:00:17   | if it sees active switch to ship                                                                   |
| 01:00:19   | it actually takes the file and moves it                                                            |
| 01:00:21   | to a different folder and                                                                          |
| 01:00:23   | or if it goes from planning to active                                                              |
| 01:00:25   | it moves it around to it's like                                                                    |
| 01:00:27   | I've got [[Hazel]] on the back in                                                                      |
| 01:00:29   | moving files for me                                                                                |
| 01:00:31   | and I just love that                                                                               |
| 01:00:33   | I can type a few letters                                                                           |
| 01:00:35   | in side [[Obsidian]]                                                                                   |
| 01:00:37   | and then an application outside of [[Obsidian]]                                                        |
| 01:00:39   | takes care of file management for me                                                               |
| 01:00:41   | I love that. Yes, yeah                                                                             |
| 01:00:43   | I love that too. There are certain things                                                          |
| 01:00:45   | if I archive them                                                                                  |
| 01:00:47   | then [[Hazel]] just                                                                                    |
| 01:00:49   | magics them away and throws them in                                                                |
| 01:00:51   | Devon thing for me so that                                                                         |
| 01:00:53   | you know I still have that data                                                                    |
| 01:00:55   | it's just no longer something                                                                      |
| 01:00:57   | that I will be looking for and searching for                                                       |
| 01:00:59   | in the same context as regularly                                                                   |
| 01:01:01   | and it now belongs                                                                                 |
| 01:01:03   | in the context in which I searched Devon thing                                                     |
| 01:01:05   | and so it gets moved over                                                                          |
| 01:01:07   | and that works incredibly                                                                          |
| 01:01:09   | well for me.                                                                                       |
| 01:01:11   | Similarly I do just have                                                                           |
| 01:01:13   | you know stuff dropped in                                                                          |
| 01:01:15   | as like it's usually                                                                               |
| 01:01:17   | a file but sometimes I even have                                                                   |
| 01:01:19   | entire folders with                                                                                |
| 01:01:21   | files inside of them dropped                                                                       |
| 01:01:23   | in I tend to use this do this                                                                      |
| 01:01:25   | with a make through the                                                                            |
| 01:01:27   | box sync at the moment                                                                             |
| 01:01:29   | that I have experimented a bit with                                                                |
| 01:01:31   | [[Keyboard Maestro}] and shortcuts for this                                                             |
| 01:01:33   | I've just ended up using make because                                                              |
| 01:01:35   | the data that triggers this is on the internet                                                     |
| 01:01:37   | so it makes sense to use something                                                                 |
| 01:01:39   | that's on the internet to solve the problem                                                        |
| 01:01:41   | you know it's amazing                                                                              |
| 01:01:43   | just having stuff up here                                                                          |
| 01:01:45   | in the right place or                                                                              |
| 01:01:47   | as close to the right place as possible                                                            |
| 01:01:49   | and you know it's very easy to sort out manually                                                   |
| 01:01:51   | then if I need to move it                                                                          |
| 01:01:53   | then you've got your entire structure                                                              |
| 01:01:55   | that you project for example                                                                       |
| 01:01:57   | just right there.                                                                                  |
| 01:01:59   | Let's finish the conversation                                                                      |
| 01:02:01   | on [[Hazel]] I mean the mechanics                                                                      |
| 01:02:03   | of it are pretty simple                                                                            |
| 01:02:05   | you've got the folder full of                                                                      |
| 01:02:07   | marked down files somewhere on your computer                                                       |
| 01:02:09   | [[Hazel]] you know we've done shows on [[Hazel]] in the past                                               |
| 01:02:11   | but the idea of [[Hazel\|Hazel's]] it will look                                                                |
| 01:02:13   | at a destination folder that you pick                                                              |
| 01:02:15   | and it will apply                                                                                  |
| 01:02:17   | rules so the one I talked about earlier                                                            |
| 01:02:19   | was just looking for text                                                                          |
| 01:02:21   | inside the file and it's always                                                                    |
| 01:02:23   | the same if I change a tag                                                                         |
| 01:02:25   | from you know planning                                                                             |
| 01:02:27   | to active then [[Hazel]] notices                                                                       |
| 01:02:29   | that within a minute or two                                                                        |
| 01:02:31   | and it'll do whatever I tell it                                                                    |
| 01:02:33   | and all I'm doing is I'm moving it                                                                 |
| 01:02:35   | to another folder inside the                                                                       |
| 01:02:37   | [[Obsidian]] folder structure                                                                          |
| 01:02:39   | Rose talked earlier about one                                                                      |
| 01:02:41   | where she's moving it into [[DEVONthink]]                                                             |
| 01:02:43   | well you can import to [[DEVONthink]]                                                                 |
| 01:02:45   | easy enough with [[Hazel]]                                                                             |
| 01:02:47   | but you could also you know trigger a shortcut on it                                               |
| 01:02:49   | or you know there's so much you can do                                                             |
| 01:02:51   | and the automation situation on the Mac                                                            |
| 01:02:53   | is so glorious right now in terms of the way                                                       |
| 01:02:55   | everything talks to each other but                                                                 |
| 01:02:57   | [[Hazel]] can be an effective trigger                                                                  |
| 01:02:59   | and then what you choose to do with that trigger                                                   |
| 01:03:01   | is up to you and the sky is kind of the limit                                                      |
| 01:03:03   | like you could say okay                                                                            |
| 01:03:05   | if I add the word                                                                                  |
| 01:03:07   | accountant                                                                                         |
| 01:03:09   | you know hashtag accountant to this                                                                |
| 01:03:11   | then email this note to my accountant                                                              |
| 01:03:13   | you know you could do something like that                                                          |
| 01:03:15   | so it's just really                                                                                |
| 01:03:17   | it just                                                                                            |
| 01:03:19   | it gives you a way to bring a whole                                                                |
| 01:03:21   | another level of automation to [[Obsidian]]                                                            |
| 01:03:23   | that the developers never even thought of                                                          |
| 01:03:25   | yes and I think this                                                                               |
| 01:03:27   | is just you know                                                                                   |
| 01:03:29   | because it is a                                                                                    |
| 01:03:31   | folder of markdown files and you know we've said this                                              |
| 01:03:33   | but it is really useful                                                                            |
| 01:03:35   | to just know that it's a folder                                                                    |
| 01:03:37   | so you've got subfolders                                                                           |
| 01:03:39   | and you've got sub files and                                                                       |
| 01:03:41   | you can have other files                                                                           |
| 01:03:43   | in the [[Obsidian]]                                                                                    |
| 01:03:45   | which is a folder and they just                                                                    |
| 01:03:47   | don't show up if they're not markdown                                                              |
| 01:03:49   | unless you've got                                                                                  |
| 01:03:51   | the plugins or preferences that enables that                                                       |
| 01:03:53   | and that can be very useful                                                                        |
| 01:03:55   | just to you know keep things                                                                       |
| 01:03:57   | handy that you will need                                                                           |
| 01:03:59   | within that context so if you open up this folder                                                  |
| 01:04:01   | in a different application                                                                         |
| 01:04:03   | such as [[BBEdit]] or similar                                                                         |
| 01:04:05   | then you will see those as well                                                                    |
| 01:04:07   | but you don't see it when you're in [[Obsidian]]                                                       |
| 01:04:09   | and that is very useful                                                                            |
| 01:04:11   | when it comes to things like [[Hazel]] as well                                                         |
| 01:04:13   | because you've got the ability to just                                                             |
| 01:04:15   | throw whatever it is you need in there                                                             |
| 01:04:17   | and shuffle it around very quickly                                                                 |
| 01:04:19   | and easily using such                                                                              |
| 01:04:21   | a marvelous app                                                                                    |
| 01:04:23   | that run shortcuts action David                                                                    |
| 01:04:25   | once I got it set up it took a little while                                                        |
| 01:04:27   | because I've got so many shortcuts                                                                 |
| 01:04:29   | but once I got it set up                                                                           |
| 01:04:31   | it's brilliant I love                                                                              |
| 01:04:33   | having it run shortcuts and I need to do                                                           |
| 01:04:35   | a little bit more of that I think with [[Obsidian]] stuff                                              |
| 01:04:37   | Okay let's start talking about                                                                     |
| 01:04:39   | another one of our favourite automation apps                                                        |
| 01:04:41   | and how it pairs with [[Obsidian]] [[Drafts]]                                                             |
| 01:04:43   | I mean [[Drafts]] is such a great                                                                      |
| 01:04:45   | companion app for [[Obsidian]]                                                                         |
| 01:04:47   | Yes it really is                                                                                   |
| 01:04:49   | and I found you know                                                                               |
| 01:04:51   | so [[Obsidian]] has                                                                                    |
| 01:04:53   | [[URL Schemes\|URL scheme]] support so you can just                                                                 |
| 01:04:55   | call URL and have it                                                                               |
| 01:04:57   | create a note, open a note and things like that                                                    |
| 01:04:59   | and I am honestly using                                                                            |
| 01:05:01   | a lot of the URL stuff with [[Drafts]]                                                                |
| 01:05:03   | to just have it                                                                                    |
| 01:05:05   | create a note                                                                                      |
| 01:05:07   | and I have                                                                                         |
| 01:05:09   | two primary actions David I've got one for my personal                                             |
| 01:05:11   | volume one for my work vault                                                                       |
| 01:05:13   | so I can keep you know I can just say hey                                                          |
| 01:05:15   | like you know when I'm in my [[Drafts]]                                                               |
| 01:05:17   | workspace for work then it shows me                                                                |
| 01:05:19   | the centre [[Obsidian]] action                                                                         |
| 01:05:21   | for my work vault and otherwise it'll show me                                                      |
| 01:05:23   | personal ones but you can have it                                                                  |
| 01:05:25   | you know do a whole bunch of things I put it into                                                  |
| 01:05:27   | sub folders and so on or open                                                                      |
| 01:05:29   | specific files for you and                                                                         |
| 01:05:31   | and so on which you know really                                                                    |
| 01:05:33   | lends it well                                                                                      |
| 01:05:35   | into tying in with all of the other things                                                         |
| 01:05:37   | that you're doing in [[Drafts]]                                                                       |
| 01:05:39   | and I have been bragging about [[Obsidian]] now                                                        |
| 01:05:41   | for an hour and four minutes according to my                                                       |
| 01:05:43   | clock none of us                                                                                   |
| 01:05:45   | have bragged about accessing                                                                       |
| 01:05:47   | and starting stuff on [[Obsidian]] with the iPhone                                                     |
| 01:05:49   | I mean there is                                                                                    |
| 01:05:51   | an iPhone app and it does give you all your data                                                   |
| 01:05:53   | and all your plugins work but                                                                      |
| 01:05:55   | like in terms of like writing something                                                            |
| 01:05:57   | quick [[Drafts]] runs                                                                                  |
| 01:05:59   | circles around it and because                                                                      |
| 01:06:01   | [[Drafts]] has the [[URL Schemes]]                                                                         |
| 01:06:03   | and [[Obsidian]] has [[URL Schemes]] it isn't                                                              |
| 01:06:05   | that difficult to create an automation                                                             |
| 01:06:07   | to write something new in [[Drafts]]                                                                  |
| 01:06:09   | even have [[Drafts]] put the [[YAML]] data                                                                 |
| 01:06:11   | and everything for you push a single button                                                        |
| 01:06:13   | and [[Drafts]] creates a file                                                                          |
| 01:06:15   | puts it in your [[Obsidian]] database next time you open                                               |
| 01:06:17   | [[Obsidian]] there it is                                                                               |
| 01:06:19   | and you know it is                                                                                 |
| 01:06:21   | one of those things where I wish                                                                   |
| 01:06:23   | it were a                                                                                          |
| 01:06:25   | better iOS app but I also                                                                          |
| 01:06:27   | love how great it is as an iOS app                                                                 |
| 01:06:29   | in that I have plugins                                                                             |
| 01:06:31   | in an iOS app in an app                                                                            |
| 01:06:33   | that I would have expected otherwise                                                               |
| 01:06:35   | I would not have plugins                                                                           |
| 01:06:37   | and so I personally                                                                                |
| 01:06:39   | I'm fine with the                                                                                  |
| 01:06:41   | I will write it in [[Drafts]] and then dump it                                                         |
| 01:06:43   | into [[Obsidian]] approach for quickly                                                                 |
| 01:06:45   | creating a new note                                                                                |
| 01:06:47   | but aside from that I found even                                                                   |
| 01:06:49   | just being able to                                                                                 |
| 01:06:51   | pop in and you know                                                                                |
| 01:06:53   | read my notes and check some data and stuff                                                        |
| 01:06:55   | and even share files                                                                               |
| 01:06:57   | has worked very well                                                                               |
| 01:06:59   | but [[Drafts]] for me is definitely                                                                    |
| 01:07:01   | a really useful tool                                                                               |
| 01:07:03   | for getting data into [[Obsidian]]                                                                     |
| 01:07:05   | it does just make it                                                                               |
| 01:07:07   | much easier and honestly                                                                           |
| 01:07:09   | the template stuff we were talking about earlier                                                   |
| 01:07:11   | I have a whole bunch of                                                                            |
| 01:07:13   | [[YAML]] header templates in [[Drafts]]                                                                   |
| 01:07:15   | as well because                                                                                    |
| 01:07:17   | it works very well for quickly                                                                     |
| 01:07:19   | creating like hey here's the block of data                                                         |
| 01:07:21   | that I'm going to need more or less                                                                |
| 01:07:23   | fill in these gaps and you're done                                                                 |
| 01:07:25   | and                                                                                                |
| 01:07:27   | those I can use on any platform                                                                    |
| 01:07:29   | as well and                                                                                        |
| 01:07:31   | it's very quick and you know it just gets                                                          |
| 01:07:33   | dropped in I actually David                                                                        |
| 01:07:35   | have a trick                                                                                       |
| 01:07:37   | for [[Obsidian]] of my sleeve                                                                          |
| 01:07:39   | with [[Drafts]] in the I have                                                                          |
| 01:07:41   | an [[Obsidian]] tag                                                                                    |
| 01:07:43   | so my [[Obsidian]] tag in [[Drafts]]                                                                      |
| 01:07:45   | is used                                                                                            |
| 01:07:47   | in conjunction with the with my [[Pushcut]]                                                           |
| 01:07:49   | Automation Server so I've got [[Pushcut]] running                                                     |
| 01:07:51   | on an iPhone                                                                                       |
| 01:07:53   | all the time and it will just pick things up                                                       |
| 01:07:55   | and run them and                                                                                   |
| 01:07:57   | every couple hours                                                                                 |
| 01:07:59   | it will just look for any notes                                                                    |
| 01:08:01   | that were created in [[Drafts]] with an [[Obsidian]] tag                                                   |
| 01:08:03   | more and they haven't been edited                                                                  |
| 01:08:05   | in 24 hours and if it hasn't been                                                                  |
| 01:08:07   | edited in 24 hours it just moves it                                                                |
| 01:08:09   | to [[Obsidian]] like it runs the appropriate                                                           |
| 01:08:11   | [[Obsidian]] action on it to put it into                                                               |
| 01:08:13   | my personal or my work                                                                             |
| 01:08:15   | vault and then bam                                                                                 |
| 01:08:17   | it's gone from [[Drafts]] and it gets moved over                                                       |
| 01:08:19   | because every so often I'll be                                                                     |
| 01:08:21   | you know like offline or have a poor internet connection                                           |
| 01:08:23   | create something and I forget                                                                      |
| 01:08:25   | about it and the worst thing is                                                                    |
| 01:08:27   | when you've created something and it's not                                                         |
| 01:08:29   | what you're expecting it to be when you're looking for it later                                    |
| 01:08:31   | and then you have to try and remember like wait                                                    |
| 01:08:33   | did I create this in [[Drafts]] did it get                                                             |
| 01:08:35   | created on one machine and not sync to the others                                                  |
| 01:08:37   | what's happening here so I just have                                                               |
| 01:08:39   | push cut pick up those [[Drafts]]                                                                     |
| 01:08:41   | that should make it into [[Obsidian]]                                                                  |
| 01:08:43   | automatically for me and drop them over                                                            |
| 01:08:45   | which you know works very very well                                                                |
| 01:08:47   | to just get data out of the way                                                                    |
| 01:08:49   | yeah that's a better solution than mine                                                            |
| 01:08:51   | so I do just manually                                                                              |
| 01:08:53   | well automatically from                                                                            |
| 01:08:55   | I have buttons in [[Drafts]] I guess that's                                                            |
| 01:08:57   | one point I should make is import                                                                  |
| 01:08:59   | to [[Obsidian]] is great but import                                                                    |
| 01:09:01   | into this specific folder in [[Obsidian]]                                                              |
| 01:09:03   | is better you know and                                                                             |
| 01:09:05   | you can create                                                                                     |
| 01:09:07   | you know I think I have about 10 different [[Obsidian]]                                                |
| 01:09:09   | import buttons in [[Drafts]] so                                                                        |
| 01:09:11   | when I write something in [[Drafts]]                                                                  |
| 01:09:13   | depending on which button I push changes                                                           |
| 01:09:15   | what [[YAML]] gets applied and where it gets located                                                   |
| 01:09:17   | and where it gets sent and                                                                         |
| 01:09:19   | I find that very useful but                                                                        |
| 01:09:21   | the trap I can get caught                                                                          |
| 01:09:23   | in that Rose has solved is                                                                         |
| 01:09:25   | I often do it on my phone                                                                          |
| 01:09:27   | or my iPad but if I don't open                                                                     |
| 01:09:29   | [[Obsidian]] then [[Obsidian]]                                                                             |
| 01:09:31   | it can't sync                                                                                      |
| 01:09:33   | in the background because iOS and iPad                                                             |
| 01:09:35   | doesn't allow that so you have to open [[Obsidian]]                                                    |
| 01:09:37   | once you've created it in order                                                                    |
| 01:09:39   | to send it up to the [[Obsidian]] cloud                                                                |
| 01:09:41   | and have it populate everywhere else                                                               |
| 01:09:43   | I've just kind of learned to do that you know                                                      |
| 01:09:45   | and I do it off I do it often                                                                      |
| 01:09:47   | enough and I frankly open [[Obsidian]]                                                                 |
| 01:09:49   | often enough on my devices that it's                                                               |
| 01:09:51   | rarely a problem for me I don't have to think                                                      |
| 01:09:53   | about it but that is a trap                                                                        |
| 01:09:55   | if you create the note in the [[Drafts]]                                                              |
| 01:09:57   | URL action but you                                                                                 |
| 01:09:59   | don't open [[Obsidian]] then you go over to your Mac                                                   |
| 01:10:01   | it's not going to be there because                                                                 |
| 01:10:03   | [[Obsidian]] on your iPhone                                                                            |
| 01:10:05   | didn't open up and it never got sent to the cloud                                                  |
| 01:10:07   | so you got to be aware of that                                                                     |
| 01:10:09   | I mean for me I've really found that to be a problem                                               |
| 01:10:11   | because part of the URL actions                                                                    |
| 01:10:13   | and I think one of the reasons why                                                                 |
| 01:10:15   | [[URL Schemes]] are actually a surprisingly                                                            |
| 01:10:17   | good idea even in 2022 folks                                                                       |
| 01:10:19   | is because it does force the app                                                                   |
| 01:10:21   | to open to run                                                                                     |
| 01:10:23   | the [[URL Schemes\|URL scheme]] it's just                                                                           |
| 01:10:25   | it's not open for very long                                                                        |
| 01:10:27   | necessarily but                                                                                    |
| 01:10:29   | because it's opened I usually just                                                                 |
| 01:10:31   | pop back and you know                                                                              |
| 01:10:33   | add some new lines at the end and just                                                             |
| 01:10:35   | finish off whatever it is that's                                                                   |
| 01:10:37   | now occurred to me because I was done with                                                         |
| 01:10:39   | the note and I send it over and then my                                                            |
| 01:10:41   | brain goes and you forgot about these three things                                                 |
| 01:10:43   | go write those down now                                                                            |
| 01:10:45   | so I've learned to                                                                                 |
| 01:10:47   | embrace that and build that into my workflow                                                       |
| 01:10:49   | I can see why for some people they wouldn't                                                        |
| 01:10:51   | necessarily assume that you know                                                                   |
| 01:10:53   | go pop back into the app to just                                                                   |
| 01:10:55   | give it a bit more time to sync because iOS                                                        |
| 01:10:57   | especially can be surprisingly fast                                                                |
| 01:10:59   | at killing background applications                                                                 |
| 01:11:01   | pro tip folks don't force quit your apps                                                           |
| 01:11:03   | then none of your background                                                                       |
| 01:11:05   | syncs will ever work if you're force quitting                                                      |
| 01:11:07   | everything all the time it for me has                                                              |
| 01:11:09   | yet to be a problem with that                                                                      |
| 01:11:11   | the closest I've had to that being a problem                                                       |
| 01:11:13   | was I created some notes in the car                                                                |
| 01:11:15   | I was on the ferry the other day                                                                   |
| 01:11:17   | on the iPad and                                                                                    |
| 01:11:19   | I didn't have Wi-Fi in my cabin                                                                    |
| 01:11:21   | it was only in the public areas and I didn't take                                                  |
| 01:11:23   | my iPad with me when I was out wandering                                                           |
| 01:11:25   | around the ship because I was taking pictures of the sunset                                        |
| 01:11:27   | and eating and so on                                                                               |
| 01:11:29   | and then I went in to add                                                                          |
| 01:11:31   | to my note in the car and thought I'd lost my                                                      |
| 01:11:33   | note for a good five minutes before I remembered                                                   |
| 01:11:35   | I created it on my iPad and that's why                                                             |
| 01:11:37   | it was missing                                                                                     |
| 01:11:39   | because it was on my iPad which hadn't                                                             |
| 01:11:41   | had internet so couldn't sync                                                                      |
| 01:11:43   | at all so I just                                                                                   |
| 01:11:45   | pulled out my iPad and went to town                                                                |
| 01:11:47   | and added to my notes which was pretty good                                                        |
| 01:11:49   | I occasionally get emails from people saying                                                       |
| 01:11:51   | well why do I need [[Drafts]] if I'm going to be using [[Obsidian]]                                        |
| 01:11:53   | and for me [[Drafts]]                                                                                 |
| 01:11:55   | has always been an app about capture                                                               |
| 01:11:57   | and process and [[Obsidian]]                                                                           |
| 01:11:59   | has never been that it's just not good at that                                                     |
| 01:12:01   | I know                                                                                             |
| 01:12:03   | for some folks that they store a lot of data                                                       |
| 01:12:05   | in [[Drafts]] and there is overlap there                                                               |
| 01:12:07   | and you just have to decide what works best for you                                                |
| 01:12:09   | but I find                                                                                         |
| 01:12:11   | [[Drafts]] very complementary to [[Obsidian]]                                                              |
| 01:12:13   | so it works great for me                                                                           |
| 01:12:15   | Yeah, for me                                                                                       |
| 01:12:17   | I will keep data in [[Drafts]] and in [[Obsidian]]                                                         |
| 01:12:19   | but                                                                                                |
| 01:12:21   | the difference between them is if I'm keeping it                                                   |
| 01:12:23   | in [[Drafts]]                                                                                         |
| 01:12:25   | there is a date                                                                                    |
| 01:12:27   | at which point I'm no longer going to need this                                                    |
| 01:12:29   | and I'm going to delete it                                                                         |
| 01:12:31   | but if I'm keeping it, it goes into [[Obsidian]]                                                       |
| 01:12:33   | because                                                                                            |
| 01:12:35   | my packing list and so on, I may archive them                                                      |
| 01:12:37   | in [[Drafts]]                                                                                         |
| 01:12:39   | to be very clear, it's not that I don't trust draft sync                                           |
| 01:12:41   | but                                                                                                |
| 01:12:43   | they're dead to me at that point                                                                   |
| 01:12:45   | they may as well not exist, the only reason                                                        |
| 01:12:47   | why I archive it instead of delete it                                                              |
| 01:12:49   | is because this way, if I did need to go back                                                      |
| 01:12:51   | to it at some point                                                                                |
| 01:12:53   | I went to France                                                                                   |
| 01:12:55   | a couple of months ago                                                                             |
| 01:12:57   | and then I went again just last week                                                               |
| 01:12:59   | as we record this                                                                                  |
| 01:13:01   | I just                                                                                             |
| 01:13:03   | went back and was like okay I'm just going to                                                      |
| 01:13:05   | unarchive my packing list from last time                                                           |
| 01:13:07   | to re-create it                                                                                    |
| 01:13:09   | I've got automations to re-create it                                                               |
| 01:13:11   | but the fastest automation is just re-use                                                          |
| 01:13:13   | what you already have                                                                              |
| 01:13:15   | I just went back and resurrected                                                                   |
| 01:13:17   | that packing list and reset the checkboxes                                                         |
| 01:13:19   | and that worked really well                                                                        |
| 01:13:21   | but if I had to re-create it                                                                       |
| 01:13:23   | it wouldn't have been a problem                                                                    |
| 01:13:25   | I default to archiving instead                                                                     |
| 01:13:27   | of deleting for things like that                                                                   |
| 01:13:29   | I want to switch over to [[Keyboard Maestro]] and Shortcuts                                            |
| 01:13:31   | for a minute because                                                                               |
| 01:13:33   | by nature you would think these are not great                                                      |
| 01:13:35   | companion apps for [[Obsidian]]                                                                        |
| 01:13:37   | because especially Shortcuts                                                                       |
| 01:13:39   | I mean the idea with Shortcuts                                                                     |
| 01:13:41   | is you have app actions that are designed by the developers                                        |
| 01:13:43   | and [[Obsidian]]                                                                                       |
| 01:13:45   | is an electron app and there are                                                                   |
| 01:13:47   | by definition no                                                                                   |
| 01:13:49   | electron                                                                                           |
| 01:13:51   | Shortcuts actions at least to my knowledge                                                         |
| 01:13:53   | but I find                                                                                         |
| 01:13:55   | Shortcuts and                                                                                      |
| 01:13:57   | [[Keyboard Maestro]] useful                                                                            |
| 01:13:59   | going with Shortcuts first                                                                         |
| 01:14:01   | Shortcuts is a great way to add files                                                              |
| 01:14:03   | to your [[Obsidian]] database                                                                          |
| 01:14:05   | like when I have a new                                                                             |
| 01:14:07   | when we decide to do an episode                                                                    |
| 01:14:09   | of Automators I run a Shortcut                                                                     |
| 01:14:11   | and it does a bunch of things                                                                      |
| 01:14:13   | and creates OmniFocus lists and                                                                    |
| 01:14:15   | whatnot but one of the things it does                                                              |
| 01:14:17   | is create a text file                                                                              |
| 01:14:19   | with all the appropriate [[YAML]] data                                                                 |
| 01:14:21   | that we use for Automators and it saves it                                                         |
| 01:14:23   | to the active Automators episodes                                                                  |
| 01:14:25   | folder in my [[Obsidian]]                                                                              |
| 01:14:27   | database and all that                                                                              |
| 01:14:29   | happens very easily                                                                                |
| 01:14:31   | and I love it and you can do that                                                                  |
| 01:14:33   | with a Shortcut                                                                                    |
| 01:14:35   | and you can also                                                                                   |
| 01:14:37   | do that with [[Keyboard Maestro]]                                                                      |
| 01:14:39   | I have a similar script I've written on the Mac                                                    |
| 01:14:41   | that just takes a text file, saves it                                                              |
| 01:14:43   | the trick with that if you're going to do                                                          |
| 01:14:45   | it is.md                                                                                           |
| 01:14:47   | if you save it, generally these files                                                              |
| 01:14:49   | these applications and Automation                                                                  |
| 01:14:51   | want to save a text file as a.txt file                                                             |
| 01:14:53   | if you save it                                                                                     |
| 01:14:55   | there is.txt you'll be like where's my file                                                        |
| 01:14:57   | I don't see it but it's there                                                                      |
| 01:14:59   | it's just because it doesn't have a.md                                                             |
| 01:15:01   | so that's an easy trap to get caught                                                               |
| 01:15:03   | if you start creating these things                                                                 |
| 01:15:05   | but you can get pretty sophisticated                                                               |
| 01:15:07   | with the generation of that text file                                                              |
| 01:15:09   | either in [[Keyboard Maestro]] or Shortcuts                                                            |
| 01:15:11   | you can ask some questions                                                                         |
| 01:15:13   | is this an active or a planning project                                                            |
| 01:15:15   | and then you can have it                                                                           |
| 01:15:17   | apply that variable to set                                                                         |
| 01:15:19   | a pound planning                                                                                   |
| 01:15:21   | pound active                                                                                       |
| 01:15:23   | to the [[YAML]]                                                                                        |
| 01:15:25   | you can put a tag in that's dependent                                                              |
| 01:15:27   | on the user response                                                                               |
| 01:15:29   | and then guess what happens when you make that file                                                |
| 01:15:31   | a little                                                                                           |
| 01:15:33   | [[Hazel]] will see it and then put it where it belongs                                                 |
| 01:15:35   | because of the tag that you added                                                                  |
| 01:15:37   | being [[Keyboard Maestro]] or                                                                          |
| 01:15:39   | Shortcuts so it really is kind                                                                     |
| 01:15:41   | of delightful Automation                                                                           |
| 01:15:43   | even though it isn't kind of what you would                                                        |
| 01:15:45   | historically think of                                                                              |
| 01:15:47   | but you can create new files very easily                                                           |
| 01:15:49   | using [[Hazel]]                                                                                        |
| 01:15:51   | and [[Keyboard Maestro]]                                                                               |
| 01:15:53   | yes and you know that's one of the things                                                          |
| 01:15:55   | where I've kind of gone back and forth                                                             |
| 01:15:57   | with do I do it through [[Drafts]]                                                                    |
| 01:15:59   | do I do it through [[Hazel]]                                                                           |
| 01:16:01   | there are some occasions                                                                           |
| 01:16:03   | where [[Hazel]] is the right solution for that                                                         |
| 01:16:05   | trust me folks                                                                                     |
| 01:16:07   | [[Drafts]], Shortcuts and [[Keyboard Maestro]]                                                             |
| 01:16:09   | are tending to be the main ones                                                                    |
| 01:16:11   | and what I've found                                                                                |
| 01:16:13   | is really useful is actually using [[Drafts]]                                                         |
| 01:16:15   | as the back end whether I'm using it                                                               |
| 01:16:17   | through [[Keyboard Maestro]] or Shortcuts                                                              |
| 01:16:19   | because this way I've got a really easy                                                            |
| 01:16:21   | big button with Shortcuts                                                                          |
| 01:16:23   | widgets especially on IOS                                                                          |
| 01:16:25   | and iPadOS when I'm in Focus                                                                       |
| 01:16:27   | modes to show me different things                                                                  |
| 01:16:29   | so I can have the Shortcuts button                                                                 |
| 01:16:31   | and then it can pull that data out of [[Drafts]]                                                      |
| 01:16:33   | like you can use [[Drafts]] actions to create                                                          |
| 01:16:35   | the data and then send it over to [[Obsidian]]                                                         |
| 01:16:37   | so that I                                                                                          |
| 01:16:39   | don't have                                                                                         |
| 01:16:41   | out of sync data                                                                                   |
| 01:16:43   | because there's nothing worse than going right                                                     |
| 01:16:45   | cool. Data the                                                                                     |
| 01:16:47   | [[YAML]] headers that I'm using in these files                                                         |
| 01:16:49   | folks I tend to use [[BBEdit]] if I'm                                                                 |
| 01:16:51   | doing a mass edit of lots of text files                                                            |
| 01:16:53   | and it works great on Markdown files as well                                                       |
| 01:16:55   | but                                                                                                |
| 01:16:57   | if I'm doing that and then creating a new one                                                      |
| 01:16:59   | it's like oh it's in the old format                                                                |
| 01:17:01   | because I didn't update this Shortcut I only updated                                               |
| 01:17:03   | that Shortcut so                                                                                   |
| 01:17:05   | I find I've got to use [[Data Jar]]                                                                     |
| 01:17:07   | or [[Drafts]] or something                                                                             |
| 01:17:09   | to have a source of truth                                                                          |
| 01:17:11   | for this information when I'm doing                                                                |
| 01:17:13   | these automations                                                                                  |
| 01:17:15   | but yeah it is really useful to be able to do                                                      |
| 01:17:17   | that using especially Shortcuts                                                                    |
| 01:17:19   | because it is so good at pulling                                                                   |
| 01:17:21   | in current data                                                                                    |
| 01:17:23   | from a number                                                                                      |
| 01:17:25   | of different places like being able to pull stuff                                                  |
| 01:17:27   | out of your calendar and so on is something                                                        |
| 01:17:29   | that you know [[Drafts]] can do                                                                        |
| 01:17:31   | but it's not quite so easy to do                                                                   |
| 01:17:33   | in and                                                                                             |
| 01:17:35   | [[Keyboard Maestro]] of course is great for going okay right                                           |
| 01:17:37   | well you're creating a whole bunch of                                                              |
| 01:17:39   | like you're doing a whole project setup here                                                       |
| 01:17:41   | I'm creating folders and files and things like that                                                |
| 01:17:43   | so I've got all this information and I'll just dump                                                |
| 01:17:45   | this into here for you                                                                             |
| 01:17:47   | to make this note with which                                                                       |
| 01:17:49   | is really wonderful                                                                                |
| 01:17:51   | and I don't know                                                                                   |
| 01:17:53   | how else you're using this David                                                                   |
| 01:17:55   | but I did want to throw in a little sneaky                                                         |
| 01:17:57   | shout out to Bunch                                                                                 |
| 01:17:59   | because I'm using [[Obsidian]] with Bunch                                                              |
| 01:18:01   | to get me into certain                                                                             |
| 01:18:03   | bolts and folders automatically                                                                    |
| 01:18:05   | when                                                                                               |
| 01:18:07   | I turn on certain modes                                                                            |
| 01:18:09   | on my machine. Oh that makes sense                                                                 |
| 01:18:11   | okay because you just open the file right it doesn't                                               |
| 01:18:13   | yeah nice                                                                                          |
| 01:18:15   | so give us an example                                                                              |
| 01:18:17   | well for example when                                                                              |
| 01:18:19   | I start doing my automators                                                                        |
| 01:18:21   | recording then it                                                                                  |
| 01:18:23   | so you know I have Bunch                                                                           |
| 01:18:25   | automatically open a whole bunch of things opens                                                   |
| 01:18:27   | [[Google Chrome\|Chrome]] for the show notes because Google Docs                                                      |
| 01:18:29   | does tend to work best in [[Google Chrome\|Chrome]] and also                                                          |
| 01:18:31   | [[Keyboard Maestro]] can really easily find                                                            |
| 01:18:33   | the only [[Google Chrome\|Chrome]] window that exists whereas                                                         |
| 01:18:35   | I have like 304 [[Safari]] windows and if                                                              |
| 01:18:37   | I've moved away from the show notes for                                                            |
| 01:18:39   | whatever reason to get a link to put in the                                                        |
| 01:18:41   | show notes for example                                                                             |
| 01:18:43   | and I'll do that in [[Safari]] so it'll open                                                           |
| 01:18:45   | all of the apps that I need [[Audio Hijack]]                                                           |
| 01:18:47   | and so on but                                                                                      |
| 01:18:49   | because it can just open a URL                                                                     |
| 01:18:51   | and [[URL Schemes]] are a URL                                                                          |
| 01:18:53   | then it can open                                                                                   |
| 01:18:55   | [[Obsidian]] for me and so at the moment                                                               |
| 01:18:57   | I'm just having it open                                                                            |
| 01:18:59   | a specific vault but one of the things                                                             |
| 01:19:01   | that has occurred to me as we were                                                                 |
| 01:19:03   | recording the show and I've been trying to restrain                                                |
| 01:19:05   | myself if there is a great plugin                                                                  |
| 01:19:07   | called the advanced URI                                                                            |
| 01:19:09   | plugin URI                                                                                         |
| 01:19:11   | which is something I'm standing for                                                                |
| 01:19:13   | I forget now but either way it's                                                                   |
| 01:19:15   | you know it's the advanced URL                                                                     |
| 01:19:17   | schemes option                                                                                     |
| 01:19:19   | and I'm wondering if that can open a                                                               |
| 01:19:21   | specific workspace for me David                                                                    |
| 01:19:23   | because if that can open a specific workspace for me                                               |
| 01:19:25   | then I can even have it open                                                                       |
| 01:19:27   | like up with the right                                                                             |
| 01:19:29   | info in the sidebar                                                                                |
| 01:19:31   | and you know like the right                                                                        |
| 01:19:33   | bits collapse and so on and I think                                                                |
| 01:19:35   | that would be great if I can do that                                                               |
| 01:19:37   | so I might have to take a look at that after we record                                             |
| 01:19:39   | it. I expect you probably                                                                          |
| 01:19:41   | can do that                                                                                        |
| 01:19:43   | but that's just a guess but I mean it seems like                                                   |
| 01:19:45   | everything in [[Obsidian]] is addressable                                                              |
| 01:19:47   | and that's one of the reasons why all those nerds                                                  |
| 01:19:49   | love it so much.                                                                                   |
| 01:19:51   | One thing I was looking at so [[Keyboard Maestro]]                                                     |
| 01:19:53   | can go beyond just generating files                                                                |
| 01:19:55   | [[Keyboard Maestro]] you can use to control the app                                                    |
| 01:19:57   | you referenced earlier [[Keyboard Maestro]] has                                                        |
| 01:19:59   | the ability to find a button on the screen                                                         |
| 01:20:01   | and push it but it's much easier than that                                                         |
| 01:20:03   | because you can script                                                                             |
| 01:20:05   | any keyboard shortcut for [[Obsidian]]                                                                 |
| 01:20:07   | and suddenly open up [[Keyboard Maestro]]                                                              |
| 01:20:09   | and I was just looking at my [[Keyboard Maestro]] [[Obsidian]]                                             |
| 01:20:11   | folder because I keep folders for individual apps                                                  |
| 01:20:13   | and it's like a                                                                                    |
| 01:20:15   | graveyard of                                                                                       |
| 01:20:17   | automations I've written that                                                                      |
| 01:20:19   | then got [[Sherlocking\|Sherlocked]] by a plugin                                                                    |
| 01:20:21   | like                                                                                               |
| 01:20:23   | in fact if you look at the [[Obsidian]] forums                                                         |
| 01:20:25   | I wrote a [[Keyboard Maestro]] script to create                                                        |
| 01:20:27   | an [[Obsidian]] URL well now                                                                           |
| 01:20:29   | they've added it to the app I think                                                                |
| 01:20:31   | I mapped that to control L                                                                         |
| 01:20:33   | and I get a link to whatever I'm at                                                                |
| 01:20:35   | so there's like all this stuff                                                                     |
| 01:20:37   | I've done that I don't use anymore                                                                 |
| 01:20:39   | but I have a couple that are still relevant                                                        |
| 01:20:41   | one of them is an export                                                                           |
| 01:20:43   | script because [[Keyboard Maestro]]                                                                    |
| 01:20:45   | gives you the ability to perform                                                                   |
| 01:20:47   | actions on text in the clipboard                                                                   |
| 01:20:49   | and you know we haven't talked about                                                               |
| 01:20:51   | in today's episode but to create a link in [[Obsidian]]                                                |
| 01:20:53   | all you do is to put two square brackets around                                                    |
| 01:20:55   | anything and now a link is created                                                                 |
| 01:20:57   | and if the file                                                                                    |
| 01:20:59   | exists it jumps to it if it doesn't exist the first time                                           |
| 01:21:01   | you try to it creates it or if you've got                                                          |
| 01:21:03   | Roses plugin it creates it automatically                                                           |
| 01:21:05   | but you've got these double brackets all over                                                      |
| 01:21:07   | the place well sometimes you might want to share                                                   |
| 01:21:09   | that data to somebody                                                                              |
| 01:21:11   | and you don't want                                                                                 |
| 01:21:13   | to share all the link data well I just                                                             |
| 01:21:15   | wrote a script that                                                                                |
| 01:21:17   | takes the contents of the                                                                          |
| 01:21:19   | note and removes all the double brackets                                                           |
| 01:21:21   | you know I could also                                                                              |
| 01:21:23   | write one that converts the                                                                        |
| 01:21:25   | mark down to rich text if I wanted                                                                 |
| 01:21:27   | but I haven't done that but so I've got                                                            |
| 01:21:29   | some export related shortcuts                                                                      |
| 01:21:31   | that I'm sorry                                                                                     |
| 01:21:33   | [[Keyboard Maestro]] scripts that I've written                                                         |
| 01:21:35   | that kind of handle those kinds of problems                                                        |
| 01:21:37   | for me and I keep finding myself                                                                   |
| 01:21:39   | going back to [[Keyboard Maestro]] whenever there's                                                    |
| 01:21:41   | a feature that's not quite there and the plugin                                                    |
| 01:21:43   | isn't quite there and because                                                                      |
| 01:21:45   | everything is a folder full of mark down files                                                     |
| 01:21:47   | which if we keep saying                                                                            |
| 01:21:49   | I can usually script my way around it                                                              |
| 01:21:51   | Yeah, yeah                                                                                         |
| 01:21:53   | I think that really is the key you know                                                            |
| 01:21:55   | there's so much                                                                                    |
| 01:21:57   | accessibility through                                                                              |
| 01:21:59   | all of the existing infrastructure                                                                 |
| 01:22:01   | that it doesn't matter                                                                             |
| 01:22:03   | whether you feel at home writing [[JavaScript]]                                                        |
| 01:22:05   | in which case you can write your own [[Obsidian]] plugin                                               |
| 01:22:07   | if you want or if you're                                                                           |
| 01:22:09   | just getting started with shortcuts                                                                |
| 01:22:11   | and you just want to be able to                                                                    |
| 01:22:13   | like write some text into a file                                                                   |
| 01:22:15   | like a new file that's simple                                                                      |
| 01:22:17   | like you don't even have to use                                                                    |
| 01:22:19   | [[Obsidian]] [[URL Schemes]] to do that                                                                    |
| 01:22:21   | it can just like write this                                                                        |
| 01:22:23   | file and then save it into a folder                                                                |
| 01:22:25   | and as David said before the trick is to                                                           |
| 01:22:27   | use                                                                                                |
| 01:22:29   | the set name function you can set the extension                                                    |
| 01:22:31   | as part of that and just set it to.md                                                              |
| 01:22:33   | other than that there is actually an [[Obsidian]] plugin                                               |
| 01:22:35   | I'll have to see if I can find it for the show notes                                               |
| 01:22:37   | which allows you to have                                                                           |
| 01:22:39   | text files in [[Obsidian]] as well                                                                     |
| 01:22:41   | so any text files will still show up in your                                                       |
| 01:22:43   | sidebar                                                                                            |
| 01:22:45   | Yeah, I thought it was                                                                             |
| 01:22:47   | in the preferences but I had a quick scan                                                          |
| 01:22:49   | through earlier and                                                                                |
| 01:22:51   | I was unable to find it in preferences                                                             |
| 01:22:53   | so I'm assuming that I installed it                                                                |
| 01:22:55   | through a custom                                                                                   |
| 01:22:57   | file of some                                                                                       |
| 01:22:59   | plugin of some kind now I've said that                                                             |
| 01:23:01   | I'm almost certainly going to be finding it                                                        |
| 01:23:03   | as part of the documentation                                                                       |
| 01:23:05   | but I will try and get a link to that in the show notes                                            |
| 01:23:07   | for folks but you know                                                                             |
| 01:23:09   | it's very                                                                                          |
| 01:23:11   | good to be able to just extend all these things                                                    |
| 01:23:13   | and you know                                                                                       |
| 01:23:15   | even if you can't find a plugin that lets you do                                                   |
| 01:23:17   | exactly what you want something like the advanced                                                  |
| 01:23:19   | URI plugin                                                                                         |
| 01:23:21   | which gives you more advanced URL                                                                  |
| 01:23:23   | schemes will allow you to                                                                          |
| 01:23:25   | prepend data to a file                                                                             |
| 01:23:27   | or append data to a file                                                                           |
| 01:23:29   | or overwrite the data                                                                              |
| 01:23:31   | in this particular file                                                                            |
| 01:23:33   | and you know having                                                                                |
| 01:23:35   | those options I have just found David by the way                                                   |
| 01:23:37   | it supports workspaces yes                                                                         |
| 01:23:39   | I'm very happy this is going to                                                                    |
| 01:23:41   | improve my integration with everything else                                                        |
| 01:23:45   | you know having the ability to                                                                     |
| 01:23:47   | find something that gets you part of the way there and                                             |
| 01:23:49   | you know on your own and then finish it                                                            |
| 01:23:51   | off with something else that exists                                                                |
| 01:23:53   | is really great                                                                                    |
| 01:23:55   | and the other thing I highly recommend                                                             |
| 01:23:57   | the [[Obsidian]] discord                                                                               |
| 01:23:59   | server they have a discord server                                                                  |
| 01:24:01   | for chat is very busy                                                                              |
| 01:24:03   | which is great if you've got                                                                       |
| 01:24:05   | a little bit of time and you want to pop in there                                                  |
| 01:24:07   | and ask some folks questions                                                                       |
| 01:24:09   | discord search as well is fabulous                                                                 |
| 01:24:11   | it's really great                                                                                  |
| 01:24:13   | so you know you can have a search in there                                                         |
| 01:24:15   | but they've also got a discourse forum                                                             |
| 01:24:17   | just like we do automators                                                                         |
| 01:24:19   | where folks have got so many                                                                       |
| 01:24:21   | solutions to so many cool things                                                                   |
| 01:24:23   | that you know                                                                                      |
| 01:24:25   | even if you think                                                                                  |
| 01:24:27   | this is such a weird thing                                                                         |
| 01:24:29   | nobody is ever going to want to do this                                                            |
| 01:24:31   | have a search like                                                                                 |
| 01:24:33   | there's eight and a half thousand members in discord                                               |
| 01:24:35   | online David that's online                                                                         |
| 01:24:37   | members that's not people                                                                          |
| 01:24:39   | who are just like you know                                                                         |
| 01:24:41   | lurking in the server and they're offline                                                          |
| 01:24:43   | all the time no that's the people who are online                                                   |
| 01:24:45   | right now so there's probably                                                                      |
| 01:24:47   | somebody who's had something                                                                       |
| 01:24:49   | at least vaguely similar what it is                                                                |
| 01:24:51   | you're trying to do                                                                                |
| 01:24:53   | which is pretty cool                                                                               |
| 01:24:55   | it's one of those things where                                                                     |
| 01:24:57   | it is just such a constantly                                                                       |
| 01:24:59   | growing and expanding landscape                                                                    |
| 01:25:01   | that I feel like                                                                                   |
| 01:25:03   | it is kind of                                                                                      |
| 01:25:05   | for some people at least changing the way that they take notes                                     |
| 01:25:07   | but for other people like me                                                                       |
| 01:25:09   | it's actually encouraged me to start taking more                                                   |
| 01:25:11   | notes like I was already taking                                                                    |
| 01:25:13   | a whole bunch of notes in [[Drafts]]                                                                  |
| 01:25:15   | and just kind of like okay well that's fine                                                        |
| 01:25:17   | it's done I'll throw it away and I realised                                                        |
| 01:25:19   | that I was you know recreating                                                                     |
| 01:25:21   | some things because I just needed                                                                  |
| 01:25:23   | to keep the same nature around a couple of times                                                   |
| 01:25:25   | I was like oh no I should probably have a better place for this                                    |
| 01:25:27   | and started throwing things like that in [[Obsidian]]                                                  |
| 01:25:29   | and before I knew it I had                                                                         |
| 01:25:31   | my own personal mini wiki of a whole bunch of things                                               |
| 01:25:33   | where it's just useful                                                                             |
| 01:25:35   | information for me                                                                                 |
| 01:25:37   | and                                                                                                |
| 01:25:39   | for me the best part of having                                                                     |
| 01:25:41   | a personal knowledge management system                                                             |
| 01:25:43   | okay a PKM                                                                                         |
| 01:25:45   | is it is personal                                                                                  |
| 01:25:47   | it does not matter how important                                                                   |
| 01:25:49   | this information might be to somebody else                                                         |
| 01:25:51   | or how trivial this thing is even to me                                                            |
| 01:25:53   | it can live in my system                                                                           |
| 01:25:55   | and the only person who cares about it is me                                                       |
| 01:25:57   | and having that data                                                                               |
| 01:25:59   | there if it makes my life easier                                                                   |
| 01:26:01   | then that that's solving the problem                                                               |
| 01:26:03   | if it's not making my life easier but it's not causing a problem                                   |
| 01:26:05   | I just leave it you know it's fine                                                                 |
| 01:26:07   | like it doesn't matter until it's actively wrong                                                   |
| 01:26:09   | I don't bother going through and clearing stuff out                                                |
| 01:26:11   | because until it's actually wrong                                                                  |
| 01:26:13   | it could be helpful                                                                                |
| 01:26:15   | this episode of The Automators                                                                     |
| 01:26:17   | is brought to you by LinkedIn Jobs                                                                 |
| 01:26:19   | post a job for free by going to                                                                    |
| 01:26:21   | linkedin.com                                                                                       |
| 01:26:23   | as you gear up for fall you need the right people                                                  |
| 01:26:25   | on your team to help your small business                                                           |
| 01:26:27   | fire on all cylinders                                                                              |
| 01:26:29   | LinkedIn Jobs is here to make it easier to find                                                    |
| 01:26:31   | the people you want to talk to faster                                                              |
| 01:26:33   | and for free                                                                                       |
| 01:26:35   | hiring new people is really hard                                                                   |
| 01:26:37   | you want to get the people with the right skills                                                   |
| 01:26:39   | but you really need the right attitude                                                             |
| 01:26:41   | as well and it's so easy                                                                           |
| 01:26:43   | to get hung up in the hiring process on the skills                                                 |
| 01:26:45   | and abilities part then to hire someone                                                            |
| 01:26:47   | to find out they don't really fit                                                                  |
| 01:26:49   | well with LinkedIn Jobs this gets way                                                              |
| 01:26:51   | easier with LinkedIn Jobs you can                                                                  |
| 01:26:53   | create a free job post in minutes                                                                  |
| 01:26:55   | on LinkedIn Jobs to reach your network                                                             |
| 01:26:57   | and beyond to the world's largest professional                                                     |
| 01:26:59   | network of over 810 million                                                                        |
| 01:27:01   | people then add your job                                                                           |
| 01:27:03   | and the purple hashtag hiring                                                                      |
| 01:27:05   | framed your LinkedIn profile to spread the word                                                    |
| 01:27:07   | that you're hiring so your network can help                                                        |
| 01:27:09   | you find the right people to hire                                                                  |
| 01:27:11   | simple tools like screening questions                                                              |
| 01:27:13   | make it easy to focus on candidates                                                                |
| 01:27:15   | with just the right skills and experience                                                          |
| 01:27:17   | so you can quickly prioritise who you'd                                                            |
| 01:27:19   | like to interview and hire and when you                                                            |
| 01:27:21   | solve that problem of skills and experience                                                        |
| 01:27:23   | then you can also find the right fit                                                               |
| 01:27:25   | it's why small businesses rate LinkedIn                                                            |
| 01:27:27   | Jobs number one in delivering quality                                                              |
| 01:27:29   | hires versus leading competitors                                                                   |
| 01:27:31   | LinkedIn Jobs helps you find                                                                       |
| 01:27:33   | just the right candidate you want to talk                                                          |
| 01:27:35   | to and faster did you know                                                                         |
| 01:27:37   | every week nearly 40 million job seekers                                                           |
| 01:27:39   | and visit LinkedIn post your                                                                       |
| 01:27:41   | job for free at LinkedIn.com                                                                       |
| 01:27:43   |/automators that's LinkedIn.com                                                               |
| 01:27:45   |/automators to post your                                                                      |
| 01:27:47   | job for free terms and conditions                                                                  |
| 01:27:49   | do apply and our thanks to LinkedIn                                                                |
| 01:27:51   | Jobs for their support of the automators                                                           |
| 01:27:53   | and all of relay FM                                                                                |
| 01:27:55   | all right Rose                                                                                     |
| 01:27:57   | so I'm not doing a lot of automation                                                               |
| 01:27:59   | with if this than that and                                                                         |
| 01:28:01   | some of the online like you know Zapier                                                           |
| 01:28:03   | stuff because I have my database                                                                   |
| 01:28:05   | stored locally but                                                                                 |
| 01:28:07   | you are on the high wire and                                                                       |
| 01:28:09   | you teased us earlier so what exactly                                                              |
| 01:28:11   | are you doing with these cloud based                                                               |
| 01:28:13   | automation tools. Well                                                                             |
| 01:28:15   | I'm doing a lot of things                                                                          |
| 01:28:17   | and it really depends                                                                              |
| 01:28:19   | on like what the question                                                                          |
| 01:28:21   | is because I've got so many different                                                              |
| 01:28:23   | solutions to problems                                                                              |
| 01:28:25   | and one of the things that I                                                                       |
| 01:28:27   | do is whenever I have an idea                                                                      |
| 01:28:29   | for an automators topic is                                                                         |
| 01:28:31   | I will just go through                                                                             |
| 01:28:33   | and try and pull that                                                                              |
| 01:28:35   | throw that data into an [[Obsidian]]                                                                   |
| 01:28:37   | folder called automators                                                                           |
| 01:28:39   | where I've got you know something with all the tags                                                |
| 01:28:41   | of podcast ideas but then whenever                                                                 |
| 01:28:43   | I create a show note                                                                               |
| 01:28:45   | okay because we use                                                                                |
| 01:28:47   | [[Airtable]] for our backend it goes ahead and creates                                                 |
| 01:28:49   | a Google Doc for me                                                                                |
| 01:28:51   | but if I have                                                                                      |
| 01:28:53   | done some good naming                                                                              |
| 01:28:55   | which is very reliant on me having named                                                           |
| 01:28:57   | my note the same way that                                                                          |
| 01:28:59   | the Google Doc is named                                                                            |
| 01:29:01   | or the title of the                                                                                |
| 01:29:03   | show is named not necessarily the Google Doc                                                       |
| 01:29:05   | then it will                                                                                       |
| 01:29:07   | also add a note into                                                                               |
| 01:29:09   | my OmniFocus saying hey you know like don't                                                        |
| 01:29:11   | forget to prep the show notes for this show of automators                                          |
| 01:29:13   | due date recording date of this                                                                    |
| 01:29:15   | and it pulls in                                                                                    |
| 01:29:17   | a link to my [[Obsidian]] note                                                                         |
| 01:29:19   | inside that OmniFocus task                                                                         |
| 01:29:21   | for me and it does that                                                                            |
| 01:29:23   | by you know there's                                                                                |
| 01:29:25   | some                                                                                               |
| 01:29:27   | search involved through [[Dropbox]] actually                                                           |
| 01:29:29   | to find that and then it just sort of                                                              |
| 01:29:31   | cobbles it together it's not perfect but it works pretty                                           |
| 01:29:33   | well and that's not                                                                                |
| 01:29:35   | retrieving data because I'm not actually reading data                                              |
| 01:29:37   | out and specifically                                                                               |
| 01:29:39   | it's just giving me a link to the data so that I can                                               |
| 01:29:41   | do the thing that I want when I want to                                                            |
| 01:29:43   | and if I've managed to                                                                             |
| 01:29:45   | get the URL totally wrong then it's not going to                                                   |
| 01:29:47   | give you a link to a random markdown file                                                          |
| 01:29:49   | in my [[Dropbox]] folder which                                                                         |
| 01:29:51   | you know is fine for you but it might be a bit                                                     |
| 01:29:53   | confusing for some of our guests but                                                               |
| 01:29:55   | the other thing that I do                                                                          |
| 01:29:57   | is when I have certain projects kick off                                                           |
| 01:29:59   | and do things                                                                                      |
| 01:30:01   | then they will create a file                                                                       |
| 01:30:03   | or a folder inside of [[Obsidian]]                                                                     |
| 01:30:05   | for me with a                                                                                      |
| 01:30:07   | template of data in there                                                                          |
| 01:30:09   | and in that [[YAML]] header as I mentioned before                                                      |
| 01:30:11   | it will have                                                                                       |
| 01:30:13   | you know hashtag to do                                                                             |
| 01:30:15   | or just the tag to do                                                                              |
| 01:30:17   | note it so that I can see all the things that are                                                  |
| 01:30:19   | like still to be done                                                                              |
| 01:30:21   | and this is really helpful when I've been                                                          |
| 01:30:23   | working with some friends on certain projects                                                      |
| 01:30:25   | whenever they assign                                                                               |
| 01:30:27   | certain things to me in whatever systems it is                                                     |
| 01:30:29   | we're using it doesn't matter whether or not                                                       |
| 01:30:31   | I love or hate that system                                                                         |
| 01:30:33   | or how good or janky that system might be                                                          |
| 01:30:35   | on whatever                                                                                        |
| 01:30:37   | app platform it is that I'm using at the time                                                      |
| 01:30:39   | if I need to                                                                                       |
| 01:30:41   | write stuff about it it will just throw a note                                                     |
| 01:30:43   | into the Write [[Obsidian]] folder for me                                                              |
| 01:30:45   | and have it to do                                                                                  |
| 01:30:47   | and then I can see all the things that I've needed to write                                        |
| 01:30:49   | and I've done but also                                                                             |
| 01:30:51   | all the things I still need to write                                                               |
| 01:30:53   | or do for those people                                                                             |
| 01:30:55   | and it's not managing my tasks                                                                     |
| 01:30:57   | it is just going hey like this is the thing that you're                                            |
| 01:30:59   | supposed to be writing about at some point                                                         |
| 01:31:01   | here's the file to write about it in                                                               |
| 01:31:03   | but because of the templates                                                                       |
| 01:31:05   | and being able                                                                                     |
| 01:31:07   | to put stuff in there                                                                              |
| 01:31:09   | you know just automatically it works                                                               |
| 01:31:11   | incredibly well                                                                                    |
| 01:31:13   | and it's                                                                                           |
| 01:31:15   | I actually started                                                                                 |
| 01:31:17   | doing something similar to this                                                                    |
| 01:31:19   | using [[Drafts]] of all things                                                                         |
| 01:31:21   | where I like to have lists                                                                         |
| 01:31:23   | that I can just append stuff to                                                                    |
| 01:31:25   | but trying to find                                                                                 |
| 01:31:27   | the name of all the lists that you've got                                                          |
| 01:31:29   | through your L-SKING doesn't work very well                                                        |
| 01:31:31   | so [[Drafts]] can actually just use [[Dropbox\|Dropbox's]]                                                          |
| 01:31:33   | API it's got full support for that                                                                 |
| 01:31:35   | to get a list of all the folders                                                                   |
| 01:31:37   | inside of a folder so I have a folder                                                              |
| 01:31:39   | called lists and that gets actually the                                                            |
| 01:31:41   | files in that folder and it just gives me the title                                                |
| 01:31:43   | of the files so that I can then go                                                                 |
| 01:31:45   | hey this is the one that I want to just append these                                               |
| 01:31:47   | things to go for it done                                                                           |
| 01:31:49   | and that led me to think wait there's a                                                            |
| 01:31:51   | whole bunch of other things that I want to just be                                                 |
| 01:31:53   | able to you know keep track of                                                                     |
| 01:31:55   | and I kind of fell down a rabbit hole                                                              |
| 01:31:57   | yeah well                                                                                          |
| 01:31:59   | I think you found a way                                                                            |
| 01:32:01   | and of course it works for you because                                                             |
| 01:32:03   | you've been very careful about the way you set it                                                  |
| 01:32:05   | up like you said earlier you've got one                                                            |
| 01:32:07   | sync location because you're double syncing                                                        |
| 01:32:09   | and that can lead to conflicts but                                                                 |
| 01:32:11   | it makes sense I for me                                                                            |
| 01:32:13   | the way I work honestly I can                                                                      |
| 01:32:15   | write most of those automations into keyboard                                                      |
| 01:32:17   | maestro I don't need the                                                                           |
| 01:32:19   | web to trigger them I guess                                                                        |
| 01:32:21   | the way I could do something like that is I could                                                  |
| 01:32:23   | do a                                                                                               |
| 01:32:25   | you know a magic URL                                                                               |
| 01:32:27   | that the [[Keyboard Maestro]] would see                                                                |
| 01:32:29   | and then that would do the same thing                                                              |
| 01:32:31   | and I could do it locally and keep it there but                                                    |
| 01:32:33   | I just don't feel like I have much need for it right now                                           |
| 01:32:35   | but I do think it's cool that you're pulling that off                                              |
| 01:32:37   | yeah yeah for me it's                                                                              |
| 01:32:39   | really helpful when like stuff is assigned                                                         |
| 01:32:41   | to me in a system that needs                                                                       |
| 01:32:43   | me to like go away and think about and write                                                       |
| 01:32:45   | notes about and stuff and do that because                                                          |
| 01:32:47   | like that trigger is online                                                                        |
| 01:32:49   | and it doesn't matter if I'm                                                                       |
| 01:32:51   | online at that moment or not                                                                       |
| 01:32:53   | like that thing is still needs to                                                                  |
| 01:32:55   | happen and I don't                                                                                 |
| 01:32:57   | like it's                                                                                          |
| 01:32:59   | the push versus pull right I'm pushing                                                             |
| 01:33:01   | data in like automatically                                                                         |
| 01:33:03   | instead of something having to go                                                                  |
| 01:33:05   | and pull the data out and                                                                          |
| 01:33:07   | sometimes I found that the                                                                         |
| 01:33:09   | you know sometimes going through and pulling the data out                                          |
| 01:33:11   | is a much better solution because especially                                                       |
| 01:33:13   | if you wait a little while the thing that was pushed                                               |
| 01:33:15   | to you by accident no longer                                                                       |
| 01:33:17   | exists right and so when you when you go                                                           |
| 01:33:19   | and pull the data it's been cleaned up                                                             |
| 01:33:21   | but also                                                                                           |
| 01:33:23   | then you have to have something that triggers                                                      |
| 01:33:25   | the pull and                                                                                       |
| 01:33:27   | pulling data through can                                                                           |
| 01:33:29   | be you know it                                                                                     |
| 01:33:31   | can be perfect and sometimes it can be                                                             |
| 01:33:33   | imperfect and I mean realistically                                                                 |
| 01:33:35   | the best solution is to sync                                                                       |
| 01:33:37   | right where you're doing and pushing and pulling you're going                                      |
| 01:33:39   | hey have you got anything for me and it's going                                                    |
| 01:33:41   | hey I've got something for you whenever it does                                                    |
| 01:33:43   | but I tend to                                                                                      |
| 01:33:45   | stick with like push this stuff to me                                                              |
| 01:33:47   | when it's it's given to me so                                                                      |
| 01:33:49   | that I don't have to go pull                                                                       |
| 01:33:51   | because I do go through and I tweak                                                                |
| 01:33:53   | and I play with all of my automations all the time                                                 |
| 01:33:55   | and I find                                                                                         |
| 01:33:57   | I'm much more likely to break something                                                            |
| 01:33:59   | that pulls than I am to break something that pushes                                                |
| 01:34:01   | and                                                                                                |
| 01:34:03   | more importantly if I break something that pushes                                                  |
| 01:34:05   | I find out about it very quickly                                                                   |
| 01:34:07   | if I break something that pulls I might not                                                        |
| 01:34:09   | find out about it until I'm overdue                                                                |
| 01:34:11   | with something until too late yeah                                                                 |
| 01:34:13   | yeah exactly and that for me                                                                       |
| 01:34:15   | is the difference where if I can have stuff                                                        |
| 01:34:17   | pushed to me then it tends to                                                                      |
| 01:34:19   | just you know even if it's                                                                         |
| 01:34:21   | only pushing it and then something else is going                                                   |
| 01:34:23   | hey okay cool these things have arrived                                                            |
| 01:34:25   | I'm going to go clean them up now you know I have                                                  |
| 01:34:27   | some stuff just dumped into the folder and then                                                    |
| 01:34:29   | [[Hazel]] goes hey                                                                                     |
| 01:34:31   | I see you I see you're missing                                                                     |
| 01:34:33   | a whole bunch of data let me just sort                                                             |
| 01:34:35   | that out for you here you go                                                                       |
| 01:34:37   | done it's like thanks [[Hazel]] you're doing all                                                       |
| 01:34:39   | the hard work for me wonderful                                                                     |
| 01:34:41   | you know so it's kind of a two-parter you know stuff                                               |
| 01:34:43   | gets pushed down in the really raw basic                                                           |
| 01:34:45   | form and then it gets tidied up and polished                                                       |
| 01:34:47   | locally into something that actually                                                               |
| 01:34:49   | gets handled but it doesn't                                                                        |
| 01:34:51   | really matter which it is as long as the data                                                      |
| 01:34:53   | gets into the system and and for                                                                   |
| 01:34:55   | me like being able to get the data into                                                            |
| 01:34:57   | the system like that's                                                                             |
| 01:34:59   | often the weak part of                                                                             |
| 01:35:01   | like my personal workflow                                                                          |
| 01:35:03   | so I found that by using automation                                                                |
| 01:35:05   | to solve that then the rest of it                                                                  |
| 01:35:07   | tends to just glide along a lot                                                                    |
| 01:35:09   | more easily well either way                                                                        |
| 01:35:11   | we've been going out in a while now and you                                                        |
| 01:35:13   | can see there are just so many ways to automate                                                    |
| 01:35:15   | [[Obsidian]] because                                                                                   |
| 01:35:17   | for the last time it's a folder full of                                                            |
| 01:35:19   | markdown folders but                                                                               |
| 01:35:21   | anyway look                                                                                        |
| 01:35:23   | we've got a forum you can weigh in                                                                 |
| 01:35:25   | there is a lot more to cover                                                                       |
| 01:35:27   | with [[Obsidian]] let us know what your thoughts are maybe                                             |
| 01:35:29   | we're gonna do I think we should do a feedback show pretty soon                                    |
| 01:35:31   | anyway we're about due for one                                                                     |
| 01:35:33   | let us know what you're doing that's fun with [[Obsidian]]                                             |
| 01:35:35   | and hopefully we gave you some good ideas                                                          |
| 01:35:37   | today we want to thank our sponsors                                                                |
| 01:35:39   | Setapp, Doppler, Trade, and LinkedIn                                                               |
| 01:35:41   | Jobs we're the automators you can                                                                  |
| 01:35:43   | find us at relay.fm/automators                                                               |
| 01:35:45   | this is show 109                                                                                   |
| 01:35:47   | and we'll see you next time                                                                        |
| 01:35:49   | goodbye folks                                                                                      |
