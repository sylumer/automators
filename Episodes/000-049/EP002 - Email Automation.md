---
status: "complete"
fc-date:
  year: 2018
  month: 07
  day: 20
fc-category: "podcast"
podcast: "Automators"
published: 2018-07-20
duration: 3406
formattedduration: "00:56:46"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/2"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators002.mp3"
episode: 2
title: "2: Email Automation"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, our intrepid Automators dive into email and cover the best ways to get your Mac, iOS devices, and the web wrangling your email for you.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 002 Discussion](https://talk.automators.fm/t/automators-2-email-automation/906)
	- [Automators 02: Automating Email with TextExpander](https://talk.automators.fm/t/automators-2-automating-email-with-textexpander/1595)
	- [Automators 02: Workflow - Mail Merge](https://talk.automators.fm/t/automators-2-workflow-mail-merge/1596)
	- [Automators 02: Custom Airmail Actions](https://talk.automators.fm/t/automators-2-custom-airmail-actions/1593)
	- [Automators 02: Use AppleScript to Insert Recipient's Name](https://talk.automators.fm/t/automators-2-use-applescript-to-insert-recipients-name/1594)

# Sponsors
- [[The Omni Group (Sponsor)|The Omni Group]] - Accomplish more every day.

# Show Notes
David keeps talking about all the subjects for Automators but settles on email for episode 2. Rose and David agree the emails you send do not need to all be special snowflakes. 

David throws out [[TextExpander]] as the starting point because saving snippets in a Word document is madness. David likes automating the tab key when writing an email.  

Both David and Rose use [[Automator]] on the Mac but agree it should be more powerful. Very quickly Rose presses on to [[Keyboard Maestro]]. Rose then explains how she uses a Keyboard Maestro script to look for the existence of a file to automatically assemble and send an email. David gets irrationally happy about the thought of email getting sent without any direct involvement. 

Then our nerdy automators take on sorting email. Both of our hosts get too much pleasure from auto sorting unwanted email out of their life. David bangs on about a years-old request to make [[Apple|Apple's]] cloud-based email rules stronger. [[TextExpander - Insert Recipient Name|David mentions his beloved AppleScript that auto inserts an email recipient's name]]. 

[[The Omni Group (Sponsor)|The Omni Group]] sponsored this show, and Rose and David agree that they're swell. 

Then Rose and David move on to iOS email automation. The way email apps make you create email links to only their apps makes David sad but Rose digs it. Then David subtly pitches a reality show about two Italians in the middle of a vineyard. Rose then admits she has a thing about email clients and once installed 28 of them. 

And then they get to [[Workflow]]. So much talking about Workflow. Ultimately, David admits to being "that guy".

Then our hosts address cloud-based automation, and David closes up banging the drum about dictation and email. Rose and David both love the secret [[Drafts]] unending dictation tool. If you're reading this and you're from [[Apple]], move along. This is not the app you're looking for.

- [The Big Explanatory Post on this Episode](https://www.macsparky.com/blog/2018/7/automators-ep-2-email-automation)
- [Home | Automators](https://automators.fm/)
- [Automators Talk](https://talk.automators.fm/)
- [David's Video on TextExpander and Email](https://youtu.be/z6nfiKOddsI)
- [David's Advanced TextExpander Snippet](https://david-sparks.squarespace.com/s/New-Invoice-Sample.textexpander)
- [David's Salutation AppleScript Video](https://youtu.be/Zdj3qCSUnkQ)
- [David's TextExpander AppleScript](https://david-sparks.squarespace.com/s/Auto-Name-Email.textexpander)
- [Rose's Airmail Screencast](https://youtu.be/foTgowqbbqE)
- [Rose's Workflow Screencast](https://youtu.be/StY6cSvEwZY)
- [Rose's Mail Merge Workflow](https://workflow.is/workflows/914b4b10d48e439da59d1c1af4635a1b)
- [Rose's Picture Send Workflow](https://workflow.is/workflows/b2b0bf42dde54a0d878d1a1f37bf5f99)
- [Email Field Guide - MacSparky](https://www.macsparky.com/email)
- [Mac Power Users #328: iOS Email - Relay FM](https://www.relay.fm/mpu/328)
- [Mac Power Users #303: Email Clients and Workflows - Relay FM](https://www.relay.fm/mpu/303)
- [Mac Power Users #224: The Email Problem - Relay FM](https://www.relay.fm/mpu/224)
- [Mac Power Users #164: Tackling Email - Relay FM](https://www.relay.fm/mpu/164)
- [TextExpander | Communicate Smarter](https://textexpander.com/)
- [Keyboard Maestro 8.2.2: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Mail Act-On and More](https://smallcubed.com/index.html)
- [Noodlesoft - Simply Useful Software](https://www.noodlesoft.com/)
- [Email Management for Any Inbox | SaneBox](https://www.sanebox.com/)
- [Airmail - Lightning Fast Mail Client for Mac and iPhone](http://airmailapp.com/)
- [Dispatch: TextExpander-enabled Email App for iPhone](http://www.dispatchapp.net/)
- [Tripit - Travel Itinerary - Trip Planner](https://www.tripit.com/)
- [Drafts. Where Text Starts. | Drafts](http://getdrafts.com/)
- [IFTTT helps your apps and devices work together](https://IFTTTtt.com/)
- [Zapier | The easiest way to automate your work](https://zapier.com/)
- [SaneBox](http://www.sanebox.com/mpu)

# Transcription

| Time Index | Transcription                                                                                                                         |
|:---------- |:------------------------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Hi, everybody. Welcome to Automator's Episode 2. I'm David Sparks and joined by my co-host,                                           |
| 00:07      | Rose Mary Orchard. Hi, Rose.                                                                                                          |
| 00:09      | Hi, David.                                                                                                                            |
| 00:10      | Today, we're here to talk about automating email. We are looking at subjects, and we've                                               |
| 00:16      | got a big list of subjects for this show, but we really wanted to grab out to people,                                                 |
| 00:20      | and one of them, I think, an issue that people face every day is email. Now, you might think                                          |
| 00:25      | about that. Can you automate email? Isn't every email you write supposed to be a special                                              |
| 00:31      | snowflake, and aren't you supposed to write this stuff in particular in response to the                                               |
| 00:36      | people that send you email? The answer to that is no. There's actually a lot of things                                                |
| 00:42      | you can do to automate email, and the more you can do to take less time on email, the                                                 |
| 00:46      | more time you can spend making things that you're proud of. We're here today to help                                                  |
| 00:52      | you automate your email. You agree?                                                                                                   |
| 00:55      | Definitely, yes. Quite honestly, I know I get a bunch of email that's mostly automated,                                               |
| 01:00      | and I'm fine with it because it means that they're spending less time on it, and they're                                              |
| 01:03      | not going to be upset if I send them a semi-automated reply. Let's try and make this as fast as                                       |
| 01:07      | we can for everybody involved.                                                                                                        |
| 01:09      | Yeah. We're not just talking about automating the robot sent email to you, but also just                                              |
| 01:14      | dealing with email in general. We've got a whole bunch of subjects here on email, ranging                                             |
| 01:19      | between platforms. I guess we should just get started with the Mac. What do you think?                                                |
| 01:25      | Definitely. The Mac is a great place to start for email automation.                                                                   |
| 01:28      | Yeah. One of my favourite ways to automate email, and this will be no surprise to you                                                 |
| 01:32      | if you listen to [[Mac Power Users]], is using [[TextExpander]] to automate text composition.                                         |
| 01:39      | The idea of writing emails to people is okay. You need to do it, but what if you have the                                             |
| 01:45      | same question asked to you frequently? I have a little bit of a publishing business where                                             |
| 01:49      | I get the same questions asked frequently. Why would you want to rewrite that stuff more                                              |
| 01:54      | than once? People have all sorts of ways of solving that problem. I know some folks just                                              |
| 02:01      | keep a [[Microsoft Word\|Word]] document with a bunch of canned responses and they block and copy into their                          |
| 02:07      | email application, but [[TextExpander]] makes it so much more elegant. It's a text replacement                                        |
| 02:12      | application, but it's got a lot more power than that. One of the things you can do with                                               |
| 02:17      | [[TextExpander]] is you can code into your expansion snippet, the tab key, which is so golden when                                    |
| 02:24      | you're doing email. When I send out my bills for the legal practice, I have a tab key coded                                           |
| 02:30      | into my [[TextExpander]] snippet, so I just say new bill. I type new bill with no space, and                                          |
| 02:36      | then it grabs the current month because [[TextExpander]] can do that and says, you know, Sparks Law                                   |
| 02:41      | bill for July 2018, because it puts that stuff in there automatically. Then it hits the tab                                           |
| 02:47      | key, the golden tab key, and then it fills out the cover for the bill. That's really                                                  |
| 02:56      | useful. Another thing you can do with [[TextExpander]] is it has fill-in fields. You can even say                                     |
| 03:02      | Dear Rosemary. It has a blank in there and I type in Rosemary once, and then if I use                                                 |
| 03:07      | her name more than once in the email, it auto-fills it in for me. It gives you form power with                                        |
| 03:14      | a simple text replacement app. Yes, [[TextExpander]] is great, and it can do some date mathematics                                    |
| 03:19      | as well. If you want to calculate the date in one month's time, for example, in the case                                              |
| 03:25      | of a bill, this needs to be paid by this time next month, and it can do that for you, which                                           |
| 03:29      | is really good at time-saving. Of course, [[TextExpander]] has an app and a keyboard on iOS as well,                                  |
| 03:35      | which means that once you've got these snippets, some of the more complex ones you need to                                            |
| 03:39      | use the app for, so for example, things with fill-ins, but you can use them on more than                                              |
| 03:43      | one platform, which is really useful. Yeah, and that date math thing is particularly useful                                           |
| 03:50      | for emails. If you send out regularly an email and you want to give someone an expected reply,                                        |
| 03:56      | say please reply by, and then you can have it automatically calculate one week. Anything                                              |
| 04:03      | you're doing involving dates and email, [[TextExpander]] is a very useful tool for that.                                              |
| 04:08      | Definitely, yes. I actually use it a lot more than I thought I would. I did stop using it                                             |
| 04:12      | for a little while, but then I went back to it and it's like, oh, yes, this can do an                                                 |
| 04:15      | awful lot. It's working well for me. I always felt like that is one of the entry portals                                              |
| 04:21      | for automation for people. Get a copy of [[TextExpander]] because you can automate text expansion throughout                          |
| 04:27      | your Mac, but email is really the poster child for that application. But it's not the only                                            |
| 04:32      | app you can use to automate email on the Mac. Another one is [[AppleScript]], but even simpler                                        |
| 04:39      | is [[Automator]]. Yes, yes. [[Automator]] is, along with having a very cute robot icon, actually                                      |
| 04:44      | very powerful. There's a lot hidden behind that smiley face. And it's surprising what                                                 |
| 04:50      | you can do to create email just with playing around with a couple of variables and things                                             |
| 04:55      | like that. Yeah, though, [[Automator]], I have to admit, isn't my favourite email automation                                          |
| 05:02      | tool because it's not as flexible as the email tools we're going to talk about with workflow                                          |
| 05:10      | on iOS later, and I wish it was. So [[Automator]] does have a command to prepare an email, and                                        |
| 05:18      | it can grab information from a prior step in the process, but it just doesn't flow as                                                 |
| 05:25      | well. Have you used [[Automator]] to actually create emails, Rose?                                                                    |
| 05:28      | I have, but I tend not to use it that much anymore. I've been playing a bit more with                                                 |
| 05:32      | [[Keyboard Maestro]], really, just because you can do a bit more with that and get a bit crazier                                      |
| 05:38      | with it, like doing lots of attachments, setting default signatures and things like                                                   |
| 05:43      | that. [[Keyboard Maestro]] tends to be my go-to tool nowadays. It's one step up from, well,                                           |
| 05:48      | probably several steps up from Automator, but it's got a very similar UI with the dragging                                            |
| 05:52      | and dropping of the blocks, which is, of course, similar to workflow as well.                                                         |
| 05:56      | It's great, though, if you already have an automation routine, like an [[Automator]] workflow                                         |
| 06:01      | that you've built, consider adding an email to it. I think we're going to cover that better with                                      |
| 06:05      | workflow later because it's an even better case for that. But you did bring up a [[Keyboard Maestro]],                                |
| 06:11      | and I think [[Keyboard Maestro]] can play a big role in email creation and management.                                                |
| 06:17      | What are some of the things you do with [[Keyboard Maestro]], Rose?                                                                   |
| 06:19      | Well, for example, I frequently have to, I generate certain files with various scripts                                                |
| 06:27      | that I'm doing. There's a lot of things at work, for example, where I generate files,                                                 |
| 06:30      | and then you have to email them to people. We do have a central document management system,                                           |
| 06:35      | but certain people prefer email. So I have a script where I grab the file with that name in                                           |
| 06:41      | the folder that is expected to be there, and it creates an email for me with all of this                                              |
| 06:47      | information, a default subject, and a default body. Just basically here is this month's copy of X,                                    |
| 06:53      | which is very, very helpful because then it's just done, and I don't need to think about it                                           |
| 06:57      | anymore. And that's what I use it for as well, with a little help from [[Hazel]], because [[Hazel]],                                      |
| 07:02      | when the file's been there for more than 24 hours, deletes it for me.                                                                 |
| 07:05      | Yeah, you tie it all together. Where [[TextExpander]] is particularly good at that text generation,                                   |
| 07:12      | I feel like [[Keyboard Maestro]] is particularly good at email assembly, like filling in fields                                       |
| 07:18      | and making sure attachments are on the email and things like that. If you spend a little bit of                                       |
| 07:24      | time in [[Keyboard Maestro]] with its email utilities, you're going to find that you can get a long way                               |
| 07:30      | towards assembly of emails, and especially if you're doing the same types of emails on a regular                                      |
| 07:35      | basis. A good example, I think, for [[Keyboard Maestro]] would be, let's say you've got a number                                      |
| 07:41      | spreadsheet that you send to someone in your office every Friday afternoon at three o'clock.                                          |
| 07:47      | You could automate, and I haven't sat down to really do, I'm just making this a hypothetical,                                         |
| 07:51      | but as I sit here, I think you could automate the entire process. You could set a timer for                                           |
| 07:56      | Friday at three o'clock, so long as the file's in a reliable location, the app could go grab the                                      |
| 08:01      | file, it could create the text for you, attach the file, and send it. So you could automate                                           |
| 08:06      | that entire process. Yeah, I've done that, actually. It's not based on specific date or time,                                         |
| 08:12      | it's based on the file being present as the trigger. So when the file appears in the folder,                                          |
| 08:16      | it sends the email, and there's two choices in [[Keyboard Maestro]] with the create an email message.                                 |
| 08:22      | You can create it and leave it open or create it and send it, and I just have it create and                                           |
| 08:26      | send it, so I don't even need to be at my desk. I can be in the bathroom talking to somebody                                          |
| 08:30      | else in a meeting, and it just does it for me, which is really, really nice.                                                          |
| 08:35      | That's the best when your computer does something in the background, and you have no                                                  |
| 08:38      | involvement with it whatsoever, and it just happens. Yes, of course, it depends on what                                               |
| 08:43      | exactly you're doing as to whether or not you need to have involvement with it with something                                         |
| 08:46      | like your billing. You're probably. You want to check that everything's fine before you send out,                                     |
| 08:51      | because especially being a lawyer with clients, you want them to be happy. But for something like                                     |
| 08:55      | here's the latest version of X file, it doesn't really matter to me exactly whether or not they,                                      |
| 09:01      | you know, because it's always the same text, exactly the same text every single time.                                                 |
| 09:05      | Exactly. So I start the script running, and as soon as it finishes and it's generated the                                             |
| 09:09      | file, [[Keyboard Maestro]] does the rest of it for me. No, I agree. I mean, you have to make that                                     |
| 09:14      | choice whether you want it to send for you automatically. In fact, we have the same                                                   |
| 09:17      | questions later when we're going to talk about this stuff on iOS, but nevertheless,                                                   |
| 09:22      | when you do have those circumstances where you don't need to babysit it and check it over,                                            |
| 09:27      | where it can just generate the email and send it. I just love it when that stuff happens.                                             |
| 09:32      | That's the reason why I'm on this show, honestly, stuff like that.                                                                    |
| 09:35      | Yeah. Yeah. So useful.                                                                                                                |
| 09:38      | Another way you'd have to deal with email on your Mac, and Mac is a particularly good venue or                                        |
| 09:43      | platform for automation here, is not just preparation and sending an email, but email sorting.                                        |
| 09:49      | And there's a lot of tools. I think the Mac does a better job with this, frankly,                                                     |
| 09:53      | where you can sort mail. And obviously, there's a whole other discussion as to what                                                   |
| 09:58      | email platform are you on, whether it's Google or [[IMAP]] or [[Microsoft Exchange\|Exchange]]. And we cover this on some of          |
| 10:03      | the longer MPU Mac Power users' email episodes. We're not going to go into all that now, but                                          |
| 10:09      | you do want the ability to sort your email as it comes in. And there's some ways to do that as well.                                  |
| 10:15      | Yes. Yeah, exactly. I mean, one of the things that I do, I actually use Airmail as my primary client,                                 |
| 10:20      | but I have a Mac mini sitting there all the time running. And so it's running mail and it goes                                        |
| 10:25      | through and it deletes email for me, because I actually, this is linked with the Gmail rules,                                         |
| 10:32      | but I give things certain labels. And so if it's, and then I colour things when they come in based                                    |
| 10:38      | on certain senders. And if it's got a certain colour and it's more than a day old, it's gone.                                         |
| 10:43      | That's it. Bye-bye. I don't want it in my inbox anymore. This is especially useful for things                                         |
| 10:47      | like newsletters that you probably don't want hanging around and you just want them gone.                                             |
| 10:52      | That's very, very powerful. I really love mail rules. I've got quite a few of them running around                                     |
| 10:57      | actually doing all sorts of things for me in the background. And mail rules are things you can set                                    |
| 11:02      | up under different contexts. Like [[Gmail]] has some really powerful cloud-based mail rules.                                          |
| 11:08      | The [[Apple Mail]] has a mail rule system built in, which is actually pretty powerful as well.                                        |
| 11:14      | It is, yeah. It has to happen on your Mac, which is, when you say you're running rules,                                               |
| 11:19      | are you running the rules through [[Apple Mail]], even though you're using [[Airmail]] as your client?                                |
| 11:23      | So what I've got is I've got a Mac mini, which is actually a Mac mini server model.                                                   |
| 11:28      | And it just sits there all day and it's running mail so it can execute certain rules. So I have                                       |
| 11:34      | rules in [[Gmail]] as well. They're called filters in [[Gmail]], actually, which moves certain things as                              |
| 11:39      | soon as they come in. And then, of course, mail tends to be for handling things that received                                         |
| 11:44      | more than X time ago. So one day, one week, one month, or things like that, or adding flags to                                        |
| 11:51      | things for me, which is really nice. Yeah. And like I said, some people do that with the cloud                                        |
| 11:56      | stuff. You can also, with [[Apple Mail]], later we're going to talk about some cloud-based services                                   |
| 12:02      | that allow you to do that as well. I have this issue lately where somebody has got some business                                      |
| 12:07      | where they edit photos. It's a photo editing service. And they have managed to breach my walls.                                       |
| 12:14      | I mean, they send me two or three emails a day and they have it from a different sender every                                         |
| 12:19      | time. So it's just not something that's easily defeatable. So I came up with an [[Apple Mail]] rule                                       |
| 12:26      | that looks for certain words in the subject line. And all I'm going to say, if you send me an email                                   |
| 12:30      | about feedback and it includes words like photo editing service in the subject line, I'm never                                        |
| 12:35      | going to see it. That's the great thing. I've done that as well. There's some certain newsletters                                     |
| 12:43      | that work that were required to receive, but I actually follow them via [[RSS]] because I don't like                                  |
| 12:47      | getting an email unnecessarily if I could avoid it. So that stuff goes straight into my trash                                         |
| 12:51      | folder and gets marked as red and I never see it. Bye-bye. Yeah. A modification or a way to make the                                  |
| 12:59      | mail sorting even more powerful is with a third-party app. If you're using [[Apple Mail]],                                            |
| 13:04      | Rose isn't using [[Apple Mail]], but I do, there's an app called [[Mail Act On]], which allows you to                                 |
| 13:10      | assign trigger keys to auto sorting and auto filing. And it's just like it's the mail rules plus a                                    |
| 13:15      | little bit more. So if you're interested in this stuff and using [[Apple Mail]], I'd recommend checking                               |
| 13:19      | out [[Mail Act On]]. Yes. [[Mail Act On]] is extremely good. [[Airmail]] has some actions built into it                               |
| 13:27      | that you can use so that you can build certain rules and things like that, which are quite good.                                      |
| 13:30      | I tend not to have them just because [[Airmail]] isn't always running. [[Airmail]] is something that's on                             |
| 13:36      | my MacBook Pro, which is a device which goes to sleep funnily enough when you close the lid,                                          |
| 13:41      | as it should. And so I prefer to have those rules on my Mac mini running because then it runs all                                     |
| 13:48      | of the time. Of course, I could install [[Airmail]] on the Mac mini and have it running there as well,                                |
| 13:52      | but mail does a very good job and it's very resource efficient as well. So no need to change.                                         |
| 13:58      | You know, it's funny because [[iCloud]] email has some very rudimentary rules built in where you                                      |
| 14:05      | could do some sorting and filing. I don't know if you could do filing, but you could do some basic                                    |
| 14:10      | stuff with the iCloud rules. But then if you look at the rules available on the Mac itself,                                           |
| 14:15      | they're so much more powerful. I really wish [[Apple]] would would put those cloud, those rules that                                      |
| 14:21      | got locally into the cloud so you could have it happening without needing to run an extra Mac in                                      |
| 14:25      | the background somewhere. Yes. But at the same time, the advantage of having the rules in mail                                        |
| 14:31      | on your Mac or in an app on your Mac is that it then applies to all accounts. So it doesn't                                           |
| 14:35      | matter if you've got a [[Gmail]] account, a [[Yahoo]] account, if you've got Yahoo, please change,                                    |
| 14:38      | they keep getting hacked. Yeah, exactly. It doesn't matter where your email accounts from,                                            |
| 14:43      | it can even be, you know, an email account at work and it just gets filtered and sorted automatically                                 |
| 14:49      | for you based on rules. And you can apply, you can say in mail and in mail act on, I believe,                                         |
| 14:54      | that you want this rule to only apply on this specific account, or you want it to apply to                                            |
| 14:58      | all accounts. By default, it applies the rule to all accounts, which is very useful if you're                                         |
| 15:01      | getting the same spamming things to multiple email addresses. And it's so, like I said,                                               |
| 15:07      | just spend some time in there. It's so powerful. I mean, you can really slice the onion thin                                          |
| 15:12      | to get exactly the kind of rules you want. You can go deeper with the Mac-based automation,                                           |
| 15:18      | and that really involves [[AppleScript]]. Over the years, I've had and abandoned several [[AppleScript\|AppleScripts]]                                 |
| 15:25      | that I applied to email filing and different things. The one that's really stuck with me over                                         |
| 15:30      | the years is I put together an [[AppleScript]] years ago. And it's just all it does is it grabs the                                       |
| 15:36      | first name of the recipient out of the recipient field and paste it in to wherever I type it. So                                      |
| 15:44      | it's an [[AppleScript]]. And I actually combine this with a [[TextExpander]] snippet. So                                              |
| 15:48      | that you can embed an [[AppleScript]] into [[TextExpander]]. So if I just type `xhi`, you know, `x` `h` `i`,                          |
| 15:56      | it says hi, and then it looks at the send, the recipient of the email. So if I'm saying to                                            |
| 16:01      | Rose, say hi, Rosemary, then it inserts the comma and the carriage return. So I just type                                             |
| 16:06      | `xhi` and it grabs the name. So whenever I'm sending email to listeners or readers, I can always get                                  |
| 16:12      | at least their name into it spelled exactly correctly, and just get back to the text of the                                           |
| 16:18      | document. Seems like a simple little automation routine, but it's actually quite useful. I've                                         |
| 16:24      | posted that on the internet. I'll put a link to that in the show notes.                                                               |
| 16:28      | Yeah, that's a really useful one. I often use on iOS, I often use dispatch because dispatch does                                      |
| 16:33      | that by default, which is really, really useful. You'd think typing the word hi and a name comma                                      |
| 16:39      | return doesn't take much time, but especially if it's a name that you're not very good at spelling,                                   |
| 16:43      | or like me, you're constantly switching keyboards and then getting it wrong somehow                                                   |
| 16:47      | spelling wise. It's a very useful time saver. And especially if you're going to use dictation,                                        |
| 16:52      | the other thing, because dictation gets always hung up on names. So having that part of it                                            |
| 16:57      | automated allows you to just start dictating the body of the text without having to worry                                             |
| 17:02      | about it getting the name wrong. Do you do any [[AppleScript\|AppleScripting]] for your email?                                                         |
| 17:07      | I have had [[AppleScript\|AppleScripts]] in the past, but like you, most of them have fallen by the wayside on                                         |
| 17:12      | the way, things that I previously had in mail rules with [[AppleScript\|AppleScripts]]. In some cases, I've                                            |
| 17:17      | replaced with a [[Keyboard Maestro]] and other kinds of automations running on my Mac, because it's a                                 |
| 17:23      | more efficient way of doing things. And it means that I don't need to receive emails to trigger                                       |
| 17:26      | things to happen. I just receive files and then they get deleted automatically or something.                                          |
| 17:32      | Yeah, that's exactly me too. Every [[AppleScript]] I have has been deprecated by features in mail                                     |
| 17:39      | act on or [[Keyboard Maestro]] or [[TextExpander]], where I feel like those third party apps are                                      |
| 17:44      | giving me easier to build automation and more reliable because [[AppleScript\|AppleScripts]] break and then                                            |
| 17:48      | you got to go try and figure it out. And it's just, it's a big problem.                                                               |
| 17:52      | Exactly. And especially with something like [[Keyboard Maestro]], the developer puts in all                                           |
| 17:55      | the work for you. And it's really nice because you can duplicate an existing automation and then                                      |
| 18:00      | enhance it and, you know, improve it, which is always nice.                                                                           |
| 18:03      | Yeah. If you, if you listening to this show have now figured out some way to auto send,                                               |
| 18:10      | if you have something in your life you can auto send with [[Keyboard Maestro]], let us know in the                                        |
| 18:13      | forum. I'd love to hear how people are doing that. I want to save you all time and I'd love to hear                                   |
| 18:19      | how you implement that. This episode of the Automators is brought to you by the Omni Group,                                           |
| 18:25      | makers of OmniFocus. OmniFocus 3 for iOS is a fresh major update to the app that's been the                                           |
| 18:32      | trusted gold standard for to do apps for 10 years since the very first day of the app store.                                          |
| 18:38      | You know, I bought OmniFocus on the first day the app store came out. It was my very first purchase.                                  |
| 18:44      | Anyway, it's the best OmniFocus ever and you can download it right now for free, put it through                                       |
| 18:49      | its paces with a 14 day trial and then buy the standard or pro edition users of earlier versions                                      |
| 18:55      | of OmniFocus get a 50% discount. So that is in a way your upgrade pricing. There's a lot to love                                      |
| 19:02      | about the new version. It's got tags, which are new to OmniFocus 3. They are a powerful organising                                    |
| 19:07      | tool. So you can create tags for person energy level priority location and more. It's got that                                        |
| 19:13      | great forecast to you, which is really unrivalled by any other task management application. It shows                                  |
| 19:18      | you your tasks and calendar events in order so you can better see what's coming up in your day                                        |
| 19:23      | and adjust if needed. Another thing they've got, of course, is that review method, which is another                                   |
| 19:27      | feature you're not going to find in any other task management app. I use OmniFocus every day.                                         |
| 19:32      | It's how I plan this episode as a matter of fact. It's a great application and can really solve your                                  |
| 19:38      | problem when it comes to task management. Not only that, it is very automator friendly. We're                                         |
| 19:43      | going to cover it in future shows, but I use scripts with OmniFocus every day. I've got workflow                                      |
| 19:49      | and soon to be Siri shortcuts dialled into OmniFocus so hard. I have to have an iPad next to my Mac                                   |
| 19:56      | all day so I can run them to script new projects in OmniFocus. It's just the best way to get this                                     |
| 20:01      | stuff done and really keeps me on track. In addition, for automator fans, Omni Group is working on a                                  |
| 20:07      | version of [[JavaScript]] for their app that's going to allow us to further script it on all platforms.                                   |
| 20:11      | So listen, if you're listening to the automators, you're going to like the Omni software and we                                       |
| 20:15      | are so happy to have them as a sponsor. Did you know they agreed to sponsor the show before they                                      |
| 20:19      | even heard an episode? Since they heard what me and Rose were up to, they said they wanted in.                                        |
| 20:23      | So go on over to OmniFocus.com right now and start getting more done. That's [OmniFocus.com](https://omnifocus.com) and let           |
| 20:29      | them know you heard about it here on the automators. So iOS email automation. So we talked about the                                  |
| 20:36      | rich field of the Mac where there aren't many sandboxes and it's easy to do things like keyboard                                      |
| 20:41      | maestro. What about on iOS? Can you automate there? Definitely. You can automate on any platform.                                     |
| 20:47      | You just need a little bit of determination and willingness to play around with things to                                             |
| 20:52      | find the solution that works for you. But that's always the case with automation.                                                     |
| 20:56      | Yeah, I feel like apps really matter on iOS. There's a lot of different mail apps and the                                             |
| 21:02      | automation often is at an app level with the exception of workflow, which we'll get into later.                                       |
| 21:07      | Yeah. So depending on which app you pick can make a difference. And different apps operate                                            |
| 21:14      | differently. The thing that really drives me nuts with automation on iOS is one of the key pieces                                     |
| 21:24      | I want from an email application is the ability to create a link to that email. It's super important                                  |
| 21:30      | because quite often I will take an email and I will save a link to it to an [[Apple Notes\|Apple note]] because                       |
| 21:36      | I want to get back to it later or I'll bury it in an OmniFocus task because I want to attach it                                       |
| 21:43      | to a task I'm going to do later. And not all email links are created equal on iOS. Most developers                                    |
| 21:52      | take this step of just going through and making a callback based on their own application framework.                                  |
| 21:58      | So I believe this is the case for [[Airmail]]. It creates an [[Airmail]] callback. You can create a link                              |
| 22:03      | to your email in [[Airmail]], but it will only open in Airmail. Yeah. So most apps do this by default.                                |
| 22:12      | Some apps have the option when you share a link back to the mail to change it so that it would                                        |
| 22:19      | work with mail instead. But of course, the problem with that is which app intercepts it on iOS. So                                    |
| 22:24      | the advantage of having an [[Airmail]] specific link is that I don't have to worry, is this going to try                              |
| 22:29      | and open in mail where I don't have that account set up? Or is it going to try and open in dispatch?                                  |
| 22:33      | It's going to open in email where the message has come from. So that has advantages and disadvantages.                                |
| 22:40      | It very much depends on your workflow as to whether or not this is a good thing or a bad thing for you.                               |
| 22:45      | For me, that's a very good thing. And I like its stability and consistency.                                                           |
| 22:49      | And that's because you're also using Airmail on your Mac because the downside of an Airmail specific                                  |
| 22:54      | link is when you get on the Mac, if you click that link and you don't have Airmail installed,                                         |
| 22:58      | it doesn't know what to do. It's a dead link in essence. So I think it really comes down to                                           |
| 23:05      | how you're going to implement mail across the various platforms. If you're going to use one                                           |
| 23:08      | application, an app specific link makes sense. I believe Spark does it the same way. I wanted                                         |
| 23:15      | to check it before we recorded and I ran out of time, Rose. I forgot. I'm very sorry. I ran out                                       |
| 23:20      | of time as well. But I believe [[Spark]], from memory, Spark has or had a specific [[URL Schemes\|URL scheme]] for Spark              |
| 23:28      | for opening messages again. Yeah. The other big one that Rose already mentioned is [[Dispatch]].                                      |
| 23:33      | Dispatch gives you the option to create a system level link to email, which will work with Apple                                      |
| 23:40      | Mail or a dispatch specific one. And since dispatch doesn't exist on the Mac, I would think you would                                 |
| 23:47      | just want the system level one. So when I create links to emails, I usually use dispatch. My main                                     |
| 23:53      | application for mail, frankly, is [[Apple Mail]]. It's just because it's so consistent. And using                                     |
| 23:58      | some of the third-party services we're going to talk about later, I've been able to power it up.                                      |
| 24:03      | But when I do sometimes really want to power through a bunch of email, I'll open up dispatch.                                         |
| 24:08      | I keep dispatching on my iOS devices. And I do appreciate that they give me a callback link                                           |
| 24:13      | that will work with [[Apple Mail]]. Yes. And that's very useful. What I unfortunately don't like                                      |
| 24:20      | about a mail on iOS specifically on the iPhone is I've got no way to get a share sheet link.                                          |
| 24:26      | So if I want to get a link, I need to switch to my iPad and use drag and drop, which especially                                       |
| 24:33      | if you're like me and can meet on public transport in the morning, that's quite tricky to do when                                     |
| 24:37      | holding onto a tram pole in one hand and then trying to balance your iPad in the crook of your                                        |
| 24:41      | arm. It's recipe for disaster. Don't recommend that. So that's one of the reasons why I stick                                         |
| 24:45      | with that mail. It's very good for that. And the other problem with [[Apple Mail]] is, you know,                                          |
| 24:50      | you can't do drag and drop on a phone. I mean, if you want to get, if I have an email come in                                         |
| 24:56      | on [[Apple Mail]] and I want to save it to [[OmniFocus]] for later, I mean, [[OmniFocus]] has a service where                         |
| 25:03      | you can forward an email and it creates a link for you in essence. But I mean, the traditional                                        |
| 25:08      | method of drag and drop just doesn't work because there's no drag and drop on an iPhone between                                       |
| 25:12      | two applications. Yeah. So if you're using something like [[Apple Reminders\|Reminders]] and you want to remind                                            |
| 25:16      | yourself about a link, I mean, what you can do, and this does work, if you're in an environment                                       |
| 25:22      | where you can talk to [[Siri]], then you can say, "Hey Siri", remind me of this later. And then                                       |
| 25:29      | [[Siri]] will remind you of this later and you can get it into a reminder system that way.                                            |
| 25:33      | You have to be in an environment where you can talk to your phone to do that.                                                         |
| 25:36      | Yeah, it just doesn't link. It's nuts. And the lack of a share sheet is really a pain for people                                      |
| 25:41      | who want to be automators because the share sheet is the ticket in so often. There is a feature,                                      |
| 25:48      | like if you want to create a PDF of the email, you can do that through the print dialog box of                                        |
| 25:54      | all places. You go to the email, you go print and then you do the exact opposite of a pinch,                                          |
| 26:01      | you actually expand with your fingers and then it gets you to a share sheet.                                                          |
| 26:04      | You can also force touch or 3D touch on that image if you're on a device that supports that                                           |
| 26:08      | which to zoom in, which is quite handy if you're working one handed again.                                                            |
| 26:12      | Yeah, but it still doesn't give you the ability to create a link. All it does is give you a PDF                                       |
| 26:16      | that you can ship off as a PDF. So, yeah, [[Apple Mail]] isn't that great about it. I'm really on                                     |
| 26:23      | the fence about this stuff. I use [[Apple Mail]]. There's a bunch of reasons I'm not that happy                                       |
| 26:28      | with it, but Airmail gives me trouble. We actually did a whole show on iOS email clients,                                             |
| 26:33      | on Mac power users. I'll put it in the show notes, but there really isn't a perfect solution,                                         |
| 26:40      | unfortunately. And for automators, it's even more difficult because the tools,                                                        |
| 26:44      | you know, we have a very limited set of tools. I think really my favourite tool for automating                                        |
| 26:48      | email has to be dispatch with the combination of the [[x-callback-url\|X URL callback]] and also the combination                      |
| 26:55      | of it, the fact that it adds the person's name to the email automatically for you.                                                    |
| 26:59      | I can get through email very quickly with that app using a combination of, you know,                                                  |
| 27:04      | it addressing the email. I can open up a dictation and just dictate the email without,                                                |
| 27:10      | you know, having the person's name properly in there. It's got the signature built in,                                                |
| 27:16      | and then I can always create the URL callback on the email file. So, I think if I was going to pick                                   |
| 27:23      | my favourite automation mail app, it's dispatch. Yeah. I, as you mentioned, I'm using Airmail on iOS,                                 |
| 27:31      | and what I really like about [[Airmail]] is it's got custom actions built in. So, these are kind of                                   |
| 27:37      | like a mini workflow in that you can reply to people, you can forward messages, and you can                                           |
| 27:43      | create specific subjects and bodies as part of that. And you can also have it, for example,                                           |
| 27:49      | if you're using Gmail, you can add a label, you can archive it, you can file things, you can trigger                                  |
| 27:55      | sending to OmniFocus or things and various other applications through an action, and you can chain                                    |
| 28:02      | these together. And you can also use that to send it in a specific format to workflow, which is                                       |
| 28:07      | really, really useful. And that's where you start going crazy with the automation.                                                    |
| 28:12      | Yeah. And I would add that Airmail has amazing keyboard shortcut support of all of them. It's                                         |
| 28:18      | the best. If you use an iPad with an attached keyboard, you can fly through email on Airmail.                                         |
| 28:24      | I just had a couple problems with that app in terms of stability and like,                                                            |
| 28:29      | you know, I do inter-lineated replies. I'll have to check to see if they fixed that. We actually,                                     |
| 28:33      | you and I met with those guys at [[WWDC]]. Yeah, and they have fixed it. I tested it earlier today.                                   |
| 28:38      | I had to reply to somebody that we were going to be talking to very soon on this podcast.                                             |
| 28:43      | And yes, I used the, so for people not familiar with what we're talking about, when you reply to                                      |
| 28:51      | an email, some people just like to write at the top. And some people like to break down the original                                  |
| 28:56      | email and then reply in between. And so what you need to do for this to work is the reply needs                                       |
| 29:03      | to be outdented so that the person sees your replies when you reply. Because otherwise,                                               |
| 29:07      | it just all gets put into it. And they maybe just see like three words at the top where you've written                                |
| 29:11      | hi, David. How are you? And then they don't see any of the rest of the email. Yeah. You know what,                                    |
| 29:19      | Rose, now I've got to go and use [[Airmail]] again for a couple of weeks. You just started me on the                                  |
| 29:23      | path again. Well, I'm sorry. I'm a bad influence. You should know this by now. I'm going to try                                       |
| 29:32      | [[Airmail]] again. There was a lot of stuff I liked about [[Airmail]], but just like I said,                                          |
| 29:37      | that there were just little basic problems that we're making about. And honestly, if this stuff                                       |
| 29:41      | is of all interest to you, go listen to that MPU episode because we spend a lot of time going                                         |
| 29:44      | through a bunch of apps. And there are great apps out there. There's just not a single one                                            |
| 29:50      | to recommend. So I'll try Airmail again, and I'll report back. But you're right. For an                                               |
| 29:55      | automator, that's another app that has a lot of good things about it, you know, in the sense that                                     |
| 30:01      | keyboard shortcuts and those little basically automation routines you can build into the                                              |
| 30:06      | application. I'm going to give you an example of one of the custom actions which I built in                                           |
| 30:10      | Airmail. So some people might be aware of a service called [[Tripit]], which I use. Basically,                                        |
| 30:15      | the idea is that you can forward all of your travel reservations to it, and it creates a                                              |
| 30:19      | nice itinerary for you, which is really useful if you've got a lot going on on the trip and you                                       |
| 30:23      | don't want to double book yourself or you maybe want to share it with somebody else who you're                                        |
| 30:28      | traveling with or just so that they know where you are when you're traveling. I did previously                                        |
| 30:33      | have [[Tripit]] watch my email for me and suck in the reservations. Unfortunately, I'm the travel                                     |
| 30:38      | coordinator for my family and friends. So they often forward me reservations and go,                                                  |
| 30:42      | did I do the right thing here? And then I would end up with lots of trips that weren't mine.                                          |
| 30:46      | So [[Tripit]] thinks they're taking a lot more trips than you actually are taking.                                                    |
| 30:49      | Yeah, I mean, I travel quite a bit anyway, but this was taking it too far. So what I have is I                                        |
| 30:54      | have a custom action, which is for [[Tripit]], and it's called travel. And so it forwards it to                                       |
| 31:00      | [[Tripit]] for me. And I actually have it set so that I don't need the composer to be interactive. So it                              |
| 31:06      | just forwards the email to plan plans at tripit.com. It applies my travel label and it archives the                                   |
| 31:12      | email for me. And that's it. It's a very simple thing, but it just means that as soon as the                                          |
| 31:19      | reservation comes in and I've had a look at it and I'm happy with it, I send it off to Tripit and                                     |
| 31:23      | that's it. And it's archived for me in the place where I would look if I need to retrieve more                                        |
| 31:27      | information about that. So it means that I've turned what would have been several taps or actions                                     |
| 31:32      | into one. And that is a real time saver. And you can do that with all sorts of things.                                                |
| 31:38      | All right, well, I'll try it again. And hopefully the app is more stable.                                                             |
| 31:43      | The funniest thing about that when we met the developers, there are these two Italian guys                                            |
| 31:47      | and they were telling us how they live out in the middle of, I guess it's a vineyard,                                                 |
| 31:52      | they've got a house out in the middle of somewhere in central Italy. And that they said they argue                                    |
| 31:58      | with each other all the time. I'm just imagining building this app. No, you should work like                                          |
| 32:04      | this. No, you should work like that. Yes. They're really lovely people. And they're super passionate                                  |
| 32:11      | about their program. And those are some of the best apps, the ones made by just a small team. So                                      |
| 32:15      | all right, I'll go ahead and play with it some more. But moving on with email, text composition,                                      |
| 32:21      | we talked about how great it is on the Mac with things like [[TextExpander]]. You can still do that                                   |
| 32:26      | on iOS. It's not as easy. Text fill ins can work, and like TextExpander has its own keyboard.                                         |
| 32:34      | But to really get the most out of this stuff with [[TextExpander]], like the tab keys and things like                                 |
| 32:37      | that, you've got to use the [[TextExpander]] app. For fill ins is another good example if you do                                      |
| 32:42      | fill ins in your email. So it's not as convenient on iOS, but it's out there. Yep. And also,                                          |
| 32:47      | there are lots of apps with TextExpander integration built in. So for example, dispatch                                               |
| 32:51      | has [[TextExpander]] integration. So that means that you can use the keyboard of your choice,                                         |
| 32:55      | not necessarily the [[TextExpander]] keyboard. And it will still do its best to expand tickets with                                   |
| 33:02      | tickets to expand snippets within its ability. And also, [[Drafts]] has [[TextExpander]] support.                                     |
| 33:09      | And a lot of people might not think of [[Drafts]] as an application for email. It's not. It's an                                      |
| 33:13      | application where you create text. But it's a really good place to write an email and send it                                         |
| 33:18      | without getting sucked into your email inbox. Oh, yeah, it's so great. I mean, when I want to send                                    |
| 33:23      | an email, usually I write it in [[Drafts]] for exactly that reason because it's a word's [[TextExpander]].                            |
| 33:29      | And I don't have to look at my inbox. I can send an email out of [[Drafts]] without ever seeing my inbox.                             |
| 33:35      | And that, you know, it's just a way that we try to defeat our own programming. I guess I'd say,                                       |
| 33:43      | but when you don't see your list of emails, you don't get distracted by it and you get back to                                        |
| 33:49      | work. So like, if you've got a task that say, you know, send an email to Rosemary checking in,                                        |
| 33:54      | you send the email out of [[Drafts]], you never have the opportunity to get distracted by what's in                                   |
| 33:59      | your inbox. Yes. And of course, [[Drafts]] supports [[URL Schemes]], you know, Greg Pierce, who creates                                   |
| 34:05      | [[Drafts]] with a creative [[URL Schemes\|URL scheme]]. So of course it does. And that means that you can, you know,                                   |
| 34:10      | you can either just use the default mail client if you like, or you can still be using Airmail,                                       |
| 34:15      | spark dispatch, whichever email client you like providing, they've got [[URL Schemes\|URL scheme]] support for                                         |
| 34:19      | sending emails, you can actually have an action that sends an email through Spark or email or                                         |
| 34:25      | Dispatch, which is really nice. So you don't have to set up your email in multiple clients,                                           |
| 34:30      | which at one point I tested 28 email clients, not for this show. And I accidentally left                                              |
| 34:35      | notifications on on all of them. I'll kind of accidentally, I wanted to see how fast they                                             |
| 34:40      | would notify me and I sent myself a test email. And yeah, that was not good.                                                          |
| 34:46      | Notifications for 28 email applications. I was testing to see how fast they would                                                     |
| 34:51      | notify me about a new email. The answer for 26 of them was extremely.                                                                 |
| 34:58      | Side note, I don't recommend that to, to anybody don't install 28 email clients and leave notifications                               |
| 35:04      | on. Yeah, that's a good idea. But on the subject of [[Drafts]], it's a great tool for automation                                      |
| 35:09      | in general. If you want to do automation on iOS, it's one of the big apps for that,                                                   |
| 35:15      | not as big as [[Workflow]], but in the ballpark, I'd say. And I'm doing a series of screencasts                                       |
| 35:20      | right now for [[Greg Pierce\|Greg]] over at Agile Tortoise, the guy who makes [[Drafts]], showing how to do                           |
| 35:26      | some of the automation stuff on it. So I'll put some links into the show notes if you're                                              |
| 35:29      | interested in that stuff. It's not really specific to email, but it'll give you the idea.                                             |
| 35:34      | Yes, definitely. And it's just a really good app. You can also actually use [[Pythonista]]                                            |
| 35:38      | to send email. But I mean, that's very difficult to explain on the show because you're using                                          |
| 35:43      | [[Python]] and I don't want to sit here and tell people how to write Python. That's not particularly                                  |
| 35:48      | exciting. But I will throw together a short example that I can include in the show notes                                              |
| 35:51      | for people on how to send an email with Pythonista. Yeah, so if you want to send your email faster,                                   |
| 35:57      | we recommend you go learn a programming language. That's definitely not a requirement here.                                           |
| 36:05      | Yeah. And then we get to the granddaddy, to [[Workflow]]. [[Workflow]] is the automation tool,                                        |
| 36:15      | at least for another couple of months on iOS. And we are, by the way, going to talk about                                             |
| 36:21      | [[Shortcuts\|Siri Shortcuts]] in more detail. But one of the pieces of feedback we've been getting from                               |
| 36:27      | a lot of people in the know is that the workflow stuff is going to pour it over                                                       |
| 36:30      | to [[Shortcuts\|Siri Shortcuts]]. So all the talk we're doing about it here in these shows is going to                                |
| 36:34      | absolutely apply. So if you're listening to this in the future and you can't find workflow,                                           |
| 36:37      | you'll be able to do the exact same stuff in [[Shortcuts\|Siri Shortcuts]]. But workflow has got a set of tools                       |
| 36:45      | related to email. It allows you to get email addresses. It allows you to select email addresses                                       |
| 36:51      | from a list. It allows you to send an email. And that tool is quite powerful because it's a full                                      |
| 36:56      | creation element of an email. And it works with variables. So you can grab variables or even                                          |
| 37:03      | put text together through the course of your workflow to assemble and send the email for you.                                         |
| 37:08      | It gets back to the thing we talked about earlier with [[Keyboard Maestro]], where things just happen                                     |
| 37:12      | for you or things happen upon your approval that drastically reduce the amount of your involvement                                    |
| 37:19      | with the creation and sending of email. And I think that is workflow's most powerful element                                          |
| 37:25      | with respect to email. Yeah, definitely. And what you can even do, and variables are a little                                         |
| 37:30      | tricky to explain, but you can add multiple things to a variable. So say, for example,                                                |
| 37:35      | I wanted to send you a PDF and an image, and I want to send you the body of the email as well.                                        |
| 37:41      | So the body of the email is a text action. And then you have your image, which might be, say,                                         |
| 37:46      | for example, the latest screenshot that you've taken and a PDF, which is a specific file.                                             |
| 37:50      | So you get these three items and you add them to a variable. And then just before the send email                                      |
| 37:56      | action, you do the get variable, and you get the variable that you've added these three things to,                                    |
| 38:01      | and it just does it for you. And that is absolutely magic when you get that working. So useful.                                       |
| 38:07      | Yeah, we're going to put together a screencast on that with respect. Maybe we'll make a dummy                                         |
| 38:12      | email with some variables and attachments. And we'll put that up so you can download it and                                           |
| 38:17      | run it yourself and see the screencast, how it works. It's really not that hard once you understand                                   |
| 38:24      | it. I mean, the trick is to create the variable and to get the variable. The other element of this                                    |
| 38:30      | that I think people should consider is creating a send email workflow from the extension dialog                                       |
| 38:36      | in [[Workflow]]. So if you're routinely sending a PDF, let's say you routinely send a PDF,                                            |
| 38:44      | but you have to first create it. So you open up a PDF on your iOS device, and you hit the                                             |
| 38:50      | extension button and or the sharing extension button. And then you can, there's a run [[Workflow]]                                    |
| 38:55      | extension there, where you can have the email, because let's say you send that PDF to the same                                        |
| 39:01      | person every time going back to the thought that we had at the beginning of the show,                                                 |
| 39:04      | you can run that extension and it will attach the PDF from the PDF app, create the email,                                             |
| 39:11      | send the email for you, or at least give you the opportunity to press the send button, but do all                                     |
| 39:15      | the other generation stuff for you. So it's really powerful that way. The other thing I would recommend                               |
| 39:21      | with [[Workflow]] is consider emails as part of a bigger workflow. Like one of the things that I do                                   |
| 39:28      | often is I use [[Workflow]], and this is a very basic use of the app, but it's very useful, is doing                                  |
| 39:34      | multiple tasks with it. A good example is every year in the last quarter of the year, I have to do                                    |
| 39:41      | minutes for corporations, I represent a bunch of small companies, and we have to do their year in                                     |
| 39:45      | minutes. And I have to kick that off, I have to get it started. So I've got a workflow that asks                                      |
| 39:51      | me just a few variables, it's like the client's name, the company name, and then it goes through                                      |
| 39:55      | and it sets up OmniFocus projects to create the minutes, it goes into [[Ulysses]] and writes some                                     |
| 40:03      | of the basics of the minutes for me, the stuff that where I've, you know, just taken my form                                          |
| 40:08      | and turned the company name into variables that get distributed throughout. And there's a whole                                       |
| 40:13      | bunch of more work that has to be done after I talk to the client, but there's some basic parts                                       |
| 40:17      | that can be done automatically. And then the last thing it does, it takes those variables and it                                      |
| 40:21      | sends an email to the client with a list of questions of things that happened in the last                                             |
| 40:26      | year that I may want to include in the minutes. And that used to be a process that would take me                                      |
| 40:30      | like a half day to go through and put all that together. And I was doing it with [[TextExpander]],                                    |
| 40:35      | even with a [[TextExpander]] snippet, but it still took me a long time to create all that stuff.                                      |
| 40:40      | And then I got thinking about it, you know, [[Workflow]] could run all those three app workflows                                      |
| 40:44      | for me. And now I don't even really have to do it. I can have someone else do it for me,                                              |
| 40:50      | just run the workflows for me, or I can do it myself, but it's much faster just, you know,                                            |
| 40:54      | getting the names and filling them in and sending out and running those workflows.                                                    |
| 40:58      | But an email is the last piece of that. And it's not a huge email implementation. All I'm doing is                                    |
| 41:04      | I'm grabbing the person's email address as a variable that you pull when you run the workflow.                                        |
| 41:09      | So you get the email address in. The next thing I do is it creates a subject line using the company                                   |
| 41:15      | name, you know, it says, you know, 2018 minutes for Acme. And because I've put that in there,                                         |
| 41:21      | and then it drops in prearranged text with the client's first name and the salutation in the                                          |
| 41:26      | body of the text. And then the last thing it does is it puts in a blind copy to one week at                                           |
| 41:32      | sanebox.com. We're going to talk later about how you use [[SaneBox]] for automation. But that way I get a                             |
| 41:37      | message from an email service a week later, if the client doesn't respond, because I'm sending,                                       |
| 41:41      | you know, a bunch of these out at once, and I'm not going to want to individually track them.                                         |
| 41:45      | No, and that's the sort of thing. I mean, you could very easily create a task in your task                                            |
| 41:49      | manager, which for in one week's time, say, you know, check whether or not X responded. But                                           |
| 41:54      | the advantage of using SaneBox is if they respond, then you don't get reminded that you need to check                                 |
| 41:59      | up on it, which is automation again. Yeah, exactly. That's what we're here for. Exactly. So I mean,                                   |
| 42:04      | workflow is an incredibly powerful tool. The interesting thing to me, that was one of those                                           |
| 42:09      | aha moments where I realised that automation on iOS is better than iOS on Mac under certain                                           |
| 42:14      | circumstances, because I could probably put that together on my Mac with a [[Keyboard Maestro]].                                          |
| 42:20      | But, but, you know, it's pretty nice that I can do it on my iPad.                                                                     |
| 42:24      | Yeah. And the great thing about your iPhone, and this is, you know, you'll probably hear me say                                       |
| 42:29      | this hundreds of times, is it's the device you have with you. You know, if you have an iPhone,                                        |
| 42:34      | you're going to have it with you most of the time. And some of these, you could actually even trigger                                 |
| 42:38      | from your [[Apple Watch]] and just have it run from there. I wouldn't necessarily recommend sending                                       |
| 42:43      | email from your [[Apple Watch]]. It might be ill advised, depending on exactly what you're doing.                                         |
| 42:48      | But, you know, there's so much power in that small device that you have with you.                                                     |
| 42:52      | So, yes, it's very, very useful.                                                                                                      |
| 42:54      | What about you? Any interesting [[Workflow]] email automations you'd like to share?                                                   |
| 42:59      | Well, I have two. One of them is not particularly interesting. It's very simple. It just gets some                                    |
| 43:05      | most recent photo from my camera roll. And it puts the date and subject. And it opens that up as an                                   |
| 43:11      | email to me, because I have various periods in time where I'm, you know, trying to send images                                        |
| 43:16      | to people with today's date. And that's just a workflow that I ended up creating. I don't even                                        |
| 43:21      | remember the original reason why I created it. I just find that it's still very useful.                                               |
| 43:26      | I believe it was when actually, unfortunately, we had a break in at work. And we were trying                                          |
| 43:33      | to document, you know, damage that was, that we found afterwards. And of course, the problem                                          |
| 43:37      | with the damage is you might find it the next day, or you might find it weeks later. And so,                                          |
| 43:43      | I believe it was related to that. But it's actually, you know, it's quite useful to just                                              |
| 43:48      | email somebody a picture, you know, and make sure that you have the current date with it.                                             |
| 43:53      | Of course, you could get a little bit crazy and have the date of the photo that when it was taken,                                    |
| 43:57      | which I will expand the workflow to do for you. But yes, that's quite a nice one. And I've got                                        |
| 44:04      | another one, which is Mail Merge. Because Mail Merge is a function that's, you know, probably a                                       |
| 44:09      | lot of people don't remember, where you would merge an [[Microsoft Excel\|Excel]] sheet with a [[Microsoft Word\|Word]] document, for |
| 44:14      | example, and it would create letters that you would print out and put in the post with stamps                                         |
| 44:18      | on them to emails people. Stamps, what are these things called stamps? I know, they're crazy,                                         |
| 44:23      | right? It's like this thing where you turn money into like sticky paper and you lick it and you                                       |
| 44:28      | put it on an envelope and it gets lost in the post. The email is thankfully rather more reliable                                      |
| 44:34      | than the post. So the post is, of course, fairly reliable. But what this would do is I've just                                        |
| 44:39      | got a very simple example for you here, which is where it puts the name of the recipient                                              |
| 44:44      | in. So it goes, Hi, person. So in this case, suppose I was emailing David would say, Hi,                                              |
| 44:48      | David. And that's got a block of text for you. And that just says regards. And of course,                                             |
| 44:51      | you could put your name in under that. But it works based on the contact that you've chosen.                                          |
| 44:55      | So you choose a contact to send something to. And then it gets their name and then their email                                        |
| 45:02      | address and sends it off. And this is really useful in tandem with something like [[Drafts]].                                             |
| 45:07      | Because you could, for example, take meeting minutes in [[Drafts]], and then you just want to                                         |
| 45:11      | send them to this person. So you can do that. And that's a very nice little workflow that I've                                        |
| 45:17      | gotten. I'm going to do a screencast on that one for everybody as well so they can see how to make                                    |
| 45:21      | full use of it and perhaps make some enhancements. So are you pulling from a database? Because a                                      |
| 45:27      | mail merge usually has a list of names. Yes. So what this does is it pulls from your contacts.                                        |
| 45:34      | So you choose contacts and then it pulls from there to get the information that's needed. Of                                          |
| 45:38      | course, with email, we probably just need a name and an email address. If you're willing to go                                        |
| 45:42      | without the greeting, then you could actually just do that email address. But that's not really a                                     |
| 45:46      | mail merge. Then that's a mass mailing. But this means that then people get personalised emails.                                      |
| 45:51      | So it's good if you want to, for example, email the meeting minutes. And then, for example,                                           |
| 45:55      | if I was emailing you, then I'd say yes. And I want to follow up about XYZ next week. Do you                                          |
| 45:59      | have time on Tuesday? But if I'm emailing my cat, then I'd be like, well, do you want cat food?                                       |
| 46:04      | Unfortunately, I don't have a cat. I'm sure it would want cat food.                                                                   |
| 46:07      | And you haven't taught it to read yet, either, have you?                                                                              |
| 46:11      | No, no. But I mean, you know, virtual cats or imaginative cats are extremely intelligent.                                             |
| 46:16      | So the trick you do with that is I'm guessing when having seen it is you                                                              |
| 46:21      | are going to select multiple contacts rather than just one.                                                                           |
| 46:23      | Yes, exactly. And then you iterate through them. Of course, you could send it to multiple contacts                                    |
| 46:28      | and just stick their names together. So hello, David, Kat, Joe, Blogs, Philip, I don't know,                                          |
| 46:36      | pick random names, which, you know, would be fine, would work. But especially if you're                                               |
| 46:42      | dealing with less technical users who are likely to hitch reply all, then this could end in tears                                     |
| 46:48      | or at the very least in too many emails in my inbox. So I prefer to email these things out                                            |
| 46:52      | individually. Yeah. At my daughter's school, there's a guy who runs one of the programmes,                                            |
| 46:57      | he has a PhD, but he just does not understand the idea of blind copying everyone. So                                                  |
| 47:03      | Oh, about once every two weeks, I get an email that's sent to like 300 people. And                                                    |
| 47:09      | I've even sent him like explanation. I've been that guy, you know, I've been that guy and he                                          |
| 47:14      | doesn't he's not listening to me. So whatever. I have been that person so many times. And                                             |
| 47:19      | unfortunately, a lot of people just don't like to listen. Yeah. Yeah. What about on the web                                           |
| 47:23      | based stuff? So workflow, we're going to put some screencasts up. We haven't decided as we record                                     |
| 47:28      | which ones, but we're going to have two or three up. So you can see how this stuff works and                                          |
| 47:32      | download your own, but but very powerful automation stuff. But going over to the web,                                                 |
| 47:38      | there's stuff you can do on the website of email too, that I think can really help for                                                |
| 47:41      | automators. A lot of the services have built in tools. Google, I think kind of leads the charge                                       |
| 47:47      | on this. They were one of the first to do auto sorting. And, you know, Google even write replies                                      |
| 47:53      | for you. I mean, depending on how deep down you go in the system, but it really goes pretty far                                       |
| 48:01      | with automation if you're if you're on the Google system. Yeah, the filters in Gmail are                                              |
| 48:06      | extremely strong. And you can use all sorts of Boolean search operators. So ands or is not and                                        |
| 48:12      | all of those kinds of things. I tend to just have a very long list actually of email addresses.                                       |
| 48:20      | And I just stick the next one on with an or and if it's from any of these, tag it with                                                |
| 48:25      | newsletters and archive it please. Because this way I can pop in and I can see, ah, right, I've                                       |
| 48:29      | received 422 newsletters. And so last check this, delete all, you know, because I do subscribe to                                     |
| 48:36      | certain newsletters because that's the only way of getting information via email. But unless I'm                                      |
| 48:40      | looking for something in particular, I try and avoid it because otherwise it feeds my shopping                                        |
| 48:44      | habit, which is not good. And where Google is leading the charge, Microsoft isn't far behind                                          |
| 48:50      | with Exchange and [[Microsoft 365\|Office 365]] has email automation and sorting tools built in.                                      |
| 48:56      | And I don't use Google or Exchange, I use [[IMAP]]. I like the idea of [[IMAP]]. Once again,                                          |
| 49:01      | that's something I'd send you off to an MPU episode to get through all the details of that.                                           |
| 49:05      | But but I do use a service and full disclosure, they're a sponsor of [[Mac Power Users]], [[SaneBox]],                                |
| 49:11      | which gives me most of those tools on a cloud side that I can apply to any account,                                                   |
| 49:17      | which is something I kind of like to control the stuff myself. And [[SaneBox]] will look at the                                       |
| 49:23      | name of the sender and the subject line, they don't look at the contents of the email, but then                                       |
| 49:28      | they do a bunch of work for you based on the information, including auto sorting, which is a                                          |
| 49:33      | form of automation that I think is just golden for email where it goes through and like it sees                                       |
| 49:38      | newsletters and puts them in a designated, you know, newsletter's folder or a later folder for you.                                   |
| 49:43      | And it just can do a series of rules. And the idea is, when you open up your email, you just see                                      |
| 49:49      | the most important emails in your inbox. And the other stuff is sorted off to other places                                            |
| 49:53      | that you can look at later when you fill you have the time. It's a very nice sort of automation.                                      |
| 49:58      | And it's another background thing where you don't do anything, it just happens for you. I like that.                                  |
| 50:03      | Yeah, Gmail does that by default now as well. I actually turned it off because I prefer to use                                        |
| 50:07      | my own rules because there are certain newsletters where, for example, I follow a cheap flights                                       |
| 50:13      | newsletter, if they actually mentioned Vienna in the newsletter, so there's a really cheap                                            |
| 50:17      | flight somewhere from Vienna, I'd quite like to know about it because these deals are very                                            |
| 50:21      | short-lived. So I'm willing to let that land in my inbox, but I don't want the other ones that                                        |
| 50:25      | don't mention Vienna to land in my inbox. I just skim through them every so often. So that's something                                |
| 50:30      | where you can just let the built-in automation do the work for you. And by all means, give it a try,                                  |
| 50:36      | you know, have a play with it. You're probably using it anyway if you actually use the [[Gmail]]                                      |
| 50:39      | web interface. But if you want to amp it up a bit, then you can start creating your own rules and go                                  |
| 50:45      | really crazy there. Yeah. And that's something where you're running that out of an [[Apple Mail]] rule,                               |
| 50:49      | right? No, no, I'm running that based on [[Gmail]] filters, just because that's on the                                                |
| 50:55      | server, so that happens even before my Mac mini sees it. Gotcha. Okay. Well, it would work either                                     |
| 51:00      | way, but you can go level deeper with this stuff if you roll your own. Yeah. The web-based email                                      |
| 51:10      | composition, I don't do much of this to tell you the truth, but all the stuff we were talking about,                                  |
| 51:15      | like auto-creating emails, a [[Keyboard Maestro}] workflow, that's available to a lesser extent                                            |
| 51:22      | through services like [[IFTTT]], if this than that, or [[Zapier]]. I feel like in order to get the most out                           |
| 51:29      | of [[IFTTT]] with email, you really need to be on a Gmail account. The [[IMAP]] tools are very limited,                               |
| 51:36      | whereas Gmail gives them information about the sender and contents. So you can get a lot more                                         |
| 51:43      | automation highly with a Gmail account than with any other service. Yeah. So the built-in email                                       |
| 51:49      | action in [[IFTTT]] only allows you to email yourself, which I mean, if you want to send an email to                                  |
| 51:54      | yourself, it's a great way to do it. And that works with all kinds of email accounts. But if you                                      |
| 51:58      | want to send email to other people, you need [[Gmail]] or [[Microsoft 365\|Office 365]]. But the good news is,                        |
| 52:04      | is you can incorporate all sorts of triggers, so specific dates and times. So on the first Tuesday                                    |
| 52:08      | of the month, email David to say, hello, David. Or if there's a [[RSS]] feed with a specific word in                                  |
| 52:15      | the title, then email that to my mother because she loves pandas. For example, if I see something                                     |
| 52:20      | cute about pandas, it's automated. So you can do things with that. It depends. One rule that I do                                     |
| 52:27      | use with this and that with my [[Gmail]] account is it automatically downloads attachments to [[Dropbox]],                            |
| 52:33      | which is very useful because then all of my attachments are automatically saved.                                                      |
| 52:37      | Yeah. So then I can actually, I can go crazy with [[Hazel]] on them and [[Hazel]] sort things out for me.                                 |
| 52:42      | Yeah. [[SaneBox]] as that feature too. So it gives you, I mean, it's a whole other                                                    |
| 52:47      | subject of automation for a whole other day. But once you get something on your drive,                                                |
| 52:52      | that gives you a lot more power to automate. Just a few closing tricks on automation for email.                                       |
| 52:59      | I wouldn't say this is automation, but just getting email up faster. Even if you've never been a fan                                  |
| 53:04      | of dictation or voice to text technology, I think email is a place to experiment with it because a                                    |
| 53:10      | lot of times your email replies are one or two sentences, which is right in the ballpark for                                          |
| 53:16      | Siri. Maybe this is something you want to try. That's one of the reasons why I like the [[Dispatch]]                                  |
| 53:21      | thing where it puts the name of the recipient in for me so I can just dictate the body of the text,                                   |
| 53:27      | which which Siri is much better at than getting the name of a person, especially if it's a unique                                     |
| 53:31      | spelling. So I would look into that. It's available both Mac and iOS. If you do it on Mac, make sure                                  |
| 53:41      | you go into the setting and click the box to download. It's like a, I think it's a gigabyte                                           |
| 53:45      | size file, but it does much better once you give it the voice resources. [[Dragon Dictation\|Dragon's]] out there cost                |
| 53:52      | money. It's better, but it costs money. And then [[Drafts]] on iOS is a really great place. We're                                     |
| 53:57      | talking earlier about sometimes you want to send an email out and you don't want to go into your                                      |
| 54:02      | inbox, you write it in [[Drafts]]. Greg at [[Drafts]] has done something very clever. I'm almost hesitant                             |
| 54:07      | to talk about this on a podcast because I don't want someone at [[Apple]] to hear about it, but                                           |
| 54:13      | the usually Siri has a timer on it. I think it's about 45 seconds. At least the last time I ran                                       |
| 54:17      | a stopwatch against it, it was about 45 seconds. But Greg has done a thing where it somehow loops                                     |
| 54:23      | magically and you can talk longer than 45 seconds and the dictation continues to run,                                                 |
| 54:28      | which is very convenient. It's the best use of [[Siri]] dictation on the iPhone is in that app.                                       |
| 54:35      | So that's another place you may want to try. And you can use that on the [[Apple Watch]] as well,                                         |
| 54:39      | which means that you can be going around talking to your watch, composing that email,                                                 |
| 54:44      | you know, potentially we're doing a bunch of other things as well, because we're all very                                             |
| 54:47      | busy people. And that's really, really nice. I talk to my watch a lot more than I should                                              |
| 54:52      | probably should, but it's very efficient. Yeah, I take a lot of walks and things that                                                 |
| 54:57      | occur to me. And I have the [[Drafts]]. What do they call that thing? The complication. Yes,                                          |
| 55:05      | I have the [[Drafts]] complication on my Siri watch. So anytime something occurs to me like, oh,                                      |
| 55:09      | I need to send Rose a note, I tap the button and just start talking to my watch like a crazy man,                                     |
| 55:14      | no matter where I'm at. And then when I get back to my iPhone, it's already written for me.                                           |
| 55:19      | Another power trick there is badge your badge, put a badge on [[Drafts]] for any unprocessed inbox                                    |
| 55:25      | item. So that way it reminds you when you get back to process it. Yes. Okay. That's very powerful.                                    |
| 55:32      | Well, Rose, our 30 minute show about automation ended up being something like 50 minutes.                                             |
| 55:38      | That's okay. We're providing value for money. It's a good show. Email is a big subject. And                                           |
| 55:43      | honestly, it ties into everything. I was just thinking as we were talking, I mean,                                                    |
| 55:46      | we talked about automating email last week with some of the scripts that we have to send out                                          |
| 55:51      | automatic emails for appointments, you know, so it's just, it's just something that's everywhere.                                     |
| 55:56      | So I'm glad we covered it early. So we've got kind of this foundation. If you'd like to learn more                                    |
| 56:00      | about email and automation, I would recommend going to the Mac Power users' library. We've covered                                    |
| 56:05      | email several times over the years and we have some links to those episodes in the show notes                                         |
| 56:10      | as well as to make it easy for you to dive right in. I have an email field guide. It's a little                                       |
| 56:14      | long in the tooth. I think some of the app discussions need updating honestly, but the,                                               |
| 56:19      | but all the email practices stuff is in there and some of the automation stuff is absolutely                                          |
| 56:24      | still good. So that may be something you want to look at. And you know, there's a lot of great                                        |
| 56:28      | resources on the web about, about email. So go take a look at those, but, but spend some time                                         |
| 56:33      | automating your email. Let us know what you're doing in the forum. We'd love to hear about it.                                        |
| 56:38      | And we look forward to seeing you next time. Yes.                                                                                     |
