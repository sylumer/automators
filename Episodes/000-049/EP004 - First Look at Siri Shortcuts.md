---
status: "complete"
fc-date:
  year: 2018
  month: 08
  day: 17
fc-category: "podcast"
podcast: "Automators"
published: 2018-08-17
duration: 2514
formattedduration: "00:41:54"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/4"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators004.mp3"
episode: 4
title: "4: First Look at Siri Shortcuts"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David have been busy trying out the Siri Shortcuts beta. This episode looks closely at how Siri Shortcuts is better (and worse) than Workflow along with some hopes for where this is all heading.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 004 Discussion](https://talk.automators.fm/t/automators-4-first-look-at-siri-shortcuts/1431)

# Sponsors
- [[The Omni Group (Sponsor)|The Omni Group]] - Accomplish more every day.

# Show Notes
Because he can't help himself, David kicks off the show taking credit for the existence of Siri Shortcuts because … well … why not? Rose quickly gets on board with the idea. Then our hosts dive in deep on Siri Shortcuts, the banner automation features that will ship with iOS 12.  

In less than three minutes, Rose summons her iPhone Harry Potter style. David says lots of hand-wavy things about running betas and then they dive in deep on how Siri Shortcuts works.  

If you've ever wondered what a [[URL Schemes\|URL scheme]] is, Rose explains it brilliantly and then David whines about wanting more in automation. David attempts to explain all the ways Siri Shortcuts can work and delivers the usual disclaimers at the same time.  

Our hosts both like the idea that Siri shortcuts will make suggestions to people that normally wouldn't automate. Hooray! After celebrating this fact, David starts listing all the things he wants in addition to these cool new tools. That's a running theme through this episode. Our hosts seem to always want more.  

Rose and David eventually get into the subject of what's new with Siri Shortcuts. Rose has already automated her airplane boarding workflow. David comes up with an easy way to automate parenting teenagers. Eventually, they get around a hypothetical meeting shortcut. This is an important point because it marks the third podcast where David talks about meetings. (Although this is the first time that he uses the word "fun".)  

They take a break so David can talk about this episode's sponsor, OmniFocus 3, which they both love very much.  

David and Rose then talk about the various ways they are gaming their iPhones to create the Siri Shortcuts they want most. Our hosts then explain how this is only the first iteration of Siri Shortcuts and then they provide a laundry list of features they want immediately. With an irresponsible faith in Siri's voice to text engine, David wants Siri Shortcuts to grab variables from your verbal commands. Eventually, David digresses to fantasy workflows that expose exactly how big of a nerd he is.
* * *
- [Automators on the Internet](https://automators.fm/)
- [The Automators Forum](https://talk.automators.fm/c/episodes)
- [Soup Chef: Accelerating App Interactions with Shortcuts | Apple Developer Documentation](https://developer.apple.com/documentation/sirikit/soup_chef_accelerating_app_interactions_with_shortcuts)
- [Introduction to Siri Shortcuts - WWDC 2018 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2018/211)
- [Building for Voice with Siri Shortcuts - WWDC 2018 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2018/214)
- [Noodlesoft - Noodlesoft - Simply Useful Software](https://www.noodlesoft.com/)
- [Sharecuts](https://sharecuts.app/) - This is a great collection of Shortcuts which many people have already made.
- [Flight Time Shortcut](shortcuts://import-workflow?url=https://sharecuts.app/download/29EB004F-5BAF-4E2B-AAD3-D7652324C5B6.shortcut&name=Flight%20Time) - Rose's Shortcut for Flight Time, hosted on Sharecuts

# Transcription

| Time Index | Transcription                                                                                                              |
| :--------- | :------------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Automator is Episode 4, [[Shortcuts\|Siri Shortcuts]].                                                                                    |
| 00:03      | Hello, everyone. This is David Sparks along with Rose Mary Orchard. How you doing, Rose?                                   |
| 00:09      | I'm great. How are you today, David?                                                                                       |
| 00:11      | Good. We made it to Episode 4.                                                                                             |
| 00:13      | Yes. Very exciting. I like even numbers.                                                                                   |
| 00:16      | There you go. We had a lot of people writing into us and asking in forums about [[Shortcuts\|Siri Shortcuts]],                            |
| 00:23      | and we thought it made sense to give that a show because it's just such a big deal.                                        |
| 00:28      | It's kind of funny because you and I were developing this show before [[Apple]] announced [[Shortcuts\|Siri Shortcuts]],                      |
| 00:33      | so it seems like [[Apple]] got on board with automation right after we decided to.                                             |
| 00:37      | Yeah, definitely. I'm convinced that maybe somebody at [[Apple]]...                                                            |
| 00:41      | I'm not going to say that they were spying on my phone, but maybe they just got the vibe that I was super into automation, |
| 00:48      | talking to you a lot, and then they just went, yeah, yeah, this is a good year for it.                                     |
| 00:52      | On the other hand, they probably decide pretty early what's going to make it in.                                           |
| 00:56      | Well, it was always my goal that that [[Workflow]] team would see something from them, and we got it,                          |
| 01:02      | and that's what they call [[Shortcuts\|Siri Shortcuts]].                                                                                  |
| 01:04      | Yes.                                                                                                                       |
| 01:05      | It was announced at [[WWDC]], and it is basically... There's a couple elements to [[Shortcuts\|Siri Shortcuts]].                              |
| 01:13      | I think that's one of the problems.                                                                                        |
| 01:14      | Yeah.                                                                                                                      |
| 01:15      | [[Apple]] does a really good job of giving a generic name to something that then encompasses multiple products.                |
| 01:20      | Yeah.                                                                                                                      |
| 01:21      | I kind of got that here.                                                                                                   |
| 01:23      | Yes, definitely. Yeah, because essentially, [[Shortcuts\|Siri Shortcuts]] is actually split into two things.                              |
| 01:30      | Stuff that's baked into the operating system, and then there's the separate app that you can do multi-step things with.    |
| 01:36      | Yeah, and that separate app is what we would traditionally think of as the workflow app,                                   |
| 01:40      | and it's got now a nice clean white theme,                                                                                 |
| 01:44      | and we're going to talk about some limitations it got coming into the operating system                                     |
| 01:49      | and some additional features it got, so it has changed, I think, largely for the better going into the OS.                 |
| 01:56      | Yeah.                                                                                                                      |
| 01:57      | And then we got this cool thing you can do with your voice.                                                                |
| 02:00      | Definitely. The Siri integration, I think, is actually possibly my favourite part,                                          |
| 02:04      | just because it makes it so much easier to do so many things.                                                              |
| 02:07      | I mean, of course, it's not perfect, or there are limitations attached to this,                                            |
| 02:11      | but being able to say Accio iPhone and have your iPhone ping,                                                              |
| 02:15      | and yes, I stole that one from Katie, oh, Mac Power uses, sorry, Katie, or thank you, Katie,                               |
| 02:20      | but it's really nice just to be able to do things like that and have it work without you doing anything else.              |
| 02:28      | And we're going to be talking about it more once it releases,                                                              |
| 02:31      | but for now, it's a very limited out in beta.                                                                              |
| 02:34      | The people that have access to it are people with a developer account,                                                     |
| 02:37      | and that specifically requests access through the iOS 12 beta.                                                             |
| 02:41      | So first you have to be crazy enough to have a developer account,                                                          |
| 02:45      | then you have to be crazy enough to put the iOS 12 beta on your phone,                                                     |
| 02:49      | and then you have to, the third crazy is asking to run some beta software relating to automation.                          |
| 02:55      | So, and of course, Rose and I tick all three boxes.                                                                        |
| 02:59      | Oh, definitely.                                                                                                            |
| 03:00      | So we've been running it now for about a month almost now that it's been out,                                              |
| 03:05      | and we thought we'd just kind of give you some initial thoughts on it.                                                     |
| 03:09      | So we're definitely going to talk about this more as the product ships later and presumably September.                     |
| 03:16      | Yes.                                                                                                                       |
| 03:17      | It's really, really nice to get started with.                                                                              |
| 03:20      | I have actually heard from a few people, though I've not seen it with my own eyes,                                         |
| 03:23      | so I don't know whether or not to believe it, that some people have had invites to [[Shortcuts]],                              |
| 03:28      | and they have managed to install an iOS 11 devices as well.                                                                |
| 03:32      | So for people who are using perhaps their primary carry device is running iOS 11 as it ought to be,                        |
| 03:38      | not me, then they have apparently been able to run it,                                                                     |
| 03:42      | but I have to say I've not seen that with my own eyes, so I can't verify that.                                             |
| 03:46      | I had my first major iOS 11, iOS 12 problem.                                                                               |
| 03:50      | I mean, it's been a very stable beta for me,                                                                               |
| 03:52      | but just the other day I had to check in on my [[Canary]] home cameras,                                                        |
| 03:56      | and of course the video playback is all broken.                                                                            |
| 03:59      | Oh, no, that's bad.                                                                                                        |
| 04:01      | It's a pretty limited problem.                                                                                             |
| 04:04      | The app still works.                                                                                                       |
| 04:05      | I can still manage them, and I can still see the video on the website,                                                     |
| 04:09      | but it's just kind of funny how that stuff creeps up on you.                                                               |
| 04:12      | Yeah.                                                                                                                      |
| 04:13      | So let's talk a little bit about [[Shortcuts\|Siri Shortcuts]].                                                                           |
| 04:15      | One of the goals I always had, like workflow was great,                                                                    |
| 04:19      | but it's always been based on [[URL Schemes]].                                                                                 |
| 04:22      | Yeah.                                                                                                                      |
| 04:23      | Tell everybody what a [[URL Schemes\|URL scheme]] is.                                                                                       |
| 04:25      | Okay, so when you go to a website,                                                                                         |
| 04:27      | you probably type in HTTP colon slash slash or HTTPS colon slash slash,                                                    |
| 04:35      | and then, for example, macsparkyu.com or relay.fm.                                                                           |
| 04:38      | And if you don't, then the HTTP or HTTPS is automatically added for you.                                                   |
| 04:42      | But what that's telling your device is, hey, this is a website.                                                            |
| 04:46      | I need to go out on the internet and look for this.                                                                        |
| 04:48      | And the way that this works on iOS devices,                                                                                |
| 04:51      | at the very least and on the Mac as well,                                                                                  |
| 04:53      | the [[URL Schemes]] are supported on the Mac,                                                                                  |
| 04:55      | and a lot of people know that,                                                                                             |
| 04:57      | is you replace this HTTP or HTTPS with something.                                                                          |
| 05:01      | So for example, with the [[Workflow]] app,                                                                                     |
| 05:03      | it was workflow, and with the [[Shortcuts]] app, it's shortcuts.                                                               |
| 05:07      | And then you have things like [[Drafts]] 5,                                                                                 |
| 05:09      | which uses `drafts5://` or [[OmniFocus]],                                                                                       |
| 05:11      | which uses `omnifocus://`.                                                                                                      |
| 05:12      | People tend to use fairly logical names                                                                                    |
| 05:16      | to help find this stuff out,                                                                                               |
| 05:18      | though there are some weird ones out there,                                                                                |
| 05:20      | which you can find if you dig through the launch centre per application.                                                   |
| 05:23      | It's got a lot of them documented in there.                                                                                |
| 05:25      | Yeah, and this really goes back to our pal [[Greg Pierce]],                                                                    |
| 05:28      | the guy who developed [[Drafts]].                                                                                              |
| 05:30      | And he wanted, I think, and I don't know if [[Greg Pierce\|Greg]] listens,                                                                  |
| 05:34      | I may get this right or wrong,                                                                                             |
| 05:35      | but he has a separate app that does,                                                                                       |
| 05:38      | it's like a dictionary app called...                                                                                       |
| 05:40      | [[Terminology]].                                                                                                               |
| 05:41      | Terminology.                                                                                                               |
| 05:42      | And I believe he wanted the ability to roundtrip                                                                           |
| 05:45      | terminology definitions to his app [[Drafts]].                                                                                 |
| 05:47      | I mean, that was kind of the genesis of that.                                                                              |
| 05:50      | And he came up with the idea of, well, if we use these URL shortcuts.                                                      |
| 05:54      | And so I don't want to, I don't know,                                                                                      |
| 05:56      | I think [[Greg Pierce\|Greg]] deserves a lot of credit for coming up with the idea.                                                         |
| 06:00      | And then the developer community immediately adopted it                                                                    |
| 06:03      | because [[Apple]] has never done a very good job                                                                               |
| 06:05      | of allowing you to communicate between apps on your iPhone and iPad.                                                       |
| 06:09      | But the problem with that is I feel like we squeezed                                                                       |
| 06:13      | every ounce of life out of [[URL schemes]] that we ever could have.                                                            |
| 06:17      | And workflow was the kind of the epitome of that.                                                                          |
| 06:21      | That app did amazing things largely based on [[URL Schemes]].                                                                  |
| 06:25      | And it was just because the workflow team worked so hard                                                                   |
| 06:28      | at like digging down into the weeds and finding every way we could do it.                                                  |
| 06:32      | But the problem with that is it was never baked into the operating system.                                                 |
| 06:36      | And when [[Apple]] purchased workflow,                                                                                         |
| 06:38      | the most optimistic view we all had was wouldn't it be great                                                               |
| 06:42      | if they incorporated this into the operating system                                                                        |
| 06:44      | so developers could write code into their apps                                                                             |
| 06:46      | and not have to rely upon wonky [[URL schemes]] to make all this work?                                                         |
| 06:50      | Yes. Yeah.                                                                                                                 |
| 06:52      | Because I mean, there's a couple of limitations to [[URL schemes]] as well.                                                    |
| 06:55      | They can only be so long you can only have a few actions in there.                                                         |
| 06:58      | Otherwise they break things like that.                                                                                     |
| 07:00      | So they're not perfect.                                                                                                    |
| 07:02      | And then we got it.                                                                                                        |
| 07:03      | You know, they gave it.                                                                                                    |
| 07:04      | They deliver the goods for us.                                                                                             |
| 07:05      | We got some development in [[WWDC]].                                                                                           |
| 07:09      | They had specific sessions on incorporating                                                                                |
| 07:12      | [[Shortcuts\|Siri Shortcuts]] into your application.                                                                                      |
| 07:14      | I've watched them. I think you have two probably rows.                                                                     |
| 07:16      | Yeah, yeah, I have.                                                                                                        |
| 07:17      | And the sessions aren't super long.                                                                                        |
| 07:19      | And even if you're not a programmer,                                                                                       |
| 07:21      | you can kind of know your way around.                                                                                      |
| 07:23      | You can figure out what they're talking about.                                                                             |
| 07:25      | And a couple of things stood out for me.                                                                                   |
| 07:27      | They talked about really as two methods of implementation.                                                                 |
| 07:31      | And I'm going to go very shallow on this                                                                                   |
| 07:33      | because we're going to have a developer in once it releases                                                                |
| 07:35      | who's actually implemented it and can tell me everything I said wrong.                                                     |
| 07:38      | But, you know, basically they've got a very deliberate implementation                                                      |
| 07:44      | where you can feed data back out.                                                                                          |
| 07:47      | You know, like when you use a Siri shortcut                                                                                |
| 07:49      | and it gives you a box that gives you some sort of data                                                                    |
| 07:52      | from the automation you've just run.                                                                                       |
| 07:54      | They've got a method for that where you write a few lines of code                                                          |
| 07:57      | and they even have a little tool in [[Xcode]]                                                                                  |
| 08:00      | where you can create the responses.                                                                                        |
| 08:02      | And I felt like looking at it, it looked to me                                                                             |
| 08:05      | like it was relatively easy to implement.                                                                                  |
| 08:07      | And that's the most difficult method.                                                                                      |
| 08:09      | Do you want to talk about the other one?                                                                                   |
| 08:11      | I'm going to let you talk about it                                                                                         |
| 08:13      | because I think you've probably got a more shallow explanation.                                                            |
| 08:16      | As a developer, I tend to get pretty deep into it.                                                                         |
| 08:18      | Okay. Well, the other one is they're just tying into the existing access,                                                  |
| 08:23      | accessibility stuff.                                                                                                       |
| 08:25      | So that's why if you're running the beta,                                                                                  |
| 08:28      | you'll already see some apps are offering you [[Shortcuts\|Siri Shortcuts]]                                                               |
| 08:31      | because it's using literally built-in APIs that have already been accessed.                                                |
| 08:36      | So they've got an easy way which does real basic stuff                                                                     |
| 08:40      | like it allows you to start a podcast that you've already played                                                           |
| 08:44      | in your podcast player or something like that.                                                                             |
| 08:47      | And then they've got the delivery method                                                                                   |
| 08:49      | and then it's up to the developers to figure out how deep they want that                                                   |
| 08:52      | to run into their app.                                                                                                     |
| 08:53      | And it was giddy times in San Jose when they announced this.                                                               |
| 08:56      | So a lot of developers were running around talking about it.                                                               |
| 09:00      | I remember talking to [[Jason Snell]] and he had some correspondence                                                           |
| 09:05      | with a guy who writes the Starbucks app and said,                                                                          |
| 09:07      | wouldn't it be great if we could have a Siri shortcut                                                                      |
| 09:10      | to order our favourite drink at Starbucks?                                                                                  |
| 09:12      | And I think he was pretty excited about doing that.                                                                        |
| 09:14      | That's a good example.                                                                                                     |
| 09:16      | And all this stuff is intended to make automation easier                                                                   |
| 09:20      | and it gives you deeper hooks than you would ever have                                                                     |
| 09:23      | using just plain old [[URL Schemes]].                                                                                          |
| 09:25      | So that's the reason why Rose and I were so excited.                                                                       |
| 09:29      | And as we launched the show, we felt like,                                                                                 |
| 09:31      | wow, this is going to be great because not only are we going to have these                                                 |
| 09:35      | multi-step workflow type automations,                                                                                      |
| 09:37      | we're going to have really simple things like just getting your drink at Starbucks.                                        |
| 09:40      | Yeah.                                                                                                                      |
| 09:41      | And that's honestly, that's something that's,                                                                              |
| 09:43      | it's going to bring automation to the masses as well,                                                                      |
| 09:46      | which is something very important.                                                                                         |
| 09:48      | I mean, I know [[Workflow]] was very cheap.                                                                                    |
| 09:50      | If you're a nerd, it was, you know, peanuts, practically, price wise.                                                      |
| 09:54      | But if you had somebody like my mom, for example,                                                                          |
| 09:57      | who she is not a programmer, she's not nerdy or geeky at all.                                                              |
| 10:00      | She can figure her way around a spreadsheet where documents,                                                               |
| 10:03      | email, no problem.                                                                                                         |
| 10:05      | But automating something wouldn't necessarily occur to her.                                                                |
| 10:09      | And I, I mean, through to family sharing,                                                                                  |
| 10:11      | I installed workflow on her phone and set her up with a couple of things.                                                  |
| 10:14      | And she quite liked the idea, but it's still a bit of a stretch for her                                                    |
| 10:19      | to think about, okay, dragging and dropping the blocks.                                                                    |
| 10:22      | So having it built into the operating system and having the operating system                                               |
| 10:26      | then suggest, hey, you do this kind of often, do you want to make it a Siri shortcut?                                      |
| 10:31      | That, that's, that's what's going to make this amazing.                                                                    |
| 10:35      | Yeah.                                                                                                                      |
| 10:36      | And it gets smart because it has more information on you                                                                   |
| 10:39      | because it's in the operating system.                                                                                      |
| 10:41      | I've noticed like recently, like I've been, I rejected a call the other day                                                |
| 10:45      | while we were recording an episode of Mac power users.                                                                     |
| 10:48      | And then afterwards, I, you know, put my mic away, went downstairs,                                                        |
| 10:51      | poured a glass of water, and then [[Shortcuts\|Siri Shortcuts]] suggested,                                                                |
| 10:55      | do you want to call back, you know, as Daisy had called me,                                                                |
| 10:58      | said, do you want to call Daisy back now?                                                                                  |
| 11:00      | And I think it looked at the fact that I had moved after rejecting a call                                                  |
| 11:05      | and it made that suggestion.                                                                                               |
| 11:07      | So suddenly you're getting self suggestions.                                                                               |
| 11:09      | And then I'm not really entirely happy as we sit here with the method                                                      |
| 11:15      | for picking up these [[Shortcuts\|Siri Shortcuts]].                                                                                       |
| 11:17      | Yeah.                                                                                                                      |
| 11:18      | Because right now you have to go into the settings and then the Siri                                                       |
| 11:22      | and then it shows you a bunch of suggestions.                                                                              |
| 11:24      | Though certain apps, I have seen this in a couple of beta applications                                                     |
| 11:28      | and also others, you know, for example, the shortcuts app itself                                                           |
| 11:33      | as well as these betas, where from that app itself you can say,                                                            |
| 11:37      | hey, I want to add this to [[Siri]] and you can set your phrase right there.                                                   |
| 11:40      | You don't necessarily have to go into the settings to do it.                                                               |
| 11:43      | The going into the settings is a great way to set up a one step action                                                     |
| 11:47      | and that's available for everybody that's on the iOS 12 beta right now.                                                    |
| 11:50      | And even if you only have [[Workflow]], you can add workflows to [[Shortcuts\|Siri Shortcuts]]                                                |
| 11:54      | and trigger them via voice already.                                                                                        |
| 11:56      | Yeah.                                                                                                                      |
| 11:57      | Well, I think it's all great.                                                                                              |
| 11:59      | And I guess I'd say starting with those shortcuts, those voice based shortcuts,                                            |
| 12:03      | I didn't really do a good job of explaining.                                                                               |
| 12:05      | So your phone will see things that you've done and said, hey,                                                              |
| 12:09      | there's something you've done.                                                                                             |
| 12:10      | Would you like to do that again based on a [[Siri]] command?                                                                   |
| 12:13      | Yeah.                                                                                                                      |
| 12:14      | And going back to the hypothetical or drink order at Starbucks,                                                            |
| 12:18      | you can say, yes, I would.                                                                                                 |
| 12:20      | And then it'll make a suggestion for you, but you can say your own.                                                        |
| 12:24      | So you can say, whenever I say, juice me up,                                                                               |
| 12:27      | then order my favourite drink at Starbucks.                                                                                 |
| 12:29      | And then as you walk in the city and they're ready for you.                                                                |
| 12:32      | Yes.                                                                                                                       |
| 12:33      | And that's really powerful for a lot of people who are never going to bother                                               |
| 12:37      | with something like workflow.                                                                                              |
| 12:39      | So I think it's going to be great.                                                                                         |
| 12:42      | And I'm really excited that they're doing something that will hopefully bring this                                         |
| 12:47      | even more to the masses.                                                                                                   |
| 12:48      | You know, the theme of our show is automation for the people.                                                              |
| 12:51      | This is the best for the people you can be.                                                                                |
| 12:54      | I just hope that when it ships, it's discoverable enough because the people                                                |
| 12:58      | who are not going to load workflow are also not going to go digging through                                                |
| 13:01      | the preferences to find these things.                                                                                      |
| 13:03      | No, but I have to say, I'm very much a fan of being able to set your own phrase                                            |
| 13:07      | because I know, okay, I'm not a coffee drinker.                                                                            |
| 13:10      | So whatever I say now is probably not going to make sense,                                                                 |
| 13:12      | but ordering a venti caramel latte frappuccino iced coffee is quite a few words.                                           |
| 13:19      | That's a mouthful.                                                                                                         |
| 13:20      | And quite often the complaint that I hear about digital assistance in general,                                             |
| 13:24      | whether it's Siri or Alexa, sorry if I just triggered you,                                                                 |
| 13:28      | or your home from the search engine people,                                                                                |
| 13:32      | you have to use the right vocabulary and syntax.                                                                           |
| 13:35      | You have to say these words in this order and then it will understand you.                                                 |
| 13:39      | And if you say different words in a different order, it might not understand you.                                          |
| 13:43      | So what you need to do is to be able to make this more user friendly                                                       |
| 13:51      | is set your own phrases.                                                                                                   |
| 13:53      | So for example, juice me up.                                                                                               |
| 13:55      | You don't have to remember exactly what kind of coffee it is that I want again.                                            |
| 13:59      | You just give it your phrase and you're good to go.                                                                        |
| 14:01      | Yeah, I mean, that's [[Apple|Apple's]] solution.                                                                                     |
| 14:03      | I've never been a fan of the [[Amazon Echo]].                                                                                  |
| 14:07      | It has all these skills that you can pick up with third party devices,                                                     |
| 14:11      | but you have to remember the magical incantation that they've defined.                                                     |
| 14:15      | And I've got a few things connected to an [[Amazon Echo]],                                                                     |
| 14:19      | and I always forget what I'm supposed to say to get the information I want out of it.                                      |
| 14:23      | I think the fact that with [[Shortcuts\|Siri Shortcuts]],                                                                                 |
| 14:25      | you'll be able to define your own phrase will make it a lot easier for you to remember.                                    |
| 14:29      | Definitely.                                                                                                                |
| 14:30      | But now in addition to this Siri Shortcut by Voice,                                                                        |
| 14:38      | on what I would call one step automation,                                                                                  |
| 14:41      | where you just order the Starbucks,                                                                                        |
| 14:43      | you can also still run [[Workflow]],                                                                                           |
| 14:45      | but now it's called the [[Shortcuts]] app.                                                                                     |
| 14:47      | And like I said, it looks just like [[Workflow]].                                                                              |
| 14:50      | When you install it and you run it for the first time,                                                                     |
| 14:53      | it imports all of your workflows,                                                                                          |
| 14:55      | or at least I think all of them.                                                                                           |
| 14:57      | I have so many, but it looks like they all came over.                                                                      |
| 14:59      | I have a workflow and a shortcut,                                                                                          |
| 15:02      | which I will share in the show notes to help you count the number of workflows                                             |
| 15:06      | that you have or shortcuts that you have right now.                                                                        |
| 15:08      | Of course you do.                                                                                                          |
| 15:10      | And so I ran it and it works.                                                                                              |
| 15:12      | And it told me that I had the same number.                                                                                 |
| 15:14      | So I didn't lose any shortcuts.                                                                                            |
| 15:16      | That said, there are some actions that are missing.                                                                        |
| 15:20      | And because of that, certain things won't run anymore.                                                                     |
| 15:25      | So for example, there were some [[Slack]] actions there                                                                        |
| 15:28      | and they're not there anymore.                                                                                             |
| 15:30      | The question is whether or not they will come back.                                                                        |
| 15:32      | It does say in the release notes                                                                                           |
| 15:34      | available in the developer portal that some actions are missing.                                                           |
| 15:38      | They have not specified which actions are missing.                                                                         |
| 15:41      | And I think it's entirely possible.                                                                                        |
| 15:45      | I don't know anything I should point out,                                                                                  |
| 15:47      | but it's possible that these actions will come back.                                                                       |
| 15:50      | If you remember, some people will,                                                                                         |
| 15:53      | when [[Apple]] first bought workflow, several actions disappeared.                                                             |
| 15:57      | And I have heard through the grapevine                                                                                     |
| 16:00      | that it was basically everybody got a release                                                                              |
| 16:03      | from the workflow team if your app was in it                                                                               |
| 16:05      | and you were asked to sign it.                                                                                             |
| 16:07      | And if you signed it and sent it back,                                                                                     |
| 16:09      | then your actions stayed in there.                                                                                         |
| 16:11      | And if you did not, then your actions disappeared.                                                                         |
| 16:13      | And so a lot of people were very upset                                                                                     |
| 16:15      | that the [[Google Maps]] action, for example, disappeared.                                                                     |
| 16:17      | And that did return once, you know,                                                                                        |
| 16:20      | at some point in an update.                                                                                                |
| 16:22      | So I think it's possible that maybe there's a similar issue now                                                            |
| 16:25      | or maybe they are just having an issue.                                                                                    |
| 16:28      | Maybe if they're connecting via an API about rate limiting,                                                                |
| 16:30      | which is basically how many calls they are allowed to make                                                                 |
| 16:33      | per second minute, hour, day, week, month,                                                                                 |
| 16:37      | and they're possibly discussing that                                                                                       |
| 16:39      | with the companies in question, it's hard to say.                                                                          |
| 16:42      | It's just another example of the fact that                                                                                 |
| 16:44      | lawyers ruin everything.                                                                                                   |
| 16:46      | I wouldn't say that you ruin everything though, David.                                                                     |
| 16:48      | I'd say that you're trying to add some magic to it all.                                                                    |
| 16:51      | Yeah, so you're right. So some of your actions may be broken,                                                              |
| 16:56      | which will break those workflows.                                                                                          |
| 16:58      | But another good thing about the beta is                                                                                   |
| 17:00      | it does not delete [[Workflow]].                                                                                               |
| 17:02      | So I'm still able to run [[Workflow]],                                                                                         |
| 17:04      | so the apps or the actions that don't work                                                                                 |
| 17:06      | and [[Shortcuts\|Siri Shortcuts]] work in [[Workflow]].                                                                                     |
| 17:09      | But let's take a minute to talk about                                                                                      |
| 17:12      | the new stuff you can do,                                                                                                  |
| 17:14      | because once again, we're now at system level.                                                                             |
| 17:17      | We get access that the guys making workflow                                                                                |
| 17:19      | never would have dreamed of getting.                                                                                       |
| 17:21      | Yes, it is super exciting.                                                                                                 |
| 17:23      | So one of the first things that I did is                                                                                   |
| 17:25      | I just went digging and find out what I could do.                                                                          |
| 17:28      | And so, for example, you can toggle low power mode now                                                                     |
| 17:31      | as part of an action, which is so nice,                                                                                    |
| 17:34      | because I have, and this is an example we'll go into later,                                                                |
| 17:38      | I have a getting on a plane shortcut now.                                                                                  |
| 17:41      | And so as well as enabling low power mode,                                                                                 |
| 17:44      | you can do things like you could toggle your cellular data,                                                                |
| 17:47      | you can set error plane mode, you can set do not disturb,                                                                  |
| 17:50      | and you can just say, I want do not disturb on,                                                                            |
| 17:52      | or you can say, I want do not disturb                                                                                      |
| 17:54      | until for three hours, for example, things like that.                                                                      |
| 17:59      | If you live in a country where this is supported,                                                                          |
| 18:02      | like David does, you can send a request to payments                                                                        |
| 18:05      | through [[Apple Wallet]], which is very nice.                                                                                  |
| 18:08      | So if you have [[Apple Pay]] cash, you can do that.                                                                            |
| 18:11      | Unfortunately, I do not have [[Apple Pay]] cash,                                                                               |
| 18:13      | so I can't test it.                                                                                                        |
| 18:15      | I should just have one.                                                                                                    |
| 18:17      | So every time my kids text me, it just sends them $20,                                                                     |
| 18:20      | because that's usually the reason they're texting me.                                                                      |
| 18:23      | They want money.                                                                                                           |
| 18:25      | Maybe I should start messaging you.                                                                                        |
| 18:28      | Yeah, the idea of automating sending money                                                                                 |
| 18:31      | is actually kind of dangerous when you think about it.                                                                     |
| 18:34      | Well, I think if it's part of something else.                                                                              |
| 18:37      | So for example, if you were just, I don't know,                                                                            |
| 18:40      | cutting somebody's lawn, or you cut lawns for a living,                                                                    |
| 18:43      | and people paid you about [[Apple Pay]] cash,                                                                                  |
| 18:45      | then being able to queue it up and send somebody a message                                                                 |
| 18:47      | to say, hey, your lawn's been cut.                                                                                         |
| 18:49      | That will be $40, please.                                                                                                  |
| 18:50      | Here's a request for it.                                                                                                   |
| 18:52      | I have absolutely no idea how much it costs to cut somebody's lawn,                                                        |
| 18:54      | by the way.                                                                                                                |
| 18:55      | Then that would be pretty good.                                                                                            |
| 18:57      | And then it could add it to your invoicing software for you,                                                               |
| 19:00      | or whatever, if that's supported.                                                                                          |
| 19:02      | That would be pretty cool.                                                                                                 |
| 19:04      | And then automatically create a calendar event next month                                                                  |
| 19:06      | to go back and mother lawn again.                                                                                          |
| 19:08      | I mean, I can just start spinning on the lawn mowing business.                                                              |
| 19:12      | That is a common fake business.                                                                                            |
| 19:15      | And my screencast is Sparky's Long Hair.                                                                                   |
| 19:18      | I don't know if you ever noticed, but I have a whole thing.                                                                |
| 19:21      | And then I write up dummy invoices,                                                                                        |
| 19:23      | and I put really silly things in there, like, yeah, whatever.                                                              |
| 19:26      | If you freeze frame my screencast,                                                                                         |
| 19:28      | sometimes there's something kind of funny.                                                                                 |
| 19:30      | Yes.                                                                                                                       |
| 19:31      | And then another thing you can do that's a new system action,                                                              |
| 19:34      | never would have been possible before, is to find my iPhone.                                                               |
| 19:36      | So that's another really good one.                                                                                         |
| 19:38      | So you could create a workflow that included                                                                               |
| 19:40      | a find my iPhone routine.                                                                                                  |
| 19:42      | And I just think that's the kind of stuff                                                                                  |
| 19:44      | we would have never had before.                                                                                            |
| 19:46      | And it opens up all these windows.                                                                                         |
| 19:48      | Rose was talking about, you know, getting on an airplane                                                                   |
| 19:50      | and just, you know, running one workflow.                                                                                  |
| 19:52      | And it could not only turn off cellular radios,                                                                            |
| 19:56      | but it could maybe start up her favourite playlists.                                                                        |
| 19:59      | And, you know, just all the things are, you know,                                                                          |
| 20:02      | dim your screen so you save your battery.                                                                                  |
| 20:05      | And just all the things that you may want to do,                                                                           |
| 20:07      | as, you know, that you do manually,                                                                                        |
| 20:10      | as you sit on a plane, you can automate those                                                                              |
| 20:12      | going forward with this [[Shortcuts\|Siri Shortcuts]] app.                                                                              |
| 20:14      | And we're going to share a bunch of these once the app releases,                                                           |
| 20:17      | because I think both of us are interested in it.                                                                           |
| 20:19      | The one for me is watching a movie.                                                                                        |
| 20:22      | And it's not even going into the theatre.                                                                                  |
| 20:24      | It's like, I don't go to the theatre that often,                                                                           |
| 20:26      | but when the family sits down to watch a movie together,                                                                   |
| 20:29      | I hate getting interrupted.                                                                                                |
| 20:31      | So I'm putting one together that, you know,                                                                                |
| 20:34      | turns on do not disturb and does, you know,                                                                                |
| 20:37      | just does a whole bunch of stuff.                                                                                          |
| 20:39      | And then it turns itself off in two and a half hours,                                                                      |
| 20:42      | which is, you know, the length of any movie I'm going to watch.                                                            |
| 20:45      | And then I don't have to think about it.                                                                                   |
| 20:47      | You press the button once, because, you know,                                                                              |
| 20:49      | the problem of manually turning on do not disturb is                                                                       |
| 20:51      | you never remember to turn it off.                                                                                         |
| 20:53      | Yeah.                                                                                                                      |
| 20:54      | I mean, what's great is if you go to turn on do not disturb now                                                            |
| 20:57      | in iOS 12, this is an automation,                                                                                          |
| 21:00      | little tricks that you don't need anything to do                                                                           |
| 21:03      | in an event in your calendar.                                                                                              |
| 21:04      | And you force touch the do not disturb icon                                                                                |
| 21:07      | in the control centre in iOS 12.                                                                                           |
| 21:09      | It will suggest ending it when your current event ends,                                                                    |
| 21:13      | which is very, very nice.                                                                                                  |
| 21:14      | At the very least, if you're a calendar event,                                                                             |
| 21:16      | say, for example, meetings and your meetings tend not to overrun,                                                          |
| 21:20      | then you'll be fine.                                                                                                       |
| 21:21      | If they tend to overrun,                                                                                                   |
| 21:22      | then you might have to start adding some dummy events there.                                                               |
| 21:25      | But even like if you force press it,                                                                                       |
| 21:27      | it will tell you, you know,                                                                                                |
| 21:30      | do not disturb until I leave this place.                                                                                   |
| 21:32      | So let's say I did, I did go to the movies                                                                                 |
| 21:34      | and I'm sitting down in the theatre.                                                                                       |
| 21:35      | If I force press on the button,                                                                                            |
| 21:38      | it says it gives me an option to say do not disturb                                                                        |
| 21:40      | until I leave this place.                                                                                                  |
| 21:41      | And then as I walk out the door and get in my car,                                                                         |
| 21:44      | do not disturb turns itself off again.                                                                                     |
| 21:46      | It's really clever the way they've done this.                                                                              |
| 21:49      | And all of this stuff,                                                                                                     |
| 21:50      | you can fold into your [[Shortcuts\|Siri Shortcuts]].                                                                                     |
| 21:54      | I mean, I hope you're excited about this as you're listening                                                               |
| 21:56      | to it because it really is a massive opportunity                                                                           |
| 21:59      | to simplify the stuff and let the phone                                                                                    |
| 22:02      | and the iPad do the work for you.                                                                                          |
| 22:04      | Yes, it really, really is.                                                                                                 |
| 22:06      | And it's just really nice to be able to get all of this                                                                    |
| 22:10      | as an option because it makes it much more powerful.                                                                       |
| 22:15      | So for example, you can now have a meeting shortcut,                                                                       |
| 22:19      | which puts your phone in do not disturb                                                                                    |
| 22:21      | until the end of the calendar event.                                                                                       |
| 22:23      | You would have to get the calendar event                                                                                   |
| 22:24      | and get the end time of it to do that,                                                                                     |
| 22:26      | but you could then create a note                                                                                           |
| 22:27      | based on the title of the calendar event                                                                                   |
| 22:29      | and the notes in the calendar event.                                                                                       |
| 22:31      | And then at the end of the meeting,                                                                                        |
| 22:33      | you could have it parsed through the note for tasks,                                                                       |
| 22:36      | send the tasks to your task manager of choice,                                                                             |
| 22:39      | email the notes to everybody that was an attendee at the meeting                                                           |
| 22:42      | and disabled do not disturb.                                                                                               |
| 22:44      | Yeah.                                                                                                                      |
| 22:45      | That is within the realm of possibility.                                                                                   |
| 22:48      | And the fun thing is you could kick the whole thing off                                                                    |
| 22:50      | with a voice command.                                                                                                      |
| 22:52      | Oh, yes.                                                                                                                   |
| 22:53      | So that's...                                                                                                               |
| 22:54      | Yeah, magic incantation, I'm in a meeting                                                                                  |
| 22:58      | or let's get working or whatever clever phrase you want.                                                                   |
| 23:02      | So it's fun and actually helpful.                                                                                          |
| 23:05      | In addition to the system actions,                                                                                         |
| 23:07      | there's also some new actions in general.                                                                                  |
| 23:11      | The [[JavaScript]] one is interesting                                                                                          |
| 23:13      | when you talk about that one.                                                                                              |
| 23:14      | Right.                                                                                                                     |
| 23:15      | So we now have an action that says run [[JavaScript]] on a web page.                                                            |
| 23:18      | For some of you, you're going to be going,                                                                                 |
| 23:20      | oh, yeah, that's amazing.                                                                                                  |
| 23:21      | For everybody else,                                                                                                        |
| 23:22      | if you're familiar with the concept of [[Bookmarklet\|bookmarklets]].                                                                       |
| 23:25      | Now, these are little things that you can run.                                                                             |
| 23:27      | So for example, there's an [[Instapaper]] [[bookmarklet]].                                                                         |
| 23:30      | So instead of installing an extension in your browser,                                                                     |
| 23:33      | this is just a little thing that you save as a bookmark.                                                                   |
| 23:36      | And then when you're on a web page, you click on it                                                                         |
| 23:38      | and it pops up a box and it says it to Instapaper for you.                                                                 |
| 23:41      | This is all done with [[JavaScript]].                                                                                          |
| 23:43      | [[JavaScript]] is a very popular language for scripting.                                                                       |
| 23:46      | And now we can do that as part of a workflow.                                                                              |
| 23:49      | That is going to get pretty crazy.                                                                                         |
| 23:51      | I mean, [[Instapaper]] obviously hasn't worked for action,                                                                     |
| 23:54      | but you could do lots of other things.                                                                                     |
| 23:57      | So for example, I know there is, for example,                                                                              |
| 24:01      | one that can expand all of the comments on a post,                                                                         |
| 24:05      | on a [[Facebook]] page, for example,                                                                                           |
| 24:07      | which might be something that you need to do                                                                               |
| 24:09      | for some reason or another.                                                                                                |
| 24:11      | And it just opens up the realm of possibility even more                                                                    |
| 24:15      | because as well as connecting to an API,                                                                                   |
| 24:18      | which is perhaps one level of automation,                                                                                  |
| 24:20      | you could also just talk to the web page directly                                                                           |
| 24:23      | and script it by what you can see on the web page,                                                                          |
| 24:25      | which is really nice.                                                                                                      |
| 24:27      | This episode of The Automators is brought to you by The Omni Group,                                                        |
| 24:31      | makers of OmniFocus.                                                                                                       |
| 24:33      | OmniFocus 3 is out for iOS.                                                                                                |
| 24:36      | It's a fresh major update to the app                                                                                       |
| 24:38      | that's been the trusted gold standard for to-do apps                                                                       |
| 24:41      | for 10 years since the very first day of the app store launched.                                                           |
| 24:45      | In fact, OmniFocus was the very first app                                                                                  |
| 24:48      | I ever bought in the app store.                                                                                            |
| 24:50      | I love that app that much.                                                                                                 |
| 24:52      | OmniFocus version 3 is great.                                                                                              |
| 24:54      | It's added a lot of new features,                                                                                          |
| 24:56      | making the application even more powerful,                                                                                 |
| 24:58      | but at the same time, keeping it accessible.                                                                               |
| 25:01      | Some of my favourite new features are tags,                                                                                 |
| 25:03      | which are new in OmniFocus 3.                                                                                              |
| 25:05      | They had a powerful organisation tool,                                                                                     |
| 25:07      | so you can now have multiple vectors to organise your tasks                                                                |
| 25:11      | and ways to find them.                                                                                                     |
| 25:13      | I've been experimenting with tags.                                                                                         |
| 25:15      | I'm going to talk a lot more about those probably on this show                                                             |
| 25:17      | forward because they really are useful                                                                                     |
| 25:19      | for a task management system.                                                                                              |
| 25:21      | The forecast view now shows you the tasks                                                                                  |
| 25:24      | and calendar events in order,                                                                                              |
| 25:26      | so you can even better see what's coming up in your day                                                                    |
| 25:28      | and the just if needed.                                                                                                    |
| 25:30      | This is also a great reality check for you.                                                                                |
| 25:32      | If you look at that forecast view and you see                                                                              |
| 25:34      | you've got 50 items listed for the day plus appointments,                                                                  |
| 25:37      | that's a good warning sign.                                                                                                |
| 25:39      | You got a little problem. You need to scale that down.                                                                     |
| 25:41      | And for all of you automators,                                                                                             |
| 25:43      | OmniFocus 3 is super friendly to automation.                                                                               |
| 25:46      | They've got a way to automatically script                                                                                  |
| 25:49      | the creation of projects.                                                                                                  |
| 25:51      | I cover that both on MacSparky                                                                                            |
| 25:53      | and we'll probably cover that on this show,                                                                                |
| 25:55      | and I've even covered that in my OmniFocus Field Guide.                                                                    |
| 25:58      | And even better, they're going to adopt                                                                                    |
| 26:00      | the OmniFocus interpretation of [[JavaScript]]                                                                                 |
| 26:03      | into OmniFocus with this new version.                                                                                      |
| 26:05      | So you'll be able to write scripts                                                                                         |
| 26:07      | that work both on the Mac, iPad, and iPhone.                                                                               |
| 26:11      | This is a big boon to people that want to automate.                                                                        |
| 26:14      | The team at the Omni Group is always working                                                                                |
| 26:16      | to make OmniFocus better.                                                                                                  |
| 26:18      | In fact, head over to [inside.omnifocus.com](https://inside.omnifocus.com)                                                                                 |
| 26:21      | to get some of the articles showing you                                                                                    |
| 26:23      | even better ways to use their application.                                                                                 |
| 26:25      | And if you ever need help,                                                                                                 |
| 26:27      | you just contact their world-class support via email                                                                       |
| 26:29      | or just call them.                                                                                                         |
| 26:31      | Both Rose and I are very thankful to the Omni Group                                                                         |
| 26:33      | for sponsoring this podcast.                                                                                               |
| 26:35      | They sponsored it before they'd even heard an episode.                                                                     |
| 26:37      | That's how much they love us.                                                                                              |
| 26:39      | So go to [omnifocus.com](https://omnifocus.com) right now                                                                                           |
| 26:41      | and get started getting more done.                                                                                         |
| 26:43      | That's [omnifocus.com](https://omnifocus.com).                                                                                                      |
| 26:45      | Accomplish more every day with OmniFocus.                                                                                  |
| 26:48      | And the other thing you can do                                                                                             |
| 26:50      | is all those [[Shortcuts\|Siri Shortcuts]] stuff,                                                                                          |
| 26:52      | things we were talking about earlier,                                                                                      |
| 26:54      | those suggested shortcuts,                                                                                                 |
| 26:56      | like ordering your coffee or whatever,                                                                                     |
| 26:58      | can be folded into a [[Shortcuts\|Siri Shortcuts]] workflow.                                                                               |
| 27:02      | So this is bringing in a whole class of actions into it                                                                    |
| 27:06      | that you never would have had with workflow.                                                                               |
| 27:08      | Now, I'll tell you, using the beta,                                                                                        |
| 27:10      | the one thing that's weird about this is                                                                                   |
| 27:12      | shortcuts is not going to recommend it                                                                                     |
| 27:14      | unless you've already done it.                                                                                             |
| 27:16      | So even though I've got an unlimited number                                                                                |
| 27:18      | of, seemingly unlimited number of playlists                                                                                |
| 27:20      | in [[Apple Music]],                                                                                                            |
| 27:22      | it's not going to give me a suggestion to play,                                                                            |
| 27:24      | you know, my Bebop playlist                                                                                                |
| 27:26      | unless I have played it recently.                                                                                          |
| 27:28      | So you've got to kind of fiddle with it.                                                                                   |
| 27:30      | Like if you want to add something to your workflow,                                                                        |
| 27:33      | at least at this point in the beta,                                                                                        |
| 27:35      | you've got to go and like trigger it a few times                                                                           |
| 27:37      | for [[Siri]] to say, oh wait,                                                                                                  |
| 27:39      | this is something he likes to do.                                                                                          |
| 27:41      | And it's kind of weird the way it's,                                                                                       |
| 27:43      | I do feel like the whole voice recommendation thing,                                                                       |
| 27:47      | it could be more accessible,                                                                                               |
| 27:49      | but I'm not exactly sure I know how,                                                                                       |
| 27:52      | but I just feel my bones that it could be easier.                                                                          |
| 27:55      | What's quite nice is also in the Shortcuts app,                                                                            |
| 27:58      | so as a note for anybody that's not seen it yet,                                                                           |
| 28:02      | in workflow you would add actions                                                                                          |
| 28:04      | and the action list was on your left-hand side.                                                                            |
| 28:06      | In [[Shortcuts]], at least on the iPhone,                                                                                      |
| 28:08      | it's at the bottom instead.                                                                                                |
| 28:10      | And there's a search bar.                                                                                                  |
| 28:12      | But then you have, at the top, you have favourites,                                                                         |
| 28:14      | so it's any actions that you use a lot,                                                                                    |
| 28:16      | and you can say them as a favourite.                                                                                        |
| 28:18      | Then you have [[Siri]] suggestions, and then you have scripting.                                                               |
| 28:21      | And [[Siri]] suggestions are a list of all the things                                                                          |
| 28:24      | that have been suggested to [[Siri]] in recent times.                                                                          |
| 28:28      | So for example, I've had a little bit of a cold,                                                                           |
| 28:31      | so it's suggesting that I check my body temperature in health                                                              |
| 28:35      | because I've been looking at my temperature with a shortcut,                                                               |
| 28:38      | so it's triggered by [[Siri]].                                                                                                 |
| 28:40      | Yeah, but that's the kind of stuff that I think                                                                            |
| 28:43      | hopefully brings people in that haven't tried automation before.                                                           |
| 28:48      | When the phone is actually making suggestions to try and help you,                                                         |
| 28:52      | and you find that it's useful and relevant to you,                                                                         |
| 28:54      | which is exactly why you have to do it a few times before it shows up.                                                     |
| 28:58      | As opposed to giving someone a massive scrolling list                                                                      |
| 29:02      | of every playlist in iTunes, for example.                                                                                  |
| 29:05      | I get it, but I do think that is hopefully a gateway                                                                       |
| 29:10      | for a lot of people that haven't tried this before.                                                                        |
| 29:12      | Yes. I mean, what's really nice about the Siri suggested actions as well,                                                  |
| 29:15      | you could see this is an advantage or a disadvantage,                                                                      |
| 29:17      | depending on your point of view,                                                                                           |
| 29:19      | is these are fixed blocks that you drag in and you drop.                                                                   |
| 29:22      | So for example, if I drag in a music action,                                                                               |
| 29:24      | it's suggesting that I play Fleetwood Mac.                                                                                 |
| 29:26      | Great, I love Fleetwood Mac, but that's it.                                                                                |
| 29:29      | It just says play music from Fleetwood Mac, and I can't edit that.                                                         |
| 29:33      | Now, that's really good if you have somebody maybe who's a little bit scared                                               |
| 29:37      | that they're going to break something by tapping on it.                                                                    |
| 29:39      | I know that's happened to me before with [[Workflow]] and [[Shortcuts]].                                                           |
| 29:42      | I've accidentally dragged and dropped an action and put it somewhere I didn't mean to put it.                              |
| 29:46      | And so I think that's quite nice because then it doesn't look as fiddly.                                                   |
| 29:50      | It's not as off-putting.                                                                                                   |
| 29:52      | And you can, of course, especially with music,                                                                             |
| 29:55      | you can still use the built-in music actions to find music based on this or that                                           |
| 29:59      | or the other and then play it. That's possible.                                                                            |
| 30:02      | Yeah, there's some other limitations on it.                                                                                |
| 30:04      | I mean, this is the first iteration of this.                                                                               |
| 30:06      | Oh, yes.                                                                                                                   |
| 30:07      | And I do believe, I mean, I talked to Ari and some of the team at [[WWDC]].                                                    |
| 30:11      | I think [[Apple]] is paying very close attention to how many people are going to be using this.                                |
| 30:15      | And if they see that people are using automation and they're using [[Shortcuts\|Siri Shortcuts]],                                         |
| 30:20      | my guess is that team's going to get more resources                                                                        |
| 30:22      | and it's going to get even better in the future.                                                                           |
| 30:24      | One limitation that stands out for me is you can't really pass a variable to it through the [[Siri]] interface.                |
| 30:31      | Yeah.                                                                                                                      |
| 30:32      | One of my favourite automator or workflow workflows, as opposed to [[Shortcuts\|Siri Shortcuts]],                                          |
| 30:38      | I don't know, we're going to figure this out.                                                                              |
| 30:40      | But one of my favourite actions to do is sometimes clients ask me to form a new company                                     |
| 30:45      | and it's a complicated process. It's like 15 steps.                                                                        |
| 30:48      | I just want to make sure that I don't miss anything.                                                                       |
| 30:50      | You know, [Checklist Manifesto](https://atulgawande.com/book/the-checklist-manifesto/), great book.                                                                                 |
| 30:53      | Anyway, so I have a checklist and it's generated through an automation routine.                                            |
| 30:58      | It's a script that runs through [[Workflow]] and it goes into [[OmniFocus]] and creates my list for me, my project.                |
| 31:07      | But wouldn't it be great if I could do that through Siri and just say the name of the company                              |
| 31:11      | and it would parse the name out and fill in because when I run the workflow,                                               |
| 31:15      | one of the things that asked me is what's the name of the company?                                                         |
| 31:18      | Wouldn't it be great if I could just say that and it would just parse that out and fill it in for me?                      |
| 31:22      | It won't do that.                                                                                                          |
| 31:23      | No, not yet.                                                                                                               |
| 31:24      | But maybe we'll get that maybe in version two. We'll see.                                                                  |
| 31:28      | Yeah. Yeah, I hope so.                                                                                                     |
| 31:30      | There are some limitations on so far in the beta like the cloud access.                                                    |
| 31:35      | You're getting pushed into one folder.                                                                                     |
| 31:39      | Like I have a whole bunch of things like do with receipts when receipts come in.                                           |
| 31:45      | And I get them as PDF on my iPhone no matter which mail app you're using.                                                  |
| 31:51      | We did a show on that. But you get a mail and you want to save it as PDF.                                                  |
| 31:55      | And then you have [[Hazel]] on the back and fix it for you.                                                                    |
| 31:58      | I've got this action folder in iCloud where I put it in.                                                                   |
| 32:00      | All the [[Hazel]] rules are looking at that folder.                                                                            |
| 32:02      | But now I can't do that because it goes to the Shortcuts app.                                                              |
| 32:06      | And so by necessity, now you can create a sub folder under the Shortcuts app.                                              |
| 32:11      | So what I do is I have a Shortcuts app/action.                                                                       |
| 32:15      | So I have a second action folder in there.                                                                                 |
| 32:17      | And then on [[Hazel]], I've got a simple rule that looks to that new folder in the Shortcuts folder.                           |
| 32:23      | And anything that shows up in that folder, it moves over to the proper folder.                                             |
| 32:27      | Yeah.                                                                                                                      |
| 32:28      | And then it runs its rule.                                                                                                 |
| 32:29      | But it's like a kind of a workaround I had to do.                                                                          |
| 32:32      | And if you have automation that depends on you automatically filing things to very particular folders,                     |
| 32:37      | at least right now, you're not getting in.                                                                                 |
| 32:39      | Yeah.                                                                                                                      |
| 32:40      | The other way that you can work around this and I have done this for one particular folder of mine                         |
| 32:45      | is I have a [[Symbolic Link]].                                                                                                 |
| 32:48      | So this is something that you would do on a desktop operating system like Mac OS or Linux or Windows.                      |
| 32:58      | You can create a shortcut to a folder which is just like a,                                                                |
| 33:01      | if you click here, then you're going to go over here.                                                                      |
| 33:04      | And then you can create a symbolic link which is,                                                                          |
| 33:07      | I'm just going to summarise it, being deeper into the file system.                                                         |
| 33:10      | The files are pretending that they're in two places at once.                                                               |
| 33:12      | Yeah, you're kind of tricking the system.                                                                                  |
| 33:14      | Yeah.                                                                                                                      |
| 33:15      | And by having a symbolic link to this particular [[Dropbox]] folder in the [[iCloud]] folder,                                      |
| 33:20      | by the way, if it's crucial data, please make sure you have a backup                                                       |
| 33:23      | because syncing between two cloud systems, that's where you're going to break things.                                      |
| 33:26      | Something's going to get lost at some point.                                                                               |
| 33:30      | But that's what I'm doing.                                                                                                 |
| 33:31      | I have a [[Symbolic Link]] to that particular [[Dropbox]] folder                                                                   |
| 33:33      | because I really need to access to be able to drop files into that folder directly to this place                           |
| 33:39      | or that place, depending on lots of different factors.                                                                     |
| 33:42      | And it's much easier to do it before the file gets into the folder                                                         |
| 33:46      | versus after the file is in the folder.                                                                                    |
| 33:48      | So [[Hazel]] is not such a great solution for me there.                                                                        |
| 33:52      | So I'm still using Workflow and Shortcuts to do that now.                                                                  |
| 33:56      | Yeah, like, symlinks have given me troubles in the past.                                                                 |
| 33:59      | And I haven't used one now in several years because I had some data loss.                                                  |
| 34:02      | And so I feel like bitten by them.                                                                                         |
| 34:05      | So that's why I just use the [[Hazel]] one.                                                                                    |
| 34:09      | But that works for the kind of stuff I'm doing.                                                                            |
| 34:12      | It's not time-sensitive.                                                                                                   |
| 34:14      | Yeah.                                                                                                                      |
| 34:15      | All right.                                                                                                                 |
| 34:16      | The other little [[Dropbox]], you mentioned [[Dropbox]].                                                                           |
| 34:18      | [[Dropbox]] is not as friendly with [[Shortcuts\|Siri Shortcuts]].                                                                            |
| 34:21      | And this may be one of those fancy lawyer things where they're still figuring it out.                                      |
| 34:27      | But honestly, the access to system actions and the new actions like [[JavaScript]]                                             |
| 34:33      | and incorporating Siri Voice Command Shortcuts into your shortcut recipes,                                                 |
| 34:39      | it's really going to be pretty remarkable.                                                                                 |
| 34:42      | So just thinking out loud, I know you had one.                                                                             |
| 34:46      | Tell us through the one you have for the airplane.                                                                         |
| 34:48      | OK.                                                                                                                        |
| 34:49      | So it does do not disturb.                                                                                                 |
| 34:51      | So actually the very first thing I do as I get the calendar event,                                                         |
| 34:54      | and I make sure that it's the one for my flight,                                                                           |
| 34:56      | I use Tripit to add the flight to my calendar.                                                                             |
| 34:58      | That's a nice automation for you.                                                                                          |
| 35:00      | And so I then get the details.                                                                                             |
| 35:02      | And I say, do not disturb until this time.                                                                                 |
| 35:05      | I turn off cellular data because while there is no roaming within Europe,                                                  |
| 35:10      | depending on where I'm flying, I may have roaming charges when I get there,                                                |
| 35:15      | for example, for flight to the US.                                                                                         |
| 35:17      | And then it enables airplane mode and then enables low power mode.                                                         |
| 35:20      | And the final step it does is it opens overcast for me.                                                                    |
| 35:23      | It doesn't start playing it because I like to make sure that I've heard the flight attendant's                             |
| 35:28      | announcement, even though I've heard it a hundred times before.                                                            |
| 35:30      | They like it if you listen to it.                                                                                          |
| 35:32      | And I'm very willing to accommodate that.                                                                                  |
| 35:34      | And then once they've done that, I can just put on my headphones and start playing my podcast.                             |
| 35:39      | I've got this fantasy shortcut thing that I've been working on                                                             |
| 35:43      | where I really just want to get work done.                                                                                 |
| 35:45      | And please feel free to add on to this in the forums                                                                       |
| 35:49      | because I feel like this would be a fun one just to go crazy.                                                              |
| 35:52      | But the idea is I say something like now's the time or get it done.                                                        |
| 35:57      | And then the home kit locks would lock in my house.                                                                        |
| 36:01      | All the doors would lock.                                                                                                  |
| 36:03      | And then all the lights in the house, except in my office, would turn down.                                                |
| 36:07      | And all the lights in my office using hue would be, I guess I'd say red and white.                                         |
| 36:13      | So there'd be some red, like some urgency involved.                                                                        |
| 36:17      | Then my HomePod would start playing probably Star Wars.                                                                   |
| 36:23      | And then the main theme on a loop.                                                                                         |
| 36:27      | And then OmniFocus would open up to my flag tasks.                                                                         |
| 36:32      | And my phone would go and do not disturb.                                                                                  |
| 36:34      | That's where it's at right now.                                                                                            |
| 36:37      | But I bet somebody listening can help me add to this.                                                                      |
| 36:39      | I want to make the craziest get work done workflow ever.                                                                   |
| 36:43      | Well, you can definitely do that.                                                                                          |
| 36:44      | I presume because you now have two monitors that you want OmniFocus to open on your Mac, right?                            |
| 36:50      | So what you could do is you could actually have it save a text file into your actions folder.                              |
| 36:56      | And then when a [[Hazel]] sees that.                                                                                           |
| 36:58      | Have [[Hazel]] monitor it and then run the script.                                                                             |
| 37:00      | Yeah.                                                                                                                      |
| 37:01      | Yeah, that's a very, yeah, that's a good one.                                                                              |
| 37:03      | I like that.                                                                                                               |
| 37:04      | So now we've expanded beyond the iPhone to the Mac.                                                                        |
| 37:08      | And then that opens the whole world, right?                                                                                |
| 37:11      | Once you're in the Mac, you run an [[AppleScript]].                                                                           |
| 37:13      | You could put your calendar on the top half of your second monitor.                                                        |
| 37:19      | [[OmniFocus]] second half and open up like pages or, you know, whatever app I need.                                            |
| 37:24      | [[Ulysses]] that app I need to work in.                                                                                        |
| 37:26      | I can see this going places, Rose.                                                                                         |
| 37:28      | Oh, yeah, definitely.                                                                                                      |
| 37:29      | There's a bunch of possibilities here.                                                                                     |
| 37:31      | I mean, I'm thinking that what you need to do is like, I don't know, 20 minutes into it because                            |
| 37:36      | concentration usually starts to waver after like 20 minutes.                                                               |
| 37:39      | You need the chase scene.                                                                                                  |
| 37:41      | Okay.                                                                                                                      |
| 37:42      | You know where he's got the X-wing and he's flying through this.                                                           |
| 37:44      | Yeah.                                                                                                                      |
| 37:45      | That needs to start playing.                                                                                               |
| 37:48      | I think like 15 minutes in.                                                                                                |
| 37:50      | I need a break.                                                                                                            |
| 37:51      | So then I have some sort of device connected to my water.                                                                  |
| 37:57      | I have a kettle that boils water for me.                                                                                   |
| 38:00      | Maybe I turned that on.                                                                                                    |
| 38:02      | I have just a switch, you know, one of those [[iHome]] switches.                                                               |
| 38:05      | So then it starts boiling water and gives me an alarm to go down and make tea.                                             |
| 38:08      | Yes.                                                                                                                       |
| 38:10      | We could go so far with this.                                                                                              |
| 38:12      | Yeah.                                                                                                                      |
| 38:13      | That's just the fun thing.                                                                                                 |
| 38:15      | Taking it more to a more rational level and going back to Starbucks.                                                       |
| 38:18      | What if you went in Starbucks and it ordered your favourite coffee, put on your favourite                                    |
| 38:23      | morning song that you like to listen to and opened Apple news to your favourite news source.                                |
| 38:28      | So you could sit there and read the news, listen to your music and wait for your coffee.                                   |
| 38:31      | That is totally doable.                                                                                                    |
| 38:33      | Yeah, it is.                                                                                                               |
| 38:34      | And then I think the Starbucks app even sends you a push notification when your order is                                   |
| 38:38      | ready to collect.                                                                                                          |
| 38:40      | And so then you just grab it and you go.                                                                                   |
| 38:42      | And at that time it maybe then looks for the next bus or train or tram or whatever it is                                   |
| 38:49      | that you used to get to work to help you get there on time.                                                                |
| 38:52      | Well, that's a good overview.                                                                                              |
| 38:54      | We just wanted to talk about shortcuts and where it's going because we are excited about                                   |
| 38:57      | it.                                                                                                                        |
| 38:58      | We don't want to just come out of the blue and start talking about implementing it in                                      |
| 39:01      | a few months when it's out.                                                                                                |
| 39:03      | We'd like everybody else to be thinking about it because we're going to be looking in the                                  |
| 39:07      | forums at what you guys say about this stuff.                                                                              |
| 39:09      | And if you've got a request, we may just build the shortcut for you, you know, if you've                                   |
| 39:13      | got some crazy idea and let us know.                                                                                       |
| 39:17      | Yes.                                                                                                                       |
| 39:18      | And a big thanks to the people that have been posting in the forum, especially if you've                                   |
| 39:21      | been helping somebody out creating automations or enhancing them or fixing things that don't                               |
| 39:26      | quite work the way people expect is very much appreciated.                                                                 |
| 39:29      | And that's not just from us.                                                                                               |
| 39:31      | That's from everybody that sees it.                                                                                        |
| 39:33      | Yeah.                                                                                                                      |
| 39:34      | Well, I mean, this is a community.                                                                                         |
| 39:35      | We're excited and helping push automation forward.                                                                         |
| 39:39      | And the more people out there that get into it, I think the better it is for all of us.                                    |
| 39:43      | Definitely.                                                                                                                |
| 39:44      | All right.                                                                                                                 |
| 39:45      | We've got a couple of links in the show notes of some other locations.                                                     |
| 39:48      | Backstories did a really good article on shortcuts when that first got announced.                                          |
| 39:52      | Yeah.                                                                                                                      |
| 39:53      | That's something worth going to read.                                                                                      |
| 39:54      | I just wrote in summary, is this automation for the people?                                                                |
| 39:58      | I mean, are we getting what we want with the [[Shortcuts\|Siri Shortcuts]]?                                                             |
| 40:01      | Definitely.                                                                                                                |
| 40:02      | I think we may not be able to get everything right away, but the fact that this, you know,                                 |
| 40:06      | [[Apple]] didn't buy workflow and kill it.                                                                                     |
| 40:08      | They bought workflow and they made part of it into the operating system.                                                   |
| 40:14      | Yeah.                                                                                                                      |
| 40:15      | I'm ecstatic, basically.                                                                                                   |
| 40:17      | So we get what we want and hopefully we can help [[Apple]] bring it to everybody else.                                         |
| 40:22      | So I'm pretty certain my grandmother is going to start talking to [[Siri]] a bit more now.                                     |
| 40:27      | Excellent.                                                                                                                 |
| 40:28      | And the other thing for me is I feel like we got more than we could have ever asked for,                                   |
| 40:32      | you know, with them doing this.                                                                                            |
| 40:34      | I mean, it was the best acquisition in the history of [[Apple]], maybe short of next in my                                     |
| 40:37      | opinion.                                                                                                                   |
| 40:38      | But now that we've got more than we asked for, it's not nearly enough.                                                     |
| 40:44      | Hell yeah.                                                                                                                 |
| 40:45      | The more you give me on this stuff, the more I want.                                                                       |
| 40:48      | And now that I see how powerful it can be with just that much, I see, like I said, passing                                 |
| 40:54      | variables and adding logic.                                                                                                |
| 40:56      | I just want it to go so much further.                                                                                      |
| 40:58      | And I hope that the tools for developers are easy enough that they can make those donations                                |
| 41:03      | to Siri and that they can make their apps work with Siri and that this is just a really                                    |
| 41:07      | great rich ecosystem that goes way beyond what we could have ever done with [[URL Schemes]].                                   |
| 41:12      | Oh, yes.                                                                                                                   |
| 41:13      | Yes.                                                                                                                       |
| 41:14      | I'm very much hoping that we get all of that and more.                                                                     |
| 41:16      | They've given us an inch.                                                                                                  |
| 41:17      | We're going to circumnavigate the globe next.                                                                              |
| 41:19      | You can find us on Twitter @automatorsfm and the show notes, of course, will be at                                       |
| 41:26      | relay.fm/automators.                                                                                                |
| 41:27      | This is episode four.                                                                                                      |
| 41:29      | David, where can people find you on the Internet?                                                                          |
| 41:32      | Over at [macsparky.com](https://macsparky.com).                                                                                                     |
| 41:33      | Everything is there.                                                                                                       |
| 41:34      | Excellent.                                                                                                                 |
| 41:35      | And you are @macsparky on Twitter?                                                                                          |
| 41:37      | I am.                                                                                                                      |
| 41:38      | How about you?                                                                                                             |
| 41:39      | I am at [rosemaryorchard.com](https://rosemaryorchard.com) and I'm @rosemaryorchard on [Micro.blog](https://micro.blog) and Twitter.                                              |
| 41:44      | And we will see you in the forums to talk about the episode.                                                               |
| 41:47      | That's at [talk.automators.fm](https://talk.automators.fm).                                                                                              |
| 41:49      | See you next time.                                                                                                         |
