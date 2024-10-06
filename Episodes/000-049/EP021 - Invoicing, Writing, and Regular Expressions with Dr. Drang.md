---
status: "incomplete"
fc-date:
  year: 2019
  month: 04
  day: 12
fc-category: "podcast"
podcast: "Automators"
published: 2019-04-12
duration: 5146
formattedduration: "01:25:46"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Dr Drang"]
notetype: "episode"
showpage: "http://relay.fm/automators/21"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/21_-_Dr_Drang.mp3"
episode: 21
title: "21: Invoicing, Writing, and Regular Expressions with Dr. Drang"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode of Automators Rosemary and David interview the mysterious internet legend Dr. Drang. As well as talking about Python, Perl, and AppleScript, they also dive into regular expressions, Shortcuts, Drafts, Keyboard Maestro, and how you can combine all of these in various different workflows!

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Dr Drang]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 021 Discussion](https://talk.automators.fm/t/automators-21-invoicing-writing-and-regular-expressions-with-dr-drang/4523)

# Sponsors
- [[Luna Display (Sponsor)|Luna Display]] - The only hardware solution that turns your iPad into a wireless display for your Mac.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Try the new release with the visual editor.

# Show Notes
- [And now it's all this (Dr. Drang's blog)](https://leancrew.com/all-this/)
- [Mac Power Users #95: Engineering Workflows with Dr. Drang - Relay FM](https://www.relay.fm/mpu/95)
- [Mac Power Users #372: Workflows with Dr. Drang - Relay FM](https://www.relay.fm/mpu/372)
- [HyperCard - Wikipedia](https://en.m.wikipedia.org/wiki/HyperCard)
- [HyperTalk - Wikipedia](https://en.m.wikipedia.org/wiki/HyperTalk)
- [Regular expression - Wikipedia](https://en.wikipedia.org/wiki/Regular_expression)
- [Regex 101: Online Regular Expression Tester](https://regex101.com/)
- [‎Pretty Regular Expressions - iOS App](https://itunes.apple.com/gb/app/pretty-regular-expressions/id1205878178?mt=8)
- [Airtable](https://airtable.com/invite/r/XxNzmsB9)
- [SQLite - Wikipedia](https://en.m.wikipedia.org/wiki/SQLite)
- [Keyboard Maestro 8.2.4: Work Faster with Macros for macOS](http://www.keyboardmaestro.com/main/)
- [Updating my invoicing email automation - All this](https://leancrew.com/all-this/2017/02/updating-my-invoicing-email-automation/)
- [Drafts for Mac: The MacStories Review - MacStories](https://www.macstories.net/reviews/drafts-5-mac/)
- [‎Drafts: Capture ‣‣ Act on the App Store](https://itunes.apple.com/gb/app/drafts-capture-act/id1236254471?mt=8)
- [‎Textastic Code Editor 7 on the App Store](https://itunes.apple.com/gb/app/textastic-code-editor-7/id1049254261?mt=8)
- [Markdown Reference Link | Drafts Action Directory](https://actions.getdrafts.com/a/1L4)
- [Number Lines | Drafts Action Directory](https://actions.getdrafts.com/a/1IC)
- [Textastic - Text, Code, and Markup Editor with Syntax Highlighting - FTP, SFTP, SSH, Dropbox, Google Drive - for iPad](https://www.textasticapp.com/)
- [TaskPaper | Drafts Action Directory](https://actions.getdrafts.com/g/1Hp) - Drang's TaskPaper Action Group for Drafts
- [‎FE File Explorer: File Manager on the App Store](https://itunes.apple.com/gb/app/fe-file-explorer-file-manager/id510282524?mt=8)
- [‎FileBrowser - Document Manager on the App Store](https://itunes.apple.com/gb/app/filebrowser-document-manager/id364738545?mt=8)
- [Panic Blog » The Future of Transmit iOS](https://panic.com/blog/the-future-of-transmit-ios/)
- [Matthew Cassinelli - Siri Shortcuts, technology, and tips](https://www.matthewcassinelli.com/)
- [Federico Viticci - MacStories](https://www.macstories.net/author/viticci/)
- [Drafts for Mac: The MacStories Review - MacStories](https://www.macstories.net/reviews/drafts-5-mac/)
- [Drafts for Mac - Overview Video](https://vimeo.com/325033716)
- [Automators Orange County meet up Tickets](https://www.eventbrite.com/e/automators-orange-county-meetup-tickets-59398172533?aff=utm_source%3Deb_email%26utm_medium%3Demail%26utm_campaign%3Dnew_event_email&utm_term=eventurl_text)
- [Automators WWDC meet up Tickets, Tue, Jun 4, 2019](https://www.eventbrite.com/e/automators-wwdc-meetup-tickets-59398376142?aff=utm_source%3Deb_email%26utm_medium%3Demail%26utm_campaign%3Dnew_event_email&utm_term=eventurl_text)
- [This episode's accompanying blog post](https://rosemaryorchard.com/blog/automators-21-dr-drang) - Don't forget, we put a blog post together for each episode to give you even more details!

# Transcription

| Time Index | Transcription                                                      |
| :--------- | :----------------------------------------------------------------- |
| 00:00      | Hello, and welcome to The Automators.                              |
| 00:03      | I'm David Sparks and joined by my co-host, Rosemary Orchard.       |
| 00:06      | Hello, Rosemary.                                                   |
| 00:07      | Hello, David. How are you today?                                   |
| 00:09      | I am doing great and we've got a guest today                       |
| 00:12      | that we've had some listeners asking us about.                     |
| 00:15      | I'm so happy to have him on the show.                              |
| 00:17      | Welcome to the show, Dr. Drang.                                    |
| 00:19      | Hello. Good to be here.                                            |
| 00:21      | Dr. Drang belongs to all of us.                                    |
| 00:24      | He is a fictional character on the Internet who writes             |
| 00:28      | really cool things about automation quite frequently.              |
| 00:32      | We've had him on the Mac Power users a couple of times,            |
| 00:35      | so we've got your origin story there,                              |
| 00:37      | but I want to talk about it there a little bit.                    |
| 00:39      | But before we do, I just have to tell you, Dr.,                    |
| 00:41      | that I had a vivid dream this morning.                             |
| 00:46      | You know how when you're waking up,                                |
| 00:49      | and those are the dreams I always remember.                        |
| 00:53      | I let the alarm go and I turned it off and I slept                 |
| 00:56      | like another 30 minutes, and in that 30 minutes,                   |
| 00:58      | I had a dream where on the show today,                             |
| 01:00      | I said your actual name.                                           |
| 01:02      | And because it was a dream, we didn't edit that out,               |
| 01:06      | and the entire Internet hated me for outing you.                   |
| 01:11      | I think a lot of the Internet already knows who I am,              |
| 01:15      | which is fine with me, but, you know.                              |
| 01:20      | I'm keeping it up because there's a history behind it now.         |
| 01:24      | Yeah, I think it's great, I think it's great.                      |
| 01:26      | And so folks who don't know Dr. Dreng,                             |
| 01:28      | he is a gentleman, a scientist, and a scholar,                     |
| 01:32      | and also a nerd who likes to program his Macs                      |
| 01:36      | and various iOS devices, and then he writes about it.              |
| 01:40      | And so many of us enjoy your posts                                 |
| 01:43      | because you may do a post about the reason                         |
| 01:46      | why a bolt failed on your lawn mower                               |
| 01:49      | or some really cool bit of Mac automation.                         |
| 01:51      | You just never know what you're gonna get                          |
| 01:54      | when you head over to leancrew.com.                                |
| 01:56      | So we all recommend you go check it out.                           |
| 02:00      | Well, thank you.                                                   |
| 02:01      | Yeah, I'm not really good at branding                              |
| 02:03      | or staying in my lane, as it were.                                 |
| 02:06      | Well, I think your lane is very much                               |
| 02:08      | the things that interest you.                                      |
| 02:09      | And somehow, I mean, I know nothing                                |
| 02:12      | about mechanics and engineering or any of these things,            |
| 02:15      | but whatever you write about,                                      |
| 02:16      | you always managed to write it in a way                            |
| 02:17      | that it's really interesting for me.                               |
| 02:19      | So I very much appreciate that.                                    |
| 02:22      | Well, thank you.                                                   |
| 02:23      | That's good.                                                       |
| 02:24      | That's nice to hear.                                               |
| 02:25      | I don't know if we've ever talked on a podcast before,             |
| 02:27      | but I also like the way you title your blog,                       |
| 02:29      | and now it's all this, you know,                                   |
| 02:31      | that famous John Lennon radio interview.                           |
| 02:34      | I don't know if everybody knows what that comes from.              |
| 02:36      | I guess we'll let you all go find that on your own.                |
| 02:39      | And that's okay with me, honestly.                                 |
| 02:43      | One of the things I don't do is,                                   |
| 02:46      | I do explain the scripts probably to excess,                       |
| 02:49      | but I leave a lot of things unsaid,                                |
| 02:53      | and unlinked too, because discovery is fun.                        |
| 02:56      | Yeah, exactly.                                                     |
| 02:57      | I would just like to make a note here in the podcast               |
| 03:00      | that when I type in,                                               |
| 03:00      | and now it's all this on doc.doc.go,                               |
| 03:03      | leancrew.com comes up first.                                       |
| 03:05      | So you are definitely doing great marketing there.                 |
| 03:09      | Well, then I've got that brand.                                    |
| 03:10      | Okay, I'm better than I thought.                                   |
| 03:12      | Wow, you're ahead of John Lennon.                                  |
| 03:13      | Yeah, I have to type in John Lennon at the end                     |
| 03:15      | to get the recording, so.                                          |
| 03:19      | Yeah, there is, though, a problem here,                            |
| 03:21      | because, okay, so my fictional name is one thing.                  |
| 03:24      | The name of my blog, or the URL of the blog,                       |
| 03:27      | is another thing,                                                  |
| 03:28      | and the name of the blog is a completely different thing.          |
| 03:30      | That's really not,                                                 |
| 03:31      | that's not the way you're supposed to do things.                   |
| 03:32      | No, man, you got it all wrong.                                     |
| 03:34      | I mean, Madison Avenue would be very upset with you.               |
| 03:38      | Yeah, well, lucky me.                                              |
| 03:40      | But we all love you,                                               |
| 03:41      | because you bring some great automation stuff.                     |
| 03:43      | We got some specific automations                                   |
| 03:45      | we're gonna share with you in today's show,                        |
| 03:47      | and I feel like this is right in the wheelhouse                    |
| 03:50      | of this show, I love talking to people                             |
| 03:52      | about how they've solved a unique,                                 |
| 03:54      | or not so unique, problem with automation,                         |
| 03:56      | what they were thinking, and how they pulled it off,               |
| 03:58      | and hopefully we can inspire a few of the listeners                |
| 04:01      | to take off.                                                       |
| 04:03      | The ones we're gonna cover today,                                  |
| 04:04      | we're not gonna get there just yet,                                |
| 04:05      | but we're gonna talk about the way you're automating               |
| 04:08      | your invoicing and some of the cool stuff                          |
| 04:10      | you're doing on iOS with [[Drafts]].                                   |
| 04:12      | But before we do that, I just wanna,                               |
| 04:14      | we've talked to you on Mac Power users,                            |
| 04:16      | like I said, I'm gonna link those shows in this show as well.      |
| 04:19      | But just tell me a little bit about                                |
| 04:22      | how you got started with computers,                                |
| 04:24      | because you and I are of an age                                    |
| 04:26      | where we got to kind of see all this come together.                |
| 04:29      | Yeah, well, I started the way I think most people,                 |
| 04:33      | my age got started, which is I didn't have                         |
| 04:36      | a personal computer until I was in my 20s,                         |
| 04:41      | and because they weren't really around much.                       |
| 04:44      | There were some around when I was in my teens,                     |
| 04:46      | but what was the point of that?                                    |
| 04:50      | So my first work with computers was                                |
| 04:54      | when I was a freshman in college,                                  |
| 04:55      | and I took the introductory programming course                     |
| 04:57      | that all engineers took, which was Fortran.                        |
| 05:00      | And this is far enough back that I had to learn                    |
| 05:05      | how to use a key punch machine,                                    |
| 05:06      | because all of our programs were submitted with punch cards,       |
| 05:11      | and this was all done on the mainframe, of course.                 |
| 05:15      | And so you would write your program out on paper,                  |
| 05:21      | in fact, because Fortran was very picky                            |
| 05:23      | about the columns you started in and things like that.             |
| 05:28      | There was special paper that we had.                               |
| 05:30      | It was very wide paper,                                            |
| 05:32      | and you would fill in a character per grid.                        |
| 05:34      | There was a grid system,                                           |
| 05:35      | and so you write your program out on that.                         |
| 05:39      | Eventually, actually pretty quickly,                               |
| 05:41      | you'd get tired of doing it that way,                              |
| 05:43      | but that's how you started.                                        |
| 05:44      | And then you'd go to the key punch machine,                        |
| 05:46      | and you'd wait around in the key punch area                        |
| 05:48      | until somebody, one was open,                                      |
| 05:49      | and you'd go in there and you'd grab it,                           |
| 05:51      | and you'd type things out, and you'd get a stack of cards,         |
| 05:53      | and then you'd take the cards over to a little desk                |
| 05:56      | and deliver it, and then you'd wait around                         |
| 05:58      | to get a print out, which typically showed                         |
| 06:01      | that your program failed somewhere,                                |
| 06:02      | and you'd have to try to figure out why it failed,                 |
| 06:04      | and then you'd go back and do this,                                |
| 06:06      | change a card here or there, and do it again,                      |
| 06:10      | and do it again, and do it again,                                  |
| 06:11      | until eventually your program ran.                                 |
| 06:13      | This was not a very efficient process.                             |
| 06:16      | As you're saying that, I'm thinking about the other day            |
| 06:18      | I was talking to a nerd friend,                                    |
| 06:19      | and I just went on this rant about tags in iOS                     |
| 06:23      | and how it's so much scrolling,                                    |
| 06:24      | and poor me, special snowflake,                                    |
| 06:28      | I don't wanna scroll so much to get to my tags,                    |
| 06:30      | and I was thinking, oh yeah, when we started this,                 |
| 06:33      | we were using punch cards.                                         |
| 06:35      | Well, it's still a valid complaint to complain                     |
| 06:39      | about how much we have to scroll                                   |
| 06:40      | to either find our shortcuts, or find tags,                        |
| 06:43      | or find anything, you know, no, it's still awful.                  |
| 06:47      | It's all, computers have always been awful,                        |
| 06:48      | and they will always remain awful.                                 |
| 06:50      | Often user hostile, often.                                         |
| 06:53      | Yes, yes.                                                          |
| 06:54      | So did you have any automation                                     |
| 06:56      | that would help you if you dropped all of your punch cards?        |
| 06:58      | Because I know people do that,                                     |
| 07:00      | you would drop all of your punch cards,                            |
| 07:01      | and then they'd all be out of order.                               |
| 07:03      | Did you have any system to help you get around that?               |
| 07:06      | No, that's when you just quit                                      |
| 07:07      | and went to art school, right?                                     |
| 07:09      | That's right, no.                                                  |
| 07:11      | I don't know of any way to fix that.                               |
| 07:13      | The real, the key thing was, I mean, all of my cards,              |
| 07:19      | I could reorder, because the programs                              |
| 07:22      | weren't really that long.                                          |
| 07:24      | But there were the special job control language,                   |
| 07:29      | the JCL cards that had to go in front                              |
| 07:32      | that were magical, and which,                                      |
| 07:35      | because we were learning Fortran, the teachers,                    |
| 07:38      | we didn't, I never learned JCL.                                    |
| 07:40      | These were just magic cards                                        |
| 07:42      | that I stuck in the front all the time.                            |
| 07:44      | And I never knew what order they were supposed to be in.           |
| 07:47      | I just kept them in the order that they were,                      |
| 07:49      | and God forbid, luckily, they never got out of order.              |
| 07:56      | So I don't know.                                                   |
| 07:57      | There obviously were terrible stories                              |
| 07:59      | about people who dropped their cards,                              |
| 08:02      | who had real substantial programs,                                 |
| 08:04      | and that's a nightmare.                                            |
| 08:06      | I mean, you might as well just start over again.                   |
| 08:09      | It was terrible.                                                   |
| 08:09      | So this is the story of how David ended up                         |
| 08:11      | in law school versus in programmer school, right?                  |
| 08:13      | Yeah, I guess.                                                     |
| 08:16      | I don't know.                                                      |
| 08:17      | I mean, my problem, my whole life has been,                        |
| 08:19      | I don't have enough discipline to do one thing,                    |
| 08:21      | and let's just leave it at that.                                   |
| 08:23      | That's a good thing.                                               |
| 08:25      | But you eventually, you worked through                             |
| 08:27      | the usual suspects, Pascal, Basic, you know,                       |
| 08:31      | that was the start for me,                                         |
| 08:33      | Basic writing at 10 speed to Radio Shack                           |
| 08:35      | and programming their computers.                                   |
| 08:37      | That's how I got started.                                          |
| 08:39      | And I used Basic first, not the way most people did.               |
| 08:43      | I didn't use it.                                                   |
| 08:44      | I didn't program personal computers in Basic.                      |
| 08:47      | I actually program mainframes in Basic                             |
| 08:50      | because a particular class that I was taking                       |
| 08:53      | wanted us to do finite difference solutions                        |
| 08:57      | to differential equations.                                         |
| 08:59      | And Basic had, the Basic that was on a mainframe                   |
| 09:04      | had a matrix inversion command that was great                      |
| 09:11      | if you were into numerical analysis.                               |
| 09:13      | It was just one command.                                           |
| 09:14      | I think it was INV.                                                |
| 09:16      | And so that's why we did our programming                           |
| 09:20      | in that class in Basic.                                            |
| 09:22      | I had already learned Pascal, the Pascal class,                    |
| 09:24      | which I took as a senior, was probably the class,                  |
| 09:28      | that was the class where I learned structured programming.         |
| 09:30      | That was the paradigm at the time.                                 |
| 09:32      | This is the very late 70s, early 80s.                              |
| 09:36      | And that was really where I learned                                |
| 09:37      | how to break up a program into different,                          |
| 09:43      | what were called procedures and functions in Pascal.               |
| 09:47      | And be a little bit better about naming variables                  |
| 09:51      | and things like that.                                              |
| 09:52      | So I would say that's where I really learned programming,          |
| 09:55      | was in that Pascal class, not in the Fortran class.                |
| 09:58      | And how did you get started with automation?                       |
| 10:01      | These classes were all very directed                               |
| 10:05      | toward answering engineering problems,                             |
| 10:08      | not answering office work type problems.                           |
| 10:12      | So I started automation probably in the mid to late 80s            |
| 10:18      | after I had a job.                                                 |
| 10:20      | And it was with HyperCard.                                         |
| 10:23      | When HyperCard came out, I went all in on HyperCard                |
| 10:28      | and HyperTalk, the language behind HyperCard.                      |
| 10:33      | And I believe I even made some HyperTalk external commands         |
| 10:37      | that I programmed either in Pascal                                 |
| 10:39      | or possibly even assembly language to do a couple of things.       |
| 10:43      | That was kind of hazy with time on that.                           |
| 10:46      | But so there in the mid to late 80s,                               |
| 10:52      | I don't remember exactly when HyperCard came out,                  |
| 10:54      | but I had all my contacts in HyperCard.                            |
| 10:59      | I had my calendar in HyperCard.                                    |
| 11:04      | My Mac would start up in HyperCard,                                |
| 11:07      | not in the Finder.                                                 |
| 11:09      | Back in those days, you could do,                                  |
| 11:10      | there was no multi Finder back in those days.                      |
| 11:15      | You know, it was one process at a time,                            |
| 11:17      | sort of like the way when the iPad came out.                       |
| 11:20      | So I launched applications from within HyperCard.                  |
| 11:25      | It was, as I said, I went all in on it.                            |
| 11:29      | And I used it for several years that way.                          |
| 11:32      | I dialed my phone from HyperCard,                                  |
| 11:36      | from my contacts database that was inside it.                      |
| 11:39      | It was a wonderful program.                                        |
| 11:41      | It was a wonderful programming environment.                        |
| 11:45      | One that I, lots of people who are of our age                      |
| 11:49      | and who cut their teeth on HyperCard, miss it greatly.             |
| 11:53      | It was a spectacular programming environment.                      |
| 11:56      | You know, when you say HyperCard, I just smile.                    |
| 11:59      | I mean, I don't know anybody that you started with HyperCard       |
| 12:02      | that doesn't love that application.                                |
| 12:06      | Yeah, nobody hated HyperCard.                                      |
| 12:08      | It was great.                                                      |
| 12:10      | I mean, it was, and it just like opened the world to me.           |
| 12:12      | I mean, in terms of things you could do with a Macintosh.          |
| 12:16      | Years ago, well, not, I mean, a few years ago,                     |
| 12:19      | back when Mac World was a thing,                                   |
| 12:21      | one year, Bill Atkinson was there.                                 |
| 12:22      | And, you know, and everybody was like swooning over him.           |
| 12:27      | And to me, you know, the biggest contribution he ever made         |
| 12:30      | was HyperCard.                                                     |
| 12:31      | He's the guy behind HyperCard, as well as Mac Paint.               |
| 12:34      | And I think he did Mac Right too.                                  |
| 12:36      | I mean.                                                            |
| 12:37      | He didn't do Mac Right, but he did do,                             |
| 12:40      | he did all of the graphics                                         |
| 12:42      | of what was called the Macintosh Toolbox.                          |
| 12:44      | So everything that was in the ROM of the Mac                       |
| 12:47      | in those early days, that was all him.                             |
| 12:50      | Yeah.                                                              |
| 12:50      | I mean, he's the one that when they brought on                     |
| 12:52      | the productivity expert at [[Apple]],                                  |
| 12:55      | who wanted the programmers to turn in                              |
| 12:56      | the number of lines of code they wrote every week.                 |
| 12:59      | Yeah, he wrote, and you know, he turned in a report                |
| 13:02      | that he wrote negative like 10,000 lines of code                   |
| 13:05      | because he solved a problem                                        |
| 13:06      | and was able to delete a bunch of code.                            |
| 13:09      | Yes.                                                               |
| 13:10      | And I think the story was they stopped asking after that           |
| 13:13      | because he made his point.                                         |
| 13:14      | Yeah.                                                              |
| 13:15      | No, he was an astounding programmer                                |
| 13:17      | and a guy who wasn't trained as a programmer.                      |
| 13:19      | Cause back in those days, you know,                                |
| 13:22      | programmers did not necessarily come out with CS degrees.          |
| 13:24      | Just as an aside story, he's a wonderfully very nice guy.          |
| 13:30      | He's a photographer now.                                           |
| 13:32      | And he had an app for a while in the app store.                    |
| 13:35      | And the year I met him was the year                                |
| 13:37      | they had announced the iPad,                                       |
| 13:38      | but at Mac World it wasn't out yet.                                |
| 13:41      | And I said, well, I said,                                          |
| 13:43      | I bet you're looking forward to getting your hands on one.         |
| 13:45      | And he says, oh no, I already played with Steve's.                 |
| 13:47      | That's what he said to me.                                         |
| 13:49      | Hmm.                                                               |
| 13:51      | That's showing off.                                                |
| 13:53      | I like that.                                                       |
| 13:54      | You know what, I kind of felt like it was,                         |
| 13:55      | but I kind of pulled it out of him.                                |
| 13:57      | He didn't like go there immediately.                               |
| 13:58      | So I'm going to give that one to him.                              |
| 14:01      | Anyway, the HyperCard was amazing.                                 |
| 14:03      | In fact, I always feel like, you know,                             |
| 14:05      | and you may disagree with me later.                                |
| 14:06      | I feel like Siri Shortcuts is kind of a modern version             |
| 14:10      | of HyperCard in a lot of ways.                                     |
| 14:12      | Yeah, well, you and I have, we'll get into this.                   |
| 14:16      | Yeah, it's a good one.                                             |
| 14:18      | I'm shortcuts as you are,                                          |
| 14:20      | which may be getting me banned from this podcast later on,         |
| 14:24      | but we'll see how it is.                                           |
| 14:25      | We're never banning this.                                          |
| 14:26      | No, man, let's just be clear.                                      |
| 14:28      | Yeah, yeah.                                                        |
| 14:29      | And so then there was sort of like a fallow period                 |
| 14:32      | where I wasn't doing a lot of automation.                          |
| 14:35      | And then when I abandoned the Mac for Linux                        |
| 14:39      | in the late 90s, then automation really came back                  |
| 14:44      | because everything you do in a [[Unix]] environment                    |
| 14:47      | is scripting to some extent or another,                            |
| 14:50      | and you really don't use [[Unix]] properly                             |
| 14:52      | unless you're doing some kind of scripting.                        |
| 14:54      | And that's when I started doing,                                   |
| 14:56      | I learned a little bit of bash.                                    |
| 14:58      | I can't script in bash.                                            |
| 14:59      | It doesn't, my brain doesn't work that way.                        |
| 15:04      | It's index is just awful, but I learned Perl.                      |
| 15:08      | And people think Perl syntax is terrible.                          |
| 15:11      | No, Perl syntax is actually not bad at all.                        |
| 15:14      | You just have to work with it.                                     |
| 15:18      | I used Perl for several years,                                     |
| 15:19      | and then of course then I went into Python,                        |
| 15:21      | which is what I program in today,                                  |
| 15:24      | and do most of my automation in if I can.                          |
| 15:28      | I've been encountering Perl at work, let's say.                    |
| 15:30      | I've not written anything in Perl,                                 |
| 15:32      | but there are a lot of scripts written in Perl running around.     |
| 15:34      | And I have to say, as somebody who's, you know,                    |
| 15:37      | my first programming experience as programming language            |
| 15:40      | was Java, not [[JavaScript]] Java.                                     |
| 15:43      | And as somebody who started with that, looking at Perl,            |
| 15:46      | it's actually, you know,                                           |
| 15:48      | I don't know why it's got this bad reputation,                     |
| 15:51      | but I quite like it.                                               |
| 15:52      | It's very readable.                                                |
| 15:53      | The problem comes in because a lot of, I think,                    |
| 15:57      | because a lot of Perl uses regular expressions.                    |
| 16:00      | It's one of the great features of Perl,                            |
| 16:02      | there are regular expressions.                                     |
| 16:04      | And regular expressions can just look awful.                       |
| 16:06      | I mean, they're very, they're terse.                               |
| 16:09      | They're great for programming in because they are terse,           |
| 16:11      | because they are so very expressive                                |
| 16:14      | in a short number of characters,                                   |
| 16:17      | but that also makes it hard to read.                               |
| 16:18      | That's why Perl has gotten the reputation of line noise.           |
| 16:22      | But that's just regular expressions, that's not Perl,              |
| 16:24      | because regular expressions look horrible                          |
| 16:25      | in every language.                                                 |
| 16:28      | Or at least you can't.                                             |
| 16:29      | Is there Perl without regular expressions though, really?          |
| 16:33      | I don't know.                                                      |
| 16:33      | Maybe.                                                             |
| 16:34      | I'm not sure I ever,                                               |
| 16:35      | I'm not sure I ever wrote a program in Perl                        |
| 16:37      | that didn't have regular expressions in it.                        |
| 16:40      | And, you know, we talk often on this show                          |
| 16:42      | about for folks who don't make their living programming,           |
| 16:45      | where, but you want to get better at automation,                   |
| 16:48      | what are some things you can do to get better?                     |
| 16:50      | And I've never really got on this horse publicly before,           |
| 16:54      | but I do think as much as people make fun                          |
| 16:57      | of regular expressions, they're not that hard to learn             |
| 17:01      | and they can come in super handy                                   |
| 17:03      | if you like to automate things.                                    |
| 17:05      | They're fantastic.                                                 |
| 17:07      | And the key is you learn them a little bit at a time.              |
| 17:11      | You don't try to absorb the whole thing at once.                   |
| 17:16      | You don't start going into negative look ahead                     |
| 17:19      | right from day one.                                                |
| 17:20      | You learn about, you know, what are the special characters         |
| 17:25      | and what does the star mean and what does the dot mean             |
| 17:27      | and what does a plus mean?                                         |
| 17:29      | And then you slowly get up and closing things                      |
| 17:33      | in square brackets and character classes.                          |
| 17:38      | That's how you do it.                                              |
| 17:39      | As you learn almost anything,                                      |
| 17:41      | you try to start with the simplest stuff                           |
| 17:44      | and then you move on and you slowly build things up.               |
| 17:48      | And there was a sort of a back and forth kind of thread            |
| 17:54      | with [[Jason Snell]] wrote a post                                      |
| 17:57      | and I wrote kind of a response post to it                          |
| 18:00      | about regular expressions.                                         |
| 18:01      | And Gruber may have gotten involved in it as well.                 |
| 18:04      | I mean, they are just wonderful things                             |
| 18:08      | that increase your power tremendously.                             |
| 18:11      | They give you leverage.                                            |
| 18:12      | I skipped over it.                                                 |
| 18:14      | If you're listening, you have no idea what I'm talking about       |
| 18:16      | when I say regular expressions.                                    |
| 18:18      | It's basically a search language.                                  |
| 18:20      | You know, you do find in your word processor,                      |
| 18:24      | you say find a word that has this in it                            |
| 18:26      | with regular expressions,                                          |
| 18:28      | you can make that much, much smarter.                              |
| 18:32      | I guess, is that a good way to summarise?                          |
| 18:33      | How would you summarise it?                                        |
| 18:34      | Yeah, it's generalising the idea of finding.                       |
| 18:37      | And so instead of finding a particular, you know,                  |
| 18:40      | C-A-T everywhere in your file,                                     |
| 18:45      | you can look at C, then a vowel and then T                         |
| 18:51      | or C-A-T possibly with an S after it,                              |
| 18:56      | but possibly not with an S after it.                               |
| 18:58      | And you can look for C-A-T case sensitive                          |
| 19:02      | or not case sensitive always.                                      |
| 19:04      | Most search tools will do that                                     |
| 19:07      | even without regular expressions.                                  |
| 19:09      | It's expanding the idea of what search and replace does.           |
| 19:14      | I often use it when I'm using,                                     |
| 19:16      | searching for things that have sequential members in it            |
| 19:18      | because there's placeholders in it                                 |
| 19:20      | that say any three numbers, it doesn't matter which ones,          |
| 19:23      | you know, and then you can find the files                          |
| 19:26      | that may have some, you know,                                      |
| 19:27      | some declaration at the beginning                                  |
| 19:29      | and then three numbers afterwards.                                 |
| 19:31      | You find any three, you know, it's just,                           |
| 19:33      | and like Dr. Drang was saying,                                     |
| 19:35      | if you're ever doing searches and you realise,                     |
| 19:37      | hey, this is a lot harder or the tools I have                      |
| 19:40      | aren't strong enough to find what I need,                          |
| 19:43      | that's a great opportunity to go into regular expressions.         |
| 19:46      | And there are online resources to help you learn those.            |
| 19:50      | And once you have that tool in your belt,                          |
| 19:51      | you find all sorts of uses for it in automation.                   |
| 19:55      | Definitely.                                                        |
| 19:56      | There are online regular expression,                               |
| 19:59      | apart from learning how to use them,                               |
| 20:01      | there are also online regular expression testers.                  |
| 20:06      | So you can give it some text,                                      |
| 20:08      | try out your regular expression                                    |
| 20:10      | before you destroy your text,                                      |
| 20:12      | and see experiment with, you know,                                 |
| 20:16      | well, what does this regular expression find?                      |
| 20:18      | What does this one find?                                           |
| 20:20      | And so on.                                                         |
| 20:20      | I think there's even, and I haven't looked into this,              |
| 20:23      | so I'm kind of talking sideways here,                              |
| 20:26      | but I believe there's even apps in the app store                   |
| 20:28      | that will teach you regular expressions,                           |
| 20:30      | you know, kind of walk you through.                                |
| 20:32      | So there are.                                                      |
| 20:32      | Well, that was a little bit of a side thing there,                 |
| 20:34      | but we've never come, the subject's never come up,                 |
| 20:37      | but I think it's something                                         |
| 20:38      | that automators should definitely put on their list.               |
| 20:41      | Yeah, well, discursive talk is my middle name.                     |
| 20:43      | Yes.                                                               |
| 20:46      | Well, I want to talk about some of the automation                  |
| 20:48      | you're doing right now,                                            |
| 20:50      | but first, let's hear from our first sponsor.                      |
| 20:54      | This episode of Automators is brought to you                       |
| 20:56      | by our awesome friends at Luna Display,                            |
| 20:59      | the only hardware solution that turns your iPad                    |
| 21:02      | into a wireless display for your Mac.                              |
| 21:04      | Use promo code AUTOMATORS at checkout for 10% off.                 |
| 21:09      | Luna Display is a little piece of hardware                         |
| 21:11      | that plugs into your Mac.                                          |
| 21:13      | Once you set it up, you can use your iPad                          |
| 21:15      | as a second display that's super portable                          |
| 21:18      | with basically zero lag and a gorgeous image quality.              |
| 21:23      | Setting up extra screens can be fiddly,                            |
| 21:25      | but Luna Display couldn't be easier.                               |
| 21:27      | Just plug in the piece of hardware in your Mac                     |
| 21:29      | and you're good to go.                                             |
| 21:30      | Plus everything works over WiFi.                                   |
| 21:33      | But you're a busy person,                                          |
| 21:34      | so you might be traveling without a WiFi connection.               |
| 21:37      | No worries, just connect with USB.                                 |
| 21:40      | It's super simple to get set up                                    |
| 21:41      | and you'll love that extra screen real estate.                     |
| 21:44      | I usually have my big iPad Pro sitting right next                  |
| 21:48      | to my iMac.                                                        |
| 21:49      | With the Luna Display now,                                         |
| 21:50      | I just have to tap one button to make that display                 |
| 21:53      | into a secondary monitor.                                          |
| 21:56      | It's great when you need some off-screen reference.                |
| 21:58      | For instance, right now as I record this podcast,                  |
| 22:01      | I've got Luna Display showing all my recording tools.              |
| 22:04      | That way I can look at my big screen                               |
| 22:06      | and focus on the content for you, dear listener,                   |
| 22:09      | but at the same time be a professional podcaster                   |
| 22:12      | and make sure that I actually did press the record button.         |
| 22:15      | Luna Display is a complete extension to your Mac.                  |
| 22:18      | It supports external keyboards,                                    |
| 22:20      | as well as [[Apple Pencil]] and touch interactions.                    |
| 22:23      | It basically turns your Mac into a touch screen device             |
| 22:26      | and the all new liquid video engine                                |
| 22:28      | brings significantly reduced latency                               |
| 22:30      | and faster screen refresh rates.                                   |
| 22:33      | Listeners of Automators can get                                    |
| 22:35      | an exclusive 10% off Luna Display.                                 |
| 22:38      | Just go to lunadisplay.com                                         |
| 22:40      | and enter promo code Automators at checkout.                       |
| 22:43      | That's A-U-T-O-M-A-T-O-R-S                                         |
| 22:46      | at checkout at lunadisplay.com to get your 10% off.                |
| 22:50      | So go there now, upgrade your setup.                               |
| 22:52      | You're going to love lunadisplay.com                               |
| 22:55      | and use promo code Automators to get 10% off.                      |
| 22:58      | Our thanks to Luna Display for their support of this show          |
| 23:01      | and all of Relay FM.                                               |
| 23:05      | Dr. Dreing, you recently did a post                                |
| 23:07      | about the various iterations of your automation                    |
| 23:11      | and your invoicing system.                                         |
| 23:13      | And I thought it was kind of fascinating                           |
| 23:16      | the way it's evolved over the years.                               |
| 23:17      | And I was wondering if you could share some of that with us.       |
| 23:20      | Yeah, this is, in one way or another,                              |
| 23:23      | I have been invoicing,                                             |
| 23:25      | automating my invoicing and sort of project tracking system.       |
| 23:33      | System might be a too strong a word for over 20 years.             |
| 23:38      | And things have changed over those 20 years.                       |
| 23:42      | And so there are a few parts to it.                                |
| 23:46      | And this is a system that has obviously evolved.                   |
| 23:51      | It didn't just spring out of my head                               |
| 23:54      | like Athena from the head of Zeus.                                 |
| 23:56      | It fully formed.                                                   |
| 23:58      | No, it's something that you build up over time.                    |
| 24:00      | And that's the way a lot of automation systems work                |
| 24:03      | is that you get an idea about,                                     |
| 24:06      | first you've done something repetitively                           |
| 24:08      | and you think, well,                                               |
| 24:09      | I don't want to do this repetitively anymore.                      |
| 24:11      | I want to automate it.                                             |
| 24:13      | And then you start automating certain things.                      |
| 24:14      | And usually you start off by kind of mimicking                     |
| 24:17      | the way you do it by hand.                                         |
| 24:18      | That's usually not a great way.                                    |
| 24:20      | It's a good way to start,                                          |
| 24:21      | but it's usually not the best way to automate it.                  |
| 24:23      | And then you learn, oh no, I can do it a different way.            |
| 24:25      | And then you find another thing.                                   |
| 24:27      | Well, I have to prep certain things                                |
| 24:30      | to get that automation to run right.                               |
| 24:32      | Maybe I can automate the prep work too.                            |
| 24:33      | And things expand.                                                 |
| 24:35      | And then, so my invoicing system,                                  |
| 24:40      | as I say, started back when I was using Linux.                     |
| 24:45      | And this was back when we had paper invoices                       |
| 24:48      | coming out of my company's invoicing system,                       |
| 24:53      | our accounting system.                                             |
| 24:54      | And I would make a paper cover letter to go with it                |
| 24:58      | and stick it in an envelope and put a stamp on it                  |
| 25:02      | and so forth and send it off.                                      |
| 25:04      | So I automated the cover letter to,                                |
| 25:08      | it was very much like,                                             |
| 25:10      | this was not much more than a TextExpander kind of thing,         |
| 25:12      | except because I was in Linux and it was 1997,                     |
| 25:16      | I wasn't, there was no TextExpander.                              |
| 25:20      | I wrote a Perl script that would make a billing letter for me.     |
| 25:25      | And when I came back to the Mac,                                   |
| 25:27      | I started changing things around and things,                       |
| 25:30      | we shifted to, I shifted to email, emailing my invoices            |
| 25:35      | that were PDFs to the client.                                      |
| 25:38      | And so my system in a nutshell is this.                            |
| 25:45      | First, there is the new project script.                            |
| 25:48      | So when I write up and when I get a new project                    |
| 25:52      | from a client, this is something that runs                         |
| 25:54      | still entirely on the Mac.                                         |
| 25:56      | I haven't expanded it to be able to work on iOS yet,               |
| 26:00      | but I enter the information, it basically prompts me,              |
| 26:05      | who's the client, what's the project name,                         |
| 26:07      | that sort of thing.                                                |
| 26:09      | And it makes a database entry for me                               |
| 26:12      | in a database that I have locally on my machine.                   |
| 26:16      | Well, I'm also using, what's it called, [[Airtable]].                  |
| 26:21      | I have both [[Airtable]] and an SQLite database.                       |
| 26:27      | I'm actually doing things in parallel.                             |
| 26:30      | Rose, have you noticed how often [[Airtable]] comes up lately?         |
| 26:33      | Something tells me we're gonna need an episode on this, right?     |
| 26:35      | Everybody's using [[Airtable]], yeah, anyway.                          |
| 26:38      | Yeah, I'm kind of, on this, I'm still keeping it there.            |
| 26:43      | I'm starting to use it a little bit less                           |
| 26:45      | for this particular one,                                           |
| 26:46      | but yeah, [[Airtable]] is a lovely thing.                              |
| 26:48      | And so it does that, it makes two database entries                 |
| 26:52      | and two different databases because I'm redundant.                 |
| 26:55      | It makes a mail folder in mail                                     |
| 26:58      | because I have to organise my email                                |
| 27:01      | by the jobs that I am working on.                                  |
| 27:04      | And then it makes a subdirectory                                   |
| 27:07      | with the name of the project.                                      |
| 27:09      | And then within that, it makes some other folders                  |
| 27:13      | for photographs that I might take on the project,                  |
| 27:16      | invoices and other things.                                         |
| 27:20      | So that's one thing.                                               |
| 27:23      | Then when an invoice comes out,                                    |
| 27:24      | I have the invoice as a PDF and I run another script               |
| 27:28      | and that does a few things.                                        |
| 27:29      | First, it attaches any expense reports                             |
| 27:32      | associated with that invoice to it.                                |
| 27:35      | It attaches a W9 from my company to it.                            |
| 27:39      | Then it creates an email cover letter.                             |
| 27:42      | It attaches the invoice,                                           |
| 27:47      | which now has the expense report and the W9 appended to it.        |
| 27:51      | It attaches that to the cover letter                               |
| 27:53      | and gives some sort of boilerplate language                        |
| 27:55      | about here is invoice number such and such,                        |
| 28:00      | it's for X number of dollars on this project, please pay.          |
| 28:05      | And then the script then adds a reminder to me.                    |
| 28:16      | In [[Apple Reminders\|Reminders]], I have an invoice list in [[Apple Reminders\|Reminders]]                  |
| 28:21      | and it adds one reminding me to follow up                          |
| 28:25      | on this invoice in roughly 45 days                                 |
| 28:31      | if it hasn't been paid.                                            |
| 28:32      | And that's actually, there's a bit of fun calendar                 |
| 28:38      | scripting in there, cause I like scripting calendar stuff.         |
| 28:41      | It actually follows up, it will remind me to follow up             |
| 28:45      | on the first Tuesday that happens,                                 |
| 28:47      | either 45 days or more afterward.                                  |
| 28:50      | And I chose Tuesday because it's weekday,                          |
| 28:52      | it's early in the week and it's almost never a holiday.            |
| 28:56      | And it's just that way, all my follow up happens                   |
| 28:58      | on the same day every week.                                        |
| 28:59      | And I don't have to think about following up within voices.        |
| 29:03      | And so when I get that reminder,                                   |
| 29:07      | I have to send out a new letter,                                   |
| 29:10      | an email to the client saying,                                     |
| 29:12      | hey, how come you haven't paid?                                    |
| 29:14      | And this is now also run by a script.                              |
| 29:18      | It's actually, fundamentally it's a Taskpaper,                    |
| 29:22      | I'm sorry, a [[Keyboard Maestro]] action                               |
| 29:27      | that runs every Tuesday morning,                                   |
| 29:29      | looks through my reminders,                                        |
| 29:31      | figures out which ones are due today,                              |
| 29:34      | creates an email for each one of them,                             |
| 29:38      | a follow up email saying,                                          |
| 29:40      | hey, you haven't paid, this invoice is now X days old,             |
| 29:44      | and attaches the invoice to that one,                              |
| 29:47      | and then saves it as a draft, as a draft email.                    |
| 29:51      | And then later on in the day, when I get the reminder saying,      |
| 29:54      | hey, you know, follow up on these,                                 |
| 29:57      | I open those up, maybe tweak the language a little bit,            |
| 30:00      | depending on how angry I am at the client,                         |
| 30:03      | versus paying up.                                                  |
| 30:04      | Sure, you've got the one that says,                                |
| 30:06      | hey, maybe this fell through the cracks,                           |
| 30:08      | and the other one says, pay me.                                    |
| 30:10      | Yeah, that's right.                                                |
| 30:11      | When can I expect payment on this?                                 |
| 30:15      | And then I send them out during the day.                           |
| 30:17      | So it's not fully automated,                                       |
| 30:20      | I do not want emails going to my clients                           |
| 30:23      | without me looking them over before they go out,                   |
| 30:26      | but it's, I think, automated now to a point                        |
| 30:30      | that makes sense.                                                  |
| 30:31      | And again, this has developed over                                 |
| 30:37      | years and years and years of me figuring out,                      |
| 30:40      | oh, I want to be able to do this,                                  |
| 30:42      | oh, my system only does this,                                      |
| 30:43      | I'd like to add a little bit more,                                 |
| 30:45      | I'd like to, things changed,                                       |
| 30:47      | going from paper to PDFs.                                          |
| 30:50      | So, and this last change was having it run automatically           |
| 30:58      | to create the emails and save them as [[Drafts]],                      |
| 31:00      | because I started realising I'm not always                         |
| 31:04      | in the office on Tuesday,                                          |
| 31:05      | and I still want to send the email off,                            |
| 31:08      | I want to be able to do it from my iPad,                           |
| 31:11      | or my phone, for that matter.                                      |
| 31:13      | And if there are [[Drafts]], they're already there.                    |
| 31:14      | No, I can do that because it's exactly,                            |
| 31:16      | they're already there.                                             |
| 31:18      | Have you considered adding a priority to the reminder?             |
| 31:21      | So if there's a priority set,                                      |
| 31:22      | then it needs to use the Angry Drang template,                     |
| 31:25      | otherwise it knows that it's using the normal template.            |
| 31:28      | You know, it's so hard to figure out                               |
| 31:30      | when I should be angry or not,                                     |
| 31:33      | and honestly, at some point, my default becomes anger.             |
| 31:36      | Ah, so it's better to start with the less angry template.          |
| 31:41      | Exactly, it's so much easier to send the one out                   |
| 31:44      | that is gentle.                                                    |
| 31:46      | That's the one I normally send out.                                |
| 31:49      | But everyone's, no, I start,                                       |
| 31:51      | is it worth me going in there                                      |
| 31:53      | and fiddling with the language on this one?                        |
| 31:54      | Oh, yeah, yes it is, this is egregious.                            |
| 31:59      | You know, especially when I look at,                               |
| 32:00      | and I see, oh, it's 180 days now that it's that old,               |
| 32:05      | and the language starts getting more strict.                       |
| 32:08      | Yeah, that's when I start putting the number of days in,           |
| 32:11      | is when you know I'm starting to get rid of you.                   |
| 32:16      | It has helped, actually.                                           |
| 32:18      | I find, since doing this,                                          |
| 32:21      | and having a system for following up in particular,                |
| 32:24      | I've always had a system for generating the original invoice,      |
| 32:28      | but my system for following up                                     |
| 32:30      | was a bit more haphazard in the past.                              |
| 32:32      | And over the last few years,                                       |
| 32:34      | when I have this sort of automatic reminder saying,                |
| 32:37      | you know, you need to follow up with these people,                 |
| 32:42      | I have been doing it more,                                         |
| 32:44      | and I have been getting paid more close to on time                 |
| 32:50      | than in the past.                                                  |
| 32:51      | By the way, those reminders all have what's it called,             |
| 32:55      | where it'll do it again in two weeks,                              |
| 33:01      | or every three, a repeat thing                                     |
| 33:03      | that does it every two or three weeks,                             |
| 33:06      | depending on what.                                                 |
| 33:08      | And that also is something, unfortunately,                         |
| 33:10      | that's something I cannot automate.                                |
| 33:11      | The addition of a repetitive feature to a reminder                 |
| 33:17      | is something that [[AppleScript]] does not allow you to do.            |
| 33:19      | So that has to be done by hand                                     |
| 33:21      | in the middle of creating the reminder.                            |
| 33:23      | So the automation kind of makes the reminder,                      |
| 33:27      | leaves reminders up on my screen                                   |
| 33:30      | to essentially prompt me to go ahead                               |
| 33:33      | and add that repeat feature to it.                                 |
| 33:37      | And you've been generous with this.                                |
| 33:39      | You've posted a blog post                                          |
| 33:41      | where you've listed all of these scripts,                          |
| 33:42      | and you're running it through a Python script,                     |
| 33:45      | but the [[AppleScript]] language is embedded in that script.           |
| 33:48      | So anybody that wants to just do this with [[AppleScript]]             |
| 33:51      | could do it.                                                       |
| 33:52      | You could.                                                         |
| 33:54      | I don't recommend it to doing things                               |
| 33:56      | because there's a certain amount of text processing,               |
| 34:01      | and there's a certain amount of calendar processing                |
| 34:06      | that I think Python is just flatly better at than [[AppleScript]].     |
| 34:10      | But yes, I write [[AppleScript]] inside my Python,                     |
| 34:14      | and I have a self-made, very simple library                        |
| 34:24      | called, I think it's called [[AppleScript]],                           |
| 34:26      | and it has only a couple of commands in it                         |
| 34:31      | that one of them I think is quote, and one of them is run.         |
| 34:34      | And so usually I just create a string                              |
| 34:36      | that would be my [[AppleScript]].                                      |
| 34:38      | Within the Python program, I create a string                       |
| 34:40      | for the command that I would give in [[AppleScript]],                  |
| 34:42      | and then there's, you know,                                        |
| 34:43      | AppleScript.run that string, and it does it.                       |
| 34:47      | But the point is you can actually take pieces of this out          |
| 34:49      | if you're listening and you think,                                 |
| 34:50      | well, yeah, I'd like to do that little piece that he's doing.      |
| 34:54      | A lot of this scripting in here,                                   |
| 34:56      | you could completely separate.                                     |
| 34:59      | I'd like to talk about one piece of it that you did                |
| 35:01      | that kind of made my eyebrows jump,                                |
| 35:04      | is when you're doing your reminders,                               |
| 35:06      | you said it's looking at presumably your database                  |
| 35:10      | and looking, it's doing a date check to figure out                 |
| 35:12      | the ones that are unpaid and seven weeks old.                      |
| 35:15      | How are you figuring that out automatically?                       |
| 35:19      | It is not so much doing it that way.                               |
| 35:22      | It's actually looking in [[Apple Reminders\|Reminders]]                                 |
| 35:25      | and looking at the due date in [[Apple Reminders\|Reminders]].                          |
| 35:28      | So what my script does on Tuesday morning is say,                  |
| 35:32      | which reminders have come due today?                               |
| 35:34      | Okay.                                                              |
| 35:35      | And [[AppleScript]] allows you to do that.                             |
| 35:38      | The [[AppleScript]] library or dictionary for [[Apple Reminders\|Reminders]]                |
| 35:43      | has pieces like that, commands for doing that.                     |
| 35:46      | So what it does is it gives me a list then                         |
| 35:49      | of all of the invoices that are all of the [[Apple Reminders\|Reminders]]               |
| 35:55      | because it doesn't really know about invoices,                     |
| 35:57      | but it reads the text of all the [[Apple Reminders\|Reminders]].                        |
| 35:59      | Then it parses and figures out which ones are due that day.        |
| 36:04      | Then it parses the reminder itself.                                |
| 36:06      | And the reminder says it's invoice number X                        |
| 36:10      | for Y amount of money and so on on project number Y.               |
| 36:16      | And then it looks in the database to figure out                    |
| 36:18      | who the client is for project number Y                             |
| 36:20      | and what his or her email address is.                              |
| 36:23      | And so that's how it helps make the reminder email.                |
| 36:28      | Well, I think it's brilliant.                                      |
| 36:30      | And I love that you shared this whole thing.                       |
| 36:32      | I mean, he explains it all in the blog post                        |
| 36:35      | and then you can download the entire Python script.                |
| 36:37      | You could run the system yourself if you want.                     |
| 36:40      | I love, this is something you do often, Dr. Drang,                 |
| 36:44      | where there'll be some problem                                     |
| 36:46      | and you have basically Homebrewed your own solution to it.         |
| 36:50      | And I think it's probably your hobby, right?                       |
| 36:53      | I mean, you do a lot of this stuff.                                |
| 36:55      | And, but it's just,                                                |
| 36:56      | it's fascinating to see how you do this stuff.                     |
| 36:59      | And so often the thing you've built is better                      |
| 37:02      | than anything out there that, you know,                            |
| 37:04      | it's more customised to what you need.                             |
| 37:06      | I remember years ago, I used to read the ongoing                   |
| 37:11      | problems you were having as you built your own custom              |
| 37:13      | basically weather app                                              |
| 37:14      | because you wanted the exact weather where you're located.         |
| 37:19      | Yeah, that was- You're still doing that?                           |
| 37:22      | Well, I was up until, I was still using that                       |
| 37:25      | up until recently it was working.                                  |
| 37:27      | But what, I don't remember, was it Yahoo?                          |
| 37:31      | No, I think it was whatever third party weather API                |
| 37:40      | I was logging into, oh, it was Weather Underground.                |
| 37:45      | It was Weather Underground.                                        |
| 37:46      | Yeah, Weather Underground.                                         |
| 37:47      | And, well, they shut themselves down.                              |
| 37:50      | And so I kept checking my weather apps                             |
| 37:54      | and they kept working for a month or two                           |
| 37:57      | after Weather Underground said they were shutting                  |
| 38:00      | down their API.                                                    |
| 38:01      | So they didn't really shut their web, but it's dead now.           |
| 38:04      | Yeah.                                                              |
| 38:06      | When I opened those pages now,                                     |
| 38:08      | because they were basically just web pages                         |
| 38:10      | that were sort of made on the fly                                  |
| 38:13      | through like [[JavaScript]] or whatever.                               |
| 38:15      | And now they're dead now.                                          |
| 38:17      | So I'm, so I have to use more standard weather apps.               |
| 38:22      | And I haven't gone back to find another API to do that.            |
| 38:28      | It's something that I, maybe when I retire,                        |
| 38:30      | I will go back to doing that.                                      |
| 38:32      | retired people are a lot more interested in the weather,           |
| 38:35      | I think.                                                           |
| 38:35      | I think it depends on where you live.                              |
| 38:36      | If you live in California like David,                              |
| 38:38      | then basically you just need to check whether or not               |
| 38:40      | it's the right season for rain, right?                             |
| 38:43      | Yeah, honestly, all I need to know is that going to rain.          |
| 38:46      | And almost always the answer is no.                                |
| 38:50      | So it's really not a problem.                                      |
| 38:53      | Things are more interesting here in the Midwest.                   |
| 38:56      | And so it's nice to know what's going on                           |
| 38:59      | and what's going on this afternoon,                                |
| 39:01      | even though things look nice now.                                  |
| 39:03      | So you also do some automation on the iOS side.                    |
| 39:06      | And I know that you're a big user of the [[Drafts]] app,               |
| 39:10      | which, by the way, just released the Mac version of [[Drafts]].        |
| 39:14      | Yeah, which is very nice.                                          |
| 39:17      | And it has been, I think, to all of us,                            |
| 39:20      | because I think we all use [[Drafts]],                                 |
| 39:22      | has been a big help because I do a lot of writing in [[Drafts]].       |
| 39:26      | And then getting it over to my Mac                                 |
| 39:29      | was not a horrible problem.                                        |
| 39:32      | But typically the way I would do it                                |
| 39:33      | is I would write it out to a [[Dropbox]] file                          |
| 39:37      | so that I could then pick it up on my Mac.                         |
| 39:39      | Well, now it's much easier.                                        |
| 39:40      | You just open [[Drafts]].                                              |
| 39:41      | And I typically don't do betas                                     |
| 39:45      | because I'm a terrible beta tester.                                |
| 39:46      | I'm not good at giving feedback                                    |
| 39:49      | because I just get lost in the work that pays me.                  |
| 39:52      | And I forget to follow up with people.                             |
| 39:55      | But I did do the beta on that because it was wonderful.            |
| 40:00      | And Greg Pierce did a really good job on this.                     |
| 40:04      | So now I just walk over to my Mac and there it is.                 |
| 40:07      | And I can do whatever I want with the text from within [[Drafts]].     |
| 40:13      | But yeah, I do a lot of, I do a surprising amount                  |
| 40:18      | of automation within [[Drafts]].                                       |
| 40:19      | Now, I use [[Drafts]].                                                 |
| 40:22      | I like to have one text editor per platform.                       |
| 40:28      | I don't like using lots of different ones just because,            |
| 40:32      | and especially on iOS because the standards for keyboard shortcuts |
| 40:38      | when you have a keyboard hooked up, things like that,              |
| 40:41      | aren't as well-established on iOS as they are on Mac.              |
| 40:44      | It definitely varies between apps on iOS.                          |
| 40:47      | Oh, yeah.                                                          |
| 40:47      | Yeah, so I try not to have to remember any of that stuff.          |
| 40:52      | And so now it's not to say that I don't change,                    |
| 40:55      | but I like to work primarily with one at a time.                   |
| 40:58      | And the one that I'm using now more than any other                 |
| 41:01      | is [[Drafts]].                                                         |
| 41:02      | I do use Textastic a bit because it's                              |
| 41:05      | got a broader range of syntax highlighting for me.                 |
| 41:12      | [[Drafts]] is pretty well-limited in its syntax highlighting           |
| 41:14      | to Markdown and [[JavaScript]] and then the very Taskpaper            |
| 41:20      | and the simple list thing.                                         |
| 41:21      | But I write in late tech and I program in Python.                  |
| 41:27      | And so I like having Textastic sometimes.                          |
| 41:31      | But mostly I do still write in [[Drafts]].                             |
| 41:35      | And so I have, jeez, a variety of things                           |
| 41:40      | that have sort of crept in through [[Drafts]],                         |
| 41:43      | a variety of automations.                                          |
| 41:45      | So one set of them is I have been                                  |
| 41:51      | blogging through [[Drafts]] pretty much exclusively                    |
| 41:55      | for a couple of years now.                                         |
| 41:58      | And I have, over the time, built up                                |
| 42:01      | a lot of little actions that help me out.                          |
| 42:04      | And like all automations, they're                                  |
| 42:07      | things that I did by hand and then decided                         |
| 42:09      | I'm tired of doing this by hand.                                   |
| 42:11      | It's taking too long.                                              |
| 42:12      | Or it's not so much that it takes so long.                         |
| 42:14      | It takes you out of the flow of what you're doing.                 |
| 42:18      | Yes.                                                               |
| 42:19      | If I want to add a link, I don't want                              |
| 42:22      | to have to think about going over here, grabbing the URL,          |
| 42:25      | coming back, putting the markdown text in,                         |
| 42:29      | and then going down because I put all my links at the bottom.      |
| 42:33      | I use the markdown reference link style instead of inline.         |
| 42:37      | And so doing all of that, by the time I'm done with it,            |
| 42:41      | I have forgotten what I was writing about because I'm old          |
| 42:44      | and I forget things.                                               |
| 42:45      | So that's really, and of course I make mistakes in doing that.     |
| 42:50      | You get the syntax wrong a little bit sometimes.                   |
| 42:53      | So automation fixes the fact that you get taken out                |
| 42:59      | of the flow of your work.                                          |
| 43:00      | And it fixes the fact that you might make mistakes                 |
| 43:02      | because if you get the automation right, which                     |
| 43:05      | sometimes takes a little while, but once you get the automation    |
| 43:08      | right, it's right all the time from that point on.                 |
| 43:12      | And actually, that particular piece of automation                  |
| 43:14      | is not one that I wrote.                                           |
| 43:16      | It's one that I stole.                                             |
| 43:19      | It's in the actions directory.                                     |
| 43:21      | And it was written by, it's called Markdown Reference Link.        |
| 43:25      | And it was written by P Davison-Reiber.                           |
| 43:30      | And it's excellent.                                                |
| 43:33      | And it mimics, well, mimics.                                       |
| 43:35      | I'm sure he did this on his own, or she                            |
| 43:37      | did this on his own on her own, but it matches so perfectly        |
| 43:42      | an [[AppleScript]] that I wrote many years ago                        |
| 43:45      | for doing this in [[BBEdit]].                                         |
| 43:47      | It does exactly what I used to do in [[BBEdit]],                      |
| 43:51      | except it does it in [[Drafts]].                                       |
| 43:53      | So I was thinking about writing my own.                            |
| 43:55      | I was thinking about taking that [[AppleScript]]                      |
| 43:57      | and converting it into [[JavaScript]]                                  |
| 43:59      | so that it would work in [[Drafts]] and realised, oh,                  |
| 44:02      | I don't have to.                                                   |
| 44:03      | This is already done for me.                                       |
| 44:05      | So there's that one.                                               |
| 44:06      | There are, when I need to add an image link, very simple to do.    |
| 44:15      | And so I have a [[Drafts]] action for doing that.                      |
| 44:18      | If I want to add a YouTube video link,                             |
| 44:20      | I have a [[Drafts]] action for that that just makes me,                |
| 44:22      | I only have to press one button.                                   |
| 44:26      | I have one for adding footnotes.                                   |
| 44:30      | Again, press a button.                                             |
| 44:31      | It looks like an asterisk is what the button looks like.           |
| 44:35      | And then finally, because a lot of my blog posts                   |
| 44:42      | have scripts in them, I like to line number the scripts.           |
| 44:48      | And so I have an action that will add line numbers                 |
| 44:53      | to a selected portion of a draft and format things the way         |
| 44:58      | I like to have things formatted for that.                          |
| 45:01      | And finally, and this was perhaps the most difficult thing,        |
| 45:06      | is the part that it publishes now.                                 |
| 45:09      | So it goes to my server.                                           |
| 45:12      | I have a button that I press that goes to the server               |
| 45:16      | and runs the code that converts the markdown into HTML,            |
| 45:23      | puts it, incorporates it into the directory structure              |
| 45:27      | of my blog, and therefore publishes it.                            |
| 45:32      | And then finally, there's a button                                 |
| 45:35      | for tweeting a link to it.                                         |
| 45:38      | And again, that doesn't do it directly on the iPad.                |
| 45:42      | It goes off, I believe, it goes off to the server, right?          |
| 45:45      | Yeah, I think it goes off to the server, not to one of my Macs,    |
| 45:48      | and runs a particular script that accesses the Twitter API         |
| 45:54      | to add a link to that Twitter tweet with a link to that post.      |
| 46:04      | Just like you don't want to automate sending an email              |
| 46:06      | to a client, I am terrified of automating pressing the post        |
| 46:09      | button.                                                            |
| 46:12      | See, I find it's much easier to edit a blog post                   |
| 46:14      | after I've published it versus calling back an email that I've     |
| 46:18      | already hit send on.                                               |
| 46:19      | Yeah, yes, there is that, yes.                                     |
| 46:25      | Because I can always hop into my,                                  |
| 46:28      | I've just switched back to WordPress,                              |
| 46:29      | so everything's confusing, but I can always hop into WordPress     |
| 46:31      | and change the status back to draft                                |
| 46:33      | and hope that nobody's seen it and that the automatic              |
| 46:36      | tweet hasn't gone out yet.                                         |
| 46:38      | And then mess around if I realise that I have a massive            |
| 46:40      | typo or accidentally forgot a code block,                          |
| 46:43      | which happens every once in a while.                               |
| 46:45      | Yeah, so typically, I will go ahead and publish it,                |
| 46:49      | and then it's out there for the world,                             |
| 46:50      | and then I go look at it in [[Safari]], and I see,                     |
| 46:55      | oh, that's not good, and I go back and I tweak it,                 |
| 46:58      | and of course, I don't find everything,                            |
| 47:01      | but I tweak it to at least the mistakes that I find,               |
| 47:05      | and then republish it, because my published script                 |
| 47:07      | allows me to distinguish between things that are new               |
| 47:11      | and things that are reworked, edited,                              |
| 47:15      | and until, then after I've done that,                              |
| 47:20      | then I say, okay, fine, I'll tweet out the link,                   |
| 47:23      | because people, it's surprising to me,                             |
| 47:27      | because I really don't think Twitter is a great way                |
| 47:28      | of finding stuff.                                                  |
| 47:31      | I still prefer RSS, and I think I will always prefer RSS,          |
| 47:35      | but lots of people get their information through Twitter,          |
| 47:38      | and that's why I still tweet those out.                            |
| 47:41      | Yes, yeah, I have to say a lot of people do,                       |
| 47:45      | or they like to reply on Twitter,                                  |
| 47:47      | and so if you've already got the post out there,                   |
| 47:49      | then of course, it's an easy one spot                              |
| 47:51      | for everybody to talk back area.                                   |
| 47:53      | It is, and when I gave up comments,                                |
| 47:57      | when I stopped using comments on my site many years ago,           |
| 48:02      | I figured Twitter would take over,                                 |
| 48:03      | and it's worked out well.                                          |
| 48:06      | Yes.                                                               |
| 48:06      | Remember when that was a big deal                                  |
| 48:07      | about bloggers and comments?                                       |
| 48:09      | It just, I mean, there was so much ink spilled                     |
| 48:13      | on the internet over whether you put comments on your blog,        |
| 48:16      | and now just nobody does it.                                       |
| 48:18      | Well, there are certain blogs that are not                         |
| 48:22      | in our business, in our world,                                     |
| 48:25      | but political blogs live by comments                               |
| 48:29      | because they have a community and people argue                     |
| 48:30      | with one another and things like that,                             |
| 48:32      | and I think the blog comments are still just as bad                |
| 48:37      | as they are everywhere else, if not worse,                         |
| 48:39      | but that's how those kinds of bloggers build up a community        |
| 48:45      | is by letting their readers spew.                                  |
| 48:48      | Yeah, like I said, for most of us, though,                         |
| 48:52      | there's no more comments.                                          |
| 48:54      | I guess that's really the reason                                   |
| 48:55      | why these forums have come back as we wanted a place,              |
| 48:58      | but we didn't want to have to deal                                 |
| 49:00      | with all of the comment spamming                                   |
| 49:02      | we were getting on blogs a few years ago.                          |
| 49:04      | Which was terrible, yes,                                           |
| 49:07      | and was one of the reasons why I got rid of it.                    |
| 49:10      | I'm tired of policing the comments.                                |
| 49:15      | Going back into [[Drafts]], so you mentioned                           |
| 49:17      | that you tap on buttons.                                           |
| 49:18      | Do you use that with the keyboard row,                             |
| 49:20      | or do you use that with the action group popped out?               |
| 49:24      | It's the keyboard row, typically.                                  |
| 49:26      | So I have a blogging set                                           |
| 49:30      | that comes up, and so I choose that one,                           |
| 49:32      | so then across the keyboard row,                                   |
| 49:34      | and of course, I'm usually typing on a physical keyboard,          |
| 49:38      | so that keyboard row shows up all the way down at the bottom.      |
| 49:42      | It's still on the screen, but there it is.                         |
| 49:44      | And so, yeah, no, exactly.                                         |
| 49:46      | I popped that, and I'm usually working in split screen             |
| 49:50      | when I'm writing a blog post,                                      |
| 49:51      | because I have either transit open                                 |
| 49:56      | in the other half of split screen,                                 |
| 50:00      | where I'm going through the various images                         |
| 50:03      | that I'm gonna put in the post,                                    |
| 50:05      | or I have [[Safari]] open in the other one,                            |
| 50:07      | which is where the links are gonna be.                             |
| 50:10      | So you haven't yet really replaced transit?                        |
| 50:13      | I have been using File Explorer and File Browser,                  |
| 50:17      | and my script for adding image links                               |
| 50:24      | does allow me, it's tolerant                                       |
| 50:29      | of whether I'm getting that URL out of Transmit                    |
| 50:34      | or out of File Explorer,                                           |
| 50:36      | or maybe it's File Browser, actually, I think.                     |
| 50:40      | I am waiting.                                                      |
| 50:44      | Transmit is not gonna last forever,                                |
| 50:47      | but I'm happy that I have it, and I still use it.                  |
| 50:51      | I'm gonna use it until it stops working,                           |
| 50:54      | because I really like it, File Browser and File Explorer           |
| 51:00      | are both okay, they're both fine,                                  |
| 51:02      | but they just do not look like a panic app,                        |
| 51:05      | and they don't work like a panic app.                              |
| 51:08      | And honestly, the guys at Panic just understand                    |
| 51:15      | how I use an app.                                                  |
| 51:16      | I don't know whether they understand how other people do,          |
| 51:19      | but boy, Transmit just works so well for me.                       |
| 51:23      | And for those in the audience who aren't up on this,               |
| 51:25      | Panic is just an amazing development house out of Portland.        |
| 51:30      | They made this great app,                                          |
| 51:31      | this FTP app for iOS called Transmit,                              |
| 51:34      | they also make it for Mac,                                         |
| 51:36      | and they just stopped,                                             |
| 51:38      | they weren't making enough money on it,                            |
| 51:39      | and now all of us,                                                 |
| 51:41      | and there really isn't an equal replacement.                       |
| 51:44      | I wish kind of that they had just doubled the price                |
| 51:47      | just to see what would happen.                                     |
| 51:48      | Yeah, you know, but the,                                           |
| 51:52      | because I think that those of us that love it would have paid.     |
| 51:55      | Yeah, it's unfortunate.                                            |
| 51:57      | And you know, every time Panic tweets out something,               |
| 52:03      | oh, there's a new version of Transmit,                             |
| 52:04      | you know, my heart jumps,                                          |
| 52:06      | and okay, no, no, it's the one for the Mac,                        |
| 52:07      | which I love, I mean, I'm really happy.                            |
| 52:09      | I use Panic obviously on the Mac as well,                          |
| 52:11      | and it's a great program, and I love it.                           |
| 52:14      | But oh, I really wish they would go back to it.                    |
| 52:18      | I understand their reasons.                                        |
| 52:19      | Yeah, it's a shame though,                                         |
| 52:20      | because it had shortcuts integration,                              |
| 52:22      | which I used so much myself to get images uploaded,                |
| 52:26      | and I miss it.                                                     |
| 52:26      | It's, if they went with a subscription system,                     |
| 52:30      | and you know, obviously like many people,                          |
| 52:32      | I'm not thrilled with subscriptions,                               |
| 52:35      | but Transmit, I would subscribe to,                                |
| 52:37      | just as I have with [[Drafts]].                                        |
| 52:39      | Yeah, we all have our [[Drafts]].                                      |
| 52:41      | Yeah, exactly.                                                     |
| 52:43      | It's worth it.                                                     |
| 52:44      | And they kind of,                                                  |
| 52:46      | if I'm remembering right,                                          |
| 52:47      | I kind of decided to shut it down                                  |
| 52:50      | before subscriptions became a big thing,                           |
| 52:54      | which is too bad.                                                  |
| 52:56      | I would have liked them to try that,                               |
| 52:57      | you know, try one more thing                                       |
| 52:59      | before deciding to shut it down,                                   |
| 53:01      | but obviously they have a business to run.                         |
| 53:04      | Well, at least it's still running for you.                         |
| 53:06      | Which is an indication of how well it's written,                   |
| 53:08      | because [[Apple]] is changing things underneath,                       |
| 53:11      | but it's still running along because they didn't do,               |
| 53:14      | obviously they didn't do cheating things                           |
| 53:17      | in the development of that app.                                    |
| 53:19      | Or if they did, they were extremely clever about it.               |
| 53:21      | So I, you know, they were using,                                   |
| 53:23      | they apparently were using standard APIs                           |
| 53:25      | and those, you know, very solid parts                              |
| 53:30      | of the IO, the underlying iOS structure,                           |
| 53:33      | and that's why it's still working.                                 |
| 53:34      | Because gosh, how long has it been                                 |
| 53:35      | since they announced that they were done with it?                  |
| 53:38      | They stopped developing on it quite a while ago.                   |
| 53:40      | I just found the link to add it to the show notes,                 |
| 53:43      | and they announced that January 5th, 2018, so over a year ago.     |
| 53:47      | Oh, that's, gosh, it seems like it was longer ago than that.       |
| 53:50      | It does.                                                           |
| 53:51      | Maybe it's just because I've been,                                 |
| 53:52      | I've been feeling angst about it for such a long time.             |
| 53:56      | And dead man walking the software, yes.                            |
| 53:58      | Exactly.                                                           |
| 53:59      | But, you know, and then like,                                      |
| 54:00      | iOS 13's gonna come out                                            |
| 54:02      | and it's gonna have all these cool new features,                   |
| 54:03      | but it may have a cost for you, a dire cost.                       |
| 54:07      | It may be the end of it.                                           |
| 54:08      | It might.                                                          |
| 54:09      | Yes.                                                               |
| 54:10      | And I have substitutes ready to go.                                |
| 54:12      | I just, I just would rather not, if possible.                      |
| 54:16      | Well, if the good folks are panicking listening,                   |
| 54:18      | we will give you the money.                                        |
| 54:19      | Just give us transmit for iOS back.                                |
| 54:22      | Between the three of us, I'm sure we could,                        |
| 54:25      | we can convince them, right?                                       |
| 54:26      | Oh yeah, we're super wealthy.                                      |
| 54:28      | The three of us, we could fund it entirely, right?                 |
| 54:30      | Yeah, yeah.                                                        |
| 54:31      | And maybe Tim Cook can chip in for the rest.                       |
| 54:34      | That would be good.                                                |
| 54:35      | That would be good.                                                |
| 54:37      | Yeah, he should support iOS a little bit more.                     |
| 54:40      | Here's an idea, add like, in the about screen,                     |
| 54:46      | add some sort of Pong game,                                        |
| 54:48      | and then make it part of the new                                   |
| 54:51      | Apple Game Subscription service.                                   |
| 54:55      | Have [[Apple]] throw like millions of dollars at them                  |
| 54:57      | to get the app, you know, tuned up again.                          |
| 55:01      | And we'll all subscribe to the gaming service                      |
| 55:03      | and use transmit.                                                  |
| 55:04      | Well, it's just like.                                              |
| 55:05      | I think games certainly work for James.                            |
| 55:07      | Yes, I was just gonna say it's work for James Thompson.            |
| 55:09      | So yeah, yeah, exactly.                                            |
| 55:12      | All right, well, we have been broaching the subject                |
| 55:15      | of Siri shortcuts and some iOS stuff.                              |
| 55:17      | And I know you have feelings on that.                              |
| 55:19      | We're gonna talk about that right after this.                      |
| 55:22      | This episode of Automators is brought to you                       |
| 55:24      | by TextExpander from our friends at Smile.                       |
| 55:27      | TextExpander lets you quickly insert                             |
| 55:29      | longer chunks of text with a quick search                          |
| 55:31      | or an abbreviation.                                                |
| 55:33      | The brand new TextExpander 6.5 is now available for Mac OS       |
| 55:36      | and TextExpander 2.0 is available on Windows.                    |
| 55:40      | Both new versions of TextExpander                                |
| 55:42      | are sporting a new visual editor for snippets.                     |
| 55:45      | The new editor makes it easier to see and edit snippet fillings,   |
| 55:49      | dates, date math, nested snippets and more.                        |
| 55:53      | If you already love TextExpander                                 |
| 55:55      | and like to tell people about it,                                  |
| 55:56      | you can join their affiliate program                               |
| 55:58      | to learn a little extra.                                           |
| 56:00      | If like me, you're always looking for ways                         |
| 56:03      | to be a little more productive, you need TextExpander.           |
| 56:05      | It'll handle all of your repetitive typing tasks,                  |
| 56:08      | leaving more time for what you do best.                            |
| 56:10      | Today, I had one of those days,                                    |
| 56:12      | I couldn't type my own name.                                       |
| 56:15      | Every time I tried to send an email,                               |
| 56:16      | it would go out as some version of something                       |
| 56:18      | that wasn't quite my name.                                         |
| 56:20      | So I was called Rise, Rose Without the O,                          |
| 56:23      | Roz Without an E at the end, all sorts of things.                  |
| 56:27      | I realised, of course, what I need to do                           |
| 56:29      | is I need to change my email signature with TextExpander.        |
| 56:33      | So now whenever I type Lieberkurse                                 |
| 56:36      | or mit freundlichen Grüßen at the end of my messages,              |
| 56:39      | I start typing and TextExpander does the rest,                   |
| 56:42      | including my name.                                                 |
| 56:43      | No more oops, I spelt my own name wrong again.                     |
| 56:47      | Visit TextExpander.com/podcast                              |
| 56:49      | to learn more about TextExpander.                                |
| 56:51      | Our thanks to TextExpander from Smile                            |
| 56:53      | for their support of this show and Relay FM.                      |
| 56:58      | Okay, before we started recording,                                 |
| 57:01      | you started talking about iOS and automation                       |
| 57:04      | and I could tell that you had a head of steam going,               |
| 57:07      | so I stopped you.                                                  |
| 57:08      | I wanted to get it on mic.                                         |
| 57:10      | Yeah.                                                              |
| 57:11      | Tell me about Siri shortcuts.                                      |
| 57:12      | What is the aggravation for you?                                   |
| 57:15      | Well, okay.                                                        |
| 57:16      | So first, it is a marvelous program.                               |
| 57:20      | There's no question about it,                                      |
| 57:24      | but my problems with it go all the way back.                       |
| 57:27      | And some of these problems are my problems.                        |
| 57:28      | They're not the problems with shortcuts itself,                    |
| 57:30      | but some of them really are shortcuts problems.                    |
| 57:33      | So when it started and it was workflow                             |
| 57:36      | and I was reading blog posts and listening to podcasts             |
| 57:39      | and everybody who was just in love with this program               |
| 57:42      | and I started using it and I hated it.                             |
| 57:45      | I thought that workflow was one                                    |
| 57:49      | of the worst development environments I had ever been in,          |
| 57:54      | worse even than Automator,                                         |
| 57:56      | which I'm not a big fan of either.                                 |
| 57:58      | And I just kind of brushed it off.                                 |
| 58:02      | Now, the reason for this was my fault.                             |
| 58:07      | Not my fault, but this was because of my situation.                |
| 58:12      | At that time, I did not have an iPad.                              |
| 58:16      | I was still using a MacBook Air and my iPhone.                     |
| 58:20      | And so obviously on workflow, all I had was my iPhone.             |
| 58:23      | And I maintained to this day, developing a shortcut                |
| 58:28      | or a workflow on an iPhone is horrible,                            |
| 58:34      | a horrible experience because your workflow,                       |
| 58:38      | because it's not split.                                            |
| 58:40      | You don't have the split between the list of actions               |
| 58:43      | that you can choose from over on the left                          |
| 58:45      | and then your workflow or shortcut nowadays on the right           |
| 58:50      | where you've got your list of steps.                               |
| 58:52      | So you have to essentially, in order to choose a new task          |
| 59:00      | or a new step to add into your workflow,                           |
| 59:03      | you have to abandon seeing what your workflow is.                  |
| 59:07      | And I just think that's horrible.                                  |
| 59:10      | I don't like working that way.                                     |
| 59:13      | I like seeing what I'm working on                                  |
| 59:19      | while I'm picking the next step.                                   |
| 59:21      | And it's true, I should know what the next step                    |
| 59:24      | is going to be before I leave and I do,                            |
| 59:27      | but it still bothers me that I don't see the workflow              |
| 59:31      | that the program that I am working on                              |
| 59:34      | while I am shifting around and trying to find the next step.       |
| 59:39      | If I already know that there's a shortcut step available           |
| 59:43      | and I know what its name is,                                       |
| 59:45      | I can type in the little search field down at the bottom           |
| 59:49      | and get right to it.                                               |
| 59:50      | And so that doesn't take me out of my programming flow much.       |
| 59:57      | But there are a lot of times where I'm at a step                   |
| 59:59      | and I, well, you know, this has to do with,                        |
| 01:00:02   | I don't know, an image.                                            |
| 01:00:04   | Let me go find what I can do with an image.                        |
| 01:00:07   | And there's a certain amount of exploratory work                   |
| 01:00:09   | that you do when you're making a shortcut.                         |
| 01:00:13   | And as is the case when you're programming in any language,        |
| 01:00:17   | when you're using a library,                                       |
| 01:00:19   | you like to see, well, what does this library give me?             |
| 01:00:22   | You know, I've got, I'm working with an image.                     |
| 01:00:25   | Well, what does Python have in the Python Imageing Library          |
| 01:00:28   | that I can use?                                                    |
| 01:00:30   | Well, similarly in workflow, there are different shortcuts.        |
| 01:00:34   | There are different steps that you can do things with              |
| 01:00:38   | with images and sometimes I just like to go and explore.           |
| 01:00:41   | Well, when I'm going and exploring,                                |
| 01:00:43   | I can't, on an iPhone, I can't see the program                     |
| 01:00:47   | that I'm looking at.                                               |
| 01:00:48   | So then I got an iPad a couple of years ago                        |
| 01:00:53   | and I decided to try workflow again.                               |
| 01:00:56   | It was still workflow at the time.                                 |
| 01:00:58   | And I said, oh, this is why people like this                       |
| 01:01:01   | because now I have the split screen                                |
| 01:01:04   | and I can still see, I can see what I'm working on                 |
| 01:01:06   | while I'm off doing the exploration.                               |
| 01:01:08   | And so that got much better.                                       |
| 01:01:10   | And I wrote several little workflows in that time                  |
| 01:01:15   | before it switched over to shortcuts.                              |
| 01:01:17   | And, you know, I have to say still,                                |
| 01:01:21   | this visual way of writing programs                                |
| 01:01:27   | is not entirely to my liking.                                      |
| 01:01:29   | I'd still rather just type it out.                                 |
| 01:01:32   | I understand that other people and especially people               |
| 01:01:35   | who don't have 35 years of programming behind them                 |
| 01:01:40   | like to do it this other way.                                      |
| 01:01:42   | And it's a good introduction.                                      |
| 01:01:43   | I understand all that, but I can't help.                           |
| 01:01:45   | I am who I am.                                                     |
| 01:01:46   | And I really do prefer to just type these things out.              |
| 01:01:50   | You know, possibly with documentation on the screen                |
| 01:01:54   | next to it as I'm writing it out.                                  |
| 01:01:57   | Part of it is because I think I'm getting to sound                 |
| 01:02:01   | like John Siracusa on here,                                        |
| 01:02:02   | but part of it is these blocks of steps                            |
| 01:02:08   | take up a lot of space.                                            |
| 01:02:10   | And as you are making more and more complicated programs,          |
| 01:02:15   | you need to be able to see more to get a better sense              |
| 01:02:18   | of what's going on in your program or your script.                 |
| 01:02:23   | And workflow, like all of these visual type tools,                 |
| 01:02:28   | automator as well, cuts down on how much you can see at once       |
| 01:02:33   | because the blocks are so big.                                     |
| 01:02:36   | Still, it's nice.                                                  |
| 01:02:39   | My most recent problem though with shortcuts                       |
| 01:02:42   | is how they broke it with the two,                                 |
| 01:02:47   | and I don't know whether it broke with the 2.1                     |
| 01:02:50   | or the 2.1.1 or the 2.1.2.                                         |
| 01:02:54   | I can't, I don't remember exactly when it broke,                   |
| 01:02:59   | but they didn't fix it until 2.2.                                  |
| 01:03:00   | And I'm delighted that they did finally fix it.                    |
| 01:03:04   | And what they broke was everything having to do                    |
| 01:03:09   | with images, if you have a shortcut                                |
| 01:03:12   | that you would put in a sharing sheet                              |
| 01:03:14   | that takes as its input an image,                                  |
| 01:03:18   | it will not work or it would not work for a few months.            |
| 01:03:25   | I was kind of, and I use that actually a lot                       |
| 01:03:31   | while blogging because I will have an image                        |
| 01:03:33   | that's either a screenshot or a photo that I've taken              |
| 01:03:36   | and I wanna upload it to my server for the blog.                   |
| 01:03:41   | And I like to do that in a particular way                          |
| 01:03:44   | with a particular file name format.                                |
| 01:03:49   | And I had a shortcut that did that.                                |
| 01:03:52   | I had several shortcuts that did things with images.               |
| 01:03:55   | I kind of, for a while there, I went all in                        |
| 01:03:58   | on doing things with images in shortcuts.                          |
| 01:04:03   | In fact, probably the bulk of my shortcuts                         |
| 01:04:06   | for a while there were all image-based shortcuts.                  |
| 01:04:10   | And some of this was inspired by what [[Federico Viticci\|Federico]] was doing           |
| 01:04:12   | with putting the frame around the iPhone type                      |
| 01:04:17   | or iPad looking frame around screenshots.                          |
| 01:04:21   | And so I had this tremendous investment                            |
| 01:04:27   | in shortcuts that dealt with images and they all broke.            |
| 01:04:32   | And so I had to go back to uploading                               |
| 01:04:35   | and renaming images by hand,                                       |
| 01:04:38   | which is just horrible.                                            |
| 01:04:40   | It's the worst thing in the world.                                 |
| 01:04:41   | It's like using punch cards again.                                 |
| 01:04:47   | But I got used to doing it with a tap here and there               |
| 01:04:52   | and a little bit and a small amount of typing.                     |
| 01:04:56   | My shortcut put in, there's the file format,                       |
| 01:04:59   | the file naming format that I use for images on my blog            |
| 01:05:03   | is the date, year, year, four digits a year,                       |
| 01:05:09   | two digits a month, two digits a day dash,                         |
| 01:05:12   | and then a description of the image                                |
| 01:05:13   | and then.jpeg or.png, whatever it happens to be.                   |
| 01:05:19   | And a lot of my blogging scripts                                   |
| 01:05:23   | that get links to those images assume that that is the case.       |
| 01:05:28   | And so they use the part after the dash to fill in the title       |
| 01:05:33   | and the alt fields of an image tag.                                |
| 01:05:37   | So anyway, a lot of this was automated for me                      |
| 01:05:40   | through my shortcuts and they all broke                            |
| 01:05:43   | and they kept breaking and then Automator did an update,           |
| 01:05:46   | the 2.1.3 and it didn't fix it.                                    |
| 01:05:48   | And I was just, I was so angry at the Automator team               |
| 01:05:54   | during this period because this was my main use of Automator,      |
| 01:05:58   | really was this stuff.                                             |
| 01:06:01   | And it was great until it stopped working                          |
| 01:06:04   | and then it was horrible.                                          |
| 01:06:05   | I was quite fortunate because one of the things                    |
| 01:06:08   | that I realised very early on is I don't always remember           |
| 01:06:11   | if I've written a shortcut to accept input                         |
| 01:06:13   | or for me to run it first.                                         |
| 01:06:15   | So what pretty much all of my shortcuts                            |
| 01:06:17   | that handle something like a share sheet do                        |
| 01:06:19   | is they check, they count whether or not there's input             |
| 01:06:22   | and if there's no input then they ask me                           |
| 01:06:23   | for the right kind of input.                                       |
| 01:06:25   | But I've built my shortcuts from the go with that in mind.         |
| 01:06:29   | And I know some people were using a workaround                     |
| 01:06:32   | where they had a run image shortcut shortcut                       |
| 01:06:35   | where they would run it and then it would get                      |
| 01:06:39   | whatever images they needed or something                           |
| 01:06:42   | and then it would pass them to the right shortcuts                 |
| 01:06:45   | just so they didn't have to rewrite everything.                    |
| 01:06:48   | But it's still very frustrating, unfortunately.                    |
| 01:06:51   | Yeah, and I had too many shortcuts that were built,                |
| 01:06:55   | the way I wanted them to be built                                  |
| 01:06:57   | because I really don't like the image picker                       |
| 01:07:00   | within shortcuts.                                                  |
| 01:07:01   | I really prefer, and I had done some shortcuts that way            |
| 01:07:05   | using the image picker and this is not for me.                     |
| 01:07:08   | I really like the way photos presents my images                    |
| 01:07:13   | and that's how I worked.                                           |
| 01:07:15   | And it was just, I looked at it and said,                          |
| 01:07:19   | well, surely the shortcuts team knows                              |
| 01:07:22   | that this is a problem.                                            |
| 01:07:24   | Exactly how this bug came through I don't understand               |
| 01:07:27   | because it seems like the regression tests                         |
| 01:07:30   | would have caught it before it got released.                       |
| 01:07:33   | And I also don't understand,                                       |
| 01:07:34   | this is very easy for me to say                                    |
| 01:07:36   | because I'm not the one who's doing the programming,               |
| 01:07:37   | but I'm angry.                                                     |
| 01:07:40   | So I'm gonna complain.                                             |
| 01:07:42   | I also don't understand why they didn't get this fixed out         |
| 01:07:45   | faster because it was months that this problem was there           |
| 01:07:50   | and it was, it soured me on the program                            |
| 01:07:55   | because one of the reasons for shortcuts                           |
| 01:08:00   | not being part of system software                                  |
| 01:08:03   | is that you can address things                                     |
| 01:08:05   | and you can add new features early on                              |
| 01:08:08   | and you can fix things that you've broken early,                   |
| 01:08:11   | not waiting another six months or a year                           |
| 01:08:14   | to get something done.                                             |
| 01:08:16   | And that's all true,                                               |
| 01:08:19   | but it seemed to happen too late for me,                           |
| 01:08:21   | too slowly for my taste.                                           |
| 01:08:24   | Surely the shortcuts people knew that this was a problem.          |
| 01:08:27   | Yeah, I'm sure they were very upset                                |
| 01:08:29   | about it being out there.                                          |
| 01:08:31   | It was rough for me                                                |
| 01:08:32   | because people had paid for a Siri shortcuts field guide           |
| 01:08:35   | and some of the scripts I gave them didn't work anymore.           |
| 01:08:38   | We're breaking, yes.                                               |
| 01:08:40   | So I had to build automation                                       |
| 01:08:41   | to explain what the problem was.                                   |
| 01:08:43   | Oh God.                                                            |
| 01:08:45   | Yeah.                                                              |
| 01:08:46   | So, but I do think and that happens                                |
| 01:08:49   | and the thing I wanna emphasise about this is                      |
| 01:08:53   | [[Apple]] is updating a product more than once a year.                 |
| 01:08:56   | So it's like, that's good.                                         |
| 01:08:58   | You know, I mean, I know that there was a problem with this        |
| 01:09:01   | but the fact that they continue to push                            |
| 01:09:03   | they've had two significant updates.                               |
| 01:09:05   | To me is a good sign.                                              |
| 01:09:06   | I'm crossing my fingers that in June                               |
| 01:09:08   | we're gonna get a lot of these things fixed.                       |
| 01:09:10   | The other complaint you have,                                      |
| 01:09:12   | which I think is entirely legitimate                               |
| 01:09:14   | is just the general programming environment                        |
| 01:09:19   | can be difficult if you wanna use it                               |
| 01:09:22   | beyond the most simple function.                                   |
| 01:09:24   | And, you know, we've talked on this show in the past               |
| 01:09:26   | about how small the text field is                                  |
| 01:09:28   | when you're working in text.                                       |
| 01:09:29   | And I can only imagine,                                            |
| 01:09:31   | I have never done it on the phone                                  |
| 01:09:32   | because I can't imagine doing it on the phone.                     |
| 01:09:34   | But even on the iPad,                                              |
| 01:09:38   | like working with text in a script is quite difficult.             |
| 01:09:41   | And like even just like,                                           |
| 01:09:43   | okay, you've created a block of actions here.                      |
| 01:09:46   | So often, especially with a simplified programming environment     |
| 01:09:50   | which Siri Shortcuts is,                                           |
| 01:09:52   | you wanna be able to just paste them                               |
| 01:09:54   | like in [[Keyboard Maestro}] all the time.                              |
| 01:09:56   | You get something figured out, Command C, Command V                |
| 01:09:59   | and then suddenly you've duplicated at 17 times                    |
| 01:10:02   | and it's great.                                                    |
| 01:10:03   | It's a little hacky                                                |
| 01:10:04   | that you had to do it that many times                              |
| 01:10:06   | but at least you didn't have to create it                          |
| 01:10:08   | from scratch 17 times.                                             |
| 01:10:10   | And-                                                               |
| 01:10:10   | You're absolutely right.                                           |
| 01:10:11   | And although, you know, yes,                                       |
| 01:10:14   | you can sort of make subroutines.                                  |
| 01:10:17   | You can make shortcuts                                             |
| 01:10:19   | because shortcuts can call other shortcuts.                        |
| 01:10:22   | You can make essentially subroutines that do something             |
| 01:10:25   | and then kind of, you know, you take some input,                   |
| 01:10:28   | you get some output.                                               |
| 01:10:28   | Okay, fine.                                                        |
| 01:10:32   | But yeah, being able to cop,                                       |
| 01:10:33   | sometimes that's just overkill                                     |
| 01:10:35   | and you don't wanna have this                                      |
| 01:10:37   | because you're not gonna be doing this a bunch of times.           |
| 01:10:40   | And yeah, being able to copy and paste steps,                      |
| 01:10:45   | not the whole shortcut,                                            |
| 01:10:46   | but just some steps to be able to use                              |
| 01:10:49   | either in two or three steps only                                  |
| 01:10:51   | to be able to use in another shortcut                              |
| 01:10:54   | or to be able to use later on in a shortcut                        |
| 01:10:57   | that you're writing right now and you can't do it.                 |
| 01:11:00   | And that's, text solves all those problems.                        |
| 01:11:05   | That being said, you know,                                         |
| 01:11:06   | the question that I think people have to ask themselves            |
| 01:11:08   | about Siri Shortcuts is,                                           |
| 01:11:10   | is this just a glass of water to a man in the desert?              |
| 01:11:13   | You know, which, you know, like we love it                         |
| 01:11:15   | just because it's any kind of automation on iOS                    |
| 01:11:19   | or is it an automation system that has merit on its own?           |
| 01:11:23   | And, you know, I would tend to look at the later of those two.     |
| 01:11:27   | I think that as a automation system                                |
| 01:11:31   | for people who are not gonna learn Python                          |
| 01:11:33   | and who turn me out,                                               |
| 01:11:35   | maybe they don't have even listening to this show anymore          |
| 01:11:36   | because we talked about regular expressions                        |
| 01:11:38   | at the beginning.                                                  |
| 01:11:40   | For people who don't wanna bother with that stuff,                 |
| 01:11:43   | but do want to make their devices work a little smarter            |
| 01:11:46   | for them and give them a little bit more automation,               |
| 01:11:48   | I think they've done a pretty good job                             |
| 01:11:50   | and like the integration with so many different applications       |
| 01:11:54   | and, you know, all the stuff they're doing                         |
| 01:11:56   | while some of it has some rough patches,                           |
| 01:11:59   | I feel like they're pointing it in the right direction.            |
| 01:12:01   | And I'm a fan, you know, at the end of the day.                    |
| 01:12:04   | I don't disagree with you.                                         |
| 01:12:06   | I just, you know, obviously there are things about it              |
| 01:12:10   | I don't like, but I still use it.                                  |
| 01:12:12   | And, you know, every programming language                          |
| 01:12:16   | and every programming environment                                  |
| 01:12:18   | has things that I don't like about it.                             |
| 01:12:20   | Nothing is a panacea.                                              |
| 01:12:23   | You're exactly right.                                              |
| 01:12:25   | Its integration is excellent.                                      |
| 01:12:27   | And I think the, perhaps in the future,                            |
| 01:12:32   | what we will find to be best about shortcuts                       |
| 01:12:36   | and Siri shortcuts in particular                                   |
| 01:12:40   | is that it allows Siri to work better                              |
| 01:12:45   | than it did on its own                                             |
| 01:12:47   | because when you make a shortcut                                   |
| 01:12:49   | that you intend to run by voice,                                   |
| 01:12:52   | you say, this is the name of my shortcut.                          |
| 01:12:55   | I want you to run this shortcut when I say this                    |
| 01:12:59   | and it records your voice and it knows what you said.              |
| 01:13:01   | And it's not trying to interpret what you said very much.          |
| 01:13:06   | And that, I think, gets around a lot of the problems               |
| 01:13:11   | of Siri's inability to understand what we're saying.               |
| 01:13:16   | You know, messing up what we're saying.                            |
| 01:13:19   | And I think that idea which didn't come                            |
| 01:13:23   | until we actually got Siri shortcuts itself                        |
| 01:13:26   | back last September, it wasn't part of workflow.                   |
| 01:13:30   | And it was in particular,                                          |
| 01:13:32   | it was something that could not have been done                     |
| 01:13:35   | if the workflow people had not been bought up by [[Apple]].            |
| 01:13:39   | I think that is one of the best things                             |
| 01:13:42   | about shortcuts as opposed to workflow.                            |
| 01:13:46   | And, you know, apart from all the things about, you know,          |
| 01:13:49   | it's got the full force of [[Apple]] behind it.                        |
| 01:13:51   | [[Apple]] does seem to be behind it.                                   |
| 01:13:52   | [[Apple]] spent a lot of time talking about this feature               |
| 01:13:57   | back there in September.                                           |
| 01:13:59   | And, or was it, were they doing it in June at [[WWDC]]?                |
| 01:14:04   | Whatever it was, whenever, when they introduced it,                |
| 01:14:07   | they talked a lot about it                                         |
| 01:14:08   | and they talked a lot about it                                     |
| 01:14:11   | in a way that I think made sense                                   |
| 01:14:14   | and indicated that they were interested in promoting this.         |
| 01:14:21   | And I think it's a way of getting around, as I said,               |
| 01:14:23   | some of Siri's shortcomings about interpretation                   |
| 01:14:27   | and not understanding context.                                     |
| 01:14:29   | Now you can tell something to Siri                                 |
| 01:14:32   | and as long as Siri can actually hear you,                         |
| 01:14:34   | that there isn't enough,                                           |
| 01:14:35   | there isn't so much background noise that it can't hear you.       |
| 01:14:38   | As long as it can hear you,                                        |
| 01:14:40   | it knows exactly what you want to do.                              |
| 01:14:42   | It doesn't do its own weird, sometimes weird interpretation.       |
| 01:14:47   | Yes, and just the ability to chain                                 |
| 01:14:49   | a bunch of things together.                                        |
| 01:14:50   | So for example, when I tell my HomePod, good night,               |
| 01:14:53   | it doesn't just run my good night scene in home kit.               |
| 01:14:56   | It does six or seven things, including checking, you know,         |
| 01:15:00   | if I've gotten early work appointment for the next morning         |
| 01:15:03   | and reminds me to set my alarm if that's the case.                 |
| 01:15:06   | You know, being able to do that,                                   |
| 01:15:08   | leapfrogs over a lot of the problems                               |
| 01:15:10   | that people have with automation,                                  |
| 01:15:12   | where they want to be able to tell their machine                   |
| 01:15:15   | what it should do when they ask it for certain things.             |
| 01:15:18   | And some devices are just not capable of that                      |
| 01:15:21   | and Siri certainly wasn't before,                                  |
| 01:15:22   | but it's definitely getting there now, which is great.             |
| 01:15:26   | Absolutely, absolutely.                                            |
| 01:15:27   | And that is one of the great things about this,                    |
| 01:15:31   | you know, Siri shortcuts as opposed to just workflow.              |
| 01:15:36   | And honestly, though, your complaints                              |
| 01:15:39   | are completely legitimate,                                         |
| 01:15:40   | especially just the lack of power                                  |
| 01:15:43   | for a programming environment as someone who, you know,            |
| 01:15:48   | spends his time writing in Python and even [[AppleScript]].           |
| 01:15:51   | I mean, [[AppleScript]], everybody makes fun of it,                   |
| 01:15:53   | but it's a powerful scripting language                             |
| 01:15:56   | combined with Apple events.                                        |
| 01:15:58   | You can do almost anything on a Mac with it.                       |
| 01:16:00   | And you don't quite have that with Siri shortcuts.                 |
| 01:16:04   | And I think what you see as someone                                |
| 01:16:07   | who's an experienced automator                                     |
| 01:16:09   | is you immediately see the ceiling of the current iteration.       |
| 01:16:13   | And that I think is of concern,                                    |
| 01:16:15   | but I feel like it's going to,                                     |
| 01:16:19   | the ceiling is going to get higher.                                |
| 01:16:20   | I don't know if it's ever gonna give you                           |
| 01:16:22   | the unlimited power or automation you want,                        |
| 01:16:26   | but it's definitely going to get higher.                           |
| 01:16:29   | Yeah, well, I don't think it can                                   |
| 01:16:32   | because [[Apple]] wants iOS to be a more locked down system               |
| 01:16:38   | than the Mac.                                                      |
| 01:16:38   | In fact, it's making Mac more locked down                             |
| 01:16:42   | than it ever has been before.                                      |
| 01:16:43   | And there are legitimate reasons for that.                         |
| 01:16:45   | We live in a different world                                       |
| 01:16:47   | where security is far more important to all of us.                 |
| 01:16:51   | And so it's legitimate                                             |
| 01:16:53   | that [[Apple]] has locked things down more.                            |
| 01:16:56   | But yeah, it is.                                                   |
| 01:16:58   | So when we were talking about regular expressions,                 |
| 01:17:01   | we talked about, I'm sorry,                                        |
| 01:17:03   | I'm cutting your audience away again,                              |
| 01:17:05   | but you start with the simple stuff                                |
| 01:17:09   | and then you move on                                               |
| 01:17:10   | and you can work up to very complicated things                     |
| 01:17:15   | the more you learn about regular expressions.                      |
| 01:17:19   | And you can do that with almost any other language.                |
| 01:17:23   | You can do that with Perl,                                         |
| 01:17:24   | you can do that with Python.                                       |
| 01:17:26   | You can start off writing sort of baby type languages              |
| 01:17:29   | as you learn more about the language and its capabilities          |
| 01:17:34   | and also just about programming in general.                        |
| 01:17:37   | You can do the same thing in shortcuts, but,                       |
| 01:17:41   | and I've done it in shortcuts                                      |
| 01:17:43   | because when I started doing things in shortcuts,                  |
| 01:17:45   | man, my shortcuts were stupid.                                     |
| 01:17:47   | They, I didn't understand how magic variables worked               |
| 01:17:51   | and how you can extract things out of magic variables.             |
| 01:17:53   | It's just, and there's a thing that is not,                        |
| 01:17:57   | that is unlike almost every other programming,                     |
| 01:18:01   | maybe every other programming language that I have used.           |
| 01:18:04   | And it's an extremely powerful thing                               |
| 01:18:05   | and I didn't understand it at all.                                 |
| 01:18:06   | And so people like [[Matthew Cassinelli\|Matt Cassinelli]] were sort of                    |
| 01:18:11   | gently telling me, hey, look idiot,                                |
| 01:18:13   | you need to use magic variables here                               |
| 01:18:15   | and things will be much better.                                    |
| 01:18:19   | So there is a learning curve with shortcuts                        |
| 01:18:24   | and you can get better                                             |
| 01:18:27   | and you can work start off like I started off                      |
| 01:18:30   | and eventually you can get to where [[Federico Viticci\|Federico]] is.                   |
| 01:18:35   | [[Federico Viticci]], everybody knows who [[Federico Viticci\|Federico]] is.                  |
| 01:18:37   | So, but yeah, I am sealing the ceiling.                            |
| 01:18:44   | It's inevitable, I think that there's gonna be a ceiling.          |
| 01:18:47   | The ceiling comes from the fact                                    |
| 01:18:49   | that the individual apps on your phone                             |
| 01:18:54   | are only gonna let you do certain things.                          |
| 01:18:59   | And, you know, there's just no way around that.                    |
| 01:19:06   | Well, it's gonna be interesting to see how it plays out.           |
| 01:19:09   | I am encouraged by the fact                                        |
| 01:19:11   | that there have been two significant updates                       |
| 01:19:13   | in between iOS updates.                                            |
| 01:19:18   | That's encouraging to me.                                          |
| 01:19:19   | I do think that [[Apple]], at least for the immediate future,          |
| 01:19:23   | is invested in Siri shortcuts.                                     |
| 01:19:26   | So I'm hoping that in June,                                        |
| 01:19:28   | we get a whole bunch of new toys                                   |
| 01:19:29   | and Rose and I have stuff to geek out over                         |
| 01:19:31   | for another year.                                                  |
| 01:19:33   | And, you know, but I guess we're just gonna have to wait           |
| 01:19:34   | and see, I mean, the other fear in the back of my mind             |
| 01:19:37   | is what if [[Apple]] loses interest in this, you know?                 |
| 01:19:40   | Cause like I feel like Automator started                           |
| 01:19:42   | with the best of intentions,                                       |
| 01:19:43   | but at some point, you know,                                       |
| 01:19:45   | they just didn't give Sal enough to work with over there           |
| 01:19:48   | to build it into what it could have been.                          |
| 01:19:51   | Yeah, Automator always, I think, yeah, Automator                   |
| 01:19:54   | always suffered when I was trying to use Automator,                |
| 01:19:57   | I'd always get to a step and then say,                             |
| 01:20:00   | crap, there's no step,                                             |
| 01:20:01   | there's no piece that I can stick in here in Automator.            |
| 01:20:06   | And then I would end up going back                                 |
| 01:20:08   | and doing it in [[AppleScript]].                                      |
| 01:20:09   | Yeah, or writing a script to drop into the Automator.              |
| 01:20:12   | What are they like?                                                |
| 01:20:13   | Yeah, something like that.                                         |
| 01:20:15   | And it was, well, the thing was,                                   |
| 01:20:17   | if I had to write a script to drop into Automator,                 |
| 01:20:20   | why don't I just write the damn script entirely?                   |
| 01:20:23   | Write it entirely as a script, which often I did.                  |
| 01:20:26   | Sometimes, you know, you could combine the two.                    |
| 01:20:29   | And I do have Automator actions                                    |
| 01:20:32   | that basically run a script.                                       |
| 01:20:35   | They do a couple of little things                                  |
| 01:20:36   | and then they run a script and they work out fine.                 |
| 01:20:40   | But yeah, it's suffered from the fact                              |
| 01:20:43   | that it's library of available actions                             |
| 01:20:47   | or steps or whatever the hell they're called in Automator          |
| 01:20:52   | was limited and didn't seem                                        |
| 01:20:55   | to get significantly increased over time.                          |
| 01:20:59   | I mean, that's something that we're definitely seeing now          |
| 01:21:01   | because, I mean, Microsoft wrote action blocks for Automator       |
| 01:21:04   | and they were included in previous versions of Office.             |
| 01:21:06   | But last, I think two versions of Office,                          |
| 01:21:08   | two significant releases, 2016, 2019,                              |
| 01:21:12   | they removed them, they're gone.                                   |
| 01:21:15   | Whereas Shortcuts released last summer                             |
| 01:21:17   | and they've added and so many people have added actions.           |
| 01:21:20   | It is amazing.                                                     |
| 01:21:22   | Well, I mean, you know,                                            |
| 01:21:23   | Ben Walde is the guy who wrote those for Microsoft                 |
| 01:21:26   | and now he works for [[Apple]].                                        |
| 01:21:27   | So I suspect there's nobody at Microsoft                           |
| 01:21:30   | that knows how to write the Automator action.                      |
| 01:21:34   | That would explain a lot.                                          |
| 01:21:37   | Yeah, it is unfortunate when things seem to get,                   |
| 01:21:40   | especially of course, when it's something that you rely on,        |
| 01:21:43   | seems to get abandoned.                                            |
| 01:21:44   | And it's just, you know,                                           |
| 01:21:48   | [[AppleScript]] has gone through this in the past,                     |
| 01:21:51   | not just Automator, but [[AppleScript]] itself, you know.              |
| 01:21:53   | Is [[AppleScript]] dead?                                               |
| 01:21:55   | Is [[Apple]], it's not.                                                |
| 01:21:57   | You know, a few years ago, they actually came,                     |
| 01:21:59   | amazingly, they decided to come out                                |
| 01:22:01   | with an entirely new language that looks at Apple events,          |
| 01:22:06   | you know, [[JavaScript]] for applications.                             |
| 01:22:09   | And I don't like it because I'm not a big fan of [[JavaScript]].       |
| 01:22:15   | And also because I find it,                                        |
| 01:22:18   | you know, how you write an [[AppleScript]],                            |
| 01:22:21   | which is you start writing and then you realise,                   |
| 01:22:23   | I don't know exactly how the dictionary                            |
| 01:22:26   | for this particular app that I want to automate works.             |
| 01:22:29   | And you look at the dictionary                                     |
| 01:22:30   | and you don't really understand,                                   |
| 01:22:32   | can I just, does it have the word selection available to it?       |
| 01:22:37   | Does it have this, does it have that?                              |
| 01:22:39   | And then you just start typing into Google your problem.           |
| 01:22:43   | The solution is almost,                                            |
| 01:22:45   | there are lots of solutions for [[AppleScript]] problems               |
| 01:22:48   | because [[AppleScript]] has been around for such a long time.          |
| 01:22:51   | It's very hard to find [[JXA]] solutions,                              |
| 01:22:55   | or is it [[JXA]] or JESA, whatever it is,                              |
| 01:22:57   | in [[JavaScript]] solutions for these problems,                        |
| 01:23:01   | because it just hasn't been around for very long.                  |
| 01:23:03   | So I end up still writing mostly in [[AppleScript]],                   |
| 01:23:07   | even though it's not a language that I particularly like.          |
| 01:23:11   | It's the only one where I can get things done,                     |
| 01:23:15   | certain things done.                                               |
| 01:23:16   | Well, we sure like all the automation you've been doing            |
| 01:23:19   | and I especially like the fact that you share                      |
| 01:23:22   | so much of it so freely over at leancrew.com                       |
| 01:23:25   | or whether that we call it the blog title                          |
| 01:23:28   | or the snowman page, you know, whatever we're gonna call it.       |
| 01:23:32   | We're gonna have links for all this in the show notes              |
| 01:23:35   | so you can go check it out.                                        |
| 01:23:36   | And I strongly recommend anyone listening                          |
| 01:23:39   | to follow Dr. Drang over at leancrew.com,                          |
| 01:23:42   | sign up for the RSS.                                               |
| 01:23:45   | I love your blog because it's high signal to noise.                |
| 01:23:48   | You don't put a post up every day,                                 |
| 01:23:49   | but when you do put a post up,                                     |
| 01:23:51   | it's always something that I wanna read                            |
| 01:23:52   | and we all really appreciate that.                                 |
| 01:23:55   | Well, thank you very much.                                         |
| 01:23:57   | And thanks for coming on the show.                                 |
| 01:23:59   | Are there any other places people should look for you              |
| 01:24:01   | on the internet?                                                   |
| 01:24:02   | Well, I'm Dr. Drang on Twitter and I don't tweet,                  |
| 01:24:05   | I don't blog as much as I used to                                  |
| 01:24:07   | and I don't tweet as much as I used to.                            |
| 01:24:08   | I happen to be going through a very busy time at work,             |
| 01:24:12   | but I hope to do more, especially with the blogging,               |
| 01:24:16   | maybe not so much more of the tweeting,                            |
| 01:24:17   | but if you follow me on Twitter,                                   |
| 01:24:19   | at least you'll know when the new posts come out.                  |
| 01:24:22   | We're gonna have a ton of links in this show,                      |
| 01:24:24   | including links to the specific [[Drafts]] automations                 |
| 01:24:29   | and that invoicing system that Dr. Drang was talking about.        |
| 01:24:32   | Yes.                                                               |
| 01:24:33   | Also, we didn't talk about it at the top of the show,              |
| 01:24:35   | but there's still space in the meetups in Orange County            |
| 01:24:38   | and San Jose that we've got planned for June.                      |
| 01:24:41   | They are filling up though.                                        |
| 01:24:42   | So if you're interested in doing that, let us know                 |
| 01:24:45   | because we're gonna have to make some decisions                    |
| 01:24:46   | about locations here real quick.                                   |
| 01:24:48   | And thanks a lot for listening.                                    |
| 01:24:51   | We are The Automators.                                             |
| 01:24:52   | You can find us over at relay.fm/automators.                 |
| 01:24:55   | Rose, anything exciting going on over at rosewater.com lately?     |
| 01:24:58   | Well, I've recently switched my blogging software,                 |
| 01:25:02   | so I'm automating more things                                      |
| 01:25:03   | and hopefully posting rather more                                  |
| 01:25:05   | because it's going to be a lot easier now                          |
| 01:25:06   | because I'm on WordPress.                                          |
| 01:25:08   | So yes, keep an eye out there and don't forget,                    |
| 01:25:10   | you can follow Automators at Automators FM on Twitter.             |
| 01:25:14   | And there's also the discourse group                               |
| 01:25:18   | over at talk.automators.fm.                                        |
| 01:25:21   | If you like [[Drafts]], we talked about [[Drafts]].                        |
| 01:25:23   | Rose did a really great job of reviewing the app                   |
| 01:25:25   | over at [MacStories](https://www.macstories.net/).                                               |
| 01:25:26   | We'll put a link in the show notes.                                |
| 01:25:28   | And I did the introductory video for the [[Drafts]] for Mac.           |
| 01:25:32   | So it's like a 10 minute video,                                    |
| 01:25:33   | just kind of walking through how it works.                         |
| 01:25:35   | And we'll put a link to that in the show notes as well.            |
| 01:25:37   | So thanks a lot for listening.                                     |
| 01:25:40   | And thanks Dr. Dreing for coming on                                |
| 01:25:41   | and we'll see you all in two weeks.                                |
