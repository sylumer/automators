---
status: "incomplete"
fc-date:
  year: 2022
  month: 12
  day: 16
fc-category: "podcast"
podcast: "Automators"
published: 2022-12-16
duration: 5662
formattedduration: "01:34:22"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/117"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators117.mp3"
episode: 117
title: "117: Magic Online Automations with Make"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode David and Rosemary dive into Make.com and get nerdy with a new online automation platform. And because it's the holidays they also touch on some of their holiday automations!

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 117 Discussion](https://talk.automators.fm/t/117-magic-online-automations-with-make/14928)

# Sponsors
- [[MasterClass (Sponsor)|MasterClass]] - Get unlimited access to every class.
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.

# Show Notes
- [Make](https://www.make.com/en/register)

# Transcription
  
| Time Index | Transcription                                                                                             |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the automation podcast about making technology to all of                |
| 00:06      | your work for you, because that is how we roll around here.                                               |
| 00:10      | I am Rosemary Orchard and joined, as always, by my co-host, David Sparks.                                |
| 00:13      | Hey, David, how are you?                                                                                  |
| 00:14      | I am excellent, Rose, really looking forward to today's show.                                             |
| 00:18      | We're going to be talking about make, and I have lots of questions for you.                               |
| 00:22      | I know you're in this one deep and looking forward to this.                                               |
| 00:25      | Yeah.                                                                                                     |
| 00:26      | Yeah.                                                                                                     |
| 00:27      | I've been in the makings for a long time, because we've been talking about [[Make\|Integromat]],                    |
| 00:33      | as it used to be called, and then make on and off, and I've got a lot of scenarios set                    |
| 00:37      | up in make.                                                                                               |
| 00:39      | I think it's one of those things that is going to be really good for a listeners to                       |
| 00:42      | hear about for two reasons.                                                                               |
| 00:45      | One, it's certainly cheaper than Zapier, and it's an alternative to Zapier, and if this                   |
| 00:51      | is better than that, but also it looks different, it is a very visual setup to create.                    |
| 00:59      | I think that some people struggle with a very block-based layout, some people struggle with               |
| 01:04      | shortcuts for exactly this reason, so it's always nice to look at automation solutions                    |
| 01:09      | that are a little bit different to the other ones that are going.                                         |
| 01:13      | Yeah.                                                                                                     |
| 01:14      | Before we get started, though, a couple things.                                                           |
| 01:16      | Number one is, next episode, we're going to do Q&A, questions and answers.                                |
| 01:20      | We've got a list already from the forum and some of the emails you sent us, but we would                  |
| 01:24      | like to supplement it, so if you have automator questions and answers, get them in, so we                 |
| 01:29      | can include them in the outline for the next show.                                                        |
| 01:32      | We'd really love to hear you.                                                                             |
| 01:33      | Yeah.                                                                                                     |
| 01:34      | I guess the best place to send that, there is a feedback form at relay.fm.automators.                     |
| 01:38      | Yep.                                                                                                      |
| 01:39      | Yep.                                                                                                      |
| 01:40      | There's a link there on the side, but you can also, if you're in the Relay FM members                    |
| 01:45      | discord, then hi, thanks for being a member.                                                              |
| 01:48      | You can also use the question mark ask automators function that's in show follow up is probably           |
| 01:53      | the best channel for that.                                                                                |
| 01:55      | And of course, you can also use hashtag ask automators on Twitter.                                        |
| 01:58      | I do not have a masted on a hashtag search setup yet.                                                     |
| 02:02      | That is actually surprisingly difficult to do, but I'll look into that for a future one.                  |
| 02:08      | So maybe we'll end up talking social media in the future, David.                                          |
| 02:11      | Yeah, maybe.                                                                                              |
| 02:12      | Well, since you raised it, actually, let's come back to that in a second, because there's                 |
| 02:15      | one other announcement I have for you today in automators max, we're going to be talking                  |
| 02:19      | about the [[Stream Deck]] plus that's the new [[Stream Deck]] with 400% more knobs.                               |
| 02:26      | How's that?                                                                                               |
| 02:27      | Oh yeah.                                                                                                  |
| 02:28      | Yeah.                                                                                                     |
| 02:29      | Yeah.                                                                                                     |
| 02:30      | Yeah.                                                                                                     |
| 02:31      | Yeah.                                                                                                     |
| 02:32      | Yeah.                                                                                                     |
| 02:33      | Yeah.                                                                                                     |
| 02:34      | Yeah.                                                                                                     |
| 02:35      | Yeah.                                                                                                     |
| 02:36      | Yeah.                                                                                                     |
| 02:37      | Yeah.                                                                                                     |
| 02:38      | Yeah.                                                                                                     |
| 02:39      | Yeah.                                                                                                     |
| 02:40      | Yeah.                                                                                                     |
| 02:41      | Yeah.                                                                                                     |
| 02:42      | Yeah.                                                                                                     |
| 02:43      | Yeah.                                                                                                     |
| 02:44      | Yeah.                                                                                                     |
| 02:45      | So, Mastodon, are you on it?                                                                              |
| 02:48      | Is this how big of a deal is this to you?                                                                 |
| 02:51      | Well, I mean, I have been on Mastodon for a very long time, so before the cool kids                       |
| 02:57      | thought it was cool.                                                                                      |
| 02:58      | So for me, it's just another place where the same thing that I post to micro.blog and Twitter             |
| 03:04      | also goes.                                                                                                |
| 03:05      | So I cross post, I post via micro.blog because it can just do all the things for me.                      |
| 03:11      | But for me, mostly it's just about being wherever people are going to be.                                 |
| 03:15      | And there has been a huge movement of folks from Twitter to mastodon over the last couple                 |
| 03:21      | of weeks and a month or so.                                                                               |
| 03:23      | So I personally feel it's pretty important to be there just because otherwise I'm going                   |
| 03:27      | to be missing out on all the fun things, you know, people have been tagging me and telling                |
| 03:31      | me about some cool stuff.                                                                                 |
| 03:32      | So it's certainly been worth me being there.                                                              |
| 03:34      | Yeah.                                                                                                     |
| 03:35      | You know, I just am not very good at engaging in these large social media platforms.                      |
| 03:39      | I've never been very good at Twitter.                                                                     |
| 03:41      | I'm probably not going to be very good at mastodon, but I'm there too.                                    |
| 03:45      | What's your address, Rose?                                                                                |
| 03:47      | I am rosemary orchard at snailedit.social because we're nailing it online slowly and socially              |
| 03:54      | in this particular case, which is always good fun.                                                        |
| 03:57      | Where are you, David?                                                                                     |
| 03:58      | MacSparky at mastodon.social.                                                                            |
| 04:00      | So we're out there and checking it out.                                                                   |
| 04:03      | I do like your idea, frankly, of just going in with all three of them, you know, and setting              |
| 04:08      | up an automation.                                                                                         |
| 04:09      | What is your backbone for your automation to post to all three at once?                                   |
| 04:13      | Micro.blog, like I post to it and it's actually, I have that on my own domain name                      |
| 04:20      | as well.                                                                                                  |
| 04:21      | So it's, it's all mine, which is one of the beautiful things about Micro.blog.                          |
| 04:25      | Manton has done a really good job setting that up.                                                        |
| 04:28      | And then that posts for me automatically to Twitter and mastodon.                                         |
| 04:33      | So that just does the things.                                                                             |
| 04:35      | The automation is on Micro.blog.                                                                        |
| 04:36      | They do the cross post for you.                                                                           |
| 04:38      | Yeah.                                                                                                     |
| 04:39      | Yeah.                                                                                                     |
| 04:40      | I don't, it don't even need something like make.                                                          |
| 04:42      | Even though I could do it using make, I don't need to.                                                    |
| 04:45      | So I've simplified.                                                                                       |
| 04:46      | I use the right tool for the right job.                                                                   |
| 04:48      | Yeah.                                                                                                     |
| 04:49      | Because, because, because Manton is smart.                                                                |
| 04:52      | The only downside of that is now you've got to go check three platforms when you post                     |
| 04:56      | to see.                                                                                                   |
| 04:57      | Ah, let's see.                                                                                            |
| 04:58      | This is the trick because you don't actually have to use mastodon.                                        |
| 05:03      | Micro.blog actually uses activity pub.                                                                  |
| 05:06      | So people can just follow you on Micro.blog with their mastodon accounts, which means                   |
| 05:10      | that the stuff will come back to Micro.blog if they do that.                                            |
| 05:14      | I am currently not doing that for a number of different reasons, but I had that set up                    |
| 05:19      | at one point and that was pretty great.                                                                   |
| 05:21      | So I personally think that Micro.blog is really a community to be part of as well.                      |
| 05:25      | So.                                                                                                       |
| 05:26      | Yeah.                                                                                                     |
| 05:27      | Well, I, and I need to, I just need to kind of dive into what I'm going to be doing going                 |
| 05:30      | forward.                                                                                                  |
| 05:31      | Um, uh, I've been using Twitter historically, but now I'm on mastodon and I'm a big fan                   |
| 05:36      | of Manton and, uh, the stuff he's done.                                                                   |
| 05:39      | So I'm going to be looking into that.                                                                     |
| 05:41      | There's a future show there.                                                                              |
| 05:42      | Hang in there.                                                                                            |
| 05:43      | We'll, we'll come back to this.                                                                           |
| 05:44      | Yeah.                                                                                                     |
| 05:45      | But either way, uh, getting back to, uh, online automation at the beginning of the year, uh,              |
| 05:50      | we talked about things we wanted to pull off in 2022.                                                     |
| 05:54      | We are very nearly at the end.                                                                            |
| 05:55      | And I don't know if you recall, one of my big ones was I want to get better at online                     |
| 05:59      | automation tools and, uh, the hangup for me, Rose, is that the fact that, uh, I don't use                 |
| 06:06      | a lot of online services.                                                                                 |
| 06:08      | Like I am not using the [[Google]] platform for calendars and, and email.                                     |
| 06:13      | And, you know, that historically a lot of these web based automation tools really require                 |
| 06:19      | you to be on Google to get the best features out of them.                                                 |
| 06:23      | And I'm not, you know, a lot of the stuff I do is local apps and I use local automation                   |
| 06:28      | platforms, [[Keyboard Maestro]], [[Shortcuts]], [[AppleScript\|AppleScripts]], all that, all the stuff you                       |
| 06:32      | can do locally in your computer.                                                                          |
| 06:34      | I kind of like that.                                                                                      |
| 06:35      | Um, but I do have some exposure to the internet with some of my platforms and I felt, I felt              |
| 06:41      | like at the beginning of the year, I needed to be doing better at that.                                   |
| 06:44      | And here we are in December and Rose, I haven't really done much, but I've been watching from             |
| 06:49      | the sidelines as you increasingly move your automation over to make.                                      |
| 06:54      | And I've been playing with make a little bit, uh, uh, for folks who are, uh, not familiar,                |
| 06:59      | uh, you know, [[Make]] formerly known as [[Make\|Integromat]], which is a terrible name.                             |
| 07:05      | Can we agree to that, [[Make\|Integromat]]?                                                                         |
| 07:07      | What does that even mean?                                                                                 |
| 07:08      | Well, I mean, [[Make\|Integromat]], uh, it's one of those things, right?                                            |
| 07:11      | Pages, keynotes, numbers, fabulous names, impossible to Google.                                           |
| 07:16      | Yeah.                                                                                                     |
| 07:17      | [[Make\|Integromat's]], not a great name, very easy to Google, [[Make]] good name, bad to Google.                        |
| 07:23      | Yes.                                                                                                      |
| 07:24      | It's one of those things I feel like, uh, you know, when some lose some with this, um,                    |
| 07:28      | but you know what, their, their new website is purple.                                                    |
| 07:31      | So they won me with, with that, uh, when they moved everything over, which, you know, I,                  |
| 07:36      | I love purple.                                                                                            |
| 07:37      | I mean, blue is pretty good, but I'm a sucker for purple, especially that nice purple gradient            |
| 07:40      | that they've got now.                                                                                     |
| 07:41      | It's, uh, it's, it's definitely exactly my colours, literally the colour of my hair right                   |
| 07:46      | now, actually, to be honest.                                                                              |
| 07:47      | Oh man.                                                                                                   |
| 07:48      | That's good.                                                                                              |
| 07:49      | I haven't seen a recent picture of you.                                                                   |
| 07:50      | I like that.                                                                                              |
| 07:51      | Maybe I'll do that one day.                                                                               |
| 07:52      | I'm gonna dye my hair purple in solidarity with my friend Rose.                                           |
| 07:55      | What do you think?                                                                                        |
| 07:56      | Yeah.                                                                                                     |
| 07:57      | I mean, I've got, I've got a little bit of teal in there as well right now, David, uh,                    |
| 08:00      | because it's Christmas, uh, and I'm going to a 1920s themed party and, uh, peacock, this                  |
| 08:05      | were a big thing in the 20s, so I decided that I was going to turn my hair into a sort                    |
| 08:08      | of peacock instead.                                                                                       |
| 08:09      | A flapper.                                                                                                |
| 08:10      | Um, yeah, exactly.                                                                                        |
| 08:11      | Like, I've got, I've got the dress and everything I'm going to be dressing up tomorrow, actually,         |
| 08:15      | as we record this episode.                                                                                |
| 08:17      | So, uh, yeah, it should be, uh, should be pretty, uh, fun, but, uh, in the meantime,                      |
| 08:21      | uh, we both get to use make, which it has purples like my hair, so, you know, that's                      |
| 08:27      | pretty good.                                                                                              |
| 08:28      | And you can type make.com.                                                                                |
| 08:29      | So, uh, the Google search thing is, is solved with the URL.                                               |
| 08:32      | Well, yeah, it's just if you're looking for more examples than they have on their website,                |
| 08:36      | but you know, they've got plenty of those.                                                                |
| 08:38      | All right.                                                                                                |
| 08:39      | So, so both of us have been looking at make, you've been diving deeper than I have, and                   |
| 08:43      | I am feeling the pressure of my promise at the beginning of the year to get better at                     |
| 08:47      | this over the year.                                                                                       |
| 08:48      | I am just down to a couple of weeks now.                                                                  |
| 08:50      | And, uh, yeah.                                                                                            |
| 08:51      | So this really, this episode is a call for help really more than anything else.                           |
| 08:54      | It's, it's me trying to, to live up to my word.                                                           |
| 08:57      | And I know you've been doing a lot of it.                                                                 |
| 08:58      | So let's just start talking about make, you know, um, we've had fun talking about the                     |
| 09:04      | name, but, uh, what is it that makes this online automation tool unique?                                  |
| 09:09      | Well, I mean, to start with, let's just have a quick look at what online automation tools                 |
| 09:14      | do because, uh, you know, you can use services like, say, if this and that, uh, to turn on                |
| 09:20      | your hue lights at sunset or something like that.                                                         |
| 09:23      | The problem with that is then you are relying on the internet being up to be able to talk                 |
| 09:28      | to your lights, uh, and it knowing correctly when sunset is, and, uh, you know, some, sometimes           |
| 09:33      | the Internet's and time zones are difficult.                                                              |
| 09:37      | Um, so, you know, that's one sort of way that you could use online tools, but the where                   |
| 09:41      | online automation tools really excel is something like, Hey, this email came in and I need like           |
| 09:47      | this, this entry to be created in this database for me, um, or, oh, right.                                |
| 09:53      | Hey, the, the data for the next automators episodes there, I'm just going to create the                   |
| 09:57      | Google doc for you right now, um, because then you and I don't have to go, Hey, did                       |
| 10:01      | you make your Google doc?                                                                                 |
| 10:02      | Yeah.                                                                                                     |
| 10:03      | Where is it?                                                                                              |
| 10:04      | Oh, I don't know.                                                                                         |
| 10:05      | Uh, I thought I made it, uh, you know, it, it just happens and it's there, which is great.                |
| 10:08      | Um, so, you know, it, it's, it's really good for connecting any of those services which                   |
| 10:13      | are already online or also, you know, it can be for connecting things which are on your                   |
| 10:17      | Mac to, you know, the wider internet.                                                                     |
| 10:20      | You can easily have [[Keyboard Maestro]] paying a web hook URL and then it, uh, make, um,                     |
| 10:26      | or if your a user of Zapier, can then pick that up and go off and just do the rest of                     |
| 10:30      | it for you because you don't necessarily need to do that all on your device.                              |
| 10:34      | And when it's, you know, taking thing from internet service A and putting it in internet                  |
| 10:39      | service B, getting your Mac involved or your iOS device is actually a pretty fast way to                  |
| 10:44      | slow things down because then that device has to be there sitting there waiting for,                      |
| 10:50      | you know, the thing to happen.                                                                            |
| 10:51      | And if it isn't there, what's going to happen is it going to get dropped on the floor.                    |
| 10:54      | So that's, you know, that's where the, the ways that online automation really excels,                     |
| 11:00      | uh, for this sort of thing.                                                                               |
| 11:01      | So, you know, I've found that the ways that make is different has, uh, you know, certainly                |
| 11:08      | helped me with this.                                                                                      |
| 11:09      | So, um, I should note that, um, you know, when I first started with make, if this and                     |
| 11:13      | that at that time supported, uh, one step actions, so if this, then that, there was                       |
| 11:19      | no and off to the that, um, and, uh, Zapier, uh, which I believe is still the case, uh,                   |
| 11:26      | charges a, uh, higher tier plan if you would like branching available.                                    |
| 11:30      | Um, and for me, uh, branching, which is the ability to get to a certain point in your                     |
| 11:35      | workflow and then go, okay.                                                                               |
| 11:37      | And now if this thing go and do that, and if that thing go and do that thing is, uh,                      |
| 11:43      | really, you know, like the key point, uh, where I need to, I need that in a lot of flows.                 |
| 11:49      | Um, and it's just not something that you can get at least at that time for me.                            |
| 11:55      | It wasn't affordable to me.                                                                               |
| 11:56      | I couldn't justify the price of paying, I believe it was $50 a month for Zapier when                      |
| 12:00      | I was on the $20 a month plan.                                                                            |
| 12:02      | Uh, and I've just double checked.                                                                         |
| 12:03      | Uh, it is still a higher tier plan if you need branching, um, which is a bit of a shame.                  |
| 12:09      | Um, so, uh, make just includes that straight up, but the most, most important thing for                   |
| 12:14      | me is it's visual.                                                                                        |
| 12:16      | Okay.                                                                                                     |
| 12:17      | So the, you know, if this and that and Zapier are both, there's a thing at the top and then               |
| 12:21      | there's an arrow taking you to the next thing and then there's an arrow taking you to the                 |
| 12:23      | next thing and they're all squares.                                                                       |
| 12:26      | [[Make]] is first of all cute little circles with the icon of whatever service in it is in there              |
| 12:30      | that you're using.                                                                                        |
| 12:31      | It's, um, discord, it's got a little discord thingy.                                                      |
| 12:35      | I don't know what that, that it's like an animal-ish, monster-y cute thing.                               |
| 12:39      | Either way, it's cute.                                                                                    |
| 12:40      | If it's, if it's Google sheets, it'll be green with a like spreadsheet icon in it.                        |
| 12:44      | Um, if it's, uh, Twitter, it'll be blue with the bird, uh, you know, you get the idea.                    |
| 12:48      | Um, and so you have those and you've got your dots linking them together, but then when                   |
| 12:52      | there's branches, like you get multiple dots coming out and you can add filters on every                  |
| 12:58      | single one of those connections if you want to.                                                           |
| 13:01      | And just, you know, really, you know, I, I find the fact that like you've just got this                   |
| 13:06      | little dot and you click on it and then you, you get like a full form with all of the,                    |
| 13:11      | the information that you could possibly want to enter, like to start with.                                |
| 13:14      | And then you've got the extended form, which has got literally every field in that you                    |
| 13:17      | might need a very nice way to automate things just because it looks a little bit pretty,                  |
| 13:22      | but it's also just so nice and visual and when you've got branching, it's, it's very                      |
| 13:26      | easy to understand what's going where.                                                                    |
| 13:28      | And as you watch, like if you run the, the actual scenario, which is what, um, make calls,                |
| 13:34      | you know, your individual automations, you see each circle pulse, um, as it goes.                         |
| 13:39      | Like there's a ring that goes around the circle that fills as it does its action.                         |
| 13:43      | And then it passes it to the next one and the next one and the next one.                                  |
| 13:46      | Um, and I just find that to be a really nice effect, which is actually very useful.                       |
| 13:51      | So I can see where something's getting bogged down or stuck.                                              |
| 13:54      | Yeah.                                                                                                     |
| 13:55      | It's very user friendly.                                                                                  |
| 13:56      | I mean, that's my, my general impression and they've got a very healthy set of connected                  |
| 14:01      | services, you know, um, uh, one of the things that stood out to me in my experimentation                  |
| 14:06      | with it is the easy way in which it displays the available actions, you know, like, um,                   |
| 14:12      | for instance, I use teachable as a back in for the max Sparky labs.                                       |
| 14:15      | I connected it to make.                                                                                   |
| 14:17      | And there's a whole host of options I've got there, like I can search student databases.                  |
| 14:21      | I can deal with student like a request and, um, this is a nice form of automation for                     |
| 14:27      | me in the sense that normally I'd have to go to the website, log in, do all this nonsense.                |
| 14:32      | And to the extent I can like automate this through make, then it starts, you know, earning                |
| 14:37      | its keep on my, on my computer or on the web, uh, as with all web services, it's nice because             |
| 14:43      | it's running on the web behind the scenes.                                                                |
| 14:46      | Doesn't require your Mac to be turned on.                                                                 |
| 14:48      | It's something that just happens, you know, but as with all web services, it's nice because               |
| 14:43      | it's running on the web behind the scenes, doesn't require your Mac to be turned on.                      |
| 14:48      | It's something that just happens, you know, but as with all web services, it needs to                     |
| 14:52      | be connected to web services.                                                                             |
| 14:54      | Uh, if you've got local data on your computer, these generally don't do very good.                        |
| 15:00      | Like if I wanted to, to do something with OmniFocus, uh, I don't think it's gonna be                      |
| 15:04      | very good for it.                                                                                         |
| 15:05      | And as I say those words, I'm thinking Rosa's going to now tell me how she runs OmniFocus                 |
| 15:08      | with it.                                                                                                  |
| 15:09      | But I mean, I have two ways of doing it.                                                                  |
| 15:11      | First of all, mail drop, uh, because you can just email things to get them into OmniFocus.                |
| 15:15      | Second of all, uh, for anything that's local, at least on an iPhone, uh, I just use my PushCut            |
| 15:20      | Automation server.                                                                                        |
| 15:21      | Uh, uh, should know that I, I'm part of the team who's helping develop and maintain PushCut               |
| 15:26      | right now.                                                                                                |
| 15:27      | Um, but, um, you know, I use PushCut Automation server as a bridge because I haven't, I have              |
| 15:32      | a couple of services like that, you know, I have OmniFocus, um, I want to get things                      |
| 15:36      | into [[Drafts]].                                                                                              |
| 15:37      | Um, I use good links for my read it later service and these don't have, you know, uh,                     |
| 15:42      | a web service that you can connect to with just an API that you can fire data at, um,                     |
| 15:47      | you know, they're partially able to do some of this stuff, but for me, it's just easier                   |
| 15:52      | to just, Hey, I'll just call my PushCut server, which by the way, it does have, uh, integration.          |
| 15:58      | And, uh, then off you go that it just handles it for you because, you know, I've already                  |
| 16:03      | got a shortcut.                                                                                           |
| 16:04      | I'll take advantage of that and just, you know, I use that instead.                                       |
| 16:08      | So that, that's how I work around that.                                                                   |
| 16:11      | And honestly, I think that is the trick, right?                                                           |
| 16:13      | Getting to know the, the pluses and minuses of these services and, and choosing the right                 |
| 16:18      | weapon, you know, uh, or maybe the weapon weapon, let's say tool, you know, we're all                     |
| 16:24      | wearing automation tool belts.                                                                            |
| 16:26      | We've got little screwdrivers like tech six banner and we've got big drills like keyboard                 |
| 16:31      | maestro.                                                                                                  |
| 16:32      | And I feel like this is just, you know, one more tool that you can bring to the game.                     |
| 16:36      | And, uh, it will make sense in some cases and not sense in others.                                        |
| 16:40      | Like, uh, one of the things I'm working on, we'll get into in a minute is, um, uh, adding                 |
| 16:46      | slack messages when I create new air table entries.                                                       |
| 16:49      | You know, that's something that this is perfect for because, you know, they're both web services.         |
| 16:53      | They both have hooks into the service and you're good to go.                                              |
| 16:57      | Um, one of the things I've, I've noted is that it does not have a connection to day                       |
| 17:02      | one.                                                                                                      |
| 17:03      | And I feel like I don't know what the story is with [[Day One]].                                              |
| 17:06      | Like they got great hooks into, to [[IFTTT]] or [[IFTTT\|If This Then That]], but they've been like                     |
| 17:12      | silent on all the other platforms and I don't know what the deal is there, but, uh, I love                |
| 17:16      | those automations when I put a new blog post up at MacSparky, it gets added to a specific                |
| 17:22      | journal on [[Day One]].                                                                                       |
| 17:23      | And there's a couple of other things I do and, uh, it's just a great automation for                       |
| 17:26      | me to pull something off the web and put it in a book.                                                    |
| 17:30      | But you know, uh, otherwise it's, it's pretty inclusive.                                                  |
| 17:34      | The list is pretty good.                                                                                  |
| 17:36      | Yeah.                                                                                                     |
| 17:37      | And I should say like, uh, for something like, for example, Mastodon, which doesn't have                  |
| 17:41      | an integration yet, because the way that these integrations get made to be clear, whether                 |
| 17:44      | this is Zapier, if this is not or make, uh, is not that the Zapier developers go out there                |
| 17:49      | and they make a thing, uh, which they may do for some really big platforms, like say                      |
| 17:53      | WordPress.                                                                                                |
| 17:54      | Um, but they're not going to do for a smaller service such as push cut, but the way that                  |
| 17:59      | those come into being is that, um, you know, the, the developer of that service has to                    |
| 18:05      | go and make that integration.                                                                             |
| 18:07      | Um, and of course these three things, uh, from personal experience do not work in the                     |
| 18:11      | same way.                                                                                                 |
| 18:12      | Um, you some, you know, as Zapier and make our much easier, they can just connect to,                     |
| 18:16      | uh, sorry, if this and that, um, and, and, and, uh, make our easier, they can just sort                   |
| 18:21      | of connect to your usual API.                                                                             |
| 18:23      | Um, but, um, if this and that does require a little more massageing and, uh, Zapier requires               |
| 18:29      | you to create like a whole little special thing, uh, for them, um, which fortunately                      |
| 18:33      | for me is in JavaScript, but, uh, I can imagine that for some developers, this might be a                 |
| 18:38      | tricky thing to do.                                                                                       |
| 18:39      | And in some cases it's just straight up not possible.                                                     |
| 18:42      | Like I don't think you are going to see, uh, a [[Drafts]] integration with, um, make if this                  |
| 18:48      | and that or Zapier ever because agile tortoise is using, uh, your cloud kit data and it's                 |
| 18:54      | in your personal store and getting that into a way in, in a state that you can just sort                  |
| 18:59      | of like read that data out and add things to it and so on.                                                |
| 19:02      | Uh, I've personally tried using those cloud kit libraries, uh, for to try and get that                    |
| 19:07      | data out so not easy or fun.                                                                              |
| 19:11      | And if the, if you don't have a lot of users who are going to want or need this, then it's                |
| 19:15      | not going to be easy to do.                                                                               |
| 19:17      | So, uh, yeah, I'm not, I'm not sure why, uh, [[Day One]] hasn't added support for a Zapier                    |
| 19:22      | or, um, a make, uh, maybe they will after the show, maybe they're listening and they're                   |
| 19:26      | going, oh, cool.                                                                                          |
| 19:27      | Didn't realise people were using me cause let's take a look at that.                                      |
| 19:30      | As you said, right?                                                                                       |
| 19:31      | You've got a tool, a lot of tools.                                                                        |
| 19:32      | You've got to pick the right one for the right job.                                                       |
| 19:33      | If you want, uh, [[Day One]] is part of your, your, uh, uh, automations, then you're going                    |
| 19:38      | to have to use at least in part if this and that, um, but you can always, you know, have                  |
| 19:44      | a web hook from make or Zapier over to if this and that, that then takes whatever it's given              |
| 19:50      | and creates a [[Day One]] entry for you.                                                                      |
| 19:52      | So, you know, there, there's certainly possibilities there.                                               |
| 19:56      | This episode of automators is brought to you by masterclass.                                              |
| 19:59      | With masterclass, you can learn from the world's best artists, icons and leaders anytime, anywhere        |
| 20:03      | and at your own pace with over 150 classes from a range of world class instructors.                       |
| 20:09      | That thing that you've always wanted to know how to do is closer than you think.                          |
| 20:13      | You can learn the art of negotiating from Chris Boss, learn cooking from Gordon Ramsay,                   |
| 20:17      | learn creative writing from Margaret Atwood, or learn business strategy with Bob Iger.                   |
| 20:22      | Personally I've been working my way through a couple of different classes, including a                    |
| 20:24      | particular one on music composition from Hans Zimmer.                                                     |
| 20:28      | And you know what?                                                                                        |
| 20:29      | I've always loved music.                                                                                  |
| 20:30      | The fact that I, you know, studied piano for several years at school, uh, certainly contributed           |
| 20:35      | to that.                                                                                                  |
| 20:36      | But it's just really interesting learning about how somebody goes through the process                     |
| 20:40      | of creating a score, such as parts of the Caribbean.                                                      |
| 20:43      | And you know what, I just really enjoy learning about that sort of thing and it really enhances           |
| 20:48      | my enjoyment of the film.                                                                                 |
| 20:50      | And what I love about masterclass is that I can learn anything, whether it's professional                 |
| 20:55      | or personal, and it's going to be something that makes me happy and I can go at my own                    |
| 21:00      | pace.                                                                                                     |
| 21:01      | Masterclass gives you cinema quality classes that offer unparalleled access to a host of                  |
| 21:05      | renowned instructors.                                                                                     |
| 21:07      | You can explore lessons in any audio you'd like, across your phone, tablet, Apple TV,                     |
| 21:11      | computer, and on the go with audio mode.                                                                  |
| 21:13      | And lessons are approximately 10 to 15 minutes, which makes it easy to fit into your everyday             |
| 21:17      | life.                                                                                                     |
| 21:18      | So whether you want to learn how to make a dinner worthy of a Michelin star, or just                      |
| 21:22      | how to make really good scrambled eggs, whatever you're interested in, there's a class for                |
| 21:25      | you.                                                                                                      |
| 21:26      | With over 180 exclusive classes taught by the instructors you know and love, I highly recommend           |
| 21:31      | you check it out.                                                                                         |
| 21:32      | This holiday, give the perfect gift of an annual masterclass membership and get one free.                 |
| 21:36      | Go to masterclass.com/automators today, that's masterclass.com/automators.                    |
| 21:41      | Terms apply.                                                                                              |
| 21:42      | Our thanks to masterclass for their support of this show and all of Relay FM.                            |
| 21:46      | Bro, so to get started with make, you set up an account, you go to make.com, it's not                     |
| 21:53      | difficult.                                                                                                |
| 21:54      | Historically, I told you when I was like first exploring this, one of the things that was                 |
| 21:58      | confusing to me is that like growing up with if this than that, they've got a page on their               |
| 22:03      | website that says, Hey, here's all the services that we support, go through and pick the ones             |
| 22:08      | you want.                                                                                                 |
| 22:09      | And I kind of liked that in the sense that I could, you know, just create all the connections             |
| 22:15      | I wanted, like connect me to my [[Dropbox]] and connect me to whatever.                                       |
| 22:19      | And then you got a page with all those and it starts giving you saying, well, you have                    |
| 22:24      | [[Dropbox]] and you have email, would you like to save your attachments to [[Dropbox]]?                           |
| 22:28      | You know, that kind of thing.                                                                             |
| 22:29      | And with make, it's not quite as obvious to me.                                                           |
| 22:34      | The way you do it there is you create a new automation or you go to one of the template                   |
| 22:40      | ones and then you add the services there, but I'll tell you, that was an initial stumbling                |
| 22:45      | point for me.                                                                                             |
| 22:46      | Yeah.                                                                                                     |
| 22:47      | I mean, I personally feel that this is actually better in many ways because you then only add             |
| 22:52      | services as you need them.                                                                                |
| 22:54      | So you're not going around and connecting, I don't know, say for example, your email                      |
| 22:59      | account to a service and then you never use it, but it's got full access to your email                    |
| 23:04      | inbox and outbox and it can receive and send any messages at any time, even though you've                 |
| 23:09      | not set up anything.                                                                                      |
| 23:10      | I feel like it's better to do it at the point of need, though I can see why it might be                   |
| 23:15      | confusing to somebody.                                                                                    |
| 23:18      | So yeah, as you're saying, you know, you create a scenario and make and then you go through               |
| 23:23      | the first block that you add when you create a new scenario is going to be your trigger                   |
| 23:27      | block and you can only have one trigger for each automation, but then after you created                   |
| 23:34      | your trigger, which when you click on it gives you, well, it starts by listing all the applications.      |
| 23:40      | Okay.                                                                                                     |
| 23:41      | And it does this in alphabetical order with numbers first and there are a lot like at                     |
| 23:45      | the top of my screen, I've got 10 to eight and then at the bottom, I've got Adobe Commerce,               |
| 23:49      | which is partly cut off and then like you can you can keep scrolling for a very long                      |
| 23:53      | time after that.                                                                                          |
| 23:54      | Fortunately, there is a search, so you can't like, you know, type in, for example, if you're              |
| 23:57      | looking for WordPress, then you can start by just typing in W, O, R, D and C and I mean,                  |
| 24:03      | you'll still find there's a lot of other things that come up before WordPress, including Microsoft        |
| 24:07      | Word templates, but you'll find the service that you're looking for and then once you've                  |
| 24:11      | got your service, then you get different actions and different things will, you know, show up             |
| 24:18      | depending on what you're doing.                                                                           |
| 24:21      | So for example, the watching posts being created is something that you can only have as a trigger,        |
| 24:27      | but you can also use, create a comment on the WordPress theme as your trigger and then                    |
| 24:33      | you'll get like a little clock icon up here and then you'll see that this is set to run                   |
| 24:38      | out regular intervals and for example, every 15 minutes or something, so you probably don't               |
| 24:42      | want to create a comment every 15 minutes, but then you just right click on your module                   |
| 24:45      | and delete it and then you go ahead and look for some, for whatever it is that you actually               |
| 24:49      | do want to do.                                                                                            |
| 24:50      | I find a lot of my things start with our air table and one of the big differences for                     |
| 24:57      | me with make and Zapier is make can run on the same air table record multiple times.                      |
| 25:05      | So the way that Zapier avoids you ending up in an infinite loop is they say, okay, we're                  |
| 25:11      | gonna store the idea of the air table record that we are like watching, but they store                    |
| 25:16      | that globally in your account for all of your automations.                                                |
| 25:20      | So I can't have this air table record appearing in this view trigger automation A and then                |
| 25:26      | the same air table record moving from view A to view B trigger automation B because that                  |
| 25:32      | like it ran automation A and that's it in Zapier terms.                                                   |
| 25:36      | You know, that's the end of it.                                                                           |
| 25:38      | But make says, okay, it's up to you to figure out a way to make sure that you don't make                  |
| 25:45      | this run forever in an infinite loop.                                                                     |
| 25:47      | Please do that.                                                                                           |
| 25:49      | That's your job.                                                                                          |
| 25:50      | You have a certain number of actions every month.                                                         |
| 25:51      | Once you use them, you're done or you pay more money.                                                     |
| 25:55      | So you know, it's up to you to get it right.                                                              |
| 25:56      | And I kind of feel like I prefer that approach possibly because I'm good at avoiding infinite             |
| 26:01      | loops.                                                                                                    |
| 26:02      | Though asterisk I have done, I have done that several times where I've accidentally made                  |
| 26:06      | an automation that runs itself again, I'm sure you've done that at some point with [[Hazel]]                  |
| 26:09      | David where you've created something that moves it moves a file from one folder to the                    |
| 26:12      | other and then it moves it back and then you've just got this file endlessly moving                       |
| 26:15      | between these folders because you've accidentally set up a mini infinite loop.                            |
| 26:20      | But yeah, so you can, you know, I often use a watch records action as my trigger in Zapier                |
| 26:28      | and then I, you know, I select my base in air table and then you select which table                       |
| 26:33      | it's going to be.                                                                                         |
| 26:34      | So just looking at the automators show notes creation, it would be the show planning table                |
| 26:39      | and then you can select your view that you want something to appear in.                                   |
| 26:43      | So that would be the create ads create outline, sorry, option.                                            |
| 26:49      | And then yeah, and then you start with creating the rest of it, which, you know, personally               |
| 26:55      | I think is just a really simple and easy way to get started, you know, I've got this lovely               |
| 27:01      | little icon here that shows me watch air table and I can change how often it's going to go                |
| 27:07      | and look because it's watching in the sense that it's going and looking for a change in                   |
| 27:11      | this case.                                                                                                |
| 27:12      | There are other kinds of things such as, you know, email, if it receives an email to a                    |
| 27:19      | mail drop, then it's it's just going to run, right?                                                       |
| 27:23      | But something like going and checking to see if there are a list of entries in a database                 |
| 27:29      | somewhere in a particular query that is going to it's just going to go and do that every                  |
| 27:35      | X number of minutes or hours that you tell it to do, which is quite nice because you                      |
| 27:40      | just see that with a little clock icon, then you just add your next module, a little bubble               |
| 27:44      | pops out and you click plus and on you go with whatever it is that you might want to                      |
| 27:49      | or need to do.                                                                                            |
| 27:50      | Yeah.                                                                                                     |
| 27:51      | And that's what I would suggest like for getting started is take a look at the because they               |
| 27:54      | have, they call them scenarios, but that's your automations, you know, where you can                      |
| 27:59      | say, basically, if, you know, you get this message, go to this Google doc or something                    |
| 28:04      | like that.                                                                                                |
| 28:06      | And then they also have templates and they have a template button there with a bunch                      |
| 28:10      | of cool ideas, like if you want to send the weather to your email or if you want to create                |
| 28:16      | cool Google calendar events from your Trello cards, like there's a whole bunch of good                    |
| 28:20      | ideas there that you may fit into something you're already doing.                                         |
| 28:24      | So what I've been doing is going through the templates and setting a couple of those up,                  |
| 28:29      | but then very quickly you start to say, oh yeah, I like the idea of getting the weather,                  |
| 28:33      | but rather than send it to an email, I'd rather, you know, text message it to myself.                     |
| 28:38      | And, you know, once you get the template established, it really isn't that hard.                          |
| 28:42      | And I agree totally with Rose that the user friendly nature of make is something to be                    |
| 28:50      | admired.                                                                                                  |
| 28:51      | And it's very easy to see not only how do you add new components to these automations,                    |
| 28:57      | but what are your available commands from within them?                                                    |
| 29:00      | And there's quite a few, but it's a very obvious what is there and isn't there.                           |
| 29:06      | Like I'm really curious about using this for some of the teachable management functions.                  |
| 29:12      | And I love the way it gives me a very specific list of what I can do and not do.                          |
| 29:17      | And that just opens up, you know, my brain to ideas about, OK, well, these are the problems               |
| 29:22      | I could solve with this, but maybe there's this other thing that's just not an option                     |
| 29:26      | at this point.                                                                                            |
| 29:27      | And for now, I'm going to have to do that some other way.                                                 |
| 29:29      | Yeah, I feel like I should also mention to folks that there are a couple of options on                    |
| 29:35      | scenarios that you can look at and they're right at the bottom.                                           |
| 29:39      | I'm actually going to start on the right hand side, not the left hand side.                               |
| 29:42      | And there's a good reason for this.                                                                       |
| 29:44      | So on the right hand side, you've got favourites and those are the services that you have used             |
| 29:50      | in this scenario or that you've added a module from and then maybe you've removed a module.               |
| 29:56      | So if I was creating a new scenario, like I've just been playing with an empty one here                   |
| 30:01      | because I've got the automations one open in one window and I've got a blank one here.                    |
| 30:05      | Because I added a WordPress action, I have the WordPress service at the bottom and I                      |
| 30:09      | have the air table service.                                                                               |
| 30:11      | Once I save this automation and leave it and then come back, the WordPress one won't be                   |
| 30:15      | there because I don't have a WordPress module.                                                            |
| 30:17      | So it'll clean that up, but it'll wait until you're done with it in case you started by                   |
| 30:21      | going, right, I want to trigger this when WordPress does this thing.                                      |
| 30:24      | Oh, actually, no, I want to trigger it when this thing happens and then use the WordPress                 |
| 30:28      | action.                                                                                                   |
| 30:29      | It doesn't remove it.                                                                                     |
| 30:30      | So you can just click on any of those and it will show you the actions for that service,                  |
| 30:35      | which is good if you've got that service built in or you're using that already.                           |
| 30:39      | You might want to do more than one thing with Teachable at the same time.                                 |
| 30:42      | It's nice to be able to do that.                                                                          |
| 30:43      | When you add one of those actions, it just sort of adds it as a free floating thing.                      |
| 30:48      | And then you can just draw, you grab the toggle on one of the sides and you drag it to another            |
| 30:55      | module and it connects those so you get little dots between things to connect it all up.                  |
| 31:01      | So left of your favourites, you then got tools, which has things like flow control.                        |
| 31:05      | So you can say like, okay, I want to repeat three times or I'm getting, you know, a series                |
| 31:12      | of records out of this and I want to iterate over each of those or I want to take a list                  |
| 31:17      | of things I've been given and put them together or and the one that I end up using a lot is               |
| 31:21      | the router, which is basically you're branching or splitting, you're going, okay, if this happens,        |
| 31:26      | I want to do this.                                                                                        |
| 31:27      | If that happens, I want to do that.                                                                       |
| 31:28      | And if the other thing happens, I want to do the other thing.                                             |
| 31:30      | There's also rolling back, pausing, breaking, and so on.                                                  |
| 31:35      | But it's also got some other tools in there like sleeping for a little bit.                               |
| 31:39      | So wait 15 minutes before you do the next bit, setting and getting variables.                             |
| 31:44      | And then one of my favourites, the text parser, because I use this to, you know, parse out                 |
| 31:50      | some emails that I get so that I get tasks in OmniFocus to remind me about the Amazon                     |
| 31:55      | returns that I've set up.                                                                                 |
| 31:57      | Otherwise I might forget to package at the parcel before the delivery person or the collection            |
| 32:01      | person comes to get it.                                                                                   |
| 32:02      | And that wouldn't be good.                                                                                |
| 32:04      | But if make can actually handle that for me.                                                              |
| 32:07      | So it's got those tools, which is just great.                                                             |
| 32:10      | And then I should note that also it's got a magic wand for automatically aligning your                    |
| 32:15      | modules, tidying things up.                                                                               |
| 32:16      | And then it's got an explain flow, which will actually show you like little dots, okay,                   |
| 32:21      | what happens here?                                                                                        |
| 32:22      | And then bounce, bounce, bounce, which is just really cute and pretty, but also very,                     |
| 32:26      | very practical.                                                                                           |
| 32:27      | Okay.                                                                                                     |
| 32:28      | So that was a lot.                                                                                        |
| 32:29      | I want to go over those, but I want to do that in context of some of your more advanced                   |
| 32:32      | automations you built with it.                                                                            |
| 32:34      | So rather than talking about those in the abstract, we're going to get back to that.                      |
| 32:37      | In the meantime, I've got a question for you.                                                             |
| 32:42      | Help me build one and let's just talk through it.                                                         |
| 32:45      | And this is a basic one.                                                                                  |
| 32:47      | So just to give you a little background, I have an error table that I share with the                      |
| 32:51      | people on my team.                                                                                        |
| 32:53      | And it's kind of the project status error table where we've got, when I've made a video                   |
| 32:59      | for the labs or written a newsletter or anything that's going to get published out of the Max             |
| 33:04      | Sparky verse, sometimes I have people proofread it or do a, check the audio or whatever.                  |
| 33:13      | So I've got this little error table I create.                                                             |
| 33:15      | And what I'd like to do, we also have a [[Slack]] we share for the team is I'd like to say when               |
| 33:20      | I add a new entry, you know, that meets certain qualifications that it will create a [[Slack]]                |
| 33:26      | thread on a certain [[Slack]] channel saying, Oh, here's a thing.                                             |
| 33:31      | And then that way we've got a unified thread we can use.                                                  |
| 33:35      | And then I don't have to go and manually do it every time, at least that's a thought                      |
| 33:39      | I had.                                                                                                    |
| 33:40      | So going to make what I've done is I've connected two services, [[Slack]] and error table, which              |
| 33:47      | is easy enough to do.                                                                                     |
| 33:49      | And I did not find a template for something like this, obviously.                                         |
| 33:52      | So I went to the scenarios page and just hit the plus button.                                             |
| 33:56      | All right.                                                                                                |
| 33:57      | So you could run this either way.                                                                         |
| 33:59      | We could say, well, when I make a [[Slack]], when I make a [[Slack]] entry, create the error table                |
| 34:03      | or when I create the error table with the [[Slack]], in my mind, I think I would start with the               |
| 34:07      | error table and then have it automatically create the [[Slack]].                                              |
| 34:10      | Yes.                                                                                                      |
| 34:11      | One thing I'm going to pause you on a moment is in error table, you are going to need to                  |
| 34:16      | create a new column.                                                                                      |
| 34:18      | You can have this hidden in all of your views, but you're going to need a created time in                 |
| 34:23      | your error table.                                                                                         |
| 34:24      | Because when you use error table to trigger your automations, and you're just looking                     |
| 34:31      | for all of the new records, it actually needs something to be able to identify that as new.               |
| 34:38      | So you'll need to create that.                                                                            |
| 34:40      | Now, fortunately, error table actually has a template so that you can look, so you can                    |
| 34:46      | just have that in automatically as a formula.                                                             |
| 34:49      | And I'm just double checking what that is, but just make sure that you have one of those                  |
| 34:53      | folks if you're looking for that, because you can just insert that formula and be away                    |
| 35:00      | at the races.                                                                                             |
| 35:01      | I believe it's just created with brackets afterwards, created in all caps.                                |
| 35:09      | But I will get a link to that so that folks can see that in the show notes.                               |
| 35:14      | So I've added a column.                                                                                   |
| 35:15      | I've got a create time column.                                                                            |
| 35:17      | Oh, perfect.                                                                                              |
| 35:18      | Then that's even easier.                                                                                  |
| 35:20      | When I first looked at that, they didn't have that, but I was using it for some other things              |
| 35:24      | anyway.                                                                                                   |
| 35:25      | So that's what you will be using.                                                                         |
| 35:26      | So your trigger in make will use the watch records action from error table.                               |
| 35:34      | And then you select your base, select your table, and then your trigger field is going                    |
| 35:37      | to be that created field that you've just created.                                                        |
| 35:41      | Because we need to use the work created about a million times in this.                                    |
| 35:45      | And yeah, and then you can just select the label field as well.                                           |
| 35:50      | And then from there, you can continue onwards with the next action.                                       |
| 35:57      | So once you have your module, you can click on the plus, and then you can select from,                    |
| 36:03      | in your case, it will be error table and select showing up, or instead you could just click               |
| 36:07      | at the bottom on [[Slack]] and look for the option and then go from there.                                    |
| 36:12      | I've clicked on just a little plus next to the error table action.                                        |
| 36:21      | And I'm just adding [[Slack]] because I don't actually have [[Slack]] set up because I'm oddly                    |
| 36:25      | enough not using that for any of my automations.                                                          |
| 36:28      | So I do have one on my list to create.                                                                    |
| 36:31      | But there should be a simple post chat message one there, which will then do exactly what                 |
| 36:36      | you need.                                                                                                 |
| 36:37      | Okay.                                                                                                     |
| 36:38      | So I've got the connection.                                                                               |
| 36:40      | It's looking at the error table.                                                                          |
| 36:41      | I've picked the specific base.                                                                            |
| 36:44      | And then underneath that, it's under the trigger, it's looking for a table and the trigger configuration. |
| 36:52      | So I would pick project or the, yeah.                                                                     |
| 36:57      | And then I would add the trigger field being the created time that allows it to sort the                  |
| 37:03      | records and figure out what to work with, but then it asks for a label field.                             |
| 37:08      | What is a label field?                                                                                    |
| 37:10      | So whenever you've got something like that, there is a little light bulb underneath which                 |
| 37:16      | explains it.                                                                                              |
| 37:17      | So it says a field that will be used as a label for the record.                                           |
| 37:20      | So you're looking in this case for whatever the name of the thing is as your name field.                  |
| 37:29      | So in the automators base, we have a special name field which takes the episode number                    |
| 37:34      | and it takes the title and it also takes the guest name if we have a guest on the episode                 |
| 37:39      | and it's a formula and sticks all three of those together.                                                |
| 37:43      | But so it's whatever you want the name of your irritable record to be when you take                       |
| 37:51      | it over to that.                                                                                          |
| 37:52      | And then you take that and then so then you can take that data and you can connect [[Slack]].                 |
| 37:57      | So I guess at that point I have everything I need for the trigger, right?                                 |
| 38:00      | We're looking at an air table based on the created date.                                                  |
| 38:02      | Yeah, exactly.                                                                                            |
| 38:03      | And so then you need [[Slack]].                                                                               |
| 38:06      | So you can just take, open the [[Slack]] service and then the action that you're looking for                  |
| 38:13      | is create a public channel message probably.                                                              |
| 38:16      | Depends on how you have [[Slack]] configured as to if it's public or private, but it's probably               |
| 38:21      | going to be public in most cases.                                                                         |
| 38:25      | And yeah, and then you should be able to hook this all up to select the data in the fields.               |
| 38:33      | I am just attempting to connect [[Slack]] because I don't actually have [[Slack]] set up here.                    |
| 38:39      | Really?                                                                                                   |
| 38:40      | I would think you had been using [[Slack]] with [[Make]].                                                         |
| 38:43      | It seems like so obvious.                                                                                 |
| 38:44      | No, because I don't have any [[Slack]] that I personally need to publish to.                                  |
| 38:51      | And the [[Slack]] service that I wanted to use as a test unfortunately can't actually have                    |
| 38:58      | any more integrations.                                                                                    |
| 38:59      | So I need to look for a different one.                                                                    |
| 39:03      | Okay, but I can just kind of walk you through that part because I've got to connect on my                 |
| 39:06      | end.                                                                                                      |
| 39:07      | So then you pick a channel and it can be private or a public channel.                                     |
| 39:09      | It doesn't have to be public.                                                                             |
| 39:11      | And then you can write text in that, you know, it's like, okay, I've added a new project                  |
| 39:15      | and then you can insert tokens from the data.                                                             |
| 39:18      | Yes, exactly.                                                                                             |
| 39:19      | And then you can go to the website of the air table and just post it up and, you know,                    |
| 39:24      | it's great.                                                                                               |
| 39:25      | And then you can go further.                                                                              |
| 39:26      | They have like an option called blocks.                                                                   |
| 39:29      | You can make it an interactive message and you can do more with it if you want.                           |
| 39:33      | But for my purposes, I just want a basic way to send a message to [[Slack]] when I create a                   |
| 39:38      | new record.                                                                                               |
| 39:40      | And the thing that I was missing, Rose, was the create time.                                              |
| 39:44      | That's what was messing me up.                                                                            |
| 39:45      | I didn't know that was something I needed.                                                                |
| 39:47      | All right.                                                                                                |
| 39:48      | I'm making progress.                                                                                      |
| 39:49      | Yeah, exactly.                                                                                            |
| 39:50      | But once you've got those tokens, it's really, I say easy, but it's very simple.                          |
| 39:57      | You simply right click into any field and then you should be just be able to add those                    |
| 40:02      | tokens in.                                                                                                |
| 40:03      | And tokens are, they start with coming from a particular action step, but you then have                   |
| 40:10      | all of the different elements inside of that.                                                             |
| 40:12      | So in David's case, he has an air table section in his tokens list.                                       |
| 40:17      | And then he's got all of the different elements of that air table record so that he can take              |
| 40:24      | any or all of those and just put them in together in a way that makes sense.                              |
| 40:31      | So that you can actually use those because this is one of the things where it's very                      |
| 40:38      | difficult if you don't know what you're looking for.                                                      |
| 40:41      | So I'm using the air table space so I can take the title or I could take the episode                      |
| 40:45      | number or the created time or the show outline or the show outline ID, for example, or the                |
| 40:53      | notes or whatever it is I wanted and put all of those bits together and put them into the                 |
| 40:57      | different fields.                                                                                         |
| 40:58      | And you just click into it and it gives you all of those options as just something and                    |
| 41:03      | you can even search.                                                                                      |
| 41:04      | So if you've got lots of things, you know, maybe you have five or six actions leading                     |
| 41:08      | you to this point, but you're like, no, no, no, I know that this, it's the show outline                   |
| 41:12      | that I'm looking for you.                                                                                 |
| 41:13      | So I'm typing show outline and it'll find all of the actions that you've got and then                     |
| 41:18      | show you the show outline, you know, variable from those.                                                 |
| 41:23      | But as well as those tokens, there's also some other ones that you can get.                               |
| 41:25      | So you can, you know, you've got a little functions in there, you've got some math stuff                  |
| 41:29      | if you wanted, you've got some text and binary things so you can get the length of a piece                |
| 41:33      | of text or capitalise something, dates and times with timestamps, all sorts of things.                    |
| 41:38      | So, you know, there's more to that little thing that pops up than meets the eye to start                  |
| 41:44      | with.                                                                                                     |
| 41:45      | But it starts with when you click in a field, if you've got data that you can put in that                 |
| 41:50      | field from something that already exists, it's going to show it to you, which I personally                |
| 41:54      | think is a great default.                                                                                 |
| 41:55      | Okay.                                                                                                     |
| 41:56      | Another thing I really like about make is the trigger frequency.                                          |
| 41:59      | And Rose mentioned this earlier, but when you set up something with make, it gives you                    |
| 42:04      | a certain number of runs, you know, like the free account is a thousand.                                  |
| 42:10      | I think the $9 a month account is 10,000.                                                                 |
| 42:13      | I don't have in front of me right now, but you've got a number of times that it can go                    |
| 42:17      | off to the internet and try and do something for you.                                                     |
| 42:20      | And that's the trick of the service is making sure you don't run more than you need to because            |
| 42:26      | you want to save those and it can allow you to save money, you know, if you don't do it.                  |
| 42:30      | The default is that it runs at least in my experience so far has been it's been a 15                      |
| 42:35      | minute interval.                                                                                          |
| 42:36      | Yeah.                                                                                                     |
| 42:37      | Is the default that I've always experienced.                                                              |
| 42:38      | I don't know if that's a true with all the triggers, but it's been with most of the ones                  |
| 42:41      | I've been working with.                                                                                   |
| 42:43      | Yeah.                                                                                                     |
| 42:44      | So that'll be true with any of the triggers that are going out and looking for data like                  |
| 42:48      | the irritable one.                                                                                        |
| 42:49      | The ones that fetch data will just run whenever they receive a call.                                      |
| 42:53      | So like a webhook will just run when it gets hit.                                                         |
| 42:55      | It won't be every 15 minutes.                                                                             |
| 42:57      | Yeah.                                                                                                     |
| 42:58      | And maybe that's something I could incorporate here.                                                      |
| 43:01      | Like I could automate through shortcuts or keyboard measures or something just to run                     |
| 43:06      | a webhook when I set up a new project and then it could go hit the air table for me                       |
| 43:13      | and just create the link at that point.                                                                   |
| 43:16      | Is that some crazy?                                                                                       |
| 43:17      | Am I, am I on display?                                                                                    |
| 43:19      | Yeah.                                                                                                     |
| 43:20      | Yeah.                                                                                                     |
| 43:21      | Exactly.                                                                                                  |
| 43:22      | Yeah.                                                                                                     |
| 43:23      | You can do all sorts of things like that.                                                                 |
| 43:24      | And honestly, a lot of my automations do start with, you know, go look at air table                       |
| 43:26      | for this stuff, but to mention your scheduling thing, you've also got advanced scheduling.                |
| 43:32      | And I have a number of automations for iOS today, which are pretty darn intensive.                        |
| 43:37      | So with the exception of handling feedback, those run on Tuesdays and they run on Tuesdays                |
| 43:43      | from like 9am to 5pm because 5pm my time is usually when we record iOS today.                             |
| 43:51      | And that's it because they just won't run the rest of the time.                                           |
| 43:54      | And I found that that is a really nice way to just limit the number of times it's going                   |
| 43:57      | and checking for things.                                                                                  |
| 43:58      | Because otherwise it's checking for things like six days a week when it probably doesn't                  |
| 44:02      | need to.                                                                                                  |
| 44:03      | It can just go and look at the stuff that's happened in the last six days when it goes                    |
| 44:06      | out to fetch this data.                                                                                   |
| 44:07      | So you can really limit stuff.                                                                            |
| 44:09      | So if you need things to only run in the month of February, you can actually say, okay,                   |
| 44:13      | I want this only to run in February.                                                                      |
| 44:15      | And that's it.                                                                                            |
| 44:16      | And it'll do it just in February, which, you know, I personally think it's great.                         |
| 44:20      | It's certainly much easier than remembering to go in and turn on an automation, say the                   |
| 44:24      | beginning of December for the holidays and then turning it off at the beginning of January.               |
| 44:28      | Now you can just take the December box and be done with it.                                               |
| 44:31      | Hey, here's a dumb question if I want to.                                                                 |
| 44:33      | So on this one that I said with the air table and [[Slack]], I said it on a timing hook, but                  |
| 44:38      | I said earlier, a web hook might be the way to do this.                                                   |
| 44:41      | How do you add a second trigger or an optional trigger?                                                   |
| 44:44      | So you don't have more than one trigger for an automation or scenario in make.                            |
| 44:51      | And it's the same if this and that is happier.                                                            |
| 44:53      | So where I do want multiple triggers for something, what I will do is I will make the bulk of             |
| 44:59      | my automation a thing that gets triggered by a web hook.                                                  |
| 45:03      | And then I will make all of my triggers run and then trigger that web hook.                               |
| 45:08      | So then I might have two or three different automations, which all ping the same web hook,                |
| 45:12      | which is inside of make to be clear, it's calling a different mixed scenario.                             |
| 45:16      | And then that just runs whatever it is that it needs to run with that information.                        |
| 45:20      | And this is really useful for things like, for example, all of my things that I start                     |
| 45:24      | in RSS get sent to good links.                                                                            |
| 45:27      | But some of them, if they're for iOS today, will also get saved into the iOS today air                    |
| 45:33      | table for me so that I can just copy and paste those over to the show notes later.                        |
| 45:38      | But good links is using my push cut automation server.                                                    |
| 45:42      | So I just have one web hook to push cut automation server for good links.                                 |
| 45:47      | And then I can use that inside of any make scenario that I need to use that.                              |
| 45:55      | So I've kind of made my own sort of mini service there to do that with, which is quite nice.              |
| 46:01      | But you can do whatever it is that you might want or need using that sort of approach.                    |
| 46:06      | Yeah, and if you wanted to use a web hook as a trigger, I guess you would just make                       |
| 46:11      | a separate scenario and then or duplicate and insert a new trigger as a web hook.                         |
| 46:18      | Yeah.                                                                                                     |
| 46:19      | Yeah.                                                                                                     |
| 46:20      | I mean, for anything where I want to just call that web hook directly, I actually just                    |
| 46:23      | do.                                                                                                       |
| 46:24      | So I have one or I have two automations which check different RSS feed accounts.                          |
| 46:31      | And then they both feed into one web hook, but I also from shortcuts call that web hook                   |
| 46:37      | directly with the same sort of data.                                                                      |
| 46:39      | So I actually have three triggers for that, two of them are make one of them's on my phone                |
| 46:42      | with the shortcuts.                                                                                       |
| 46:44      | So you can just call any web hook as your trigger.                                                        |
| 46:48      | And the web hooks trigger also, by the way, David, a little secret for you.                               |
| 46:52      | It also has mail as a hook.                                                                               |
| 46:55      | So you can have sending email to a specific link email address as your trigger.                           |
| 47:01      | This episode of the automators is brought to you by LinkedIn jobs.                                        |
| 47:04      | Go to LinkedIn.com/automators and post a job for free.                                              |
| 47:09      | These days, every new potential hire can feel like a high stakes wager for your small business.           |
| 47:15      | You want to be 100% certain that you have access to the best qualified candidates available.              |
| 47:20      | And that's why you have to check out LinkedIn jobs.                                                       |
| 47:23      | LinkedIn jobs helps find the right people for your team faster and for free.                              |
| 47:28      | Every time I've wanted to hire someone, I want to get someone with the right skills,                      |
| 47:31      | but I also want to get somebody with that growth mindset that's going to bring energy                     |
| 47:35      | to your team and not suck the energy out of it.                                                           |
| 47:38      | Well, you can do that with LinkedIn jobs.                                                                 |
| 47:41      | With LinkedIn jobs, you can have a job post up and running within minutes.                                |
| 47:45      | It's really that easy.                                                                                    |
| 47:47      | Then add your job and the purple hashtag hiring frame to your LinkedIn profile to spread the              |
| 47:52      | word that you're hiring and simple tools like screening questions make it easy to focus                   |
| 47:57      | on candidates with just the right skills and experience.                                                  |
| 48:00      | So you can quickly prioritise who you'd like to interview, hire and board.                                |
| 48:05      | This means you can finish the year strong with the right team member on board.                            |
| 48:09      | And it's why small businesses rate LinkedIn jobs number one and delivering quality hires                  |
| 48:13      | versus the leading competitors.                                                                           |
| 48:16      | LinkedIn jobs helps you find the qualified candidates you want to talk to faster.                         |
| 48:20      | So post your job for free at LinkedIn.com/automators, A-U-T-O-M-A-T-O-O-R-S.                        |
| 48:26      | That's LinkedIn.com/automators to post your job for free terms and conditions do                    |
| 48:32      | apply and our thanks to LinkedIn jobs for the support of the automators and all of relay                  |
| 48:37      | FM.                                                                                                       |
| 48:38      | All right, Rose, you've been teasing us with all your advanced knowledge of make.com.                     |
| 48:43      | Let's hear the results.                                                                                   |
| 48:45      | Share some of your favourite makes with us or scenarios, I guess we'd call it.                             |
| 48:50      | So I mean, I've picked out like four that I think are probably going to be the most                       |
| 48:54      | or sorry, yeah, four that I think are probably going to be the most interesting ones to folks             |
| 48:58      | here.                                                                                                     |
| 48:59      | So saving all of my start RSS items for use later, which goes into good links, adding                     |
| 49:05      | Amazon returns into OmniFocus, creating our automators show notes because of course that's                |
| 49:11      | automated and handling iOS today feedback that comes in via email.                                        |
| 49:16      | And I should note that any folks who send us feedback on iOS today, so that's the podcast                 |
| 49:22      | of Micah and I host on Twitter, they have the option of sending us the pet text, which                    |
| 49:27      | is the text that you are politely requested if you have a pet and are willing to pay when                 |
| 49:32      | you send us feedback.                                                                                     |
| 49:33      | So you send us a cute picture of your cat, your dog, your snake, hamsters, whatever pet                   |
| 49:39      | you may have and we'll feature it on the show when we include your feedback.                              |
| 49:44      | And so when folks include the pet tax, I also need to handle attachments and I need to handle             |
| 49:49      | them in a way that I can share them publicly with the folks over at Twitter so that they                  |
| 49:56      | get them, but also in a way that means that they get deleted pretty soon after that so                    |
| 50:00      | that we don't have people's pictures saved onto a service that's not inside of their                      |
| 50:07      | control because I don't want to have data hanging around unnecessarily.                                   |
| 50:10      | So yeah, there's some pretty complicated ones there and then there's some simpler ones                    |
| 50:16      | and they're all pretty good.                                                                              |
| 50:18      | So I don't know which one you want to start with, David, do you want to start with the                    |
| 50:20      | most complicated one?                                                                                     |
| 50:21      | Do you want to start with an easier one?                                                                  |
| 50:23      | Take your pick.                                                                                           |
| 50:24      | No, let's start at the top and work our way down.                                                         |
| 50:26      | So RSS items save to good links and I guess we should explain what good links is.                         |
| 50:33      | I mean, it's an app that allows you to store links, but only good links.                                  |
| 50:38      | Yes.                                                                                                      |
| 50:39      | Yeah, so just like, I mean, it's like pocket or [[Instagram]], [[Instagram]], [[Instagram]] paper,                    |
| 50:46      | not [[Instagram]], it's like pocket or [[Instagram]] paper for folks who have used those services                 |
| 50:52      | before.                                                                                                   |
| 50:53      | It's a one-time purchase that runs, it's just on your iPhone, iPad and Mac.                               |
| 51:00      | It doesn't have a web service and because of that, you know, I have to integrate with                     |
| 51:05      | it through PushCut.                                                                                        |
| 51:07      | So I have a little thing that will, or I have a little make scenario that when I ping it,                 |
| 51:12      | it will allow me to save stuff to good links from any of my scenarios because that is then                |
| 51:19      | something that I can reuse across multiple things.                                                        |
| 51:22      | I could reuse just like, you know, copy and paste the same data from the PushCut automation                |
| 51:29      | that I have there, but I decided that I was just going to call a make scenario for that                   |
| 51:37      | because then I have one point where if I decide that I want to change how that works, it's                |
| 51:41      | easy to go in and change that in one place instead of changing it in multiple places.                     |
| 51:45      | So yeah, so basically what I have is I have two artists accounts for various reasons,                     |
| 51:53      | but primarily one is the thing that I use for professional and the other one is the                       |
| 51:58      | one that I use for personal.                                                                              |
| 51:59      | I'm using air quotes as I speak, which you folks obviously can't see because you're listening,            |
| 52:04      | but the lines between personal and professional are very blurred for obvious reasons.                     |
| 52:09      | I'm interested in what I do, but basically the difference is, you know, I've got things                   |
| 52:15      | like the home assistant GitHub releases in my personal one because those are something                    |
| 52:21      | that I want to catch up on, but if I start that, that's not something that's going to                     |
| 52:25      | appear on iOS today or automators.                                                                        |
| 52:28      | That's not something that I'm going to save into our backlog for things to look at.                       |
| 52:33      | So I just split it up into simply two RSS accounts to handle that.                                        |
| 52:39      | So I have, for this then, I actually have three scenarios because I have my personal                      |
| 52:43      | RSS feed, I have my professional one, and then both of those feed into another make scenario              |
| 52:52      | at the end to save this data to good links.                                                               |
| 52:55      | So I'll look at the professional one just because that one works, it's got an extra                       |
| 53:00      | step in it.                                                                                               |
| 53:01      | So my watch RSS feed action, it has a time trigger on it, and it runs, I've got it set                    |
| 53:08      | to every two hours, and it pretty much just runs from like 10 a.m. to sort of 8 p.m. because              |
| 53:15      | I tend to read my RSS feeds during those times, and I just thought, you know, let's save some             |
| 53:21      | of the executions here that I don't really need.                                                          |
| 53:24      | And then if it's in the professional one, basically what I do is I save this into a                       |
| 53:29      | couple of different air table bases.                                                                      |
| 53:34      | So I save, and I'll just, it's the same action just with different air table bases repeated               |
| 53:39      | twice.                                                                                                    |
| 53:40      | So it just saves the title and the URL of the starred article into an air table base so                   |
| 53:48      | that I can use this later.                                                                                |
| 53:50      | And then it uses the HTTP action to make a request, which is calling the da-da-da-da                      |
| 53:57      | link, and it just uses a query string to pass the URL and the title.                                      |
| 54:03      | And it also passes the date through, though I believe the date is not actually being used                 |
| 54:08      | anymore in the next bit.                                                                                  |
| 54:11      | But then the next one is just where it gets passed over into push cut, and then that gets                 |
| 54:18      | saved off into good links.                                                                                |
| 54:22      | And that's it.                                                                                            |
| 54:23      | It's simple, but it works, and honestly, that is one of my favourite things about this.                    |
| 54:28      | You know, I can just put something together, and it will do exactly what I want or need                   |
| 54:32      | it to do when I want or need it to do it.                                                                 |
| 54:35      | And also, because this is a time-based one, and it pretty much any triggers between 10                    |
| 54:40      | a.m. and 6 p.m., if, oh, sorry, 10 a.m. and 8 p.m. is what I said.                                        |
| 54:45      | If I wanted to run it at two o'clock in the morning, I can just open the scenario, I'll                   |
| 54:49      | make and click the run once button, and it will just run it then, and it will go off                      |
| 54:53      | and look for new RSS start entries and fetch them at that point in time.                                  |
| 55:00      | So it's not that it can't run between outside of the hours that I've got it limited to,                   |
| 55:04      | it's just that it won't unless I tell it to.                                                              |
| 55:07      | Yeah.                                                                                                     |
| 55:08      | And the way I do that is more manual.                                                                     |
| 55:10      | I save articles to Instapaper, and I have various folders that I put them in for consideration            |
| 55:15      | for other uses.                                                                                           |
| 55:17      | These are one-dimensional, though, they're not tagged, so sometimes that creates an                       |
| 55:20      | issue.                                                                                                    |
| 55:21      | I guess I should look into that, really.                                                                  |
| 55:24      | But that's an interesting solution.                                                                       |
| 55:26      | One part of it that I think I missed is, so it's looking for an RSS feed, but how are                     |
| 55:32      | you getting articles you like into an RSS feed?                                                           |
| 55:35      | What's the mechanism for that?                                                                            |
| 55:37      | So I just start things in my RSS reader.                                                                  |
| 55:40      | Now what happens is, I'm using Feedbin for my professional one, and so that has a special                 |
| 55:47      | RSS feed for your starred items.                                                                          |
| 55:49      | So it's creating it for you.                                                                              |
| 55:51      | Gotcha.                                                                                                   |
| 55:52      | Yeah.                                                                                                     |
| 55:53      | So it will create an RSS feed for starred items.                                                          |
| 55:54      | Now the other service that I'm using, which I set up because I'm a weird nerd geek, I                     |
| 56:00      | wanted to try it out for myself, is Fresh RSS.                                                            |
| 56:03      | And that one also gives me an RSS feed, which has got a special token in it to get the private            |
| 56:09      | RSS feed with my starred IDs.                                                                             |
| 56:12      | Some services will actually just have the option to fetch starred items from them.                        |
| 56:19      | But I certainly, I don't think I had, I don't think I found that when I was setting this                  |
| 56:24      | up.                                                                                                       |
| 56:25      | But by the way, you know, I'm just using, it's just an RSS feed that's been created                       |
| 56:29      | by the service that I'm using.                                                                            |
| 56:31      | You could make an API call to find it from some services, I'm sure.                                       |
| 56:35      | But in the meantime, you know, I just left it like that.                                                  |
| 56:39      | I believe it was fiddly has, yeah, yeah, if you highlight an article, or you prioritise                   |
| 56:46      | an article, then that can trigger your, your RSS feed, your, your scenario to run.                        |
| 56:52      | So in this scenario, Rose is generating an RSS feed through her service, and then she's                   |
| 56:57      | watching that.                                                                                            |
| 56:59      | What I would say is if you're interested in cloud-based automation, RSS is one of the                     |
| 57:03      | best triggers.                                                                                            |
| 57:04      | Oh yeah.                                                                                                  |
| 57:05      | If you just want to collect, let's say there's a website that you always want to read in                  |
| 57:09      | your read later service, and they don't offer a, you know, deliver straight to service,                   |
| 57:14      | you can just have a watch the RSS and just automatically feed it into there.                              |
| 57:19      | There's just so many ways you can use RSS with this stuff.                                                |
| 57:22      | It is, it's one of the like magic ways of unlocking this automation is the RSS feature.                   |
| 57:28      | Yes, exactly.                                                                                             |
| 57:29      | So, you know, David, you mentioned earlier that you save all of your blog posts over                      |
| 57:33      | to [[Day One]].                                                                                               |
| 57:34      | Well, I'm guessing you're probably using RSS to do that.                                                  |
| 57:37      | Exactly.                                                                                                  |
| 57:38      | And RSS is great because it works regardless of where your website is hosted or how your                  |
| 57:43      | website is hosted.                                                                                        |
| 57:44      | So if you're on Squarespace, WordPress, Jackal, whatever service you're using, you probably               |
| 57:49      | have an RSS feed.                                                                                         |
| 57:51      | And you know, it's great for that.                                                                        |
| 57:53      | Now, the thing I want to mention is if you change that to using a WordPress hook, which                   |
| 57:59      | is triggered specifically by WordPress, so WordPress is going, hey, I have posted a new                   |
| 58:04      | post service, go do your thing, then it gets poked to go and do the thing instead of it                   |
| 58:09      | going, hey, have you got anything for me?                                                                 |
| 58:11      | Hey, have you got anything for me?                                                                        |
| 58:13      | And so, you know, if you had something that you wanted to be pretty much instantaneous                    |
| 58:18      | when this thing happened, then you would want to look at using a different trigger for that.              |
| 58:24      | But saving something into [[Day One]], I'm guessing is not quite so time sensitive that you need              |
| 58:29      | it to happen immediately.                                                                                 |
| 58:30      | So the RSS feeds just fine.                                                                               |
| 58:31      | And that WordPress hook thing also allows you to reduce the number of calls.                              |
| 58:36      | So you know, that's always important with make.                                                           |
| 58:39      | And we were talking earlier in the show about social media, let's say you've got a blog                   |
| 58:43      | in WordPress, you could use the WordPress hook to grab the URL from the RSS feed and                      |
| 58:49      | publish it to, you know, your micro.blog or mastodon or Twitter or all the above.                         |
| 58:55      | So there's just a lot of nice integration once you start understanding how RSS works                      |
| 58:59      | with this stuff.                                                                                          |
| 59:00      | All right.                                                                                                |
| 59:01      | Now I'll go to the next one.                                                                              |
| 59:02      | Amazon returns to OmniFocus.                                                                              |
| 59:05      | The thing I like about this is you're attaching the web, but you're also going to a local                 |
| 59:09      | app like OmniFocus.                                                                                       |
| 59:11      | So you've already told us a little bit about it, but I want to hear the gory details of                   |
| 59:16      | how you're pulling this off.                                                                              |
| 59:17      | All right.                                                                                                |
| 59:18      | Well, I'm not going to go too far into the gory details because I don't think anybody's                   |
| 59:21      | going to enjoy me reading regular expressions out.                                                        |
| 59:26      | So I'll skip the precise details.                                                                         |
| 59:29      | But basically what happens is I have a rule in FastMail, which is my mail provider, but                   |
| 59:33      | you could use any online service to do this Gmail, whatever.                                              |
| 59:37      | If you don't have the ability to create rules in your mail service, you could just use the                |
| 59:43      | rules built into the mail app on your Mac, but you may find that not everything gets                      |
| 59:48      | triggered with that.                                                                                      |
| 59:50      | So I'm using that to forward emails.                                                                      |
| 59:53      | So the trigger inside of [[Make]] is a web hook, which is a mail hook specifically.                           |
| 01:00:00   | And I've created a special one for Amazon returns.                                                        |
| 01:00:03   | And this has given me a beautiful at hook.make.com email address.                                         |
| 01:00:09   | Fortunately, there is a nice handy little copy address to clipboard function right there.                 |
| 01:00:13   | So I can copy that and then paste that into my FastMail rule.                                             |
| 01:00:19   | And that was the start.                                                                                   |
| 01:00:21   | And then I need to go through.                                                                            |
| 01:00:23   | So I get Amazon returns sent over via the mail rule.                                                      |
| 01:00:27   | And that deals with what is an Amazon return email for me very nicely.                                    |
| 01:00:30   | Now I have to get the data out of this.                                                                   |
| 01:00:33   | Okay, so what is it that I'm returning?                                                                   |
| 01:00:35   | Does it have a date that needs to be returned by or does it have a date that's going to                   |
| 01:00:38   | be picked up by?                                                                                          |
| 01:00:39   | So I am using, there is a really handy tool called the text parser.                                       |
| 01:00:43   | Okay, so it's the third option in the tools one.                                                          |
| 01:00:47   | It's sort of a square bracket dot star close square bracket.                                              |
| 01:00:50   | And then there's some options with that.                                                                  |
| 01:00:53   | There's matching text, matching patterns, and so on.                                                      |
| 01:00:57   | So I'm using the match pattern option.                                                                    |
| 01:01:01   | And first of all, it's looking for the instructions to figure out what service is being used to           |
| 01:01:05   | return this.                                                                                              |
| 01:01:06   | And then if it's looking to see if there's a send by date.                                                |
| 01:01:10   | And there should always be a send by date with these things.                                              |
| 01:01:14   | Because for example, if I'm having it picked up, then there's also, you still have the                    |
| 01:01:17   | option of going and dropping it off, if for example, the pickup doesn't happen or whatever.               |
| 01:01:22   | It's looking then at the return method.                                                                   |
| 01:01:25   | And then it's looking for a particular URL.                                                               |
| 01:01:29   | Now the URL is actually the Amazon like return label page.                                                |
| 01:01:36   | Because what it's doing is then actually like getting that page.                                          |
| 01:01:42   | And it's just saving that into the note.                                                                  |
| 01:01:46   | And then what I've done here is it's an old school approach.                                              |
| 01:01:51   | But I'm using OmniFocus MailDrop.                                                                         |
| 01:01:53   | And I am not using Taskpaper for this.                                                                   |
| 01:01:55   | I'm using a feature called transport text, which is old school OmniFocus automation.                      |
| 01:02:02   | So what you do is you prefix your task name with dash dash.                                               |
| 01:02:06   | And then there's a specific syntax that you can use.                                                      |
| 01:02:08   | I'll get the link to the Omni Automation site for that so that folks can use this.                        |
| 01:02:15   | And this is something that can be parsed by OmniFocus.                                                    |
| 01:02:18   | And then this gets ultimately parsed by, I have an Omni Automation script that goes                       |
| 01:02:24   | through and it processes tasks in my inbox in general.                                                    |
| 01:02:28   | And it looks for to start with anything that's starting with dash dash as a transport text                |
| 01:02:34   | and processes those and then goes on to the other actions.                                                |
| 01:02:38   | So that means that that gets into my OmniFocus inbox pretty quickly.                                      |
| 01:02:42   | And it'll get processed pretty soon after that, just to get things sorted out.                            |
| 01:02:49   | But yeah, it's basically going through and just looking for the bits of data that I need.                 |
| 01:02:57   | Now I think one of the keys that I used here is when I match the text, there's two options                |
| 01:03:05   | when you're looking at an email that's been sent.                                                         |
| 01:03:08   | You've got the HTML content, which is the pretty version that you and I see when we                       |
| 01:03:12   | open, say, mail, but there's also the text, the plain text version of the email.                          |
| 01:03:17   | I'm using the plain text version of the email here to parse because that is a lot easier                  |
| 01:03:23   | to get the data out of than it is the HTML.                                                               |
| 01:03:27   | So that's one of the tricks that I will share with folks if they are looking for a way to                 |
| 01:03:34   | parse email and they need to match some text in it.                                                       |
| 01:03:37   | Make sure to use the plain text body of the email rather than anything else.                              |
| 01:03:41   | Yep.                                                                                                      |
| 01:03:42   | Formatting messes things up when you're trying to process, but that's cool.                               |
| 01:03:47   | And that OmniFocus service was there because there wasn't automation in the world.                        |
| 01:03:51   | And people used to use on a Windows computer and they'd have an iPad or an iPhone with                    |
| 01:03:56   | OmniFocus on it.                                                                                          |
| 01:03:58   | I know because I was one of them would send an email off to your magic address and see                    |
| 01:04:02   | stuff appear in your OmniFocus even though you were sitting on a Windows computer.                        |
| 01:04:07   | I like that.                                                                                              |
| 01:04:09   | Yes, exactly.                                                                                             |
| 01:04:10   | And I could quite easily call Push Cut Automation Server and parse it, the OmniFocus action               |
| 01:04:17   | that way.                                                                                                 |
| 01:04:18   | And I actually do that for some other things, especially where it's not that I want to create             |
| 01:04:22   | one action in OmniFocus, but I want to create a whole template, like a project template                   |
| 01:04:26   | or something like that.                                                                                   |
| 01:04:27   | But in this particular case, I need to create one email, it's got a due date and it's got                 |
| 01:04:33   | a title and some tags and so on.                                                                          |
| 01:04:38   | And it's a very simple single action.                                                                     |
| 01:04:42   | And honestly, MailDrop works perfectly for that because you put the bulk of the information               |
| 01:04:47   | into the title and then you've got your note in the notes section, which stays untouched.                 |
| 01:04:51   | And that's it, simple.                                                                                    |
| 01:04:54   | So it's really good that that option is still there.                                                      |
| 01:04:58   | I was just looking, it last ran like six days ago, which I suspect was the Christmas present              |
| 01:05:03   | for my mother, which my grandmother and I ordered.                                                        |
| 01:05:06   | I ordered it on her behalf as I am the Christmas self this year.                                          |
| 01:05:09   | And then we looked at it and went, no, we'll try a different one instead.                                 |
| 01:05:14   | It just looked really janky and horrible.                                                                 |
| 01:05:17   | So we've ordered a replacement for that.                                                                  |
| 01:05:19   | So yeah, but it works and all of these things appear in my OmniFocus inbox when they're                   |
| 01:05:23   | supposed to and, you know, they get checked off and that's it, done, simple.                              |
| 01:05:29   | This episode of Automators is brought to you by Electric.                                                 |
| 01:05:32   | Turning a small business into an empire takes work and you have to keep your ear to the                   |
| 01:05:35   | ground for things that will help you take it to the next level.                                           |
| 01:05:38   | But this can be really hard when your attention is being pulled in different directions because           |
| 01:05:41   | that's the reality of being a boss.                                                                       |
| 01:05:44   | The team over Electric knows more businesses, maybe like yours, face these challenges.                    |
| 01:05:48   | That's why they've solved this problem for you by operating as your IT department.                        |
| 01:05:52   | Just spending your time searching through unused application licenses, setting up employee                |
| 01:05:55   | laptops and answering never ending IT questions from your team.                                           |
| 01:05:58   | You can build that empire.                                                                                |
| 01:05:59   | Where Electric Acting is your IT department, you can get back to what you're good at.                     |
| 01:06:03   | Plus, you get a really cool IT platform to see and manage everything.                                     |
| 01:06:06   | Honestly, you need to know how to delegate what you don't need to be doing in order                       |
| 01:06:11   | to focus on what you are doing because otherwise that ear to the ground looking for all those             |
| 01:06:14   | problems in the IT department means that you've got things flying over your head that                     |
| 01:06:18   | you as the boss should be looking for.                                                                    |
| 01:06:21   | Then there are plenty of times when I would have loved something like Electric, yes, even                 |
| 01:06:25   | when I was working as an IT department because I had to set up and manage my own laptop as                |
| 01:06:29   | well as all the other things.                                                                             |
| 01:06:30   | It'd be great to just have something delivered that just works with everything that you need.             |
| 01:06:35   | You should go check out Electric if you are working as the IT department in your company                  |
| 01:06:39   | and you've got plenty of other things that you need to be doing too.                                      |
| 01:06:43   | For Automated listeners, Electric are offering a free pair of Beats Solo 3 headphones for                 |
| 01:06:47   | taking a qualified meeting.                                                                               |
| 01:06:49   | Just go to electric.ai slash Automators.                                                                  |
| 01:06:52   | That's electric.ai slash Automators.                                                                      |
| 01:06:54   | Go there now to get your free pair of Beats Solo 3 headphones today for scheduling a meeting.             |
| 01:06:59   | Our thanks to Electric for their support of this show.                                                    |
| 01:07:02   | All right, so let's move on Rose.                                                                         |
| 01:07:06   | We've talked about Amazon Returns of OmniFocus.                                                           |
| 01:07:09   | We have mentioned on the show, I don't think we've ever gone into the detail on it, but                   |
| 01:07:13   | we are using [[Make]] as a back automation based on the creation of an air table.                             |
| 01:07:20   | Then you've got a whole bunch of stuff going on it with the show prep for Automators.                     |
| 01:07:24   | Can you talk through that?                                                                                |
| 01:07:25   | Yeah, yeah.                                                                                               |
| 01:07:26   | I'm actually just going to start by sneakily sending you a screenshot of this one because                 |
| 01:07:30   | I think you're going to like it, David, because it's one of those things that it sounds crazy.            |
| 01:07:35   | Okay, so they have air table and then that makes the show notes automatically.                            |
| 01:07:40   | It's not making all of the show notes for us, folks.                                                      |
| 01:07:42   | We still have to go in and fill in the actual details.                                                    |
| 01:07:45   | But it means that we have a show file in Google Documents.                                                |
| 01:07:52   | We're using Google Docs for this because it works so well, so easily with automation, sharing,            |
| 01:07:59   | multiple people typing at the same time, and also with guests.                                            |
| 01:08:02   | We can just give guests a link and they don't have to do anything in particular.                          |
| 01:08:06   | Everybody's seen a Google Doc before.                                                                     |
| 01:08:09   | My main trigger for this is air table and it's searching for records and specifically                     |
| 01:08:13   | is searching for records in a particular view called create outline.                                      |
| 01:08:18   | The create outline view is just a filter in air table and it's looking for shows which                    |
| 01:08:25   | are upcoming, which do not have a Google Docs link set up in them.                                        |
| 01:08:32   | Because once I've created the Google Doc here, I update the air table record with that Google             |
| 01:08:38   | Docs link, which conveniently moves the record out of the way.                                            |
| 01:08:43   | It's not going to run into that infinite loop.                                                            |
| 01:08:45   | It's going and looking for these things and it's getting them.                                            |
| 01:08:48   | It sorts them by episode number because we tend to do planning calls where we'll think                    |
| 01:08:52   | of a couple of episodes and sketch out a rough mental outline of what we're going to do,                  |
| 01:08:58   | and then prioritises things from the next upcoming episode to the furthest away one                       |
| 01:09:03   | as it does this.                                                                                          |
| 01:09:07   | Once [[Airtable]] has done this, it goes through and it filters and it checks to look for the                |
| 01:09:17   | host information because one of the things that we do at the start of the episode is                      |
| 01:09:21   | I'll do an episode.                                                                                       |
| 01:09:22   | David does an episode.                                                                                    |
| 01:09:23   | I'll do an episode.                                                                                       |
| 01:09:24   | David does an episode.                                                                                    |
| 01:09:25   | So alternates between us.                                                                                 |
| 01:09:26   | So it needs to go and check up who's doing what and then it uses the Google Docs action                   |
| 01:09:33   | to create a Google Doc from a template.                                                                   |
| 01:09:37   | So there is an actual template file that lives in Google Docs.                                            |
| 01:09:42   | And I've selected this and it can then replace tags and tags in the template have two opening             |
| 01:09:51   | curly brackets, name of the tag, to closing curly brackets.                                               |
| 01:09:55   | So anything that's wrapped in those can then be replaced with a variable.                                 |
| 01:09:59   | And then these I just take the information from the air table record that triggered this.                 |
| 01:10:04   | So it will take the episode number, the title, the recording date, the release date, the                  |
| 01:10:09   | name of the host, the name of the co-host for this, and then any notes that we might                      |
| 01:10:15   | have made and sort of sketched out and thrown into air table.                                             |
| 01:10:18   | All right.                                                                                                |
| 01:10:19   | So let me just interrupt there for a second because I just want to put an exclamation point               |
| 01:10:23   | next to Google document templates.                                                                        |
| 01:10:25   | I think this is one of the best things you can do with make.                                              |
| 01:10:29   | If you routinely work in Google Docs and you set this stuff up, the templates are not that                |
| 01:10:35   | difficult and templating it out with automation feels like a win.                                         |
| 01:10:40   | Yeah.                                                                                                     |
| 01:10:41   | Yeah.                                                                                                     |
| 01:10:42   | It really is.                                                                                             |
| 01:10:43   | And the other part is, is basically what this is doing is it's doing find and replace.                    |
| 01:10:46   | But because I have made the point of wrapping each of these things that I need to find and                |
| 01:10:51   | replace with these curly brackets, it gives this to me in one big action so that I'm creating             |
| 01:10:57   | this Google document and it will look for each of these fields and replace all of them                    |
| 01:11:03   | in one go.                                                                                                |
| 01:11:04   | Instead, there is a replace text action in the document, and that's a thing that you                      |
| 01:11:09   | can do with [[Make]].                                                                                         |
| 01:11:10   | And that is great action.                                                                                 |
| 01:11:11   | I'm using it in this automation even, but I say that, but it's not the thing to do if                     |
| 01:11:18   | you need to input like 20 pieces of data when you create a document.                                      |
| 01:11:22   | What you want to do is you want to create, you want to wrap those in curly brackets and                   |
| 01:11:25   | have that in your create document from template action.                                                   |
| 01:11:30   | Because then you're chucking all the data in at the start, and then you can go off and                    |
| 01:11:33   | do any refinements that you need after that.                                                              |
| 01:11:38   | And what's great as well is because this is [[Make]], I can even template the name of the                     |
| 01:11:42   | Google Doc.                                                                                               |
| 01:11:44   | So it's always going to be automators and then the episode number and then the title                      |
| 01:11:48   | of the episode, which would include the guest name if you've got a guest on the episode.                  |
| 01:11:53   | And it's just so simple to do once you've spent like five minutes going through and                       |
| 01:12:00   | setting it up, because David and I already had a Google Docs template, which he very                      |
| 01:12:05   | graciously spent some time formatting and making it actually look pretty.                                 |
| 01:12:09   | And so it's just even better to be able to just use that as our template and have the                     |
| 01:12:15   | data just magically appear.                                                                               |
| 01:12:16   | Yeah, and it lets you pull the template, you create the template separately, so you can                   |
| 01:12:21   | make it pretty.                                                                                           |
| 01:12:22   | It's not going to be like an ugly templated doc, it's going to be as nice as you're willing               |
| 01:12:26   | to make it.                                                                                               |
| 01:12:27   | Yeah, exactly.                                                                                            |
| 01:12:28   | And it is just a Google document.                                                                         |
| 01:12:30   | Okay.                                                                                                     |
| 01:12:31   | That's literally all it is.                                                                               |
| 01:12:32   | It's in the same folder that David's and I show outlines live in.                                         |
| 01:12:36   | So that either of us can go in and tweak the template at any point we like.                               |
| 01:12:40   | The only thing that I ask of David is don't change any of the things in curly brackets,                   |
| 01:12:45   | but you look at it and there's two sets of curly brackets around something, you go, hmm,                  |
| 01:12:48   | maybe I should ask before I touch this.                                                                   |
| 01:12:52   | It's pretty simple, but it's great because it means that if we were to change the name                    |
| 01:12:56   | of the show from automators to shortcuts, which we're not planning on doing as side                       |
| 01:13:00   | note folks, we like coming at the top of your alphabetically listed podcasts, but we could                 |
| 01:13:07   | do that and you could just change a couple of bits in the document and it would happen.                   |
| 01:13:14   | If you wanted to change how we upload audio or where the sponsors list comes in our show                  |
| 01:13:18   | notes, then that would be easy for you to do, David, because you can just go in and                       |
| 01:13:23   | edit that at any point and it would be super simple to do.                                                |
| 01:13:26   | So yeah.                                                                                                  |
| 01:13:27   | And then she's doing the thing, she sent me the picture of guys is great.                                 |
| 01:13:31   | So you're going to error table, then you're creating the document, then you're sending                    |
| 01:13:35   | the name or you're sending the information for the link back to error table.                              |
| 01:13:40   | How are you?                                                                                              |
| 01:13:41   | Yeah, because there's a make link action.                                                                 |
| 01:13:43   | So there's a Google Docs action for make a link to a specific document and I take the                     |
| 01:13:49   | ID of the document that I just created and then that goes back into error table.                          |
| 01:13:54   | So from error table, from that error table list of all of our upcoming shows, I can just                  |
| 01:13:58   | click on any link to any episode and it'll just open that note straight in Google Docs                    |
| 01:14:03   | for me so that I've got our show notes ready to go.                                                       |
| 01:14:06   | And this works for both of us, obviously, because we both have access to the error table.                 |
| 01:14:11   | And yeah, it's just a very simple thing.                                                                  |
| 01:14:14   | But by having the create link for this action, then I can just get that link to that document.            |
| 01:14:19   | Now, actually, the way that David and I have done this is really sneaky.                                  |
| 01:14:23   | The whole folder is actually public so that either us or Steven or Mike or anybody from                   |
| 01:14:27   | really could just pop in there if they needed to.                                                         |
| 01:14:30   | But by using that make link action, it just gets me the nice specific link for that document              |
| 01:14:37   | because not all documents in Google Docs would necessarily be public and have a link like                 |
| 01:14:43   | that by default.                                                                                          |
| 01:14:45   | But in this particular case, it does, but that make link action gives me the link and                     |
| 01:14:49   | that updates the record.                                                                                  |
| 01:14:50   | As you said, David, it just literally sets the show outline to the link and it also has                   |
| 01:14:55   | the show outline ID just in case I needed that for any other automations in the future.                   |
| 01:15:02   | I considered at one point having a thing where if we change what's happening in an episode,               |
| 01:15:08   | then it'll go through and update it or something.                                                         |
| 01:15:12   | And I was like, actually, no, you know what?                                                              |
| 01:15:14   | This is too complicated.                                                                                  |
| 01:15:15   | I'm just going to leave this here.                                                                        |
| 01:15:16   | But I have the show ID just in case I need to.                                                            |
| 01:15:18   | And so where that falls in is sometimes we have a show that gets delayed or something,                    |
| 01:15:23   | but it went through and made the ID already.                                                              |
| 01:15:28   | And what I've been doing that if I'm making it harder for Rose is if we populate a new                    |
| 01:15:33   | outline, I'll just delete the old one.                                                                    |
| 01:15:35   | Yeah, yeah.                                                                                               |
| 01:15:36   | Exactly.                                                                                                  |
| 01:15:37   | Yeah.                                                                                                     |
| 01:15:38   | Yeah.                                                                                                     |
| 01:15:39   | That's what I've been doing.                                                                              |
| 01:15:40   | I considered, okay, if you delete the URL to a document, then we've got the idea of the                   |
| 01:15:44   | old one.                                                                                                  |
| 01:15:45   | So the first thing it should do would be delete that and then go through and do the rest of               |
| 01:15:50   | it.                                                                                                       |
| 01:15:51   | And I was like, you know what?                                                                            |
| 01:15:52   | It doesn't matter if we have a couple of extra [[Google Sheets]] like Google Docs kicking                     |
| 01:15:55   | around in Google Drive.                                                                                   |
| 01:15:58   | It's not a big deal.                                                                                      |
| 01:15:59   | We know which ones are right because they're linked in [[Airtable]].                                          |
| 01:16:03   | So it's easy enough to handle them.                                                                       |
| 01:16:07   | So yeah, yeah.                                                                                            |
| 01:16:09   | And then I get a little bit fancy because when I create the document in the outline,                      |
| 01:16:18   | sorry, where I create the actual outline file, I do have some notes that go in there, but                 |
| 01:16:24   | there's some other bits that we want to put in there that pop in at the top.                              |
| 01:16:29   | For example, if we're talking to a guest, then we need to add some information in there                   |
| 01:16:34   | so they've got things like, hey, thanks for agreeing to be on the show.                                   |
| 01:16:39   | We're excited to talk to you, stuff like that.                                                            |
| 01:16:41   | But David and I don't need that if we're just talking to each other like we are today.                    |
| 01:16:46   | So I put some text together and then I split the route depending on where we're going.                    |
| 01:16:53   | If we have a guest, then it goes one way.                                                                 |
| 01:16:56   | If we don't have a guest, it goes the other way.                                                          |
| 01:16:58   | And I've done this by adding a router action and then two filters.                                        |
| 01:17:03   | But as a side note, if you don't know what a router is or you go, ugh, so scary, all                      |
| 01:17:08   | you need to do is try and connect two actions to the same previous action and it'll just                  |
| 01:17:12   | pop one of those in automatically for you.                                                                |
| 01:17:15   | But a router has got like some little arrows on it.                                                       |
| 01:17:18   | So it's got one arrow going in and it's got one arrow going out for every single output                   |
| 01:17:22   | that it has.                                                                                              |
| 01:17:23   | And very important, you can go in multiple directions, okay?                                              |
| 01:17:27   | You don't have to go in one direction here.                                                               |
| 01:17:30   | So I have two filters.                                                                                    |
| 01:17:32   | I've got one filter for it has a guest and it's simple.                                                   |
| 01:17:36   | It's just reading the guest information from air table and it's not empty or has no guest,                |
| 01:17:42   | in which case it says that it's not empty.                                                                |
| 01:17:46   | So if it's a guest, it's not empty.                                                                       |
| 01:17:48   | If there's no guest, it is empty.                                                                         |
| 01:17:51   | And if there's a guest, then it pops in some texts that says, hey, thanks for agreeing                    |
| 01:17:56   | to be on the show.                                                                                        |
| 01:17:57   | You know, we're excited because, you know, we are, even though we've automated it, we                     |
| 01:18:01   | are genuinely excited.                                                                                    |
| 01:18:03   | And so then it replaces that text.                                                                        |
| 01:18:05   | Now what I've done in this case is in our outline, we have like two square brackets around                |
| 01:18:10   | the word guest notes.                                                                                     |
| 01:18:12   | And I've gone for square brackets instead of the curly brackets because I didn't want                     |
| 01:18:15   | to replace this with the same text, whether or not there's a gasket that's going to be                    |
| 01:18:19   | on the show.                                                                                              |
| 01:18:20   | I've used square brackets to highlight those and I'm just using the replace text action.                  |
| 01:18:24   | So it pops that in.                                                                                       |
| 01:18:25   | And then if nobody's going to be on the show, then it just replaces that information with                 |
| 01:18:30   | absolutely nothing.                                                                                       |
| 01:18:32   | That's it.                                                                                                |
| 01:18:33   | Simple.                                                                                                   |
| 01:18:34   | And yeah, I'm using the compose a string action from the tools before this to look for square             |
| 01:18:40   | brackets, guest notes, square brackets and two line breaks, because this gives me a multi-line            |
| 01:18:46   | string that I can then take and use in my replace text action.                                            |
| 01:18:50   | And you know, that's it.                                                                                  |
| 01:18:52   | You know, it is a series of actions.                                                                      |
| 01:18:54   | This is a relatively long automation as far as, you know, these automations go certainly                  |
| 01:19:00   | more than if this thing happens, then do that.                                                            |
| 01:19:04   | But this was so worth automating because, you know, David and I sat down a couple of                      |
| 01:19:08   | days ago and we planned out like the next four episodes or so that we're going to do                      |
| 01:19:12   | at least topic-wise, you know, we know what topics we're going to talk about.                             |
| 01:19:15   | And then this just went and it made all of those outlines for us.                                         |
| 01:19:19   | Like we don't need to sit down and think about this stuff again.                                          |
| 01:19:24   | Like it's just there so we can open the Google Drive folder or you can go from the air table              |
| 01:19:29   | and just click it and the notes are there for us to add to.                                               |
| 01:19:32   | And it means that, you know, I won't create a show note and then you go, hey, Rose, did                   |
| 01:19:36   | you already create notes for this?                                                                        |
| 01:19:37   | But it's like two o'clock in the morning of my time.                                                      |
| 01:19:39   | So I then don't reply until like 9 a.m. my time and then you're waiting until the next                    |
| 01:19:42   | day and stuff doesn't happen.                                                                             |
| 01:19:44   | It's just, it's there or it isn't there and it's as simple as that.                                       |
| 01:19:48   | Yeah.                                                                                                     |
| 01:19:49   | One of the tricks you talked about of replacing with nothing, I think some people don't realise           |
| 01:19:54   | that but it is a super useful automator trick, you know, especially with text creation.                   |
| 01:20:01   | Maybe something needs to be there, maybe it doesn't and kind of replaced with nil.                        |
| 01:20:06   | So all you do is you just put a replace in there with nothing and it'll remove the token                  |
| 01:20:11   | and you're good.                                                                                          |
| 01:20:13   | With some apps you need to put some character in.                                                         |
| 01:20:15   | I think Microsoft Word used to have to put a space in, but it just, if a lot of them                      |
| 01:20:21   | you can just do it with nothing and I think that's a really, really cool trick.                           |
| 01:20:24   | Yes.                                                                                                      |
| 01:20:25   | Yeah, exactly.                                                                                            |
| 01:20:26   | And one of the features that I'm using here, which in this, because I realised at one point               |
| 01:20:31   | like, hey, I've got like a tools thing, which is like notes colon and like a text thing                   |
| 01:20:36   | and then there's a replace text section.                                                                  |
| 01:20:38   | What's going on?                                                                                          |
| 01:20:39   | I realised, so when we have our notes in air table, which is just a long text field                       |
| 01:20:43   | in air table.                                                                                             |
| 01:20:44   | So it's just a place for us to like note down a few ideas, post a link to something that                  |
| 01:20:49   | we, you know, we're thinking of using as our basis for the show outline.                                  |
| 01:20:53   | But a lot of the time we don't have this because, you know, you and I have talked and we've               |
| 01:20:56   | each got our individual notes, maybe in [[Drafts]] or something.                                              |
| 01:20:58   | And so, you know, we don't think to put it in the air table.                                              |
| 01:21:02   | So what this does impose the text string, just has notes colon, space, space, and then                    |
| 01:21:06   | space singular, sorry, and then two line breaks.                                                          |
| 01:21:08   | And then it just replaces that act that text, but [[Make]] is really smart and that if it can't               |
| 01:21:14   | find that old text, it's just going to keep going.                                                        |
| 01:21:17   | It doesn't matter.                                                                                        |
| 01:21:18   | It's totally happy with that.                                                                             |
| 01:21:20   | But it gives me the option to, you know, have those two line breaks.                                      |
| 01:21:23   | But because I forgot what this was at one point, I actually right clicked on the action                   |
| 01:21:29   | and then I clicked add notes because you can add a note to each individual module here.                   |
| 01:21:35   | And then if I click on the little notes icon at the bottom, then it actually shows me what                |
| 01:21:39   | that is.                                                                                                  |
| 01:21:40   | And like it shows me both the note and like where it's attached to, which is just really                  |
| 01:21:45   | handy for this sort of thing because, you know, I've looked, I've clearly done this before                |
| 01:21:49   | where I've gone through and been like, oh, I could tidy that up and delete this and then                  |
| 01:21:52   | realise what it was doing and then had to go back and undo it.                                            |
| 01:21:55   | But fortunately, you know, past me has written a note so that I know what I'm doing there.                |
| 01:22:00   | Or, you know, if you've got something you don't know how to do, you can leave a note                      |
| 01:22:02   | on an action for yourself, which is pretty nice.                                                          |
| 01:22:06   | So yeah.                                                                                                  |
| 01:22:07   | Well, I do think that [[Make]] is something people should be looking at.                                      |
| 01:22:10   | They're interested in this stuff.                                                                         |
| 01:22:11   | I'm definitely building my [[Make]] actions out and thanks for all that help Rose.                            |
| 01:22:18   | One of the things I do like about it is it is seen, it is both powerful and user friendly                 |
| 01:22:24   | of the services I've tried.                                                                               |
| 01:22:25   | It feels like it really gets that mix right and the pricing model is aggressive.                          |
| 01:22:30   | I mean, I'm going to, I think I'm going to be going into the $9 a month plan.                             |
| 01:22:35   | Which one are you using?                                                                                  |
| 01:22:37   | So what I'm actually using is I am using the $9 a month plan with more executions.                        |
| 01:22:43   | Because basically I just found that I needed to be able to run more scenarios every month                 |
| 01:22:49   | than I was getting, but I didn't need the next plan up.                                                   |
| 01:22:53   | And what I really like about this is you can just add more executions onto your existing                  |
| 01:22:57   | plan.                                                                                                     |
| 01:22:58   | And I pay $16 a month with annual billing for 20,000 operations a month.                                  |
| 01:23:05   | So actually thinking about it, I've just looked at it again.                                              |
| 01:23:07   | I should probably just upgrade to pro because then I'll get $16,000 a month and 120,000                   |
| 01:23:14   | operations a year, which is the same thing.                                                               |
| 01:23:18   | But I also get some more actions with that where I can have like a 250 megabyte file                      |
| 01:23:23   | size uploaded if I want to.                                                                               |
| 01:23:25   | So I should probably switch.                                                                              |
| 01:23:27   | I might do that after the show.                                                                           |
| 01:23:29   | But yeah, it's just one of those things where I think I was previously getting a little bit               |
| 01:23:34   | of a deal on my extra operations that I had every month.                                                  |
| 01:23:39   | But either way, I think I'll be all good with this because $16 a month and I get to do 120,000            |
| 01:23:47   | actions a year automatically or more if I wanted to.                                                      |
| 01:23:51   | If I want, what was that, 24 million actions a year annually.                                             |
| 01:23:58   | So 24 million actions, that's $1,377.67.                                                                  |
| 01:24:06   | I think my price is including VAT, David.                                                                 |
| 01:24:09   | Yeah, well, I hope.                                                                                       |
| 01:24:11   | But yeah.                                                                                                 |
| 01:24:12   | All right.                                                                                                |
| 01:24:13   | So let's step away from [[Make]] for a second.                                                                |
| 01:24:16   | This show's coming out right before the holidays.                                                         |
| 01:24:19   | Pretty cool new automations for this year's holiday.                                                      |
| 01:24:22   | I know we've talked about this in the past, I know you had your synchronised lights on                    |
| 01:24:26   | your tree.                                                                                                |
| 01:24:27   | Oh yeah.                                                                                                  |
| 01:24:28   | What else have you automated this holiday season?                                                         |
| 01:24:31   | Well, so David, I have one automated Christmas tree with twinkly lights on it.                            |
| 01:24:36   | Hugh came out with Festavia lights, which sound pretty cool and I would really like,                      |
| 01:24:41   | but I don't have another Christmas tree or I didn't have another Christmas tree.                          |
| 01:24:47   | I have not bought Hue Festavia lights.                                                                   |
| 01:24:50   | It seemed a little pricey for an impulse purchase right before Christmas, but if I didn't already         |
| 01:24:55   | have programmable lights, that would have happened for sure.                                              |
| 01:24:59   | As it is, I did make a mini programmable Christmas tree and when I say mini, I mean                       |
| 01:25:03   | this thing is six inches tall.                                                                            |
| 01:25:06   | So I'm sure you've seen this sort of thing and folks will see this as well.                               |
| 01:25:10   | It's like a clear plastic Christmas tree with a little bit of white frosting at the bottom.               |
| 01:25:14   | And usually when you flip it up, there's like a little battery compartment and then it's                  |
| 01:25:18   | got like a little LED inside of it and it's supposed to light up and look pretty.                         |
| 01:25:23   | And this was a lovely idea that I bought a couple of years ago.                                           |
| 01:25:26   | I believe I paid, it may have been one-year-old 99 when I bought it when I was living in Vienna           |
| 01:25:32   | because I wanted a Christmas tree for my desk, but the LED and it was so tiny and it was                  |
| 01:25:36   | so sad and it just didn't really light up.                                                                |
| 01:25:41   | If I have lights on, then you just couldn't see it.                                                       |
| 01:25:45   | So I ripped it apart.                                                                                     |
| 01:25:48   | I took the batteries out and I threw in a NeoPixel ring, which is like a ring of LEDs,                    |
| 01:25:55   | about an inch and a half in diameter.                                                                     |
| 01:25:56   | It's got 12 LEDs on it, but they're addressable.                                                          |
| 01:25:58   | So you can turn on each individual one in different colours if you want.                                   |
| 01:26:03   | And so I set that up and I just connected that to a mini controller board, which I was                    |
| 01:26:10   | able to set up.                                                                                           |
| 01:26:11   | I literally plugged it into my computer, clicked like two buttons in [[Home Assistant]], and it               |
| 01:26:17   | set the whole thing up for me.                                                                            |
| 01:26:19   | And now it's slowly swapping between rainbow colours in like a circular pattern behind me.                 |
| 01:26:25   | And it's so much fun and I'm really glad I did it because I just literally ripped out                     |
| 01:26:29   | the battery compartment.                                                                                  |
| 01:26:30   | I just took a pair of grips to it and pulled that out.                                                    |
| 01:26:32   | I took the batteries out first to be clear, folks, I didn't, you know, risk damageing the                  |
| 01:26:36   | batteries.                                                                                                |
| 01:26:37   | But yeah, it took me like maybe.                                                                          |
| 01:26:40   | I think it actually took me 10 minutes to take the battery compartment out and then                       |
| 01:26:43   | like five minutes to connect the NeoPixel ring to the ESP program with [[Home Assistant]].                    |
| 01:26:49   | Like I literally didn't write any code.                                                                   |
| 01:26:51   | I think I had to copy my Wi-Fi name and my Wi-Fi password into it and that was it.                        |
| 01:27:00   | And now it just rainbows.                                                                                 |
| 01:27:01   | It's brilliant.                                                                                           |
| 01:27:02   | I love it.                                                                                                |
| 01:27:03   | So I have a new programmable Christmas tree.                                                              |
| 01:27:05   | I didn't buy the Twinkly Wreath yet.                                                                      |
| 01:27:07   | They've just come out with that.                                                                          |
| 01:27:08   | But I don't know, maybe that'll be on the books for next year.                                            |
| 01:27:11   | Yeah, I have a Christmas tree that has like lights built into it, you know, a lot of the                  |
| 01:27:16   | , because we use an artificial tree in California, you really don't want a tree.                          |
| 01:27:20   | Oh yeah, same, same.                                                                                      |
| 01:27:21   | And the, but the lights are wired into it, but the lights every year, like the lights                     |
| 01:27:26   | are getting progressively worse in terms of like the whole limbs just not working.                        |
| 01:27:31   | And I just told my wife, next year, I'm going to look at that.                                            |
| 01:27:34   | There's some of these automatic lighting solutions where you can, you know, how it do phasing             |
| 01:27:39   | and all kinds of cool light features.                                                                     |
| 01:27:41   | Yeah.                                                                                                     |
| 01:27:42   | Because we're going to have to put lights on the tree.                                                    |
| 01:27:45   | The built-in lights are no longer sufficient.                                                             |
| 01:27:47   | So that one is just kind of on the back burner for me, but I think it's out there.                        |
| 01:27:51   | But they are quite expensive, like they're, and that, that is something that is no fun.                   |
| 01:27:57   | The only thing I did really this year, because Aqara has taken over my automation triggers,               |
| 01:28:02   | is I bought a couple Aqara switches.                                                                      |
| 01:28:05   | I had the flick switches, but I used them up and I, do I get more flick switches or                       |
| 01:28:10   | just get Aqara?                                                                                           |
| 01:28:11   | I got the Aqara switches on Black Friday and I've put a couple switches in the house and                  |
| 01:28:17   | I have wired all of the interior Christmas stuff to these switches.                                       |
| 01:28:21   | And the idea just is, you know, making it easy for the rest of my family to turn the lights               |
| 01:28:25   | on for the tree in the village.                                                                           |
| 01:28:27   | We actually have two trees.                                                                               |
| 01:28:28   | So, you know, everything goes on with one touch.                                                          |
| 01:28:31   | There's one by the front door, one in another area of the house.                                          |
| 01:28:33   | And I've noticed that it's really landed with the family in terms of them being able to                   |
| 01:28:38   | turn everything on and off.                                                                               |
| 01:28:39   | And I thought that was good, but that's really the only thing I've done Christmas specific                |
| 01:28:43   | this year.                                                                                                |
| 01:28:44   | Everything else is already wired down.                                                                    |
| 01:28:45   | I've got the, you know, I've got the automatic switch for the outdoor lights, which is on                 |
| 01:28:52   | [[HomeKit]] and everything is in pretty good shape for me.                                                    |
| 01:28:56   | But this year I did the most basic for automations as I added manual switches.                            |
| 01:29:01   | So everybody else in the house can also get this stuff working.                                           |
| 01:29:05   | Yeah.                                                                                                     |
| 01:29:06   | I think that's a really nice idea.                                                                        |
| 01:29:07   | I also have a tree with pre-wired lights on it, but I ended up just adding twinkly lights                 |
| 01:29:15   | on top because the built-in or not built-in, but the pre-connected LEDs are still glowing                 |
| 01:29:22   | and looking nice for me.                                                                                  |
| 01:29:24   | So I have those on like a dumb regular switch and then I have the twinkly lights on top.                  |
| 01:29:29   | So the pre-connected Christmas tree lights are just, they're just like a warm white                       |
| 01:29:36   | that's constantly on.                                                                                     |
| 01:29:37   | They don't do anything.                                                                                   |
| 01:29:39   | But honestly, it works really nicely with the twinkly lights.                                             |
| 01:29:43   | So I'm glad I did that.                                                                                   |
| 01:29:45   | And you may be able to pick up something like twinkly lights, say after the holidays for                  |
| 01:29:50   | cheaper or other than that, this sort of addressable LED lights are becoming more and more popular.       |
| 01:30:00   | So you may find that there's alternatives out there.                                                      |
| 01:30:03   | I know that Hue coming out with the Festavia is certainly a good sign because once Hue                    |
| 01:30:07   | come out with the fancy and expensive version of things, which I say is expensive, it will                |
| 01:30:13   | work really well.                                                                                         |
| 01:30:16   | Everybody else is going to hop on board and I've seen more affordable alternatives coming                 |
| 01:30:19   | from GOV, GOV EE and other similar folks already.                                                         |
| 01:30:26   | Downside is they may not be home kit connected, but you can probably work around that with                |
| 01:30:30   | [[Home Assistant]].                                                                                           |
| 01:30:31   | You've got that running, David.                                                                           |
| 01:30:32   | Yeah, exactly.                                                                                            |
| 01:30:33   | And the thing you advised me to my last year, the home kit controller power strip, man,                   |
| 01:30:39   | that is so great for the holidays because we've got one area where we've got multiple Christmas           |
| 01:30:46   | related things and being able to address each one individually is awesome, although I never               |
| 01:30:51   | found a use for it after Christmas.                                                                       |
| 01:30:54   | I didn't pack it away with the Christmas stuff.                                                           |
| 01:30:57   | I thought, well, I'm sure this is just too cool that I have this power strip I can address                |
| 01:31:01   | individually and I could just never find a use for it.                                                    |
| 01:31:04   | Do you have one that you use in non-holiday scenarios?                                                    |
| 01:31:07   | Yeah.                                                                                                     |
| 01:31:08   | Yeah.                                                                                                     |
| 01:31:09   | So for the last two years, I've ended up buying new smart power strips for a year because                 |
| 01:31:13   | what happens is, you know, you buy it for Christmas.                                                      |
| 01:31:15   | You connect the Christmas tree to it and some other bits.                                                 |
| 01:31:18   | I've got some little IKEA star lights that I hang around sort of like my TV unit and                      |
| 01:31:23   | so on, you know, because I made my whole living room a little bit Christmassy, which is great.            |
| 01:31:28   | And I just had Penelope, the FN calendar penguin in my office.                                            |
| 01:31:32   | It's a big, giant stuffed penguin with pockets on the front for each day of the month.                    |
| 01:31:38   | But you know, so I have these smart power strips and then they end up in other places                     |
| 01:31:44   | partially because you just need a power strip, right?                                                     |
| 01:31:48   | Or the other one is, oh, actually, I've got like three things that I need on smart plugs                  |
| 01:31:52   | here, but smart plugs, I've had best of luck with IKEA ones, actually, they're the narrowest              |
| 01:31:58   | of the lot.                                                                                               |
| 01:31:59   | Like you can usually fit multiples of those next to each other, but, you know, once you've                |
| 01:32:03   | got like two or three of those on an extension lead, they extension lead becomes pretty unwieldy.         |
| 01:32:09   | And so, you know, I end up, you know, connecting them to a smart power strip.                             |
| 01:32:13   | And so those have got pressed into service.                                                               |
| 01:32:15   | So I've got one for, I've got a heating pad and a heated foot warmer in my office, David,                 |
| 01:32:20   | because, you know, there is a bit of an energy crisis going on over here and I didn't want                |
| 01:32:24   | to like have to heat the whole house when I'm basically just sitting still.                               |
| 01:32:27   | So it's like, yeah, heating pad and foot warmer, but I needed to be able to turn both                     |
| 01:32:31   | of them off, like when I'm not in my office, like I wanted that automated.                                |
| 01:32:35   | So, you know, they've got a 45 minute cutoff where they will automatically turn off.                      |
| 01:32:39   | I was like, no, if I'm not in my office, they should just turn off.                                       |
| 01:32:42   | So yeah, I connected those to a smart power strip, which is great because it means I can                  |
| 01:32:46   | turn them on automatically as well.                                                                       |
| 01:32:48   | And if I've left them on, then, you know, they turn on and just warm up and it's really                   |
| 01:32:52   | nice to be able to do that without having to like reach down and find like the power                      |
| 01:32:56   | slider on it.                                                                                             |
| 01:32:57   | So, yeah, yeah, I've ended up using a couple of those in different places now.                            |
| 01:33:01   | I need to find a way to like take some devices like I have a nine volt power device and like              |
| 01:33:08   | some of these small LED lights that are in batteries.                                                     |
| 01:33:12   | I need to find a way to connect those to home kit so I can use them.                                      |
| 01:33:15   | Well, if you've got battery devices, David, I've been watching some YouTube tutorials                     |
| 01:33:19   | recently about like cutting off the battery supply or replacing the battery supply with                   |
| 01:33:23   | a USB power supply instead.                                                                               |
| 01:33:25   | Yeah.                                                                                                     |
| 01:33:26   | So you can just plug them into USB because all of the smart power strips that you can                     |
| 01:33:29   | get, I've got USB ports on the end too, and those can be controlled usually as a group.                   |
| 01:33:33   | But if you've got a couple of lights connected to them, you know, like multiple lights connected          |
| 01:33:39   | to USB, then, you know, they can all turn off at the same time, which is pretty nice.                     |
| 01:33:42   | Yeah, except it requires cords and I really like that these devices are cordless.                         |
| 01:33:47   | Either way, so we got some good Christmas stuff going this year.                                          |
| 01:33:50   | Hopefully we gave you some good ideas on [[Make]] today.                                                      |
| 01:33:54   | That's going to wrap it up for this episode.                                                              |
| 01:33:55   | We are the Automators podcast.                                                                            |
| 01:33:57   | You can find us over at relay.fm/automators.                                                        |
| 01:34:01   | We want to thank our sponsors at Masterclass Electric and LinkedIn Jobs.                                  |
| 01:34:05   | If you want to get active in the forums, you can find those over at talk.automators.fm.                   |
| 01:34:12   | Great forums.                                                                                             |
| 01:34:13   | They keep coming up with great solutions and really smart people over there.                              |
| 01:34:15   | Meanwhile, we'll be automators and we'll see you next time.                                               |
| 01:34:18   | Goodbye, folks.                                                                                           |
