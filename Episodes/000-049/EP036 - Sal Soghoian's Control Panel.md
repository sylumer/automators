---
status: "incomplete"
fc-date:
  year: 2019
  month: 11
  day: 08
fc-category: "podcast"
podcast: "Automators"
published: 2019-11-08
duration: 4821
formattedduration: "01:20:21"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Sal Soghoian"]
notetype: "episode"
showpage: "http://relay.fm/automators/36"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators036.mp3"
episode: 36
title: "36: Sal Soghoian's Control Panel"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Sal Soghoian returns to the Automators to share his ingenious Mac control panel built with an iPad, a Luna display connector, and some clever automation. Sal also updates us on the Omni JavaScript automation project.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Sal Soghoian]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 036 Discussion](https://talk.automators.fm/t/automators-36-sal-soghoians-control-panel/5953)

# Sponsors
- [[PDFpen (Sponsor)|PDFpen, from Smile]] - The ultimate tool for editing PDFs and go paperless.
- [[FreshBooks (Sponsor)|FreshBooks]] - Online invoicing made easy.
- [[Bottomless (Sponsor)|Bottomless]] - Re-ordering coffee based on your consumption.

# Show Notes
- [Sal Custom Accessibility Keyboard Panels](https://userautomation.com/article/blog0003.html)
- [macOS Automation](http://macosxautomation.com/)
- [manual:Scripting [Keyboard Maestro Wiki]](https://wiki.keyboardmaestro.com/manual/Scripting#Controlling_Keyboard_Maestro_Engine_via_Scripting)
- [Omni-Automation](https://omni-automation.com/)
- [Join our Slack Workspace - The Omni Group](https://www.omnigroup.com/slack/)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm David Sparks, and I'm joined by my co-host, Rosemary Orchard, and this is                     |
| 00:07      | The Automators, where we talk about how to automate your technology to do your work for                  |
| 00:12      | you.                                                                                                     |
| 00:13      | Hello, Rosemary Orchard.                                                                                 |
| 00:14      | Hello, David.                                                                                            |
| 00:15      | Shall we tell the listeners about how the leaves are out to get me, or shall we go back                  |
| 00:19      | to one of the best guests that we've had on Automators and just talk to him?                             |
| 00:23      | Well, now you've opened it up, but before we, we'll bring our guests in because our                      |
| 00:28      | guest has opinions as well.                                                                              |
| 00:30      | Welcome back to the show, Sal Soghoian.                                                                   |
| 00:33      | Greetings.                                                                                               |
| 00:34      | How are you guys?                                                                                        |
| 00:35      | Great.                                                                                                   |
| 00:36      | Sal, when we were up in San Francisco for [[WWDC]], Sal showed us a secret project he was working            |
| 00:43      | on.                                                                                                      |
| 00:44      | And my first question was, hey, how did you do that?                                                     |
| 00:48      | And when can we share this with the Automators audience?                                                 |
| 00:51      | It was the day we recorded the famous mousetrap game.                                                    |
| 00:56      | And gang, we can now share something with you that is very exciting and special.                         |
| 01:01      | Sal has combined Mac with iPad to create amazing automation.                                             |
| 01:06      | We're going to talk about it today.                                                                      |
| 01:07      | But since Rose raised the spectre of her nemesis, which is apparently leaves, what happened              |
| 01:17      | to you now, Rose?                                                                                        |
| 01:18      | Well, for everybody who didn't know, I broke my ankle at [[WWDC]].                                           |
| 01:22      | I was a scooter.                                                                                         |
| 01:23      | I had a leaf.                                                                                            |
| 01:24      | The leaf shredded.                                                                                       |
| 01:25      | I attempted to do a very crazy stun and ended it with a broken ankle.                                    |
| 01:30      | This time, I was leaving work last week.                                                                 |
| 01:32      | There were no scooters involved.                                                                         |
| 01:34      | There were two of my feet and a lot of leaves, and I slipped and fell, and I've now got two              |
| 01:38      | stitches, unfortunately.                                                                                 |
| 01:39      | But the good news is, as a recording, they should be coming out tomorrow.                                |
| 01:43      | So no major damage.                                                                                      |
| 01:45      | And most importantly, none of my technology was damaged, which allows me to keep on automating.          |
| 01:49      | I'm imagining in the forum there will be a new thread about shoe recommendations for                     |
| 01:55      | Rose.                                                                                                    |
| 01:56      | Well, somebody already suggested that they should buy me a leaf blower, so I don't know.                 |
| 02:02      | A cordless one that can just tick with you everywhere you go and just blow leaves in                     |
| 02:07      | front of you.                                                                                            |
| 02:08      | It's like a jetpack, only not as cool.                                                                   |
| 02:11      | Except you would go backwards or attach one of those sweeper brooms to your belt buckle.                 |
| 02:21      | So everywhere you walk, you're just sweeping right in front of you.                                      |
| 02:25      | Well, I mean, let's see if we can automate this any better.                                              |
| 02:29      | Suggestions are welcome in the forums.                                                                   |
| 02:31      | Well, Sal, welcome back to the show.                                                                     |
| 02:35      | For the listeners who don't know Sal, he was one of the prime movers behind [[AppleScript]]                 |
| 02:41      | and Otto the Automator at [[Apple]] for many years.                                                          |
| 02:46      | He's not with [[Apple]] now, which means we get to talk to him and see all the cool automation               |
| 02:50      | he's making on the outside.                                                                              |
| 02:52      | And just as always, welcome back.                                                                        |
| 02:54      | Thank you so much for having me on your show.                                                            |
| 02:58      | I love your podcast.                                                                                     |
| 03:00      | And I'm so grateful that you guys make such a huge contribution to the automation community.             |
| 03:08      | Thank you for that.                                                                                      |
| 03:12      | All of us are standing on your shoulders to a certain extent with all the great work you've              |
| 03:15      | done over the years.                                                                                     |
| 03:18      | And like you were guest number one on this show, and the microphone is always available                  |
| 03:22      | for you when you have something new to show.                                                             |
| 03:24      | And today is one of those examples.                                                                      |
| 03:27      | So let me just tell you what I saw as a friend when I went over to your house and saw what               |
| 03:35      | you were doing so the listeners can get an idea.                                                         |
| 03:38      | And gang, we've got videos and Sal's got a website and he's even going to have some                      |
| 03:42      | downloadable scripts for you so you're going to be able to do all this at home.                          |
| 03:45      | But so I'm over at his house.                                                                            |
| 03:47      | We're playing Mousetrap.                                                                                 |
| 03:48      | He's like, hey, let me show you something.                                                               |
| 03:50      | You got a minute.                                                                                        |
| 03:51      | And like, of course, Sal says, I want to show you something.                                             |
| 03:54      | I want to see it, right?                                                                                 |
| 03:56      | So we go down into the Batcave and he's got his laptop sitting there.                                    |
| 04:01      | And he's got an iPad next to it.                                                                         |
| 04:04      | And he pushes a button and the iPad lights up with like a control centre for the Mac.                    |
| 04:11      | It's got a rows of applications.                                                                         |
| 04:13      | It's got rows of setting commands.                                                                       |
| 04:16      | And he taps something on the glass of his iPad and things start happening on his Mac.                    |
| 04:22      | And even better, there's a button there for [[Keynote]].                                                     |
| 04:25      | He taps [[Keynote]].                                                                                         |
| 04:26      | It opens up the [[Keynote]] app on the Mac and then the iPad completely reconfigures itself                  |
| 04:33      | as a [[Keynote]] control panel.                                                                              |
| 04:36      | So you can see all the things.                                                                           |
| 04:38      | Create a new slide, change a font, whatever you need to do in [[Keynote]].                                   |
| 04:42      | You can do it by tapping a button on your iPad.                                                          |
| 04:45      | So how did you do that?                                                                                  |
| 04:50      | It's all magic.                                                                                          |
| 04:52      | It's contextually sensitive.                                                                             |
| 04:54      | I mean, it's an amazingly powerful way to use an iPad with a Mac because, you know, when                 |
| 05:00      | you open [[Keynote]], you get your iPad turns into the [[Keynote]] support device.                               |
| 05:04      | And then when you open Pages, it turns into the Pages support device.                                    |
| 05:09      | And this is something that users can customise.                                                          |
| 05:12      | They can lay out the buttons the way they want and they put in the apps the way they                     |
| 05:16      | want.                                                                                                    |
| 05:17      | And it never occurred to me the way you did it.                                                          |
| 05:20      | It's kind of ingenious.                                                                                  |
| 05:21      | So I guess we should start sharing some of the magic tricks.                                             |
| 05:24      | It's all based upon the tremendous work that the accessibility team at [[Apple]] has done.                   |
| 05:30      | A lot of people are aware of what they do, more so on iOS.                                               |
| 05:37      | But if you really dig into the level of integration that they have, it's tremendous amount of            |
| 05:44      | really high quality and helpful tools that they've put in place.                                         |
| 05:50      | And one of which is they have something called the Accessibility Keyboard.                               |
| 05:57      | And using that, it creates a floating panel window that you can position on your Mac.                    |
| 06:03      | Or in this case, if you're using like a Luna display module, you can position it over on                 |
| 06:10      | your iPad and when you tap on the particular keys, they respond.                                         |
| 06:18      | And the nice thing about the accessibility frameworks is the way that they've implemented                |
| 06:25      | the ability for you to customise to your needs.                                                          |
| 06:30      | And you can create your own accessibility keyboard panels, which are basically just windows              |
| 06:37      | with buttons that you assign to have certain functions.                                                  |
| 06:41      | And I was exploring that and exploring using a Luna display.                                             |
| 06:47      | And I was just so thrilled with what I was able to come up with because they put in the                  |
| 06:52      | ability for a button to run a script, an [[AppleScript]] script.                                            |
| 06:56      | And once you have that, then you can take an app like [[Keynote]] that's really scriptable                   |
| 07:02      | and everything becomes possible.                                                                         |
| 07:05      | Yeah, you've got to really peel this onion because you get to the accessibility pane                     |
| 07:10      | on your Mac.                                                                                             |
| 07:12      | And we're going to be jumping back and forth between Mac and iPad with this discussion.                  |
| 07:17      | But it's driven by the Mac.                                                                              |
| 07:19      | But you go to the accessibility panel and you say, show me the accessibility keyboard                    |
| 07:23      | and it puts a keyboard on your screen, which for some folks is the way they need to interact             |
| 07:29      | with a keyboard.                                                                                         |
| 07:32      | But the bit that goes beyond it is you can make custom keyboards in that accessibility                   |
| 07:38      | panel.                                                                                                   |
| 07:40      | And that's the magic, really, because what you did, what he did was he created a custom                  |
| 07:45      | keyboard and then you can lay out the buttons any way you want.                                          |
| 07:50      | And it is very automation-friendly because once you create a button, like I can put a                    |
| 07:54      | button on the screen that says OmniFocus.                                                                |
| 07:58      | And then I can make that a button that has the word OmniFocus or I can grab the icon                     |
| 08:04      | and put it in there as the OmniFocus icon.                                                               |
| 08:07      | But then whatever object I put there, it becomes a button.                                               |
| 08:12      | And then using the panel, which is very user-friendly, you can tie that button to a variety of different |
| 08:19      | actions.                                                                                                 |
| 08:20      | So you can use it to navigate.                                                                           |
| 08:23      | You can use it to enter text.                                                                            |
| 08:25      | So it can type text for you.                                                                             |
| 08:27      | It can open an application, which is how he had that panel that crossed the top.                         |
| 08:32      | All the different apps, you just tap the app icon and it jumps to the app.                               |
| 08:35      | You can open the application there.                                                                      |
| 08:37      | But you can also run system events.                                                                      |
| 08:41      | You can, they have a thing called Dwell, which I'll have you explain later.                              |
| 08:46      | And most importantly for automation, you can run an [[AppleScript]] based on that button.                   |
| 08:51      | So if you can visualise it, you can use this custom keyboard creator to lay out a keyboard               |
| 08:59      | full of buttons that you like.                                                                           |
| 09:00      | Like I'm going to make one on OmniFocus because there's all this OmniFocus [[JavaScript]] stuff              |
| 09:07      | coming out.                                                                                              |
| 09:08      | I'm going to figure out how to do that with this system.                                                 |
| 09:10      | Well, I have been playing with that as a cell.                                                           |
| 09:13      | And it's what I really like about this as well is, of course, because this is an accessibility           |
| 09:18      | keyboard, it's targeted at people who [[Apple]] knows have an accessibility issue, which means               |
| 09:24      | that we get the advantage of we can set the colours and the font size is in the font colours               |
| 09:30      | for every single button, which means that not only can you make it accessible.                           |
| 09:34      | So for example, if you have a colour blend this or something, then you can make sure                      |
| 09:37      | that these are colours that you can actually differentiate between.                                       |
| 09:40      | But it also means that, for example, my OmniFocus stuff can be various shades of purple, whereas         |
| 09:44      | my OmniOutliner stuff could be various shades of yellow, just to help me identify which                  |
| 09:49      | panel I'm on very quickly.                                                                               |
| 09:51      | And I really like that, though I'm a little disappointed that you can't have like L cars                 |
| 09:55      | shape buttons.                                                                                           |
| 09:56      | You're limited to square and rectangular buttons, so I can't have a Star Trek display, which             |
| 10:01      | did make me a little bit sad when I first started playing with this.                                     |
| 10:04      | Yeah.                                                                                                    |
| 10:05      | And then of course, you can always have images.                                                          |
| 10:08      | I used, in my example panel for [[Keynote]], I used a lot of application icons as the buttons.               |
| 10:17      | And that makes it really easy to distinguish between the apps that you want to switch                    |
| 10:24      | to and some of the kind of functions.                                                                    |
| 10:27      | I have a button on my example keyboard panel that is for [[AirDrop]].                                        |
| 10:33      | And what it does is a simple thing.                                                                      |
| 10:35      | It goes to the Finder, opens up a new window, and sets it for AirDrop.                                   |
| 10:40      | And how many times have you wanted to send a file over to the Mac, but you have to go                    |
| 10:44      | through this process of setting it up to be receiving.                                                   |
| 10:47      | And this is now just a simple touch, and it does all of that automatically.                              |
| 10:52      | And those are the kind of functionality that you can build into your own keyboard.                       |
| 10:58      | And you can also think about how you design them as far as access.                                       |
| 11:04      | You become your own UI designer with these things.                                                       |
| 11:07      | For example, I have a key accessibility panel for [[Keynote]].                                               |
| 11:14      | I also have one for other apps like Photos and Maps.                                                     |
| 11:19      | And I use the same type of configuration idea with each panel.                                           |
| 11:24      | So the top two rows are just for navigating between apps.                                                |
| 11:28      | So the top two rows of buttons are just for navigation.                                                  |
| 11:32      | The bottom row of buttons is for certain places in the System Preferences app I go to.                   |
| 11:38      | And that stays the same no matter which app is in the foreground and which panel is now                  |
| 11:43      | displayed.                                                                                               |
| 11:45      | So I have muscle memory as to how to get around and navigate.                                            |
| 11:50      | And that's just a strategy that you can use when you're creating your own as well.                       |
| 11:55      | And put your main app buttons for the particular frontmost app in the centre of the panel,               |
| 12:00      | where they're easy to get within one hand.                                                               |
| 12:05      | So let's break some of those down.                                                                       |
| 12:06      | So the top two rows are your app launchers.                                                              |
| 12:10      | How are those constructed?                                                                               |
| 12:12      | They're used, as you mentioned, when you create a button in the Panel Editor application.                |
| 12:19      | The Panel Editor application is accessed from the Accessibility System Preference pane.                  |
| 12:25      | And as it's demonstrated in the instructional video.                                                     |
| 12:32      | Once you've launched the Panel Editor and you've added a button to your panel, one of                    |
| 12:38      | the standard actions that's available to you is open or launch an app.                                   |
| 12:43      | And you simply say that's the action I want to open an app and it brings up an app picking               |
| 12:48      | dialogue.                                                                                                |
| 12:49      | You pick the app that you want to have it activate and then that's it.                                   |
| 12:54      | Once the panel has been turned on and it's available, tapping that button will bring                     |
| 13:01      | that application forward.                                                                                |
| 13:04      | And the other interesting thing that shows you the quality of the work and thought that                  |
| 13:09      | they've put into the accessibility frameworks is that you can assign a panel to be visible               |
| 13:17      | when a specific application is frontmost.                                                                |
| 13:21      | So I can say I want this panel to be visible when [[Keynote]] is the frontmost app or when the               |
| 13:28      | finders are frontmost app or both of those.                                                              |
| 13:32      | So you can have it so that the panel switch automatically as the app changes in the foreground.          |
| 13:40      | So if you go from [[Keynote]] to Maps, the panel will reflect that and show the controls for                 |
| 13:47      | maps.                                                                                                    |
| 13:49      | And then if you use a strategy like I indicated where you have certain rows of buttons that              |
| 13:56      | stay the same on each one of the panels, then it becomes really easy to navigate around.                 |
| 14:03      | I have a row of like 12 different buttons of the apps that I use the most and I can                      |
| 14:10      | switch between them instantaneously.                                                                     |
| 14:13      | The second row is more functionality and I even have a button for Siri.                                  |
| 14:20      | A lot of people don't know that there are actually little small apps that you can use                    |
| 14:26      | to launch Mission Control and launch Siri and launch screen capture.                                     |
| 14:32      | And you can use those as apps that you can have open for you with a button.                              |
| 14:40      | So if I want to have Siri find me a file on my hard drive, for example, I have a button                  |
| 14:47      | there with a Siri icon.                                                                                  |
| 14:48      | I just tap that and Siri shows up and I say, you know, find me the presentation states                   |
| 14:54      | of the United States and it will find it and open it for me.                                             |
| 14:59      | So that's the level of integration and possibilities that you have with these accessibility controls.    |
| 15:07      | It's basic concept that once you understand, you have a button that gets assigned to action.             |
| 15:12      | Once you make that correlation between the two, then the world's your oyster.                            |
| 15:17      | You can design what you like.                                                                            |
| 15:19      | And the thing, a couple of points that add to that is number one, that once you understand               |
| 15:24      | the contextual sensitivity of them, you can make it respond to whatever app you're working               |
| 15:30      | in.                                                                                                      |
| 15:31      | So when you're in OmniFocus, your OmniFocus tool show up.                                                |
| 15:33      | When you're in [[Apple Mail]], your Mail tool show up.                                                       |
| 15:36      | So that really opens the world up for you.                                                               |
| 15:40      | The other thing I would say is, you know, sometimes [[Apple]] gets a hard time for software,                 |
| 15:44      | especially recently.                                                                                     |
| 15:46      | One thing you never hear any complaints about is that accessibility team.                                |
| 15:49      | They just keep bringing the goods on all the [[Apple]] platforms.                                            |
| 15:54      | The voice control thing that they just did with the most recent releases is a total game                 |
| 15:58      | changer for me.                                                                                          |
| 15:59      | I use it every day.                                                                                      |
| 16:00      | Yes.                                                                                                     |
| 16:01      | I just want to go back a sec because you said that you have the same buttons at the top                  |
| 16:06      | and the bottom of each of your panels.                                                                   |
| 16:10      | Is there a way that you can reference things, or are you just creating one master template               |
| 16:15      | and then duplicating that?                                                                               |
| 16:17      | What I did is I created a base template that had all of the buttons in the positions that                |
| 16:26      | I wanted, and then I populated that with my apps and my functions and my system preferences.             |
| 16:33      | And then you just duplicate that, make a copy of it, and then each panel.                                |
| 16:39      | So I would duplicate it, make the duplicate called [[Keynote]], duplicate that, make the duplicate           |
| 16:45      | called Pages, same process.                                                                              |
| 16:48      | And that way you could have the same buttons on each panel in the same exact position.                   |
| 16:54      | I found it was easiest to start with creating, what do I want my basic panel to be?                      |
| 17:01      | So I used a 4 by 3 aspect ratio so that it fills up my iPad Pro.                                         |
| 17:07      | It gives me about almost a half inch around the edges so that you can move it out of the                 |
| 17:13      | way easily if you want to get to underneath.                                                             |
| 17:16      | But it basically fills up the iPad Pro, and I put the iPad Pro on a slight tilt using                    |
| 17:21      | the [[Apple]] case, and I find that it's really perfect for, I'm at the keyboard on my laptop                |
| 17:30      | and I just reach to the right and tap, and I'm finding that the more I use it, the less                  |
| 17:35      | I actually look, it's just somehow my hand knows where to go.                                            |
| 17:40      | And it's really, really useful.                                                                          |
| 17:42      | It's almost like playing the piano, once you get rolling with it, you don't have to think                |
| 17:46      | about it.                                                                                                |
| 17:47      | Just stuff happens, you put your hand down and things happen.                                            |
| 17:50      | Yeah, and the best part is that these are things that you want.                                          |
| 17:56      | You don't have to hope that the developer makes a button to does whatever you like.                      |
| 18:02      | You can do it yourself, and it looks the way you want, and it's in the position you want.                |
| 18:09      | And if you want to change it, you can always add another one.                                            |
| 18:13      | And you can add a button in your panel that will allow you to switch to another panel.                   |
| 18:19      | So you can have contextual panels or versions of your panel that you can go between.                     |
| 18:25      | So I could have three different panels that all deal with [[Keynote]], but provide an entirely               |
| 18:31      | different set of buttons and things, and then switch between them, if that's what you want               |
| 18:36      | to do.                                                                                                   |
| 18:37      | I'm just trying to think of all of the possible implications of this, lots of ideas.                     |
| 18:44      | This episode of The Automators is brought to you by Bottomless, making reordering coffee                 |
| 18:49      | based on your consumption easy.                                                                          |
| 18:51      | Get three months of free shipping in your first bag for just $10 by going to bottomless.com              |
| 18:57      |/automators.                                                                                        |
| 18:59      | People don't consume the same amount of coffee every day.                                                |
| 19:02      | Sometimes we're on vacation, or some days we just need that extra cup.                                   |
| 19:07      | Bottomless takes all of that into account and adjusts to your busy life.                                 |
| 19:10      | It reorders coffee for you based on your exact consumption so it arrives at the perfect time.            |
| 19:16      | So how do they do this?                                                                                  |
| 19:18      | Well, Bottomless sends you a smart Wi-Fi scale with your first coffee order at no extra charge.          |
| 19:23      | It tracks the weight of your coffee and reorders a new bag to arrive before you run out.                 |
| 19:28      | The scale lasts for 12 months on a single charge.                                                        |
| 19:31      | Just set it up with Wi-Fi once, then put it wherever you store your coffee.                              |
| 19:36      | Then you never have to worry again.                                                                      |
| 19:38      | And because bottomless can predict your consumption ahead of time, bottomless can save you time          |
| 19:42      | and money by providing you a more convenient and fresh experience at the same price as                   |
| 19:48      | the grocery store.                                                                                       |
| 19:50      | Bottomless works directly with coffee roasters across the United States, so when you get                 |
| 19:54      | low, they'll roast specifically for you.                                                                 |
| 19:57      | To put it simply, with bottomless you'll pay the same as you do with a grocery store,                    |
| 20:01      | but it'll be more convenient and fresh.                                                                  |
| 20:04      | And of course, bottomless has a special offer for Automators podcast listeners.                          |
| 20:08      | If you go to bottomless.com/automators, you'll get three months of free shipping                   |
| 20:13      | and your first bag for just $10.                                                                         |
| 20:15      | That's right, three months of free shipping in your first bag for just $10 at bottomless.com             |
| 20:20      |/automators.                                                                                        |
| 20:22      | Everybody needs their coffee.                                                                            |
| 20:24      | Why don't you add some technology, make it easier, get exactly what you need with bottomless.            |
| 20:29      | Head over to bottomless.com/automators to get set up, and thank you bottomless for                 |
| 20:34      | supporting the automators.                                                                               |
| 20:36      | You know, something you said earlier about these little apps like the Siri Launching                     |
| 20:41      | app, I never realised it was there.                                                                      |
| 20:44      | I thought, well, he must have found that in some buried folder.                                          |
| 20:47      | No, it's in the root folder of applications.                                                             |
| 20:49      | Yeah, I never even knew that was there.                                                                  |
| 20:53      | They're designed just for this purpose.                                                                  |
| 20:55      | If you need to be able to launch that because of accessibility issues, there's a little                  |
| 21:02      | app that will do that for you.                                                                           |
| 21:05      | And you can then take that and say, hey, that's going to be the app I want to open.                      |
| 21:11      | This is exciting because, of course, as well as opening apps, it will come to the running                |
| 21:17      | scripts and so on in a bit, but you can also have buttons which do typing suggestions,                   |
| 21:22      | which replicates the touch bar, if I'm understanding correctly.                                          |
| 21:25      | So on the touch bar, when you're typing, it can come up with typing suggestions, just                    |
| 21:29      | like iOS.                                                                                                |
| 21:31      | And so for people that don't have a machine with a touch bar on, so for example, the new                 |
| 21:36      | MacBook Air or an iMac or a Mac mini, you can have those typing suggestions that, hmm,                   |
| 21:43      | this offers, of course, even more options if that's something that you want.                             |
| 21:47      | And, of course, you can only have it show in certain applications.                                       |
| 21:49      | So for example, the writing applications, but maybe not, I don't know, keynote where                     |
| 21:53      | you rarely need those.                                                                                   |
| 21:55      | Well, actually, if you, you can have one of the actions of a button to be insert text.                   |
| 22:02      | So if you have something like a copyright notice or something like that, what David                      |
| 22:06      | does as a legal professional, you can have buttons that will insert text in the current                  |
| 22:13      | text field.                                                                                              |
| 22:14      | You can also have the contents of the current text field show in your panel window and edit              |
| 22:20      | it there.                                                                                                |
| 22:22      | And if you use the standard accessibility keyboard, you can input on your iPad into                      |
| 22:28      | your Mac and then go switch right back to the panel that you're working from.                            |
| 22:34      | Yeah.                                                                                                    |
| 22:35      | On the theme of key presses, you can also do a key press.                                                |
| 22:38      | So any command that's in the application, like, you know, was it, my fingers know, was                   |
| 22:45      | it command shift D to send an email, I have to look at the keyboard.                                     |
| 22:49      | But the, that's send an email.                                                                           |
| 22:51      | You can say do a key press command shift D and send an email.                                            |
| 22:56      | Or if you've got a command that's in your menu bar, but doesn't have a keyboard shortcut                 |
| 23:00      | attached to it, you can use the keyboard preferences pane to create a keyboard shortcut for it.          |
| 23:07      | And then you can go ahead and access it through this mechanism so you can have a button for              |
| 23:11      | it on your iPad.                                                                                         |
| 23:13      | Yeah.                                                                                                    |
| 23:14      | So any keyboard combinations that you want, you can store in as a button on these panels.                |
| 23:22      | It's really remarkable the level of detail that they've provided.                                        |
| 23:28      | And if you think about, if we take this example of the keynote keyboard accessibility panel,             |
| 23:38      | it's amazing how much functionality is there.                                                            |
| 23:40      | And for example, one of the things I noticed is when I create a slide, I apply a transition              |
| 23:46      | to it.                                                                                                   |
| 23:47      | Applying a transition, I go tap.                                                                         |
| 23:49      | I just applied the transition I want, like dissolve.                                                     |
| 23:54      | And then I have two columns of time increments, everything from, you know, quarter second,               |
| 24:01      | half second, three quarters, one second, 1.25, et cetera.                                                |
| 24:05      | And then I go tap and I've assigned the time.                                                            |
| 24:08      | I can also say whether it's going to be on click or automatically and any kind of delay                  |
| 24:13      | that I want.                                                                                             |
| 24:15      | So I can set a slide up.                                                                                 |
| 24:17      | I can change its master and assign its transition in about two seconds.                                  |
| 24:24      | It's remarkable.                                                                                         |
| 24:27      | And I don't have to, you know, go through the interface on keynote and pop this up and                   |
| 24:32      | do this or whatever.                                                                                     |
| 24:33      | It's just, it's done.                                                                                    |
| 24:36      | I can insert a new slide.                                                                                |
| 24:38      | Change its master, assign a transition and a duration in two seconds.                                    |
| 24:45      | And I just checked.                                                                                      |
| 24:46      | That takes, like, seven clicks, assuming that you get everything right the first time because            |
| 24:51      | you tap, you click add slide, then you select your slide master.                                         |
| 24:54      | And then you select animate.                                                                             |
| 24:56      | You have to switch to the animate tab if you're not already in it.                                       |
| 24:59      | Then you have to choose your transition.                                                                 |
| 25:00      | Then you have to set your transition, set the duration and set your, if it's on click                    |
| 25:06      | or automatically.                                                                                        |
| 25:09      | That's a lot of clicks versus a couple of taps.                                                          |
| 25:11      | And if you set up your defaults, right, then you, which you of course can do with this,                  |
| 25:17      | then maybe you actually don't need any of that because you can have one button that                      |
| 25:21      | inserts a new slide with your preferred master, with your preferred transition done.                     |
| 25:26      | Exactly.                                                                                                 |
| 25:28      | What I figured out was my comment that I figured I had insert slide at current selection or              |
| 25:34      | a pen slide to the end.                                                                                  |
| 25:37      | And then I would just do insert and would put a blank and then tap the master I want.                    |
| 25:43      | And then it's still selected and then hit the, the transition, then hit the duration.                    |
| 25:48      | And you just go, and you're done.                                                                        |
| 25:52      | Of course, like you said, you could take all of that and put that all on one button.                     |
| 25:57      | So, you know, if you, if you have the Rosemary introduction slide, whoop, it just becomes                |
| 26:04      | a button.                                                                                                |
| 26:05      | And it's so, so productive.                                                                              |
| 26:08      | And I can really see the advantages of, of doing this and we're taking the time to set                   |
| 26:14      | this up.                                                                                                 |
| 26:15      | It takes time to, you know, create these panels, figure out the logic behind what you want               |
| 26:22      | to do.                                                                                                   |
| 26:23      | And if you've done these, it's remarkable how much time it saves you on the computer.                    |
| 26:29      | And it's interesting, I find dynamically that you're doing it between a iOS device or iPad               |
| 26:38      | and your Mac.                                                                                            |
| 26:39      | Now, what about Sidecar?                                                                                 |
| 26:42      | I know that's something new in Catalina where they offered the ability to have your iPad                 |
| 26:50      | become an extension screen for your Mac.                                                                 |
| 26:53      | So you could say, I want my iPad Pro to sit over here and I'd like to take the, you know,                |
| 27:00      | panels from my [[Photoshop]] work and have them show over there, or I want a screen from this                |
| 27:06      | and I want that on there.                                                                                |
| 27:08      | And so, Sidecar has that ability to offer you that, but the problem is, is that Sidecar                  |
| 27:16      | only allows you to interact with your connected iPad via an [[Apple Pencil]] or a two-finger swipe           |
| 27:25      | for navigating a column of data.                                                                         |
| 27:29      | And unfortunately, they don't support touch.                                                             |
| 27:34      | So you can't use your finger as a touch and that means you can't, you know, hit a button.                |
| 27:41      | And I can understand why they limited that because they probably don't want to frustrate                 |
| 27:48      | people that would want to start using their finger to hit the file menu and trying to                    |
| 27:53      | navigate all of that, that, you know, they're not ready to expose that kind of stuff.                    |
| 27:58      | So they've disabled it, but it does limit what you can do using Sidecar.                                 |
| 28:05      | And that's why I was so impressed with the folks at Luna Display that they've implemented                |
| 28:10      | touch and you can have multi-touch interactions and still do everything else that you wanted             |
| 28:16      | to do with a device.                                                                                     |
| 28:18      | I'm really pleased with that and it's been quite responsive and fast.                                    |
| 28:23      | Yeah.                                                                                                    |
| 28:24      | I mean, even the wireless connection with the Luna Display, they used to be a sponsor                    |
| 28:27      | of Mac Power users.                                                                                      |
| 28:28      | I don't think they've sponsored this show, but...                                                        |
| 28:30      | They have sponsored automators once or twice, yes.                                                       |
| 28:33      | Okay.                                                                                                    |
| 28:34      | Sorry.                                                                                                   |
| 28:35      | That's okay.                                                                                             |
| 28:36      | But they're great folks and it's just another example.                                                   |
| 28:39      | Some of these companies get [[Sherlocking\|Sherlocked]] and they, for a lot of them, it just means that they                |
| 28:44      | make their product better.                                                                               |
| 28:45      | I mean, they want it to be, you know, [[Apple]] does the basic functionality with Luna.                      |
| 28:51      | Not only do they have the ability to use touch on your connected iPad, now they've added                 |
| 28:55      | a feature where you can connect to Macs using their device.                                              |
| 28:58      | So you can see that they're still pushing forward and I'm glad to hear that.                             |
| 29:02      | I think they're going to be very pleased with this.                                                      |
| 29:05      | Yeah.                                                                                                    |
| 29:06      | Yeah.                                                                                                    |
| 29:07      | We'll have to...                                                                                         |
| 29:08      | Have you shared this with them?                                                                          |
| 29:09      | I'm sure they'd be...                                                                                    |
| 29:10      | Nope.                                                                                                    |
| 29:11      | They'd love this.                                                                                        |
| 29:12      | This is the first time we're sharing this here.                                                          |
| 29:14      | Oh, this is the coming out party for the...                                                              |
| 29:16      | Yes.                                                                                                     |
| 29:17      | The custom accessibility keyboard iPad thing.                                                            |
| 29:21      | Yes.                                                                                                     |
| 29:22      | You know, it's something that I just really like the way you laid yours out, probably                    |
| 29:27      | because all your years at [[Apple]] and exposure to this, but it goes...                                     |
| 29:32      | When you're doing the keynote stuff, it just goes left to right.                                         |
| 29:34      | These laid out the user interface interactions in a way where you can tap from the left side             |
| 29:40      | of the screen to the right side of the screen, basically setting up your transitions and                 |
| 29:43      | then you just keep going to the right until you're done.                                                 |
| 29:48      | I think this sample you gave is really excellent, even if you're not a keynote user when you're          |
| 29:53      | planning these out for the apps that you do use.                                                         |
| 29:56      | Yeah.                                                                                                    |
| 29:57      | And there are things that you can do from this panel that you can't do in the app itself.                |
| 30:04      | And because you're using scripts to talk to the internal keynote application, you can                    |
| 30:11      | do things that you could not do in the interface.                                                        |
| 30:13      | For example, I have a button for panorama, creating a panoramic sequence.                                |
| 30:18      | So when you have a really wide image and it's on a slide, you have it set so that it fits                |
| 30:26      | in the slide horizontally, right?                                                                        |
| 30:28      | And then you have this thing.                                                                            |
| 30:30      | How would you present that?                                                                              |
| 30:32      | So what the button does is it runs a script that zooms the panoramic image full screen                   |
| 30:42      | at the left and then pans all the way over to the right and then returns to its original                 |
| 30:48      | perspective.                                                                                             |
| 30:50      | And it creates a series of four slides to do that and then it does it in about one and                   |
| 30:54      | a half seconds, which is pretty remarkable because it has to do calculations on the size                 |
| 31:00      | of the image and the size of the document and it figures to these horizontal offset                      |
| 31:06      | for you automatically.                                                                                   |
| 31:08      | And to do that through the traditional interface would be really, really difficult and time-consuming.   |
| 31:15      | Yet through this type of panel, wow, it's just like tap.                                                 |
| 31:19      | That's what I want.                                                                                      |
| 31:21      | Or sometimes I like to take the titles of images and overlay them on top of the image,                   |
| 31:28      | you know, and I have a button that just does that.                                                       |
| 31:32      | So it will go through every slide and automatically overlay the image title on top of it.                |
| 31:38      | Or I often use this one is when I'm working on a presentation, I want to hear these presenter            |
| 31:46      | notes.                                                                                                   |
| 31:47      | I don't want to read them.                                                                               |
| 31:48      | I want to hear them spoken to me.                                                                        |
| 31:50      | So I have a button there that will read the presenter notes for the current slide.                       |
| 31:54      | And the button is designed so that works whether I'm in edit mode or in presentation mode.               |
| 32:00      | So I could be in the middle of a presentation.                                                           |
| 32:02      | I'm trying to memorise and then I go, okay, what did I say?                                              |
| 32:05      | I'll just hit that button on the iPad and it will read the presenter notes to me.                        |
| 32:11      | And there's a corresponding one that does image metadata.                                                |
| 32:14      | So if I have a big image there and the image has metadata like a description about it that               |
| 32:20      | I'm trying to memorise, I can hit that button and it will read the image metadata while                  |
| 32:25      | I'm presenting or while I'm editing on it.                                                               |
| 32:29      | And those are just two features that don't exist in the keynote application.                             |
| 32:34      | They could, but they don't.                                                                              |
| 32:37      | And I find they're really useful to assist me in the process of creating a really comprehensive          |
| 32:43      | presentation.                                                                                            |
| 32:45      | One of the advantages of the fact that you're creating this for you to solve your problems,              |
| 32:52      | to solve, you know, the build tools that solve your needs.                                               |
| 32:57      | So like for instance, the metadata, I assume you're running an [[AppleScript]] that gets the                |
| 33:02      | information and just using the say command to speak it to you.                                           |
| 33:06      | Yeah.                                                                                                    |
| 33:07      | It's really just, you know, a couple lines of [[AppleScript]] because every image in keynote                |
| 33:13      | has a description field.                                                                                 |
| 33:16      | And if I've written my importing scripts, so when I automate the import of an image into                 |
| 33:23      | keynote, I actually go to the file and read the metadata out of the image file because                   |
| 33:29      | a lot of images have metadata in them.                                                                   |
| 33:31      | They actually have descriptions about what the image is.                                                 |
| 33:34      | They have the author where it was, the location data, all that.                                          |
| 33:38      | And I insert that in a description field in the presentation while I'm inserting the                     |
| 33:44      | photo into the document.                                                                                 |
| 33:46      | And then I can read it back and I'm like, oh, right.                                                     |
| 33:50      | That's this windmill from this location, not this windmill from that location.                           |
| 33:56      | I can just use that as a way to guide me.                                                                |
| 34:00      | It's tremendous potential here.                                                                          |
| 34:03      | And it's only limited by what it is you need it to do for you.                                           |
| 34:08      | And if you're an AppleScripter, you can put these together pretty easily.                               |
| 34:12      | If you're not an AppleScripter, you can go over to macosxautomation.com and just download                |
| 34:18      | a bunch of the scripts that Sal's written over the years.                                                |
| 34:21      | And you could turn those into buttons.                                                                   |
| 34:24      | It's pretty trivial.                                                                                     |
| 34:26      | I'm glad you mentioned that because there's a strategy behind the scripting of these that                |
| 34:32      | I'll share with your listeners.                                                                          |
| 34:36      | It has this great feature, it's called [[AppleScript]] Libraries.                                            |
| 34:40      | And an [[AppleScript]] library is just an [[AppleScript]] script that you put your favourite functions            |
| 34:48      | into this script.                                                                                        |
| 34:50      | And then you save that script and you put it in the Script Libraries folder in your                      |
| 34:55      | User Library folder.                                                                                     |
| 34:58      | So you go to your User Library folder and if there's not a folder called Script Libraries,               |
| 35:03      | then you create one and you create an [[AppleScript]] script file, save it, put it into that Script          |
| 35:13      | Libraries folder and it becomes integrated into the operating system and any script can                  |
| 35:20      | call that library and call functions from that library automatically.                                    |
| 35:25      | It's that easy.                                                                                          |
| 35:27      | So then what I do is I keep all my functions in one script.                                              |
| 35:33      | So if I need to update them or add to them or edit them or change something, it's in                     |
| 35:38      | one particular file that I can edit, save and move between machines if I need to.                        |
| 35:45      | To call that script, I use another little short [[AppleScript]] that says, tell script name                  |
| 35:51      | of my script library.                                                                                    |
| 35:54      | And then I put in the function whatever it is I'm calling, like, you know, new default                   |
| 36:00      | document and voila, it will execute that function from the Script Library for you automatically.         |
| 36:08      | And those are the scripts that I use to assign to these buttons.                                         |
| 36:13      | Each one of these buttons doesn't have complex scripts behind it.                                        |
| 36:17      | It just has a link to a function in my [[AppleScript]] library.                                              |
| 36:21      | So I have a library for each panel.                                                                      |
| 36:25      | Aha, so when I switch from the [[Keynote]] panel to the Photos panel, the buttons on the Photos              |
| 36:33      | panel connect to the Photos Script Library.                                                              |
| 36:39      | And that way it's really easy to keep track of everything and update it.                                 |
| 36:45      | It becomes a much simpler process.                                                                       |
| 36:47      | I had no idea about these [[AppleScript]] libraries until I watched your video on this.                      |
| 36:53      | I don't know how that never landed on my radar.                                                          |
| 36:57      | But I've got these folders full of tiny [[AppleScript\|AppleScripts]].                                                    |
| 37:01      | And that's on my list now.                                                                               |
| 37:02      | I'm going to start combining them into libraries.                                                        |
| 37:05      | It just makes so much more sense this way.                                                               |
| 37:07      | If you want to know the difference between macOS, iPadOS, and iOS, here's the big difference.            |
| 37:16      | You can create an [[AppleScript]] Script Library yourself that has all the different functions               |
| 37:22      | that you'd like to use.                                                                                  |
| 37:24      | They talk to applications, they talk to files, that even use [[AppleScript]] Objective-C to call             |
| 37:30      | into the frameworks if you want.                                                                         |
| 37:32      | You can save that, put it into the Script Libraries folder in your User Library folder, and it           |
| 37:38      | becomes part of the operating system.                                                                    |
| 37:41      | You can't do that on iOS or iPadOS.                                                                      |
| 37:45      | You're preventid from expanding the abilities of the operating system.                                   |
| 37:51      | You're not allowed to do that.                                                                           |
| 37:53      | And the difference between macOS and iOS is exactly that.                                                |
| 37:58      | That's the personification of why you want a Mac and why a Mac is a Mac and why an iPad                  |
| 38:07      | can't replace a Mac, because an iPad can't do that.                                                      |
| 38:11      | Which is unfortunate, but there are things coming to the iPad, which makes this a little                 |
| 38:15      | more useful.                                                                                             |
| 38:17      | The iPad, I love my iPad.                                                                                |
| 38:20      | I love working on it.                                                                                    |
| 38:22      | And I love scripting it with Omni Automation and watching it automate and move and do things.            |
| 38:30      | And I think it's really exciting.                                                                        |
| 38:32      | But there is a difference when you come to getting under the hood and creating those                     |
| 38:38      | kind of lower level tools as somebody that's not an application developer that has to go                 |
| 38:45      | through a submission process or a notarisation process.                                                  |
| 38:49      | I just want to be able to create this power tool, put it on my system, and have access                   |
| 38:56      | to it.                                                                                                   |
| 38:57      | Yeah, definitely.                                                                                        |
| 38:59      | It's really good that all of this is available to us.                                                    |
| 39:01      | And I should just point out as well, we did talk about Sidecar earlier, which is a possibility.          |
| 39:06      | But this works in Mojave as well, because I have not upgraded my Mac yet, or any of my                   |
| 39:12      | Macs, because I'm a little nervous about something's breaking.                                           |
| 39:16      | So, and I've been playing with this in Mojave today, and I am very excited to see that it's              |
| 39:21      | working because I think I'll have at least one machine running Mojave for at least a                     |
| 39:24      | few more months.                                                                                         |
| 39:25      | Yeah, the accessibility team did a great job of really creating the whole panel architecture             |
| 39:31      | and the editing architecture and really refining that for Mojave as well.                                |
| 39:37      | I just kind of started looking at this because of the new Sidecar feature got me thinking                |
| 39:43      | about, you know, well, what about connectivity?                                                          |
| 39:46      | And then I realised that, oh, they've got it blocked because they don't want your finger                 |
| 39:51      | touching the menus, okay, and maybe look for Luna.                                                       |
| 39:56      | And then I found Luna and said, oh my gosh, this is even better than I thought.                          |
| 40:01      | Yeah.                                                                                                    |
| 40:02      | And of course, you could theoretically put any of these panes on a second monitor and                    |
| 40:06      | use your mouse to go and click.                                                                          |
| 40:08      | But one of the advantages of using something like a Luna display is that you don't have                  |
| 40:12      | to pick up your mouse, move it off to the second monitor, find the right button and click,               |
| 40:17      | you just tap.                                                                                            |
| 40:18      | And there's some things that just, it works in my brain at any rate.                                     |
| 40:21      | When I can just reach out and touch it and things happen, it really does feel like I'm                   |
| 40:25      | doing magic.                                                                                             |
| 40:26      | And, you know, [[AppleScript]] is in many ways a little bit of magic sprinkled with some system              |
| 40:31      | events here and there.                                                                                   |
| 40:32      | Well, think about what you're presenting here is actually you're creating an entire extension            |
| 40:39      | architecture for [[Keynote]].                                                                                |
| 40:41      | So this would have to be extensions that were put into [[Keynote]], written, signed, notarised               |
| 40:48      | to be able to do each one of these little functions that have to be added into the application.          |
| 40:53      | And then they'd have to figure out some kind of way to expose those to a UI thing.                       |
| 40:59      | And the fact that this is so lightweight yet so powerful is the real distinguishing factor               |
| 41:05      | here.                                                                                                    |
| 41:06      | And it can be done by you.                                                                               |
| 41:08      | You don't have to be a programmer.                                                                       |
| 41:10      | You don't have to open up [[Xcode]].                                                                         |
| 41:12      | You don't have to submit something.                                                                      |
| 41:14      | This is your creating an accessibility tool that helps you and it's for use on your machine.             |
| 41:21      | It's just remarkable that you can do this.                                                               |
| 41:24      | And I totally encourage everybody to, you know, try this out.                                            |
| 41:29      | Even with a simple panel, just follow the instructional video.                                           |
| 41:32      | Try it out and see if it works for you, if there's things you can do and create these                    |
| 41:38      | tools yourself because really that's what automation is about, isn't it?                                 |
| 41:42      | Yeah.                                                                                                    |
| 41:43      | It's all about diving in and getting your own hands dirty and playing with it.                           |
| 41:47      | And it's just such a nice compliment because the iPad has this gorgeous screen and it's                  |
| 41:51      | just it's something that you're used to touching, you know, and we hear people speculating about         |
| 41:58      | a touchscreen Mac, but this gives you the advantage of a touchscreen combined with                       |
| 42:03      | a Mac.                                                                                                   |
| 42:04      | It's a very interesting concept and there is a learning curve putting this together.                     |
| 42:10      | But if you're listening to this show, you can figure it out.                                             |
| 42:13      | And we've got Sal made a 35 minute video explaining how he did it so you can watch the whole thing.      |
| 42:20      | This is not stuff.                                                                                       |
| 42:21      | This is not super difficult.                                                                             |
| 42:23      | I mean, for the basics of just getting something running where you can jump between apps and             |
| 42:28      | add a few buttons for keyboard shortcuts, it's ridiculously simple, you know, I think                    |
| 42:34      | the hardest part then is just figuring out how you're going to lay out the screen.                       |
| 42:38      | But once you start adding [[AppleScript]], it just adds so much more power.                                 |
| 42:43      | Definitely.                                                                                              |
| 42:44      | I mean, if you look at the opening slide, I have a picture of a power of not a power                     |
| 42:51      | book of a MacBook Pro with the iPad sitting next to it.                                                  |
| 42:55      | And you can see what this looks like when looking at it above.                                           |
| 42:58      | But if you look at the the MacBook Pro, you got the touch bar there and you have this                    |
| 43:04      | functionality, but it's limited to one row, half a row that you can swipe to get between                 |
| 43:12      | things when take that same concept of touch bar-ness of executing functions and things                    |
| 43:21      | through this interface, but put that on a larger scale where you have instead of one                     |
| 43:28      | row of touch bars, you have 20 rows of touch bar and you can configure this any way that                 |
| 43:34      | you want.                                                                                                |
| 43:36      | And when you take that concept, you can really see that this is an extension of an idea that             |
| 43:41      | [[Apple]] has already implemented in in their hardware and in their software.                                |
| 43:48      | It's just better and more customisable.                                                                  |
| 43:50      | Yeah.                                                                                                    |
| 43:52      | I could see, you know, if I was at [[Apple]], I would be advocating for each team to create                  |
| 43:58      | their own panel, a default panel and ship it with their their product, right?                            |
| 44:03      | So the keynote, the I work team would have a panel for keynote, they'd have a panel for                  |
| 44:08      | pages, a panel for numbers, they'd be a panel for photos.                                                |
| 44:13      | And you could at least have a default panel to start with for each one of those apps.                    |
| 44:18      | There's really no reason you couldn't do that.                                                           |
| 44:22      | And you would support that with the back end scripting on all of those apps as well.                     |
| 44:27      | Yeah, I agree.                                                                                           |
| 44:28      | I mean, you know, and [[Apple]] is trying to show the, you know, the synergy effect of buying                |
| 44:34      | multiple devices from them.                                                                              |
| 44:36      | This is a great example of how that could be done.                                                       |
| 44:40      | I love my [[Apple Pencil]], but the way that I want to use it, I can't use it on the devices.                |
| 44:48      | I want it to be a text input device.                                                                     |
| 44:52      | I'd like to be able in any text field to be able to do handwriting recognition and use                   |
| 44:58      | it as my main text input instead of typing.                                                              |
| 45:03      | But that's not possible.                                                                                 |
| 45:04      | You have to go to certain apps that are designed to do handwriting recognition, but it should            |
| 45:12      | be system wide and then that would be able to use the [[Apple Pencil]].                                      |
| 45:17      | Otherwise, as they currently have sidecar setup, it's really for annotating and for                      |
| 45:23      | doing artistic things.                                                                                   |
| 45:25      | And that's nice for a particular audience and a particular segment, but I would like                     |
| 45:31      | to see them increase that into handwriting recognition where it becomes text input system                |
| 45:38      | wide.                                                                                                    |
| 45:39      | Yeah, and it's interesting because when Microsoft first made a tablet computer years                     |
| 45:45      | ago when they weighed like five pounds and they had fans built into them, the text input,                |
| 45:52      | the stylus text input was there and it was actually pretty robust.                                       |
| 45:56      | You could print or you could handwrite and you could even, they have like extra commands.                |
| 46:01      | You could tap.                                                                                           |
| 46:02      | It was a, it was a good solid system for what it was and [[Apple]] has never done that here.                 |
| 46:08      | There've been third party apps over the years on the iPad that are keyboard replacement apps             |
| 46:13      | that will give you a handwriting keyboard, but none of them have really ever been that                   |
| 46:18      | great or survived.                                                                                       |
| 46:20      | I don't think any of them are really inactive development currently.                                     |
| 46:23      | Every once in a while, I'll go and look and I never can find one that's got like an update               |
| 46:26      | that's less than a year old.                                                                             |
| 46:28      | And, and this is something really that needs to be built into the operating system.                      |
| 46:34      | Can't understand the logic behind not implementing it because they have the code for doing that.         |
| 46:39      | That's just part of the operating system.                                                                |
| 46:40      | And I think at one time they actually shared that code with Microsoft when they made the                 |
| 46:45      | original agreement and Microsoft invested in [[Apple]], I think they were sharing some of                    |
| 46:50      | the handwriting code.                                                                                    |
| 46:52      | That was actually [[Apple]] code that they were working on together.                                         |
| 46:56      | So I know they have the abilities to do that.                                                            |
| 46:59      | Why they haven't exposed it at a system level, I'm not quite sure.                                       |
| 47:03      | I think it would make iPads even more useful than they are already.                                      |
| 47:09      | Do you think it's the Newton's stigma?                                                                   |
| 47:12      | You know, it's like everybody doesn't want to be saying they're making another Newton                    |
| 47:16      | so badly that they're not going to put handwriting in the iPad.                                          |
| 47:18      | I don't know.                                                                                            |
| 47:19      | Well, if that's the case, you got to get back on the horse, right?                                       |
| 47:24      | You have to have faith in yourself and your engineers that what you have now is so much                  |
| 47:31      | better and just do it right.                                                                             |
| 47:34      | And I think [[Apple]] has great tools for that.                                                              |
| 47:37      | And I think the quality of their handwriting recognition when they implemented it on an                  |
| 47:41      | app level is really good.                                                                                |
| 47:43      | So why not just turn that on and have that be part of the whole operating system?                        |
| 47:48      | Yeah, I agree.                                                                                           |
| 47:49      | I think it'd be great to be able to pull the [[Apple Pencil]] and just right across the bottom               |
| 47:53      | of the screen and have the tech show up.                                                                 |
| 47:55      | Hey, the next time you guys have Tim on, you could ask him that question.                                |
| 47:58      | Yeah.                                                                                                    |
| 47:59      | Well, he was going to be on today, but we canceled him because you were coming.                          |
| 48:04      | Yeah.                                                                                                    |
| 48:05      | Definitely.                                                                                              |
| 48:06      | Much more important guest.                                                                               |
| 48:08      | This episode of Automators is brought to you by PDFpen from our friends at Smile.                        |
| 48:14      | PDFpen 11 is the ultimate tool for editing PDFs on the Mac.                                              |
| 48:18      | It's macOS Catalina ready, so you'll still be able to view and edit your PDFs when you                   |
| 48:22      | take that Catalina plunge.                                                                               |
| 48:25      | And PDFpen for iPad and iPhone supports iOS 13 and iPadOS 13.                                            |
| 48:30      | That includes dark mode, multiple windows, and more.                                                     |
| 48:34      | You could even use your iPad or iPhone to scan documents directly into PDFpen on your                    |
| 48:38      | Mac.                                                                                                     |
| 48:39      | It is super slick.                                                                                       |
| 48:41      | And if you're looking for a way to make PDF forms, you need PDFpen Pro.                                  |
| 48:45      | To learn more about PDFpen and PDFpen Pro, go to www.smilesoftware.com.                                  |
| 48:50      | If you do any work with PDFs, you need PDFpen, go to www.smilesoftware.com.                              |
| 48:57      | And check it out.                                                                                        |
| 48:59      | Our thanks to PDFpen for their support of this show and Relay FM.                                        |
| 49:04      | You know, something we haven't really talked about, but I am interested in and I just kind               |
| 49:09      | of wanted to point out that you did with this is all these system events.                                |
| 49:14      | I think that's really cool and something I wouldn't have thought of myself.                              |
| 49:18      | But your bottom two rows is all just standard system events stuff that you'd be doing on                 |
| 49:23      | your Mac.                                                                                                |
| 49:24      | You mean system preferences, the bottom row?                                                             |
| 49:27      | Yeah.                                                                                                    |
| 49:28      | Yeah.                                                                                                    |
| 49:29      | Oh, yeah.                                                                                                |
| 49:30      | How many times you go to system preferences, you want to go to a specific tab in a specific              |
| 49:34      | preference?                                                                                              |
| 49:35      | Well, you can do that with [[AppleScript]].                                                                  |
| 49:38      | The system preferences app has a very small scripting dictionary where you set the current               |
| 49:44      | pane and each pane has an ID that you can get by just asking for what's the ID of the                    |
| 49:51      | current pane.                                                                                            |
| 49:53      | And you say set the current pane to a pane ID and then the name of it like com.apple.privacy.            |
| 50:04      | And it will automatically switch and then you have these things called anchors, which                    |
| 50:08      | represent tabs or specific views.                                                                        |
| 50:12      | So you can say reveal anchor keyboard of current pane and it will do that.                               |
| 50:22      | So you can have one line that goes to the pane that you want and then one line that                      |
| 50:27      | reveals the anchor of that pane.                                                                         |
| 50:30      | So those are all very short [[AppleScript]] scripts that really save a lot of time.                          |
| 50:37      | When I want to go to sharing preferences, you don't want to have to open up the app.                     |
| 50:41      | You just tap it.                                                                                         |
| 50:42      | It brings the app forward, goes right to where you need to be.                                           |
| 50:47      | Or if you want to go to privacy or to start a disk or displays, but it's just a simple                   |
| 50:53      | thing.                                                                                                   |
| 50:54      | See, and the challenge for a lot of us is just discoverability of that.                                  |
| 50:58      | Like I've spent a lot of time doing [[AppleScript\|AppleScripts]], read your book, went to your course.                   |
| 51:03      | But I wasn't aware that you could get to a specific pane.                                                |
| 51:07      | And I knew there was a way to get to system parameters.                                                  |
| 51:09      | I didn't know you can get to a specific pane until you just told us.                                     |
| 51:13      | And specific tab in a pane.                                                                              |
| 51:15      | We need to definitely get this information out.                                                          |
| 51:19      | Now, you're going to share some of these scripts once you get all this put together,                     |
| 51:24      | right?                                                                                                   |
| 51:25      | Yes.                                                                                                     |
| 51:26      | My intention is to share at least the keynote library that I'm using here and the scripts                |
| 51:33      | that trigger it so you can see how this is done.                                                         |
| 51:38      | And everybody is welcome to take that and use it and expand it and edit it and do those                  |
| 51:43      | kind of things.                                                                                          |
| 51:44      | There's a lot more in that library than I've exposed here.                                               |
| 51:50      | And some of it really does some very powerful things.                                                    |
| 51:55      | And some of it's pretty just functional.                                                                 |
| 51:57      | But I'll try to clean it up and make it organised looking so that normal people can read it              |
| 52:03      | and say, oh, I didn't know you could do that.                                                            |
| 52:06      | But in the instructional video where I talk about script libraries, I have three different,              |
| 52:14      | for example, in my example window, I have three different functions for creating a new                   |
| 52:17      | keynote presentation.                                                                                    |
| 52:19      | One is create default.                                                                                   |
| 52:22      | The other is create default with certain dimensions.                                                     |
| 52:25      | And the other is create a specific template with a certain dimensions.                                   |
| 52:30      | And each one of those can be called with a single line of [[AppleScript]].                                  |
| 52:35      | And you pass in, like, if I want a specific template with a certain dimension, I will                    |
| 52:40      | call this function and say gradient and then 1920 by 1080.                                               |
| 52:47      | And it does all the work of creating the presentation, zooming it up to fill the screen and setting      |
| 52:53      | it ready to edit.                                                                                        |
| 52:56      | It's just a simple call.                                                                                 |
| 52:58      | So that library has a lot of those kind of things in it that I find quite useful.                        |
| 53:05      | And that allows to kind of spelunk through your code to come up with our own ideas.                      |
| 53:10      | It just shows that when you have a technology like [[AppleScript]] behind this, how much value              |
| 53:19      | having the ability to control applications through scripts brings.                                       |
| 53:27      | Not having a system-wide scripting language on iOS has really limited some of the things                 |
| 53:34      | that you can do.                                                                                         |
| 53:37      | And the fact that Omni has now created this wonderful implementation of core [[JavaScript]]                  |
| 53:43      | and exposed all the object models of the applications, and you can control those and script those,       |
| 53:49      | gives that kind of ability in the same manner that [[AppleScript]] does on Mac OS.                          |
| 53:55      | But it's really important that when [[Apple|Apple's]] thinking about the future and thinking about                 |
| 54:00      | how they're going to present applications on their platforms to provide that level of                    |
| 54:06      | functionality through scripting, because these are the kind of things that you can do through            |
| 54:11      | scriptability that you can't do through [[Xcode]] and app making.                                            |
| 54:16      | It's not possible to create this through an app.                                                         |
| 54:21      | This only is possible through scripting.                                                                 |
| 54:24      | And it's imperative that [[Apple]] keep supporting scripting technologies on their platforms                 |
| 54:33      | and to expose the application's abilities in a fine-grained detail so that people can                    |
| 54:40      | do what they want to do with those apps.                                                                 |
| 54:43      | Because I used to do a lot of coding as a kid, and sometimes I get the bug and I'll build                |
| 54:50      | a tip calculator in [[Xcode]] just to prove to myself I can still do it.                                     |
| 54:55      | But for me, the power of time spent learning this stuff is not making an app.                            |
| 55:02      | I just saw a case recently from the Omni group and I said every time I think I might want                |
| 55:06      | to spend a little bit more time getting better at [[Xcode]], I just read your release notes.                 |
| 55:11      | And these are the best programmers in the business, I mean the people at Omni.                           |
| 55:16      | And I read all the bugs they have to fix with every new release and I'm thinking the best                |
| 55:21      | in the business still struggle with this stuff.                                                          |
| 55:24      | But where is my bang for my buck?                                                                        |
| 55:26      | For me, it's taking all the hard work of people at Omni and all the other app developers                 |
| 55:31      | and combining it to make it work better and faster for me, whether it's two apps talking                 |
| 55:35      | to each other or like Sal did with these [[AppleScript\|AppleScripts]], pulling more features out of [[Keynote]]             |
| 55:41      | than actually are built into it.                                                                         |
| 55:43      | And that's something anybody can do with a little bit of investment of time.                             |
| 55:47      | Definitely.                                                                                              |
| 55:48      | And this actually brings to mind something that I was experimenting with today.                          |
| 55:52      | I have a fairly large library of [[Keyboard Maestro]] macros and I didn't have time when I was playing       |
| 55:58      | with this today to really convert all of those to [[AppleScript\|AppleScripts]].                                         |
| 56:03      | Some of them probably should be [[AppleScript\|AppleScripts]], most of them can be [[AppleScript\|AppleScripts]].                        |
| 56:07      | But what I did is I used [[AppleScript]] to run my [[Keyboard Maestro]] macros because that's                   |
| 56:12      | three lines of [[AppleScript]] and I then didn't actually have to write any [[AppleScript]] because            |
| 56:18      | I already had these in my [[Keyboard Maestro]] macros.                                                       |
| 56:21      | And this also lets me do some things with some apps which maybe don't have [[AppleScript]]                  |
| 56:26      | support because I have to click it images and things like that.                                          |
| 56:29      | And I can use all of these features from this accessibility pane on my iPad now through                  |
| 56:35      | [[Keyboard Maestro]].                                                                                        |
| 56:36      | And it's actually really good.                                                                           |
| 56:37      | And for anybody interested, I'll try and make sure the link is in the show notes of how                  |
| 56:41      | to run a [[Keyboard Maestro]] macro through [[AppleScript]].                                                    |
| 56:45      | There are two ways of doing it.                                                                          |
| 56:46      | You can either call it with the name or call it with the ID of the macro, but it's very                  |
| 56:50      | simple to do.                                                                                            |
| 56:51      | And so if you've already got stuff in [[Keyboard Maestro]], that's something that you can do                 |
| 56:56      | and I know a lot of people have been playing with things like a [[Stream Deck]] recently.                    |
| 56:59      | But this, if you already have an iPad, it's a free alternative.                                          |
| 57:03      | So it's definitely worth giving it a try.                                                                |
| 57:05      | Yeah, if you're going to set this up, you can not only run [[AppleScript\|AppleScripts]], you can run                    |
| 57:09      | [[Keyboard Maestro]] scripts off a button on your iPad that drives on your Mac.                              |
| 57:14      | I mean, it's great.                                                                                      |
| 57:16      | And the nice thing about that is you get the contextual sensitivity.                                     |
| 57:19      | So you can say, when I open pages, give me all my [[Keyboard Maestro]] pages scripts or my                   |
| 57:26      | text writing scripts.                                                                                    |
| 57:28      | And then suddenly your iPad reformats itself to give you those buttons, whereas when you                 |
| 57:33      | go over to numbers, you get a different set of buttons.                                                  |
| 57:36      | David, I need a podcasting panel.                                                                        |
| 57:38      | Do you think we can make that happen?                                                                    |
| 57:41      | That's actually not a bad idea.                                                                          |
| 57:43      | I mean, because you could.                                                                               |
| 57:45      | Yeah.                                                                                                    |
| 57:46      | But we have all these things that we're doing while we're podcasting, like add this link                 |
| 57:50      | to the show notes or make a note of this edit point.                                                     |
| 57:53      | This is all stuff that could be done by [[AppleScript]] because I think [[Audio Hijack]] has [[AppleScript]]              |
| 57:57      | support and a lot of the other apps that we do have at the very least APIs that                   |
| 58:01      | we can connect to.                                                                                       |
| 58:03      | Yeah, we need something that can grab a timestamp out of our various recording apps and drop             |
| 58:10      | it in with a button.                                                                                     |
| 58:12      | I'm thinking about it.                                                                                   |
| 58:14      | It's all unfolding as I have foreseen.                                                                   |
| 58:18      | Yes.                                                                                                     |
| 58:19      | Grand puppet master of automation.                                                                       |
| 58:22      | I approve.                                                                                               |
| 58:23      | But, you know, everybody listening to this has an app.                                                   |
| 58:26      | I mean, maybe they don't make a podcast, but they spend a bunch of time in spreadsheets                  |
| 58:30      | or whatever, you know.                                                                                   |
| 58:33      | And they have things they do in the app that they do every day that are certainly subject                |
| 58:39      | to automation, and you set something up like this, and you're good to go.                                |
| 58:45      | I mean, it does take a little while to get this up.                                                      |
| 58:47      | I think the learning curve is a little steep the first time you make it.                                 |
| 58:50      | But if you download the samples, Sal's already done the hard work.                                       |
| 58:54      | You just start duplicating his sample and customising it to your own fit.                                |
| 58:59      | And then it's just a question of literally drawing a button and attaching a script or                    |
| 59:03      | command, like a keyboard, a keyboard commands a great example.                                           |
| 59:07      | You create a new button, and then you can label the button or make it an icon, and then                  |
| 59:11      | you tap the button to add an action to it and say type a keyboard command, and then                      |
| 59:18      | command P. Now you've added a print button to whatever you're working on.                                |
| 59:22      | So it's just not that hard to do this.                                                                   |
| 59:26      | You know, David, that's a great use case.                                                                |
| 59:29      | If you just think about organising your keyboard shortcuts, right?                                       |
| 59:35      | How many keyboard shortcuts do you have in a program like Logic, or in [[Photoshop]], or                     |
| 59:41      | [[InDesign]], right?                                                                                         |
| 59:43      | Where you can have all of those.                                                                         |
| 59:45      | If all of a sudden, instead of having to remember the keyboard shortcut, it became a single              |
| 59:50      | button on the iPad.                                                                                      |
| 59:54      | Just using that one feature alone of being able to simulate keystrokes and have that                     |
| 01:00:02   | be the action for the button you create on your panel, you can have all of the special                   |
| 01:00:08   | shortcuts available in a visual format on your iPad so that you never have to actually                   |
| 01:00:15   | remember what is the keyboard shortcut.                                                                  |
| 01:00:18   | Is it Shift Option Command 2, blah, blah, blah.                                                          |
| 01:00:21   | You don't worry about it.                                                                                |
| 01:00:22   | You just take, spend some time, and you can build up your own library of keyboard shortcut               |
| 01:00:28   | representations.                                                                                         |
| 01:00:29   | Yeah, or an even more basic is just an app launcher, you know?                                           |
| 01:00:35   | You create buttons for your apps, and then you can always go get the icons, ways to get                  |
| 01:00:41   | the icons.                                                                                               |
| 01:00:42   | You can go on a Google images search, they're almost all there, or you can just go into the              |
| 01:00:46   | applications, right click on it, and pull it out, or in fact, I wrote one of the first                   |
| 01:00:52   | [[AppleScript\|AppleScripts]] I ever wrote years ago in your class was an [[AppleScript]] to pull the application           |
| 01:00:58   | icon out of the resources file.                                                                          |
| 01:01:00   | Yeah.                                                                                                    |
| 01:01:01   | There's so many ways to do this stuff.                                                                   |
| 01:01:03   | So what you're telling me, David, is that you can script creating these buttons with                     |
| 01:01:07   | scripts.                                                                                                 |
| 01:01:08   | Yeah, I guess I'd have to sit and think about it for a minute, but I think you could.                    |
| 01:01:12   | There we go.                                                                                             |
| 01:01:13   | I think we've reached peak automation here.                                                              |
| 01:01:18   | As a side note, automators, I don't recommend trying that particular one at home unless                  |
| 01:01:21   | you're feeling very adventurous.                                                                         |
| 01:01:23   | And when you've completed it, please share it in the forums, because I'd really like                     |
| 01:01:26   | that.                                                                                                    |
| 01:01:27   | Be careful, at one point, the human's becoming relevant and we're all screwed.                           |
| 01:01:31   | Yes, so automate with caution, but I think there's a lot of ideas that we can use here.                  |
| 01:01:38   | That was my goal is just to get people thinking about automation and thinking about ways to              |
| 01:01:44   | make their work easier and start using automation.                                                       |
| 01:01:48   | Right, exactly.                                                                                          |
| 01:01:50   | This episode of The Automators is brought to you by FreshBooks, online invoicing made                    |
| 01:01:55   | easy.                                                                                                    |
| 01:01:56   | FreshBooks.com/automators to get started.                                                          |
| 01:02:00   | If you're doing work for other people and you want to make getting paid easier, there's                  |
| 01:02:04   | a simple solution.                                                                                       |
| 01:02:06   | Just go to FreshBooks.com/automators.                                                              |
| 01:02:09   | FreshBooks simplifies tasks like invoicing, tracking expenses, and getting paid online.                  |
| 01:02:14   | FreshBooks has drastically reduced the time it takes for over 10 million people to deal                  |
| 01:02:19   | with their paperwork.                                                                                    |
| 01:02:21   | So I became a FreshBooks subscriber a few years ago because I was not getting my invoices                |
| 01:02:26   | out on time.                                                                                             |
| 01:02:27   | I was trying to do this goofy thing with pages and a number spreadsheet and I just wasn't                |
| 01:02:31   | keeping track.                                                                                           |
| 01:02:33   | Switching to FreshBooks saved me money because people are now paying me on time and I don't              |
| 01:02:38   | have to worry about it.                                                                                  |
| 01:02:40   | With FreshBooks, when you send an invoice, they can show you whether the client has seen                 |
| 01:02:44   | it or not, which puts it into that guessing game as to whether or not they've even opened                |
| 01:02:48   | it.                                                                                                      |
| 01:02:49   | Also, FreshBooks automates late payment email reminders so you can spend less time chasing               |
| 01:02:53   | payments and more time getting your work done.                                                           |
| 01:02:56   | Now, if you're listening to this and not using FreshBooks yet, it's the time to try.                     |
| 01:03:01   | FreshBooks is offering an unrestricted 30-day free trial to listeners of this show.                      |
| 01:03:06   | There's no credit card required.                                                                         |
| 01:03:08   | All you have to do is go to FreshBooks.com/automators and start getting paid.                      |
| 01:03:14   | Once again, that's FreshBooks.com/automators and enter automators in the How Did You Hear          |
| 01:03:19   | About Us section.                                                                                        |
| 01:03:21   | We thank FreshBooks for their support of the automators and all of Relay FM.                             |
| 01:03:25   | Well, Sal, you're not just figuring out how to turn our iPads into automation devices.                   |
| 01:03:30   | I know that you've been working with the folks over at the Omni Group on coming up with                  |
| 01:03:36   | automation for iOS in ways that's never been done before.                                                |
| 01:03:40   | And since we've got you here, I was wondering if you could kind of bring us up to speed                  |
| 01:03:44   | on what's happening.                                                                                     |
| 01:03:46   | It's really exciting time over at Omni.                                                                  |
| 01:03:51   | All of the core apps that they use, [[OmniGraffle]], OmniOutliner, OmniPlan, and OmniFocus, now              |
| 01:04:02   | are scriptable.                                                                                          |
| 01:04:04   | OmniFocus is still in developmental final mental stages at this point, but the basic                     |
| 01:04:13   | library of scriptability and functionality has been put in place.                                        |
| 01:04:18   | And it's quite remarkable that I can write a short [[JavaScript]] to automate something in                   |
| 01:04:25   | OmniFocus and that that script works the same on my phone, on my iPad, and on my Mac.                    |
| 01:04:34   | That's quite impressive, the work that that team has done.                                               |
| 01:04:38   | And it's really exciting, and I think it presents a vision for the future that is really comprehensive   |
| 01:04:45   | and all again about serving the customer's needs of actually creating things, tools that                 |
| 01:04:53   | for you, that do what you want to do.                                                                    |
| 01:04:56   | I know that Rose has been really active working on testing and developing, scripting and OmniFocus       |
| 01:05:04   | especially.                                                                                              |
| 01:05:05   | What do you think about that, Rose?                                                                      |
| 01:05:07   | Well, I've been very excited because, of course, the first thing that you have to do                     |
| 01:05:11   | is you have to think, what do I actually want to do with this?                                           |
| 01:05:13   | Because, of course, there's a bunch of [[AppleScript\|AppleScripts]] out there to control things like                    |
| 01:05:16   | OmniFocus and OmniOutliner, [[OmniGraffle]], and even OmniPlan, which I unfortunately don't                  |
| 01:05:21   | get to use a lot.                                                                                        |
| 01:05:23   | And so you can start just by converting those, but once you sit and think about it, you can              |
| 01:05:27   | actually do so much more with all of these things just because you're looking at it from                 |
| 01:05:34   | a different perspective.                                                                                 |
| 01:05:35   | And that's, for me, very inspiring because I'm looking through the documentation and                     |
| 01:05:39   | I go, oh, well, what does this do?                                                                       |
| 01:05:41   | And then I go down a rabbit hole and emerge six hours later, covered in [[JavaScript]] and                   |
| 01:05:46   | set me colons, wondering why I didn't actually get anything done in OmniFocus, but I feel                |
| 01:05:51   | really good about myself.                                                                                |
| 01:05:53   | Possibly a life lesson to be learned there of maybe not getting quite so deep into these                 |
| 01:06:00   | things that you lose four hours of your day.                                                             |
| 01:06:02   | But it's really intriguing to see all of the options.                                                    |
| 01:06:06   | And I'm seeing a lot of people, there's an Omni Group have a [[Slack]] and they have an automation            |
| 01:06:10   | channel in there.                                                                                        |
| 01:06:11   | And I'm seeing a lot of people doing some really interesting things with Omni Automation                  |
| 01:06:14   | as well, which is really nice.                                                                           |
| 01:06:16   | Well, it solves a problem really because you were talking earlier about [[AppleScript]] and                 |
| 01:06:20   | how useful it can make the Mac, but you don't have [[AppleScript]] on iOS.                                  |
| 01:06:25   | So this solution you guys came up with gives you something that we thought we'd never have               |
| 01:06:32   | on the Mac, an actual scripting language.                                                                |
| 01:06:35   | And it's based on core [[JavaScript]] from WebKit.                                                           |
| 01:06:39   | So it's on all [[Apple]] devices and it's really optimised and fast.                                         |
| 01:06:45   | And [[JavaScript]] is so documented and it's so widely used that anybody can get up to speed                 |
| 01:06:56   | fairly quickly on the basics of writing [[JavaScript]].                                                      |
| 01:07:00   | It's not as expressive as languages [[AppleScript]] is, but it is quite approachable and                    |
| 01:07:07   | is well documented and easy to do.                                                                       |
| 01:07:11   | I've been doing a lot of traveling this year and one of the things I have to do every time               |
| 01:07:17   | we get ready to leave is I have to pack and I have to create a list of, okay, what do                    |
| 01:07:24   | I need for this?                                                                                         |
| 01:07:26   | How many socks do I need for this?                                                                       |
| 01:07:27   | How many pairs of pants?                                                                                 |
| 01:07:30   | How many days is this?                                                                                   |
| 01:07:32   | And then I have to create a checklist and then go through and make sure that I got everything.           |
| 01:07:38   | So the first automations I wrote using Omni Automation was for OmniFocus and it was create               |
| 01:07:44   | a packing list.                                                                                          |
| 01:07:46   | So it would create a new project that had individual actions that were each item that                    |
| 01:07:54   | I needed to pack and then I implemented some of their UI controls.                                       |
| 01:08:01   | So using Omni Automation, you can present interfaces to the user like check boxes or                     |
| 01:08:08   | text input fields or pop up buttons and have the user enter some information.                            |
| 01:08:14   | So I would have a little sheet come down that says, when's the start date?                               |
| 01:08:19   | When's the return date?                                                                                  |
| 01:08:21   | And then it would present another interface that showed you exactly how many pairs of                    |
| 01:08:32   | socks I needed to pack and give me, okay, did you get your toothbrush?                                   |
| 01:08:36   | Did you get everything else?                                                                             |
| 01:08:37   | And it would create an OmniFocus task or project that had my entire packing list.                        |
| 01:08:45   | And since I started using that, I haven't forgotten anything.                                            |
| 01:08:49   | For every trip I've been on, I haven't forgotten my toothpaste yet and it's been great.                  |
| 01:08:56   | But there's an example of how you can use this technology in a really important way                      |
| 01:09:02   | that makes your life easier.                                                                             |
| 01:09:05   | And the Omni Automation action plugin that I used, I put up on the Omni Automation website               |
| 01:09:13   | so other people can download and use and you can install it on your device too.                          |
| 01:09:18   | So you can have this on your iPhone or your iPad or your Mac if you want to use it on                    |
| 01:09:23   | any one of those three.                                                                                  |
| 01:09:25   | And it really proves the point that having scripting ubiquitous across all the different                 |
| 01:09:32   | [[Apple]] platforms is really something that is worthwhile.                                                  |
| 01:09:37   | And it's a goal that companies and [[Apple]] should follow and should try to make a reality.                 |
| 01:09:46   | Well, it's nice because like you said, it works on all platforms, it's not just iOS.                     |
| 01:09:51   | And to me, I feel like the OmniFocus stuff is where it really pays off for me personally.                |
| 01:09:57   | I mean, with OmniGraffleal, you can do a lot.                                                              |
| 01:10:00   | OmniOutliner, you've already done some great sample projects, but for task management,                   |
| 01:10:05   | this is something that certainly needs automation.                                                       |
| 01:10:08   | So I've been playing a lot more with scripts with OmniOutliner recently because I recently               |
| 01:10:13   | started producing some videos for ScreenCast Online, which I'm really enjoying.                          |
| 01:10:18   | And of course, me being an automator, I've automated as much of the processes as I can                   |
| 01:10:22   | so I can focus on the actual video production rather than the minutiae of creative projects              |
| 01:10:27   | and OmniFocus, et cetera, et cetera.                                                                     |
| 01:10:29   | Have to confess, I'm still creating the OmniFocus project with shortcuts just because that's             |
| 01:10:34   | how I roll.                                                                                              |
| 01:10:36   | And I get a notification through Zapier with PushCut, both of which have previously been                 |
| 01:10:41   | the spots of the show for disclosure, and then that runs a shortcut and that adds the                    |
| 01:10:46   | tasks to my OmniFocus project and creates the project for me.                                            |
| 01:10:50   | Of course, I can change this.                                                                            |
| 01:10:51   | I probably will change this to actually be an OmniFocus script in the future, but for                    |
| 01:10:56   | the time being, what I am doing with OmniOutliner is I import my initial idea dump from my node          |
| 01:11:05   | into OmniOutliner.                                                                                       |
| 01:11:06   | And I go through and I always have a couple of different columns in there.                               |
| 01:11:10   | I've got basically a recording script.                                                                   |
| 01:11:14   | It's not a script that I will read word for word, but it's specific things that I want                   |
| 01:11:19   | to make sure that I say, well, I'm recording that section.                                               |
| 01:11:22   | And then I have a recorded column.                                                                       |
| 01:11:25   | And I also add a couple of entries at the top for my intro and a couple of entries at                    |
| 01:11:30   | the bottom for the outro.                                                                                |
| 01:11:31   | And I was doing this for the second time on a video and went, hang on a minute, I'm going                |
| 01:11:36   | to be doing this for every single video I do.                                                            |
| 01:11:38   | I'm going to add the same columns and add the same lines at the top.                                     |
| 01:11:41   | I'm going to add the same lines at the bottom.                                                           |
| 01:11:43   | And the script for the intro and the outro are very, very similar every time.                            |
| 01:11:47   | So I should probably put this all in a script.                                                           |
| 01:11:50   | And I've done that with OmniOutliner.                                                                    |
| 01:11:52   | And it really wasn't that hard to do because I started with just a simple adding the actual              |
| 01:12:01   | columns.                                                                                                 |
| 01:12:02   | And then I add some actual lines, some rows, as they're called in OmniOutliner, at the                   |
| 01:12:09   | top and at the bottom.                                                                                   |
| 01:12:10   | And then I fill the contents of those rows and the different columns for those rows,                     |
| 01:12:15   | which is why I create the columns first.                                                                 |
| 01:12:17   | And that's it.                                                                                           |
| 01:12:20   | It sounds possibly very complicated, but once you get the hang of it, it's not.                          |
| 01:12:25   | It's very useful.                                                                                        |
| 01:12:27   | Absolutely.                                                                                              |
| 01:12:28   | The more you dig into Omni Automation, it's so rich because each one of those applications                |
| 01:12:36   | is, first of all, the type of application that just becomes indispensable.                               |
| 01:12:41   | They do so much.                                                                                         |
| 01:12:43   | And their scripting interface through Omni Automation is so rich.                                         |
| 01:12:48   | Like you said, Rose, you can get in and find yourself just exploring the scripting API                   |
| 01:12:54   | and you go, oh, what would happen if I did that with this?                                               |
| 01:12:59   | And then, oh, what would happen if I did that with this?                                                 |
| 01:13:02   | And the next thing you know, you spend a couple hours creating little tools for yourself.                |
| 01:13:07   | And it's a lot of fun to explore Omni Automation.                                                         |
| 01:13:11   | It's not really a task.                                                                                  |
| 01:13:14   | It's more of a exploration and a challenge and just having fun.                                          |
| 01:13:21   | Plus, the community, the automation community from the automation, I find is really helpful              |
| 01:13:28   | and expressive and they come up with some great ideas and everybody's always willing                     |
| 01:13:33   | to share what they have.                                                                                 |
| 01:13:35   | And I'm always amazed at some of the integration that they've been able to do with other applications    |
| 01:13:41   | like [[Drafts]].                                                                                             |
| 01:13:44   | And it's just remarkable the tools that they've created using [[JavaScript]] where they're communicating     |
| 01:13:51   | between all of these different applications and the Omni apps, too, as well.                              |
| 01:13:56   | It's just remarkable.                                                                                    |
| 01:13:58   | It is.                                                                                                   |
| 01:13:59   | It really is.                                                                                            |
| 01:14:00   | And I mean, so you talked about your packing lists earlier, I've created a whole action                  |
| 01:14:05   | group for doing my packing lists and [[Drafts]], which I've been working on enhancing a little               |
| 01:14:10   | bit today as well, because that's what I do in my spare time, apparently.                                |
| 01:14:15   | But the other thing with all of the Omni Automation stuff is they're using [[JavaScript]], well,[[Drafts]]      |
| 01:14:20   | also uses [[JavaScript]] and Scriptable uses [[JavaScript]].                                                     |
| 01:14:23   | So if you start learning [[JavaScript]] for automation purposes, then suddenly, instead of being able        |
| 01:14:28   | to automate just [[Drafts]], you can also use Scriptable.                                                    |
| 01:14:32   | You can use four Omni Group apps and whatever other apps that are out there that can use                  |
| 01:14:37   | [[JavaScript]] as well, because it's very similar.                                                           |
| 01:14:41   | Like [[AppleScript]], you need to read a library, but you can get kind of crazy with this stuff.             |
| 01:14:46   | And I'm enjoying possibly going a little too crazy, but it's good fun.                                   |
| 01:14:51   | Well, I think the thing is, it's early days, too.                                                        |
| 01:14:54   | I mean, this was an idea that you guys had about a year or two ago, and now it's starting                |
| 01:14:59   | to show up in the applications and something people can start using.                                     |
| 01:15:03   | So there is a lot to be explored out there, but as we start to figure it out, you're going               |
| 01:15:09   | to see obvious uses, I think, come out of these applications.                                            |
| 01:15:12   | And I'm just so glad that the Omni Group got to OmniFocus, because that's the app I spend                 |
| 01:15:17   | the most time in of all their applications, and I'm definitely going to be putting some                  |
| 01:15:22   | of this [[JavaScript]] to use as I kind of try and automate that further.                                    |
| 01:15:27   | Me too.                                                                                                  |
| 01:15:28   | Now, I will put a plug in for omni-automation.com, my website, where I have a lot of examples            |
| 01:15:37   | in detail about each one of the Omni applications, even the OmniFocus application.                       |
| 01:15:45   | And a lot of the examples are clickable and installable, and in addition, I have a page                  |
| 01:15:51   | that's called the Omni AutomationTemplateGenerators, and each app has its own page where you can          |
| 01:15:59   | just basically fill in some metadata, pick the type of action input that you're going                    |
| 01:16:05   | to have, like all selected tasks, for example.                                                           |
| 01:16:09   | And it will create the action template for you that you can customise and fill in with                   |
| 01:16:15   | your own code and install.                                                                               |
| 01:16:17   | So there's a lot of tools out there for Omni Automation, and I encourage you to go visit that site.       |
| 01:16:24   | I definitely recommend it to.                                                                            |
| 01:16:27   | It's in the show notes already, so you're going to be able to go and check that out                      |
| 01:16:30   | from the show notes.                                                                                     |
| 01:16:31   | So one question I had for you recently, because it used to, historically, it was macosxautomation.com.   |
| 01:16:40   | Now I believe it's just macosxautomation.com.                                                             |
| 01:16:42   | Yeah, they're in alias, so you can use either one of them.                                               |
| 01:16:47   | Yeah, I said that on a recent show then when we finished, I'm like, I hope I send people                 |
| 01:16:51   | to the right place.                                                                                      |
| 01:16:52   | Well, either one of those, you can go.                                                                   |
| 01:16:55   | And we'll include links to the entire Sal Soghoian family of automation websites, because there's         |
| 01:17:02   | a whole group of websites you've got out there helping people get better at this stuff.                  |
| 01:17:07   | We've got links to this awesome iPad-based automation keyboard for your Mac, and there's                 |
| 01:17:15   | going to be videos and downloadable stuff in there.                                                      |
| 01:17:18   | So if you were at all interested in this, I recommend you spend some time trying it.                     |
| 01:17:23   | If you don't have the Luna display, you can do it with the side card, just you got to                    |
| 01:17:31   | use an [[Apple Pencil]].                                                                                     |
| 01:17:32   | It's not really as nice, to be honest with you, but if you just want to give it a try                    |
| 01:17:36   | to see if it'll work, you can do it without a Luna display.                                              |
| 01:17:39   | But I suspect you're going to want to get a Luna display if you want to bring this into                  |
| 01:17:43   | your daily workflow.                                                                                     |
| 01:17:45   | But we're going to have lots of websites in this one.                                                    |
| 01:17:48   | Thank you so much, Sal.                                                                                  |
| 01:17:50   | I still love the crazy ideas you come up with and the way you make them work.                            |
| 01:17:56   | You're such a resource for our community, and thank you for everything you do.                           |
| 01:18:01   | It's wonderful being part of the automation family, and I admire you guys so much for                    |
| 01:18:07   | the work that you're doing to spreading the message.                                                     |
| 01:18:11   | Thank you.                                                                                               |
| 01:18:12   | Well, thank you, as David said, for coming on, because I saw you playing with this back                  |
| 01:18:17   | in August when we visited you, and I was just there going, do we make this part of a multi-part          |
| 01:18:22   | show, or do we just give it a whole show?                                                                |
| 01:18:26   | And we were right, it needed a whole show, because this is excellent, and I would encourage              |
| 01:18:31   | people, even if you think, oh, scripting, no.                                                            |
| 01:18:33   | Remember, you can trigger a [[Keyboard Maestro]] scripts with just three lines of [[AppleScript]],              |
| 01:18:39   | and you can copy and paste so much from all the websites out there that you don't need                   |
| 01:18:43   | to know how to script by yourself.                                                                       |
| 01:18:45   | You can just put it all together, and it works.                                                          |
| 01:18:47   | I just had an idea.                                                                                      |
| 01:18:49   | You just have a button, you add a button called affirmation, and any time you press it, it's             |
| 01:18:55   | a single script, [[AppleScript]], say, and then you put in the quote, hi, David, you're doing               |
| 01:19:02   | fine, just keep out it, buddy.                                                                           |
| 01:19:06   | You're good enough, you're smart enough, and gosh darn people like you.                                  |
| 01:19:12   | Yes, there you go.                                                                                       |
| 01:19:16   | This is the kind of fun you can have, download this amazing, clever bit of programming by                |
| 01:19:22   | our friend Sal, and let us know what you're doing with it on the forums.                                 |
| 01:19:27   | We'd love to share it.                                                                                   |
| 01:19:28   | Why can't the automators start sharing panels between each other?                                        |
| 01:19:31   | I'm sure we can have some really great ideas come out of that.                                           |
| 01:19:35   | And Sal, we're going to put links to all your websites.                                                  |
| 01:19:38   | That's where people go if they want to see what you're up to, right?                                     |
| 01:19:40   | Is there anywhere else we should point people?                                                           |
| 01:19:43   | Well, like Rose mentioned, I'm spending a lot of time on the Omni [[Slack]] channel and the                  |
| 01:19:50   | Omni boards, and I just love working with Omni automation stuff, so you can find me                      |
| 01:19:56   | there more than anywhere else right now.                                                                 |
| 01:20:00   | We are the Automators.                                                                                   |
| 01:20:01   | You can find us over relay.fm/automators.                                                          |
| 01:20:04   | This is show 36.                                                                                         |
| 01:20:07   | Thank you to our sponsors, and that is our friends over at Smile FreshBooks and Bottomless,              |
| 01:20:14   | and we will see you all in two weeks.                                                                    |
| 01:20:16   | Goodbye, everybody.                                                                                      |
