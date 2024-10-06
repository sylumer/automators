---
status: "incomplete"
fc-date:
  year: 2023
  month: 09
  day: 23
fc-category: "podcast"
podcast: "Automators"
published: 2023-09-23
duration: 5042
formattedduration: "01:24:02"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/137"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators137.mp3"
episode: 137
title: "137: iOS 17 and New Devices"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, David and Rosemary do a recap of what's new in iOS 17 and iPadOS17, as well as on the new iPhones.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- *Episode 137 discussion topic was not automatically created on the forum.*

# Sponsors
- [[Vitally (Sponsor)|Vitally]] - A new era for customer success productivity.
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[HelloFresh (Sponsor)|HelloFresh]] - Use code `automators10` for ten free meals with free shipping.

# Show Notes
- [Customise the iPhone Action button - 9to5Mac](https://9to5mac.com/2023/09/13/customise-the-iphone-action-button/)
- [What’s new in Shortcuts for iOS 17, iPadOS 17, macOS 14, and watchOS 10 - Apple Support](https://support.apple.com/en-us/HT213909)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the podcast where we talk about taking your tech and making            |
| 00:06      | it stand up, walk around and do everything that you want it to, or at least as close                     |
| 00:10      | as we can get to that.                                                                                   |
| 00:12      | I'm Rosemary Orchard and I'm joined as always by my pal and co-host David Sparks.                         |
| 00:16      | How are you today, David?                                                                                |
| 00:17      | I'm doing great, Rose.                                                                                   |
| 00:19      | Very excited as this show drops, we are getting the iOS 17 and I believe iPadOS 17 releases              |
| 00:28      | out the door for everybody, and that's pretty, I think [[Apple]] kind of got on top of it this               |
| 00:34      | year.                                                                                                    |
| 00:35      | They got the iPad went out the same day as the iPhone and the Mac isn't far behind,                      |
| 00:40      | so I'm really looking forward today to talking about some of the new automation tricks and               |
| 00:45      | toys that everybody got, but we got a lot going on.                                                      |
| 00:48      | Yeah, we do, and it's quite exciting because some of the things that they wrote out, obviously           |
| 00:53      | you know, there's just shiny new hardware and it's titanium and things like that, and                    |
| 00:57      | I'm sure you'll be talking about that with Steven Hackett on Mac Power users, but the                    |
| 01:02      | automation possibilities brought by new hardware are actually really exciting.                           |
| 01:10      | I'm also very excited to see how some of the things from Vision Pro are clearly making                   |
| 01:15      | their way into other software, so that pinching your finger and thumb together to do things              |
| 01:21      | on your [[Apple Watch]].                                                                                     |
| 01:22      | I've heard that there isn't an API for this, that this is only available to first-party                  |
| 01:28      | apps like the native timer app rather than, say, a timer-y, but I still think that that's                |
| 01:34      | going to be pretty awesome, and I'm very excited to see what I'm going to be able to do with             |
| 01:37      | shortcuts with that because, yeah, just tapping my finger and thumb together to run a shortcut,          |
| 01:43      | that could be pretty cool, so yeah, well, I guess I'll have to wait and see on that,                     |
| 01:46      | but I might have already bought my new [[Apple Watch]], David.                                               |
| 01:50      | Yeah, you need the new [[Apple Watch]] with the neural engine on the chip to do that, so if                  |
| 01:55      | you've got an older one, it's not going to work yet, but you know how it goes.                           |
| 01:59      | Once they add this to the stack, it's just a question of time until you get an update                    |
| 02:03      | in a year or two, and then you've got that feature too, but it is totally in my mind                     |
| 02:08      | training us to use the Vision Pro.                                                                       |
| 02:10      | In fact, one of the comments I made on Mac Power users is that I feel like Vision Pro                    |
| 02:15      | was more present in that presentation than I expected, that they're making all sorts                     |
| 02:21      | of hints to it.                                                                                          |
| 02:22      | The whole thing with the camera shooting spatial video, I did not expect that this year, and             |
| 02:28      | that's cool, but the big automation story for me out of the hardware is that we got                      |
| 02:34      | an action button on the iPhone, and so far, that's been a thing that Ultra Watch owners                  |
| 02:41      | have been playing with, but I feel like it's so much more on an iPhone.                                  |
| 02:46      | Yes, yeah, so I think we're going to talk about the hardware updates, and it's going                     |
| 02:53      | to combine with our upgrades, because I've actually, don't get me wrong, folks, I love                   |
| 02:58      | the Ultra, but the Ultra is literally wider than my wrist, so as much as I love having                   |
| 03:04      | that action button, I've been assessing for the last couple of months, how often do I                    |
| 03:08      | actually use this. I took a leaf out of my own automation book, and I created a log in                   |
| 03:13      | [[Data Jar]] so that every time I ran the action button, it would try and log it into [[Data Jar]]                 |
| 03:20      | so that I'd have some information, so I could see exactly how often I was running it.                    |
| 03:25      | Okay, so just to interrupt, so people are going to listen to that and say, well, how                     |
| 03:29      | did she do that? I'm guessing you're just doing an X plus one kind of thing to the                       |
| 03:34      | [[Data Jar]]?                                                                                                 |
| 03:35      | Yeah, so I actually decided to just add to list, so I was just adding the current date                   |
| 03:41      | and time into the list every time, just because that way I could see how often I was using               |
| 03:44      | it and so on, and then I've been, you know, one of the things I wanted to experiment with,               |
| 03:50      | but didn't get around to yet, was also tying it into logger for shortcuts so that I could                |
| 03:54      | see exactly what it was running, give myself some more data, but I wasn't using logger                   |
| 04:00      | for it at that point, because yeah, I kind of wanted to try and keep it fast, but there                  |
| 04:04      | were kind of two problems with the Ultra button. Number one, or the action button on the Ultra.          |
| 04:10      | Number one, it's fun to press. Seems like it shouldn't be a problem, but yeah, I like                    |
| 04:16      | fidget spinners and things like that. I don't necessarily use fidget spinners, but you know,             |
| 04:20      | things like a ring on my finger or something will definitely be used as a fidget spinner.                |
| 04:24      | A button on the side of my watch that is big and orange and easy to press, definitely                    |
| 04:29      | fidget spinner worthy. So I found myself pressing it for fun.                                            |
| 04:32      | So I could see you making like a little shortcut that plays that little, kind of that little             |
| 04:37      | fart sound on the Mac that.                                                                              |
| 04:39      | Well, I mean, I didn't have it making any sound because I was trying to use it for productive            |
| 04:42      | purposes like, hey, if I'm like in my fitness mode, then start a workout and things like                 |
| 04:47      | that. But there were a couple of problems. Number one, it's slow to run. I'm hoping that                 |
| 04:53      | on the iPhone, it's going to be a lot faster to run. And number two, I just realised that                |
| 04:59      | if I have my focus modes automatically changed to an appropriate watch face, and that watch              |
| 05:04      | face has got a complication that will let me run like the shortcut I need or do the action               |
| 05:08      | that I need, then what I'm currently using the action button for on my watch is going                    |
| 05:14      | to be mostly redundant. And so I've been working on curating, you know, my watch faces and               |
| 05:20      | things like that and seeing, you know, whether or not I could get away with it. And so I've              |
| 05:24      | ordered a pink series nine. I've never, I've never gone for a coloured watch before, David.               |
| 05:28      | This is a whole new thing for me. But I'm getting a pink series nine with a mulberry                     |
| 05:34      | sport band because, yeah, as much as I love the action button or the idea of the action                  |
| 05:40      | button, I find I found myself not using it as much as I thought I would or hoped I would.                |
| 05:45      | And the performance just wasn't there. However, I feel like on the iPhone, a, we're going                |
| 05:51      | to have like all of the shortcuts actions that we have in shortcuts instead of that limited              |
| 05:54      | subset that work on the [[Apple Watch]] because you've installed the apps on the [[Apple Watch]]                 |
| 05:58      | and so on and so forth. And, and be, you know, we've just got a whole lot more power. I mean,            |
| 06:02      | there's a 17 processor in the iPhone pro. So I feel like it's going to be able to do some                |
| 06:07      | pretty cool stuff. And I'm hoping that the action button will unlock some new things for me there.       |
| 06:14      | Yeah. And I agree with you that it opens a lot more possibility on the iPhone. I heard from a            |
| 06:21      | lot of MacSparky listeners and lab members with small risks that really wanted the ultra to get         |
| 06:27      | smaller this year and they didn't. And I'm sure that's on the [[Apple|Apple's]] list, but I, I appreciate          |
| 06:33      | what you're saying because I love my ultra watch and I would not give it up. I'm going to,               |
| 06:38      | I'm not going to update it. I think that the new one is cool, but I don't need to,                       |
| 06:41      | to buy a new ultra watch every year. But the, but I do think that the action button                      |
| 06:48      | landing on the phone gives us a lot of possibilities. And I really like the idea                         |
| 06:52      | of focus modes as a context for that button. You know, you and I talked about that last year             |
| 07:00      | in relation to the watch, but I think that lands even harder on an iPhone.                               |
| 07:06      | Yeah. Yeah. And I think in particular, you know, they're taking away the mute switch,                    |
| 07:11      | which a lot of people are understandably a little bit concerned about because, you know, I,              |
| 07:15      | I need to be able to mute my phone. Well, you'll still be able to use the                                |
| 07:19      | action button by default. It will actually mute your phone. But you'll actually,                         |
| 07:25      | by the looks of it, be able to do that using a focus mode, which is really nice. So your focus           |
| 07:30      | mode will actually be able to turn on and off silent mode on your device, which is just great.           |
| 07:36      | You know, so that even if you've had your phone in, you know, like making noise mode,                    |
| 07:41      | and then you go into, you know, your, your ultra lock down get work done mode,                            |
| 07:45      | then it will just go into silent and that will be it. Unless, of course, you choose to turn it           |
| 07:49      | off. And I'm sure we'll also be able to control this in the control centre and so on. And I've           |
| 07:54      | already spotted there is a shortcut section for this. So we're not going to have a shortage of ways      |
| 07:58      | to turn on and off silent mode on our devices. But I feel like being able to jump straight               |
| 08:04      | into the camera and things like that, that is going to be really great for a lot of people.              |
| 08:10      | You know, my, my dad still hasn't quite figured out that if he's on the lock screen, or he just          |
| 08:17      | swipes down to notifications on his phone, and then swipes right, he can get into the camera.            |
| 08:21      | And so every time he wants to access the camera, he'll like, wake up his phone, unlock it,               |
| 08:26      | swipe out of whatever app that he's using, possibly use the app switcher to force close                  |
| 08:29      | the app, which I keep telling him he doesn't need to do. And then like, go around until he finds         |
| 08:34      | the right home screen with the camera app on and then open it. And I really wish he would                |
| 08:39      | understand that he can you search. I wish he would use the control centre or then start from the         |
| 08:45      | lock screen and just swipe right without even unlocking his phone. But he has now updated to             |
| 08:51      | I can also use the volume button to take pictures. So I'm going to call this progress and just hope      |
| 08:55      | for continued progress there. But you know, if he gets told when he gets a new phone, hey,               |
| 09:01      | this can open the camera. I think he's going to be pretty excited by that. And he'll set it up to        |
| 09:06      | do that. Yeah. What's your like you talked about the method to get to the camera fast when your          |
| 09:12      | phone is off. And I think that lock screen swipe is or there's even a button there now,                  |
| 09:17      | you just press the button. I think that's probably the fastest from from zero from a dark screen.        |
| 09:23      | But what's your fastest way to get to the phone app? I'm sorry, to the camera app when you're            |
| 09:29      | already on your device, like your own advice, I want to take a picture. I open notifications and         |
| 09:34      | then swipe right in like the time area. That's that's what I do. And then I'm straight into the          |
| 09:39      | camera. Yeah, I go down to control centre and just press the camera button. One advantage of that        |
| 09:45      | is if you long press it, you can get different you can get to different modes. But maybe that's          |
| 09:51      | not as important now because one of the advanced one of the things we learned yesterday is that          |
| 09:54      | now you can put the like get portrait images out of standard images. So I don't know, maybe              |
| 10:01      | maybe your method is probably the way I should be doing it. But I mean, for me, it's also a case of      |
| 10:08      | if I hit the wrong ear on my phone. So to get to notifications, I would swipe on the left here.          |
| 10:12      | If I hit the right ear, then I've got camera and control centre as well. So it's, it's,                  |
| 10:16      | it's a swipe in a tap for me wherever I am. And I don't have to be in or out of an app for that          |
| 10:21      | to work. I tend to find myself not long pressing on the the options in control centre or that much,      |
| 10:29      | just because it feels like the time that I spend doing that and then like choosing which mode I          |
| 10:36      | want and going, wait, yeah, I wanted a portrait. No, I wanted a portrait selfie. I could just open       |
| 10:40      | the camera app and, and, and tap on the buttons myself and get there. But at the same time,              |
| 10:45      | it is nice for folks who don't necessarily, you know, remember, you know, where the portrait             |
| 10:52      | mode is or the portrait mode is a thing to get that little textual prompt.                               |
| 10:57      | But, you know, and I think that that's a great button. I mean, I could see myself even using             |
| 11:03      | that under certain circumstances. But if I'm going to set this action button up, and I'm sure            |
| 11:07      | there's people listening that are, are getting their phones as this, this episode drops, we're           |
| 11:12      | dropping this episode of the day those phones get delivered. I, I've done these contextual               |
| 11:19      | action buttons before on the watch. I've always done it with a check to the focus mode. And then         |
| 11:26      | you can have different instructions. Like if I'm in the Disneyland focus mode, because yes,              |
| 11:31      | I have a Disneyland focus mode, that may be one where I want to have it open the camera app if           |
| 11:36      | I push it, because I take so many pictures when I'm there. Whereas if I'm, you know, in podcast          |
| 11:44      | mode, I don't need it to open the camera when I press the action button. I may want it to start          |
| 11:49      | a timer or, I don't know, do something else that I do related to podcasting. And I really                |
| 11:55      | like that idea of it reacting to me. What's your best practice for triggering those rows when            |
| 12:02      | people are setting that up? Well, I would, I would take a moment to figure out, you know, what do        |
| 12:06      | you need? Because it is one of those things where you can go, Oh, yeah. And so I can have it when I      |
| 12:13      | press the button in this mode, then it does this thing. And when I press it in that mode, it does        |
| 12:16      | this other thing. But, you know, take a couple of steps back and figure out, okay, so what, what         |
| 12:22      | do I really need? And what, how can I simplify this as well? Because, you know, the last thing you       |
| 12:28      | want to do is set up something overly complicated that then you're going to be like, Ah, why is this     |
| 12:34      | not working? You know, over the course of the beta, I've had a number of times where I've got random     |
| 12:40      | automations failing and having to figure out exactly which shortcuts, automations failing and why        |
| 12:45      | it's failing. It's usually an app update, a pending app update in the background or something like       |
| 12:48      | that. But, you know, it, it's, it's been a bit tricky to, you know, experiment with those, but           |
| 12:56      | think of, you know, what it is that you actually need. And then, you know, just, just go from there.     |
| 13:03      | And, you know, if you're not sure, I don't know, maybe I need 10, maybe I need a 15 minute timer,        |
| 13:07      | just start by having it open the clock app to the timer tab, for example. And then you can refine it     |
| 13:13      | as you go. But, you know, it is going to be a bit of a process. The thing that I would say to make       |
| 13:19      | sure of to start with, what is your sensible default? So if you are not in a focus mode, for             |
| 13:26      | example, what should happen? If there's nothing set up for that focus mode, what should happen?          |
| 13:33      | What is your fall through? Start with that. And then for everything else, if I'm in this focus mode,     |
| 13:38      | do this thing or do these things, and then stop shortcut and put that stop shortcut inside the           |
| 13:44      | if. And then, you know, you've only got the things that need to happen for that. And then                |
| 13:49      | there's your sensible default at the end. But yeah, sorry, the sensible default and keep it              |
| 13:52      | simple is my pro tip there. But in terms of setting it up, the, the trick is you trigger                 |
| 14:00      | a shortcut when you press the action button. And then using shortcuts, you can check for a focus         |
| 14:07      | mode. That wasn't always true. But it's true now. And then you can set up an if statement based on       |
| 14:17      | the response to that, whether there's no focus mode or a focus mode for this or that.                    |
| 14:22      | I mean, you could also do things like check the weather if you wanted to. So you could check if          |
| 14:26      | it's sunny or if it's raining and things like that and do focus mode and do not focus modes. I mean,     |
| 14:31      | you could activate focus modes differently depending on the weather if you wanted to.                    |
| 14:34      | But, you know, you can use any, anything that, you know, varies. You could get your current              |
| 14:43      | calendar event if you wanted to and do things based on that. But yeah, you'll need to figure             |
| 14:49      | out what the if is and focus modes, I think, are a pretty nice one to use.                               |
| 14:52      | Yeah, because you've got up to 10 of them. And you could, you know, there is other ways                  |
| 14:57      | you could do it. Like you could just do a choose from menu, I guess, because it's on your phone.         |
| 15:02      | You've got a much bigger screen than you would have normally. And, you know, you could have it           |
| 15:08      | do something like that as well. But I really like the idea of immediate action happening.                |
| 15:13      | But what that action is depends on what I'm doing and where I'm focused.                                 |
| 15:19      | Yeah. And so that, I mean, I think that's kind of a different philosophy about it. If you wanted         |
| 15:24      | to use it like the choose from menu action, you could say, well, get my 10 favourite shortcuts,           |
| 15:30      | the one I do all the time and just put them on a choose from menu. And if I press the action button      |
| 15:36      | trigger that choose from menu shortcut, then I can just tap the screen with whichever one I want.        |
| 15:41      | And that's two taps instead of one. But, you know, it's not, I'm not necessarily recommending you do     |
| 15:47      | it, but I think for some people that might be a good way to do it. But I guess what I'm recommending     |
| 15:52      | is use the focus mode as that second tap. It's like, well, whatever I've already put myself into         |
| 15:57      | as focus mode, then I'm going to have something different happen when I push this button.                |
| 16:03      | Yeah. Yeah. Now, currently we are speculating to be clear that it is only one shortcut that you          |
| 16:09      | can select, but this is the limitation of the ultra button or the ultra action button. You can           |
| 16:14      | only run one shortcut. That said, the UI that they had there, it did seem to sort of imply that          |
| 16:20      | there was like a list there. There were some sort of up down arrows next to the open Snapchat            |
| 16:27      | shortcut. Who thought of that? Seriously, people? I mean, I know why they've done open Snapchat.         |
| 16:32      | It's to get all the people who aren't super nerdy into the, oh my God, I can have a button that          |
| 16:37      | just opens any app. This is amazing. Yeah. But I feel like they could have gone slightly nerdy or        |
| 16:43      | with like, you know, trigger a focus mode or something like that. But I guess Snapchat's                 |
| 16:49      | got easy instant recognition. So, you know, as long as it gets more people using shortcuts,              |
| 16:53      | I'm excited about that. But yeah, it's good. I think like 95% of people are going to turn it on          |
| 17:00      | to open my camera and they're going to be done like with my wife. Yeah, which is one of the              |
| 17:04      | default options to be clear. You won't even need to use a shortcut for that. Exactly. Like for           |
| 17:09      | someone like my wife, that's what I would put it on. If it did different things depending on what        |
| 17:13      | focus mode she was in, she would not like that. You know, that would be really hard for her to           |
| 17:19      | keep track of. And, you know, so the method I'm advocating for is make it contextual based on            |
| 17:26      | your focus mode. So you're not using it to set a focus mode. You're making it reactionary to             |
| 17:31      | whatever the current active focus mode is. So, you know, there's just, but you could also do that.       |
| 17:36      | If you like focus modes and you have trouble getting into them, you could make a shortcut                |
| 17:41      | that lets you pick your focus mode and attach it to that as well. Or maybe you just have two             |
| 17:47      | focus modes, work and personal and you could make a shortcut that just toggles them. And it would,       |
| 17:53      | you just press the button and then you've changed your focus mode and there's nothing further to do.     |
| 17:57      | I mean, really, this guy's the limit. All the stuff we talk about on the show now is capable             |
| 18:02      | with a little button on the side of your phone. I love it. And we will talk more about this in           |
| 18:08      | the future as both of us play with it more. But I think it's going to be a real boon for                 |
| 18:14      | automators that get these new iPhones. Yeah. Yeah. I am going to include a link to a 95 Mac article,     |
| 18:21      | which shows folks what is currently available for the action button on the iPhone Pro. But I'll          |
| 18:29      | note it here as well as silent mode, focus mode. So that is actually the default option,                 |
| 18:33      | which is really nice. I didn't know that. Camera, flashlight, voice memo, magnifier and other            |
| 18:39      | accessibility features, shortcut and then there will be translate, which will be arriving later          |
| 18:45      | this year. So that's pretty cool. Yeah. And yeah, I'm glad that shortcuts was explicitly called out      |
| 18:52      | on stage and like shown right there in the middle of the bottom row as one of the options that you       |
| 18:56      | can do with this. All right. Without getting deep into all the details of the new hardware,              |
| 19:02      | what are you ordering? So I've already mentioned I've ordered a pink [[Apple Watch]] Series 9                |
| 19:08      | at the 41 millimeters because the ultra hanging off the sides of my wrist is not the limited to          |
| 19:15      | the ultra. This happens with any big watch and the small one will be pretty much the same size           |
| 19:19      | as that. And I'm going to go, David, I'm going Pro Max this year. I'm going for the iPhone 15            |
| 19:25      | Pro Max. The shade of gray that looks like it might have once seen something blue. Instead of the        |
| 19:31      | shade of gray that appears to have had a bit of a fright or been covered in soot. Because there's        |
| 19:37      | four shades of gray this year. I mean, there's only four at least. But yeah, I'm going with              |
| 19:42      | the one that looks like it might have once known what blue was. And I've set up my preorder for          |
| 19:47      | that. But yeah, obviously, as we record this, the order hasn't been placed, but fingers crossed,         |
| 19:53      | I'll be using it as the show releases. But yeah, I'm excited. I'm also upgrading my storage because      |
| 20:00      | I noticed that when I went to install the public, the new release of the beta, it was like,              |
| 20:07      | huh, you need to delete some stuff from your phone. I was like, really? And I was like,                  |
| 20:10      | oh, actually, no, I've changed my mind. You're okay. But yeah, I'm bumping up against the                |
| 20:16      | 256GB limitations of my phone. So yeah, I'm going to be getting a bigger phone this year                 |
| 20:22      | in size as well as storage capacity.                                                                     |
| 20:26      | Do the new camera play a role in that for you?                                                           |
| 20:29      | Yeah. Yeah, I would not be going Max if they hadn't. Two things made it lighter because                  |
| 20:34      | a number of times I've potentially nearly damaged my own face because I dropped my phone on it.          |
| 20:41      | It's too high. But the tetra-prism fancy something camera, five times optical zoom, basically.            |
| 20:50      | Five times optical zoom is something that I just can't pass on. I love having actual                     |
| 20:57      | optical zoom in my pocket all the time. I basically never use my Canon point and shoot,                  |
| 21:02      | which has got 20 times optical zoom in or something. I'll take it with me on holiday or                  |
| 21:08      | something. But yeah, if I can get five times optical zoom in my phone, I'm going to be loving            |
| 21:13      | that. So yeah, new lenses, new phone, new watch. That's me. What about you?                              |
| 21:19      | You've got a lot of friends I know that are into gymnastics and whatnot where I feel like...             |
| 21:24      | Yeah, I take acrobatics classes.                                                                         |
| 21:26      | And I feel like that five times zoom would help for that. But yeah, I'm getting the                      |
| 21:32      | shade of gray that is just gray, the natural one, because I like the watch and it's going to match       |
| 21:39      | the watch. I think that'll be nice. But ultra, I'm sorry, the Pro Max. I've had the Pro Max for          |
| 21:47      | the last couple of years. I'm okay getting the smaller one or the bigger one. My pockets are             |
| 21:51      | big enough. It's fine. I'm not really hell bent on either one. But if one has a better camera,           |
| 21:56      | I'm probably going to get that. And I am not getting a new watch, but I am getting a new watch band.     |
| 22:02      | They've got that new water-friendly orange one. I think it'll look very nice with my                     |
| 22:06      | older watch. One of those. Daisy made a good comment when we were watching. I watched the                |
| 22:11      | highlights with her last night and she's like, the pink stuff came on. She's like, this is Barbie.       |
| 22:16      | She's like, this is here because Barbie. Everybody's wearing pink now. I didn't think about it,          |
| 22:21      | but there's that Barbie movie so popular. I can see that that played a role.                             |
| 22:25      | PINK is everywhere. I had to buy a dress recently to attend a wedding that I'm going to                  |
| 22:31      | late in October. And literally, practically everything comes in various shades of pink.                  |
| 22:37      | Finding something that's not pink is surprisingly hard. I'm pleased to report I've                       |
| 22:41      | accidentally purchased three dresses in blue, but they're a second hand. So I'm doing my part for        |
| 22:45      | the environment. This episode of Automators is brought to you by Vitally. Customer success teams           |
| 22:52      | today are facing a problem. How do they connect customer data back to their work? Vitally changes         |
| 22:57      | that. It's a new kind of customer success platform, an all-in-one collaborative workspace that           |
| 23:02      | combines your customer data with all the capabilities you expect from today's project management and     |
| 23:06      | work platforms. Because it's designed for today's customer success team, that's why Vitally operates      |
| 23:11      | with unparalleled efficiency, improves net revenue retention, and delivers best-in-class                 |
| 23:15      | customer experiences. It's the solution to helping your customer success team keep a better pulse        |
| 23:21      | on your customers, which maximises productivity, visibility, and collaboration.                          |
| 23:25      | You can boost your bottom line by driving more revenue per customer with Vitally,                         |
| 23:29      | and if you take a qualified demo of Vitally, get a free pair of AirPods Pro. So if you're a customer      |
| 23:34      | success decision maker actively seeking CS solutions, working at a B2B software as a service             |
| 23:39      | company with 50 to 1,000 employees, and you're willing to explore changing customer success              |
| 23:44      | platforms if you already have one in place, schedule your call by visiting vitally.io                    |
| 23:49      |/automators and get that free pair of AirPods Pro. That's vitally.io/automators               |
| 23:56      | for a free pair of AirPods Pro when you schedule a qualified meeting. Our thanks to Vitally for           |
| 24:01      | their support of this show and Relay FM. All right, Rose, let's talk about some of the new              |
| 24:08      | actions we're getting in shortcuts. We've speculated, we've talked about some of them that               |
| 24:12      | were in the early betas, but now we've got a list blessed by [[Apple]] of the final new actions we're        |
| 24:19      | getting in shortcuts. And I thought it'd be fun to go through that.                                      |
| 24:22      | There is a brand brand new one as well that only came out in this latest beta,                           |
| 24:27      | which is obviously because it was under lock and key for hardware reasons. And that's                    |
| 24:33      | toggle silent mode. And that is a brand new action. So that's pretty nice. I'm still attempting to       |
| 24:39      | install the update on my iPad, unfortunately, because when I insert this action into a shortcut on       |
| 24:46      | my phone, I get this action is not compatible with this iPhone, which does not surprise me.              |
| 24:52      | So instead of just having to if around whether or not this is an iPhone, I now also have to              |
| 24:57      | if around what kind of iPhone this is. But yeah, I'm hoping that this will also work on the iPad         |
| 25:04      | as well, and maybe even the watch. But yeah, there's a brand new silent mode button                      |
| 25:09      | action, sorry, in shortcuts. Yeah. And I think that, you know, if you're an automator,                   |
| 25:16      | this thing with the button is only good. We talked about it in the last segment,                         |
| 25:20      | how you can turn it into something special. But also, you can just automate silent mode now,             |
| 25:25      | just make a shortcut. It's not that hard. And                                                            |
| 25:28      | Well, apparently, it's going to be in the focus mode filters too. So you're not even going to            |
| 25:32      | have to just set up a shortcut for that. Hopefully, you know, obviously shortcuts are great,             |
| 25:37      | but not having to do things with shortcuts is also really nice, because they're listening to             |
| 25:43      | what people are doing. Yeah. Although, how often do you have your ringer volume on at all?               |
| 25:50      | So this is one of those things where I will turn it on for what I am hoping is a specific period         |
| 25:57      | of time. And then I will want it turned off again after that. So my plan is actually to                  |
| 26:05      | run a shortcut when I turn, you know, to turn silent mode off, and then ask me, like, when I             |
| 26:12      | want it to turn on again, I'm actually kind of hoping, you know, when you long press on focus            |
| 26:17      | modes, or you, yeah, you tap and hold on like the name part of it. And then you tap on the three         |
| 26:23      | dots where you've got like four an hour until tomorrow morning, until I leave this location,             |
| 26:27      | until the end of this event, or, you know, similar things like that that show up. I'm really hoping      |
| 26:31      | we're going to get that in the control centre. If we don't get that in the control centre,               |
| 26:35      | I'm going to build that by myself for my silent mode, because that's basically what I want.              |
| 26:42      | Like, if I turn silent mode off, it's because like, I'm going to be, you know, going around              |
| 26:46      | tidying at the house and getting on with things, but I'm expecting a call from my mom or, you know,      |
| 26:52      | a friend is arriving or something. And yes, I've got the watch and I should be notified when it          |
| 26:56      | comes in on the watch. But, you know, if I'm, you know, doing things in my hands, I may not notice       |
| 27:02      | the vibration, even with haptic mode turned on. So yeah, I tend to turn it on for a bit and then         |
| 27:07      | want it off again. And I think this will help. Now, in the focus mode, when you're setting a             |
| 27:12      | focus mode under the options, there is an option called silence notifications always or only when        |
| 27:18      | locked. Is that new? I thought that was there before, wasn't it? I think that that is something          |
| 27:28      | that is real. I think that's new in iOS 17. I don't have an iOS 16 device. Wait,                         |
| 27:35      | do I have an iOS 16 device on hand? Possibly. I'm just going to have a quick look because...             |
| 27:41      | But that is the ultimate kind of automation. It doesn't even require a shortcut. You just go in          |
| 27:45      | and throw a setting and just actively use focus modes and you can really set that silence on             |
| 27:52      | whenever you need. Yes, I have managed to grab an iOS 17 iPhone. And I've got options for hiding         |
| 28:00      | notification badges and so on. And I'm going to add a filter. And I'm not seeing anything for            |
| 28:08      | getting rid of notifications only while locked. Allow notifications from or silence notifications        |
| 28:16      | from and then there's people as well. But that's it. So I think that that is a new feature in iOS        |
| 28:24      | 17. Okay. And I've got the last beta on the most recent beta. And if you go into options, there          |
| 28:30      | is an option, we can silence notifications always or while locked. So I guess that's new.                |
| 28:36      | All right. It's hard to keep track of this stuff, Rose. But yeah, that's some great                      |
| 28:39      | automation there. Go in when you get in and just use focus modes. We did a poll in the                   |
| 28:45      | MacSparky Labs related to the [[Apple Watch]]. And one of my questions was, do you use the [[Apple Watch]]      |
| 28:52      | to trigger focus modes? And it had abysmally low response rate, that question. And as I got            |
| 28:59      | talking to people who answered the poll, I just think not very many people use focus modes.              |
| 29:04      | And man, as automators, this is such gold, these focus modes, they make it so easy to                    |
| 29:12      | I think a lot of people got burnt by early focus modes where you had to enable every application         |
| 29:17      | that you wanted a notification from instead of disabling notifications from apps that you didn't         |
| 29:22      | want. And because of that, it's been really difficult for folks to, you know, go back to it,             |
| 29:29      | basically. I would highly recommend that people do because you can even have the choice of showing       |
| 29:36      | silence notifications on the lock screen or not, and hiding notification badges. And that can be         |
| 29:42      | really useful, just not seeing badges on this particular app, because you're trying to focus             |
| 29:48      | on these other things for the moment, like the parcel app, for example. I do like to have a badge        |
| 29:54      | on it, but I don't want a badge on it when I'm podcasting or when I'm working and so on, especially      |
| 30:01      | podcasting, because then people are like, oh my gosh, why have you got so many things? It's like         |
| 30:05      | shared [[Amazon]] account, well, not shared. I order stuff from my parents and grandparents all the          |
| 30:09      | time. So yeah, I have a lot of pending notifications in parcel all the time. But yeah, it's useful       |
| 30:17      | to have that, but I don't want it all the time. And because of that, and being able to dim your          |
| 30:23      | lock screen and so on. And quite frankly, even if you don't set anything up, you just allow              |
| 30:28      | notifications from anyone and everything, and you just use it to change your phone background,           |
| 30:34      | and things like that automatically, that's a pretty nice use case for this sort of thing.                |
| 30:39      | So worth giving you to go. Yeah. And today, as the show drops, maybe you have a brand new iPhone,        |
| 30:44      | or maybe you just installed a new operating system on your old iPhone. This is a great                   |
| 30:48      | opportunity. Click it in. We've done shows on the past. We'll probably cover it again in the             |
| 30:53      | future, because I just think it's so useful as an automation tool. But like I said earlier,              |
| 30:59      | because I mindfully use focus modes, it allows me to make the action button way more powerful            |
| 31:05      | for me. So when I go to Disneyland, it can turn on my camera. And when I am making a podcast,            |
| 31:11      | it can start a timer or whatever. Like I said, whatever I wanted to do, it can set that up               |
| 31:15      | for me. And I love that. Let's get on, though. We got more new actions. There's some cellular            |
| 31:24      | control. Toggle cellular plans, set default lines, set roaming, find cellular plan, reset cellular       |
| 31:31      | data statistics. Basically, if you're somebody who travels and uses multiple cellular plans,             |
| 31:37      | or if you need to get more granular control over your cellular plan, you can now do that                 |
| 31:42      | with shortcuts. And I feel like this is something that has probably been on the list for a long time.    |
| 31:49      | But I love to see that they're hitting stuff like this now, because it just shows how much               |
| 31:54      | more mature shortcuts it's getting. Yes. Yeah. This is something that my parents                         |
| 32:00      | are going on holiday in a couple of weeks. And what I've done is I put, so they each have a              |
| 32:05      | travel folder on their phones. And I have set them up with two shortcuts in, and I've put them into      |
| 32:11      | the travel folder. And one says set up phone for travel, and one says set up phone for home.             |
| 32:18      | Because their plans have free roaming within Europe, but they're not going to Europe when                |
| 32:24      | they go on holiday. So when they're in Europe, they obviously want data roaming on, but they don't       |
| 32:28      | want to get astronomical data bills when they're on holiday elsewhere. So I've set it up to turn         |
| 32:34      | off roaming for them, which will hopefully avoid incurring any things. And I was tempted to set          |
| 32:41      | them up with an automation as well that says, hey, where in the world am I? And if I'm not in            |
| 32:46      | Europe, then turn off data roaming. But I feel like that might accidentally backfire. So yeah.           |
| 32:54      | Yeah. No, that's great, though. And some more stuff. Time in general got better shortcut support         |
| 33:02      | this year. Timers and stopwatches, you can get the timer, pause it, resume it, cancel it. I feel         |
| 33:11      | like if you were going to start cooking something and you had a series of timers, it would be easy       |
| 33:16      | enough now to set up a shortcut. Like, okay, I'm starting the gumbo now. Set a root timer, set a         |
| 33:23      | timer for this or that, and you could just have it all happen. If you want to be fancy, you could        |
| 33:28      | even set delayed start timers where it doesn't start a timer until sometime in the future.               |
| 33:34      | I think I've always forgotten. Is it the pause or the wait command? I always forget what they call       |
| 33:38      | it in shortcuts because I do too many automation platforms. But you can have a timer and resuming        |
| 33:43      | timer. Yeah, but you could, you know, you could set it up. So it's just like you could start one         |
| 33:48      | now, but then start another one in 30 minutes and just make that whole process automated.                |
| 33:53      | And that's the kind of automation stuff that can really help. And it's not hard.                         |
| 33:59      | Yes. None of the, one of the reasons why I love covering shortcuts on the automators is because          |
| 34:03      | we talk about some platforms where things are a little complicated, right? And it's a little             |
| 34:08      | harder. But man, the shortcut stuff is really easy. It's a one action, start a timer.                    |
| 34:13      | Yeah. The only thing that's missing from the timer actions, and I don't know why this is missing,        |
| 34:18      | I have file feedback on this to be clear. But so now on the iPhone, what you can do is just like         |
| 34:25      | you could do on HomePod in the [[Apple Watch]] before, you can have multiple concurrent timers and you       |
| 34:30      | can give them labels. For some reason, labels are not present in shortcuts. So if you wanted to have     |
| 34:36      | like a thing that would, I don't know, help you cook a lovely meal. And it's something that you          |
| 34:41      | do on a regular basis. And you know, this needs to cook for 12 minutes. And that needs to rest           |
| 34:45      | for two minutes. And that needs to bake for 20 minutes, whatever it is. You can't have it                |
| 34:51      | automatically create the next timer with a label for you. It just creates a timer. And that's the        |
| 34:58      | only thing that I feel like is missing, unfortunately. But aside from that, it does appear to have       |
| 35:04      | everything that you might want, which is really lovely, as long as you can keep track of what            |
| 35:08      | timer is what. Yeah, good stuff. If you're doing workouts, again, we got some automation related         |
| 35:16      | to workouts this year. End workout completes your current workout session and watch OS. So if you        |
| 35:22      | want to have a system set in there where like if something happens and I need to finish the workout,     |
| 35:29      | that would I think be part of a shortcut that had multiple steps because it's just as easy to            |
| 35:34      | end your workout just by tapping your watch or your phone. But if you wanted to have one that says       |
| 35:39      | maybe in workout change focus mode, I'm just kind of thinking out loud here as I talk,                   |
| 35:46      | you know, send a text message to my significant other saying I'm on the way home from the gym,           |
| 35:50      | you could like put something together like that. And before you had to manually stop the workout.        |
| 35:56      | And now that can just be one more automated action in your shortcut list.                                |
| 35:59      | Yeah, yeah, exactly. And, you know, it's it's really nice that, you know, they've, they seem to          |
| 36:06      | have understood that the limitations that were previously imposed upon shortcuts were                    |
| 36:14      | non intuitive number of times that I would, you know, tell somebody who didn't really know anything      |
| 36:18      | about shortcuts about it. And they'd be like, Oh, great. So can my phone automatically do this           |
| 36:23      | when I get to this location? Yes, big asterisk if you then tap on the notification that you get          |
| 36:30      | and run it. And, you know, they seem to have been looking at that sort of feedback and understanding     |
| 36:36      | that, you know, this might seem like a security thing, but if somebody wants to set this up on           |
| 36:41      | their phone and do it, that's what they want to use this stuff for. They don't want to use this for,     |
| 36:46      | you know, I don't know, ending a workout and ending their focus mode at the same time,                   |
| 36:51      | you know, necessarily it's more, you know, when I get to the gym, then I want you to open this           |
| 36:57      | app for me and things like that. So there we go. There's some of the new actions we got. I feel          |
| 37:03      | like in hindsight are because of the action button on the phone, like there's one says open the camera   |
| 37:11      | in the camera app to a specific capture mode. So let's say that you wanted to do selfies all             |
| 37:19      | the time. My kids are really into this. Have you heard of 0.5? Have you heard of this thing?             |
| 37:25      | What? Oh, God, I feel old. Yeah, you should. Because this is a thing going on with young                 |
| 37:30      | people at least in Southern California. They're like 0.5 me. And I'm like, what are you talking          |
| 37:36      | about? But what it means is they open the camera, they put the lens in the wide angle view.              |
| 37:43      | So it's the front facing lens, but they put it at point, it's called 0.5 on the camera selection.        |
| 37:49      | So that's why they call it a 0.5. And then they just turn around, they hold it up in the air,            |
| 37:54      | flip it around, they hit the volume up button to trigger it. They can't tell if they're in frame or      |
| 37:58      | not. But because it's a 0.5 picture, you're always going to be in frame because it's a super wide        |
| 38:03      | shot. And then they send them to each other. And that's like a thing that they do, especially when       |
| 38:08      | there's groups of them, because it's an easy way to be close to the camera and get a good                |
| 38:12      | close to the camera and get everybody in the shot. And that's a thing. Well, you could set up a 0.5      |
| 38:19      | action button based on this new action where you say, just open the camera, open to that mode. I         |
| 38:25      | believe you can do lens selection too. I need to actually get the new camera or the new phone to         |
| 38:30      | check it. But I thought that was an interesting one. Yeah. So there is a preference with the             |
| 38:38      | settings now because this is something that they actually mentioned in the keynote.                      |
| 38:42      | And I saw other things. I'm thrilled that [[Apple]] are not sure looking shortcuts, but they are             |
| 38:49      | understanding what people are using shortcuts for and actually putting that into features.               |
| 38:56      | We saw this before with being able to set your watch face when your focus mode starts and so on.         |
| 39:01      | But there is a setting somewhere for the camera. It may only be on the new phones,                       |
| 39:06      | but you can set your preferred lens and things like that. So I feel like this is all stuff that's        |
| 39:12      | going to be beneficial for folks when they get to enjoy these new devices.                               |
| 39:22      | This episode of Automators is brought to you by Electric. Turning a small business into an empire        |
| 39:27      | takes work and you have to keep your ear to the ground for the things that will help you take            |
| 39:30      | it to the next level. But this can be hard when your attention is pulled in different directions,        |
| 39:35      | because that's the reality of being a boss. The team over at Electric knows small businesses             |
| 39:39      | maybe like yours face these challenges. That's why they're on hand to help with time consuming           |
| 39:43      | parts of your business, like standardised device security with best-in-class device management           |
| 39:48      | software so you can implement best practices across the board and be ready to scale. An employee         |
| 39:53      | onboarding and offboarding done for you, saving you an average of eight hours per request. Plus,         |
| 39:58      | Electric will help you keep a single point of visibility into your IT environment to control             |
| 40:02      | your devices, networks and applications. While simple for reporting allows you to achieve and            |
| 40:07      | maintain compliance and proactive IT recommendations and automated workflows make IT easy to manage      |
| 40:13      | even for non-technical users. And look, if you're hearing this and you think your company could use      |
| 40:17      | some of these services but you're not sure where to start, Electric's experts will guide you through     |
| 40:21      | the process of establishing standardised IT processes for your organisation. Delegating is               |
| 40:27      | so critical. There's a thousand and one things that you can do but you should be doing the things        |
| 40:32      | that only you can do and leaving everything else to everybody else. There are plenty of times where      |
| 40:38      | I would have loved something like Electric and quite frankly, even now and having dealt with             |
| 40:42      | some of my own computer issues earlier today, I would really love Electric to just pass those off        |
| 40:47      | to and deal with it and get this solution back. So you should go and check out Electric if you're        |
| 40:53      | in a small business and there's IT, then that IT is in-house with somebody wearing all of the            |
| 41:00      | different hats. For Automators listeners, Electric is offering a free pair of Beats Solo 3 headphones    |
| 41:05      | for taking a qualified meeting. Just go to electric.ai slash Automators. That's electric.ai slash        |
| 41:12      | Automators. Go there now to get your free pair of Beats Solo 3 headphones today for scheduling           |
| 41:16      | meeting. Thanks to Electric for their support of this show. So Rose, what are some of your favourites     |
| 41:24      | on the new action list that you've been enjoying? Being able to delete specified alarms and more         |
| 41:31      | importantly, find alarms as well. So one of my automations that I use on a regular basis,                |
| 41:38      | in fact, I use it every single day, pretty much when my work focus starts, it goes and finds all         |
| 41:43      | of my calendar events through the day that are at least work-related and it calculates back              |
| 41:48      | three minutes from each of those and it adds an alarm three minutes before the start of the calendar     |
| 41:54      | event because, you know, I work from home, three minutes is enough time to grab a glass of water         |
| 41:58      | or run to the bathroom or whatever, but not enough time for me to be like, I can finish this thing       |
| 42:03      | and do that and then be late to the meeting. So I do that. But what happens when a calendar              |
| 42:09      | event gets cancelled? I still get an alarm. So I've now been able to have, you know,                     |
| 42:16      | some automations set up that I've been playing with different triggers for but being able to             |
| 42:22      | find calendar events for cancelled or find alarms for cancelled calendar events and delete them.         |
| 42:28      | It's really nice and especially when you can also now modify your sleep alarm. This means that when      |
| 42:36      | I have a day in the office, I can have like a little shortcut that I run the night before                |
| 42:41      | that, you know, opens my checklist and OmniFocus. So these are the things that you need to do            |
| 42:46      | and it modifies my alarm for me automatically so that I make sure that I'm up on time                    |
| 42:51      | and at the right location. And just, yeah, that's really useful for me.                                  |
| 42:56      | Yeah. I think everybody has like alarm inflation, right? Where you open your alarms on your phone        |
| 43:02      | and there's like 50 of them in there. And now you can bring automation to bear on this,                  |
| 43:06      | which I think is nice. Yeah, exactly. Like I've just run the action and there were 87 alarms,            |
| 43:14      | just called alarm. There are no more 87 alarms called alarm because I've just deleted them.              |
| 43:19      | But yeah, that's something that's left over from previously. So I'm glad that that's gone away.          |
| 43:25      | You know, [[Apple]], everybody keeps wondering why [[Apple]] doesn't make its own passwords application,         |
| 43:30      | you know, because they do have kind of a lot of password management built in.                            |
| 43:35      | They did take a step that direction with a new action called show passwords.                             |
| 43:41      | And you can have it show you a specific password that it gets from the settings                          |
| 43:47      | on both iOS and Mac OS. So if you've got passwords you want to pull up, you can. I guess,                |
| 43:54      | you know, I'm trying to think like maybe if you've got to log in at work or something and you've         |
| 43:58      | got to have a password that goes into a different system, you can make a shortcut that shows that        |
| 44:03      | to you. Or just, you know, like there are sometimes where you need like a particular code that you       |
| 44:10      | then have to enter on a separate device or something like that. So getting a 2FA code                    |
| 44:16      | from things like that or, you know, other things, you know, there's a lot of systems out there with      |
| 44:21      | more than 1Password to them. And so there's this password window and then there's the next            |
| 44:26      | window after that where, you know, you've partially logged in, but then you get asked,                   |
| 44:31      | you know, based on this, you know, answer one of these three questions.                                  |
| 44:35      | And yeah, so being able to open the password to that would be very useful.                               |
| 44:40      | Early in the beta process, I talked about how they don't have a new action to show a specific            |
| 44:45      | tab group in [[Safari]], which made no sense to me. And I said, well, you know, maybe they'll get it in      |
| 44:51      | by the end of the beta. Well, they did not. That still is not there. I checked every release,            |
| 44:58      | because it's just like, because some of my setup automation would be so much easier if I could           |
| 45:03      | have it open a tab group for me. I can have a [[Safari]] open a tab group, but I can't have it open          |
| 45:08      | a tab group on macOS as far as I know, but it does work on iOS for sure. Well, that's what I'm           |
| 45:12      | talking about. I'm sorry, I'm Mac. Yeah, yeah, yeah, because there's the profile support in              |
| 45:17      | [[Safari]] as well. That's something new that's come in this year. And as far as I'm aware, that doesn't     |
| 45:23      | have shortcut support, which is kind of a shame. Being able to switch between profiles would be          |
| 45:30      | really nice, but it doesn't seem to be there yet. Scan documents got a new action. Scan document,        |
| 45:38      | it captures an image and saves it to the files on the iOS app. So if you don't want to buy a scanning    |
| 45:44      | app, it kind of does it all for you in one step. And this was possible before really,                    |
| 45:50      | but this is kind of a consolidation of several steps into one. It makes it so anybody without            |
| 45:56      | a really a lick of knowledge about shortcuts could sit down and put this into effect.                    |
| 46:02      | Yes, yeah. It's very, very nice to have that as an option because my mom constantly says,                |
| 46:09      | wait, how do I scan a document again? So the fact that I'm now going to be able to put a                 |
| 46:13      | shortcut on her home screen, which just says scanner, and I can do the same for my grandmother and       |
| 46:17      | so on as well. She might struggle a little bit with shaky hands, but the iPad's pretty good.             |
| 46:22      | This is where having a camera on the iPad is actually useful. So yeah, it's pretty nice that             |
| 46:29      | they've been listening for that and so on. And so we've got all of those options. And speaking of        |
| 46:37      | options, health samples have significantly improved. So there was actually a thing that                  |
| 46:44      | was mentioned in the keynote where now you're going to be able to say to Siri like, you know,            |
| 46:48      | hey [[Apple]] lady, I weigh blah, blah, blah today. And that will get logged automatically into health.      |
| 46:55      | That's so great because a number of times I've created a shortcut for somebody that will just            |
| 46:59      | log their current blood pressure or weight or whatever, because they don't have a smart scale            |
| 47:04      | or a smart blood pressure monitor or they do have a smart one, but it's not smart with health kit        |
| 47:08      | support. Yeah, that's just baked into iOS now. But health samples in shortcuts support way more          |
| 47:17      | data types like sleep and mood and your appetite changes and all the menstrual cycle stuff is            |
| 47:23      | there as well. So for folks who need that, that's really, really useful. The one that is near and        |
| 47:29      | dear to my heart is transcription. One of the big improvements this year, in fact, this is               |
| 47:34      | something I'd recommend you give a try as soon as you get the beta or it's not beta anymore,             |
| 47:39      | once you get the public release installed is trying Siri dictation. And I feel like the boy              |
| 47:46      | that cried wolf because every year I tell people, oh, this year it's better, you should try it,          |
| 47:50      | which is always true, by the way, it does get better every year. But this year,                          |
| 47:54      | it is demonstrably better. They use the transformer engine, which is Apple Speak,                        |
| 48:01      | we're saying they're using AI, but the voice to text dictation is better and faster than it's ever       |
| 48:07      | been. And it's got so good that now they've added a shortcut action to transcribe an audio file          |
| 48:16      | into a text file. Yes, this is so good. Yeah, I mean, and so you could, there's apps out there           |
| 48:22      | that do stuff like this, but now you could just make an action to say start the recorder, talk           |
| 48:28      | through something and spit the text into the clipboard or put it into my favourite app.                   |
| 48:33      | Have you experimented with this? Well, I, what I've been experimenting with is replacing                 |
| 48:39      | just press record. Because this is an app, I still love it, and I'm still going to be using it           |
| 48:45      | to be clear, because it is just such a great app where the whole point of just press record is you       |
| 48:49      | could record a piece of audio and you could have it do an automatic transcription and then you would     |
| 48:55      | have both. So if the automatic transcription was imperfect, these things never are, then you would       |
| 49:01      | still have the audio so you could go back and listen to the words and go, oh, okay, I know what          |
| 49:06      | this meant. It's like the [[Cortex]] brand sidekick or sidekick notepad, right, where the transcription      |
| 49:16      | was getting it wrong. But what you can do with voice memos, of course, is you can select a recording     |
| 49:22      | and get that. Now, one of the things I have struggled with a little bit is the fact that                 |
| 49:27      | you can't just get your latest recording, and so you have to stop the recording using                    |
| 49:34      | shortcuts, and then I think the output of that could be used to actually transcribe it,                  |
| 49:42      | but you can certainly select a recording with shortcuts and then transcribe the audio from               |
| 49:47      | voice memos, which is very nice so that you get your voice memo and you get your text.                   |
| 49:53      | You can now go straight into the photos application and open specific collections                        |
| 49:58      | through shortcuts. That's kind of cool. I haven't played with that one yet. I'm looking at it here       |
| 50:06      | now and thinking, what will I do with this? This is useful for folks who are less technical and          |
| 50:17      | get shortcuts put on their home screen by other people. Here's the one to find your                      |
| 50:21      | password for this. When you call your bank, your password is in the keychain. Well,                      |
| 50:26      | you don't need to remember that it is anymore. Tap on this and it'll give you your bank keychain.        |
| 50:30      | Things like opening a particular collection, you could have a folder of collections basically            |
| 50:39      | and just have it offered to open your favourites or your recents or places and things like that,          |
| 50:46      | which is just a nice option to have with this. There's also, I've noticed that there are some            |
| 50:54      | donated shortcuts where you can view photos of specific people or albums, which is really                |
| 51:02      | nice to have as an option. I feel it's kind of weird that you can't open a particular                    |
| 51:07      | album using shortcuts. Maybe that's just missing. It's certainly nice to be able to open your            |
| 51:14      | collections. I wonder, this would also be really good for grandparents. Here's a picture of all          |
| 51:21      | your grandkids and maybe even something where you can curate it remotely. That'd be nice.                |
| 51:27      | You keep talking about the idea of setting up these shortcut buttons for some of your                    |
| 51:31      | relatives that aren't as savvy with this. What are the mechanics of that? Do you make a separate         |
| 51:38      | home screen with all those on it? At some point, they need to see their apps as well, right?             |
| 51:44      | Yeah, yeah. Honestly, the people who are less techy and perhaps need a bit of help finding               |
| 51:52      | something on their iPhone or their iPad, they tend not to be folks who are super enamored with the       |
| 51:58      | idea of the app library. They are all of my apps on my home screen in folders, maybe folders. Some       |
| 52:05      | folks' folders is a bit too advanced. For my parents, they are folder friendly. They are not             |
| 52:11      | app library friendly. What I do is, they will have a folder for travel apps or train apps or             |
| 52:18      | things like that. If there's a shortcut that I know that they'll be looking for or they'll be            |
| 52:26      | looking to access something within the realms of holiday things or train things or parking things,       |
| 52:33      | then I'll stick it in there. I'll just do an add to home screen and put it right there for them.         |
| 52:38      | For my grandmother, I have been experimenting a little bit with widgets. This is specifically on         |
| 52:47      | her iPad. She'll have a bigger widget which will show, okay, you press on this button and it will        |
| 52:54      | do this. I'm curious to see if she will do better with the two-button one. On the iPad,                  |
| 53:01      | the small widget only takes up the same space as one app icon. It's just bigger. That's quite useful     |
| 53:06      | in that perspective. Honestly, I just make them look like apps and I stick them next to something        |
| 53:15      | else that they're going to be looking for and try and give it a good name. I don't necessarily give      |
| 53:19      | it the same name as the name of the shortcut that I've created. The reason for that is then when         |
| 53:26      | they search, if they search, there's then two different names to help find it instead of just            |
| 53:31      | the one. That can be quite useful. I'd imagine a creative icon could also be really helpful              |
| 53:38      | for someone like that. Yeah. For my parents, for [[Home Assistant]] because they have their home in          |
| 53:45      | the UK and then they have their home in France. We have [[Home Assistant]] set up with both. They have       |
| 53:52      | little home icons with their different colours, very simply. That opens the [[Home Assistant]] app to         |
| 54:00      | the right country for them, whichever one is that they're looking to tap on. It's very useful for        |
| 54:07      | things like that as well. One of my favourite like hallelujah automations is the volume setting. You      |
| 54:13      | can address it towards media volume or ringtone volume. Yes. It was to change your ringtone volume,      |
| 54:20      | so useful. It's also actually helped me solve recently a conundrum I was having, David.                  |
| 54:26      | I was trying to... The Disney Plus app on your phone has support for Chromecast                          |
| 54:33      | built-in, which is handy because if you're somewhere that doesn't have an [[Apple TV]],                      |
| 54:36      | there's a fairly good chance the TV will have Chromecast support built-in, or I often have a             |
| 54:42      | tiny Chromecast with me in my techier pouch, if I'm going somewhere, I'm planning on sharing             |
| 54:48      | media with folks like that. It was always coming through really, really quietly. I discovered            |
| 54:54      | apparently your device volume actually plays a large role in this. I've now created shortcut             |
| 54:59      | automations that when I opened the Disney Plus app, set my volume to 100%, which works around the        |
| 55:05      | issue for now. That's really useful and I don't have to worry about my ringtone volume being             |
| 55:11      | modified unless I explicitly choose to use that setting. Honestly, you could also be doubly sure         |
| 55:19      | that you don't have something go wrong. You could set a shortcut that puts them both at zero.            |
| 55:25      | Maybe your ringtone is turned off, but you accidentally click on a video or something                    |
| 55:29      | as you're surfing around. Suddenly, your thing starts blasting some great jazz. The other people         |
| 55:37      | in the room don't really appreciate that. I feel like this is in some ways a better solution than        |
| 55:44      | we've ever had in terms of managing volume. Yeah, it really is useful that this is                       |
| 55:51      | properly an option now that's built into our devices. My daughter, she's a playwright,                   |
| 55:58      | she writes a lot of plays and I'm always going to see her plays. I have this nightmare                   |
| 56:03      | that my phone will make some sort of noise. Even with the ringer turned off, it's like you just          |
| 56:11      | don't want to be the guy whose phone starts making noise in the middle of a performance.                 |
| 56:16      | Even though I make a show called Automators, my solution has been just turn the phone off                |
| 56:22      | and then turn it back on when it's over in that way. I know there's never a problem.                     |
| 56:26      | I may be tempted to leave it on with a shortcut, like going into the theatre shortcut that               |
| 56:32      | turns all volumes off. Yeah, that could be useful. If you decide that you don't like it,                 |
| 56:40      | then you can actually keep your shortcut and just change it to use the shutdown button                   |
| 56:44      | because there's the shutdown action that was added. It was late in iOS 16 of memory serves.              |
| 56:49      | Yeah, so you can do that too. So much stuff, Rose. In hindsight, we get a lot of nice                    |
| 56:56      | quality of life improvements. I've been saying that since June, but shortcuts is another example         |
| 57:01      | of that. Just like little nice touches makes it easier to do stuff with shortcuts. It's just like        |
| 57:06      | everything else they've done this year. It feels like everything. They're just kind of                   |
| 57:11      | sanding down the rough edges. This episode of the Automators is brought to you by HelloFresh.            |
| 57:20      | Go to hellofresh.com/50 Automators and use code 50 Automators for 50% off plus free shipping.      |
| 57:29      | With HelloFresh, you get farm fresh pre-portioned ingredients and seasonal recipes delivered              |
| 57:34      | right to your doorstep. Skip trips to the grocery store and count on HelloFresh to make home cooking     |
| 57:39      | easy, fun and affordable. That's why it's America's number one meal kit. You can kick start a fresh       |
| 57:46      | fall routine with HelloFresh. HelloFresh handles all the meal planning and shopping to deliver           |
| 57:51      | everything you need to cook up a tasty meal right at home. They do the hard part and you get to take     |
| 57:56      | the credit. And when it comes to options, more is more. That's why HelloFresh's menu includes 40         |
| 58:02      | recipes and over 100 add-on items to choose from each week. I'm a big fan of HelloFresh. Daisy and       |
| 58:08      | I subscribe. One of the main reasons I do so is because I work from home and my wife works at an         |
| 58:15      | office. When she gets home, she's tired and I like to have dinner on the table, but I don't want to      |
| 58:20      | do the same thing all the time. We can't afford to go out to dinner every night. So several nights       |
| 58:25      | a week, I make a HelloFresh meal for the two of us and it's delicious. I like a lot of Asian food        |
| 58:31      | because I like the spices in it. I also like Italian. So I pick a lot from those two palates.            |
| 58:36      | Mushu pork bowls are really good. We've done that one several times. The peachy keen barbecue rub pork   |
| 58:42      | chops are also really good, but mushroom ravioli and the tomato cream sauce is also really good          |
| 58:47      | and comes together really quickly. Nothing like putting on a good podcast, spending a few minutes        |
| 58:53      | and putting together a good meal. So go to HelloFresh.com/five zero automators and use             |
| 58:59      | the code five zero automators for 50% off plus 15% off the next two months. That's all lower case        |
| 59:06      | H-E-L-L-O-F-R-E-S-H.com/five zero automators and code five zero automators                         |
| 59:14      | to get that 50% off plus 15% off the next two months. HelloFresh is America's number one meal            |
| 59:21      | kit and you should check it out. Our thanks to HelloFresh for their support of the Automators            |
| 59:26      | podcast and Olive Relay FM. So, David, before we move on to macOS, because there's some great            |
| 59:33      | updates for short cuts on macOS, which we're really excited to talk about, we have to stick on iOS       |
| 59:38      | and iPadOS because personal automations, we got more of them and they got better. Aside from one,        |
| 59:45      | and I think it is only the one which is before I commute, every automation trigger on iPhone and         |
| 59:52      | iPad can run immediately without confirmation. That's Wi-Fi. That's when you arrive somewhere,           |
| 59:58      | when you leave somewhere, when you get an email, when you get a message, and then we also got new        |
| 01:00:02   | ones like transactions and so on. Oh my gosh, is this amazing? It feels like it's a short personal       |
| 01:00:09   | automations, the grown-up addition. Like suddenly they trust us to run triggers without having to        |
| 01:00:15   | have confirmation dialogue boxes all over the place. Have you been taking advantage of this              |
| 01:00:21   | throughout the beta? So, I've been playing with this a little bit. Obviously, I'd set up things          |
| 01:00:27   | previously to kind of work around it, so when my focus mode turns on and things like that,               |
| 01:00:32   | and then I've actually grown to find that focus modes are the solution for some of the things            |
| 01:00:37   | where it was like, when I get to this particular location, do this thing. But honestly, I'm mostly       |
| 01:00:45   | just really excited by the fact that I can now actually say, hey, what was the word I was thinking?      |
| 01:00:57   | Why get an email? Actually, do this thing automatically for me. And you have to choose                   |
| 01:01:03   | like a sender or subject or something like that, and I think you have to filter it to a particular       |
| 01:01:11   | account. So, I've only got the subject and the account set up on this one. But you have to have          |
| 01:01:21   | either the sender or the subject containing and an account. Or perhaps the recipient as well             |
| 01:01:28   | might just be one of those options. But yeah, you have basically so much freedom with this,              |
| 01:01:36   | and this has been really handy for a couple of messages where I know like my mom will send               |
| 01:01:44   | a message to me and my grandmother, and then forget to send it to my dad as well. Because                |
| 01:01:51   | even though I've changed the groups on her phone a thousand times, she'll forget to send it to my        |
| 01:01:55   | dad. And so I just have it automatically copy any message that goes to that group over to my dad         |
| 01:02:00   | just so that he gets a copy of it so that that always works out. Though I'll have to make sure           |
| 01:02:05   | that I turn that off around his birthday. Maybe I'll just have a like if it's between a month            |
| 01:02:09   | before his birthday and his birthday, don't do that. But yeah, it's just really nice to have             |
| 01:02:16   | actual automation as an automation option. Yeah, I agree. And this is like on my list. I have been       |
| 01:02:24   | really busy. I forgot to mention on the show, I released the [[Obsidian]] Field Guide. So, hey guys,         |
| 01:02:30   | I really see [[Obsidian]] Field Guide. In fact, I'll put a little discount code for automators,              |
| 01:02:38   | I'll say automate Obsidian, and then you guys get 10% off and it'll go when the show goes out. But       |
| 01:02:45   | I totally forgot to mention it on the show, but I've been so busy with that I haven't had time           |
| 01:02:50   | because I've got on a note here, personal automation audit. I want to go through now that                |
| 01:02:55   | they've given us kind of big boy and big girl tools here and treating us more like adults.               |
| 01:03:02   | I want to like redo a bunch of them. And that's hopefully by the time this show                          |
| 01:03:07   | publishes, I already have done a bunch of that. But I feel like this is the year if you've been          |
| 01:03:12   | avoiding personal automations because they felt too tedious, they've removed a lot of those barriers.    |
| 01:03:18   | Yes, exactly. And it is one of those things where it was, you know, constantly whenever                  |
| 01:03:22   | somebody would say, oh, great, so can I do this? It would always be around, like, when I get to          |
| 01:03:27   | this location. And it would be like, asterisk-ish kind of, not really. And I wish you could. But,        |
| 01:03:36   | you know, now that is actually a proper option for folks. So, yeah, it's great.                          |
| 01:03:43   | I think Wi-Fi is the obvious trigger there for a lot of people because usually at home,                  |
| 01:03:49   | you're on a specific Wi-Fi network, you're in a different Wi-Fi. So, now you can reliably have           |
| 01:03:54   | a shortcut trigger on Wi-Fi. So, when I get home, put me into this focus mode and set up                 |
| 01:04:01   | this home screen. And when I get to work, put me in a different one and then do all the cool             |
| 01:04:04   | things you can do with shortcuts. But you've got this reliable trigger. It doesn't nag you. It just      |
| 01:04:10   | turns on. You just have to throw the option to run it immediately. And you're good to go.                |
| 01:04:16   | And I feel like that's something we've been waiting for a long time. We were talking about               |
| 01:04:21   | that three or four years ago when shortcuts was brand new and some of these automations were             |
| 01:04:26   | showing up. But now we're the dog that has caught the car. So, we need to be using them.                 |
| 01:04:33   | Yeah. Yeah. That reminds me a little bit of an [[Instagram]] picture or a video that I saw the               |
| 01:04:37   | other day of a golden retriever that finally caught its tail and didn't want to let it go.               |
| 01:04:40   | But it didn't quite know what to do with it. You know, we've worked around a lot of our                  |
| 01:04:45   | our previous requirements or needs and come up with solutions to them. But using Wi-Fi                   |
| 01:04:52   | where possible is going to be a great solution. I really wish my ballet theatre had Wi-Fi                |
| 01:04:59   | or the place where I go to do ballet had Wi-Fi because the location, even though I have set              |
| 01:05:05   | my focus mode to be the absolute smallest location, the smallest size possible for that location         |
| 01:05:11   | for a ballet, it still triggers when I'm in the nearby supermarket. So, when I'm in the supermarket,     |
| 01:05:18   | I often end up in my fitness focus mode and they're looking at my watch going,                           |
| 01:05:23   | wait, where am I shopping? Let's go. Oh, no. And yeah. So, I'm going to have to,                         |
| 01:05:30   | I think I'm going to have to implement the same thing that I've done for work there,                     |
| 01:05:32   | actually, where it checks if I'm on holiday or if today's a bank holiday and then turns it off.          |
| 01:05:36   | It should check whether in my calendar, whether or not I have a ballet class and then turn it off.       |
| 01:05:40   | Because, yeah, if I'm trying to shop, I don't want that. But unfortunately,                              |
| 01:05:45   | my ballet studio does not have Wi-Fi, but everywhere else does have Wi-Fi and Wi-Fi is                   |
| 01:05:49   | just such a smaller location. And GPS has a little bit of a tendency to wander. So,                      |
| 01:05:55   | you could be in the same place all night. Literally, your phone may not move for eight hours,            |
| 01:05:59   | but if you were to look at a really precise GPS log of it, you would be all over the shop.               |
| 01:06:04   | I once walked seven miles in my sleep, at least according to my iPhone. Like the GPS data                |
| 01:06:11   | basically covered seven miles of moving around overnight while my phone was off. Well,                   |
| 01:06:19   | it was charging on my bedside table and I was asleep. So, yeah. It's pretty nice that we can             |
| 01:06:25   | use Wi-Fi. Knowing you, I could completely see you going into your ballet studio and setting             |
| 01:06:30   | up a tiny Wi-Fi network simply for your automation. And I know that that's probably already occurred     |
| 01:06:35   | to you. And it might be in the works. But the problem with that is I would then also have to             |
| 01:06:42   | provide the data behind it. And I feel like this is just way too much effort versus I could just         |
| 01:06:51   | program my shortcut to check whether or not I have a class and if I don't have a class turn off.         |
| 01:06:55   | That seems a lot easier. Something I would like to do is I know we've got some really                    |
| 01:06:59   | clever automators out there in the audience. Now that we've got these really powerful personal           |
| 01:07:05   | automation tools, I would love to hear from you. And if you're doing something cool like                 |
| 01:07:10   | the wallet transaction, I don't think we've even mentioned, when you do a wallet transaction,            |
| 01:07:14   | it can be a trigger, which is kind of cool. But in particular, these notification less                   |
| 01:07:22   | automations, I know some of you are doing cool stuff. Please write us. There's a feedback                |
| 01:07:27   | forum at relay.fm/automators. Those come to us, I think in a future show, I'd like to share        |
| 01:07:33   | some of the best ones with the audience. Because I think a lot of people are curious about this,         |
| 01:07:37   | looking for ways to do it. I'm going to be spending more time with it. I'm sure Rose will too. But       |
| 01:07:42   | I'd love to hear what you guys are doing with that stuff. Yeah, I'm particularly excited by the          |
| 01:07:46   | addition of the transaction automation trigger for shortcuts. Because this is one that you can           |
| 01:07:56   | then say, okay, when I tap this card, you can even filter it to a particular category, or you can        |
| 01:08:03   | select all of them. You can choose particular merchants if you want. Then you can have it run            |
| 01:08:09   | something immediately. And I know some developers who I've been following, who have been working on      |
| 01:08:16   | finance apps, and they are really excited with some demo shortcuts that they've got ready                |
| 01:08:21   | to be taking advantage of this for logging your transactions as you do them in your                      |
| 01:08:30   | app of choice. So yeah, this has gave you really great. Going back to the Mac, we got some updated       |
| 01:08:36   | automations and shortcuts related to window management. Well, just before you go to the Mac,             |
| 01:08:43   | David, we should also mention [[Stage Manager]] and displays were our automation triggers on the iPad        |
| 01:08:48   | as well, so that it's a bit more like a Mac to an extent. That's true. That's true. Yeah, stage          |
| 01:08:53   | manager has blended more between the two platforms, and you can now create that as a trigger.            |
| 01:08:59   | Yeah, this is really great. And of course, the bee that I completely forgot to mention,                  |
| 01:09:04   | and I'm going to shame you, David, for not pulling me on this. Automations and shortcuts                 |
| 01:09:10   | work differently now. When you set up an automation, it prompts you to select a shortcut.                |
| 01:09:15   | This is great. I love this, because this is so good, because otherwise, you create a blank               |
| 01:09:24   | automation. That's what it is now, which is what all of your previous automations will have been         |
| 01:09:29   | converted to. And then you have a run shortcut action inside of that or something. But now it            |
| 01:09:34   | just suggests running a shortcut for you, which is just huge. So if you send somebody a shortcut,        |
| 01:09:39   | then you can send them a little video of how to set it up as a personal automation,                      |
| 01:09:43   | and they can just select that shortcut, and that's it, done. There's no more need to use                 |
| 01:09:47   | run shortcut inside of the automations. Yeah, and it was confusing before, because you had a limited     |
| 01:09:53   | set of actions that they would give you by default. But if you didn't know the trick to run a            |
| 01:09:58   | shortcut, you just felt like you couldn't do as much with it. And now you just pick shortcut,            |
| 01:10:03   | attach it to the trigger, off through the races you go. I'm sorry. I let you down, Rose. I let           |
| 01:10:08   | you down. No, it's okay, David, because yeah, especially like the [[HomeKit]] actions that you can           |
| 01:10:13   | create in the personal automation screen of shortcuts, those are the ones that are actually              |
| 01:10:17   | really limited. And then the rest of the time, you just kind of have to go digging around for            |
| 01:10:21   | actions the same way that you do in shortcuts, but it would by default not really show you most          |
| 01:10:25   | of the things that you might want, like, Timery. Of course, I want my Timery actions everywhere.         |
| 01:10:30   | So yeah, it's good that this has made things a little bit easier, especially with the new                |
| 01:10:36   | kinds of shortcuts that app developers can add, which appear in the gallery inside of shortcuts.         |
| 01:10:43   | So if you go to, sorry, it's not the gallery, if you go to the shortcuts tab inside of shortcuts,        |
| 01:10:50   | and then scroll to the bottom underneath your folders, if you've got folders, there's app                |
| 01:10:54   | shortcuts. That's the ones that I'm talking about. So yeah, so you can have a look at those and          |
| 01:11:02   | play with those. And, you know, that's just something that is, you know, this is continually             |
| 01:11:06   | getting better. And the fact that now you can run a shortcut directly from a personal automation         |
| 01:11:12   | is even better. All right, you want to talk about the Mac real quick?                                    |
| 01:11:16   | Yeah, let's do it because the Mac's got some updates. A couple automations out of shortcuts on the Mac   |
| 01:11:22   | that are kind of interesting to me. We had some window management stuff with the original release        |
| 01:11:28   | of Mac shortcuts, but we got a bit more this year. Move and resize windows. It's not [[Moom]],               |
| 01:11:37   | but it's better than it was. I felt like it was very limited before. And now they're giving you          |
| 01:11:42   | more options and more ways to manipulate windows. So if you want to write window manipulation            |
| 01:11:47   | into your shortcut, you can do it and have a decent amount of control right out of shortcuts             |
| 01:11:56   | without any third-party apps. Yeah, yeah, I'm still going to be sticking with [[Moom]] for this              |
| 01:12:01   | because it can go, hey, this screen was connected. I'm going to rearrange your windows because of        |
| 01:12:06   | that and so on. But, you know, the fact that you don't have to download a third-party app so people      |
| 01:12:11   | can try things out and go, oh, I like this, but I wish I could. And then you can come in with,           |
| 01:12:16   | hey, have you heard about [[Moom]] or Keyboard My Store or whatever app it is that, you know,                |
| 01:12:21   | you want to recommend to solve their problem. Yeah, it's giving people the taster, right?                |
| 01:12:26   | That's what we want. Yeah. And another one that I never expected to get shortcut control of is           |
| 01:12:32   | Time Machine. Yeah, this is kind of crazy. There's Time Machine backups starting and stopping.           |
| 01:12:38   | And honestly, I feel like this is really great for a lot of reasons. You know, there's times that        |
| 01:12:46   | you just don't want your Time Machine to be backing up when you're planning on taking your Mac with      |
| 01:12:52   | you or something like that or you're trying to do a presentation and there is limited bandwidth on       |
| 01:12:56   | the network and you're also trying to get files from other places, like stopping your Time Machine       |
| 01:13:01   | back up as part of going into a presentation mode, which you could have in the shortcuts menu bar or     |
| 01:13:09   | if you use something like focus cuts, which disclosure, I'm one of the developers behind                 |
| 01:13:13   | focus cuts, you know, have that contextually appear in your work focus mode. It's, yeah,                 |
| 01:13:19   | just really nice to have, you know, the options there to be able to control this.                        |
| 01:13:25   | Though I did notice, David, something disappeared in Mac OS Ventura that I didn't realise until          |
| 01:13:30   | today, which was scheduling your Mac turning on and off through system settings. That's gone.            |
| 01:13:37   | It's just disappeared. If you had it set up previously, it still works.                                  |
| 01:13:41   | And you have to use PEM set in the terminal now. So, yeah, I don't know, maybe you'll come back at       |
| 01:13:47   | some point through shortcuts, so automations, perhaps, but that was a bit of a surprise to               |
| 01:13:52   | me when I was trying to solve that problem. Yeah, it is. But getting back to the Time Machine            |
| 01:13:57   | thing, like as a podcaster for years, I turn off Time Machine before we'd record. You just don't         |
| 01:14:02   | want anything weird happening with your computer while you're trying to get a good recording,            |
| 01:14:06   | but then you'd forget to turn it back on afterwards. Well, now, I think what I would                     |
| 01:14:10   | probably do is just trigger this off of a focus mode change and say, well, if I go into podcasting mode. |
| 01:14:17   | What I would do is I would trigger this with [[Audio Hijack]], because [[Audio Hijack]] has the option           |
| 01:14:25   | to run scripts for things, and that can include shortcuts. So, you can set up automations using          |
| 01:14:33   | [[Audio Hijack]]. So, when [[Audio Hijack]] starts recording, turn off Time Machine or stop Time                 |
| 01:14:39   | Machine, and when it stops recording, start Time Machine. There you go. Nice and simple.                 |
| 01:14:45   | Well, you know, nice work, [[Apple]]. Like I said, they didn't rebuild the world of automation this          |
| 01:14:52   | year, but they made it a lot easier in a lot of ways. Hopefully, some of the things we talked            |
| 01:14:58   | about today make you want to go and play with it. It's Friday. You got the weekend. Why don't you        |
| 01:15:03   | go build a cool automation shirt with us? We'd love to hear from you. Something I want to do,            |
| 01:15:08   | I know we've run a little long, but the something I want to do, Rose, is you and I have been sharing     |
| 01:15:12   | pictures with each other lately. So, let's just switch gears a little bit and share some cool            |
| 01:15:16   | stuff we bought lately. Mine is somewhat related automation. I'm not sure if yours does, but I           |
| 01:15:22   | think it's very timely, given that today is the day the new iPhones are shipping. Would you buy?         |
| 01:15:28   | I bought an Anker battery pack. So, Anker have been heavily promoting USB-C this summer. Now,            |
| 01:15:36   | I'm not going to say for sure that they knew something was coming, but [[Apple]] definitely do               |
| 01:15:41   | give certain bits of information to certain partners of theirs like Belkin,                              |
| 01:15:50   | so that they can have products ready on day zero of the iPhone launch. Earlier this year,                |
| 01:15:57   | I think it was, Anker released a 5,000mAh battery pack, which plugged into the bottom of your iPhone.    |
| 01:16:02   | It had a USB-C input output on the side, a button on the other side, four little lights,                 |
| 01:16:08   | and then it had, on the top, a little flip-up lightning connector. I looked at this and went,            |
| 01:16:13   | huh, I like this as a thing, but I don't want lightning. I'm pretty certain it feels like                |
| 01:16:21   | the next iPhone is going to be USB-C. I feel like now's the time I should stop buying lightning          |
| 01:16:25   | accessories. So, I didn't buy it, and then Anker came out with a USB-C one. They said I                  |
| 01:16:32   | was shipping, and it was going to arrive between the 13th and the 27th of October.                       |
| 01:16:36   | As of the 13th of September, that little battery pack was in my hand, so that was the day after          |
| 01:16:42   | the iPhone event. It's a lovely shade of sort of a grayish-blue, I think it'll go nicely with            |
| 01:16:48   | the grayish-blue iPhone that I'm planning on ordering, or I've set up my pre-order for and               |
| 01:16:54   | will hopefully be receiving. But yeah, it's just 5,000mAh, so it'll give me a bit of extra time,         |
| 01:16:59   | but I love the fact that I can plug this into an iPad, an iPhone, or even into an Android device         |
| 01:17:06   | if somebody, you know, one of my friends or colleagues perhaps needs some charging.                      |
| 01:17:11   | And yeah, it's pretty tiny, pretty useful, so I'm pretty excited by that.                                |
| 01:17:15   | Well, I mean, so much charges off USB-C now, even like a little microphone or whatever,                  |
| 01:17:21   | so that's kind of what they advantage of it. And it's a nice cute little device because it's got,        |
| 01:17:25   | like you said, it's only a 5,000mAh battery, so it's not very big, but it just has a male USB-C          |
| 01:17:34   | plug sticking out of it, so you don't need to deal with a cable.                                         |
| 01:17:36   | Yeah, and that folds away as well, so it's not going to get damaged.                                     |
| 01:17:40   | Oh, it folds into the thing?                                                                             |
| 01:17:42   | Yeah, yeah, it folds in. And also, I should mention, this charge is 22.5 watts,                          |
| 01:17:47   | so it's pretty speedy, which is very nice. So yeah, excited about that.                                  |
| 01:17:53   | You always tempt me. You always tempt me. I'm sorry, David, but, you know, I did tempt you               |
| 01:17:57   | in other ways recently because, I mean, I've been playing with some upgrades to my 3D printer,           |
| 01:18:03   | and I've been upgrading, you know, the board and stuff inside of it to try and make it quieter.          |
| 01:18:08   | And I think, even though I didn't tell you I was doing that, I think that may have                       |
| 01:18:12   | done something to you because you seem to have bought a 3D printer.                                      |
| 01:18:17   | Yeah, we're going to talk about that automators max. We're going to talk about automation 3D             |
| 01:18:20   | printing because I feel like there's a crossover there. I invested in the flick buttons,                 |
| 01:18:27   | and I've been having trouble with them. They're just not consistent, and then when you go to             |
| 01:18:34   | change the battery in them, they sometimes just fall apart on you. I don't know why,                     |
| 01:18:40   | because they work so good for so long, and I don't know if the batteries are failing,                    |
| 01:18:44   | but I've been replacing batteries, and they still aren't working as well. Maybe it's my fault,           |
| 01:18:48   | and there's something wrong with the network. I don't know, but I just decided I got a couple            |
| 01:18:54   | of CARA buttons in replacement, and they're much more stable for me, so I'm switching                    |
| 01:18:59   | those over to a [[Aqara]] where possible. But it's the same technique. It's just a button you can             |
| 01:19:04   | stick it anywhere, and you can click it once, twice, or a long press. But I have these things            |
| 01:19:09   | all over the place, and they're just super useful to turn lights off and on and do home                  |
| 01:19:14   | automation stuff, and they're not very expensive to buy the a [[Aqara]] one, so I bought five of them.        |
| 01:19:21   | And now every desk I sit at, I've got the ability to manage the lights and do some                       |
| 01:19:26   | automation stuff, but it's very basic home automation. But if you have even just the                     |
| 01:19:31   | real basic home kit, no home assistant, nothing fancy, just the bare bones home kit,                     |
| 01:19:36   | these buttons are totally worth it, and I would recommend the a CARA ones.                               |
| 01:19:40   | Yeah, yeah, they're great. They're tiny. So I've got small ones, and then I've recently                  |
| 01:19:48   | been playing with some of their bigger buttons, the a Aqara Opple switches, which look a little bit       |
| 01:19:54   | more like a regular European, I guess, light switch, and they're large and square, but they can have     |
| 01:20:03   | four or even six buttons on them, but each of those responds to single press, double press,              |
| 01:20:07   | long press, and some of them even respond to triple press, which I'm not going for the triple press.     |
| 01:20:12   | I have enough problems differentiating between the double back tap and triple back tap on my iPhone,     |
| 01:20:18   | though some of that's probably the case that my phone is in and detection there. But yeah,               |
| 01:20:26   | it's really nice to have those as options, and they just use standard CR2032 batteries as well.         |
| 01:20:32   | So if they're running out, then those little watch batteries, it's not difficult to have a               |
| 01:20:36   | couple of those in a little, I really love those plastic mesh sip wallets. I have those for              |
| 01:20:44   | organising cables, so I've got like one for USB-A to lightning cables, one for USB-C to                  |
| 01:20:49   | lightning cables, guess what? I'm not going to need a lot more of in a couple of weeks                   |
| 01:20:53   | when this episode airs. Go B.L.s would pretty much donate those packs to my parents, but it's            |
| 01:20:59   | really nice to just know that, okay, these are the batteries for smart home stuff, and they're           |
| 01:21:05   | labeled, and you know, you can even stick a post-it note in there that tells you what device is          |
| 01:21:08   | there for. But yeah, that's something that I love. But I mean, don't you have like AirPods and a         |
| 01:21:16   | couple of, I still have some lightning stuff around. I need the lightning cables for a while.            |
| 01:21:21   | Yeah, I'm going to have AirPods Pro and AirPods Max, which we'll be using lightning,                     |
| 01:21:28   | and it doesn't look like you can just buy a USB-C case for AirPods Pro, which is kind of                 |
| 01:21:32   | sad slash annoying. But what I actually use, at least for AirPods and AirPods Pro, I'm not               |
| 01:21:39   | currently using it for the AirPods Max because I usually plug it in via cable when I'm recording a       |
| 01:21:45   | podcast, you know, that very expensive lightning to 3.5 millimeter cable that you get. But what I        |
| 01:21:54   | use for the other two is Charge ASAP cables. And so these have like a little magnetic connector          |
| 01:22:00   | that plugs into the lightning port, and then it's sort of, it's like Mac safe. So I either use that      |
| 01:22:05   | or wireless charging, like I stick it on a Mac safe charger or just a G charger and off they go.         |
| 01:22:13   | Yeah, it is sad how many lightning cables I have accumulated that I don't need anymore.                  |
| 01:22:20   | Anyway, that, well, that's cool. I'm glad that you like your battery. I like my switches.                |
| 01:22:27   | This is not automation rocket science, but the little switches if you've never tried them before         |
| 01:22:31   | are quite helpful, particularly if you have gone down the home automation lighting,                      |
| 01:22:36   | because it's nice to be able to like adjust the lighting very quickly                                    |
| 01:22:40   | when you're entering or leaving a room. Yeah, also pro tip for folks. If you've got, you know,           |
| 01:22:48   | muscle memory for light switches and stuff, you can just stick these like on top of light switches       |
| 01:22:53   | and have them toggle the light. And so it can just automatically toggle the light and turn it off        |
| 01:23:00   | and turn it on again, depending on what mode it's in. So that's honestly like one of the                 |
| 01:23:06   | really basic things I'd recommend that you start with and then go from there with different light        |
| 01:23:11   | levels and colours and stuff like that. But yeah, start with just toggling some lights on and off         |
| 01:23:16   | or opening, you know, a blind or, you know, turning on your TV, even that could be really useful.        |
| 01:23:24   | Either way, we are the automators. You can find us at relay.fm/automators.                         |
| 01:23:29   | Thank you to our sponsors, Vitally, Electric and HelloFresh. If you're doing something cool with          |
| 01:23:34   | these new automation actions that [[Apple]] just gave us, let us know. Like we said, we'd like to feature    |
| 01:23:39   | some of the listeners' interesting automations. So just drop us a note. The feedback form is             |
| 01:23:43   | right there at relay.fm/automators. And for those of you that are automators max supporters,       |
| 01:23:49   | that you get the ad-free extended version of the show, Rose and I are going to be talking about          |
| 01:23:53   | 3D printing and automation today. And either way, we'll see you next time. Goodbye, folks.               |
