---
status: "incomplete"
fc-date:
  year: 2019
  month: 03
  day: 01
fc-category: "podcast"
podcast: "Automators"
published: 2019-03-01
duration: 3739
formattedduration: "01:02:19"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["John Siracusa"]
notetype: "episode"
showpage: "http://relay.fm/automators/18"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/relayfreeagents/automators018.mp3"
episode: 18
title: "18: Terminal Automation with John Siracusa"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Web programmer John Siracusa joins the Automators to share his thoughts on automation workflows, the best programming language for automation, and how automating your Mac desktop can become a road to madness.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[John Siracusa]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 018 Discussion](https://talk.automators.fm/t/118-ask-the-automators/15004)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Recall your best words. Instantly, repeatedly.
- [[Creative Next (Sponsor)|Creative Next ]] - The new podcast future-proofing creatives.

# Show Notes
- [John Siracusa (@siracusa) | Twitter](https://twitter.com/siracusa)
- [Hypercritical](http://hypercritical.co/)
- [Reconcilable Differences - Relay FM](https://www.relay.fm/rd)
- [Accidental Tech Podcast](http://atp.fm/)
- [Omni Group Automation](https://www.omni-automation.com/)
- [Simple sleep tracking with Shortcuts - Six Colours](https://sixcolours.com/post/2019/02/simple-sleep-tracking-with-shortcuts/)
- [Bare Bones Software | BBEdit 12](https://www.barebones.com/products/bbedit/)
- [Omni Group Automation](https://www.omni-automation.com/)
- [Noodlesoft - Noodlesoft - Simply Useful Software](https://www.noodlesoft.com/)
- [Use Siri Shortcuts - Apple Support](https://support.apple.com/en-us/HT209055)

# Transcription

| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to Automator is a show all about automating your Mac,                                            |
| 00:05      | your iPad, and everything else you own.                                                                  |
| 00:07      | I'm David Sparks and joined by my co-host, Rose Mary Orchard.                                            |
| 00:11      | How are you doing, Rose?                                                                                 |
| 00:12      | I'm great, David. How are you today?                                                                     |
| 00:14      | Excellent. We're really happy to have a guest with us today.                                             |
| 00:18      | Welcome to the show, John Siracusa.                                                                      |
| 00:20      | I'm happy to be here.                                                                                    |
| 00:21      | I'm ready to automate some stuff as soon as you guys tell me how.                                        |
| 00:23      | Well, that's the funny thing because John is a programmer by trade, John.                                |
| 00:31      | I guess you largely do web programming, right?                                                           |
| 00:33      | Yeah, that's what I've always done.                                                                      |
| 00:34      | What's your primary programming language you're working in?                                              |
| 00:38      | For years and years,                                                                                     |
| 00:40      | Perl was my main language for the server side,                                                          |
| 00:43      | and then, of course, client side.                                                                        |
| 00:44      | It's all the typical web technologies and languages.                                                     |
| 00:48      | But these days, I've been branching out a little bit more.                                               |
| 00:50      | I think the main thing that we've been working with server side                                          |
| 00:53      | is JavaScript, actually,                                                                                 |
| 00:55      | which is the same as JavaScript on the front end,                                                        |
| 00:57      | but not really because on the server side,                                                               |
| 00:59      | you get to use newer versions of language with all sorts of new features.                                |
| 01:01      | So I've been doing a Node.js on the server side for a while now.                                         |
| 01:05      | But there's still Perl there lurking in the mix                                                         |
| 01:07      | and whatever other things I have to do.                                                                  |
| 01:09      | Well, it's interesting because a lot of the listeners of our show are not,                               |
| 01:13      | they don't pay for their shoes programming computers,                                                    |
| 01:15      | but it's a lot of folks that want to get their computers                                                 |
| 01:19      | to do things automatically for them.                                                                     |
| 01:20      | And there's a growing flock of the people who listen to the show                                         |
| 01:24      | that are spending their time learning JavaScript                                                         |
| 01:27      | because it is becoming a tool of automation.                                                             |
| 01:30      | Yeah, which it kind of pains me                                                                          |
| 01:32      | because it's not the best language,                                                                      |
| 01:34      | but because it was the language for making web browsers do things,                                       |
| 01:39      | it became immensely popular                                                                              |
| 01:41      | because it was built into web browsers and it's just the snowball effect.                                |
| 01:44      | And now, there's always been a desire to not have two different languages                                |
| 01:48      | on the server side and the client side.                                                                  |
| 01:50      | So it's through a series of improbable, ridiculous events,                                               |
| 01:54      | this language, JavaScript, which is getting better,                                                      |
| 01:56      | but it's still very strange and awkward and not great,                                                   |
| 02:00      | quote unquote, wins because it has to be everywhere.                                                     |
| 02:03      | And so, you know, we are all, everyone's learning it                                                     |
| 02:07      | or forced to learn it or kind of wants to learn it                                                       |
| 02:10      | because you can run it everywhere and make it do all sorts of things.                                    |
| 02:13      | And for automation, it's real nice because JavaScript-based automation,                                  |
| 02:18      | as it's being created by like the Omni groups,                                                           |
| 02:21      | I think they called it Omni Java.                                                                        |
| 02:23      | Is that what they call it, Rosa?                                                                         |
| 02:24      | I think they're just calling it Omni Automation                                                          |
| 02:27      | and they're using JavaScript for it.                                                                     |
| 02:28      | Yeah, but the advantage is if you write that script,                                                     |
| 02:32      | it's going to work on iOS devices and the Mac.                                                           |
| 02:35      | And, you know, like, whereas if you spend a time learning [[AppleScript]],                                  |
| 02:38      | it's only one platform.                                                                                  |
| 02:39      | Yeah, that's another accident in history.                                                                |
| 02:41      | Like, so Apple didn't want to allow programming languages,                                               |
| 02:45      | basically, to run on, you know, on the phone or on iOS or on anything like that.                         |
| 02:50      | They didn't want to give you basically an ID                                                             |
| 02:51      | where you can write your own software                                                                    |
| 02:52      | because they didn't want to create like a second tier app store                                          |
| 02:55      | or various other reasons why they wouldn't want you to be able to sell a program.                        |
| 02:59      | Lots of the people write programs that then run on your phone.                                           |
| 03:01      | Like, you know, you could use it as a side loading mechanism to anyway.                                  |
| 03:05      | But they did let you run JavaScript                                                                      |
| 03:07      | because you have to be able to use [[Safari]] and [[Safari]] run JavaScript                                      |
| 03:10      | and you could put a web view into your application,                                                      |
| 03:12      | which could then run JavaScript.                                                                         |
| 03:14      | So JavaScript has always been like kind of the back door                                                 |
| 03:16      | into programmability on iOS.                                                                             |
| 03:19      | And, you know, I think we've moved on from that now                                                      |
| 03:21      | where it's more officially supported along with other languages,                                         |
| 03:23      | but it's another weird accident of history and, you know, corporate policy that,                         |
| 03:29      | yeah, we're using JavaScript to automate everything                                                      |
| 03:31      | because it's the same everywhere                                                                         |
| 03:32      | and it's because it's the thing that works on the phone and the iPad.                                    |
| 03:36      | So we should have asked Sal to go in about this,                                                         |
| 03:38      | but I don't even, is it possible?                                                                        |
| 03:40      | Because I don't think iOS supports Apple live-ins at this point.                                         |
| 03:43      | Are we past the point that Apple live-in support could be added?                                         |
| 03:47      | I don't know.                                                                                            |
| 03:47      | You're never past the point, but I'm going to say I don't see that happening.                            |
| 03:51      | Yeah.                                                                                                    |
| 03:52      | So what do you think of JavaScript as a programming language for automation?                             |
| 03:56      | I mean, the advantages it has is that it's fairly high level.                                            |
| 03:59      | So you're not dealing with like pointers or memory management or anything like that.                     |
| 04:05      | And it is also familiar to a lot of people because they've seen it                                       |
| 04:08      | in their web browsers for so many years.                                                                 |
| 04:11      | And there's, you know, Node.js on the server and there's various versions                                |
| 04:13      | of JavaScript and web browsers.                                                                          |
| 04:15      | And so if you're asked to automate something with some language                                          |
| 04:20      | and you had to guess what language is reasonably well suited to this task                                |
| 04:24      | that people might know, JavaScript is the answer, right?                                                 |
| 04:27      | So it could be much worse.                                                                               |
| 04:29      | Let's put it that way.                                                                                   |
| 04:31      | Trying to automate things with C would really close the door on a lot of people.                         |
| 04:35      | JavaScript, you can more or less pick up if you've done any programming                                  |
| 04:39      | in any language and it's very friendly.                                                                  |
| 04:41      | Like it won't, whatever you write will do something.                                                     |
| 04:44      | It won't crash your program.                                                                             |
| 04:45      | It may not do what you expect, but it's pretty user friendly.                                            |
| 04:49      | So if you are picking the perfect automation language, what would you, you know,                         |
| 04:54      | say that somebody put you in charge of the universe for a day?                                           |
| 04:56      | And so you pick the language that was going to be the cross-platform                                     |
| 04:58      | automation language, ideally Windows and Android as well.                                                |
| 05:02      | What language would you pick?                                                                            |
| 05:04      | It's difficult because there's no, all the existing languages have been shaped                           |
| 05:10      | by the environments that they grew up in, sort of, so that people,                                       |
| 05:14      | someone will make a language with an idea of what purpose is going to use                                |
| 05:16      | and what purpose is going to be used for.                                                                |
| 05:18      | And if it succeeds and if we've heard of it and know the name of it,                                     |
| 05:21      | it's probably because it did something useful in some realm                                              |
| 05:24      | and was shaped by that area.                                                                             |
| 05:26      | And so not many languages other than, say, AppleScript were designed                                     |
| 05:31      | from the start as automation languages and succeeded in that realm.                                      |
| 05:35      | I don't know if Tickle was, I don't remember Tickle was used for automation                              |
| 05:38      | a lot, but I don't know if it was designed for that.                                                     |
| 05:41      | But yeah, all the other languages out there are used for other purposes.                                 |
| 05:45      | And you're mostly looking for one that is a high level language                                          |
| 05:50      | that is friendly and has simple syntax and, you know, the old pro motto,                                 |
| 05:56      | getting back to the pro stuff, make easy things easy, hard things possible.                              |
| 05:59      | I don't know if that's a pro thing, but it's something                                                   |
| 06:01      | that was spoken about in the pro community a lot.                                                        |
| 06:03      | I would be tempted to say, oh, geez, I'm such a Perl-head.                                               |
| 06:08      | I'd be tempted to say it, Perl six, except Perl six is fiendishly complicated,                         |
| 06:13      | but it does make easy things easy.                                                                       |
| 06:15      | And I think it's a way better language than JavaScript.                                                  |
| 06:17      | But nobody knows Perl six because it hasn't been very successful                                        |
| 06:21      | and as much greater competition.                                                                         |
| 06:23      | So I would say either a language that doesn't exist                                                      |
| 06:26      | or a fantasy alternate universe where Perl six became immensely popular,                                |
| 06:30      | despite the fact that it is incredibly complicated                                                       |
| 06:32      | because you can write baby Perl six and it will work fine.                                              |
| 06:35      | And it's a better language than JavaScript by far.                                                       |
| 06:38      | I think that's the strange dichotomy of this issue is that you want a powerful language,                 |
| 06:45      | but you also with automation by its definition,                                                          |
| 06:48      | you're going to have a lot of people that are going to start playing with it                             |
| 06:51      | that are not necessarily programmers.                                                                    |
| 06:53      | I mean, I used to do a ton of automation and Microsoft word basic.                                       |
| 06:57      | You know, as a lawyer, I wrote tons of automated forms and things with the basic,                        |
| 07:04      | which, you know, I thought we would stop using that in the 80s.                                          |
| 07:08      | But it just, I think when you're coming up with an automation language,                                  |
| 07:13      | you also have to make it accessible enough for people that folks                                         |
| 07:16      | that don't work in it every day can make something happen with it.                                       |
| 07:19      | Yeah. And I think really any high level language where you're just,                                      |
| 07:24      | you don't have to concern yourself with the details of the computer.                                     |
| 07:27      | And it's mostly like variables, conditionals, loops and function calls                                   |
| 07:31      | with a reasonable syntax.                                                                                |
| 07:33      | That's fine.                                                                                             |
| 07:33      | Like people who just want to automate something,                                                         |
| 07:35      | they'll learn the minimum they need to know to call functions,                                           |
| 07:38      | maybe to write functions and to do loops and conditionals.                                               |
| 07:41      | And almost every high level language passes that bar.                                                    |
| 07:44      | But if you're looking for a really good language,                                                        |
| 07:47      | you want it to be not particularly awkward to write functions with no strange limitations.               |
| 07:52      | You also don't want weird corner cases like JavaScript is full of them.                                  |
| 07:55      | The fact that he uses floating point numbers behind the scenes,                                          |
| 07:57      | something you usually don't have to think about,                                                         |
| 07:59      | but it comes back to bite you as soon as you start dealing with very large numbers                       |
| 08:02      | and realise you're losing precision.                                                                     |
| 08:03      | And you wonder why weird stuff is happening in your program.                                             |
| 08:06      | Sort of the day-to-day hygiene of how easy is it to manipulate strings                                   |
| 08:12      | and how many gotchas are there.                                                                          |
| 08:13      | Like JavaScript is full of just sharp edges and weird things due to history.                             |
| 08:18      | And then the advanced versions of JavaScript are very complicated,                                       |
| 08:22      | like destructuring syntax.                                                                               |
| 08:25      | Try explaining that to a beginner.                                                                       |
| 08:26      | It's a language that gets hard really fast and has lots of sharp edges.                                  |
| 08:31      | But you can basically assign to variables and do loops.                                                  |
| 08:34      | And the conditionals and comparisons are a little bit tricky                                             |
| 08:37      | because of their weird type system and call functions.                                                   |
| 08:40      | And we muddle through.                                                                                   |
| 08:42      | I don't know if I've ever heard you talk about your opinion                                              |
| 08:45      | on I guess what I would call Lego automation,                                                            |
| 08:48      | the automator or Siri shortcuts model where you stack blocks                                             |
| 08:52      | and make basic automations that way.                                                                     |
| 08:55      | Are you a fan of that?                                                                                   |
| 08:57      | I mean, personally, I would much prefer just to be able to write a program.                              |
| 09:02      | But that's not, everyone's not a programmer.                                                             |
| 09:04      | So you can't make that the basis of your automation or it'll just be too closed off.                     |
| 09:09      | And practically speaking, sometimes when I want to automate something,                                   |
| 09:12      | I will briefly think, oh, this is something I should be able to do                                       |
| 09:15      | in automator or in AppleScript.                                                                         |
| 09:18      | But very quickly, I will run up against a situation                                                      |
| 09:22      | where I can't find a block that does what I want                                                         |
| 09:24      | or I see how it has to combine these five blocks to do something.                                        |
| 09:26      | And it seems like a Rube Goldberg machine and I get frustrated.                                          |
| 09:29      | But for other people, if they don't have any other outlet,                                               |
| 09:31      | the blocks are all there are and it's reasonable.                                                        |
| 09:34      | I just I just question it as the like there needs to be more than that, right?                           |
| 09:38      | If you think about how it is slash was on the Mac, automator exists,                                     |
| 09:42      | but also AppleScript exists.                                                                            |
| 09:44      | And you can combine the two.                                                                             |
| 09:46      | If you just had automator and said, this is that's it,                                                   |
| 09:48      | that's the automation solution for the Mac, you'd be like, that's great and all.                         |
| 09:51      | But sometimes I just want to do something a little bit different.                                        |
| 09:53      | Oh, well, then just combine these automator blocks                                                       |
| 09:56      | and increasingly Byzantine ways.                                                                         |
| 09:59      | And you could ask, I would like to be able to just write some AppleScript.                              |
| 10:02      | And maybe I can make that into an ordinary block or use automator                                        |
| 10:04      | to call out to that AppleScript.                                                                        |
| 10:05      | Or maybe I'll just write the whole thing in AppleScript                                                 |
| 10:07      | because I've moved beyond automated.                                                                     |
| 10:08      | It always has to be something more.                                                                      |
| 10:10      | Otherwise, you're using Legos is kind of a leading example.                                              |
| 10:15      | But imagine if you if the analogy was it's like Lego blocks.                                             |
| 10:19      | All you you only have five blocks to choose from.                                                        |
| 10:22      | And they're really weirdly shaped.                                                                       |
| 10:24      | It's hard to make like an X-Wing fighter.                                                                |
| 10:26      | If you just have a really wide, flat piece, a very skinny, long piece                                    |
| 10:31      | and a big, huge block and like, OK, make an X-Wing.                                                      |
| 10:34      | I'm like, these are my only pieces.                                                                      |
| 10:35      | Yeah, but you can do it just, you know, keep repeating the pieces                                        |
| 10:39      | and it just it doesn't work out.                                                                         |
| 10:42      | Yeah, you know, that that's a good example.                                                              |
| 10:44      | And honestly, there are things in automator                                                              |
| 10:47      | and to a lesser extent, Siri shortcuts where you can't make the thing                                    |
| 10:51      | no matter how Rube Goldberg you go.                                                                      |
| 10:53      | I mean, there are certain limits to what you can do with those.                                          |
| 10:56      | And when we talk to our listeners, we hear about that.                                                   |
| 10:58      | And that's the folks that suddenly get interested in learning to program                                 |
| 11:02      | JavaScript or AppleScript, depending on, you know, what platforms they're on.                           |
| 11:06      | And they want to go to that next level.                                                                  |
| 11:08      | But I do think that a failing of the Lego automation apps is is the power level.                         |
| 11:15      | There is a ceiling on them and I would like to see that ceiling get higher.                              |
| 11:20      | Yes. And there's the flip side of that, too,                                                             |
| 11:22      | because it's not just like the person who's writing the automation.                                      |
| 11:24      | What are they able to do?                                                                                |
| 11:26      | If you are writing an application, you have to make your application                                     |
| 11:30      | an automated bull and the ways you do that influence how it can be used.                                 |
| 11:34      | If the only way you can make your thing                                                                  |
| 11:36      | automatable is by including like hooks for shortcuts on iOS or whatever.                                 |
| 11:40      | That's more limited than the old AppleScript dictionary way,                                            |
| 11:43      | where you could essentially define any number of functions and                                           |
| 11:46      | and, you know, nouns and verbs for your application that suit your application.                          |
| 11:50      | And it was you could design your own API and because you're doing it                                     |
| 11:53      | with Apple events and AppleScript, the limit is only your imagination.                                  |
| 11:57      | What nouns are there in your application?                                                                |
| 11:59      | What verbs can you do to them?                                                                           |
| 12:00      | Whereas shortcuts is much more limited in how much you can expose.                                       |
| 12:03      | And every time you think of something new, you have to basically make that.                              |
| 12:07      | It's it's not as it's not as modular as being able to just define.                                       |
| 12:11      | I don't know what they're called in AppleScript,                                                        |
| 12:12      | but like the things are in the AppleScript dictionary,                                                  |
| 12:13      | the various functions that you can call and action.                                                      |
| 12:17      | Yeah, I think they're library entries or something like that.                                            |
| 12:19      | But yeah, whatever the whatever the equivalent of nouns and verbs are                                    |
| 12:22      | that you can just keep defining those and you don't have to make                                         |
| 12:25      | any decisions ahead of time about how they're going to be combined.                                      |
| 12:28      | It's it's very flexible from the college perspective,                                                    |
| 12:30      | shortcuts are far less flexible.                                                                         |
| 12:32      | So you're out that someone's out there trying to write an automation.                                    |
| 12:35      | Chances are good.                                                                                        |
| 12:36      | They want they might want to call upon the applications on their systems                                 |
| 12:40      | to do work for them.                                                                                     |
| 12:41      | And the vocabulary they can use to speak to those applications                                           |
| 12:45      | is necessarily limited by whatever technology the application creator                                    |
| 12:49      | had to use to expose that functionality.                                                                 |
| 12:52      | We're saying this a lot on iOS right now because developers are donating                                 |
| 12:56      | all of these fabulous shortcuts to Siri and tons of them involve the clipboard                           |
| 13:00      | because there is no way to pass input and output to these options.                                       |
| 13:04      | And so what you're doing is you're telling character update the weather                                  |
| 13:07      | and then, oh, but can you set my my clipboard to the weather please?                                     |
| 13:11      | That's an extra step so that then you can get it and you can manipulate it.                              |
| 13:14      | And I'm hoping that we're going to see an improvement to that this [[WWDC]].                                 |
| 13:18      | Yeah, I just I just saw that the other day I was looking Dan Moran's                                     |
| 13:20      | automation who's doing some shortcuts for sleep tracking.                                                |
| 13:23      | And, you know, his solution was to call something to write the current time out                          |
| 13:27      | to a text file and then have something else read the text file                                           |
| 13:30      | and get the time from it.                                                                                |
| 13:31      | And it's like, oh, like you can get it done.                                                             |
| 13:34      | But that's that's that's why I keep saying Rube Goldberg.                                                |
| 13:36      | It's you you would never choose to do it that way.                                                       |
| 13:39      | Like in if you're writing an actual program or an AppleScript,                                          |
| 13:42      | like very few AppleScripts, I imagine, take a value and write it to a file on disk                      |
| 13:46      | and then invoke a function to read that file back from this because it's all                             |
| 13:50      | or even worse, use the system clipboard as a temporary holding place                                     |
| 13:54      | rather than memory, you know, for I mean, it's bananas.                                                  |
| 13:58      | You know, you do what you have to do.                                                                    |
| 14:00      | Like a lot of these things, that's why I say almost anything is possible.                                |
| 14:03      | If, you know, if it's Turing complete, if you can figure out some sort of abstraction                    |
| 14:08      | of like, let's just consider that we have one variable.                                                  |
| 14:10      | It's like towers of an eye like one one place to store things.                                           |
| 14:12      | And it's the clipboard we can do basically anything we want.                                             |
| 14:15      | But the series of saves from the clipboard and put into a variable                                       |
| 14:19      | and concatenate another thing and put it back in the clipboard and split it.                             |
| 14:21      | You can make a little mini language inside the clipboard to pack your data                               |
| 14:24      | into the clipboard and unpack it on the other side.                                                      |
| 14:25      | And it's just it's madness.                                                                              |
| 14:27      | Like that's not the system is not helping you there.                                                     |
| 14:29      | Well, if there's if there's one bit of sunlight here, it's that even since they                          |
| 14:34      | released the most recent version of iOS, the series shortcut team has done several updates.              |
| 14:39      | They've got one right now in beta where they're giving you more access to Apple notes.                   |
| 14:43      | It seems like this is something that's very actively developed.                                          |
| 14:46      | So I hope that they have a big whiteboard with a lot of these ideas covered.                             |
| 14:50      | Yes, I'm very much hoping so, too.                                                                       |
| 14:52      | And I'm hoping that that whiteboard is magnetic and that somebody could just sort of sneak in there      |
| 14:56      | and stick our little feature requests on it in the same one.                                             |
| 14:59      | So that, you know, that's just like, oh, yeah, yeah, that's that thing.                                  |
| 15:02      | Oh, yeah, I'm sorry.                                                                                     |
| 15:04      | Did we talk about that?                                                                                  |
| 15:05      | We must have talked about it.                                                                            |
| 15:06      | I'll just implement it.                                                                                  |
| 15:07      | I'm very much hoping that happens for us.                                                                |
| 15:09      | Well, those radars.                                                                                      |
| 15:11      | But I do think, John, as a point, I don't know if we're ever going to get to                             |
| 15:14      | AppleScript level of customisability and scripting on iOS.                                              |
| 15:20      | Yeah, well, it's a simpler time with Apple events where the, you know,                                   |
| 15:23      | the idea that the computer was one big trusted environment, kind of like the                             |
| 15:29      | unique systems of old before the internet spread everywhere that just like,                              |
| 15:32      | well, once you're on your Mac, you can send Apple events to any application                              |
| 15:35      | on your Mac because you are on your Mac and you and all the applications on it                           |
| 15:39      | are all in one big, happy family.                                                                        |
| 15:40      | And what are your security concerns?                                                                     |
| 15:42      | And of course, you know, in the agency, we understand that, you know,                                    |
| 15:46      | click on something in a web browser that causes something to run that runs an                            |
| 15:48      | Apple event that has to keychain to dump out all your passwords and send it to,                          |
| 15:51      | you know, like it's so much more fraught security environment.                                           |
| 15:54      | So these things aren't different for no reason.                                                          |
| 15:56      | They're different for a good reason, but we have lost a lot.                                             |
| 16:01      | This episode of The Automators is brought to you by TextExpander                                       |
| 16:04      | from our friends at Smile.                                                                               |
| 16:06      | Recall your best words instantly and repeatedly.                                                         |
| 16:09      | Get 20% off your first year.                                                                             |
| 16:11      | Just go to TextExpander.com/podcast and let them know you heard                                   |
| 16:15      | about it here on The Automators.                                                                         |
| 16:17      | Copy and paste isn't a good way to keep track of the things you type again and again.                    |
| 16:22      | TextExpander makes you more productive by taking care of all those words                               |
| 16:26      | and phrases for you.                                                                                     |
| 16:27      | With TextExpander, you can store your frequently used phrases into snippets                            |
| 16:31      | and they'll expand with a short abbreviation as you type.                                                |
| 16:34      | TextExpander works in all your apps so you can use it everywhere.                                      |
| 16:38      | It works with Apple's pages, Microsoft Word and Excel, Adobe Illustrator and InDesign.                   |
| 16:43      | No matter where you can type words, TextExpander can do the job.                                       |
| 16:46      | And the shiny new TextExpander 6.5 is out now.                                                         |
| 16:50      | It has a new visual editor for snippets, which gives you visual access to fill-ins,                      |
| 16:54      | dates, date math, nested snippets and more.                                                              |
| 16:57      | With this new version, it's even easier to automate,                                                     |
| 17:00      | just like we talk about on this show all the time.                                                       |
| 17:03      | I use automated TextExpander snippets all the time.                                                    |
| 17:06      | I write about them in MacSparky.                                                                        |
| 17:07      | I just did one a few weeks ago that explained how to automatically address                               |
| 17:12      | an email to a recipient.                                                                                 |
| 17:13      | So if I make an email to Rose, it says,                                                                  |
| 17:16      | hi Rose, comma at the beginning with just a short snippet.                                               |
| 17:20      | With TextExpander, automation is even easier with JavaScript syntax highlighting.                      |
| 17:24      | And Windows users get offline editing support plus improved expansion.                                   |
| 17:29      | And don't forget to search their blog for industry tips and snippet tricks.                              |
| 17:33      | To me, TextExpander is the first step of automation.                                                   |
| 17:36      | Automating text entry is something everybody can do no matter what your level of experience is           |
| 17:41      | and it can immediately start saving you time.                                                            |
| 17:44      | And now with the brand new release, now is a great time to try TextExpander.                           |
| 17:48      | Just go to TextExpander.com/podcast right now for 20% off your first year.                        |
| 17:55      | That's TextExpander.com/podcast.                                                                  |
| 17:58      | Let them know you heard about here on the automators and you'll get 20% off your first year.             |
| 18:03      | Our thanks to TextExpander for their support of this show and all of Relay FM.                         |
| 18:07      | Yeah, so John, I know that you said to us before the show that you don't do a huge amount of automation. |
| 18:13      | What kind of automations do you do?                                                                      |
| 18:16      | Are there things embedded in your life that maybe you don't even think about anymore                     |
| 18:19      | because they just happen?                                                                                |
| 18:21      | I've been trying to think about that.                                                                    |
| 18:23      | And like when I think of automation, I think of the kind of things to talk about on the show             |
| 18:27      | and the kind of things that I see my friends doing.                                                      |
| 18:29      | We're just excited to be able to get their computing devices to do something                             |
| 18:35      | that they weren't designed to do or didn't do out of the box or don't even do with an app.               |
| 18:41      | Like you have a bunch of these pieces, can you put them together to do something interesting?            |
| 18:45      | And I tend not to do that, but I think that doesn't mean I don't have any automation.                    |
| 18:49      | Like I'm trying to think of pulling back from my Mac and my phone and my iPad or whatever                |
| 18:56      | and thinking about what I do at work.                                                                    |
| 18:57      | A lot of the time I spend, yes, I'm using a Mac at work, but a lot of the time at work,                  |
| 19:01      | I feel like I'm using my Mac, but I'm using it to open up these tiny little holes into                   |
| 19:06      | a different world, which is the [[Unix]] world.                                                              |
| 19:08      | So I've got a lot of terminal windows open and there are a bunch of tasks having to do                   |
| 19:12      | with software development that happen all the time as part of our software development                   |
| 19:16      | lifecycle process, as they call it at work or whatever, kind of standards and procedures                 |
| 19:21      | and things you do repeatedly as part of your code test, debug, submit, review, cycle.                    |
| 19:28      | And there are automations all over that.                                                                 |
| 19:31      | Like there are lots of, if I had to do all the steps manually involving like committing,                 |
| 19:37      | submitting, testing code, it would be extremely tedious.                                                 |
| 19:41      | So it's several layers.                                                                                  |
| 19:43      | The first layer is like all my little command line aliases in my shell where I just type                 |
| 19:47      | a couple of obscure letters.                                                                             |
| 19:49      | And those aliases usually lead to scripts that I've written and those scripts call a bunch               |
| 19:54      | of other commands that are provided by the company to do all the things that I have to                   |
| 19:57      | do with various error handling and so on and so forth.                                                   |
| 20:00      | So that every time I need to do a thing like submit some code, I just run one command and                |
| 20:04      | this automation kicks off and it does like seven different steps, including sending signals              |
| 20:08      | out to like our issue tracker system and sending notification emails to people about things              |
| 20:14      | that happen and telling me if there was an error and running all of the static analysis                  |
| 20:18      | stuff that we have to do and running the unit tests unless they've already just run and                  |
| 20:22      | nothing has changed since then because it's slow to run them and like all that stuff.                    |
| 20:26      | I don't really think of that as automation.                                                              |
| 20:28      | I just think of that as part of my job, but it is in fact automation.                                    |
| 20:31      | And the reason I think it's valid to call it that is if you look at all the other developers             |
| 20:36      | like our company there, there are like official tools made by teams in the company to help               |
| 20:41      | you automate these steps.                                                                                |
| 20:43      | But depending on how long you've been at the company, you may have your own set of tools                 |
| 20:46      | that you use instead or in addition to those like when I started a lot of automation wasn't              |
| 20:50      | there.                                                                                                   |
| 20:51      | And so if you went to someone's desk, you'd say, oh, this is how I do stuff.                             |
| 20:53      | Oh, I have this script or I have this alias and I'd combine these scripts and I use this                 |
| 20:56      | script from Tim and this strip from Sue and I combine them into this form and like because               |
| 21:01      | we're a bunch of programmers, right?                                                                     |
| 21:02      | So we all made our own bespoke automations.                                                                |
| 21:05      | And then as the company grew bigger, they're like, we should have an official automation                 |
| 21:08      | for this and they made one.                                                                              |
| 21:10      | But the old people, at least me anyway, I said, well, I'll just keep using my automation                 |
| 21:13      | because I like a little bit better than your automation.                                                 |
| 21:15      | I know exactly how it works.                                                                             |
| 21:16      | And when I want to change it, I can just change it myself.                                               |
| 21:18      | So that's probably in my daily life, the main, my main interaction with what you would consider          |
| 21:23      | automations is just not particularly sexy because it's all command line stuff happening                  |
| 21:28      | in a terminal window.                                                                                    |
| 21:29      | I don't think we've been talking about terminal automation before, so I'm actually kind of               |
| 21:33      | interested.                                                                                              |
| 21:34      | Definitely.                                                                                              |
| 21:35      | Yeah.                                                                                                    |
| 21:36      | I mean, the whole thing about being a programmer is that you have the power.                             |
| 21:40      | You can take control and it doesn't matter if somebody provides a tool that can do something             |
| 21:45      | for you, right?                                                                                          |
| 21:46      | You can make your own and you can make it better and you can change it whenever you want.                |
| 21:50      | So if it turns out that actually you need to start seeing somebody else on every commit                  |
| 21:54      | message or something, you can just change your scripts to do that, I presume.                            |
| 21:59      | Yeah.                                                                                                    |
| 22:00      | And the nice thing about my work as a web developer is pretty much all the software we                   |
| 22:05      | ever work with, for the most part, is open source.                                                       |
| 22:08      | So say there is some part of an automation that kicks off a thing that changes the state                 |
| 22:15      | of a JIRA ticket or something and you wanted to do something slightly different.                         |
| 22:20      | But you didn't write the library that talks to JIRA, but because it's open source and                    |
| 22:26      | you're a programmer, you can just take that entire library and copy it from wherever it                  |
| 22:30      | is or fork it if it's installed locally and then just modify the library.                                |
| 22:36      | First of all, you can see what it does because you have the source code to this third-party              |
| 22:39      | library.                                                                                                 |
| 22:40      | It's just something we take for granted as a web developer and I always feel bad about                   |
| 22:42      | iOS and Mac developers that even if I didn't write the software, like I'm writing code                   |
| 22:46      | that calls libraries that calls libraries, at any point, if something does something                     |
| 22:49      | that I don't want, I can step into it with a debugger, see what it's actually doing,                     |
| 22:53      | and if I want, because it's open source, I can just fork that code and change it.                        |
| 22:57      | And I can even submit those changes upstream, I'm feeling particularly energetic to the                  |
| 23:00      | people who maintain that software or I can just have a locally modified copy.                            |
| 23:03      | There's no part of the system that I care about that I can't modify in that way and                      |
| 23:07      | that is definitely not true for iOS and Mac.                                                             |
| 23:10      | Not only do they not have source code to the frameworks, but they can't even modify the                  |
| 23:16      | call private functions that they're not supposed to call, even though they know they're there            |
| 23:18      | because they can run class stop or whatever.                                                             |
| 23:20      | So that's a nice benefit of being a web developer instead of a developer for an Apple platform.          |
| 23:26      | Yes, agreed.                                                                                             |
| 23:27      | I also do web development and I may or may not have modified several very popular libraries              |
| 23:33      | available in PHP to do exactly what I want to do because that's what you can do and that's               |
| 23:39      | what is excellent about being a programmer.                                                              |
| 23:41      | You can take this up a level if you need to.                                                             |
| 23:45      | You know, I've never really given a lot of thought to terminal-based automation.                         |
| 23:49      | To me, the terminal is always something you'd go monkey around in when you want.                         |
| 23:54      | Yeah, I have like a list of terminal commands.                                                           |
| 23:56      | That's my terminal knowledge.                                                                            |
| 23:57      | And I read, I think, a book on it several years ago, so I've got like a collection of                    |
| 24:02      | terminal commands I use, but I never really operate out of the terminal.                                 |
| 24:08      | How would somebody get started with that if they wanted to try and incorporate the terminal              |
| 24:13      | into doing more for them than get basic information out of the system?                                   |
| 24:18      | It's not even exclusively terminal automation.                                                           |
| 24:23      | The biggest example I have of automation that I've done was actually on my Mac, right?                   |
| 24:27      | So I had a task that I needed to accomplish on my Mac and it was when I was writing a                    |
| 24:32      | Mac OS X reviews for Ars Technica and they just kept getting bigger and more complicated.                |
| 24:37      | They were tons and tons of text, huge amount of images, sometimes movies, and I would have               |
| 24:44      | to write it and it would have to eventually put into their CMS in some weird format.                     |
| 24:48      | And also, I was selling eBooks and so I had to generate eBooks for it, one for the Kindle                |
| 24:53      | Store and one EPUB for Download from Ars and then an EPUB made for the iBook Store.                      |
| 25:01      | And that's a lot of stuff that has to happen.                                                            |
| 25:02      | And I'm using [[BBEdit]] to write my thing and [[BBEdit]] can do a web preview or I'm looking                    |
| 25:07      | at it in [[Safari]] and I'm using [[Photoshop]] to make the images and I'm taking screenshots                    |
| 25:12      | and whatever, all the stuff that I'm doing, it's work on a Mac, sort of multimedia work                  |
| 25:18      | as they used to say on a Mac.                                                                            |
| 25:20      | But when it came time to automate this, to say I've made a change to the article, I want                 |
| 25:26      | to see how it looks, I want to see how it looks on the web, I want to make sure it's                     |
| 25:30      | correct for the CMS, how is it going to look in context on Ars Technica, what is the Kindle              |
| 25:34      | Book going to look like and what is the iBook going to look like, right?                                 |
| 25:37      | That's a lot of steps and because you're on the Mac, you could say like, I could Apple                   |
| 25:41      | Script this, right?                                                                                      |
| 25:42      | Or I can use Automated to try to put this stuff together but inevitably you run up against               |
| 25:45      | something weird like, oh well, to make a Kindle Book, there's no thing with an [[AppleScript]]able          |
| 25:51      | Dictionary that does that.                                                                               |
| 25:54      | Amazon provides tools for making Kindle Books and they may provide like a GUI application                |
| 25:58      | for doing it but it probably doesn't have an [[AppleScript]] dictionary.                                    |
| 26:01      | So what they also provide is a command line tool that will make a Kindle Book, right?                    |
| 26:06      | And it's like, aha, a command line tool that might lead me towards thinking, you know,                   |
| 26:11      | I can run a command line tool from [[AppleScript]], whatever the execute shell command or whatever          |
| 26:15      | the thing but it's just, it might lead you to thinking that I can script this without                    |
| 26:19      | using quote unquote Mac scripting, right?                                                                |
| 26:23      | If you have a bunch of text files and a bunch of images and a command line tool that generates           |
| 26:27      | something and the EPUB was similar, like you can generate an EPUB just manually, like it's               |
| 26:31      | just files and directories, right?                                                                       |
| 26:33      | If you know, if you know the EPUB format, which I did from working in the EPUB world                     |
| 26:37      | a little while before, if you find yourself faced with that task where you're like, what                 |
| 26:41      | I'm doing doesn't really have anything to do with the Mac, you can write any kind of                     |
| 26:46      | program that can read and write files and directories and run commands.                                  |
| 26:51      | And if you're looking for a language well suited to manipulating files, files in the                     |
| 26:57      | contents of them and directories and running commands and managing the output of them,                   |
| 27:02      | the input of them, there are lots of languages like that, people call them glue languages                |
| 27:05      | or scripting languages.                                                                                  |
| 27:07      | Perl is one, which is the one I use because I know it best, but you can do it from JavaScript            |
| 27:11      | and Node.js these days if you don't mind going slightly into callback hell or async stuff,               |
| 27:16      | which is a whole other kettle of fish.                                                                   |
| 27:18      | You could probably do it from [[AppleScript]] if you were well versed in that language,                     |
| 27:22      | but the [[Unix]] world, even just like shell scripting, like born shell scripting, the [[Unix]] world has        |
| 27:26      | a lot of languages that are like that, where you take a bunch of other things, other commands            |
| 27:33      | and glue them together.                                                                                  |
| 27:34      | So say you're doing text file manipulation, but you don't know programming language, [[Unix]]                |
| 27:37      | itself has tons of tools like GREP and AWK and SED and sort and all sorts of other individual            |
| 27:44      | commands that you can pipe together to manipulate files, even if you don't know programming.             |
| 27:48      | And if you want to run a series of those commands on some files as input and producing output            |
| 27:53      | and running it again, you could do that in a shell script and that's how you're starting                 |
| 27:56      | to build up to, you know, command line automation.                                                       |
| 27:59      | It's really just getting out of the background and going into the [[Unix]] realm where people                |
| 28:03      | have been writing little miniature programs to glue together a bunch of other commands                   |
| 28:06      | to do something useful for decades and decades.                                                          |
| 28:09      | And so when faced with this task, of course, because I'm used to programming stuff like                  |
| 28:13      | that and I'm well versed in Perl, which is extremely well suited to this type of task,                   |
| 28:17      | I wrote a series of fairly terrible Perl scripts that will do all these steps for me.                    |
| 28:22      | And Perl scripts can also send Apple events because you can show out to OSA script, the                  |
| 28:25      | command line that sends Apple events, right?                                                             |
| 28:27      | So I could, I could have it spawn the web browser and open the page, I could have it                     |
| 28:31      | open the Kindle app with the, you know, like minimal scriptability, you know, in one the                 |
| 28:35      | other direction, I'm writing a Perl program that mostly runs command line programs, but                  |
| 28:39      | occasionally runs OSA script to send Apple events.                                                       |
| 28:43      | That's how I approached it.                                                                              |
| 28:44      | You could have done it a different way, but given my skill set, that's the way I decided                 |
| 28:47      | to do it.                                                                                                |
| 28:48      | Put that flexibility on the Mac is really nice because another way you could do that                     |
| 28:51      | is you could write it from AppleScript or you could use AppleScript to trigger Java                    |
| 28:55      | scripts.                                                                                                 |
| 28:56      | I mean, it's just like, there's so many different ways to skin that cat on the Mac and that's            |
| 29:01      | something I didn't really appreciate till I was listening to you talk about it because                   |
| 29:05      | I never really thought about Perl as like a basis for a scripting language, but it sounds                |
| 29:10      | like that's kind of what you're doing.                                                                   |
| 29:12      | I mean, you could have written in a node, you could have written it in [[Swift]], [[Swift]] fancies              |
| 29:16      | itself a, you know, equally valid scripting language.                                                    |
| 29:18      | You can write, you know, that was one of, when I wrote about [[Swift]], I was most excited                   |
| 29:22      | about the idea that you could put like a little line at the top of the file, just like the,              |
| 29:25      | you know, pound bang line for the shell or Perl.                                                         |
| 29:28      | You can put one for [[Swift]] and just write your [[Swift]] and you just run it.                                 |
| 29:31      | Like there's no separate compile step, you just, you could just run a file the same way                  |
| 29:34      | you can run a shell script or a Perl script or a Python script or Ruby script.                           |
| 29:37      | You can write a [[Swift]] script.                                                                            |
| 29:39      | I don't think it's quite as easy to do basic manipulation in [[Swift]] as it is in Perl, but                 |
| 29:46      | it's getting there and a lot of it is just because I'm not as familiar with language                     |
| 29:48      | yet.                                                                                                     |
| 29:49      | But you could write it in Objective C. You could write it in C. It's like, which language                |
| 29:53      | is best suited for this?                                                                                 |
| 29:54      | I don't think you'd want to write this kind of automation in C because just running an                   |
| 29:57      | external program and capturing the output correctly in C will probably make your eyes                    |
| 30:01      | bleed and other languages make that so much easier.                                                      |
| 30:04      | But on the Mac, unlike iOS, all options are open to you.                                                 |
| 30:08      | You can write code in any language you want and make it executable and it can do what                    |
| 30:12      | you want it to do.                                                                                       |
| 30:13      | I'm just thinking you could also perhaps even do this with [[Keyboard Maestro]] because                      |
| 30:17      | [[Keyboard Maestro]] has various blocks where you can execute command line scripts and you                   |
| 30:21      | can execute AppleScript and you can do all sorts of things.                                             |
| 30:25      | And in some ways, for some people, that might be better because I know as soon as I start                |
| 30:31      | getting into doing multiple things that talk to a lot of servers, I start turning things                 |
| 30:36      | into functions.                                                                                          |
| 30:38      | But in some scripts, there's not a lot of point in turning it into a function because                    |
| 30:42      | a function, the idea is it's code that you're going to call more than once.                              |
| 30:46      | So to avoid copy-pasting your code, you make it into a function.                                         |
| 30:52      | And just doing that for readability, sometimes I'm much too lazy, but if I wrote it in something         |
| 30:55      | like [[Keyboard Maestro]], then I would just have that visibility because I've got a block                   |
| 31:00      | here and I've got a block there and I can see, okay, well, this is wording in the wrong                  |
| 31:06      | order, so I'm just going to move this block up here.                                                     |
| 31:08      | And that might be quite useful for some of our listeners as well because don't forget                    |
| 31:11      | you can execute AppleScript and Shell Scripts directly from [[Keyboard Maestro]].                            |
| 31:16      | Yeah, you can always pick who's in charge or what is the entry point because you can                     |
| 31:20      | call from one realm into another.                                                                        |
| 31:22      | You can make a bunch of scripts in the language of your choice, but you could have Automator             |
| 31:27      | or [[Keyboard Maestro]] or AppleScript be the driver where it starts and it kicks off your                   |
| 31:31      | thing and then it bounces back to that thing and it goes, it just depends on what you're                 |
| 31:35      | most comfortable with.                                                                                   |
| 31:36      | There's no, you're not forced to choose one or the other depending on like, oh, I'm going                |
| 31:40      | to do lots of goo manipulation and [[Keyboard Maestro]] would be great for that because I                    |
| 31:43      | can have it like open dialogues and click on buttons or whatever.                                        |
| 31:46      | So I have to start it in a [[Keyboard Maestro]].                                                             |
| 31:48      | You don't.                                                                                               |
| 31:49      | You can start it in a Shell Script and kick off [[Keyboard Maestro]] or vice versa or, you                   |
| 31:52      | know, all three or four combined.                                                                        |
| 31:54      | I mean, you don't want to make something where your code is spread over seven different applications     |
| 31:58      | in 12 different languages, but you could if you wanted to.                                               |
| 32:01      | Yeah.                                                                                                    |
| 32:02      | I mean, you can even use [[Hazel]] to watch a folder and whenever something happens to a file in             |
| 32:05      | the folder, then it can just go, hey, let's get on with this.                                            |
| 32:09      | That reminds me of my favourite, my favourite automation at work.                                          |
| 32:12      | I don't know how much experience you all have with the world of Dilbertesque corporate America,          |
| 32:20      | but you know, there's, there are things in jobs in a big company that you just have to                   |
| 32:26      | deal with and you can yell and scream about them and complain, but sometimes it's better                 |
| 32:32      | to take matters into your own hands.                                                                     |
| 32:33      | So one example, our company has decided that it is important enough for them to enforce                  |
| 32:41      | this across all the Macs in the company that when you open a new window in [[Safari]] or a                   |
| 32:46      | new tab, it loads the company homepage.                                                                  |
| 32:50      | So in [[Safari\|Safari's]] preferences is the thing that says, what happened, what, you know, what                   |
| 32:53      | URL should I go to when you open a new window or tab?                                                    |
| 32:56      | And it comes default to like, I don't know, the Apple.com start page or something, but                   |
| 32:59      | you can just delete it or pick empty page or whatever, but in corporate America, not                     |
| 33:04      | everything on your computer is yours and they use a system that enforces certain constraints,            |
| 33:10      | some of them for security, like, oh, your, your screen has to lock after a certain period                |
| 33:13      | of time and you can't change that preference, you know, and that's the key part that these               |
| 33:17      | are preferences, but they can remotely set them to what they want and make it so you                     |
| 33:20      | can't change them.                                                                                       |
| 33:22      | So if I go to preferences on my work computer in [[Safari]], I can't change what happens in                  |
| 33:27      | a new page or a new tab.                                                                                 |
| 33:29      | It's stuck on the corporate homepage.                                                                    |
| 33:31      | I can't change it to something else because they like, there's a managed preference file                 |
| 33:35      | that they write in this obscure directory, right?                                                        |
| 33:38      | And that drives me insane because if you're a web developer, you open new windows and tabs               |
| 33:41      | all the time and the corporate homepage takes a year and a day to load and it just, it's                 |
| 33:46      | bad, right?                                                                                              |
| 33:48      | So you mentioned [[Hazel]] watching directories, well, [[Hazel]] is for like watching directories                |
| 33:53      | in your, you know, in your home directory or dealing with your files, but the actual                     |
| 33:57      | file that's getting written by the corporate, you know, overlord system is buried in some                |
| 34:03      | system directory and it's like owned by root or whatever.                                                |
| 34:06      | And luckily I do have, still have root on my local Mac.                                                  |
| 34:09      | And every time they write that file there, like if you remove that file, they'll just                    |
| 34:13      | put it back.                                                                                             |
| 34:14      | Like there's an automation that runs and it checks to see that everything, all the settings              |
| 34:17      | are the way they're supposed to be.                                                                      |
| 34:19      | And because it's a preference file, there's the CF Prefs daemon that reads that stuff                    |
| 34:22      | and it caches it.                                                                                        |
| 34:23      | So even if you were to delete that file, the CF Prefs daemon still has the cache.                        |
| 34:27      | So [[Safari]], when you launch it, just pulls the Pref using the Pref API and gets it from                   |
| 34:31      | the CF Pref daemon.                                                                                      |
| 34:32      | So my solution to this was do a [[Hazel]] like thing, which is to use the latest and greatest                |
| 34:38      | FS events API where you can efficiently watch for changes to a directory on macOS.                       |
| 34:44      | Like if you don't have to pull, it'll just like, you'll just start watching that directory.              |
| 34:47      | Yeah.                                                                                                    |
| 34:48      | And when anything happens in that directory, your script will be notified.                               |
| 34:51      | So I wrote a Perl script with the FS events module that watches that directory.                          |
| 34:56      | And when you initially launch it, what it does is delete that offending file, send a                     |
| 35:00      | signal to the CF Prefs daemon to restart itself.                                                         |
| 35:04      | And then as soon as any file appears, and this file that I'm wanting for appears in                      |
| 35:08      | that directory, I wait a couple of seconds, remove the file, wait a couple more seconds                  |
| 35:14      | and reboot the CF Prefs daemon.                                                                          |
| 35:17      | So constantly in the background of my computer at work, I'm fighting, it's fighting an eternal           |
| 35:21      | battle against corporate policy of trying to set my home page.                                           |
| 35:24      | So how much of your CPU does essentially use?                                                            |
| 35:29      | That's the beauty of FS events.                                                                          |
| 35:31      | It's not polling.                                                                                        |
| 35:32      | It's not saying, is the file there?                                                                      |
| 35:33      | Is the file there?                                                                                       |
| 35:34      | Is the file there?                                                                                       |
| 35:35      | It is an efficient kernel level API where most of the time my script is doing nothing.                   |
| 35:38      | It's completely idle.                                                                                    |
| 35:39      | It's just sitting there waiting for the system to say, hey, a new file appeared in this directory,       |
| 35:44      | which only happens like the thing runs every five minutes or 30 minutes or whatever.                     |
| 35:47      | We don't have control.                                                                                   |
| 35:48      | We don't have control over when the corporate overlord thing runs on my computer.                        |
| 35:52      | But when it does, my script wakes up every second, has a little burst of activity and                    |
| 35:55      | then goes back to sleep.                                                                                 |
| 35:56      | Oh, that's brilliant.                                                                                    |
| 35:57      | As I understand it, that's the reason why [[Hazel]], you can make all these complex [[Hazel]]                    |
| 36:01      | rules and it takes a tiny, tiny fraction of your processing because it's using the same                  |
| 36:06      | underlying daemon.                                                                                       |
| 36:07      | It's not a daemon.                                                                                       |
| 36:09      | It's a kernel level facility because any IO that goes through the kernel, the kernel                     |
| 36:13      | knows when anything is writing to a file.                                                                |
| 36:15      | There are actually a couple of different APIs.                                                           |
| 36:16      | FS events, there's KQ, I think there's maybe one other one.                                              |
| 36:20      | You don't have to do anything because the kernel knows when it does file IO, when it                     |
| 36:25      | does any file IO, it says, by the way, was anybody in the system interested in changes                   |
| 36:29      | this file?                                                                                               |
| 36:30      | Because if they were, I'll notify them now.                                                              |
| 36:31      | It's incredibly efficient.                                                                               |
| 36:32      | The rest of the time, your program or thing that's listening like [[Hazel]] just sits there                  |
| 36:36      | doing nothing.                                                                                           |
| 36:37      | Yeah.                                                                                                    |
| 36:38      | That's great.                                                                                            |
| 36:39      | That is brilliant.                                                                                       |
| 36:40      | You don't see the homepage.                                                                              |
| 36:41      | I would guess very often.                                                                                |
| 36:43      | I do not.                                                                                                |
| 36:45      | I'm sure that inside, you're secretly deeply sad about this, that day-to-day it is making                |
| 36:51      | your life easier because you're saving probably 10 seconds every time you open the tab.                  |
| 36:55      | Yes, the worst because it bounces you through SSO, the single sign-on stuff, yes.                        |
| 37:00      | Yeah.                                                                                                    |
| 37:01      | Yeah.                                                                                                    |
| 37:02      | Now, didn't you get a little smile on your face when you're putting that together, thinking              |
| 37:07      | about it?                                                                                                |
| 37:08      | I was mostly still just angry that they wouldn't change this policy because there's no security          |
| 37:12      | reason for this.                                                                                         |
| 37:13      | They're like, we want people to see the homepage, so just tell everyone to look at the homepage          |
| 37:16      | every once in a while or send out a digest email that says, by the way, here's this                      |
| 37:20      | week's important announcements.                                                                          |
| 37:23      | It's the worst.                                                                                          |
| 37:24      | Every developer rolls another automation.                                                                |
| 37:26      | Every developer rolls their own little secret script to do this.                                         |
| 37:29      | On Google, on Google, they couldn't do it, but on Google, what they could do is force                    |
| 37:32      | the little house, the little home icon in the toolbar.                                                   |
| 37:36      | In regular Google, you can say, please don't put that little house in my toolbar.                        |
| 37:39      | I don't want it there.                                                                                   |
| 37:40      | If I put it in my Google at work, that preference is disabled and I can't remove it through              |
| 37:43      | the same mechanism.                                                                                      |
| 37:46      | Yeah, that sort of thing is frustrating.                                                                 |
| 37:49      | I should caution our listeners, if there is a corporate policy for things and you want                   |
| 37:54      | to get around it, perhaps find out why if you're not sure.                                               |
| 37:57      | It's something like sending a home page, as John said, not for security reasons, but                     |
| 38:01      | for example, requiring your computer to lock after a couple of minutes of inactivity, that               |
| 38:05      | is for security.                                                                                         |
| 38:06      | I would highly recommend that you do not disable that because that will get you into trouble             |
| 38:10      | with the IT team.                                                                                        |
| 38:11      | She says as somebody who works on the IT team.                                                           |
| 38:13      | Yeah, technically, what I just described would probably get me in trouble too, but                       |
| 38:17      | I feel like it's defensible.                                                                             |
| 38:19      | I'm telling you what I'm doing and I understand the trade-offs here.                                     |
| 38:24      | Everyone, believe me, all the developers asked, why does it have to be the home page?                    |
| 38:26      | We got the answer and the answer did not have anything to do with security, so now we all                |
| 38:30      | feel just fine defeating that particular mechanism.                                                      |
| 38:33      | I'm thinking, could you have done that without Perl?                                                    |
| 38:36      | I guess you could have had [[Hazel]] watching for the file if you have root access.                          |
| 38:40      | Yeah, [[Hazel]] would have to be running as root, though, which is kind of weird.                            |
| 38:43      | I'm not sure.                                                                                            |
| 38:44      | You want to run a big, unknown program as root, where I wrote every line of the thing                    |
| 38:48      | that I'm writing running as root, but you could do it in anything.                                       |
| 38:51      | You could probably do it in anything that has access to their [`kqueue`](https://en.wikipedia.org/wiki/Kqueue) or [`inotify`](https://en.wikipedia.org/wiki/Inotify) in Linux                    |
| 38:55      | or [FSEvents](https://en.wikipedia.org/wiki/FSEvents).                                                                                            |
| 38:58      | That's just a C API.                                                                                     |
| 38:59      | You can get it from any C-level language.                                                                |
| 39:00      | You can do it from Objective C. You could probably do it from a [[Swift]].                                   |
| 39:04      | You can do it from any high-level language that has a library for it.                                    |
| 39:06      | I think Node has a library for FS Events.                                                                |
| 39:09      | I'm pretty sure it does.                                                                                 |
| 39:10      | Ruby has a library for it.                                                                               |
| 39:12      | Python, any of these high-level languages that can tap into lower-level C APIs will work.                |
| 39:17      | But you'd still need to run a script to do the reset anyway, so it probably doesn't really               |
| 39:22      | make sense.                                                                                              |
| 39:24      | The main steps you have to do is delete a file, which like any language can do, assuming                 |
| 39:28      | it has permissions.                                                                                      |
| 39:29      | Then you have to send a signal to a process, and you have to know what, you have to be                   |
| 39:31      | able to find the CF Prefs process, and you have to send a signal to it, so most languages                |
| 39:36      | can do that.                                                                                             |
| 39:37      | I would find it delightful to be sticking it to the man with something like that.                        |
| 39:43      | This episode of Automators is brought to you by Creative Next.                                           |
| 39:47      | Creative Next is a new podcast focusing on future-proofing creatives from AI Automation.                 |
| 39:52      | They believe the future of Automation is about people like you and me, because work automation           |
| 39:58      | isn't all about industrial robots.                                                                       |
| 40:00      | Automation driven by artificial intelligence is already doing remarkable things like impacting           |
| 40:05      | research, writing, marketing, art, design, engineering, and entrepreneurship.                            |
| 40:12      | And this is the kind of thing that is likely to accelerate in years to come.                             |
| 40:16      | So what does Creative Next cover?                                                                        |
| 40:19      | The first season is all about learning.                                                                  |
| 40:21      | Learning about how AI and automation work, understanding how machines learn, and with                    |
| 40:26      | early automation successes, and they'll look at how people may learn in the future.                      |
| 40:33      | Creative Next is available from Apple Podcasts, Google Podcasts, Spotify, and wherever else              |
| 40:37      | you'd like to listen to your podcast.                                                                    |
| 40:40      | Plus, they have a companion article series on Medium that's in partnership with Towards                  |
| 40:44      | Data Science.                                                                                            |
| 40:46      | Check it out at creativenext.org.                                                                        |
| 40:49      | That's creativenext.org.                                                                                 |
| 40:52      | Our thanks to Creative Next for their support of the show and all of Relay AFM.                          |
| 40:58      | John, are you using Siri Shortcuts for anything?                                                         |
| 41:02      | You know, I don't think I'm personally using them for anything, but I have a tremendous                  |
| 41:08      | amount of Siri Shortcuts.                                                                                |
| 41:09      | Like, if you launch the app, it's just, there's a whole screen full of these little tiles.               |
| 41:13      | And it's mostly because, you know, I'll talk about things on ATPX and I'll Tech Podcast                  |
| 41:17      | where we, you know, complain about stuff and they're like, oh, well, I can make a Siri                   |
| 41:20      | Shortcut that'll help you with that, lots of listeners send us shortcuts.                                |
| 41:23      | Or I see cool shortcuts online, you know, [[Federico Viticci]] has some really awesome ones                  |
| 41:28      | that he writes to these big articles about.                                                              |
| 41:29      | Every time I see a shortcut that seems even vaguely interesting, I download it and look                  |
| 41:33      | at it just because I'm curious.                                                                          |
| 41:35      | Like, how did they do this thing that seems almost impossible or what's the state of the                 |
| 41:39      | art in shortcuts?                                                                                        |
| 41:40      | Or, you know, and occasionally I'll find some utility like we were fighting over Apple's                 |
| 41:45      | contacts with some vaguely written rules that said if the image is too big, it won't                     |
| 41:49      | sync them or something.                                                                                  |
| 41:51      | And so a bunch of people wrote shortcuts that will find all the images that are over that                |
| 41:54      | size.                                                                                                    |
| 41:55      | And then someone wrote a shortcut that will find the images and tell you which contacts                  |
| 41:58      | they belong to.                                                                                          |
| 41:59      | And someone improved that and said, we'll find the images that are too big, we'll resize                 |
| 42:02      | them so they're small enough and we'll dump them all in an iCloud folder like, no, I don't               |
| 42:06      | think anyone has gone through the point of finding the images that are too big, resizing                 |
| 42:10      | them and then reapplying them to the correct contacts.                                                   |
| 42:12      | And honestly, I probably wouldn't run that, that shortcut either because I assume it would               |
| 42:16      | hose all my contacts because programming is hard.                                                        |
| 42:19      | But I have screens full of those.                                                                        |
| 42:20      | I have things for like sharing shortcuts to try to like email myself, you know, information              |
| 42:26      | about tweets.                                                                                            |
| 42:27      | I used to have a dedicated iOS application, it was called Mail to Self, I think.                         |
| 42:33      | The only thing it did was like provide a sharing sheet that would pull the metadata from whatever        |
| 42:38      | thing it's sharing and compose an email to yourself and it would do it in a single tap.                  |
| 42:43      | That's the kind of thing that I know I knew about shortcuts is, no matter how short you                  |
| 42:46      | make the shortcuts to usually two taps, you gotta activate the shortcut and then run it.                 |
| 42:50      | I think you can maybe get one, can you make one that like provides its own share extension?              |
| 42:55      | I think you can take a lot of steps out as a share extension, like for instance, I have                  |
| 43:00      | a bunch that I do to save, because I save files all the time that have specific names                    |
| 43:06      | and date strings and things attached to them, which is just a pain in the neck to create                 |
| 43:10      | an iOS, but if you make a custom series shortcut for each one, you have one tap to activate              |
| 43:17      | the shortcut.                                                                                            |
| 43:18      | Actually, it's two taps, you're right, because first you gotta hit the extension button,                 |
| 43:21      | then you gotta select the shortcut, and then you probably have to press an OK button.                    |
| 43:24      | Well, at the very least, you have to share shortcuts, find the right shortcut, which                     |
| 43:29      | if you're me, though, as of yesterday, shortcuts helpfully deleted 493 of my shortcuts.                  |
| 43:35      | So I have a few shortcuts right now, then you deselect the right shortcut, which may                     |
| 43:41      | involve scrolling, tapping, potentially searching, and then, yeah, and then it runs, but that's          |
| 43:47      | at least three taps, including the share sheet tap.                                                      |
| 43:50      | Yeah, but I would characterise my iOS automation as like technical curiosity with a smattering           |
| 43:57      | of periodic utility, but there's nothing I do on a daily basis on my iOS devices that                    |
| 44:03      | is automated in any interesting way.                                                                     |
| 44:05      | Yeah, and that was kind of my question was the periodic utility.                                         |
| 44:09      | Are there any that you actually find that you use under fire that come in handy, or                      |
| 44:13      | is it just you just want to see how people are doing things?                                             |
| 44:17      | The various like, you know, because when I run across things on the web or on Twitter                    |
| 44:21      | is the main two places I run across things that I want to like save for probably for,                    |
| 44:25      | you know, a future podcast episode or something.                                                         |
| 44:28      | I do want to sort of queue them up somewhere, whether it's sending them to a note or emailing            |
| 44:32      | them to myself or putting them putting it into a Google doc or whatever.                                 |
| 44:36      | And I've tried a whole bunch of different, you know, automations or share extensions                     |
| 44:41      | and stuff to do that.                                                                                    |
| 44:43      | None of them are particularly satisfactory, like I've never been able to get them to work                |
| 44:47      | exactly the way I want, mostly because of the limitations and like the limitations of                    |
| 44:51      | the system and also my lack of knowledge about exactly like, when I hit the share sheet                  |
| 44:56      | from this thing, like how, how is the data being presented to whatever is going to handle                |
| 45:00      | it?                                                                                                      |
| 45:01      | What shape does the data take?                                                                           |
| 45:02      | What kind of metadata does it have?                                                                      |
| 45:03      | Can I get more metadata?                                                                                 |
| 45:04      | Like it's all sorts of ones that are like dedicated to Twitter that instead of, instead                  |
| 45:08      | of using like the applications share thing, like my Twitter client, it will just get enough              |
| 45:13      | information that it can from the iOS app and then it will go to Twitter's web API and extract            |
| 45:20      | metadata and then use that to form the information that you're going to put into a note or make          |
| 45:25      | a little HTML blob out of or mail yourself and that level of automation, I just start                    |
| 45:29      | to get frustrated by how difficult things are and I just go back to the tried and true                   |
| 45:34      | old method because the default sort of mail action share thing does almost entirely what                 |
| 45:40      | I want.                                                                                                  |
| 45:41      | It's just tedious to have to go mail, type in the first two letters on my email address,                 |
| 45:45      | select the autocomplete hit send, but it's not that bad.                                                 |
| 45:48      | And that's, that's the part of the trade off I always find myself fighting with like,                    |
| 45:53      | I don't know if you find this as well, Rose, but like, because your work is programming,                 |
| 46:01      | when I'm not at work, I don't, I mean, it's not that I don't want to program, but like                   |
| 46:07      | it starts to get me into the work headspace.                                                             |
| 46:10      | Yeah.                                                                                                    |
| 46:11      | I start kind of being like, I don't, you know, I know I could do this, but I see, I see the              |
| 46:17      | road ahead of me of what it would be like to really do this.                                             |
| 46:20      | And I, I just, I feel like backing off and I'm like, I don't, I spent eight hours programming,           |
| 46:26      | like honestly, I don't want to do anymore.                                                               |
| 46:28      | And I think part of that is what stops me from like, you know, think about podcasting,                   |
| 46:33      | do podcasting every week of my life.                                                                     |
| 46:35      | And there are a series of steps I take before the podcast and after the podcast, I can automate          |
| 46:39      | those, but I don't, I just don't because I just, I see ahead of me how careful I would                   |
| 46:45      | have to be with that automation and all the error handling I would have to do and how                    |
| 46:49      | I'd recover from a partial success and how, you know, I don't want to lose a recording                   |
| 46:54      | and what it, you know, like I, I see what that programming effort would be like.                         |
| 46:59      | And I probably would make it up over time, like the day I spend doing that would be made                 |
| 47:03      | up for by the first year of its use, but I don't, I just don't do it because it just,                    |
| 47:07      | it doesn't seem attractive to me.                                                                        |
| 47:09      | That's probably keeping me from almost the automation.                                                   |
| 47:11      | And the other flip side of it is like, I convince myself, oh, the ritual of preparing for a podcast      |
| 47:16      | and then finishing a podcast and getting everything together.                                            |
| 47:20      | It's kind of soothing to just do the three manual steps instead of writing a program                     |
| 47:24      | to automate them.                                                                                        |
| 47:25      | But that's, that's a personal choice, I think, more than an endorsement.                                 |
| 47:29      | Yeah.                                                                                                    |
| 47:30      | I listened to you once on ATP talking about like your window management and it was kind                  |
| 47:33      | of the same thing where I was thinking, man, this guy should really think about some automation          |
| 47:38      | because you, I know you've got a very particular way you like your windows set, but I suspect            |
| 47:42      | that's not of interest to you either.                                                                    |
| 47:45      | I wouldn't trust any program.                                                                            |
| 47:46      | I don't do it.                                                                                           |
| 47:47      | Like I launched [[Skype]] today, right?                                                                      |
| 47:48      | And every time I launched [[Skype]], it decides the little black window that shows like the                  |
| 47:52      | red hang-up button and the mute button and everything, you know, the little black floating               |
| 47:56      | window that you may have in your screen right now.                                                       |
| 47:58      | Yeah.                                                                                                    |
| 47:59      | It, I don't know where it puts it, but it doesn't put it where I want it to be.                          |
| 48:02      | And every time I launched [[Skype]], I move it back to where I want it to be.                                |
| 48:04      | It just doesn't remember that, right?                                                                    |
| 48:06      | So could I get an AppleScript that would launch [[Skype]], find that window and move to                     |
| 48:10      | the position I want?                                                                                     |
| 48:11      | Probably.                                                                                                |
| 48:12      | I'm kind of going through the exercise to try to see if [[Skype]] has enough of a reasonable                 |
| 48:17      | script and dictionary.                                                                                   |
| 48:18      | Can I always find that window as the window named or numbered, or does it change in different            |
| 48:21      | versions of [[Skype]]?                                                                                       |
| 48:22      | And then when I update [[Skype]], having it break and having me redo it, like, I just drag the               |
| 48:25      | window to where it's supposed to be.                                                                     |
| 48:27      | And I drag to the same spot every time.                                                                  |
| 48:29      | I mean, there is something to be said about doing these things manually, because as you                  |
| 48:32      | said, it's kind of a little routine, you know, getting set up for the podcast and, you know,             |
| 48:35      | like after the podcast, and it's, it's mental cues to your brain, which is getting at focus              |
| 48:40      | territory here and stealing from Mike on, on your other podcast, David.                                  |
| 48:45      | But, you know, there is something to be said for that.                                                   |
| 48:48      | I do find that I don't sit down and do, oh, yeah, I'm going to write an AppleScript for                 |
| 48:53      | this.                                                                                                    |
| 48:54      | Like that's, that's really something that I'm going to do just because as you said, John,                |
| 48:59      | we spend all day sitting there programming.                                                              |
| 49:02      | That said, I find shortcuts, it's just like putting a puzzle together.                                   |
| 49:05      | So some people love jigsaw puzzles.                                                                      |
| 49:08      | I'm okay with jigsaw puzzles.                                                                            |
| 49:10      | I love shortcuts.                                                                                        |
| 49:11      | I love sticking the blocks together and seeing if I get the thing that I want.                           |
| 49:14      | I found some very weird crazy stuff the other day and I was there going, oh, you know, like              |
| 49:18      | I could just do this.                                                                                    |
| 49:19      | I've set up, we have to track our time at work.                                                          |
| 49:22      | So really recent, a failure is an addition.                                                              |
| 49:25      | And what I'm doing is I'm doing all of that in shortcuts because there's a Windows application           |
| 49:32      | which creates an XML file.                                                                               |
| 49:34      | So I looked at the XML file.                                                                             |
| 49:36      | I broke it down and I'm creating that as a JSON and at the end of the month, I'm just                    |
| 49:41      | going to convert that to XML, throw it into this weird program on my Windows virtual machine             |
| 49:45      | at work and send my boss the report in the format that he's expecting.                                   |
| 49:49      | But I'm doing all of that with shortcuts in JSON and that was fun to put together.                       |
| 49:55      | It was probably not the most efficient way to put it together, but as, for example, when                 |
| 49:58      | I'm on my way to a meeting, I need to switch timers to the meeting timer, I'm not going                  |
| 50:03      | to have my Mac or a Windows machine available to do that, so I picked the most fun one and               |
| 50:08      | it turned out to be the best one.                                                                        |
| 50:09      | That's a part of the appeal of shortcuts because the iOS devices are so locked down.                     |
| 50:14      | If you wanted to make a cool little app that you could just tap when you begin a thing                   |
| 50:18      | and tap when you want, there's a million time tracking apps out there, but say you had some              |
| 50:21      | specific requirements like, oh, it has to record time in this weird format that your work requires.      |
| 50:26      | You're not going to make a, unless you are actually an iOS developer by trade and maybe                  |
| 50:29      | not even then, you're not going to say, okay, let me make a full-fledged iOS application                 |
| 50:34      | and [[Swift]] or Objective-C to do this thing and put up a UI and do all this stuff.                         |
| 50:39      | But if you wanted to run your own code on your phone, that used to be your only option                   |
| 50:45      | until workflows and the other automations come out, so now shortcuts is a way for you                    |
| 50:50      | to do that.                                                                                              |
| 50:51      | I want a cool little thing on my phone that does a thing and I don't want to write a full-fledged        |
| 50:54      | app and I don't want to deal with [[Xcode]], building it and putting it into my phone every time             |
| 51:00      | I update something and I certainly don't want to submit it to the App Store, which is in                 |
| 51:03      | all other categories.                                                                                    |
| 51:05      | Shortcuts is a way for you to make something that does a simple task.                                    |
| 51:09      | This shortcuts shows how little I know about shortcuts.                                                  |
| 51:11      | Can shortcuts throw up any kind of UI beyond the stupid dialogues that everybody makes,                  |
| 51:15      | like the little white window where you have to pick a thing and enter some text, all that?               |
| 51:20      | You can't do your own UI yet, right?                                                                     |
| 51:22      | No, you can't do your own UI.                                                                            |
| 51:24      | If you wanted to do that, then you're probably looking at using Scriptable or [[Pythonista]],             |
| 51:31      | where they can both present UI Scriptable is using, well, of course, a [[Swift]] on the                      |
| 51:39      | back end, but they're using the built-in Siri or UI table, sorry, that's not Siri.                       |
| 51:45      | You can tell it's circle in the morning.                                                                 |
| 51:50      | It looks like a real iOS UI instead of a shortcut UI.                                                    |
| 51:54      | I'm just using dictionaries for everything and lists, choose from list, which, I mean,                   |
| 52:01      | it's not the prettiest and I'm actually in the process of adding a filter so that I can                  |
| 52:05      | just show the five most frequently used time tracking options for me there and an other                  |
| 52:11      | button because having to scroll through what is getting to be extremely long list of various             |
| 52:17      | different ways that I could track my time is getting to be quite annoying very quickly.                  |
| 52:24      | Another piece of this is there are a lot of apps that are starting to think about automation             |
| 52:27      | too, so you can get around some of this stuff with what I would call app-based automation,               |
| 52:33      | which is nice for folks that frankly don't know all these languages, but I'd never really                |
| 52:38      | thought of it before, but if somebody made an app or in your free time, you could assemble               |
| 52:42      | legal contracts, I'm not sure I'd be all that into it.                                                   |
| 52:46      | I can kind of hear where you're coming from because for me, the automation stuff is like                 |
| 52:51      | what you do to stretch your brain when you're not doing a lot of the day job stuff and it's              |
| 52:56      | fun because it's not something I'm doing all day.                                                        |
| 52:58      | Part of it is the reliability angle, though, because podcasts, what I want to do when I'm                |
| 53:03      | setting up for my podcast, I want to make sure everything is all set for my podcast.                     |
| 53:06      | You're like, ah, automation can help you that.                                                           |
| 53:08      | You don't worry about doing all these steps.                                                             |
| 53:10      | Automation will do all the steps, but as a programmer, we all know, yeah, you can write                  |
| 53:14      | a program and do all the steps, all you've done is shift it, so now you're worrying                      |
| 53:17      | about, did my program work correctly?                                                                    |
| 53:18      | Is there a bug in my program?                                                                            |
| 53:20      | Is there some weird timing glitch with Apple events?                                                     |
| 53:22      | Is everything all set?                                                                                   |
| 53:23      | And now you're second guessing everything and I don't want to be in the mindset of checking              |
| 53:26      | that a program has worked correctly or debugging it.                                                     |
| 53:29      | And a lot of automation of that level where it's coordinating multiple different GUI                     |
| 53:33      | applications plus other stuff, plus inputs and outputs, like there are places for that                   |
| 53:38      | to go wrong, especially involving like launch times and connecting of audio inputs and outputs           |
| 53:43      | and all that other stuff, like things can go wrong and I'm more confident that I can                     |
| 53:50      | do these three or four simple steps and know that they're done.                                          |
| 53:53      | If I'm using all these programs the way they're meant to be used and rather than hoping their            |
| 53:57      | AppleScript dictionaries do what they say and using keyboard or Maestro or something                    |
| 54:01      | to do the fancier stuff that the programs were unprepared for, like I don't want to                      |
| 54:06      | be thinking about my program.                                                                            |
| 54:07      | It's like one more level of concern.                                                                     |
| 54:09      | So unless it was extremely fraught or too complicated for me to do manually, because                     |
| 54:15      | I would actually forget a step because there were 17 steps or something, then maybe I'd                  |
| 54:19      | dedicate the time to automate it.                                                                        |
| 54:20      | But honestly, if I had a system like that before and after every podcast, I would consider               |
| 54:23      | a different system.                                                                                      |
| 54:24      | But I'm even thinking like just like setting up your windows, like I have a, there's an                  |
| 54:29      | app called [[Moom]], M-O-O-M, that's a window manager and you can take a snapshot of your                    |
| 54:34      | windows exactly how you like them.                                                                       |
| 54:36      | You can save it, you press one button and I do it all the time when I'm switching modes.                 |
| 54:41      | It's not necessarily going to set my inputs for podcasting, but it can get kind of me                    |
| 54:46      | get all the screen set up for me, stuff like that.                                                       |
| 54:51      | But to me, it's the geeky fun part for me.                                                               |
| 54:54      | It's not the job.                                                                                        |
| 54:56      | And so putting that stuff together doesn't take that long and you get a benefit from                     |
| 55:00      | it.                                                                                                      |
| 55:01      | But maybe the answer there is an automation that doesn't go quite as deep as a programmer                |
| 55:06      | you would think, oh, I don't want just to set up the windows.                                            |
| 55:09      | I want everything done.                                                                                  |
| 55:10      | I want to push one button and just be ready to record.                                                   |
| 55:13      | And as someone who's not a programmer, I'm okay getting just some of the intermediate                    |
| 55:17      | steps automated.                                                                                         |
| 55:18      | Yeah.                                                                                                    |
| 55:19      | I mean, what I do for my podcast setup, because I use my laptop, I frequently use the bedrooms           |
| 55:25      | podcast studio.                                                                                          |
| 55:26      | It is currently five to four in the morning.                                                             |
| 55:27      | So surprise, I'm not recording in the bedroom today, which means everything's a bit different            |
| 55:31      | and that's enough to throw me off.                                                                       |
| 55:33      | But whenever I plug in my XLR mixer, it triggers a [[Keyboard Maestro]].                                     |
| 55:40      | And the [[Keyboard Maestro]] itself doesn't do a lot.                                                        |
| 55:42      | It mostly just opens programs.                                                                           |
| 55:44      | So it opens, for example, the audio inputs and everything.                                               |
| 55:49      | And it's like, hey, make sure the audio input and output are set correctly.                              |
| 55:53      | And make sure that this is actually being interpreted as a 44,100 whatever it is input                   |
| 55:59      | instead of 48,000, which they discovered today depends on the port I plug it into as to whether          |
| 56:03      | or not it knows which frequency it should be recording at.                                               |
| 56:10      | And so it walks me through the steps and then at the end, it opens clip and [[Skype]] and everything         |
| 56:15      | to make sure that I'm ready for recording and opens [[Audio Hijack]].                                        |
| 56:18      | So I have some more automated it, but just like you, John, I'm hesitant enough that I                    |
| 56:25      | could theoretically make this 100% automatic, but I'm just hesitant enough that I don't                  |
| 56:31      | want to do that.                                                                                         |
| 56:32      | So.                                                                                                      |
| 56:33      | Yeah.                                                                                                    |
| 56:34      | For the window positioning stuff, I've always been wary.                                                 |
| 56:35      | I'm so picky about my window position.                                                                   |
| 56:38      | So I've been wary of any program that's going to move my windows because I'm afraid it's                 |
| 56:40      | just going to scramble my world.                                                                         |
| 56:42      | And in practice, good Mac applications, remember your window positions.                                  |
| 56:47      | Like that's, you know, [[Skype]] is not a good Mac application as we all know.                               |
| 56:53      | It is the only window that I have to move [[Audio Hijack]] is always in the same place.                      |
| 56:57      | When I, you know, when I launch it, it opens the podcasting, my podcasting setup, like                   |
| 57:01      | I don't have to touch it.                                                                                |
| 57:03      | My, you know, the thing that has my show notes is in my web browser, that's window that's                |
| 57:06      | always in the same spot.                                                                                 |
| 57:09      | Everything is, you know, all of the folders where the recordings are going to go.                        |
| 57:13      | They're, you know, in the same spots on either like a drag thing doc or on my desktop or in              |
| 57:18      | the regular doc, like things stay where I put them.                                                      |
| 57:19      | So I arranged my workspace.                                                                              |
| 57:21      | I've been lucky enough not to have a situation where what if you have to use [[Audio Hijack]]                |
| 57:26      | for two different podcasts with two very different setups, and then you have to pick                     |
| 57:29      | which one or what if you have to want this applications or windows range this way for                    |
| 57:33      | this thing or this way for that thing, then I might feel like maybe I have to get into                   |
| 57:37      | either multiple desktops or something, some automated way to save and restore workspaces.                |
| 57:41      | But thus far, and you know, low these many decades in computing, I have not needed that                  |
| 57:47      | kind of automation.                                                                                      |
| 57:48      | And so I pretty much just arrange things in a way that works for me and just trust that                  |
| 57:53      | the next time I launch that same program or open that same document or do the same thing                 |
| 57:56      | that things will be where I left them.                                                                   |
| 57:58      | That's a really important part of the way I work, which is why I get so angry when programs              |
| 58:02      | don't honour, don't honour my, my inputs, they don't, they don't take my work seriously.                   |
| 58:06      | I moved that window there for a reason, it wasn't frivolous.                                             |
| 58:09      | So John, as someone who started a website called hypercritical, if Tim Cook called you                   |
| 58:14      | and said, Hey, John, we want you to become the overlord of automation at Apple, you know,                |
| 58:21      | what were some, what would be some steps you'd take to make it better for people?                        |
| 58:25      | Kind of touched on this before, and I feel like what's, what's lacking, and maybe Sal                    |
| 58:30      | would agree is a proper modern successor to AppleScript and Apple events.                               |
| 58:37      | Because shortcuts are great and everything, but on the Mac, all we've got is AppleScript                |
| 58:42      | and Apple events, and on iOS, we have none of those things, but we have a bunch of other                 |
| 58:47      | technologies.                                                                                            |
| 58:48      | Both of those things need to be changed on the Mac, I feel like Apple events and Apple                   |
| 58:50      | script are old languages that are not suited to the modern world, so they need to be updated             |
| 58:55      | and revamped.                                                                                            |
| 58:56      | And on iOS, we don't have any equivalent of AppleScript and AppleScript dictionaries                   |
| 58:59      | for automation where, like we said before, you have a general purpose system of for people               |
| 59:03      | who are writing programs to define the nouns and verbs that their programs support in a                  |
| 59:06      | flexible way that doesn't hem people in.                                                                 |
| 59:09      | You can build on that and build building blocks and shortcuts on top of that and then work               |
| 59:14      | your way up the stack.                                                                                   |
| 59:15      | But that type of general purpose, program or automation, both as a way for you to drive                  |
| 59:22      | other programs and as a way for people who write other programs to allow themselves to                   |
| 59:25      | be driven.                                                                                               |
| 59:26      | And you see Omni doing that, I think there's a bunch of other applications, Mac applications             |
| 59:30      | out there that use like JS Talk or other JavaScript based automations, like everyone's rolling           |
| 59:35      | their own because they realise, well, we could use AppleScript and if we're a good Mac,                 |
| 59:39      | Mac application, we do, but it's kind of creaky and everything.                                          |
| 59:43      | And it would be nice if you could write your automation to JavaScript, which way more people             |
| 59:46      | know than AppleScript.                                                                                  |
| 59:47      | So that's why people like Omni and I was there, maybe [[Rogue Amoeba]], no, [[Flying Meat Software\|Flying Meat]], maybe Gus               |
| 59:53      | Mueller.                                                                                                 |
| 59:54      | Anyway, a bunch of good Mac applications have taken it upon themselves to make their own                 |
| 59:59      | system for doing automation because Apple hasn't provided a modern system level and that's               |
| 01:00:05   | on the Mac where at least you have options.                                                              |
| 01:00:07   | On iOS, there's nothing because Apple has to officially support it because it's the only                 |
| 01:00:10   | way anything will work.                                                                                  |
| 01:00:11   | I mean, you've got shortcuts, but there's no next level to that.                                         |
| 01:00:14   | There's no, and it would be easier.                                                                      |
| 01:00:16   | Like instead of doing, you know, every time Apple comes out with new one of these APIs,                  |
| 01:00:20   | I had these hooks so you can support share sheets so you can support shortcuts and Siri                  |
| 01:00:25   | shortcuts and that's all well and good.                                                                  |
| 01:00:28   | But if you could just say all iOS applications like Mac applications in the past should be               |
| 01:00:34   | automatable, so every time you're making something, like just like applications should be accessible,    |
| 01:00:39   | like the sort of accessibility stuff that's built into the frameworks, automation should                 |
| 01:00:42   | also be built into the frameworks in a modern way, in a deep way, and yes, it would have                 |
| 01:00:46   | to be in a secure way.                                                                                   |
| 01:00:47   | So I'm not saying this is an easy problem, but that's what I think Apple needs on all                    |
| 01:00:52   | of its platforms, a modern successor to AppleScript and Apple events.                                   |
| 01:00:57   | Across both platforms.                                                                                   |
| 01:00:58   | Right.                                                                                                   |
| 01:00:59   | Obviously it'd be the same across both platforms and it would have to take security into account         |
| 01:01:02   | and it's a very difficult job to balance those things, but I think that's what's needed.                 |
| 01:01:05   | Salt me, man.                                                                                            |
| 01:01:06   | You're hired.                                                                                            |
| 01:01:07   | Yeah.                                                                                                    |
| 01:01:08   | Yeah.                                                                                                    |
| 01:01:09   | Just make it happen.                                                                                     |
| 01:01:10   | Yes.                                                                                                     |
| 01:01:11   | Well, John, where can folks find you?                                                                    |
| 01:01:12   | Where am I these days?                                                                                   |
| 01:01:14   | Well, I do have a website that I update roughly once a year if I'm lucky at hypercritical.co.            |
| 01:01:19   | So you're not going to find much interesting there unless you dig and then you can find                  |
| 01:01:22   | the page that lists all of my current podcasts of which there are many, I guess, accidental              |
| 01:01:27   | tech podcasts, atp.fm, reconcilable differences, that's at relay.fm, robot or not, that's                |
| 01:01:35   | there on the incomparable network.                                                                       |
| 01:01:37   | And I am an occasional guest on the incomparable podcast itself.                                         |
| 01:01:41   | And finally, I guess on Twitter, you can find me, it's Syracuse on Twitter, it's just my                 |
| 01:01:45   | last name.                                                                                               |
| 01:01:46   | Well, thanks so much for giving us some time today.                                                      |
| 01:01:49   | I really was curious about your thoughts about automation because I know after all those                 |
| 01:01:54   | years writing so much about the Mac over at Ars Technica, I know you had a lot of thoughts               |
| 01:01:58   | on this.                                                                                                 |
| 01:01:59   | I'm really happy that you were willing to share with our audience and I appreciate that.                 |
| 01:02:03   | Well, thanks for having me.                                                                              |
| 01:02:04   | This was fun.                                                                                            |
| 01:02:05   | Yes.                                                                                                     |
| 01:02:06   | Thank you very much for coming on.                                                                       |
| 01:02:08   | So we are The Automators.                                                                                |
| 01:02:09   | You can find us over at relay.fm/automators and we'll see you in a couple of weeks.                |
| 01:02:15   | Good bye.                                                                                                |
