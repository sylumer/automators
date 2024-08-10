---
status: incomplete
fc-date:
  year: 2021
  month: 8
  day: 13
fc-category: podcast
podcast: Automators
published: 2021-08-13
duration: 4507
formattedduration: 01:15:07
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Jason Snell
notetype: episode
showpage: http://relay.fm/automators/82
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators082.mp3
episode: 82
title: "82: Bad AppleScript with Jason Snell"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Jason Snell joins the Automators to talk about his automation journey, some useful automations, and the promise of Shortcuts for Mac.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Jason Snell]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 082 Discussion](https://talk.automators.fm/t/82-bad-applescript-with-jason-snell/12092)

# Sponsors
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Communicate Smarter.
- [[Technology Untangled (sponsor)|Technology Untangled]] - Join Michael Bird as he untangles innovation through a series of interviews, stories, and analyses with some of the industry’s brightest brains.

# Show Notes
- [Six Colours – Apple, technology, and other stuff by Jason Snell & Dan Moren](https://sixcolours.com/)
- [User Automation – Six Colours](https://sixcolours.com/tag/automation/) - All the "Bad AppleScript" posts are in this category.
- [Jason Snell on GitHub](https://gist.github.com/jasonsnell)
- [Service Station – Customise your Right-Click Menu](https://servicestation.menu/)
- [jasonsnell/PurpleAir-AQI-Scriptable-Widget: Generate Scriptable app widget to query PurpleAir sensor and display local AQI.](https://github.com/jasonsnell/PurpleAir-AQI-Scriptable-Widget
- [Links | Markdown Guide](https://www.markdownguide.org/basic-syntax/#links) - For all kinds of links, including reference links.
- [RegexOne - Lesson 12: Nested groups](https://regexone.com/lesson/nested_groups)

# Transcription
  
| Time Index | Transcription                                                                                                    |
| :--------- | :--------------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome, the Automators. I'm David Sparks, and I'm joined by my co-host, Rosemary Orchard.                       |
| 00:07      | How are you today, Rosemary?                                                                                     |
| 00:09      | I'm excited, David. We have a guest.                                                                             |
| 00:12      | We've been trying to get him on the show for a while. It's been a bit tricky.                                    |
| 00:15      | But, you know, I think we've managed to do it, and everybody, you know, everybody loves this person,             |
| 00:21      | so we've got to have them on the right.                                                                          |
| 00:23      | Wow. Talk about a setup. Welcome to the show, Jason Still.                                                       |
| 00:27      | It was not that hard to get me on here. Come on.                                                                 |
| 00:30      | I was going to be on here weeks ago, and you said, no, no, it's too soon, and put me off a little bit.           |
| 00:36      | But I'm here now. Hello. Thank you.                                                                              |
| 00:38      | Despite the fact we have automated calendars, David, we somehow managed to schedule two things at the same time. |
| 00:44      | I don't know how that happened, but it did.                                                                      |
| 00:46      | It's more efficient that way. Come on.                                                                           |
| 00:49      | You say that, but I'm not that great at multitasking, unfortunately.                                             |
| 00:54      | It's hard to multitask a podcast.                                                                                |
| 00:56      | For the folks who don't know Jason, he's the former editor of MacBook Magazine.                                  |
| 01:01      | He now is the proprietor of SixColours.com, one of my very favourite websites covering Apple.                      |
| 01:07      | The former host of an amazing podcast called Free Agents.                                                        |
| 01:12      | I don't know how that ever ended.                                                                                |
| 01:15      | But, yeah, Jason makes a couple podcasts.                                                                        |
| 01:18      | The incomparable, and you've got several shows here on Relay, and Rose is right, though, Jason.                  |
| 01:26      | Everybody does love you because you've been around the block so many times.                                      |
| 01:30      | You bring so much experience to the Apple community.                                                             |
| 01:34      | I told you when you first left Macworld and you made SixColours,                                                  |
| 01:38      | the thing I loved most about that move was that you were going to be doing less administrating and more writing, |
| 01:43      | and we all get the benefit of the great stuff you've been writing.                                               |
| 01:46      | So, welcome to the show.                                                                                         |
| 01:49      | Thank you. It's good to be here.                                                                                 |
| 01:50      | I've been a little listener, and I'm glad to be a participant. It's great.                                       |
| 01:54      | One of the reasons why I wanted to have you on the show is because, you know, you're like me.                    |
| 01:59      | You're somebody who is programming adjacent, right?                                                              |
| 02:04      | You didn't go to school to become a developer.                                                                   |
| 02:06      | You went to school to become a writer.                                                                           |
| 02:08      | But along the way, you keep bumping into problems that involve technology,                                       |
| 02:12      | and you're a smart guy, and automation aware.                                                                    |
| 02:16      | And it just, once in a while, you put a blog post up with a little [[AppleScript]] or something,                    |
| 02:20      | and I just know intuitively that you have put a lot of automation in place over the years,                       |
| 02:26      | and we wanted to get that story out for the audience.                                                            |
| 02:30      | Yeah, that's great. Yeah, I think it's been with me.                                                             |
| 02:32      | And you're right to call it programming adjacent. That's exactly right.                                          |
| 02:35      | Like, I've never been that.                                                                                      |
| 02:36      | I've always been perceived, I think, as a person who's interested in computers                                   |
| 02:42      | since I was in elementary school, essentially.                                                                   |
| 02:44      | But in terms of actually formally doing computer things,                                                         |
| 02:49      | that's something that has basically never happened to me.                                                        |
| 02:52      | It's all sort of been, I'm using the computers because I'm enthusiastic about them,                              |
| 02:56      | and I want them to do work for me, and that's how I kind of fell down the rabbit hole.                           |
| 03:02      | I had this picture of this platonic ideal of a programmer, and it's a blank slate and a white screen,            |
| 03:07      | and you start to type, and you have your plan, and you do all of that.                                           |
| 03:10      | And I know that that's not true, but it's way more true than the kind of hacking things together.                |
| 03:16      | I'm much more like my dad when I was growing up.                                                                 |
| 03:19      | He had a shed that was basically his tool shed where he would go,                                                |
| 03:23      | and he had circular saw, and he would bodge things together out of different pieces.                             |
| 03:28      | And he was very handy that way in a way that I never have been,                                                  |
| 03:32      | but that's what I am doing with technology.                                                                      |
| 03:35      | That's what I'm doing with computers, especially.                                                                |
| 03:37      | I feel like when I'm doing automations and scripting and things like that,                                       |
| 03:40      | it's pretty much that same thing, which is piecing things together to do a job,                                  |
| 03:45      | and it's not necessarily that idealised pristine thing that I imagine programming to be,                         |
| 03:52      | even though it's probably not, but it comes from the totally other direction,                                    |
| 03:57      | which is like, what pieces do I have here, and how can I put them together to serve me, basically?               |
| 04:02      | As somebody who spent the day programming and spent most of the day staring at the screen going,                 |
| 04:06      | but why are you doing this? This shouldn't be possible in this language.                                         |
| 04:11      | Programming is never as clean and smooth as we pretend it is.                                                    |
| 04:15      | It's the metaphor of the duck, right?                                                                            |
| 04:18      | From above, everything looks really smooth. The duck's just gliding along.                                       |
| 04:21      | If you look below the water, it's frantic paddling.                                                              |
| 04:24      | No matter how good you are at programming, there will be days when there's a lot more frantic paddling           |
| 04:28      | than there is anything else.                                                                                     |
| 04:30      | At the end of the day, providing the result, which is the gliding across the water,                              |
| 04:35      | gets you where you need to go, it doesn't really matter how crazy it is behind the scenes.                       |
| 04:40      | I get that, and I think when I talk about that pristine idea of the white room                                   |
| 04:45      | where a program is written, I'm really more just trying...                                                       |
| 04:48      | That's obviously my conception, which I know is wrong,                                                           |
| 04:51      | but it's approaching it as I'm building something.                                                               |
| 04:54      | Approaching something that you're building and you're a professional                                             |
| 04:57      | and you're building it for something to be deployed, to be seen by other people,                                 |
| 05:00      | probably to be used by a lot of other people,                                                                    |
| 05:04      | that's not what I do, right?                                                                                     |
| 05:08      | That's my feeling. I'm taking assorted pieces that might be in different programs                                |
| 05:13      | or different languages using different techniques,                                                               |
| 05:16      | and all I really am trying to do is solve one of my own personal problems                                        |
| 05:21      | or make something easier for myself with no intention on it being pretty,                                        |
| 05:25      | no intention of it being something anyone else will ever see, right?                                             |
| 05:29      | And that's why I started at Macworld and I've continued at Six Colours.                                           |
| 05:33      | I write these things called bad [[AppleScript]] columns, right?                                                     |
| 05:36      | And the whole idea behind it was, okay, this is terrible.                                                        |
| 05:40      | I know it's terrible.                                                                                            |
| 05:42      | I know you can point out a million ways that you could do this in a different way,                               |
| 05:45      | but my goal was basically to show my work and say,                                                               |
| 05:47      | look, did you know you can automate this thing in your life by doing this thing?                                 |
| 05:52      | And I guess that's why I view it as different from the kind of programmer approach                               |
| 05:56      | in the sense that it's not really meant to serve anybody but me,                                                 |
| 06:00      | and it's, you know, I'm using the pieces at hand,                                                                |
| 06:04      | and I, you know, right, so I know that's kind of abstract,                                                       |
| 06:07      | but that's sort of how I separate user automation from programming                                               |
| 06:12      | if we're going to talk about that divide.                                                                        |
| 06:15      | That's sort of how I do it.                                                                                      |
| 06:17      | I have since put some things on GitHub that I've written,                                                        |
| 06:20      | and it's a deeply disconcerting experience and also causes a lot of work,                                        |
| 06:24      | because now I'm like, oh, okay, I can't just hard code this to my hard drive name                                |
| 06:29      | and this file path, and now I need to do a comment on this                                                       |
| 06:32      | and explain what I'm doing here.                                                                                 |
| 06:34      | And it's, even that step is just a huge step forward from,                                                       |
| 06:38      | I'm going to do this thing [[Keyboard Maestro]] and it's going to run an [[AppleScript]]                                |
| 06:41      | like that, and that's how I got started with this,                                                               |
| 06:45      | is definitely that kind of stuff.                                                                                |
| 06:48      | I never formally learned how to do any of this.                                                                  |
| 06:51      | I just started tinkering and changing things to, you know,                                                       |
| 06:56      | on the computer to serve me, that's basically how I did it,                                                      |
| 06:59      | and it just feels, I'm approaching this stuff from the opposite perspective                                      |
| 07:04      | of somebody who is actually trying to make something from scratch                                                |
| 07:08      | for other people to use.                                                                                         |
| 07:10      | And that's really, for me, the primary goal of this show.                                                        |
| 07:14      | I think there's a lot of folks out there who think,                                                              |
| 07:17      | oh, if I want to make my computer work harder for me,                                                            |
| 07:19      | I need to be that guy in the white room and have a computer science degree,                                      |
| 07:23      | and you don't, you could be a history major or a dentist or whatever,                                            |
| 07:27      | and you could do a Google search for [[AppleScript]] to solve a specific problem                                    |
| 07:32      | and cobble something together.                                                                                   |
| 07:34      | And people like Jason and me do it every day,                                                                    |
| 07:37      | and sometimes they are really ugly, but it is very satisfying                                                    |
| 07:41      | to have your computer do tedious work for you.                                                                   |
| 07:44      | And you can do it.                                                                                               |
| 07:46      | You don't need to be a programmer, and that's why I'm happier here.                                              |
| 07:50      | The first time I did anything like this,                                                                         |
| 07:52      | I was thinking about this before coming on here.                                                                 |
| 07:55      | I ran a, because I am of a certain age,                                                                          |
| 07:59      | that's about what David's age is,                                                                                |
| 08:01      | I ran a computer bulletin board when I was in high school.                                                       |
| 08:03      | So this is you dial in with a modem and you log in                                                               |
| 08:06      | and one person could do it at a time and you leave messages                                                      |
| 08:08      | and you send little mails to each other,                                                                         |
| 08:10      | and it was a thing before we had online services and the internet.                                               |
| 08:13      | And that, ultimately I ended up with this,                                                                       |
| 08:16      | I don't even remember the name of it, Telecat maybe,                                                             |
| 08:19      | it was a BBS program, it was written in basic,                                                                   |
| 08:22      | which meant it was open source.                                                                                  |
| 08:24      | Like technically, literally you could type list,                                                                 |
| 08:27      | it was on the Apple II, list and see the code, right?                                                            |
| 08:31      | And that was the start of it, because I ran that BBS                                                             |
| 08:35      | and I got the stock code and I ran it                                                                            |
| 08:38      | and then I started to have ideas of it would be better                                                           |
| 08:41      | if it did this, what if it worked this way?                                                                      |
| 08:43      | Could I add a menu item that did this?                                                                           |
| 08:45      | And I mean, I'm sure like everything,                                                                            |
| 08:47      | if I look back on it now that I did in high school,                                                              |
| 08:50      | that it was probably all terrible,                                                                               |
| 08:52      | but that was the start of my automation journey                                                                  |
| 08:54      | in the sense that I was bodging things together.                                                                 |
| 08:57      | I was looking at the code someone else had written                                                               |
| 08:59      | and changing it to serve my needs.                                                                               |
| 09:03      | And that's really where it started.                                                                              |
| 09:05      | And then on the Apple II,                                                                                        |
| 09:07      | it was a lot harder to do stuff like that,                                                                       |
| 09:09      | there wasn't any kind of like system-wide automation,                                                            |
| 09:11      | but that was my first idea of like,                                                                              |
| 09:13      | oh, I can just change the code                                                                                   |
| 09:15      | and add a new subroutine and all of that.                                                                        |
| 09:17      | And that was that moment where the light went on.                                                                |
| 09:20      | And so then when I got to the Mac                                                                                |
| 09:22      | and System 7 came out and AppleScript came out                                                                   |
| 09:25      | and there came a time,                                                                                           |
| 09:28      | I think when I was still in college,                                                                             |
| 09:31      | where I was doing an online magazine                                                                             |
| 09:34      | called InterText,                                                                                                |
| 09:36      | which is still my domain to this day,                                                                            |
| 09:38      | and we had story submissions from the internet.                                                                  |
| 09:40      | People would send their short stories in and we would read them                                                  |
| 09:42      | and vote on whether they were good or bad or whatever.                                                           |
| 09:45      | And, you know, databaseing like how we feel about stories                                                        |
| 09:49      | and what stories came in and when have we replied to them                                                        |
| 09:51      | and sending out the form letter rejection and all of that.                                                       |
| 09:54      | It was a lot of work.                                                                                            |
| 09:55      | And that was that moment.                                                                                        |
| 09:56      | That was my formative Mac automation moment                                                                      |
| 09:58      | where I ended up writing an AppleScript.                                                                         |
| 10:00      | And again, stealing code from examples                                                                           |
| 10:03      | that people were providing on, you know,                                                                         |
| 10:06      | Usenet or in books or wherever you could find it                                                                 |
| 10:09      | for how to script FileMaker                                                                                      |
| 10:11      | and how to script Eudora, the email client,                                                                      |
| 10:13      | so I could do stuff like do a batch rejection                                                                    |
| 10:16      | of all the stories that we rejected.                                                                             |
| 10:18      | And that was the moment on the Mac                                                                               |
| 10:21      | where that light came on, which was like,                                                                        |
| 10:23      | this is the greatest thing I have discovered yet                                                                 |
| 10:26      | as a computer user,                                                                                              |
| 10:28      | is the ability to have these two programs                                                                        |
| 10:30      | that are not connected to each other,                                                                            |
| 10:33      | talk to each other via the script and say,                                                                       |
| 10:38      | get me FileMaker, get me a list of all of the stories                                                            |
| 10:41      | that are in the to be rejected pile                                                                              |
| 10:43      | and the email addresses of all those people                                                                      |
| 10:46      | and then, hey, Eudora, let's make some rejection letters                                                         |
| 10:50      | and send those out.                                                                                              |
| 10:52      | And that was the moment where I thought, oh, I get it now.                                                       |
| 10:55      | Instead of using a computer being all these series                                                               |
| 10:58      | of kind of walled off apps,                                                                                      |
| 11:00      | I now have the ability to tie                                                                                    |
| 11:03      | any little bit of functionality anywhere on my system                                                            |
| 11:06      | to any other little bit                                                                                          |
| 11:08      | to make it do what I want and save me time.                                                                      |
| 11:10      | Yeah, you know, it's funny because just recently                                                                 |
| 11:12      | I was working on a script and my daughter interrupted me                                                         |
| 11:15      | and I said, just give me 10 minutes.                                                                             |
| 11:17      | I've got to finish the script.                                                                                   |
| 11:19      | And she says, Dad, I don't understand.                                                                           |
| 11:21      | Are you a programmer?                                                                                            |
| 11:23      | No, I'm not.                                                                                                     |
| 11:25      | But I can make existing applications work together.                                                              |
| 11:29      | That's what, to me, automation really is.                                                                        |
| 11:33      | It's taking the best stuff that's made by people                                                                 |
| 11:36      | like the Omni Group and [[BBEdit]]                                                                                  |
| 11:39      | and all these great apps out there                                                                               |
| 11:41      | and then bending them to your will through automation.                                                           |
| 11:44      | And once again, anybody can do this.                                                                             |
| 11:47      | Sometimes people call it writing kind of glue                                                                    |
| 11:50      | and you could say that or bridges between                                                                        |
| 11:53      | or even some basic kind of logic of,                                                                             |
| 11:56      | you know, I want something that will tell this app what to do                                                    |
| 12:00      | but what this app needs to do is different                                                                       |
| 12:02      | depending on something else, right?                                                                              |
| 12:04      | It's like, in the end, yes, I think you're using                                                                 |
| 12:07      | other people's tools for the most part to do a task                                                              |
| 12:11      | and you just, you know, but you just want to do it.                                                              |
| 12:13      | I also am a real believer in that idea                                                                           |
| 12:15      | and I know both of you are too,                                                                                  |
| 12:17      | that computers are really good at doing repetitive tasks.                                                        |
| 12:19      | They're really good at that.                                                                                     |
| 12:21      | It's a pain for humans.                                                                                          |
| 12:22      | We should use the computers to do the repetitive tasks, right?                                                   |
| 12:25      | We should not have to do the same thing 50 times.                                                                |
| 12:28      | That's just bottom line.                                                                                         |
| 12:29      | The computers are really great at that                                                                           |
| 12:31      | and they don't complain.                                                                                         |
| 12:32      | So have them do that task                                                                                        |
| 12:34      | and that I think every, I'm a firm believer                                                                      |
| 12:36      | that everybody's life on their computer                                                                          |
| 12:38      | would be improved in some way                                                                                    |
| 12:40      | by the application of a little bit of automation.                                                                |
| 12:43      | Yep, definitely, especially because the computer                                                                 |
| 12:46      | is going to do exactly what you tell it to do.                                                                   |
| 12:48      | It's not going to get bored and think,                                                                           |
| 12:50      | ah, maybe I can skip putting tape on this box                                                                    |
| 12:52      | or whatever it is that's supposed to happen.                                                                     |
| 12:54      | You know, it's going to do exactly the same thing again                                                          |
| 12:57      | and again because computers, fortunately for us,                                                                 |
| 12:59      | don't get bored.                                                                                                 |
| 13:00      | Not yet.                                                                                                         |
| 13:02      | I'm sure mine's getting to the point of,                                                                         |
| 13:05      | don't you have enough CAS I've read it subscribed yet?                                                           |
| 13:08      | Really? Really?                                                                                                  |
| 13:09      | I think it's judging me.                                                                                         |
| 13:10      | That's fine.                                                                                                     |
| 13:11      | Shouldn't we be a little afraid when computers get bored?                                                        |
| 13:13      | Is that when they become the overlords?                                                                          |
| 13:15      | I don't know.                                                                                                    |
| 13:16      | That's why we need to keep automating things,                                                                    |
| 13:18      | just to keep them interested.                                                                                    |
| 13:20      | Keep them busy, productive.                                                                                      |
| 13:22      | Keep their minds occupied.                                                                                       |
| 13:24      | Yeah, exactly.                                                                                                   |
| 13:25      | But it's just one of those things.                                                                               |
| 13:27      | I try to explain this to people and I know you've all been through this                                          |
| 13:29      | and you've talked about it on the show too.                                                                      |
| 13:31      | The idea here that, yes, I do believe it can be fun                                                              |
| 13:33      | to solve a problem.                                                                                              |
| 13:34      | It absolutely is true, but I do believe in the end,                                                              |
| 13:37      | the gauge is how much time can I put into this thing                                                             |
| 13:40      | and how much time will I save on the other side?                                                                 |
| 13:43      | And it doesn't always work out,                                                                                  |
| 13:45      | but most of the time it works out pretty well                                                                    |
| 13:47      | that you're like, I can put in two hours on this thing                                                           |
| 13:50      | and save myself ultimately over like a year or two,                                                              |
| 13:54      | save myself way more than that.                                                                                  |
| 13:56      | And at that point, you should do it.                                                                             |
| 13:58      | You should automate it.                                                                                          |
| 13:59      | You should take the time.                                                                                        |
| 14:00      | If you can find the time to put that work in upfront,                                                            |
| 14:03      | because it will pay off.                                                                                         |
| 14:05      | And sometimes it's shockingly, like I have a script                                                              |
| 14:07      | that builds the newsletter for Six Colors.                                                                       |
| 14:10      | And like, I, because I wanted to shift it to weekly                                                              |
| 14:14      | and I was like, there's no way I'm manually building                                                             |
| 14:16      | this newsletter weekly.                                                                                          |
| 14:17      | I already resented building it monthly.                                                                          |
| 14:19      | There's no way I'm going to build it weekly.                                                                     |
| 14:21      | And, you know, that took time,                                                                                   |
| 14:24      | but I think it paid off within like three weeks                                                                  |
| 14:29      | because it was saving me so much time and mental energy                                                          |
| 14:33      | to, you know, no longer have to worry about                                                                      |
| 14:36      | building that newsletter.                                                                                        |
| 14:38      | And that's the secret to all of this stuff is,                                                                   |
| 14:40      | you know, you have to find that time upfront,                                                                    |
| 14:42      | but it's probably a pretty good calculation                                                                      |
| 14:45      | of how much time you'll save.                                                                                    |
| 14:46      | Now, if you spend 10 hours building something                                                                    |
| 14:48      | that saves you one second,                                                                                       |
| 14:49      | that's going to take a long time to pay off.                                                                     |
| 14:51      | It might still, but, but oftentimes it's just very obvious                                                       |
| 14:55      | that doing this same thing.                                                                                      |
| 14:56      | This happened with my wife.                                                                                      |
| 14:58      | She had a repetitive task in Microsoft Excel                                                                     |
| 15:01      | where she came to me finally and she says,                                                                       |
| 15:03      | I've been doing this for a year where every month                                                                |
| 15:05      | I have to like, I have to search and replace                                                                     |
| 15:07      | these five different things and then delete these columns                                                        |
| 15:10      | and then do this other thing.                                                                                    |
| 15:12      | And I, she said, can we do something about that?                                                                 |
| 15:15      | And I was like, yeah.                                                                                            |
| 15:16      | And I don't know how to do macros in Microsoft Excel,                                                            |
| 15:19      | but I figured out enough, just enough to do that.                                                                |
| 15:23      | And now for the last like three or four years,                                                                   |
| 15:25      | she just has a macro.                                                                                            |
| 15:26      | She runs and it's done.                                                                                          |
| 15:27      | And that job that used to take her an hour                                                                       |
| 15:29      | takes her 10 minutes now.                                                                                        |
| 15:30      | It's great.                                                                                                      |
| 15:31      | That's the, that's the dream.                                                                                    |
| 15:33      | Yeah.                                                                                                            |
| 15:34      | And I really think that when you first get into this,                                                            |
| 15:36      | if you're thinking about it,                                                                                     |
| 15:38      | at the beginning you may, you know,                                                                              |
| 15:40      | that may be a losing equation that time spent                                                                    |
| 15:43      | versus time saved as you kind of get up to speed.                                                                |
| 15:46      | But the, the benefit of it is once you start learning                                                            |
| 15:48      | automation tools, they, you know,                                                                                |
| 15:51      | you can quickly capitalise on it.                                                                                |
| 15:53      | You write a couple of AppleScripts and suddenly                                                                 |
| 15:55      | the third one is really easy to write.                                                                           |
| 15:58      | And that's one of the reasons why I talk so much on the show                                                     |
| 16:01      | about tools like [[Hazel]] and keyboard my show,                                                                     |
| 16:04      | because I feel like they really kind of                                                                          |
| 16:07      | make that on ramp easier and faster,                                                                             |
| 16:10      | because they do a lot of the stuff behind the scenes                                                             |
| 16:12      | that normally you would have to do an AppleScript                                                               |
| 16:15      | or some scripting language.                                                                                      |
| 16:17      | So I think that's a great way to start to, you know,                                                             |
| 16:20      | pay somebody for one of these third party tools.                                                                 |
| 16:23      | And, you know, then the time you spend will be less.                                                             |
| 16:27      | And in some ways you'll be able to do things with those tools                                                    |
| 16:29      | you couldn't do with AppleScript anyway.                                                                        |
| 16:31      | But it's okay to lose time when you first go down this road                                                      |
| 16:36      | because in the long run you'll be amazed at how much it helps.                                                   |
| 16:40      | Yeah, I mean, there is an initial investment                                                                     |
| 16:42      | if you've never used the tools before.                                                                           |
| 16:44      | There's no doubt about it.                                                                                       |
| 16:46      | Generally, even if the investment doesn't quite pay off,                                                         |
| 16:50      | I feel like the secret to getting into user automation                                                           |
| 16:53      | is to find a really, not necessarily a difficult problem,                                                        |
| 16:58      | but find a place where you are hemorrhageing time.                                                                |
| 17:01      | And you're like, all right, I have to do this now.                                                               |
| 17:05      | Because that's what happened with me is, you know,                                                               |
| 17:07      | back in the 90s is I cannot keep sending out rejection letters                                                   |
| 17:15      | one at a time.                                                                                                   |
| 17:16      | I can't do it, right?                                                                                            |
| 17:17      | Like make a new message, paste in the form letter text,                                                          |
| 17:20      | go over, find the next person, mark them, copy their email,                                                      |
| 17:23      | switch back to the email client, paste it in, copy their name,                                                   |
| 17:26      | switch back to the message, paste it in, right?                                                                  |
| 17:28      | Like it was a 15-step process                                                                                    |
| 17:31      | and you had to do it for 30 or 50 times, right?                                                                  |
| 17:34      | And for me, that's like, I think that is a really good trigger,                                                  |
| 17:38      | which is this is so odious that now is the time                                                                  |
| 17:43      | to learn how to fix this, right?                                                                                 |
| 17:45      | Whatever that problem is.                                                                                        |
| 17:46      | And it could be a simple solution, but like,                                                                     |
| 17:48      | I feel like that's a great way to set down the path is,                                                          |
| 17:51      | yes, it may take you a long time to figure this out,                                                             |
| 17:53      | but it's just odious enough that you have to do it.                                                              |
| 17:58      | You have to stop.                                                                                                |
| 17:59      | Like there's got to be a better way.                                                                             |
| 18:01      | Like it's an infomercial or something, right?                                                                    |
| 18:03      | Like help me use your automation.                                                                                |
| 18:05      | You got to save me here.                                                                                         |
| 18:06      | And that's the one that's going to push you over the edge.                                                       |
| 18:09      | Yeah.                                                                                                            |
| 18:10      | And the other big benefit is once you get under your belt                                                        |
| 18:12      | and understanding of what you can do with automation,                                                            |
| 18:15      | suddenly you start seeing all sorts of places                                                                    |
| 18:17      | where you can use those tools.                                                                                   |
| 18:19      | Right.                                                                                                           |
| 18:20      | Like just earlier today, I was doing something                                                                   |
| 18:22      | and then I realised I actually need to send an email                                                             |
| 18:25      | every time this task comes up in OmniFocus.                                                                      |
| 18:27      | And it's like, okay, so I need to send emails like,                                                              |
| 18:30      | hang on a minute, [[URL Schemes]] or mail to link.                                                                   |
| 18:33      | I can do that.                                                                                                   |
| 18:34      | So make it one tap.                                                                                              |
| 18:35      | It opens the email and bam, done.                                                                                |
| 18:37      | It's like, oh, wow.                                                                                              |
| 18:38      | Okay.                                                                                                            |
| 18:39      | I was expecting to write an AppleScript for this or whatever.                                                   |
| 18:41      | I was going to do an Omni Automation.                                                                            |
| 18:43      | It's like, no, no, no, no, no.                                                                                   |
| 18:44      | Simplify.                                                                                                        |
| 18:45      | They sing rows.                                                                                                  |
| 18:46      | Simplify it.                                                                                                     |
| 18:47      | And I did, which is great.                                                                                       |
| 18:50      | This episode of The Automators is brought to you by LinkedIn Jobs.                                               |
| 18:53      | Just go to linkedin.com/automators to post a job for free.                                                 |
| 18:58      | Today, many small business owners are busier than ever.                                                          |
| 19:01      | Time spent searching for and interviewing the wrong candidates                                                   |
| 19:04      | for a job opening could be time better spent growing a business.                                                 |
| 19:08      | That's why LinkedIn Jobs has made it easier to get the candidates                                                |
| 19:11      | worth interviewing faster and it's free.                                                                         |
| 19:14      | Hiring the right person for a small company is so important.                                                     |
| 19:18      | Just think about the culture fit.                                                                                |
| 19:20      | If you've got a company that is five people,                                                                     |
| 19:23      | one person represents 20% of that culture.                                                                       |
| 19:26      | It's a huge deal and you need to get the right person.                                                           |
| 19:29      | So create a job post in minutes at LinkedIn Jobs                                                                 |
| 19:32      | to reach your network and beyond to the world's largest                                                          |
| 19:35      | professional network of over 750 million people.                                                                 |
| 19:39      | Focus on candidates with skills and experience you need.                                                         |
| 19:42      | Use screening questions to get your role in front                                                                |
| 19:45      | of only the most qualified people.                                                                               |
| 19:47      | Then use the simple tools on LinkedIn Jobs to quickly filter                                                     |
| 19:51      | and prioritise who you'd like to interview and hire.                                                             |
| 19:54      | LinkedIn Jobs helps you find the candidate worth interviewing faster.                                            |
| 19:58      | Did you know every week nearly 40 million job seekers visit LinkedIn?                                            |
| 20:02      | Post your job for free at LinkedIn.com/automators.                                                         |
| 20:07      | That's LinkedIn.com/automators to post your job for free                                                   |
| 20:10      | and check it out today.                                                                                          |
| 20:12      | Terms and conditions do apply and are thanks to LinkedIn Jobs                                                    |
| 20:15      | for their support of the automators and all of Relay FM.                                                         |
| 20:20      | What's in your tool belt these days when you want to do some automation?                                         |
| 20:23      | I know that you do stuff on mobile and also on the Mac.                                                          |
| 20:27      | What are your tools?                                                                                             |
| 20:29      | Yeah.                                                                                                            |
| 20:30      | Well, on the Mac, so I spend most of my days at the Mac,                                                         |
| 20:34      | although when I'm writing in the backyard or basically when I'm in the house,                                    |
| 20:38      | I'm generally on the iPad.                                                                                       |
| 20:40      | And I do have a bunch of shortcut stuff that I built.                                                            |
| 20:44      | But at my Mac, it's a broader selection.                                                                         |
| 20:47      | There's some of those off-the-shelf tools that you mentioned                                                     |
| 20:50      | that's kind of codeless or it can be codeless that are really great.                                             |
| 20:55      | They're not just baby tools for people who don't know how to write scripts.                                      |
| 20:59      | They're so good and make me not have to write a script, please.                                                  |
| 21:03      | So [[Hazel]], I am using [[Keyboard Maestro]].                                                                           |
| 21:09      | I use quite a bit.                                                                                               |
| 21:10      | I bought a [[Stream Deck]].                                                                                          |
| 21:12      | Hi, everybody.                                                                                                   |
| 21:14      | I bought a [[Stream Deck]].                                                                                          |
| 21:15      | I bought a mini.                                                                                                 |
| 21:16      | It's only got six buttons on it.                                                                                 |
| 21:17      | Okay, let's get asked.                                                                                           |
| 21:18      | How many buttons does this got?                                                                                  |
| 21:19      | Six.                                                                                                             |
| 21:20      | I was very much like I don't see the point of the [[Stream Deck]] for a very long time.                              |
| 21:24      | And I finally was like, all right, I sort of see it,                                                             |
| 21:26      | but I'm not buying one of those with lots of buttons.                                                            |
| 21:28      | So I got the little one.                                                                                         |
| 21:29      | And that has driven me into some more [[Keyboard Maestro]] stuff                                                     |
| 21:32      | because that's the best way to do that.                                                                          |
| 21:33      | You guys have an excellent episode about it                                                                      |
| 21:35      | that people can listen to if they haven't already.                                                               |
| 21:37      | I enjoyed that episode a lot, gave me a lot of ideas.                                                            |
| 21:40      | But that got me even more time spent in [[Keyboard Maestro]].                                                        |
| 21:45      | Honestly, the number one automation.                                                                             |
| 21:50      | Well, no, actually, there are two other ones.                                                                    |
| 21:52      | It's not quite automation, but I want to put in a plug for [[SwiftBar]],                                            |
| 21:56      | which is a menu bar utility.                                                                                     |
| 21:58      | And related to it, it's basically a follow on of a product called Bit Bar                                        |
| 22:03      | that now is called something else.                                                                               |
| 22:05      | I can't even remember what it's called now.                                                                      |
| 22:07      | But there are a couple of these free utilities out there.                                                        |
| 22:09      | And what they do is they run scripts and put things in your menu bar.                                            |
| 22:14      | So it's not quite automation, but it kind of is.                                                                 |
| 22:16      | And I use that all the time.                                                                                     |
| 22:19      | I've got like a script that reads the data file from my weather station                                          |
| 22:23      | and puts the current temperature and the temperature trend.                                                      |
| 22:25      | And if it's raining and stuff up in my menu bar,                                                                 |
| 22:27      | I've got one for the quality of the air outside and whether it's good or bad.                                    |
| 22:32      | How many people are listening to the Relay FM live stream?                                                       |
| 22:35      | I've got one of those.                                                                                           |
| 22:36      | That's actually pretty fun when I'm doing upgrade or lift off.                                                   |
| 22:39      | I see that there.                                                                                                |
| 22:40      | So I am using that using my sort of script tools.                                                                |
| 22:45      | And that's a real hodgepodge too.                                                                                |
| 22:47      | I've got plugins for Bit Bar and [[SwiftBar]] that are like,                                                        |
| 22:51      | I've got Python and PHP and shell scripting and AppleScript even,                                                |
| 22:57      | where it's just running an OSA script command.                                                                   |
| 23:02      | I literally have an AppleScript file in there that runs AppleScript.                                              |
| 23:07      | It's kind of amazing.                                                                                            |
| 23:08      | But the number one thing is Automator.                                                                           |
| 23:10      | And I'm working on my Mac OS Monterey review.                                                                    |
| 23:14      | And we're all very excited that Shortcuts is coming to Monterey.                                                 |
| 23:19      | But what I really am excited about is that they are kind of going to                                             |
| 23:24      | replace ultimately Automator and Automator's place in Mac OS                                                     |
| 23:28      | because it's so important.                                                                                       |
| 23:30      | And I've written about it a bunch.                                                                               |
| 23:32      | But the integration that Automator has been given into Mac OS,                                                   |
| 23:38      | especially into the Finder, while I wish it was even more than it is,                                            |
| 23:42      | is still pretty amazing.                                                                                         |
| 23:44      | And so I have a lot of Automator actions that really aren't.                                                     |
| 23:47      | You talked about this with Dr. Drang on Mac Power Users, David.                                                  |
| 23:53      | So I'm repeating what he said.                                                                                   |
| 23:55      | But it is this magic moment of if you can put something in an Automator action,                                  |
| 24:00      | you can right click on a file in the Finder.                                                                     |
| 24:03      | And you can act upon that file or folder with an Automation of your choosing.                                    |
| 24:12      | And I use that every day because I have wired a whole bunch of things,                                           |
| 24:17      | most of which are like AppleScripts or shell scripts or AppleScripts that run shell scripts,                       |
| 24:23      | which is another great thing about the stackability of all the Automation here is that,                          |
| 24:27      | and even when Shortcuts comes in, you can write an AppleScript that runs a Shortcut                              |
| 24:30      | that runs a shell script that runs a Perl script.                                                                 |
| 24:32      | You can stack them all and use the pieces that serve you.                                                        |
| 24:36      | And so I have, for all my podcast stuff, I have these tools that convert your files                              |
| 24:42      | and sync your files so you can build a podcast very quickly.                                                     |
| 24:46      | I've got one that uploads my podcast file when I'm done to the server                                            |
| 24:51      | and puts the URL on the clipboard.                                                                               |
| 24:54      | I have one that takes these Six Colors podcast that we do for members                                            |
| 24:58      | and uploads it and opens Mars at it, the blogging tool,                                                          |
| 25:03      | and creates the post and auto fills it with the standard output of that.                                         |
| 25:08      | I've got, you know, so I'm using Automator, again, not mostly for Automator.                                     |
| 25:14      | And I've actually taken to using a utility called Service Station,                                               |
| 25:19      | which is really nice because it basically will elevate your favourite automations                                 |
| 25:25      | and you can set filters about when they show up                                                                  |
| 25:28      | and it puts it right in the Control-Click, Right-Click menu in the Finder                                        |
| 25:33      | instead of down under the Services submenu or Quick Action submenu.                                              |
| 25:38      | So it's a level of complexity, but also a level of kind of it's much easier that way.                            |
| 25:45      | And you can say, I only want this for MP3 files or I only want this for MP4 files                                |
| 25:49      | or I want this for all audio files.                                                                              |
| 25:51      | So that's a nice little extension of that, but you don't have to use it.                                         |
| 25:54      | It's just, it makes it a little bit faster for me.                                                               |
| 25:56      | So I've been using that.                                                                                         |
| 25:57      | Yeah, and I'll second the nomination on that app.                                                                |
| 26:00      | That's a great app.                                                                                              |
| 26:01      | It started out a little wonky and he really got it tuned up for the last year or two.                            |
| 26:06      | David, you have to stop keeping secrets from me.                                                                 |
| 26:08      | I didn't know about this app.                                                                                    |
| 26:09      | It's in the show notes, everybody.                                                                               |
| 26:11      | Yeah, I mean, it's in the show notes and I'm installing it right now because I need this.                        |
| 26:16      | So this is the thing that's a little bit ridiculous is that Apple,                                               |
| 26:21      | so Apple has led to put automations in the Quick Actions or Services submenus                                    |
| 26:26      | when you right-click on a file in the Finder,                                                                    |
| 26:28      | but apps can put things at the top level.                                                                        |
| 26:30      | And so like [[Dropbox]] spams like eight things in that.                                                             |
| 26:34      | But that's the brilliance of service station is service station basically says,                                  |
| 26:38      | okay, you can put your automated directions inside me and I'll put them there.                                   |
| 26:42      | It's like, yes, yes, please.                                                                                     |
| 26:44      | And you can also put like apps in there.                                                                         |
| 26:47      | So I've got Photoshop in there and I can right-click on a file and choose Photoshop                              |
| 26:51      | and it will open it in Photoshop.                                                                                |
| 26:53      | So there's non-scripting things that that's just a nice Mac utility.                                             |
| 26:57      | And then I'll throw out two other things that I've been doing.                                                   |
| 27:00      | One of them is just straight-up [[AppleScript]].                                                                    |
| 27:04      | I have some just straight-up [[AppleScript\|AppleScripts]] that are great that I use all the time.                               |
| 27:07      | I have one for building.                                                                                         |
| 27:10      | I do a lot of podcasts, as you said, and I built a system where I've got a folder                                |
| 27:16      | that is full of zip files of basically templates of my podcasts.                                                 |
| 27:22      | It's got like, in the zip file is the logic file and the folders the way I want them                             |
| 27:27      | and the logic file for that podcast set up the way I want it.                                                    |
| 27:30      | And then I have a script that looks in that folder,                                                              |
| 27:34      | provides me with a list of what's in that folder.                                                                |
| 27:37      | I pick one and it unzips it and moves it to the desktop.                                                         |
| 27:41      | And then it does a few other things.                                                                             |
| 27:43      | It actually loads the RSS feed for that podcast, sees what episode is the most recent one,                       |
| 27:48      | renames a bunch of stuff to be the next episode.                                                                 |
| 27:51      | So it's already named the right number and everything.                                                           |
| 27:54      | Stuff like that.                                                                                                 |
| 27:56      | For date-based ones, it does it with the date.                                                                   |
| 27:58      | So the Six Colours podcast, it dates it the day that I do it.                                                     |
| 28:01      | It's just a little thing, but it's just something I built because I realised, again,                             |
| 28:07      | I realised that every time I was doing a new episode of a podcast,                                               |
| 28:11      | I had to fish around for the template and then unzip it and move it to the desktop                               |
| 28:16      | and rename it and look up what the number is.                                                                    |
| 28:19      | And now I don't do any of those things anymore.                                                                  |
| 28:21      | So I'm doing that a lot.                                                                                         |
| 28:22      | And then the last thing is I've been learning Python,                                                            |
| 28:25      | which is kind of wild and out there,                                                                             |
| 28:27      | but it's like I thought I wanted to learn a scripting language because                                           |
| 28:31      | I don't really know any scripting language well except for AppleScript.                                          |
| 28:34      | You can't really ever know AppleScript well because essentially the dialect,                                     |
| 28:38      | you have to speak changes for every single different app that you script.                                        |
| 28:42      | And I was doing a lot of things in AppleScript that were totally not necessary                                   |
| 28:48      | because I knew AppleScript.                                                                                      |
| 28:50      | So if you're doing loading web content, there are better tools.                                                  |
| 28:54      | And every tool does looping and basic logic.                                                                     |
| 29:00      | And yet I was doing these things in AppleScript and I thought,                                                   |
| 29:03      | this has got to stop.                                                                                            |
| 29:04      | I need to perform an intervention on myself and try something new.                                               |
| 29:07      | And so I took that newsletter script that automatically generates the Six Colors                                 |
| 29:10      | newsletter on a weekly basis and I redid it in Python                                                            |
| 29:16      | because I thought this is a script that doesn't need to be in AppleScript.                                       |
| 29:20      | And then I could put it up on my web server and just have it run automatically up there.                         |
| 29:24      | And I don't have to worry that the Mac that it's running on is running every week.                               |
| 29:28      | And I did that and that was really instructive.                                                                  |
| 29:31      | And I've written a bunch of other Python scripts for my,                                                         |
| 29:33      | I have a little weather station in my backyard and I use a program called WeatherCat,                            |
| 29:37      | which is like the Mac client for that.                                                                           |
| 29:39      | And it has these data files and it makes very ugly graphics.                                                     |
| 29:42      | And I've always been thinking like, could I make better graphics?                                                |
| 29:45      | And so now I've written a Python script that like walks through the data file,                                   |
| 29:49      | which is scary, but it totally works of WeatherCat                                                               |
| 29:53      | and generates the charts that I want to see.                                                                     |
| 29:56      | And that's been amazing too.                                                                                     |
| 29:58      | So that's my new, my new toy is learning how to use Python                                                       |
| 30:02      | and have Dr. Drang tell me all the ways that I'm doing Python wrong in a kind way.                               |
| 30:06      | He's a very kind person, but it's definitely like,                                                               |
| 30:09      | he actually, this is a great tip for anybody who's communicating with somebody who's starting out,               |
| 30:13      | which is I showed him my script and he said, this works.                                                         |
| 30:17      | If you wanted it to be more Python-y, you could do it this way.                                                  |
| 30:22      | But that was, I was so impressed with that because other people on the internet would be like,                   |
| 30:27      | that's wrong, but it works, but it's wrong.                                                                      |
| 30:30      | And he was like, no, it's just not Python people do it a different way.                                          |
| 30:33      | And that was very educational.                                                                                   |
| 30:35      | So anyway, that's my whole set of tools at this point.                                                           |
| 30:39      | It's a lot, but like I keep coming back to the fact that Automator is at the heart of a lot of it,               |
| 30:44      | not because Automator is great because it's really not, it's very outmoded.                                      |
| 30:47      | Shortcuts is going to be so much better.                                                                         |
| 30:49      | But because Apple has opened that door for you to put whatever you want inside an Automator action               |
| 30:57      | and put it in the Finder and act on all your files and on the Mac, that is so powerful.                          |
| 31:01      | You can put any script in as a payload inside Automator,                                                         |
| 31:05      | and then suddenly Automator is actually quite powerful.                                                          |
| 31:08      | It's a Trojan horse, right?                                                                                      |
| 31:09      | And it's silly.                                                                                                  |
| 31:10      | I do have a few cases where like my charts that I do every quarter for Apple's financial results on Six Colors,  |
| 31:18      | I have a chart and it's like 20 charts that come out of the numbers spreadsheet.                                 |
| 31:23      | And I'm doing the charting in numbers.                                                                           |
| 31:25      | I'm not doing the charting using Python or anything like that.                                                   |
| 31:28      | It's just in numbers.                                                                                            |
| 31:29      | Numbers makes pretty charts.                                                                                     |
| 31:30      | That's why I'm using numbers.                                                                                    |
| 31:31      | And my Automator action for that is not an AppleScript.                                                         |
| 31:34      | It's an Automator action.                                                                                        |
| 31:35      | And the reason is Automator because I found like the best way to do it was to write a script to export this PDF. |
| 31:43      | The only way to get high quality files and images out of numbers is to use PDF.                                  |
| 31:48      | Exports a PDF and then it uses Automator's tool to generate an image from a PDF.                                 |
| 31:55      | And then it goes to another AppleScript that does the rest of the work.                                         |
| 31:58      | And that's a case where I actually thought, you know, the easiest way to do this is just split my script in two  |
| 32:04      | and put an Automator action in the middle.                                                                       |
| 32:06      | And so I have to give Automator credit.                                                                          |
| 32:08      | There are times when I use those Automator actions.                                                              |
| 32:10      | I wish there were more of them.                                                                                  |
| 32:11      | Shortcuts has a lot more of them.                                                                                |
| 32:13      | But you're right, David, most of them are Trojan horses.                                                         |
| 32:16      | Most of them are essentially Automator action is run script.                                                     |
| 32:20      | The end.                                                                                                         |
| 32:21      | I want to talk a bit about the idea of Python as your project.                                                   |
| 32:26      | Because a lot of people do write in asking where, you know, if they want to go to the next level,                |
| 32:31      | what should they do?                                                                                             |
| 32:32      | Often my advice to people is JavaScript.                                                                         |
| 32:35      | Because I feel like JavaScript is, you know, applicable not only on the Mac,                                     |
| 32:39      | but there's a lot of stuff on iOS and iPad OS that uses JavaScript.                                              |
| 32:44      | The Omni Automation is all Java based.                                                                           |
| 32:47      | I hadn't really thought of recommending Python.                                                                  |
| 32:50      | Are you already fluent with JavaScript or did you actively choose Python over JavaScript?                        |
| 32:57      | So going back to the idea that I'm not a programmer, right?                                                      |
| 33:00      | Yeah.                                                                                                            |
| 33:01      | What I have done is botched things together.                                                                     |
| 33:04      | And between building the new version of Six Colours in WordPress, which gave me a lot of time.                    |
| 33:10      | I already knew a little bit of PHP, but it gave me a lot of time.                                                |
| 33:13      | The PHP I knew was very much like on my WeatherStation page, I use PHP.                                          |
| 33:17      | Because again, the WeatherStation app is kind of dumb.                                                           |
| 33:20      | I was like setting variables and then using PHP to say, well, if it's cold, make it blue.                        |
| 33:24      | And if it's hot, make it red, right?                                                                             |
| 33:26      | Stuff like that.                                                                                                 |
| 33:27      | But building a WordPress theme, I was like, okay.                                                                |
| 33:30      | So I learned a lot about PHP and PHP validation and all this sort of stuff.                                      |
| 33:34      | And I had to learn GitHub as a part of that.                                                                     |
| 33:37      | I also want another project I did last year.                                                                     |
| 33:40      | I mentioned having something in my menu bar for air quality.                                                     |
| 33:44      | Last year, I built an iOS 15 widget to show air quality or 14 widget.                                            |
| 33:51      | 14? 13? Where are we now?                                                                                        |
| 33:53      | 14. The new widgets.                                                                                             |
| 33:55      | And there's the Scriptable app.                                                                                  |
| 33:57      | It lets you write widgets in JavaScript.                                                                         |
| 34:00      | And I found a widget that was not what I wanted, but it was doing sort of what I wanted.                         |
| 34:03      | And I massively expanded on that and got some help from people using,                                            |
| 34:08      | basically by posting it on GitHub and people made some changes                                                   |
| 34:11      | and they taught me a bunch of stuff about JavaScript.                                                            |
| 34:13      | So I spent a lot of time building that widget for my iPad and my iPhone using JavaScript.                        |
| 34:19      | And so I had this and then my son is going to be taking AP computer principles or something in the fall          |
| 34:27      | and they're going to write everything in Python.                                                                 |
| 34:29      | And I thought, oh, Python.                                                                                       |
| 34:31      | Well, I'm excited that he's doing that and I would like to know more about it.                                   |
| 34:34      | So I bought a book about Python.                                                                                 |
| 34:36      | The reason I ended up spending a lot of time in Python and not JavaScript,                                       |
| 34:40      | which I think is eminently reasonable because you're right, David,                                               |
| 34:43      | I think it's more applicable to a lot of areas                                                                   |
| 34:47      | and you can even script applications with it on Mac OS if you want to.                                           |
| 34:52      | I went with Python, honestly, because Python made more sense to me.                                              |
| 34:56      | I spent enough time with PHP and JavaScript that I had this moment that was like,                                |
| 35:00      | this must be how programmers feel, where I have opinions about languages.                                        |
| 35:05      | But after spending all that time with JavaScript,                                                                |
| 35:07      | if I don't see another semicolon until the day I die, it'll be too soon.                                         |
| 35:12      | Literally, when I started seeing Python scripts and understanding how Python                                     |
| 35:17      | did everything with indentation and not having mandatory semicolons and stuff like that,                         |
| 35:21      | I was like, oh, I like this better.                                                                              |
| 35:23      | That was it.                                                                                                     |
| 35:24      | It was literally, this makes sense to me.                                                                        |
| 35:26      | I like it better, so I'm going to explore it.                                                                    |
| 35:29      | I would like to think that because all of these scripting languages are similar.                                 |
| 35:34      | Perl, I did learning Perl and programming Perl in the 90s at one point,                                          |
| 35:39      | so I don't remember any of it, but I did go down that path a little bit.                                         |
| 35:43      | Perl, JavaScript, Python, they all have so many commonalities                                                    |
| 35:50      | and also are so different from AppleScript in some ways, right?                                                 |
| 35:54      | Yeah.                                                                                                            |
| 35:55      | That I feel like if I needed to do something in JavaScript now,                                                  |
| 35:58      | I could, I would have to change the idiom                                                                        |
| 36:00      | and it would be a little bit of a learning curve,                                                                |
| 36:02      | but I feel like just taking a deeper dive on Python has got me to a place                                        |
| 36:08      | where I could cross train and go back to doing JavaScript again,                                                 |
| 36:12      | but in the meantime, I'm just kind of having fun using Python                                                    |
| 36:16      | and it feels clearer to me and I needed to pick something                                                        |
| 36:20      | and so this is the one that I chose.                                                                             |
| 36:22      | I think you made a really good choice of Python                                                                  |
| 36:24      | because JavaScript is great if what you're learning to do is upskill                                             |
| 36:27      | in doing things like building [[Drafts]] automations,                                                                |
| 36:30      | using Omni Automation, creating Scriptable widgets,                                                                |
| 36:34      | maybe even JavaScript for automation.                                                                            |
| 36:36      | Probably don't just stick with AppleScript for that.                                                            |
| 36:38      | JavaScript for automation is kind of broken on iOS.                                                              |
| 36:40      | Yeah, that's my understanding.                                                                                   |
| 36:43      | But if you want a script that you can throw on a server                                                          |
| 36:46      | and have do stuff, you could write it in JavaScript, sure,                                                       |
| 36:50      | but you're going to have a much better time writing that in Python                                               |
| 36:53      | because you'll have your requirements.txt file,                                                                  |
| 36:55      | which tells your program which libraries do you need.                                                            |
| 37:00      | So for example, for your newsletter,                                                                             |
| 37:02      | I'm guessing you're using a service                                                                              |
| 37:03      | and you might even have a library that can talk to the service                                                   |
| 37:05      | where you can then say, hey, and just send all this HTML                                                         |
| 37:08      | over there now, please, at the end.                                                                              |
| 37:11      | You're so nice to think that that's what it is.                                                                  |
| 37:13      | I mean, I'm just assuming the best here, Jason.                                                                  |
| 37:16      | I'm actually using Mailchimp's RSS delivery system                                                               |
| 37:19      | and I build a one-off single item RSS feed once a week                                                           |
| 37:25      | that is my entire newsletter and then Mailchimp looks at it                                                      |
| 37:29      | and goes, oh, there's a new item and puts it in my template,                                                     |
| 37:32      | which is basically just a wrapper.                                                                               |
| 37:34      | So I'm cheating there.                                                                                           |
| 37:36      | That's another way that I botched this thing together,                                                           |
| 37:38      | but for now, that's what I'm doing.                                                                              |
| 37:40      | Well, I'm just going to take a quick Google.                                                                     |
| 37:42      | That's exactly the way I'd cobble it together, Jason,                                                            |
| 37:45      | something like that.                                                                                             |
| 37:47      | I mean, I'm not sure creating an RSS feed                                                                        |
| 37:49      | is the easiest thing to do in any language.                                                                      |
| 37:52      | I mean, a JSON feed would be easier,                                                                             |
| 37:54      | especially as your name's Jason.                                                                                 |
| 37:56      | So you would think it would be easier,                                                                           |
| 37:58      | but there is a Mailchimp marketing API                                                                           |
| 38:00      | with an official client library for Python,                                                                      |
| 38:03      | which I think you can get with PIP,                                                                              |
| 38:05      | install Mailchimp or something.                                                                                  |
| 38:07      | At some point, I am going to look into that,                                                                     |
| 38:09      | but my first thought about automating was literally just like,                                                   |
| 38:12      | oh, could I do it with RSS?                                                                                      |
| 38:14      | Because then I can just write a script and spew it out                                                           |
| 38:16      | and put it on a server and this will work.                                                                       |
| 38:18      | And the answer is it totally does work.                                                                          |
| 38:20      | But yes, I think in the long run,                                                                                |
| 38:22      | it's probably not what I need to do.                                                                             |
| 38:24      | In fact, I would say it's actually kind of illogical                                                             |
| 38:26      | that I'm using Python because the two apps I write on iOS                                                        |
| 38:29      | are [[Drafts]] and 1Writer,                                                                                        |
| 38:31      | which use JavaScript as their automation tools,                                                                  |
| 38:34      | and I would probably be served to write some tools there.                                                        |
| 38:37      | I will say, we haven't talked a lot about iOS automation here,                                                   |
| 38:41      | this is my great frustration with iOS automation right now,                                                      |
| 38:45      | is that because there's no platform standard,                                                                    |
| 38:48      | everybody's implementing their own thing.                                                                        |
| 38:51      | And what I have learned, for example,                                                                            |
| 38:54      | is that although that you could use Taio                                                                          |
| 38:58      | or 1Writer or [[Drafts]] to do automation                                                                          |
| 39:03      | in your writing tool using JavaScript,                                                                           |
| 39:06      | you can't use the same scripts in any of them                                                                    |
| 39:08      | because they all have their own specific JavaScript implementation.                                              |
| 39:12      | And it drives me up a tree                                                                                       |
| 39:14      | because this is where I really want Apple, ultimately,                                                           |
| 39:18      | I want Apple to on macOS and iOS and iPadOS                                                                      |
| 39:22      | to say, all right, if you need more than shortcuts,                                                              |
| 39:27      | here's the scripting language to use                                                                             |
| 39:30      | and have it be everybody go, okay, we'll use that.                                                               |
| 39:33      | Because right now, I could switch to JavaScript                                                                  |
| 39:36      | and figure it out,                                                                                               |
| 39:38      | but the fact that I can't take my 1Writer script                                                               |
| 39:41      | and run it in Taio or in [[Drafts]],                                                                                  |
| 39:44      | because they're different,                                                                                       |
| 39:45      | their JavaScript implementation is different.                                                                    |
| 39:48      | They're using different things to do user interface                                                              |
| 39:51      | and to describe what the page contents are.                                                                      |
| 39:55      | And it's so frustrating.                                                                                         |
| 39:57      | So I've kind of punted on that for now                                                                           |
| 39:59      | because my tools over there are okay                                                                             |
| 40:02      | and I can sort of hack together enough to do what I want to do.                                                  |
| 40:05      | And because I'm really hoping that I don't need to learn                                                         |
| 40:08      | or standardise on one app                                                                                        |
| 40:10      | just because I don't want to learn how to script the other app.                                                  |
| 40:12      | That seems bad, too.                                                                                             |
| 40:14      | And I also think Rose makes an excellent point.                                                                  |
| 40:16      | I mean, you are in the business of publishing on the web                                                         |
| 40:20      | and you're dealing with servers a lot.                                                                           |
| 40:22      | And I think Python is probably far superior to JavaScript                                                        |
| 40:26      | for all that automation.                                                                                         |
| 40:28      | Yeah, I mean, I've done JavaScript.                                                                              |
| 40:30      | I mean, don't get me wrong.                                                                                      |
| 40:32      | Like I said, I've got a [[SwiftBar]] plugin                                                                         |
| 40:34      | that's written in JavaScript                                                                                     |
| 40:36      | and one that's written in PHP,                                                                                   |
| 40:38      | which is like, I mean, right?                                                                                    |
| 40:40      | Because then you're doing Node and you're right.                                                                 |
| 40:43      | You can do it.                                                                                                   |
| 40:45      | And I did enough.                                                                                                |
| 40:47      | I just know enough to be dangerous, essentially, to myself.                                                      |
| 40:50      | But yeah, the Python thing seemed like a cleaner kind of solution                                                |
| 40:54      | for the scripts on the server,                                                                                   |
| 40:56      | which that was my really primary trigger                                                                         |
| 40:58      | was that newsletter and thinking I don't really want                                                             |
| 41:00      | to have to rely on my Mac Mini to stay running                                                                   |
| 41:03      | and to be connected to my server to drop that file there                                                         |
| 41:06      | so that the newsletter goes out.                                                                                 |
| 41:08      | Plus, this is probably way too hacky.                                                                            |
| 41:11      | And I ought to do something a little bit more straightforward                                                    |
| 41:14      | and modern using Python.                                                                                         |
| 41:16      | But you're right, still got to do more work there                                                                |
| 41:18      | because it's still outputting to an RSS file.                                                                    |
| 41:21      | But now it's doing it on the server that the file is hosted on,                                                  |
| 41:24      | so I feel like it's a better...                                                                                  |
| 41:26      | It's less points of failure.                                                                                     |
| 41:28      | That seems like a good idea.                                                                                     |
| 41:30      | Always a good start.                                                                                             |
| 41:55      | TextExpander snippets allow you to maximise your time                                                            |
| 42:00      | while still customising and personalising your messages.                                                         |
| 42:03      | TextExpander can be used in any platform, any app,                                                               |
| 42:06      | anywhere you type.                                                                                               |
| 42:08      | Take your time back and increase your productivity.                                                              |
| 42:10      | I use TextExpander from all sorts of things,                                                                     |
| 42:12      | whether it's typing the right email address,                                                                     |
| 42:14      | whether I'm at work or at home,                                                                                  |
| 42:16      | or just simply making sure that this long paragraph                                                              |
| 42:19      | that I need to type several times a day                                                                          |
| 42:21      | actually has everything in it that I need.                                                                       |
| 42:23      | It boosts my productivity by really just simplifying                                                             |
| 42:26      | what I need to do.                                                                                               |
| 42:27      | And as a listener of Automated,                                                                                  |
| 42:29      | you can get 20% off your first year.                                                                             |
| 42:31      | Visit textexpander.com/podcast                                                                             |
| 42:33      | to learn more about TextExpander.                                                                                |
| 42:35      | That's textexpander.com/podcast.                                                                           |
| 42:38      | Our thanks to TextExpander from Smile                                                                            |
| 42:40      | for their support of this show and Relay FM.                                                                     |
| 42:43      | All right, so before the break you had mentioned                                                                 |
| 42:46      | that you do some work and have some frustration                                                                  |
| 42:48      | with automation on mobile devices,                                                                               |
| 42:51      | I guess I'd first start out with what are the tools                                                              |
| 42:53      | you're using to automate on iPhone and iPad                                                                      |
| 42:55      | because I do know you use your iPad quite a bit.                                                                 |
| 42:58      | I do.                                                                                                            |
| 42:59      | Other than that script that I did in JavaScript                                                                  |
| 43:02      | with the help of a bunch of people using Scriptable,                                                             |
| 43:07      | most of the stuff that I'm doing is just shortcuts.                                                              |
| 43:12      | And I try to just use shortcuts.                                                                                 |
| 43:15      | And in fact, my number one required automation feature                                                           |
| 43:19      | in any app that I would use to do writing on iOS                                                                 |
| 43:23      | is can I run a shortcut from here, you know,                                                                     |
| 43:29      | and pass the text of the thing I'm writing                                                                       |
| 43:32      | so that I can do something with it.                                                                              |
| 43:34      | And then number two is,                                                                                          |
| 43:35      | can I bind that to a keyboard shortcut, please?                                                                  |
| 43:37      | That's the next one is I also don't want to have to, like,                                                       |
| 43:41      | tap and then, or type and then tap or tap and then type                                                          |
| 43:44      | or whatever, I just kind of want to do                                                                           |
| 43:46      | Command Option S and send the file away.                                                                         |
| 43:50      | And the big ones that I built are, again,                                                                        |
| 43:56      | these are all of the same vein, right?                                                                           |
| 43:58      | Which is like, you did it that way?                                                                              |
| 43:59      | And I was like, well, that was the way that I could do it.                                                       |
| 44:01      | So I wanted to build a system.                                                                                   |
| 44:02      | I got tired of writing on the iPad                                                                               |
| 44:04      | and having to open up my web browser and go to my CMS                                                            |
| 44:07      | and say, make a new thing and then take the headline                                                             |
| 44:09      | that I had written in the document and paste that in                                                             |
| 44:11      | and then take the body text that I'd written in the document                                                     |
| 44:14      | and paste that in and then set up all the tags                                                                   |
| 44:17      | and do all this stuff and then press Preview or Publish, right?                                                  |
| 44:21      | I didn't want to do that anymore.                                                                                |
| 44:22      | Again, lots of steps.                                                                                            |
| 44:23      | I wanted to save time.                                                                                           |
| 44:25      | I didn't want to do that.                                                                                        |
| 44:26      | And on the Mac, I could write in Mars Edit.                                                                      |
| 44:29      | I did do some of this automation on the Mac too, ultimately,                                                     |
| 44:31      | so that I can post things out of [[BBEdit]].                                                                        |
| 44:33      | But on the iPad, I just, I didn't want to do it.                                                                 |
| 44:36      | Plus, it's iPad [[Safari]].                                                                                          |
| 44:37      | It's a little more ungainly, copy and paste,                                                                     |
| 44:39      | and you've got to move back and forth in multitasking                                                            |
| 44:42      | and iPad, which is not as flexible as it is on the Mac.                                                          |
| 44:47      | So I built a shortcut that takes the input from a text editor.                                                   |
| 44:53      | It started out as one writer,                                                                                    |
| 44:55      | although I've done a bunch of different ones,                                                                    |
| 44:57      | takes the input from the text editor,                                                                            |
| 45:00      | and then it parses it.                                                                                           |
| 45:03      | So like if there's a, it's marked down.                                                                          |
| 45:05      | So if there's an H1 tag, it takes that and says,                                                                 |
| 45:08      | that's the title and then take it out of the body                                                                |
| 45:11      | because it's not in the body, it's the title.                                                                    |
| 45:13      | And I do a couple of different link types for Six Colors.                                                        |
| 45:16      | I do, I do link posts that go to another place.                                                                  |
| 45:21      | I decided to standardise how I handle those                                                                      |
| 45:24      | so that if there's a link that's named one,                                                                      |
| 45:28      | you know, number one, the script says,                                                                           |
| 45:31      | oh, this is a link post.                                                                                         |
| 45:34      | That's the link you're going to link to in the CMS.                                                              |
| 45:37      | So I'm going to grab that.                                                                                       |
| 45:39      | And I'm going to, and then, and I know that this is a link post                                                  |
| 45:42      | and not a regular post.                                                                                          |
| 45:43      | So it's got a little bit of that going on                                                                        |
| 45:45      | where it's looking at what I wrote and saying,                                                                   |
| 45:47      | what kind of post is this?                                                                                       |
| 45:48      | Are there any links?                                                                                             |
| 45:49      | What is there a title?                                                                                           |
| 45:50      | There isn't a title that asks you what's the title.                                                              |
| 45:52      | And then it opens it in the CMS with everything already filled in.                                               |
| 46:00      | And it could post it live, but I,                                                                                |
| 46:02      | I don't trust it enough to do that.                                                                              |
| 46:03      | There are mistakes often enough, you know,                                                                       |
| 46:05      | even if it's one in every hundred,                                                                               |
| 46:06      | I don't want to post a thing that's wrong                                                                        |
| 46:08      | or broken or empty if I can help it.                                                                             |
| 46:11      | So that's my last little pre-flight thing.                                                                       |
| 46:13      | So it opens first movable type and now WordPress                                                                 |
| 46:16      | to that page in the editor.                                                                                      |
| 46:18      | And I can look at it, make sure it's okay,                                                                       |
| 46:20      | and press publish.                                                                                               |
| 46:21      | And then I'm done.                                                                                               |
| 46:22      | What's happening behind the scenes is that it's taking that document                                             |
| 46:26      | and it's formatting it as an XML file                                                                            |
| 46:30      | because it's using the XML RPC posting interface                                                                 |
| 46:33      | that's available on movable type and WordPress                                                                   |
| 46:36      | to communicate directly to the server and say,                                                                   |
| 46:39      | I have a new post for you.                                                                                       |
| 46:40      | This is the method that MarsEdit uses to talk to web,                                                            |
| 46:43      | to talk to blog servers.                                                                                         |
| 46:45      | I have a new post for you.                                                                                       |
| 46:46      | Here it is.                                                                                                      |
| 46:47      | Here are the tags or whatever.                                                                                   |
| 46:49      | Here's the title.                                                                                                |
| 46:50      | Here's the, these custom fields that you're using.                                                               |
| 46:53      | Here it is.                                                                                                      |
| 46:54      | And then it sends back an XML file saying got it.                                                                |
| 46:59      | And here's your post ID.                                                                                         |
| 47:01      | And then it reads that and then uses that post ID                                                                |
| 47:04      | to open the editor at the point where it's editing that post ID.                                                 |
| 47:09      | And I built this for movable type because guess what?                                                            |
| 47:11      | There are no movable type clients on iPadOS.                                                                     |
| 47:14      | It's a shocker of very, very old CMS.                                                                            |
| 47:19      | But it had that posting interface.                                                                               |
| 47:20      | And so I basically looked at what MarsEdit was doing                                                             |
| 47:23      | and thought, I could do that.                                                                                    |
| 47:24      | I could fake that in shortcuts.                                                                                  |
| 47:26      | And the same interface largely exists on WordPress.                                                              |
| 47:29      | It took me 20 minutes to convert that to WordPress                                                               |
| 47:34      | from movable type.                                                                                               |
| 47:36      | Thank goodness for standards.                                                                                    |
| 47:37      | That's a very, very old standard, but it totally works.                                                          |
| 47:40      | And as part of building that, I actually found a blog post                                                       |
| 47:42      | that was, it was a cached, it was no longer exists                                                               |
| 47:46      | on the actual web, cached blog post from somebody                                                                |
| 47:48      | who had written about this in like 2006                                                                          |
| 47:51      | about how to do an XMLRPC post for movable type.                                                                 |
| 47:56      | And I pinged him on Twitter and I basically said,                                                                |
| 47:59      | you're going to love this.                                                                                       |
| 48:00      | You're a post from 15 years ago,                                                                                 |
| 48:02      | solved the problem for me today.                                                                                 |
| 48:04      | And he was like, that's amazing.                                                                                 |
| 48:05      | I love it.                                                                                                       |
| 48:06      | But anyway, it's ridiculous and it totally works.                                                                |
| 48:08      | And that's what I use.                                                                                           |
| 48:09      | I write most of my posts for Six Colors on my iPad                                                               |
| 48:13      | and I post them using that shortcut.                                                                             |
| 48:15      | And I love it.                                                                                                   |
| 48:16      | And I've got some other shortcuts.                                                                               |
| 48:17      | I've got a shortcut for when I write an article on Macworld                                                      |
| 48:19      | that I want to link to where I can select the text in [[Safari]]                                                     |
| 48:22      | and run the shortcut from the share menu                                                                         |
| 48:24      | and it grabs the text out, turns it into markdown,                                                               |
| 48:27      | asks me for a title and puts that in that story type                                                             |
| 48:31      | with all the boxes checked right in WordPress.                                                                   |
| 48:33      | It's a variation on it.                                                                                          |
| 48:35      | It's a little simpler because it's not coming from a text editor.                                                |
| 48:38      | But those are the ones that I use for the most part.                                                             |
| 48:41      | Those are my two go-tos.                                                                                         |
| 48:42      | I've got some others, but like really,                                                                           |
| 48:45      | those are the ones that I use day in and day out                                                                 |
| 48:47      | is I wanted to build a posting interface for my blog                                                             |
| 48:50      | that didn't require a separate app                                                                               |
| 48:52      | that I could just shoot out from my text editor too.                                                             |
| 48:55      | And I've got a version that works with [[Drafts]]                                                                   |
| 48:57      | because once you get to that point, it's fairly easy.                                                            |
| 49:00      | As long as you've got an app willing to hand text off                                                            |
| 49:03      | to a shortcut, you can do that.                                                                                  |
| 49:05      | So can you just explain a little bit further                                                                     |
| 49:07      | on the first shortcut when you write your posts in?                                                              |
| 49:10      | Sure.                                                                                                            |
| 49:11      | What is your methodology to parse the text,                                                                      |
| 49:15      | title versus body versus tags versus whatever else                                                               |
| 49:19      | you're pulling out of that?                                                                                      |
| 49:21      | Oh, okay, David.                                                                                                 |
| 49:23      | This is one of those things where it's going to be                                                               |
| 49:25      | a bad AppleScript.                                                                                              |
| 49:27      | That's bad shortcuts.                                                                                            |
| 49:28      | That's okay. Me too, baby.                                                                                       |
| 49:29      | I use a regular expression match                                                                                 |
| 49:32      | to find if there is a level one tag                                                                              |
| 49:37      | and to take out, to grab the text that's after the level one.                                                    |
| 49:44      | And if there is one, then it does a regular expression                                                           |
| 49:48      | search and replace on the body to remove that line                                                               |
| 49:54      | because you don't have your title in the body                                                                    |
| 49:57      | and in the title, right?                                                                                         |
| 49:58      | You only have it in the title field.                                                                             |
| 50:00      | So it does that.                                                                                                 |
| 50:02      | Then it does, it's a series of regular expression matches.                                                       |
| 50:04      | So then it looks and sees if there is a markdown link                                                            |
| 50:08      | in reference style called one and matches the URL                                                                |
| 50:13      | and saves that as a variable and doesn't erase it                                                                |
| 50:15      | because that's actually a hyperlink in the story as well.                                                        |
| 50:18      | But it now knows and it sets a variable                                                                          |
| 50:20      | and says this is this story type.                                                                                |
| 50:23      | And then it basically has a bunch of variables                                                                   |
| 50:27      | that are set based on what story type is it,                                                                     |
| 50:31      | does it have a link, does it have a title,                                                                       |
| 50:34      | and then there is a text block in shortcuts                                                                      |
| 50:38      | containing basically an XML file,                                                                                |
| 50:42      | except in all the little places where it says,                                                                   |
| 50:45      | here's the key and here's the value.                                                                             |
| 50:47      | And it's like key is story type and value is                                                                     |
| 50:50      | that variable gets inserted in there.                                                                            |
| 50:54      | And the body text, which has been wrapped,                                                                       |
| 50:56      | it's in a seed data tag in XML.                                                                                  |
| 50:58      | So it goes in as a smart variable at that point                                                                  |
| 51:04      | into that part of the XML file.                                                                                  |
| 51:06      | And so you build an XML file out of little pieces                                                                |
| 51:09      | that have been generated by sort of a few conditionals                                                           |
| 51:13      | and then you put it all together in that text block                                                              |
| 51:16      | that is an XML file with those things inserted.                                                                  |
| 51:19      | And then you do get URL to the server.                                                                           |
| 51:23      | This was actually the trickiest part in shortcuts.                                                               |
| 51:25      | You have to do get URL and you have to use the drop-down                                                          |
| 51:29      | and you have to say that it's a get and not a post                                                               |
| 51:32      | and it's got to have a couple specific headers                                                                   |
| 51:34      | because you're uploading.                                                                                        |
| 51:35      | You've got to have it be like it's an XML upload.                                                                |
| 51:38      | There's some very specific headers that I have to put in there                                                   |
| 51:41      | or it's rejected and then the content that's going                                                               |
| 51:45      | is smart variable to that text block.                                                                            |
| 51:48      | And then what's returned is the XML file                                                                         |
| 51:52      | that is coming from the server saying yep                                                                        |
| 51:55      | and then you have to do a grep search on that                                                                    |
| 51:57      | or a regular expression based search                                                                             |
| 51:59      | to find the phrase of here's what your ID is                                                                     |
| 52:02      | and then you use that to do a open in [[Safari]]                                                                     |
| 52:06      | with the string that will open a particular ID                                                                   |
| 52:10      | in WordPress with the ID number itself                                                                           |
| 52:14      | a smart variable coming from that search                                                                         |
| 52:17      | of the XML that was returned.                                                                                    |
| 52:19      | And you put it all together                                                                                      |
| 52:20      | and it actually works, believe it or not.                                                                        |
| 52:22      | I mean, if it works, that's great.                                                                               |
| 52:23      | But what I'm amazed by is you don't appear to have any menus                                                     |
| 52:26      | and hey, Jason, what's this?                                                                                     |
| 52:28      | I don't know what kind of story type is this                                                                     |
| 52:31      | from your shortcut.                                                                                              |
| 52:32      | It's figuring it out.                                                                                            |
| 52:34      | It assumes that it's a post unless it's got the link one                                                         |
| 52:38      | at which point it knows that it is another post.                                                                 |
| 52:40      | If it's a member post, it doesn't, you know                                                                      |
| 52:43      | a member's only post, it doesn't know about that                                                                 |
| 52:45      | and there's no way that I've signified that.                                                                     |
| 52:46      | So I just have to check the different boxes                                                                      |
| 52:49      | in WordPress when I get there.                                                                                   |
| 52:50      | I could come up with a reason for that                                                                           |
| 52:52      | but I've yet to find that it would save me enough time                                                           |
| 52:55      | for me to care.                                                                                                  |
| 52:56      | But it's really mostly those two students.                                                                       |
| 52:58      | I really had that moment where I realised,                                                                       |
| 53:00      | oh, if I standardise on what the link is in the link post                                                        |
| 53:03      | I can detect that it's a link post                                                                               |
| 53:05      | because what I don't have in this is a                                                                           |
| 53:09      | my own inventid kind of meta language                                                                            |
| 53:13      | of metadata for the blog tool.                                                                                   |
| 53:16      | I've tinkered with that because I keep mentioning tags.                                                          |
| 53:19      | My system doesn't let me do tags.                                                                                |
| 53:21      | If I want to do tags, I have to apply them in WordPress                                                          |
| 53:24      | or on the Mac in Mars at it.                                                                                     |
| 53:26      | And I talked to Dr. Drang about this                                                                             |
| 53:28      | because his blogging system he puts,                                                                             |
| 53:30      | I said, how do you do your tags?                                                                                 |
| 53:31      | And he says, I put them in the text.                                                                             |
| 53:33      | I have a line that is tags with the tags                                                                         |
| 53:35      | and they get inserted.                                                                                           |
| 53:37      | And I haven't gone there yet only because                                                                        |
| 53:39      | it requires you to get the tags right.                                                                           |
| 53:42      | If you type the tag name wrong it's going to insert                                                              |
| 53:44      | a new tag that's misspelled or whatever                                                                          |
| 53:46      | and that's no good.                                                                                              |
| 53:48      | And I also just, I'm reluctant to put                                                                            |
| 53:52      | things in markdown that shouldn't be seen.                                                                       |
| 53:58      | That I have to always rely on a script too.                                                                      |
| 54:01      | Because if the one link for a link post,                                                                         |
| 54:06      | that's a legitimate markdown link                                                                                |
| 54:08      | that's used in the post.                                                                                         |
| 54:10      | And markdown does not have a metadata                                                                            |
| 54:14      | don't publish this qualifier.                                                                                    |
| 54:16      | I would have to wrap it in like comment,                                                                         |
| 54:18      | HTML comment tags and something.                                                                                 |
| 54:20      | And I just decided that for now                                                                                  |
| 54:23      | that's just not worth it for me.                                                                                 |
| 54:25      | But all the rest of it, yeah,                                                                                    |
| 54:26      | that's part of what I really liked.                                                                              |
| 54:28      | If it doesn't find a title it asks for that.                                                                     |
| 54:30      | But that's about the only user interface part of it.                                                             |
| 54:32      | I really wanted it to intuit from what the document was                                                          |
| 54:35      | what it needed to do.                                                                                            |
| 54:37      | And that's worked really well.                                                                                   |
| 54:39      | I love that it knows what a link.                                                                                |
| 54:41      | I used to, okay, here's an admission.                                                                            |
| 54:43      | It didn't use to do this until I figured out                                                                     |
| 54:45      | the thing with a link named one,                                                                                 |
| 54:47      | a reference link.                                                                                                |
| 54:49      | Because I usually don't write markdown with reference links.                                                     |
| 54:51      | I usually write them in line.                                                                                    |
| 54:53      | Don't email me, people.                                                                                          |
| 54:55      | Yeah, I prefer them that way.                                                                                    |
| 54:57      | Everybody can use it the way they want it.                                                                       |
| 54:59      | But the reference link named one,                                                                                |
| 55:01      | I was like, oh, I could do this.                                                                                 |
| 55:03      | Because before that, it was based on the file name.                                                              |
| 55:05      | And if the file name was Six Colors,                                                                             |
| 55:07      | dash as at the start, it knew it was a post.                                                                     |
| 55:10      | And if it was link post, dash,                                                                                   |
| 55:12      | it knew it was a link post.                                                                                      |
| 55:14      | And now it doesn't care what the file name is                                                                    |
| 55:16      | because it just detects it from the content,                                                                     |
| 55:18      | which is way better.                                                                                             |
| 55:20      | Well, one of the things I love about shortcuts                                                                   |
| 55:23      | is it knows...                                                                                                   |
| 55:25      | I mean, the people who made shortcuts,                                                                           |
| 55:27      | they know how scripters think, right?                                                                            |
| 55:29      | You've got lots of different ways,                                                                               |
| 55:31      | lots of different paths to take and a lot of flexibility.                                                        |
| 55:33      | The fact that you just throw a text field in with XML                                                            |
| 55:37      | and then start populating it with magic variables                                                                |
| 55:39      | and all of that, I love that.                                                                                    |
| 55:41      | It's so great.                                                                                                   |
| 55:43      | In fact, that's a place where shortcuts,                                                                         |
| 55:45      | I feel like, is superior to the scripting approach.                                                              |
| 55:48      | Because when they did the second version of shortcuts                                                            |
| 55:50      | and added magic variables in,                                                                                    |
| 55:52      | there was them saying,                                                                                           |
| 55:54      | you don't need to set variables.                                                                                 |
| 55:56      | You can just take the output from any step of the shortcut.                                                      |
| 55:58      | And that's so much better, right?                                                                                |
| 56:00      | I only use variables and shortcuts now                                                                           |
| 56:02      | when I'm in a conditional.                                                                                       |
| 56:04      | And I need to say, if this,                                                                                      |
| 56:06      | then set the variable to be that.                                                                                |
| 56:08      | If this, then set the variable to be that.                                                                       |
| 56:10      | But otherwise, like the content                                                                                  |
| 56:12      | of a particular step in the file,                                                                                |
| 56:14      | it's just I don't need to worry about it.                                                                        |
| 56:16      | If I know that it will be executed,                                                                              |
| 56:18      | I know I can go grab it later.                                                                                   |
| 56:20      | And so I've taken advantage of that because                                                                      |
| 56:22      | what I'm saying is the people who do shortcuts                                                                   |
| 56:24      | know that scripters are lazy                                                                                     |
| 56:26      | and don't want to do that if they don't have to                                                                  |
| 56:28      | because it's all about saving time.                                                                              |
| 56:30      | Well, and also they also know a lot of people                                                                    |
| 56:32      | making shortcuts are not programmers                                                                             |
| 56:34      | and don't understand the concept                                                                                 |
| 56:36      | of having to declare a variable.                                                                                 |
| 56:38      | So why require it?                                                                                               |
| 56:40      | And any visual scripting tool                                                                                    |
| 56:42      | like this, any codeless scripting tool,                                                                          |
| 56:44      | even if you've got the best user interface,                                                                      |
| 56:46      | which shortcuts doesn't,                                                                                         |
| 56:48      | it's still clunky.                                                                                               |
| 56:50      | Every block you add                                                                                              |
| 56:52      | is more clunky                                                                                                   |
| 56:54      | and more stuff getting in your way.                                                                              |
| 56:56      | And like there is nothing worse                                                                                  |
| 56:58      | than doing something in shortcuts                                                                                |
| 57:00      | and then having to go like, all right,                                                                           |
| 57:02      | now I need to set a variable.                                                                                    |
| 57:04      | Now I need to go get this thing again                                                                            |
| 57:06      | because I've just set a variable                                                                                 |
| 57:08      | so I need to get a different thing                                                                               |
| 57:10      | and then I need to set that to a variable                                                                        |
| 57:12      | and you end up with this big block of things                                                                     |
| 57:14      | that does nothing except save things for later                                                                   |
| 57:16      | because like what regular expression match,                                                                      |
| 57:18      | one of the things you can do                                                                                     |
| 57:20      | is you can do a match with multiple matches inside it                                                            |
| 57:22      | and then at different points                                                                                     |
| 57:24      | you just say, give me that match number three.                                                                   |
| 57:26      | You know, and there's one statement to do that                                                                   |
| 57:28      | and then you've grabbed it.                                                                                      |
| 57:30      | You didn't need to set it as a variable up top                                                                   |
| 57:32      | and so that was a big,                                                                                           |
| 57:34      | I feel like that was a really                                                                                    |
| 57:36      | transcendent moment for shortcuts                                                                                |
| 57:38      | and saying like, what is the idiom                                                                               |
| 57:40      | of a block based automation tool?                                                                                |
| 57:42      | And                                                                                                              |
| 57:44      | setting a variable in code makes total sense, right?                                                             |
| 57:47      | Yeah.                                                                                                            |
| 57:48      | And in a                                                                                                         |
| 57:50      | code system where everybody's using a different text editor                                                      |
| 57:52      | and right, like, you have to do it that way.                                                                     |
| 57:54      | But shortcuts are only in shortcuts                                                                              |
| 57:56      | and shortcuts can offer                                                                                          |
| 57:58      | the output of any step                                                                                           |
| 58:00      | and so for them to take that leap                                                                                |
| 58:02      | and say                                                                                                          |
| 58:04      | here the right                                                                                                   |
| 58:06      | approach is not to use variables.                                                                                |
| 58:08      | Don't use variables                                                                                              |
| 58:10      | unless you have to because everything's a variable.                                                              |
| 58:12      | Every step                                                                                                       |
| 58:14      | outputs a variable.                                                                                              |
| 58:16      | You couldn't do that in other tools                                                                              |
| 58:18      | but in shortcuts you can do that and it's the right approach                                                     |
| 58:20      | and that's why I think shortcuts has been so                                                                     |
| 58:22      | successful and why I'm so high on its future                                                                     |
| 58:24      | is that they seem to understand                                                                                  |
| 58:26      | why in ways                                                                                                      |
| 58:28      | that shortcuts needs to behave that other programming                                                            |
| 58:30      | tools shouldn't                                                                                                  |
| 58:32      | and couldn't and wouldn't                                                                                        |
| 58:34      | but that it's right for shortcuts to do it that way                                                              |
| 58:36      | because it makes it easier to read,                                                                              |
| 58:38      | easier to write and less clunky                                                                                  |
| 58:40      | just to move things around                                                                                       |
| 58:42      | inside the shortcut.                                                                                             |
| 58:44      | Most of the shortcuts you've shared with us so far                                                               |
| 58:46      | are iPad based.                                                                                                  |
| 58:48      | Are they sound like things you primarily do on your iPad?                                                        |
| 58:50      | Do you have any go-to                                                                                            |
| 58:52      | shortcuts on your phone?                                                                                         |
| 58:54      | Oh                                                                                                               |
| 58:56      | in truth, no.                                                                                                    |
| 58:58      | In truth, I don't.                                                                                               |
| 59:00      | I have very little                                                                                               |
| 59:02      | automation stuff that I do on my phone                                                                           |
| 59:04      | because most of my                                                                                               |
| 59:06      | automation is writing based.                                                                                     |
| 59:08      | So I'm going to go on                                                                                            |
| 59:10      | iPad and iPhone                                                                                                  |
| 59:12      | that is actually                                                                                                 |
| 59:14      | a version of something that Dr.                                                                                  |
| 59:16      | Drang built                                                                                                      |
| 59:18      | which is                                                                                                         |
| 59:20      | if you're downloading                                                                                            |
| 59:22      | a Southwest Airlines                                                                                             |
| 59:24      | reservation                                                                                                      |
| 59:26      | he has a script that                                                                                             |
| 59:28      | looks at the calendar finds all the Southwest Airlines                                                           |
| 59:30      | event downloads                                                                                                  |
| 59:32      | and basically remakes them in a better way                                                                       |
| 59:34      | where the alarms are set to the right times                                                                      |
| 59:36      | clearer                                                                                                          |
| 59:38      | and has your code                                                                                                |
| 59:40      | that you're going to use for your reservation                                                                    |
| 59:42      | and warns you that you have to check in for your flight                                                          |
| 59:44      | and I have run that                                                                                              |
| 59:46      | on my iPhone as well as my iPad                                                                                  |
| 59:48      | that's just one of those things that it's wherever I am                                                          |
| 59:50      | when I'm making that reservation but for the most part                                                           |
| 59:52      | I honestly haven't spent a lot of time with                                                                      |
| 59:54      | iPhone automation.                                                                                               |
| 59:56      | I don't use my iPhone a lot. I work at                                                                           |
| 59:58      | home                                                                                                             |
| 01:00:00   | and when I go out, in fact a lot of times I go out                                                               |
| 01:00:02   | with just my Apple Watch because I have a cellular Apple Watch                                                   |
| 01:00:04   | so I'm not                                                                                                       |
| 01:00:06   | using my iPhone enough to do a lot of automation there.                                                          |
| 01:00:10   | This episode of The Automators                                                                                   |
| 01:00:12   | is brought to you by the Technology Untangled                                                                    |
| 01:00:14   | podcast.                                                                                                         |
| 01:00:16   | Go to technologyuntangled.fm                                                                                     |
| 01:00:18   | and join Michael Byrd as he                                                                                      |
| 01:00:20   | untangles innovation                                                                                             |
| 01:00:22   | through a series of interviews, stories                                                                          |
| 01:00:24   | and analysis with some of the industry's                                                                         |
| 01:00:26   | brightest brains.                                                                                                |
| 01:00:28   | Technology Untangled                                                                                             |
| 01:00:30   | is a show that deciphers text rapid                                                                              |
| 01:00:32   | solutions with one simple question in mind.                                                                      |
| 01:00:34   | What's really going to shape                                                                                     |
| 01:00:36   | our future and what's going to end up                                                                            |
| 01:00:38   | in the bargain bin with the floppy disk?                                                                         |
| 01:00:40   | In the most recent episode                                                                                       |
| 01:00:42   | Michael tackles the mission to Mars                                                                              |
| 01:00:44   | and how far can we push it?                                                                                      |
| 01:00:46   | Specifically it takes                                                                                            |
| 01:00:48   | 20 minutes to send a communication                                                                               |
| 01:00:50   | to Mars.                                                                                                         |
| 01:00:52   | That communication delay is going to make survival                                                               |
| 01:00:54   | even harder. One answer                                                                                          |
| 01:00:56   | is to take an all-knowing supercomputer                                                                          |
| 01:00:58   | with you to do the big calculations                                                                              |
| 01:01:00   | and make the tough calls.                                                                                        |
| 01:01:02   | Michael addresses this head-on in the most                                                                       |
| 01:01:04   | recent episode of Technology Untangled.                                                                          |
| 01:01:06   | If you have any interest in space                                                                                |
| 01:01:08   | you should check this episode out                                                                                |
| 01:01:10   | but there's a lot more. Past episodes                                                                            |
| 01:01:12   | include a deep dive into 5G                                                                                      |
| 01:01:14   | which really explains                                                                                            |
| 01:01:16   | how 5G works and what it means for you,                                                                          |
| 01:01:18   | how supercomputers                                                                                               |
| 01:01:20   | are helping us with the fight against COVID                                                                      |
| 01:01:22   | by sifting through billions of                                                                                   |
| 01:01:24   | molecules to look for drugs                                                                                      |
| 01:01:26   | to repurpose. There's also an episode                                                                            |
| 01:01:28   | about artificial intelligence in the future                                                                      |
| 01:01:30   | of jobs.                                                                                                         |
| 01:01:32   | Every episode takes on a fascinating                                                                             |
| 01:01:34   | technology question and gives you some                                                                           |
| 01:01:36   | answers. Past guests include                                                                                     |
| 01:01:38   | people from Google, Sainsbury's,                                                                                 |
| 01:01:40   | Aston Martin Red Bull Racing,                                                                                    |
| 01:01:42   | The New York Times, and Nokia.                                                                                   |
| 01:01:44   | Michael Byrd has interviewed over                                                                                |
| 01:01:46   | 50 super interesting people just                                                                                 |
| 01:01:48   | this year. Think technologists, scientists,                                                                      |
| 01:01:50   | academics, developers,                                                                                           |
| 01:01:52   | futurists, and IT generalists.                                                                                   |
| 01:01:54   | And in the final episode                                                                                         |
| 01:01:56   | of Technology Untangled you can hear about                                                                       |
| 01:01:58   | one innovation almost all                                                                                        |
| 01:02:00   | the guests couldn't stop talking about                                                                           |
| 01:02:02   | as well as learning how to prepare                                                                               |
| 01:02:04   | for tomorrow's innovations today.                                                                                |
| 01:02:06   | So search for Technology Untangled                                                                               |
| 01:02:08   | anywhere you listen to podcasts                                                                                  |
| 01:02:10   | and we'll include a link in the show notes.                                                                      |
| 01:02:12   | Our thanks to Technology Untangled                                                                               |
| 01:02:14   | for their support of the Automators                                                                              |
| 01:02:16   | and all of Relay FM.                                                                                             |
| 01:02:18   | So Jason                                                                                                         |
| 01:02:20   | you said you don't really use shortcuts on your phone                                                            |
| 01:02:22   | which is fine and I'm guessing that probably                                                                     |
| 01:02:24   | since the Apple Watch. How about                                                                                 |
| 01:02:26   | macOS Monterey? Because I get the impression                                                                     |
| 01:02:28   | that you have opinions, let's say                                                                                |
| 01:02:30   | about shortcuts on macOS Monterey                                                                                |
| 01:02:32   | and the replacement of Automated.                                                                                |
| 01:02:34   | I'm excited about shortcuts on macOS.                                                                            |
| 01:02:36   | It kind of doesn't work right yet.                                                                               |
| 01:02:38   | I mean...                                                                                                        |
| 01:02:40   | I'm so glad I'm not the only one. I'm supposed                                                                   |
| 01:02:42   | to be writing a book. You're writing a book on photos.                                                           |
| 01:02:44   | I'm writing a new book on shortcuts and so far                                                                   |
| 01:02:46   | my book outline is                                                                                               |
| 01:02:48   | it would be great if it worked.                                                                                  |
| 01:02:50   | I actually just filed a feedback                                                                                 |
| 01:02:52   | yesterday                                                                                                        |
| 01:02:54   | because I tried, I was talking earlier about                                                                     |
| 01:02:56   | these shortcuts that I                                                                                           |
| 01:02:58   | or these workflow. Sorry                                                                                         |
| 01:03:00   | I have really completely spaced on that. These                                                                   |
| 01:03:02   | automated                                                                                                        |
| 01:03:04   | actions that I use                                                                                               |
| 01:03:06   | with scripts inside them.                                                                                        |
| 01:03:08   | And I thought, you know, I'm writing my                                                                          |
| 01:03:10   | review. Let's                                                                                                    |
| 01:03:12   | see how those run. And the answer                                                                                |
| 01:03:14   | is they don't run. And in fact                                                                                   |
| 01:03:16   | I zeroed in on like                                                                                              |
| 01:03:18   | input from                                                                                                       |
| 01:03:20   | a script can get input from                                                                                      |
| 01:03:22   | a shortcut. But then                                                                                             |
| 01:03:24   | my script first thing it does                                                                                    |
| 01:03:26   | it gets passed a file. It says                                                                                   |
| 01:03:28   | what's the parent folder                                                                                         |
| 01:03:30   | of this file. And                                                                                                |
| 01:03:32   | an error return saying                                                                                           |
| 01:03:34   | Finder can't get                                                                                                 |
| 01:03:36   | the current folder of that file. Well, it works                                                                  |
| 01:03:38   | in AppleScript in the script                                                                                    |
| 01:03:40   | editor. It just doesn't work inside                                                                              |
| 01:03:42   | of workflow. And like                                                                                            |
| 01:03:44   | either it's a security issue                                                                                     |
| 01:03:46   | where                                                                                                            |
| 01:03:48   | they've decided or whether it just happened                                                                      |
| 01:03:50   | they've blocked off certain kinds of scripting                                                                   |
| 01:03:52   | which totally invalidates                                                                                        |
| 01:03:54   | the concept of using this                                                                                        |
| 01:03:56   | or it's a bug. But either way                                                                                    |
| 01:03:58   | there's a whole class of my                                                                                      |
| 01:04:00   | shortcuts or my workflow                                                                                         |
| 01:04:02   | automated workflows that are going to be                                                                         |
| 01:04:04   | shortcuts at some point on the Mac                                                                               |
| 01:04:06   | that just they just don't work.                                                                                  |
| 01:04:08   | They just don't work. And it's and it's because                                                                  |
| 01:04:10   | they're the scripts are not allowed                                                                              |
| 01:04:12   | to do what they do                                                                                               |
| 01:04:14   | in Automator at this point. And then there are other                                                             |
| 01:04:16   | bugs, you know, it crashes a lot.                                                                                |
| 01:04:18   | There are some                                                                                                   |
| 01:04:20   | there's going to be growing pains with shortcuts                                                                 |
| 01:04:22   | on the Mac. I totally accept that.                                                                               |
| 01:04:24   | One of the things that I've noticed                                                                              |
| 01:04:26   | is places                                                                                                        |
| 01:04:28   | where assumptions are made                                                                                       |
| 01:04:30   | about things happening                                                                                           |
| 01:04:32   | on iOS that don't happen                                                                                         |
| 01:04:34   | on the Mac that it gets weird. And                                                                               |
| 01:04:36   | I mentioned earlier I have a shortcut                                                                            |
| 01:04:38   | on the iPad where I select some text                                                                             |
| 01:04:40   | in a web page and run a shortcut.                                                                                |
| 01:04:42   | And it generates                                                                                                 |
| 01:04:44   | a file it generates                                                                                              |
| 01:04:46   | like markdown and post it to my                                                                                  |
| 01:04:48   | my web server. I would love to have that                                                                         |
| 01:04:50   | on the Mac too.                                                                                                  |
| 01:04:52   | But guess what                                                                                                   |
| 01:04:54   | on the Mac [[Safari]]                                                                                                |
| 01:04:56   | doesn't let you run a shortcut from the share menu.                                                              |
| 01:04:58   | And in fact                                                                                                      |
| 01:05:00   | [[Safari]] on the Mac has kind of                                                                                    |
| 01:05:02   | no good way                                                                                                      |
| 01:05:04   | of like getting the selection                                                                                    |
| 01:05:06   | the code of the selection                                                                                        |
| 01:05:08   | of a window                                                                                                      |
| 01:05:10   | and processing it.                                                                                               |
| 01:05:12   | And so                                                                                                           |
| 01:05:14   | I've got this great shortcut that runs on iOS                                                                    |
| 01:05:16   | and when I try to run it on the Mac like there's                                                                 |
| 01:05:18   | literally nothing I can do. I can't run                                                                          |
| 01:05:20   | it right. If I run it from other places                                                                          |
| 01:05:22   | it can't see what [[Safari]] is doing.                                                                               |
| 01:05:24   | So basically                                                                                                     |
| 01:05:26   | and I accept that this is a                                                                                      |
| 01:05:28   | mode that is just                                                                                                |
| 01:05:30   | not there on the Mac right now. But I think this is one                                                          |
| 01:05:32   | of those threads that kind of starts to unravel                                                                  |
| 01:05:34   | when you talk about bringing tools over                                                                          |
| 01:05:36   | from iOS which they're going to                                                                                  |
| 01:05:38   | I hope they fix it at some point here. I doubt                                                                   |
| 01:05:40   | it will be there in                                                                                              |
| 01:05:42   | macOS 12.0                                                                                                       |
| 01:05:44   | but I hope they follow it up because like                                                                        |
| 01:05:46   | why can't I use the share menu                                                                                   |
| 01:05:48   | with shortcuts on [[Safari]].                                                                                        |
| 01:05:50   | And I think the answer is because [[Safari]]                                                                         |
| 01:05:52   | on the Mac never had to do that                                                                                  |
| 01:05:54   | and so they never did it.                                                                                        |
| 01:05:56   | And it's on iPad so it should                                                                                    |
| 01:05:58   | be on Mac and it's just not.                                                                                     |
| 01:06:00   | So there's a lot of that. Like                                                                                   |
| 01:06:02   | I had a script that ran my posting script                                                                        |
| 01:06:04   | runs                                                                                                             |
| 01:06:06   | unmodified. I can I set up                                                                                       |
| 01:06:08   | something where I run that shortcut                                                                              |
| 01:06:10   | from [[BBEdit]] and it                                                                                              |
| 01:06:12   | totally works. The whole thing works.                                                                            |
| 01:06:14   | But                                                                                                              |
| 01:06:16   | it gave me a lot of confidence in the                                                                            |
| 01:06:18   | future shortcuts on the Mac. But the fact is                                                                     |
| 01:06:20   | most of the other things that I've got that I rely                                                               |
| 01:06:22   | on on iOS or on macOS just don't work                                                                            |
| 01:06:24   | yet at least at this point in the beta. It's too bad.                                                            |
| 01:06:26   | I think there's really two categories                                                                            |
| 01:06:28   | because I'm struggling with it too. I'm                                                                          |
| 01:06:30   | going to make a shortcuts for Mac field guide                                                                    |
| 01:06:32   | and I can't record anything                                                                                      |
| 01:06:34   | right now. And                                                                                                   |
| 01:06:36   | the first category problems I think                                                                              |
| 01:06:38   | is that just the pipes aren't connected                                                                          |
| 01:06:40   | on a lot of things. And                                                                                          |
| 01:06:42   | I think that they're probably                                                                                    |
| 01:06:44   | scrambling. They get them all                                                                                    |
| 01:06:46   | connected and I get that this is hard                                                                            |
| 01:06:48   | what they're doing. But then the other thing                                                                     |
| 01:06:50   | that Jason touches on is just                                                                                    |
| 01:06:52   | the inherent differences between                                                                                 |
| 01:06:54   | platforms and                                                                                                    |
| 01:06:56   | the assumptions that they're bringing over                                                                       |
| 01:06:58   | the assumptions of an iOS device                                                                                 |
| 01:07:00   | to the Mac. And there                                                                                            |
| 01:07:02   | are some inherent differences that you need                                                                      |
| 01:07:04   | to account for like                                                                                              |
| 01:07:06   | the ability to have [[Safari]] run a shortcut.                                                                       |
| 01:07:08   | Another one for me is                                                                                            |
| 01:07:10   | the ability to select a menu item.                                                                               |
| 01:07:12   | I think that is something that                                                                                   |
| 01:07:14   | every automation tool on the Mac                                                                                 |
| 01:07:16   | has quickly adopted                                                                                              |
| 01:07:18   | because Mac                                                                                                      |
| 01:07:20   | have apps that have menu bars                                                                                    |
| 01:07:22   | and being able to automate selection                                                                             |
| 01:07:24   | of a menu item is one of the easiest                                                                             |
| 01:07:26   | ways to automate things. And                                                                                     |
| 01:07:28   | that's just not                                                                                                  |
| 01:07:30   | present in shortcuts. There should                                                                               |
| 01:07:32   | be an action that lets you do that.                                                                              |
| 01:07:34   | I feel like that that's because                                                                                  |
| 01:07:36   | of the differences between the platforms. It's                                                                   |
| 01:07:38   | just not there. Yeah.                                                                                            |
| 01:07:40   | It's a shame but hopefully it will                                                                               |
| 01:07:42   | get there because I know that the                                                                                |
| 01:07:44   | team behind shortcuts are working                                                                                |
| 01:07:46   | really hard on this. I've had                                                                                    |
| 01:07:48   | some things come back on some of my feedback                                                                     |
| 01:07:50   | and so on which has been great. And I know                                                                       |
| 01:07:52   | various different people have                                                                                    |
| 01:07:54   | been able to actually talk                                                                                       |
| 01:07:56   | to Apple for various reasons                                                                                     |
| 01:07:58   | about different things. One particular                                                                           |
| 01:08:00   | person had a very weird buck with                                                                                |
| 01:08:02   | cellular data and so they ended up                                                                               |
| 01:08:04   | talking to an engineering team. So it's not like                                                                 |
| 01:08:06   | Apple just said, hey, this is it.                                                                                |
| 01:08:08   | It's a beta go.                                                                                                  |
| 01:08:10   | It's a beta. It is                                                                                               |
| 01:08:12   | going to improve. I'm just hoping it's                                                                           |
| 01:08:14   | vaguely stable in the next month because                                                                         |
| 01:08:16   | I would really like to be able to use it.                                                                        |
| 01:08:18   | It's such a huge change                                                                                          |
| 01:08:22   | and I think it's going to take them time                                                                         |
| 01:08:24   | and I'm looking forward to that progress.                                                                        |
| 01:08:26   | I think whatever ships                                                                                           |
| 01:08:28   | there's a reason they're shipping it alongside                                                                   |
| 01:08:30   | Automator. It's because                                                                                          |
| 01:08:32   | it's not going to do everything and they've                                                                      |
| 01:08:34   | said it's not going to do everything.                                                                            |
| 01:08:36   | It's a path that they're taking.                                                                                 |
| 01:08:38   | I'm looking forward to hopefully                                                                                 |
| 01:08:40   | some progress                                                                                                    |
| 01:08:42   | after the.0 release as they                                                                                      |
| 01:08:44   | change things. I also                                                                                            |
| 01:08:46   | am stealing myself for the fact                                                                                  |
| 01:08:48   | that                                                                                                             |
| 01:08:50   | what I want to have happen is                                                                                    |
| 01:08:52   | for regular Mac apps                                                                                             |
| 01:08:54   | to support shortcuts.                                                                                            |
| 01:08:56   | I haven't heard from a lot of app developers                                                                     |
| 01:08:58   | about this yet, but I hope they're looking at it.                                                                |
| 01:09:00   | The challenge there is going to be                                                                               |
| 01:09:02   | there's probably                                                                                                 |
| 01:09:04   | a lot of bugs on that side too, right?                                                                           |
| 01:09:06   | And bugs for developers                                                                                          |
| 01:09:08   | and bugs for users. So I hope                                                                                    |
| 01:09:10   | I'm stealing myself for the fact                                                                                 |
| 01:09:12   | that there probably won't be a lot of Mac apps                                                                   |
| 01:09:14   | shipping with functional                                                                                         |
| 01:09:16   | shortcuts, actions                                                                                               |
| 01:09:18   | at the beginning because there will be                                                                           |
| 01:09:20   | bugs and then as a user                                                                                          |
| 01:09:22   | when they do ship them, there will probably still                                                                |
| 01:09:24   | be bugs, but it's a good                                                                                         |
| 01:09:26   | again, the beauty of it is all my stuff on the Mac                                                               |
| 01:09:28   | works now and I will be able                                                                                     |
| 01:09:30   | to bring over some of my shortcuts and I'm really                                                                |
| 01:09:32   | looking forward to the ability                                                                                   |
| 01:09:34   | because I don't have iCloud syncing                                                                              |
| 01:09:36   | turned on on any of my beta devices because                                                                      |
| 01:09:38   | I don't want to mess up my shortcuts, but                                                                        |
| 01:09:40   | it's actually been pretty good on the iPad,                                                                      |
| 01:09:42   | but                                                                                                              |
| 01:09:44   | I'm really looking forward to the ability                                                                        |
| 01:09:46   | to creating branching shortcuts                                                                                  |
| 01:09:48   | that if there's one thing                                                                                        |
| 01:09:50   | that's Mac specific, I can just say                                                                              |
| 01:09:52   | this is a Mac, do this, and if it's an iPad                                                                      |
| 01:09:54   | do that, and end up with these                                                                                   |
| 01:09:56   | master shortcuts that are just like                                                                              |
| 01:09:58   | a shortcut that does                                                                                             |
| 01:10:00   | a thing. And it's not Mac                                                                                        |
| 01:10:02   | version, iPad version, which is what I was really                                                                |
| 01:10:04   | dreading, but it looks like that's all                                                                           |
| 01:10:06   | going to be possible eventually.                                                                                 |
| 01:10:08   | It's possible now,                                                                                               |
| 01:10:10   | but they don't always work, right? But I'm really                                                                |
| 01:10:12   | looking forward to that, that you can build something that's got                                                 |
| 01:10:14   | all sorts of fancy                                                                                               |
| 01:10:16   | Mac features and if you're not                                                                                   |
| 01:10:18   | in a Mac, it's like, oh, okay, I'll do it the iPad                                                               |
| 01:10:20   | way then. That'll be great.                                                                                      |
| 01:10:22   | And I'll only build it once, which is                                                                            |
| 01:10:24   | I wrote about this on Six Colours, but like                                                                       |
| 01:10:26   | my experience of trying to                                                                                       |
| 01:10:28   | replicate what I built on shortcuts on an iPad                                                                   |
| 01:10:30   | on the Mac using scripting                                                                                       |
| 01:10:32   | made me realise that was the moment where I realised                                                             |
| 01:10:34   | oh, we need shortcuts on the Mac                                                                                 |
| 01:10:36   | because it's way harder                                                                                          |
| 01:10:38   | to do some of this stuff                                                                                         |
| 01:10:40   | on the Mac than it is on the iPad, and that's a sign,                                                            |
| 01:10:42   | right? That's a sign that like                                                                                   |
| 01:10:44   | maybe you need a new                                                                                             |
| 01:10:46   | scripting tool because                                                                                           |
| 01:10:48   | I tried                                                                                                          |
| 01:10:50   | to build the equivalent of my posting                                                                            |
| 01:10:52   | shortcut on the Mac                                                                                              |
| 01:10:54   | and it was                                                                                                       |
| 01:10:56   | painful, and I                                                                                                   |
| 01:10:58   | essentially gave up and                                                                                          |
| 01:11:00   | I'm not using that now. I'm using Mars                                                                           |
| 01:11:02   | edit instead.                                                                                                    |
| 01:11:04   | I know at the moment, for example,                                                                               |
| 01:11:06   | the cross-platform                                                                                               |
| 01:11:08   | actions are not working                                                                                          |
| 01:11:10   | like full stop.                                                                                                  |
| 01:11:12   | Greg Pierce, who's the developer                                                                                 |
| 01:11:14   | of [[Drafts]],                                                                                                       |
| 01:11:16   | that's Mr. Agiletortoise                                                                                          |
| 01:11:18   | has in the [[Drafts]]                                                                                               |
| 01:11:20   | beta notes at this time shortcuts are not cross-platform.                                                        |
| 01:11:22   | For now                                                                                                          |
| 01:11:24   | draft shortcuts created on the Mac show                                                                          |
| 01:11:26   | unknown actions on iOS and vice-versa                                                                            |
| 01:11:28   | presumably this will just start                                                                                  |
| 01:11:30   | working cross-platform in a future Mac OS Beta                                                                   |
| 01:11:32   | but you can                                                                                                      |
| 01:11:34   | feel that there's a lot of weight behind the presumably                                                          |
| 01:11:36   | slash how much work is actually                                                                                  |
| 01:11:38   | going to be required here                                                                                        |
| 01:11:40   | because theoretically it should just                                                                             |
| 01:11:42   | work and I'm very much hoping it does                                                                            |
| 01:11:44   | but right now                                                                                                    |
| 01:11:46   | that's not working even though                                                                                   |
| 01:11:48   | the apps theoretically have the same actions                                                                     |
| 01:11:50   | available. Yeah and it's                                                                                         |
| 01:11:52   | really I mean this is a massive project                                                                          |
| 01:11:54   | and you know I'm sitting here asking                                                                             |
| 01:11:56   | them to put in leather chairs and they're like                                                                   |
| 01:11:58   | Dave the pipes aren't hooked up yet just                                                                         |
| 01:12:00   | be cool you know and                                                                                             |
| 01:12:02   | and we can be cool because                                                                                       |
| 01:12:04   | they didn't                                                                                                      |
| 01:12:06   | turn off other automation tools you know                                                                         |
| 01:12:08   | they you know all the AppleScript                                                                               |
| 01:12:10   | the JavaScript the Python the keyboard                                                                           |
| 01:12:12   | my store the [[Hazel]] all that stuff still                                                                          |
| 01:12:14   | works so it may take                                                                                             |
| 01:12:16   | a little longer to get to where we want                                                                          |
| 01:12:18   | but Jason's point about                                                                                          |
| 01:12:20   | easier with shortcuts                                                                                            |
| 01:12:22   | really is true in this                                                                                           |
| 01:12:24   | age I think one of the key factors is                                                                            |
| 01:12:26   | security                                                                                                         |
| 01:12:28   | we're getting a time now                                                                                         |
| 01:12:30   | where you know getting access to like                                                                            |
| 01:12:32   | contacts and other types of data                                                                                 |
| 01:12:34   | on your computer is harder and harder for                                                                        |
| 01:12:36   | third-party scripting apps where I think                                                                         |
| 01:12:38   | shortcuts is going to make quick work of                                                                         |
| 01:12:40   | automation related to things like                                                                                |
| 01:12:42   | contacts                                                                                                         |
| 01:12:44   | totally                                                                                                          |
| 01:12:46   | well thank you for coming on Jason                                                                               |
| 01:12:48   | it has been lovely to talk to you and of course                                                                  |
| 01:12:50   | you know you've got plenty of automation                                                                         |
| 01:12:52   | up your sleeve so I think I have to get you back                                                                 |
| 01:12:54   | at some point once you actually had a chance                                                                     |
| 01:12:56   | to play with some of this stuff and it's working                                                                 |
| 01:12:58   | to see whether or not you've migrated that script                                                                |
| 01:13:00   | over to your mic and whether or not it's                                                                         |
| 01:13:02   | exactly the same or maybe it's                                                                                   |
| 01:13:04   | it's changed a little bit. I'm looking forward                                                                   |
| 01:13:06   | to it thank you for having me on I                                                                               |
| 01:13:08   | really enjoyed this podcast and                                                                                  |
| 01:13:10   | and I think we gave it an upgrade                                                                                |
| 01:13:12   | at one point didn't we so                                                                                        |
| 01:13:14   | thank you for that thank you so much                                                                             |
| 01:13:16   | that means a lot to me                                                                                           |
| 01:13:18   | I'm so glad that a                                                                                               |
| 01:13:20   | podcast like this exists to talk about this stuff                                                                |
| 01:13:22   | because I do think it's                                                                                          |
| 01:13:24   | obviously I'm very enthusiastic about it and I think                                                             |
| 01:13:26   | it's very important and I'm glad somebody's                                                                      |
| 01:13:28   | out there not only                                                                                               |
| 01:13:30   | reminding people that this is                                                                                    |
| 01:13:32   | important but also pointing out                                                                                  |
| 01:13:34   | it's so easy to miss like something like service station                                                         |
| 01:13:36   | so easy to miss something that can really                                                                        |
| 01:13:38   | improve your life on your devices if you                                                                         |
| 01:13:40   | so you get to spread the word                                                                                    |
| 01:13:42   | about it it's good.                                                                                              |
| 01:13:44   | The automator is spreading the good word of                                                                      |
| 01:13:46   | automation. Yes.                                                                                                 |
| 01:13:48   | So we are the automators you can find                                                                            |
| 01:13:50   | us over relay.fm                                                                                                 |
| 01:13:52   |/automators we can find Jason                                                                               |
| 01:13:54   | at Six Colours                                                                                                    |
| 01:13:56   | spelled out S-I-X-C-O-L-O-R-S                                                                                    |
| 01:13:58   | but I know you can also                                                                                          |
| 01:14:00   | get it with the British spelling right?                                                                          |
| 01:14:02   | Yeah it'll redirect that one                                                                                     |
| 01:14:04   | to British or Canadians.                                                                                         |
| 01:14:06   | It just redirects you though it doesn't serve                                                                    |
| 01:14:08   | a version of the site written in British English                                                                 |
| 01:14:10   | or something.                                                                                                    |
| 01:14:12   | There's going to be a Python script                                                                              |
| 01:14:14   | or something.                                                                                                    |
| 01:14:16   | That'd be the regex from hell                                                                                    |
| 01:14:18   | to just British your website                                                                                     |
| 01:14:20   | but the                                                                                                          |
| 01:14:22   | Jason where else can people find you?                                                                            |
| 01:14:24   | I am Jason L on Twitter                                                                                          |
| 01:14:26   | and                                                                                                              |
| 01:14:28   | upgrade and lift off here at relay.fm                                                                            |
| 01:14:30   | and the incomparable.com for all of your                                                                         |
| 01:14:32   | pop culture podcast needs.                                                                                       |
| 01:14:34   | Including some lovely Dungeons & Dragons                                                                         |
| 01:14:36   | which I was honoured to take part in last year                                                                    |
| 01:14:38   | and that's just coming out now.                                                                                  |
| 01:14:40   | Yeah that's right you're in one of the most                                                                      |
| 01:14:42   | most recent episodes                                                                                             |
| 01:14:44   | or maybe the next one it's yeah                                                                                  |
| 01:14:46   | you make it your appearance.                                                                                     |
| 01:14:48   | It's your triumphant appearance.                                                                                 |
| 01:14:50   | Well it's been                                                                                                   |
| 01:14:52   | lovely having you Jason and yes we'll be having you                                                              |
| 01:14:54   | back in the future.                                                                                              |
| 01:14:56   | Great thank you both.                                                                                            |
| 01:14:58   | Thank you to our sponsors technology and                                                                         |
| 01:15:00   | LinkedIn jobs and we'll see you next time.                                                                       |
| 01:15:02   | Goodbye everyone.                                                                                                |
