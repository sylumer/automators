---
status: "complete"
fc-date:
  year: 2024
  month: 11
  day: 16
fc-category: "podcast"
podcast: "Automators"
published: 2024-11-16
duration: 4862
formattedduration: "01:21:02"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/168"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators168.mp3"
episode: 168
title: "168: Final Feedback"
---
![Automators Logo.jpg|200x200](Logo.jpg)

# Synopsis
As the Automators ride off into the sunset, they talk about the importance and future of automation and answer listener questions.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 168 Discussion](https://talk.automators.fm/t/168-final-feedback/18164)

# Sponsors
- [[Notion (Sponsor)|Notion]] Try the powerful, easy-to-use Notion AI today.
- [[Data Citizens Dialogues (Sponsor)|Data Citizens Dialogues]] Unpacking the importance of data and its impact on the world. Listen now.
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Find the qualified candidates you want to talk to, faster. Post your job for free today.

# Show Notes
As the Automators ride off into the sunset, they talk about the importance and future of automation and answer listener questions.

- [xkcd: Is It Worth the Time?](https://xkcd.com/1205/)
- [xkcd: Automation](https://xkcd.com/1319/)
- [Home Assistant](https://www.home-assistant.io/)
- [MX Creative Console | Logitech](https://www.logitech.com/en-gb/products/keyboards/buy-mx-creative-console.920-012932.html)
- [Loupedeck Products | Custom Consoles, Bundles & More](https://loupedeck.com/products/)
- [Plugins & Profiles | Logitech Marketplace](https://www.logitech.com/en-gb/software/marketplace/plugin-listing.html)
- [Obsidian Vault for Automators Podcast](https://github.com/sylumer/automators)

# Transcription
  
| Time Index | Transcription                                                                                                             |
|:---------- |:------------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the show where we talk things, all things smart tech                                    |
| 00:07      | automation and getting technology to do your work for you.                                                                |
| 00:11      | I am Rosemary Orchard, and I'm joined by my pal and co-host, David Sparks.                                                |
| 00:15      | Hey, David, how are you?                                                                                                  |
| 00:16      | I am great, Rose.                                                                                                         |
| 00:17      | I'm a little sad because this is our last episode of the Automators podcast, but I'm                                      |
| 00:22      | so happy to be here talking to you today.                                                                                 |
| 00:25      | Yes, yes.                                                                                                                 |
| 00:26      | I am going to miss the show a lot, as we have heard from many listeners that they will                                    |
| 00:32      | as well, which has been lovely to hear, but unfortunately, it is one of those things where                                |
| 00:37      | this is what we need to do, and so that's what we're going to do, but that doesn't mean                                   |
| 00:40      | we're not going to try and deliver a great show for everybody.                                                            |
| 00:43      | Yeah, and for those who missed out for any reason, Rose and I both are just incredibly                                    |
| 00:50      | busy and we had to make some tough decisions.                                                                             |
| 00:53      | This show takes a lot of work to make it right, and it ended up something that we decided                                 |
| 00:59      | to retire, sort of.                                                                                                       |
| 01:03      | The more I think about it, we're sort of retiring it because that doesn't mean that Rosemary                              |
| 01:08      | Orchard isn't going to be guesting on [[Mac Power Users]] once in a while, and it's going to mean                         |
| 01:12      | mean [[Mac Power Users\|MPU]] is going to be talking about automation more now that this platform won't be here.          |
| 01:19      | So definitely follow over at [[Mac Power Users\|MPU]] and keep an eye on the show titles if you're not interested         |
| 01:24      | in everything we do, but keep an eye for the automation related titles, and Rose will be                                  |
| 01:28      | guesting, and I think we're going to be able to get a lot of automation coverage, just not                                |
| 01:34      | as much as we were doing with a twice monthly show, but I've never shut down a podcast                                    |
| 01:40      | before, so this is a very strange experience.                                                                             |
| 01:42      | I woke up this morning just feeling kind of glum about it, but at the same time, I know                                   |
| 01:47      | it's what we need to do, and it was kind of something both of us are going through right                                  |
| 01:52      | now.                                                                                                                      |
| 01:53      | We just need a little more time to make the other stuff we're working on as good as possible,                             |
| 01:58      | and that's life.                                                                                                          |
| 02:00      | Yes, yeah, exactly, and we always want to give people the best possible podcast, so if we                                 |
| 02:07      | can't deliver that, then we will be selling ourselves short as well as all of our fabulous                                |
| 02:13      | listeners like you.                                                                                                       |
| 02:14      | So yeah, we had to do the right thing, but we really wanted to do the right thing.                                        |
| 02:18      | Yes, so I thought for today's final episode, we've got some big picture automation questions                              |
| 02:25      | to talk about and answer, but got a bunch of great feedback, and on the Automator's                                       |
| 02:31      | Max, the ad for the extended version show, we're going to talk about where we see the future                              |
| 02:37      | of [[Apple Intelligence]] and automation kind of coming together.                                                         |
| 02:41      | So we've got a lot of good stuff to talk about today.                                                                     |
| 02:44      | I guess we should just get started with the big question, Rose.                                                           |
| 02:47      | Why do you automate?                                                                                                      |
| 02:51      | This is a challenging one, David, because there's a number of reasons.                                                    |
| 02:57      | A lot of the time, I will start by creating a little automation for a thing, because there's                              |
| 03:03      | multiple steps to it, and I just need to get those steps right.                                                           |
| 03:07      | I have to do them in the right order, and I can't miss a step.                                                            |
| 03:11      | If you missed step six, then everything goes haywire wrong.                                                               |
| 03:15      | So that's a lot of the time where I start with, it's about the accuracy of the thing                                      |
| 03:21      | that I'm doing versus the speed in particular, but sometimes it's also, I know I can do this                              |
| 03:28      | task manually right now, but actually, it's faster for me to write a quick script, and                                    |
| 03:34      | I'm using script as a generic term.                                                                                       |
| 03:36      | It could be a shortcut, it could be a [[Keyboard Maestro]] macro, it could be a script script,                            |
| 03:40      | but some kind of automation solution to just do the thing, because I need to take 20 lines                                |
| 03:46      | from here and combine them with 20 lines over there to create 400 results.                                                |
| 03:50      | So it's a little bit easier to do that sometimes.                                                                         |
| 03:53      | What about you?                                                                                                           |
| 03:54      | Well, I think you hit the big points there, but I think the first one is just friction.                                   |
| 04:01      | There's a lot of stuff that we encounter, particularly with the digital devices in our                                    |
| 04:06      | lives, where in an effort to make it accessible to everyone, they made it tedious for power                               |
| 04:13      | users.                                                                                                                    |
| 04:14      | You've got to go through and push this button, and then push that button, and all of that                                 |
| 04:18      | makes sense for a lot of people who don't do this stuff very often, are particularly                                      |
| 04:23      | tech literate, and you just want to make sure they've got the ability to use the technology                               |
| 04:28      | in a way that benefits them, but all of that adds extra friction, and there's an underlying                               |
| 04:35      | part of me that absolutely hates that friction.                                                                           |
| 04:40      | If I have to put something in and then do one extra step, every time I do it, it makes                                    |
| 04:46      | me nuts, and I think that's been true for me since I first started using computers.                                       |
| 04:52      | Back in the old Tandy colour computer, too, I was looking for ways to automate things.                                    |
| 04:56      | I think I remember I wrote a script about when you plugged in the cassette recorder                                       |
| 05:02      | for saving files, and there was just stuff I was doing back in the original hardware.                                     |
| 05:09      | My whole life, I've always been bugged by that, and I think a lot of people listen to                                     |
| 05:12      | the show have this same affliction, and it feels really good to fix that.                                                 |
| 05:18      | When you have an automation, whether you're creating a project list, an [[OmniFocus]], or you                             |
| 05:23      | do some little bit of magic with [[Shortcuts]], or something more expansive that does some                                |
| 05:29      | of the cool stuff Rose does in the behind the scenes on our show, every time you see                                      |
| 05:34      | it work efficiently, there's a part of me that releases happy chemicals.                                                  |
| 05:39      | I don't know how else to put it.                                                                                          |
| 05:41      | That's I think the big reason for me is the elimination of friction.                                                      |
| 05:45      | The side benefit, of course, is when you automate, it's consistent.                                                       |
| 05:50      | Not only does it mean that you don't have to do it, it means that you won't get it wrong.                                 |
| 05:56      | A great example for me with that is mail sorting.                                                                         |
| 05:59      | All these people who sort their mail into folders, and they sit there and they drag                                       |
| 06:03      | it into folders, and manually, it takes a ton of time to do that, and there's so many great                               |
| 06:10      | automation tools, whether it's server side or client side, or there's just so many                                        |
| 06:15      | ways to sort that mail faster.                                                                                            |
| 06:19      | When you put it in automation, it always puts it in the right folder.                                                     |
| 06:23      | It always gets it right.                                                                                                  |
| 06:25      | When you do it with your mouse, if you're not paying close attention, occasionally you're                                 |
| 06:28      | going to get in the wrong place and you won't be able to find it.                                                         |
| 06:31      | That's a good example where automation is consistent.                                                                     |
| 06:36      | It's faster, eliminates friction, and it's consistent.                                                                    |
| 06:40      | I think that's just a great goal when you're using computers to be able to do that kind                                   |
| 06:46      | of thing, and to do it yourself.                                                                                          |
| 06:48      | I think the other thing about automation is we've got to a point where anybody can do                                     |
| 06:54      | it.                                                                                                                       |
| 06:55      | The big goal of this show, frankly, was that not necessarily just the high-end computer                                   |
| 07:01      | programmer types, but people who are dentists or students or people who have very little                                  |
| 07:06      | automation experience could listen to an episode and pick up something and turn it into an                                |
| 07:12      | automation thing, which I think leads to the next point.                                                                  |
| 07:15      | I know I'm kind of rambling here, but it's fun to automate.                                                               |
| 07:19      | It's fun to do this stuff and hook it all up and make it work.                                                            |
| 07:25      | Yes, absolutely.                                                                                                          |
| 07:26      | I think that is part of the satisfaction.                                                                                 |
| 07:30      | If I just had 20 records here, 20 records there, and I need to create a combination                                       |
| 07:36      | where all of the first 20 records can be combined with all the second 20 records, I can do that                           |
| 07:41      | with a spreadsheet or I can just copy and paste things or whatever it is, but creating                                    |
| 07:46      | a little automation for it satisfies that little itch in my brain that wants to solve                                     |
| 07:51      | problems in a fun way, because that sort of problem solving for me is fun.                                                |
| 07:57      | Even if that bit's not fun, there is always a sense of satisfaction for a lot of things                                   |
| 08:03      | in knowing that you've done the job right, and that is the other part of what I really                                    |
| 08:09      | love about automation.                                                                                                    |
| 08:11      | I've created this project in [[OmniFocus]], and I've got the folder over here, and I've got                               |
| 08:16      | a document here that I can take notes into right away for this.                                                           |
| 08:21      | I can see my task list over there, all of those things, because I pressed a button and                                    |
| 08:28      | typed a number.                                                                                                           |
| 08:29      | Then next time, I would sit down to record an episode of Automators, the same thing                                       |
| 08:34      | would happen.                                                                                                             |
| 08:35      | It would pop up and say, hey, what's the next episode of Automators?                                                      |
| 08:37      | By the way, I already added one, because I'm smart enough to remember it.                                                 |
| 08:42      | Create the folder, open [[OmniFocus]] to show me what I need to know.                                                     |
| 08:45      | Get some tasks for the next episode, and so on and so forth, and then I can see all of                                    |
| 08:50      | the things that I need to do, and it just works.                                                                          |
| 08:54      | When I finish, the files automatically get renamed and dropped into the folder that Jim                                   |
| 08:59      | needs access to, or a wonderful editor, and everything just magically happens.                                            |
| 09:04      | Knowing that I don't have to sit there and manually do 20 things to make this happen                                      |
| 09:10      | is great.                                                                                                                 |
| 09:12      | Does it save time?                                                                                                        |
| 09:13      | Yes.                                                                                                                      |
| 09:14      | Yes, it does save time.                                                                                                   |
| 09:15      | But it's also just, I got the job done, I got the job done right, and it didn't matter                                    |
| 09:19      | how turned all my brain was when I pressed the button, and how much of a tiz I was in                                     |
| 09:24      | because I was running late from this or that or whatever it was, the thing happened because                               |
| 09:28      | I clicked the button, and that was all I needed to do, and then it ran off and it did the magic.                          |
| 09:33      | I think that for me is the most magical part.                                                                             |
| 09:35      | Yeah.                                                                                                                     |
| 09:36      | Another great thing about automation is that the knowledge is cumulative.                                                 |
| 09:41      | As you learn automation, it just adds onto itself.                                                                        |
| 09:45      | If you start out just making a two-step shortcut, before you know it, you're making four-step                             |
| 09:50      | shortcuts.                                                                                                                |
| 09:51      | Then before you know it, then you're combining it with a [[Keyboard Maestro]] script, and then suddenly                   |
| 09:56      | you find yourself writing an [[AppleScript]], and the knowledge accumulates.                                              |
| 10:01      | Once you have, I would use the analogy of a tool belt.                                                                    |
| 10:06      | Once you start learning the different tools, so you've got the hammer and the screwdriver                                 |
| 10:09      | and the pliers, you'd be surprised what all you can do with automation because you've                                     |
| 10:15      | got the knowledge of these various tools and how to use them together.                                                    |
| 10:21      | It's very satisfying in that way that the knowledge, it's not like you have to start                                      |
| 10:26      | from reinvention of the wheel with every time you automate something.                                                     |
| 10:30      | Every time you do another thing, you can use a little bit of the knowledge you learned                                    |
| 10:34      | the last time you did something like that.                                                                                |
| 10:36      | Absolutely.                                                                                                               |
| 10:38      | There's another piece of this, though, and I don't think we've ever really addressed                                      |
| 10:41      | this question on this show, but I think it's important to discuss here, especially at the                                 |
| 10:44      | end, is what automation can't do for you.                                                                                 |
| 10:49      | The thing that brings us up in my mind is, I hear from people, especially with the emergence                              |
| 10:55      | of [[ChatGPT]] and [[Large Language Model\|large language models]], looking for automation to go a step further.          |
| 11:03      | I talked about this in the [OmniFocus Field Guide](https://learn.macsparky.com), which led to some emails from folks      |
| 11:08      | that were throwing all their tasks at artificial intelligence saying, okay, look at all these                             |
| 11:14      | tasks I've written down and decide which ones I should do today.                                                          |
| 11:19      | People also do that with calendaring now, and there's apps out there specialising in                                      |
| 11:23      | figuring out, what should you calendar today and what should you do today?                                                |
| 11:27      | I personally feel like automation is great for the mechanical bits, but it's not good                                     |
| 11:34      | for the decision bits, and maybe this is just, we're too early in the process, and that someday                           |
| 11:41      | in the future, AI will get so good that I'll change my mind on it, but I feel like there's                                |
| 11:45      | parts of this stuff where we as humans need to take an active role, and automation really                                 |
| 11:51      | isn't the answer.                                                                                                         |
| 11:53      | Yeah, I think it's one of these things where you can use automation to give you a serious                                 |
| 12:00      | head start on some of these things, like for example, creating a packing list for a trip.                                 |
| 12:05      | You could ask [[ChatGPT]] or [[Claude]] or any of these AIs to create a packing list for a trip                           |
| 12:13      | and you'll be traveling to this particular location on these dates, and so it can do                                      |
| 12:18      | things like look up what the average weather pattern is, it can count how many days there                                 |
| 12:22      | are, it might not be able to count how many hours are in strawberry, but it can try and                                   |
| 12:26      | count how many days there are in your trip, and therefore it will suggest things like                                     |
| 12:29      | five pairs of underwear because you know you're gone for five days, things like that, and                                 |
| 12:33      | that's great, but it's only suggesting things based on its knowledge, and I think what is                                 |
| 12:42      | really easy to forget is we have a lot of contextual awareness of things that we are                                      |
| 12:48      | not ourselves aware of.                                                                                                   |
| 12:50      | So if I were to ask it to organise, you know, I gave the testers at work today a couple                                   |
| 12:56      | of new things to get started on, and that means that there's two testers looking at                                       |
| 13:00      | two different things that I've created, and both of them are saying like, hey, I found                                    |
| 13:05      | like this little bit that doesn't look quite right, that little bit doesn't look quite                                    |
| 13:07      | right, there's a typo here, so on and so forth.                                                                           |
| 13:10      | Absolutely fine.                                                                                                          |
| 13:11      | I could ask it to organise, handling all of those, and tell me which bug, which bug                                       |
| 13:19      | do I work on first, cool, but it doesn't know that one of those projects has potentially                                  |
| 13:26      | a lot more associated issues with it than the other, and so on and so forth, so I would                                   |
| 13:31      | have to give it that information, and it doesn't necessarily know by looking at the titles                                |
| 13:37      | that actually these two things, they're linked, and I can see that because I can look at it                               |
| 13:42      | and I know that they're linked, and if I'm going to have to do all that information to                                    |
| 13:45      | deliver that context into an AI bot, by the time I've done that, I can have also just                                     |
| 13:52      | had a look at the five different things that I've been asked to look at and decided I'm                                   |
| 13:56      | going to do this one first because it's probably going to do that one as well, and then I'm                               |
| 13:59      | going to tackle those three in whatever order appeals to me most in the moment because it                                 |
| 14:03      | depends on how the first couple go, and I think it's one of these things where we still                                   |
| 14:09      | need the checks and balances of ourselves in there, you can't just turn your brain off                                    |
| 14:13      | after you've asked [[ChatGPT]] to create a packing list for Berlin, because otherwise it'll tell                          |
| 14:17      | you to pack five pairs of underwear, you pack five pairs of underwear and you don't realise                               |
| 14:20      | it was including socks as underwear. Are socks a separate packing list item? Yes or no? Well,                             |
| 14:27      | that depends on you and your context, but if you end up on holiday somewhere and you                                      |
| 14:31      | don't have socks, you can try and blame [[ChatGPT]], but at the end of the day, you're the one                            |
| 14:35      | that put it in the suitcase, so we still have to take some responsibility for these things,                               |
| 14:40      | and it's very easy to get caught up in that. It seems like it's a really powerful tool,                                   |
| 14:45      | and it absolutely is, but it's not perfect, none of these things are, and we always need                                  |
| 14:50      | to double check these things ourselves and make sure that we've actually got a good result                                |
| 14:56      | that we can work with, or don't see what is produced by an AI as a result, see it as a                                    |
| 15:02      | stepping stone to get to the final result. It just needs more of those final checks before                                |
| 15:08      | you take it and pass go, and collect your $200. Yeah, I mean, one of the primary reasons I                                |
| 15:14      | jump out of bed every day and make content for [MacSparky](https://macsparky.com) is because I feel like there's          |
| 15:20      | something I have to add, and I have always been an optimist about technology. I believe                                   |
| 15:26      | that it can make your life better. It can make you better at things you do. It can be truly                               |
| 15:32      | a great assistant for us. There are elements of AI that I think one day will give us all                                  |
| 15:38      | so much help that we wouldn't have had otherwise, and I see that, but I also feel fundamentally                           |
| 15:45      | that Silicon Valley has failed us. When we first saw computers, when I was a kid and,                                     |
| 15:51      | the Timex Sinclair and the Tandy Colour Computers were first showing up, we all said, isn't                               |
| 15:56      | this great? We're all going to be so much more productive and better at things when                                       |
| 16:01      | we can dump our typewriters and calculators and have a computer that does so much of                                      |
| 16:05      | this stuff for us. What happened instead was a bunch of people in Silicon Valley realised                                 |
| 16:12      | they could make a lot of money by selling advertising, and a lot of what comes out of                                     |
| 16:17      | the technology sector is not meant to make your life better or make you better, but it's                                  |
| 16:22      | meant to turn you into a product so it can sell advertising. I do think if you're knowledgeable                           |
| 16:29      | about that, if you go at this mindfully that you can truly live the dream, you can make                                   |
| 16:36      | this technology work for you, you can make your life better using it, and automation                                      |
| 16:41      | absolutely fits in that. It's a big piece of the puzzle in my mind, but the danger like                                   |
| 16:47      | Rose was saying is if you go too far down the rabbit hole with this stuff and you start                                   |
| 16:50      | thinking you can automate the humaneness part, well, you can't, and you shouldn't want to.                                |
| 16:57      | So that's the trick. You got to find those limits. I think the other one, and we've                                       |
| 17:01      | talked about this on the show, is be careful about automation rabbit holes. If you're only                                |
| 17:06      | going to do something once or twice, don't spend two days writing an automation for it.                                   |
| 17:10      | Just do it. Everybody has to make their own decision about the payoff for that. Rose and                                  |
| 17:16      | I tend to go down the rabbit hole pretty quickly, but we share it with the stuff we make and                              |
| 17:21      | where we publish shows and things, so other people benefit from it. But if you're just                                    |
| 17:26      | making it for yourself, be careful about that. But I think the bigger question as we are                                  |
| 17:31      | at this kind of turning point with AI emerging is think about the kinds of things you want                                |
| 17:37      | to automate and do it thoughtfully. Just be careful. I don't think it's ever going to                                     |
| 17:43      | pick what your best calendar items are. I think you need to pick that. You need to take ownership                         |
| 17:48      | of that. Yeah, exactly. And going back to what you said, David, about if you're only                                      |
| 17:54      | going to go do this once or twice, don't spend forever writing automations on it. Do consider                             |
| 17:59      | how long is it going to take to do this task and then check that it was done correctly versus                             |
| 18:05      | how long is it going to take to build the automation? Check the automation works correctly                                |
| 18:10      | and then run it. Because sometimes it might take you two days to automate something you're                                |
| 18:14      | only going to do once, but if that was going to take you two months to do it by hand, that's                              |
| 18:19      | absolutely worth it. It takes you two days to automate a task that should have taken                                      |
| 18:22      | you two minutes. It's a good learning exercise, 100%, but it may not have been the best use                               |
| 18:28      | of your time. And the other thing I'll just say relating to automation is ask AI for suggestions                          |
| 18:38      | on how to automate things by all means, but never assume that any code that it gives you                                  |
| 18:44      | is correct. Make an effort to try and understand what it's saying and learn the meaning of                                |
| 18:51      | what it's actually done and check whether or not it's done it correctly. Because I have                                   |
| 18:56      | seen so much code sped out by various AIs that just straight up doesn't work or it doesn't                                |
| 19:02      | do what you've requested it to. But unless you know how to code and the code that it's                                    |
| 19:07      | produced, that's not necessarily obvious. I think we're lucky with [[Shortcuts]] and respect                              |
| 19:12      | that we can't just write a script and that be the shortcut. I know you can with [[Jellycuts]]                             |
| 19:18      | and some other things actually write it as a script and then have it converted                                            |
| 19:23      | into a shortcut, but it's not quite the same thing. And [[ChatGPT]] is fortunately for us                                 |
| 19:27      | not there yet because I can't imagine the fun and games that would have randomly creating                                 |
| 19:33      | [[Shortcuts]] actions that just straight up don't exist. Because that would be interesting,                               |
| 19:38      | but not necessarily great for the person trying to do the automation.                                                     |
| 19:44      | This episode of The Automators is brought to you by Notion. Try the powerful, easy to                                     |
| 19:49      | use Notion AI today. Go to Notion.com/Automators. There's so much to love about                                           |
| 19:56      | Notion. I use Notion to run the back end of MacSparky and it's such a great collaborative                                 |
| 20:01      | tool. The addition of Notion AI has made a huge difference. We put transcripts of everything                              |
| 20:07      | I publish in there. We use it to flush out outlines for ideas. It's just really handy.                                    |
| 20:15      | Just yesterday I used Notion AI to alter the formatting of some text I had written. All                                   |
| 20:21      | of this is available right in Notion with Notion AI. The new Notion AI is a single AI                                     |
| 20:26      | tool that does it all. You can search across Notion and other apps, generate docs in your                                 |
| 20:32      | style, analyse PDFs and images, and chat with you about anything. Notion is a perfect place                               |
| 20:38      | to organise your tasks, track your habits, write beautiful docs, and collaborate with                                     |
| 20:43      | your team. The more content you add to Notion, the more Notion AI can personalise its responses                           |
| 20:49      | for you. Unlike generic chatbots, Notion AI already has the context of your work. Notion                                  |
| 20:56      | AI is connected to multiple knowledge sources that uses AI knowledge from GPT-4 and Claude                                |
| 21:03      | to chat with you about any topic. It can search across thousands of Notion docs and seconds                               |
| 21:09      | to quickly answer any question. And with AI connectors, now in beta, Notion AI can search                                 |
| 21:15      | across Slack discussions, Google Docs, Sheets and Slides, and more tools like GitHub and                                  |
| 21:20      | Jira are coming soon. Notion is used by over half of Fortune 500 companies, so you'll be                                  |
| 21:26      | in good company. Try Notion for free when you go to Notion.com/Automators. That's                                         |
| 21:33      | all lowercase letters, N-O-T-I-O-N dot com slash Automators to try the powerful, easy                                     |
| 21:40      | to use Notion AI today. And when you use our link, you're supporting our show. That link,                                 |
| 21:45      | once again, Notion.com/Automators all lowercase. And our thanks to Notion for their                                       |
| 21:50      | support of the Automators and all of Relay FM. We got a lot of great feedback heading                                     |
| 21:58      | into the show today. The first one was a note from Peter. He said, I just wanted to say                                   |
| 22:03      | I understand your decision to wrap up the show. I wear too many hats myself, so I get                                     |
| 22:08      | being stretched too thin. However, I'll be sorry not to have the show in my rotation.                                     |
| 22:12      | I will share that you got me started on my journey with [[Home Assistant]] back when Rosemary                             |
| 22:17      | talked about it in 2021. I'm now all in with the platform and I've learned so much along                                  |
| 22:22      | the way. And then he said some other nice things to us. I feel like [[Home Assistant]] was                                |
| 22:28      | one of the big coverage points of the show throughout its run. And for good reason.                                       |
| 22:34      | It's like the home stuff, but so much better. Yes, yes. And I mean, just to go back for                                   |
| 22:42      | anybody who's looked at it before and gone like, oh, it seems like it's quite big and                                     |
| 22:45      | someone like it absolutely can be big. But the purpose of [[Home Assistant]] is essentially                               |
| 22:50      | to replace [[HomeKit]]. But that doesn't mean that you don't get [[HomeKit]]. The idea with                               |
| 22:55      | [[Home Assistant]] really big goal. Put everything in [[Home Assistant]] and then share it back to                        |
| 23:00      | [[HomeKit]] or to your [[Amazon Alexa\|Alexas]] or [[Google Home]], or they've just announced they're working             |
| 23:07      | on, they announced at [GitHub Universe](https://githubuniverse.com) they've got a physical voice assistant box that you   |
| 23:12      | can buy now, which is really cool. And that sort of thing is pretty awesome. But for me,                                  |
| 23:19      | the power of [[Home Assistant]] 100% is, okay, I was ambitious and I wrote a script to do                                 |
| 23:26      | a thing or wrote an automation to do a thing. And now at three o'clock in the morning, my                                 |
| 23:31      | lights turn on. Why? And the fact that I can just go into the lookbook and see Rose did                                   |
| 23:36      | a silly. Why did Rose do a silly? Ah, well, this thing triggered at three o'clock in the                                  |
| 23:41      | morning and that shouldn't have happened. Okay, well, I can fix that. The fact that I can                                 |
| 23:45      | actually go back and figure out what I've done and what's happening and so on and so                                      |
| 23:49      | forth. So when things don't happen or do happen, I can actually see why that is so powerful.                              |
| 23:55      | And especially when you're first really getting started and diving in and creating all these                              |
| 24:00      | fancy automations, it's really nice to be able to see that sort of thing. I need it                                       |
| 24:06      | less now. I make fewer mistakes. But every self done, I get a little over ambitious and                                   |
| 24:11      | write a really cool complicated automation. And then I'm there going, why did the lights                                  |
| 24:15      | in my office turn on as soon as I woke up this morning? That's a question I need to                                       |
| 24:19      | solve. And I can because I can see exactly why it happened, which is great.                                               |
| 24:23      | Yeah, it took me a while to kind of adopt a [[Home Assistant]]. And that's for a couple                                   |
| 24:28      | of reasons. As we've talked about on the show, I was really in deep with [[Apple Home\|Home]], [[HomeKit\|Apple HomeKit]] |
| 24:34      | and the family had adopted it. And I didn't want to mess things up for them. But with                                     |
| 24:40      | Rosa's encouragement, I've really kind of been diving deeper with [[Home Assistant]], particularly                        |
| 24:47      | in my workspace, because I have like a room that is kind of where I do all my work. And                                   |
| 24:51      | they don't need to have any [[HomeKit]] stuff there. So it gives me freedom to do more experimentation                    |
| 24:58      | with it. But also I'll say over the last several years, the [[Home Assistant]] team has made this                         |
| 25:04      | much less of a fringe technology, like the user interface has got better, you know, just                                  |
| 25:11      | booting it up and starting using it is so much easier than it was, even when I first                                      |
| 25:16      | started, that I think this is much more accessible to people than they probably think at this                             |
| 25:21      | point.                                                                                                                    |
| 25:22      | Oh, yeah, absolutely. And I think it's just one of those things where it's, you know,                                     |
| 25:27      | it's worth going and taking a look at it and seeing all of the sorts of things that you                                   |
| 25:32      | can add to your smart home that you can't necessarily do yet through [[HomeKit]]. You know, [[HomeKit]]                   |
| 25:38      | is getting more powerful, especially with the matter support that is coming. But [[Matter]]                               |
| 25:43      | is a bit slow to roll out. You know, that's not a complaint against [[Matter]]. I'd much rather                           |
| 25:47      | they took their time to do it right. But there's a lot of devices that don't necessarily get                              |
| 25:54      | full integration with Home Kit that are already in [[Home Assistant]] or just the ability to be                           |
| 26:00      | like, hey, so I have a sensor on a door, and I also have a heating system. And whenever                                   |
| 26:10      | I want, whenever the automation runs to control my heating system, I just want to check that                              |
| 26:14      | the doors closed before I do that. And when the door opens, I want to turn off the heating                                |
| 26:20      | and then I want to turn it all back on. And I just kind of like want it in one automation.                                |
| 26:25      | I don't want six different automations to control the same sort of thing. And, you know,                                  |
| 26:30      | being able to create the generic entities and devices and so on and so forth. You know,                                   |
| 26:35      | I've got a climate sensor, which checks the humidity, and I have a smart plug on my dehumidifier.                         |
| 26:42      | And I've combined the two of them to create a smart dehumidifier that takes the excess                                    |
| 26:48      | moisture out of the air. You can do the same thing to create a smart humidifier. It's in                                  |
| 26:52      | fact the same integration. And the fact that I can just take two non-smart entities or                                    |
| 26:58      | two smart, smart things and put it on a dumb one and make it smart, that to me is a real                                  |
| 27:03      | killer. You know, I don't have to go around replacing the expensive dehumidifier that                                     |
| 27:07      | I have. I can make it smart with a few cheaper things that I already have.                                                |
| 27:11      | Yeah, I just, this is kind of unrelated, but I bought on Black Friday, I bought a couple                                  |
| 27:18      | of [[eufy]] door locks. And I've been using the ones that I could re-key. They were quickset,                             |
| 27:27      | but they're kind of getting old in a tooth and I had a couple doors that didn't have                                      |
| 27:31      | smart locks on them. And the eufy had a sale on the one that is a smart lock, but                                         |
| 27:36      | it also has a camera in it. And at least for the front door, it's really nice to be able                                  |
| 27:42      | to have the camera pointed right out your front door. And so I went ahead and installed                                   |
| 27:47      | that, but of course it doesn't work with [[HomeKit]]. And like that's one of my, my to-do                                 |
| 27:51      | items is to get all that plugged in. Cause I'm sure that [[eufy]] has a connection to                                     |
| 27:54      | [[Home Assistant]] and I would be able to use [[Home Assistant]] to control those.                                        |
| 27:59      | Yeah, absolutely. Ian says, I've really enjoyed your show for many                                                        |
| 28:03      | years now and I've learned so much from you. I know I'm much more efficient now with my                                   |
| 28:07      | Mac and my programming tasks and tools. The [[Stream Deck]] probably would not be on my desk                              |
| 28:11      | without the Automators podcast. Well, you know, I think a lot of [[Stream Deck\|Stream Decks]] are on                     |
| 28:15      | people's desks because of our show. I think David, by that you mean, there's a lot of                                     |
| 28:20      | [[Stream Deck\|Stream Decks]] on your desk because of this show and that may have bled out to a few listeners             |
| 28:24      | here and there. But yeah, you've definitely got a few.                                                                    |
| 28:28      | And Ian, continue. Sorry to see the show closing, but I understand that it's more burdened                                |
| 28:31      | and fun now. That isn't true. It's still fun. It's just, we're both very busy. So we're                                   |
| 28:36      | just trying to like get a little more management over our life.                                                           |
| 28:40      | Yes.                                                                                                                      |
| 28:41      | The [[Stream Deck]], yeah, that was another very common refrain in the show. I stumbled into                              |
| 28:46      | the [[Stream Deck]]. I actually bought it when I was making the [[Keyboard Maestro]] field guide                          |
| 28:51      | and they had added [[Stream Deck]] support and I said, you know, this is one of those things                              |
| 28:55      | where I'm like, well, I'm not sure I need something like that. I'll get one and play                                      |
| 28:59      | with it and decide whether or not to include it in the field guide. And like within a few                                 |
| 29:05      | days I was like, oh, this is the greatest. And now I have a whole flock of them.                                          |
| 29:12      | Yes. You have a family of [[Stream Deck\|Stream Decks]] now, which is pretty cool.                                        |
| 29:15      | Although one of mine left me. My daughter took my [[Stream Deck#Stream Deck Neo\|Neo]]. She needed it for school. She's   |
| 29:21      | a teacher and she was doing a bunch of stuff at school that was very automation adjacent.                                 |
| 29:26      | So I set her up with it and taught her how to use it. So now it has flown out of the                                      |
| 29:31      | nest, but otherwise I still have a bunch of them.                                                                         |
| 29:35      | Yeah. I mean, something I spotted recently as well, which I have not yet had a chance                                     |
| 29:40      | to purchase and play with, but [[Logitech]] have a creative hub, which looks very similar to                              |
| 29:46      | a [[Stream Deck]]. And I am really curious. It's called the [[Creative Console]]. I'll pop a link                         |
| 29:52      | to it in the show notes. But you get two physical devices with it. So there's one which has                               |
| 29:58      | a dial, like a rotary dial. And then at the top, it's got another sort of scrolly up                                      |
| 30:03      | and down thing and a couple of buttons on it. And then on the other one, there are nine                                   |
| 30:10      | screen buttons and also pagination buttons at the bottom going left and right. And I'm                                    |
| 30:15      | very curious about this. They say that there are plugins available. And I did look and                                    |
| 30:21      | there is a [[Discord]] plugin and [[Photoshop]] plugins, the [[Adobe Creative Suite]]. And I think there's                |
| 30:30      | a [[Philips Hue]] one in beta, but I'm not sure that there's anything beyond that for real kind                           |
| 30:38      | of home automation-y stuff as well, which personally is what I would be looking at as                                     |
| 30:44      | a curiosity, but it still looks pretty cool. So I'm interested to see how this goes. I'm                                  |
| 30:50      | glad to see that somebody else is doing something that is so akin to the [[Stream Deck]]. Not saying                          |
| 30:56      | that it needs direct competition, but it is nice to see an alternative to this with a                                     |
| 31:03      | productivity focus versus a streaming focus. But yeah, it's pretty cool.                                                  |
| 31:06      | Yeah, I think that the idea of it is great and competition is good. I was looking at                                      |
| 31:12      | that because I was thinking, man, that dial alone might be useful to me. I'm already kind                                 |
| 31:16      | of in enough with buttons, but I don't think they sell it separately. I think you have                                    |
| 31:21      | to buy them. No, no, you have to buy the pack of two together. And the thing that makes                                   |
| 31:27      | me pause in particular is it's £199. I believe it's $199, which is not the cheapest. I have                               |
| 31:38      | not checked the price on the [[Stream Deck#Stream Deck Studio\|Stream Deck Studio]] recently, which is the [[Stream Deck]] that you                               |
| 31:44      | mount into a rack, like a server rack, and it's got two physical dials on and a whole                                     |
| 31:49      | bunch of buttons in two rows. But I've checked online. That one is $899, so that one is by                                |
| 31:58      | far the most expensive. The [[Stream Deck#Stream Deck XL\|Stream Deck XL]], which has got 32 buttons on it, I think, yeah,                                |
| 32:02      | for it's a 32. That's $250, but that is 32 buttons versus nine buttons. So yeah, it's                                     |
| 32:12      | not the cheapest. And until the marketplace gets a little bigger, I personally would hold                                 |
| 32:17      | off from buying it. But I wonder if this is going to be like the [[Windows Phone]] problem                                    |
| 32:21      | chicken and the egg. There are no plugins because there are no users and there are no                                     |
| 32:24      | users because there are no plugins. But at the same time, I'm limited on desk space.                                      |
| 32:29      | I'm not putting something on my desk that I can't definitely use on a day to day basis.                                   |
| 32:33      | Yeah, I'm pretty good on buttons right now. Yeah. Yeah, but I do think the [[Stream Deck]]                                    |
| 32:40      | is really an interesting thing for automation and that wasn't really made for that. But                                   |
| 32:45      | I know they're, you know, I guess maybe because we make the show, but I've heard from so many                             |
| 32:48      | people that are using [[Stream Deck]] for exactly the kinds of things we're talking about.                                    |
| 32:54      | Yeah. And it's interesting that the dial pad in particular part of the [[Logitech]] setup                                     |
| 33:01      | uses AA batteries. Like this is something because they have it listed under the specs                                     |
| 33:07      | and details. They've split them out into the two different things. They've got the MX                                     |
| 33:10      | creative dial pad and the MX creative keypad. And the dial pad uses two AAA batteries and                                 |
| 33:17      | the keypad uses USB-C. I'm guessing because it requires more power than batteries can                                     |
| 33:22      | provide. But it's interesting that one is wireless and one is wired. It's an odd combination                              |
| 33:29      | to me. But hey, I'm looking forward to seeing what [[Logitech]] do with it and hopefully fingers                              |
| 33:33      | crossed that marketplace will take off in the not too distant future.                                                     |
| 33:37      | Another device that I tried over the run of the show that I don't think I actually talked                                 |
| 33:41      | about on the show because I didn't think it was appropriate was the [[Loupe Deck]]. And [[Loupe Deck]]                                 |
| 33:47      | is like a really well-made looking [[Stream Deck]], but it's very customised to video editing                            |
| 33:54      | and photo editing. That's, I think, you know, it's called the creative tool for a reason,                                 |
| 33:58      | but it's like made of metal. It's like it's heavier. The buttons feel firmer. The dial                                    |
| 34:04      | is very weighted and nice. Just a really nice piece of kit, but it's like over $500. And                                  |
| 34:11      | it really isn't automation friendly, except for if you're like working in [[Adobe Creative Suite]]                                 |
| 34:17      | or [[Final Cut]] or, you know, something like that. But yeah, there are other devices                                   |
| 34:24      | out there. But I feel like the [[Stream Deck]] really just scratches the itch for people who                                  |
| 34:28      | want to tie automation to a button that's not on their keyboard.                                                          |
| 34:32      | Yes. I think it's one of those things where it got in there early and also the way that                                   |
| 34:37      | you can create a lot of the tools for it, you know, the plugins. A lot of it can be done                                  |
| 34:43      | with [[JavaScript]], which is just a really widely known programming language. And even if you                                |
| 34:48      | don't necessarily use, you know, standard vanilla [[JavaScript]] every day, it's not that                                     |
| 34:55      | difficult if you're familiar with the language to regress a little bit. I call it regress.                                |
| 34:59      | It's not really. But to take a few steps back from the niceties of whatever framework it                                  |
| 35:03      | is that you're used to using and to just, you know, write some plain old [[JavaScript]].                                      |
| 35:09      | And, you know, that's something that's pretty nice. So fingers crossed, however, I haven't                                |
| 35:13      | checked how to write [[Logitech]] plugins for their creative keypad. But I should take a look                                 |
| 35:20      | at that just out of curiosity at some point.                                                                              |
| 35:22      | Yeah. Why not, right?                                                                                                     |
| 35:24      | Yep. I mean, I'm going to be pretty busy, but maybe maybe I'll find some time at some                                     |
| 35:28      | point.                                                                                                                    |
| 35:29      | Okay. Brian writes in saying that he's been enjoying listening to the show. He says,                                      |
| 35:35      | I do hope you can put together some resources for those of us who wish to continue learning                               |
| 35:39      | more about automation on the Mac and iOS. I look forward to many good things from the                                     |
| 35:44      | two of you doing the future. Well, like we said earlier, we're going to be doing some                                     |
| 35:49      | coverage of this [[Mac Power Users]] and Rose will be involved with that. We also have the,                                   |
| 35:56      | you know, the vault of Automators episodes that you can get.                                                              |
| 36:03      | Yep. Absolutely. And so, you know, there's all of those Automators episodes, including                                    |
| 36:09      | the Automators Max ones, those will not be going away. They're going to be sticking around                                |
| 36:13      | on [the Relay website](https://relay.fm). If I believe [[Myke Hurley\|Myke]] and [[Stephen Hackett\|Stephen]] have anything to say about it, they don't                                |
| 36:18      | like getting rid of these things. So, you know, all those episodes are still going to                                     |
| 36:22      | be there. And yes, of course, we've done some episodes covering particular things that were                               |
| 36:26      | announced at [[WWDC]] and so on and so forth. But also, you know, how to use [[Keyboard Maestro]]                                  |
| 36:31      | and some of the [[Keyboard Maestro]] macros we were using at the time, you know, that's stuff                                  |
| 36:36      | that you can still go back and listen to, even if you've listened to it before, and,                                      |
| 36:40      | you know, get some useful knowledge out of. And the other thing, of course, that we should                                |
| 36:44      | mention is [[Stephen Millard]], who's been on the show a few times, has his wonderful automators.                              |
| 36:52      | I'm blanking on the correct word for it that he used, but he's created automated transcripts                              |
| 36:57      | of Automators episodes and all of the notes and everything compiled together. So, I will                                  |
| 37:03      | make sure to pop a link to that in the show notes.                                                                        |
| 37:05      | Yeah, that's the second vault. That's [the Obsidian Vault of Automators Podcast](https://github.com/sylumer/automators). And                                       |
| 37:10      | he knew when we were shutting down before we announced it, and he's tidying that up.                                      |
| 37:17      | So it's just going to get better. But at some point, there's going to be an [[Obsidian]] repository                           |
| 37:23      | that will cover the five years of episodes, and you can go back and look into things.                                     |
| 37:27      | In addition, Rose and I are also doing other things. Like, I've got a [Shortcuts Field Guide](https://learn.macsparky.com/courses)                                    |
| 37:31      | that's going to come out probably three or four weeks after the show shuts down. Talk                               |
| 37:38      | about bad timing, right? But either way, you know, it is what it is. And Rose is doing                                    |
| 37:43      | stuff over with [[iOS Today]], or iPadOS today.                                                                               |
| 37:48      | And I mean, you've always got stuff you're putting out, too. You're making apps. I mean,                                  |
| 37:56      | your company makes automation friendly applications. And so just keep in touch with both of us.                           |
| 38:03      | If you follow me at MacSparky.com, where should people look for you, Rose? What's the                                     |
| 38:08      | best website?                                                                                                             |
| 38:09      | [rosemaryorchard.com](https://rosemaryorchard.com) has got links to all of the apps and iOS today and all books and so on.                                   |
| 38:17      | And yeah, I will be making sure to update there a little more frequently when I've got                                    |
| 38:20      | a bit more free time to do so.                                                                                            |
| 38:25      | As a listener of Automators, you're probably at least marginally serious about data. So                                   |
| 38:29      | assuming you are interested in data, especially about the ways it continues to shape our world,                           |
| 38:33      | you need to check out Data Systems Dialogues, a forward thinking show brought to you by                                   |
| 38:37      | the folks over at Calibre, the leader in data intelligence. You'll hear firsthand from                                    |
| 38:42      | industry titans, innovators, and executives from some of the world's largest companies                                    |
| 38:46      | as they dive into the hottest topics in data. And you'll get insights into everything from                                |
| 38:50      | popular staples such as AI governance and data sharing down to new more nuanced questions,                                |
| 38:55      | like how do we ensure data readability at a global scale?                                                                 |
| 38:59      | The most recent episode that I listened to is the power of a common data language, which                                  |
| 39:02      | talks about how to make sure that everybody in your organisation is on the same page and                                  |
| 39:07      | understanding what different kinds of data are. And what I loved about it is the fact                                     |
| 39:11      | that a lot of the topics talked about on this show, and in particular in this episode, are                                |
| 39:16      | not just good practice for any large organisation, whether or not it's to do with data, making                            |
| 39:20      | sure that everybody's on the same page about keywords and phrases means something. And                                    |
| 39:25      | actually knowing that everyone knows what they're talking about is always a good thing.                                   |
| 39:29      | While data may be shaping our world, Data Systems Dialogues is shaping the conversation.                                  |
| 39:33      | Follow Data Systems Dialogues on Apple, Spotify, YouTube, or wherever you get your podcasts.                              |
| 39:39      | Our thanks to Data Systems Dialogues for their support of this show and all of Relay.                                      |
| 39:43      | Okay, so we heard from Marcus saying, you guys talk about a lot of stuff, [[Shortcuts]],                                      |
| 39:52      | [[AppleScript]], [[Keyboard Maestro]], and all these other tools. Which one should I start with?                                  |
| 39:59      | That's a good question. The age-old question, Rose, which one should                                                      |
| 40:02      | they start with? Yeah, so I mean, I would answer that question                                                            |
| 40:07      | with another question. What platform are you looking to automate on? And what problem                                     |
| 40:13      | are you trying to solve? So I'd actually answer a question with two questions, because it                                 |
| 40:18      | really does depend. If you're looking to automate something on the Mac, [[Shortcuts]] is there,                               |
| 40:24      | [[Shortcuts]] is fine, but it doesn't necessarily have those same integration hooks that it has                               |
| 40:29      | on iOS. In particular, if you're looking for something that runs automatically at a certain                               |
| 40:34      | time or when you connect to a certain Wi-Fi network, [[Shortcuts]] on Mac OS can't do that.                                   |
| 40:40      | Not on its own. It needs a helper to help run that, for example, [[Keyboard Maestro]] and                                     |
| 40:46      | so on. So if you're looking to automate things on the Mac, and you want automate to triggers,                             |
| 40:54      | then I would suggest probably [[Keyboard Maestro]]. If you're looking to automate something that                              |
| 40:59      | might be iOS or Mac OS, definitely [[Shortcuts]]. If you're looking for something on iOS, I'm                                 |
| 41:05      | probably going to recommend [[Shortcuts]]. You can branch out with [[Scriptable]] and so on to                                    |
| 41:09      | do things with [[JavaScript]]. If you're looking to automate something text-based, [[Drafts]] or                                  |
| 41:15      | [[BBEdit]] would be my weapons of choice. Probably [[Drafts]] more so just because there's a whole                               |
| 41:22      | bunch of actions in [the action repository](https://directory.getdrafts.com) that you can download and install without having                                |
| 41:27      | to write and encode yourself. But yeah, I mean, it really depends on what solution is                                     |
| 41:34      | it that you, or what problem is it you're solving, and what platform are you trying                                       |
| 41:38      | to solve it on? What about you, David?                                                                                    |
| 41:40      | Yeah, I think you're right on there. I would just start with a statement that don't learn                                 |
| 41:45      | to automate in a vacuum. If you want to learn to automate, find a problem to solve and then                               |
| 41:52      | use the learning process to solve that problem and understand it's going to take longer than                              |
| 41:57      | expected the first few times. But like Rose said, the problem that you're trying to solve                                 |
| 42:03      | will dictate the tool that you're trying to use. And I think if you listen to the show,                                   |
| 42:06      | you've got a pretty good idea what they are. Like another one I would add to Rose's list                                  |
| 42:10      | is if you have file-based automation, like you just want to deal with files, look at                                      |
| 42:16      | Hazel. They just came out with a new version. So there's a lot of different tools out there                               |
| 42:22      | that solve different problems. But the language of automation is common to all the tools.                                 |
| 42:28      | I mean, usually there's a trigger and there's an action. So what are you going to have trigger                            |
| 42:33      | the automation, whether it's you pressing a key or a clock hitting a certain time of                                      |
| 42:38      | day or your Wi-Fi connecting to a certain network or whatever it is. So that's your                                       |
| 42:42      | trigger and then what is it going to run off and do and separate those in your brain and                                  |
| 42:48      | just figure out the action set that you want and the tool that does that and then find                                    |
| 42:54      | a way to hook it to a trigger. And if you solve a couple of different problems, you                                       |
| 42:58      | may learn a couple of different tools and before you know it, you're an automator.                                        |
| 43:02      | So it's not that bad. But if you attach it to solving a problem, I feel like it's a lot                                   |
| 43:10      | easier.                                                                                                                   |
| 43:11      | Yes. Yeah. I think the other thing is we should probably give some general advice for people                              |
| 43:17      | who are looking to start automating things and solve automation problems. And I would                                     |
| 43:24      | really recommend taking a step back and look at what it is you want to automate and break                                 |
| 43:31      | it down into chunks and pick one of those chunks and start with that.                                                     |
| 43:37      | If you get stuck, pause, go look at another chunk and try that. And then once you've got                                  |
| 43:43      | like two or three chunks and you can sort of bounce between them, I wouldn't recommend                                    |
| 43:47      | having any more than that until you've actually solved one of them. But the chances are if                                |
| 43:51      | you break it down in small enough steps, you will find something that somebody else has                                   |
| 43:55      | done out there that's similar that can help solve that problem. So if you've got an automation,                           |
| 44:02      | you want an automation that whenever you download your electricity bill, it renames it, moves                             |
| 44:09      | it into a particular folder and adds a task to [[OmniFocus]] or whatever your task manager                                    |
| 44:15      | of choice is to say, pay the bill. Okay. Well, that's great. That's a really good thing.                                  |
| 44:21      | But I would start with, okay, well, downloading the electricity bill, like let's leave that                               |
| 44:26      | as manual because scripting, logging into websites to download files and so on. It                                        |
| 44:30      | can be done. I'm not going to recommend doing it just because it's going to get finicky                                   |
| 44:36      | at some point and things are going to get broken because you'll have to click at the                                      |
| 44:40      | image with [[Keyboard Maestro]] or script the browser and that's a lot of work. So start                                       |
| 44:45      | with the file downloads. Well, that's something you can solve with [[Hazel]]. [[Hazel]] can watch                                 |
| 44:48      | your downloads folder and it can grab the file. And so the next piece of the puzzle                                       |
| 44:52      | is, you know, when renaming it, right? Renaming it and moving it. Well, those are two actions                             |
| 44:57      | in [[Hazel]]. And so you can start with the renaming part and if you can't get that to work, then                             |
| 45:02      | you pause and you do the moving part. And then there's the final part of adding a task                                    |
| 45:08      | to your task manager. Well, maybe to start with the task that you add to your task manager                                |
| 45:12      | is really simple. It's just pay electricity bill. It doesn't have any other information                                   |
| 45:17      | than that. And then maybe you make it a little more advanced and you say pay electricity bill                             |
| 45:21      | and you use the name of the file and you add the path to the file. So, you know, where                                    |
| 45:27      | to find the file on your on your hard drive on your on your on your computer to add the                                   |
| 45:33      | note of the task. And then at some point, maybe you can add, hey, pay electricity bill                                    |
| 45:39      | $237 or whatever it is. I don't know how much electricity bill is in the US. But, you know,                               |
| 45:44      | you can make it more complicated as you go, but keep it simple to start with and then                                     |
| 45:48      | work upwards. Yeah. I mean, that that's it. Like I said, solve a problem. Emily wrote                                     |
| 45:54      | in, she says, sometimes I listen to the show, it sounds like you're frustrated with [[Shortcuts]].                            |
| 45:58      | Does that come through? I guess it does. But she says, you know, what would you fix?                                      |
| 46:05      | You know, what's the problem? And I think what she's asking, I'm going to put my spin                                     |
| 46:08      | on it. It's like, all right, Rose, Tim Cook's going to call you up today and say, Rose,                                   |
| 46:14      | I just listened to the Automators. You're so smart about this stuff. I'm going to put                                     |
| 46:17      | you in charge of the [[Shortcuts]] team. Resources are unlimited. All right, Rose, what are you                               |
| 46:23      | going to go do when you show up your first day to take over?                                                              |
| 46:27      | Okay. Well, first thing is I don't want to be the head of [[Shortcuts]]. So I'm going to                                      |
| 46:32      | say, Hey, can we please keep Michael Gorba, who is the head of the [[Shortcuts]] team? And                                    |
| 46:38      | at the moment, and I feel like he's actually doing a really good job. But what I would                                    |
| 46:43      | like to do to start with, actually, is to have a team that actually understands and                                       |
| 46:51      | knows [[Shortcuts]], processing the [[Shortcuts]] feedback that they receive. Because I am very                                   |
| 46:57      | aware that I've filed feedback that has gone into a black hole because the people processing                              |
| 47:01      | it did not realise that the words that I used to describe this problem are the words that                                 |
| 47:06      | somebody else are essentially the same as the words somebody else is used to describe                                     |
| 47:11      | a different problem. So there is a particularly horrible bug where if two different applications                          |
| 47:18      | have a shortcut action with the same name, those actions can occasionally get swapped.                                    |
| 47:25      | And so this means that, you know, if for whatever reason, there is an app with the action *Run Shortcut*,                            |
| 47:31      | which [[Pushcut]], for example, had, then that could get swapped with the [[Shortcuts]]                                |
| 47:37      | native *Run Shortcut* action. And that caused havoc with my automations until I realised                                    |
| 47:42      | what the problem was. Fortunately, it didn't take us that long to figure it out. And then                                 |
| 47:46      | we renamed the [[Pushcut]] shortcuts action. Because I figured out what was happening,                                       |
| 47:52      | and that those were randomly getting swapped. And that bug is the first place I would start.                              |
| 47:59      | And then from there, you know, I would, you know, take a look at the automation triggers                                  |
| 48:04      | and can we bring those to macOS? Can we bring any automation triggers to macOS? Can we make                               |
| 48:11      | [[Safari]] a bit more scriptable? And, you know, those parts of it, you know, mail on macOS                                   |
| 48:19      | doesn't have the same things that mail on iOS has. And I understand there are two different                               |
| 48:23      | applications, but can we add somebody to the mail team that understands shortcuts and can                                 |
| 48:31      | learn how mail works and can bring everything together for that? I think that is really                                   |
| 48:36      | where I would be starting.                                                                                                |
| 48:37      | Yeah, that's my starting point too. It's the interoperability of [[Shortcuts]] between platforms                              |
| 48:43      | because the the Mac and the Mac feels like a very different place for shortcuts than                                      |
| 48:50      | iPhone and iPad. That's frankly why I have two different field guides because you they're                                 |
| 48:55      | just different. They don't work the same. And it's very easy for people who are trying                                    |
| 49:00      | to get into this to get confused because you make it and it works on the on the phone,                                    |
| 49:04      | but then it doesn't work on the Mac and vice versa. And I feel like they should intervene                                 |
| 49:09      | for you like when you have an action that doesn't work on the Mac. Maybe they have some                                   |
| 49:14      | alternative that can run or, you know, and, you know, savvy [[Shortcuts]] users that know                                     |
| 49:20      | of the problem and know their options often put in platform checks in the shortcut. Like                                  |
| 49:28      | if I'm on Mac, do this if I'm on iPhone, do this. But that's very tedious and you'd                                       |
| 49:33      | have to know that. And for a lot of people learning [[Shortcuts]], they don't. And so it                                      |
| 49:38      | just breaks for them and they're not even sure why and then they give up on [[Shortcuts]].                                    |
| 49:42      | So I feel like if I was in charge, I would put a lot of effort into kind of getting that                                  |
| 49:47      | fixed. So, you know, in a year, like in a year from now, we could say, OK, you're never                                   |
| 49:53      | going to have that problem again. If you try to call an action that doesn't work on your                                  |
| 49:58      | platform, it's going to give you a message explaining or it's going to do something else                                  |
| 50:03      | instead that it thinks makes sense. But it's just going to it's going to solve it for you                                 |
| 50:07      | and not just not work and not give you any feedback. And the other thing I think I would                                  |
| 50:12      | do is I think I would make the documentation better and more interactive because I think                                  |
| 50:19      | a lot of people coming to [[Shortcuts]] are not programmers. You know, there are a lot of                                     |
| 50:22      | people who are just learning this stuff. And, you know, the the the documentation on individual                           |
| 50:29      | actions I think is too sparse. It doesn't explain it enough. And I can figure it out                                      |
| 50:35      | because I've been doing a long time, but people new to it don't know what the heck any of                                 |
| 50:39      | those terms mean. And I think they should write better documentation for non-programming                                  |
| 50:46      | humans into [[Shortcuts]]. So, so those are the two things I'd probably work on. But I agree                                  |
| 50:51      | with you. I think they're doing a great job. They've they've got a lot, you know, they                                    |
| 50:55      | bit off a lot, bringing [[Shortcuts]] and now putting it on platforms. And I think overall                                    |
| 51:00      | they're doing doing good work. But those things like like Rose was talking about the [[Safari]],                              |
| 51:05      | how the [[Safari]] actions don't work on Mac drives me nuts. But that's kind of part of the interoperability                  |
| 51:10      | of platforms. You just kind of make that stuff work. And I'm sure it's written down somewhere                             |
| 51:17      | on a whiteboard in Cupertino. And it's really easy for you to say on a podcast, yeah, just                                |
| 51:22      | fix it. But yeah, that would be the thing I would make a priority.                                                        |
| 51:25      | Yeah. And it's one of those things in particular for the [[Apple]] actions, you know, I would love                            |
| 51:31      | to see this also happen for, you know, other actions where you've got an app that you can                                 |
| 51:35      | only install on iPhone. And, you know, so you try to run the shortcut on iPad, and it                                     |
| 51:41      | doesn't work. And you try to run it on your Mac and it really doesn't work. But the [[Apple]]                                 |
| 51:45      | actions in particular, those ones not being the same across platforms, that's also just                                   |
| 51:50      | something that is a really, you know, it's a big downer for somebody when they try to follow a shortcut                   |
| 51:56      | tutorial, but they're on their Mac. And they don't necessarily know what they're doing yet. So                            |
| 52:00      | they're like, okay, well, if I'm on my Mac, it's easy because I can have the two screens open. So                         |
| 52:03      | you know, they look at one and they look at the other. And they're going this, this action doesn't                        |
| 52:08      | exist. And I can't find it. And that the also the fact that the search for in [[Shortcuts]] for actions                       |
| 52:17      | works differently on macOS to iOS drives me crazy. On iOS, if you type the name of an app, and you                        |
| 52:24      | search, and then you click on the app, it resets your search, basically, and it shows you all the                         |
| 52:29      | actions from that app. On macOS, if you type the name of an app, it filters the app list. And then                        |
| 52:35      | you tap click on the app, it only shows you the actions for that app that match the search results.                       |
| 52:42      | And if you click on the little x in the search bar, to like remove your your search parameter, it                         |
| 52:48      | unselects the application that you've chosen, which drives me insane. Every single time I try to use                      |
| 52:55      | it on macOS, because I'm there going like, I know that I'm looking for an action from this app, and                       |
| 53:00      | it's near the bottom of the list. So I've searched for it, and I clicked on it. And now I can't see                       |
| 53:04      | the action. And so if I click on the cross, I then have to scroll all the way down the app list                           |
| 53:09      | again. And that just drives me bonkers. And I understand this is, you know, a difference between                          |
| 53:13      | how things work on macOS and iOS. But I feel like they could have made this one a little bit more                         |
| 53:18      | friendly.                                                                                                                 |
| 53:19      | Yeah, it's, I'm coming up with more too, as we talk about this, because I think that they really,                         |
| 53:25      | what they need are like, kind of [[Shortcuts]] ambassadors and developer enthusiast people, or                                |
| 53:31      | I don't know what you call them, developer relations, maybe. But they should have really                                  |
| 53:36      | knowledgeable [[Shortcuts]] people that can go to the internal [[Apple]] teams. Like, there's really no                           |
| 53:41      | excuse for all the [[Apple]] apps not to have really robust shortcut support, like they should have                           |
| 53:46      | somebody on the inside going to those teams. So they can say, okay, I'm a [[Shortcuts]] expert, you're                        |
| 53:52      | a [[Safari]] expert, you know, let's take two weeks and just really get this nailed down. And they                            |
| 53:58      | should also do that externally. There should be resources available if you're an app developer                            |
| 54:03      | and say, well, I'd like to have shortcut support, but I'm not sure what the best way to do it, or                         |
| 54:08      | what would be most useful to the users. And [[Apple]] should say, well, certainly you call this person                        |
| 54:14      | and they'll get on the phone with you and talk you through it and give you some sample code and                           |
| 54:18      | blah, blah, blah, you know, and maybe they're doing that. But, but it feels like if they are,                             |
| 54:23      | they're not doing enough of it.                                                                                           |
| 54:25      | Yeah, I've seen a lot of developers talk about, you know, how, how tricky it is. And they've also                         |
| 54:30      | been burned by, you know, creating [[Shortcuts]] actions that work as one kind of app intent,                                 |
| 54:34      | and, or, you know, as this kind of shortcut, and then it, you know, they had to transition to                             |
| 54:39      | that kind of shortcut, and then they have to transition again. And, you know, that it's                                   |
| 54:43      | understandable that they're a little, you know, hesitant to, you know, immediately hop onto the                           |
| 54:47      | new thing. But at the same time, you know, [[Apple]] is doing their best to try and make it easier.                           |
| 54:53      | And the new kinds of [[Shortcuts]] actions that the app intents are, you know, pretty nice. And I'm                           |
| 54:59      | really glad to see, to be honest, that they are a chunk of the backbone for [[Apple intelligence]],                           |
| 55:06      | you know, providing the information and so on that is needed. And, you know, hopefully we'll                              |
| 55:10      | see all of this tie in together at some point in the not too distant future. But at the moment,                           |
| 55:15      | it is, you know, still a little painful and thorny for users who don't necessarily, you know,                             |
| 55:21      | realise or know all the things that they would be expected to know. I got bit the other day,                              |
| 55:26      | David, I created a shortcut on my phone, tried to run it on my iPad and it crashed.                                       |
| 55:32      | And I was there going, well, the heck is the problem with this? Turns out I forgot to download                            |
| 55:36      | the app on my iPad. That was it. If it wasn't downloaded the app on my iPad, everything was                               |
| 55:41      | fine. But it would be really nice if [[Shortcuts]] could see hey. So this action in this shortcut is                          |
| 55:48      | using, you know, it is not installed, but can be installed. And if it, when I tried to run it,                            |
| 55:56      | would say, Hey, this app is like XYZ app is required and not installed. Would you like to                                 |
| 56:02      | download it? Yes. Because that also would then go great, you know, for when I share a shortcut with                       |
| 56:08      | you, if you don't have one of the apps installed that the shortcut uses, you don't just get unknown                       |
| 56:12      | action. Like you could see a little placeholder for if you open the shortcut to edit it. And when                         |
| 56:17      | you try to run it, then it would try to download, it would prompt you to download the app from the                        |
| 56:21      | app store. That would be really nice. But yeah, it doesn't quite do that yet. So fingers crossed,                         |
| 56:27      | some of these pain points will get cleaned up at some point in the, in the future. And I know the                         |
| 56:31      | [[Shortcuts]] team are working really hard on it. And I know, you know, the team's [[Apple]], sometimes I'm                       |
| 56:36      | pretty certain that [[Apple Journal\|Journal]] is just like one person working on it, like maybe a couple. But I                             |
| 56:42      | don't think it's a team really, I think it's a few people, a bit like the graphing calculator was                         |
| 56:46      | when they broke into build the graphing calculator for the Mac. But you know, the [[Apple Journal\|Journal]] app is                          |
| 56:53      | pretty awesome. But I can't blame, you know, the few developers working on it for not having great                        |
| 56:57      | shortcut support yet, because they have to work on the whole [[Apple Journal\|Journal]] app, which keeps being                               |
| 57:02      | headlined at [[WWDC]], and they've got limited resources. So, you know, I, to be clear, I don't                               |
| 57:08      | know how many people on the journal team at [[Apple]], but my suspicion is that it's, it's very few.                          |
| 57:14      | And so it would be nice if there, there could be some extra support within [[Apple]] forward of those                         |
| 57:18      | things. Yeah. And it is a trillion dollar company. Like they, they could bring on a few more people                       |
| 57:25      | to do this. John writes in, sorry to see the automators go. Is there ever any automations                                 |
| 57:32      | that you've given up on? All right. That's a good question. John, straight to the heart. You know,                        |
| 57:37      | where have we failed as automators? I'll go first on this one. I often struggle with web-based                            |
| 57:45      | automation stuff, like, you know, the classic go and download my credit card statement every month and,                   |
| 57:51      | you know, [[OCR]] the PDF and put it in a specific folder and all that stuff. I find web services                             |
| 58:00      | very inconsistent. And some companies I do this with, and it works like a charm and other companies                       |
| 58:07      | for whatever reason, the way they've coded their website, it hardly ever works. And it just makes                         |
| 58:11      | me nuts. And when I hit those ones where I feel like I have to debug it every month, I just stop                          |
| 58:17      | doing it. So that, that is an example of an automation I've given up on. Anything that requires                           |
| 58:23      | constant fiddling as an automation to me is a failed automation. It needs to be consistent.                               |
| 58:30      | I shouldn't have to rewrite it every month. And, and that's a good example for me. How about you,                         |
| 58:35      | Rose, do you have any automations you've ever gone up on? Maybe you don't.                                                |
| 58:40      | I mean, it's one of those things where usually the approach that I'll take, if I can't solve the                          |
| 58:45      | automation problem, which I frequently cannot because there are things outside of my control,                             |
| 58:50      | as much as I would like to pretend that I can control everything, I absolutely cannot. But                                |
| 58:56      | whenever I run into something that I absolutely can't automate for whatever reason,                                       |
| 59:01      | I'll still see if I can automate a bit of it. You know, I can't automate everything. Like,                                |
| 59:06      | I cannot automate physically replacing the batteries in my smart door locks. That is not                                  |
| 59:11      | something I am able to do. But I can absolutely have myself send a push notification every hour                           |
| 59:16      | when I'm at home and I'm not asleep, reminding me to go and change those battery door locks                               |
| 59:20      | when they run low. Because that is something that is pretty freaking important. But if I don't do                         |
| 59:25      | that, then I could well get locked out of my house. Don't worry, folks, I do have the backup                              |
| 59:28      | battery. I've got one backup battery in my car and I've got another one stored with a friendly                            |
| 59:33      | neighbour, which seems like a good idea because it's a 9 volt battery to work as a spare if needed.                       |
| 59:38      | But that you can connect from the outside, there's sort of two pins that you can,                                         |
| 59:44      | you know, hold the battery onto to still make the smart lock work. But, you know,                                         |
| 59:48      | I cannot automate replacing those batteries. I could probably build a robot that has AA batteries                         |
| 59:56      | in it, that then when it gets a notification to say that the battery is low, knows which lock to go                       |
| 01:00:04   | to, that will be a huge problem to figure out, unscrews the cover, again, big problem to figure                           |
| 01:00:09   | out, takes out the other batteries, puts them somewhere to go to the battery recycling place,                             |
| 01:00:15   | and then inserts new batteries. But this seems like a whole lot of big problem. And I can't do                            |
| 01:00:21   | that. But yeah, sometimes it's not worth solving problems. Sometimes it's also worth considering                          |
| 01:00:27   | solving problems the other way. Another way, I had an issue with my robot vacuum recently where it                        |
| 01:00:31   | doesn't automatically change daylight savings. I don't quite understand why it can't automatically                        |
| 01:00:35   | change daylight savings. But that means that whenever the clocks change twice a year, the                                 |
| 01:00:40   | automations run at the wrong time. I recently solved this problem not by logging in and                                   |
| 01:00:44   | automatically changing the time zone on it, or doing anything like that. I took the automation                            |
| 01:00:49   | out of their app and I did it in [[Home Assistant]], which does automatically change the time.                                |
| 01:00:52   | So sometimes solving the problem differently is the right solution to the problem,                                        |
| 01:00:57   | or avoiding the problem. But yeah, there are some things that I've given up on for sure,                                  |
| 01:01:02   | like automatically changing those batteries. That's not going to happen. I'm just not going to do it.                     |
| 01:01:07   | But I will absolutely notify myself to death until I finally actually go and change the battery.                          |
| 01:01:12   | I absolutely love, though, that you consider, maybe I could build a robot that would do it for me.                        |
| 01:01:18   | I know that it is technically possible to build a robot to replace these batteries.                                       |
| 01:01:23   | Like I am 100% aware that this is a possibility. But it's going to take a lot of work. Like I'm                           |
| 01:01:29   | going to have to do a whole bunch of different models for the 3D printer. I'm going to have to                            |
| 01:01:33   | buy mechanical parts. I'm going to have to program it. And I'm going to have to think of                                  |
| 01:01:37   | like a brain to run it on. And this gets into the realm of I'm spending a lot of time and a lot of                        |
| 01:01:43   | money and a lot of effort to automate something that really only needs doing every six to nine                            |
| 01:01:47   | months. And it takes me two minutes. And one of the things that I've also done to automate solving                        |
| 01:01:53   | this problem is I've put a screwdriver in my battery bag. So I have a zipped bag that contains                            |
| 01:02:00   | all the batteries that I need for smart home stuff, which is labeled like their bags inside of that                       |
| 01:02:04   | which are labeled CR2032 and, you know, AA, AAA, etc. I've just put a screwdriver in that bag.                            |
| 01:02:11   | And then I don't even like once I grab the battery bag, I don't need to go find a screwdriver or                          |
| 01:02:15   | anything. I just grab the battery bag, unscrew the thing, put some new batteries in, drop the other                       |
| 01:02:20   | batteries into the little pot by the television, which is where the recycle battery or batteries to                       |
| 01:02:24   | recycle go and done. That's simple. Yeah. I was curious from a technical perspective as to whether                        |
| 01:02:32   | or not I could build a robot. And I realised very quickly that it was very technically possible.                          |
| 01:02:37   | But also like it's just not a good idea because what happens if like I move the robot and then                            |
| 01:02:41   | it has to figure out like where to go to now. But like I've put a new piece of furniture in the                           |
| 01:02:47   | way because it only needs to run every six to nine months. And like the two door locks in my                              |
| 01:02:52   | living room are at the same height, but the door lock up my front door is at a completely different                       |
| 01:02:56   | height. And so it would need to be able to go up and down. And sometimes there's laundry drying                           |
| 01:03:01   | in the hallway. So that would get in its way. And yeah, it gets messy quickly. And that just,                             |
| 01:03:05   | yeah, seemed like a bad idea. A fun theoretical exercise, but not a good practical exercise                               |
| 01:03:11   | to automate. I find the fact that you've got like the screwdriver with the batteries very                                 |
| 01:03:18   | satisfying. I do the same thing like and having the labels on them. Maybe this is a common thing                          |
| 01:03:24   | to automators that we just like to have our stuff organised and everything where it belongs.                              |
| 01:03:32   | This episode of The Automators is brought to you by LinkedIn Jobs.                                                        |
| 01:03:35   | Find the qualified candidates you want to talk to faster. Post your job for free today. Just go                           |
| 01:03:41   | to LinkedIn.com/automators. When you're hiring for your small business, you want to find                                  |
| 01:03:47   | quality professionals that are right for the role. That's why you have to check out LinkedIn Jobs.                        |
| 01:03:52   | LinkedIn Jobs has the tools to help find the right professionals for your team faster and for free.                       |
| 01:03:59   | It's important when you're hiring that you get the right people with the right skills and the                             |
| 01:04:03   | right attitudes and mindsets. Building a great team is difficult, but LinkedIn Jobs makes it a lot                        |
| 01:04:09   | easier. LinkedIn isn't just a job board. It helps you hire professionals you can't find anywhere                          |
| 01:04:15   | else. Even those who aren't actively searching for a new job, but might be open to the perfect role.                      |
| 01:04:21   | In a given month, over 70% of LinkedIn users don't visit other leading job sites.                                         |
| 01:04:27   | So if you're not looking on LinkedIn, you're looking in the wrong place. On LinkedIn, 86% of                              |
| 01:04:32   | small businesses get a qualified candidate within 24 hours. Hire professionals like a professional                        |
| 01:04:39   | on LinkedIn. LinkedIn also knows that small businesses are wearing so many hats and                                       |
| 01:04:45   | might not have the time or resources to hire. That's why they're constantly finding ways to                               |
| 01:04:50   | make the process easier. They even just launched a feature that helps you write job descriptions                          |
| 01:04:56   | and making the process even easier and quicker. It's easy to see why 2.5 million small businesses                         |
| 01:05:01   | use LinkedIn for hiring. Post your job for free at linkedin.com/automators. That's once again                             |
| 01:05:09   | linkedin.com/automators to post your job for free terms and conditions apply. Go check it out                             |
| 01:05:16   | at linkedin.com/automators and thank you LinkedIn for all of your support of the automators                               |
| 01:05:21   | podcast. Rose, last segment of the automators. Let's talk about the future of automation.                                 |
| 01:05:29   | I thought we'd break it down by platform starting with the Mac. You and I are both lovers of using                        |
| 01:05:35   | the Apple Macintosh and it's come out on this show, but I feel like we're kind of in a really,                            |
| 01:05:42   | I'm calling it a golden age. Maybe it's just a preview of what's to come, but over the run                                |
| 01:05:48   | of this show, not only do we get more automation tools like [[Shortcuts]] for the Mac,                                        |
| 01:05:53   | they all started talking to each other. These days, it is so easy to put together automations                             |
| 01:05:59   | that do diverse and different things using the various tools. Getting back to my tool belt                                |
| 01:06:06   | and allergy, but I feel like the Mac is in great shape for automation these days. What do you think?                      |
| 01:06:12   | Yes. There's just choices. All of the choices and I love that. I really do because it means that I                        |
| 01:06:21   | don't necessarily have to use [[Hazel]] to solve my automated files problems. I could use [[Keyboard Maestro]].                              |
| 01:06:27   | The answer to it, the question of which do I use is both because it depends on what I                            |
| 01:06:32   | want to do with the file once it's been added there. But the fact that there's just so much choice                        |
| 01:06:38   | and the [[AppleScript]] still there doesn't seem to be going away. It's still able to be added                                |
| 01:06:45   | to applications now and so on. The fact that [[Shortcuts]] automations are there as well                                      |
| 01:06:51   | and that a lot of these tools, [[BetterTouchTool]], [[Keyboard Maestro]], [[Hazel]], etc., they're all adding                           |
| 01:06:59   | support for each other or they're able to support each other through [[AppleScript]] or                                       |
| 01:07:04   | [[URL Schemes\|URL schemes]] and so on. It means that there's just a huge wealth of interconnected possibilities,                          |
| 01:07:12   | which means that whatever you start by learning on the Mac, unless you start with [[Automator]]                               |
| 01:07:16   | workflows, which [[Apple]] did make a point of saying they will be going away and                                             |
| 01:07:20   | will be being converted into shortcuts at some point, I feel like whatever you start with,                                |
| 01:07:25   | you'll be able to dive in and really use whatever and then build on that with other tools as                              |
| 01:07:32   | necessary and as you would like. What about mobile, iPhone, iPad, the smartphones in general?                             |
| 01:07:39   | Where do you see the current state of automation and where do you see it going?                                           |
| 01:07:44   | Current state is pretty good. For all our griping about shortcuts earlier,                                                |
| 01:07:48   | it's getting better every year. They're adding more support for things and they're listening.                             |
| 01:07:54   | Remember when we first got [[Shortcuts]] automations and the actions that we had at the time was                              |
| 01:08:00   | change watch face? We still have the action to change watch face, but the fact that you could                             |
| 01:08:05   | then have a [[Focus Mode\|focus mode]] turning on trigger, changing a watch face and then the next year,                                  |
| 01:08:11   | they didn't sure look it, they didn't stop you being able to do it via [[Shortcuts]] actions,                                 |
| 01:08:15   | but they listened and they said, oh, this is a really cool part of [Focus Mode\|focus modes]]. We should                                 |
| 01:08:20   | add this to [Focus Mode\|focus modes]] as a filter and then that has expanded. We've got more [Focus Mode\|focus mode]]                                 |
| 01:08:25   | filters. When I'm working, I can have my [[Drafts]] workspace automatically set to my working workspace                       |
| 01:08:34   | and so on and so forth. I feel like that's just a really nice, fun thing that has got better                              |
| 01:08:42   | and from the fact that they've been listening to us and more and more apps are adding support for                         |
| 01:08:47   | these things as well, which is just really nice that this is a thing that has happened and has                            |
| 01:08:54   | got better. I also feel like with [[Apple intelligence]] and app intents really being the backbone of it,                     |
| 01:09:01   | we've got more to see from [[Shortcuts]] in the not too distant future.                                                       |
| 01:09:04   | Yeah. I agree. Mobile is not as robust as the Mac. We don't have [[Apple Events]]                                            |
| 01:09:12   | and I will forever regret that they didn't think about putting something like that technology in                          |
| 01:09:18   | the early days of iOS. I think it's probably too late to do it now, but we've come a long way                             |
| 01:09:25   | in automation on mobile and they're addressing automation differently than they do on the Mac                             |
| 01:09:30   | because I think phone users are not going to want to write an [[AppleScript]]. It just doesn't                                |
| 01:09:35   | even really make sense. I think it's in a lot better shape than it was and I do think the                                 |
| 01:09:41   | future is interesting. We're going to talk about this in Automators Max, but just the idea of                           |
| 01:09:46   | the app intents, that that's the common language between automation and [[Shortcuts]] actions and                             |
| 01:09:53   | [[Apple Intelligence]]. I think there's going to be interesting developments of that in the future.                           |
| 01:10:00   | What about web automation? We've talked about this off and on on the show, but there are                                  |
| 01:10:04   | websites out there that use web-based automation that glue together web services and they've grown                        |
| 01:10:10   | throughout the run of the show. I mean, there's more now than there were                                                  |
| 01:10:14   | and they're more powerful than they used to be. Where do you see the state of that?                                       |
| 01:10:18   | Well, that's a good question and honestly, I think it's just going to get bigger. I think                                 |
| 01:10:23   | we're going to see more places realising that building everything themselves is a chunk of work                           |
| 01:10:31   | and having their own integrations with every, in particular, social media platform under the sun.                         |
| 01:10:37   | We saw this when [[Twitter]] suddenly started locking its [[API]] down and saying, nah, not you, not you,                         |
| 01:10:43   | not you. All of those ticket systems and things like that that had integrations with [[Twitter]]                              |
| 01:10:49   | and all of these platforms that had a used [[Twitter]] to do this thing,                                                      |
| 01:10:55   | suddenly couldn't anymore. This was also a big problem for a lot of the users where                                       |
| 01:11:02   | now because [[Twitter]] is blocked to a bunch of stuff like that, you've got a lot of companies                               |
| 01:11:06   | that are on threats and then in some places you've got loads of people on [[Bluesky]] and other cases                        |
| 01:11:11   | you've got loads of people on [[Mastodon]]. Well, adding support for all three of those to any system,                        |
| 01:11:17   | that's a lot of work, but if you can form that out to, say, [[Zapier]] or [[Make]] or [[IFTTT\|If This Then That]]               |
| 01:11:22   | and they can add the support, then that also means that you as the user who wants to connect                              |
| 01:11:28   | that to your ticket system so that when somebody posts at you on [[Mastodon]] or they send a thread on                           |
| 01:11:32   | [[Bluesky]] or threads tagging you, then you can have that funnel into an automated system.                                  |
| 01:11:40   | You can create one automation and duplicate it and just change the trigger or you could even add                          |
| 01:11:44   | multiple triggers to the same automation and have them all flow through the same way.                                     |
| 01:11:50   | I think that that is something that is a nice possibility. Now, I'm not saying, of course,                                |
| 01:11:56   | that these platforms shouldn't build their own integrations with whatever it is that they want                            |
| 01:12:01   | to do things with. It's one of those things where you get what you pay for and if you're                                  |
| 01:12:06   | relying on a third-party service to do your work for you, you're not necessarily going to get the                         |
| 01:12:10   | best results. But at the same time, for a really small company that wants to just build something,                        |
| 01:12:16   | it's going to get better. We've already seen things like [[GoodLinks]], a really great little                                |
| 01:12:22   | application that I use all the time for storing the things that I would like to read later.                               |
| 01:12:26   | And it automatically downloads the articles as well. This is not necessarily a web automation                             |
| 01:12:31   | per se, but it's got browser plugins for multiple browsers, not just [[Safari]], but it's also got                            |
| 01:12:38   | [[Firefox]] and [[Google Chrome\|Chrome]] plugins. And the fact that that's a thing that an app developer can do and                             |
| 01:12:44   | have the data is still stored in [[CloudKit]] and synced using [[Apple]] servers between the devices                              |
| 01:12:51   | is pretty cool. So I think we're going to see a lot more from these. And I suspect [[Zapier]],                                |
| 01:12:55   | [[IFTTT\|If This Then That]] and [[Make]] aren't going to be going anywhere anytime soon, but we may see                                   |
| 01:12:58   | some alternatives to them pop up. What do you think? I'm with you. I think that web services are                          |
| 01:13:04   | going to become increasingly important. I mean, they've emerged over the last five years as                               |
| 01:13:09   | a real force. I mean, back in the old days, the platform wars between Mac and Windows,                                    |
| 01:13:15   | all that all became irrelevant when so many of our tools are now web-based. And I feel like                               |
| 01:13:21   | the needs of AI servers and things that are kind of now emerging are going to make that even more                         |
| 01:13:28   | so. So yeah, these things are going to be even more useful. And the beauty of it is if you learn                          |
| 01:13:35   | automation, even in just like [[Shortcuts]], the same sorts of language and ideas transfer over to                            |
| 01:13:42   | these web services. So it's not that hard to jump over to the web automation. What do you think of                        |
| 01:13:49   | [[Apple\|Apple's]] commitment to automation as we sit here and going forward?                                                        |
| 01:13:54   | It's one of those things where they don't necessarily talk about it as a big thing.                                       |
| 01:14:02   | They're not continually saying like, oh, yeah, we're committed to automation. We want to                                  |
| 01:14:09   | be automating things all the time. But the fact that they're talking about [[Apple intelligence]]                             |
| 01:14:13   | and so on, and they've made app intents such a big backbone for that, I think it is pretty                                  |
| 01:14:20   | important to them. So I think we're going to see more and more coming from this. And I think it might                     |
| 01:14:25   | even be a little sneaky in some ways. And I'm not saying that is a bad thing. But I am saying that                        |
| 01:14:33   | I am saying that as a good thing where as they've added these things, they're making it more and                          |
| 01:14:43   | more possible for people to automate things without really thinking about automation.                                     |
| 01:14:48   | My mom and my dad don't think about changing their watch faces as an automation. It's just                                |
| 01:14:54   | something that happens based on the [[Focus Mode\|focus mode]] that they've selected on their phone. And they                             |
| 01:14:58   | went and set it up and it's not automation to them. It's just a thing. So yeah, I think it's                              |
| 01:15:06   | something that's going to improve for sure as time goes on.                                                               |
| 01:15:10   | Yeah. And I do think automation will take on different forms as we go into the future and                                 |
| 01:15:15   | the technology gets more powerful. But I think historically [[Apple]] was not particularly interested                         |
| 01:15:22   | in automation. I mean, the old days they were, like back in the early days of the Mac when they                           |
| 01:15:29   | had the tie-in with the publishing, it was such a big part of their business. I think they had                            |
| 01:15:33   | lost interest in it for a while. And for whatever reason, that was reignited with the purchase                            |
| 01:15:39   | of [[Workflow]]. And I think there, especially the shortcuts seem, I think there are people at                                |
| 01:15:43   | [[Apple]] that are 100% dedicated to automation. But if I were to handicap it from the outside,                               |
| 01:15:50   | not knowing any interior stuff, but I feel like the real commitment at [[Apple]] right now is [[Apple Intelligence]].   |
| 01:15:57   | But automation and [[Shortcuts]] gets to surf the wake of that because of the common                            |
| 01:16:05   | intense language and stuff. So I think automation is going to be a big beneficiary                                        |
| 01:16:10   | of what they're focused on right now, even if it isn't the big focus, if that makes sense.                                |
| 01:16:16   | Yes, absolutely. And I think that that is the thing, you know, it's a little bit of                                       |
| 01:16:21   | a Trojan horse, but not in a bad way, in a pretty good way. So I think that's pretty cool for how                         |
| 01:16:28   | it's all going to work. The last question I have, the last kind of naval gazing question,                                 |
| 01:16:33   | is the focus of automation so often is like company-wide. Like if you talk to people who do                               |
| 01:16:41   | IT, they do all sorts of automation to set up new computers and all sorts of cool stuff that they                         |
| 01:16:47   | need to do every day. And they make their lives much easier through automation. I think if you                            |
| 01:16:52   | look into automation and learning it so often, it's this big like enterprise style automation                             |
| 01:16:58   | that is the focus of products. Our goal on this show has always been not that, but user automation,                       |
| 01:17:05   | like people who just using their computers to get their work done that want to be able to make it                         |
| 01:17:10   | go a little faster, a little more efficient. Where do you see the future of user-based automation?                        |
| 01:17:19   | I think we're in good shape. In fact, I'll go first here. I think we're in great shape.                                   |
| 01:17:26   | I think that like I was talking about this golden age on the Mac and the increasing                                       |
| 01:17:32   | unwrapped automation that we're getting. Even just like the [Shortcuts Gallery](https://support.apple.com/en-gb/guide/shortcuts/apdd018638ca/ios) is so useful                                |
| 01:17:40   | for people who don't even know how to do a shortcut. They can download and use something                                  |
| 01:17:44   | immediately. And I'd like to think that people are going to become more curious about this as                             |
| 01:17:50   | the tools get easier. So I feel like user-focused automation, which is the stuff that you're doing                        |
| 01:17:57   | if you're listening to this show, is only going to get more popular over time. Yeah. I think I have                       |
| 01:18:04   | to agree where it's something that it's not necessarily a big thing that people are going                                 |
| 01:18:14   | to be thinking about at the forefront of their minds, but especially with AI becoming a much                              |
| 01:18:21   | bigger thing, people are starting to realise that they can't necessarily just sit there and rearrange                     |
| 01:18:29   | data and spreadsheets every day. Maybe they should figure out a way of scripting, rearranging the                         |
| 01:18:35   | data in the spreadsheets or filtering the data in the spreadsheets and skilling up. And automation                        |
| 01:18:41   | is a big part of that. Whether or not people are ready to admit it and give it that name is an                            |
| 01:18:45   | entirely separate point, I think a lot of people don't necessarily want to think about automation                         |
| 01:18:48   | because they think it means that jobs are going away. I personally see that it's a way of creating                        |
| 01:18:53   | new jobs and it doesn't mean that the old ways are going to go away anytime soon.                                         |
| 01:18:58   | But it's just one of those things where I think we're going to see more and more automation come                          |
| 01:19:03   | into play. In particular, when people start getting nervous about AI taking their jobs,                                   |
| 01:19:09   | they're going to find ways to make themselves better and writing scripts and automations that                             |
| 01:19:13   | they know how to run and that they've set up and configured to meet business needs or personal needs                      |
| 01:19:20   | is going to be really useful. I also think we're going to see a lot more personal automation stuff                        |
| 01:19:24   | in the smart home sphere as well because it is an accessibility feature. Not having to get up and go                      |
| 01:19:31   | over to the door to press the light switch to turn off the light is something that is a thing                             |
| 01:19:39   | that is needed by a large chunk of the population. It's nice that we have this possibility and it's                       |
| 01:19:46   | becoming more and more accessible to everybody and that it's becoming more affordable and easier                          |
| 01:19:52   | to configure and set up. I think that that's very cool and I'm hoping we're going to see more of this.                    |
| 01:19:58   | Well, you know what I do know? I want to thank all of the listeners of the show.                                          |
| 01:20:02   | This is the final episode. We had a crazy idea. What was it five, six years ago? Let's make a show                        |
| 01:20:10   | just about automation. You guys came along with us on this wonderful ride. We've got so much great                        |
| 01:20:17   | feedback and ideas from you and interacting with you over the years. Thank you so much for joining                        |
| 01:20:23   | us on this journey. Rose and I love making this show. Don't get us wrong. We loved it,                                    |
| 01:20:30   | but we're both super busy and to make it right, frankly, because we love it is why we're shutting                         |
| 01:20:37   | it down. I want to thank our sponsors today, Notion, LinkedIn, Talent, Data Citizens. Everybody,                          |
| 01:20:43   | keep automating. We talked in the show about places you can go to keep following us and                                   |
| 01:20:49   | continue your automation journey. Please do that. Signing off for the last time, thanks for listening.                    |
| 01:20:56   | Goodbye, everybody.                                                                                                       |
