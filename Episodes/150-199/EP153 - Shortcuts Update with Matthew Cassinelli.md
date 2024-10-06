---
status: complete
fc-date:
  year: 2024
  month: 5
  day: 3
fc-category: podcast
podcast: Automators
published: 2024-05-03
duration: 3523
formattedduration: 00:58:43
hosts:
  - David Sparks
guests:
  - Matthew Cassinelli
notetype: episode
showpage: http://relay.fm/automators/153
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators153.mp3
episode: 153
title: "153: Shortcuts Update with Matthew Cassinelli"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Shortcuts guru Matthew Cassinelli joins to discuss the state of shortcuts and some of his favourite automations.

# Hosts
- [[David Sparks]]
# Guests
- [[Matthew Cassinelli]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 153 Discussion](https://talk.automators.fm/t/153-shortcuts-update-with-matthew-cassinelli/17562)

# Sponsors
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Find the qualified candidates you want to talk to, faster. Post a job for free.
- [[Computex (Sponsor)|Computex]] - Grow your career, expand your business, and discover the infinite possibilities of technology. Register now or find out more info.

# Show Notes
Shortcuts guru, Matthew Cassinelli joins to discuss the state of shortcuts and some of his favourite automations.

- [Home – Matthew Cassinelli](https://matthewcassinelli.com/)
- [Newsletter – Matthew Cassinelli](https://matthewcassinelli.com/sirishortcuts/newsletter/)
- [Automators Talk](https://talk.automators.fm/)
- [Automators Archives - Relay FM](https://www.relay.fm/automators/archive)

# Transcription
  
| Time Index | Transcription                                                                                        |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to the Automator's Podcast. I'm David Sparks. Rosemary Orchard couldn't make it              |
| 00:06      | this week, and when I knew she wasn't going to make it, the first person that came to                |
| 00:10      | my mind happened to be available. Welcome back to the show, Matt Cassinelli.                         |
| 00:15      | Hey, thank you for having me. It's a pleasure as always.                                             |
| 00:18      | Oh, Matt, I'm so glad that you were able to come in today and talk to us. You are one                |
| 00:23      | of my very favourite automators. Is that a thing? Can you be one of my favourites?                     |
| 00:27      | Sure. I mean, you guys made it a thing. Thank you.                                                   |
| 00:29      | Yeah, why not? Matt is a [[Shortcuts]] guru. He worked at [[Apple]] for a while, helping them                |
| 00:38      | out when the [[Shortcuts]] team first came into [[Apple]]. Since then, he's left. [MattCassinelli.com](https://MattCassinelli.com),        |
| 00:44      | I believe, is the website? [MatthewCassinelli.com](https://MatthewCassinelli.com), but yeah.                                          |
| 00:47      | Matthew, I'm sorry. I should get both. I've never thought about it.                                  |
| 00:52      | You should get both. You should get both. Anyway, [MatthewCassinelli.com](https://MatthewCassinelli.com), great place to learn        |
| 00:57      | [[Shortcuts]]. He shares a ton of them. He's got a membership. I'm a member. I'm a paying                |
| 01:01      | member. Matt, did you know that I joined? I'm pretty sure.                                           |
| 01:04      | And he does all sorts of cool stuff with [[Shortcuts]] and [[Apple]] automation. So of course, if Rose       |
| 01:11      | couldn't make it today, Matt's the guy. And we have a lot on our agenda today. I'm particularly      |
| 01:17      | interested in talking about focus modes with you, Matt. But I think before we get there,             |
| 01:22      | let's just catch up. I haven't seen you for a while. What are you automating these days              |
| 01:26      | and what are you excited about? I mean, everything as always. I think                                |
| 01:31      | especially this time of year around May, I've had the whole year to settle in and go deep            |
| 01:38      | and also get fully distracted by everything as well. So I think my biggest thing I did               |
| 01:44      | some time. I don't even remember when last year was I tried to simplify and removed a                |
| 01:48      | bunch of my shortcuts. And then after I did that, it was a huge mistake. And so I added              |
| 01:53      | them all back. And now I have thousands on thousands. But there's some like high level               |
| 01:58      | stuff that I think [[Apple]] could do to help something like that not be necessary for people.           |
| 02:04      | And then even App [[Shortcuts]] is a major feature that I dove into this year because I did some         |
| 02:09      | consulting work with indie developers and really help them implement like the best version           |
| 02:16      | of I worked with the team at Structured. And we kind of built out their app shortcuts.               |
| 02:21      | And I even discovered some features that I didn't really know existed or like [[Apple]] barely           |
| 02:26      | mentioned in the documentation. So that's been pretty fun just because I think that's                |
| 02:32      | setting up before the future like app intents, the API that powers app shortcuts is everything       |
| 02:38      | that's widgets and stuff like that. So going forward, I think that's going to be a major             |
| 02:44      | key API that people need to know about. And just where it also helps you like the everyday           |
| 02:50      | person get shortcuts or like do what I'm doing in [[Shortcuts]] without having to set it all             |
| 02:55      | up. And so I'm almost making examples that I want developers to implement so you don't               |
| 03:02      | have to use my shortcuts too. But there's tons and tons.                                             |
| 03:06      | Yeah. I mean, and just to back up on that a little bit, like you were known for some                 |
| 03:12      | of your really cool shortcuts, but you often have to, you know, build your own structures            |
| 03:18      | to make those shortcuts work because the actions don't exist. So when I hear that you're actively    |
| 03:25      | working with developers to make that easier, I'm all for that. I mean, I think that is               |
| 03:30      | something that we need more of. So at this point, we've got [[Shortcuts]] on iPhone, iPad                |
| 03:36      | and Mac. So it's across all the platforms. And I want to come back to [[Shortcuts]] for                  |
| 03:42      | Mac, but just the story of app support and developers getting on board with [[Shortcuts]].               |
| 03:49      | How do you think we're doing at this point? I think we or [[Apple]] are two different areas.             |
| 03:58      | I think it's sort of a, I think this year, iOS 17 was an inflection point where like                 |
| 04:04      | the [[Shortcuts]] APIs got good enough or what they were kind of supposed to be the whole                |
| 04:10      | time, I think. So I think that sort of created a weird situation where developers who adopted        |
| 04:15      | it in the years past got sort of like the half implementation and maybe not even really              |
| 04:21      | a lot of the return on their investment of really useful shortcuts that people can use               |
| 04:26      | at the end. And then now this year, like just doing more find and filtering stuff and more           |
| 04:32      | advanced functions that [[Shortcuts]] can even handle memory wise and things like that, I                |
| 04:37      | think is a lot more improved. And then just that same thing of creating a [[Shortcuts]] experience       |
| 04:45      | that the user doesn't even have to set up. And it's really just Siri, like app shortcuts             |
| 04:50      | is their Siri strategy. And I think people don't necessarily understand that. I mean,                |
| 04:56      | who knows with AI this year too, like they're going to do a lot more there. But at least             |
| 05:00      | for developers, they need to adopt app shortcuts in order to provide Siri actions for their          |
| 05:06      | users. But that story isn't told clearly to developers and how they implement it, I think            |
| 05:12      | is just, I think they just kind of like implied some parts or like maybe if you didn't catch         |
| 05:18      | that one line, you wouldn't understand that like all the entities from an app can be provided        |
| 05:23      | and generate app shortcuts automatically. Or even just end user education, those app                 |
| 05:30      | shortcuts that are created for you, you can add those to your home screen right away and             |
| 05:34      | have these like advanced like you're somebody was asking me, just to message your partner,           |
| 05:40      | you can go into the messages app shortcuts and add it to your home screen right away,                |
| 05:44      | and it'll have their face on the home screen instead of you trying to take a picture and             |
| 05:49      | put it into the [[Shortcuts]] implement, add to home screen implementation. So like, they                |
| 05:54      | just need a lot more user and developer education on the API is and what you can do now because      |
| 06:01      | then once you build it all, like what we did with structured is you can now find and get             |
| 06:06      | all your tasks, edit them and do these all all advanced kind of things as essentially                |
| 06:12      | like workflow day users kind of the power user side. And then the regular people can                 |
| 06:17      | just kind of say like, open my tasks for today and it works. And they don't even have to             |
| 06:21      | have ever even opened [[Shortcuts]].                                                                       |
| 06:23      | Yeah, I feel like there is always been an advocacy problem with automation at [[Apple]],                 |
| 06:30      | like they've, they've had the tools for a long time. I mean, you know, [[AppleScript]]                  |
| 06:34      | was a very powerful automation tool. But you know, they've never really advocated hard               |
| 06:41      | on it and almost like developer support for that almost feel like that needs to be like              |
| 06:45      | a separate team that would go out to developers and say, Hey, let us help you put this in.           |
| 06:52      | I was just the other day looking at [[Sound Source]] from, you know, [[Rogue Amoeba]], and they have         |
| 06:59      | their shortcut support on Mac has given you an entire suite of audio controls on your                |
| 07:06      | Mac. I mean, everything you can think of that you want to do in [[Shortcuts]] automation, if             |
| 07:11      | you install [[Sound Source]] there, it's like 30 something actions. And they're like, how               |
| 07:16      | come other developers are not jumping on that? And is it, is it that they don't know it has          |
| 07:22      | [[Apple]] made it too difficult for them? Well, I would argue that [[Apple|Apple's]] made it a lot easier,         |
| 07:26      | but it's still something that requires work and updating like you got to keep up with                |
| 07:31      | it. But even thinking about this, what I was just talking about is they don't get the benefit        |
| 07:36      | of apps work. That's that whole side that is worth implementing for iOS and iPad or                  |
| 07:42      | iPhone iPad. There isn't a feature for that on the Mac. So they kind of only have like               |
| 07:49      | put in this work for power users, which is you think would be the bread and butter anyways.          |
| 07:53      | But yeah, I mean, just advocacy there and examples. And honestly, from [[Apple]], like they              |
| 07:59      | need Final Cut Pro to have actions so that developers can understand, Oh, I can do this.             |
| 08:05      | Yeah, but not just put out [[Shortcuts]] for Mac and say it's the feature of automation and              |
| 08:10      | then just wait for that feature to arrive. Like that's kind of where we're at now is                 |
| 08:16      | they need to make that feature the present. Are we at a position now where you expected              |
| 08:22      | or are we not as far along as you wanted to be? I mean, kind of what's your assessment               |
| 08:26      | of the overall app support from third party apps?                                                    |
| 08:31      | On iOS, it's definitely getting better. Like I notice every time I make it down to the               |
| 08:36      | app shortcut section, because I have so many folders, there's more and more every time               |
| 08:41      | I try it out, which is cool. I think making it, I mean, the action button was I think                |
| 08:48      | it was a good impetus for developers to at least try because then they could have one                |
| 08:55      | action available in that action button setup screen. And so I think the action button coming         |
| 09:01      | to more iPhones would really boost people forward. And just in terms of like, I should               |
| 09:08      | do this now. And then now that what's always hard with [[Apple]] and even having worked there            |
| 09:14      | for like a little bit, I can like understand now is like, they put out the feature so that           |
| 09:19      | they have a year of development onto it, and then it kind of gets pushed wider. And that's           |
| 09:24      | really when it's ready. So I think even like the action button didn't, it kept like timing           |
| 09:31      | out and stuff like that. So like I had a bunch of issues with my shortcuts, just even functioning    |
| 09:37      | properly when I was using it. So I think, I think they're kind of getting there. And                 |
| 09:43      | then as they give more and more incentive, I think that's why you can sort of see their              |
| 09:49      | development strategy is like, buy app shortcuts or app intents being the widgets API and the         |
| 09:56      | [[Shortcuts]] API and probably it's at least their series suggestions API is powers that too.            |
| 10:04      | So if they're doing anything with intelligence this year and AI, I think it's going to be            |
| 10:09      | powered by app intents. And I think that's going to be like, all right, literally, everybody         |
| 10:14      | has to use this API now. And so why not build [[Shortcuts]] on top of it too?                            |
| 10:19      | Yeah, why not?                                                                                       |
| 10:21      | I mean, it's kind of like that's like you are doing it. So now suddenly, Oh, plus you                |
| 10:27      | bonus get shortcuts, and then you get iPhone action button, you get it app shortcuts on              |
| 10:33      | the [[Apple Vision Pro]]. So like, it's a smart strategy in the long run. And then I think               |
| 10:38      | the developers have to catch up and the I think the users need to demand it as well.                 |
| 10:44      | I think that's something that like, people like us shout about it, but regular people                |
| 10:49      | also like can motivate their teams to do it by asking for it.                                        |
| 10:53      | Yeah. And I do think that, you know, there aren't enough people taking advantage of automation       |
| 10:58      | and asking for it, but the people who are doing it are vocal.                                        |
| 11:01      | Yeah, it's like a chicken and egg always.                                                            |
| 11:03      | Yeah, I agree. But at least it's there. Like, when you look at like, let's look at historical        |
| 11:08      | work, you had [[AppleScript]], which was probably the most powerful thing they ever did in terms        |
| 11:14      | of user automation and the lease adopted because it was quirky and you had to understand it.         |
| 11:20      | Like the problem with [[AppleScript]] is it was too simple for developers and too complex               |
| 11:25      | for normal users. And, and it just never got the widespread adoption, I think that they              |
| 11:30      | had hoped. And then, and then there was automator, right? [[Automator]] to me was the precursor of       |
| 11:36      | [[Shortcuts]], you know, Lego block-based automation, but it just never got the buy-in. And not          |
| 11:43      | only did I get the buy-in from app developers, I didn't get the buy-in at [[Apple]]. I have this         |
| 11:47      | picture of my mind of salsa going and like running around [[Apple]], trying to convince people           |
| 11:51      | to write plugins for, for auto.                                                                      |
| 11:53      | Yeah. I mean, that's what funny about all the like internal stuff is like, I could have              |
| 11:59      | done that job at [[Apple]] of the internal development stuff. But then I also, it's like, I wanted       |
| 12:05      | to do like three separate jobs and there's, you kind of need one person to do that whole             |
| 12:10      | thing. So that was, it's always just interesting. Like the gallery alone is like, that's kind        |
| 12:15      | of what I'm doing now in many ways is a gallery of shortcuts and they still have my shortcuts        |
| 12:22      | in the gallery that were from [[Workflow]]. So that whole thing still needs a lot of work                |
| 12:26      | as well.                                                                                             |
| 12:27      | But, you know, [[Shortcuts]] to kind of bring it forward is the best, is the best of this,               |
| 12:33      | right? It's accessible to normal people. It's not probably as powerful, but it is very addressable   |
| 12:40      | if you get the buy-in from the app developers, you know, like the examples using with sound          |
| 12:45      | source or you can, you know, pick any shortcut, like [[Drafts]] is another one. There's plenty           |
| 12:50      | of apps that have gone like way in with [[Shortcuts]], [[BetterTouchTool]] is, another one I always like     |
| 12:56      | to talk about because they're so deep with their shortcut support. And when you get that,            |
| 13:01      | it just gives you more, you know, go back to the Lego analogy, it gives you more blocks,             |
| 13:06      | it gives you more ways to tie things together without having to resort to writing command            |
| 13:12      | line scripts or [[AppleScript]] scripts or other, you know, goofy things that you need to do.           |
| 13:18      | I will say, I love that side of the Mac that that's one thing that like, it seems like               |
| 13:24      | Mac users sort of are like, Oh, I don't want to resort to that. And as someone who came              |
| 13:29      | from iPadOS, I'm like, I can press keyboard shortcuts with [[Shortcuts]], like I'll build                |
| 13:33      | a ton of those. And then now I can open an app, press five keyboard shortcuts using an               |
| 13:39      | [[AppleScript]]. And then also like, remotely trigger that shortcut from my iPad using run              |
| 13:45      | script over [[SSH]]. So like the whole deep side of [[Shortcuts]] for Mac, I'm still barely tapping          |
| 13:51      | into because I like almost don't know what I don't know. And about like the command line             |
| 13:57      | and stuff like that, I have no idea how to take advantage of that. And so if anyone wants            |
| 14:02      | to like, let's do it just because there is so much more like opportunity to tie in with              |
| 14:07      | [[Shortcuts]]. And for me, it's the same thing that what the [[Workflow]] team was, they took                |
| 14:13      | abstract notions that were available, and then made rather they made actions out of                  |
| 14:19      | them, I'm making a full shortcut, but it's still like, I didn't know I could even do                 |
| 14:23      | that on the Mac. Now, that script is just a single shortcut. And now like 100,000 people             |
| 14:28      | can use the shortcut instead of you need to know the command line utility for it. So                 |
| 14:34      | exactly that whole like the potential and the depth of [[Shortcuts]] for Mac is still barely             |
| 14:39      | tapped into and there's still so much there. I think on iOS and iPadOS, like people are              |
| 14:45      | ready for it. And I think they just don't know what they don't know in the same way.                 |
| 14:50      | And then there's, we come out and we're like, here's 50 ways to run one shortcut, 300 actions        |
| 14:56      | and like thousands of examples, like we have like too much there and it is like, we need             |
| 15:02      | a AI action to synthesise it all for us.                                                             |
| 15:05      | Well, we're going to talk about AI in a minute, but I do think for a lot of users, so I kind         |
| 15:13      | of like to lean into starting out smaller, you know, making simple shortcuts. And I think            |
| 15:18      | when people can build their own, it's very empowering, even if it is something that just             |
| 15:23      | sends a text to your kids or whatever, you know, anything to get people know, like remember          |
| 15:30      | when everybody went nuts to customise their app icons and suddenly everybody discovered              |
| 15:35      | [[Shortcuts]].                                                                                           |
| 15:36      | Yeah, I think that's the pop culture side of it. And having it just like enter the collective        |
| 15:43      | consciousness is I think a major thing that [[Shortcuts]] needs. And I mean, I just love,                |
| 15:49      | I don't know if you follow Stephen Robles's videos, but he's doing an excellent job of               |
| 15:54      | just being like, here's some shortcuts, check it out. Do you want more? Check comments and           |
| 15:58      | I'll respond to it. And like, people are there for that and they just don't know that it's           |
| 16:03      | available. So I think, I think though, like something like threads getting shortcut support          |
| 16:10      | like these apps having prop the major mainstream ones YouTube getting better [[Shortcuts]] support       |
| 16:16      | like those kind of things I think would help people understand the value of it and get               |
| 16:21      | further than I've made shortcuts that do that for them. But then it's like, I need to like           |
| 16:27      | hand it to YouTube and be like, go turn this into app shortcuts, because if you can just             |
| 16:32      | automatically jump in your watch later list, that stuff is going to be like, oh yeah, why            |
| 16:36      | not do that all the time? But instead it's like they have to know about people like us               |
| 16:41      | in order to figure it out. So yeah, and the problem is those big platforms, there's politics         |
| 16:47      | involved and all kinds of weird stuff. Yeah. I mean, are they also just the same thing?              |
| 16:53      | They don't know it. They think it's going to be a lot of work and it isn't necessarily               |
| 16:57      | sometimes. I think knowing what to do is where a lot of developers struggle rather than the          |
| 17:04      | actual work it takes to implement it. It's just like, what should I make? What are like              |
| 17:09      | common ways people do this? And then it's just like for your particular category, it's               |
| 17:14      | always going to be different than someone else. So like honestly, that's why I'm trying              |
| 17:18      | to just help you because like you and I just kind of know inherently, but that's just from           |
| 17:25      | 10 years of workflows and shortcuts that like anyone who's a developer coming into it and            |
| 17:31      | just like opening up the documentation pages is going to be like what there's like five              |
| 17:35      | different versions of the [[Shortcuts]] API. It's like, what even is this? And it's like the             |
| 17:40      | last one is the most important.                                                                      |
| 17:43      | This episode of Automators is brought to you by LinkedIn Jobs. When you're hiring for your           |
| 17:49      | small business, you want to find quality professionals that are right for the role.                  |
| 17:52      | That's why you have to check out LinkedIn Jobs. LinkedIn Jobs has the tools to help you find         |
| 17:56      | the right professionals for your team faster and for free. Whenever I've been looking                |
| 18:01      | for a job or been looking at somebody who's being hired for a role or potentially being              |
| 18:05      | hired for a role, it's really nice to be able to just go and look at their profile and see           |
| 18:09      | the things that they've marked down as important. But also it's nice to be able to use a little      |
| 18:14      | bit of automation to have system help you find the people that are right for you. LinkedIn           |
| 18:20      | isn't just a job board. It helps you hire professionals that you can't find anywhere                 |
| 18:23      | else, even those who aren't actively searching for a new job, but might be open to the perfect       |
| 18:28      | role.                                                                                                |
| 18:29      | In a given month, over 70% of LinkedIn users don't visit other leading job sites. So if              |
| 18:34      | you're not looking on LinkedIn, you're looking in the wrong place. On LinkedIn, 86% of small         |
| 18:39      | businesses get a qualified candidate within 24 hours. Hiring professionals like a professional       |
| 18:44      | on LinkedIn.                                                                                         |
| 18:46      | LinkedIn also knows that small businesses are wearing so many hats and might not have                |
| 18:49      | the time or resources to hire. That's why they're constantly finding ways to make the                |
| 18:53      | process easier. They even just launched a feature that helps you write job descriptions              |
| 18:57      | making the process even easier and quicker. It's easy to see why 2.5 million small businesses        |
| 19:02      | use LinkedIn for hiring. Post your job for free at linkedin.com/automators. That's             |
| 19:08      | linkedin.com/automators to post your job for free terms and conditions apply.                  |
| 19:16      | You mentioned earlier that you have an action button shortcut. We just got done talking              |
| 19:21      | about ours on the show. Tell us about your action button. What are you doing with it?                |
| 19:27      | That was a perfect episode because Rosemary is essentially doing what I'm doing, but                 |
| 19:32      | I found a solution that can help her. She talked about a whole setup where she has separate          |
| 19:41      | folders of shortcuts and then she has one action button shortcut that just gets those                |
| 19:46      | folders and adds them to a variable and presents it as a big list. She essentially said, I           |
| 19:53      | have way too many shortcuts in that list now. This is high-end shortcuts. If you were in             |
| 20:01      | the thousands of shortcuts, this is a strategy that makes sense. Otherwise, just like, yes,          |
| 20:07      | this is absurd and I can acknowledge that. I have a folder at the top of my shortcuts                |
| 20:12      | full of other shortcuts that run my folders of shortcuts. I can't even describe it sometimes.        |
| 20:21      | Yeah, it's like you're diving into the matrix. I have 10 folders of video shortcuts because          |
| 20:29      | I have different, like the beginning of the process versus the end of the process has                |
| 20:32      | separate steps. I make one shortcut called video shortcuts and then I run that and then              |
| 20:39      | that presents the list of folders and picks the shoulder. Then I can get the shortcuts               |
| 20:45      | from that and run it. Essentially, just to back up all the way is my action button runs              |
| 20:51      | every single one of my shortcuts, depending on. I did set it up to inject the different              |
| 20:59      | contexts like you do with focus modes. If it's video mode, the shortcut looks for the folder         |
| 21:07      | called video shortcuts. I filter the file and append that text. Then I also have rose                |
| 21:14      | did to a default set that's always available. Then I also just added in my music and social          |
| 21:21      | media ones because I always want, even if I'm in work mode, I usually want to just turn              |
| 21:26      | on a song or something like that. My action button does everything. The one that's really            |
| 21:33      | useful to me though and is still just a power user thing is that the very first shortcut             |
| 21:39      | in it just opens a folder from my [[Shortcuts]] app. It just presents the list and then I                |
| 21:44      | can jump in quickly because I have like 400 folders. David, it's absurd.                             |
| 21:49      | It's quite a nest of shortcuts. They got to have groups. This is the thing that I'm so               |
| 21:55      | scared that they didn't. I didn't necessarily give them direct feedback about this, but              |
| 22:01      | they need subgroups for folders because if it was, I really have like 10 groups of shortcuts         |
| 22:08      | with multiple folders within them. It doesn't have to be this huge long list that is unruly.         |
| 22:15      | It could easily be in a subgroup and then it would just be a lot easier to manage and                |
| 22:20      | also sort because it keeps. I haven't had it in like nine months, but I just updated                 |
| 22:27      | an old iPad and all of my folders went out of order again and I was like, no.                        |
| 22:32      | I hate that that just kind of comes with the territory of being a [[Shortcuts]] power user.              |
| 22:38      | These points of friction where organisation you can't count on.                                      |
| 22:45      | There really are fairly simple fixes. Simple is easy for me to say and hard to implement,            |
| 22:52      | but there's solutions that they need to take seriously because what I think probably you             |
| 22:59      | and Rose and I have run into is just like, what does it look like to use shortcuts at                |
| 23:04      | scale? Do they know? Obviously, it wasn't really ever designed for 5,000 shortcuts,                  |
| 23:11      | but what does it look like when someone's a successful [[Shortcuts]] user? Do they get bogged            |
| 23:16      | down in just managing their lists and then understanding the titles or their memory can't            |
| 23:24      | handle searching through the lit? I couldn't use the single widget just because it couldn't          |
| 23:28      | present my list of shortcuts for a long time. Really understanding the power user experience         |
| 23:35      | and what does it mean to successfully adopt this tool beyond just running one or two                 |
| 23:41      | shortcuts a day, but this is an operating system for [[Apple]] devices and software and                  |
| 23:50      | they need to give us the tooling that other software ecosystems have.                                |
| 23:56      | Another thing too with all the examples and stuff is an app store would do very well.                |
| 24:03      | Obviously, I'm selfishly would want it, but it is just being able to give stuff away for             |
| 24:09      | free too that's fun. I had released a bunch of [[YouTube]] shortcuts as a carrot to get them             |
| 24:15      | to add their app shortcut support. That's the thing we see all the time with indie developers        |
| 24:20      | solving that hole and motivating teams to do more. We should have that power, not power,             |
| 24:26      | but just capability with this tool to show people what they really want to use.                      |
| 24:33      | I never really thought about that, but a shortcut's app store would also allow you to shine          |
| 24:41      | a spotlight on developers that provide a lot of shortcut support because their apps would            |
| 24:46      | be part of that. Here's a really cool thing that does this thing, but in order to work,              |
| 24:51      | you've got to buy this app. That's another way for app developers to get exposure into               |
| 24:57      | the store and hopefully sales. That would make sense.                                                |
| 25:02      | Can we start one in the EU?                                                                          |
| 25:04      | Yeah. I mean, none of this stuff is easy. The other question is, I don't know legitimately           |
| 25:14      | how much support there is for automation at [[Apple]] when the rubber meets the road. I know             |
| 25:20      | that they must be interested in it or they wouldn't have [[Shortcuts]], but how many people              |
| 25:26      | do they actually have working on it? How much developer support are they willing to do?              |
| 25:30      | How much money are they going to spend? Or how much of their valuable public time are                |
| 25:36      | they going to spend on [[Shortcuts]] when they've got all these other things they're trying              |
| 25:40      | to do and sell?                                                                                      |
| 25:41      | Yeah. That's something that I haven't thought about enough sometimes in the past about how           |
| 25:49      | do they make money from this kind of thing? It seems like an original sin to say that                |
| 25:55      | about [[Apple]] software because that's not typically how they make stuff, but just investing into       |
| 26:01      | that ecosystem. I think that's why I think if it is part of their AI strategy, I'm going             |
| 26:08      | to be more bullish than ever on it. I'm curious where that split is. Also, the [[Shortcuts]] app         |
| 26:17      | versus the app intense ecosystem and Siri are all amorphous and overlapping. There's                 |
| 26:26      | a complicated Venn diagram there. I think that does often explain why the [[Shortcuts]]                  |
| 26:32      | app on one particular platform with one action that for an older device, there's a bug there         |
| 26:39      | and it doesn't work. It just isn't their highest priority. I think something that is well worth      |
| 26:47      | saying on a show like this is file your feedback. I know that's almost like you might roll your      |
| 26:53      | eyes, but on the long scale, if you have ever heard me on this show and you filed feedback,          |
| 26:58      | it probably would be fixed by now. It takes a long time, but they do listen to that kind             |
| 27:05      | of stuff. Also, we can all use our community effort to file your feedback and send it to             |
| 27:13      | me and I'll tell them to fix this also. There is just esoteric issues that we all know and           |
| 27:19      | live with every day and then they don't really run into. Putting it into their to-do list            |
| 27:25      | and in their faces is definitely worth doing. Man, there's so many bugs still that if I              |
| 27:33      | had filed it, it would be fixed by now and I'm still dealing with it. That's not my fault,           |
| 27:40      | but also I'm like, damn, I really should have done that.                                             |
| 27:45      | Another piece of this that really, in my opinion, is true is the people that are working on          |
| 27:51      | [[Shortcuts]] at [[Apple]] are really into it and they want it to succeed just as much as we                 |
| 27:56      | do. That's not always the case. I don't feel like there is as strong a team advocating               |
| 28:02      | for their product as much for all the products at [[Apple]] as there are for [[Shortcuts]].                  |
| 28:07      | I think it's well-liked, I'm pretty sure, within the company. I think [[Apple]] employees                |
| 28:15      | use [[Shortcuts]] a lot too. I think it's the same thing. They do one big release a year                 |
| 28:21      | and they're a massive corporation and they all have their own priorities too. It's not               |
| 28:28      | an indie team where they can just focus on this. They have to get buy-in and then that's             |
| 28:35      | where the investment in it and seeing the return on that investment from developers                  |
| 28:42      | and from the end users and things like that is something that maybe they didn't necessarily          |
| 28:47      | see all the time, but it's always a long game too. It's not like a plus or minus and did             |
| 28:54      | this work and then no. I don't think [[Shortcuts]] is in danger. I think as a user having a great        |
| 29:02      | [[Shortcuts]] experience as a heavy power user is still always as fraught as it always has               |
| 29:09      | been and we should be pointing them towards where we want it to go because app shortcuts             |
| 29:16      | and stuff in AI, they can figure out on their own, but what the [[Shortcuts]] app and the user           |
| 29:22      | experience should be, we all know better than them. It's just quite literally always been            |
| 29:30      | the case for me personally. I worked at workflow, sat next to them and used the app twice as         |
| 29:37      | much as they because they're building it on the Mac. It is like we all have a lot more               |
| 29:42      | [[Shortcuts]] experience than the [[Shortcuts]] team, which is crazy to say, but that's kind of              |
| 29:47      | just how it goes when you're a developer also. That's why I truly trying to synthesise what          |
| 29:53      | do you actually want or what's wrong versus what could it be versus what can one small               |
| 30:00      | team at [[Apple]] do within the next 12 months can all be are all slightly different. We                 |
| 30:07      | should talk about it more and say it because if it goes on said, I don't know, [[Apple]] employees       |
| 30:13      | are also experiencing the way the rest of us are in the last four years. Having someone              |
| 30:19      | that's just like, hey, you guys should do this and it's a good idea and they can do                  |
| 30:23      | it feasibly. They're going to be like, sure, great. Thank you. Why not? If there's problems          |
| 30:29      | with it, they won't do that part, but it's not like this whole, I can't speak for them               |
| 30:36      | internally because I also haven't worked there in years and years just to be clear, but we           |
| 30:42      | can guide it as much as they're building this thing that they already just landed in their           |
| 30:47      | lap from the workflow team. So there is like a symbiotic relationship with the community             |
| 30:54      | and what [[Apple|Apple's]] doing there.                                                                        |
| 30:56      | All right. I want to shift gears because you talked about focus so high level. I love                |
| 31:02      | it though. Yeah, that's okay. We talked about focus modes and I am a constant advocate for           |
| 31:09      | focus modes. I don't think enough people use them. If you're interested in automation,               |
| 31:14      | it's an excellent trigger. As you were saying earlier, you are using it as kind of a conditional     |
| 31:19      | trigger with your action button, but what are the ways you're using focus modes?                     |
| 31:26      | To me, focus modes is like the core of how my operating system works, especially on iPad.            |
| 31:33      | I think I want to see basically what we have on iPad come to Mac and then I think it would           |
| 31:39      | create the same experience and I've been testing kind of a pseudo version by just having tons        |
| 31:45      | and tons of spaces, but at least on iPad. I think iPhone 2, just to like back up a little            |
| 31:52      | bit, I think focus modes are the only way you can really take advantage of all that's                |
| 31:58      | available on your phone without getting overwhelmed because it's true that even for me like ten      |
| 32:05      | years ago, I had 400 apps and maybe used 10 of them on a daily basis and now I have even             |
| 32:13      | more. I have 10, 20 shortcuts for every one of those apps and it's the most common thing             |
| 32:20      | that probably every person who comes across me talking about having thousands of them                |
| 32:24      | is how do you even use this all? It's only because of focus modes. I previously had 16               |
| 32:31      | full home screens of iPad widgets and just iPad apps and then I even put most of my shortcuts        |
| 32:39      | onto those home screens using ad home screen at one point. Oh my God, that was dumb and              |
| 32:46      | just like a waste of time because it didn't really live long. I mean, it just wasn't really          |
| 32:51      | worth the effort, especially then we got widgets and it's like I can just drop a widget and          |
| 32:56      | put all of them on there. Now though, because you can do a folder, I have to do widget stacks        |
| 33:02      | and so I have stacks and stacks on every page filled with 10 instances of the [[Shortcuts]]              |
| 33:09      | widget. But basically, part of what I do as a multi channel content creator is it's videos,          |
| 33:18      | blogging, podcasts, newsletter, streaming, all of those are wildly different contexts                |
| 33:25      | and they all use different apps, different workflows, and I have different shortcuts                 |
| 33:30      | for all of them. And so I basically created dedicated screens for each one of those that             |
| 33:35      | are powered by those focus modes because I don't want to see my video stuff while I'm                |
| 33:42      | making a podcast. And so that part where you can show and hide home screens is to me the             |
| 33:47      | only way this all works because I'm in my podcasting mode right now and I see two screens            |
| 33:53      | at once. And so I only see the contextually computing relevant information so I just had             |
| 33:59      | to throw the David line there of the exact stuff that I need when I need it and then                 |
| 34:04      | it's gone when I don't. And so like when I start my day, I'm in personal mode and it                 |
| 34:09      | has my lifestyle screen, my health screen, my social media one, my like personal media,              |
| 34:18      | just like music and podcasts, entertainment and then gaming, I have separate screens                 |
| 34:22      | for all those. And then the second 9 AM hits, it switches to all my work screens. But then            |
| 34:27      | it's like when I'm blogging, it also hides my podcasting screen and shows my music screen            |
| 34:33      | because I can listen to music while I do that. And so like my devices totally change                 |
| 34:38      | depending on what I'm doing. And I have all my shortcuts just available sitting right                |
| 34:42      | there for me.                                                                                        |
| 34:43      | Yeah, I just feel like focus modes are so and they're not that hard to implement. You                |
| 34:48      | know, I was just telling you before we recorded, I had a friend write me who's buying a new          |
| 34:54      | phone, he's getting one of these dumb phones, you know, how they make the phones that don't          |
| 34:57      | do anything and and giving up his iPhone. And I said, Have you ever tried focus modes?               |
| 35:03      | And he says that seems too complicated. I'm like, you're buying a different phone and                |
| 35:08      | you haven't even tried it.                                                                           |
| 35:09      | I think the setup process, I noticed this by it because it asks you to pick the apps                 |
| 35:15      | and the people. I don't know what I'm doing then. And so it's asking me too soon in the              |
| 35:21      | process. And it's kind of just like, that's inevitable because you're never going to come            |
| 35:27      | back to it otherwise. But really just separating the home screen thing from focus modes, I           |
| 35:33      | can understand why they didn't because it really ties into that feature so well. But                 |
| 35:38      | I think it it's just like a secondary thing. So they're trying to understand focus modes,            |
| 35:44      | but then it's also like, oh, it can hide and show my screens. And the way they kind of               |
| 35:49      | hint at it is just hiding screens, not showing ones that are relevant and like having extras.        |
| 35:55      | So like, I think that's where it's kind of a disconnect for people.                                  |
| 36:00      | In essence, showing by omission, that makes any sense.                                               |
| 36:02      | Yeah, exactly. And just like, they only think you're supposed to have one or two. And then           |
| 36:08      | it's, which still makes sense, but it's kind of like, you don't get as much benefit or               |
| 36:13      | like people don't have. I think the thing that for me is it's like, I don't do work stuff            |
| 36:18      | on my phone. And then sometimes it's like, they don't even use the iPad. So like, it's               |
| 36:23      | just like, they don't have that context. Whereas, I think if they had it on Mac, and it could        |
| 36:29      | show desktops and even like, different docs or something or menu bar apps, then you could            |
| 36:35      | have like a setup that really changes depending on what you're doing. But then otherwise,            |
| 36:41      | you can just kind of have the defaults. And it's just like, even in, I have like the great           |
| 36:48      | example, but then my implementation is too complicated for people, I think to grasp.                 |
| 36:52      | And so kind of having that half half version, that's the realistic version for people is             |
| 36:59      | like, I got to make that kind of video where it's like, here's the deep end and why this             |
| 37:02      | all makes sense. But then here's how you can do it and not spend two weeks setting up iPad           |
| 37:08      | widgets. Agreed. I mean, because you do get the customisation                                        |
| 37:14      | on the mobile devices, you don't get on the Mac, but you still get a lot of benefits from            |
| 37:18      | focus modes on the Mac. And I trigger them all the time. I'm in a focus mode as we're                |
| 37:23      | recording this for the same reason. And I kind of cheat in a way where I do a setup                  |
| 37:28      | at the same time where I can say on the Mac set up my screen for podcasting and open the             |
| 37:34      | multiple apps and arrange the windows and set the focus mode and, you know, and you                  |
| 37:39      | go through and you kind of like use [[Sound Source]] to set the audio for the microphone                 |
| 37:43      | and things like that. So you can do that, but it takes an extra effort that you don't                |
| 37:48      | need on the mobile devices. Yeah, I think that's kind of why is this                                 |
| 37:53      | like, that's kind of my same implementation. But so the killer thing would also be a shortcut        |
| 37:59      | is widgets per space, because then you could really have like your exact home screen across          |
| 38:04      | all of that stuff. And it's, it's so close there. The one thing going back to our like               |
| 38:11      | ideas from before is if you had stacks inside the [[Shortcuts]] app, you could add an entire             |
| 38:19      | stack of widgets to your home screen at once instead of doing one by one. And like that's            |
| 38:24      | a major feature that I would use and would save me so much time and would just be built              |
| 38:29      | into the tool itself already. And it's just like, I'm like, ah, I see the future. But                |
| 38:34      | that's like, it's the same thing. If I worked there, I would be sitting next to them being           |
| 38:38      | like, build it, build it, build it. And instead I'm here in my room, being like, build it            |
| 38:43      | and not, I got to file that feedback. So yeah, that's it. Right after [[WWDC]], I might                  |
| 38:48      | re-listen to this episode and sit there and just type out a bunch of feedback.                       |
| 38:52      | Well, and it is a slow boil. Every year we get some new features, we get some new actions,           |
| 38:58      | we get some new triggers, and it is a lot better now than it was before. I mean, I think probably    |
| 39:03      | the most improved is Mac [[Shortcuts]]. I mean, when Mac [[Shortcuts]] first released, it was                |
| 39:08      | rough. I mean, I recorded that field guide on the [[Shortcuts]] for Mac and I had to reshoot             |
| 39:15      | some of those videos four and five times because bugs would show up and then they'd disappear        |
| 39:20      | and then they'd come back and the behaviour would change and just took a long time to                 |
| 39:24      | kind of get that sorted. But I feel like things are pretty stable now and...                         |
| 39:29      | Yeah. I'm glad we recorded this in May and not six months earlier because I think it's               |
| 39:33      | the same thing of we always kind of forget how it was really rough this fall. And again,             |
| 39:39      | just like basic stuff kind of performing poorly, I think that's [[WWDC]] in the summer.                  |
| 39:46      | I'm also going to try to file as much performance related feedback as possible because I just        |
| 39:54      | want [[Shortcuts]] to work when it comes out. The action button is the same thing of because             |
| 39:59      | my stuff... I heard you and Rose talking about how people didn't really get into it. And             |
| 40:03      | I think that's because it didn't work and because the users like you and I who were                  |
| 40:07      | most excited about it couldn't make shortcuts that ran with it. And so I literally was waiting       |
| 40:14      | for a video and it's like three months later, I get it. But we need shortcuts features for           |
| 40:20      | these new hardware features and software features like notes, tagging or reminders type stuff.       |
| 40:26      | I don't even remember which ones don't have it now, but it's like maybe it's the columns.            |
| 40:31      | That stuff needs to be there on day one so we can go to town with it the entire summer               |
| 40:35      | and then once it releases, we can all be like, here's a thousand examples for it or more             |
| 40:40      | like we made a thousand. Here's the one that's useful for people to understand it. But it's          |
| 40:46      | like that stuff is pretty brutal and happens pretty consistently. I'm waiting to do it               |
| 40:52      | and then by the time we get it, it's like the add to home screen thing, like the momentum            |
| 40:56      | is gone already.                                                                                     |
| 40:57      | Well, I also think that if it's unstable and people who never heard of Matt Cassinelli               |
| 41:03      | or David Sparks just say, well, this looks interesting. They try and it doesn't work                 |
| 41:08      | on day one. Well, they're gone. They're not coming back.                                             |
| 41:12      | Yeah. I think the same thing with the app developer stuff has to be ready. At least the iPhone       |
| 41:20      | stuff was on the pro and so I do think there is the action button in particular has a chance         |
| 41:25      | for revival now that they did have a year to fix all the issues. Like I said, it comes               |
| 41:30      | out a year later is when it actually is the full implementation of it. For power users               |
| 41:36      | who are excited about it, we have the enthusiasm and [[Apple]] doesn't let us take that and run          |
| 41:42      | with it and that can be pretty frustrating. That's why honestly, I love talking to you               |
| 41:49      | and Rose and just the community. I think we all should, we got to find a way to get excited          |
| 41:55      | about this beyond when [[Apple]] is just releasing that stuff because it's all that potential            |
| 41:59      | is still there at all times and it's really like making it available and just kind of                |
| 42:04      | having fun with people too.                                                                          |
| 42:09      | This episode of Automators is brought to you by Computex 2024. It's worth the world's                |
| 42:13      | largest AIoT. That's artificial intelligence of things and startup shows and it's happening          |
| 42:18      | in Taipei from June 4th to June 7th. Whether you're a seasoned industry professional or              |
| 42:23      | a passionate entrepreneur, Computex has something for everyone. I am fortunate enough to be          |
| 42:28      | attending Computex this year and as well as, you know, meeting up with any nerds who happen          |
| 42:34      | to be there, I plan on using this as an opportunity to meet some people who can actually help        |
| 42:40      | me understand how to integrate AI and this sort of connectivity with all of the things               |
| 42:46      | that I actually do at work.                                                                          |
| 42:49      | At Computex 2024, you can discover cutting-edge technology from AI computing, advanced connectivity  |
| 42:54      | and future mobility, explore the latest trends and innovations shaping the future of tech            |
| 42:59      | and network with industry leaders at Inovex. Don't miss the chance to skyrocket your startup         |
| 43:04      | with Inovex, Computex's international startup hub. Inovex facilitates connections with               |
| 43:10      | manufacturing partners and global sales channels through competitions and presentations, ensuring    |
| 43:16      | heightened visibility and investor support. Plus, gain insights from thought leaders.                |
| 43:21      | Attend keynotes from the likes of AMD, Intel, Qualcomm, MediaTek, Supermicro, NXP and Delta          |
| 43:28      | as well as workshops led by industry experts gaining valuable knowledge and insights. If             |
| 43:33      | you're ready to level up and expand your network, head over to HTTPS colon forward slash forward     |
| 43:39      | slash www.computextypeay.com.tw/automators to register now and secure your spot at Computex    |
| 43:48      | 2024 from June 4th to 7th or just click the link in the show notes. Don't miss out. This             |
| 43:54      | is an incredible opportunity to be at the forefront of one of the world's largest AIoT and startup   |
| 43:59      | shows. Our thanks to Computex for sponsoring this show and all of Relay FM.                          |
| 44:04      | All right. You have some other [[Shortcuts]], adventures I thought we would talk about.                  |
| 44:13      | One of the items that I know you're working with these days is [[Stream Deck]]. I can't let              |
| 44:17      | a show go by that we don't mention [[Stream Deck]]. So what do you do with [[Stream Deck]]?                  |
| 44:23      | Yeah. I mean, it's been awesome. I feel like I should do a disclosure now that I became              |
| 44:29      | an Elgato partner this year and it's partially just because I've been shouting at them for           |
| 44:34      | years being like, I love the [[Stream Deck]]. Please use it. And then now I can actually                 |
| 44:38      | give them direct feedback on it. So like that is pretty awesome. And I did just get like             |
| 44:43      | Extreme Deck XL just because I can.                                                                  |
| 44:46      | I would say I am an Elgato. What is it? What's the term?                                             |
| 44:50      | Partner.                                                                                             |
| 44:51      | I'm a partner by sake of how much money I've spent with them.                                        |
| 44:54      | Yeah, basically. I mean, I'll put a good word in if you are interested. But no, it's,                |
| 45:01      | I mean, it's, I've always just like, they're, they make good hardware and it, it is just             |
| 45:06      | like solid stuff. So like, just that they're still around for versus when I first heard              |
| 45:11      | about them. And I still think the potential is for Mac users is still so untapped. And               |
| 45:17      | in many ways, I think because it's called the [[Stream Deck]] and people think you have                  |
| 45:21      | to be a streamer. So like, I actually, I'm going to do a stream. They just released a                |
| 45:25      | line of Neo products that are like low cost. And that one that's for the [[Stream Deck]] has             |
| 45:32      | like extra controls while being only eight keys. I kind of think this is like the Stream             |
| 45:38      | Deck for every Mac user versus if you need more specialised stuff, the other one is,                 |
| 45:43      | is like still totally worth getting. But even like to me, the [[Shortcuts]] widget has eight             |
| 45:49      | slots that Neo has eight slots, like, oh man, that's too perfect. But the cool feature about         |
| 45:56      | the [[Stream Deck]] software is it can show you a profile depending on which app is activated.           |
| 46:02      | And so first of all, this is what I want on iPad or iPhone somehow is just like show me              |
| 46:08      | shortcuts for the app that I'm using right now. And without, I mean, you can do that                 |
| 46:13      | with an automation, but I don't want the notifications every single, like I don't know, like that    |
| 46:18      | could be how the action button works is like, what app is open, show me those shortcuts.             |
| 46:24      | But so for the [[Stream Deck]], when I open an app and then click on it, and it becomes comes            |
| 46:29      | into focus, my [[Stream Deck]] changes to show me the shortcuts for that app, just in an                 |
| 46:34      | array of icons there. So I have physical buttons for 5000 shortcuts, because I have all of           |
| 46:41      | them on there. I spent two weeks doing it.                                                           |
| 46:45      | And on the Mac, you can do not only shortcuts, you can have features or if there's a keyboard        |
| 46:51      | combination, you always get you can just add a button for it. Or like I do the same thing.           |
| 46:56      | So the features, they're called profiles, and you can have a profile automatically activate          |
| 47:02      | when an app opens. So I've got that for like [[Apple Mail]], [[OmniFocus]], just some of the apps            |
| 47:07      | that I'm constantly in. And I just look down at one of my mini Stream Ticks, because sadly           |
| 47:13      | I have many. And the one is the contextual one that always changes based on what app                 |
| 47:19      | I'm in. Like I'm recording a podcast right now. It's knows that I'm in this app. So it's             |
| 47:25      | giving me a bunch of buttons to do things I can do every quarter show.                               |
| 47:29      | Do you use the middle, like the main size for that one?                                              |
| 47:33      | Matthew, do you really want to know this? Because this is David, you're in the safe                  |
| 47:37      | place. This is this is where we got to go to town.                                                   |
| 47:40      | Okay, so I have two xls and they're on a stand. And the top one is static. All the buttons           |
| 47:49      | on it are always the same. And they have things like lighting features and lock the doors            |
| 47:54      | and the zoom controls and, and different things. And the one below it is the dynamic one that        |
| 47:59      | changes based on what app I'm in, but I also have ways to change it like based on context.           |
| 48:05      | So if I'm doing MacSparky lab stuff, I push a button and everything I need to do MacSparky         |
| 48:10      | labs is there, but it's not just shortcuts. Like for example, I often send, I have an                |
| 48:15      | editor and I've got his picture on that contextual [[Stream Deck]].                                      |
| 48:20      | If I'm in labs and I have a little shortcut, well, it's not shortcut, a script I wrote               |
| 48:24      | in [[Keyboard Maestro]] that takes the selected file and sticks it in a [[Dropbox]] folder that              |
| 48:29      | I share with him.                                                                                    |
| 48:30      | And so I just push his face if I've got something and it sends it to him and I don't have to         |
| 48:35      | think about it. So yeah, I, and those are two of the [[Stream Deck\|Stream Decks]]. In addition, when                 |
| 48:41      | they came out with the, was it the plus one with the dials?                                          |
| 48:44      | I'm getting that one now because I felt like, ah, I just have to try it. And I run media             |
| 48:49      | controls and my key lights and all the video stuff I do is run off that one. And I just              |
| 48:54      | bought the Neo and I have no good reason for it except that like, well, I've got everyone.           |
| 49:00      | So I feel like I need to be a completionist and I have it here. And what I'm putting on              |
| 49:05      | that one, right? Yeah. The new Neo, it's the new Neo one that we were just talking about             |
| 49:10      | the white one.                                                                                       |
| 49:11      | Oh no, but the, like the, even the six key one too.                                                  |
| 49:12      | I don't have the six key one. No, I don't.                                                           |
| 49:14      | Yeah. Maybe I'll get with you.                                                                       |
| 49:15      | But actually this, this Neo is way better because you've got the way to click between                |
| 49:21      | different screens of [[Stream Deck]] buttons with separate, like little capacitive buttons.              |
| 49:27      | So you don't, you know, with the six button one, Rose and I talked about this on the show,           |
| 49:31      | you use two of the buttons just to cycle between other windows, right? Or other setups. You          |
| 49:36      | don't need that anymore with this.                                                                   |
| 49:39      | What I'm setting up with the Neo with is I'm putting all my screen setups, like podcasting,          |
| 49:45      | writing, researching, journaling, whatever. And I push the button and the Mac goes, bleep,           |
| 49:50      | bleep, bleep. And then I've got everything I need to get, get to work. It's a contextual             |
| 49:54      | shifting machine for me, which is silly. I could have put all that under a keyboard                  |
| 49:58      | shortcut. I have done that for years, but you know, I kind of like this little Neo and               |
| 50:03      | it's got the time on it. That's kind of nice. I can catch myself checking the time on it.            |
| 50:08      | That one is really like just the, the best of all the other ones in a more compact size.             |
| 50:13      | It's cheaper. And then it has those extra controls. So it's, I'm like, I hate now that               |
| 50:19      | I like am a partner that I feel like I have to qualify it, but like it is legit. And I               |
| 50:23      | think like that it solves a lot of the problems that you can kind of get around the other            |
| 50:27      | ones or like it almost the other, like the mini almost implies that you have another one             |
| 50:33      | that you can control the mini with or something. Yeah. But also I love the contextual, I would,      |
| 50:40      | I basically just haven't gone full to the [[Stream Deck]] XL because I also have the other               |
| 50:44      | one. And I don't know, I think it, at least for me, I'm trying to share my profiles.                 |
| 50:51      | And so I figured if you're going to have one, you might just have the main one, not the              |
| 50:55      | XL. I use the XL for just apps right now. And then my stream and zoom controls and those             |
| 51:06      | things. So like the same thing. And then the other one is all shortcuts. And I just have             |
| 51:11      | 10 folders in I have pages within each profile to let me rotate through and see it. It's,            |
| 51:19      | it's fascinating putting my shortcuts onto the [[Stream Deck]] because it the space in which             |
| 51:24      | I place them, because I don't use up all the spaces, the way I arrange them kind of changes          |
| 51:30      | my relationship to like the folder because like to like go back another level of a major             |
| 51:36      | thing I did this year was like buying in fully to [[Shortcuts]] where I have a shortcut to open          |
| 51:43      | each section within that app and then do things within the app and then process it and like          |
| 51:49      | close it or go access the settings and stuff like that. So there is kind of like a start             |
| 51:55      | and end to my workflows and like a spatial relationship between like these ones I want               |
| 52:00      | to see all the time. And then there's like two on the second page that I want to access              |
| 52:05      | occasionally, but I don't need to see. And it's just like, especially with the [[Stream Deck]],          |
| 52:11      | it's just giving physical controls to almost all your software features and really like              |
| 52:17      | bringing it out from locked on a screen behind a GUI and a mouse and stuff like that into just       |
| 52:25      | like I can just tap it and do it right away. And [[Shortcuts]] lets you go from one thing that does      |
| 52:31      | like a [[Stream Deck]] with shortcuts. That's the only really reason and like an iPad or the only        |
| 52:36      | reason some of that strategy makes sense because now I have 16 shortcuts for one app,                |
| 52:41      | but I could just have them available and I can rotate through all the different sections of that     |
| 52:46      | app, process all of my information. And then I'm just kind of like using the interface when I want   |
| 52:52      | to, but otherwise I have these pre built workflows that accomplish what I'm trying to get done.      |
| 52:57      | Like, like when I process email, and this isn't really shortcuts is mainly using the built in        |
| 53:02      | mail keyboard shortcuts, but just that I've mapped to various folders and like I can go through an   |
| 53:08      | inbox, delete it, trash it, send it to the same box black hole, or I send it to a folder I call      |
| 53:15      | bench, which means I'm going to follow up on it later, or I've got all these things I can do.        |
| 53:19      | And I don't even look at the [[Stream Deck]]. I've kind of play it like a piano. I've kind of memorised  |
| 53:24      | it and I can just go through the inbox in just a couple of minutes and just triage the thing         |
| 53:32      | in like no time flat. And I'm good at keyboard shortcuts, but there's no way I could match that      |
| 53:37      | speed with the with the keyboard. It's just not necessary to and like you can just get               |
| 53:43      | that combination like the weird keyboard, like that's what I'm doing the same thing, but I'm         |
| 53:49      | turning those into [[AppleScript\|AppleScripts]] shortcuts instead of just relying on the [[Stream Deck]] part,          |
| 53:54      | because then it's also in my menu bar, or I can just use that using run shortcut and put it into     |
| 54:01      | a sub routine where like that workflow to set up all this stuff can also trigger that one keyboard   |
| 54:06      | shortcut as well. And for me, because then I can just share them with people and it's like here's    |
| 54:10      | how you press. Here's how you activate like your memories and photos. It's by pressing command       |
| 54:16      | option control eight, but like you would never you don't need to know that. I bet the [[Stream Deck]]    |
| 54:21      | stuff is like, I'm just kind of cursed by like being the shortcuts fiend that there is so much       |
| 54:27      | there's tons of plugins to there that are like beyond what you can just do with [[Shortcuts]] as         |
| 54:32      | well, which is awesome. And I should say while we're on the topic and I want to hear your thoughts   |
| 54:36      | on this, but I find all of the [[Shortcuts]] plugins to be kind of lousy. I what I do is I just          |
| 54:42      | export a shortcut as an app on the [[Shortcuts]] app. And then I there is a stream cut action to run app |
| 54:51      | and then you just attach it to the shortcut and I have found that is like 100% reliable.             |
| 54:56      | Yeah, some of these plugins don't just work sometimes.                                               |
| 54:59      | Yeah, I think the plugin, I mean, this stuff is always built off of just looking at your             |
| 55:03      | library. And then the thing that I couldn't handle was it just I have so many shortcuts that if      |
| 55:08      | that thing crashes, it won't work. So I just rely on the there's a [[AppleScript]]. I think it's called |
| 55:16      | ASO is the plugin and `osascript.` And it just triggers shortcut by name. And that is admittedly      |
| 55:25      | not ideal. Because if I change the name, I have to update the shortcut or the [[Stream Deck]] thing.     |
| 55:30      | But it basically always works. It doesn't the same thing. I can share it to someone else and they    |
| 55:36      | can install it and run the shortcut that I gave them of the same name versus them having to go       |
| 55:41      | add to doc. And the main thing is I would have had 5000 shortcuts in my doc and I can't do that at   |
| 55:47      | scale. So I haven't done that. But that is honestly, that's like another that technology, like I'm   |
| 55:56      | just going to use this to transition into the other the last thing that I would just want to         |
| 55:59      | mention, because it's awesome is add to doc for Mac web apps, they brought that from what they       |
| 56:05      | added to [[Shortcuts]], and let you do that with websites now. And the main thing is that you            |
| 56:11      | can't control those websites using your shortcuts now, unless you use [[AppleScript]]. And there's a    |
| 56:18      | script that's just open URL in app. And if you just put in, like if I use letterbox to log movies    |
| 56:26      | and kind of track what I'm watching. And so if I have a letterbox shortcut, I can just say,          |
| 56:33      | take that URL to open whatever like my diary of posts, and then run an [[AppleScript]] to open it       |
| 56:40      | in the local letterbox app on my Mac. And so what I've done is I took for every app on iOS that      |
| 56:48      | doesn't have a Mac app, I've made Mac. Wait, what's even the term? I've added it to my doc and       |
| 56:56      | and made shortcuts that now redirect me into that to that Mac app. So like, I have an IKEA app now   |
| 57:03      | and IKEA shortcuts that open in the local app on Mac. And I think this is like, I just figured this  |
| 57:10      | out, like six weeks ago or something. And what I haven't figured out is the same thing. How do I     |
| 57:16      | make a shortcut that calls this method, while not knowing whether or not you have the shortcut       |
| 57:22      | installed and also doesn't fail if you don't? So it's kind of like a meta implementation issue       |
| 57:30      | there. But I got a, I can like share a version in the notes that's just like, if you want an app     |
| 57:37      | to open into your Mac app, you can use [[Shortcuts]] to do it or a URL.                                  |
| 57:42      | Matthew Cassinelli at the hairy edge of [[Shortcuts]]. Well, you know, Matthew, I do want people to go    |
| 57:50      | check out your website and what you're doing at Matthew Cassinelli.com. If you're a [[Shortcuts]]         |
| 57:55      | enthusiast, this is, you're going to like what Matt has to share. He's got a membership program,     |
| 58:00      | got some great stuff in there, but he's also got a lot of stuff for free. So just go check it out.   |
| 58:05      | We're going to put it in the show notes. You can check it out there. I want to thank our sponsors    |
| 58:09      | today, LinkedIn, Talent Solutions and Computex for Automators Max. Matt and I are going to talk      |
| 58:16      | about AI and [[Shortcuts]]. I think that's something coming up. It's a little bit of, we're going to     |
| 58:21      | be doing a little bit of predicting. So if you're an automators max user, you can check that out.    |
| 58:25      | You can become a max user or a max member by going to relay.fm/automators and          |
| 58:31      | sign up there. That gets you the ad for extended version of the show. We'd love to have you either   |
| 58:36      | way. Have a great time. Get automating this weekend and we'll see you next time.                     |
