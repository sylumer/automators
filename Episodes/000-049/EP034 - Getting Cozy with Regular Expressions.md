---
status: "incomplete"
fc-date:
  year: 2019
  month: 10
  day: 11
fc-category: "podcast"
podcast: "Automators"
published: 2019-10-11
duration: 3525
formattedduration: "00:58:45"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/34"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators034.mp3"
episode: 34
title: "34: Getting Cozy with Regular Expressions"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Roll up your sleeves Automators. This week Rose and David tackle regular expressions. What are they? How do you make them? Where do you use them? All those questions get answered in this episode. Regex isn't as daunting as it may first seem.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 034 Discussion](https://talk.automators.fm/t/automators-34-getting-cozy-with-regular-expressions/5758)

# Sponsors
- [[PDFpen (Sponsor)|PDFpen, from Smile]] - The ultimate tool for editing PDFs and go paperless.
- [[Zapier (Sponsor)|Zapier]] - The easiest way to automate your work.
- [[FreshBooks (Sponsor)|FreshBooks]] - Online invoicing made easy.

# Show Notes
- [Bare Bones BBEdit 13](http://www.barebones.com/products/bbedit/) - It doesn't suck.
- [BBEdit Manual](https://www.barebones.com/support/bbedit/manual.html)
- [Regex ICU User Guide](http://userguide.icu-project.org/strings/regexp)
- [Regex101](https://regex101.com)
- [Pretty Regular Expressions](https://chrishannah.me/Pretty/)
- [Automators - Relay FM](https://www.relay.fm/automators)
- [Home | Automators](https://automators.fm/)

# Transcription
  
| Time Index | Transcription                                                                                       |
| :--------- | :-------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to Automators, I'm David Sparks and I'm joined by my co-host, Rosemary Orchard              |
| 00:07      | and this is Automators, where we talk about how to automate your technology and make it             |
| 00:11      | do your bidding for you.                                                                            |
| 00:13      | Hello Rosemary.                                                                                     |
| 00:14      | Hey David, how are you today?                                                                       |
| 00:16      | Excellent.                                                                                          |
| 00:17      | I am excited today to talk about regular expressions.                                               |
| 00:21      | Ooh, fun.                                                                                           |
| 00:23      | It looks like a spider just ran across my keyboard and typed on everything.                         |
| 00:26      | What happened?                                                                                      |
| 00:27      | Yeah, I don't know.                                                                                 |
| 00:28      | Well, maybe it's a regular expression.                                                              |
| 00:30      | We'll have to do the show and find out.                                                             |
| 00:35      | If you're reaching for the knob right now, don't because regular expressions is something           |
| 00:38      | everybody can do.                                                                                   |
| 00:40      | It sounds like a programmer thing, programmers use it all the time, but even as normal folks        |
| 00:45      | can find a use for a regular expression, what it really is, is a fancy way to search text           |
| 00:51      | and it gives you text searching superpowers if you take the time to learn it and it won't           |
| 00:58      | take that long.                                                                                     |
| 00:59      | Yes, and that is a promise.                                                                         |
| 01:01      | It really doesn't take a lot of time to learn this and we have a bunch of tools up our sleeves      |
| 01:05      | for this show, which will actually pretty much write your irregular expressions for                 |
| 01:09      | you.                                                                                                |
| 01:10      | So keep listening.                                                                                  |
| 01:12      | Yeah, I thought I'd start by just telling you one of my best uses of regular expressions            |
| 01:18      | as a lawyer.                                                                                        |
| 01:20      | I get in these disputes once in a while where we get all these documents.                           |
| 01:26      | Lawyers are weird people and a lot of times when you send a demand for documents and there's        |
| 01:31      | like one or two good documents that we really need to prove our case, they'll bury it in            |
| 01:36      | 20 boxes worth of documents and it's the needle in the haystack problem.                            |
| 01:41      | But the way I would solve that is I would just have the documents scanned in OCR and                |
| 01:47      | we would combine that into one big OCR file, which is a lot of words, but I'd use [[BBEdit]],           |
| 01:55      | which is a great application.                                                                       |
| 01:56      | It's actually made for web programming, really, but a lot of people are writing it as well.         |
| 02:01      | And I would take [[BBEdit]] because you can throw anything at it and I'd put all this text in           |
| 02:04      | it and I would run a regular expression against it and a regular expression would be a very         |
| 02:10      | complex kind of search that I would run, finding a specific set of text within the document         |
| 02:17      | and I was always able to find what I wanted and everybody could never believe how I could           |
| 02:23      | always dig up the one piece of information we needed out of all this information and                |
| 02:28      | the answer was regular expressions.                                                                 |
| 02:31      | Yes, and if you think of this, some people may be going, well, maybe I don't really have            |
| 02:36      | that kind of information.                                                                           |
| 02:37      | Well, there's a lot of other ways that you can use it as well.                                      |
| 02:40      | So I'll give you one of my examples, which is one I literally used it just before we                |
| 02:44      | started the show because I booked some flights yesterday.                                           |
| 02:47      | They're now in my calendar thanks to Tripit.                                                        |
| 02:50      | And say I had just this flight information from somewhere else, I often need to get the             |
| 02:55      | flight number at the origin location so that I can add it to OmniFocus with [[Apple Reminders\|Reminders]] to            |
| 03:00      | check in.                                                                                           |
| 03:02      | And getting that information, well, what is a flight number?                                        |
| 03:05      | A flight number is two or three letters followed by two to four numbers.                            |
| 03:11      | And well, the letters, they could be any combination of letters because there are lots of different |
| 03:17      | airlines and the numbers, well, you can have anywhere from one up to 9,999.                         |
| 03:24      | If I'm just doing a control F for that, I'm going to be there for a very long time.                 |
| 03:28      | But if I do a control F and turn on grep or regular expressions or rejects, depending               |
| 03:33      | on the program, funnily enough, I have it right under my fingertips.                                |
| 03:38      | And as it turns out, I actually do this one with shortcuts.                                         |
| 03:41      | Yeah.                                                                                               |
| 03:42      | So you can look for a number in a particular format or words in a particular format with            |
| 03:49      | regular expressions as well.                                                                        |
| 03:50      | And it's just really powerful once you stop to learn it.                                            |
| 03:54      | Now, you just said something really quick.                                                          |
| 03:56      | I want to go back over regex.                                                                       |
| 03:59      | It's sometimes called that regular expressions.                                                     |
| 04:01      | It's called grep.                                                                                   |
| 04:03      | There's different names for it.                                                                     |
| 04:06      | But the whole idea is this search terminology where you do something, and I think we'll             |
| 04:11      | do one easy regular expression, and that's the period, which is the wild card.                      |
| 04:18      | Yeah.                                                                                               |
| 04:19      | That's a really useful one.                                                                         |
| 04:21      | So just give an example of that.                                                                    |
| 04:22      | Well, I mean, a period matches anything because it's a magic matcher, if you want to call           |
| 04:30      | it something, and it will match anything, excluding a new line.                                     |
| 04:34      | So for example, if I put six dots in a row, then it will match anything that is six in              |
| 04:43      | length or the first six of something.                                                               |
| 04:46      | And that's really, really useful because I don't have to specify, hey, is this a letter             |
| 04:51      | or is it a space or is it a number?                                                                 |
| 04:53      | It just grabs any of those.                                                                         |
| 04:55      | Yeah.                                                                                               |
| 04:56      | But if you do the regular expression CA, period, then it'll look for any three-letter word          |
| 05:05      | because that dot just represents one letter.                                                        |
| 05:07      | We're going to talk later about how to fix that.                                                    |
| 05:10      | But any three-letter word, it starts with the letter CA, so it'll find cat and can.                 |
| 05:16      | It will not find coat.                                                                              |
| 05:17      | Well, actually, it doesn't start with an A, does it?                                                |
| 05:20      | Aha.                                                                                                |
| 05:21      | There you go.                                                                                       |
| 05:22      | It will find a four-letter word starting with CA, but it will find anything.                        |
| 05:28      | It'll use that period, essentially, as anything.                                                    |
| 05:30      | If you've ever played poker, you've had wild cards, jokers wild, deuces wild, it's the              |
| 05:36      | same thing as a wild card in poker.                                                                 |
| 05:39      | It can be literally any card in the deck.                                                           |
| 05:41      | In this case, it can be any number or letter in the alphabet.                                       |
| 05:45      | So that is a regular expression.                                                                    |
| 05:48      | So if you search one of these mini-programs that do regular expressions and type CA, period,        |
| 05:55      | guess what?                                                                                         |
| 05:56      | You just did a regular expression.                                                                  |
| 05:58      | Yeah.                                                                                               |
| 05:59      | And what you should double-check with any program that you're using to do this because              |
| 06:03      | there are some programs, for example, OmniFocus supports regular expressions in their search.       |
| 06:07      | Did you know that?                                                                                  |
| 06:08      | Maybe not.                                                                                          |
| 06:09      | But if you open up the search function of a program like [[BBEdit]] or OmniFocus or [[Drafts]],            |
| 06:16      | then you can usually turn on and off the regular expressions, which is really useful because        |
| 06:20      | sometimes you might want to actually match a period and you don't care about regular                |
| 06:25      | expressions.                                                                                        |
| 06:26      | So you can just turn that feature off.                                                              |
| 06:28      | But if you do want a match period, then you need to put a backslash in front of it to               |
| 06:33      | escape it, and then you're matching the actual period.                                              |
| 06:35      | So then you're matching anything that is CA, full stop if you type CA backslash dot.                |
| 06:40      | Yeah.                                                                                               |
| 06:41      | Like if you, like an example with the period, you can use multiple of these wildcard periods.       |
| 06:46      | So let's say you say, I know the guy has a phone number and it starts out 987, but then             |
| 06:53      | there's four digits after that I don't remember.                                                    |
| 06:55      | In that case, you could do a regular expression for 987, period, period, period, period, right?     |
| 07:02      | And it would search for any number starting with 987 and having four characters afterwards.         |
| 07:10      | And actually, as we get through the show, you're going to find out there's much better              |
| 07:12      | ways to do that.                                                                                    |
| 07:13      | But just as a basic example, that's another regular expression.                                     |
| 07:16      | Yeah.                                                                                               |
| 07:17      | And it's really useful, especially if, for example, you have put a document through OCR             |
| 07:22      | and you're looking for something in particular and you're not finding it with more complex          |
| 07:26      | regular expressions that we'll get to later in the show, try falling back to the dot because        |
| 07:31      | the wave programs do that optical character recognition may mean that you've actually               |
| 07:36      | got something unexpected in there, which to us as humans, it's very clear, hey, this                |
| 07:40      | is an EM dash, but it turns out it's come out as a hyphen.                                          |
| 07:44      | It's very useful to just be able to go, hey, I'll just put a dot and then I'll get either           |
| 07:47      | of those.                                                                                           |
| 07:49      | And it will also get anything else.                                                                 |
| 07:50      | Yeah.                                                                                               |
| 07:51      | The other one that I always catch that way is the zero and the O. Sometimes OCR will                |
| 07:57      | find you're searching for a digit and it doesn't find it.                                           |
| 08:01      | But then if you search for capital O, it finds it.                                                  |
| 08:04      | Yeah.                                                                                               |
| 08:05      | And that's a neat trick that you'll want to bear in mind, especially if you have a                  |
| 08:10      | bunch of data that you scanned in, maybe you've put it through a scanner with one of those          |
| 08:14      | feeders on top.                                                                                     |
| 08:15      | Those are extremely useful if you're going paperless, but then you have to find the data            |
| 08:20      | afterwards.                                                                                         |
| 08:21      | Yeah.                                                                                               |
| 08:22      | Well, in regular expressions, as Rosa was saying, is in a lot of places, OmniFocus is               |
| 08:28      | the place I use it.                                                                                 |
| 08:29      | I've got a big enough database that regular expressions help me kind of find things if              |
| 08:32      | I lose them, [[Drafts]] is another great one.                                                           |
| 08:36      | Of course, he's going to support regular expressions because that's what Greg does.                 |
| 08:43      | Shortcuts, we're going to talk later in the show about it because the shortcuts, regular            |
| 08:45      | expressions really give shortcuts an extra power boost and I want to talk about that                |
| 08:52      | later because it's kind of complicated.                                                             |
| 08:54      | But the application that I think would be best if you wanted to really kind of give                 |
| 08:58      | this a try for the first time is [[BBEdit]].                                                            |
| 09:01      | There is a brand new version of [[BBEdit]] that just came out as we record the show, version            |
| 09:06      | 13.                                                                                                 |
| 09:08      | They have a free, I believe it's a 30-day trial.                                                    |
| 09:11      | And [[BBEdit]] has always been kind of one of the best places to do regular expressions.                |
| 09:16      | It's actually the software documentation is where I first started learning regular expressions.     |
| 09:22      | It's really well-written.                                                                           |
| 09:23      | Yes, it is.                                                                                         |
| 09:24      | You can find that in the help menu or you can find it on that website, we'll put a link             |
| 09:28      | to it in the show notes because even if you are, for example, an iPad first user and you            |
| 09:32      | don't have a Mac, so you can't install [[BBEdit]], well, you don't have to miss out on their            |
| 09:37      | manual because it's on their website as a PDF and the chapter on regular expressions,               |
| 09:41      | I have to say, is very good reading, which sounds very strange or something that's so               |
| 09:45      | technical, but it's very useful.                                                                    |
| 09:48      | Yeah, and they also, with this newest version, I feel like they've really embraced their            |
| 09:53      | role as the regular expressions machine because they have, they call it a lab where you can         |
| 10:00      | write a regular expression and have text underneath it and it will live search the text while       |
| 10:06      | you are writing the regular expressions so you can see exactly what you're triggering               |
| 10:10      | with your regular expressions.                                                                      |
| 10:11      | So getting back to the thing we had earlier about the zero versus the capital O or the              |
| 10:15      | dash versus the M dash, you can see live on your documents if there's a problem and it's            |
| 10:23      | just really convenient and they even have cheat sheets built into that where you can                |
| 10:29      | get a list of all the regular expression terms and we're going to go over those after the           |
| 10:33      | break, but to have that there as you're writing the expression is really useful.                    |
| 10:38      | Definitely.                                                                                         |
| 10:39      | I highly recommend giving this a play because even if you are going to be mostly using regular      |
| 10:45      | expressions in shortcuts, having a quick reference and an ability to check this is something        |
| 10:52      | that you definitely need.                                                                           |
| 10:53      | And we will talk about some other things later in the show that will help you do this, but          |
| 10:56      | [[BBEdit]] I would say is not the gold standard, maybe the Diamond standard because it's just            |
| 11:01      | been there for so long doing such a great job at this.                                              |
| 11:04      | Yeah, it sounds like it's sponsored by [[BBEdit]] this show, but it's not.                             |
| 11:08      | It's really not.                                                                                    |
| 11:09      | Yeah, but it is really great and like I said, you can get that free trial if you want to            |
| 11:13      | buy it, it's not that expensive, but just for the process of learning regular expressions,          |
| 11:17      | you could do that within the free trial period.                                                     |
| 11:19      | Oh yeah.                                                                                            |
| 11:20      | Speaking of sponsors, we have a sponsor.                                                            |
| 11:25      | This episode of The Automators is brought to you by Zapier.                                         |
| 11:28      | Growing your business is hard, especially when you're spending hours every day moving               |
| 11:32      | data from emails to spreadsheets to whatever else.                                                  |
| 11:36      | Why don't you automate that?                                                                        |
| 11:37      | That's why you're listening to The Automators, right?                                               |
| 11:40      | Wouldn't it be easy if all these things work together without you lifting a finger?                 |
| 11:43      | Zapier is the easiest way to automate your work.                                                    |
| 11:46      | It connects all your business software and handles work for you, so you can focus on                |
| 11:51      | the things that matter most.                                                                        |
| 11:53      | You don't need to waste any more time on tasks that you know you could automate because             |
| 11:58      | that's what Zapier was built to do.                                                                 |
| 12:01      | So if you work in sales, Zapier lets you instantly engage with leads and send them                  |
| 12:05      | to a CRM or a spreadsheet, then it notifies your team so they can act fast on every opportunity.    |
| 12:12      | But whatever your business, you can build exact solutions you need in minutes without               |
| 12:17      | writing code or asking the developer to help.                                                       |
| 12:21      | And with the support of more than 1,500 business applications, it's no wonder that more than        |
| 12:26      | 4.5 million people are saving 40 hours a month using Zapier.                                        |
| 12:31      | I signed up for Zapier because we covered it here on the show.                                      |
| 12:34      | I wanted to test it out, and I have become a pain member because I love the way Zapier              |
| 12:39      | helps with all of my web services.                                                                  |
| 12:42      | For example, with the law practice, when I sign up a new client, I've got things that               |
| 12:46      | need to happen in Basecamp and in the billing program and over in [[Airtable]].                         |
| 12:52      | Well, Zapier connects with all those apps.                                                          |
| 12:54      | So we just put the data in once, and it just shows up everywhere.                                   |
| 12:57      | It saves us a bunch of time, it's more efficient, and it's more accurate.                           |
| 13:01      | And I love it, so I'm a pain member.                                                                |
| 13:05      | So go there now.                                                                                    |
| 13:06      | Check it out.                                                                                       |
| 13:07      | We do so much time at zapier.com/automators.                                                  |
| 13:11      | That's Z-A-P-I-E-R dot com/automators, and you get a 14-day free trial.                       |
| 13:18      | Our thanks to Zapier for the support of automators and all of Relay FM.                             |
| 13:24      | So Rose, let's talk about creating regular expressions.                                             |
| 13:28      | We already covered the wild card, the period, but there's so much more.                             |
| 13:31      | One of them that I think probably we should, we could talk about first is, what if you              |
| 13:36      | want to search for a period, which is also the wild card character?                                 |
| 13:41      | Yeah, and I briefly mentioned this before, which is you need to escape certain things.              |
| 13:48      | And to escape something is basically a programming term for saying, hey, don't treat this the       |
| 13:52      | way that you think you should be treated.                                                           |
| 13:54      | Treat it as exactly what I've written.                                                              |
| 13:57      | And to escape something, you put a backslash before it.                                             |
| 14:01      | So if you want a period or a full stop as I would usually call them, then you do a backslash        |
| 14:06      | followed by a period or a full stop.                                                                |
| 14:08      | They are the same thing.                                                                            |
| 14:09      | I think I'm going to start calling them full stops.                                                 |
| 14:12      | That sounds a way classier.                                                                         |
| 14:13      | Well, that's what I grew up calling them.                                                           |
| 14:15      | So I'm biased thinking it's better.                                                                 |
| 14:17      | Now, is that throughout the UK?                                                                     |
| 14:19      | That's what you call it?                                                                            |
| 14:20      | Yeah, it is.                                                                                        |
| 14:21      | Okay.                                                                                               |
| 14:22      | Because to me, full stop is like, we're heading towards an iceberg and we got to stop this          |
| 14:27      | vessel.                                                                                             |
| 14:28      | You know, the full stop.                                                                            |
| 14:29      | I mean, but...                                                                                      |
| 14:30      | Well, you have to do a full stop at the end of your sentence because otherwise you don't            |
| 14:33      | have the time to pause and breathe and then start your next sentence again.                         |
| 14:37      | All right.                                                                                          |
| 14:38      | Well, a full stop or a period is a wild card, but backslash full stop is just a full stop.          |
| 14:45      | Yes.                                                                                                |
| 14:46      | And you'll want to use this with other certain, so other penetration as well.                       |
| 14:50      | So for example, the hyphen or a dash would also probably need escaping.                             |
| 14:58      | And so do some other things, for example, the star or the plus or the question work.                |
| 15:03      | In general, think about punctuation.                                                                |
| 15:05      | And if your regular expression is not doing what you want, try escaping it.                         |
| 15:09      | Yeah.                                                                                               |
| 15:10      | So let's talk about some of those that you just mentioned, starting with the dash.                  |
| 15:14      | So you can search for literal letters.                                                              |
| 15:16      | Like when we did our cat example earlier, C-A, full stop to search for anything that                |
| 15:23      | starts with the letter C-A.                                                                         |
| 15:24      | But you can also search for ranges of letters or even better numbers.                               |
| 15:29      | So if you had zero hyphen three, it would look for any number between zero and three.               |
| 15:37      | You need to make sure that you put your ranges in square brackets because a square bracket          |
| 15:41      | is what tells regular expression that you want to have some magic happen on this, essentially.      |
| 15:48      | And square brackets have a lot of uses.                                                             |
| 15:50      | But for example, inside your square brackets, you can write zero dash three, which means            |
| 15:55      | it'll match zero, one, two, or three.                                                               |
| 15:59      | It'll grab any one of those, which is really useful because if you do square brackets zero          |
| 16:06      | dash nine, close square bracket, it'll match any number, any single number, just one-digit          |
| 16:13      | numbers, but it'll match any single number for you.                                                 |
| 16:15      | And that's really useful.                                                                           |
| 16:17      | And of course, you can limit this, so you could do four dash nine, so it'll match anything          |
| 16:21      | between four and nine as well.                                                                      |
| 16:23      | Yeah, and so that square bracket, and I should have said that, is it designates one digit.          |
| 16:28      | So that's why you're kind of putting the zero hyphen three inside it.                               |
| 16:32      | But you can also have a search for specific digits or letters as well.                              |
| 16:39      | So like give an example of that, Rose.                                                              |
| 16:41      | Well, for example, with our zero to three, if maybe we just want zero or three, then                |
| 16:46      | you can do open square bracket, zero, three, close square bracket, and it won't match               |
| 16:50      | one or two, it will just match zero and three-fourths.                                              |
| 16:55      | And that's where you get in trouble sometimes, because you may say, you want to search between      |
| 16:59      | the numbers 20 and 22, right?                                                                       |
| 17:02      | Yeah.                                                                                               |
| 17:03      | So if you put 20 hyphen 22, it's going to search for the number two, or the number zero             |
| 17:09      | through two, or the number two.                                                                     |
| 17:12      | So that you suddenly find yourself, these computers are smart, but they're also really              |
| 17:17      | dumb.                                                                                               |
| 17:18      | Yes.                                                                                                |
| 17:19      | And that's where you have to remember, a computer is only as smart as the person telling            |
| 17:23      | it what to do.                                                                                      |
| 17:24      | And we are all very smart, but we're not necessarily very good at telling our computers exactly     |
| 17:28      | what it is that we want them to do.                                                                 |
| 17:30      | And so it's going to do exactly what you tell it, which is why having something like the            |
| 17:35      | pattern playgrounds feature in [[BBEdit]] is really useful, because you can try all of this,           |
| 17:40      | and especially when it gets to using the replace feature, then you can look through and see         |
| 17:44      | what it's actually done with this magic that you've told it to do, and see whether or not           |
| 17:50      | it had the intended side effects, or maybe if it went a little off the rails, which it              |
| 17:54      | will happen when you're learning these regular expressions.                                         |
| 17:57      | But you can also use it to your advantage, like that problem was talking about earlier,             |
| 18:01      | where OCR often confuses zero and capital O. If you put a square bracket with a zero                |
| 18:08      | and a capital O in it, and close bracket, no dash, it's looking for either a zero or                |
| 18:15      | a capital O. So if you're worried your OCR confused the number for the letter, the regular          |
| 18:21      | expressions will find for you, where if you just did a normal search, it would never find           |
| 18:26      | that.                                                                                               |
| 18:27      | Yes.                                                                                                |
| 18:28      | And so then to enhance this, say you wanted to match any digit or a capital O because that          |
| 18:35      | frequently happens with OCR, then you could have your square bracket, have a capital O,             |
| 18:40      | zero dash nine, and close your square bracket, and it's going to match any of those, which          |
| 18:45      | gives you all of the numbers and the possible misunderstood zero.                                   |
| 18:49      | Yeah.                                                                                               |
| 18:50      | And we're trying to take this low.                                                                  |
| 18:51      | It's hard to cover this stuff in audio only.                                                        |
| 18:54      | I know you're driving down a freeway somewhere and listening to this, but if you can picture        |
| 18:59      | in your head, this stuff really is not that difficult once you wrap your head around it.            |
| 19:05      | We talked about ranges, often they're used with numbers.                                            |
| 19:07      | You can also use them with letters.                                                                 |
| 19:09      | Like if you wanted to search for CA, open bracket, A-M, it would find CAN because N follows         |
| 19:22      | between A and M, but it would not find CAT because CAT is outside that range.                       |
| 19:28      | Well, it will find N if your alphabet is a little bit different, comes before N in the              |
| 19:32      | alphabet.                                                                                           |
| 19:35      | This is where you have to be careful, though, because you want to make sure that it's there.        |
| 19:39      | So it will find CAD, but it won't find CAN.                                                         |
| 19:43      | Sometimes podcasting is hard.                                                                       |
| 19:46      | It is.                                                                                              |
| 19:47      | Let's just say that.                                                                                |
| 19:48      | Okay.                                                                                               |
| 19:49      | It's okay.                                                                                          |
| 19:50      | We'll just dig on you in the forums, David.                                                         |
| 19:52      | It's okay.                                                                                          |
| 19:53      | I'm just used to saying the alphabet backwards when I get pulled over.                              |
| 19:56      | Oh, there we go.                                                                                    |
| 19:58      | The secret life of David Sparks.                                                                    |
| 20:00      | Oh, boy.                                                                                            |
| 20:02      | Yeah.                                                                                               |
| 20:03      | So you can limit your alphabet, which is back to our point.                                         |
| 20:07      | So if, for example, you didn't want the letter N, for example, the letter N is definitely           |
| 20:11      | not appearing, then you could fetch A through to M and then O through to Z. And you can             |
| 20:17      | put these all in square brackets.                                                                   |
| 20:19      | So you would open your square bracket, put A-M and then O-Z and close.                              |
| 20:25      | Yeah.                                                                                               |
| 20:26      | And that's it.                                                                                      |
| 20:27      | And make sure that you are using the right kind of brackets.                                        |
| 20:29      | For the ranges, these are square brackets.                                                          |
| 20:33      | Now on my keyboard, I have the American layout and I also have a British layout right next          |
| 20:37      | to it for comparison.                                                                               |
| 20:39      | These are the second row down there next to the P and they don't use modifier keys.                 |
| 20:44      | And you need to make sure that you're using the right kind of brackets.                             |
| 20:48      | And as always, make sure your brackets match because if your brackets don't match, then             |
| 20:52      | your regular expression is probably just going to not work, which is safer than it going            |
| 20:57      | completely off the rails, but double check.                                                         |
| 21:00      | All right.                                                                                          |
| 21:01      | Now I want to go back to the telephone number search because we've learned more and I want          |
| 21:06      | to apply that.                                                                                      |
| 21:07      | So we could have a telephone search and we're going to use the US format where it's three           |
| 21:13      | digits dash three digits dash four digits.                                                          |
| 21:16      | So one way you could do that, and this isn't the end of the road for the telephone search.          |
| 21:21      | We're going to come back to it throughout the show.                                                 |
| 21:23      | But one way you could do that is you could have the square brackets with zero through               |
| 21:27      | nine.                                                                                               |
| 21:28      | So that is representing any digit.                                                                  |
| 21:29      | You could have three of those.                                                                      |
| 21:32      | And then you'd have a dash and then you have three more, then you have a dash, then you             |
| 21:36      | have four more.                                                                                     |
| 21:37      | Now there's one problem though, the dash doesn't mean dash in regular expression.                   |
| 21:42      | So you'd have to escape the dash.                                                                   |
| 21:43      | So to fix that, you'd have to put a backslash before each dash.                                     |
| 21:46      | So then it'd be the zero through nine in square brackets, three times the backslash dash,           |
| 21:53      | then three times backslash dash, then four times backslash dash.                                    |
| 21:57      | And if you ran that regular expression, which hopefully isn't that hard to visualise, it            |
| 22:02      | would look through as much text as you will throw at it and it'll find every phone number           |
| 22:07      | formatted that way.                                                                                 |
| 22:09      | Yes.                                                                                                |
| 22:10      | And this is great, assuming that the phone number is formatted the right way.                       |
| 22:13      | Yeah.                                                                                               |
| 22:14      | But we can get to that.                                                                             |
| 22:15      | Yeah.                                                                                               |
| 22:16      | Well, this is going to get easier as we get through.                                                |
| 22:18      | It is.                                                                                              |
| 22:19      | It's going to get a lot easier.                                                                     |
| 22:20      | Can you explain negative characters to folks, Rose, because that's another big deal with            |
| 22:25      | regular expressions.                                                                                |
| 22:26      | Yeah.                                                                                               |
| 22:27      | So say for example, we already mentioned the letter N. So we wanted to match anything               |
| 22:32      | but the letter N. We had A through to M and O through to Z. And this sounds like a lot              |
| 22:36      | of work.                                                                                            |
| 22:37      | Well, using our ranges again, we can put the carrot or the little hat symbol, as it's               |
| 22:44      | sometimes known, it shifts six on my keyboard.                                                      |
| 22:46      | It's like a little upward pointing arrow.                                                           |
| 22:48      | So you can open your square bracket and put a little carrot in there.                               |
| 22:51      | Not carrot is in carrot weather, but carrot is in C-A-R-E-T. And then you put the thing             |
| 22:57      | that you don't want.                                                                                |
| 22:58      | So for example, the letter N, and then you close your square bracket and then it will               |
| 23:01      | match anything except your letter N, because that's what regular expressions do.                    |
| 23:07      | Now in the UK, is the carrot like got some other name like full stop does for period?               |
| 23:13      | I don't believe so.                                                                                 |
| 23:15      | I think I've actually only used it in French.                                                       |
| 23:18      | So it's a carry.                                                                                    |
| 23:19      | But yes, I'm not sure.                                                                              |
| 23:21      | Maybe it does.                                                                                      |
| 23:22      | You're so fancy Rose.                                                                               |
| 23:23      | I'm sorry.                                                                                          |
| 23:24      | And you know the alphabet.                                                                          |
| 23:26      | Well, there we go.                                                                                  |
| 23:29      | We all have our challenges.                                                                         |
| 23:30      | Yeah.                                                                                               |
| 23:31      | So the carrot is a good way to remove something.                                                    |
| 23:35      | So if going back to the example, like if you put, if you want to, if you want to search             |
| 23:39      | for C-A, but not find cat, you would type C-A, open bracket, carrot, T, close bracket.              |
| 23:47      | And that way it would search for C-A and any letter that is not a T, or actually any digit          |
| 23:52      | that's not a T. So it can be a letter or a number.                                                  |
| 23:56      | And that also comes in handy when you're doing these searches.                                      |
| 24:00      | So there are some words in the English language which don't have thousands.                         |
| 24:04      | And say for example, you had a challenge and you needed to find all of the words that did           |
| 24:08      | not have any, didn't have a vowel in.                                                               |
| 24:11      | And so you just want to match everything that isn't a vowel is your starting point.                 |
| 24:14      | Well, you could do that because you open your square bracket, you put the little carrot,            |
| 24:18      | and then you go A-E-I-O-U and you close it and it will match everything that isn't a                |
| 24:23      | vowel.                                                                                              |
| 24:24      | Now you're going to want to refine this and improve it because it just matching everything          |
| 24:30      | that's not a vowel is not going to find you just the words that have no vowel.                      |
| 24:34      | It's going to find you all of the characters that aren't vowels, so it's also going to              |
| 24:39      | find 0, 3, 9 and everything else.                                                                   |
| 24:40      | But that's a really useful place to start if you for some reason really don't like                  |
| 24:44      | vowels today.                                                                                       |
| 24:45      | Yeah.                                                                                               |
| 24:46      | Yeah.                                                                                               |
| 24:47      | Now, it gets easier though because in addition to searching inside these brackets, regular          |
| 24:54      | expressions has kind of made a shorthand for you.                                                   |
| 24:57      | Oh yeah.                                                                                            |
| 24:58      | So the digits we were talking about, the concept of open bracket, 0-9, close bracket, so it's       |
| 25:05      | looking for any digit.                                                                              |
| 25:07      | Well, there is a shortcut character for that and that is just backslash lowercase d.                |
| 25:15      | Yeah.                                                                                               |
| 25:16      | So.                                                                                                 |
| 25:17      | And this is so useful because now instead of typing five characters to match any digit,             |
| 25:22      | well you can type two backslash to the lowercase d.                                                 |
| 25:25      | Now the case is important here because you could also flip this.                                    |
| 25:29      | You can say, hey, I don't want any digits, which with our ranges would be open bracket              |
| 25:36      | carat 0 through 9 with through being the dash and close square bracket.                             |
| 25:42      | Well if you capitalise the d, then you are going to exclude that.                                   |
| 25:48      | And if you just think of d for digit as in digits being numbers, then hopefully you can             |
| 25:53      | remember this because lowercase matches a digit whereas uppercase doesn't match a digit.            |
| 26:00      | Yeah, so backslash d give me all the digits, lowercase that is backslash uppercase d give           |
| 26:05      | me none of the digits.                                                                              |
| 26:07      | And let's go back to the telephone number again.                                                    |
| 26:09      | Now it's easier.                                                                                    |
| 26:10      | It's backslash d three times than an escape dash than another three digits than an escape           |
| 26:17      | dash than four digits.                                                                              |
| 26:19      | So our regular expression is getting tighter as we work our way through the show.                   |
| 26:26      | And that is a very easy way to do it.                                                               |
| 26:27      | If you had a phone number where you knew partially what it was and you wanted to search it, you     |
| 26:33      | would just replace the backslash d with the partial numbers you have where they fit in              |
| 26:39      | the phone number.                                                                                   |
| 26:40      | Yeah, so say for example you know that the last four digits, they start with a nine and             |
| 26:44      | they end with a four.                                                                               |
| 26:46      | Well, you can do nine backslash d backslash d four and then it's going to find any digit            |
| 26:51      | that goes between those two and you're good.                                                        |
| 26:55      | There's also a shorthand for words and I'll give you one guess what the shortcut is for             |
| 27:03      | a word.                                                                                             |
| 27:04      | Can I, can I take this one?                                                                         |
| 27:06      | Can I get the point?                                                                                |
| 27:07      | Am I allowed to do that?                                                                            |
| 27:08      | Yeah, yes you do.                                                                                   |
| 27:09      | Okay.                                                                                               |
| 27:10      | Always Rose, you get all the points.                                                                |
| 27:11      | Oh, thank you.                                                                                      |
| 27:12      | Well, if you hadn't guessed it, it is indeed backslash w lowercase matches any word character.      |
| 27:18      | So that's a through to z.                                                                           |
| 27:20      | And backslash rp case w, guess for it, guess it, go on.                                             |
| 27:25      | I can hear people's brains going, it's not a word, not a word character.                            |
| 27:29      | Well done.                                                                                          |
| 27:30      | Full points to you.                                                                                 |
| 27:31      | If you are busy driving and you missed it, don't worry, come back, listen later and we              |
| 27:34      | have plenty of resources in the show notes for you.                                                 |
| 27:37      | Yeah, yeah.                                                                                         |
| 27:38      | But this stuff just simplifies the regular expressions and suddenly, because if you don't           |
| 27:44      | know anything about regular expressions and you look at one, it looks literally like a              |
| 27:47      | spider did crawl across your keyboard.                                                              |
| 27:49      | But the logic of it comes together pretty quickly if you just spent some time learning              |
| 27:53      | it.                                                                                                 |
| 27:54      | Definitely.                                                                                         |
| 27:55      | And this also extends.                                                                              |
| 27:57      | So we have digits and we have words, but we have spaces.                                            |
| 28:00      | Do you want to guess the space is one, David?                                                       |
| 28:03      | Would that be s?                                                                                    |
| 28:05      | Well done.                                                                                          |
| 28:06      | Full points to David.                                                                               |
| 28:07      | Yeah, lowercase s gives you white space.                                                            |
| 28:10      | Yes, and uppercase s gives you something that's not white space.                                    |
| 28:15      | So we've talked through it.                                                                         |
| 28:18      | You've got these different ways to designate characters and then you assemble these into            |
| 28:23      | the format of the word you're looking for.                                                          |
| 28:26      | It's just so much more powerful than general search.                                                |
| 28:29      | Yes.                                                                                                |
| 28:30      | There's more to this, however.                                                                      |
| 28:32      | I want to talk about that, but before we do that, let's hear from our next sponsor.                 |
| 28:37      | This episode of Automated is brought to you by PDFpen from our friends at Smile.                    |
| 28:42      | PDFpen 11 is the ultimate tool for editing PDFs.                                                    |
| 28:46      | You can view and edit documents on your Mac, iPad or iPhone because PDFpen supports file            |
| 28:51      | syncing on a bunch of cloud services.                                                               |
| 28:54      | PDFpen for iPad and iPhone 5 supports iOS 13 and you can even use your iPad or your iPhone          |
| 29:03      | to scan documents directly into PDFpen on your Mac.                                                 |
| 29:06      | It is super slick.                                                                                  |
| 29:08      | PDFpen Pro 11 can automatically turn your documents into fillable forms, plus it can                |
| 29:14      | export to Excel, PowerPoint and more.                                                               |
| 29:18      | Learn more about PDFpen and PDFpen Pro at smilesoftware.com/podcast.                          |
| 29:23      | If you do any work with PDFs, you need PDFpen.                                                      |
| 29:26      | Go to smilesoftware.com/podcast.                                                              |
| 29:29      | Go check it out.                                                                                    |
| 29:30      | Our thanks to PDFpen for their support of the show and all of Relay FM.                             |
| 29:34      | All right, Rose, so so far we've been focusing on regular expressions to designate a single         |
| 29:40      | character, you know, the idea of like, like getting back to the full stop or the period.            |
| 29:46      | It could be any character or we use those brackets to to narrow that list of what it                |
| 29:52      | can be for that specific character.                                                                 |
| 29:55      | But you also need to deal with things where you don't know the exact position of characters         |
| 30:00      | or the exact length of words.                                                                       |
| 30:02      | How does regular expressions deal with that?                                                        |
| 30:04      | Well, it has three ways of dealing with this.                                                       |
| 30:07      | And you might go three ways, oh my gosh, kill me now.                                               |
| 30:09      | Trust me, it's not it's not crazy.                                                                  |
| 30:11      | It's really, really useful.                                                                         |
| 30:14      | Let's start with you need zero or one of something.                                                 |
| 30:19      | So for example, it may be actually there is a space in the phone number after around the            |
| 30:25      | dashes.                                                                                             |
| 30:26      | Okay, so you have your three dashes, three letters, and then instead of it just being               |
| 30:31      | a dash.                                                                                             |
| 30:32      | For example, maybe they were here on autopilot, who knows, they wrote space dash space, hmm.        |
| 30:38      | But you don't want to have to write lots of regular expressions and run this multiple               |
| 30:42      | times to find it.                                                                                   |
| 30:43      | You want to make that optional.                                                                     |
| 30:46      | And you can do that very simply by putting a question mark.                                         |
| 30:49      | So if your space is optional, then you can do a backslash lowercase s for space, and                |
| 30:55      | then a question mark, which means match zero or one of these spaces.                                |
| 31:00      | And that's so useful.                                                                               |
| 31:02      | So if there's no space at all, like if they compress the number together, then it's still           |
| 31:07      | going to find it.                                                                                   |
| 31:08      | Exactly.                                                                                            |
| 31:09      | And that's exactly what you need in that case like that.                                            |
| 31:11      | And this continues and you can use this question mark on anything in a regular expression.          |
| 31:17      | And you can use that also within brackets.                                                          |
| 31:20      | Yes.                                                                                                |
| 31:21      | And so the next one is what if you want, if something is optional, but maybe there's more           |
| 31:28      | than one of something.                                                                              |
| 31:29      | So they'll let the space key run away from them.                                                    |
| 31:32      | Maybe they spill apple juice on their keyboard and their space key got stuck.                       |
| 31:35      | I am not speaking from personal experience here at all.                                             |
| 31:39      | Well, then you might need star because the star lets you match zero to an infinite number           |
| 31:46      | of something.                                                                                       |
| 31:47      | Now, you do need to be a little careful with this and the next one because it will keep             |
| 31:52      | going until it finds the very last instance of whatever you're looking for.                         |
| 31:57      | And so you can use a star.                                                                          |
| 32:00      | So if, for example, there may be a space at the end of the phone number or there could              |
| 32:03      | be 50 spaces, but we don't know, well, you can put a backslash lowercase s and then put             |
| 32:08      | a star.                                                                                             |
| 32:09      | And then it'll find it'll find anything with one or more spaces at the end or more spaces           |
| 32:16      | for the star.                                                                                       |
| 32:17      | Yeah.                                                                                               |
| 32:18      | Exactly.                                                                                            |
| 32:19      | So and can you give an example of where you use that practically?                                   |
| 32:23      | Yeah.                                                                                               |
| 32:24      | Well, for example, I often end up with code and sometimes I can't put it into my ID, not            |
| 32:33      | intelligent development environment, sorry, having more of those days.                              |
| 32:37      | And I need to put it somewhere else and I just need to strip out a stupid amount of padding         |
| 32:44      | at the start of a line.                                                                             |
| 32:46      | But some lines don't have padding and I just need to flatten it all because it's all a              |
| 32:50      | little bit over the place.                                                                          |
| 32:51      | And then I can just match, so any white space character, so backslash s followed by a star          |
| 32:59      | and I just replace it with nothing.                                                                 |
| 33:01      | And that gets rid of all the spaces.                                                                |
| 33:04      | Now I do need to be careful to make sure that I put this specifically at the start of the           |
| 33:07      | line, but we'll get to that later in the show.                                                      |
| 33:09      | Yeah.                                                                                               |
| 33:10      | And I feel like this one is particularly dangerous when you're working with words.                  |
| 33:13      | Yes.                                                                                                |
| 33:14      | It can.                                                                                             |
| 33:15      | It's easy to get yourself into trouble with that one.                                               |
| 33:16      | And also the plus is a little dangerous to explain what the plus does.                              |
| 33:20      | Well, the plus works the same way as the star does, but it says one or more.                        |
| 33:24      | So star is zero or more and plus is one or more.                                                    |
| 33:28      | So it's this plus anything else that you happen to find, which also matches the pattern that        |
| 33:33      | was just before the plus, please.                                                                   |
| 33:34      | Now, I don't use the plus or the start too often.                                                   |
| 33:37      | I do use the question mark because that comes in handy like inside the bracket, you know,           |
| 33:41      | getting back to the, getting back to the telephone number, you can solve the problem of saying,     |
| 33:49      | is it a dash or is it a space or is it a no space?                                                  |
| 33:52      | You can do that inside a bracket with the question mark.                                            |
| 33:54      | Yeah.                                                                                               |
| 33:55      | You put the question mark just after the bracket, but yes, you can put that there.                  |
| 34:00      | And that's really useful.                                                                           |
| 34:01      | And I would caution you if you're seeing problems with your regular expression, have a look         |
| 34:05      | at where you're using stars and pluses because that's often where you will go wrong because         |
| 34:10      | they are very greedy and they keep going until they find the very last instance of whatever         |
| 34:14      | it is that you're looking for.                                                                      |
| 34:16      | Yeah.                                                                                               |
| 34:17      | All right.                                                                                          |
| 34:18      | So, that's kind of the basics.                                                                      |
| 34:20      | We're not really going to teach you regular expressions that we want you to understand              |
| 34:23      | the basics of how they work.                                                                        |
| 34:25      | And we've been talking a lot today about how regular expressions are useful for search              |
| 34:31      | and we're finding things and then you can act on them once you do.                                  |
| 34:35      | This is where the Automator part kicks in, but a lot of times people also use regular               |
| 34:39      | expressions for search and replace.                                                                 |
| 34:42      | And that's where I think you have to be really careful.                                             |
| 34:45      | Well, it doesn't mean that you need to be careful, but at the same time, it also means              |
| 34:49      | that you can take, for example, that phone number and it doesn't matter if maybe they               |
| 34:55      | use spaces instead of dashes or they use space-space to format the phone number.                    |
| 35:00      | You can actually take that and have them all reformatted to whatever your preferred option          |
| 35:06      | is.                                                                                                 |
| 35:07      | So, I have seen some US phone numbers with the first three digits in brackets followed              |
| 35:11      | by three digits and then a dash and then four digits.                                               |
| 35:14      | And so, you can easily do that with the search and replace if you use groups, which are probably    |
| 35:21      | the next thing that we should talk about.                                                           |
| 35:23      | All right, let's talk about groups then.                                                            |
| 35:25      | Okay, well, we already had square brackets.                                                         |
| 35:27      | Let's go for round brackets this time and that is what groups use.                                  |
| 35:31      | And so, if you put a chunk of your regular expression inside round brackets, that becomes           |
| 35:36      | a group and then you can reference that later because what that does is that says to your           |
| 35:42      | regular expression, hey, you're looking for all of this, but this particular part is something      |
| 35:46      | that I want to call out.                                                                            |
| 35:47      | All right, and give us an example of where you'd use that.                                          |
| 35:50      | Well, for example, I do some video production for Screencasts Online, which I'm really enjoying,    |
| 35:56      | but the project management system that we use, it gives me an awful lot of data when                |
| 36:00      | it triggers my Zapier's app.                                                                         |
| 36:03      | Full disclosure, Zapier is a sponsor of this episode, but I use Zapier personally as well,          |
| 36:09      | but when it triggers my Zapier's app, the project management tool, it's giving me loads             |
| 36:13      | of information and I don't want all of this information.                                            |
| 36:16      | And so, what I do is I use regular expressions to match the chunks of data, so for example,         |
| 36:21      | the show number and the show title are the information I need, but if it's got my name              |
| 36:25      | in it, well, most days I do know what my own name is, at least I hope I do.                         |
| 36:30      | I'm David Sparks, right?                                                                            |
| 36:32      | Yeah, that's me.                                                                                    |
| 36:34      | At least you know the alphabet.                                                                     |
| 36:36      | Well, there we go.                                                                                  |
| 36:38      | So I can just get rid of that, so I don't need that, but I do need to get this information          |
| 36:42      | out of here.                                                                                        |
| 36:43      | And so, I use groups, and I use the group to match the number, and I use a group to                 |
| 36:45      | match the title, and then I can take these and use them later in different parts of                 |
| 36:50      | my Zap.                                                                                             |
| 36:51      | Yeah, that's really powerful, and that's the thing about this regular expression stuff.             |
| 36:56      | Once you start understanding it, if you can appreciate how it works, you don't even have            |
| 37:00      | to be an expert at it, you can always go back and relearn it.                                       |
| 37:03      | I don't do it as often as Rose does, I feel like you're more fluent in it than I am.                |
| 37:07      | Well, I am a programmer, so it comes with the territory.                                            |
| 37:11      | So I have like a cheat sheet in my Apple Notes that I just keep dropping regular expressions        |
| 37:15      | as I use them and kind of perfect them.                                                             |
| 37:18      | But there is a good use for them, and a problem I had, I was working on a big, a client was         |
| 37:23      | in the middle of an acquisition, and so we were doing all these meetings, and everybody             |
| 37:28      | wanted the minutes following the meetings, and it was always just a pain in the neck                |
| 37:32      | for me to find, you know, to get the meeting minutes and then to email them out to everybody        |
| 37:39      | after the meeting, and I would forget about it, and then everybody would be mad at me.              |
| 37:42      | So I used a regular expression to solve that problem with Siri Shortcuts, and I used a              |
| 37:48      | sanitised version of this in the Shortcuts field guide, you can watch it and download               |
| 37:52      | if you're subscribed to that.                                                                       |
| 37:55      | But basically what it does is it's a regular expression that looks for the word distribution        |
| 38:00      | with a colon after it, and then it looks for word patterns after that, and in the case              |
| 38:07      | of the client thing I was doing, I was looking for the names of the specific individuals            |
| 38:11      | that were involved in the transaction, for the sample one, it's Rose, Mike, and Stephen,            |
| 38:16      | you know, my podcast buddies, and what it does is it says, if you see the word distribution         |
| 38:22      | colon and it has the word Rose after that, then I want you to take, that's the regular              |
| 38:28      | expression, and then with Shortcuts, you can say that essentially creates an if statement,          |
| 38:34      | you know, you say, use regular expressions, look for word distribution followed by Rose.            |
| 38:40      | If you see that, then do the following, and then it's just mechanics in Shortcuts, but              |
| 38:44      | what the mechanic is is it grabs the minutes and it adds them to an email, it prepares              |
| 38:49      | an email to Rose with a subject line that says, here are the minutes, you know, and                 |
| 38:53      | then it sends the email off.                                                                        |
| 38:55      | So all I have to do in order to make sure that the minutes get out is write the word                |
| 39:00      | distribution colon at the bottom, and put the names of the people that I want them to               |
| 39:04      | go to.                                                                                              |
| 39:05      | And it's a regular expression driving the shortcut that goes through and does that.                 |
| 39:09      | And so if it sees Rose and it sees Mike, then it's going to send one to Rose and Mike.              |
| 39:14      | If it sees Mike and Stephen, but not Rose, it will send it to Mike and Stephen, but not             |
| 39:19      | Rose.                                                                                               |
| 39:20      | And it's all just basic regular expressions.                                                        |
| 39:23      | It's a one-line regular expression, but the stuff is not that difficult if you've never             |
| 39:31      | done it before.                                                                                     |
| 39:32      | I really want you to try if you're listening to this and you haven't gone down this road            |
| 39:35      | before.                                                                                             |
| 39:36      | Yes.                                                                                                |
| 39:37      | And I would highly recommend that you do that, because going back to our groups option, well,       |
| 39:42      | what happens if one day instead of writing Rose, you write Rosemary?                                |
| 39:45      | Because some people do call me that, and that's okay.                                               |
| 39:49      | And with the groups, you can do this.                                                               |
| 39:50      | So you can open your RAM bracket and you can type Rose, and then you can put a pipe and             |
| 39:54      | put Rosemary.                                                                                       |
| 39:55      | And you can say, hey, if it has Rose or Rosemary, that's the same person, send them in, it's        |
| 40:00      | over here.                                                                                          |
| 40:01      | But if you call it Rosie, it won't match.                                                           |
| 40:04      | I could never call you Rosie.                                                                       |
| 40:05      | Oh, nobody calls me Rosie.                                                                          |
| 40:07      | It's very strange.                                                                                  |
| 40:08      | I've never been used to it.                                                                         |
| 40:10      | There was actually a girl in my primary school class called Rosie, and she was lovely, but          |
| 40:15      | it was very clear.                                                                                  |
| 40:16      | She was Rosie and I was Rose.                                                                       |
| 40:18      | And that was an easy way to tell us apart, name-wise.                                               |
| 40:20      | I believe even when you were in primary school, you were all business.                              |
| 40:25      | I confess, I did my maths exercise books during playtime because that's what I did at home,         |
| 40:31      | because my dad was trying to make sure that I'd be good at maths.                                   |
| 40:34      | By the way, it totally worked, and I'm very grateful to my dad for giving me all those              |
| 40:37      | exercises.                                                                                          |
| 40:38      | It was, you know, I got plenty of playtime too, but I was decent at maths, so I never               |
| 40:43      | had a problem with that.                                                                            |
| 40:44      | Yeah, but using groups, I could have done it either one.                                            |
| 40:47      | Up in my head, do you prefer Rose or Rosemary?                                                      |
| 40:50      | I don't mind.                                                                                       |
| 40:51      | I'm one of those people who's quite ambivalent about it.                                            |
| 40:54      | Just not Rosie.                                                                                     |
| 40:55      | I want to make sure.                                                                                |
| 40:57      | I'd hate to find out that you were cringing every time I called you Rose for the last               |
| 41:01      | three years.                                                                                        |
| 41:02      | Yes, I've secretly been super angry at David Sparks for three years.                                |
| 41:05      | No.                                                                                                 |
| 41:06      | That's how you broke your ankle.                                                                    |
| 41:08      | You were like, I said Rose, and you were like stomping your foot so hard.                           |
| 41:12      | No, I'm still blaming that leaf for that.                                                           |
| 41:15      | So yeah.                                                                                            |
| 41:16      | I have a scooter now, and I take it all the time, and I think about you every time I get            |
| 41:21      | on it.                                                                                              |
| 41:22      | Well, there we go.                                                                                  |
| 41:24      | I will go down in history because of podcasting for something.                                      |
| 41:27      | All right.                                                                                          |
| 41:30      | So that's an example of a regular expression with shortcuts.                                        |
| 41:33      | So with shortcuts, there's just a couple of commands you use, but you need to learn                 |
| 41:37      | how to use the regular expressions.                                                                 |
| 41:38      | But you think about that.                                                                           |
| 41:40      | The reason I love that regex so much is because it solved a problem that shortcuts really           |
| 41:45      | didn't have a tool for.                                                                             |
| 41:47      | There isn't a tool in shortcuts saying, look for the name Rose in this document and then            |
| 41:54      | do something.                                                                                       |
| 41:55      | It just doesn't have that ability.                                                                  |
| 41:58      | And more importantly, it would have to look for the name Rose only after the word distribution      |
| 42:02      | colon because what if the word Rose or the letters R-O-S-E were part of some other word             |
| 42:10      | in the document?                                                                                    |
| 42:11      | I mean, I don't want it sending an email to Rose just because that happens.                         |
| 42:14      | It has to be distribution colon Rose and I just don't think there's any other way to                |
| 42:20      | do it.                                                                                              |
| 42:21      | I mean, you could theoretically go through and have it split and look at certain lines              |
| 42:25      | or something, but then you're doing something very hacky and you're doing an awful lot of           |
| 42:28      | work to solve something that you can solve with a regular expression.                               |
| 42:32      | Now there is, of course, the joke of if you have a problem and you solve it with a regular          |
| 42:37      | expression, now you have two problems.                                                              |
| 42:39      | And if you don't test your regular expression, that is absolutely the case.                         |
| 42:44      | Always test because with everything else that we automate, it could have unintended side            |
| 42:49      | effects.                                                                                            |
| 42:50      | And I think that's saying is appropriate for complex regular expressions, but I would               |
| 42:56      | guess a lot of people who's in the show are just looking for a phone number or looking              |
| 43:00      | for something I explained, like a specific word followed by a variety of other words.               |
| 43:06      | It's not that bad if you're doing the simple stuff.                                                 |
| 43:09      | Exactly.                                                                                            |
| 43:10      | And yeah, that's what you need to start with.                                                       |
| 43:12      | Always start with something simple that they can solve.                                             |
| 43:14      | So say, for example, you regularly get appointments in a calendar that you're subscribed to, but    |
| 43:20      | only some of these are relevant.                                                                    |
| 43:22      | So once a week you run a shortcut and you pick out the events manually that are relevant            |
| 43:26      | to you with a choose from list.                                                                     |
| 43:28      | Well, you could automate that if they all contain something that's relevant, that's similar         |
| 43:35      | every week, doesn't have to be the same because you can use a regular expression and you can        |
| 43:39      | just have it filter for those and grab them and put them on the real calendar for you.              |
| 43:44      | And that's something that you can do with regular expressions very easily.                          |
| 43:49      | Yeah.                                                                                               |
| 43:50      | Let's talk a little bit about dates and regular expressions formatting them.                        |
| 43:56      | If you're looking for dates in a big pile of text, I guess let's start with the best                |
| 44:04      | way to write a date, in my opinion, four-digit year dash, two-digit month dash, two-digit           |
| 44:09      | day.                                                                                                |
| 44:10      | How would you do that?                                                                              |
| 44:11      | Yeah.                                                                                               |
| 44:12      | Well, assuming that we're using that particular format, well, you could start with our backslash    |
| 44:17      | lowercase d and do four of those and then escape your dash.                                         |
| 44:24      | And then do two more backslash ds in the dash and then two more backslash ds, but you could         |
| 44:31      | also improve on this because instead of saying, hey, I'm going to type this out four times          |
| 44:38      | to match four digits, well, we can actually use a regular expression to say, hey, I want            |
| 44:44      | exactly four of these, please.                                                                      |
| 44:47      | Yeah.                                                                                               |
| 44:48      | And that one is actually pretty simple.                                                             |
| 44:51      | I think a more difficult one is the US way.                                                         |
| 44:54      | I don't like the way we write dates here.                                                           |
| 44:57      | I think the European method is better where it's day, space, month, spelled out, space,             |
| 45:03      | year, like on a letter.                                                                             |
| 45:06      | But instead we do it here, month, space, day, comma, space, year.                                   |
| 45:13      | And that is a little more difficult because you've got different combinations of words.             |
| 45:19      | There isn't like a grouping where you can say January, hyphen, December, it's going                 |
| 45:25      | to find all the months.                                                                             |
| 45:26      | You've got to actually list the various months.                                                     |
| 45:30      | And if you're looking for any month, then that becomes kind of a complicated expression.            |
| 45:34      | Yes, it can do, which is why you would then probably end up trying to match any word that           |
| 45:41      | comes between one or two digits days followed by, and then it would have to have a comma            |
| 45:48      | and that would be followed by four digits.                                                          |
| 45:50      | And that may capture some other stuff that you weren't intending it to do, but then you             |
| 45:54      | would have to go through and filter that out.                                                       |
| 45:56      | It is entirely possible to build a regular expression for something like that, but that's           |
| 46:00      | where you start getting complex and that's where your regular expression could be creating          |
| 46:05      | more problems than it solves.                                                                       |
| 46:07      | Yeah, but it will if you use word instead of spelling out the months, you're going to               |
| 46:11      | get everybody misspelled February, so it's good.                                                    |
| 46:15      | One of the problems with that regular expression is the day digit.                                  |
| 46:21      | You might think, well, that would just be backslash d, backslash d, but that's not going to work    |
| 46:26      | followed by a comma.                                                                                |
| 46:27      | That's not going to work because what if it's February 7th?                                         |
| 46:31      | There's only one digit.                                                                             |
| 46:32      | So how do you solve that problem with a regular expression looking for one or two digits?           |
| 46:37      | Well, what you could do, you could go back to our question mark for earlier and put backslash       |
| 46:41      | d, backslash d, question mark, because then your second digit is optional, or you could             |
| 46:46      | put the question mark on the first digit.                                                           |
| 46:48      | However, we can use another element of regular expressions to solve this, which is the count.       |
| 46:55      | And this is where we get to our third set of brackets for today.                                    |
| 46:59      | This is the final set of brackets, I promise.                                                       |
| 47:01      | And these are the curly brackets, and these are usually found on the same keys as the               |
| 47:05      | square brackets, though I can't promise outside of English-speaking keyboards that it will          |
| 47:08      | always be there.                                                                                    |
| 47:11      | And so what you could do, if you want one or two, then you can open your curly bracket              |
| 47:16      | with, right, one comma two, and close your curly bracket, and that means one or two of              |
| 47:21      | these please.                                                                                       |
| 47:22      | Yeah.                                                                                               |
| 47:23      | I solve it with the question mark.                                                                  |
| 47:25      | That's how I figured that one out, but you're better at this than I am.                             |
| 47:30      | I will be the first to admit it.                                                                    |
| 47:32      | Well, I wouldn't say I'm better because the question mark is something that you're already          |
| 47:36      | familiar with is probably the better way to solve it.                                               |
| 47:39      | But the curly bracket option has a few other tricks up its sleeve.                                  |
| 47:43      | More power.                                                                                         |
| 47:44      | Yeah.                                                                                               |
| 47:45      | So, for example, that you only want two instances of digit.                                         |
| 47:49      | Well, in this case, you're not going to save yourself any typing, but you can do backslash          |
| 47:53      | D, open curly bracket, to close curly bracket.                                                      |
| 47:57      | And this is going to give you exactly two of the digits.                                            |
| 48:02      | Yeah.                                                                                               |
| 48:03      | I hope you're not banging your head against your steering wheel right now.                          |
| 48:06      | No, please be looking at the road if you're driving.                                                |
| 48:09      | This is definitely one of the more complex topics we've covered on the show, but it's               |
| 48:13      | just if you can get some appreciation for the way you can combine this stuff with things            |
| 48:17      | like shortcuts or just use it with BB it on your Mac, it really is powerful.                        |
| 48:22      | Yes, it definitely is.                                                                              |
| 48:25      | And then you can take your curly brackets up an extra step if you like.                             |
| 48:29      | So say, for example, that you want two or more digits.                                              |
| 48:34      | So what you could do, open your curly brackets, put two comma, and then close your curly brackets.  |
| 48:40      | And then it will do two to infinity.                                                                |
| 48:43      | And that can be useful for other things.                                                            |
| 48:45      | I would not use that for dates because you're going to get some very unexpected things.             |
| 48:51      | Somebody's written that some things could cost you $1 billion and they've got all of                |
| 48:54      | those zeros in the document.                                                                        |
| 48:55      | That's going to end up in there.                                                                    |
| 48:57      | And unfortunately, billion is not valid as a date format, at least not yet.                         |
| 49:01      | Might need a couple more million years to get to that point.                                        |
| 49:04      | All right.                                                                                          |
| 49:05      | Well, we've got a couple more examples and we have some additional resources.                       |
| 49:08      | If we've piqued your interests, we're going to give you some ideas of places to go.                 |
| 49:12      | But before we do that, I want to talk about our last sponsor.                                       |
| 49:14      | That's our friends over at FreshBooks.                                                              |
| 49:17      | You want to save 192 hours, you freelancers.                                                        |
| 49:20      | FreshBooks can help you out with that.                                                              |
| 49:23      | Just go to freshbooks.com/automators and let them know you heard about it here                |
| 49:30      | to get your free unrestricted 30-day free trial.                                                    |
| 49:34      | So what does FreshBooks do?                                                                         |
| 49:35      | It allows you to get paid easier.                                                                   |
| 49:38      | Isn't that a great idea?                                                                            |
| 49:40      | They have a cloud accounting software system that just works.                                       |
| 49:44      | By simplifying tasks like invoicing, tracking expenses, and getting paid online, FreshBooks         |
| 49:49      | has drastically reduced the time it takes for over 10 million people to deal with their             |
| 49:54      | paperwork.                                                                                          |
| 49:55      | And I'm one of those 10 million.                                                                    |
| 49:56      | I was realising I was doing my invoicing for MacSparky through pages documents and                 |
| 50:02      | the numbers spreadsheet that I tracked it on.                                                       |
| 50:04      | And I was forgetting to follow up with customers and at some point when an invoice gets so          |
| 50:10      | old, you just can't collect on it anymore because it's almost on you at that point.                 |
| 50:16      | So I decided that's crazy.                                                                          |
| 50:17      | I signed up for a FreshBooks account a few years ago and now all my invoicing problems              |
| 50:21      | are solved.                                                                                         |
| 50:22      | It remembers my vendors, it remembers the transactions.                                             |
| 50:26      | When I put it in, it sends them a nice email.                                                       |
| 50:28      | It gives them a way to pay with their credit card right from the email.                             |
| 50:33      | When I get paid faster and everything is just taken care of now with FreshBooks.                    |
| 50:38      | They continue to make FreshBooks better with the service.                                           |
| 50:41      | When you email a client and invoice, FreshBooks can show you whether they've seen it, which         |
| 50:45      | puts an end to that guessing game, you know, did they see it or not.                                |
| 50:49      | Also with a new projects feature, you can share files and messages with your clients                |
| 50:54      | and contractors employees to see how quickly things happen and keep all your conversations          |
| 51:00      | in one place.                                                                                       |
| 51:01      | Now, if you're listening to this and not using FreshBooks, it's time to try it.                     |
| 51:05      | FreshBooks is offering an unrestricted 30-day free trial for listeners of this show.                |
| 51:10      | There's no credit card required.                                                                    |
| 51:11      | All you have to do is go to freshbooks.com/automators and enter automators in                 |
| 51:17      | the how did you hear about a section to get that free trial.                                        |
| 51:20      | We thank FreshBooks for the support of this show and all of RelayFM.                                |
| 51:25      | So we've bored you to tears or hopefully piqued your interest and given you lots of                 |
| 51:31      | regular expressions.                                                                                |
| 51:32      | Let's talk about a few more ways that we actually use these, shall we?                              |
| 51:36      | Yeah.                                                                                               |
| 51:37      | You do some cool stuff in [[Drafts]] with regular expressions, right?                                   |
| 51:39      | I do.                                                                                               |
| 51:40      | And this is where I'm going to tell you a little secret.                                            |
| 51:44      | I cheat.                                                                                            |
| 51:45      | So there are things called functions that you can use that will do regular expressions              |
| 51:51      | for you.                                                                                            |
| 51:52      | So for example, begins with and ends with and contains.                                             |
| 51:56      | And if these sound familiar, that's because they're not just in JavaScript as a function.           |
| 52:01      | They're also in shortcuts and in many other applications.                                           |
| 52:05      | And that is one of the big secrets to regular expressions.                                          |
| 52:09      | You don't necessarily have to write everything yourself.                                            |
| 52:12      | As long as you know what it is that you're looking for and how to specify this, you can             |
| 52:18      | cheat a lot of the time and use something that somebody else has written to make it                 |
| 52:22      | work for you.                                                                                       |
| 52:24      | And so I do use standard regular expressions if you want to call them that in [[Drafts]].               |
| 52:29      | So for example, finding any item which is marked as a task, which in [[Drafts]], the way                |
| 52:36      | that you start a task is you do dash space square bracket.                                          |
| 52:40      | And then it could be an X in the box if it's completed or space and then close square bracket       |
| 52:47      | followed by something else.                                                                         |
| 52:48      | Well, if I need to match the space or the square, the space or the X, then well, I use              |
| 52:54      | a regular expression for that.                                                                      |
| 52:56      | And I do cheat.                                                                                     |
| 52:57      | I just use the period as you call it or the full stop and put that in there.                        |
| 53:03      | But I also use begins with and ends with to help me find what it is that I'm looking                |
| 53:08      | for.                                                                                                |
| 53:09      | Like I'm just thinking about that shortcut that I wrote the regular expression for where            |
| 53:14      | it starts with distribution contains rows.                                                          |
| 53:17      | I think I could probably pull it off with a begins with distribution, you break it by               |
| 53:21      | line and you look for a line that starts with distribution and contains rows.                       |
| 53:26      | I think that would probably work the same.                                                          |
| 53:28      | I'd have to go through and test it, but I think that would that would work fine.                    |
| 53:31      | It would probably use more steps in your shortcut than you're currently using.                      |
| 53:35      | But it's a 100% valid way of doing that.                                                            |
| 53:39      | And it will solve your problem in the way that you're expecting, which is great.                    |
| 53:44      | And that should give everybody who's there going, I'm not sure I'm going to remember                |
| 53:47      | all of these hierarchal effects.                                                                    |
| 53:49      | Well, they're not hierarchal effects, they're punctuation, but you can cheat and use functions.     |
| 53:53      | And that's totally okay.                                                                            |
| 53:56      | And I love doing that in [[Drafts]] because it's really useful.                                         |
| 53:59      | But also it's handy when I'm just searching for something, I'm there going, wait, did               |
| 54:03      | I spell customised with NS or Z?                                                                    |
| 54:06      | Because am I writing in British English or American English?                                        |
| 54:09      | Well, I can find either of those.                                                                   |
| 54:10      | Yeah, it's just really powerful.                                                                    |
| 54:14      | This stuff doesn't take that long to learn.                                                         |
| 54:16      | If you've been listening to the show, you already understand most of it, honestly.                  |
| 54:21      | But you need to get your hands on it.                                                               |
| 54:22      | So download, be be edit or one of these resources and spend some time doing it.                     |
| 54:28      | If you're only going to use it occasionally, I would recommend building your own library            |
| 54:33      | of regular expressions of things that you use frequently so you can always resource it.             |
| 54:38      | But once you know that this tool exists, you are going to find yourself bumping into times          |
| 54:42      | where you need to search through a lot of text and want to do this, or you're going                 |
| 54:47      | to be building a shortcut and realise, man, if I could just make it do this one extra               |
| 54:51      | thing and that one extra thing involves words in any way, regular expressions is going to           |
| 54:57      | help you solve the problem.                                                                         |
| 54:58      | Yes, it definitely is.                                                                              |
| 55:00      | All right.                                                                                          |
| 55:01      | So let's talk about some additional resources.                                                      |
| 55:02      | We've been talking about [[BBEdit]] off and on throughout the show, but go download it.                |
| 55:06      | It's a free download.                                                                               |
| 55:08      | Like I said, you get that trial at the beginning.                                                   |
| 55:11      | Great company.                                                                                      |
| 55:12      | They've been on the Mac for a long time.                                                            |
| 55:16      | And they have the written materials for regular expressions.                                        |
| 55:19      | They have the lab where you can open it up and just start typing them.                              |
| 55:22      | I guess what they call it, the pattern playground, is what they call that, I believe.               |
| 55:26      | And you can go in there and just figure out some stuff, play with it, drop some text in,            |
| 55:32      | grab something off the internet, or you can even populate.                                          |
| 55:35      | I think [[BBEdit]] has pre-populated text, if you want.                                                |
| 55:38      | Yes, it does.                                                                                       |
| 55:39      | It has a Lorem Ipsum Generator.                                                                     |
| 55:41      | It also has a Bacon Ipsum Generator and it has a Startup Ipsum Generator.                           |
| 55:46      | And yes, these are as intriguing and amazing as they sound, and I highly recommend playing          |
| 55:51      | with them just for that alone.                                                                      |
| 55:54      | Bacon Ipsum, brilliant idea, making me hungry.                                                      |
| 55:57      | Yes.                                                                                                |
| 55:58      | Yeah.                                                                                               |
| 55:59      | Well, I mean, it's almost dinner time here.                                                         |
| 56:00      | So maybe afterwards.                                                                                |
| 56:02      | But as well as [[BBEdit]], the [[BBEdit]] manual, even if you're not using [[BBEdit]], have a look           |
| 56:08      | at the chapter on regular expressions in there.                                                     |
| 56:10      | If you're stuck and you're looking for a good resource, it is extremely thorough, which             |
| 56:14      | is great.                                                                                           |
| 56:16      | And there's also a resource that we'll put in the show notes for the shortcuts format               |
| 56:20      | of regular expressions, because some programming languages and therefore some applications          |
| 56:26      | use different formats of regular expressions.                                                       |
| 56:29      | Now usually these don't vary a lot, but JavaScript has some slight oddities, perhaps you could      |
| 56:37      | call it, or uniqueness.                                                                             |
| 56:39      | And so you'll want to make sure that you're using the right format, and Shortcuts uses              |
| 56:43      | the ICU format for a lot of things, for date formatting, and for regular expressions.               |
| 56:49      | So we'll put a link to that in the show notes as well.                                              |
| 56:52      | Yeah, some other great resources.                                                                   |
| 56:54      | There's an app for iOS called Pretty Regular Expressions.                                           |
| 56:57      | Good for testing regular expressions out.                                                           |
| 57:00      | Yes, especially if you're on a plane.                                                               |
| 57:02      | Yeah, and Rose found a good website, Regex 101.                                                     |
| 57:06      | Yes, and this works the same way [[BBEdit]] does pretty much.                                          |
| 57:10      | It has a cheat sheet on the right hand side.                                                        |
| 57:13      | It's got your search box at the top.                                                                |
| 57:15      | It's got a big box where you can paste in some sample text.                                         |
| 57:18      | And you can also try, there's an option to try the replaces as well.                                |
| 57:22      | So it works like the pattern playgrounds in [[BBEdit]] in many ways, but it's a really                 |
| 57:27      | useful, and I often use all machines that don't have [[BBEdit]] installed.                             |
| 57:31      | The next machine is primarily, and on my iPad, because it's extremely handy.                        |
| 57:37      | You know, Rose, I've been threatening to talk about regular expressions on a podcast for            |
| 57:40      | like 10 years.                                                                                      |
| 57:42      | I'm glad to have helped you achieve your goal.                                                      |
| 57:44      | You got me to do it, and I think it came out great.                                                 |
| 57:47      | Thanks so much for all your knowledge on this stuff.                                                |
| 57:50      | If you are listening to us and you've never tried a regular expression, go get in front             |
| 57:55      | of a computer, give it a try, try some of these resources out.                                      |
| 57:58      | Like I said, this is just a great tool to have in your belt, and you'll find a use for              |
| 58:01      | it if you understand it in the slightest.                                                           |
| 58:04      | And don't worry, you don't need to become encyclopedic knowledge about regular expressions.         |
| 58:09      | You just need to know generally what they do.                                                       |
| 58:12      | And then when you have a problem with just a little bit of research, you'll find out.               |
| 58:16      | And a great place to get help with that would be the automators forums.                             |
| 58:20      | There's a lot of really smart friends there that would help you if you had trouble with             |
| 58:24      | regular expression, I'm sure.                                                                       |
| 58:26      | Yes.                                                                                                |
| 58:27      | And don't forget, check the show notes for all the links, and it's also over at really.fm.com.      |
| 58:34      | All right.                                                                                          |
| 58:35      | Thank you to our sponsors, Zapier, Smile, and FreshBooks.                                           |
| 58:39      | We will see you in a few weeks.                                                                     |
| 58:40      | Goodbye, everybody.                                                                                 |
