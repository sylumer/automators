---
status: "complete"
fc-date:
  year: 2024
  month: 03
  day: 22
fc-category: "podcast"
podcast: "Automators"
published: 2024-03-22
duration: 3271
formattedduration: "00:54:31"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/150"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators150.mp3"
episode: 150
title: "150: File Management Automation"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rosemary and David have multiple ways to automate file management on your Mac.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 150 Discussion](https://talk.automators.fm/t/150-file-management-automation/17380)

# Sponsors
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Find the qualified candidates you want to talk to, faster. Post a job for free.

# Show Notes
- [Create URL Shortcut File](https://www.icloud.com/shortcuts/d76d5dc401be4f5f98f798b53daa34b0)
- [Forklift 4](https://binarynights.com/)
- [Cocoatech | Path Finder](https://www.cocoatech.io/)
- [Yoink for Mac, iPad and iPhone - Simplified and Improved Drag and Drop](https://www.yoink.app/)
- [Aptonic - Dropzone 4](https://aptonic.com/)
- [Aptonic - Dropzone 4 Actions](https://aptonic.com/actions)
	- Extra actions you can install into Dropzone
- [Default Folder X](https://www.stclairsoft.com/DefaultFolderX/)
- [David's Keyboard Maestro Macro for sending files to JF](https://imgur.com/a/FCv1kfz)
- [Battery Notes for Home Assistant](https://andrew-codechimp.github.io/HA-Battery-Notes/)
- [Battery Notes Library](https://github.com/andrew-codechimp/HA-Battery-Notes/blob/main/library.md)

# Transcription
  
| Time Index | Transcription                                                                                      |
| :--------- | :------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to The Automators, I'm David Sparks and joined by my co-host, Rosemary Orchard,            |
| 00:07      | and this is where we talk about how to automate your technology to do your work for you.           |
| 00:12      | Hello, Rose.                                                                                       |
| 00:13      | Hey, David, how are you?                                                                           |
| 00:15      | It's episode 150.                                                                                  |
| 00:17      | Very exciting.                                                                                     |
| 00:18      | 150.                                                                                               |
| 00:19      | Yeah, it is.                                                                                       |
| 00:20      | Yeah.                                                                                              |
| 00:21      | It's our...                                                                                        |
| 00:22      | What is it?                                                                                        |
| 00:23      | No, it's not a bicentennial because we've had the centennial.                                      |
| 00:27      | So it's a centennial and bicentennial?                                                             |
| 00:29      | I don't know.                                                                                      |
| 00:30      | There's got to be a fancy word for it.                                                             |
| 00:31      | Centennial and a half?                                                                             |
| 00:32      | Centennial 0.5?                                                                                    |
| 00:33      | Would that work?                                                                                   |
| 00:34      | Centennial 1.5, really, right?                                                                     |
| 00:37      | Yeah, I'm wondering if there's something with, like, demi-centennial in there.                     |
| 00:42      | I don't know.                                                                                      |
| 00:43      | My brain's not entirely functioning in the wordy sense of the world at the moment, but             |
| 00:48      | that's okay because it's still functioning on an automation level.                                 |
| 00:52      | So yeah, it's exciting.                                                                            |
| 00:55      | We've done this for 150 episodes and I don't think we're going anywhere anytime soon.              |
| 00:59      | Because there's still so much to talk about automation-wise.                                       |
| 01:02      | So yeah, I'm very glad to be podcasting with you.                                                  |
| 01:05      | Seems like just yesterday you and I were sitting in the lobby of a hotel in San Jose plotting      |
| 01:11      | out the future of automators and here we are.                                                      |
| 01:13      | So that's good.                                                                                    |
| 01:14      | I mean, you say that, David.                                                                       |
| 01:16      | I believe at that point we'd actually recorded two trial episodes and then the wonderful           |
| 01:24      | folks at [[Apple]] were like, oh, by the way, here's shortcuts.                                        |
| 01:27      | So we just had to throw it out and start over again.                                               |
| 01:29      | But that was probably a pretty good sign that automation is important to people because            |
| 01:35      | look at where we are now.                                                                          |
| 01:38      | Folks said that workflow wouldn't be as good under the [[Apple]] banner, but I'd argue that            |
| 01:41      | it is so much better than it could ever previously been because it's got such deep integration     |
| 01:47      | and automation in general has just come so far in such a good way.                                 |
| 01:52      | And more to come.                                                                                  |
| 01:53      | I expect, I feel like we're going to get even more like AI-themed automation in a few months       |
| 01:59      | from [[Apple]] too.                                                                                    |
| 02:00      | So I can't wait to see what we have next, but it is nice to stop for a moment and just             |
| 02:04      | appreciate and enjoy getting to episode 150.                                                       |
| 02:08      | Today on the bonus section for our members, for the automators, members, we're going to            |
| 02:13      | be talking about my experimentation with a new search engine called [[Kagi]].                         |
| 02:17      | I'm actually paying for search engine rows and I have lots to share about that, so I'm             |
| 02:21      | looking forward to talking about it.                                                               |
| 02:23      | But today's episode is all about file management automation.                                       |
| 02:26      | This has been coming up between us in our kind of personal conversations and sneaking              |
| 02:31      | into the show.                                                                                     |
| 02:32      | We thought we should stop and just kind of catch up with it.                                       |
| 02:36      | There is a lot you can do with file management automation today.                                   |
| 02:38      | Today we're going to cover a bunch of it.                                                          |
| 02:41      | What we are not going to cover today, however, is [[Hazel]].                                           |
| 02:44      | [[Hazel]] is an app specifically made for file management automation.                                  |
| 02:49      | We've done shows on it in the past.                                                                |
| 02:51      | We will do shows on it in the future.                                                              |
| 02:53      | But if we start down the [[Hazel]] rabbit hole, that's the whole episode.                              |
| 02:56      | So we thought, let's talk about file automation without [[Hazel]] because both you and I, although     |
| 03:02      | we're avid [[Hazel]] users, we're also finding lots of ways to automate file management with           |
| 03:07      | other applications and I wanted to put a spotlight on that today.                                  |
| 03:11      | Yeah.                                                                                              |
| 03:12      | I mean, I do kind of, if we get a chance, want to sneak in one particular [[Hazel]] rule that          |
| 03:17      | I've been experimenting in or just one action that is available because it is really useful.       |
| 03:22      | But yeah, I've been, I mean, I work with files for a living.                                       |
| 03:26      | I'm sure most of us do to an extent, even an email is a file folks.                                |
| 03:31      | And there's so much that I've ended up doing recently just to try and make my life a little        |
| 03:37      | bit easier, especially at work.                                                                    |
| 03:41      | I've been dealing with, I've got something comes in, it's potentially a customer issue             |
| 03:46      | and then I have to make a ticket in our system about it.                                           |
| 03:48      | So while I'm investigating this, I kind of need a folder to stick all the stuff in.                |
| 03:53      | So I'd like to start, David, if it's all right with you by talking about some debug                |
| 03:57      | folders that I've been creating and how I'm automating their creation because that is,             |
| 04:02      | of course, the actual, actually exciting part of this because I'm not just, you know, like         |
| 04:06      | go into this folder and make a new sub folder named this and blah, blah, blah, you know,           |
| 04:11      | I'm actually doing some smart stuff with it to try and make it, you know, easier for               |
| 04:16      | me and just more sensible to run.                                                                  |
| 04:19      | Okay.                                                                                              |
| 04:20      | So explain the problem and how you're solving it.                                                  |
| 04:22      | Well, the problem is basically, you know, if I'm investigating something that's say                |
| 04:26      | a customer issue or something we think is a customer issue, I need somewhere to stick              |
| 04:30      | files.                                                                                             |
| 04:31      | So these could be, you know, sample outputs from the application at work or it could               |
| 04:35      | be a database query that I've run and outputs from that database query, you know, various          |
| 04:41      | things like that, somewhere to just stick notes files that are related to this so that             |
| 04:46      | when I come back to find them later, they exist.                                                   |
| 04:50      | And also related to that, I want to create automatically creates and special files in              |
| 04:55      | these folders so that I can easily, you know, if I'm debugging, you know, thing 1234, you          |
| 05:03      | know, I can inside of folder 1234, I have links to the customer support ticket and our             |
| 05:09      | internal ticket where we have, you know, more information so that I can jump to it.                |
| 05:14      | So to start with, I created a shortcut, the very exciting shortcut.                                |
| 05:19      | But what it does is it starts by asking me for two pieces of information, asks me for              |
| 05:25      | the ticket number, and then it asks me for a title, and it uses these two to create the            |
| 05:32      | folder for me.                                                                                     |
| 05:33      | Very simple, right?                                                                                |
| 05:34      | And it just puts the number in front and the description behind that.                              |
| 05:38      | And then it asks me for, or it gives me a list and it says, hey, would you like to have            |
| 05:45      | a customer ticket referenced, would you like a internal ticket referenced, or do you want          |
| 05:50      | none of these?                                                                                     |
| 05:52      | And it will let me choose from more than one of them.                                              |
| 05:55      | And then it just goes through what I've chosen and says, okay, so if you want to create an         |
| 05:59      | internal ticket, what number?                                                                      |
| 06:02      | What number do you want?                                                                           |
| 06:03      | Okay.                                                                                              |
| 06:04      | So here it is, and it creates a special file, which actually opens the URL for that ticket.        |
| 06:11      | So it just asks me for the number and then it pops that into the URL and does that.                |
| 06:14      | It does the same with the customer ticket.                                                         |
| 06:16      | And then finally, the final piece of the puzzle is that it reveals this folder that it's just      |
| 06:21      | created in [[Finder]].                                                                                 |
| 06:22      | So I can run this shortcut, which I have assigned to a [[Stream Deck]] button, actually.               |
| 06:28      | And then once that is done, it pops open the place where I can then shove all of that information  |
| 06:38      | and see everything at a glance.                                                                    |
| 06:39      | And it's very simple.                                                                              |
| 06:40      | It's really only creating a folder with a nice name and putting some helpful files in              |
| 06:44      | there.                                                                                             |
| 06:45      | It also creates a `notes.md` file, which is just an empty file.                                      |
| 06:50      | And I open that in [[BBEdit]] so that I can get on with any notes that I need in there.               |
| 06:57      | And yeah, that's it.                                                                               |
| 06:59      | But it does make my life a lot easier because it's just a little template project, basically.      |
| 07:04      | Can you get me a screenshot of that, Rose, and we'll put that in the show notes so people          |
| 07:08      | can see the...                                                                                     |
| 07:10      | I can't put a screenshot of the actual shortcut that I'm doing for creating the whole folder       |
| 07:17      | system in the notes because it's got the name of the company where I work and some other           |
| 07:23      | internal information in there.                                                                     |
| 07:24      | But I can put the shortcut or a version of the shortcut that I have created to create              |
| 07:31      | that file which opens a URL into the show notes so that folks can experiment with that.            |
| 07:38      | It's very simple to do.                                                                            |
| 07:40      | It just pops up and goes, what's the URL?                                                          |
| 07:42      | You paste in the URL and then it creates a little file for you.                                    |
| 07:46      | When you double-click it, opens that file in a browser.                                            |
| 07:50      | That does make my life, honestly, a lot easier when I'm doing all this stuff at work.              |
| 07:56      | I don't want to have to know that it's this number and then go and open the ticket system          |
| 08:03      | and type in the number and find the ticket.                                                        |
| 08:05      | So when I could just double-click and done, simple.                                                |
| 08:08      | Well, Rose, thank you for starting the show in the deep end.                                       |
| 08:12      | Yeah, yeah.                                                                                        |
| 08:13      | I mean, it's one of those things.                                                                  |
| 08:15      | It's one of those things.                                                                          |
| 08:16      | Basically, I'm just creating a folder and I am creating a couple of files in that folder           |
| 08:21      | and then I'm showing myself the folder.                                                            |
| 08:23      | That is the really simple high-level view of what I'm doing, but it just happens that              |
| 08:27      | some of those files are magic files and open URLs for me because it makes my life easier.          |
| 08:33      | All right.                                                                                         |
| 08:34      | I want to go back to the shallow end for a bit before I go to the deep end.                        |
| 08:37      | I have a few deep-end recommendations, but there's a couple things that I think if you're          |
| 08:42      | looking at file-based automation that are separate from [[Hazel]] that you should consider             |
| 08:48      | and the three apps that really stand out for me on this are file managers.                         |
| 08:55      | [[Forklift]] and [[Path Finder]] are two and they are [[Finder]] replacements, but they both have               |
| 09:00      | elements of automation attached to them and then the third one is [[Default Folder X]], which          |
| 09:05      | is a save dialogue replacement, which has automation involved.                                     |
| 09:09      | So let's start with [[Forklift]].                                                                      |
| 09:11      | [[Forklift]] has been around for a while, but I felt like it started pretty shallow.                   |
| 09:15      | It didn't have a lot of depth to it, but it has always been good for [[FTP]] file transfers            |
| 09:22      | and I think that was like its superhero move.                                                      |
| 09:26      | I remember in the old days when I was writing books for Wiley Press, I was using the FTP           |
| 09:32      | client out of [[Forklift]] to get stuff up to my editor and it's just always been good for             |
| 09:36      | that.                                                                                              |
| 09:37      | I lost track of it for a while until about a year ago.                                             |
| 09:41      | It's part of Setup and I saw they had an updated version, so I went ahead and downloaded it        |
| 09:45      | and I'm like, wow, this has come a long way.                                                       |
| 09:48      | I feel like this is a real practical Finder replacement with a lot of automation built             |
| 09:53      | in.                                                                                                |
| 09:54      | Yeah, yeah, it really is and honestly, I do love [[Forklift]].                                         |
| 09:58      | I use it every time I release an episode of Automators.                                            |
| 10:01      | I have a favourite in [[Forklift]], which opens the local folder where the files that I love            |
| 10:07      | the editor, Jim, has edited for us and put together and then it opens Lipson's FTP on              |
| 10:13      | the other side because for me, the way I work and the way my brain works, it's faster for          |
| 10:17      | me to upload those two files by FTP and then go into Lipson in the UI and just be like,            |
| 10:23      | okay, I'm importing the file that I'd already uploaded here, go.                                   |
| 10:27      | And just click a few buttons.                                                                      |
| 10:29      | It takes a few seconds there that way, whereas I feel like, I don't know, something about          |
| 10:34      | watching a progress bar in a web browser just feels slow to me, I guess, but yeah, it doesn't      |
| 10:40      | really matter if it's faster.                                                                      |
| 10:42      | It works better for my brain and that's one of the things I like about [[Forklift]].                   |
| 10:46      | It's really easy to set up your favourites and you can have, if you've got, say, a server           |
| 10:52      | like maybe you're using [[Amazon S3\|Amazon's S3 storage]], you can have that and you can immediately,            |
| 10:59      | your favourite can go straight into a subfolder, but you can also map a local folder and when       |
| 11:03      | you open that favourite, it'll open the local on the left-hand side and the remote one on           |
| 11:08      | the right-hand side and I love that.                                                               |
| 11:10      | Yeah, I mean, you've keyed in on one of my favourite automations of this app is the favourites.      |
| 11:16      | Not only can it favourite a path, but it can sync those favourites.                                     |
| 11:20      | So if you've got a desktop and laptop like I do, you open a [[Forklift]] on different machines,        |
| 11:27      | it's using [[iCloud]] on the back end to do this, but all your favourites show up and that's            |
| 11:32      | not something that works with the built-in finder, right?                                          |
| 11:35      | You have to kind of redesignate your, you know, your margin, they don't even really                |
| 11:40      | have favourites.                                                                                    |
| 11:41      | So it's just, it's really nice and it creates automation in the sense that everything is           |
| 11:46      | just super easy.                                                                                   |
| 11:48      | Another piece of it that I like is the [[Dropbox]] support.                                            |
| 11:52      | I feel like they did a really good job of making [[Dropbox]] work with it.                             |
| 11:56      | You know, [[Dropbox]] does, wants to do more under the hood than [[Apple]] really wants it to, but         |
| 12:02      | with this third-party integration, you can right-click to get your share links and all             |
| 12:07      | that stuff just, I feel like is really beneficial.                                                 |
| 12:10      | Yes, yeah, I would agree.                                                                          |
| 12:13      | Another automation piece of this is the multiple window view.                                      |
| 12:16      | They have tabs like Finder does, but it just, it seems like it was, and Finder, this is            |
| 12:22      | an afterthought, whereas in [[Forklift]], it's a built-in feature.                                     |
| 12:25      | So if you want to have multiple folders open and just be moving files between them on different    |
| 12:32      | panes, [[Forklift]] to me is, is just tops in this.                                                    |
| 12:36      | Of all the apps we're going to talk about as 'finders' today, I think this one is the                |
| 12:40      | best at that.                                                                                      |
| 12:42      | And it's just the way it, it's pretty, you know, I guess that's the, that's the thing              |
| 12:45      | I want to say is it's just pretty, it renders it, the typography is good, it's easy to read,       |
| 12:50      | it's easy to work with, and it makes managing files more pleasant, which, you know, makes          |
| 12:57      | it easier.                                                                                         |
| 12:58      | Yeah, I agree.                                                                                     |
| 13:00      | And there's, there's just something about having file management made a little bit easier.         |
| 13:05      | You know, there's, there's things that you can change in Finder to, you know, preferences          |
| 13:08      | that you can set and so on and so forth.                                                           |
| 13:11      | But at the end of the day, it is nice to just have an application understand what it is            |
| 13:16      | that you would want or need and give you those basics to go with a couple more automation          |
| 13:23      | features.                                                                                          |
| 13:24      | I noted this, I was going through this week, just kind of writing things down and keyboard         |
| 13:28      | control way better than [[Finder]].                                                                    |
| 13:31      | You can do anything from the keyboard in this app.                                                 |
| 13:34      | At least I haven't found something I couldn't keyboard shortcut, which obviously is a huge         |
| 13:39      | automation win.                                                                                    |
| 13:41      | And they have an app to leader built in.                                                           |
| 13:42      | I don't know if that's even worth mentioning.                                                      |
| 13:44      | But as an automator, we delete apps, we don't want to have to go through and manually find         |
| 13:49      | the related files.                                                                                 |
| 13:51      | [[Hazel]] does this too.                                                                               |
| 13:52      | A lot of the app strength that we talk about today will do this, but it catches when you           |
| 13:56      | delete an app and it gets rid of the support files and all that other nonsense that continues      |
| 14:01      | to take up space on these limited SSDs.                                                            |
| 14:05      | Yeah.                                                                                              |
| 14:06      | Yeah.                                                                                              |
| 14:07      | It's, it's one of those things where you don't necessarily, you know, think about this             |
| 14:12      | sort of thing until you've got it.                                                                 |
| 14:14      | Like you don't know what you were missing until, until suddenly you discover like, oh              |
| 14:19      | my, wow.                                                                                           |
| 14:20      | Okay.                                                                                              |
| 14:21      | This is, this is a thing that can happen.                                                          |
| 14:22      | And there's a whole bunch of apps out there, which, you know, can do the file deletion             |
| 14:27      | whenever you delete apps, it'll go off and find all the stuff related to it.                       |
| 14:31      | But I feel like it's, it makes sense built into a file management application.                     |
| 14:35      | All right, let's talk about the other one here that I think is an automation tool as               |
| 14:42      | a finder replacement.                                                                              |
| 14:43      | That's [[Path Finder]].                                                                                 |
| 14:44      | [[Path Finder]] is like the ultimate tool belt of file management.                                      |
| 14:49      | Have you used [[Path Finder]] much Rose?                                                                   |
| 14:52      | It feels to me like this would be one that you would be all over.                                  |
| 14:54      | I tried File or [[Path Finder]] back in the day and it was okay.                                        |
| 14:59      | It just didn't really gel with me at that point.                                                   |
| 15:02      | I mean, I think the thing that, you know, always keeps me primarily in [[Finder]] versus               |
| 15:09      | anything else is the fact that [[Finder]] has to be in the doc, like every other application           |
| 15:14      | on your Mac, you can take it out of the, well, everything is at the bin.                           |
| 15:17      | I think the bin has to stay in the doc and so does [[Finder]].                                         |
| 15:20      | Everything else can come out of the doc, but not Finder.                                           |
| 15:23      | So that means that I kind of don't want to, you know, sacrifice another doc icon and increase      |
| 15:30      | the size of my doc.                                                                                |
| 15:33      | When I can just use [[Finder]], [[Forklift]] has found a place, you know, in my life.                      |
| 15:37      | I don't use it all the time though.                                                                |
| 15:40      | I only use it when, you know, I'm wanting to, you know, compare two folders or similar             |
| 15:46      | and things like that.                                                                              |
| 15:47      | I primarily use [[Finder]], but I should definitely give [[Path Finder]] another try because there's        |
| 15:52      | a lot of nice features in there.                                                                   |
| 15:53      | Yeah, it really is the kind of the power tool, automator version of a [[Finder]] replacement,          |
| 15:59      | you know, like you can batch rename, which, you know, usually is a separate app.                   |
| 16:05      | They can compare and synchronise folders, it can merge folders.                                    |
| 16:09      | Both [[Path Finder]] and [[Forklift]] have better hidden file support than the built-in [[Finder]] does.        |
| 16:15      | One of the things I really like about [[Path Finder]] is the drop stack where you can just drop         |
| 16:21      | files into it.                                                                                     |
| 16:22      | It's like a shelf basically in the [[Finder]].                                                         |
| 16:24      | I wish [[Apple]] would copy that feature.                                                              |
| 16:26      | I think that's often useful, like when you're going between things.                                |
| 16:31      | You've got also, of course, you know, multi-paying support and that other stuff that you get,      |
| 16:38      | you know, with [[Forklift]].                                                                           |
| 16:43      | But it's just, it's as a nerdier version of the [[Finder]], you know, like it's got better             |
| 16:50      | sorting features and, you know, it's just really, if you feel like, if you ever felt               |
| 16:56      | like the [[Finder]] is like holding you back, this is worth checking out.                              |
| 17:01      | And I do think it really kind of can fit into file automation routine because you've got           |
| 17:06      | all these tools available to you.                                                                  |
| 17:09      | Yes.                                                                                               |
| 17:10      | Yeah.                                                                                              |
| 17:11      | I agree with that.                                                                                 |
| 17:12      | And honestly, yeah, it's just one of those things where you've really got to play with             |
| 17:16      | these things, right?                                                                               |
| 17:17      | And try them out and then give it a little break if it's not gelling with you and come             |
| 17:20      | back to it a later date.                                                                           |
| 17:23      | Because there, yeah, you'll end up finding, oh, right, so that's how I can, oh, now I              |
| 17:30      | get it.                                                                                            |
| 17:31      | And it just kind of clicks.                                                                        |
| 17:32      | Like you were saying about that little drop zone or drop stack in [[Path Finder]], I use [[Yoink]]          |
| 17:39      | for that because [[Yoink]] is always there whenever I'm doing things.                                  |
| 17:42      | And I do have macros and automations that add things to [[Yoink]] for me.                              |
| 17:47      | So when stuff appears in my downloads folder or whatever, it gets poked into [[Yoink]] because         |
| 17:51      | that's where I'm going to need it realistically.                                                   |
| 17:54      | And yeah, I use my browser to take screenshots, like the actual feature that's built into          |
| 18:00      | [[Firefox]].                                                                                           |
| 18:01      | And this is for work things to screenshot this particular element that's on the screen.            |
| 18:07      | Whenever it does that, it downloads the file to my downloads folder and it pops up in [[Yoink]]        |
| 18:11      | for me automatically.                                                                              |
| 18:14      | I'm using [[Hazel]], I'll admit to get it to appear in [[Yoink]].                                          |
| 18:17      | It's just the open in app action, but I specifically said to [[Yoink]], but I'm trying to talk about   |
| 18:23      | [[Yoink]] here because that is one of my favourite go-to apps.                                          |
| 18:28      | Another app that's kind of similar to that, which does have a drop stack, is [[Drop Zone]]             |
| 18:33      | on the Mac, which is also part of a set app.                                                       |
| 18:37      | But what I like about this is you grab a file and you drag it up to [[Drop Zone]], which is            |
| 18:41      | living up in your menu bar by the clock.                                                           |
| 18:44      | But you can have a bunch of folders up there, but you can also have actions.                       |
| 18:48      | Okay, so one of the actions that I have is install application, but you can also have              |
| 18:52      | like [[AirDrop]] is there, email is there, shorten URL, save text, and there's a whole bunch           |
| 18:58      | of actions on their website as well that you can download and give a try to.                       |
| 19:03      | So that is definitely worth investigating because I have written actions for this because          |
| 19:09      | of course I did, I'm a nerd, but you don't have to be able to write actions.                       |
| 19:14      | You can put a shortcut in there.                                                                   |
| 19:16      | And if you've got a shortcut, whether you borrowed it, stolen it, or created it yourself,          |
| 19:21      | that you want to run on files, that it takes files as input, then you can stick that in            |
| 19:25      | [[Drop Zone]] and drag a file onto it and off you run.                                                 |
| 19:28      | Yeah, I am a big fan of [[Drop Zone]], and I guess I'll just add that on as a file management          |
| 19:33      | tool because I have, in [[Drop Zone]], it's a shelf app, so you can put things up there,               |
| 19:39      | but you can also lock them there.                                                                  |
| 19:41      | So as an example, I have locked versions of the artwork for the Automators, [[Mac Power Users]]             |
| 19:46      | users and the [[Focused]] Podcast and the MacSparky logo, and I just have occasions where I need         |
| 19:51      | to drop the logo onto something or the internet, and it's always just waiting for me there         |
| 19:56      | in [[Drop Zone]].                                                                                      |
| 19:57      | So any kinds of files you use like for your work that you frequently attach to things,             |
| 20:03      | you add it to [[Drop Zone]], and then it's just there for you, but you can also have it as             |
| 20:08      | a temporary shelf where you just put it there to get it somewhere else, and then in addition       |
| 20:12      | to the actions, you can have folder and file manipulations, and you can copy something             |
| 20:19      | to or you can move something to.                                                                   |
| 20:20      | So as an example, I will often put files into my action folder, that's kind of my clearing         |
| 20:28      | house with [[Hazel]], and we're just going to talk about [[Hazel]] once in a while because we're           |
| 20:32      | doing file management show, but like I said, I really want to save [[Hazel]] for another day           |
| 20:36      | because we need to give it, to give that adequate time, we need to kind of really dig in, but      |
| 20:42      | I want to put files in that folder so [[Hazel]] can do its magic, and so I've got a move               |
| 20:47      | to action folder, action in [[Drop Zone]].                                                             |
| 20:51      | So I can grab a file anywhere and just move it, and then the little [[Drop Zone]], drop zone           |
| 20:57      | opens up, I drop it on that folder and off it goes, but you can also use copy, so like             |
| 21:01      | if I want to put something on the desktop temporarily just to work with it, I've got               |
| 21:05      | a copy to desktop action there, and I've got a bunch of them.                                      |
| 21:09      | Another one I have is move to burn bag.                                                            |
| 21:12      | I've got a folder called the burn bag, and files go in there, and after three months               |
| 21:18      | I believe they delete automatically, but when I'm working on something and I send a file           |
| 21:23      | off to somebody to work on, but I don't, I want it to be around long enough for them               |
| 21:27      | to finish whatever they're doing, but not forever, I just move it to the burn bag with             |
| 21:31      | drop zone.                                                                                         |
| 21:32      | So that's a really, it's another really powerful file automation tool.                             |
| 21:37      | Yeah, they also have some other built-in actions like want to rename and move files,               |
| 21:42      | which can be really helpful for various things, like if I'm throwing something into the automators |
| 21:47      | folder, then I'm going to have it renamed before I do that so that you, David and Jim              |
| 21:52      | will know who it comes from, and they have built-in actions for things like uploading              |
| 21:56      | to [[Amazon S3\|Amazon's S3]], uploading to [[Google Drive]], sending via messages, opening a URL, I mentioned        |
| 22:02      | before that you can run shortcuts.                                                                 |
| 22:04      | You can also run [[AppleScript]], and yeah, and there's other actions that you can download            |
| 22:11      | from their site as well to install, like installing the applications, things like that.            |
| 22:17      | There's also like a [[YouTube]] downloader, unzipping files, there's a specific one for creating       |
| 22:21      | a new note inside notes, if that's an application you've ever used.                                |
| 22:25      | It's a kind of like [[Yoink]] in some ways, and it's like notes that float over on the side            |
| 22:29      | of your screen.                                                                                    |
| 22:30      | But yeah, there's printing options, there's getting the finder path.                               |
| 22:35      | What I have to say I really love about [[Drop Zone]] is because you can add folders and apps           |
| 22:40      | to it, and when you've added, say, a move file or a copy file folder into your [[Drop Zone]],               |
| 22:49      | so it appears across the top as one of those target actions.                                 |
| 22:55      | If I just click on [[Drop Zone]], and then I click on the folder, it will open the folder              |
| 22:59      | for me.                                                                                            |
| 23:00      | So it's not just like single purpose of well, I can only like drag the file here to move           |
| 23:05      | it there or copy it there or rename it and move it there.                                          |
| 23:08      | No, you can actually click, you know, just click on it as well and ta-da, you can open             |
| 23:13      | it.                                                                                                |
| 23:14      | And I think the things like that are really useful, you know, they've got built-in actions         |
| 23:18      | for doing things like resizing images and stuff too.                                               |
| 23:21      | So definitely, you know, it's something that seems very simple on the surface of it.               |
| 23:27      | And it is in many ways, but when my hand is on the mouse because, you know, that's what            |
| 23:31      | I'm doing, it makes sense for me to just drag a little bit further up to the top of                |
| 23:35      | my screen.                                                                                         |
| 23:36      | And those are the most commonly used things that I need right there in [[Drop Zone]]v.                  |
| 23:42      | I'm actually struggling to figure out the balance between [[Drop Zone]] and [[Yoink]], because             |
| 23:48      | I find I use [[Drop Zone]] the most, but [[Yoink]] is also very powerful.                                  |
| 23:54      | How do you decide which one you're going to use when you're doing file manipulation?               |
| 23:58      | Well, so, I mean, this might be a bit of a cop out.                                                |
| 24:03      | I don't use [[Drop Zone]] for the drop zone.                                                           |
| 24:05      | I don't store files up in [[Drop Zone]].                                                               |
| 24:07      | For me, the beauty of [[Yoink]] is that it's on the side of my screen.                                 |
| 24:11      | If there's nothing in it, it goes away.                                                            |
| 24:13      | It's hidden.                                                                                       |
| 24:14      | If there's something in it, I can see it.                                                          |
| 24:17      | And for me, if it is out of sight, it's not just out of mind, it doesn't exist.                    |
| 24:22      | And I will probably never remember that it's there until the next time I go to do something        |
| 24:26      | in [[Drop Zone]], at which point I'll be like, oh, there's that file.                                  |
| 24:31      | I was going to do a thing with that.                                                               |
| 24:32      | And then I lose the thing that I'm currently doing and everything goes wrong.                      |
| 24:36      | So I don't put files into [[Drop Zone]].                                                               |
| 24:40      | I put them into [[Yoink]].                                                                             |
| 24:42      | And this is really silly.                                                                          |
| 24:45      | For insanity's sake, I did actually add [[Yoink]] as a target in [[Drop Zone]] because sometimes           |
| 24:53      | I'm dragging a file and I'm dragging it and I go up to the top right corner because I'm            |
| 24:56      | thinking I'm going to move it and I'm like, actually, no, it's in the right place.                 |
| 24:59      | I just need to see it on my screen.                                                                |
| 25:00      | So I have [[Yoink]] in there as well as a target application, which is perhaps a little bit            |
| 25:06      | too meta or silly or whatever.                                                                     |
| 25:08      | But you know what?                                                                                 |
| 25:09      | When my muscle memory goes wrong and I drag to the top right instead of the bottom left,           |
| 25:13      | I have a 32-inch ultra-wide monitor, folks.                                                        |
| 25:16      | I can get my mouse all the way from the top right of my screen to the bottom left of my            |
| 25:21      | screen without having to pick it up and move it.                                                   |
| 25:25      | But it's a little bit more work than I feel is necessary.                                          |
| 25:29      | So when my muscle memory goes wrong, I decided that I was just going to put in a little shortcut   |
| 25:33      | to help me fix that problem instead of giving up and starting it over again.                       |
| 25:37      | That kind of makes sense, honestly, because the real advantage of [[Drop Zone]] is the automation      |
| 25:43      | and the power tools.                                                                               |
| 25:44      | So I could see segregating those.                                                                  |
| 25:50      | This episode of The Automators is brought to you by LinkedIn Talent Solutions.                     |
| 25:54      | Go to linkedin.com/automators to find the qualified candidates you want to talk              |
| 25:59      | to faster.                                                                                         |
| 26:01      | Post your job for free today.                                                                      |
| 26:03      | When you're hiring for your small business, you want to find out quality professionals             |
| 26:07      | that are right for the role.                                                                       |
| 26:09      | That's why you have to check out LinkedIn Jobs.                                                    |
| 26:12      | LinkedIn Jobs has the tools to help find the right professionals for your team faster and          |
| 26:17      | for free.                                                                                          |
| 26:18      | It's so important that you build the right team.                                                   |
| 26:21      | You want the people with the right attitude, the right qualities, the right mindset.               |
| 26:27      | And to pull that off, you need the right hiring tools.                                             |
| 26:30      | Back in my law firm days, we used to put ads in the paper and we got this mix of people,           |
| 26:36      | so many of whom were just not qualified or the wrong people for the job.                           |
| 26:40      | It took so long to find the right person.                                                          |
| 26:43      | LinkedIn Jobs handles all of that for you.                                                         |
| 26:46      | It filters out the people that don't make sense and gets you just the right people that            |
| 26:50      | you need.                                                                                          |
| 26:52      | LinkedIn isn't just another job board.                                                             |
| 26:54      | It has a vast network of more than a billion professionals, which makes it the best place          |
| 26:58      | to hire.                                                                                           |
| 27:00      | Hiring is easy when you have that many quality candidates.                                         |
| 27:03      | So easy, in fact, that 86% of small businesses get a qualified candidate within 24 hours.          |
| 27:10      | Everyone also knows that small businesses are wearing so many hats that might not have             |
| 27:14      | the time or resources to hire.                                                                     |
| 27:17      | That's why they're constantly finding ways to make the process easier.                             |
| 27:20      | They even just launched a feature that helps you write job descriptions, making the process        |
| 27:25      | even easier and quicker.                                                                           |
| 27:27      | It's easy to see why 2.5 million small businesses use LinkedIn for hiring.                         |
| 27:32      | So post your job for free at linkedin.com/automators.                                        |
| 27:37      | Once again, linkedin.com/automators to post your job for free, terms and conditions          |
| 27:43      | do apply.                                                                                          |
| 27:44      | Thank you, LinkedIn Jobs, for all of your support of the Automators podcast.                       |
| 27:49      | Well, one of the other applications that I feel like we should talk about here, David,             |
| 27:55      | is DefaultVolderX because it's one of those apps that people always end up asking you,             |
| 28:03      | and say, how did you do that, because usually what happens to me, and this happens for some        |
| 28:07      | reason on a somewhat regular basis when I'm screen sharing, is I'll need to save a file.           |
| 28:13      | And I'll have the folder open in [[Finder]], and it'll kind of be behind the window of the             |
| 28:18      | application that I'm using and just a little bit open.                                             |
| 28:20      | But that's the file that I need, or the folder where I need to save this.                          |
| 28:25      | And so I go to save the file, and it's opened up the save file dialog.                             |
| 28:31      | And then I can just mouse over to the existing [[Finder]] window and click.                            |
| 28:34      | And it updates, it doesn't switch to [[Finder]], no, it updates the path that is currently             |
| 28:42      | where I'm going to be saving the file in that application.                                         |
| 28:46      | And that is the thing that I think catches everybody's eye.                                        |
| 28:50      | [[Default Folder X]] is unsurprisingly designed for setting up, you know, default folders                |
| 28:54      | when you are continuing, when you're, you know, saving something in an application.                |
| 28:59      | So whenever I save a text factory in [[BBEdit]], it defaults it to the folder where I keep             |
| 29:04      | all of my text factories for [[BBEdit]] and things like that.                                          |
| 29:08      | But you know, you can, I mean, for a really long time, I'm ashamed to admit this because           |
| 29:14      | I didn't dive into all the features properly.                                                      |
| 29:16      | For a really long time, I literally just used it for the, I've already got a [[Finder]] window         |
| 29:19      | open.                                                                                              |
| 29:20      | I'll just click on that, and it'll update the, the, where I'm going to save the file               |
| 29:24      | in, in the, in the current application, and that made me very, very happy.                         |
| 29:30      | But there's so much more that you can do.                                                          |
| 29:32      | Yeah.                                                                                              |
| 29:33      | It really feels like [[Default Folder X]] started with one feature and it's been around forever.       |
| 29:39      | I mean, the reason it's called X, I believe, is because it was on, it predates Steve Jobs'         |
| 29:46      | return to [[Apple]].                                                                                   |
| 29:47      | It was, it was either on next, I think it was on next and then came to the Mac with                |
| 29:55      | Steve Jobs move and the, and the transition back in the day, or it was already on Mac,             |
| 30:00      | but it's just been around a long time.                                                             |
| 30:02      | And the, as I understand it, I think it's a father son development team, like the dad              |
| 30:07      | developed it and the son learned a code and now that son helps.                                    |
| 30:09      | But it's just like, there are so many great features in this app.                                  |
| 30:13      | And it's, it's kind of like file management by cutting off the file management at the              |
| 30:18      | past.                                                                                              |
| 30:19      | Like you just get the file managed because you save it in the right place to begin with.           |
| 30:23      | You can add the tags there.                                                                        |
| 30:24      | You can easily get to the right folder.                                                            |
| 30:26      | Like Rose said, you can just click on a folder in the finder and it updates in your, your          |
| 30:30      | save dialog box.                                                                                   |
| 30:31      | That's bananas, but it works.                                                                      |
| 30:33      | And I use it all the time.                                                                         |
| 30:35      | It gets me in trouble because I screencast and forgot to turn it off sometimes.                    |
| 30:39      | And then I get all these emails.                                                                   |
| 30:40      | Oh, I like that thing you screencast about, but what is going on with your save dialog             |
| 30:44      | box?                                                                                               |
| 30:45      | You know, because people don't know about this app.                                                |
| 30:47      | So it really is, I think a great file management tool and, and we're, this is kind of a broad      |
| 30:55      | stroke show.                                                                                       |
| 30:57      | If you guys want us to, we could do a whole show on automation, I think with default folder        |
| 31:02      | X, but this is something you should definitely check out if you're looking for ways to ease        |
| 31:07      | up on your file management.                                                                        |
| 31:09      | But I also do want to go into the deep end of the pull rows and, and I've got one before           |
| 31:14      | we do that, David, I just want to say I went back in the [[Default Folder X]] blog, okay,             |
| 31:19      | to find out, you know, where, you know, how long this application has been around.                 |
| 31:23      | And their very first post on their news is from the 23rd of October, 2007, where they're           |
| 31:29      | actually saying that they've moved everything and there's, you know, old news is elsewhere.        |
| 31:33      | So they were, they were around before 2007.                                                        |
| 31:36      | However, the third post on their news section says, David Sparks over at surf bits has posted      |
| 31:44      | a nice review of [[Default Folder X]] explaining how he can no longer deal with Macs that don't        |
| 31:48      | have it installed.                                                                                 |
| 31:50      | Always nice to hear we've got someone else addicted.                                               |
| 31:52      | Well, David, it's, it's a couple of years after 2007, you're still using it.                       |
| 31:56      | I think that goes to say how great [[Default Folder X]] is.                                            |
| 32:00      | Yeah.                                                                                              |
| 32:01      | It is a great app.                                                                                 |
| 32:02      | And that is so funny.                                                                              |
| 32:03      | I never knew that they referenced that surf bits was a podcast that I contributed to back          |
| 32:09      | in the early days when I was first getting kind of started in this stuff that was run              |
| 32:13      | by a dear friend, Tim Verporten, who's now left us, but yeah, that is, that's great.               |
| 32:17      | I love hearing that, but, but I want to go to the deep end a little bit.                           |
| 32:22      | One of the tools I have increasingly relied on for file management is [[Keyboard Maestro]].            |
| 32:28      | And I'm going to share a screenshot of this so you guys can see it, but there is a method          |
| 32:35      | in [[Keyboard Maestro]] to move files.                                                                 |
| 32:37      | And that's what I really wanted to do because it just makes sense to create actions and            |
| 32:42      | [[Keyboard Maestro]] to move assets.                                                                   |
| 32:45      | And I do it all the time.                                                                          |
| 32:46      | And just a few examples of how I use this, it is a one step macro that will move a file            |
| 32:53      | to wherever you designate.                                                                         |
| 32:55      | So when we finish today's show, I will go into the folder that, that I have designated             |
| 33:03      | to save these recordings, I'll select the files of our recording and I'll push a button            |
| 33:07      | on my [[Stream Deck]] and it will trigger this [[Keyboard Maestro]] script to move the files               |
| 33:12      | to the editor's shared folder on [[Dropbox]].                                                          |
| 33:14      | And I've done this for a bunch of things in my life.                                               |
| 33:17      | The one I'm going to share is one where I share stuff to be edited with JF, the editor             |
| 33:22      | at Sparky Media, and, and I've got a folder on [[Dropbox]] we share called desk JF.                    |
| 33:30      | It's his desk.                                                                                     |
| 33:31      | Basically, I drop things on his desk.                                                              |
| 33:33      | And the trick is it's a simple action, but you've got to like kind of follow the screenshot        |
| 33:38      | I'm going to give you.                                                                             |
| 33:41      | So it's a selected file.                                                                           |
| 33:42      | So the status of the menu is selected.                                                             |
| 33:45      | So we have a select file action and then it executes the following actions.                        |
| 33:50      | It looks at the path of the selection.                                                             |
| 33:53      | So it's looking at the file that you've selected, what's the path of that?                         |
| 33:56      | And then it copies the file to the new path.                                                       |
| 34:00      | And the way you select the path is you just hit the folder and [[Keyboard Maestro]].                   |
| 34:04      | If you're familiar with [[Keyboard Maestro]], this is a common action when you want to                 |
| 34:06      | select a destination folder.                                                                       |
| 34:08      | Don't try and code it in, just hit the little folder selection, go select it.                      |
| 34:12      | I select it here in the, the [[Dropbox]] library and then it moves the file there whenever             |
| 34:19      | I see it.                                                                                          |
| 34:20      | And like I said, it's a one action [[Keyboard Maestro]] script, but it works really nice.              |
| 34:26      | And because it's a script of [[Keyboard Maestro]], I can easily attach it to a [[Stream Deck]] button.     |
| 34:31      | So like this one, where I move it to, or I copy it to JF, I don't move it.                         |
| 34:36      | Where I copy it, I've just got a [[Stream Deck]] button with his smiling face on it.                   |
| 34:40      | And anytime I have a file, I want to send it to JF, I just push his face on my stream              |
| 34:44      | deck button and off it goes.                                                                       |
| 34:46      | And anybody, no matter what job you have, if you think about it, like if you repeatedly            |
| 34:51      | move files to a certain location, you don't have to open the finder, you don't have to             |
| 34:55      | drag anything to select the file, push a button on the [[Stream Deck]] and off it goes.                |
| 35:00      | And I find that to be something I use daily.                                                       |
| 35:03      | Well, I also have some very similar actions in [[Keyboard Maestro]] for moving files, but              |
| 35:12      | I, as always, David, I kind of took it to the next level because it's me we're talking             |
| 35:17      | about, right?                                                                                      |
| 35:18      | So when we sit down to start recording an episode of Automators, I use [[Bunch]] actually              |
| 35:23      | to get things set up.                                                                              |
| 35:25      | So it opens [[Safari]] with the right tabs and it does a couple of things.                             |
| 35:30      | One of those things that it does is it asks me for the episode number, okay?                       |
| 35:34      | And bonus, it automatically increments it from the previous episode number.                        |
| 35:38      | So I just have to click, okay, if I'm happy with it.                                               |
| 35:41      | Then I click that okay button.                                                                     |
| 35:43      | Okay.                                                                                              |
| 35:44      | And this is right when we start recording, it goes, okay.                                          |
| 35:47      | So she said, this is episode 150 because this is episode 150.                                      |
| 35:51      | I'm going to go off and I'm going to make an episode 150 folder in [[Dropbox]] where we                |
| 35:54      | send all the files to Jim.                                                                         |
| 35:56      | So Jim will find all of the 150 files together.                                                    |
| 35:59      | And then when I'm done recording, the place that I put all the files that are recorded             |
| 36:05      | using, I have a specific macro for recording for automators or it's not a macro.                   |
| 36:12      | It's [[Audio Hijack]], it's a session.                                                                 |
| 36:15      | That's the one.                                                                                    |
| 36:17      | So I have an [[Audio Hijack]] session just for automators.                                             |
| 36:20      | I've got one for each different kind of podcast.                                                   |
| 36:23      | When I finish recording, and so I hit the stop button at the end, then the files stop              |
| 36:29      | being edited, right?                                                                               |
| 36:31      | [[Keyboard Maestro]] is watching that folder, not [[Hazel]] folks.                                         |
| 36:34      | [[Keyboard Maestro]] is watching the folder.                                                           |
| 36:37      | And [[Keyboard Maestro]] waits until the files are no longer being changed because I've said,          |
| 36:42      | hey, when this folder, which is the automators folder where I store the files, adds an item        |
| 36:47      | and ignore partial or changing files.                                                              |
| 36:50      | This is really important.                                                                          |
| 36:51      | Then it goes over all of the files or the file that triggered it.                                  |
| 36:57      | And it will rename it, okay, because my files automatically get saved with XXX at the start        |
| 37:03      | for the episode number, so that XXX today will be replaced with episode 150.                       |
| 37:08      | And it will change that from XXX to 150 and move that into the folder 150 for Jim, because         |
| 37:15      | of course it does, which makes my life a lot easier.                                               |
| 37:19      | But it's also remembering 150.                                                                     |
| 37:21      | This is a regular [[Keyboard Maestro]] variable, so it gets saved and kept around because when         |
| 37:28      | somebody, like for example, last episode, 149, we had the lovely [[Simon Støvring]] on,               |
| 37:34      | when he uploaded his file, it went into a guest recordings folder.                                 |
| 37:38      | Well, [[Keyboard Maestro]] is watching that folder, and it will just move the file from guest          |
| 37:43      | recordings into episode 150 because it's using the variable in the folder name to just move        |
| 37:48      | it right in there for me every time.                                                               |
| 37:50      | And our show notes get automatically created as a file when I click that 150 as well, which        |
| 37:56      | is, you know, it's kind of a, well, it's file management because I don't have to go and            |
| 37:59      | create the file, and it opens up in [[BBEdit]] for me.                                                 |
| 38:02      | And honestly, this just makes my life a lot easier, and it means that Jim doesn't have             |
| 38:06      | to chase me for files anymore, which I think he appreciates.                                       |
| 38:09      | And the files just end up where they're supposed to be.                                            |
| 38:12      | So yeah, that's what I'm doing.                                                                    |
| 38:14      | I'm using [[Keyboard Maestro]] to move files too.                                                      |
| 38:17      | Excellent, excellent.                                                                              |
| 38:19      | Well, that was the thing we really wanted to cover today is that there are a lot of tools          |
| 38:24      | available to you to automate file management.                                                      |
| 38:28      | And I think this is something that's easy for, uh, automators to, to ignore.                       |
| 38:33      | Like you just kind of get used to, right?                                                          |
| 38:36      | Opening the finder, digging for the folders, dragging things, waiting for them to land             |
| 38:40      | in the folder, hoping you don't hit the wrong folder.                                              |
| 38:43      | But this is an area ripe with automation, and you should definitely be checking it out             |
| 38:46      | if you have it.                                                                                    |
| 38:48      | So check out some of the, uh, the apps we've talked about today, Rose and I will share screenshots |
| 38:53      | of some of the automations we've done.                                                             |
| 38:55      | And we'd love to hear from you on the forum on ways you're automating your file management.        |
| 39:00      | There, there's just a lot of ways to skin this cat, but you should be looking at it                |
| 39:04      | because the more you can automate this, the faster it is and the more accurate it is.              |
| 39:09      | And, you know, those files on your hard drive definitely are a needle in the haystack if           |
| 39:13      | you, if you get them in the wrong place.                                                           |
| 39:15      | So, so automation not only makes it faster, it makes you less likely to have an error.             |
| 39:20      | So check that out.                                                                                 |
| 39:22      | I also want to talk, Rose, I've been enjoying the segment we've been doing about things            |
| 39:26      | we're automating because you and I are both always experimenting.                                  |
| 39:29      | And you told me you're up to some, some battery, uh, some battery automation for lack of better    |
| 39:35      | words.                                                                                             |
| 39:36      | What, what are you doing?                                                                          |
| 39:37      | Well, uh, you know, you got to get charged, David, um, so yeah, um, I have been, uh, having        |
| 39:43      | some problems.                                                                                     |
| 39:44      | It has been unseasonably cold, uh, in the UK, uh, well, I say unseasonably cold.                   |
| 39:49      | Like the first of March I woke up and there was a bunch of snow outside.                           |
| 39:53      | We don't really get snow in the UK.                                                                |
| 39:55      | We get rain.                                                                                       |
| 39:56      | Um, and it's, it's fairly consistent rain.                                                         |
| 39:58      | It's drizzly.                                                                                      |
| 39:59      | It's gray.                                                                                         |
| 40:00      | It's usually too warm for snow.                                                                    |
| 40:01      | Um, and then we don't get snow, but I woke up on the first of March and there was snow.            |
| 40:05      | And understandably, uh, I have been dealing with all of the fun things that come, uh,              |
| 40:10      | hand in hand with cold weather, including things like batteries dying, um, in various sensors      |
| 40:15      | and smart automation things around the house, cause I'm, I'm, I'm sure folks will be a sort        |
| 40:20      | of vaguely aware if your smoke alarm battery dies, it usually dies at like three o'clock           |
| 40:24      | in the morning, right?                                                                             |
| 40:25      | It's somewhere like two, three o'clock in the morning.                                             |
| 40:27      | That's usually because that's the coldest part of the day.                                         |
| 40:30      | Um, and, um, I didn't have to deal with that because I have a system which tells me when           |
| 40:35      | certain batteries are running low and need charging.                                               |
| 40:39      | Um, and I have been attempting to expand that.                                                     |
| 40:43      | And one of the things that I have been doing as part of this is I've actually been using           |
| 40:47      | home assistant for this.                                                                           |
| 40:48      | There's a, uh, a lovely integration, uh, called battery notes, which goes through, um, and         |
| 40:53      | it has a library of devices.                                                                       |
| 40:55      | And what I really like about this, um, is that library of devices can be used by anybody.          |
| 41:00      | Um, so even if you don't, uh, have home system, okay, if you've got a smart home device and        |
| 41:05      | you're like, okay, but I don't remember that [[Aqara]] motion sensor that Rose recommended.            |
| 41:10      | I like, I've got the model number here.                                                            |
| 41:13      | I can find that in home kit, um, but I don't, I don't know, I can't remember what kind of          |
| 41:18      | battery it is.                                                                                     |
| 41:19      | You can use the library to find out what kind of battery it is or if it's rechargeable,            |
| 41:24      | et cetera.                                                                                         |
| 41:25      | Um, because that it honestly does make a huge difference when you're there going, okay,            |
| 41:29      | so I need to a, find out which devices have low batteries and then B, I need to have batteries     |
| 41:33      | to replace them because there's nothing worse than going to replace something with like a          |
| 41:37      | standard CR2032 battery only to find out that it's, uh, I don't know, a CR2450 or something       |
| 41:44      | like that.                                                                                         |
| 41:45      | Um, and it's not using the kind of battery that you thought it was.                                |
| 41:48      | So I've been going through, uh, working on, uh, a, actually replacing all the batteries.           |
| 41:53      | Um, and it's amazing how long you can go on like very low levels of battery, uh, but               |
| 41:59      | the, the area where I don't skimp on the battery changes, David, I've got to say smart locks.      |
| 42:03      | Um, yeah, uh, as soon as that sends me like the first warning that it's getting low, I,            |
| 42:08      | I go and I replace those immediately.                                                              |
| 42:10      | I don't want to get locked out, um, of my own home thanks to my smart locks.                       |
| 42:14      | Um, but, uh, yeah, everything else I try and push as far as I can.                                 |
| 42:18      | Um, and I've been switching to, uh, rechargeable batteries, um, in some cases, unfortunately       |
| 42:23      | a lot of smart home devices really don't like rechargeable, uh, batteries for some reason          |
| 42:27      | is very frustrating.                                                                               |
| 42:28      | Um, but many of them do, um, or many of them will tolerate it now.                                 |
| 42:32      | I've, I've been finding, if you, if you get the right ones, um, but yeah, fine, having             |
| 42:36      | a system that can tell me, Hey, this device's battery is running low.                              |
| 42:41      | It's an X is so useful, um, because yeah, then when I go to replace the battery, I can             |
| 42:48      | make sure that I actually have the right battery on hand.                                          |
| 42:50      | So, you know, when I, when I climb up the step ladder to get that motion sensor that               |
| 42:54      | passed me, felt sticking up near the ceiling was a good idea.                                      |
| 42:57      | It is.                                                                                             |
| 42:58      | It gives me a great view of like my entire hallway, but from one motion sensor.                    |
| 43:02      | Yeah.                                                                                              |
| 43:03      | But when I go up the step ladder, it's nice to have the right battery with me so I can             |
| 43:06      | just replace it straight away.                                                                     |
| 43:08      | Yeah.                                                                                              |
| 43:09      | A couple of notes on that is, um, another one you definitely want to not miss out on               |
| 43:14      | the smoke alarm batteries, uh, because, you know, the thing where it starts, you know,             |
| 43:18      | beeping in the middle of the night, um, I just have a, uh, six month repeat task in            |
| 43:23      | [[OmniFocus]] to, and I just change them all in one afternoon.                                         |
| 43:27      | And, uh, I know that I could probably get longer out of them than six months, but I                |
| 43:32      | am done with getting up at three AM and wandering around the house, you know, because the chirp    |
| 43:37      | is very high pitch and not that directional.                                                       |
| 43:40      | And you don't even know which one it is.                                                           |
| 43:42      | You're just walking around the house, awake with a ladder, which is never really good.             |
| 43:48      | The other thing I wanted to show you, Rose, I'm, I'm sending you a message right now.              |
| 43:53      | This is just somewhat related to the topic, but I have gridfinity 3D printed all of my             |
| 43:59      | battery storage and including all the coin cell batteries.                                         |
| 44:04      | And I found models that have the names of the numbers on the side.                                 |
| 44:09      | And I feel like such, man, I feel like such a boss now, like when a battery starts going           |
| 44:14      | on any of these coin things, I just go over, pick the box that has the right one in it,            |
| 44:18      | pull it out, pop a new one in, and I'm good to go.                                                 |
| 44:22      | That is really good.                                                                               |
| 44:23      | Yeah.                                                                                              |
| 44:24      | And I'm glad to see that the way that you're storing the batteries as well, there's separation     |
| 44:27      | between them because it does bug me when I see somebody, they've just got like a bag               |
| 44:32      | of batteries.                                                                                      |
| 44:34      | And all the batteries are just kind of in their higgledy-piggledy because depending                |
| 44:38      | on the way that they connect up, they can actually discharge themselves.                           |
| 44:42      | And so you can go to use what was a brand new battery and you just kind of like throw              |
| 44:45      | it in this bag because, you know, there was one left in the pack, just throw it in a bag,          |
| 44:51      | right?                                                                                             |
| 44:52      | And make sure you're storing your batteries properly, folks, is the reason why they store          |
| 44:55      | them all up the same way when they come in boxes or the coin cell ones.                            |
| 44:59      | I know it's really frustrating that they're all in kind of like blistery packs with cardboard      |
| 45:02      | on the back and it feels like it's very inefficient, but it does mean that those actually won't    |
| 45:07      | discharge themselves.                                                                              |
| 45:09      | So yeah, that's worth it.                                                                          |
| 45:11      | What I do, David, is not as fancy as your [[Gridfinity]].                                              |
| 45:14      | I may have to [[Gridfinity]] up my approach in the not too distant future.                             |
| 45:20      | I have the plastic zip bags that you can get, like the ones with the sort of mesh woven            |
| 45:28      | into them.                                                                                         |
| 45:29      | I use these for storing all of my cables, but in particular for coin cell batteries,               |
| 45:33      | I have, you know, sort of like pencil case or A5 size ones of those with large labels              |
| 45:38      | on.                                                                                                |
| 45:39      | And I just put like the blister packs in there so that I've got, you know, I've got a big          |
| 45:43      | bag which says batteries on it.                                                                    |
| 45:45      | And so I can grab that and I know that's all the batteries.                                        |
| 45:47      | Great.                                                                                             |
| 45:48      | So with that aside of it, I can go right CR2032 and I'm not trying to like scan on the packageing   |
| 45:52      | and find out where this one says in the top right and this one says it kind of in the              |
| 45:56      | top left.                                                                                          |
| 45:57      | And then this one says in a shade of blue that is basically invisible on the other shade           |
| 46:01      | of blue that is the background or whatever it is, you know, I can just know, okay, I've            |
| 46:06      | got these and when a bag's empty, I also know to rebuy them, which is quite important so           |
| 46:10      | that I don't actually run out because it's nothing worse than going to replace a battery           |
| 46:13      | and finding that you don't have any of that kind to replace it with.                               |
| 46:17      | All right, I've got a little automation I'm working on.                                            |
| 46:21      | This was inspired by a labs member, member Ward.                                                   |
| 46:24      | We do these meet ups and MacSparky Labs and people share nerdy tips with each other.               |
| 46:28      | And the topic of the [[Apple Watch#Apple Watch Ultra\|Apple Watch Ultra]] came up and Ward was doing a thing where he presses         |
| 46:33      | the action button and it records his voice.                                                        |
| 46:36      | Then eventually he gets that into whisper transcription and gets transcripts of voice              |
| 46:42      | recordings that he makes while just by hitting the action button on his ultra watch.               |
| 46:49      | You could also do this with a complication.                                                        |
| 46:51      | You don't have to have an ultra watch, but I thought that was a good idea.                         |
| 46:53      | And I've been thinking a lot about transcription or recording my voice as opposed to dictating     |
| 46:59      | the voice where you see the words appear at the same time.                                         |
| 47:02      | I do think there's something to the idea of just speaking without seeing it, the computer          |
| 47:06      | try to transcribe you that kind of frees you up to think more about what you're saying.            |
| 47:11      | And I just think that's kind of a natural next step as the AI transcription has dramatically       |
| 47:17      | improved over the last year.                                                                       |
| 47:19      | So I thought, well, let me see if I can put something like that together myself.                   |
| 47:22      | And I'm using a couple of apps and I'm very happy with this automation I've been using             |
| 47:27      | in a few weeks.                                                                                    |
| 47:28      | I just put out a video to the labs member showing them how to do this.                             |
| 47:32      | But it's using an app called [[Whisper Memos]] and [[Whisper]] is just [[Whisper Memos]] is another            |
| 47:36      | one of those apps that record your voice, then uses AI to transcribe it.                           |
| 47:42      | But they do a good job of it.                                                                      |
| 47:44      | And there's several like the developer, I feel like kind of like takes the extra step.             |
| 47:49      | He has it add paragraph breaks, a lot of the [[Whisper]] transcription paragraphs don't work.          |
| 47:54      | They just do like individual sentences as separate paragraphs.                                     |
| 47:57      | And he makes it into paragraphs.                                                                   |
| 48:00      | He has the ability to have a privacy mode where it deletes the recording after it does             |
| 48:04      | the transcription, and he has the ability to send it to any email.                                 |
| 48:08      | And that's what really got me because at the same time that this app was kind of showing           |
| 48:14      | up on my radar, [[Drafts]] added a mail drop feature.                                                  |
| 48:18      | And now in [[Drafts]], you can have a magic email address and you send an email to it and it           |
| 48:23      | shows up in your inbox and [[Drafts]] as text.                                                         |
| 48:26      | So combine those things, right?                                                                    |
| 48:29      | You record it and then you hit stop record, and then it does its thing to transcribe the           |
| 48:35      | recording and then it emails it to your magic [[Drafts]] email.                                        |
| 48:39      | And then it's just in your [[Drafts]] inbox.                                                           |
| 48:42      | So I've got a way now to push one button, talk, and then the transcription done very               |
| 48:48      | reliably via AI shows up in my inbox.                                                              |
| 48:52      | Then you take the next step, [[Whisper Memos]] has shortcut support.                                   |
| 48:56      | And it's not a lot because there's not a whole lot you can do.                                     |
| 48:59      | The app does one thing, but you install the app on your [[Apple Watch]] and either via a complication  |
| 49:06      | or the action button, you trigger this feature where it starts a new recording.                    |
| 49:12      | And with the [[Apple Watch#Apple Watch Ultra\|Apple Watch Ultra]], all I have to do now is press the orange button and start          |
| 49:18      | talking.                                                                                           |
| 49:19      | And then when I hit stop, everything is just handled.                                              |
| 49:21      | And I'm putting so much text in that way.                                                          |
| 49:23      | It's awesome.                                                                                      |
| 49:24      | One of the things that I've always loved about [[Drafts]] is the fact that even when iOS               |
| 49:29      | dictation didn't have that longer time, which it does now, dictation on iOS has improved           |
| 49:36      | a lot, is that [[Drafts]] had that sort of endless one where you could just write, dictate for         |
| 49:44      | a really long period of time, which was really clever and I really like that.                      |
| 49:48      | But one of the things that I have got into the habit of with voice notes in particular             |
| 49:53      | is using just press record because I am particular at work, we have a lot of special words, which  |
| 49:59      | could be misunderstood as another thing or it gets auto corrected to that or whatever.             |
| 50:04      | So what I've been doing a lot is using just press record if I need to remind myself of             |
| 50:09      | something for work purposes, because then I've got the audio transcription as or I've              |
| 50:14      | got the audio and the transcription.                                                               |
| 50:16      | It's not an either or I've got both.                                                               |
| 50:19      | And that is really useful and it also allows you to import an audio file because yeah,             |
| 50:25      | you can just import an audio file that you recorded elsewhere.                                     |
| 50:27      | So if you recorded something in voice memos, then you can import it to [[Just Press Record]]           |
| 50:31      | and it'll do the transcription magic for you.                                                      |
| 50:34      | And then you can share it off out to other things, which for me often is [[Drafts]] for a              |
| 50:40      | lot of this stuff.                                                                                 |
| 50:41      | But yeah, there's so much that you can do with the action button and oh, I have a little           |
| 50:46      | action button hack for you, David, if you'd like, because it's something that I have been          |
| 50:50      | automating recently.                                                                               |
| 50:53      | Changing the shortcut assigned to an action button is frustrating, very frustrating.               |
| 51:01      | If you want to experiment with a different shortcut on your action button, it feels like           |
| 51:06      | it takes a long time to go through and I found that it crashes sometimes or at least it did.       |
| 51:12      | The latest beta seems to have fixed it a little bit, changing the shortcut was quite problematic   |
| 51:17      | before and now it's less problematic, but it's still not super fun.                                |
| 51:21      | So what I did is I created a shortcut called iPhone action button and all it contains is           |
| 51:28      | a run shortcut action, which chooses which of the action button shortcuts that I'm currently       |
| 51:33      | using I would like to run.                                                                         |
| 51:35      | Now this may be more of a problem for me because in particular I have iOS today where we have      |
| 51:40      | a "Shortcuts Corner" segment every week and folks write in with [[Shortcuts]] questions and              |
| 51:44      | I try and answer them and solve them live on air as part of the show with a little video           |
| 51:50      | and then they get a shortcut link as well.                                                         |
| 51:52      | And so there's questions about the action button quite often, so I need to change what             |
| 51:56      | action is being run from the shortcut button.                                                      |
| 51:58      | But yeah, if you want to experiment and have two versions of your action button shortcut           |
| 52:08      | and you just want to like switch to the new version and see if it works without having             |
| 52:12      | to go through the whole rigmarole, then you may want to consider like a parent iPhone          |
| 52:16      | action button shortcut, which, you know, chooses which of the other ones to run and just runs      |
| 52:22      | that because I find using the run shortcut action is much easier to choose which shortcut          |
| 52:26      | to run using that than it is through the action button settings in settings.                       |
| 52:30      | Yeah, I do it somewhat similar.                                                                    |
| 52:33      | Mine is contextual based on the focus mode.                                                        |
| 52:36      | So the action button, it's a different action button depending on which focus mode and I           |
| 52:41      | just created, you know, what's the most likely action?                                             |
| 52:46      | Like if I'm at Disneyland, it's the camera.                                                        |
| 52:48      | If I'm working, it's a choose from menu with a couple of different things.                         |
| 52:53      | And so there's a lot of ways.                                                                      |
| 52:54      | But I'm talking about the action button on the watch for this automation and it's quite            |
| 52:58      | useful.                                                                                            |
| 52:59      | It's not it's not hard to create.                                                                  |
| 53:01      | And I am just continuously I'm just continually impressed with the state of voice to text          |
| 53:09      | dictation arriving as the AI models are getting smarter and smarter doing it.                      |
| 53:15      | It feels like we've turned a corner.                                                               |
| 53:16      | Yeah, yeah, I think we really have.                                                                |
| 53:19      | So yeah, we'll just have to see see what happens with all these things.                            |
| 53:24      | But it's it's definitely one of those things where we're going to find out how much how            |
| 53:29      | useful AI actually is for various different job roles and so on in the not too distant             |
| 53:36      | future and how much it can help people.                                                            |
| 53:38      | I know, you know, auto correct and things like that and suggestions while typing have              |
| 53:42      | been around for a really long time.                                                                |
| 53:45      | And it's you know, it's really good to to see that sort of thing that as it is, it's               |
| 53:51      | also, you know, really good to just continue with all the other things that we've been             |
| 53:58      | working, working with and, you know, see, see what happens for all of that fun.                    |
| 54:04      | OK, so that's going to do it for today.                                                            |
| 54:06      | We are the Automators.                                                                             |
| 54:08      | You can find us at relay.fm/automators.                                                      |
| 54:11      | You can go to our forum at talk.automators.fm.                                                     |
| 54:15      | Thank you to our sponsor today, our friends at LinkedIn Talent Solutions.                          |
| 54:19      | Stick around for automators max.                                                                   |
| 54:21      | We're going to be talking about my new search engine.                                              |
| 54:24      | And otherwise, we'll see you next time.                                                            |
| 54:26      | Goodbye, folks.                                                                                    |
