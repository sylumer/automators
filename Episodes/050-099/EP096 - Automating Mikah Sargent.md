---
status: incomplete
fc-date:
  year: 2022
  month: 2
  day: 25
fc-category: podcast
podcast: Automators
published: 2022-02-25
duration: 5543
formattedduration: 01:32:23
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Mikah Sargent
notetype: episode
showpage: http://relay.fm/automators/96
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators096.mp3
episode: 96
title: "96: Automating Mikah Sargent"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Mikah Sargent is using all the automations and joins this week to share some of his favourite Mac, iOS, and home workflows.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Mikah Sargent]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 096 Discussion](https://talk.automators.fm/t/96-automating-mikah-sargent/13348)

# Sponsors
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.
- [[Fitbod (Sponsor)|Fitbod]] - Get stronger, faster with a fitness plan that fits you.
- [[New Relic (Sponsor)|New Relic]] - MoNeator, debug, and improve your entire stack.

# Show Notes
- [Updating the TextExpander Tools - Brett Terpstra.com](https://brettterpstra.com/2021/03/02/updating-the-textexpander-tools/)
- [Public Snippet Groups & Templates | TextExpander](https://snippets.textexpander.com/group/3c3dab702da922da8f4258bdddfe6ce1)
- [Rocketbook - Smart Notebook - Reusable Notepads](https://getrocketbook.co.uk/)
- [Patterns - The Regex App on the App Store](https://apps.apple.com/us/app/patterns-the-regex-app/id429449079?mt=12)
- [Mastering Regular Expressions, 3rd Edition (Book)](https://www.oreilly.com/library/view/mastering-regular-expressions/0596528124/)
- [regex101: build, test, and debug regex](https://regex101.com/)
- [action:Insert Text by Typing (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Insert_Text_by_Typing)
- [Stream Deck | elgato.com](https://www.elgato.com/en/stream-deck)
- [Dan Sturm — You're Doing That Wrong](https://doingthatwrong.com/dan)
- [The XY Problem](https://xyproblem.info/)
- [Markdown to HTML](https://www.icloud.com/shortcuts/d089b9618ec34b40bc2f68d98adeab41)
- [Markdown to HTML (Drafts)](https://www.icloud.com/shortcuts/821f97d5709147eaa636ddd96aacc080)
- [Markdown Service Tools - Brett Terpstra.com](https://brettterpstra.com/projects/markdown-service-tools/)
- [chihuahua.coffee — Mikah Sargent](https://mikah.co/chihuahuacoffee)
- [Mikah Sargent](https://mikah.co/)
- [Clockwise - Relay FM](https://www.relay.fm/clockwise)
- [iOS Today | TWiT](https://twit.tv/shows/ios-today)
- [MacBreak Weekly | TWiT](https://twit.tv/shows/macbreak-weekly)
- [The Tech Guy | TWiT](https://twit.tv/shows/the-tech-guy)

# Transcription
  
| Time Index | Transcription                                                                                           |
|:---------- |:------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to The Automators.                                                                   |
| 00:04      | This is David Sparks, and I am joined by my co-host, the lovely and brilliant Rosemary                  |
| 00:10      | Orchard.                                                                                                |
| 00:11      | How are you today, Rosemary?                                                                            |
| 00:12      | Oh, I'm excited, David.                                                                                 |
| 00:14      | I mean, I'm always excited because recording an Automators podcast with you is great                   |
| 00:17      | fun, and we have an amazing guest lined up for today as well.                                           |
| 00:20      | Yes.                                                                                                    |
| 00:21      | This is a person that I've been wanting to introduce Rosemary to.                                       |
| 00:24      | Welcome to the show, Micah Sargent.                                                                     |
| 00:27      | Yeah.                                                                                                   |
| 00:28      | Hello.                                                                                                  |
| 00:29      | Hello.                                                                                                  |
| 00:30      | It's good to be here.                                                                                   |
| 00:31      | I'm very excited to be joining the both of you on this show and to see the even nerdier                 |
| 00:40      | side of Rosemary.                                                                                       |
| 00:41      | I mean, we talk a lot about shortcuts on our show iOS today, but to actually get to dive                |
| 00:49      | in deep with automations, that's just wonderful.                                                        |
| 00:51      | Yeah.                                                                                                   |
| 00:52      | So that's the joke from the intro, is Micah and Rosemary have a show together.                          |
| 00:56      | They do iOS today over on the Twitter network.                                                          |
| 01:00      | It's an excellent show.                                                                                 |
| 01:01      | I love watching the two of you, and I think, but what we haven't done is gone deep on Micah's           |
| 01:08      | Automation game.                                                                                        |
| 01:09      | So we're putting the spotlight on you today.                                                            |
| 01:11      | Thanks so much for agreeing to come in.                                                                 |
| 01:13      | I got to tell you, I was a little bit nervous whenever Rosemary asked me because I don't                |
| 01:20      | think that I'm a huge automation person, and so I was kind of worried.                                  |
| 01:26      | I'm hanging out with some giants in the field, and so I've got a few things and I'm looking             |
| 01:33      | forward to talking about them, but more so than anything, it's just an honour to, as                     |
| 01:38      | I said, get to join such incredible automators as you two are.                                          |
| 01:44      | Well, listeners know this because I say this often, but you are my favourite kind of guest.              |
| 01:49      | Someone who doesn't make a living doing automation, and you've got other things you need to do,         |
| 01:55      | but along the way, you've come up with little automations to help you get through your day,             |
| 01:59      | and that's really all of us, right?                                                                     |
| 02:02      | And I think people who listen to the show who are in your shoes are like, hey, I'm not                  |
| 02:06      | a programmer, but I would like to get better at this stuff.                                             |
| 02:10      | When you hear from a, I guess, for lack of a better word, normal person, someone who doesn't            |
| 02:16      | make their living writing code, using automation, I think it inspires people.                           |
| 02:21      | So you are here for a very good reason, Micah, and I'm looking forward to hearing what you're           |
| 02:26      | doing.                                                                                                  |
| 02:27      | Yes.                                                                                                    |
| 02:28      | I knew that we had to have you as a guest on the show very early on, and then especially                |
| 02:32      | recently, you've been sending me messages going, is it possible to do this to [[Keyboard Maestro]]                   |
| 02:36      | or [[AppleScript]]?                                                                               |
| 02:38      | The answer has always been yes, and I've given you some examples, and I know that you've                |
| 02:41      | been enhancing things as you go just trying to make your life easier.                                   |
| 02:46      | So I have no doubt that we are going to have a great show because it's always good fun                  |
| 02:51      | to get nerdy.                                                                                           |
| 02:53      | So Micah, before we get started, just tell everybody about you a little bit.                            |
| 02:56      | I know you're doing some stuff over on Twitter.                                                         |
| 02:59      | How did you get started with technology, and what are your current shows at this point?                 |
| 03:04      | Oh man, so too many shows, but I, so long ago, I remember sort of being in high school,                 |
| 03:12      | and at the time, I was going to be going to school to become a, I wanted to go to advertising           |
| 03:20      | and particular sort of creative director, starting out with graphic design and stuff                    |
| 03:26      | like that, but getting into a role where I would be sort of shaping ad campaigns.                       |
| 03:30      | And so I went to the University of Missouri, which has one of the best journalism schools               |
| 03:37      | in the country, and journalism school had a program called, and now I'm forgetting it                   |
| 03:42      | because it's been so long, but the program was sort of creative communication.                          |
| 03:47      | And it was part of the J School, and I went there to do that.                                           |
| 03:51      | But while I was there, I started working at a startup called Newsy, N-E-W-S-Y, which is                 |
| 03:58      | still around today.                                                                                     |
| 03:59      | It's now owned by the Scripps Network.                                                                  |
| 04:02      | But while I was working there, I started out as a video editor and then moved into a role               |
| 04:09      | writing for the company, making stories for the company, and then became an anchor for                  |
| 04:16      | them.                                                                                                   |
| 04:17      | And then by the time I left, I was the talent coach, so like teaching new people how to                 |
| 04:23      | anchor for the company.                                                                                 |
| 04:25      | And then I headed off a team of writers who covered tech, the tech category for Newsy.                  |
| 04:32      | I ended up moving over to Mobile Nations, which was also acquired later, and did a lot                  |
| 04:39      | of tech writing there.                                                                                  |
| 04:40      | And it was kind of then that I started getting more into podcasting, later invited on to                |
| 04:47      | replace, well, to be the, the replacement is not the right word because [[Jason Snell]]                     |
| 04:54      | is a powerhouse.                                                                                        |
| 04:56      | But I took his role on clockwise with [[Dan Moran]], and then from there was asked to move to California.   |
| 05:06      | Lisa Laporte of TWIT reached out to me and said, hey, you want to, you want to come work                |
| 05:11      | for TWIT?                                                                                               |
| 05:12      | And I thought, I would like to work for TWIT.                                                           |
| 05:15      | And then she said, you'll have to move to California.                                                   |
| 05:17      | And I thought, okay, never mind, not doing that.                                                        |
| 05:21      | I decided to take her up on the offer to fly out and check out TWIT and just really loved               |
| 05:28      | the folks who were working there and felt like it was right for me.                                     |
| 05:32      | And yeah, I made the move to California all by my lonesome, well, not by my lonesome, I had                   |
| 05:38      | my two dogs with me.                                                                                    |
| 05:40      | And the rest, as they say, is history.                                                                  |
| 05:43      | Well, I have to ask, as a fellow Californian, as a native, did California take good care                |
| 05:48      | of you when you arrived?                                                                                |
| 05:50      | Here's the thing, so when I was a kid, a kindergarten, I lived in Oceanside, California,                |
| 05:57      | which is in Southern California, and yeah, exactly, and we lived on the military base.                  |
| 06:05      | And all I remember, well, I remember a lot, but what I remember about it was that it was                |
| 06:10      | very, very hot all the time, and there was no snow.                                                     |
| 06:14      | I am at my heart, I'm from Missouri, I love the snow.                                                   |
| 06:19      | And also because I'm geographically challenged, I did not think about how big California was,           |
| 06:25      | and so I just thought California is hot and there's no snow, I'm going to hate it there,                |
| 06:30      | I'll never live there.                                                                                  |
| 06:33      | Then I came to Northern California for a different reason.                                              |
| 06:37      | Before I ever got to chop a twit and realised, oh my God, I can wear a jacket most of the               |
| 06:41      | time, this is the perfect weather for me.                                                               |
| 06:42      | So in that way, yes, David, California has been good to me.                                             |
| 06:47      | The one thing I was not prepared for, the two things I was not prepared for, one that                   |
| 06:51      | is all of California, which is the wildfires, not ready for that, was surprised by that.                |
| 06:58      | The other thing is unique to this part of Northern California because we are sort of                    |
| 07:05      | right at the sort of boundary of wine country.                                                          |
| 07:11      | And so there's something called the Sonoma Aroma, and that is that when the farmers                     |
| 07:17      | are fertilising their crops with manure and there's a nice foggy day, as there often are                |
| 07:25      | in the mornings in Northern California, you get this awful aroma that we call the Sonoma                |
| 07:30      | Aroma.                                                                                                  |
| 07:31      | So those two things, not great, but outside of that, oh my God.                                         |
| 07:34      | Yeah, they didn't invite you to visit that week.                                                        |
| 07:36      | Yeah, exactly.                                                                                          |
| 07:37      | They knew what they were doing.                                                                         |
| 07:39      | Yeah.                                                                                                   |
| 07:40      | But it's been beautiful, and as I think many folks who live in California can attest, it's              |
| 07:46      | like every different type of ecosystem you can find in California.                                      |
| 07:51      | And that's what's really cool is that there are all these different environments that                   |
| 07:55      | exist all in one state, and you can go and see all of those different things.                           |
| 07:59      | So you can have snow if you want, you can have sand and beaches if you want, you can                    |
| 08:02      | have cold beaches if you want.                                                                          |
| 08:03      | I mean, everything is here.                                                                             |
| 08:05      | Yeah, I remember I was in high school one day and me and my buddies went surfing in                     |
| 08:07      | the morning and snowboarding in the afternoon.                                                          |
| 08:10      | See, it's wild, it's so wild.                                                                           |
| 08:13      | Yeah, I was not prepared for it when I came because I visited, I went to [[WWDC]] first on                  |
| 08:19      | my own for like a week, and obviously that was one experience.                                          |
| 08:23      | And then the next time I visited David in Orange County and then went out to [[WWDC]], and                  |
| 08:30      | that was a different experience, especially Disney.                                                     |
| 08:32      | And then I went to San Francisco, and it is like pretty much visiting three different                   |
| 08:35      | countries.                                                                                              |
| 08:36      | And graphically, they're close to each other, but they are so different in all of the different         |
| 08:40      | areas.                                                                                                  |
| 08:41      | San Fray is its own thing, yeah, it's wild.                                                             |
| 08:44      | I feel like I barely explored.                                                                          |
| 08:45      | Well, I'm glad that you're happy here, because we are happy to have you.                                |
| 08:50      | And I know that in addition to all the broadcasting you do, you are a class one nerd.                   |
| 08:55      | I mean, making all kinds of cool geeky stuff, Iowa's Today is just one of the many shows                |
| 09:01      | that you're on.                                                                                         |
| 09:02      | Oh, yeah, I forgot to mention it.                                                                       |
| 09:03      | Yeah.                                                                                                   |
| 09:04      | The shows.                                                                                              |
| 09:05      | You know, Iowa's Today, I do tech news weekly, which is a weekly interview show mostly with             |
| 09:11      | journalists who are writing stories about tech.                                                         |
| 09:15      | So that's a fun show to get to kind of talk about the week's topics.                                    |
| 09:19      | I also have started doing The Tech Guy, which is a radio show that's broadcast around the               |
| 09:25      | world with Leo Laporte, where folks call in with their questions and we try to answer                   |
| 09:33      | them.                                                                                                   |
| 09:34      | I've been on hold as the co-host because of the mask mandate in the county, but that's                  |
| 09:39      | lifting against.                                                                                        |
| 09:40      | I'll be joining that soon.                                                                              |
| 09:42      | And then I also do Clockwise, hair on relay FM with Dan Moran, and a podcast called Unhelpful           |
| 09:52      | Suggestions, which is just an occasional podcast I do with my pal, Joe Rosensteel, where we             |
| 09:56      | mostly talk about sort of [[Apple TV]] and media, but also end up talking about pies and all                |
| 10:02      | sorts of all sorts of fun stuff.                                                                        |
| 10:04      | And then the last one that I'll mention, because it's also more regular is a podcast called             |
| 10:09      | Total Party Kill, The Dog and Pony Show, which is on the incomparable network.                          |
| 10:13      | And it's a D&D Dungeons and Dragons actual play podcast that we've been doing for years                 |
| 10:18      | now.                                                                                                    |
| 10:19      | And we're currently playing through Curse of Strahd.                                                    |
| 10:22      | It doesn't get geekier than that.                                                                       |
| 10:24      | It's a lot of fun.                                                                                      |
| 10:25      | Oh, yeah.                                                                                               |
| 10:26      | Yeah.                                                                                                   |
| 10:27      | You know, there's a Star Wars based D&D game, you know, role play.                                      |
| 10:31      | Oh, yeah.                                                                                               |
| 10:32      | I mean, there's a part of me that wants to do that so badly, but I can never find the                   |
| 10:36      | time or like a group of people to do it with.                                                           |
| 10:39      | At some point before, you know, they put me in a box, I'm going to go back to that.                     |
| 10:45      | Because last time I played Dungeons and Dragons, I was like 14.                                         |
| 10:49      | And that was a few years ago.                                                                           |
| 10:52      | Oh, yeah.                                                                                               |
| 10:53      | Yeah.                                                                                                   |
| 10:54      | Yeah.                                                                                                   |
| 10:55      | We got to make that happen for sure.                                                                    |
| 10:56      | Oh, yeah.                                                                                               |
| 10:57      | It's so much fun.                                                                                       |
| 10:58      | The mechanics are all different.                                                                        |
| 11:00      | And I think there's just so much creativity out there, as folks are feeling more free                   |
| 11:05      | to kind of explore with the mechanics and really, you know, make something unique to                    |
| 11:11      | each kind of property, especially.                                                                      |
| 11:12      | Yeah.                                                                                                   |
| 11:13      | I was cleaning out some old paperwork I took when my mom passed, and I just was going through           |
| 11:19      | it just recently and found the maps I had drawn for our D&D games back in 1980s era,                    |
| 11:27      | you know.                                                                                               |
| 11:28      | Like, did you ever see the opening scene to E.T., you know, where the kids are around                   |
| 11:32      | the kitchen?                                                                                            |
| 11:33      | Yes.                                                                                                    |
| 11:34      | That was how we did D&D in my day, you know.                                                            |
| 11:36      | That's awesome.                                                                                         |
| 11:37      | Anyway, how did you get into automation, Micah?                                                         |
| 11:41      | So this is a fun story, too.                                                                            |
| 11:43      | I was actually, TextExpander from Smile is a sponsor of the network and has had a long                  |
| 11:54      | history in my life, and so I ended up remembering this story.                                           |
| 12:00      | During high school, I worked at this industrial sewing company, and that sounds like some               |
| 12:06      | gigantic factory where everyone's unhappy inside.                                                       |
| 12:09      | A child labor law.                                                                                      |
| 12:10      | From Willy Wonka.                                                                                       |
| 12:11      | Yeah.                                                                                                   |
| 12:12      | Exactly.                                                                                                |
| 12:13      | But not at all like that.                                                                               |
| 12:14      | It was a friend of mine from high school.                                                               |
| 12:16      | His family owned a small business, and they did industrial sewing where you're making                   |
| 12:21      | stuff with vinyl and whatnot.                                                                           |
| 12:22      | But while I was working there, his family was going to go on vacation, and during that                  |
| 12:31      | time, the factory or not the factory, but the business was going to be on pause until                   |
| 12:38      | they got back, and they were thinking about hiring someone to paint their house, a couple               |
| 12:46      | of rooms in their house.                                                                                |
| 12:48      | And because my grandparents were house flippers, they'd buy houses and flip them, and I often           |
| 12:54      | helped them out with that.                                                                              |
| 12:56      | I knew a thing or two about painting, and so I said, hey, instead of having someone in                  |
| 13:01      | your house who you don't trust coming and going while you're away, I'd be willing to                    |
| 13:06      | do it if you would like me to, and they were like, oh my God, yeah, absolutely.                         |
| 13:09      | So I had a lot of time during the summer to need to do something with my time, and so                   |
| 13:16      | I listened to a lot of Mac Break Weekly, which just happens to be on the network, and this              |
| 13:23      | was a time whenever TextExpander by Smile was a sponsor on the network.                                |
| 13:30      | I think this was around 2009, 2010, and so I was listening to the show, and I remember                  |
| 13:37      | Renee Richie talking about TextExpander, and he had talked about it a few times, but                   |
| 13:41      | I wasn't quite getting it, and I realised I just need to download this and see what                     |
| 13:46      | it's about.                                                                                             |
| 13:47      | So I finally downloaded it, I got a few of the example snippets, and started using it,                  |
| 13:54      | and honestly, I've never looked back after using it for the first time.                                 |
| 13:59      | I have gone to all different kinds of jobs and all different kinds of workflows, and                    |
| 14:07      | TextExpander is one of those tools that just goes with me wherever I go.                               |
| 14:12      | It's a tool that I use for personal stuff, it's a tool that I use for professional stuff.               |
| 14:16      | It was like having, whenever you're in school and you pull out that pack of gum, and then               |
| 14:20      | everyone's like, oh, could I please have a stick of gum?                                                |
| 14:23      | You feel super cool being able to give people pieces of gum.                                            |
| 14:26      | It was like that when I worked at Mobile Nations, where I would create the article writing process      |
| 14:33      | was pretty templatised, the writing itself was unique, but you had to have it set up                    |
| 14:38      | in a certain way with the back end and all that kind of stuff, and so I would create                    |
| 14:44      | templates that made that process a lot easier.                                                          |
| 14:47      | And then my fellow colleagues who used TextExpander, they're always like, oh man, can                  |
| 14:52      | you pass over that TextExpander snippet you created?                                                   |
| 14:54      | So that was always a lot of fun sort of creating those, and then I think one of the things              |
| 14:58      | that I love about TextExpander is its versatility.                                                     |
| 15:03      | So that's what kind of really got me into TextExpander, and I'm into automation in                     |
| 15:07      | general by way of this snippet slash macro creation tool.                                               |
| 15:13      | Yeah, it is really the gateway drug for a lot of people, because it is very easy once                   |
| 15:18      | you realise that there's stuff that you're typing out the same way, or copying and pasting              |
| 15:23      | multiple times to do your job, that actually you can turn that into an automation of some               |
| 15:29      | kind, and there are so many ways to do it, and TextExpander is an excellent one for                    |
| 15:34      | things like that, and especially when you share it.                                                     |
| 15:36      | I think that's taking it up to the next level by, well, probably quite a few levels, because            |
| 15:42      | an automation is great, but an automation that everybody uses, that means that all of your              |
| 15:46      | templates are identical.                                                                                |
| 15:47      | So that was a very sneaky, smart move there, and I approve.                                             |
| 15:51      | Thank you.                                                                                              |
| 15:52      | Thank you.                                                                                              |
| 15:53      | Yeah, and it really is, I think, such a great way to get started, because it's not difficult.           |
| 15:57      | Everybody works with text, and just creating something where you type a few letters, and                |
| 16:02      | then it expands into something else.                                                                    |
| 16:04      | That is very easy to grok, but have you gone down the rabbit hole with TextExpander of                 |
| 16:10      | additional features, because there's a lot more you can do with it?                                     |
| 16:14      | Yes, absolutely.                                                                                        |
| 16:15      | So it absolutely started out with me just using, I type in a short phrase, I type in                    |
| 16:22      | a short little snippet, and it makes the text something else, and then quickly, knowing                 |
| 16:28      | the power of it, started to create more complex things, including fill-ins for show notes,              |
| 16:37      | and again, there were articles where if you're talking about a specific, if it was like a               |
| 16:44      | roundup of different products for a thing, they all worked the same way.                                |
| 16:48      | So I had a TextExpander snippet that would ask me for the links to a page and the headings             |
| 16:56      | for a page, and then I ended up being able to even automate that further where it would                 |
| 17:02      | just take, I would just have a [[Safari]] window open that had the things, and it would pull                |
| 17:06      | what I needed from that and automatically populate it, but I could check it if I wanted to.             |
| 17:11      | The ability to move the cursor around to where you want it, and then [[Brett Terpstra]] has a               |
| 17:17      | whole bunch of awesome [[TextExpander]] snippets that to this day, I still use regularly, and              |
| 17:23      | so I was able to use those kind of as a jumping off point for inspiration for other things.             |
| 17:32      | Yeah, I'm looking back now to see some of the more complex ones that I have, and because                |
| 17:40      | of my current job, it doesn't require that as much.                                                     |
| 17:45      | So I will say the one that I do like to use pretty regularly is a snippet that automatically            |
| 17:55      | takes a link and shortens it using bit.ly.                                                              |
| 18:00      | But what's cool about this snippet is that if there's a link shortening service for that                |
| 18:10      | link that you're using, so apple.co or something, I can't remember what the short one is, but           |
| 18:17      | [[Apple]] has one, [[Amazon]] has one, a bunch of different ones have one, it will shorten it                   |
| 18:22      | to that URL, like to that services shortener instead of just doing the bit.ly link.                     |
| 18:28      | So that is very handy being able to use.                                                                |
| 18:32      | I would say my most used snippet though is not a very complicated one.                                  |
| 18:36      | It's just semicolon shrug, and then it makes that shruggy emoticon.                                     |
| 18:44      | It's all about the things that bring you joy, isn't it, because maybe the semicolon shrug               |
| 18:50      | makes you happy every time you use it, and that is a really good way to get started,                    |
| 18:55      | because let's face it, we wouldn't automate these things if we weren't trying to make                   |
| 18:57      | our lives easier and therefore happier.                                                                 |
| 19:01      | So yeah, I'm going to have to steal that TextExpander snippet for me, Micah.                           |
| 19:04      | I've only got one that can just shorten URLs.                                                           |
| 19:06      | I haven't got one that shortens and uses the URLs shortener of that service, and that                   |
| 19:12      | is very cool.                                                                                           |
| 19:13      | So I'm going to be stealing that one from you after the show.                                           |
| 19:15      | Definitely.                                                                                             |
| 19:16      | I will send it to you.                                                                                  |
| 19:17      | And did you write that, or is that when they picked up something?                                       |
| 19:20      | No, that one was made by [[Brett Terpstra]].                                                                |
| 19:23      | Of course.                                                                                              |
| 19:24      | Yeah.                                                                                                   |
| 19:25      | Right.                                                                                                  |
| 19:26      | Of course.                                                                                              |
| 19:27      | Exactly.                                                                                                |
| 19:28      | I'm always checking in on Brett's website to see if he's got any new cool stuff worth                   |
| 19:34      | looking, or worth adding to my snippets, because, and again, also using it as a jumping                 |
| 19:39      | off point for some other snippets.                                                                      |
| 19:42      | I use snippets for roll 20 is what it's called, and it's the D&D beyond sort of virtual, or             |
| 19:54      | D&D's virtual tabletop, and there are built-in sort of API commands that you can do.                    |
| 20:03      | And so by using some special TextExpander snippets, I can automatically make my character              |
| 20:11      | roll for one of their actions, and sort of do the calculations there in the chat so that                |
| 20:15      | everyone can see.                                                                                       |
| 20:16      | So that's also very handy.                                                                              |
| 20:19      | Do you have one for, do they still use the four-sided Dyson D&D, is that a thing anymore?               |
| 20:24      | Yeah.                                                                                                   |
| 20:25      | So yeah, pretty much all of them are used at some point in D&D, except for there's, there's             |
| 20:33      | a sort of, there's a few above a D20 before you get to the D100 that I have not used in                 |
| 20:41      | D&D, but everything D20 and below, and then D100, which is technically two separate, all                |
| 20:49      | of those are used.                                                                                      |
| 20:50      | So have you ever seen a four-sided dice?                                                                |
| 20:53      | It's crazy.                                                                                             |
| 20:54      | Yeah.                                                                                                   |
| 20:55      | They look like little pyramids.                                                                         |
| 20:56      | Yeah, they don't roll.                                                                                  |
| 20:57      | They just fall.                                                                                         |
| 20:58      | No, you need a dice tower for them.                                                                     |
| 21:02      | If you've got a dice tower, then it's much easier.                                                      |
| 21:03      | Plus, you get that really great sound effect if it's close enough to the microphone where               |
| 21:07      | everyone can hear it going clunk, clunk, clunk, clunk, clunk as it goes all the way down.               |
| 21:10      | I always felt like I was cheating when I threw one of those.                                            |
| 21:13      | I don't know.                                                                                           |
| 21:14      | I know, right?                                                                                          |
| 21:15      | Because you think you sort of pebble it, or what is it called?                                          |
| 21:18      | Bounce it across the surface of a pond.                                                                 |
| 21:23      | This episode of Automators is brought to you by LinkedIn Jobs.                                          |
| 21:26      | It's a new year, but it might feel harder than ever to find and hire the qualified people               |
| 21:29      | you need, especially for small businesses.                                                              |
| 21:32      | That's where LinkedIn Jobs comes in.                                                                    |
| 21:34      | They make it easier to find the people you want to talk to faster and for free.                         |
| 21:39      | Last time I tried to apply for a job, unfortunately, was successful.                                    |
| 21:42      | It felt like a mess.                                                                                    |
| 21:43      | There were so many different websites and so many different companies, and I didn't even                |
| 21:46      | know if those companies were real.                                                                      |
| 21:48      | Hiring the right person really makes a difference.                                                      |
| 21:51      | The great person can really just fit in with the team and feel like they've always been                 |
| 21:55      | there.                                                                                                  |
| 21:56      | Or is the bad person?                                                                                   |
| 21:57      | Well, it feels like they're a weight dragging information down.                                         |
| 22:00      | Create a free job post in minutes on LinkedIn Jobs to reach your network and beyond, to                 |
| 22:04      | the world's largest professional network of over 770 million people.                                    |
| 22:09      | Focus on candidates with just the right skills and experience, and use screening questions              |
| 22:12      | to get your role in front of any of the most qualified.                                                 |
| 22:15      | Then use the simple tools on LinkedIn Jobs to quickly filter and prioritise those you'd                 |
| 22:19      | like to interview and hire.                                                                             |
| 22:23      | That's why small businesses rate LinkedIn Jobs number one in delivering quality hires                   |
| 22:26      | versus leading competitors.                                                                             |
| 22:29      | LinkedIn Jobs helps you find the candidates you want to talk to faster.                                 |
| 22:31      | Did you know every week nearly 40 million job seekers visit LinkedIn?                                   |
| 22:36      | Post your job for free at linkedin.com/automators.                                                |
| 22:39      | That's linkedin.com/automators to post your job for free.                                         |
| 22:43      | Terms and conditions apply.                                                                             |
| 22:44      | Our thanks to LinkedIn Jobs for their support of this show and all of Relay FM.                        |
| 22:49      | Michael, what automation platforms do you use most often?                                               |
| 22:53      | I was looking through my list and I realised, wow, I do use quite a few more than I realised.           |
| 23:00      | There's [[Keyboard Maestro]], TextExpander, which of course I mentioned, [[HomeKit]], which                    |
| 23:05      | is in some ways just shortcuts, but in other ways is its own set of automations within                  |
| 23:11      | [[HomeKit]].                                                                                                |
| 23:12      | We've got [[Bunch]], we're just talking about [[Brett Terpstra]], [[Zapier]], [[IFTTT]], which Zapier                   |
| 23:21      | and IFTTT are both in the same group.                                                                   |
| 23:25      | By the way, folks I know will sometimes pronounce this Zapier, but Zapier was a sponsor on the          |
| 23:30      | Twit network and so we got to speak to the folks there and they said, it's Zapier, it                   |
| 23:34      | rhymes with Happier.                                                                                    |
| 23:35      | I do wonder why there aren't two P's in there, but alas, and last but not least is Shortcuts,           |
| 23:42      | which I feel like if I had not included on the list, Rosemary would have sniped me from                 |
| 23:47      | the UK somehow, so that definitely is one that I have automations that I use.                           |
| 23:54      | This is the thing, I have to ask the both of you because the word automation starts                     |
| 24:02      | with the word auto, which in many ways is something that I'd like to use the word again.                |
| 24:10      | It happens automatically.                                                                               |
| 24:13      | I have to admit that I don't have a whole lot of happens automatically automations.                     |
| 24:20      | Mine are more a set of steps or a set of processes that take place after I tell them to do this         |
| 24:28      | thing.                                                                                                  |
| 24:30      | Does that still count?                                                                                  |
| 24:31      | Am I okay?                                                                                              |
| 24:32      | Yeah, it totally counts.                                                                                |
| 24:33      | It totally counts.                                                                                      |
| 24:34      | I was thinking about whether or not I need to send a filthy bunny your way anytime soon                 |
| 24:40      | and I think you're going to land on the safe side of that because the trick with a lot                  |
| 24:44      | of automations is they become automatic in the way that you do them.                                    |
| 24:49      | They become a part of your workflow, so just like typing your own name, you type something              |
| 24:54      | and you get instead of just your name, you get whatever it is that you've intended to                   |
| 24:59      | produce and things.                                                                                     |
| 25:01      | Also, when it comes to actually 100% automating things, that's at a really, really high level           |
| 25:07      | where you've got so much confidence in the system that nothing is going to go wrong that                |
| 25:11      | you can just have everything happen automatically and there has to be an element of predictability      |
| 25:16      | to your life for things like that to happen.                                                            |
| 25:18      | That's one of the things that I admire about you.                                                       |
| 25:20      | I've got a little bit of therapy here.                                                                  |
| 25:23      | First of all, a little bit wary about giving over control and secondly, a lack of trust                 |
| 25:32      | in these things.                                                                                        |
| 25:34      | I've always admired, whenever I was doing the show Smart Tech Today with [[Matthew Cassinelli]],            |
| 25:39      | I would often joke that you have somehow figured out how to actually make server-side automations       |
| 25:47      | work in your home because I have experienced nothing but fear and loathing when it comes                |
| 25:53      | to server-side automation stuff whenever it comes to the smart home thing.                              |
| 26:00      | You have figured out a way to be able to sit down at your desk and the vibration sensor                 |
| 26:06      | tells the lights to turn on or stay on.                                                                 |
| 26:09      | You've got laundry automations that work for you and then you've got all of these kind                  |
| 26:14      | of true, false, these Boolean setups that work across your whole system using Homebridge               |
| 26:22      | switches and all of that.                                                                               |
| 26:24      | I don't know what it is that has, I would be honest with you that I have not set any                    |
| 26:30      | of that up in a long time and so that could be why things have improved.                                |
| 26:35      | I have trouble wanting to take the spare time that I do have to get one of these kinds of               |
| 26:42      | things set up because I'm worried that in the end, it's not going to work for me.                       |
| 26:47      | I'm just curious, do you have to make a sacrifice to an elder deity in order to get these to            |
| 26:53      | work?                                                                                                   |
| 26:54      | Why do you think Rosemary, and I'm sorry for flipping this on its head a little bit, but                |
| 26:57      | I am curious, why do you think Rosemary that your server-side automations and the sort                  |
| 27:03      | of complex automations that you do, especially smart home-wise, end up working out for you?             |
| 27:08      | Do you find yourself regularly troubleshooting them or have you just, because of your coding            |
| 27:12      | background, you know how to speak computer and what you need to do to get it all set                    |
| 27:17      | up?                                                                                                     |
| 27:18      | It's a bit of six of one, half a dozen of the other.                                                    |
| 27:21      | There's definitely troubleshooting that happens, but also I have a fairly good understanding            |
| 27:28      | of what the problem is that I'm trying to solve.                                                        |
| 27:31      | There's this common issue with coding and problem solving generically that people have                  |
| 27:36      | and it's the XY problem.                                                                                |
| 27:38      | This is frequently found in customer service where somebody comes and says, hey, how do                 |
| 27:42      | I do X?                                                                                                 |
| 27:43      | The reason why they're trying to do X is to achieve Y, but they don't say, hey, I'm trying              |
| 27:48      | to achieve Y, so therefore I thought I would do X.                                                      |
| 27:50      | They just tell you about X and they go down the wrong path.                                             |
| 27:54      | That's something that I try to be incredibly aware of with all kinds of automations because             |
| 27:59      | it really allows me to avoid pigeonholing myself with the, well, I started doing this                   |
| 28:04      | as a [[Keyboard Maestro]] macro, so therefore it has to be a [[Keyboard Maestro]] macro.                        |
| 28:07      | No, the end goal is whatever it is that I'm trying to achieve here, however, it can be                  |
| 28:12      | achieved.                                                                                               |
| 28:14      | That allows me to just sort of search around and also I have a tendency, especially when                |
| 28:20      | it comes to home automation stuff at the moment, to not actually do the thing immediately.              |
| 28:25      | I have an idea that I want to do X, so I write it on a list and then when I've got a minute,            |
| 28:29      | instead of just trying to do it without researching it at all, I do take a couple of minutes to         |
| 28:33      | search with whatever tools it is and see what other people are doing because frequently                 |
| 28:39      | somebody else has been there and done that and I can steal from what they've done or                    |
| 28:43      | I can see what problems they've run into and go, I'm going to hold off on doing that one                |
| 28:47      | right now.                                                                                              |
| 28:48      | Thank you very much.                                                                                    |
| 28:49      | If I want to be in the shower and have my bathroom lights go off, that seems like a                     |
| 28:52      | terrible idea.                                                                                          |
| 28:53      | I will leave the automated man bathroom light until I figured something out and then I realised         |
| 28:58      | that in my particular case for the bathroom light situation, I have a very good way of                  |
| 29:02      | telling if somebody is in the bathroom and has not left the bathroom.                                   |
| 29:05      | The door is still closed, so I figured that one out, fortunately, but yeah, there's some                |
| 29:12      | trust, there's some troubleshooting and there's a little bit of focusing on what the solution,          |
| 29:17      | what the problem is rather than a particular solution that I've got started with.                       |
| 29:20      | I do have a little fear that if I ever go and stay at Rosemary's house that there's                     |
| 29:25      | going to be a spring gun that's going to shoot me or something.                                         |
| 29:30      | No, no, no.                                                                                             |
| 29:31      | I mean, the worst case scenario right now is because I've been re-jigging things and                    |
| 29:37      | I had a very dodgy guest mode that didn't actually work, so I've just eliminated that.                  |
| 29:41      | Right now, if I left my house to grow, grab some food and you were still there, it would                |
| 29:47      | turn off the lights and the robot vacuum would start running if it hadn't run that day.                 |
| 29:51      | That would be the worst case scenario right now.                                                        |
| 29:54      | There's still buttons everywhere for people to turn back on the lights, so it's not that                |
| 29:57      | crazy, fortunately.                                                                                     |
| 29:58      | I'd be on the couch and the robot vacuum would chase me in a corner like that book in Harry             |
| 30:02      | Potter.                                                                                                 |
| 30:03      | Right?                                                                                                  |
| 30:04      | It's okay.                                                                                              |
| 30:05      | The robot mop won't gang up on you with it, so you'll be fine.                                          |
| 30:10      | Micah, a couple things.                                                                                 |
| 30:12      | First of all, I feel like you're absolutely an automator.                                               |
| 30:14      | To me, automation, I guess I have a little more technical view of it.                                   |
| 30:18      | To me, it's two things.                                                                                 |
| 30:19      | It's a trigger combined with a series of actions and a trigger can be something automatic,              |
| 30:26      | like Rose sitting on her chair or you pushing a button in [[Keyboard Maestro]].                             |
| 30:32      | It doesn't matter.                                                                                      |
| 30:33      | Trigger is a trigger, but the automation part is really what comes after the trigger and                |
| 30:38      | that's like saying, okay, rather than me, go through all the steps to copy this text,                   |
| 30:43      | put in [[Grammarly]], create a new file, paste it, all the things.                                          |
| 30:47      | I just made it automatic, so it just does that for me.                                                  |
| 30:49      | That's automation, so you're good.                                                                      |
| 30:51      | Yay.                                                                                                    |
| 30:52      | Yeah.                                                                                                   |
| 30:53      | So you're in the club.                                                                                  |
| 30:54      | That's the first thing.                                                                                 |
| 30:55      | The second thing is, as someone who also struggles with this stuff, what I find the best way            |
| 30:59      | to do more complex automations is just baby steps in shortcuts.                                         |
| 31:06      | Shortcuts really doesn't have a really good debugging mode in it, but I just create a                   |
| 31:11      | shortcut step called alert and it basically says it works or it gives me a variable value               |
| 31:18      | or something.                                                                                           |
| 31:19      | And I just put it in to the shortcut as I'm building it.                                                |
| 31:22      | I'll say, okay, first let's build the trigger and then give me an alert that says it works.             |
| 31:28      | And then now let's get the, I just did one recently for podcasting where I give it the                  |
| 31:35      | recording date and then it does some date math and generates, I'm sorry, I give it the                  |
| 31:40      | publish date and it figures out the recording date because we always record five days before            |
| 31:44      | the show releases.                                                                                      |
| 31:46      | So I just did it and I said, okay, once you finish that far, give me an alert and tell                  |
| 31:51      | me what you think the recording date is.                                                                |
| 31:54      | And I got that to work and then I started using that variable.                                          |
| 31:58      | You just kind of work your way down the stack slowly.                                                   |
| 32:01      | If you build the whole thing, you don't know where it breaks and because there's not a                  |
| 32:04      | lot of good debugging, you have since, in essence, just kind of work your way methodically              |
| 32:09      | through it.                                                                                             |
| 32:11      | And before you know it, you've got a pretty complex automation.                                         |
| 32:13      | Yeah.                                                                                                   |
| 32:14      | And see what's interesting is I do that in TextExpander whenever I'm creating macros                    |
| 32:20      | or in [[Keyboard Maestro]] when I am.                                                                       |
| 32:23      | And for some reason, I'd never thought to do that in shortcuts, but yeah, that makes                    |
| 32:27      | sense and would make it much easier.                                                                    |
| 32:29      | I mean, shortcuts doesn't have the tool set for it, so you have to kind of make it yourself.            |
| 32:33      | Yeah.                                                                                                   |
| 32:34      | That makes sense.                                                                                       |
| 32:35      | Yeah.                                                                                                   |
| 32:36      | Yeah.                                                                                                   |
| 32:37      | You can break things down into steps, so you know, I sit down, I've been using a Rocket                 |
| 32:42      | Book a lot recently.                                                                                    |
| 32:43      | It's like a dry, erasable notebook and it's really great because it means I don't feel                  |
| 32:47      | like I'm wasting paper or anything for it.                                                              |
| 32:50      | But I get to sit down and I try and figure out what am I aiming for and what are the                    |
| 32:54      | steps involved in this and breaking them down into chunks.                                              |
| 32:57      | And the other thing that we have in shortcuts, which is really great, is the run shortcut               |
| 33:01      | action, which means that you can do each chunk as a shortcut independently, but you can pass            |
| 33:06      | things into each one.                                                                                   |
| 33:09      | And you can pass the same information into all of them or you could, you know, pass different           |
| 33:13      | bits of information into them, whatever you want.                                                       |
| 33:15      | But because you can do that, you can break stuff down nicely into chunks so that you've                 |
| 33:20      | got individual steps, which makes it easier to debug, which is always useful if something               |
| 33:25      | breaks and every so often when there's an update and you're on the developer beta                     |
| 33:29      | of iOS, then shortcuts does unexpected things, which is sometimes wonderful and sometimes               |
| 33:34      | weird.                                                                                                  |
| 33:35      | But being able to debug things by breaking it down is really useful.                                    |
| 33:39      | And the other thing that I do when I break shortcuts down specifically that far is I                    |
| 33:44      | pass a dictionary into a shortcut.                                                                      |
| 33:47      | And that is something that perhaps people might like to steal because if you pass a                     |
| 33:51      | dictionary into a shortcut, you can pass as many variables as you like.                                 |
| 33:55      | But if you pass one variable into a shortcut, you can only pass one thing.                              |
| 33:58      | So that really lets me break stuff down a long way into very small snippets that I can reuse            |
| 34:04      | again and again, that I can pass the same data that I need into all of them without worrying            |
| 34:09      | about, you know, I only have one variable.                                                              |
| 34:12      | Well, that is very helpful.                                                                             |
| 34:16      | And also what's not helpful is that now I have to buy a rocket book because that is                     |
| 34:21      | very cool.                                                                                              |
| 34:22      | Yeah, sorry about that.                                                                                 |
| 34:23      | So thank you for that.                                                                                  |
| 34:24      | I mean, the [[Apple Pencil]] and Notability are also great, but I'm frequently doing this                   |
| 34:28      | like on my iPad.                                                                                        |
| 34:30      | And then I want to look at everything and it's really nice to be able to have multiple                  |
| 34:33      | shortcuts on my screen as well as the reference to what I was looking at.                               |
| 34:37      | And at some point, even on a 12.9 inch iPad, you start running out of space.                            |
| 34:41      | Okay, so the door has been open.                                                                        |
| 34:44      | Tell us about the rocket book, Rose.                                                                    |
| 34:47      | It's just a dry, erasable notebook that you use pilot friction pens in, but you can use                 |
| 34:52      | like a slightly damp microfiber cloth to clean the pens off.                                            |
| 34:56      | And there's an app where you can take photos of pages to, you know, like save them later.               |
| 35:01      | Is it OCR?                                                                                              |
| 35:03      | It tries to, depending on how good your writing is, what you were attempting to do, it may              |
| 35:09      | or may not work.                                                                                        |
| 35:11      | I was taking some notes in a meeting at work this morning and, well, let's just say I can               |
| 35:17      | read it because I know what I was trying to write and approximately what was going on                   |
| 35:21      | where.                                                                                                  |
| 35:22      | Yeah, no OCR is going to have a chance with that.                                                       |
| 35:25      | Also the squiggly little icons that I put next to things to tell me what different buttons              |
| 35:30      | and stuff should look like.                                                                             |
| 35:31      | Well, to me, OCR insisted that one of them was an A and that one of them was some Unicode               |
| 35:38      | character I've literally never seen before.                                                             |
| 35:41      | So, you know, I give it full points for trying, unfortunately, in this particular case it didn't        |
| 35:47      | succeed.                                                                                                |
| 35:48      | But if I do actually sit down and try them right nicely, it'll, it works pretty well.                   |
| 35:51      | But I'm not using it for things like that, I'm just using it for the, I need to like                    |
| 35:55      | quickly diagram out like what I am actually trying to do here so that I can break this                  |
| 35:59      | down into the right parts to be able to actually solve the problem.                                     |
| 36:02      | Yeah, I feel like OCR of handwriting is one of the white wells of technology right now.                 |
| 36:08      | It's out there, but nobody can find it.                                                                 |
| 36:10      | And you know, all the apps that claim to do it, this came up in the MacSparky labs recently.           |
| 36:15      | So I started looking at all the apps that are doing it and literally none of them get                   |
| 36:20      | my handwriting right.                                                                                   |
| 36:21      | And I don't write in script, I write in block text.                                                     |
| 36:25      | So it never, so it puts random capital.                                                                 |
| 36:27      | I think that throws some of them because I do that too.                                                 |
| 36:31      | And like I've, I've, I've found more apps struggle to recognise a photo of my handwriting,              |
| 36:37      | but on the inverse side, things like notability with the [[Apple Pencil]] do a really great job             |
| 36:41      | of recognising my handwriting.                                                                          |
| 36:43      | So swings and roundabouts.                                                                              |
| 36:46      | So what I do is I'll take a picture of something I've written down and then if it's like day            |
| 36:51      | one is where usually where it goes for me because it's usually part of my journal and                   |
| 36:55      | I'll just write down like a few words in text summarising what I'm like, if I'm writing                 |
| 37:02      | about a journal entry about, you know, my goals of 2022, I'll just write goals for 2022                 |
| 37:09      | in text.                                                                                                |
| 37:10      | And then when I search [[Day One]], it'll find that text and then I can read the entry, which               |
| 37:14      | is very much a hack, you know.                                                                          |
| 37:17      | But anyway, well, that's cool.                                                                          |
| 37:20      | We now everybody's looking at the rocket book.                                                          |
| 37:24      | And there's friction pens that they're using thermal ink.                                               |
| 37:29      | So the friction of heating up the ink is what makes it able to be erased from the page.                 |
| 37:34      | But in those, those rocket books, then you can also just use water and microfiber.                      |
| 37:39      | So that, yeah, I might have to, even if I don't end up getting the rocket book, although                |
| 37:43      | they have a dot grid version.                                                                           |
| 37:44      | So I'm probably going to, that's the one I have.                                                        |
| 37:46      | I'm definitely going to pick up the pilot friction markers.                                             |
| 37:49      | Great.                                                                                                  |
| 37:50      | Yeah, I have, so I have a whole range of them, but the fine liners and the like marker pens             |
| 37:58      | are the best ones for the rocket book just because of the way like the paper is like                    |
| 38:02      | slightly slippery.                                                                                      |
| 38:04      | But I get more friction on that than I do on just a straight iPad.                                      |
| 38:08      | So definitely win there.                                                                                |
| 38:09      | Well, we just went down a path, didn't we?                                                              |
| 38:12      | Yeah.                                                                                                   |
| 38:13      | Yeah.                                                                                                   |
| 38:14      | I might have distracted people a little bit there.                                                      |
| 38:15      | I mean, that's sort of how I come across automations that work for me is going down                     |
| 38:21      | a path.                                                                                                 |
| 38:22      | You've traveled down this path of like, okay, so I keep doing this thing over and over again.           |
| 38:27      | And I'm, I wonder if I can, and then you start to play around with it.                                  |
| 38:32      | And then for someone like me, I end up reaching out to Rosemary and saying, okay, is this even          |
| 38:37      | possible?                                                                                               |
| 38:38      | And then the delightful and wonderful Rosemary ends up just making something that works for             |
| 38:44      | me and it's just wonderful.                                                                             |
| 38:46      | But yeah, in doing so, I have learned a lot myself and an app that I didn't mention on,                 |
| 38:55      | in the sort of platforms, because it's not really a platform for automation, but it is                  |
| 39:00      | a wonderful app for the Mac.                                                                            |
| 39:04      | It may be on iOS, but I'm not sure, but it definitely is on the Mac.                                    |
| 39:06      | It's called Patterns, and Patterns is an app that helps you figure out your Reg X express,              |
| 39:16      | well, regular expressions, your Reg X stuff.                                                            |
| 39:20      | And I have learned a lot about Reg X using the Patterns app, because what it'll do is                   |
| 39:27      | at the top, you type in your regular expression.                                                        |
| 39:31      | Below that, there'll be two sections on the left is a section where you put the text that               |
| 39:35      | you're wanting to search through.                                                                       |
| 39:37      | And on the right, it shows you the matches that it comes up with.                                       |
| 39:40      | And then there's a bunch of built-in stuff for seeing what you're looking for, a reference              |
| 39:45      | sheet that comes with it, the ability to sort of copy the code, change the type of regular              |
| 39:50      | expression code that you're using, because of course, that can be different depending                   |
| 39:54      | on the language that you are using.                                                                     |
| 39:57      | And then replacement options, filtering options, all sorts of stuff, all built into this app.           |
| 40:03      | And as someone who wants to, but has not had the time to sit down and read the book that                |
| 40:11      | was actually, Leo Laporte recommended it to me, and now I'm forgetting what it's called,                |
| 40:16      | but it's a book about regular expressions that teaches you about them.                                  |
| 40:18      | I haven't had the chance to do that yet, so I'm just kind of learning on the fly.                       |
| 40:23      | Patterns has been helpful in figuring out regular expression stuff.                                     |
| 40:28      | And I would say that applies across the board for automation.                                           |
| 40:31      | Like learning automation tools in the abstract is very difficult, but having a specific problem         |
| 40:38      | you're trying to solve, and then figuring out the automation concoction that solves it                  |
| 40:43      | for you is the best way to learn this stuff.                                                            |
| 40:46      | What's the book he was recommending, the [[BBEdit]] Manual, by any chance?                                 |
| 40:50      | Because the [[BBEdit]] Manual is a really great resource for regular expression, like introductions.       |
| 40:56      | I will have to, oh, I think it might be, let me see, yeah.                                              |
| 41:03      | It's Mastering Regular Expressions by Jeffrey Friedle, which is an O'Reilly publication.                |
| 41:11      | Yeah, yeah.                                                                                             |
| 41:12      | I was going to say, I recognise the name of the author.                                                 |
| 41:17      | This is one I have used in the past, and it's very, very good.                                          |
| 41:20      | I end up using RegEx 101 for a lot of this stuff, and this could be important to people.              |
| 41:28      | If they've got a regular expression that apparently is supposed to work and it isn't working,           |
| 41:32      | there are slightly different flavours of regular expression depending on what platform                   |
| 41:36      | or language you're using, and so it has the different flavours there and can tell you,                   |
| 41:43      | you can switch to it, and so you'll see how it matches all of the different bits of your text,          |
| 41:48      | or [[BBEdit\|BBEdit's]] pattern playgrounds is another great way to do that.                                       |
| 41:53      | This episode of The Automators is brought to you by FitBod.                                             |
| 41:56      | Go to fitbod.me/automators to get stronger and faster with a fitness plan that fits you,          |
| 42:02      | and you get 25% off your membership.                                                                    |
| 42:05      | Between balancing work, family, and everything else you've got going in your life,                      |
| 42:09      | it can sometimes be hard to make fitness a priority.                                                    |
| 42:12      | What you need is a program that works with you, not against you, and that's why you need FitBod.        |
| 42:18      | FitBod's algorithm learns about you, your goals, and your training ability,                             |
| 42:22      | and will craft a personalised exercise plan that's unique to you,                                       |
| 42:26      | and their app makes it incredibly easy to learn exactly how to perform each exercise.                   |
| 42:31      | Personal fitness isn't about competing with other people.                                               |
| 42:34      | You don't want to look to others and try to stack up against them and do what they do.                  |
| 42:39      | What you need is something that will work for you, and that's when it really sticks,                    |
| 42:43      | and when you'll see the results you're looking for.                                                     |
| 42:46      | FitBod uses data to create and adjust your dynamic fitness plan,                                        |
| 42:51      | and you'll have instant access to your own personalised routine in their fantastic app,                 |
| 42:55      | so you can make progress on your goals from anywhere.                                                   |
| 42:59      | FitBod was the app I went to when the pandemic started.                                                 |
| 43:02      | I had a gym membership before, and I wasn't a huge fan of the gym,                                      |
| 43:06      | but I did go, and there were some things about it.                                                      |
| 43:10      | It wasn't actually the workout that I didn't like.                                                      |
| 43:11      | It was like the music they played and the way the coaches always screen at you,                         |
| 43:16      | but FitBod isn't like that.                                                                             |
| 43:17      | FitBod is like a friend, a little coaching friend that helps you.                                       |
| 43:20      | You tell what equipment you have, and then you can do a workout while you watch YouTube.                |
| 43:24      | It's just so much better.                                                                               |
| 43:26      | Everyone's fitness path is different, which is why FitBod does so much work to make sure                |
| 43:31      | they customise things exactly to suit you.                                                              |
| 43:33      | They make sure to learn from your last workout, so your next one will be even better,                   |
| 43:38      | whether you work out twice a day or twice a week.                                                       |
| 43:40      | FitBod even tracks your muscle recovery to make sure your plan is balanced                              |
| 43:45      | with a variety of exercises to make sure you're not overwhelming anything.                              |
| 43:49      | The FitBod app is so simple to use and recently got updated with a fantastic new design                 |
| 43:54      | with brand new HD video tutorials shot from multiple angles to make sure that learning                  |
| 44:00      | each exercise is a breeze, and it also integrates with your [[Apple Watch]].                                |
| 44:05      | Wear OS smartwatch and apps like Strava, Fitbit, and [[Apple Health]].                                      |
| 44:10      | Personalised training of this quality can be expensive, but FitBod is just $12.99 a month               |
| 44:15      | or $79.99 a year, and you can get an even better price.                                                 |
| 44:19      | You can get 25% off your membership by signing up at fitbod.me/automators.                        |
| 44:26      | Go now and get your customised fitness plan at fitbod.me/automators,                              |
| 44:30      | and you'll get 25% off your membership.                                                                 |
| 44:33      | That's fitbod.me/automators for 25% off.                                                          |
| 44:38      | Our thanks to FitBod for their support of the automators and all of Relay FM.                           |
| 44:43      | Micah, you mentioned [[Keyboard Maestro]], and I know I sent you a few macros in the past,                  |
| 44:47      | but what are you doing with it? Because I know you're doing lots of things.                             |
| 44:51      | Yeah, so [[Keyboard Maestro]] has quickly become the tool that I use most when it comes to                  |
| 44:58      | automation stuff. One of my most common ones is, oh man, I just get so much satisfaction                |
| 45:05      | out of it every time I use it. There are to this day still applications and websites that think         |
| 45:12      | that it is a security feature to not let you paste into the password field and a security               |
| 45:20      | feature to not let you paste into the account number, routing number field if you're making a           |
| 45:27      | purchase. So you have to actually type it out, but [[Keyboard Maestro]] has this fantastic macro            |
| 45:36      | that, again, I use all the time when I need to and just look so smugly at this app or website           |
| 45:41      | that's not letting me do what I need to do, called Type Clipboard. For folks who don't know,            |
| 45:47      | it is a simple macro. All it does is it takes what you've put on your clipboard,                        |
| 45:53      | and it makes the computer think that you are typing it in, but of course, it types it in                |
| 45:58      | very quickly. So even though you can't Command V or Control V into the field, [[Keyboard Maestro]] can      |
| 46:06      | essentially do the same thing to make that happen. I just love that [[Keyboard Maestro]] macro and,         |
| 46:13      | as I said, I use it all the time. The other one that I use regularly,                                   |
| 46:17      | I live in a two-bedroom house, and the second bedroom is my studio-slash-office space,                  |
| 46:28      | and so I'm often in here because it's also my craft area and everything else that it serves as,         |
| 46:35      | and so I'm often in here not doing computer stuff. Occasionally, though, you might brush up against     |
| 46:41      | the mouse or the keyboard or something like that, which wakes the computer, and there are many reasons  |
| 46:48      | why you might not want to log out or sleep the computer, but you just don't want the displays           |
| 46:54      | on because you're not using the computer at that time. So I have a simple macro in [[Keyboard Maestro]]     |
| 47:00      | that's called Turn Off Displays, and it just runs the shell script pmset display sleep now,                |
| 47:07      | which will turn off all the displays but not make everything go to sleep. I should also mention that    |
| 47:14      | I trigger all of these using the [[Stream Deck]] from Elgato. It is my little button presser,               |
| 47:21      | which I'm sure you've talked plenty about, so people probably know about it on the show, but            |
| 47:25      | I've got a button for Turn Off Display. I've got a button for Type Clipboard,                           |
| 47:29      | and then the ones that I use regularly are actually one was I made with the help of my friend Dan       |
| 47:39      | Sturm. If you haven't had him on the show, you should absolutely have him on the show because           |
| 47:44      | that guy automates as much of his life as possible. He's a director and producer and currently works    |
| 47:52      | at Sandwich Video, which makes ads and stuff like that. You seriously should have him on the show.      |
| 47:57      | I can help you get in touch if you haven't. He helped me set up a macro in [[Keyboard Maestro]] that        |
| 48:05      | then I talked to Rosemary about because there were a couple of things that he and I were trying to      |
| 48:09      | work out that I couldn't quite get, and these have helped me in my day-to-day work life.                |
| 48:17      | When I'm not hosting podcasts, I also produce a few podcasts at TWIT, and production                    |
| 48:25      | mostly involves planning the show, and then after the show is done, getting the metadata in place,      |
| 48:33      | so the show notes and the tags and all that kind of stuff. There's a show called Windows Weekly         |
| 48:39      | that takes place every Wednesday, and I produce that show most weeks, occasionally host it when         |
| 48:44      | Leo is out. The two panelists for that show, Paul Thurrott and Mary Jo Foley, they do the                |
| 48:51      | show planning for that show. They have a one-note document that has all the stuff that they want        |
| 48:56      | to talk about in that show, and it is my job to take that one-note document, which one note does        |
| 49:02      | not play nicely with anything. It's my job to take that one-note document and turn it into              |
| 49:08      | something basically plain text that the editor can use whenever they publish the episode of the show    |
| 49:14      | so that it appears in the show notes. What I was doing in the past was going through the one-note       |
| 49:20      | document and clicking, well, command, holding down command, and clicking on every single link           |
| 49:26      | to open up those links into individual tabs, and then going to each page, highlighting the              |
| 49:33      | headline of the page, copying and pasting it into this, I use IA writer as the show note                |
| 49:39      | creation tool, and then pasting and pasting the link from each of those tabs. Obviously,                |
| 49:46      | that took a lot of time, and I knew that that process could be automated. Dan Sturm helped              |
| 49:53      | me create a [[Keyboard Maestro]] macro that helped me to see all of those [[Safari]] tabs, get the              |
| 50:03      | headline from those pages, because usually it's the title that gets put into the tab.                   |
| 50:09      | Grab it from there. I think tab names is the deal in [[AppleScript]] or whatever. Then                      |
| 50:18      | there's a little bit of regular expression work that happens because the set of tabs always             |
| 50:25      | is set up the same, where the first two tabs are my Gmail account because I have that pinned,           |
| 50:32      | and then the next one to that is the one-note document. We worked out a regular expression to           |
| 50:37      | remove that Gmail account and one-note document from that set of tab names, and then from there,        |
| 50:44      | it just drops the headline, and then there's a new line, and then it drops the headline,                |
| 50:50      | a new line drops the headline all the way through, and then a few more regular expression               |
| 50:56      | deals to remove some of the branding that happens with those tab titles,                                |
| 51:04      | like the pipe character and then the source of the page or whatever. That was the first thing           |
| 51:11      | that I needed to do, because the editor would go and grab the links separately. I didn't really         |
| 51:17      | need the links. I just needed to have those titles. Rosemary helped me. I can't remember                |
| 51:23      | now what exactly it was that I wanted to change way back when. I think he wanted to                     |
| 51:29      | change. I think there was some extra stuff that was still being added to some of the                    |
| 51:35      | titles, perhaps, that might have been it. Yeah. I can't remember what that one was for sure,            |
| 51:40      | but then later on, and we tried a few things and we ended up getting to it in the end,                  |
| 51:46      | and so in honour of Rosemary, that macro is still called Open Tabs to Unordered List                     |
| 51:52      | Rosemary Edition. On my [[Stream Deck]], the button has RO for Rosemary Orchard. I just                     |
| 52:01      | tapped that, and that goes ahead and copies the titles as I need to from the tabs.                      |
| 52:06      | The other one that Rosemary helped me with is one that I use now for that show and also for             |
| 52:12      | the tech guy, which I produce on Saturdays when I'm not hosting. For the tech guy, as I mentioned,      |
| 52:19      | people from all over the US, mostly but occasionally from other countries, they call in                 |
| 52:25      | to the radio show and they ask a question. How can I get my printer set up? That's one of               |
| 52:30      | Leo's least favourite questions, but my printer isn't working. What do I need to do?                     |
| 52:36      | He will answer the question oftentimes with the help of the chat room that is listening and             |
| 52:42      | watching as well. There are links to different troubleshooting documents, links to different            |
| 52:46      | websites, links to different products that he recommends for people who are having questions            |
| 52:49      | about that. While I'm watching the show, I have a [[Safari]] page open that I'm just adding tabs to         |
| 52:57      | of every single site that he mentions. By the end of it, there's 25 tabs in this one [[Safari]] window.     |
| 53:05      | What the document does that Rosemary created is that it just uses [[AppleScript]] to get all of the        |
| 53:15      | links of those tabs and put them in a list where it's not an unordered list or an ordered list.         |
| 53:22      | It's just a link and then line break, link, line break, link, line break. It grabs all of those         |
| 53:29      | and puts them and that saves so much time for me during that. I'm so appreciative that Rosemary         |
| 53:36      | helped me with that. [[AppleScript]] is on my list of things to learn. You only have so much time,         |
| 53:43      | but because I use the Mac, I really want to learn [[AppleScript]] because as Rosemary,                     |
| 53:49      | you and I sort of lamented, this is not something that you can do with shortcuts on its own.            |
| 53:58      | No, no, I did try. Shortcuts now has the ability to get whatever is on your screen,                     |
| 54:03      | but it can kind of pretty much tell you the first tab and that's it. It can't even interact             |
| 54:08      | with tab groups because if you had a tab group and it could pull everything out of the tab group,       |
| 54:12      | that would be amazing, but it can't, which is a real shame because it is actually pretty good           |
| 54:18      | at regular expressions and so on because I've just tracked back, by the way, Micah, it was a            |
| 54:22      | regular expression problem that you are having. If there was a comma in the title, then that was        |
| 54:27      | getting split up when things got parsed and so I helped you figure that one out. It ended up            |
| 54:37      | pulling them and creating a CSV or a set of CSVs, I guess, comma-separated values and so we needed      |
| 54:46      | to, I can't remember what your solution was, basically not make it a CSV. I think I made it             |
| 54:51      | into Markdown style links. Yeah, exactly. Which worked. Yeah, exactly. Completely skipped               |
| 54:59      | needing to create a comma-separated value list and so then the commas didn't even play a role in it.    |
| 55:06      | Yeah, and that is a good example of the XY problem, which is not exactly what you were doing. It was    |
| 55:11      | just the solution was actually to go to the next step in the automation and make it a bit simpler       |
| 55:18      | by not adding that extra step, which can often make life better when it comes to these things.          |
| 55:24      | By the way, there's a website xyproblem.info if you want to learn more about the XY problem. I          |
| 55:30      | immediately was like, I need to save this in my brain because this is a conversation that I have        |
| 55:35      | regularly without realising this is the occasionally I'm sure you two both have gotten                  |
| 55:42      | messages from family members or perhaps partners or whomever and they say,                              |
| 55:47      | this isn't working or this is broken and you are like, okay, just saying it's broken is not             |
| 55:53      | quite enough information. Yeah, it's broken could mean any number of things. You have not turned        |
| 55:59      | it on and taken it out of the box yet. You're trying to do the completely the wrong thing with the      |
| 56:04      | wrong tool. Yeah, like audio is not working. Does that mean that it's coming out distorted? Does        |
| 56:09      | that mean that it's not coming out at all? Does that mean that you can hear it out of headphones        |
| 56:13      | but not out of the max speakers like you want to get to? So yeah, I like this XY problem thing          |
| 56:20      | because that helps me kind of pull into the empathy and understanding of how someone might be           |
| 56:26      | explaining this one thing when they're trying to get to the source of it, which is this. So             |
| 56:29      | what is it? Patience and grace. Yes, absolutely. But not only with others but with yourself when        |
| 56:37      | you're dealing with other people. [[Brett Terpstra]], since we're talking about him,                        |
| 56:45      | Markdown Service Tools has created a Markdown Service Tool that gives you a list of all the             |
| 56:50      | [[Safari]] links in the open browser in Markdown. Oh, really? Yes, I use that as part of the                |
| 56:56      | basis for some of the stuff that I've done for Micah because the thing with good artists create         |
| 57:02      | great artists steal, great automators steal from the things that they and other people have done        |
| 57:06      | as well because you don't need to reinvent the wheel every time. Sadly, the twit back end I             |
| 57:14      | recently confirmed does not support Markdown, which just breaks my heart. So I ended up just            |
| 57:19      | having to get kind of raw links and headlines and instead of being able to use Markdown.                |
| 57:24      | Does it support HTML? Yes, it does. Because what you could do is you have all these things that         |
| 57:30      | create Markdown and obviously you like Markdown and there's very good reasons for that. But you         |
| 57:35      | could use a shortcut that takes whatever is on your clipboard and just turns it into HTML.              |
| 57:41      | Oh, okay. Yeah, that's perfect. Because that's something shortcuts can do really well.                  |
| 57:47      | So there's plenty of other services that can do that too. I'm sure [[Brett Terpstra\|Brett Terpstra's]] got quite a         |
| 57:52      | few of them hanging around, but shortcuts can change Markdown into HTML for you.                        |
| 57:59      | Yeah, I got to donate some money to Brett because I've been talking about him a lot on the show         |
| 58:06      | today and goodness gracious, do I use a lot of the awesome stuff that Brett makes.                      |
| 58:12      | If you're a software engineer, you've been there. It's 9pm. You're finally unwinding from work,         |
| 58:17      | but then your phone buzzes with an alert. Something's broken and your mind's already racing             |
| 58:21      | at what could be wrong. Is that the back end or the front end? Do we have slow running queries?         |
| 58:27      | Now the whole team's scrambling from tool to tool, messaging person after person to find                |
| 58:30      | and fix the issue. That wouldn't happen if you get New Relic. New Relic combines 16 different           |
| 58:35      | monitoring products that you'd normally buy separately so engineering teams can see across              |
| 58:39      | their entire software stack in one place. More importantly, you can pinpoint issues down to             |
| 58:45      | line of code so you know exactly why the problem happened and can resolve it quickly.                   |
| 58:49      | That's why the Dev and Ops teams at DoorDash, GitHub, Epic Games and more than 14,000 other              |
| 58:55      | companies use New Relic to debug and improve their software. Whether you run a cloud native             |
| 59:00      | startup or a Fortune 500 company, it takes just five minutes to set up New Relic in your environment.   |
| 59:05      | That next 9pm call is just waiting to happen. Get New Relic before it does. You can get access to       |
| 59:11      | the whole New Relic platform and 100 gigabytes of data for free, forever, no credit card required.      |
| 59:16      | Sign up at NewRelic.com/Automators. That's N-E-W-R-E-L-I-C.com/Automators.                  |
| 59:24      | That URL one more time, NewRelic.com/Automators. Our thanks to New Relic for their                |
| 59:29      | support of this show and all of Relay FM. So we talked around [[HomeKit]] a little bit earlier,             |
| 59:35      | Micah, and I know a lot of our listeners are really into home automation. How far down that             |
| 59:40      | rabbit hole have you gone? This is one of the other downsides, I guess, of moving to California         |
| 59:47      | is things are a lot more expensive here when it comes to housing. I lived in Springfield,               |
| 59:54      | Missouri, which is in southern Missouri, in a three-bedroom detached home with a huge backyard,         |
| 01:00:03   | and I was renting it, but Missouri, or at least in the places where I've lived, the landlords           |
| 01:00:11   | tend to be a little bit more hands-off slash not as rigourous with the lease. And so the landlord        |
| 01:00:19   | was A-OK with me making changes to the home so long as when I left, I either paid for them to           |
| 01:00:27   | return it to how it was before, or I made it back to where it was whenever I first moved in,            |
| 01:00:33   | which is always what I do, the second one. And so I was able to customise a lot of the setup            |
| 01:00:43   | there. I changed out the garage door opener for one that was [[HomeKit]] enabled. The front door lock       |
| 01:00:52   | was [[HomeKit]] enabled, door lock, door bell was, well, I guess that never got [[HomeKit]] support             |
| 01:00:59   | because August promised that but never delivered. And the lighting and all that kind of stuff           |
| 01:01:05   | throughout the home was [[HomeKit]] enabled. And so at that time, I had quite a few different               |
| 01:01:10   | true automations, I guess, set up. One of my favourite ones and the one that never got                   |
| 01:01:16   | deleted or deactivated because it was used and worked perfectly every time was that at sunset,          |
| 01:01:25   | the light out in my front yard, which was like a post light, would turn on as well as the porch         |
| 01:01:31   | light in the front and then the porch light in the back. So those three lights would turn on at         |
| 01:01:36   | sunset and then at sunrise, they would turn off. So there was always kind of lighting if I needed       |
| 01:01:43   | to look outside at night because we heard a sound and wanted to see what the raccoon was out there      |
| 01:01:47   | doing, then you could easily do that. Other automations were when someone went into, when               |
| 01:01:58   | someone opened up the garage door after sun went down, then the light in the garage would turn          |
| 01:02:06   | on automatically and stay on for 15 minutes or so because there was a window in the garage,             |
| 01:02:12   | but obviously at night, then there wasn't enough light. And then one of my favourite automations,        |
| 01:02:17   | it was not with [[HomeKit]] directly, I used, and this was a tip that I often gave on                       |
| 01:02:22   | Smart Tech Today when folks would ask about it. As much as it would be nice to be able to control,      |
| 01:02:31   | run, and change your automations all in one place, like with the Home app,                              |
| 01:02:36   | there are times when you will find that it is better to use the app of the company that makes           |
| 01:02:45   | the thing that you're doing because the connection, the communication is just a little bit closer.      |
| 01:02:51   | It's less likely to run into issues. And so one of those things, and I should note that                 |
| 01:02:57   | for the most part, Philips Hue or now Signify Hue is not one where you need to do this,                 |
| 01:03:04   | but I went ahead and did it this way because there were a few more features that were available         |
| 01:03:09   | to me by doing so. And that was that I had a Philips Hue motion sensor in my hallway,                   |
| 01:03:15   | and there was a light in the middle of the hallway. And basically, because it had a built-in            |
| 01:03:23   | light sensor or a lux sensor, it could tell how bright the hallway was. If that reached a certain      |
| 01:03:28   | threshold where it was dark enough, when it detected motion, it would just turn on the light            |
| 01:03:32   | in the hallway. And then it would turn it off after 10 minutes of not sensing movement. And             |
| 01:03:38   | it was also set so that different time periods, it would work differently. So I think it was after      |
| 01:03:44   | 11pm, it would turn on at a very low brightness. It was just a nightlight versus during the day         |
| 01:03:52   | where it would stay on. So I had a lot of different fun automations set up in my home. I would also     |
| 01:03:57   | do sort of holiday-themed ones, which Rosemary, you and I had that question on the show recently.       |
| 01:04:02   | But around the 4th of July, the lights in the living room would be red, white, and blue. Around         |
| 01:04:10   | Halloween, we could do spooky stuff. On Valentine's Day, I had an automation where when my partner      |
| 01:04:16   | opened up the door, the lights turned pink, and then some music started playing on the HomePod,        |
| 01:04:22   | all kinds of fun stuff. I will admit that in my new townhouse here in California,                       |
| 01:04:31   | I haven't done as much because I'm a little more weary about making changes to the home.                |
| 01:04:38   | But what I do have set up are mostly automations around lighting so that they will be different         |
| 01:04:46   | colours depending on the time of day. And I keep saying, eventually, I'll get around to                  |
| 01:04:54   | changing the switch for the front porch so that it will turn on whenever the sun sets and turn          |
| 01:05:00   | off when the sun rises. I just haven't got around to it yet. So yeah, there's so much                   |
| 01:05:07   | that [[HomeKit]] can do. It's just sort of breaking everything down and then trying to set it all           |
| 01:05:15   | back up again was something that I needed. If I was going to get it all done, I needed to do it         |
| 01:05:21   | right when I first moved in, but I was so busy with my new job and everything, there just wasn't        |
| 01:05:25   | time. So it's just been sitting. And I think that is something people need to be a little careful       |
| 01:05:30   | about with home automation as well, in that if you start setting something up and then you leave        |
| 01:05:34   | it half done, you end up in a very frustrating state where it doesn't work the way you wanted to.       |
| 01:05:39   | It can be actively hampering you. Like if you're sitting in a room and the lights keep turning          |
| 01:05:44   | off because you've not yet figured out a way to keep the lights on if you haven't left the room,        |
| 01:05:48   | then that's just going to be driving you insane and all because you haven't had a chance to finish      |
| 01:05:53   | it. So it's sometimes better to just wait until you've got a bit more time to be able to sit down       |
| 01:05:57   | and do that part, whatever it is entirely. Agreed. I feel like there's probably a show                  |
| 01:06:04   | in there sometime where we need to do like a landlord friendly automation show because that's           |
| 01:06:09   | a problem a lot of people have. I mean, it's like I want to do automation, but I can't replace          |
| 01:06:15   | light switches. I mean, what can I do? And I get it. It's got to be a struggle.                         |
| 01:06:23   | Yeah. Yeah. I'm currently looking for a better alternative to the [[SwitchBot Bot\|SwitchBot]].                            |
| 01:06:27   | [[SwitchBot Bot\|SwitchBot]] for people who don't know is a tiny little device. It's got a plastic arm in it               |
| 01:06:33   | and it's [[Bluetooth]], but you stick it on something like a light switch and the arm reaches out and       |
| 01:06:37   | presses the switch for you. So it's great for things like coffee makers and so on or a light            |
| 01:06:43   | switch where you can't replace a light switch. The problem that it is is [[Bluetooth]]. Like [[Thread]]         |
| 01:06:49   | is much better, but these are not [[Thread]]. They are Bluetooth. And I think you had that, Micah,          |
| 01:06:55   | with the Belkin Wemo switch until recently, until it finally got [[Thread]] where it was just              |
| 01:07:01   | terrible. Like the [[SwitchBot Curtain Opener\|SwitchBot curtains]] are great because let's face it, how often do you actually        |
| 01:07:06   | interact with your curtains on a daily basis? Probably twice a day and having them open or              |
| 01:07:10   | close a minute or so later, perhaps it's never even that long. It's fine. But when you walk into        |
| 01:07:17   | a room and you want the light to turn on, waiting 30 seconds for the light to turn on, because          |
| 01:07:23   | it's got to communicate via the hub and everything, that's not great. And so I would really have        |
| 01:07:29   | find a better version of that that's controlled by a [[Zigbee]] or something that people can actually       |
| 01:07:35   | use and rely on to work instantly when they want to do stuff. I mean, it's only going to be relatively  |
| 01:07:40   | instantly because there's the arm that has to come out and press the button versus something            |
| 01:07:45   | like a [[Lutron]] Casetas, which obviously is going to be pretty much instant. But I mean,                 |
| 01:07:50   | it's a great tool. I just wish that I knew of some better options than that. It is pretty good.         |
| 01:07:56   | And if you use Homebridge, you can get it into [[HomeKit]] as well. They write their own Homebridge         |
| 01:08:00   | plugin, but it is unfortunately Bluetooth. I have a question for you too as automators.                 |
| 01:08:07   | How do you navigate the sort of onboarding or explanation for friends, family, partners,                |
| 01:08:17   | whomever else might be in your home? Because I would imagine that you, and maybe you are                |
| 01:08:23   | paired with someone who is also an automation expert or folks who are automation experts.               |
| 01:08:29   | But if you find yourself kind of being that person, do you just do your best to kind of make            |
| 01:08:34   | it invisible to the other folks or other person so that they don't have to interact with it?            |
| 01:08:40   | Or do you do, do you take a time to sit down and explain it? Or do you just kind of go,                 |
| 01:08:46   | okay, if you have any questions asked, I'm just curious what navigating that is like for you.           |
| 01:08:52   | Because I think that that, a lot of the home automation stuff in particular,                            |
| 01:08:57   | and smart speakers even, a lot of that is still, most of it is sort of an individual,                   |
| 01:09:04   | it has this individual mindset. It's one person kind of interacting with these things. And they've      |
| 01:09:08   | only just now started doing voice recognition for smart speakers, but still the lighting and the        |
| 01:09:14   | automations that you set up, how do you go about educating others who will come into                    |
| 01:09:19   | interaction with them? Or is it just kind of like an invisible thing?                                   |
| 01:09:22   | My personal aim for all of these things is it should be invisible. So it just does the right            |
| 01:09:28   | thing at the right time. And they never actually have to actively interact with it.                     |
| 01:09:32   | But should they want to actively interact with something like a light switch,                           |
| 01:09:36   | there's a light switch there, and there are buttons on it that they can press,                          |
| 01:09:39   | and they will do the things that they're expected to do.                                                |
| 01:09:42   | And I realised that I've accomplished my goal in the bathroom at the very least,                        |
| 01:09:46   | because when my parents were visiting the other day, my mom went into the bathroom.                     |
| 01:09:48   | And I heard her start to say, ah, as in, I can't find the cord for the light switch,                    |
| 01:09:54   | because my bathroom light switch is a pull cord. It's still there. It's just,                           |
| 01:09:58   | I tied it up so it's up higher so that you won't reach for it automatically when you go in there,       |
| 01:10:03   | because it took me a couple of days to unlearn the habit of pulling the cord myself.                    |
| 01:10:08   | And as she said that, the light turned on and she went, ah, and that was it.                            |
| 01:10:12   | And she closed the door and then came out, and then the light turned off a couple of minutes            |
| 01:10:15   | later and she was like, huh, your bathroom light's quite cool. Like, can we do this?                    |
| 01:10:19   | So it's like, you could, but you're going to need to set up quite a few different components            |
| 01:10:25   | to be able to do that, unfortunately. But yeah, my aim is to try and make it just work so that,         |
| 01:10:30   | like, somebody walks into a room where they're going to need light, light is provided.                  |
| 01:10:34   | And then they walk out and then a minute or so after there is no more movement,                         |
| 01:10:38   | the lights turn off and things like that, because that's what's most convenient for me                  |
| 01:10:43   | as well. You know, I don't have to walk around after myself turning off lights.                         |
| 01:10:47   | And so my aim is to try and make it invisible, but then give people, you know,                          |
| 01:10:52   | a way to toggle things like a light or something if they need it.                                       |
| 01:10:57   | So yeah, I've got, like, Philip's Hue covers or, like, I've got the four button switches and I bought   |
| 01:11:02   | covers from [[Amazon]] just that go over my light switches. And so the Hue buttons are on that.             |
| 01:11:07   | And I can take the Hue button off and take part of the cover off and actually control                   |
| 01:11:10   | the physical switch if I need to, but I rarely need to do that. But people look at it and they          |
| 01:11:15   | press the top button to turn the light on, they press the button button to turn the light off.          |
| 01:11:19   | And they may never press the buttons in the middle, but that's okay.                                    |
| 01:11:23   | Yeah, you know, it's really a challenge. I mean, I have a wife and two daughters and                    |
| 01:11:28   | the, you know, when I first started playing with the stuff, I was trying to use the smart               |
| 01:11:32   | light bulbs, but then they would turn off the switch and the light bulb would stop working              |
| 01:11:37   | and I'd be unhappy and they'd be unhappy because sometimes they would flip the switch and the           |
| 01:11:42   | light wouldn't go off and on. And that's what led me down the road to the [[Lutron]] Caseta               |
| 01:11:48   | switches. So now they can turn the switch off or on and I can also control the automation. And          |
| 01:11:54   | you want to be as transparent as possible, but you really do have to have a conversation like,          |
| 01:11:58   | look, hey, I really love you and you love me. Living with me means occasionally things are              |
| 01:12:03   | going to be a little weird around the house. You know, like the, you know, the smart speaker            |
| 01:12:10   | may yell out my next appointment once in a while when it shouldn't. And, you know, I'm going to try     |
| 01:12:15   | and nail those things down as best as I can, but just, you know, have a little patience with me as      |
| 01:12:21   | I work through this. Yeah, patience and grace. Yeah, but it is, it is interesting. Like there's         |
| 01:12:27   | stuff I want to do. And then there's also technological limitations. Like I put a                       |
| 01:12:34   | UV camera pointed at my front door is kind of a security feature, but in theory, home kits should       |
| 01:12:40   | recognise the people's faces. It should be smart enough to have that feature. And I thought, well,      |
| 01:12:46   | wouldn't be fun if I had like a different song that would play, whether it's my wife or my daughter     |
| 01:12:51   | or me. And it's just not smart enough yet. And even though they say they have the feature,              |
| 01:12:56   | it doesn't work. So you have to experiment and realise where the limits are of this stuff,              |
| 01:13:02   | even beyond what [[Apple]] or the manufacturers are telling you. Yeah, yeah. Yeah, definitely. Also         |
| 01:13:10   | invite requesting bug reports. It's an interesting experience, but also very useful. The last thing     |
| 01:13:17   | you want if you're sharing home automations is for the person to never tell you that the thing is       |
| 01:13:21   | broken from their perspective. That's a really good point. Yeah, because if something works the         |
| 01:13:28   | way you expected to, that's fine for you. But if it's not working the way they expected to,             |
| 01:13:32   | or it's annoying them or something, then having them tell you, hey, this thing doesn't work the         |
| 01:13:38   | way I want it to, I want it to work like this. So maybe it means temporarily not having an              |
| 01:13:45   | automation there while you figure it out. But then sitting down and thinking about the solution         |
| 01:13:48   | that works for everybody involved is the best. Fortunately in my bathroom, there is a choice            |
| 01:13:55   | of you can use the bathroom with the light on or you can use the bathroom with the light off            |
| 01:13:59   | in the dark. There are no windows. So I made the hopefully correct assumption that most people          |
| 01:14:05   | want to use the bathroom with the light on and preferably not have the light turn off. Well,            |
| 01:14:10   | they're in the bathroom using the shower or whatever it is. So I've yet to have a bug report            |
| 01:14:15   | come out of that. But I do make point of telling people, if something doesn't work the way you're       |
| 01:14:20   | expecting it to, you need to tell me because then I can fix it. Because the worst thing is not          |
| 01:14:25   | knowing that something's broken. Micah, you also mentioned earlier that you're using some of the        |
| 01:14:29   | web internet automation stuff like Zapier and IFTTT. Yeah. Any favourites there you can share?           |
| 01:14:36   | So those ones are, I can't go into too much detail simply because it does have to do with               |
| 01:14:47   | stuff with work that's sort of on the back end and the way that we kind of do things. But I will        |
| 01:14:53   | say, I'll explain one of them. It's partially because we haven't used this one in a while               |
| 01:14:58   | because we haven't been able to be in the studio together. But all of the shows that I do save          |
| 01:15:04   | for one, we just are in front of a camera talking to the camera and to the folks. But                   |
| 01:15:11   | Tech News Weekly, that show, we actually, when we were in studio, used a teleprompter for the           |
| 01:15:17   | parts of the show that were built in. So the billboards at the top of the show, the advertisements      |
| 01:15:24   | and the ads throughout the show all are on a teleprompter. And so there's a place on the server         |
| 01:15:34   | where the teleprompter files are stored and then the person who's running the teleprompter can          |
| 01:15:41   | pull that file up. What we would do in the past was we would copy from the document that we use         |
| 01:15:49   | with all of the text in it and paste it into a text file and save it to this place on the               |
| 01:15:55   | server. And I realised, oh my goodness, this whole thing could be automated. So I used Zapier           |
| 01:16:00   | to pay attention to the Google Drive looking for a specific title because the show is always the        |
| 01:16:09   | same. And it's TNW, which means Tech News Weekly, and then the number for that show. So it just         |
| 01:16:15   | looks for that TNW dash and it's looking at the latest file that's there. And then it knows to go       |
| 01:16:22   | in and look at specific cells in the document. So I gave it a range of cells to pay attention to.       |
| 01:16:30   | The cell or the sheet itself has built in the formula to turn linked text and all that kind             |
| 01:16:39   | of stuff into plain text before it puts it into the separate cell that is like the plain text,          |
| 01:16:44   | because that's what we used to use to copy and paste from. So it pulls from those plain text            |
| 01:16:48   | cells, creates a wholesale.text file with that text inside of it and then saves it to that place        |
| 01:16:57   | on the server so that the file just automatically appears. And with Zapier, I think it checks every     |
| 01:17:04   | five minutes or something like that. So it checks pretty regularly and can see that the file is         |
| 01:17:08   | there. And then it popped up where I needed it. I also, I don't use this one now because I want         |
| 01:17:15   | a little bit more control as I've, as I've gotten in front of more eyes over time. There is a           |
| 01:17:22   | separation between my Twitter, which is incredibly public and has a lot more interaction and my         |
| 01:17:28   | [[Instagram]], which is available to the public, but doesn't have as many people paying attention.          |
| 01:17:34   | And so I, I like that separation. I used to have an IFTTT setup where when I published,                 |
| 01:17:42   | when I posted a photo on [[Instagram]], it would download that image from, you know, the [[Instagram]]          |
| 01:17:49   | servers or whatever, however that works and then paste it on Twitter with the caption from the          |
| 01:17:55   | [[Instagram]] post and a link to that [[Instagram]] photo. And so then it would be an actual image on Twitter   |
| 01:18:01   | instead of just being the [[Instagram]] link that exists. Yeah. And again, I said, as I said,               |
| 01:18:07   | I shut that one off simply because now I don't want every [[Instagram]] post that I post to automatically   |
| 01:18:12   | be there. I get to choose, but the, then then the other one is it's one that pays attention,            |
| 01:18:21   | looks on my [[Instagram]]. It used to, or it still pays attention to Flickr, but obviously don't use        |
| 01:18:27   | Flickr anymore. And a few other places, and it looks for a hashtag Chihuahua coffee. And upon           |
| 01:18:33   | finding that, it adds it to my Squarespace website where I've got a grid of photos of my dogs           |
| 01:18:42   | on, on that page. So it can automatically go ahead and put that there and make it available             |
| 01:18:47   | for that section of the page. So yeah, I like online automations if they are not interacting            |
| 01:18:57   | locally with my devices. If it's all sort of on that side of things, it's one server talking to         |
| 01:19:03   | another server, one service talking to another service. I'm all down for that. But it's whenever        |
| 01:19:08   | the interaction happens locally that I end up being a little bit just skeptical. And I don't            |
| 01:19:16   | want to set myself up for disappointment. So I don't do that. However, I will say that the stream       |
| 01:19:22   | deck has, there's someone who created a service where you can tie it to an IFTTT automation.            |
| 01:19:28   | And so I wanted to give that one a go. And so I just was like, Oh, let's see what I can possibly        |
| 01:19:36   | create. And I had it set up a way to text me whenever I hit that button. I would never really,          |
| 01:19:40   | I never really need that. I don't need to use that, but I just wanted to see if it was possible.        |
| 01:19:44   | But it gave me ideas for potential use of doing local interactions with things                          |
| 01:19:51   | via IFTTT. I find, I'm curious how you've to feel about each of those services, because I think         |
| 01:19:59   | Zapier ends up having a lot of between action adjustments that you can make that IFTTT I found          |
| 01:20:09   | has been lacking in the past, but IFTTT has added a lot more robustness over time that puts it,         |
| 01:20:17   | I think, on the same level or close to the same level of Zapier. Do either of you use both of           |
| 01:20:25   | those or either of those? I use both of them. And I also use another service called [[Make\|Integromat]],         |
| 01:20:31   | which is more like Zapier from the power perspective, but it's visual to interact with.                 |
| 01:20:38   | So you actually have nodes and you get branching as well at the base tier, which is really nice,        |
| 01:20:43   | because the base tier is only $7 a month, which if you're looking to expand from                        |
| 01:20:49   | what if this and that can do, then $7 a month to [[Make\|Integromat]] is a lot more affordable than the $20       |
| 01:20:55   | a month for Zapier. Zapier really is a business tool. But I use all of them. And I find they            |
| 01:21:02   | work really well, but I do tend to stick with automate these things on the web. The closest             |
| 01:21:08   | I'll come to interacting with my machine is putting something in a [[Dropbox]] folder,                      |
| 01:21:12   | which then either [[Hazel]] or Keyboard My Store or [[DEVONthink]] is watching,                                |
| 01:21:16   | and then those pick that up on the other end and then do whatever it is when my device is online        |
| 01:21:22   | and available to do it. But I don't tend to really do direct interaction from my computer               |
| 01:21:28   | out to those automations or vice versa, though I could. There's nothing stopping me, but it does        |
| 01:21:34   | just end up being that I tend to keep it all in one place. Don't cross the streams, as Ghostbusters     |
| 01:21:41   | said. Keep web stuff on the web and keep local stuff local and bridge the gap between the two           |
| 01:21:47   | carefully. Yeah, like Rose, I use them all. I mean, I make a podcast called The Automator,              |
| 01:21:52   | so go figure, right? But I do find that there are certain services that work better with one            |
| 01:21:58   | service over the other. I mentioned [[Day One]] earlier, their IFTTT integration is really good.            |
| 01:22:05   | So that's one of the things I do in IFTTT. And I just kind of go to the tool that works the best.       |
| 01:22:11   | And that's not really a good answer, because you shouldn't have to subscribe to three of these.         |
| 01:22:17   | Right, right. But they all have their uses. But like you, I am also leery of local-based                |
| 01:22:25   | cloud automation. If it's something that's going to be local, I'd much rather do it in                  |
| 01:22:31   | [[Keyboard Maestro]], Shortcuts, Texas Commander, whatever, then have it go to the internet to              |
| 01:22:37   | do an automation. And the usage for these just really scales with your usage of cloud-based             |
| 01:22:44   | services. If you've got a bunch of those, these are better than something local. Like trying to         |
| 01:22:50   | get [[Keyboard Maestro]] to open up some web service in [[Safari]] and navigate to the right page and           |
| 01:22:57   | insert text is very dicey. Whereas with these cloud-based services, you can automate that and           |
| 01:23:04   | it all happens through the API and it works every time. And that's what we're looking for.              |
| 01:23:09   | Yeah, yeah. That is really where the trick is. And also, I tend to find just because of networks        |
| 01:23:18   | and how networking works, you are much more likely to experience failures                               |
| 01:23:22   | with automations if you are from a local perspective dependent on a web service.                        |
| 01:23:29   | All it takes is that Cloudflare node being down for you right now or your ISP is being                  |
| 01:23:34   | a bit flaky or you have a power outage or something. Your machine's on a UPS, but maybe                 |
| 01:23:41   | your router isn't or something downstream isn't. And so you don't have a connection or your             |
| 01:23:46   | connection is not 100% reliable and then suddenly things don't work. I think that's probably where      |
| 01:23:50   | a lot of people have experienced or have poor experiences with home automation where they've            |
| 01:23:55   | tried to do things with their lights and they're using a service like if this and that. And the         |
| 01:23:59   | problem with using a service like if this and that to control your lights is whenever it sees the       |
| 01:24:05   | trigger, that farms out to if this and that, which processes it as soon as it can, obviously,           |
| 01:24:12   | but that's not necessarily going to be instant. And then it has to come back. You've got so many        |
| 01:24:17   | potential points of failure added over something like [[HomeKit]] where the processing is done locally      |
| 01:24:22   | in your home on a HomePod or an [[Apple TV]]. And that's why local based automations when you want          |
| 01:24:30   | the start and the ends to be local are usually the best. That's just the way that these things          |
| 01:24:37   | end up working. So, Micah, if there's one area of automation you'd like to get better at, what is it?   |
| 01:24:44   | Oh, man. I think it would be in more of the auto automations. It's the stuff that happens               |
| 01:24:53   | automatically in the background. There was one point when I had [[Hazel]] downloaded and installed          |
| 01:24:58   | on my Mac. And I was trying because I will admit to being pretty laissez-faire as it were with my       |
| 01:25:10   | files. And so what I tend to do is I use, my desktop is where I am working on active projects.          |
| 01:25:19   | And then after they're done, there are certain things like receipts and invoices and whatnot            |
| 01:25:25   | that get sorted into specific places. But everything else, I just open up my network attached           |
| 01:25:33   | storage and I create a new folder and it's called desktop. And then afterwards is a date slug.          |
| 01:25:40   | So in my case, it would be, and I'm sorry, Rosemary, but I'm doing month first, 021122.                 |
| 01:25:47   | And then desktop 021122 has the files from the desktop that I'm no longer using,                        |
| 01:25:54   | just there. And so I've got all of these files going back. And what I wanted to do was use [[Hazel]]        |
| 01:26:00   | to every, at the end of every week, it would take the files that are on the desktop and move them       |
| 01:26:10   | to my network attached storage, which by the way is always backed up both to the cloud and locally,     |
| 01:26:17   | and then create that folder desktop with the date slug and keep putting it there so that I didn't       |
| 01:26:22   | have to automatically or manually rather move those things from my desktop. But I ran into issues       |
| 01:26:29   | trying to give [[Hazel]] a specific like repeating date. And then I also ran into issues getting [[Hazel]] to   |
| 01:26:38   | pay attention to my network attached storage. And then I also ran into an issue where if the            |
| 01:26:44   | network attached storage did not automatically connect for some reason, then it would not               |
| 01:26:50   | automatically connect. Yeah, exactly. So I did run into some annoying issues that kept me from          |
| 01:27:01   | doing that. But that's just one example of an automatic automation that I would want to do.             |
| 01:27:09   | I think I'd have some more. Yeah, I would say because you want to do this at a specific repeating       |
| 01:27:14   | interval, [[Hazel]] is probably not the right tool for that. [[Hazel]] is great for this file is just           |
| 01:27:19   | appeared in this folder, or this file appeared in this folder x period of time ago. And then it         |
| 01:27:24   | can go through matching other criteria and so on and so forth, which is really useful and great.        |
| 01:27:30   | But if you want something to happen periodically, [[Keyboard Maestro]] has a really excellent time          |
| 01:27:34   | trigger. And that can also do the if statements, of course, to check, hey, is this a location           |
| 01:27:40   | available? Nope, okay, I'll try again later, or whatever it is. And of course, that means that          |
| 01:27:46   | you can easily run that macro manually at any point that you want to as well, allowing you to           |
| 01:27:52   | just say, for example, get all the files from your desktop and move them to a folder on your            |
| 01:27:57   | nest that you've just created with the date slug incorrectly formatted, because year must come          |
| 01:28:02   | first. I only say that because that way if you sort them alphabetically, then they are sorted           |
| 01:28:07   | from oldest to newest or newest to oldest automatically, which is it's a nice extra.                    |
| 01:28:11   | But if you want month first, I suppose I can let it happen. But [[Keyboard Maestro]] is probably the        |
| 01:28:16   | right tool for that one. It can do a lot of the things that [[Hazel]] can do as well, where it can          |
| 01:28:20   | watch folders and move files and things around. And if you want to use it for that, it's great.         |
| 01:28:26   | I personally end up using all of them. But it's definitely a case of the right tool for the right       |
| 01:28:31   | job. And I think maybe part of the problem there was the wrong tool. Because you know, Hazel's          |
| 01:28:37   | excellent. And I use it for things like I've got a rule here in my downloads folder called old          |
| 01:28:42   | screenshots. And it's looking for things where the date add is not in the last day, and it has to be    |
| 01:28:47   | a video or an image, and it has to either have a clean shot or simulator screen at the beginning        |
| 01:28:52   | of the name, and then it will move it to trash. But it only does that on things that are over a day     |
| 01:28:57   | old. And it's, it works brilliantly. But that's because I wanted to do things whenever that             |
| 01:29:03   | stuff gets old and stale. It's not doing that on a weekly or a daily basis.                             |
| 01:29:08   | I would also think that maybe this is an XY problem again. It's like, does it really need to            |
| 01:29:12   | happen once a week? Or is it just you need to have it there long enough to use it? Like maybe           |
| 01:29:17   | after three days, you're always done with it. And then that's a good point that in that case,           |
| 01:29:22   | you could just say date added is, you know, not within the last three days and then have [[Hazel]]          |
| 01:29:27   | ad hoc put them away for you after three days or five days or seven or whatever.                        |
| 01:29:34   | That's another way to kind of scratch that edge.                                                        |
| 01:29:36   | Yeah. And of course, the other solution is don't shove everything in one folder based on the date       |
| 01:29:41   | on your NAS. Instead, slowly over time create more and more rules, which put things in folders based    |
| 01:29:48   | on the kind of file that it is. So if it is, you know, you said that you file receipts and so on        |
| 01:29:53   | and so forth, you know, you could create automations that will file anything that you put in a receipts |
| 01:29:58   | folder to subfolders inside of it automatically for you. But you can also slowly start creating         |
| 01:30:04   | rules to, you know, clean up all the desktop folders if you wanted to. That's how I recently            |
| 01:30:09   | processed an unexpected backlog of things in my downloads folder. I just started creating a rule        |
| 01:30:14   | in [[Hazel]] and saw how many files were left and then picked another file and created a rule and           |
| 01:30:18   | saw how many files were left and sort of chip away at it.                                               |
| 01:30:23   | Yeah, exactly. And you don't have to do everything all at once, but you can start with,                 |
| 01:30:27   | you know, these are the easy low hanging pieces of fruit, you know, anything                            |
| 01:30:30   | that's got this particular name and this kind of file extension. I want to go in this folder over       |
| 01:30:35   | here and get started like that. Makes sense. Well, Micah, you are an automator. I don't care            |
| 01:30:43   | what you're saying. We're doing some cool stuff and we really appreciate you coming in to share         |
| 01:30:49   | that with us. Where do people find you, Micah, if they want to connect with you on the internet?        |
| 01:30:53   | The best place is just going to chihuahua.coffee. That's C-H-I-H-U-A-H-U-A.coffee. There you'll           |
| 01:31:00   | find links to the places I'm most active online. But if you're wanting to, like,                        |
| 01:31:05   | get in touch, tweeting at me, at Micah Sargent is a good way to get in touch. And                       |
| 01:31:11   | Hardy, thank you to the both of you for having me on the show. I've inspired. I've got several tabs     |
| 01:31:16   | open. I'm signing up for Integral Mat after this. Like, they're so much fun. Well, you are such an      |
| 01:31:21   | inspiration for me, too. I love the stuff you're creating over at Twitter and it's just such a          |
| 01:31:26   | great voice in the community. And we really appreciate you putting yourself out there and               |
| 01:31:31   | sharing as much as you do and coming on the Automators to talk about automation. We appreciate          |
| 01:31:37   | that, too. I'm honoured. Thank you. We are the Automators. You can find us over at relay.fm              |
| 01:31:42   | slash Automators. We have that great forum that Rose put together at talk.automators.fm.                |
| 01:31:49   | I love when I go to search for an automation problem and the answer comes up in the forum               |
| 01:31:53   | for my podcast. I mean, Rose, don't you like that? It's awesome. I love it. I love it. It's             |
| 01:31:57   | the automators and the MPU forums are always coming up and the Twitter forums pop up from               |
| 01:32:02   | time to time as well. But yeah, it's great seeing the answers from, you know, the people we interact    |
| 01:32:08   | with on a regular basis. Yeah. And I want to thank our sponsors for today. And that's our friends       |
| 01:32:13   | over at LinkedIn Jobs Fitbod and New Relic. And we'll see you next time. Goodbye, everyone.             |
