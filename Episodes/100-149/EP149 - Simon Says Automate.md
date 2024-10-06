---
status: "complete"
fc-date:
  year: 2024
  month: 03
  day: 08
fc-category: "podcast"
podcast: "Automators"
published: 2024-03-08
duration: 3895
formattedduration: "01:04:55"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Simon Støvring"]
notetype: "episode"
showpage: "http://relay.fm/automators/149"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators149.mp3"
episode: 149
title: "149: Simon Says Automate"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rosemary and David are joined by Simon Støvring again to talk about the automation developer's journey, productivity on the Vision Pro, and Shortcuts support in apps.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Simon Støvring]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 149 Discussion](https://talk.automators.fm/t/149-simon-says-automate/17327)

# Sponsors
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Find the qualified candidates you want to talk to, faster. Post a job for free.
- [[Vitally (Sponsor)|Vitally]] - A new era for customer success productivity.

# Show Notes
- [Runestone](https://runestone.app/)
- [Scriptable](https://scriptable.app/)
- [Jayson](https://jayson.app/)
- [Data Jar](https://datajar.app/)
- [Re: Toot](https://retoot.app/)
- [Simon's posts about TextCorrect on Mastodon](https://mastodon.social/@simonbs/111941854002100379)

# Transcription
  
| Time Index | Transcription                                                                                                    |
|:---------- |:---------------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the podcast where we talk about grabbing your technology                       |
| 00:06      | and encouraging it to do your bidding for you.                                                                   |
| 00:08      | I'm Rosemary Orchard and joined as always by my pal and co-host David Sparks.                                    |
| 00:12      | Hey David, how are you today?                                                                                    |
| 00:14      | I'm great, Rose.                                                                                                 |
| 00:15      | I'm really happy to be talking to you and we also have a guest today.                                            |
| 00:20      | Welcome back, Simon.                                                                                             |
| 00:21      | Simon Støvring.                                                                                                  |
| 00:22      | Hi.                                                                                                              |
| 00:23      | All right.                                                                                                       |
| 00:24      | Well, thanks so much for having me.                                                                              |
| 00:26      | I'm excited to join you again.                                                                                   |
| 00:27      | I think this is the second or third time.                                                                        |
| 00:30      | I think it's the third time, actually, that I'm here.                                                            |
| 00:33      | It's always a pleasure talking with you.                                                                         |
| 00:35      | Thank you.                                                                                                       |
| 00:36      | Well, it's always lovely to have you back as you have created so many useful apps for                            |
| 00:40      | automation.                                                                                                      |
| 00:41      | And of course, you've been experimenting with all the new awesome technology and hardware                        |
| 00:47      | that's out there.                                                                                                |
| 00:48      | I've seen so many screenshots of you experimenting with things on the Vision Pro recently, and                   |
| 00:54      | we've been playing with [[Runestone]] and getting that over there as well, and I'm just very                     |
| 00:59      | happy to have you back as is David.                                                                              |
| 01:00      | Yeah.                                                                                                            |
| 01:01      | So for folks who don't know Simon, and he's been on the show before, but he's one of our                         |
| 01:05      | favourite developers/automators because Simon really does address automation with                                |
| 01:13      | respect to the applications he builds.                                                                           |
| 01:15      | He actually addresses automation problems.                                                                       |
| 01:19      | I use [[Data Jar]] so often, Simon, and [[Data Jar]], which Rose and I have talked about many times              |
| 01:24      | on the show, is the app that lets you save global variables for [[Shortcuts]], super easy.                       |
| 01:30      | And Simon saw that that was missing and just added it.                                                           |
| 01:32      | But he's also the force behind [[Runestone]], [[Scriptable]], [[Jayson]].                                        |
| 01:40      | So you've made a bunch of apps that are what I call automation adjacent.                                         |
| 01:46      | These are apps that a lot of developers use, but also this stuff is very handy for like                          |
| 01:53      | automators who want to kind of take it to the next level.                                                        |
| 01:55      | Yeah, sure.                                                                                                      |
| 01:56      | I mean, I guess it is.                                                                                           |
| 01:59      | I usually, I tend to think about it as developer tools more than automation tools, right?                        |
| 02:04      | But I guess those two tend to go kind of hand in hand because if you do any automation,                          |
| 02:09      | you're also kind of doing some development, I guess, like you're developing an automation                        |
| 02:14      | after all.                                                                                                       |
| 02:15      | Yeah.                                                                                                            |
| 02:16      | Exactly.                                                                                                         |
| 02:17      | And I feel like a lot of people are just like, oh, but it's not really development, but it                       |
| 02:23      | really is because it is taking blocks of logic and putting them together.                                        |
| 02:27      | And whether you are writing that or physically putting things together with your fabulous                        |
| 02:33      | marble and Meccano machine to do whatever it is, or anything else.                                               |
| 02:38      | At the end of the day, it is development work of a kind.                                                         |
| 02:41      | So yeah, it is a development tool and an automation tool all in one.                                             |
| 02:45      | Yeah.                                                                                                            |
| 02:46      | Yeah.                                                                                                            |
| 02:47      | I mean, I guess even the simplest automation is some development, right?                                         |
| 02:51      | Even if you just set up a keyboard shortcut, that's like, if this happens, then do this.                         |
| 02:56      | I mean, that's sort of development, right?                                                                       |
| 02:58      | Yes.                                                                                                             |
| 02:59      | Yes.                                                                                                             |
| 03:00      | It absolutely is.                                                                                                |
| 03:01      | And yeah, it's always fun to see how you can make these things better, which is, you                             |
| 03:06      | know, one of the reasons why you have so many apps, I think, because you've been creating                        |
| 03:11      | all of these, and it's not just that you've created them and just left them there.                               |
| 03:17      | They get updated when things break or there's something new to add as well.                                      |
| 03:20      | And it feels like you're constantly experimenting with things as well, which could potentially                   |
| 03:26      | lead us to new features down the road.                                                                           |
| 03:27      | Oh yeah.                                                                                                         |
| 03:28      | I mean, that is very kind of you to say because I mean, honestly, I haven't been updating                        |
| 03:33      | some of them as much as I'd like to.                                                                             |
| 03:35      | But as you said, there are a handful of apps these days.                                                         |
| 03:40      | And I'm only one person with this many hours in the day, right?                                                  |
| 03:43      | So I can't work on everything in parallel.                                                                       |
| 03:47      | So I'm doing my best to keep the apps sort of updated whenever needed, but I also tend                           |
| 03:54      | to shift my focus a bit between them.                                                                            |
| 03:57      | Well, I think this is one of the things that allows you to do what you do as well as you                         |
| 04:03      | do because you have these indie apps that you've developed, you've got [[Data Jar]], you've                      |
| 04:07      | got [[Scriptable]], you've got [[Runestone]].                                                                    |
| 04:09      | You also have a full-time job.                                                                                   |
| 04:12      | But at least for me, I find it's one of those things where you've got a huge problem, right?                     |
| 04:16      | And you solve it whilst you're washing the dishes because that's the thing that has allowed                      |
| 04:21      | your brain to focus on something else just enough that it's gone at and now I have the                           |
| 04:25      | solution to the problem.                                                                                         |
| 04:27      | And I feel like, I mean, I'm making massive assumptions here.                                                    |
| 04:30      | I feel like one of the reasons why we have so many useful apps from you that work as                             |
| 04:36      | well as they do is because you have the others.                                                                  |
| 04:39      | So you go off and you do something and you experiment with Vision Pro, for example, and                          |
| 04:44      | 3D models and things like that.                                                                                  |
| 04:45      | And then because your brain's off busy experimenting with that, it gives it the opportunity to                   |
| 04:50      | stumble across a new idea, which can result in something fabulous and awesome, even if                           |
| 04:57      | it's just a little example thing, that's the sort of thing that will then inspire other                          |
| 05:01      | people.                                                                                                          |
| 05:02      | Yeah, I mean, totally, I think that's right.                                                                     |
| 05:06      | And many of the apps, does this synergy between them somehow, right?                                             |
| 05:11      | Because I think one of my first apps, or one of the first apps in this space, at least,                          |
| 05:15      | was [[Scriptable]].                                                                                              |
| 05:16      | And that kind of spawned the [[Jayson]], the [[JSON]] viewer app, because that was originally a                  |
| 05:23      | feature of [[Scriptable]].                                                                                       |
| 05:24      | And then I saw that it could kind of turn into its own app.                                                      |
| 05:29      | And the same thing goes with [[Runestone]], my text editor, [[Scriptable]] has a text editor,                    |
| 05:34      | but then I needed a better text editor, so that spawned [[Runestone]].                                           |
| 05:38      | So it is like, as you said, you might be working on one thing, and then that kind of spawns                      |
| 05:43      | the idea to the next thing.                                                                                      |
| 05:45      | And I think one of the benefits with this is both I kind of enjoy working on different                           |
| 05:51      | things, solving different problems, but I think it also kind of just as an indie developer                       |
| 05:57      | keeps you from getting burned out.                                                                               |
| 05:59      | I think there are people who can just focus on one thing for years and find joy in that.                         |
| 06:05      | But I kind of like to switch gears now and then.                                                                 |
| 06:09      | So I might be working on [[Runestone]] for a long period of time.                                                |
| 06:13      | And whenever I kind of get bored of that, of starting to feel a little burned out from                           |
| 06:19      | that, I can shift gears and focus on something else.                                                             |
| 06:22      | And then come back to it later, right?                                                                           |
| 06:24      | Yes.                                                                                                             |
| 06:25      | Yes, is that how we ended up with [[Re: Toot]], which is r-e colon t-o-o-t for anybody searching                 |
| 06:30      | in the app store?                                                                                                |
| 06:31      | It's an app that lets you quote posts from [[Mastodon]], and of course, it has [[Shortcuts]] support.            |
| 06:36      | Of course it does.                                                                                               |
| 06:37      | It does.                                                                                                         |
| 06:38      | But this is, you know, it's a little free app that you just put together and throw it                            |
| 06:43      | on the app store.                                                                                                |
| 06:44      | How did you come up with that idea?                                                                              |
| 06:46      | Oh, yeah.                                                                                                        |
| 06:47      | I mean, I guess that is sort of how that came to be.                                                             |
| 06:50      | I never thought of it in that context.                                                                           |
| 06:52      | Yeah, I mean, that was when [[Mastodon]] was getting traction for, I guess, for the second time,                 |
| 06:58      | when there was like this second wave of people leaving Twitter, right, a couple of years                         |
| 07:04      | back, and then [[Mastodon]] really started getting traction again.                                               |
| 07:08      | And this was, as I remember it, that was over the holidays sometime in December.                                 |
| 07:13      | And I'd been working a lot on, I guess, [[Runestone]] back then, and kind of just, I wanted to do                |
| 07:19      | something else, and then I was quite frustrated that [[Mastodon]] didn't have quote posts.                       |
| 07:25      | I know there are all sorts of different opinions on quote posts, whether they're good or not.                    |
| 07:30      | I have to say, I quite like them.                                                                                |
| 07:32      | I think they're a great way of reposting something with your own thoughts.                                       |
| 07:37      | And I was frustrated that it wasn't possible on [[Mastodon]], and I thought, I mean, I could                     |
| 07:42      | sort of solve this problem used by taking a screenshot of a post and then kind of making                         |
| 07:47      | that look somewhat nice as an image.                                                                             |
| 07:51      | And then you just share that with your own thoughts, including a link to the original                            |
| 07:54      | post.                                                                                                            |
| 07:55      | I was like, that was an idea that I thought I could do in, I think, back then I thought                          |
| 07:59      | I could do it in a couple of evenings, but then reality hits and it takes way longer than                        |
| 08:04      | you expect.                                                                                                      |
| 08:05      | So kind of ended up doing it in a couple of weeks, I think.                                                      |
| 08:07      | Yeah, so that was just to shift gears a bit, because I've been working on [[Runestone]] for                      |
| 08:12      | a long time, but also to kind of solve a problem that I was facing myself.                                       |
| 08:18      | And I feel like this is, you know, some of the best automations come or automation solutions                     |
| 08:23      | that you can offer to the world come from having your own problems and solving them.                             |
| 08:28      | You know, whenever somebody asks me, you know, like, how would you do this?                                      |
| 08:32      | I can think, well, in theory, I would do that, but when you're actually, you know, trying                        |
| 08:36      | to solve the problem yourself and you actually start going through the processes, that's                         |
| 08:40      | where you find the flaws and so on.                                                                              |
| 08:43      | And, you know, one of the things I really love about [[Re: Toot]] in particular is the fact                      |
| 08:47      | that, you know, you're generating a nice image of the post on [[Mastodon]] that you want to share,               |
| 08:53      | but you've also added alternative text to it for people using screen readers and so                              |
| 08:57      | on, so that you can still, you know, actually read the text as text, which is, you know,                         |
| 09:04      | that's the sort of level of thought that actually, you know, comes from really using this sort                   |
| 09:09      | of thing instead of just, you know, well, you know, it kind of mostly does what it's                             |
| 09:14      | supposed to do and it works for most people, I guess, but then, you know, then you end                           |
| 09:18      | up with a better solution because, you know, you're actually genuinely using it.                                 |
| 09:23      | And I think this is the thing that excites me about [[Runestone]] as well.                                       |
| 09:26      | And, you know, it's one of those things I don't know how I feel about the Vision Pro                             |
| 09:31      | as I've never, beyond theoretically, because I've never got to use one.                                          |
| 09:35      | I know David's got one, I know you're lucky enough to have access to one at work, which                          |
| 09:40      | obviously is shared between other people, but I've never tried it.                                               |
| 09:44      | But when it, the thing that's making me excited about it is the fact that there are genuine                      |
| 09:49      | apps, not games or fun little, you know, experience things, you know, obviously there's the sort                 |
| 09:55      | of Jurassic Park experience that, you know, all of the journalists talked about that you                         |
| 10:00      | can try, but there are actual apps that can be used for work and productivity on this.                           |
| 10:07      | And, you know, [[Runestone]] is one of those.                                                                    |
| 10:10      | So, you know, and, you know, it's, it's simultaneously not an automation app, but it also is an automation       |
| 10:16      | app because I feel like being able to write text in, you know, an app that actually has                          |
| 10:22      | all the features, like line numbers and syntax highlighting and so on.                                           |
| 10:27      | So if you are writing, you know, some, you know, for example, [[JavaScript]], then you can                       |
| 10:33      | see that, then that makes this better.                                                                           |
| 10:35      | But I'm guessing you didn't have access to a Vision Pro during the development phase                             |
| 10:40      | of this.                                                                                                         |
| 10:41      | I did not, no, I did not.                                                                                        |
| 10:43      | I did attend one of the labs that [[Apple]] had during the, during the winter.                                       |
| 10:49      | So I did have a chance to try [[Runestone]] on the, on the [[Apple Vision Pro]].                                     |
| 10:54      | Well, I mean, developing for a platform you never used before is a challenge, but, but                           |
| 10:58      | one of the things you've also done, and one of the reasons I want to talk to you with                            |
| 11:03      | the Automator's audience is because I feel like you, Simon, are in my mind one of the                            |
| 11:08      | better developers about supporting automation.                                                                   |
| 11:11      | Like we were just talking about you did a free app in your free time that you made no                            |
| 11:15      | money in, but you took the time to add [[Shortcuts]] support.                                                    |
| 11:20      | And I think for people who are automation enthusiasts, but not developers, that's a bit of a black               |
| 11:26      | box for us.                                                                                                      |
| 11:27      | Like we don't really understand what's involved for you putting that support in there, just                      |
| 11:32      | like the old days with [[AppleScript]] support and Mac apps.                                                     |
| 11:35      | It's like, could you tell us a little bit about the considerations you give when you                             |
| 11:40      | decide to add automation, like what types of automation do you think makes sense?                                |
| 11:45      | And what's involved with creating that?                                                                          |
| 11:48      | I think for me, it really comes down to figuring out what's the core functionality of this                       |
| 11:54      | app?                                                                                                             |
| 11:55      | Like what's, what's the top one to maybe three things that people want to do with this app?                      |
| 12:01      | And then making sure that basically add it to this day and age, making sure that they                            |
| 12:05      | can do it through [[Shortcuts]].                                                                                 |
| 12:07      | I mean, back in the days, it was, we would do this through [[URL Schemes]], right?                               |
| 12:13      | And some apps still offer that and some people still use it.                                                     |
| 12:16      | And I think the best way to today is enabling people to automate things through shortcuts.                       |
| 12:22      | So didn't just pinpoint the top one to three things that your app does and make sure that                        |
| 12:28      | that's available for people to automate.                                                                         |
| 12:30      | Because then you kind of take your app from, you know, living in isolation somehow and                           |
| 12:38      | then kind of making it available in a broader ecosystem that people can then build on top                        |
| 12:42      | of to create things that you didn't think of.                                                                    |
| 12:47      | Just as an example, I know some writers use [[Re: Toot]], the app for quote posting, mustard                     |
| 12:55      | on posts, but these writers actually use it for creating embeds of mustard on posts posts                        |
| 13:01      | for their blogs.                                                                                                 |
| 13:02      | Now, I haven't looked into this, I would have guessed that was a better way to embed a mustard                   |
| 13:06      | on post in a blog, but I mean, apparently there isn't.                                                           |
| 13:10      | So they're just embedding screenshots and I never thought of that, but these people                              |
| 13:15      | use it for it.                                                                                                   |
| 13:16      | And what I hear is that people use it or create these posts or these images of the posts through                 |
| 13:23      | shortcuts then.                                                                                                  |
| 13:24      | And that's a use case I never thought of, but apparently, I mean, if it works, then I'm                          |
| 13:30      | happy.                                                                                                           |
| 13:31      | Yeah.                                                                                                            |
| 13:32      | So what was the question again?                                                                                  |
| 13:33      | I feel like I diverted.                                                                                          |
| 13:34      | I feel like you also, you know, made a really good point of, you know, you're considering                        |
| 13:39      | the bigger picture.                                                                                              |
| 13:40      | It's not just, you know, somebody's life and work flow doesn't just revolve around your                          |
| 13:45      | app, but also how your app interacts with other things and other apps, you know, and                             |
| 13:51      | ecosystems and so on.                                                                                            |
| 13:52      | I feel like that is a really good approach to looking at, you know, the development side                         |
| 13:56      | of things, but also from automation, you know, it's not just what am I doing in this tiny                        |
| 14:00      | little corner by itself, but what is, you know, the bigger picture of this?                                      |
| 14:05      | And so I feel like that's a really good lesson for everybody to take from that.                                  |
| 14:08      | Oh yeah.                                                                                                         |
| 14:09      | Yeah.                                                                                                            |
| 14:10      | Yeah.                                                                                                            |
| 14:11      | And I mean, David, to your second point as to what goes into this, I think for the most                          |
| 14:16      | part, if you're only creating fairly simple short collections as a developer, so meaning                         |
| 14:24      | that their functionality that you provide to users is, you know, kind of isolated and                            |
| 14:30      | somewhat straightforward as it is with [[Re: Toot]], it's just like taking in a URL and creating                 |
| 14:35      | an image.                                                                                                        |
| 14:36      | As a developer, that's kind of straightforward, then not a lot goes into it.                                     |
| 14:42      | And I can reuse a lot of my code from the kind of the main app and I can reuse that                              |
| 14:48      | in the [[Shortcuts]] action that's somewhat straightforward.                                                     |
| 14:52      | But I think I cannot really mention this without saying that I think a couple of years ago,                      |
| 14:59      | I basically declared [[Shortcuts]] bankrupt on [[Twitter]] saying, I don't want to build [[Shortcuts]]           |
| 15:04      | apps anymore, and part of me kind of still feels that way because as a couple of years                           |
| 15:10      | ago, this system was quite broken for developers.                                                                |
| 15:14      | And every summer it just broke and our shortcuts, I mean, broke in new and unexpected ways and                   |
| 15:21      | we had to, you know, do hot fixes to make sure that existing functionality still worked                          |
| 15:27      | when the major or minor version of iOS was released.                                                             |
| 15:33      | But I think since I posted that a couple of years ago, I don't remember exactly when                             |
| 15:36      | it was, but I mean, probably two years ago by now, things have become, have improved                             |
| 15:44      | in [[Shortcuts]].                                                                                                |
| 15:45      | It has become more stable.                                                                                       |
| 15:46      | I've also changed a bit in the sense that I try to build simpler [[Shortcuts]] actions.                          |
| 15:54      | Yeah, it's back, it's basically back to the point that back then two years ago, I was                            |
| 15:58      | really, personally, I feel like I was trying to push the envelope here with what [[Shortcuts]]                   |
| 16:02      | actions could do in terms of specifically [[Scriptable]] running [[JavaScript]] inside these                     |
| 16:08      | [[Shortcuts]] actions.                                                                                           |
| 16:09      | And they just kind of kept breaking and kind of the same with [[Data Jar]], because it's trying                  |
| 16:15      | to do a lot of synchronisation of your data when you're running a shortcut section.                              |
| 16:20      | So there's actually a lot of things going on behind the scenes there, whereas the [[Shortcuts]]                  |
| 16:24      | actions that are built into [[Re: Toot]] are way more straightforward.                                           |
| 16:28      | And as a result, I think they're way more stable than the actions that I shipped earlier.                        |
| 16:35      | So I guess my point is that I don't really, I want to say that it has kind of been a hassle                      |
| 16:40      | up until now building [[Shortcuts]] actions, but I think it has become better.                                   |
| 16:44      | And if you're building straightforward actions, it's not that bad really.                                        |
| 16:48      | And I don't want to discourage any developers from doing it, because it's also, I mean,                          |
| 16:52      | quite fun.                                                                                                       |
| 16:53      | I think [[Apple|Apple's]] heard that as well, there's been various new ways to create [[Shortcuts]]                        |
| 16:59      | actions and it's like, okay, great, but that way is not compatible with this way.                                |
| 17:02      | And if you do it that old way, then you don't have this feature and so on and so forth.                          |
| 17:07      | But they are listening and making it easier for developers.                                                      |
| 17:12      | And on top of that, they've added functionality.                                                                 |
| 17:15      | For example, if one app developer has, say for example, you've got [[Scriptable]].                               |
| 17:23      | If you're release Scriptable-2, because it would be under the same app store account,                            |
| 17:28      | if you use the same identifiers for the shortcuts, then anybody that installs Runestone-2 and uninstalls, sorry, |
| 17:34      | installs Scriptable-2 and uninstalled Scriptable-1, assuming that you put the                                    |
| 17:41      | same actions in or use the same identifier, those shortcut actions will continue to work.                        |
| 17:46      | And I feel like this is the sort of thing which had to come with time and it wasn't                              |
| 17:51      | there from the start and made things a lot more painful for developers, but it has definitely                    |
| 17:55      | made it easier and better as time has gone on, which is good.                                                    |
| 17:59      | So they're listening to the feedback from folks like yourself going, this is painful                             |
| 18:04      | and it shouldn't be like this and why does it always break?                                                      |
| 18:08      | And things are getting better.                                                                                   |
| 18:10      | I know this year I had very few shortcuts that completely and utterly broke.                                     |
| 18:13      | I recently finally got to the bottom of I had a shortcut running at nine o'clock in                              |
| 18:18      | the morning and only this shortcut would insist on opening apps as it did things.                                |
| 18:27      | And I tried, you know, if I ran it manually, it didn't do it.                                                    |
| 18:30      | I eventually narrowed it down to it was using a different run shortcut action to the current                     |
| 18:36      | run shortcut action, but it was still working.                                                                   |
| 18:39      | It was just it was taking text as an input instead of a variable and everything and that                         |
| 18:44      | just somehow caused everything to break.                                                                         |
| 18:45      | I did file feedback with [[Apple]] with the original broken shortcut and everything, but I now                       |
| 18:50      | have a working automation that does not randomly go off and just, you know, open 16 different                    |
| 18:56      | apps as it updates a bunch of stuff in the mornings, which is a huge improvement, but                            |
| 19:00      | things like that make it difficult for developers to find what the problem is, but also difficult                |
| 19:04      | for users to know what the heck have I done wrong here.                                                          |
| 19:07      | But it is getting better over time, fortunately.                                                                 |
| 19:10      | Yeah, I can imagine that's been quite a hassle to debug that.                                                    |
| 19:14      | But what you're saying, actually, that makes perfect sense because since, I mean, two years                      |
| 19:22      | ago, the technology we use as developers to build these [[Shortcuts]] actions have changed                           |
| 19:26      | dramatically and that just, I mean, slipped my mind in my previous rant, I guess.                                |
| 19:31      | But the technology has become so much better.                                                                    |
| 19:35      | And just to point out one thing, previously, originally, when we were building [[Shortcuts]]                         |
| 19:40      | actions, our actions would run in a separate process, and that would be encouraged by [[Apple]].                     |
| 19:45      | I mean, they were like, this is the way to do it because it's way faster.                                        |
| 19:48      | But that has changed.                                                                                            |
| 19:50      | [[Apple]] has changed their mind, it seems, because the actions that we build now run in the same                    |
| 19:55      | process as the main app, which, yeah, without getting it to like two nitty gritty, it just                       |
| 20:03      | makes things way simpler for us as developers.                                                                   |
| 20:06      | Yeah.                                                                                                            |
| 20:07      | So if you add an action to a to-do list, then if you had a to-do list application, then                          |
| 20:12      | you'd immediately be able to get all of the things, all of the items in the to-do list,                          |
| 20:17      | and that would be in them instead of it kind of sitting on the side waiting for the app                          |
| 20:21      | to pop up and actually pick it up and do the rest of the work with it.                                           |
| 20:26      | It's not kind of sitting in a separate little side area off screen.                                              |
| 20:32      | It's backstage, it's waiting for its turn on stage, but it won't get there until the                             |
| 20:35      | main process runs.                                                                                               |
| 20:37      | Yeah, exactly.                                                                                                   |
| 20:38      | And I think as a consequence of this, I haven't actually tested that myself, but it occurs                       |
| 20:43      | to me now that I would guess that third-party actions have also become way more stable,                          |
| 20:47      | especially as long as you keep the app running in the background, so the action doesn't have                     |
| 20:52      | to kind of start that in the app.                                                                                |
| 20:54      | I haven't actually tested that, it's just like, I guess, that would make them way more                           |
| 20:59      | stable.                                                                                                          |
| 21:00      | Yeah.                                                                                                            |
| 21:01      | In my experience, especially the bigger actions that you would want to run that require doing                    |
| 21:09      | a lot of things with data, like running a script and so on in various apps.                                      |
| 21:13      | They work much better now, and I'm seeing a lot fewer apps have to force you to open                             |
| 21:19      | their app to run the action, which was always the telltale giveaway before that it needed                        |
| 21:25      | access to the main process because there wasn't enough memory or it didn't have access to                        |
| 21:29      | the right data.                                                                                                  |
| 21:30      | So it always had to open the app to run the action, and a lot of that over time has disappeared                  |
| 21:36      | and gone away, which is better for me as a shortcut user, that that's also great for                             |
| 21:42      | you as a developer because it makes it so much easier.                                                           |
| 21:45      | Yeah, yeah, definitely.                                                                                          |
| 21:49      | This episode of The Automators is brought to you by LinkedIn Jobs.                                               |
| 21:53      | Go to linkedin.com/automators today to find the qualified candidates you want to                                 |
| 21:57      | talk to faster.                                                                                                  |
| 21:59      | What's your job for free today?                                                                                  |
| 22:02      | When you're hiring for your small business, you want to find quality professionals that                          |
| 22:06      | are right for the role.                                                                                          |
| 22:07      | That's why you have to check out LinkedIn Jobs.                                                                  |
| 22:10      | LinkedIn Jobs has the tools to help find the right professionals for your team faster and                        |
| 22:15      | for free.                                                                                                        |
| 22:17      | Hiring is difficult.                                                                                             |
| 22:18      | You have to find people with not only the right skills, but the right attitudes.                                 |
| 22:22      | Doing this on your own is nearly impossible, but if you get the right tools, it's a lot                          |
| 22:26      | easier and the right tools are LinkedIn Jobs.                                                                    |
| 22:30      | LinkedIn isn't just another job board.                                                                           |
| 22:31      | It has a vast network of more than a billion professionals, which makes it the best place                        |
| 22:36      | to hire.                                                                                                         |
| 22:37      | Hiring is easy when you have that many quality candidates.                                                       |
| 22:41      | So easy, in fact, that 86% of small businesses get a qualified candidate within 24 hours.                        |
| 22:47      | LinkedIn also knows that small business managers are wearing so many hats and might not have                     |
| 22:52      | the time or resources to hire.                                                                                   |
| 22:54      | That's why they're constantly finding ways to make the process easier.                                           |
| 22:58      | They even just launched a feature that helps you write job descriptions, making the process                      |
| 23:02      | even easier and quicker.                                                                                         |
| 23:04      | It's easy to see why 2.5 million small businesses use LinkedIn for hiring.                                       |
| 23:09      | So post your job today for free at linkedin.com/automators.                                                      |
| 23:14      | Once again, that is linkedin.com/automators to post your job for free.                                           |
| 23:19      | Terms and conditions apply, and thank you, LinkedIn Jobs, for supporting the Automators                          |
| 23:24      | Podcast.                                                                                                         |
| 23:25      | Simon, one of the things that's changed since we had you on last is shortcuts came to the                        |
| 23:33      | Mac and now shortcuts is sort of envision OS and shortcuts is no longer the iPhone and                           |
| 23:41      | iPad automation tool.                                                                                            |
| 23:42      | It's really [[Apple|Apple's]] looking at it as a universal automation tool to be used across other devices.                |
| 23:51      | Does that go into your calculus as to whether you include it and what does that add to your                      |
| 23:56      | work if you say, I'm going to need to make this work on a Mac as well?                                           |
| 24:01      | I guess you really don't have an app.                                                                            |
| 24:03      | Well, I guess maybe [[Runestone]], I don't know.                                                                 |
| 24:06      | Have you been supporting Mac shortcuts with some of your apps?                                                   |
| 24:10      | I use [[Data Jar]] and [[Jayson]] on my Mac all the time because it's a great way to share data                        |
| 24:17      | around all of my devices in a lovely little database, and [[Jayson]] is just great for viewing                         |
| 24:22      | [[JSON]] files, of course.                                                                                           |
| 24:24      | Yeah, so there are those two, [[Data Jar]] and [[Jayson]], and it's so long ago that I built those                     |
| 24:31      | actions that I'm just kind of trying to think what actually went into it.                                        |
| 24:35      | But both [[Jayson]] and [[Data Jar]] are [[Mac Catalyst]] apps, so they're not fully native [[SwiftUI]]                        |
| 24:42      | apps or [[AppKit]] apps.                                                                                             |
| 24:45      | And basically, very little work went into the shortcut sections to kind of port those                            |
| 24:51      | from the iPhone to the iPad.                                                                                     |
| 24:53      | A lot of work went into other parts of the app to make it feel more Mac-like.                                    |
| 24:58      | Yeah, and I think that's especially true with the new app intents shortcuts.                                     |
| 25:03      | I think they're like way easier to port between the different platforms because everything's                     |
| 25:09      | just kind of in code.                                                                                            |
| 25:11      | There's very little setup around the shortcut actions, but I haven't actually thought about                      |
| 25:15      | this.                                                                                                            |
| 25:16      | It's a great question, David.                                                                                    |
| 25:17      | I think there is that nothing really goes into or very little goes into porting actions                          |
| 25:22      | between the platforms.                                                                                           |
| 25:24      | I think the exception to this that I've heard of is when you've got something related to                         |
| 25:29      | [[HomeKit]] things, because [[HomeKit]] is special and doesn't work the same way, but yeah, once                         |
| 25:34      | you've created a shortcut section, the fact that you can just use that same thing because                        |
| 25:38      | it's code now is so great to hear because I know previously it was kind of like a configuration                  |
| 25:43      | file where you had to, you know, it was a kind of pretty-ish UI, not great, on a configuration                   |
| 25:51      | file.                                                                                                            |
| 25:52      | And that just always, that never felt right to me as somebody who wanted to go off and                           |
| 25:57      | play with this stuff and somebody who theoretically should technically be capable of it.                         |
| 26:02      | I always kind of just run into that and went, what the heck is that?                                             |
| 26:06      | So yeah, it's good to hear that the code approach makes it easier for you as well.                               |
| 26:11      | Yeah, I think it does.                                                                                           |
| 26:13      | It's a good point.                                                                                               |
| 26:14      | I guess there could be some frameworks where if your shortcut sections happens to use any                        |
| 26:17      | of those, then you might need to do some more work.                                                              |
| 26:21      | I don't really know.                                                                                             |
| 26:22      | I've never dabbled with [[HomeKit]].                                                                                 |
| 26:24      | It's still one of the things that I hope to do one day.                                                          |
| 26:27      | Just because I'm curious to see how it actually works.                                                           |
| 26:30      | Well, you know, and another question that comes in my mind from your comments in the                             |
| 26:35      | earlier segment was about making easier or simpler shortcuts and or shortcuts actions.                           |
| 26:43      | And I think you're really onto something.                                                                        |
| 26:45      | I mean, I think if you look at the shortcuts arc, [[Apple|Apple's]] goal with this, I think, is to                         |
| 26:51      | make very simple actions with the idea that people will make shortcuts that are between                          |
| 26:58      | two and ten steps that solves a few small problems for them.                                                      |
| 27:04      | And when you look at this, we've all been in this in the long game.                                              |
| 27:08      | I remember some very advanced [[AppleScript\|AppleScripts]] we would write in the back in the old days                            |
| 27:14      | to try and make the stuff do a lot on the Mac.                                                                   |
| 27:18      | And it feels to me like they aren't even really aiming for that with shortcuts.                                  |
| 27:21      | I think [[Apple|Apple's]] vision of this is that people who don't write software for a living, but                         |
| 27:26      | just want to glue a couple of apps together or just make it a little easier to get some                          |
| 27:31      | data and want to do something and they can, you know, learn this this language very quickly                      |
| 27:38      | because it's modular, you know, Lego like nature.                                                                |
| 27:42      | And they want you to make short, short, short cut actions.                                                       |
| 27:47      | And I think they almost want developers to make, you know, rather than make very complex                         |
| 27:52      | actions, I think they would ideally like to see you make like 10 very simple things that                         |
| 27:56      | you can, you know, yank out of your tool rather than one very complex thing.                                     |
| 28:02      | Do you get the same impression from the developer side?                                                          |
| 28:06      | Yeah, I mean, I guess so.                                                                                        |
| 28:11      | You did say earlier, so I mean, you know, they were encouraging things to run in a separate                      |
| 28:15      | process, which was, you know, incredibly limited.                                                                |
| 28:18      | So I feel like that was, you know, definitely them attempting to signal, you know, that                          |
| 28:23      | these things should be very, you know, you know, small and, you know, independent of                             |
| 28:30      | other things.                                                                                                    |
| 28:31      | But at the same time, the fact that they've now kind of pivoted on that and said, well,                          |
| 28:36      | actually, no, you can, you can run this in your app.                                                             |
| 28:40      | It's not running as its own little mini, you know, extract from the app.                                         |
| 28:45      | You know, that's definitely, you know, a change that has been made to a time, you know, that,                    |
| 28:51      | you know, offers you the option of doing, you know, whatever it is that, you know, is                            |
| 28:57      | the most appropriate for the action and the app, I suppose.                                                      |
| 29:01      | I guess that kind of means that it's up to the developer mode to figure out, like, which                         |
| 29:04      | direction do I want to go and do a run a build, like teeny tiny actions and provide teeny                        |
| 29:10      | tiny building blocks that your users can then put together, or do you want to write like                         |
| 29:14      | a bigger action that solves a series of, of, that performs a series of operations that                           |
| 29:21      | could otherwise have been split into, to separate actions.                                                       |
| 29:26      | It just occurs to me that along this topic, I've, I think occasionally, I get a couple                           |
| 29:31      | of requests every month that writer say, to add [[Shortcuts]] actions to [[Runestone]], because                          |
| 29:36      | it doesn't actually have any [[Shortcuts]] actions.                                                                  |
| 29:40      | But that's because it's basically a text editor and the [[Shortcuts]] app already has the actions                    |
| 29:46      | needed to, you know, open a text file in an app that supports that, so people can go and                         |
| 29:53      | edit their, their, their files and their favourite apps, right.                                                  |
| 29:58      | And that's one of the requests I'm getting like, oh, why doesn't [[Runestone]] support this                          |
| 30:01      | and that action because I want to build a flow that, you know, appends a text to a document                      |
| 30:07      | and then opens it in [[Runestone]] or whatever.                                                                      |
| 30:10      | And I'm like, yeah, but you already have these teeny tiny building blocks are in [[Shortcuts]]                       |
| 30:16      | that you can put together to achieve this same thing.                                                            |
| 30:19      | And I don't really want to build actions that just replicate that.                                               |
| 30:23      | I mean, that my, my only motivation for doing that would be to make it easier to discover                        |
| 30:29      | that this is a, that this is possible, you know, with, with [[Runestone]] to kind of make                            |
| 30:35      | my own actions that I don't know, append something to a document or opens a file in Roomstone                    |
| 30:41      | or something like that.                                                                                          |
| 30:43      | But that's not really the strategy I want to take.                                                               |
| 30:46      | I don't want to re-implement things that already exists in [[Shortcuts]] and can be built                            |
| 30:51      | using tiny building blocks.                                                                                      |
| 30:54      | So instead, basically what I've done is just, you know, reply a mail, reply with a, send                         |
| 30:59      | a reply to, to people kind of asking me for these actions that details the actions, the                          |
| 31:06      | shortcuts actions they would need to achieve the same thing.                                                     |
| 31:09      | Yeah.                                                                                                            |
| 31:10      | And like for instance, like when you look at the way [[Apple]], [[Apple Notes]] to me is like                            |
| 31:15      | a bit of guidance, right?                                                                                        |
| 31:17      | [[Apple Notes]] has a ton of little atomic actions like find note, open note, you know, create                       |
| 31:25      | note, the very simple things, but, and I feel like this is one that [[Apple]] has actually                           |
| 31:30      | paid attention to as opposed to [[Apple Reminders\|Reminders]], which is I think kind of behind.                                      |
| 31:35      | But you see the shortcut support there and it's these small actions.                                             |
| 31:40      | And it makes me wonder, I mean, now this is pure speculation territory.                                          |
| 31:44      | We've all heard rumours that [[Apple]] is pursuing AI somehow in relation to [[Shortcuts]], maybe                         |
| 31:50      | this year, [[WWDC]], maybe next year, but I think they're really one of the goals of their AI                         |
| 31:57      | initiative would be to simplify the on ramp to automation to say, Hey, can you, you know,                        |
| 32:05      | use your voice to give your, your, your device an instruction and have it do something for                       |
| 32:10      | you.                                                                                                             |
| 32:11      | And I think the, the on ramp for that is the small atomic shortcuts actions.                                     |
| 32:16      | Like if they could be smart enough to take a voice command and assemble something for                            |
| 32:21      | you, I don't know if that's going to happen or not.                                                              |
| 32:23      | Maybe I'm just dreaming, but, but I'm such an automation enthusiast.                                             |
| 32:27      | I think it would be really interesting to see if we could do very simple automation.                             |
| 32:34      | And in order to do that, I think they need the building blocks.                                                  |
| 32:36      | Oh yeah.                                                                                                         |
| 32:37      | Yeah.                                                                                                            |
| 32:38      | I think that's a great point that if you want to do, if you want to put some AI on top of                        |
| 32:42      | this, it's probably better there that you have small building blocks that it can put                             |
| 32:46      | together as it sees fit.                                                                                         |
| 32:48      | And I think you're, you're totally onto something that this could and probably should happen                     |
| 32:53      | that you just, you mentioned that it should be voice based, but I think this would work                          |
| 32:58      | great as, you know, that you just provide a text input.                                                          |
| 33:03      | You just kind of as if, as if it was, you know, one of these popular image generators                            |
| 33:07      | or [[ChatGPT]] or whatever, you just kind of write which shortcuts you want, what you wanted                     |
| 33:13      | to do in a sentence or two, and then it generates it for you.                                                    |
| 33:17      | Actually, the other day I was looking into if anyone had built this on top of shortcuts                          |
| 33:21      | already, because I was kind of surprised that I haven't heard anything about it.                                 |
| 33:26      | But it seems like no one have kind of tackled that yet.                                                          |
| 33:29      | I'm not entirely sure why.                                                                                       |
| 33:31      | I think I don't know if the shortcuts format have been locked down even more than last                           |
| 33:35      | time I looked into it.                                                                                           |
| 33:36      | Because I seem to remember there was this tool, I don't recall what it was called, but there                     |
| 33:41      | was this tool that could take [[JavaScript]] and turn it into a shortcut.                                        |
| 33:45      | Do you remember its name?                                                                                        |
| 33:47      | Yeah, [[Jellycuts]], that's it.                                                                                      |
| 33:50      | So I'm guessing in theory, if that's possible, then you could write some AI thingy that takes                    |
| 33:57      | text or voice and turns it into a shortcut or creates a shortcut from it.                                        |
| 34:02      | Well, and that seems to be what Ari is working on, you know, the granddaddy of [[Shortcuts]]                         |
| 34:07      | who's left [[Apple]] and formed a new company based on the news articles I've read, it's                             |
| 34:14      | like he's thinking about that.                                                                                   |
| 34:15      | But I would imagine [[Apple]] has to be thinking about that internally too.                                          |
| 34:19      | Oh, yeah, yeah, I'm sure I have.                                                                                 |
| 34:21      | Yeah, I mean, there was something in the news this week as we're recording about how [[Apple|Apple's]]                     |
| 34:28      | shareholders want to force [[Apple]] to tell them what they're going to be doing with AI.                            |
| 34:33      | And yeah, I think as well, those things are like, they've got a really long list, they're                        |
| 34:37      | just not ready to share it yet, because of course, they're trying out all of these things.                       |
| 34:41      | And I feel like actually, to an extent, with some of the recent [[Shortcuts]] developments                           |
| 34:47      | that they have made, they're kind of getting there because we have this new section inside                       |
| 34:54      | of [[Shortcuts]], if you go to the folders area where there's called app shortcuts.                                  |
| 34:59      | And these are things that are created by apps that just sort of pop up and appear.                               |
| 35:05      | And you can actually enable those to appear in Siri.                                                             |
| 35:09      | They automatically appear in [[Spotlight]], at least for me, but you can also enable those                           |
| 35:13      | to appear in Siri.                                                                                               |
| 35:14      | And I feel like this is a nice sort of halfway point where we're not yet necessarily ready                       |
| 35:22      | to fully unleash an AI on us, because if you ask an AI, what's the best way to prepare                           |
| 35:29      | for a pool party, or the fastest way to prepare for a pool party, it recommends buying an                        |
| 35:34      | industrial shredder and a lot of plastic water bottles and setting up the industrial shredder                    |
| 35:40      | the wrong way around.                                                                                            |
| 35:41      | So it will shred the plastic water bottles and let the water go into the pool and the                            |
| 35:44      | plastic off elsewhere.                                                                                           |
| 35:46      | That's not a great way to prepare for a pool party.                                                              |
| 35:49      | And that's the sort of responses that you get back from AI at this point in time, which                          |
| 35:55      | AI is great for some things and other things, it'll tell you things that are just completely                     |
| 36:00      | factually incorrect, and so I feel like allowing developers to pop up and make suggestions,                      |
| 36:06      | they moved away from shortcuts actions, only happening, only appearing when a user did                           |
| 36:12      | an action repeatedly, which was such a terrible way of doing things.                                             |
| 36:17      | I understand why they thought it was a good idea, but it was a bad idea, because there                           |
| 36:21      | are so many people that finally download the app that's got shortcut support.                                    |
| 36:25      | They say, oh, now I have to go and open this file 15 times so that it can suggest an action                      |
| 36:30      | and hopefully it will pop up in shortcuts, that the actions can just be there from the                           |
| 36:34      | get go now.                                                                                                      |
| 36:36      | That's an improvement.                                                                                           |
| 36:37      | But allowing apps to just say, hey, I've made these actions for you.                                             |
| 36:42      | These are probably the things that you want to do quickly.                                                       |
| 36:45      | Like Kino has the option to create a new presentation, notes in this action, it's got the option                 |
| 36:51      | of making a new note or quick note, or accessing some of my frequently accessed things, and                      |
| 36:58      | other third party apps are in here too, they're trying to bring that stuff to us.                                |
| 37:04      | And I was just thinking as you were talking, Simon, because you can append to a text file                        |
| 37:09      | using [[Shortcuts]] is under the documents section of actions, and you can open a file using                         |
| 37:16      | [[Shortcuts]].                                                                                                       |
| 37:17      | What's really nice for [[Runestone]] is if basically you could say, hey, I want these native shortcuts           |
| 37:25      | actions to appear under my own app, as in these work with my app.                                                |
| 37:29      | And then if somebody taps the open file action from the [[Runestone]] section, it pre-populates                  |
| 37:35      | the application name.                                                                                            |
| 37:36      | But other than that, it's the same thing.                                                                        |
| 37:39      | That would be really nice because that would allow you to take advantage of what the operating                   |
| 37:45      | system is already offering, and give users what they want, plus it encourages people                             |
| 37:52      | to use shortcuts.                                                                                                |
| 37:53      | And it also means that if [[Apple]] has to update that, well, the work's on them, not on you.                        |
| 37:57      | And I feel like allowing developers to say, hey, these actions also work with my app would                       |
| 38:04      | be a really nice way of getting the ball rolling there.                                                          |
| 38:08      | Oh, yeah, yeah.                                                                                                  |
| 38:09      | That's a great idea.                                                                                             |
| 38:10      | I never thought about that, but that totally makes sense.                                                        |
| 38:13      | And I could see [[Runestone]] show a bunch of text-related actions there.                                        |
| 38:18      | And I guess one of the ways that developers are getting around this today is having a,                           |
| 38:22      | or some developers are having a tab in their app saying, usually, shortcuts, and then have                       |
| 38:26      | a list of pre-made shortcuts that users can then add to their [[Shortcuts]] library using                            |
| 38:35      | one of these iCloud share links.                                                                                 |
| 38:37      | So developers will just kind of go in and create shortcuts that perform some workflow                            |
| 38:43      | that they believe their users will, or many of the users will want, and then they just                           |
| 38:47      | put it in their app through an [[iCloud]] share link.                                                                |
| 38:50      | And that's one way of surfacing other actions that go well with your shortcuts actions as                        |
| 38:57      | a developer.                                                                                                     |
| 38:58      | But it's really not great for the scourry from a user point of view, right?                                      |
| 39:02      | You would probably want these to live in the shortcuts app.                                                      |
| 39:05      | Yeah, exactly.                                                                                                   |
| 39:06      | So if you could at least reference in some way other actions, if you've got actions that                         |
| 39:14      | would work between, say, [[Scriptable]] and [[Jayson]], for example, then being able to reference                      |
| 39:21      | that action from [[Scriptable]] in the [[Jayson]] section and vice versa, obviously, that would have                   |
| 39:26      | to come under some kind of limitation of this is from the same developer, so they can do                         |
| 39:31      | that.                                                                                                            |
| 39:32      | But if you are two totally different developers, maybe not yet.                                                  |
| 39:36      | That's something that will probably need more thought, but it would be really nice if you                        |
| 39:40      | could do something like that.                                                                                    |
| 39:42      | And hopefully that will make it better because I was looking and I was trying to think, what                     |
| 39:47      | actions might I want for [[Runestone]] and potentially opening it with a specific theme because I'm              |
| 39:55      | opening a [[JavaScript]] file, and with [[JavaScript]] files, I like this theme, but with [[Markdown]]           |
| 39:59      | files, I prefer that theme.                                                                                      |
| 40:01      | But at the same time, that's also potentially just something that could be added as a setting                    |
| 40:05      | to the app.                                                                                                      |
| 40:07      | And is that going to be better for people than a shortcut section?                                               |
| 40:10      | I don't know.                                                                                                    |
| 40:12      | You'd have to do some kind of study to find that out, but yeah, I think you're taking                            |
| 40:17      | the smart approach of not just dumping out a whole bunch of shortcut sections, which                             |
| 40:21      | then you have to maintain and support and keep around, even if you've only got four                              |
| 40:27      | people using them, they'll get very cranky if you try and take them away, I'm sure.                              |
| 40:31      | Yeah, yeah, yeah, and I think, that's a fun example of a shortcut section I could build                          |
| 40:37      | into [[Runestone]].                                                                                              |
| 40:38      | And I have other ideas along those lines, and I've heard different ideas during its                              |
| 40:47      | lifetime, but I just kind of keep coming back to, yeah, that's a great idea, but is it something                 |
| 40:52      | people actually want to use or is their target audience way too little for me to maintain                        |
| 40:57      | this shortcut section?                                                                                           |
| 40:59      | And along the same lines, when the [[Focus Mode\|focus modes]] were introduced, was it last year or the year                     |
| 41:04      | before?                                                                                                          |
| 41:05      | I don't remember, but I was like, I really wanted to do something with them.                                     |
| 41:08      | So I just brainstormed ideas, and back then I was working day and night on [[Runestone]],                        |
| 41:14      | so I wanted to bring it into a [[Runestone]] context, and it just really struggled to come up with               |
| 41:19      | something that I believe people really wanted to use.                                                            |
| 41:23      | And one of my best examples was the same as yours here, Rosemary, with switching the theme                       |
| 41:30      | in the text editor to match your [[focus mode]], but then I thought, well, in the end, I think                       |
| 41:36      | people really just want something for light mode and dark mode, and the app already respects                     |
| 41:41      | that, so you can set a theme for, yeah, one for light mode and one for dark mode.                                |
| 41:45      | So I don't think you're going to work on a different theme for working on.                                       |
| 41:50      | I mean, one use case I could see is if people use it a lot for writing, or if they use it                        |
| 41:54      | for both writing [[Markdown]] and some programming language, then they might have like a writing                     |
| 41:59      | focus mode, and then it would turn into a specific theme in their app, and they might                            |
| 42:04      | have a coding focus mode, and then it would choose another theme.                                                |
| 42:07      | I don't know.                                                                                                    |
| 42:08      | Except for people who are interested in that, really, you don't need to support it.                              |
| 42:12      | There's an action that when [[Runestone]] launches, enter the writing [[focus mode]].                                |
| 42:17      | I mean, it's not something that one of the beauties of the [[focus mode]] triggers is you                            |
| 42:22      | don't need to support it.                                                                                        |
| 42:23      | It's already there if people want it, you know?                                                                  |
| 42:26      | Yeah.                                                                                                            |
| 42:27      | And for things like changing themes and so on, realistically, most people just pick one                          |
| 42:32      | thing that they're happy with, and that's it.                                                                    |
| 42:34      | The closest thing I can think of is where you want different syntax highlighting for                             |
| 42:40      | different files, and therefore, this theme works better with that just because the colours                       |
| 42:45      | stand out more, so there's better contrast for visibility purposes or similar.                                   |
| 42:49      | But at the same time, that doesn't necessarily feel like something that should be solved                         |
| 42:54      | with automation outside of the app that feels like, if anything, that's a feature to add                         |
| 42:59      | inside of the app and not a reason to add shortcut support.                                                      |
| 43:04      | Being careful about what automation options you actually offer, and then as a user, inversely,                   |
| 43:09      | being careful about what you wish for, right?                                                                    |
| 43:14      | The thing with the monkey's paw on three wishes, I wish for three more wishes, it never works                    |
| 43:18      | out the way you're hoping for.                                                                                   |
| 43:19      | You have to kind of think through what are the steps that I'm actually hoping to achieve                         |
| 43:23      | here, and why do I think that this is the way to solve it?                                                       |
| 43:28      | That's always a good question to be asking yourself.                                                             |
| 43:30      | Although I will say, like, [[Fantastical]] gives you a high degree of control over the look                         |
| 43:37      | and settings of the application view shortcuts, and I like to have, like, there's a quarterly                    |
| 43:43      | view that I do when I'm doing planning, there's the daily view when I'm working through the                      |
| 43:46      | day, and I've coded those shortcuts into many of my other shortcuts where I can get the                          |
| 43:53      | calendar to do exactly what I want and create the exact right environment for the calendar,                      |
| 43:59      | depending on the type of work I need to do with the calendar.                                                    |
| 44:03      | And I find that very easy with shortcuts.                                                                        |
| 44:05      | I've taught a lot of people how to do it in the MacSparky Labs and on the internet, and                          |
| 44:09      | there's a lot of people who rely on that.                                                                        |
| 44:11      | I think for a coding environment, probably you've got a type of user that's not as likely                        |
| 44:16      | to want to go down the [[Shortcuts]] rabbit hole, but I think for a lot of apps, getting a setup                     |
| 44:23      | in the app via shortcuts can be very beneficial to automation-minded users.                                      |
| 44:29      | You've definitely kind of made me think that maybe I should reconsider whether that makes                        |
| 44:34      | sense to add a couple of shortcuts actions to [[Runestone]].                                                     |
| 44:37      | I guess there could be some use cases.                                                                           |
| 44:42      | That's the downside of coming on the Automator's Podcast, I think, as a developer, is we're                      |
| 44:46      | going to bully you into features and automation that we want you to put in the app.                              |
| 44:51      | Encourage, gently encourage.                                                                                     |
| 44:55      | I think the difference between something like [[Runestone]] and, say, [[DEVONthink]] is [[DEVONthink]]                   |
| 45:01      | you have a database where you put all of your data and so on.                                                    |
| 45:04      | So it's very logical in [[DEVONthink]] that you could have a work database, any personal database,                   |
| 45:09      | and maybe even a travel database or something like that, and you want different ones.                            |
| 45:13      | But [[Runestone]], it doesn't have files and so on stored in it.                                                 |
| 45:18      | You have files on your device, and you can access them and edit them using [[Runestone]].                        |
| 45:24      | I think that this is the different approach and why or why not you may want lots and                             |
| 45:30      | lots of shortcut support and so on, because the data itself doesn't live in [[Runestone]].                      |
| 45:36      | [[Runestone]] is merely a window for that data that you can choose to use the same way that                      |
| 45:42      | you could choose to use [[Textastic]], I can't pronounce it, but it's one of the ones that                         |
| 45:48      | you credited, actually, on the repo for the [[Runestone]] framework, which is another app                        |
| 45:55      | that I love.                                                                                                     |
| 45:56      | I use both [[Runestone]] and [[Textastic]] on a regular basis.                                                     |
| 45:59      | I flip between the two, depending on what it is I'm doing and why it is I'm doing it                             |
| 46:03      | like that, because they offer me different approaches to solving the same problem, but                           |
| 46:09      | sometimes one approach works better for my brain than another approach.                                          |
| 46:12      | I feel like that is the difference between some apps.                                                            |
| 46:16      | Some apps contain data, and some apps are access to data.                                                        |
| 46:20      | The ones where it's access to data, it's much more difficult to sit down and immediately                         |
| 46:27      | come up with 48 different shortcut action ideas, because, well, if you can access that                           |
| 46:31      | data using the native things through the app, then why wouldn't you do that?                                     |
| 46:39      | It's an interesting question of what [[Shortcuts]] actions should an app have, because, as you                       |
| 46:46      | said before, you can do it natively with the shortcut actions there.                                             |
| 46:53      | This episode of Automators is brought to you by Vitally.                                                         |
| 46:56      | Customer success teams today are facing a problem.                                                               |
| 46:59      | How do they connect customer data back to their work?                                                            |
| 47:01      | Vitally changes that.                                                                                            |
| 47:02      | It's a new kind of customer success platform, and all in one collaborative workspace that                        |
| 47:07      | combines your customer data with all the capabilities you expect from today's project management                 |
| 47:12      | and work platforms.                                                                                              |
| 47:14      | Because it's designed for today's customer success team, that's why Vitally operates                             |
| 47:17      | with unparalleled efficiency, improves net revenue retention, and delivers best-in-class                         |
| 47:22      | customer experiences.                                                                                            |
| 47:23      | It's a solution to helping your customer success team keep a better pulse on your customers,                     |
| 47:28      | which maximises productivity, visibility, and collaboration.                                                     |
| 47:32      | You can boost your bottom line by driving more revenue per customer with Vitally.                                |
| 47:37      | And if you take a qualified demo of Vitally, get a free pair of AirPods Pro.                                     |
| 47:41      | So if you're a customer success decision maker, actively seeking CS solutions, working                           |
| 47:46      | at a B2B software as a service company with 50 to 1,000 employees, and you're willing                            |
| 47:51      | to explore changing customer success platforms if you already have one in place, schedule                        |
| 47:55      | your call by visiting vitally.io.automators and get that free pair of AirPods Pro.                               |
| 48:02      | That's vitally.io.automators for a free pair of AirPods Pro when you schedule a qualified                        |
| 48:09      | meeting.                                                                                                         |
| 48:10      | Our thanks to Vitally for their support of this show and relay FM.                                               |
| 48:16      | So Simon, we've been talking to you about app development and shortcuts, Linda.                                  |
| 48:20      | What are you automating these days?                                                                              |
| 48:22      | I know as a developer, I guess there are some limits as to what you can do.                                      |
| 48:27      | You can't have it write [[Xcode]] for you, although I think [[Apple]] would like to be able to tell                     |
| 48:31      | you they could.                                                                                                  |
| 48:32      | Right?                                                                                                           |
| 48:33      | Isn't that the other big AI improvement we might see at some point where it starts writing                       |
| 48:36      | code for you?                                                                                                    |
| 48:37      | But what are you using for automation these days?                                                                |
| 48:40      | What are you doing?                                                                                              |
| 48:41      | Yeah.                                                                                                            |
| 48:42      | So a couple of things, but I think the first one I'd like to highlight is actually, I don't                      |
| 48:47      | know if that one's too boring because it's not something that's available to anyone but                          |
| 48:51      | me yet, but I've been building this app in my spare time called [[TextCorrect]] right now.                           |
| 48:58      | It's a horrible name.                                                                                            |
| 48:59      | I hope to come up with something better.                                                                         |
| 49:01      | Speaking of AI, it's using [[OpenAI]] APIs to correct a text.                                                        |
| 49:07      | So it's sort of like you send it a text and then you get back a corrected version of that                        |
| 49:12      | text using [[OpenAI]] APIs.                                                                                          |
| 49:15      | So it's sort of like, you know, [[Grammarly]] but built on [[OpenAI]] and way simpler than [[Grammarly]].                    |
| 49:21      | Even though it's an app that I haven't released yet and I'm actually not sure if I will release                  |
| 49:25      | it, but maybe I want to mention it because I think others can, other people can find                             |
| 49:30      | other means to build it today as well.                                                                           |
| 49:32      | And I've been using it several times a day.                                                                      |
| 49:34      | So basically what it does is when you have the original text that you want corrected                             |
| 49:41      | and the corrected version of the text, I do a [[diff]].                                                              |
| 49:44      | So this is kind of where my enthusiasm for building developer tools comes into play again                        |
| 49:49      | because I do a [[diff]] between the two texts.                                                                       |
| 49:53      | And then I show, you know, what's been changed in the text.                                                      |
| 49:59      | So before I accept using the corrected version, I can actually validate that the version that                    |
| 50:07      | the AI gave me is something that I want to post, I want to send in an email.                                     |
| 50:11      | And I kind of show everything, all the words that it has inserted, I show with a green                           |
| 50:16      | background and all of the things that it has deleted from my original text, I show with                          |
| 50:20      | a red background.                                                                                                |
| 50:21      | So I can kind of see the changes and validate that this is sane because I feel like that's                       |
| 50:25      | the thing with AI, right?                                                                                        |
| 50:27      | That sometimes, you know, it just does something that you don't understand.                                      |
| 50:32      | So you don't want to just trust it blindly, I think.                                                             |
| 50:35      | I agree.                                                                                                         |
| 50:36      | And like, I've been toying with that.                                                                            |
| 50:37      | I feel like one of the areas of AI that should be of interest to automators is text in general.                  |
| 50:43      | Like the [[Whisper]] engine is really good at doing transcription.                                                   |
| 50:49      | But then developers are applying AI grammar checking to that dictation after it's captured.                      |
| 50:56      | And so you talk into the device and something comes out that isn't even necessarily the                          |
| 51:01      | exact words you said, but it's a usable version.                                                                 |
| 51:04      | Like I did a test in the MacSparky Labs and I have this terrible habit of saying gunna                           |
| 51:10      | instead of going to when I dictate.                                                                              |
| 51:13      | And it was interesting because some of the engines will do a literal translation and                             |
| 51:18      | they'll write gunna.                                                                                             |
| 51:19      | And others, you can see where AI is getting involved and it changes it to going to, which                        |
| 51:24      | is not what I said, but it is what I meant to say.                                                               |
| 51:28      | And it's a very interesting idea that AI can actually get your intention into the document.                      |
| 51:37      | But it's also AI and not entirely trustworthy either.                                                            |
| 51:40      | So I'm glad that you are applying some thought to this because I feel like you're the exact                      |
| 51:45      | kind of developer I would like to see come up with tools that apply this stuff that would                        |
| 51:50      | do a [[diff]] and give us a way to use this stuff intelligently and not blindly.                                     |
| 51:56      | Yeah, sure, but I think the example you're coming up with there with gunna and going                             |
| 52:00      | to is quite interesting because it's unclear to me which of the two you would actually                           |
| 52:04      | prefer because going to might be correct.                                                                        |
| 52:08      | But if the AI translates it to going to, it also loses some personality here, right?                             |
| 52:13      | Because I mean, you're David, you're saying gunna and that's just the way it is.                                 |
| 52:18      | So what would you actually prefer here, David?                                                                   |
| 52:20      | Well, in my case, if it's words that are going to be published somewhere, I don't want the                       |
| 52:24      | word "gunna" ever to be published.                                                                                 |
| 52:29      | But that, it's just a, I think maybe it's a Southern California thing we do, how every                           |
| 52:36      | little area has their funny way they say words.                                                                  |
| 52:39      | Somebody's told me recently that I say mountains wrong and I didn't know that.                                   |
| 52:43      | I guess nobody else pronounces mountains the way we do in Southern California.                                   |
| 52:47      | It's just a weird quirk of the culture.                                                                          |
| 52:51      | Sounds correct to me.                                                                                            |
| 52:52      | Yeah, see, here we go.                                                                                           |
| 52:54      | See, Rose, I'm going to put you on my list of people that support me on this.                                    |
| 52:58      | But it is interesting because we're in this very new period where text processing is                             |
| 53:06      | something that's very manageable with AI tools.                                                                  |
| 53:10      | The automation tools are just starting to show up like the one you're playing with.                              |
| 53:15      | And I just think we're kind of on the verge of something very interesting with all of                            |
| 53:19      | this.                                                                                                            |
| 53:20      | And what if you could have an automation where it does the application in the clipboard as                       |
| 53:26      | opposed to doing a [[diff]], it's like there's a lot of angles to this.                                              |
| 53:32      | And I think as automators, we should all be curious about it, but also have opinions                             |
| 53:36      | about what works and what doesn't.                                                                               |
| 53:38      | Yeah.                                                                                                            |
| 53:39      | I like the idea of using this as essentially as sort of customisable contextually aware                          |
| 53:45      | autocorrect for dictation as well, you know, you've got text correct as an idea.                                 |
| 53:52      | I've linked folks to a post that you made on [[Mastodon]] and some replies with some little                      |
| 53:59      | examples, example screenshots showing how it works and what it does.                                             |
| 54:05      | And I feel like this is the sort of thing where you could actually in the app, and I'm                           |
| 54:11      | not giving you homework here because I am fully aware of what level of difficulty this                           |
| 54:16      | is, but you could have essentially different profiles.                                                           |
| 54:21      | So is David, is he dictating for a text to his wife or is he dictating for a blog post                           |
| 54:28      | because those will have two different voices.                                                                    |
| 54:30      | I'm guessing David wouldn't mind if "gunna" makes it into a text to his wife, but he doesn't                      |
| 54:36      | want it in something for a blog post.                                                                            |
| 54:38      | So being able to specifically look for things like that with a focus on removing localised                       |
| 54:48      | contractions or something like that, I'm trying to think of what the technical term for this                     |
| 54:52      | would be, but it's a regional variant, removing regionalisms from your speech.                                   |
| 55:00      | And equally somebody who is an alternative speaker, if they are writing a personnel review                       |
| 55:07      | or something in English because that's the language of their company, but their native                           |
| 55:11      | language isn't English, having something help them that is aware that they are writing something                 |
| 55:19      | that is quite official and is going to be reviewed by multiple people, so you don't want ambiguity,              |
| 55:24      | but also it needs to be aware of their native language and things that would make it through.                    |
| 55:34      | I can't think of one off the top of my head now, but there's isolation.                                          |
| 55:39      | This is a word that I often see specifically Germanic speakers using, and they actually                          |
| 55:43      | mean insulation because isolation is the word for the stuff that you put in the walls to                         |
| 55:49      | help keep your house warm, but in English, isolation means to be isolated as in to be                            |
| 55:54      | alone for everyone else.                                                                                         |
| 55:56      | It's still a word, but it is not the same word, and so having something be aware of                              |
| 55:59      | things like that and make suggestions is that's definitely a possible future for AI and things                   |
| 56:07      | like that, which can help with everybody using language.                                                         |
| 56:12      | I've been using some AI things at work recently to help me reply to emails and making sure                       |
| 56:17      | they get the right level of formality in them without the typos and the spelling mistakes                        |
| 56:23      | and so on, training it to use all of the internal names that we've got for things, so that has                   |
| 56:27      | been a fun role game.                                                                                            |
| 56:31      | It's exciting to see what possibilities we have coming towards us, and I do hope that                            |
| 56:36      | TextCorrect makes it to the App Store.                                                                           |
| 56:38      | I know you don't like the name, but I feel like the name is very effective, and honestly,                        |
| 56:42      | the little app icon, I've only seen the mini version of it in the shortcut screenshots,                          |
| 56:50      | but I quite like it, to be honest.                                                                               |
| 56:52      | It's my inner nerd just getting really happy that there's some red highlighting and some                         |
| 56:57      | green highlighting on letters, which to me explains exactly what the defaction does,                             |
| 57:02      | and I feel like that's really cool.                                                                              |
| 57:04      | I'm hoping that this will actually be released on the [[App Store]] at some point so that I can                      |
| 57:09      | buy it and grab a subscription and use it, because that's what I really want from this.                          |
| 57:15      | All right, yeah.                                                                                                 |
| 57:16      | Thanks so much.                                                                                                  |
| 57:17      | Well, I guess that means the app kind of fits the target audience, because it is made by                         |
| 57:22      | developer kind of for developers or for like-minded people, I guess, to kind of take or to correct               |
| 57:30      | it or take some of what we know from the developer world and apply it to or to correct, basically,               |
| 57:37      | and then with some sprinkling, some AI out on it.                                                                |
| 57:42      | Yeah, I'm glad to hear that, that you can kind of see yourself in those ideas.                                   |
| 57:48      | But yeah, I mean, the name is, I don't really like it, that's just the first thing that                          |
| 57:52      | popped into my head when I had to create the [[Xcode]] project, right?                                           |
| 57:55      | I mean, I had to type something, and then I just went with it, yeah, but we'll see if                            |
| 58:01      | I ever make it, if it ever makes it to the App Store.                                                            |
| 58:05      | Yeah.                                                                                                            |
| 58:06      | Well, I mean, you could always call it QWERTY, you know, the first six letters across the                        |
| 58:11      | top of any good-speaking keyboard.                                                                               |
| 58:13      | I will not disclose at this point in time how many files and projects and various folders                        |
| 58:17      | I have named QWERTY or QWERTY UI or something like that, because it's probably too many.                         |
| 58:22      | But, you know, I'm sure you'll come up with a name at some point that fits, but as it                            |
| 58:28      | is, you know, I think the idea for the app is really cool.                                                       |
| 58:31      | And this is the sort of thing where [[Shortcuts]] actions make perfect sense, right?                                |
| 58:35      | Because you're integrating the app into the workflow that you probably already have, you                         |
| 58:40      | know, maybe you've already written the text in [[Drafts]] or [[Runestone]] into a file or something,             |
| 58:45      | and then you just want to run this over it as an extra thing and confirm what it is that                         |
| 58:51      | you're doing before you update the original.                                                                     |
| 58:55      | And that's why [[Shortcuts]] really, you know, will fit in for something like that.                                  |
| 59:00      | Or equally, if you just want to write something and then send it off somewhere else, you could                   |
| 59:04      | start in the app itself.                                                                                         |
| 59:05      | So yeah, this looks very exciting.                                                                               |
| 59:08      | Right, yeah.                                                                                                     |
| 59:09      | I mean, totally.                                                                                                 |
| 59:10      | And I feel like I really want to release it one day, because I use it multiple times                             |
| 59:14      | a day, just like you described through [[Shortcuts]] or through, I initialise, or what do you say,                   |
| 59:21      | I run a shortcut through many, many different apps.                                                              |
| 59:24      | I often use this on [[Mastodon]].                                                                                  |
| 59:26      | If you ever see me post anything on [[Mastodon]], it has probably been through text correct,                       |
| 59:31      | at least for the past two months or so, because I feel like I've managed to tweak it enough                      |
| 59:37      | that it corrects my mistakes, but it still keeps my personality.                                                 |
| 59:42      | So I feel like I can justify using it on [[Mastodon]], right, where you want a sense of personality                |
| 59:49      | from the people that you follow, right?                                                                          |
| 59:52      | And I feel like it kind of works well.                                                                           |
| 59:55      | I mean, and I use it multiple times a day, honestly, the only thing keeping me from releasing                    |
| 01:00:00   | it is that there would be some ongoing costs, because I would need to pay for the, to use                        |
| 01:00:06   | the open API, sorry, [[OpenAI]] API.                                                                                |
| 01:00:10   | And so I think this would need to be, either I have a high upfront cost that no one would                        |
| 01:00:15   | want to use it, or it would need to be a subscription app, and I haven't made a subscription                     |
| 01:00:19   | app yet.                                                                                                         |
| 01:00:20   | So that would be something new for me to tackle, and I don't know if, yeah, I'm up for it yet.                   |
| 01:00:25   | I mean, that would be something new, but at least you'd be trying it with [[StoreKit]] 2 instead                      |
| 01:00:28   | of the original [[StoreKit]].                                                                                         |
| 01:00:30   | And I've heard that the new version is much nicer to work with there.                                            |
| 01:00:33   | So, you know, that's definitely something to help you out there, which is good.                                  |
| 01:00:39   | So, yeah, I mean, I feel like, I feel like this is the sort of app where, you know, some                         |
| 01:00:44   | people will be like, well, can't I just input my own API key?                                                    |
| 01:00:48   | And then they get a massive bill from [[OpenAI]] and get really cranky about.                                       |
| 01:00:51   | So I think they would be better off getting you to handle the subscription for them.                             |
| 01:00:56   | And yeah, just enjoying the nicely polished app that comes out of it as a result.                                |
| 01:01:02   | Well, I think somebody's going to do this app, you know what I mean?                                             |
| 01:01:06   | Because there's just this explosion of these AI based text related apps.                                         |
| 01:01:13   | So I think you should do it because I think you're one of the best developers to make                            |
| 01:01:18   | a good version of it that people would actually like to use.                                                     |
| 01:01:21   | So many of them seem like people are just, you know, using [[Whisper]] or whatever and just                          |
| 01:01:26   | dumping out these little apps without really a lot of consideration.                                             |
| 01:01:29   | So I'd love to see you release it, but it also just opens in my mind the idea that, you                          |
| 01:01:34   | know, this is a whole different avenue of automation that's emerging right now.                                  |
| 01:01:39   | And people listening to this show, I think, should be keeping track of it.                                       |
| 01:01:42   | There's a lot of people that are either overly afraid of AI or overly are not cautious enough                    |
| 01:01:49   | with it, you know, putting data into these engines that they wouldn't want to have out                           |
| 01:01:54   | there.                                                                                                           |
| 01:01:55   | And I feel like, you know, this is an intelligent use of it, and that's what we should all be                    |
| 01:01:59   | encouraging right now is finding ways to use AI to make your life better.                                        |
| 01:02:04   | Being aware of what it can do and what it can't do, you know, like it can correct your                           |
| 01:02:11   | text for you and give you a nice example.                                                                        |
| 01:02:14   | It probably can't do your pool party, you know, and we just got to find those limits,                            |
| 01:02:19   | you know, and I really, I would encourage you to pursue that.                                                    |
| 01:02:24   | Thanks so much.                                                                                                  |
| 01:02:25   | That's so kind of you.                                                                                           |
| 01:02:26   | You really are getting leaned on.                                                                                |
| 01:02:28   | You're really getting leaned on today, so I'm sorry about that.                                                  |
| 01:02:31   | Yeah.                                                                                                            |
| 01:02:32   | I was just going to say in advance, folks, don't pester Simon about [[TextCorrect]], because                        |
| 01:02:36   | if you see if he has to spend all of his time replying to [[Mastodon]] posts                  |
| 01:02:41   | about, hey, I want this really cool app that you mentioned on automators, we won't get                           |
| 01:02:44   | it.                                                                                                              |
| 01:02:45   | Give him some development time.                                                                                  |
| 01:02:46   | So, yeah, but I'm sure we will see it at some point, and of course, you'll have to                               |
| 01:02:51   | let us know if it does make it out to the app store so we can talk about it on Automators                        |
| 01:02:54   | and let everyone know when it's out, because, you know, this is the sort of tool that is                         |
| 01:03:00   | just incredibly useful for people, and I feel like it's the small tools that make your life                      |
| 01:03:05   | easier that are the ones that, you know, people kind of overlook a little bit, but then once                     |
| 01:03:11   | they realise how useful it is, it becomes, you know, a lynchpin of their workflow.                               |
| 01:03:18   | And that is, you know, the sort of thing that I personally love, you know, I'm always looking                    |
| 01:03:21   | for like the little thing that makes my life easier.                                                             |
| 01:03:25   | And that's really a theme today, honestly, is like small, the shortcut space automation                          |
| 01:03:29   | tools, small AI based automation tools, you know, you get a few of those in your life                            |
| 01:03:34   | and they can make a difference.                                                                                  |
| 01:03:36   | Well, Simon, I want to thank you for coming.                                                                     |
| 01:03:39   | If people are interested in what you're up to, where should they go?                                             |
| 01:03:43   | MasterDun, they should follow me on MasterDun, then where I still haven't gotten used to                         |
| 01:03:47   | read out loud a [[Mastodon]] username.                                                                              |
| 01:03:49   | I guess it's simonbs@mastodon.social.                                                                     |
| 01:03:54   | I guess that's the username.                                                                                     |
| 01:03:55   | Yeah.                                                                                                            |
| 01:03:56   | I mean, if you go to [SimonBS.dev](https://SimonBS.dev) in your browser, you'll find links to my social media profiles.                 |
| 01:04:02   | And we've got links to that in the show notes as well.                                                           |
| 01:04:06   | All right.                                                                                                       |
| 01:04:07   | Great.                                                                                                           |
| 01:04:08   | And thanks so much for having me.                                                                                |
| 01:04:10   | It's been a pleasure chatting, I mean, nerdy stuff with you.                                                     |
| 01:04:13   | I love that.                                                                                                     |
| 01:04:15   | Yeah.                                                                                                            |
| 01:04:16   | Well, we love what you're doing.                                                                                 |
| 01:04:18   | We want to thank our sponsors today.                                                                             |
| 01:04:19   | That's our friends over at LinkedIn and Vitally.                                                                 |
| 01:04:22   | We are the Automators Podcast.                                                                                   |
| 01:04:23   | You can find us at relay.fm/automators, you can find the forums at talk.automators.fm.                           |
| 01:04:30   | If you are an Automators Max subscriber, the three of us are going to talk a little bit                          |
| 01:04:33   | about things that we've been meaning to automate, but haven't.                                                   |
| 01:04:36   | It's actually, I'm really looking forward to this discussion.                                                    |
| 01:04:39   | You can learn more about Automators Max over at relay.fm/automators.                                             |
| 01:04:43   | It's the ad-free, extended version of the show.                                                                  |
| 01:04:46   | Help support the show, and we'd really appreciate it.                                                            |
| 01:04:48   | Otherwise, we'll see you next time.                                                                              |
| 01:04:50   | Goodbye, folks.                                                                                                  |
| 01:04:52   | Bye.                                                                                                             |
