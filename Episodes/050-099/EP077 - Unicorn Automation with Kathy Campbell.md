---
status: incomplete
fc-date:
  year: 2021
  month: 6
  day: 4
fc-category: podcast
podcast: Automators
published: 2021-06-04
duration: 5002
formattedduration: 01:23:22
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Kathy Campbell
notetype: episode
showpage: http://relay.fm/automators/77
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators077.mp3
episode: 77
title: "77: Unicorn Automation with Kathy Campbell"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
David and Rosemary are joined by The Unicorn Sidekick, Kathy Campbell, to talk automation. From Lightroom and handling thousands of photos, to Shortcuts for launching music playback, there's plenty of automation to discover!

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Kathy Campbell]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 077 Discussion](https://talk.automators.fm/t/77-unicorn-automation-with-kathy-campbell/11704)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Communicate Smarter.
- [[Sync Up (Sponsor)|Sync Up, a OneDrive podcast]] - takes you behind the scenes of OneDrive.
- [[Forward Networks (Sponsor)|Forward Networks]] - Network modelling software.

# Show Notes
- [Home - The Unicorn Sidekick](https://www.theunicornsidekick.com/)
- [Automators #34: Getting Cozy with Regular Expressions - Relay FM](https://www.relay.fm/automators/34)
- [Roboism #38: Triggering the Maestros - Relay FM](https://www.relay.fm/roboism/38)
- [Default Folder X](https://www.stclairsoft.com/DefaultFolderX/)
- [Default Folder X on Setapp | Major upgrade for Open and Save dialogs](https://setapp.com/apps/default-folder-x)

# Transcription
  
| Time Index | Transcription                                                                                             |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the podcast where we talk about making your technology                  |
| 00:06      | do all of the hard, grunt work for you. My name is Rosemary Orchard, and as always, I'm                   |
| 00:11      | joined by my fellow co-host, David Sparks. Hey, David, how are you today?                                 |
| 00:14      | I'm great, Rose. I'm looking forward to talking to you and our guest today.                               |
| 00:18      | Yes, and our guest is the one, the only, the unicorn, Kathy Campbell. Welcome to the show,                |
| 00:25      | Kathy.                                                                                                    |
| 00:26      | Hi, I'm so excited to be here.                                                                            |
| 00:28      | All right, quick question before we get started. Are you wearing your headphones with the unicorn         |
| 00:33      | horn?                                                                                                     |
| 00:34      | Duh, of course.                                                                                           |
| 00:36      | They are my, when I wear headphones at my computer, they are, of course, my unicorn                       |
| 00:42      | headphones because that is the only way to work.                                                          |
| 00:46      | Okay, I need a picture of these unicorn headphones.                                                       |
| 00:50      | All right, I will send them over. They are the Brookstone cat ear headphones that I have                  |
| 00:57      | placed a unicorn horn on top.                                                                             |
| 01:00      | Good for you.                                                                                             |
| 01:01      | Well, the reason for this, for people who don't know, Kathy, about your background is                     |
| 01:05      | you are the magical unicorn sidekick. So would you like to give people a little summary of                |
| 01:11      | who you are and why you're a unicorn, aside from obviously having a unicorn horn on your                  |
| 01:15      | headphones?                                                                                               |
| 01:16      | Absolutely. So I am the unicorn sidekick, which means that I love to help companies                       |
| 01:25      | and businesses kind of get their stuff together. So it's a little bit more than just like a               |
| 01:31      | virtual assistant. I call myself an online business manager, but it's really more customised              |
| 01:38      | than that. I help businesses with what they need, whether that's discovering what help                    |
| 01:46      | they need, taking things off of their plate, helping kind of guide their plans and their                  |
| 01:53      | purpose and basically just kind of be that support person to let them be more successful                  |
| 02:01      | with what they're doing so they can concentrate on what they love or are really passionate                |
| 02:07      | about and not have to worry about the little things.                                                      |
| 02:11      | That is an excellent summary. But of course, you don't just do unicorn things. You're                     |
| 02:14      | also a co-host of [[Roboism]] here on [[Relay FM]] with [[Alex Cox]], which is a great podcast.                      |
| 02:20      | So people haven't listened to that one. And after today's show, you think, oh my God,                     |
| 02:23      | I need more Kathy in my life. That's just one of the many ways you can get it.                            |
| 02:28      | And I know that your mascot is the unicorn and you've got it. You're even dressed up                      |
| 02:33      | in the suit on the website. But I honestly think that you could also use a bull terrier                   |
| 02:40      | as your mascot because the times I've interacted with Kathy is when she's working on behalf               |
| 02:46      | of one of her clients and she is like a bull terrier. She gets her teeth into something                   |
| 02:51      | and she doesn't let go until it's done right. And I really appreciate that about you, Kathy.              |
| 02:56      | Oh, thank you so much. That's such a kind way to say that I'm really like needy and                       |
| 03:03      | bossy.                                                                                                    |
| 03:04      | Oh, that's not it at all. It is very much the good kind of bossy. So for people who                       |
| 03:11      | remember the leaf incident at [[WWDC]] where I ended up breaking my ankle, Kathy is one                       |
| 03:16      | of the wonderful people who really looked after me all week. And so she's the good kind                   |
| 03:22      | of bossy, making sure that I wasn't overdoing things on what I thought was a sprained ankle.              |
| 03:27      | We both thought it was a sprained ankle and then I got home and I found out it was a very                 |
| 03:30      | broken ankle. But I hadn't damaged it further and that is mostly down to Kathy and her wonderful          |
| 03:36      | unicorn stubbornness of not letting me overdo things.                                                     |
| 03:39      | Well, and like I told you so many times, it was really a pure joy for me as well to have                  |
| 03:48      | a purpose because this was the first [[WWDC]] I'd ever been to. I really had no idea what                     |
| 03:58      | I was doing with my time, effort and energy. And so getting to have a goal and a purpose                  |
| 04:05      | and help Rose made my anxiety calmed down a lot. And so really, and this is something                     |
| 04:18      | I've discovered with my therAPIst is that my need to help people is a deep innate trait.                  |
| 04:27      | And I just really lucked out in that I got to make my business do that. It makes everything               |
| 04:33      | so much easier for me because really in the very base part of my soul, I want to help                     |
| 04:39      | everybody and I can't do that. So I do what I can to help the people that I can.                          |
| 04:47      | Well, I think that's an excellent approach and I'm sure that by listening to today's                      |
| 04:52      | podcast, a lot of people are going to be helped by some of the magic that you've got lined                |
| 04:56      | up for us because I've had a sneak peek and I may have pre-interrogated Kathy people.                     |
| 05:01      | It was okay. It was good interrogation, not bad interrogation. So I know that there's                     |
| 05:07      | plenty of magic in the pipeline, if you will.                                                             |
| 05:10      | And the reason really, Kathy, I like having you on this show today is because you are                     |
| 05:14      | not a programmer. You're not coming on the show of someone who writes software for a                      |
| 05:19      | living, but someone who spends your time helping people and helping companies, especially in              |
| 05:24      | the small company clients of yours, get to the next level. And you are always so on top                   |
| 05:31      | of it. And I know there's a lot of automation in there that doesn't really involve writing                |
| 05:35      | Perl code. And I think that could be really helpful to a lot of our listeners today.                      |
| 05:40      | So thank you for coming on.                                                                               |
| 05:42      | Thank you for letting me be a part of this because I will admit I was very concerned                      |
| 05:47      | because I don't know what Perl code is. And so I was worried that you would be able to                    |
| 05:58      | find anything enjoyable to talk about with me. So I'm very happy that I'm here.                           |
| 06:02      | I'll tell you a secret. I don't really know what it is either.                                            |
| 06:06      | I do know Perl and it's not something we're going to talk about on the show because there's               |
| 06:11      | plenty of regular expressions involved there. And let's just say that there are many things               |
| 06:17      | we can communicate through a podcast. Regular expressions are best done. Well, regex101.com               |
| 06:23      | and just have at it, I think is the best way to talk about that. We've talked about it                    |
| 06:28      | before on the surface level. And yeah, I think that's plenty for the time being.                          |
| 06:34      | But my point is there's a lot of people, Kathy, that want to automate that don't have very                |
| 06:38      | particularized technical knowledge about programming their computers. And I do think that you're          |
| 06:46      | doing a lot of automation, whether you acknowledge it or not. And I think that can be of help.            |
| 06:51      | So I guess we should just get started. What platforms are you working on, Kathy?                          |
| 06:57      | Yeah, the majority of my time is on macOS. I have an iMac Pro running Big Sur. And that's                 |
| 07:09      | where I get a lot of my work done, partially because my iPad, I don't know, committed suicide.            |
| 07:17      | I died. But only sometimes like the screen will just turn off and nobody knows what's                     |
| 07:23      | wrong. But so we're recording this show on May 17. And as of Friday, my new iPad will                     |
| 07:32      | be here and I'm very excited to be able to be a little bit more transient with my work                    |
| 07:38      | days, especially since hammock weather is coming. And that makes me very happy. But                       |
| 07:45      | most of my work is on macOS.                                                                              |
| 07:50      | And I think that that is, I'm guessing at least some of that is because of the kind                       |
| 07:54      | of work that you're doing. Some things translate very well to an iPad in a hammock lifestyle              |
| 07:59      | and some things maybe don't translate so well to an iPad in a hammock lifestyle. So how                   |
| 08:05      | do you decide what work you do on what platform? Or is it just what you feel like you're in               |
| 08:09      | the mood to do? Or do you have specific applications that you need that are only available on one         |
| 08:13      | or the other? Yeah, there's a lot of random things that I do that do work pretty much                     |
| 08:21      | only on the computer. But a lot of times, it's a, like, it's a mental statement. It's                     |
| 08:29      | a mental setup in that when I'm working, I'm working. This is my work mode. I sit in my                   |
| 08:36      | office, I'm in my chair, I'm at my computer, and I'm working. And it lets me kind of focus                |
| 08:42      | in that mental status. But also, I don't do, like, a lot of random writing. I don't do                    |
| 08:50      | a ton of stuff that isn't compartmentalised. So a lot of my client work, I try and keep                   |
| 08:58      | it separated out. So one of my main clients, I only work in [[Google Chrome]] for them. So,                   |
| 09:06      | and that's a specific hourly project-based, like, payment structure. And so when I'm in                   |
| 09:14      | [[Google Chrome\|Chrome]], I'm working with this client in particular. And then I have specific windows and styles           |
| 09:21      | of windows for other clients. And there's some, some clients where I shut everything                      |
| 09:28      | else down and I'm only working on this one project. And because of that, it's, yes, the                   |
| 09:35      | iPad is very good at being able to focus on only one thing. But my brain still is like,                   |
| 09:43      | oh, I'm on an iPad, which means I'm watching Netflix, or I'm playing with XYZ. So it,                     |
| 09:53      | it helps my mental brain for the separation of work and play to do my work on the computer.               |
| 10:01      | And then I play on the iPad. Yeah, I think setting context with technology                                |
| 10:06      | is a, is a great idea. I'm going to be really curious to see once you get that new iPad,                  |
| 10:12      | because they are like screamers in terms of speed. You may find you can do some of your                   |
| 10:17      | work on it too. But I guess we'll have to check back on that once you get it.                             |
| 10:22      | Yeah, absolutely. And that's kind of the goal. That's kind of why I actually did go for the               |
| 10:27      | iPad 12.9. I had been the smaller size for, since the first iPad pro, that was my size,                   |
| 10:36      | because it's like, I don't need anything bigger. I have a laptop. Obviously, I don't use it               |
| 10:43      | a whole lot because it's my travel device and haven't been traveling a whole lot. But                     |
| 10:51      | I, I'm very interested to see if I will be able to have the iPad be my travel device for                  |
| 10:58      | the future when I am able to travel again at some point. And so I'm looking forward to                    |
| 11:04      | seeing what I will be able to do because of that whole reason that I have the keyboard                    |
| 11:10      | and a bigger sleeve to stick it in to be able to move around with. So yeah, it'll be really               |
| 11:17      | interesting to see what the future brings.                                                                |
| 11:18      | Yeah, that was one of my lessons of the pandemic was that I really like the big iPad. You know,           |
| 11:24      | I had, I was fortunate to have both of them. I had a used one and I am during the dependent               |
| 11:32      | pandemic, I just never use the smaller one so much so that I ended up giving to my daughter               |
| 11:36      | when she went off to start grad school.                                                                   |
| 11:38      | I am also upgrading to the larger iPad. So we're going to be three 12.9 inch iPads in                     |
| 11:43      | a row there. I am very disappointed that they are not doing pretty colours on this. It's                   |
| 11:50      | just such a shame. So I've gone with silver because, you know, it's fine. And I'm going                   |
| 11:58      | to get a black case because even though I'm sure I could ask you very nicely for a unicorn                |
| 12:03      | sticker, and we could probably manage to sort something out there, I don't trust myself                   |
| 12:08      | with a white iPad case, and especially keyboard where I'm typing on it all the time, actually             |
| 12:12      | have an [[Apple Magic Keyboard]] here in front of me at the moment. I've just been trying                     |
| 12:17      | it out while podcasting because I already had it and I was not using it and I realised                    |
| 12:21      | it's quite quiet. And oh my gosh, I have to clean this thing like every single day because                |
| 12:25      | it just looks grumpy. And I swear, I'm washing my hands regularly. I guess it's just my hand              |
| 12:29      | cream. So yeah, that's an interesting trial that we have with the iPad Pro, the lack of                   |
| 12:37      | pretty colours, but I'm sure you'll be able to jazz yours up.                                              |
| 12:41      | Somebody tells me I'll make it work. Yeah, I ordered the silver one as well with the                      |
| 12:46      | white keyboard, but I just haven't had the guts to tell Steven Hackett yet because I                      |
| 12:49      | know he's going to give me such a hard time. Well, the good news is, is a Kathy mentioned                 |
| 12:55      | when we're recording earlier, we are recording this a little bit in advance. I'm starting                 |
| 13:00      | a new jobby job just before this show airs. And so I wanted to make sure that we've got                   |
| 13:05      | a little bit of buffer room just in case life goes completely crazy for me. So by the time                |
| 13:10      | this podcast airs, hopefully all three of us will actually have our iPad pros in hand.                    |
| 13:15      | And David will have broken the news to Steven already. So you won't be in too much trouble                |
| 13:19      | there, Sparky.                                                                                            |
| 13:20      | Well, I don't know. I mean, that guy, he's a rough guy. I don't want to make him mad                      |
| 13:24      | at me.                                                                                                    |
| 13:25      | Yeah.                                                                                                     |
| 13:26      | It's true. It's true.                                                                                     |
| 13:27      | We can call ourselves the lunch tray club, the big iPad owners.                                           |
| 13:31      | Done.                                                                                                     |
| 13:32      | Well, I mean, they're useful for a lot more than that. And Kathy, I know as well as the                   |
| 13:41      | various different clients you work for, you do more than that. So obviously, we mentioned                 |
| 13:47      | your podcasting and you don't just host podcasts here. You also host podcasts over on the incomparable    |
| 13:53      | network, which are more great podcasts that people should be checking out. But you do                     |
| 13:58      | things besides that. I mean, you have a family. They exist. So you also have to do things                 |
| 14:04      | for them. And you also are a photographer and you have cameras and you do stuff with                      |
| 14:11      | that. How do you find integrating all of that? Do you have a special setup to make sure                   |
| 14:18      | that you can do all of these different things? Do you have 80,000 hats on the wall and you                |
| 14:22      | literally put on the unicorn horns when you're being a unicorn and the camera hat when you're             |
| 14:26      | being a photographer? I did actually used to have a spreadsheet, Tiara, that I would                      |
| 14:34      | wear when I was working in spreadsheets because it was way more fun. But no, I don't have                 |
| 14:43      | a camera hat. So I've been a photographer for 13 years now. A professionally paid one                     |
| 14:55      | for about 11 or 12. And my goal with photography is to get a lot of it correct and right in               |
| 15:08      | camera. So I don't have to do a lot of editing outside of it. And over the past decade plus,              |
| 15:15      | I have my process down pretty quickly. Now, the biggest thing that I photograph is my                     |
| 15:25      | daughter's dance studio. I have a great deal with them in that I do the photography and                   |
| 15:34      | videography for them as well as a variety of other things in exchange for my kid to                       |
| 15:40      | dance there, which I think I clearly have the better deal because obvious dancing all                     |
| 15:46      | the time. But that being said, I will take upwards for any competitions that we're at.                    |
| 15:55      | I'm taking a lot of action shots. I'm taking between two and 4,000 photos for each competition.           |
| 16:03      | I don't have the energy in my life to sit and touch every one of them to make them quote                  |
| 16:12      | unquote perfect. So I use a lot of automation to get them to be a level and quality that                  |
| 16:22      | allows them to be sent out and get done within 24 hours. So they're not sitting on my hard                |
| 16:29      | drive. Oh, I'll get to them later. I like to get in, get them done, send them out and                     |
| 16:35      | then check it off my list.                                                                                |
| 16:38      | That is something you do appear to be very good at doing, checking things off your list.                  |
| 16:42      | Whenever I send you something, you get back to me incredibly quickly. And that's always                   |
| 16:47      | a fun thing. Whether or not I'm sending cute cat pictures or something more important like,               |
| 16:53      | hey, can you come on automators? You are very much on top of things, it seems so. I'm fascinated          |
| 16:59      | as we dive into this show to discover all of the secrets and the magic behind us that                     |
| 17:04      | makes it work.                                                                                            |
| 17:05      | I wish my quick communication was something magical. It's more so based in anxiety and                    |
| 17:18      | that I'm always constantly afraid of forgetting or missing something. And so I like to just               |
| 17:28      | reply back quickly so that I know it's done and taken care of and I don't accidentally                    |
| 17:36      | mark something red that then has to be remembered. And so it's easier for me to say, yeah, sure,          |
| 17:44      | I'd love to. And then go back to whatever I was doing. So that mental adjustment and                      |
| 17:52      | hopping around. I know anyone that works in the productivity space has heard of deep work                 |
| 17:59      | and being able to sit and focus. And that is not how my brain works. That's not how                       |
| 18:06      | I am really able to get through life for good or bad. The anxiety that exists around it                   |
| 18:15      | allows me to be really on top of things for my clients. So if I don't reply to your text                  |
| 18:21      | right away, I might be dead or sleep. That does occasionally happen. Yes. Yes. It kind                    |
| 18:28      | of reminds me of a statement you made earlier that you want to capture the image in the                   |
| 18:33      | camera. You don't want to work on it later. The same thing comes to the communications.                   |
| 18:38      | If you don't deal with communications immediately, you need a process to manage when you respond          |
| 18:44      | to it and how to deal with it. So it's a variation of a theme for you, really. Yes. Yes. It's             |
| 18:50      | very true. One could say that I'm highly efficient, but really, I'm just lazy.                            |
| 18:58      | This episode of Automated is brought to you by TextExpander from our friends at Smile.                    |
| 19:02      | TextExpander removes the repetition from work, so you can focus on what matters most. Say                 |
| 19:07      | goodbye to repetitive text entry, spelling errors, and trying to remember the right thing                 |
| 19:11      | to say. When you use TextExpander, you can say the right thing in just a few keystrokes.                  |
| 19:16      | It's better than copying paste and better than scripts and templates. TextExpander snippets               |
| 19:21      | allow you to maximise your time by getting rid of all those repetitive things you type                    |
| 19:25      | while still customising and personalising your messages. TextExpander can be used on                      |
| 19:30      | any platform, any app, and anywhere you type. Take your time back and increase your productivity.         |
| 19:37      | I use TextExpander for all sorts of things, from tiny little snippets here and there,                     |
| 19:41      | swapping that colon for a semicolon in the wrong place, and even sometimes just good                     |
| 19:47      | old fashioned replacing my name when I inevitably accidentally capitalised the second letter.             |
| 19:52      | It boosts my productivity by eliminating my concerns.                                                     |
| 19:57      | And as a listener of Automators, you can get 20% off your first year. Visit textexpander.com              |
| 20:02      | slash podcast to learn more about TextExpander. That's textexpander.com/podcast. Our                |
| 20:07      | thanks to TextExpander from Smile for their support of this show and Relay FM.                           |
| 20:11      | Okay, Kathy, you say lazy. I say smart. So tell us about your photography magic that                      |
| 20:19      | you've got going on here, because this is something I definitely struggled with back                      |
| 20:23      | when I had a DSLR. I don't have one anymore because I realised it was generating a lot                    |
| 20:27      | of work and then I was feeling bad about not doing stuff. And so I decided that I was just                |
| 20:31      | going to eliminate that from my life. But clearly, I can do that because for me, that's                   |
| 20:35      | a hobby. If you're being paid to take pictures or you're taking pictures in exchange for                  |
| 20:41      | your daughter getting dance lessons or whatever it is, then you can't just say, no, I'm not               |
| 20:46      | going to do that. So how do you combat this being lazy, which I personally think is the                   |
| 20:52      | wrong way to frame it. I think you're being fairly smart with your desire to not actually                 |
| 20:58      | have to spend time touching up every single individual photo.                                             |
| 21:02      | Yeah, so I'm really excited to walk through kind of my process for this, mainly so you                    |
| 21:10      | can tell me how to do it better. When it comes to automation, I am not extremely, I don't                 |
| 21:19      | like to just sit and tinker with things. I highly recommend episode 38 of Roboism, where                  |
| 21:27      | I kind of talk about my discovery of the [[Stream Deck]] and [[Keyboard Maestro]] and learning how                |
| 21:35      | to do things, mainly because it gave away my secret in that I utilised friends like                       |
| 21:41      | Rose to do the things for me and figure out how to make them work because I am not a tinkerer.            |
| 21:50      | I don't like to tinker or create things from scratch or even really think, hmm, how could                 |
| 21:58      | I make this do work for me so much as this is something that I'm doing often. So I will                   |
| 22:06      | Google something and this is how it's done. So then I'll just put it into work. So I'm                    |
| 22:12      | really looking forward to being able to be told how to do this better. So feel free to                    |
| 22:18      | send any suggestions to me. So after I spend multiple hours taking photos for the dancers,                |
| 22:29      | I get home and I load up the card and then I transfer all of the images over to, I have                   |
| 22:37      | a folder in my finder in my drive that's called working sessions. And this is where any images            |
| 22:46      | that I need to work on live. I don't transfer them into the like stable backup until after                |
| 22:55      | I've submitted the images and everything looks great. So in the working sessions, I clearly               |
| 23:02      | name the folder usually with very specific things because I do go back a lot of times                     |
| 23:09      | to find images for particular events because somebody is like looking for whatever. So                    |
| 23:19      | after I've transferred the files off of the card, I take the card and I put it into, you                  |
| 23:26      | know, the little case because I cycle through my SD cards so that they don't get overworked.              |
| 23:31      | So there's less chance for them to have issues in the future. And then I load those images                |
| 23:39      | up into Lightroom. Lightroom is where I do a lot of the very basic processing. So because                 |
| 23:47      | the dancers are moving really fast, and I want to make sure I have a crisp, like, crisp                   |
| 23:56      | clean image, I have to have the shutter really fast, which means a lot of times it's really               |
| 24:03      | dark. So I have to go in and make sure everything's lightened up and brighter. But because I have         |
| 24:09      | the settings the same, I fix one and then I sync the settings across everything. This                     |
| 24:17      | means that I don't have to go in and make minor adjustments unless for some reason there                  |
| 24:22      | is lighting changes. And then I go through and I very quickly will pick the images that                   |
| 24:32      | I want. I don't do anything with the images that are not useful to me because if they're                  |
| 24:39      | not useful, I don't need them. So in Lightroom, the letter P puts a flag on the image. So                 |
| 24:46      | I am sitting here and I'm just going with my gut. I'm not sitting and saying, well,                       |
| 24:53      | this I guess is better than the other one. Like, boom, like it or not, move on. So it                     |
| 25:01      | will usually take me maybe 20 to 30 minutes to review about 2000 images.                                  |
| 25:10      | So Kathy, as you go through these pictures, are you looking at them as thumbnails or full                 |
| 25:14      | screen? You know, how are you making those decisions?                                                     |
| 25:17      | Yeah, I look at it full screen for the very specific image that I'm looking at. I don't                   |
| 25:25      | care what else is around it. I'm looking to see if it's an image that is worthwhile, like                 |
| 25:33      | is it an actual good pose? Are people's faces showing? Is it a random in between pose and                 |
| 25:43      | is it in focus? And if the answer is yes to the good parts, I will flag it as a keep and                  |
| 25:50      | move on. I usually am making that decision in a split second. I'm not going to debate,                    |
| 25:59      | oh, well, maybe this one's better. It doesn't matter. Everything is going to be like, there's             |
| 26:07      | so many choices for the viewer. These are images that the parents of the dancers will                     |
| 26:16      | look at or the dancers themselves, especially like for the high school team. But I don't                  |
| 26:24      | need to find just the award winning photos because something that I might never use for                   |
| 26:32      | any sort of promotional or advertising quality will be something that will be someone's favourite          |
| 26:38      | image because their child was doing something cool. And so I keep it very minimal of, hey,                |
| 26:47      | is it in focus? Is it a dynamic-ish image? Yes, cool, move on. This allows me to just                     |
| 26:56      | process through it. I'm not overthinking it. I usually will have something running on Netflix             |
| 27:02      | or YouTube or whatever in the other screen as I'm sitting here and just going through,                    |
| 27:07      | get it done, and move on.                                                                                 |
| 27:09      | Well, yeah, you said you're looking at like 20 to 30 minutes for a couple of thousand                     |
| 27:14      | images here. That's something where I'm guessing you've probably got a lot faster at this over            |
| 27:20      | time. You're much better at judging those criteria that you set out for yourself faster                   |
| 27:26      | now than you were even probably a year ago just because you get used to it over time.                     |
| 27:32      | Though I'm guessing maybe the pandemic had a slight impact there on the amount of photography             |
| 27:36      | you were doing because I'm guessing something might have got canceled. So maybe not compared              |
| 27:40      | to a year ago, but say three years ago, you're probably being able to make these decisions                |
| 27:47      | much faster, which I think is a kind of automation in and of itself. You've hacked your brain             |
| 27:51      | basically to do this.                                                                                     |
| 27:53      | Yeah, absolutely. And I think too, I've become a better photographer. So I'm not shooting                 |
| 28:04      | and spraying like they, a lot of times they will say, you know, just clicking the thing.                  |
| 28:10      | I'm very, very like specific about the images that I'm taking. So especially towards the                  |
| 28:21      | end of the season, I've seen most of these dances. So I know the big moments that come                    |
| 28:28      | in. I know the bits of the specific dancer will do something cool. So I know that I can                   |
| 28:34      | wait and be ready to take that shot. And so that means that there's going to be less                      |
| 28:43      | awkward images before and after because I hit the leap at the right time type of a thing.                 |
| 28:50      | So over the years, I have definitely become a better photographer and in exchange that                    |
| 28:56      | has also made this process significantly easier.                                                          |
| 28:59      | I was going to say, do you get to watch rehearsals of this so that you can almost rehearse your           |
| 29:03      | photography? And obviously the answer is yes, which I think is something else, which, you                 |
| 29:08      | know, a lot of times we forget about with automation in general, being able to see how                    |
| 29:13      | an entire process goes so that you can figure out where the moment is to, in your case,                   |
| 29:18      | take the photo or, you know, for me, it might be implement a script, you know, that, you                  |
| 29:22      | know, that is a key part.                                                                                 |
| 29:24      | So can I just clarify when you go through them and you figure out a keeper, what are                      |
| 29:29      | you doing to mark it as a keeper? And what do you do with the ones that are not keepers?                  |
| 29:34      | Yeah, so in Lightroom, the keystroke P will flag it. And then when after I've done reviewing              |
| 29:43      | it, I set the filter to only show the flagged images. And so anything that's not a keeper,                |
| 29:51      | I don't touch. There's no special flag. There's no, you know, oh, I'll turn, you know, attack             |
| 29:58      | these all green. If I don't want it, I don't want to mess with it. I don't want to spend                  |
| 30:03      | any time with it. I don't need to deal with it at all. And it just lives in the raw format                |
| 30:11      | in the folder to keep for pretty much ever, eventually. So as I cycle, okay, let me take                  |
| 30:20      | a step back. Each of my images, like groups of images, each session or whatever, lives                    |
| 30:28      | in a specific folder, that folder while I'm working on it is in the working sessions.                     |
| 30:33      | And then when it's done, it moves to a year folder. So I can easily find anything from                    |
| 30:41      | the back, the past 13 years or whatever that I've been taking photos. Usually at the end                  |
| 30:48      | of the year, I will go in and compress the raw file folder of images from the year before.                |
| 31:00      | Okay.                                                                                                     |
| 31:01      | Because I will usually want to access stuff for the current year, but stuff that's two                    |
| 31:07      | years ago, I won't necessarily need. So I will compress the files and then delete the                     |
| 31:12      | raw. So I have just a zipped file of all of the raw files available there. So eventually                  |
| 31:19      | it will kind of get, you know, discarded in that sense, but I never really delete anything.               |
| 31:25      | Probably should, but yeah, I don't.                                                                       |
| 31:29      | So one bit of automation I would recommend there is considering [[Hazel]] as a mechanism to                   |
| 31:35      | put those folders where they belong. Like you could tag a folder is working and it would                  |
| 31:40      | hold it in a working space. And then as soon as you're done with it, you could tag it as                  |
| 31:44      | done or something like that. And it would automatically move it into a folder by year.                    |
| 31:49      | [[Hazel]] has a really cool feature where it can move it into a sub folder automatically and                  |
| 31:54      | you can do it by year.                                                                                    |
| 31:55      | Okay. That's very cool. I've heard about [[Hazel]] a couple times now. And so I think this is                 |
| 32:03      | just a sign that I need to set up some time with Rose to come and screen share with me                    |
| 32:07      | and tell me what to do. I can definitely do that.                                                         |
| 32:11      | And the other thing that [[Hazel]] can do, which might be useful for you here, because I'm                    |
| 32:14      | guessing a lot of dance competitions probably happen in the same month as well. And so you'll             |
| 32:20      | know, you know, what month something was in. If you have lots of dance competitions in                    |
| 32:24      | a year, you're going to have a lot of folders in that year. You can also use Hazel's sort                 |
| 32:29      | of into sub folders to sort it into a folder based on the year and then another folder                    |
| 32:33      | inside of that based on the month. So say then you just have, you know, May's dance competitions          |
| 32:39      | from 2021 and they all end up in one folder and that's just magically done for you, but                   |
| 32:44      | only when you finish working on it. And you've done your thing.                                           |
| 32:48      | Yeah, that sounds really great because I've been very hesitant to do a lot of automation                  |
| 32:54      | in this mainly because I don't understand it super well, but then turning around and                      |
| 33:00      | I don't want something to get moved that I'm not done with because then I have to try and                 |
| 33:05      | find it and or it messes up my to-do list because it's not in the working sessions folder                 |
| 33:10      | anymore. So I don't know that it needs to be worked on. So that's really, really wonderful.               |
| 33:17      | And I will start exploring that for sure.                                                                 |
| 33:22      | A lot of people want to use [[Hazel]] with automatic trigger. So automation usually is two steps.             |
| 33:28      | There's something that triggers it and then it does an action and [[Hazel]] will do triggers                  |
| 33:33      | based on the contents of the file. So like if you get a PDF document and it says, you                     |
| 33:39      | know, Oregon Electric in it and such your electric bill, you know, at looking at the                      |
| 33:44      | contents alone, [[Hazel]] could rename it and put it in the file or the folder where you                      |
| 33:48      | keep your electric bills. So that's cool that it works automatically. But don't underestimate             |
| 33:53      | with [[Hazel]] the ability to use a tag as a trigger because those are rock solid because you manually        |
| 33:59      | apply the tag. It just takes a moment, but then it always moves it to the exact place                     |
| 34:04      | you want. You don't accidentally drag it to the wrong place or and it can automatically                   |
| 34:09      | sort it into subfolders. And I do think a lot of people playing with [[Hazel]], they want                     |
| 34:13      | to make that first step, that trigger automation automatic. And a lot of times that's not necessary.      |
| 34:20      | Just create a simple tag based automation and it'll do everything for you. In fact, that's                |
| 34:24      | how I manage all the podcast files. Once we finish recording today, I'll tag the files                    |
| 34:29      | and it'll put it in a specific place and then everything, you know, happens for the show.                 |
| 34:35      | And there's nothing wrong with that. Yeah. In my case, I actually have people at my                       |
| 34:39      | show pop up and ask me, but you know, it's the manual trigger, I think is something that,                 |
| 34:45      | you know, people don't necessarily think about. I mean, as well as adding a tag to something,             |
| 34:50      | the other option you could do is just have a folder, not a folder action, sorry, a service                |
| 34:55      | that you use either through something like drop zone, or you could do something with                      |
| 35:00      | automator to have something show up and find her under the right click menu with under                    |
| 35:05      | services that says, Hey, move it to my make magic happen folder. And I say this because                   |
| 35:11      | I have a [[Dropbox]] folder, it's not called make magic happen, it's called automated actions,                |
| 35:17      | because make magic happen gets sorted to the middle, automated actions gets sorted to the                 |
| 35:21      | top. So there you go, alphabetical pro tip there. But I put stuff in that folder and                      |
| 35:29      | that has sub folders for make this magic happen on it basically. And then, you know, sometimes            |
| 35:35      | stuff gets added via Zapier or something like something else. But other times it's me manually            |
| 35:41      | going, Yeah, I'm just going to throw this in here. And then and then [[Hazel]] does the                       |
| 35:44      | magic on it and it ends up in the right place. And that's it. Thank you very much. So, you                |
| 35:49      | know, I think manual triggers for automations or something which everybody should look at.                |
| 35:54      | And honestly, that's probably if you're, especially when you're getting started with                      |
| 35:57      | this stuff, it's where you should start because that way you can sit there and you can watch              |
| 36:01      | it do the thing. And then you can go, Okay, that did the thing, right? Or, Oh, that didn't                |
| 36:07      | do the thing, right? What happened there and figure it out. And especially if you're concerned            |
| 36:12      | about losing things, which you know, I understand you don't, you can't exactly go back and reshoot        |
| 36:16      | a dance competition. I mean, Hazel's not going to trash things without asking without you                 |
| 36:21      | explicitly setting that up. Sorry. But, you know, it's nice to know what's happening.                     |
| 36:26      | And also the preview, preview rule tip in [[Hazel]] specifically is excellent because then you                |
| 36:32      | can see exactly which parts of the trigger it matches and go through things.                              |
| 36:36      | And since we're on loading [[Hazel]], one more tip. The reason I like the tag based for someone               |
| 36:41      | is it's 100% reliable, you know, you put a tag on, that's something you do manually.                      |
| 36:47      | So it always works. But if you want to get fancy with the automatic filing stuff, you                     |
| 36:52      | can have the trigger condition be basically an or statement or what they call as any.                     |
| 36:59      | So any, if any of the following things happen, then move the, the, the folder. So one of                  |
| 37:05      | them can be a tag apply, but another one could be something automatic like it has the word                |
| 37:10      | organ electric in it. So you have the, the automatic trigger in there to hopefully triggers,              |
| 37:17      | but sometimes the OCR didn't go right. Or for whatever reason, the rule didn't fire                       |
| 37:23      | and you see it there, then all you have to do is add a tag and then it'll, it'll satisfy                  |
| 37:27      | the other condition. The point I'm making is a trigger can be one of many conditions                      |
| 37:32      | if you do it right. So that's kind of a fun trick.                                                        |
| 37:36      | That's really cool. Yeah. I would highly recommend that for people who are yet to get started.            |
| 37:43      | And of course the, the other beauty with [[Hazel]] is, you know, you apply rules to a folder.                 |
| 37:48      | So you could have a, a folder for bills, um, where you just dump all of the PDFs of your                  |
| 37:53      | bills and then stuff magically happens to them, but your photos never go into that folder                 |
| 37:57      | and the rules in that folder never apply to your photos. You know, it's, it is, don't                     |
| 38:02      | cross the streams, um, you know, but with folders. Wonderful.                                             |
| 38:06      | Kathy's like, what are these people talking about? I just came on to discuss my photos.                   |
| 38:12      | No, see, this is what I mean. I want other people to do the work for me so I don't have                   |
| 38:19      | to think or like sit and research. How do I do this? Because my time is better spent                      |
| 38:25      | on other things.                                                                                          |
| 38:27      | And that is the beauty of automation. There's always going to be somebody out there who                   |
| 38:30      | can give you a pointer in the right direction that says, Hey, like this is how, this is                   |
| 38:34      | how you should do things. Um, and, uh, you know, and that's, that's what the automation                   |
| 38:38      | community is all about. They're a bunch of very, very nice people. Um, and, uh, if you                    |
| 38:43      | ask somebody for help, you'll probably get about 10 people queuing up all with their                      |
| 38:47      | own opinion. And then you have to sit and decide which one, um, which of course, you                      |
| 38:51      | know, it takes a while, but it's nice to get a bunch of different options. And I'm sure                   |
| 38:56      | there's going to be some people in our forums going, Hey, did you know you can do this with               |
| 38:59      | Lightroom? Um, and the answer to that will be, I didn't know I could do that with Lightroom               |
| 39:04      | because I don't really use Lightroom all that much. I have it. Um, but that's because                     |
| 39:08      | I, I got it with [[Photoshop]]. Um, it's the Adobe Creative Cloud Deal. Um, but, uh, you know,                |
| 39:14      | I, I personally don't use Lightroom. So I'm definitely out of, out of, uh, my depth there,                |
| 39:19      | but [[Hazel]], [[Hazel]], I use and [[Hazel]], I can help you with.                                                   |
| 39:22      | Yeah. That's amazing.                                                                                     |
| 39:24      | And once you learn [[Hazel]], it's like that becomes the world's biggest hammer and everything                |
| 39:28      | is a nail. But, but also just to your earlier point, Kathy, where you said, Well, I don't,                |
| 39:35      | you know, get into the weeds on this stuff. I, you know, I use other people's work. A                     |
| 39:39      | lot of automators do that. I mean, myself included. I mean, almost every [[AppleScript]]                     |
| 39:44      | I've ever written started with somebody else's [[AppleScript]]. Um, very few have been written               |
| 39:48      | from scratch. So it's okay. You know, and I think that's kind of embraced in the community.               |
| 39:53      | That's why there's all these websites like, you know, automators.fm where you can go in                   |
| 39:57      | and talk to other people and say, Hey, how did you scratch that itch? You know, and somebody              |
| 40:01      | has a cool solution.                                                                                      |
| 40:05      | This episode of the automators is brought to you by Sync Up, a OneDrive podcast that takes                 |
| 40:09      | you behind the scenes of OneDrive. It's always great when you find a new podcast that can                 |
| 40:15      | teach you about something technology. And if you use OneDrive, you need to check out Sync Up,              |
| 40:20      | the OneDrive podcast. If you're looking for a new show to listen to, Sync Up takes you                     |
| 40:24      | behind the scenes of OneDrive so you can learn about how to connect files, share your documents           |
| 40:30      | and work from anywhere. And you'll get to hear about the design and development side                      |
| 40:34      | of things too. Each show covers a dedicated topic, along with guest interviews, news and                  |
| 40:40      | announcements, plus a special topic outside of the technology norm.                                       |
| 40:45      | Topics include things like external sharing with OneDrive, automation, which of course                    |
| 40:49      | is one of our favourites here on the automators podcast, and data security, which is also                  |
| 40:54      | super important. And one of the great features of OneDrive that it really takes data security             |
| 40:59      | so seriously. In the most recent episode of OneDrive, they had one of the program managers                |
| 41:05      | for OneDrive on to talk about this new feature, OneDrive Sync Admin Reports, that empower IT              |
| 41:13      | administrators with actionable insights about the adoption and health of the Sync client.                 |
| 41:18      | Sync Reports allow you to know exactly what happened with your stuff, and it's a great                    |
| 41:23      | feature that's been recently added to OneDrive. Why not get all the details from one of the               |
| 41:28      | program managers? So go and listen to it now. Just search for Sync Up wherever you get your               |
| 41:33      | podcast. That's S-Y-N-C-U-P, or just click the link in the show notes and check it out.                   |
| 41:40      | Our thanks to Sync Up and Microsoft for their support of the automators podcast and all                   |
| 41:45      | of Relay FM.                                                                                              |
| 41:46      | All right, so you've picked your favourites. You've got the best dance images there are.                   |
| 41:54      | What do you do next?                                                                                      |
| 41:55      | So after I export out of Lightroom, I then, so the images are now very, boring is the                     |
| 42:04      | wrong word, but they don't necessarily have my particular style. I have several [[Photoshop]]                 |
| 42:16      | actions that I have developed over the years, again, based off of other people's images                   |
| 42:23      | and actions that they have created. I then have gone in and tweaked everything and made                   |
| 42:28      | it exactly particular to how I like it. Instead of opening each image and applying those actions          |
| 42:37      | and then saving it into the edited file and moving on to the next one, that clearly is                    |
| 42:43      | not very doable with about 1,000 to 3,000 images because I usually will have about half                   |
| 42:54      | of the photos that I've taken are keepers. So in order to process this, I use the automation              |
| 43:03      | pieces that are built into [[Photoshop]]. So in [[Photoshop]], there's a thing called Automate                    |
| 43:10      | and then Batch. And I created an action that runs my particular looking actions, the colouring             |
| 43:20      | and whatnot. And then it also has a resize the images so that they're not the 5,000 pixels                |
| 43:32      | because nobody needs that. And it loads and places a watermark on the smaller images.                     |
| 43:42      | This watermark is specifically customised for each event so that my dance parents will                    |
| 43:51      | know that this really cool leap was taken at the extreme dance competition on this date                   |
| 43:59      | for this year for a very particular year. Again, I don't want to sit here, file, load,                    |
| 44:06      | image, place an image, etc. So my action that I created will pull active watermark. And the               |
| 44:17      | active watermark is the watermark that I have customised and resized and saved so that it                 |
| 44:24      | has the particular competition on it. And so I have the saved version of the original                     |
| 44:32      | file and then I save it again as active watermark. So this is constantly changing. So it pulls            |
| 44:38      | the right watermark for the right competition. And then in Batch, I can choose the action                 |
| 44:47      | that I want to run. And I choose the source folder. And then I can save those files in                    |
| 44:53      | the edited folder. And the edited folder is titled a space edits so that it runs to the                   |
| 45:03      | top of the folder. And I am able to click OK. And it runs. And I go off and I do something                |
| 45:12      | else. It just runs in [[Photoshop]] in the background. It will let me know if there's any errors.             |
| 45:17      | But I have cleaned it up so much that there are no errors. So I don't actually know how                   |
| 45:23      | long it takes because I'm not paying attention to it. And it just does what it needs to do.               |
| 45:30      | That sounds like a perfect automation to me. It does what it needs to do. And you go off                  |
| 45:34      | and you get a coffee or you do whatever it is that you need to do. And then you come                      |
| 45:37      | back and your computer has magically gone through and generated this whole pile of images                 |
| 45:41      | with your custom watermark on. I love it. Yes. It's great. And it lets me get                             |
| 45:47      | the images out within 24 hours of having taken them. I think that's another kind of automation            |
| 45:53      | hack as well. You've got this deadline that you've imposed upon yourself, you know, 24                    |
| 45:57      | hours. I mean, I'm sure if something crazy came up, you know, you'd be willing to let                     |
| 46:00      | it slide a little bit. But because you've got that 24 hours, you're really optimising                     |
| 46:05      | everything of how quickly can I get this done. And that's where the automation, you know,                 |
| 46:09      | really serves you because you have other things that you also need to do during that time                 |
| 46:14      | period. And so having, you know, [[Photoshop]] go through and add all these watermarks,                       |
| 46:19      | I mean, I think I would personally go insane if I had to put the watermark                                |
| 46:23      | on five photos consecutively, let alone a thousand. So, you know, it's smart to deal                      |
| 46:30      | with that just so that you can, you know, wander off and get a coffee or do any of the                    |
| 46:36      | probably 80 bajillion other things that need doing. Yes. Yes. There's lots of things to do.               |
| 46:42      | And I would much rather have the machines working to do the work than doing it myself.                    |
| 46:49      | I think this is a good automation example in the sense that we all have our limits, right?                |
| 46:56      | If you had to take three pictures every week and apply that process to them,                              |
| 47:01      | you probably would not have automated it, right? But instead, you've got hundreds or thousands and        |
| 47:07      | multiple times. And clearly, that hits the automation threshold for just about anybody.                   |
| 47:12      | It's like, I'm not going to sit and do all these filters to 400 images every week. You know,              |
| 47:17      | that'd be like a full-time job. And that's the decision all of us automators have to make.                |
| 47:22      | It's like, at what point do we hit that threshold? Yeah. And sometimes there's images that like,          |
| 47:31      | like I'm not perfect. So stuff is not always level. And I haven't figured out a way, well,                |
| 47:39      | the machine learning for like auto-fixing like the horizon lines is still not great.                      |
| 47:47      | And so that's something that I've just like passed on. I don't let that mess with me,                     |
| 47:56      | but I also make sure everyone knows, hey, if you want to print this out or do something with this         |
| 48:04      | other than just have it on your computer, let me know and I'll fix it. Yeah. But that's for later         |
| 48:11      | and only if somebody wants it. Because I setting those boundaries on myself and my mental sanity          |
| 48:20      | were way more important than making sure that the only images that go out are perfection.                 |
| 48:25      | Yeah. And I'm sure you'll get a bunch of people who'll probably be like, yeah, actually,                  |
| 48:29      | if you could just send me the file, then I can straighten that up myself because pretty much              |
| 48:35      | everybody has a program on their computer that can straighten images, you know,                           |
| 48:38      | where they can manually slide it around or they'd be happy with whatever machine learning there is.       |
| 48:42      | But by deferring that work until it's actually required, that's a productivity trick there.               |
| 48:50      | You know, don't do things that aren't actually needed. Yes. Because a lot of the time people              |
| 48:54      | will be just fine with it as it is, you know, they're just going to save it on their phone anyway.        |
| 48:59      | So they can show everybody else how well their precious darling is doing in dance. And I'm sure           |
| 49:04      | all of them are doing very well because, you know, they're in competitions. So that is great.             |
| 49:07      | Exactly. So they've all worked really hard. I'm very proud.                                               |
| 49:12      | I also think, though, that that is something that you could bring the Rosemary Orchard Automation         |
| 49:17      | Service to bear for you. Just like you could automate a process where like you email the full             |
| 49:24      | size image or put it in a shared folder very easily. So that that may be next level for you.              |
| 49:31      | Yeah. I will send out a request to that agency. And hopefully fingers crossed, she'll reply to me.        |
| 49:41      | Well, we'll have to see. We'll have to see. I mean, you know, we still need to make sure                  |
| 49:47      | that I get some time to sit down with you in your [[Stream Deck]], because I know you've been                 |
| 49:50      | playing with that. And you mentioned it before, are you using the [[Stream Deck]] with your photography       |
| 49:56      | workflow at all? Or are you still using keyboard and mouse for that pretty much?                          |
| 50:01      | Yeah, I'm still using keyboard and mouse for that, mainly because, partially because, again, I haven't    |
| 50:06      | had the time slash energy to sit and think about what I could use it for. But also, it's so easy          |
| 50:16      | to just click, click, click that and making sure that things go from the right folder to the right        |
| 50:24      | folder, et cetera. I'm sure there probably is a way. But yeah, I haven't had a chance to go through       |
| 50:32      | and tinker it together. One thing you could do with the [[Keyboard Maestro]], and I know you're               |
| 50:37      | already doing this on your Mac keyboard. But this is kind of an interesting thing. I process email        |
| 50:42      | often. I'm sorry, not [[Keyboard Maestro]] on the [[Stream Deck]]. But I process email with the stream            |
| 50:48      | deck where I've set buttons to move to certain folders or archive or delete. And since I have             |
| 50:57      | three primary accounts, I've got the personal Mac sparking the legal. I've got these buttons set up.      |
| 51:02      | So I've got like a little, like quick entry board on the [[Stream Deck]]. One of the buttons I use,           |
| 51:09      | and people may not think of this, is I've just put arrow keys on the [[Stream Deck]]. And it's just           |
| 51:17      | pressing the down arrow or the up arrow. So you can navigate quickly. Like I could see you going          |
| 51:22      | through when you do your initial review of your photos with a [[Stream Deck]], you could put the              |
| 51:28      | navigation keys, the P key, and whatever other keys you use. And you can zip through them using           |
| 51:35      | the [[Stream Deck]]. Yeah, that's actually a really good idea. Or would it be possible you could combine      |
| 51:41      | the P and the arrow key as well. So that yeah, like it would take you to the next photo. And so           |
| 51:47      | then you just have two buttons. And so you press either the flag and next or next. And that's it.         |
| 51:53      | Okay. And then it does. Thank you. Next. Thank you. There we go. I'm just going to double check           |
| 52:01      | right now here live on air. Because there's so I think if you're doing this natively in the stream        |
| 52:08      | deck software, your P and next action or button is going to be a multi action. And then inside of         |
| 52:17      | that you you have two hotkeys one where you do P. And then one where you do do the the the next.          |
| 52:27      | So you just press P. Yeah. And then you add another for for right arrow. There we go. And so              |
| 52:33      | that's a multi action. And then the other one can just be a right arrow. And then you can get fancy       |
| 52:39      | because I know you're good at this stuff and make them into really pretty icons. I am very lazy. And      |
| 52:45      | I just use [[Stephen Millard\|Stephen Millard's]] excellent [[SF Symbol Icon Generator\|Stream Deck icon generation with Shortcuts]]. So you know that        |
| 52:54      | works for me. And actually I have a back button in the bottom right hand corner of all of my              |
| 52:59      | [[Stream Deck]] profiles which takes me back to my main action. But there we go. So we've officially          |
| 53:05      | helped you live on air. Everybody can always have it. And then you can add another button that you        |
| 53:12      | know every time you press it your computer just says something like kabam. You know just to make          |
| 53:18      | you feel good. Well this was a little discussion we were having before the show. What do unicorns         |
| 53:23      | sound like? Because if you could have like it make a unicorn sound when it finishes doing your            |
| 53:29      | automation for watermarking that would be amazing. But what would the unicorn sound like?                 |
| 53:35      | Sparkles. That's a good one. Good answer. I'm going deeper down this because now as I think               |
| 53:43      | about it you could also apply a tag with a [[Stream Deck]]. So you press a button to apply the tag and        |
| 53:49      | then haze on the background auto files it. We're going to automate you Kathy. I love it. We're            |
| 53:55      | going to get this done. I am here for it. Yes. Especially because as COVID starts to recede               |
| 54:04      | we will have more competitions and I'm very excited. Yes. This is both a great thing because it means     |
| 54:10      | that Avi is going to get to participate in more things but it's also more work for you.                   |
| 54:16      | So let's temper the excitement of yay more competitions with and more automations to make                 |
| 54:22      | the more work not as much more work as it could be. As we're thinking this through Rose now let's         |
| 54:27      | think about the next step where she goes into [[Photoshop]] and applies the filter. I don't know              |
| 54:31      | that that really needs a stream back because that's you do it once manually and then you apply to all     |
| 54:36      | right. I mean there's not a whole lot to do there with a stream back. Yeah because it I am selecting      |
| 54:42      | the the folder to pull it from and selecting the folder to send it to you and then it's done. So it       |
| 54:50      | usually takes 10 seconds. Are you using default folder X at all to help with this?                        |
| 54:57      | I don't know what that is so that would be okay. So default folder X is a is a very useful tool           |
| 55:04      | for automation on macOS in that basically it allows you to set default save folders for                   |
| 55:10      | applications but one of the other things it does which is honestly pretty much what I use it for          |
| 55:16      | about 98% of the time is when you get that open file dialogue or one of these select a folder             |
| 55:23      | dialogues then you can mouse over any open finder window and click on it and it just selects that for     |
| 55:31      | you. And so both of those options might potentially be useful for you there because I'm guessing you      |
| 55:40      | probably you know have the folders open and finder anyway at some point. So if you use something like     |
| 55:46      | [[Moom]] to rearrange them on your screen and then you can just click click done and the magic happens.       |
| 55:53      | Although it will have the default in that working sessions already. Yeah so changing                      |
| 56:07      | like whatever the active window is may end up being more work than                                        |
| 56:13      | clicking through but that's something to look at for sure. Well it's a worthy application for             |
| 56:21      | automation in that it does a very small amount of things and it does them very well and as we all         |
| 56:28      | know automation tools they're the big ones like [[Keyboard Maestro]] that can do 8,000 things and             |
| 56:34      | are amazing at them and then there's little ones like [[Moom]] or default folder X which do                   |
| 56:40      | one thing but they do it really well and that's you know both all of those tools are worthy of this.      |
| 56:48      | I don't think we've ever covered default folder X on this show and additional automation things           |
| 56:54      | you can do that like Kathy you would find very useful is every time you save a file it just               |
| 57:00      | gives you additional options like you can have a list of favourite folders and the recent folders          |
| 57:05      | you've been working in and just it just takes a lot of tedium out of saving files and you can             |
| 57:10      | apply tags right there I mean I know you can also do that in the default save dialog box but              |
| 57:16      | it does a does a real good job another thing I like about default folder X is it's been around            |
| 57:22      | forever I mean the reason it's called default folder X I believe it was on Mac I was on Mac OS            |
| 57:30      | before there was Mac OS 10 and I think I mean I can't remember if it came from next or it came from       |
| 57:36      | prior I think it came from prior Mac OS and they've just done a great job of keeping it up and            |
| 57:44      | modernise it the UI looks completely current looks like an app that was designed a week ago if            |
| 57:50      | you look at the UI they have it just like stuck around and but but even just I find it very useful        |
| 57:56      | when I'm saving and working with a lot of documents and when I think about your client work for instance  |
| 58:01      | you could have a lot of your client folders saved as favourite folders so every time you want to save      |
| 58:07      | something to a client folder you could just click a favourite instead of having to drill through your      |
| 58:12      | file system to get to it yeah it also has a recent folders as an option and for people                    |
| 58:18      | looking at the show notes there's two links to default folder X there one of them is on the               |
| 58:22      | Sinclair software website the other one is in setup so if you already pay for setup you get it free       |
| 58:28      | so uh you know it's worth giving it a try if you can get it for free right                                |
| 58:33      | this episode of the automators is brought to you by forward networks go to forward networks.com           |
| 58:38      |/automators and learn all about their network modeling software and request a demo today             |
| 58:44      | forward networks reduces business risk by revolutionising the way large networks are                      |
| 58:48      | managed how well their advanced software delivers a digital twin of the network which is a completely     |
| 58:55      | accurate mathematical model in software the model serves as a single source of truth for the network      |
| 59:01      | so users can verify that the network is configured correctly is in compliance with policies and is        |
| 59:07      | behaving exactly as they intended forward enterprise can accurately predict the impact of a proposed      |
| 59:13      | change across every possible traffic path so network operators can roll out changes with confidence       |
| 59:20      | all while the network stays secure and reliable it really is an invaluable tool for your company          |
| 59:26      | fortune 500 companies and large public sector organisations are turning to mathematical models            |
| 59:31      | of the network forward networks have customers such as PayPal horizon and Goldman Sachs along             |
| 59:37      | with several large governmental agencies it was founded in 2013 by four standard PhD graduates            |
| 59:44      | who felt empathy for network operators and no securities top of mind for IT professionals                 |
| 59:49      | and business leaders and sought to apply principles of modern software development to the network         |
| 59:55      | you can request a demo today at forward networks.com/automators that's forward networks.com         |
| 01:00:03   |/automators go there now check it out forward networks.com/automators are thanks to            |
| 01:00:09   | forward networks for their support of the automators podcast and all of Relay FM.                         |
| 01:00:15   | So Kathy I'm guessing while you're doing these things you're not going to be sitting in silence           |
| 01:00:19   | and I may or may not have already looked at the show notes you know preparing for the podcast             |
| 01:00:24   | and I know that you have some magic to deal with music playlists so you know other than sitting           |
| 01:00:32   | there in silence there's there's options like music you know how do you do this what what what            |
| 01:00:37   | magic do you have for music. Yeah so this is specifically for when I'm out and about or                   |
| 01:00:46   | walking the dog or taking a shower and I have my phone with me I listen to music very specifically        |
| 01:00:56   | in that I will usually make playlists out of albums so that I can not listen to if there's                |
| 01:01:03   | any songs in an album that I don't want to listen to I don't have to have it in the playlist              |
| 01:01:10   | or if I want to listen to say both of Taylor Swift's folklore and evermore albums together                |
| 01:01:18   | I have a playlist with that and I was very disappointed and still am with the the [[Apple Music]]                  |
| 01:01:27   | widget items I want like recent stuff to be playlist and they but they don't have that as           |
| 01:01:38   | an option you have like specific albums but not the playlist to choose from and so I was                  |
| 01:01:46   | really really angry because it would keep showing like the Christmas album I listened to                  |
| 01:01:54   | and it's February and I'm like this is not this is not what I want and so I created my very first         |
| 01:02:02   | shortcut and I'm very proud of myself and [[Matthew Cassinelli]] was very proud of me too and that's          |
| 01:02:10   | really what matters but basically I have icons on my screen that show like an image from either music     |
| 01:02:23   | video or album or something for four specific items the one that we use most often is the                 |
| 01:02:30   | Hamilton soundtrack and it is on shuffle as well because when Avi and I are in the car                    |
| 01:02:40   | that is what we're listening to and it's always entertaining and fun to see what shuffle options          |
| 01:02:46   | are around but instead of having to ask Siri to play this playlist on shuffle we can just tap             |
| 01:02:54   | the picture on the home screen and poof it's magic I love that so have you have you got                   |
| 01:03:02   | Carplay or Bluetooth or something in your car where you could connect that to an automation               |
| 01:03:07   | so that when you pop when you get in your car it will just automatically do that for you                  |
| 01:03:12   | or is that maybe not an option yet um yes I have a Bluetooth connection thing in my car                   |
| 01:03:19   | because the only Bluetooth that it has is for a phone um because it's an older vehicle um but             |
| 01:03:27   | I don't necessarily want an automation in that because it's going to be different depending               |
| 01:03:33   | on why I'm going especially because we don't go a lot of places we don't go a lot do a lot of             |
| 01:03:40   | things um so it's a 50 50 chance on whether I want to listen to a podcast that I'm playing                |
| 01:03:48   | or the music with Avi mm-hmm yeah because uh the Bluetooth automation so I'm using this in                |
| 01:03:54   | my car as well and I've got um I've got I've got a cable in my car uh for this so it's actually           |
| 01:04:00   | it plugs in it plugs into uh the the charger that I put into the cigarette lighter my car is 10           |
| 01:04:05   | years old people it's okay um and then plugs from there into the aux port um and so this this means       |
| 01:04:11   | that when I turn the car on then theoretically the Bluetooth turns on however when you turn the car       |
| 01:04:15   | on that turns on the electrics including this charger um and the or the Bluetooth adapter                 |
| 01:04:21   | and then um when I actually turn on the engine it briefly turns off the electrics and then                |
| 01:04:27   | turns everything back on again uh so I get two pop-ups on my phone for the Bluetooth um notification      |
| 01:04:33   | there um to say would you like to run your automation which drives me more than a little bit              |
| 01:04:38   | insane um but uh it means that I get two opportunities to hit the button uh and run my                    |
| 01:04:44   | my car automation and like you I might listen to different things in the car so I have it show me a       |
| 01:04:49   | menu um of things so that then I can just go yeah this one or that one um I actually also                 |
| 01:04:55   | have another one which says nothing um and then that exits the shortcut um because it does a couple       |
| 01:05:01   | of other things as well um after choosing the music and so me tapping away from the menu will then        |
| 01:05:07   | make the rest of the shortcut not run and that's the bit that automatically sends a message to            |
| 01:05:11   | my parents if I'm going to be driving there or something like that so I like to uh make sure              |
| 01:05:15   | that that actually runs because otherwise I turn up at my parents place and they go                       |
| 01:05:19   | huh we didn't know you were coming it's like thanks lovely to see you too it's always good                |
| 01:05:24   | to feel welcome no my parents always like seeing me but I like to give them a heads up just so            |
| 01:05:30   | they've got 10 minutes notice um that you know I'm turning off because having somebody turn up on         |
| 01:05:35   | your doorstep unexpectedly can be nice uh but having it happen repeatedly can be                          |
| 01:05:39   | absolutely aggravating so I make sure to uh give them a heads up there um and I do this with the          |
| 01:05:44   | automation because Bluetooth automations can from shortcuts cannot run entirely automatically when        |
| 01:05:49   | you connect to a Bluetooth device the best it can do is show you a notification on your home screen       |
| 01:05:54   | to run something um but then you know if you're going to tap your home screen anyway then you can         |
| 01:05:59   | give yourself a menu and uh tap your home screen twice love it so Kathy as someone who doesn't            |
| 01:06:05   | spend a lot of time in shortcuts how did you find the experience of creating your in shortcut             |
| 01:06:09   | did did you use somebody else's or did you you build it from scratch I actually built it from             |
| 01:06:15   | scratch um which I'm very proud of myself um but it was fairly easy because it's it doesn't do a          |
| 01:06:26   | whole lot um so being able to go in and say you know play so I picked the music to play                   |
| 01:06:34   | and then you choose the playlist and done and then the the most complicated part was adding it to the     |
| 01:06:41   | home screen because I had to pick the perfect picture for it on the home screen um but other              |
| 01:06:49   | than that pretty easy uh nice and simple um use shortcuts it's great most important automation            |
| 01:06:59   | question of this entire show all right yes what is your favourite Hamilton track oh gosh                   |
| 01:07:07   | that is so rude how dare you sir um because there's no such thing as a favourite Hamilton track um         |
| 01:07:16   | we really enjoy singing along to Aaron Burser um and also uh satisfied and then of course any of          |
| 01:07:31   | King George is of course just delightful but because we've listened to it so many times um we             |
| 01:07:40   | sing full volume to every song that's playing so all of them is my final answer I I was just              |
| 01:07:48   | listening to it over the weekend the reason I asked and man I really like Farmer Refuted I know it's     |
| 01:07:53   | just a little like side little ditty in the musical but I just love the way that song is                  |
| 01:07:58   | structured it's so fun it's just yeah that's one of the best the best ones I'm guessing now is not        |
| 01:08:05   | a good time to tell the two of you though I've still not had a chance to actually watch it on             |
| 01:08:09   | Disney plus so I think I'm probably going to be given homework now to do that I literally drug            |
| 01:08:13   | you to the live performance of you did and I loved it it was great I show it in Chicago I think with      |
| 01:08:20   | you um I say with you it was one of those things where I got a last minute seat and you also had          |
| 01:08:25   | a last minute seat um and so we were sitting in two completely different places but you know we're        |
| 01:08:29   | in the same audience it was all good that's so fun all right I want to touch you Kathy we talked          |
| 01:08:35   | earlier about the the monster unicorn that is so on it and I know one of the things you do is text        |
| 01:08:42   | automation and primarily TextExpander I believe yes that's correct and they might be a sponsor of        |
| 01:08:50   | the show I'm not really clear yet I think smile sponsoring I don't know what product they're              |
| 01:08:53   | sponsoring but this is has nothing to do with that but I would like to hear how you're using it to        |
| 01:08:59   | to get your work done yeah so this is the perfect time for it because I don't know if you know            |
| 01:09:04   | but we are in the middle of tax season here in the United States today is tax day as we're recording      |
| 01:09:11   | this and one of my clients is a CPA and so I a lot of the work that I do for them is                      |
| 01:09:21   | client facing so the client communications are a big part of what I manage I just ran my report           |
| 01:09:30   | for the last month for a TextExpander and I saved 10 hours and 15 minutes in the last                    |
| 01:09:38   | month that's crazy working day and a quarter that is yeah incredible                                      |
| 01:09:45   | and so I'm using this to populate the messages that says hey we're done with your return this is          |
| 01:09:55   | how much you owe or this is how much your refund is and these are the next steps we need from you         |
| 01:10:00   | we always have to get a signature of course from them and so this letter that gets populated              |
| 01:10:07   | is in that signature form sent through the Docusign so it tells them where they can send their           |
| 01:10:15   | money to pay or if they want us to debit it they can let us know here's what you owe for estimated        |
| 01:10:22   | taxes or not and and all of that is just automatically input years ago I used to copy it from I had       |
| 01:10:32   | Evernote documents that I would click over command a command s or not command s command c then go         |
| 01:10:43   | back over command v and like copy and paste it from there and it's so much easier to just type            |
| 01:10:50   | the letters that I need to do it for but this also I am like the files that I'm sending get               |
| 01:11:01   | downloaded from the software that we use and the naming is very generic so I have to                      |
| 01:11:08   | change the name so that it's very specific to what this particular document is                            |
| 01:11:15   | is I also utilise it for any time somebody says hey I want yeah I'm interested in your                    |
| 01:11:24   | tax services I have a TextExpander that tells them what we're all about and where to sign up             |
| 01:11:32   | for an intro call etc so it's so helpful for every piece of this that I could not live without            |
| 01:11:44   | my tax expander snippets how are you renaming files sorry that that was the little bit that caught        |
| 01:11:50   | my attention there you know you said you know the software gets that you very generic file names and      |
| 01:11:55   | I have to admit generic file names are the bane of my existence especially for documents where            |
| 01:12:00   | for whatever reason the content just doesn't get you know parsed by spotlight and so therefore            |
| 01:12:05   | it's not searchable so how are you renaming documents right now yeah so when the file the                 |
| 01:12:12   | file comes down and it's just saved with their name right so it's you know smith comma john               |
| 01:12:19   | dot pdf so I have a TextExpander snippet that adds a space line space and then 2020 return               |
| 01:12:28   | so I click into the file name and hit the TextExpander so it fills it out fully and then we              |
| 01:12:35   | have the signature page that's also saved and so I copy the name that I just text expanded                |
| 01:12:42   | that has the full name and 2020 return and I save it into the other file and then I have a second         |
| 01:12:50   | TextExpander snippet that just says signatures and so I highlight the word return and do the        |
| 01:12:59   | TextExpander snippet so that it changes return to signatures and so I now have two files that                 |
| 01:13:07   | are named exactly what I needed to name it so that I can upload it to the client vault                    |
| 01:13:13   | not to bash on TextExpander here because that that's not what I'm doing but I wonder if maybe            |
| 01:13:19   | you might be slightly more efficient with any an automated droplet for this because then you              |
| 01:13:24   | could just drag and drop the file onto a thing and it would say hey so this is now called 2020            |
| 01:13:31   | returns or 2021 returns or whatever it is and then you drag the next file onto the next one               |
| 01:13:38   | and it takes maybe what's on your clipboard and then replaces the text and then renames the file          |
| 01:13:46   | to that just wondering I'm thinking out loud here of course you know I may I may be going totally         |
| 01:13:53   | off-piste but I'm just thinking how how can I potentially optimise the unicorn's workflow                 |
| 01:13:59   | and that is one of the things that I would be exploring for that for sure of course [[Hazel]]                 |
| 01:14:05   | could definitely do this as well it could say hey you know any file that was downloaded from              |
| 01:14:10   | this website you know rename it like this maybe you would want to use the tag trick again which           |
| 01:14:17   | says you know maybe just have a tag which says [[Hazel]] make magic happen or something and then              |
| 01:14:23   | you can tag files that appear in in whatever folder with that and then it looks for specific              |
| 01:14:27   | folders and then looks for anything with that tag so that it knows what to do because of course it        |
| 01:14:31   | can look at the contents of the file and this is all done locally on your machine so you don't need       |
| 01:14:35   | to worry about you know data being leaked across the internet which is you know related to client         |
| 01:14:40   | files right right the one concerning thing I have with that is the difference of like volume              |
| 01:14:50   | because um uh there's some days that I'll be doing you know 30 returns                                    |
| 01:14:58   | and how I don't know how that would interact with [[Hazel]] and like if I'm sitting and I'm doing you         |
| 01:15:08   | know a period of time for like multiple I would I have no doubt that it would work yeah it just           |
| 01:15:18   | is very concerning yes it's one of those things where if you automate it incorrectly you're going         |
| 01:15:24   | to be worried about you know it stuff is going to go wrong and it could go potentially very wrong         |
| 01:15:28   | and you could have um you know John Smith's information attached to Jane Doe's signature                  |
| 01:15:33   | form or something like that exactly and um I don't know if you know this but sending somebody             |
| 01:15:38   | the wrong tax documents I'm going to assume it's a bad thing uh you don't want to yeah yeah exactly       |
| 01:15:44   | yes yeah I mean yeah that is always the thing which is why I would probably personally be                 |
| 01:15:50   | looking at something like the automated droplet uh for this because then you drag you know your           |
| 01:15:55   | files onto that and it looks at that information and you know and and then it does those two files        |
| 01:16:01   | so it does John Smith's files um and you've seen them before you did the dragging so you know that        |
| 01:16:05   | they're John Smith's files and then you do Jane Doe's files and repeat and so on so you know you're       |
| 01:16:10   | still potentially going to be handling say 15 people um but then you just throw two files at it           |
| 01:16:16   | and it goes boom and and here here's the renamed files for you yes which would be I will uh add that      |
| 01:16:22   | to the list of uh things to discuss with the Rose agency well it's okay you're giving me homework         |
| 01:16:30   | too I have to watch Hamilton on Disney Plus now oh you poor thing I know it's so tragic I'm very          |
| 01:16:36   | upset one thing you talked about Kathy that struck my um that made me curious is the idea of copying      |
| 01:16:45   | and pasting and this removes that are are you using the um the paste buffer field in Texas                |
| 01:16:51   | Spender using a clipboard that's a no because I don't know what that is sure like one of the              |
| 01:16:58   | things you can do with Texas Spender and I think this might be helpful for you is um you can take         |
| 01:17:04   | the contents of the clipboard and paste them into a snippet as an example like I have um                  |
| 01:17:12   | one of my clients deals with a lot of government contracts and I have to send out these um legal          |
| 01:17:17   | documents related to those and the numbers are really long and I don't ever want to get one of            |
| 01:17:23   | them wrong so um what I did is I made a Texas Spender snippet and it as part of the Texas                 |
| 01:17:29   | Spender snippet if you look up in the toolbar in Texas Spender you can paste the contents of the          |
| 01:17:34   | clipboard so then before I use the snippet I just go to the source document and I copy the contract       |
| 01:17:41   | number and then I go ahead and put this put the snippet in my document and it paste the content           |
| 01:17:47   | so I don't have to copy and paste into the snippet if that makes sense kind of make sense um make a       |
| 01:17:58   | note of that Rose to review absolutely absolutely all I'm saying is that the snippet can automatically    |
| 01:18:05   | hit command v for you it's really good so like you can have you know in my case it's a government         |
| 01:18:12   | contract number and then I put a little token in the snippet that the Texas Spender has that hits         |
| 01:18:20   | command v and paste whatever is in the buffer and then finishes the snippet and I find that very          |
| 01:18:25   | useful another one another one that I use with Texas Spender for sending emails out to clients            |
| 01:18:31   | it sounds like you're doing that is you can hard code the tab key into the snippet so you could           |
| 01:18:38   | make a snippet that you trigger in the subject line so it could fill in the subject line of the           |
| 01:18:45   | email and then hit the tab key and then every email client what does the tab key do goes to the next      |
| 01:18:51   | field jumps to the body jumps to the body so if you trigger the snippet in the subject line               |
| 01:18:57   | it fills in the subject line and hits the tab key and then does the rest of the email for you so          |
| 01:19:02   | you don't have to do two snippets that's very cool the other thing that you could do I'm guessing         |
| 01:19:07   | you've written 2020 or 2021 the correct year in in your snippets the other thing you can do of course     |
| 01:19:15   | is Texas Spender has date snippets where you can just have it input the year either the current           |
| 01:19:21   | year or you could calculate back to the previous year which means that you know next year your            |
| 01:19:26   | snippets will be exactly the same you don't need to go in and change them but it'll just you know         |
| 01:19:31   | have the right year in magically and I have to say date snippets are one of the things I do love          |
| 01:19:37   | using the Texas Spender it works incredibly well for them I love uh specifically the the current dates um |
| 01:19:45   | a few other projects I I do I have like if I'm sending money to somebody and I have a spreadsheet         |
| 01:19:54   | that has the the the amount that I have to do and then there's the date sent field being able to just     |
| 01:20:01   | put in you know the snippet that I have for the number date and then I have for another spreadsheet       |
| 01:20:09   | like when I'm sending out invoices um it's the longer version so it has the word date in it um            |
| 01:20:18   | and so I just mentally those little snippets so I don't even have to think about the date anymore         |
| 01:20:23   | which is really great because what is time nobody knows what time is anymore no especially                |
| 01:20:27   | isn't it like March sometime I don't even know anymore I'm so used yeah it's always March yeah            |
| 01:20:33   | it's always been March for well over a year now and I'm I'm fine with that mostly yes                     |
| 01:20:40   | it's been March so long that it was March again and now it's March no longer                              |
| 01:20:45   | yeah that's it's heartbreaking is what that is yes but the good news is is the world is improving         |
| 01:20:52   | and our automations are improving along with it so uh I'm hoping that uh I've certainly stolen a          |
| 01:20:58   | couple of ideas from you so far Kathy I've got quite a few things um and I've also got many ideas         |
| 01:21:04   | running around to my brain I mean it's there is kind of like a cheerleading squad they're all             |
| 01:21:08   | competing to get to the top of the pyramid um so uh I'm hoping that uh at least one of those              |
| 01:21:13   | is going to make it and then I can get that's what Kathy needs and I can send it to you                   |
| 01:21:17   | I love it I'm so excited so excited I do feel like Kathy though you you know you've you figured           |
| 01:21:25   | out TextExpander and I think that's kind of the gateway drug of all this and then the next step          |
| 01:21:31   | after that is [[Hazel]] I feel like with all the file work you do if you spend a couple hours learning        |
| 01:21:38   | how [[Hazel]] works um it will change your game it will change your game yeah I'm I'm really I'm              |
| 01:21:44   | really excited uh to see how it can make me even more magical there you go there unicorns all use         |
| 01:21:52   | [[Hazel]] so you need to get on that train I'm on it I'm on it I uh clearly I'm not going to search           |
| 01:21:59   | for it now because I have a clicky keyboard that will make poor jam have to edit things out and I         |
| 01:22:07   | don't want to do that but it's on the list as soon as I tackle the seven [[Slack]] messages the 21 emails     |
| 01:22:14   | the four uh text messages and the three Facebook messenger messages too all right so Kathy where          |
| 01:22:22   | do people find you on the internet yeah you can find me uh any social media you will find me at           |
| 01:22:29   | mrs.soup um you can also go to kathycampbell.com which will take you out to links to all of the             |
| 01:22:35   | podcasts and businesses that I do or if you need more unicorn magic in your life for your specific        |
| 01:22:43   | business uh you can find me at theunicornsidekick.com let me tell you about another show on Relay FM      |
| 01:22:50   | Rocket if you like automators there's a good chance you'll like Rocket as well Rocket covers all the      |
| 01:22:55   | hard tech news of the week but in a fun way from the latest [[Apple]] news to scams with fake blood           |
| 01:22:59   | testing companies Rocket is there and you can be too at relay.fm slash rocket or search for Rocket        |
| 01:23:07   | wherever you get your podcasts in the meantime if you're looking for our forums you can find those        |
| 01:23:11   | at talk.relay.fm and of course there'll be a link to the show notes there as well goodbye everyone        |
