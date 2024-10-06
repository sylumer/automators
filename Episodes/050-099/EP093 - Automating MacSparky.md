---
status: "incomplete"
fc-date:
  year: 2022
  month: 01
  day: 15
fc-category: "podcast"
podcast: "Automators"
published: 2022-01-15
duration: 5970
formattedduration: "01:39:30"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/93"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators093.mp3"
episode: 93
title: "93: Automating MacSparky"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
David's made a few changes and it's time for an Automator-style audit. In this episode Rose and David cover email, task management, calendars, desktop setups, web automation, and more.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 093 Discussion](https://talk.automators.fm/t/93-automating-macsparky/13065)

# Sponsors
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Communicate Smarter.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.
- [[Hover (Sponsor)|Hover]] - Make a name for yourself.

# Show Notes
- [Why I'm No Longer Practicing Law - MacSparky](https://www.macsparky.com/blog/2022/01/no-more-law/)
- [MacSparky Labs](https://www.macsparky.com/join/)
- [Thank You and a Few Updates - MacSparky](https://www.macsparky.com/blog/2022/01/thank-you-and-a-few-updates/)
- [MacSparky - Fiddly awesome help with Apple technologies](https://www.macsparky.com/)
- [WordPress Hosting, Perfected. | WP Engine®](https://wpengine.com/)
- [Grammarly Now Supports Native Mac Apps - Software - MPU Talk](https://talk.macpowerusers.com/t/grammarly-now-supports-native-mac-apps/26304)
- [MarsEdit 4 - Powerful web publishing from your Mac.](https://redsweater.com/marsedit/)
- [iWeb - Wikipedia](https://en.wikipedia.org/wiki/IWeb)
- [PublishPress: Editorial Calendar, Workflow, Comments, Notifications and Statuses – WordPress plugin | WordPress.org](https://wordpress.org/plugins/publishpress/)
- [Email alias - Wikipedia](https://en.wikipedia.org/wiki/Email_alias)
- [Zendesk: Customer Service Software](https://www.zendesk.com/)
- [Zoho Desk | Customer Service Software for Context-Aware Support](https://www.zoho.com/desk/?zmc=zoho-fa&ireft=ohome)
- [SaneBox | Email Management for Any Inbox](https://www.sanebox.com/)
- [MailMate](https://freron.com/)
- [OmniFocus Field Guide, Third Edition | MacSparky Field Guides](https://learn.macsparky.com/p/omnifocus)
- [Moom · Many Tricks](https://manytricks.com/moom/)
- [The Sparky Status Board 2.0 - MacSparky](https://www.macsparky.com/blog/2021/06/the-sparky-status-board-20/)
- [Basecamp: Project Management & Team Communication Software](https://basecamp.com/)
- [A Keyboard Maestro Plugin for Apple Shortcuts | ThoughtAsylum](https://www.thoughtasylum.com/2021/12/05/a-keyboard-maestro-plugin-for-apple-shortcuts/)

# Transcription
  
| Time Index | Transcription                                                                                          |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the podcast where we talk about making your technology               |
| 00:06      | do everything for you, at least as far as we can.                                                      |
| 00:09      | I'm Rosemary Orchard, and as always, I'm joined by the very special David Sparks.                      |
| 00:13      | Hey, Rose, how are you today?                                                                          |
| 00:15      | Oh, I'm excited, David.                                                                                |
| 00:17      | You've been posting stuff on your blog, which has changed, and oh my gosh, there's so much             |
| 00:20      | happening.                                                                                             |
| 00:21      | Yeah, I kind of turned my life upside down over there.                                                 |
| 00:25      | I've been doing it, as you know, Rose has, of course, been on the inside of all this.                  |
| 00:29      | I decided in October to shut down the law practice and spend three months doing that,                  |
| 00:34      | and now I'm giving all my time to MacSparky, and if you're interested in all of that, there's         |
| 00:40      | a blog post will link, and there's an episode of Focus and Mac Power users, but we're not              |
| 00:46      | going to get into all that stuff today except for the fact that this whole change has allowed          |
| 00:53      | me to kind of do an automation audit and see how I'm automating, and one of the downsides              |
| 00:58      | of being a lawyer was I couldn't talk about some of the stuff I was doing because it was               |
| 01:01      | all client-related, so now I thought I could like lift the veil off some of the other automation       |
| 01:06      | stuff I'm doing today, and I'm really kind of rethinking a lot of things because New                   |
| 01:14      | Year knew me, whatever, right?                                                                         |
| 01:16      | Yeah, well, it's one of those things as well that sometimes it is good to go back and audit            |
| 01:21      | your automations.                                                                                      |
| 01:22      | I have no idea how many automations I've created and forgot about, and they're just running            |
| 01:26      | in the background.                                                                                     |
| 01:27      | And sometimes it's great to just have a little audit of, hey, these things are massively               |
| 01:32      | improving my life, and sometimes it's good to do an audit for the, oh, that's where this               |
| 01:37      | little weirdness was coming from, got it.                                                              |
| 01:39      | I'm going to fix that now so that you can get all of those things sorted out.                          |
| 01:44      | So yeah, New Year, New Career, why not?                                                                |
| 01:47      | Yeah, and this episode is really going to focus just on categories of work and how I'm                 |
| 01:53      | doing automation in them, it's not like a catalogue of all automation that I do.                         |
| 01:58      | As an example, last week I did a post on the blog about my [[AppleScript]] to eject drives,               |
| 02:05      | you know, when I remove my laptop from the screen, I have a keyboard in my script that                 |
| 02:12      | does closes windows and ejects drives, and I posted that script.                                       |
| 02:16      | That's not the kind of thing I'll be talking about today, we're going to kind of try and               |
| 02:18      | stay in categories, and then we're going to do another episode like this later down the                |
| 02:26      | road with Rose and kind of take apart what she's doing too.                                            |
| 02:29      | So I think this is going to be really fun, and I guess, you know, we should get started,               |
| 02:36      | right?                                                                                                 |
| 02:37      | Yeah, and I think there is no better place to get started than your website because one                |
| 02:41      | of the things that you did as part of the switch is you changed up your website, and                   |
| 02:46      | I'm going to guess that a chunk of this was because it's going to be easier to automate,               |
| 02:50      | right?                                                                                                 |
| 02:51      | Yeah, I mean, there was a whole bunch of it.                                                           |
| 02:54      | I was running, you know, in some ways, I was running both the law practice and MacSparky's            |
| 02:59      | hobbies because they were, I was doing them both at the same time, I don't really mean                 |
| 03:04      | that I was informal about them, but you know, it was hard to like do the exact best practice           |
| 03:10      | and everything when you're constantly jumping between two things.                                      |
| 03:13      | And when I decided, okay, MacSparky is going to be it, I need to grow up on a few things.             |
| 03:19      | And there have been all these little cuts, you know, on the website and Squarespace,                   |
| 03:24      | I'll just say is awesome.                                                                              |
| 03:25      | And that's not because I've read a lot of their ads over the years and they sometimes sponsor          |
| 03:29      | this show, but I really like Squarespace because it's affordable and really good.                      |
| 03:35      | Like, you know, the making the content adapt to the iPhone versus the iPad versus the Mac,             |
| 03:41      | it does that automatically, they have really good templates.                                           |
| 03:44      | You guys have all heard the ads, you know, and it's not very expensive.                                |
| 03:48      | And so I was really happy to stand Squarespace all the years, but there were things I wanted           |
| 03:52      | to do.                                                                                                 |
| 03:53      | Like I wanted to put a proper dark mode in, which we're working on now.                                |
| 03:56      | Hopefully that'll be done by the time the show airs.                                                   |
| 03:57      | And I wanted to, you know, I wanted to change the way the RSS feed is handled.                         |
| 04:03      | And I just needed to kind of go to the next level.                                                     |
| 04:08      | And also I was adding the MacSparky Labs, which is a new thing I'm doing.                             |
| 04:12      | If you're interested, I'll put a link for that in the show.                                            |
| 04:15      | And that has Memberful as a background.                                                                |
| 04:18      | And like one of the things I can do with the labs is I can say, like, if you are a subscriber          |
| 04:22      | at this level, there are certain pages only you can see, you know, with extra content                  |
| 04:27      | and you can't do that in Squarespace.                                                                  |
| 04:29      | So I, um, I realised I needed to switch to, to WordPress.                                              |
| 04:34      | And I mean, the first thing I did was reach out to my friend Rose and ask if she thought               |
| 04:38      | that was a dumb idea.                                                                                  |
| 04:40      | And she said it wasn't.                                                                                |
| 04:42      | And then I, um, I started the process and I'll just tell you that, um, it is, it's pretty              |
| 04:49      | expensive, you know, with the traffic that website gets, it's, I'm paying like $700 a                  |
| 04:54      | year and hosting fees and I gotta, I have a developer.                                                 |
| 04:57      | You've also gone for like the best, um, hosting option that's going to keep it simple for              |
| 05:02      | you though, because it's entirely possible that you could have done everything in a different          |
| 05:06      | way and saved yourself a lot of money, but you're like, you've chosen to save yourself                 |
| 05:10      | headaches and not have to do work yourself here, which is the right choice for you.                    |
| 05:14      | Yeah.                                                                                                  |
| 05:15      | I use WP engine and I felt like this is something that I just want it to work.                         |
| 05:20      | You know, it's my website.                                                                             |
| 05:21      | It's the centre of my universe for the MacSparky stuff I do.                                          |
| 05:27      | And I want that to always be available and always to be fast and work and, you know,                   |
| 05:33      | there are other options with WordPress, you pick a, you know, a server and there's all                 |
| 05:36      | sorts of vendors that'll do it, but I went with the best as far as I understand.                       |
| 05:42      | And so anyway, I spent money on it and, um, I did it, but there is an automation level                 |
| 05:47      | to this as well.                                                                                       |
| 05:49      | Hmm.                                                                                                   |
| 05:50      | I bet there is.                                                                                        |
| 05:51      | Because one of the reasons why I said it wasn't crazy because I know that things like Zapier           |
| 05:54      | and [[Make\|Integromat]] and shortcuts and [[Drafts]] have all got support for WordPress, which makes                |
| 05:59      | life a little bit easier for you, I hope.                                                              |
| 06:01      | Yeah, exactly.                                                                                         |
| 06:02      | And I'm really just getting my arms wrapped around it.                                                 |
| 06:06      | Um, so starting on the, uh, on the local Mac level, um, I write blog posts and I continue              |
| 06:14      | to write them in [[Obsidian]] and Markdown.                                                                |
| 06:16      | Um, so the automation steps that happen there are, I have, um, I write it in Markdown, then            |
| 06:23      | I run a keyboard and my script that grabs all the text that goes to [[Safari]], opens [[Grammarly]]            |
| 06:29      | and then creates, uses the feature and keyboard Maestro where it looks at the screen and               |
| 06:33      | clicks a button, you know, which I know is always, a lot of people are afraid of that.                 |
| 06:37      | But for the [[Grammarly]] website, that's the only way to open a new document.                             |
| 06:42      | You have to like click a special thing on the screen, but it works every time.                         |
| 06:46      | And then I use a pause command and then I, I paste the text in.                                        |
| 06:50      | So it's just like, I put one, I'm just one button away from [[Obsidian]] to [[Grammarly]] grammar check.       |
| 06:56      | So that's the first step I do.                                                                         |
| 06:57      | Yeah.                                                                                                  |
| 06:58      | Anything I write.                                                                                      |
| 06:59      | Uh, so I'll do that.                                                                                   |
| 07:00      | And then I have a similar, um, script to put it back in [[Obsidian]] and then I'll read it                 |
| 07:04      | through a few times.                                                                                   |
| 07:06      | And then I have another script I write that gets me to, uh, post it to of all places,                  |
| 07:13      | Basecamp, you know, and that is an area where I really need to, as things progress here,               |
| 07:20      | I need to re-engage with, um, web-based automation.                                                    |
| 07:24      | Yeah.                                                                                                  |
| 07:25      | It's one of those things where there are plenty of possibilities for a whole bunch of stuff            |
| 07:29      | here that like you'll only see as you've, as you dive into it and as you get deeper into               |
| 07:34      | it.                                                                                                    |
| 07:35      | But I think one lesson that everybody should take away from this is like, you, you need                |
| 07:38      | to have a tool that you can use in the way that you want.                                              |
| 07:42      | Um, because I'm sure, you know, [[Grammarly]], for example, is not necessarily scriptable,                 |
| 07:49      | but maybe if you tried the [[Grammarly]] desktop app, that would be easier.                                |
| 07:52      | Um, and [[Tim Stringer]] actually posted in the [[Mac Power Users]] forums, uh, back in November               |
| 07:56      | when this finally became available, um, as, um, a built into the Mac thing, but it is                  |
| 08:02      | then everywhere on your Mac all the time, which some people may or may not want.                       |
| 08:06      | Um, but, you know, once you start connecting all these things together, which you're now               |
| 08:11      | going to be very much more able to do just because WordPress has got an API, a web API,                |
| 08:16      | an open API that you can use, and everybody else can use that as well.                                 |
| 08:21      | Um, and so you could do things like, for example, whenever [[Mac Power Users]] posts create a draft        |
| 08:26      | post directly in WordPress with everything from the [[Mac Power Users]] feed.                              |
| 08:31      | And then you can go in and make your tweaks and, you know, be done with it type thing.                 |
| 08:35      | And that's now possible, which previously you would have had to have extra steps involved              |
| 08:40      | to achieve that.                                                                                       |
| 08:41      | Yeah.                                                                                                  |
| 08:42      | And that's like something I need to follow up on.                                                      |
| 08:44      | Like this is, uh, the, the WordPress installation is pretty new.                                       |
| 08:48      | Like I'm also interested in going over to Red Sweater and trying, you know, their blogging             |
| 08:52      | platform software.                                                                                     |
| 08:53      | Yeah.                                                                                                  |
| 08:54      | MarsEdit.                                                                                              |
| 08:55      | Yeah.                                                                                                  |
| 08:56      | And I don't know what, uh, how all that plays out.                                                     |
| 08:59      | The way I've handled, uh, blog posts related to podcast release is I have, uh, a form of               |
| 09:05      | automation called human delegation and I have a virtual assistant that helps me out.                   |
| 09:11      | And one of the things she does is every time she knows of my podcast and every time a new              |
| 09:15      | one drops, she, she creates a post and just posts it.                                                  |
| 09:19      | So that happens automatically already, but it doesn't happen through fancy computer stuff.             |
| 09:26      | It happens through me paying her, you know, once a month to do some things among that.                 |
| 09:31      | But, um, why not make it easier for her?                                                               |
| 09:34      | Like I could set that automation up and just so have the draft created and she could go                |
| 09:38      | in and check it and hit the publish button and exactly.                                                |
| 09:42      | Yeah.                                                                                                  |
| 09:43      | And, uh, so I, I need to work on that, um, you know, also with the website, I'm working                |
| 09:48      | on some photo and image automations, you know, the trick with a website is you want to get             |
| 09:54      | the images big enough that they look good, but not so big that they take a long time                   |
| 09:58      | to load.                                                                                               |
| 09:59      | It's like a kind of a balancing act, um, modern WordPress actually handles a lot of that for           |
| 10:05      | you.                                                                                                   |
| 10:06      | If you throw a really big image.                                                                       |
| 10:07      | Yeah.                                                                                                  |
| 10:08      | I'll kind of take care of it for you.                                                                  |
| 10:10      | By the way, WordPress, the last time I used it was like 10 years ago.                                  |
| 10:13      | It is, of course, it's a lot better than it used to be.                                                |
| 10:16      | It's changed a lot, especially in the last few years, it has changed quite a significant               |
| 10:20      | amount.                                                                                                |
| 10:21      | And by using, um, WP engine rather than entirely self hosting it, um, they, they'll be doing           |
| 10:27      | a whole bunch of, um, back updates and stuff on the backend, which will protect you from               |
| 10:32      | some of the potential security flaws that are often associated with WordPress, where                   |
| 10:37      | it's basically just like you haven't installed updates on WordPress or your server in four             |
| 10:41      | years.                                                                                                 |
| 10:42      | Yeah.                                                                                                  |
| 10:43      | And that's what that's, you know, like, of course there's going to be security issues                  |
| 10:47      | associated with not updating things for ages, just the same as if you never update your                |
| 10:50      | Mac, um, or an iPad or an iPhone.                                                                      |
| 10:53      | Um, so it's, it's, it's good that you've got like the better solution.                                 |
| 10:57      | And because you come in after such a long break, there have been some really big changes,              |
| 11:00      | which I do feel generally makes WordPress much more user friendly, um, which is a good                 |
| 11:05      | thing.                                                                                                 |
| 11:06      | And another bit of human automation is I have hired a WordPress guy, you know, somebody                |
| 11:11      | who, uh, sleeps with the WordPress code under his pillow and he has full access and like               |
| 11:17      | when plugins come in, I just said, you figure out, you know, when to update them and, you              |
| 11:22      | know, I'm really offloading a lot of it as much as a nerd I am.                                        |
| 11:27      | I don't really want to be a web development nerd.                                                      |
| 11:29      | And that was the advantage of Squarespace and, and I've kind of done repeated that here                |
| 11:34      | with WordPress by getting someone else to kind of manage a lot of that for me.                         |
| 11:38      | Like one of the issues we had was because I had been on Squarespace for so long, um,                   |
| 11:44      | the blog started out, MacSparky started out in like 2007 as a, um, a, what was it, a dot              |
| 11:54      | me website?                                                                                            |
| 11:55      | No, it wasn't even before dot me.                                                                      |
| 11:57      | I think it was a dot Mac website.                                                                      |
| 11:58      | They used to make a website builder that you could make on your Mac.                                   |
| 12:02      | Yep.                                                                                                   |
| 12:03      | Um, I site.                                                                                            |
| 12:04      | No, that was the name of the camera.                                                                   |
| 12:06      | I've gotten what it was called.                                                                        |
| 12:07      | I web.                                                                                                 |
| 12:08      | I web.                                                                                                 |
| 12:09      | I web.                                                                                                 |
| 12:10      | That was the one.                                                                                      |
| 12:11      | Yeah.                                                                                                  |
| 12:12      | Yeah.                                                                                                  |
| 12:13      | MacSparky started out as an I web.                                                                    |
| 12:14      | And then I eventually moved to Squarespace, but back then it was Wild West and I wasn't                |
| 12:18      | putting money into it to make it right.                                                                |
| 12:21      | And I had all these issues with plugins and I was just getting really frustrated.                      |
| 12:25      | So I just jumped over to Squarespace about 10 years ago.                                               |
| 12:29      | And then I am, and then when I, now I've gone back to WordPress.                                       |
| 12:33      | You know, we brought all of those posts over, but of course, because I'd been on multiple              |
| 12:37      | platforms, there were some issues when we first released it.                                           |
| 12:41      | So we had to do some redirect magic to kind of fix some 404 errors.                                    |
| 12:45      | And so there was like little things like that and having somebody to help me out with that             |
| 12:49      | was really a blessing.                                                                                 |
| 12:51      | Yes.                                                                                                   |
| 12:52      | Yeah.                                                                                                  |
| 12:53      | Sometimes it is nice to be able to just go look, you are the expert in this area.                      |
| 12:57      | I'm going to hand this off to you because while it's not necessarily the kind of automation            |
| 13:01      | that I used when I switched my website ever recently, which was regular expressions and                |
| 13:06      | like 45 minutes of coding, it's perhaps a better solution because you're getting somebody              |
| 13:12      | who's got that expertise to do it for you.                                                             |
| 13:14      | And did you really want to sit down with regular expressions for 45 minutes writing a script           |
| 13:18      | to do something?                                                                                       |
| 13:19      | Probably not.                                                                                          |
| 13:20      | Yeah.                                                                                                  |
| 13:21      | Yeah.                                                                                                  |
| 13:22      | And so that, it's up and running and the automation has begun.                                         |
| 13:25      | So as I said earlier, I'm doing some local automation, getting it to team members.                     |
| 13:31      | I have different post workflows like that post I mentioned earlier about the [[AppleScript]].             |
| 13:37      | I have a couple of friends or people, maybe we'll get to today if we have time is since                |
| 13:43      | I'm really like put it going all in on MacSparky, I'm really kind of growing a team                   |
| 13:47      | around it too.                                                                                         |
| 13:48      | And I've got people that back me up and like technical posts like one about an [[AppleScript]].           |
| 13:52      | I'm going to have a few people read it before it gets posted to make sure everything works             |
| 13:57      | for them too.                                                                                          |
| 13:58      | And I don't post something that's not right.                                                           |
| 14:01      | And my workflow for that is I put it into a Google doc where they can comment on it as                 |
| 14:06      | text.                                                                                                  |
| 14:08      | And so I've got a whole keyboard, my script written to do that.                                        |
| 14:11      | And once again, you know, web-based automation is something that I need to spend time on.              |
| 14:16      | I think if we do this show again in a year, I'm probably going to have a lot more web                  |
| 14:20      | hooks into a lot of this stuff.                                                                        |
| 14:23      | But for now, I'm running [[Keyboard Maestro]] to get the doc, the words into the right place               |
| 14:28      | and then send off a message to the gang saying, Hey, I got this thing.                                 |
| 14:32      | Please take a look.                                                                                    |
| 14:33      | Yeah.                                                                                                  |
| 14:34      | Then when it comes time to publish, that's the other time I bring the virtual assistant                |
| 14:38      | and she's, she has a master, she's really smart.                                                       |
| 14:41      | And I always have her read everything one more time.                                                   |
| 14:44      | If you ever see a post at MacSparky that has a typo in it, it's because I posted it,                  |
| 14:49      | not her.                                                                                               |
| 14:52      | She always catches them.                                                                               |
| 14:53      | I don't always.                                                                                        |
| 14:54      | And so anyway, that, that, so there's a lot of human-based automation in the blog generation           |
| 15:00      | right now.                                                                                             |
| 15:02      | And I would like to get the robots more involved.                                                      |
| 15:05      | And now that I've got WordPress, I can, you know, so that's cool.                                      |
| 15:09      | Yeah.                                                                                                  |
| 15:10      | Definitely.                                                                                            |
| 15:11      | It makes a lot of sense for things like that.                                                          |
| 15:12      | And honestly, you know, you just have a lot of options now that you maybe didn't before,               |
| 15:16      | like plugins, for example, like publish press.                                                         |
| 15:19      | This is one that I've used before.                                                                     |
| 15:21      | And I know quite a few people use where you can have like an upcoming editorial calendar               |
| 15:25      | with all of your [[Drafts]] and everything scheduled in it and see, you know, all the things and           |
| 15:30      | comments like that and so on.                                                                          |
| 15:32      | That's quite useful to have, but it's not necessarily possible with something like Squarespace         |
| 15:38      | without quite a bit of extra work.                                                                     |
| 15:40      | So, or potentially branching out into other tools entirely, which may or may not be the                |
| 15:44      | right solution for you.                                                                                |
| 15:46      | So, yeah, it'll be interesting to see how this evolves and hear, of course, about it                   |
| 15:50      | as we go.                                                                                              |
| 15:51      | I'm writing down right now.                                                                            |
| 15:53      | Check out publish press.                                                                               |
| 15:55      | Publish press.                                                                                         |
| 15:56      | Yeah.                                                                                                  |
| 15:57      | I've already put the link in the show notes for people, which David, of course, can access.            |
| 16:02      | Because I've used previous versions of this and alternative things to it, but this is                  |
| 16:06      | a quite a popular plugin nowadays.                                                                     |
| 16:09      | It's got 6,000 active installations.                                                                   |
| 16:12      | So, according to WordPress.com, so, yeah, there's some options there.                                  |
| 16:18      | Yeah.                                                                                                  |
| 16:19      | In terms of plugins, I'm running one for Memberful, obviously, so I can, you know, put the page        |
| 16:27      | access.                                                                                                |
| 16:28      | There's one in there for ConvertKit, which is what I run my newsletter through.                        |
| 16:33      | And there is, there's one in there that the developer put in for SEO, which tells me every             |
| 16:40      | post I write is bad SEO.                                                                               |
| 16:42      | I don't apparently write very well for Google.                                                         |
| 16:45      | Yeah.                                                                                                  |
| 16:46      | I mean, it's one of those things where if you're writing for Google, are you writing                   |
| 16:49      | for the people?                                                                                        |
| 16:50      | Yeah, exactly.                                                                                         |
| 16:51      | At the end of the day, Google is going to go out and change their algorithms because                   |
| 16:53      | they want things to be ranked based on what people are actually genuinely interested in.               |
| 16:58      | And of course, because it's Google, to an extent, well, it's going to make the money.                  |
| 17:01      | So, yeah, pandering to the plugin, perhaps not the solution, but, you know, there's                    |
| 17:07      | plenty of automation to be had with the website and we'll hopefully see all of that progress           |
| 17:13      | as we go.                                                                                              |
| 17:14      | Yeah.                                                                                                  |
| 17:15      | I will be ignoring, you know, that SEO plugin.                                                         |
| 17:19      | Fair enough.                                                                                           |
| 17:22      | This episode of The Automators is brought to you by LinkedIn Jobs.                                     |
| 17:26      | Post a job for free by visiting the link in our show notes.                                            |
| 17:30      | These days, it can be hard to find and hire the right candidates for your small business.              |
| 17:34      | That's why LinkedIn Jobs made it easier to find people you want to talk to faster and                  |
| 17:40      | for free.                                                                                              |
| 17:41      | Historically, the process of applying for a job or hiring somebody just seemed so fraught              |
| 17:47      | with pain.                                                                                             |
| 17:49      | How do you find the person with the right qualifications or the person's can be the                    |
| 17:52      | right fit?                                                                                             |
| 17:53      | And on the flip side, how do you go to work for someone that you think you can fit in                  |
| 17:56      | with and do good work?                                                                                 |
| 17:59      | LinkedIn Jobs is designed to solve that problem.                                                       |
| 18:02      | With LinkedIn Jobs, you can create a free job post in minutes to reach your network                    |
| 18:06      | and beyond to the world's largest professional network of over 770 million people.                     |
| 18:12      | With LinkedIn Jobs, you can focus on candidates with just the right skills and experience              |
| 18:17      | and use screening questions to get your role in front of only the most qualified.                      |
| 18:22      | Then use the simple tools on LinkedIn Jobs to quickly filter and prioritise who you'd                  |
| 18:26      | like to interview and hire.                                                                            |
| 18:28      | That's why small businesses rate LinkedIn Jobs number one in delivering quality hires                  |
| 18:34      | versus leading competitors.                                                                            |
| 18:36      | LinkedIn Jobs helps you find the candidates you want to talk to faster.                                |
| 18:40      | Did you know that every week nearly 40 million job seekers visit LinkedIn?                             |
| 18:45      | Post your job for free at linkedin.com/automators.                                               |
| 18:49      | That's linkedin.com/automators to post your job for free.                                        |
| 18:53      | Terms and conditions do apply.                                                                         |
| 18:55      | Our thanks to LinkedIn Jobs for their support of the automators and all of Relay FM.                   |
| 19:00      | So, David, I know that the website is far from the only place that you've been getting                 |
| 19:06      | into new territory, as it might be, or just tweaking things and how you've run things.                 |
| 19:13      | I know recently you switched to FastMail and then because of you, I ended up switching                 |
| 19:18      | to FastMail as well, which thank you, by the way, for enabling me on that one.                         |
| 19:21      | I very much appreciate my new email system.                                                            |
| 19:23      | Are you still using that?                                                                              |
| 19:24      | Have you changed things up there?                                                                      |
| 19:25      | Are you kidding?                                                                                       |
| 19:26      | I love FastMail more now than ever.                                                                    |
| 19:30      | With this MacSparky business, it is very much a customer support business in a lot                    |
| 19:36      | of ways, but it's also managing contacts.                                                              |
| 19:39      | It's just a lot of stuff.                                                                              |
| 19:41      | Email is a very big deal for the stuff I do as MacSparky.                                             |
| 19:46      | This is another thing that I'm trying to put my big boy pants on and handle it better going            |
| 19:51      | forward.                                                                                               |
| 19:52      | I've got people helping me with customer support that I didn't before, so I guess I'll start           |
| 19:58      | at the root level.                                                                                     |
| 20:01      | FastMail is the mail service and I've created several accounts under the MacSparky domain.            |
| 20:07      | For instance, my wife is helping out a lot with customer support, so now she's got an                  |
| 20:11      | email there.                                                                                           |
| 20:12      | But one of the things I really love about FastMail are aliases and rules.                              |
| 20:20      | Also like a good example is the MacSparky labs.                                                       |
| 20:24      | People have questions about their account or whatever.                                                 |
| 20:27      | I created an alias called labssupport@macsparky.com and my wife has been very active with me in        |
| 20:36      | setting the Memberful thing up.                                                                        |
| 20:37      | She understands the whole interface and how to do whatever customer support things need                |
| 20:42      | to be done.                                                                                            |
| 20:43      | I'm pointing that at her email.                                                                        |
| 20:46      | If someday she goes back to Disneyland and doesn't have time to help me, I can get somebody            |
| 20:50      | else and point that at their email.                                                                    |
| 20:55      | I don't know if that's automation.                                                                     |
| 20:56      | I guess it's a bit of automation.                                                                      |
| 20:57      | I mean, there's definitely automation within there because, for example, the email alias,              |
| 21:02      | this is a trick that I use even though I don't delegate my email to other people.                      |
| 21:05      | I've got aliases for a whole bunch of things because it means that if, for example, I give             |
| 21:11      | an email address, amazingsnugglyhoodies.com to a website and then I start getting spam                 |
| 21:18      | to that address.                                                                                       |
| 21:19      | Well, I know it was amazingsnugglyhoodies.com that sold my email address and I can just                |
| 21:23      | blacklist everything that comes in from now on into that and it's done, so it works really             |
| 21:28      | well.                                                                                                  |
| 21:29      | Another way to use that on an individual basis is it's a rock solid form of a basis of a               |
| 21:35      | smart mailbox.                                                                                         |
| 21:38      | If you use an email application with a smart mailbox like [[Apple Mail]], you can say anything             |
| 21:42      | coming in to labsupportatmaxmarking goes to a specific smart mailbox and that way you              |
| 21:49      | don't, you know exactly where to go to see that stuff.                                                 |
| 21:53      | If you have a lot of email, you just want to look for those emails because it's all                    |
| 21:57      | coming into your box because you're aliasing it.                                                       |
| 21:59      | It's not a separate account, but you can then slice and dice it through rules or smart mailboxes.      |
| 22:07      | Another thing that I'm getting with FastMail are the rules, so like when I get a customer              |
| 22:12      | support request for a field guide, my background platform is teachable and they have a very            |
| 22:19      | specific format to the email, the way they form the subject line and based on a couple                 |
| 22:24      | things they do in that email, I was able to create a rule that consistently finds those                |
| 22:29      | customer support notes.                                                                                |
| 22:32      | And that one goes to me directly and it goes to my virtual assistant.                                  |
| 22:39      | So I alias it and then send it to two people.                                                          |
| 22:43      | I don't alias it.                                                                                      |
| 22:44      | I'm sorry.                                                                                             |
| 22:45      | I find it through a rule, but I send it to two people at the server level with FastMail.               |
| 22:49      | So that's an automation because now I'm no longer the bottleneck.                                      |
| 22:52      | She gets it the same time I do.                                                                        |
| 22:55      | And I have to hear your advice on this, Rose, but what I'm doing is I'm filtering it into              |
| 23:01      | a smart mailbox on my Mac.                                                                             |
| 23:03      | So I know which ones she's also getting because if I reply to it and don't copy her, then              |
| 23:09      | the customer gets two replies.                                                                         |
| 23:11      | We don't want that.                                                                                    |
| 23:12      | Yeah.                                                                                                  |
| 23:13      | I mean, what I would actually do for something like this where it's possible that you're               |
| 23:16      | replied to it or somebody else were replied to it and potentially down the line, maybe                 |
| 23:19      | even there'll be multiple people, especially, you know, somebody's just doing this at part             |
| 23:24      | time.                                                                                                  |
| 23:25      | You know, say, for example, one of your daughters has free time of the weekend and says, hey,          |
| 23:28      | dad, can I help you out with stuff?                                                                    |
| 23:31      | Is a ticket system?                                                                                    |
| 23:32      | It's a very official thing type thing.                                                                 |
| 23:36      | But basically it's a email lens in this inbox and somebody deals with it and everybody can             |
| 23:41      | see who's dealt with it system.                                                                        |
| 23:44      | And it works.                                                                                          |
| 23:46      | It's better than share mailboxes in many respects because there's no chance that somebody accidentally |
| 23:50      | replies from a personal email address or something and all the replies come back to the same place.    |
| 23:56      | You know, I should look seriously at that.                                                             |
| 23:58      | I always thought that was too much for what I'm doing.                                                 |
| 24:01      | But again, I'm trying to honestly, it really depends.                                                  |
| 24:04      | Like there are there are so many variances in the kind of ticket systems out there.                    |
| 24:08      | You know, if you email [[Apple]], if you email Tim Cook, you probably don't get an alter                   |
| 24:13      | reply.                                                                                                 |
| 24:14      | But I 100% bet that lands in a ticket system and there's a team of stops sorting it out                |
| 24:18      | and they'll funnel things into, hey, this needs to get filed filed into feedback please                |
| 24:22      | or things like that.                                                                                   |
| 24:23      | But if you contact a company, usually it's going to land in a ticket system so that                    |
| 24:27      | they know who's dealt with it.                                                                         |
| 24:28      | And if you've got to reply from two different people at a company, giving you two conflicting          |
| 24:31      | answers, it's probably because they've got to share mailboxes rather than a ticket system.             |
| 24:36      | But there's all sorts of scale of like, you can have something that will deal with hundreds            |
| 24:40      | of thousands of employees and all 500,000 different departments that they have versus                  |
| 24:46      | something that just works with like two or three people.                                               |
| 24:49      | And so there's plenty of options out there.                                                            |
| 24:51      | Yeah, I've got the research that the only one I'm aware of is Zendesk because I know                   |
| 24:56      | it has some clients that don't like it.                                                                |
| 24:58      | Zendesk is fairly popular but quite pricey.                                                            |
| 25:01      | I believe it's $25 per user per month, which can be a lot of money.                                    |
| 25:07      | One system that I've previously used for anybody who's curious is Zoho.                                |
| 25:13      | Zoho is a company they're based in India and they offer like a whole suite of different                |
| 25:17      | applications, kind of like Google does in many ways, but they're very affordable and                   |
| 25:23      | their stuff's been pretty good.                                                                        |
| 25:24      | They also have native applications for everything on, well, I say native.                              |
| 25:27      | They have iOS applications for everything as well, which is quite nice.                                |
| 25:31      | So you can easily pop in on your iPhone or your iPad and check stuff out if you didn't                 |
| 25:35      | want to use the website, which gives you push notifications too.                                       |
| 25:38      | Yeah, and Zoho is $14 per agent per month.                                                             |
| 25:42      | Well, I'm going to...                                                                                  |
| 25:44      | That's on their highest tier, which you might not even need actually.                                  |
| 25:47      | Yeah, the three tiers is three agents, which would be enough for me.                                   |
| 25:51      | Yes, yeah.                                                                                             |
| 25:52      | Well, we'll see.                                                                                       |
| 25:54      | Exactly.                                                                                               |
| 25:55      | So the trick would just be getting the email into the ticket system instead of sending                 |
| 25:59      | it to multiple people.                                                                                 |
| 26:00      | Yeah, well, that is excellent.                                                                         |
| 26:02      | So I will look into that.                                                                              |
| 26:03      | But to kind of go further down the email rabbit hole automation, I spend a lot of time automating      |
| 26:09      | email.                                                                                                 |
| 26:10      | I mean, of course, I have a TextExpander for Teams account.                                           |
| 26:15      | So I've got several people on different teams where I'm updating snippets for everybody                |
| 26:20      | and I really like the consistent message from it and again, that's a sponsor of Mac                    |
| 26:24      | Power users.                                                                                           |
| 26:25      | So you guys can say, oh, that guy's a shill.                                                           |
| 26:28      | I pay for it.                                                                                          |
| 26:29      | I mean, I get the bill every year.                                                                     |
| 26:30      | I never...                                                                                             |
| 26:31      | I don't like to ask for free things from people when I use it to make my living.                       |
| 26:36      | I feel like if I need to be in there with everybody else and pay for it.                               |
| 26:40      | So I pay for it.                                                                                       |
| 26:41      | I use it and find that quite useful.                                                                   |
| 26:44      | Same box as well.                                                                                      |
| 26:45      | I mean, I have so many levels of automation on my email because same box really helps                  |
| 26:49      | again and a sponsor.                                                                                   |
| 26:52      | But again, I've been paying for it since before they were sponsored and just all these methods         |
| 26:58      | I'm using to try and keep email to something manageable and just see what I need to see.               |
| 27:04      | I use the smart mailboxes.                                                                             |
| 27:07      | I'm using [[Apple Mail]] across the board.                                                                 |
| 27:10      | I think I'm going to try and do that.                                                                  |
| 27:12      | One of those runs again through third party apps to see what's out there again.                        |
| 27:15      | Yes.                                                                                                   |
| 27:16      | But [[Apple Mail]] is pretty much working for me.                                                          |
| 27:19      | And the thing I love about it is the [[AppleScript]] availability.                                        |
| 27:23      | I did a webinar on this last year, but I've written [[AppleScript\|AppleScripts]] that can move messages,              |
| 27:29      | can copy messages, can do all sorts of manipulations with [[AppleScript\|AppleScripts]] inside [[Apple Mail]].             |
| 27:37      | And then I wrote that script that puts in the recipient.                                               |
| 27:40      | So I just type X high, it'll say high Rosemary, it'll grab your name from the two fields.              |
| 27:46      | All those little, like I've tweaked [[Apple Mail]] to kind of myself and then I've programmed              |
| 27:51      | all that stuff into my [[Stream Deck]] and I've also programmed it into the keypad on my extended          |
| 27:59      | keyboard.                                                                                              |
| 28:01      | And so I'm really fast with [[Apple Mail]].                                                                |
| 28:05      | So it's hard for me to move on and I don't think there's anything else that really supports            |
| 28:08      | [[AppleScript]] customisation the way [[Apple Mail]] does, but I'm using a ton of automation.                 |
| 28:14      | I want to say MailMate does, I think MailMate possibly does, but one of the things I found             |
| 28:20      | when you're switching between mail applications is like leaving a default setup.                       |
| 28:24      | So I have mail configured on iOS, I don't use it, but I have it configured and shortcuts               |
| 28:28      | send through mail.                                                                                     |
| 28:30      | And it just means that my shortcuts, I don't need to change them because I just leave it               |
| 28:33      | configured and then I can swap out whatever app I'm using, I'm using the FastMail app                 |
| 28:37      | on iOS because I can create rules in the iOS application and they're on the server and                 |
| 28:43      | it just works, which I love.                                                                           |
| 28:45      | But like being able to just, you know, swap things around without breaking all of the                  |
| 28:51      | automations can be quite useful.                                                                       |
| 28:53      | So even if you end up leaving, you know, [[Apple Mail]] on your Mac and you switch to it for               |
| 28:58      | certain things, you know, that's not a bad thing.                                                      |
| 29:00      | I actually need to go back to MailMate.                                                                |
| 29:02      | I got really into it last year, I bought a license, I pre-wrote all the key bindings                   |
| 29:09      | so I had basically all the kind of automation that I have with [[Apple Mail]] that I got through           |
| 29:16      | MailMate, but the problem was I had two Macs at the time and getting those rules to sync               |
| 29:22      | over actually is almost impossible.                                                                    |
| 29:25      | And then I was tagging inside the app and that also was a sticking point.                              |
| 29:32      | I don't think I'm going to use tagging as much now that I'm not doing law.                             |
| 29:35      | So it may be an option for me again.                                                                   |
| 29:37      | I think I'm going to reinstall that and do some experiments.                                           |
| 29:41      | If you're listening and you're in the Mac Sparking Labs, I think you're going to be                    |
| 29:43      | getting some MailMate content as I test it out.                                                        |
| 29:48      | One massive thing in favor of MailMate is of course it supports Markdown for email writing,            |
| 29:53      | which of course you and I love and it is great to just be able to write some text and chuck            |
| 29:58      | it in there and it's plain text and it suddenly magically becomes rich text on the other side.         |
| 30:04      | That's pretty nice.                                                                                    |
| 30:05      | I do think because Mail is such a big piece of what I do, I am willing to spend time getting           |
| 30:14      | automations tuned in for it and like in the morning when I go through a Mac Sparking Mailbox,          |
| 30:21      | I do like a morning clear out to catch any emergencies and then the afternoon I actually               |
| 30:28      | process Mail.                                                                                          |
| 30:29      | I don't really respond to Mail unless it's an emergency early afternoon, but like I have               |
| 30:33      | programmed with those [[AppleScript\|AppleScripts]] on my numeric keypad or on the [[Stream Deck]], I can                  |
| 30:41      | type one, two or three.                                                                                |
| 30:43      | One is priority, two is action, three is read later and then I've got the zero underneath              |
| 30:49      | it is to archive it.                                                                                   |
| 30:52      | The period sends it to the same box black hole and the enter key deletes it and I've                   |
| 30:59      | got some other ones I do, but those are the main ones.                                                 |
| 31:02      | I get through an inbox so fast that way.                                                               |
| 31:07      | Yes.                                                                                                   |
| 31:08      | Automation, email, good thing.                                                                         |
| 31:10      | Yes.                                                                                                   |
| 31:11      | What are you using for email on your iOS devices?                                                      |
| 31:16      | I'm using the FastMail app because it just lets me do all the rules and stuff and it works             |
| 31:24      | really well.                                                                                           |
| 31:25      | It's got light mode and dark mode.                                                                     |
| 31:27      | Yeah, I like it.                                                                                       |
| 31:29      | It's basic, I don't do a lot of email on my phone usually.                                             |
| 31:33      | At most it's like snoozing an email or deleting email, pretty much that.                               |
| 31:38      | Occasionally archiving things, but if I start receiving a bunch of things and I can go in              |
| 31:44      | and create a rule and just shove it into a folder and deal with it all later and that                  |
| 31:47      | makes life much easier.                                                                                |
| 31:49      | Yeah, I quite like being able to do that just because you have the options.                            |
| 31:54      | I do the same thing.                                                                                   |
| 31:55      | I run the FastMail app on my iPad, but I've run the Mail app on my phone and like you,                 |
| 32:01      | I do almost all my actual mail management on my Mac.                                                   |
| 32:06      | I tend to do it mostly on my iPad actually nowadays.                                                   |
| 32:09      | I'm not quite sure why.                                                                                |
| 32:10      | I think it's because the iPad Mini is so portable and I just always have it with me.                   |
| 32:15      | It's a bigger screen and I got the cellular one this time, so I have that as an option.                   |
| 32:20      | But even the mail sort for me is so much faster on the Mac because of that keyboard thing              |
| 32:25      | I just told you about.                                                                                 |
| 32:26      | I mean, doing it by tapping and moving, it feels like I'm in molasses.                                 |
| 32:32      | But I agree.                                                                                           |
| 32:33      | I think the FastMail app was like a bonus to me.                                                       |
| 32:37      | I didn't realise that not only was I getting a good mail app in addition to a good mail                |
| 32:40      | service, I am just so happy with that transition.                                                      |
| 32:44      | I'm kicking myself for not having done it 10 years ago.                                                |
| 32:47      | Yeah, it's always the way, isn't it?                                                                   |
| 32:49      | It's always the way.                                                                                   |
| 32:50      | You realise later what you've been missing, but until then you didn't know what you could              |
| 32:55      | have done.                                                                                             |
| 32:56      | This episode of Automators is brought to you by the wonderful folks over at TextExpander.              |
| 33:01      | What could you do with more hours every month?                                                         |
| 33:03      | While repetitive typing and little mistakes searching for answers, they're all taking                  |
| 33:07      | precious time away from you and your team.                                                             |
| 33:09      | With TextExpander, you can take that time back so you can focus on what matters most                   |
| 33:13      | in your business.                                                                                      |
| 33:14      | With TextExpander, you and your team can keep your message consistent, save time and be                |
| 33:18      | more productive, and be accurate every time.                                                           |
| 33:22      | The way we work is changing rapidly.                                                                   |
| 33:24      | Make work happen wherever you are by saying more in less time and with less effort using               |
| 33:28      | TextExpander.                                                                                          |
| 33:29      | You'll never need to copy-paste repetitive responses again, but TextExpander, your knowledge           |
| 33:33      | will always be at your fingertips with a quick search or abbreviation.                                 |
| 33:36      | Here's how it works.                                                                                   |
| 33:39      | Drop your most commonly used content into a TextExpander snippet and give it an abbreviation.          |
| 33:43      | Share your snippet with your entire team and just type a few characters to trigger your                |
| 33:46      | snippet and the content expands anywhere you type.                                                     |
| 33:50      | It's that easy.                                                                                        |
| 33:51      | What I love about TextExpander is it works for big and small things, so silly things                   |
| 33:55      | like correcting the fact that I often switch the S and the E in my name, simple, or perhaps            |
| 34:00      | a much longer item, which needs me to fill in multiple details.                                        |
| 34:04      | Well, I can do both of those with TextExpander.                                                        |
| 34:07      | And of course, because I can share it with people, it means that everybody says the right              |
| 34:11      | thing and if somebody spots a typo, well, everybody's got it fixed right away.                         |
| 34:16      | TextExpander is available on Mac, Windows, Chrome, iPhone, and iPad.                                   |
| 34:20      | And as a list of automators, you can get 20% off your first year.                                      |
| 34:23      | Visit textexpander.com/podcast to learn more about TextExpander.                                 |
| 34:26      | That's textexpander.com/podcast.                                                                 |
| 34:29      | I'll thanks to TextExpander for their support of this show and Relay FM.                              |
| 34:33      | So David, you clearly have done more than just website and email.                                      |
| 34:38      | I'm guessing maybe task management, calendars, some other stuff has been tweaked and changed           |
| 34:43      | up too?                                                                                                |
| 34:44      | Yeah, I mean, I've been an aggressive user of OmniFocus for years and, you know, I have                |
| 34:51      | automated the heck out of that.                                                                        |
| 34:53      | If you've read my OmniFocus field guide or watched it, you know, I'd use a lot of automation           |
| 34:57      | there and that all is continuing.                                                                      |
| 35:01      | One thing that changes with all this is my OmniFocus database gets smaller significantly               |
| 35:05      | because before I was tracking a lot of clients and ongoing projects for them, which I don't            |
| 35:11      | have to do anymore.                                                                                    |
| 35:13      | But OmniFocus really scales well, you know, I do think I'm going to look at other options,             |
| 35:19      | you know, just to see what's out there because I haven't done that for a little while.                 |
| 35:24      | But the automation tools and OmniFocus are really great.                                               |
| 35:27      | And so I'm using shortcuts based automation largely with OmniFocus to do project creation.             |
| 35:35      | And I do have a lot of repeating style projects like I just shared one with you the other              |
| 35:39      | day that is the shortcut for when we confirm a guest, you know.                                        |
| 35:47      | And what I do is I have a shortcut where I type in, it prompts me for the episode number,              |
| 35:53      | the guest name, the public, the record date and the publish date.                                      |
| 35:57      | So it gets four pieces of data and this is an old script.                                              |
| 36:00      | I mean, if you look at it, I was assigning variables in it.                                            |
| 36:03      | So that tells me how old it is.                                                                        |
| 36:04      | I do that and then I created a Taskpaper style OmniFocus project.                                     |
| 36:11      | So you can do that.                                                                                    |
| 36:12      | OmniFocus imports Taskpaper, which is a very, very simple syntax to create OmniFocus tasks            |
| 36:19      | and projects.                                                                                          |
| 36:20      | So for example, if you want to flag a task, you just type at symbol flag and you've got                |
| 36:25      | a flag.                                                                                                |
| 36:26      | So it's really easy.                                                                                   |
| 36:27      | Anybody can do it.                                                                                     |
| 36:28      | I cover this at length in the OmniFocus field guide.                                                   |
| 36:31      | So I've created one for a automator show with a guest.                                                 |
| 36:35      | I also have a content show version.                                                                    |
| 36:37      | I don't think I shared that one with you yet.                                                          |
| 36:40      | So when we book a guest, I run this shortcut and now I can do it on my Mac and it's working            |
| 36:45      | consistently.                                                                                          |
| 36:46      | Yeah.                                                                                                  |
| 36:47      | But when it runs, it grabs those four questions from me and then it creates a whole OmniFocus          |
| 36:54      | project and it'll say, say, Automator's episode, Dave Hamilton interview or whatever.                  |
| 37:05      | And then in the individual tasks that underlie, it will insert the date that we record or              |
| 37:11      | the date that we publish or the name of the guest.                                                     |
| 37:13      | So it's very nice when it's done.                                                                      |
| 37:16      | It looks like a hand-created project and there's about 10 steps to it.                                 |
| 37:20      | It takes a lot to get one of these episodes out.                                                       |
| 37:23      | Yeah.                                                                                                  |
| 37:24      | But so the first thing I do is I take those four variables and I create that project for               |
| 37:29      | OmniFocus.                                                                                             |
| 37:30      | Then the next thing I do after that is I create an [[Obsidian]] note on the project because I have         |
| 37:36      | an [[Obsidian]] project page for every podcast episode and it uses the same data.                          |
| 37:44      | So I don't have to type it in a bunch of times.                                                        |
| 37:45      | It grabs the date, the episode number.                                                                 |
| 37:48      | The only thing I haven't done yet is figured out and I'm going to have to use web automation.          |
| 37:52      | I want to grab the Google Doc URL and that.                                                            |
| 37:54      | Well, what I was just thinking, David, is because you're asking for things like the                    |
| 37:58      | episode number, the guest, the date of recording and the date of release.                              |
| 38:03      | All of this is the information that we have in our air table that manages it and the Google            |
| 38:08      | Doc link is in there as well.                                                                          |
| 38:10      | So you could instead give yourself a list of the upcoming scheduled recordings with guests             |
| 38:15      | for this one and the ones without guests for the other shortcut and then you just select               |
| 38:20      | it and then bam, and tell you what, we can even add some columns so that it can say David's            |
| 38:25      | automation ran and it can add a check mark in that field so that then those get excluded               |
| 38:30      | from your view.                                                                                        |
| 38:31      | All right.                                                                                             |
| 38:32      | Let's work on that together.                                                                           |
| 38:33      | That'll be something we can cover in a future episode, but what I did was, so the next step            |
| 38:37      | is it creates a text file, which is what you do with [[Obsidian]].                                         |
| 38:42      | But then I set the name of it based on the episode number and the guest name and then                  |
| 38:48      | I have to add the.md to the end because [[Obsidian]] only sees markdown files.                             |
| 38:52      | So I changed the name to credit markdown.                                                              |
| 38:56      | I have a pro tip for you there, David.                                                                 |
| 38:59      | So what you can do where you're setting the name, you need to make sure, or this is a                  |
| 39:04      | tip for everybody, if you put.md or anything in the name of a text file, make sure you                 |
| 39:13      | turn on in the expanded section, don't include file extension, because that's what gives               |
| 39:18      | it the.txt usually.                                                                                    |
| 39:20      | So if you add.md and then you exclude adding the file extension, you turn on don't include             |
| 39:25      | file extension, then it works at least 100% of the time for me because I ran into this                 |
| 39:30      | the other day when I was trying to fix something for somebody else and I realised I automatically      |
| 39:34      | do this and hadn't told them to do it.                                                                 |
| 39:36      | Yeah.                                                                                                  |
| 39:37      | I don't think I've paid attention to that, but it's always worked, but maybe, I don't                  |
| 39:41      | know, maybe it's acting as a full rename for me.                                                       |
| 39:43      | I don't know.                                                                                          |
| 39:44      | Possibly.                                                                                              |
| 39:45      | Yeah, and then because I use [[Obsidian]] Sync Service, these files are saved to the root                  |
| 39:52      | directory of my computer.                                                                              |
| 39:55      | They're not on the cloud.                                                                              |
| 39:57      | So then I just save it to the very specific folder for Automator's episode, so then it                 |
| 40:02      | shows up in my [[Obsidian]] library, just fine.                                                            |
| 40:05      | Another thing I want to automate on that, Rose, off to pick your brain on this is I want               |
| 40:09      | to add it to my [[Kanban]] board in [[Obsidian]], like a newly created file.                                   |
| 40:14      | I'm going to look, there's something in there.                                                         |
| 40:16      | I think we can do something there.                                                                     |
| 40:18      | I have done the thing that [[Obsidian]] tell you to only do if you're being very careful,                  |
| 40:22      | and I double sync my [[Obsidian]] vaults.                                                                  |
| 40:26      | I only do this on one machine, so please, please.                                                      |
| 40:29      | If you're considering doing this, listen to the advice of only do it on one machine,                   |
| 40:35      | because if you do it on all the machines, it's like Ghostbusters, don't cross the streams              |
| 40:38      | unless you're told to right at the end.                                                                |
| 40:42      | So by doing that, if we double sync it, then maybe we can just put it in in one place,                 |
| 40:49      | and then it'll end up everywhere for you.                                                              |
| 40:51      | And honestly, it's not that big of a deal, because I work in that [[Kanban]] board every                   |
| 40:54      | day, so it helps me kind of keep on top of things.                                                     |
| 40:58      | And then the last thing I do with that script is I take all of that data, and I prepare                |
| 41:02      | text for an email to the guest, and it says, hey, we're recording on this date.                        |
| 41:07      | Make sure you have a good mic, and all the things that we need to tell a guest before                  |
| 41:12      | they come on the show, and then it opens the native mail app and shows it to me as draft               |
| 41:16      | so I can make any last minute changes and send it off.                                                 |
| 41:19      | So it's a very, I don't know if this is a, I guess it's an intermediate shortcut, because              |
| 41:25      | the actual steps I'm taking are not super complicated, but it's kind of long because                   |
| 41:29      | it's doing a bunch of stuff.                                                                           |
| 41:30      | Yeah.                                                                                                  |
| 41:31      | Yeah.                                                                                                  |
| 41:32      | It's one of those things where it's a simple shortcut from the difficulty perspective,                 |
| 41:39      | to an extent, but equally, it's a very effective shortcut.                                             |
| 41:42      | So it does exactly what you need, and why wouldn't you just leave it as it is?                         |
| 41:46      | Yeah.                                                                                                  |
| 41:47      | And I'm just going crazy with OmniFocus [[JavaScript]] stuff and adding more and more of that.             |
| 41:54      | And yeah.                                                                                              |
| 41:56      | So in terms of task management, I'm automating a lot of stuff.                                         |
| 42:00      | I really do want to look at other options to OmniFocus.                                                |
| 42:04      | It's just, OmniFocus gives me so many things that I love.                                              |
| 42:07      | It's really going to be hard to dislodge that.                                                         |
| 42:10      | Like another thing that OmniFocus does is it allows you to create a link to virtually anything.        |
| 42:14      | You can create a link to a folder, create a link to an individual project or whatever                  |
| 42:19      | or a perspective.                                                                                      |
| 42:20      | And because I'm so hung up on contextual computing, like when I go to that [[Obsidian]] note, it has       |
| 42:26      | a link to the OmniFocus project based on one of those links or to [[DEVONthink]] data on                |
| 42:33      | it or to the Google doc.                                                                               |
| 42:35      | So I look at the [[Obsidian]] as like my mission control and I can click something on the [[Kanban]]           |
| 42:42      | and immediately get to all the resources related to it.                                                |
| 42:46      | And I've looked at some other task managers and they just don't do a lot of that stuff.                |
| 42:52      | So it'll be hard to dislodge me.                                                                       |
| 42:54      | Yes.                                                                                                   |
| 42:55      | Yeah.                                                                                                  |
| 42:56      | That is the thing.                                                                                     |
| 42:57      | Whenever I've tried other task management applications, they fall down really quickly                  |
| 43:00      | because I can't defer things or I can't check things off before the repeat is due or something         |
| 43:06      | like that.                                                                                             |
| 43:07      | You know, there's advantages and disadvantages to every system.                                        |
| 43:10      | And once you find a system that both works very well for you and you've worked yourself                |
| 43:14      | into the way of it working, it's difficult to change.                                                  |
| 43:19      | Yep.                                                                                                   |
| 43:21      | Calendars are for me another source of constant automation.                                            |
| 43:25      | And this is another one where I primarily rely on shortcuts automation.                                |
| 43:31      | We did a show on calendars.                                                                            |
| 43:32      | I don't need to go over all here, but I love calendar blocks.                                          |
| 43:36      | Shortcuts makes it really easy.                                                                        |
| 43:38      | There's no other tool in my mind that automates calendars better than shortcuts.                       |
| 43:42      | As much as I love things like [[Keyboard Maestro]], [[AppleScript]], and all the other stuff, they're         |
| 43:48      | much more fiddly for calendar events than shortcuts.                                                   |
| 43:52      | In my experience, I don't know if you agree or disagree.                                               |
| 43:55      | I find shortcuts is just so incredibly easy because it's very simple to just have that                 |
| 44:00      | data and duplicate a block to add the calendar event or just iterate through a list and add            |
| 44:07      | one calendar event that's 30 minutes or 60 minutes or something for each item.                         |
| 44:12      | And it makes life very easy to be able to do that.                                                     |
| 44:16      | And it's possible to do this with other tools, but I've just never found another tool where            |
| 44:22      | it is quite so simple as it is with shortcuts and where it's also so easy to debug.                    |
| 44:27      | Because as we all know with time, time is a nebulous concept, especially when you're                   |
| 44:34      | automating it or attempting to, because it's just one of those things where it shifts and              |
| 44:39      | add a time zone for extra fun, and we'll see you in 2042.                                              |
| 44:43      | Yeah.                                                                                                  |
| 44:44      | I should have mentioned at the beginning of the show, Rose, I'm doing a free webinar.                  |
| 44:48      | That's one of the nice things about my new life.                                                       |
| 44:50      | I think I'm going to be able to do a monthly free webinar all about how I manage calendars             |
| 44:55      | on the 21st of January at 10 o'clock Pacific.                                                          |
| 44:59      | So I don't have a link for you, but I will by the time the show publishes.                             |
| 45:05      | And if you're interested in seeing that, because like one of the things I've done with this            |
| 45:09      | big change is MacSparky is not a single calendar now.                                                 |
| 45:12      | It's like five calendars, you know, because I've got different content channels and all                |
| 45:17      | this other stuff going on.                                                                             |
| 45:18      | So I've had a lot of fun kind of growing up my calendar and making it more customisable                |
| 45:23      | for the things I'm doing.                                                                              |
| 45:25      | I'm using all day events in ways that I hadn't before and got a lot going on.                          |
| 45:30      | But in terms of automation, I'm really, you know, all in with shortcuts for that.                      |
| 45:37      | And one of the nice things about this change in my life is I don't get the interruptions               |
| 45:43      | I had before, you know, when you do client work and a client calls you, you've got to                  |
| 45:47      | stop things and move things around to take care of the client problem.                                 |
| 45:50      | And I don't have that now.                                                                             |
| 45:52      | So that actually allows my calendar blocks to be a lot more consistent.                                |
| 45:57      | And as we record this, I'm only a few days into this, but it is, it is a, it is a glorious             |
| 46:02      | thing.                                                                                                 |
| 46:03      | I love it so much.                                                                                     |
| 46:04      | Good.                                                                                                  |
| 46:05      | That is, that is the most important thing that you enjoy what you're doing and that                    |
| 46:09      | you're happy with it.                                                                                  |
| 46:10      | And of course, you get to automate all the things.                                                     |
| 46:12      | And my calendar blocks stick.                                                                          |
| 46:13      | I mean, you know, I mean, it's like, amen.                                                             |
| 46:16      | I don't know.                                                                                          |
| 46:17      | There's not a whole lot more to say with automation and calendars, except like, I, I think you         |
| 46:21      | should bring calendar automation into other contexts.                                                  |
| 46:26      | Like earlier when I was talking about that shortcut for creating a podcast, if it wasn't               |
| 46:34      | for the fact that Rose is so efficient, because Rose has a web-based automation that creates           |
| 46:38      | the calendar events already, I could have added a step to that that created the event                  |
| 46:43      | in the calendar as well.                                                                               |
| 46:44      | In addition to sending the email and putting together the [[Obsidian]].                                    |
| 46:48      | So what I would suggest is if you've got something that you're automating in terms of projects         |
| 46:53      | and they involve dates, adding a calendar event is one extra block in shortcuts.                       |
| 47:00      | You should always keep an open mind to just creating those events automatically at the                 |
| 47:04      | same time.                                                                                             |
| 47:05      | Yes.                                                                                                   |
| 47:06      | Yeah.                                                                                                  |
| 47:07      | It's one of those things where, especially if you're already getting together a bunch                  |
| 47:09      | of data, like, you know, what else can you easily throw in there that you do as part                   |
| 47:14      | of this anyway, or immediately afterwards, or immediately before.                                      |
| 47:18      | And don't forget, this is something that I helped somebody else out with recently.                     |
| 47:23      | The run shortcut action is amazing.                                                                    |
| 47:26      | So if you create lots of little shortcuts and then you're like, you know, it'd be really               |
| 47:29      | good if these were all one shortcut, but I don't want to recreate everything and I don't               |
| 47:33      | want to copy and paste everything.                                                                     |
| 47:35      | Just create one master shortcut and then, or one primary shortcut and then use the run                 |
| 47:40      | shortcut action to run each of the shortcuts, and you can even put it inside of a menu or              |
| 47:46      | something so that you choose which one it is that you want to run, or you can get all                  |
| 47:51      | the shortcuts in a folder, choose from list, and then run each of the chosen ones, or skip             |
| 47:57      | the choose from list and just run everything in a folder.                                              |
| 47:59      | There are lots of ways that you can combine your shortcuts to make life even more powerful             |
| 48:04      | once you've created a couple of little ones.                                                           |
| 48:06      | Hey, you know, we haven't said this for a few episodes, but I, you know, we were hard                  |
| 48:13      | on shortcuts for Mac when it released, but I feel like it's got a lot better.                          |
| 48:17      | How are you doing with it?                                                                             |
| 48:19      | It's definitely doing a lot better.                                                                    |
| 48:21      | The part that I'm struggling with with shortcuts in general right now is apps not being available      |
| 48:26      | on every platform, and having to code my shortcuts to work around an action not being available.       |
| 48:34      | And I really wish that I could have a toggle overall in shortcuts that just says, hey,                 |
| 48:41      | if this, like, or a per shortcut that just says, hey, if there's like actions missing,                 |
| 48:47      | just keep running.                                                                                     |
| 48:48      | Like, it's fine.                                                                                       |
| 48:49      | You don't need to stop and cancel everything and say that you can't do this, because that              |
| 48:56      | is very frustrating.                                                                                   |
| 48:57      | I was trying to run a shortcut on my Mac the other day and it wasn't running, and I realised           |
| 49:01      | it's sending a push-cut notification, but I don't have push-cut installed on my Mac.                   |
| 49:05      | It's like, well, the push-cut notification is just a, hey, I'm doing this thing, FYI,                  |
| 49:09      | if you need to cancel it, like, jump now.                                                              |
| 49:13      | And yeah, so now I did an if around that, but I feel like I shouldn't need to be doing                 |
| 49:18      | that all the time.                                                                                     |
| 49:19      | I feel like maybe I could just have something that says, ignore missing actions in the shortcut        |
| 49:24      | and proceed anyway, which would be quite nice.                                                         |
| 49:28      | Yeah, the if tool has become a survival tool with multi-platform shortcuts.                            |
| 49:33      | And I think the way I'm getting around it, honestly, is I'm just forking shortcuts now.                |
| 49:38      | Like, I got tired of writing if statements, and like, it seems so tedious to be trying                 |
| 49:44      | to like work around these exceptions because of which platform.                                        |
| 49:48      | So now I'll have a, you know, new podcast for Mac, new podcast on iPhone, and they start               |
| 49:55      | out the same, but they take slightly different paths and I run them as separate shortcuts.             |
| 50:01      | Yeah, my problem with that is the diverging content in those shortcuts.                                |
| 50:05      | So for example, a Taskpaper list.                                                                     |
| 50:08      | Now most of my Taskpaper list, fortunately, I source out of [[Drafts]], so that wouldn't be               |
| 50:12      | too much of an issue.                                                                                  |
| 50:13      | But what happens if I add a calendar step to the Mac one, but I forget to add it in the                |
| 50:17      | iOS.                                                                                                   |
| 50:18      | Exactly.                                                                                               |
| 50:19      | You have to.                                                                                           |
| 50:20      | And that's what really annoys me.                                                                      |
| 50:23      | So I actually now have a shortcut that I use the run shortcut action on that I include                 |
| 50:26      | with most shortcuts.                                                                                   |
| 50:28      | And it tells me if this is a Mac or a watch, and otherwise it just says okay.                          |
| 50:34      | So if it's a Mac or a watch, it'll go, it'll send back a no.                                           |
| 50:37      | And if it's an iPhone or an iPad, it'll send back a yes.                                               |
| 50:40      | Because the vast majority of the time, if it's an iPhone or an iPad, I've got the app                  |
| 50:44      | installed on it and I'm good to go.                                                                    |
| 50:46      | But if it's, if it's a Mac or the watch, then it should probably not be doing whatever                 |
| 50:51      | it's supposed to be doing.                                                                             |
| 50:52      | I mean, none of these are good solutions, you know, but the, I don't know, what's the                  |
| 50:59      | solution?                                                                                              |
| 51:00      | What would you do if you were in charge?                                                               |
| 51:02      | This is a very difficult question because I don't know the architecture shortcuts and                  |
| 51:06      | I don't know how things are written.                                                                   |
| 51:08      | And also it very much depends per shortcut.                                                            |
| 51:12      | So for example, sometimes the push cut actions that I use are send a notification and I'm              |
| 51:16      | fine if it doesn't send a notification.                                                                |
| 51:18      | Sometimes it's the run server action.                                                                  |
| 51:21      | If the run server action doesn't run, I want everything to stop and fail.                              |
| 51:25      | And so I would, I would really like just in general, actually all of the apps to exist                 |
| 51:31      | on all of the platforms and have all of the actions available everywhere.                              |
| 51:35      | Like that would be the easiest solution, but shortcuts can't solve that.                               |
| 51:39      | So I think in that case, like the first time you try and run a shortcut on a device where              |
| 51:45      | an action is missing, it should give you a bit more information and just say, hey, like,               |
| 51:51      | you know, do you still want to do this?                                                                |
| 51:53      | And the one thing I would absolutely 100% get rid of though is unknown action.                         |
| 51:57      | This action cannot be run because a required app is missing.                                           |
| 52:00      | Because this is actually an action in the, the automators guest episode that you sent                  |
| 52:04      | me, David, I have OmniFocus 3 installed, but shortcuts somehow somewhere has got a bit                 |
| 52:11      | confused and things I don't have OmniFocus 3 installed, possibly because I also have                   |
| 52:14      | OmniFocus 4 installed in the [[TestFlight]].                                                              |
| 52:18      | And that's the one I'm using.                                                                          |
| 52:19      | But it says unknown action, and the only clue that I've got as to what kind of action it               |
| 52:24      | is, is the icon.                                                                                       |
| 52:26      | And even tapping on the icon and show info, it says unknown action, no description available.          |
| 52:31      | It would be really good if they could somehow like save that information.                              |
| 52:36      | And so that when you share a shortcut, even if people don't have the apps that you've                  |
| 52:41      | specifically used, like they can see what it is that you were trying to do.                            |
| 52:45      | And you know, they can view everything.                                                                |
| 52:47      | They can't edit it, but then they can easily replace it with something that will work for              |
| 52:51      | them.                                                                                                  |
| 52:52      | Because this is something that always ends up feeling like when I'm sharing a shortcut,                |
| 52:56      | I have to go, oh, wait, do you have these five apps installed?                                         |
| 53:00      | And some people, I know that I have the apps installed other people.                                   |
| 53:03      | I realise I have to rewrite my shortcut because otherwise I'll have absolutely no clue what            |
| 53:06      | it's doing.                                                                                            |
| 53:07      | Yeah, I agree.                                                                                         |
| 53:08      | I don't think there's a good solution.                                                                 |
| 53:10      | One hacky way I was thinking about it, it would be like, what if on a per action basis,                |
| 53:16      | we had like a disclosure triangle that says run on, and there's like run on watch, run                 |
| 53:21      | on iPhone, run on iPad, run on Mac, and like you could literally just check like this will             |
| 53:27      | run on the iPhone, but it won't run on the watch in the back and then it just skips it.                |
| 53:32      | Yeah, this is where improving the if action to be a switch case would be really lovely.                |
| 53:37      | So for example, a switch case for people who aren't familiar is basically you can say,                 |
| 53:43      | I want you to switch based on this variable.                                                           |
| 53:47      | And in the case that this variable is a, I want you to do this.                                        |
| 53:51      | In the case that it's B, I want you to do that and C, I want you to do that.                           |
| 53:55      | And frequently there's a default, which means none of the above do this.                               |
| 53:59      | I really wish that that existed for platforms where you could just drag that in and then               |
| 54:05      | you could like you could drag in say a, I don't know, a platform switch and then you                   |
| 54:12      | would just toggle on like run on Mac, run on, run on watch, run on iPhone, run on iPad.                |
| 54:18      | But the problem with that is also then what if you have two iPads, do you want it to run               |
| 54:23      | on both iPads or just one iPad?                                                                        |
| 54:25      | And maybe that is a very niche case, but also I think the people who are using shortcuts               |
| 54:30      | are the niche case users.                                                                              |
| 54:32      | We're a niche nation, you know.                                                                        |
| 54:36      | Yep, we are the people who are doing things weirdly and in a complicated fashion because               |
| 54:41      | we can.                                                                                                |
| 54:42      | But also, you know, we've been using shortcuts for a very long time.                                   |
| 54:45      | And the one thing that I found when I've set up shortcuts to my parents and so on, like                |
| 54:49      | they don't necessarily know they're using shortcuts.                                                   |
| 54:51      | My dad logs his blood glucose in health through shortcuts because the app that he's got doesn't        |
| 54:56      | have healthcare sync.                                                                                  |
| 54:57      | So he's got a shortcut next to that app where he just taps it and then shortcuts pops up               |
| 55:02      | a health logging thing and he types in the number and presses okay.                                    |
| 55:06      | And then it opens the health app.                                                                      |
| 55:09      | And he doesn't know it's shortcuts, but it's something that I had to set up for him.                   |
| 55:14      | And if something like if he was using a different app or something, then that would have been          |
| 55:18      | much more complicated.                                                                                 |
| 55:19      | And he did try running it on his watch and it got very confused.                                       |
| 55:23      | I'm really curious to see what [[Apple]] does with this, you know, next year or this year,                 |
| 55:29      | I guess.                                                                                               |
| 55:30      | I feel like they're going to respond to this.                                                          |
| 55:33      | But I feel like they will, yeah.                                                                       |
| 55:34      | For the meantime, I mean, in shortcuts on Mac is a much better player now.                             |
| 55:42      | It's still weird in some ways, but you know, that's because it's an early adopter of Switch            |
| 55:46      | UI, but it works, you know, it's like when I was trying to record for the shortcuts for                |
| 55:51      | Mac field guide, like in November, it just wasn't working.                                             |
| 55:55      | Now it's working.                                                                                      |
| 55:56      | So that's good, but there's some points.                                                               |
| 56:01      | This episode of the automators is brought to you by DEVONthink, the flagship product                  |
| 56:06      | from Devon Technologies.                                                                               |
| 56:09      | Get organised and unleash your creativity.                                                             |
| 56:11      | Just go to devontechnologies.com/automators to get 10% off.                                      |
| 56:17      | DEVONthink is the most professional document and information management application for               |
| 56:21      | the Mac.                                                                                               |
| 56:22      | It's the one place for storing all of your documents, snippets and bookmarks and working               |
| 56:27      | with them.                                                                                             |
| 56:28      | Integrated artificial intelligence assists you with filing and searching while the extensive           |
| 56:33      | search language with advanced Boolean operators is there to help you find even more.                   |
| 56:38      | DEVONthink features a flexible sync system that supports many cloud services or lets                  |
| 56:43      | you synchronise over the local network too with everything securely encrypted.                         |
| 56:48      | This gives you the choice of however syncing works best for you.                                       |
| 56:52      | It has smart rules and flexible reminders that let you automate all parts of your workflow             |
| 56:56      | and delegate boring repeating tasks.                                                                   |
| 56:59      | So let DEVONthink automatically organise your data with rules you define.                             |
| 57:04      | DEVONthink's [[AppleScript dictionary is one of the largest on the Mac.                                |
| 57:07      | There's no part of DEVONthink that can't be automated.                                                |
| 57:09      | So extend DEVONthink's functionality with your own commands by adding them to its scripts             |
| 57:14      | menu.                                                                                                  |
| 57:15      | Even templates have scripts inside and you can set up new documents with data from placeholders        |
| 57:20      | or inserted by your own AppleScript code.                                                             |
| 57:23      | It's really kind of awesome.                                                                           |
| 57:25      | And of course there's so much more from an iOS companion app to email archiving scanning               |
| 57:30      | or even an embedded web server for sharing your data securely with your team.                          |
| 57:35      | I'm a big fan of DEVONthink.                                                                          |
| 57:36      | I keep a bunch of data in there.                                                                       |
| 57:39      | Not only do I like the way it manages documents, I like the automation.                                |
| 57:43      | I like the fact that you can link anything inside DEVONthink.                                         |
| 57:46      | If you want to do contextual computing, this is perfect for you because no matter what                 |
| 57:50      | the file is, you've got just one link away from it anywhere on your Mac.                               |
| 57:55      | Whether you're managing a lot of documents or doing a lot of research, you should be                   |
| 57:58      | checking out DEVONthink.                                                                              |
| 58:00      | And you can get 10% off DEVONthink 3 or upgrade to it right now.                                      |
| 58:04      | Just go to devontechnologies.com/automators.                                                     |
| 58:08      | That's devontechnologies.com/automators for that 10% off.                                        |
| 58:13      | And our thanks to Devon Technologies for their support of the automators and all of RelayFM.           |
| 58:20      | One of the things that I'm also rethinking with this big move is my desktop setups, you                |
| 58:25      | know, because I am a big fan of that, you know, it kind of leans into contextual computing.            |
| 58:30      | Like if I'm going to sit down and edit a podcast ad, I want my computer to look one way.               |
| 58:35      | If I'm going to sit down and do something else, I want it to look a different way.                     |
| 58:39      | And I've been evolving on that lately.                                                                 |
| 58:43      | The last time we checked in on this, I was using [[Keyboard Maestro]] and [[Moom]] settings because            |
| 58:49      | [[Moom]] has all these great settings.                                                                     |
| 58:53      | And with [[Moom]], you can have pre-configured locations and it's just, it's really clean.                 |
| 58:59      | So it requires to have a separate app, which I know a lot of people don't want to do.                  |
| 59:04      | But I did find a spot where [[Moom]] wasn't really scratching the edge for me.                             |
| 59:10      | I have one screen that I call my status board.                                                         |
| 59:14      | And on it, I've got an OmniFocus perspective that I've got, I've got a lot of stuff on                 |
| 59:21      | the screen.                                                                                            |
| 59:22      | I've got, I'm just thinking through it mentally now, Messages, [[Slack]], Basecamp, Twitter, Time          |
| 59:30      | Tracking, Timery, and I think I've got like eight apps on a screen laid out very carefully.            |
| 59:37      | And it's just like the right swipe for me.                                                             |
| 59:39      | If I want to check in on that stuff, I swipe over and it's there.                                      |
| 59:43      | And I was having trouble getting those to lay out properly with [[Moom]] because it was                    |
| 59:46      | just so much.                                                                                          |
| 59:48      | And so what I ended up doing with that was just using the [[Keyboard Maestro]] has a command               |
| 59:53      | to set a window and they've got like preset defaults, but the defaults are pretty big.                 |
| 59:59      | I actually really laid it out pixel by pixel.                                                          |
| 01:00:02   | And so you can say put it in this spot is the upper left corner and make it this size.                 |
| 01:00:09   | And I got them exactly how I wanted them and recorded those numbers.                                   |
| 01:00:13   | And so I'm actually having [[Keyboard Maestro]] do that entire automation for me for that                  |
| 01:00:19   | setup.                                                                                                 |
| 01:00:20   | But I use that one quite often.                                                                        |
| 01:00:23   | Yes.                                                                                                   |
| 01:00:24   | I found one trick which is really useful for me when I'm using [[Moom]].                                   |
| 01:00:28   | And I use the feature from the menu bar where you can click Save Window Layout Snapshot.               |
| 01:00:33   | I found a lot of the time Ignore Obstructed Windows is actually not what I want because                |
| 01:00:39   | my windows somewhat overlap.                                                                           |
| 01:00:41   | Like right now, [[Audio Hijack]] is hovering over [[Slack]].                                                   |
| 01:00:45   | But I still want the [[Slack]] window to be positioned right where it is.                                  |
| 01:00:49   | And so if I untick Ignore Obstructed Windows and [[Slack]] pops up into that list along with               |
| 01:00:54   | a whole bunch of other apps.                                                                           |
| 01:00:56   | And so that for me has been very useful.                                                               |
| 01:01:00   | And also some windows just can't be resized much smaller than they are.                                |
| 01:01:04   | And that is frustrating when that happens.                                                             |
| 01:01:06   | But it's quite useful because before you give it a title, you can see the list of all the              |
| 01:01:11   | applications that are going to be arranged when you do that, which is quite nice.                      |
| 01:01:15   | Again, I remain a huge fan of these desktop setup automations.                                         |
| 01:01:21   | I know you're all in with Bunch at this point.                                                         |
| 01:01:24   | I'm using Bunch with [[Moom]].                                                                             |
| 01:01:26   | So I use Bunch to launch all of the applications that I'm going to need, like give it 10 seconds       |
| 01:01:30   | and then I run the [[Moom]] setup and I do this all from Bunch.                                            |
| 01:01:35   | And it's working really well for me, especially when I added the shortcuts to start my podcasting      |
| 01:01:41   | focus mode to my doc and I then removed it from my doc.                                                |
| 01:01:44   | That meant that start podcasting focus mode is now an application in my personal user                  |
| 01:01:49   | application folder, which means that I can run it through [[Alfred]] and [[Spotlight]] and Keyboard            |
| 01:01:54   | Maestro and Bunch.                                                                                     |
| 01:01:56   | And it works really well.                                                                              |
| 01:01:57   | What are the pluses and minuses of doing that in Bunch versus [[Keyboard Maestro]] for you?                |
| 01:02:02   | Honestly, for me, a lot of the stuff with Bunch is the fact that it's just text.                       |
| 01:02:08   | So I don't have the extra visual thing of open app.                                                    |
| 01:02:14   | I can just see that it's opening [[Safari]] and it's opening specifically a new window in                  |
| 01:02:19   | [[Safari]] using [[Keyboard Maestro]] and it opens Zoom and it opens [[Audio Hijack]] and I've just                |
| 01:02:25   | got a list there and it means if I want to search for all the things that open [[Audio Hijack]],                  |
| 01:02:29   | I can very, very easily find it and I'm not also finding things that have got                  |
| 01:02:35   | [[Audio Hijack]] in the name and so on.                                                                    |
| 01:02:37   | So I do a lot of things with [[Keyboard Maestro]] as well.                                                 |
| 01:02:41   | I just find for switching between statuses or context, I like Bunch just because it's                  |
| 01:02:49   | my menu bar of I am in this mode, I'm doing this thing, okay, I've done it and now the                 |
| 01:02:54   | next one.                                                                                              |
| 01:02:55   | Yeah, I need to make a serious effort with Bunch.                                                      |
| 01:02:58   | The problem is Bunch came into my life after I had already automated all of this stuff                 |
| 01:03:03   | in [[Keyboard Maestro]], you know, so I need to make a serious effort with Bunch to see how                |
| 01:03:12   | that plays.                                                                                            |
| 01:03:13   | Well, the thing that I had with Bunch as well because [[Keyboard Maestro]] now has this feature            |
| 01:03:17   | because [[Keyboard Maestro]] recently had a huge update, which is amazing, is [[Keyboard Maestro]]             |
| 01:03:21   | has always had the ability to run macros part of macro, but you kind of had to like set                |
| 01:03:26   | a variable then retrieve a variable to pass information around and or, you know, depending             |
| 01:03:31   | on what you're doing, it was a bit complicated.                                                        |
| 01:03:33   | They now specifically have macros as subroutines, which makes this thing so much more powerful         |
| 01:03:40   | because I use subroutines in every single one of my podcasting Bunches because I have                  |
| 01:03:45   | [[Audio Hijack]] popped open.                                                                              |
| 01:03:48   | And I then have it press the keyboard shortcut to, well, it closes all the [[Audio Hijack]] windows        |
| 01:03:53   | and then presses Command 1 to give me the overview of all the different kinds of recordings            |
| 01:03:58   | that I could do with [[Audio Hijack]].                                                                     |
| 01:04:01   | And things like that are sub-bunches for me.                                                           |
| 01:04:04   | Well, they're not sub-bunches, they're snippets in Bunch and they would be sub-routines in             |
| 01:04:09   | [[Keyboard Maestro]].                                                                                      |
| 01:04:11   | And yeah, so I just, it clicked for me earlier with Bunch that I did with [[Keyboard Maestro]].            |
| 01:04:18   | Neither of them is the right or the wrong application for this.                                        |
| 01:04:20   | It's whatever you want to use that works for you.                                                      |
| 01:04:23   | Yeah, but I still want to, like, I need to dig in on Bunch and find out because it is,                 |
| 01:04:28   | like, the idea of just writing a text file is kind of a beautiful thing, right, to set                 |
| 01:04:32   | up your desktop.                                                                                       |
| 01:04:33   | Yeah, it is.                                                                                           |
| 01:04:35   | And especially when you can do things like start by saying, hey, hide all the windows,                 |
| 01:04:40   | like, turn, uh, stop the display on my Mac for turning off for 90 minutes and things                   |
| 01:04:44   | like that, which are, again, things I do at the start of every podcasting workflow because             |
| 01:04:49   | I don't want my display to be turning off in the 90 minutes while I'm recording.                       |
| 01:04:53   | Like, usually I'll be clicking at something, typing a note or something, but just in case              |
| 01:04:57   | I make sure the computer stays awake for 90 minutes and that's all just very easy to                   |
| 01:05:02   | do with the text command.                                                                              |
| 01:05:04   | And I tend to trigger [[Keyboard Maestro]] Mac curves from Bunch as part of this anyway.                   |
| 01:05:09   | Yeah.                                                                                                  |
| 01:05:10   | And it's like, and the thing is, you can go further with this or like my [[Keyboard Maestro]],             |
| 01:05:13   | just as an example, my [[Keyboard Maestro]] set up to edit and add, um, it queries me as                   |
| 01:05:20   | to what show, like whether it's Mac power users, automators, or focused, and then it                   |
| 01:05:25   | opens, that's just open the fighter, opens the fighter to the exact folder where those                 |
| 01:05:28   | files are saved.                                                                                       |
| 01:05:30   | And then it opens that file in [[Fission]], which is my, the editing app I use, and then it                |
| 01:05:36   | resizes [[Fission]] very wide on my screen because when you edit audio, you want a wide view.              |
| 01:05:42   | And so it like, it does more like, cause you can do this also with shortcuts and we got                |
| 01:05:47   | shortcuts on the Mac.                                                                                  |
| 01:05:48   | You can say open [[Safari]], put it on the left side and open pages and put on the right side.             |
| 01:05:53   | But it doesn't really give you the ability to go in and do much more than that.                        |
| 01:06:00   | With [[Keyboard Maestro]], you can open a specific web page or open a specific pages document.             |
| 01:06:04   | Yeah, you can do all that with Bunch too.                                                              |
| 01:06:07   | Like, um, when I open OmniFocus, I don't want to just open OmniFocus, I want to open OmniFocus         |
| 01:06:12   | to a very specific project or perspective.                                                             |
| 01:06:17   | And yeah, you can do that, um, with [[Keyboard Maestro]] and presumably Bunch too.                         |
| 01:06:22   | That's why I need to spend some time with Bunch.                                                       |
| 01:06:24   | Yeah.                                                                                                  |
| 01:06:25   | And, and you can actually do this with shortcuts as well, but to do it in shortcuts, you'll            |
| 01:06:29   | either need to get the [[URL Schemes\|URL scheme]] of the folder or the project or the task that you                    |
| 01:06:32   | want to open or use the find folder or find project action to get it and then open it,                 |
| 01:06:39   | which feels like it's potentially a bit more work.                                                     |
| 01:06:42   | Everything's a little harder.                                                                          |
| 01:06:44   | Yeah.                                                                                                  |
| 01:06:45   | Yeah.                                                                                                  |
| 01:06:46   | All right.                                                                                             |
| 01:06:47   | I've just realised that because of my, uh, my system, I've accidentally got six OmniFocus              |
| 01:06:51   | Windows open right now, David.                                                                         |
| 01:06:53   | That's not quite what I intended, but the good news is two of them are automators.                     |
| 01:06:56   | All right.                                                                                             |
| 01:06:57   | Well, hey, we got one third of your, of your windows there.                                            |
| 01:07:01   | Uh, another thing I'm working on automation with, and this is really a work in progress                |
| 01:07:06   | is I, I have like, when I made this decision, I decided, okay, this is getting real.                   |
| 01:07:11   | Like I've always had JF to help me editing and I've got Leilani helping me with virtual                |
| 01:07:17   | systems, but I've got some other people on the team now and I want to get better at accessing          |
| 01:07:22   | and working with them and getting them content and getting their help.                                 |
| 01:07:28   | And, um, the automation element of that isn't great yet.                                               |
| 01:07:32   | Um, I stuck with, um, with base camp starters, partly because it started with just me and              |
| 01:07:38   | Leilani and she really likes the base camp interface, you know, and when you've got somebody           |
| 01:07:43   | working with you and they're happy with something, you don't really want to change it around.          |
| 01:07:46   | I mean, I had looked at notion and stuff and I just don't want to make it harder for the               |
| 01:07:50   | people that are helping me.                                                                            |
| 01:07:51   | So I'm resistant to change that.                                                                       |
| 01:07:54   | And base camp does have some good web hooks that I'm not using in terms of web based automations,      |
| 01:08:00   | but now as I've added people to the team, this base camp has just got bigger and there,                |
| 01:08:05   | this is something I need to seriously look at automation, like when I prepare a blog post              |
| 01:08:09   | or when I have a sample video for people to review, I need to like automate all of that.               |
| 01:08:14   | And I haven't done it yet and I'm kind of early in the process here.                                   |
| 01:08:17   | Yeah.                                                                                                  |
| 01:08:18   | Yeah.                                                                                                  |
| 01:08:19   | There is definitely something to be said about having a tool that works for the other                  |
| 01:08:21   | people as well, because with your website, you know, you are the one calling the shots                 |
| 01:08:25   | and everything.                                                                                        |
| 01:08:26   | So it is up to you to make that decision, but if you end up picking a tool that's difficult            |
| 01:08:32   | for people to use, or they don't quite understand like why, why are things organised like this         |
| 01:08:35   | and why are things scattered all over the place and so on, it gets very difficult for                  |
| 01:08:40   | people to actually do the thing that they need to do, which is not micromanaging their                 |
| 01:08:45   | tasks.                                                                                                 |
| 01:08:46   | It's doing the tasks, one hopes.                                                                       |
| 01:08:47   | So yeah, Basecamp is good for things like that, because it does have webhooks to get                   |
| 01:08:51   | data in and data out and so on and notions getting there with their new API, but it's                  |
| 01:08:57   | still very much a work in progress as far as I can tell.                                               |
| 01:08:59   | Yeah.                                                                                                  |
| 01:09:00   | And Basecamp is pretty simple, but it also just really hits you over the head with the                 |
| 01:09:03   | stuff that's on your plate, which is what the people I work with kind of want, you know?               |
| 01:09:08   | Yeah.                                                                                                  |
| 01:09:09   | Yeah.                                                                                                  |
| 01:09:10   | They don't want to be going and hunting and pecking around for, you know, all of the                   |
| 01:09:14   | links that they need or, you know, finding a blog post or something, they just wanted                  |
| 01:09:19   | to be there.                                                                                           |
| 01:09:20   | Well, there will be future content on the Automators about automating team management                  |
| 01:09:25   | stuff because this is very much on my radar now, and I'm going to be working on that.                  |
| 01:09:32   | Now we've been focused so far on talking about kind of the automation I'm running these                |
| 01:09:37   | days in relation to certain tasks, but I just wanted to take a minute to say [[Keyboard Maestro]]          |
| 01:09:44   | is just so essential to me.                                                                            |
| 01:09:47   | I use it for everything.                                                                               |
| 01:09:50   | It's really my, you know, if everything, what's the saying about hammers and nails?                    |
| 01:09:55   | Like if you have a hammer, everything looks a nail.                                                    |
| 01:09:57   | If you have [[Keyboard Maestro]], everything looks like you can solve it.                                  |
| 01:10:01   | Like [[Keyboard Maestro]] Macro.                                                                           |
| 01:10:02   | Yeah, exactly.                                                                                         |
| 01:10:03   | I mean, you know, one of the things that changed for me over the last year is I've stopped             |
| 01:10:08   | trying to be so demanding on an iPad.                                                                  |
| 01:10:11   | I'm trying to try to treat the iPad kind of the way [[Apple]] views it in my opinion.                      |
| 01:10:15   | So a lot of my more advanced automation, I'm not trying to like jump through a million                 |
| 01:10:20   | hoops in shortcuts.                                                                                    |
| 01:10:21   | I'm just writing a [[Keyboard Maestro]] script on my Mac and running it there.                             |
| 01:10:25   | And I spend a lot of time on Mac anyway, so that's fine.                                               |
| 01:10:28   | But I have just, you know, my [[Keyboard Maestro]] automation over the last few years has just             |
| 01:10:35   | kind of exploded because every problem I see seems like I can solve it with some sort                  |
| 01:10:41   | of [[Keyboard Maestro]] script.                                                                            |
| 01:10:43   | Yes.                                                                                                   |
| 01:10:44   | Yeah.                                                                                                  |
| 01:10:45   | I find ideas as well, you know, if I'm, if I'm playing with Bunch, then for the next                   |
| 01:10:48   | couple of days, everything's a Bunch, well Bunch.                                                      |
| 01:10:52   | And then if I'm playing with [[Keyboard Maestro]], the next couple of days, everything's a Keyboard        |
| 01:10:55   | Maestro Macro.                                                                                         |
| 01:10:56   | And then if I'm in [[Drafts]] for the next couple of days, it's all, it's all draft sections.              |
| 01:11:01   | And then it's shortcuts.                                                                               |
| 01:11:02   | And then the whole cycle begins again, only add a whole bunch of extra tools in there because          |
| 01:11:06   | you know, why, why would I do anything simply?                                                         |
| 01:11:10   | But equally, it can be a really fun exercise, especially I found, you know, I've created               |
| 01:11:14   | something in one system and it works, it's fine.                                                       |
| 01:11:17   | And then as I'm doing something seemingly completely unrelated in a different automation               |
| 01:11:22   | application, I'm like, you know, wait, what, that thing that I actually kind of wanted                 |
| 01:11:25   | to do in this, but I never did because it was just going to be too difficult.                          |
| 01:11:28   | Well, I can actually do it now in, in, in this application, it'll be super easy.                       |
| 01:11:34   | And so that's how I often end up with interlocked actions of [[Keyboard Maestro]] is calling Bunch         |
| 01:11:38   | or Bunch is calling [[Keyboard Maestro]] or running a shortcut or something like that.                     |
| 01:11:42   | Yeah, I totally agree.                                                                                 |
| 01:11:45   | And but for me on the Mac, [[Keyboard Maestro]] is so good.                                                |
| 01:11:49   | And if you haven't used it because you're intimidated by it, I would recommend taking                  |
| 01:11:54   | a, you know, go back to listen to some of our prior episodes.                                          |
| 01:11:57   | I think we've done a good job.                                                                         |
| 01:11:58   | If you want to throw money at it, I have a really good field guide that I'm proud of                   |
| 01:12:01   | that I think can get you running on [[Keyboard Maestro]].                                                  |
| 01:12:04   | But I get these emails every day from people who buy the field guide and are like, I can't             |
| 01:12:08   | believe how much stuff I'm able to automate with [[Keyboard Maestro]] on my Mac.                           |
| 01:12:13   | It is just crazy, like I was talking earlier about, like I can go to the [[Grammarly]] website             |
| 01:12:17   | and have [[Keyboard Maestro]] find a button that seems to move every time I open the website               |
| 01:12:22   | and click it based on what it looks like.                                                              |
| 01:12:25   | And like that's one step in [[Keyboard Maestro]].                                                          |
| 01:12:28   | And, you know, it's just, it's an essential tool for me as I go through this process.                  |
| 01:12:35   | And I do tend to lean on that [[Keyboard Maestro]] hammer.                                                 |
| 01:12:39   | That's probably the reason why I haven't got as good at web automation is because I can                |
| 01:12:44   | solve so many problems with [[Keyboard Maestro]] that I don't bother, you know, it's like,                 |
| 01:12:48   | okay, this works.                                                                                      |
| 01:12:49   | I'm good.                                                                                              |
| 01:12:50   | Yes.                                                                                                   |
| 01:12:51   | On the flip side, when I get over to the iPhone and iPad, the tool that I find myself using            |
| 01:12:57   | more and more in shortcuts obviously is a big deal, but the tool that really stands out                |
| 01:13:02   | for automation for me lately is [[Drafts]] because draft solves, [[Drafts]] is kind of like the Keyboard       |
| 01:13:09   | Maestro of the iPhone because so much of that iPhone stuff I do involves text and [[Drafts]]              |
| 01:13:16   | has so many ways to work with that.                                                                    |
| 01:13:19   | And let me just give you an example, you know, one of the challenges I have with this new              |
| 01:13:24   | kind of career shift is I have all these content ideas, but I'm not sure where they all fit,           |
| 01:13:29   | you know, like, like I just wrote down using Bunch.                                                    |
| 01:13:33   | That is a content idea for me, you know, now, is it going to be a blog post?                           |
| 01:13:38   | Is it going to be a video in the labs?                                                                 |
| 01:13:40   | Is it going to be a YouTube video?                                                                     |
| 01:13:42   | I don't know what it's going to be.                                                                    |
| 01:13:43   | Is it going to be a field guide?                                                                       |
| 01:13:45   | Who knows, right?                                                                                      |
| 01:13:46   | But I want to capture that quickly.                                                                    |
| 01:13:48   | And so I, the way I do it is on the Mac, I just hit my, was it control option command                  |
| 01:13:56   | in the MacSparky kind of hyper key.                                                                   |
| 01:14:00   | And then that's a conflict menu and I type C for content.                                              |
| 01:14:05   | And it runs a script that says, you know, what's the idea I type in using Bunch.                       |
| 01:14:09   | It has a little checkbox there.                                                                        |
| 01:14:11   | If I've got something saved to the clipboard, I can add it or not.                                     |
| 01:14:14   | And then it creates a custom [[Obsidian]] note on that idea, titles it, adds all the [[YAML]]                  |
| 01:14:22   | data, all the stuff I do to create an [[Obsidian]] post and saves it to the exact folder where             |
| 01:14:27   | I keep content ideas.                                                                                  |
| 01:14:28   | And later I'll go through that list and start thinking about more.                                     |
| 01:14:31   | In fact, one of the things does it as a checklist to that item in [[Obsidian]] saying, where do            |
| 01:14:36   | you think this belongs, you know, in terms of content?                                                 |
| 01:14:40   | So it does all of that.                                                                                |
| 01:14:41   | And all I do is type in one thing and I run all of that with [[Keyboard Maestro]].                         |
| 01:14:45   | But when I'm over on my phone, I have ideas too.                                                       |
| 01:14:48   | And I do the exact same, I get the exact same result using [[Drafts]].                                     |
| 01:14:53   | And it's not that hard.                                                                                |
| 01:14:55   | You open [[Drafts]] and [[Drafts]] has a templated text [[Drafts]] action.                                         |
| 01:14:59   | We've talked about it on the show before and I took the exact same [[YAML]] content and [[Obsidian]]           |
| 01:15:07   | outline that I use when I have a new content idea.                                                     |
| 01:15:10   | And [[Drafts]] now has the ability to save locally anywhere you want.                                      |
| 01:15:16   | So I save that to the exact same folder on my phone.                                                   |
| 01:15:19   | And it's just solving the problem on different platforms in different ways.                            |
| 01:15:24   | But I just want to shout out that, you know, shortcuts is great and I'm a big fan.                     |
| 01:15:30   | But [[Keyboard Maestro]] on the Mac and [[Drafts]] on the iPhone and iPad can really help you                  |
| 01:15:34   | sometimes do things that would be otherwise difficult.                                                 |
| 01:15:38   | I mean, if I get a content idea, what I don't want to do is open up [[Obsidian]], navigate to              |
| 01:15:44   | the right folder, create a new file, run a template and do like 10 steps.                              |
| 01:15:50   | And it's even harder to do that on the iPhone because, you know, it's the iPhone.                      |
| 01:15:54   | Whereas now I just type a few things in [[Drafts]], push a button in [[Drafts]], it happens, right?            |
| 01:15:59   | I type a conflict pallet into my Mac, fill in one field, hit return and it's done.                     |
| 01:16:04   | And that's the kind of automation that I'm excited about right now.                                    |
| 01:16:08   | Yes.                                                                                                   |
| 01:16:09   | Yeah.                                                                                                  |
| 01:16:10   | Making it super easy for yourself to just do the things that you want to do without                    |
| 01:16:13   | getting distracted and falling down a rabbit hole and then they got put Wonderland on the              |
| 01:16:16   | way is pretty powerful.                                                                                |
| 01:16:19   | I want to go a little deeper on web automation, Rose.                                                  |
| 01:16:23   | Which vendor do you think I should be working with right now?                                          |
| 01:16:26   | Like, for instance, I have a paid IFTTT account and right now it is the two things it's doing          |
| 01:16:33   | for me is it's capturing a lot of data into my [[Day One]] journal.                                        |
| 01:16:36   | Yeah.                                                                                                  |
| 01:16:37   | It continues to be very good at that.                                                                  |
| 01:16:39   | If I favourite a tweet, if I write a post at Max Barkley, all that gets saved to my day                 |
| 01:16:43   | one journal.                                                                                           |
| 01:16:44   | I love that.                                                                                           |
| 01:16:45   | Yeah.                                                                                                  |
| 01:16:46   | Another thing it's doing is like I found there are a few people who write blog posts that              |
| 01:16:50   | I want to read everything they put.                                                                    |
| 01:16:52   | They're a very low signal to noise websites and they don't post often.                                 |
| 01:16:57   | So I have IFTTT instead of reading those in my RSS feed because I found I was always sending           |
| 01:17:02   | them the Instapaper.                                                                                   |
| 01:17:04   | I cut them out of my RSS and I just have IFTTT.                                                        |
| 01:17:09   | You just have them appear in Instapaper.                                                               |
| 01:17:10   | Yeah.                                                                                                  |
| 01:17:11   | So IFTTT follows their RSS feed and puts everything in Instapaper as it gets published.                |
| 01:17:17   | So I'm doing that with it.                                                                             |
| 01:17:20   | I've played in the past with Zapier and some of the other competitors.                                 |
| 01:17:26   | Which one do you think I should be going at given the tool sets I've been talking about                |
| 01:17:30   | today?                                                                                                 |
| 01:17:31   | Honestly, with the tool sets that you're talking about with things like Basecamp and WordPress         |
| 01:17:34   | and so on, I would be looking at either [[Make\|Integromat]] or Zapier.                                          |
| 01:17:40   | And my inclination is probably going to be to point you towards [[Make\|Integromat]] just because                |
| 01:17:44   | I find the user interface is a lot easier to just dive in and do things.                               |
| 01:17:51   | It's a visual user interface.                                                                          |
| 01:17:53   | And so you can see, for example, there's an RSS icon and when you click on it, you see                 |
| 01:17:56   | the details of the RSS feed and then there's an arrow going out of it to, I don't know,                |
| 01:18:01   | WordPress.                                                                                             |
| 01:18:03   | And then that's creating WordPress post or maybe there's an RSS feed and it splits out.                |
| 01:18:08   | And then the word MacSparky is on one line and the word, I don't know, 512 pixels is                  |
| 01:18:14   | on another if we're talking about something for my power users.                                        |
| 01:18:18   | And you can just see immediately and then you just look at the icons after that and                    |
| 01:18:22   | you can see exactly what's happening, which I find to be incredibly useful.                            |
| 01:18:27   | You can get very nerdy and granular with it, but also you don't have to and it does work               |
| 01:18:31   | with all the Pro Tools plus it's very affordable, which I think quite a few of our listeners           |
| 01:18:36   | will very much appreciate.                                                                             |
| 01:18:38   | I'm paying for Zapier and [[Make\|Integromat]] on higher tiers because I'm using them all the time               |
| 01:18:44   | and actually a whole chunk of things just wouldn't be done without them.                               |
| 01:18:48   | So for example, creating show notes for automators and indeed creating new automations, episodes       |
| 01:18:53   | and things like that.                                                                                  |
| 01:18:54   | A whole bunch of that is just handled for me with absolutely no work on my part anymore                |
| 01:18:59   | thanks to Zapier, Zaps and [[Make\|Integromat]] scenarios and they just do things and I don't even think         |
| 01:19:05   | about it and the notes are just there and it's brilliant.                                              |
| 01:19:09   | Of course, I still have to actually turn up and think about the notes, but it means that               |
| 01:19:12   | I'm never sitting down and creating a Google Doc for any of this, which is of course not               |
| 01:19:16   | something that either of us really want to spend a lot of time doing if we can avoid                   |
| 01:19:20   | it when we've got systems and the ability to automate that.                                            |
| 01:19:23   | Yeah.                                                                                                  |
| 01:19:24   | All right.                                                                                             |
| 01:19:25   | So later this year, we're going to do a full show on web-based automation.                             |
| 01:19:27   | I'm going to sign up for both services.                                                                |
| 01:19:29   | I make a show called Automators.                                                                       |
| 01:19:30   | I need to do that again.                                                                               |
| 01:19:31   | Yeah.                                                                                                  |
| 01:19:32   | Yeah.                                                                                                  |
| 01:19:33   | I think your accountant might let you class that as business expense maybe.                            |
| 01:19:37   | And we're going to have more on that.                                                                  |
| 01:19:38   | If you have web automation questions, let us know.                                                     |
| 01:19:41   | So as we start playing that show, we'll try to address them, but thanks for that Rose.                 |
| 01:19:46   | I think I needed a kick in the pants on a web automation.                                              |
| 01:19:50   | And the problem for me just keeps coming back to the fact that I, maybe it's a thing that              |
| 01:19:54   | I grew up using the Mac and I'm just so used to doing the automation on the local machine.             |
| 01:19:59   | Yeah.                                                                                                  |
| 01:20:00   | I keep having trouble wrapping my head around it, but my team and my whole system now is               |
| 01:20:06   | a lot of web-based stuff.                                                                              |
| 01:20:08   | So I need to start looking more seriously at the web-based automation.                                 |
| 01:20:11   | Yeah.                                                                                                  |
| 01:20:12   | The big advantage of the web-based automations is, for example, things like a podcast post             |
| 01:20:18   | appearing on your website, like your local machine, and indeed you shouldn't have to                   |
| 01:20:22   | be involved in any of that at all.                                                                     |
| 01:20:25   | Yeah.                                                                                                  |
| 01:20:26   | Exactly.                                                                                               |
| 01:20:27   | Because say, for example, you have an emergency, a family emergency, and you need to go deal           |
| 01:20:30   | with it.                                                                                               |
| 01:20:31   | And you're out of, you're not reachable for a couple of days.                                          |
| 01:20:35   | That stuff still needs to go on and happen, but you shouldn't need to have prepped your                |
| 01:20:39   | system like you should go here and look for this stuff.                                                |
| 01:20:41   | You should just turn up because you should never actually be involved in the process                   |
| 01:20:45   | of sending it from here to there, aside from setting up an automation and keeping it on                |
| 01:20:49   | it every once in a while to make sure it works.                                                        |
| 01:20:51   | But I have to say, Zapier Zaps and [[Make\|Integromat]] scenarios, for me, have been rock solid.                  |
| 01:20:56   | You get them set up, you tweak them a little bit over a couple of weeks, popping back in               |
| 01:21:00   | every once in a while once you realise you've misplaced a full stop or something like that.            |
| 01:21:04   | And you're done, that's it.                                                                            |
| 01:21:07   | And it really does make a huge difference to know that it doesn't matter whether or                    |
| 01:21:10   | not your computer's on, whether or not you are in the right headspace to deal with this                |
| 01:21:14   | or you're actively doing it or not, it does just happen.                                               |
| 01:21:20   | This episode is brought to you by Hover, one of Relay FM's longest running sponsors.                   |
| 01:21:25   | When you have that one big idea, where do you go?                                                      |
| 01:21:28   | Well, your business starts with a domain name, so for many entrepreneurs, Hover is that big            |
| 01:21:32   | leap.                                                                                                  |
| 01:21:33   | Hover has over 300 domain name extensions to choose from, no matter what you want to build,            |
| 01:21:37   | there's a domain name waiting for it, and they have excellent technical support to answer              |
| 01:21:41   | any questions you may have, and they're dedicated to getting you online, not upselling you.            |
| 01:21:47   | Hover has a free who is privacy, so the bad guys don't get your information, and a clean               |
| 01:21:51   | UX and UI, multi-sales on popular top-level domains, and more.                                         |
| 01:21:56   | It's easy to see why Hover is the popular choice for starting businesses for lots of                   |
| 01:22:00   | people.                                                                                                |
| 01:22:01   | I have loads of domains, seriously, I don't even remember how many I have, because I have              |
| 01:22:06   | a great idea for a cool name, and a domain name is a relatively cheap way of just getting              |
| 01:22:11   | started, even if I maybe don't do something for a while.                                               |
| 01:22:13   | The very first time I had an idea for a website, Automation Orchard, and I really wanted to            |
| 01:22:17   | create it, I went and I did a whole bunch of things, and of course, I had to buy a domain              |
| 01:22:22   | name first, and then after that, I actually built the website and put the content together.            |
| 01:22:26   | Maybe some people that's the wrong way around, but for me, having the domain makes it real.            |
| 01:22:30   | We know you're like intuitive user experiences and things that just work straight out of               |
| 01:22:34   | the box, so I know you'll appreciate Hover.                                                            |
| 01:22:37   | The user interface is really simple, clean, and easy to navigate.                                      |
| 01:22:42   | Buy a domain and start using it today.                                                                 |
| 01:22:44   | Go to hover.com/automators and get 10% on all new purchases.                                     |
| 01:22:48   | That URL one more time, hover.com/automators.                                                    |
| 01:22:51   | Make a name for yourself with Hover.                                                                   |
| 01:22:54   | Our thanks to Hover for their support of this show and Relay FM.                                       |
| 01:22:57   | All right, so we've been talking about me the whole episode.                                           |
| 01:23:01   | I want to talk about some of our listeners.                                                            |
| 01:23:05   | Yeah, because we do get feedback for automators frequently.                                            |
| 01:23:12   | I promise you, it's all being collected.                                                               |
| 01:23:14   | So if you send a tweet with the hashtag ask automators, or you post in the Relay FM members            |
| 01:23:19   | [[Discord]] with our question work ask automators, the feedback channel is a great place for               |
| 01:23:24   | that.                                                                                                  |
| 01:23:25   | But of course, you can chat about it in any of the appropriate channels if you so choose.              |
| 01:23:30   | All of this gets automatically saved, and I promise we're going to start going through                 |
| 01:23:34   | it.                                                                                                    |
| 01:23:35   | But one of the things I wanted to mention recently, [[Stephen Millard]], who's been on the show before,    |
| 01:23:41   | he's been doing a lot of amazingly cool things recently.                                               |
| 01:23:45   | So he's done an [[Alfred]] action or [[Alfred]] workflow to integrate with shortcuts.                          |
| 01:23:52   | More recently, he's done a [[Keyboard Maestro]] plug-in for [[Shortcuts\|Apple Shortcuts]], which allows                   |
| 01:23:55   | you to run a shortcut in [[Keyboard Maestro]].                                                              |
| 01:23:59   | And it's brilliant.                                                                                    |
| 01:24:00   | I love it, David.                                                                                      |
| 01:24:01   | I've actually been using it quite a bit, and I'm really, really impressed with this.                   |
| 01:24:05   | Yeah, Stephen is amazing.                                                                              |
| 01:24:08   | I think he's going to become a yearly guest so long as he's willing to come on the show                |
| 01:24:11   | because he's prolific.                                                                                 |
| 01:24:15   | If you haven't subscribed to his website, it's Thought Asylum.                                         |
| 01:24:19   | I love what he's doing.                                                                                |
| 01:24:23   | And this post just went up today as we're recording, but it's really impressive.                       |
| 01:24:27   | And he also, Stephen's the guy who also made the cool script where I ran the entire set                |
| 01:24:33   | of [[SF Symbols]] icons in gray, which now is the basis of so many of my [[Stream Deck]] icons.                |
| 01:24:41   | I mean, it's like this guy just keeps doing stuff.                                                     |
| 01:24:44   | And so we'll reach out and get him on the show again this year, but he's got that.                     |
| 01:24:49   | But I think the big deal is we want to do these ask the automator questions going forward.             |
| 01:24:55   | One of our hopes for this following year is when we don't have a guest on the show that                |
| 01:24:58   | we'll be able to cover a little bit of it on every episode, we'll occasionally probably                |
| 01:25:03   | do a full-on feedback episode to kind of clear out the decks.                                          |
| 01:25:07   | But I would like to start addressing this on every episode.                                            |
| 01:25:10   | So if you've got some cool ask the automator questions, let us know.                                   |
| 01:25:13   | We plan to help you on that.                                                                           |
| 01:25:15   | Yes.                                                                                                   |
| 01:25:16   | And it's always interesting to hear how people are struggling with things or what they're              |
| 01:25:21   | trying to solve and what they're trying to do.                                                         |
| 01:25:25   | And I've been helping a couple of friends and family members out recently with a whole                 |
| 01:25:28   | bunch of automations.                                                                                  |
| 01:25:30   | And David, I bought my parents more smart home stuff for Christmas.                                    |
| 01:25:34   | Oh, excellent.                                                                                         |
| 01:25:35   | And I live to tell the tale.                                                                           |
| 01:25:37   | They're actually thrilled with everything, which is amazing.                                           |
| 01:25:40   | Love it so much.                                                                                       |
| 01:25:42   | So yeah, it's one of these things where answering questions and solving problems for people            |
| 01:25:47   | is always very exciting and lots of good fun.                                                          |
| 01:25:50   | And it's especially lovely when our listeners share things with us, either things that they've         |
| 01:25:55   | made and things that they're proud of or questions that they might have, such as, you know, how        |
| 01:26:00   | can I trigger shortcuts in the command line, which is something that we can answer.                    |
| 01:26:05   | We're not going to answer today because it's a bit more involved.                                      |
| 01:26:08   | But you know, there's plenty of options out there for, you know, you to ask questions                  |
| 01:26:14   | with.                                                                                                  |
| 01:26:15   | Yeah.                                                                                                  |
| 01:26:16   | As the show publishes last week's episode of Mac Power Users was about home automation,                |
| 01:26:20   | we had YouTuber Shane Whatley on, who is a guy who only does YouTube videos on [[HomeKit]]                  |
| 01:26:26   | and it's got some great videos.                                                                        |
| 01:26:28   | But Rose, you were there in spirit.                                                                    |
| 01:26:29   | I think I mentioned you like four times during the episode.                                            |
| 01:26:33   | I felt my ears burning.                                                                                |
| 01:26:34   | That explains it.                                                                                      |
| 01:26:35   | That explains it.                                                                                      |
| 01:26:36   | We talked about your share, your chair motion sensor, which Shane was very impressed with              |
| 01:26:42   | that.                                                                                                  |
| 01:26:43   | And he had a good idea too, and I don't want to like dwell on this.                                    |
| 01:26:46   | I know a lot of folks listen to both shows, but put a motion sensor on your mailbox, which             |
| 01:26:52   | is an excellent idea.                                                                                  |
| 01:26:54   | Oh yeah.                                                                                               |
| 01:26:55   | Yeah.                                                                                                  |
| 01:26:56   | I have a vibration sensor on my letterbox because here in the UK, our letterbox just                   |
| 01:26:59   | goes through the door and every time that flips, I get a notification that says you've                 |
| 01:27:03   | got mail and I love it.                                                                                |
| 01:27:05   | It's so good.                                                                                          |
| 01:27:06   | Well, for me, it's a little harder.                                                                    |
| 01:27:07   | My mailbox is like down the street from my house and my mailman is very unreliable.                    |
| 01:27:12   | So I would like to know when he puts the mail in there.                                                |
| 01:27:16   | So I don't go out two or three times to find an empty box, so I don't leave the mail in                |
| 01:27:20   | there for four hours.                                                                                  |
| 01:27:21   | So I ordered one, and of course, I'm using the [[Aqara]] stuff because now that I have their               |
| 01:27:28   | [[Aqara Hub\|hub]], I'm all in.                                                                                       |
| 01:27:30   | Yep.                                                                                                   |
| 01:27:31   | Yep.                                                                                                   |
| 01:27:32   | Since we talked about the water sensors, what is it that we call them?                                 |
| 01:27:36   | The leak sensors.                                                                                      |
| 01:27:37   | Leak sensors.                                                                                          |
| 01:27:38   | Yeah.                                                                                                  |
| 01:27:39   | Rose, I now have like eight of them.                                                                   |
| 01:27:40   | Oh yeah.                                                                                               |
| 01:27:41   | They breed.                                                                                            |
| 01:27:42   | They're like triples.                                                                                  |
| 01:27:43   | They're brilliant.                                                                                     |
| 01:27:44   | And I'm like, this is amazing.                                                                         |
| 01:27:46   | And I ran some tests and the alarm is just as loud and obnoxious as I'd like it to be.                 |
| 01:27:51   | And now I've got them behind toilets and under sinks and all over the house.                           |
| 01:27:56   | Yeah.                                                                                                  |
| 01:27:57   | Like all places you shouldn't need to put a leak sensor, but equally, you want to know                 |
| 01:28:00   | if something goes wrong.                                                                               |
| 01:28:02   | It's brilliant.                                                                                        |
| 01:28:03   | Yeah.                                                                                                  |
| 01:28:04   | So I got my parents for Christmas.                                                                     |
| 01:28:05   | I got them the [[Aqara Hub#E1\|Aqara E1 hub]], which is like a USB stick, and it's really small.                         |
| 01:28:12   | It doesn't connect very ethernet or anything, but my parents really don't have a lot of                |
| 01:28:16   | smart home stuff.                                                                                      |
| 01:28:17   | And so I got them just sensors for Christmas.                                                          |
| 01:28:20   | I didn't get them any control devices, just sensors.                                                   |
| 01:28:23   | So I got them for temperature sensors, a motion sensor, and a light level sensor.                      |
| 01:28:27   | So the light level sensor and the motion sensor are both in the living room where they have            |
| 01:28:32   | the lights that are automatically controlled.                                                          |
| 01:28:34   | And now it says, if it's dark and I see movement in this room, turn on the lights.                     |
| 01:28:40   | But of course, only if somebody is at home.                                                            |
| 01:28:42   | And if you come home after dark, it turns on the lights, or if you're at home and sunset               |
| 01:28:46   | happens and it turns on the lights and so on.                                                          |
| 01:28:48   | And I did expand the number of smart plugs for them before Christmas as a pre-present.                 |
| 01:28:52   | Now, which app are you using to run that automation out of?                                            |
| 01:28:56   | Just the Home app.                                                                                     |
| 01:28:57   | Okay.                                                                                                  |
| 01:28:58   | Just the Home app.                                                                                     |
| 01:28:59   | Everything is done through the Home app.                                                               |
| 01:29:00   | It's really good.                                                                                      |
| 01:29:01   | I'm really pleased that it works.                                                                      |
| 01:29:02   | Previously, the light level stuff, I've had to use a controller for [[HomeKit]] to do things,              |
| 01:29:09   | but it seemed to now work with the Home app when I set it up for my parents.                           |
| 01:29:14   | So fingers crossed, it continues to work with that.                                                    |
| 01:29:16   | If not something like Home Plus, controller for [[HomeKit]], the EVE Energy app, these can                 |
| 01:29:21   | all do more complex automations.                                                                       |
| 01:29:25   | But the Home app seems to be working perfectly for my parents, and I'm doing my absolute               |
| 01:29:30   | best to keep it minimal for them so that they don't have a need to have 8,000 apps and stuff           |
| 01:29:37   | on their phone, because they don't want that.                                                          |
| 01:29:41   | They just want to know what the temperature is in different rooms.                                     |
| 01:29:43   | And my dad already rearranged all the sensors about three times and then messaged me and               |
| 01:29:48   | said, wait, I moved all the sensors around.                                                            |
| 01:29:50   | How do I know which one's which?                                                                       |
| 01:29:51   | All right, dad.                                                                                        |
| 01:29:52   | All right, dad.                                                                                        |
| 01:29:53   | It's like, okay, dad, I should have written a number on the back of each one.                          |
| 01:29:57   | I realise now, this was my fault.                                                                      |
| 01:30:01   | So pro tip for people, if you're giving small, easily movable sensors to people, in my house,          |
| 01:30:06   | I've done this, David.                                                                                 |
| 01:30:07   | I've labeled the back and the side of every single motion sensor.                                      |
| 01:30:11   | So if it gets picked up and put it in a different room, like there are the key remotes that            |
| 01:30:15   | I have, they're labeled on the back of every single one of them.                                       |
| 01:30:18   | So if I pull it out of the light switch and I've got two of them, I just flip it over                  |
| 01:30:21   | and while them says bedroom, while them says office and they can go back to the right place.           |
| 01:30:25   | But I didn't do this with my parents.                                                                  |
| 01:30:26   | I think the car stuff, you could probably use a Sharpie.                                               |
| 01:30:29   | Yeah.                                                                                                  |
| 01:30:30   | Well, that's what I didn't do.                                                                         |
| 01:30:31   | Yeah.                                                                                                  |
| 01:30:32   | Okay.                                                                                                  |
| 01:30:33   | Because I gave it to them boxed up and I just put it in place because I thought they're                |
| 01:30:35   | not going to move this stuff around and then like three days later, my dad's like, so I                |
| 01:30:38   | moved all the sensors around, but I think the temperature is like wrong in the living                  |
| 01:30:42   | room because it says it's like eight degrees and it's like, well, it's not eight degrees               |
| 01:30:46   | in your living room.                                                                                   |
| 01:30:47   | It should be like 22.                                                                                  |
| 01:30:49   | What's up?                                                                                             |
| 01:30:50   | It turned out he moved all the sensors around.                                                         |
| 01:30:51   | So here's a pro tip for people who are trying to figure out which sensors which after the              |
| 01:30:55   | fact when somebody's gone and shuffled them all around, if you've got an oven or a fridge,             |
| 01:31:01   | just like put the sensor like near the oven, like open the oven door whilst the oven's                 |
| 01:31:05   | on like ideally while you're cooking something else and hold the sensor above it and the               |
| 01:31:08   | one that spikes, that's the one that you're holding.                                                   |
| 01:31:13   | Or if you stick it in the fridge for a couple of minutes, it'll cool down quite rapidly.               |
| 01:31:16   | It's not good for these things to be like suddenly exposed to lots of heat.                            |
| 01:31:21   | So don't try not to put it in the oven and certainly don't put it in the freezer, but                  |
| 01:31:25   | a minute or two in the fridge or like opening the oven door with it, you know, in the waft             |
| 01:31:29   | of warm air that comes out is not too bad and it should give you that spike or dip that                |
| 01:31:34   | you need to figure out which one is which once your dad has moved all the sensors around.              |
| 01:31:38   | Or if you if you have a kiln, you could just put a slow motion camera on it and put it                 |
| 01:31:45   | on YouTube and watch it melt.                                                                          |
| 01:31:47   | That would be fun.                                                                                     |
| 01:31:48   | I mean, you could do.                                                                                  |
| 01:31:49   | You could do that.                                                                                     |
| 01:31:50   | That sounds like somebody's going to make some some advertising money there, David.                    |
| 01:31:54   | I was just hoping to give my parents some data because they've been looking at smart                   |
| 01:31:57   | heating systems and they really didn't know whether or not it's worth it.                              |
| 01:32:01   | So I'm hoping by giving them some easily accessible temperature data that it will be like they'll      |
| 01:32:05   | be able to make that decision and the [[Aqara]] stuff is so affordable that, you know, my                  |
| 01:32:10   | parents have now said like, oh, maybe we can get some more temperature sensors and I linked            |
| 01:32:14   | them to a bundle of four.                                                                              |
| 01:32:16   | They realised how cheap this stuff is and so they're they're probably going to just carpet             |
| 01:32:20   | that home and sensors, which is great.                                                                 |
| 01:32:21   | Did the same thing.                                                                                    |
| 01:32:22   | I told my sister because I have a brother-in-law, it's kind of nerdy.                                  |
| 01:32:25   | I said, buy him the [[Aqara Hub]] and two [[Aqara Water Leak Sensor\|water sensors]] and he's already called me and he                  |
| 01:32:31   | wants to get more and I gave him the low down in terms of mobile sensors, sensors that grow            |
| 01:32:39   | legs.                                                                                                  |
| 01:32:40   | Let me tell you something.                                                                             |
| 01:32:41   | So the other day I was working and my refrigerator water sensor went off and I'm like, ah, no,         |
| 01:32:49   | my refrigerator is leaking, but also, yay, my [[Aqara Water Leak Sensor\|Aqara]] works, you know.                                   |
| 01:32:54   | So I ran into the kitchen and I couldn't find any water anywhere.                                      |
| 01:32:57   | I literally pulled the refrigerator away from the wall.                                                |
| 01:33:00   | I'm like, I can't figure out.                                                                          |
| 01:33:01   | And then I realised, wait a second, where is the sensor?                                               |
| 01:33:04   | And I'm looking around and the sensors nowhere to be found.                                            |
| 01:33:08   | And I'm scratching my head and I go back over to my desk and my dog sleeps under my desk               |
| 01:33:12   | while I work and she's like chewing on something.                                                      |
| 01:33:16   | And sure enough, she found the [[Aqara Water Leak Sensor\|Aqara refrigerator sensor]] and I guess if you put enough dog saliva      |
| 01:33:22   | on it, it will trigger as a leak.                                                                      |
| 01:33:26   | I mean, it worked.                                                                                     |
| 01:33:28   | It worked.                                                                                             |
| 01:33:29   | Yes.                                                                                                   |
| 01:33:30   | Yeah.                                                                                                  |
| 01:33:31   | When I first got mine, I tested them out.                                                              |
| 01:33:33   | I just used like a very like small shallow plate and just put a bit of water on it and                 |
| 01:33:37   | like pop the sensor on it.                                                                             |
| 01:33:39   | And let me tell you, if that's hooked up to Home Kid and you've got a couple of HomePods,             |
| 01:33:42   | you know all about it.                                                                                 |
| 01:33:43   | Yeah.                                                                                                  |
| 01:33:44   | So I did not have relocated it in a place she can't get to and I've done an audit of                   |
| 01:33:51   | my water sensors.                                                                                      |
| 01:33:53   | I think we're good now.                                                                                |
| 01:33:54   | I don't think she's going to find anymore, but that was kind of funny, I thought.                      |
| 01:33:58   | Yeah.                                                                                                  |
| 01:33:59   | One thing you can do with the [[Aqara Water Leak Sensor\|Aqara leak sensors]] that I should have mentioned before is they've        |
| 01:34:04   | got two tiny little screws on the back, which you can adjust them.                                     |
| 01:34:09   | So this means that you could connect something like a water level sensor to it if you wanted           |
| 01:34:13   | to.                                                                                                    |
| 01:34:14   | So say for example, if water going above a certain point in a water barrel or a water                  |
| 01:34:18   | tank was going to be a problem, you could put a water level sensor on there, like there's              |
| 01:34:24   | a straight part and then there's a flexible part that will be brought up by the level                  |
| 01:34:28   | of the water changing.                                                                                 |
| 01:34:29   | And you can just put that in, you can also just connect wire, just like straight conductive            |
| 01:34:35   | wire, which means that the actual sensor itself can be say stuck to the fridge, but the wire           |
| 01:34:40   | is down on the floor, you know, where it's going to detect the leak.                                   |
| 01:34:44   | And so, you know, obviously, you know, that's not necessarily the best solution for these              |
| 01:34:49   | things, but it can be a very good solution for certain use cases.                                      |
| 01:34:55   | And also, I may or may not have started deconstructing what the [[Aqara Door and Window Sensor\|Aqara door sensors]], David, I may       |
| 01:35:01   | or may not be able to tell you that you can do the same kind of thing with a door sensor               |
| 01:35:05   | to know whether or not something is open or closed or on or off because it's a binary                  |
| 01:35:09   | sensor, it has exactly two states.                                                                     |
| 01:35:13   | And so, yeah, I've been playing with that a little bit because I wanted to know one                    |
| 01:35:17   | of my locks, it's a smart lock, but it's a dumb kind of smart lock in that I can open                  |
| 01:35:21   | it from the inside and it doesn't know that it's been unlocked.                                        |
| 01:35:25   | And like the way that you open it from the inside, you can latch it open.                              |
| 01:35:28   | And I didn't want to find out later that like the door was open or unlocked, but like I wasn't         |
| 01:35:33   | aware of it.                                                                                           |
| 01:35:34   | So I've been taking apart one of those to like put it inside the lock with some like battery           |
| 01:35:40   | springs and stuff, I'm kind of my own system, it's not particularly secure, it's far from              |
| 01:35:48   | pretty right now, but I'm going to like, I'm going to keep playing with it and I've got                |
| 01:35:53   | a 3D printer, I can 3D print something to go over the top of it once it's in some kind                 |
| 01:35:58   | of working order.                                                                                      |
| 01:35:59   | And hopefully we can share some pictures on the show, but it's quite interesting figuring              |
| 01:36:04   | this stuff out once you, once you really get into hacking it, but equally, it all just                 |
| 01:36:09   | works as is.                                                                                           |
| 01:36:10   | So yeah, I mean, I could have just bought a better smart lock.                                         |
| 01:36:13   | You gave me a good idea though, because we have an ongoing problem in our house with                   |
| 01:36:16   | the refrigerator door in that the way our refrigerators are made, it's two doors next                  |
| 01:36:21   | to each other and you kind of have to affirmatively press it in to close it.                           |
| 01:36:26   | It doesn't just close on its own.                                                                      |
| 01:36:28   | And occasionally somebody will go and not close it properly and it plays a small alarm                 |
| 01:36:34   | tone.                                                                                                  |
| 01:36:35   | But lucky me with tinnitus, I never hear it.                                                           |
| 01:36:38   | It's like, it's in the zone that I don't hear and it's not very loud.                                  |
| 01:36:41   | So if we're like in the other room, we won't, nobody will hear it.                                     |
| 01:36:44   | Yeah.                                                                                                  |
| 01:36:45   | Maybe, and these are car things are so cheap, maybe I'll get a couple of door sensors and              |
| 01:36:48   | just put one on each one.                                                                              |
| 01:36:49   | Yeah.                                                                                                  |
| 01:36:50   | The only problem is the door sensors don't sound an alarm of any kind.                                 |
| 01:36:54   | No, no, but that's, that's fine, but I can put an automation that says if it's open for                |
| 01:36:58   | a certain amount of time, send me a notification.                                                      |
| 01:37:01   | Yes.                                                                                                   |
| 01:37:02   | Though the only problem with that is, is because I've done this with home kit stuff                    |
| 01:37:08   | before, it's, it's kind of tricky to do with just home kit without putting anything else               |
| 01:37:12   | in there.                                                                                              |
| 01:37:14   | Because what you need to do is you need to put in a wait action and the wait actions                   |
| 01:37:18   | don't like, they don't run for very long at some point, it's just going to kill your                   |
| 01:37:21   | shortcut.                                                                                              |
| 01:37:22   | And so you need to do the wait action and then check if the door is closed at the end                  |
| 01:37:27   | of that.                                                                                               |
| 01:37:28   | Because it won't kill the automation from the door being open, but the window of time                  |
| 01:37:31   | for a fridge, like I could imagine that I could be rooting around in my fridge for like                |
| 01:37:35   | two or three minutes, like figuring out like, what do I actually want for dinner?                      |
| 01:37:38   | Oh, there's yogurt here.                                                                               |
| 01:37:39   | I should probably eat the yogurt.                                                                      |
| 01:37:40   | Yeah.                                                                                                  |
| 01:37:41   | But what am I having for dinner?                                                                       |
| 01:37:42   | You know, that, that whole thing.                                                                      |
| 01:37:44   | And so there's 30 seconds that an action can run for potentially is slightly problematic.              |
| 01:37:51   | But I'm sure there is a solution.                                                                      |
| 01:37:52   | Maybe, maybe our watch made those listeners have got some ideas for you that they could                |
| 01:37:55   | post in the thread in the forum.                                                                       |
| 01:37:56   | Yeah.                                                                                                  |
| 01:37:57   | Yeah.                                                                                                  |
| 01:37:58   | Let us know.                                                                                           |
| 01:37:59   | I think that's a real problem we need to solve.                                                        |
| 01:38:01   | But anyway, thank you for turning me on to the car stuff.                                              |
| 01:38:05   | It is, it's like, it's like toys and they're not that expensive.                                       |
| 01:38:08   | Once you get the hub, I think it was like $50.                                                         |
| 01:38:10   | So that's, that's, that's not inexpensive, but getting sensors at a very good value opens              |
| 01:38:16   | up a lot of options.                                                                                   |
| 01:38:17   | I don't have one under my chair yet.                                                                   |
| 01:38:19   | I think so far I'm good on that, but, but I am going to put one in my mailbox.                         |
| 01:38:24   | The question there is, will the range work?                                                            |
| 01:38:27   | You know, and                                                                                          |
| 01:38:28   | I mean, the range on [[Zigbee]] stuff is pretty good.                                                      |
| 01:38:32   | It may or may not work.                                                                                |
| 01:38:34   | If not, you could get an [[Aqara Hub#E1\|Aqara E1]] hub and like plug it in as close to your mailbox,                    |
| 01:38:41   | like house wise as you can, because that, that can just, you know, those hubs are very                 |
| 01:38:46   | cheap and, and that could be the solution for that particular thing.                                   |
| 01:38:52   | And it will extend the, if you set it up right, it could extend the [[Zigbee]] network for [[Aqara]]           |
| 01:38:57   | in your home, which would be quite good too.                                                           |
| 01:38:59   | Well, we will, I'll let you know, it's supposed to get delivered here in the next day or two.          |
| 01:39:05   | And so maybe next show I can report back on how I did with that.                                       |
| 01:39:08   | But we are the automators and you can find us over at relay.fm/automators.                       |
| 01:39:14   | We can get all our back catalogue.                                                                       |
| 01:39:17   | Thank you to our sponsors today, LinkedIn jobs, TextExpander, DEVONthink and Hover.                   |
| 01:39:23   | And we'll see you next time gang.                                                                      |
| 01:39:25   | Goodbye.                                                                                               |
| 01:39:26   | Bye.                                                                                                   |
| 01:39:27   | Bye.                                                                                                   |
