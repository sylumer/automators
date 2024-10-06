---
status: "incomplete"
fc-date:
  year: 2021
  month: 10
  day: 22
fc-category: "podcast"
podcast: "Automators"
published: 2021-10-22
duration: 5987
formattedduration: "01:39:47"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/87"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators087.mp3"
episode: 87
title: "87: Email Rules Automation"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Email automation is a thing, but email rules-based automation is another thing entirely.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 087 Discussion](https://talk.automators.fm/t/87-email-rules-automation/12486)

# Sponsors
- [[Stripe (Sponsor)|Stripe]] - Learn more about how Stripe and their products can support your business.
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.
- [[Hunter Douglas (Sponsor)|Hunter Douglas]] - Take advantage of Hunter Douglas' '*Season of Style*' rebate savings event.
- [[Intrazone (Sponsor)|The Intrazone by Microsoft SharePoint]] - a bi-weekly conversation and interview podcast about SharePoint, OneDrive and related tech within Microsoft 365.

# Show Notes
- [Common Gmail filters](https://support.google.com/a/users/answer/9300019?hl=en)
- [Search operators that you can use with Gmail - Gmail Help](https://support.google.com/mail/answer/7190?hl=en-GB)
- [Importance markers in Gmail - Gmail Help](https://support.google.com/mail/answer/186543?hl=en&p=inboxstyles&visit_id=637702654377838332-2320007042&rd=1)
- [Upgrade to iCloud+ – Apple Support (UK)](https://support.apple.com/en-gb/HT201318)
- [Organising your inbox – FastMail](https://www.fastmail.help/hc/en-us/articles/1500000278122-Organising-your-inbox)
- [FastMail Filters and Rules Put Mail in Its Place](https://fastmail.blog/productivity/email-organisation-filters/)
- [SpamSieve: Easy-to-use Mac spam filter for Apple Mail, Outlook, Airmail, MailMate, and more](https://c-command.com/spamsieve/)
- [Subscribe to Email Newsletters in Feedbin](https://feedbin.com/blog/2016/02/03/subscribe-to-email-newsletters-in-feedbin/)
- [joelekstrom/fastmate: A native FastMail-wrapper for Mac.](https://github.com/joelekstrom/fastmate)
- [IMAP by Zapier Integrations | Connect Your Apps with Zapier](https://zapier.com/apps/imap/integrations)
- [Add Event During Work Hours (Simple)](https://www.icloud.com/shortcuts/59c6ddf05c1a40a49125dc2449b1e0d2)
- [Add Event During Work Hours (Advanced)](https://www.icloud.com/shortcuts/0db7622edf62414aade35020f8e5bb85)

# Transcription
  
| Time Index | Transcription                                                                                              |
| :--------- | :--------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the podcast where we talk about making your computers                    |
| 00:07      | do everything for you. For the very least, as far as I can. My name is Rosemary Orchard                    |
| 00:11      | and I'm joined, as always, by David Sparks. Hey, David, how are you today?                                 |
| 00:15      | I am great, Rose. This is going to be a really fun episode today and very automator-ish.                   |
| 00:21      | Is that a word? Automator-ish? Yes.                                                                        |
| 00:23      | A gas? I mean, Automator itself might feature in the episode.                                              |
| 00:28      | Yeah. We're going to talk about mail rules today, but we also are going to talk about                      |
| 00:33      | all the cool new gadgets coming out of [[Apple]] this week with the new MacBook Pro.                           |
| 00:41      | But the [[Apple Mail]] rules are just mail rules in general. We've covered email automation                    |
| 00:47      | before in some prior episodes, but both of us have been experimenting a lot lately with                    |
| 00:54      | mail services and mail servers. That opens up a new can of worms for mail automation rules.                |
| 01:03      | We've never really gone into that deeply. We thought, since both of us are neck deep                       |
| 01:09      | in this stuff right now, we should share it. Yeah, we should. I've recently popped onto                    |
| 01:16      | MPU for a little bit to talk about switching to iCloud Mail, which has come with its own                   |
| 01:21      | personal set of automation problems and chances and solutions, actually, which I'm very pleased            |
| 01:27      | about. It seemed like a perfect time, especially since you have, since then, switched to FastMail.         |
| 01:34      | Yeah. I put my email in FastMail, Rose put hers on iCloud. We both have new toy boxes                      |
| 01:40      | to play in for automation. Also, I think mail rules is an often ignored area of automation                 |
| 01:48      | for people who aren't super into this stuff. You know what I mean? It's like a lot of the                  |
| 01:53      | automation stuff we talk about. There's kind of like next level stuff where you're coding                  |
| 01:57      | and doing things. Then there's really simple stuff like one or two step shortcuts. I feel                  |
| 02:02      | like mail rules fall somewhere in the middle, but it has a ton of utility. We're going to                  |
| 02:07      | talk about some of the server side mail rules. Both of us have been implementing recently,                 |
| 02:13      | and I can see how this is so useful. I hope if you're listening and you haven't tried                      |
| 02:19      | mail rules, you'll hear us out today and maybe come up with a few of your own.                             |
| 02:23      | Yeah. It's one of those things where I think a lot of people could benefit from this, even                 |
| 02:28      | if they think that maybe they don't get that much email by automating it, just handing                     |
| 02:33      | off that difficulty right there. Yeah. We're going to start in the area of                                 |
| 02:41      | cloud-based mail rules. This to me has always been the undiscovered country because historically           |
| 02:49      | I've used mail services that just didn't have a lot of cloud-based rules, but cloud-based                  |
| 02:53      | rules are the idea that your mail server, the company that manages email for you, that                     |
| 02:59      | is the address. When someone writes an email to david@macsparky.com, it goes to a server                  |
| 03:06      | somewhere on the internet that I connect to, and the company that runs that server, some                   |
| 03:12      | of them have implemented ways to institute rules where you can say, if it comes from                       |
| 03:18      | Rosemary Orchard, put a gold star on it and alert me and send it directly to me and things                 |
| 03:24      | like that. That's not done. It doesn't require a Mac to be running. It happens out on the                  |
| 03:29      | internet with a server, and it's just not really been available to me for a long time,                     |
| 03:35      | but there are options now. We're going to cover today several of them, and I think we'll                   |
| 03:40      | start with probably the granddaddy of these, which is Google.                                              |
| 03:45      | Yeah, and Google is great. To some extent, people who are fans of automation will not                      |
| 03:51      | be surprised. I'm sad I switched away from Google because Google has so much power in                      |
| 03:57      | their filtering and managing of email. It's almost unbelievable. I kind of didn't think                    |
| 04:04      | that I had all that much going on in my Gmail rules, or actually, I was using G Suite because              |
| 04:09      | I've got my own domain name or whatever Google's calling it this month. They seem to change                |
| 04:14      | the name on a regular basis. I was using that. First of all, if you are using it for domains,              |
| 04:20      | it's about $5 per person per month or per inbox per month, so that is something to keep                    |
| 04:26      | in mind. On free Gmail, you get all of this power as well. Oh my gosh, it is insanely                      |
| 04:34      | powerful. You can combine as many filters as you like, and it uses a series of text-based                  |
| 04:42      | Boolean logic, which sounds very complicated, but basically, I can say, if the email comes                 |
| 04:48      | from David Sparks and has automators in the subject, then I would like it to be starred                    |
| 04:59      | and forwarded to this address. You can do multiple actions with multiple filters, which,                   |
| 05:06      | as I've discovered, is not something you can do everywhere.                                                |
| 05:08      | Yeah. Automation so often comes down to the two elements that Rose and I talk about all                    |
| 05:17      | time, triggers and actions. What are the things that can trigger an automation, and then once              |
| 05:22      | it's triggered, what can it do? Google is arguably the best at this because they have                      |
| 05:32      | lots of triggers and lots of actions. If you're using Gmail, you need to do it. Now, Rose,                 |
| 05:39      | how do you get started setting up some of these automations in Gmail?                                      |
| 05:44      | Well, first of all, you need to go to mail.google.com because that will take you to the web part           |
| 05:50      | of the inbox. That's where you need to set this up. Then you go to the settings option,                    |
| 05:54      | and then you have to go to see all settings. It's hidden nowadays. Then there's this tab                   |
| 05:59      | called filters and blocked addresses. Fortunately, even though I'm not using Google anymore, all           |
| 06:05      | of this information is still available to me there, which is what I've been using to build                 |
| 06:10      | mail rules elsewhere. Then you can create filters. You can also import filters. You can                    |
| 06:18      | also create a filter from an email. This is always incredibly useful. You get an email                     |
| 06:26      | and you go, okay, I don't want to get emails like this in my inbox anymore. You click on                   |
| 06:32      | the little drop-down arrow to the right-hand side of it at the top, and then say create                    |
| 06:36      | filter. That starts by creating the filter from that address. This gives you a whole                       |
| 06:42      | series of fields that you can fill in. From to subject has the words doesn't have, has                     |
| 06:51      | attachment size greater than, and so on. Once you've got that filled out, then you're really               |
| 06:58      | cooking because after you've done that, it'll show you a search by default. Actually, I                    |
| 07:04      | don't think you can change this. The first thing that it will do when you've created                       |
| 07:07      | this filter is it runs a search on your email, not just your inbox, for all of the email                   |
| 07:14      | that looks like this. That's a really good time to go, okay, where is this potentially                     |
| 07:20      | going wrong? Because of course, with great power comes great responsibility. If you accidentally           |
| 07:27      | set it up to delete all email from David Sparks, then I can guarantee that I, at the                       |
| 07:32      | very least, would have one very unhappy automator's co-host. I always double-check to make sure            |
| 07:37      | what the filters are, and I go through that, and you can rerun that search at any time.                    |
| 07:43      | First of all, by editing the filter, and of course, you can also just copy and paste that                  |
| 07:49      | information and stick it in the search bar because it's incredibly powerful, and that's                    |
| 07:55      | the same syntax.                                                                                           |
| 07:56      | Yeah. Different people have different opinions on Google. Some people are totally fine with                |
| 08:04      | it and really happy. It's a service that costs little or nothing. It's got very powerful                   |
| 08:12      | cloud-based rule automation, and it's ubiquitous. Google is everywhere. I mean, there are so               |
| 08:19      | many people that have Gmail accounts. Whenever there's a cool new mail service out there                   |
| 08:25      | that's going to use some sort of automation or some new way to view your mail or whatever,                 |
| 08:31      | they're going to make that service work with Gmail because it seems like half the world                    |
| 08:36      | is using it. Maybe more, I don't know what the stats are, but a lot of people are using                    |
| 08:41      | it.                                                                                                        |
| 08:42      | So you're in a big market, and you're going to get all the fun toys for email to the extent                |
| 08:47      | you like toys or email. I actually do, so that's cool. But then you've got this thing                      |
| 08:53      | where Google is an advertising-based company, and you open up a Gmail, and it's got, and                   |
| 08:59      | somebody sends you a note, this is, man, what I'd really like now is a new lawnmower. My                   |
| 09:03      | old one sucks. And then at the bottom of the email, there's an advertising for lawnmowers,                 |
| 09:07      | and you're like, well, that's pretty weird. How did that happen?                                           |
| 09:12      | And so there is this advertising model, and I know Google has actually got more restrictive                |
| 09:17      | on themselves lately about that, where they're saying they're not reading the email to generate            |
| 09:22      | advertising content, but Google's an advertising company, and there is kind of like an underlying          |
| 09:28      | tension there, where they're doing this email for the whole world, obviously it costs money,               |
| 09:33      | and the way they make money is advertising. So there is a certain tension with it.                         |
| 09:40      | Yes, yeah, which is just something to be aware of when you're doing this stuff. I think it's               |
| 09:48      | one of these things where you're going to end up finding a trade-off wherever it is.                       |
| 09:53      | Whether you potentially don't get as many automations as you would like, or maybe you                      |
| 09:58      | know, you can't afford to pay for a different service, and therefore you're going to use                   |
| 10:04      | the best of the free ones, and so on and so forth. So you just have to find the trade-offs                 |
| 10:09      | that you are willing to make the result in a solution that you are actually happy with.                    |
| 10:16      | And just to forestall anybody who's saying, but Rose, you're a developer, just set up                      |
| 10:20      | your own mail service. No, don't do that. Not unless you don't ever want your email                        |
| 10:25      | to be delivered ever again. So running your own mail service is a bad idea. But aside                      |
| 10:33      | from that, the world is pretty much your oyster. If you happen to, I don't know, run hover                 |
| 10:39      | mail or something as your day job, by all means, you're one of those people who's welcome                  |
| 10:43      | to run your own mail server. But for the vast majority of people, I would say unless you                   |
| 10:47      | don't like having people receive the email you sent, don't try that. Stick with something                  |
| 10:53      | like G Suite or FastMail or one of the many other options out there.                                       |
| 10:58      | So just to go back to Gmail, what I would say is if you're using Gmail and you've made                     |
| 11:04      | those decisions like it grown up, and you've like, okay, I've considered some risks to                     |
| 11:09      | Gmail plus the advantages, and certainly one of the advantages is the automation, then                     |
| 11:14      | that's fine. Don't worry about it. Just use Gmail. If you're somebody who's not comfortable                |
| 11:18      | with Gmail, that's okay too, because we've got some really good options we're going to                     |
| 11:22      | share in this show that will give you automation without Gmail. And I do think that it's really,           |
| 11:28      | I don't want to really get into it because today's show is about automation. But that                      |
| 11:32      | is a thing that always comes up as part of this discussion. And then to round back to                      |
| 11:36      | Google's automation stuff, I used it this week because I am someone who has just never                     |
| 11:42      | been a Gmail user. I never really got into it. I have an account that I go in and play                     |
| 11:48      | with so I can talk about it as MacSparky this week. I spent a bunch of time in there.                     |
| 11:52      | And one of the things I observed is that the Google Mail rule system is both easy for anybody              |
| 12:01      | to create and it's embedded in the Mail reader, which is really good. Like the one I'm going               |
| 12:08      | to talk about later, the one I really like is FastMail. To create the rules, you log                       |
| 12:12      | into their website and you go into the settings. Whereas with Gmail, it felt more fluid to                 |
| 12:18      | create them on the fly. And that's something I think Google has on FastMail. But there's                   |
| 12:24      | other things. So I would say though, that if you're using Gmail and you're not using                       |
| 12:31      | Gmail rules, it's like getting a piece of chocolate cake with really good frosting but                     |
| 12:38      | not eating the frosting. I mean, it's like, come on, man, you're using Gmail. This is                      |
| 12:41      | like one of the best things about Gmail. You should be using Gmail rules.                                  |
| 12:46      | Yeah. And the other thing is there are two features I'd still like to talk about here.                     |
| 12:52      | One of them is just search. Okay. Google search is incredibly powerful. I've put a link into               |
| 12:56      | the show notes for filters in general with Google. And you can use these both in the                       |
| 13:01      | search and in the filters. But if you do a search, then you can create a filter from                       |
| 13:07      | there. So there's a sort of settings type icon over on the right-hand side of the search.                  |
| 13:12      | Once you've done your search, if you click on that again, or just click on that and then                   |
| 13:16      | click create filter, then you can create a filter. The only things that won't translate                    |
| 13:22      | from that section are the date received and stuff like that, because Google filters work                   |
| 13:29      | on mail as it comes in. They won't process stuff that's already in your inbox.                             |
| 13:34      | Oh, really? Do they have an option to do that? Or is it just always?                                       |
| 13:36      | Well, so when you create a filter, then you can apply that to everything that comes up                     |
| 13:41      | from the search. Yeah.                                                                                     |
| 13:42      | But you can't then say, create a filter for things received more than a week ago because                   |
| 13:48      | Google only runs it when the email arrives. Yeah. That makes sense. Like FastMail does                     |
| 13:54      | the same thing. You can, when you create a rule, you can apply it to all existing email                    |
| 13:59      | or just new email, which I think largely is the option you'd want. But occasionally,                       |
| 14:04      | you may come up with a rule to do something to all email from Rosemary, like if you want                   |
| 14:08      | it. Yeah. Yeah, exactly. And then you can retroactively apply that, which is great.                        |
| 14:13      | The other feature I want to talk about, which you get for free, it's on by default. You                    |
| 14:18      | may have disabled this, are categories in Gmail. So Google can turn on these smart features                |
| 14:27      | where it will split up your inbox for you. And the categories are primary, social promotions,              |
| 14:33      | updates, and forums. So basically, what it's trying to do is get any and all automated                     |
| 14:38      | email you receive out of primary into one of the other categories. So if you have, for                     |
| 14:43      | example, the Automated Forum, send you email when somebody posts and you've not been around                |
| 14:49      | in a while, which is something you can set up under your profile settings, then that                       |
| 14:53      | would appear under forums. But something that is from David Sparks, your newsletter, would                 |
| 15:00      | probably appear under updates. An email from [[Amazon]] telling you about today's treasure                     |
| 15:05      | truck deal would land in promotions and updates from Twitter would land under social. And                  |
| 15:10      | it will just take that stuff and automatically move it. Now, this does mean that it kind                   |
| 15:15      | of splits up your inbox. You then don't just have an inbox, you've got five inboxes, but                   |
| 15:20      | equally, the important stuff should make it to primary. And you can train it a little                      |
| 15:26      | bit, at the very least, so that you can say, no, these things shouldn't go into forums.                    |
| 15:34      | They should go into primary or whatever it is. And if you go into the settings of your                     |
| 15:40      | Google account, into the inbox tab, you can change your inbox type, first of all. But                      |
| 15:46      | if you mouse over each of these categories, so primary, social, promotions, and so on,                     |
| 15:51      | it will show you examples of the kinds of email that will land in there. So for example,                   |
| 15:59      | if I look at, let me see, promotions, I can see that I've got some stuff from Tom Bin                      |
| 16:04      | in there, Take Control, and some other things. Social has meet up in there. So a lot of things              |
| 16:13      | from different meet up groups appearing. And this is, you know, this is just turn it on                     |
| 16:20      | and you've got it for free. It does mean it very occasionally that you'll find that something              |
| 16:25      | appears in the wrong inbox. You can tell it's in the wrong inbox. And then there's also                    |
| 16:29      | a feature that's part of this called Importance Markers. So it can show messages that have                 |
| 16:37      | been marked as important. And it analyses your new incoming messages to predict what's                     |
| 16:43      | important, considering things like how you've treated similar messages in the past, how                    |
| 16:47      | likely does the messages address you and many other factors, which, you know, is both amazing              |
| 16:53      | and also potentially slightly creepy. So again, it's all about that trade off, isn't it, of                |
| 16:59      | what you have to do, what you decide is best for you and for your email. I personally have                 |
| 17:04      | this turned off on my domain email, but I can see my parents both use it and they really                   |
| 17:10      | like it. So, you know, there's wins and losses on both sides there. But in general, I think                |
| 17:17      | the completely automated filtering from that is great.                                                     |
| 17:21      | Yeah. I mean, I do a similar thing with the same box service. And that is a level of like,                 |
| 17:29      | how far do you want to let other people into your mail? And like the way same box works                    |
| 17:33      | is they only read the recipient, the subject line. So I don't, you know, but it works great,               |
| 17:40      | you know, and this idea of being able to look at your mail and have it filtered down like                  |
| 17:46      | newsletters and marketing to different folders, which is the way same box is with folders                  |
| 17:51      | instead of groupings that the Google does, that makes the process of checking email and                    |
| 17:58      | making sure you get the most important email first more useful. And it is a sort of rule.                  |
| 18:04      | It's in both of these are online rules, but these are automated rules done by somebody                     |
| 18:08      | else, which I think is another piece of this.                                                              |
| 18:11      | Yes, it definitely is. And, you know, you have to decide on what works well for you.                       |
| 18:18      | The other thing that Google Docs does, or Google email, sorry, there's so many Google                      |
| 18:22      | things in my life. The thing that Gmail does is it'll it easily applies tags to email.                     |
| 18:29      | So if you want to go with a tag based system, I think Google is one of the best solutions                  |
| 18:34      | for that because it's built in, it works reliably. And well, even though you may not                       |
| 18:40      | like tags on your Mac or in other places, I think tags and email can be a very powerful                    |
| 18:46      | combination.                                                                                               |
| 18:47      | Yes, they definitely can. And yeah, I mean, tags versus folders is a whole other debate,                   |
| 18:54      | I think that we might need to dive into at some point in the future, David, but there                      |
| 18:58      | are bonds just to both of them.                                                                            |
| 19:02      | This episode of The Automators is brought to you by Stripe. Learn more about how Stripe                    |
| 19:06      | and their products can support your business. Just head over to Stripe.com. Many leaders                   |
| 19:12      | of adaptive businesses choose Stripe as their payment platform, because with Stripe, businesses            |
| 19:17      | can easily optimise their payments infrastructure, simplify their expansion plans and create               |
| 19:23      | new revenue streams, all to help them grow and initiate change rather than having to                       |
| 19:27      | react to it. In fact, businesses such as Spotify, Postmates and Twilio use Stripe to power their           |
| 19:34      | global payments. And to add to that list of companies is RelayFM. RelayFM has trusted                      |
| 19:39      | Stripe to manage payments since 2016. It's a huge benefit that they accept more than                       |
| 19:45      | 135 currencies and payment methods, which means more time can be spent on hosting and                      |
| 19:50      | prepping for shows while Stripe handles the payments. I did the same thing with my law                     |
| 19:55      | practice. I have Stripe because I've got some international clients, and it was the easiest                |
| 19:59      | way to get paid. I've never regretted it. Stripe ranks the highest for strategy in current                 |
| 20:05      | offerings in the 2020 Forester Wave Report on merchant payment providers. And their current                |
| 20:10      | offering is so comprehensive and versatile, with Stripe's products powering payments for                   |
| 20:15      | a wide variety of businesses from online and in-person retailers to subscription businesses,               |
| 20:22      | software platforms and marketplaces, and everything in between. So head to Stripe.com if you'd             |
| 20:27      | like to learn more about how Stripe and their products can support your business. That's                   |
| 20:31      | Stripe.com to learn more today. And our thanks to Stripe for their support of the automators               |
| 20:37      | and all of RelayFM. All right. So we're going to go from the cornucopia of online rules                    |
| 20:46      | to the desert of online rules. And you know what I'm talking about? iCloud.                                |
| 20:51      | I know. I both love the fact that I tried this out, and I also hate the fact that I'm                      |
| 20:56      | now going to have to switch everything over again. The good news is, because I have my                     |
| 21:00      | own domain, it's a relatively, and I should emphasise that word, relatively pain-free                      |
| 21:08      | thing to move my email to a different provider. It's not like I need to sign up for a new                  |
| 21:12      | email account and change my email address with every single online service again. It's                     |
| 21:17      | a, you know, I changed some settings in my DNS, email starts appearing, and yeah.                          |
| 21:23      | Let's go down that side alley for just a minute. If you own your own domain and you're hosting             |
| 21:28      | your mail for that, and I would recommend anybody do this. I mean, to own a domain is                      |
| 21:33      | not that expensive, you know, and you don't need to have a website because you own a domain.               |
| 21:40      | You could just use it for your email. And then whenever you purchase a domain, you go                      |
| 21:45      | to the website, you purchase the minute that they have a tab there called DNS settings.                    |
| 21:50      | And there are very specific instructions with all of the services we're going to discuss                   |
| 21:55      | that tells you what records you need to change. And it takes about an hour for me to do it,                |
| 22:01      | and I do it really slow because I am super careful that I don't get any typos. I mean,                     |
| 22:07      | I do this like I'm diffusing a bomb when I don't really need to. And, you know, people                     |
| 22:12      | who work in this stuff every day do it in minutes. But the, and the Internet's a pretty                    |
| 22:17      | fast place. So once you change the setting, it usually takes a little time to kick in                      |
| 22:23      | usually within an hour with any of the services we're going to talk about, it'll be taken                  |
| 22:27      | in and then Gmail will have your, your email or FastMail or hover or iCloud or whatever                   |
| 22:33      | service you choose. So this is not a mission impossible. If like you're listening to this                  |
| 22:38      | show and you're like, wow, I really like Gmail. I like what they're saying about Gmail. I                  |
| 22:42      | want to attach my domain to Gmail. It's not hard.                                                          |
| 22:46      | No, there is one suggestion that I would make before you start doing this, which is, you                   |
| 22:52      | know, the answer preparation saves a pound of work type thing where I would suggest the                    |
| 22:57      | day before you do it, pop into your DNS settings, look for everything that's currently related             |
| 23:01      | to your email and change the time to live down from an hour to something like 15 minutes.                  |
| 23:09      | Because basically what happens with every single one of these records is it both says,                     |
| 23:14      | hey, I exist and this is what I am for. And also, I am good for the next X minutes or                      |
| 23:20      | however long. And most of these things default to an hour, some of them default to three                   |
| 23:26      | hours and so on. And basically, you know, the longer it is, the more time you're going                     |
| 23:32      | to have to wait for these things to work when you switch it over. But if you change it the                 |
| 23:37      | day before down to something like 15 minutes, I mean, if you're, if everything's set to                    |
| 23:41      | 60 minutes, you can just do it, go away for an hour, and then come back and then actually                  |
| 23:46      | make all the changes. But if you change your time to live down, you're going to have to                    |
| 23:52      | delete some records and create new records anyway. So the new records fingers crossed                      |
| 23:57      | will have the right time. But also, if you're setting these things up, you can change that                 |
| 24:02      | time to live to be shorter. I wouldn't recommend leaving it shorter to be clear, just while                |
| 24:07      | you're getting things set up and making sure everything works, because you do need to make                 |
| 24:11      | sure you copy and paste this stuff accurately. And one thing which I did report to [[Apple]] and               |
| 24:17      | may have been fixed, but it's very difficult for me to check, is when I switched to iCloud's               |
| 24:24      | email with my personal domain, one of the records they gave me had a typo in it. It                        |
| 24:29      | had a space where there shouldn't have been a space. And I looked at it and I was there                    |
| 24:33      | going, I am pretty sure this is wrong. This seems to me that it's wrong, but it was telling                |
| 24:39      | me that record was wrong. And when I hadn't copied it, and it was because I've forgotten                   |
| 24:45      | to change the time to live on that record as it was. But basically, that was wrong.                        |
| 24:49      | They'd also sent me an email with the setup instructions. The email was correct. So I then                 |
| 24:54      | copied everything out of the email when I was actually having problems. I decided this                     |
| 24:58      | has been long enough of maybe I should just wait for things to expire.                                     |
| 25:03      | Did you file a bug report on that?                                                                         |
| 25:04      | I did. I did. I filed a bug report with [[Apple]]. So fingers crossed that has actually been                   |
| 25:10      | fixed now. That would be really good if it has. But yeah, make sure you are very precise                   |
| 25:14      | about copying and pasting. Some of these rules must end with a full stop and so on. And if                 |
| 25:19      | you don't put the full stop in, then that will automatically append your domain name.                      |
| 25:24      | So in my case, it would put, you know, [[Apple]], iCloud, email. And that's where it's supposed                |
| 25:30      | to point. But it would put dot rosemaryorchard.com on the end unless I put that full stop in there.        |
| 25:36      | So make sure you are very precise when you copy and paste all this stuff for setting                       |
| 25:40      | these things up. Because the other thing is, is if you do own your own domain, that means                  |
| 25:45      | that you get a lot more control over your email. Because at least not with iCloud, we'll                   |
| 25:52      | get to this in a second. But usually, you can use absolutely anything at your domain                       |
| 25:57      | name dot com. So that means that I can walk into, I don't know, awesome cats as store                      |
| 26:03      | down the road. It's not really a store. And they asked me what my email address is when                    |
| 26:07      | I'm paying. I can say awesome cats at rosemaryorchard.com. And they'll give you a look and you say,        |
| 26:13      | yeah, it's your business name at rosemaryorchard.com. Okay. And it will still end up in your inbox         |
| 26:18      | if you set that up. And that gives you a lot of automation power. Because, you know, if                    |
| 26:26      | people start sending email to awesome cats at rosemaryorchard.com, and it's not awesome                    |
| 26:31      | cats, then I know that they're the people that sold my email. And you can actually do                      |
| 26:35      | this with Google as well, by just putting a plus. So if your email was my name at gmail.com,               |
| 26:45      | or you're hosting it with G Suite, so it's my name at mydomain.com, you can just add                       |
| 26:50      | a plus after the my name, and then put anything in there. Or you can move the dot or add dots              |
| 26:56      | to your name. So it could be David dot MacSparky. Or it could be David MacSparky,                        |
| 27:02      | or d dot a dot v dot etc. And you can create unique combinations with that, which can be                   |
| 27:08      | quite nice.                                                                                                |
| 27:09      | Yeah. But just to kind of return to the thread, switching your domain is not that difficult                |
| 27:14      | last year. I was with Hover, then I did a two month experiment at Hay, then I went back                    |
| 27:20      | to Hover, and I've switched to FastMail. And to the rest of the world, my email has not                    |
| 27:24      | changed. You know, it's just the backend or the server on the internet where this stuff                    |
| 27:30      | ends up has changed a few times, but the email has changed the same. So I would recommend                  |
| 27:36      | getting a domain and running your own service. And you can do a couple other tips when you're              |
| 27:41      | making the switch is go in the day before screenshot and copy everything. So if you                        |
| 27:47      | can export your DNS records, do that, especially if there's an import function to re-import                |
| 27:53      | everything afterwards.                                                                                     |
| 27:54      | Yeah, you can always screenshot. And you can also just copy and paste, like you can select                 |
| 27:58      | it and copy and paste. I would recommend copying and pasting to a text file, because the screenshot,       |
| 28:04      | the characters are very complicated in the screenshot. You may not realise that it's                       |
| 28:09      | a pipe or a one or an L or what, you know, so just just copy and paste if you can. The                     |
| 28:15      | other thing I would recommend is doing this at a low volume time. Like I had decided to                    |
| 28:19      | do this about a month ago, but then I released the [[DEVONthink]] Field Guide and I didn't want               |
| 28:23      | my email to break when I was getting customer requests in when it first released. So I waited              |
| 28:28      | until that died down. And then I did it at midnight Pacific, which is for the East Coast                   |
| 28:34      | is 3am. The Pacific, everybody's pretty much done for the day. And I just stayed up late                   |
| 28:40      | one night and did it at midnight. And that way by 1am, everything was working with the                     |
| 28:45      | domain switch. And the other thing I do, and Rose, you may have better advice for this,                    |
| 28:50      | but what I do is I just leave both emails connected, like I had my old hover domain                        |
| 28:55      | still connected. And then I set up the new one with FastMail. And I don't have a lot                       |
| 29:00      | in my folders because, you know, I use search. So I've got an archive folder, I've got a                   |
| 29:05      | sent folder, and then I've got a couple small folders that that are easily duplicated. But                 |
| 29:10      | I took all the mail out of archive and all the mail out of send just copied it from the                    |
| 29:15      | old hover domain to the new FastMail domain and went to bed. And when I woke up, everything                |
| 29:20      | had been copied over. So in essence, kind of backed up my mail from the old server to                      |
| 29:25      | the new one.                                                                                               |
| 29:26      | Yes, yes, I would definitely recommend doing this, especially if you are paying for multiple               |
| 29:31      | services. You're not going to want to pay for that indefinitely when you're not actively                   |
| 29:36      | using it. And some of these services won't actually let you continue paying unless your                    |
| 29:40      | domain is hooked up, which is a good thing to be clear. They're not taking you money                       |
| 29:46      | for a service they're not providing. But what I would highly recommend, even if you use                    |
| 29:51      | webmail day to day, is hooking up something like the macOS mail client, you will want                      |
| 29:56      | to do this on Mac, don't try and do this on iOS, please do it on a Mac or a Windows machine                |
| 30:01      | or a Linux machine, any machine, you know, but something like Thunderbird or mail is                       |
| 30:06      | going to be great. Connect to the mail account first, download everything, absolutely everything.          |
| 30:14      | And then when you set up the new email address, you can transfer things across. So I ended                 |
| 30:19      | up transferring a lot across. I should really go through and prune all of that stuff. But                  |
| 30:23      | that's okay. I will get to that. My search still works. So the fact that I can still                       |
| 30:27      | find all of these emails is perfect for me as far as I'm concerned. But I did have a                       |
| 30:33      | problem when I was copying some of the messages over. It stopped at about 5,932 or something               |
| 30:39      | and it sat there for a couple of hours. When that happened, I left it for a while. Obviously,              |
| 30:45      | just, you know, sometimes emails are bigger. They've got attachments and stuff. It sat                     |
| 30:50      | on that number for a couple of hours. And that was the point where I just went, I'm                        |
| 30:53      | going to quit mail, reopen mail, I quit and reopen mail. And it resumed at 5,923 or whatever               |
| 31:00      | it was the next number after that. And it just continued on with it. So something with                     |
| 31:06      | [[Apple Mail]], I had the exact same experience. But yeah, yeah, I think it just times out                     |
| 31:10      | at a certain number of numbers after a certain number of emails transferring them. And also                |
| 31:15      | it might be rate limited. You know, some of these things might not let you just upload                     |
| 31:21      | 10,000 emails. But you know what, if you give it enough time, do it in batches and maybe                   |
| 31:27      | use some of the technology we're talking about today to do some searches first to clear out                |
| 31:31      | some of your email, then that would probably be beneficial to you.                                         |
| 31:35      | All right. So that was our little alleyway of switching domains because all of this kind                   |
| 31:40      | of depends on you switching domains. If you hear one of the services today that you want                   |
| 31:44      | to try out. But, but Rose, you went into iCloud. So iCloud, you can attach your domain to now,             |
| 31:51      | which is what we just described. So rosemaryorchard.com can be hosted at iCloud. There's some good         |
| 31:57      | reasons for that. [[Apple]] is definitely more privacy focused. If you're using [[Apple Mail]],                    |
| 32:04      | you know, using iCloud is going to obviously be well supported in your [[Apple Mail]] client                   |
| 32:09      | because it's made by the same people. However, the online rules are not great.                             |
| 32:16      | Yeah. So first of all, one of the things I want to address, which you will get with                        |
| 32:20      | the vast majority of services where you can host your email is something called the wild                   |
| 32:25      | card. And this basically means if you set this up, anything going to your domain.com,                      |
| 32:32      | you can have land in your, your default inbox. And you can also set it up so you can reply                 |
| 32:37      | from that from those addresses as well. [[Apple]] doesn't support this. So this means that if                  |
| 32:45      | you have or had multiple handles, you need to set up each of those individually. But                       |
| 32:50      | if I send something to zebra at rosemaryorchard.com, it's going to bounce back because that mail           |
| 32:56      | address hasn't explicitly been told to exist. And [[Apple]], at least at the time of recording,                |
| 33:02      | does not support this wild card system, which means that I have to go in and manually set                  |
| 33:10      | up every single alias, and I can't set up that many aliases. So this is something you                      |
| 33:15      | need to be aware of. Another thing, which could be a gotcha for some people, it was                        |
| 33:19      | for me, I resolved it by using another domain that I also own, is you cannot have multiple                 |
| 33:25      | [[Apple]] accounts with the same domain name. This is if you're using them personally. So                      |
| 33:30      | my developer account is actually attached to another email, which was a different handle                   |
| 33:35      | on my regular domain. So it was just something else in front of it. And I was then suddenly                |
| 33:40      | unable to look into my developer account. First of all, [[Apple]] really need to probably                      |
| 33:44      | fix that and still let me look in. And well, I was able to look in, but it was, you know,                  |
| 33:50      | doing funny things and clearly not very happy about it. So I ended up just changing that                   |
| 33:54      | to I've got rosemaryorchard.dev as well. So I just changed it to that, which, funnily enough,              |
| 33:59      | towards to my regular email. But that doesn't really matter. But yes, that's something you                 |
| 34:05      | need to be aware of. So you need to set these things up. Each of those handles that you                    |
| 34:08      | set up can then be added to iMessage. That's optional. So that's quite nice. And [[FaceTime]]                  |
| 34:14      | as well. So that's the, you know, that's quite nice if you want to use hello at for your                   |
| 34:21      | friends. But, you know, I am a very professional business person for work. You can do that.                |
| 34:28      | But, you know, aside from that bonus, it's, and the fact that the webmail is pretty, it's                  |
| 34:36      | not necessarily got all that many advantages to it. I'm afraid, David.                                     |
| 34:40      | Yeah. And I really think that this is set up when I heard you were trying this, I'm                        |
| 34:44      | like, this is an experiment Rose will never last because, you know, this is really set                     |
| 34:50      | up for somebody who maybe has a family domain and they just want to host it somewhere. I                   |
| 34:55      | mean, it doesn't cost anything. You know, if you already have it, it only costs things.                    |
| 35:00      | So it costs, but it's included as part of the price for iCloud plus. Yeah. So if you're                    |
| 35:06      | already paying for iCloud plus, then you get the domain included with that. Yeah. And the                  |
| 35:11      | online rules are you can't apply multiple rules. That's the killer. First of all, it has very              |
| 35:17      | few triggers, very few actions. And you can't like put conditionals like from Rosemary and                 |
| 35:23      | the subject is, which I think is kind of like, you know, table stakes for doing this and                   |
| 35:28      | it just doesn't do any of that stuff. So it is a very basic rule system and it is not                      |
| 35:34      | for automators, it's not going to give you enough.                                                         |
| 35:37      | No, I would say it almost certainly won't give you enough. The really good news is by                      |
| 35:43      | doing this experiment, it has forced me to think out of the box for a lot of this stuff.                   |
| 35:49      | And I've come up with some pretty innovative solutions because of this. So I'm using [[Make\|Integromat]]            |
| 35:54      | to filter my email now, which is something we can, well, we can, we can talk through                       |
| 35:58      | that in a moment, but I do just want to say like the fact that I can't filter on subject                   |
| 36:03      | and address is very frustrating. Now, you might be thinking, but Rose, you can do that                     |
| 36:08      | in the Mac mail. Mac mail runs when, so for whatever reason, at least for me, iCloud will                  |
| 36:15      | not push my email. It will fetch. And what push means is iCloud is the servers will sit                    |
| 36:22      | there and go, there is a new email. I will tell everybody about this. Fetch means that                     |
| 36:26      | your email client goes, I'm going to check the server and see if there's an email. Okay,                   |
| 36:31      | there's an email or no, there's no email. And then it will sit and wait. And so the problem                |
| 36:37      | with the fetch system, especially when you're them running males in the Mac mail client is                 |
| 36:42      | that email still lands in your inbox. And that means that you potentially will still                       |
| 36:46      | get notifications about that on other devices. And that's not idea. You know, and the [[Make\|Integromat]]           |
| 36:53      | solution I'm going to talk about is still doing fetch, unfortunately, it doesn't have                      |
| 36:57      | push unless you hook it up to Gmail or G Suite, in which case you do get that. And it's using              |
| 37:04      | their API rather than IMAP. But it does have some alternatives to it, which are quite nice.                |
| 37:12      | This episode of automators is brought to you by LinkedIn jobs. Today, many small business                  |
| 37:16      | owners are busier than ever. Time spent searching for an interviewing candidates can take time             |
| 37:20      | away from managing and growing a business. That's why LinkedIn jobs has made it easier                     |
| 37:24      | to get candidates worth interviewing faster. And it's free. I relatively recently switched                 |
| 37:30      | to a new jobs and LinkedIn was a big part of that. First of all, as a candidate, I was                     |
| 37:34      | able to find out a bunch of information about the companies I was interviewing for. And                    |
| 37:38      | secondly, they could see a load of information about me, just because I'd searched for them                |
| 37:43      | and sent them my information. Create a free job post in minutes on LinkedIn jobs to reach                  |
| 37:49      | your network and beyond to the world's largest professional network of over 770 million people.            |
| 37:56      | Focus on candidates with skills and experience you need. Use screening questions to get your               |
| 38:00      | role in front of only the most qualified people. Then use the simple tools on LinkedIn jobs                |
| 38:05      | to quickly filter and prioritise who you'd like to interview and hire. It's why small                      |
| 38:09      | businesses rate LinkedIn jobs number one in delivering quality hires versus leading competitors.           |
| 38:15      | LinkedIn jobs helps you find the candidates worth interviewing faster. Did you know every                  |
| 38:20      | week nearly 40 million job seekers visit LinkedIn? Post your job for free at linkedin.com/           |
| 38:26      | automators. That's linkedin.com/automators to post your job for free. Terms and conditions           |
| 38:32      | apply. Our thanks to LinkedIn jobs for their support of this show and all of Relay FM.                    |
| 38:37      | All right. So I have been talking throughout the show about my recent move to FastMail.                   |
| 38:42      | And I just want to talk about FastMail for a minute because I have been sitting on the                    |
| 38:46      | fence of online rules for too long. I didn't want to switch to Gmail. I had my mail hosted                 |
| 38:54      | at Hover, which is where I bought my domains. And I just did it there because frankly, it                  |
| 38:59      | was easy. I mean, you own the domain there, you own the email, everything set up for you.                  |
| 39:04      | Hover makes it super easy. Talking about domain name switching, when I decided to step away                |
| 39:09      | from hay, I actually sent an email to Hover and within 30 minutes, they had switched my                    |
| 39:17      | domains for me. I didn't even have to switch them back. It's just super convenient and                     |
| 39:21      | it's rock solid. I have never had a problem. I've been using them for like 10 years for                    |
| 39:27      | MacSparky. So there's this momentum involved. And I knew that like FastMail was better                   |
| 39:32      | at a lot of this stuff, but I always like thought, do I really want to deal with domain                    |
| 39:37      | name switching? And do I want to like go through the process? And of course I did. And talking             |
| 39:43      | to you about how frustrated you were with iCloud made me say, well, you know, it's not that                |
| 39:47      | hard to switch. I really need to make some steps here. And FastMail was the one that                      |
| 39:53      | I wanted to try. And if FastMail, it wouldn't work for me. I was not against necessarily                  |
| 39:58      | going to Gmail, at least with my non legal work. But, but I just wanted to really give                     |
| 40:03      | FastMail try. So I did the switch. It's now been about three weeks since I switched over.                 |
| 40:08      | And let me tell you, I am out of the desert, baby. I am like at a nice cool, like, you                     |
| 40:14      | know, what do they call that? The Savannah, right? Where there's a little nice pond there,                 |
| 40:18      | some palm trees, found the watering hole, the coconuts are plenty. So FastMail is a great                 |
| 40:26      | mail service. And you can use it like I did not leave hover. Hover still is my host for                    |
| 40:30      | my domain, but I just went into the hover DNS records and pointed mail at FastMail.                       |
| 40:35      | And it costs money. It's $5 a month, just like Gmail. And I set up three accounts.                         |
| 40:41      | There's one for me, one for my assistant and one for my editor, all that MacSparky. One                   |
| 40:47      | of the nice things that FastMail does is it allows you to create a bunch of pointers.                     |
| 40:52      | Like if you send an email to desk at MacSparky, it comes to me. Whereas if you send a, you                |
| 40:58      | know, there's different emails that go to different people. So I have three people with                    |
| 41:03      | email accounts, but there's a whole bunch of different other ones. Like if you want                        |
| 41:06      | to send a gift of a field guide, there's a special thing we have to do, but that goes                      |
| 41:10      | straight to my virtual assistant who can handle that without me, you know, slowing it down.                |
| 41:15      | And so if you go to gift at MacSparky.com, that goes to her. And so everything that set                   |
| 41:21      | up was quick and painless and we already described how to switch a DNS. But what I wanted to               |
| 41:27      | talk about today is rules and, you know, FastMail is an IMAP. I mean, it's really what                    |
| 41:35      | they call JMAP, but it's IMAP in essence for the sake of a user. So it's a traditional,                    |
| 41:42      | you know, mail hosting service, but they have a very powerful set of rules and filters that                |
| 41:47      | you can apply.                                                                                             |
| 41:48      | Yeah. Yeah. I've been looking at their documentation because I think FastMail is next for me after        |
| 41:53      | iCloud. I'll probably leave it another couple of weeks just so that I can say I've given                   |
| 41:57      | it a full month, but iCloud is not keeping me, especially just because of what you literally               |
| 42:03      | just mentioned there, David. The fact that you've got three different people on your                       |
| 42:06      | domain, if they're not part of your iCloud family, you can't do that. And do you really                    |
| 42:10      | want your assistant and your editor as part of your iCloud family? You already have two                    |
| 42:13      | children and a wife. So you actually can't. You can only have five people in an [[Apple]]                      |
| 42:18      | family.                                                                                                    |
| 42:19      | You're like, sorry, honey, you got to go. JF's coming in.                                                  |
| 42:21      | Yeah, exactly. You know, and I'm sure JF would appreciate, you know, the free app downloads                |
| 42:26      | going on your credit card. But, you know, it's not a great solution for that. It is very                   |
| 42:32      | much intended for a family-based domain, whereas FastMail and Gmail, for that matter, are much            |
| 42:39      | more suited to family domains and business domains. Yeah.                                                  |
| 42:43      | So you can use it for whatever you like. And FastMail is $5 per user per month if you                     |
| 42:49      | want to use your own domain name and have 30 gigabytes of storage. Or if you just want                     |
| 42:54      | to try it out and you want to use at fastmail.com as your email, then you can pay $3 per person            |
| 43:02      | per month. But I mean, I'll be going for the $5 option because I want to keep my domain                    |
| 43:07      | name. Yeah. So once you log in to FastMail on their                                                        |
| 43:10      | website, they've got a section in the setting called filters and rules. And it's exactly                   |
| 43:16      | what it sounds like. They've got block sender filters. So you can add anybody you want,                    |
| 43:22      | where if an email comes from that person, it goes straight to the trash. They've got                       |
| 43:27      | spam protection, which seems adequate. I've been using it. I don't know if I need to go                    |
| 43:31      | back into maybe looking at spam sieve again. But I'm kind of still in the, I'm still getting               |
| 43:38      | some spam. But you know, the thing I were always worried about with spam filters is                        |
| 43:42      | the way teachable my platform for my courses sends email to me sometimes it gets flagged                   |
| 43:49      | to spam. And it's actually customer question. And I have to have a very much a zero tolerance              |
| 43:54      | policy on that. I have to read more spam. I'd rather read more spam than have anybody                      |
| 44:00      | send me a customer question that doesn't get to me. So I'm still kind of sorting that out.                 |
| 44:05      | But they've got a bunch of that stuff built in. But the thing that we're talking about                     |
| 44:08      | today are rules. And they've got a lot of triggers and a lot of action. So just to give                    |
| 44:14      | you a list, it can look at the front field, the two carbon copy or blind copy fields as                    |
| 44:22      | triggers, it can look at the subject line, it can look at the body, it can look at anywhere.               |
| 44:28      | It also has an address book function. So you can have an address book stored in your                       |
| 44:34      | FastMail account, which will sync over to contacts database on your Mac. And that's                       |
| 44:39      | just a separate contacts database is like you have iCloud, you would have your fast                        |
| 44:43      | mail contacts too. But with FastMail, once you start adding contacts to that database,                    |
| 44:48      | that becomes a filter for a trigger. So I could say, if it comes from a client, and                        |
| 44:54      | I just have a database in my FastMail contacts of clients, then do special things because                 |
| 45:02      | it's from a client as opposed to someone who's not a client or a customer or, you know, my                 |
| 45:07      | friend or family has the ability to set groups of clients. So you can also filter on groups,               |
| 45:16      | you can filter on the VIP status, or even if the message has a priority, like if it's                      |
| 45:21      | high priority, you can filter on whether the message has an attachment or does not have                    |
| 45:26      | an attachment, you can filter on the attachment name. So if you're just looking for, you                   |
| 45:33      | know, you know, death ray plans, you know, attachment, it once that message comes in                       |
| 45:38      | with a dot attachment called death ray plans, it's going to let you know or do actions on                  |
| 45:43      | that, you can filter on size. And then it starts really getting nerdy with mailing list                    |
| 45:49      | ID and header. So you can get into the real nuts and bolts of the email stuff that normally                |
| 45:56      | you wouldn't even see and start filtering on that. So the trigger list is plentiful.                       |
| 46:04      | And it is you have the ability to bully and link them so you can have multiple conditions.                 |
| 46:10      | So, you know, from Rosemary and automators and the subject line is absolutely doable.                      |
| 46:16      | Yes, yes. And I really like this as well. I didn't realise about the databases, David,                     |
| 46:21      | you've sold me, which is, you know, just one of those things. But I'm really glad that                     |
| 46:27      | this exists. This has reminded me of something else actually, sometimes having your contacts               |
| 46:32      | be synced with the same service as your email host can be very advantageous. So for something              |
| 46:38      | like this, that can definitely be helpful, where you've got, you know, these databases                     |
| 46:43      | and essentially, I presume it's a group of contacts, your clients. But if you're using                     |
| 46:50      | iCloud to sync your contacts, you might not want to switch away from that. I have previously               |
| 46:57      | used apps and services that would sync my contacts between multiple systems. When I                        |
| 47:02      | was at university, I was frequently needing access to my contact information on a computer                 |
| 47:12      | where I didn't want to log into iCloud. But I could log into my email. That was one of                     |
| 47:18      | the allowed domains. I think iCloud wasn't even allowed, actually. And so I synced using                   |
| 47:25      | one of these apps. I don't even remember which one it was, the contacts over to Gmail. I                   |
| 47:32      | think they're actually still in that Gmail account as well. So that's a little sort of,                    |
| 47:36      | what is it, not time machine archive? Like, well, those things that you bury in the garden                 |
| 47:44      | of some of my contacts from, you know, when I was at university. But yeah, oh, wow, that                   |
| 47:49      | database. Okay, David, you sold me on FastMail.                                                            |
| 47:52      | Well, the way I would use that is because you can enable or disable it in contacts on                      |
| 47:57      | your Mac. And I would probably, I haven't got that far down the rabbit hole yet, but                       |
| 48:02      | ultimately, I think I would just enable it and duplicate stuff from my iCloud contacts.                    |
| 48:08      | I would still use iCloud as my primary contacts database, and then probably just turn it off               |
| 48:13      | on my Mac. So I don't even see it, but I just have that data in the background. So when                    |
| 48:17      | it's running these rules, it has something to compare it to. And I think that would be                     |
| 48:21      | cool. And another thing you can do, and all of these are previewed. So we talked about                     |
| 48:25      | really about how Gmail is the feature. Once you set up all the conditions for your rule,                   |
| 48:29      | your trigger, it says, okay, in your database, this is all the emails that hit that. So you                |
| 48:34      | know, like, if you have a problem, like, I have one in the show notes, I was, I shared                     |
| 48:39      | with you, Rose, and it's a, it's a rule for me to take customer support emails from Teachable.             |
| 48:47      | It's the exact problem I was talking about earlier where I'm worried about things getting                  |
| 48:50      | lost in spam. And if you look at the Teachable sends me a very specific email, but unfortunately,          |
| 48:57      | the subject line doesn't say from Teachable customer question or something like that,                      |
| 49:01      | which I kind of wish they did because it would make it a lot easier to filter it. But what                 |
| 49:06      | they do say is the body of the message always says, you know, some person's name has a question            |
| 49:14      | for you, which is a pretty unique phrase. I'm not going to hear very often. And then                       |
| 49:19      | the body also always at the bottom has a copyright Max Barkley field guides because it's part              |
| 49:24      | of my my site. Yeah. So I use those two. And I have a conditional rule that says if the                    |
| 49:30      | body has, you know, has a question for you and Max Barkley field guide copyright, then                     |
| 49:36      | it's going to run. But then when I tested this rule that I actually put in the show                        |
| 49:39      | notes, it gave me way more mail than I expected. And I realised, ah, it's looking for individual           |
| 49:46      | words in the body. So any email that has the word has or a or question or four or you in                   |
| 49:53      | it, you know, is going to hit that condition. And so I just put them in quotes. And then                   |
| 49:58      | as soon as I did that, then it filtered right down phrase. Exactly. So it filtered right                   |
| 50:04      | down for it for me. Another thing you can do with FastMail, I sound like a FastMail                      |
| 50:10      | sales guy now, but the you can also use regular expressions in these rules. So you can actually            |
| 50:16      | run a regular expression to filter. The only difference is if you run a regular expression,                |
| 50:21      | you don't get the preview to see if it whatever where it applies. I don't know why that is,                |
| 50:26      | but there's some technical reason they can't preview it for you. So the trigger portion                    |
| 50:32      | of FastMail is good. I mean, it's like a Goldilocks moment for me. Maybe it's not as                      |
| 50:38      | good as Gmail. Maybe you can make the argument is better than Gmail because you get regular                |
| 50:42      | expressions. I don't know. But but the bed is not too soft. Like, you know, iCloud where                   |
| 50:49      | there's no rules are too hard, like, you know, Google where there's everything with the Google             |
| 50:54      | trade offs, but it's just right, you know, you've got a server that you control a service                  |
| 51:00      | that is not an advertising based service. And you've got a very good set of rules. Then                    |
| 51:05      | once you choose the trigger, you know, that's the second half of the equation, you've got                  |
| 51:11      | the trigger, then you've got the actions you can perform on the rules. And the actions                     |
| 51:15      | it has are all the ones that I really want. Like, you can mark it as read, you can pin                     |
| 51:21      | it, you can send a notification to yourself, you can move it to a specified mailbox, you                   |
| 51:28      | can snooze it till specified time or day, you can send a copy to another person, you                       |
| 51:34      | can delete it to trash, you can send it to spam. And there's other rules. I mean, it's                     |
| 51:40      | just, there's a lot more to it, you can apply it to other rules that you have, or you can                  |
| 51:48      | even give it a name. I'm actually not fully down the stack of things I can do with these                   |
| 51:53      | yet because I'm still figuring out where they fit. But to give you an example, the one I                   |
| 51:57      | just talked about saying, if it has the magic incantations in it within quotes that tells                  |
| 52:04      | me it's from teachable customer support, what I'm doing is first of all, I have a folder                   |
| 52:10      | called customer support. That's the folder I try to empty every day before I go to bed.                    |
| 52:14      | That's like number one, you know. And so it automatically puts it in there. I don't have                   |
| 52:19      | to filter it into there. The second thing it does is it sends a copy to my virtual assistant.              |
| 52:24      | So she gets it too. Because one of the bottlenecks was those, these emails would come to me.               |
| 52:29      | But if I was off like working on a field guide and I had myself on do not disturb all day,                 |
| 52:34      | I didn't see the email till maybe 12 or 24 hours after it was sent. So if it was something                 |
| 52:40      | I was going to have my assistant work on, she didn't get it until I got to it and sent                     |
| 52:44      | it to her. Well, with this new system, she gets them immediately. And you know, she can                    |
| 52:50      | handle it before I even know it happened with this, with this online rule. So I'm excited                  |
| 52:56      | about this. I feel like I feel dumb for not like looking further into online based rules                   |
| 53:02      | sooner. But I was just had that momentum at the old service where I just didn't want                       |
| 53:06      | to spend the time to do it.                                                                                |
| 53:08      | Yes. One of the things that I'm seeing here in your screenshot, which I think is a very                    |
| 53:13      | important feature to talk about is you can tell it to continue to apply other rules.                       |
| 53:20      | And you can't do this if you're moving a message. But say for example, you get some, you get               |
| 53:27      | various kinds of emails, for example, from Teachable, and you want to automatically archive                |
| 53:32      | these using some online system. So you potentially forward it off to something like Zapier, which          |
| 53:38      | can then deal with a whole bunch of automations for you. Well, you can then just say, okay,                |
| 53:44      | that's it. And then create a new rule, which will then do smaller sections of, so just                     |
| 53:49      | for example, the customer support, things will go here and then receipts will all go                       |
| 53:54      | here because that's for my accountant and that needs to go here. And then you can split                    |
| 53:57      | stuff out, which allows you to say, have like big overarching rules and then also smaller                  |
| 54:05      | fine grained ones, which do sort of the final action.                                                      |
| 54:08      | Yeah, so you can chain them together.                                                                      |
| 54:10      | Yeah.                                                                                                      |
| 54:11      | Yeah. And I also love the fact that snooze is an action because there are genuinely                        |
| 54:16      | some emails that when I get them, I don't want to know about them until Saturday or Sunday.                |
| 54:22      | Zap.com ones usually are the case. They'll send me a whole bunch of email throughout                       |
| 54:26      | the week. And generally, I do want this as email. I don't like their app so bad, but                       |
| 54:31      | I love the fact that people use Meetup. And it's potentially a thing that's doable now.                    |
| 54:36      | But I don't want to be dealing with them throughout my week because I am not going to change my            |
| 54:40      | week plans in the middle of the week. So the fact that I could snooze all emails from them                 |
| 54:45      | until, say, Friday evening would be amazing.                                                               |
| 54:50      | Yeah.                                                                                                      |
| 54:51      | And then like another one I'm working on right now is [[Apple]] Receipt. I bought a few [[Apple]]                  |
| 54:55      | products in the last few days and I'm going to create one that auto filters and files                      |
| 55:01      | those as they come in because that's an easy rule apply. They always come from the same                    |
| 55:05      | email address and they always have the same subject line. I get several newsletters and                    |
| 55:12      | I'm in the process of looking into that. But I think this will be very doable where I can                  |
| 55:16      | just like find a formula for the newsletters that I want to read, have them come in and                    |
| 55:22      | auto forward them to my Instapaper Magic Newsletter account and then Instapaper will format it.            |
| 55:28      | Done with this, David. I've got a very different solution to newsletters where I don't actually            |
| 55:34      | use my email for them. So there are some newsletters which only come through via email. If they            |
| 55:40      | can come through as an RSS feed, I use them via RSS with Feedbin. It's a service I'm using                 |
| 55:47      | and then I access that in NetNewsWire. But what I've done for a lot of other things is                    |
| 55:51      | I've subscribed to them using my Feedbin email address, which you get the initial email through            |
| 55:58      | that you have to confirm that comes through like it's an RSS entry into Feedbin. You click                 |
| 56:03      | OK and then the other emails start to come through and each email address comes through                    |
| 56:11      | as a feed source, just like it would from a different URL, which means that everything                     |
| 56:17      | lands in the same thing. So I don't even get those into my email. That's how I've solved                   |
| 56:21      | that problem. And I've put a link to the email newsletters in Feedbin blog post that                       |
| 56:26      | they were in 2016. It still works exactly the same way nowadays in the show notes as                       |
| 56:32      | well, because that's how I've solved that problem. And then various things I can share                     |
| 56:37      | it from NetNewsWire to Instapaper. But I think you could probably just sign up using                      |
| 56:41      | your Instapaper email address with those. That's how I would solve it.                                     |
| 56:45      | Yeah. And there's a lot of ways to scratch that itch. But this is a way. And since I've                    |
| 56:50      | got an Instapaper account with a special email, I can send things to an automatically                      |
| 56:55      | format or I can do that. I could also send it to a newsletter folder and snooze it until                   |
| 57:01      | Saturday and just read them all on Saturday. I mean, there's a lot of ways you could do                    |
| 57:05      | that. But this is a, I think this is a good example of an online based automation workflow.                |
| 57:11      | Yes. And I have to say, there's a lot of benefits that come with this. You can do a lot of things,         |
| 57:19      | for example, in macOS mail, which we'll get to hopefully at the end of the show. But that                  |
| 57:24      | is all after it's been received by a machine. Dealing with the stuff as it comes in is                     |
| 57:29      | considerably better just because it never lands on your plate if it doesn't need to.                       |
| 57:36      | And especially with the case of those questions coming in about your field guides, you get                 |
| 57:42      | to the folder when you have a moment. It doesn't actively interrupt your day, but then you                 |
| 57:47      | can process them all. But also, you'll know if they've been processed because your system                  |
| 57:51      | will have dealt with them and you'll see that. And I like that. So, yes.                                   |
| 57:58      | So are you sold? Are you going to be switching the FastMail next?                                         |
| 58:01      | You sold me pretty quickly, David. I was pretty much already leaning towards FastMail anyway.             |
| 58:08      | And friend of the show, TJ Luoma, who we've had on before, sent an email to both of us                     |
| 58:15      | recently telling us about FastMate, which is a macOS mail client for FastMail. And it's                   |
| 58:23      | got user scripts, which are [[JavaScript]] files. [[JavaScript]] has advantages and disadvantages,                 |
| 58:29      | but it's the same language you can use to create OmniFocus automations or OmniGraffle,                     |
| 58:33      | OmniPlan, Omni-Outliner. You can use it in [[Drafts]], Scriptable. And yeah, apparently                        |
| 58:40      | FastMail as well. So I guess I've got a project on my hands because that seems pretty cool.               |
| 58:47      | Yeah. Another thing about FastMail, I swear I'm not like a salesman for FastMail. But                    |
| 58:52      | they just added an integration with 1Password, where when you set up a new password for a               |
| 58:58      | new website, 1Password can generate a random email for you for that website. And FastMail              |
| 59:06      | will create it on the backend and support it if you've got your mail hosted at FastMail.                  |
| 59:10      | So it's very convenient for one-time email addresses. So not only do you have a one-time                   |
| 59:17      | password at every website, you also have a one-time email address, which solves a bunch of problems        |
| 59:21      | that Rose was talking about earlier.                                                                       |
| 59:23      | Mm-hmm. Yeah. I have to say that was something else that was on my radar as an advantage.                  |
| 59:30      | And yeah, yeah. Just darn it, David. I'm going to have to do some more work. But the good                  |
| 59:36      | news is it really won't actually be a lot of work. The probably biggest thing will be                      |
| 59:42      | moving all of my email again, which is pretty much a hands-off. And in fact, it is best                    |
| 59:46      | done as a hands-off thing. And then changing mail on a couple of machines to point to something            |
| 59:52      | else or possibly installing the FastMail and fast-mate applications. Because why not                      |
| 59:58      | try those out as well? I'm currently using mail on everything. And there are advantages                    |
| 01:00:02   | and disadvantages. I miss custom swipe actions. So I'm going to have to solve that problem                 |
| 01:00:08   | soon.                                                                                                      |
| 01:00:09   | I'll tell you one thing that I was hoping FastMail would solve for me was consistent                      |
| 01:00:14   | flag status. [[Apple Mail]], I cannot get [[Apple Mail]] to give me consistent flag status. Like,                  |
| 01:00:21   | on the Mac, it's fine. Anything I flag on the Mac gets flagged. On one Mac, it's flagged                   |
| 01:00:26   | on the other Mac. Right now, I only own one Mac. But when I have two, it's very consistent.                |
| 01:00:32   | But I do not get consistent flagging between iOS devices and the Mac. And it's like I'll                   |
| 01:00:38   | flag a mail on the iPhone and then it won't be flagged on the Mac or I'll flag a mail                      |
| 01:00:42   | on the Mac and it won't be flagged on the iPhone. And that has to be 100% reliable in                      |
| 01:00:47   | order to use it. Because rather than having triage folders for mail, rather than having                    |
| 01:00:53   | a customer service folder for mail, it'd be better to have a red flag and say, get rid                     |
| 01:00:58   | of all the red flags. Those are the customer service. But if I can't rely on it. And I                     |
| 01:01:03   | was hoping maybe it was a hover problem or I should just FastMail it and fix it. But                      |
| 01:01:07   | it's not. I think it's a software problem.                                                                 |
| 01:01:10   | Yeah. I mean, I have to say that is the one thing that is working with iCloud domain                       |
| 01:01:14   | email. But I also don't use it because no other system supports it.                                        |
| 01:01:21   | Yeah, that's true.                                                                                         |
| 01:01:22   | And so, yeah, it's basically not worth it for me. And also, as much as I love purple                       |
| 01:01:28   | flags, they're not appropriate for a lot of things. So, yeah, I've been trying different                   |
| 01:01:33   | approaches for that.                                                                                       |
| 01:01:34   | Well, either way, I am super excited and I'm going to be able to make even more online                     |
| 01:01:38   | rules. I still use some other services like SaneBox and I still use local rules on the                     |
| 01:01:43   | Mac. So it's going to be fun for me to decide where the lines are drawn and what stuff happens             |
| 01:01:50   | at the server level, what stuff happens at the SaneBox level, what stuff happens at the                    |
| 01:01:53   | local Mac level.                                                                                           |
| 01:01:54   | Yeah.                                                                                                      |
| 01:01:55   | But a lot of the stuff, frankly, on my Mac that are in the Mac rules are going to get                      |
| 01:02:00   | pushed up to the cloud because that way I don't need to have mail running on a Mac in                      |
| 01:02:04   | order to get these benefits.                                                                               |
| 01:02:06   | Yes. And I think that is the thing. If you've got an always on Mac, it's not as bad, but                   |
| 01:02:13   | I haven't always on Mac. And even though I haven't always on Mac, it's not perfect.                        |
| 01:02:19   | It will still take time before it gets all the email. And yeah, there are advantages                       |
| 01:02:25   | and disadvantages to it.                                                                                   |
| 01:02:27   | So, yeah.                                                                                                  |
| 01:02:30   | This episode of The Automators is brought to you by Hunter Douglas. Take advantage of                      |
| 01:02:34   | Hunter Douglas's season of style rebate savings event until December 6, 2021. Just go to hunterdouglas.com |
| 01:02:43   |/automators.                                                                                          |
| 01:02:45   | With Hunter Douglas's range of innovative window shade designs, you'll be able to outfit                   |
| 01:02:50   | your home with fantastic fabrics and advanced control systems, helping your home become                    |
| 01:02:55   | more comfortable, stylish and relaxing any time of day. Hunter Douglas's shades diffuse                    |
| 01:03:01   | harsh sunlight and instead cast a beautiful glow across the room. With their adaptability,                 |
| 01:03:07   | you can enjoy the view outside a window without needing to give up your privacy. You'll benefit            |
| 01:03:12   | from better insulation at home, keeping you warmer in winter, cooler in summer, all the                    |
| 01:03:18   | while lowering your energy bills. And you can bring this all together with Hunter Douglas's                |
| 01:03:23   | power of view technology.                                                                                  |
| 01:03:26   | This ensures that your shades will automatically adjust themselves to give you the perfect                 |
| 01:03:30   | balance of light, privacy and insulation any time of day.                                                  |
| 01:03:35   | That's right. Hunter Douglas gets it. They make shades, but they also adapt and embrace                    |
| 01:03:40   | technology. Hunter Douglas shades are compatible with all your favourite home automation systems,           |
| 01:03:45   | whether it's Amazon Alexa, [[HomeKit\|Apple HomeKit]], which is what I use, Google Assistant, [[IFTTT]]                     |
| 01:03:52   | and more. I know that listeners of this show would really love to be able to automate this                 |
| 01:03:56   | stuff themselves too, helping them integrate their shades with their other products in                     |
| 01:04:00   | their home. And you can get that control with Hunter Douglas.                                              |
| 01:04:04   | So you can live beautifully with Hunter Douglas enjoying greater convenience, enhanced style               |
| 01:04:09   | and increased comfort in your homes throughout the day, all the while embracing that technology            |
| 01:04:14   | and becoming an automator with your shades. So go to hunterdouglas.com/automators                    |
| 01:04:20   | today to take advantage of their season of style rebate savings event. That's hunterdouglas.com            |
| 01:04:27   |/automators for limited time savings. This offer expires December 6, 2021. And our                    |
| 01:04:34   | thanks to Hunter Douglas for the support of the automators and all of relay FM.                            |
| 01:04:40   | So David, I've been teasing [[Make\|Integromat]] for a while. Am I allowed to talk about it yet?                     |
| 01:04:44   | Yes. Let's hear about [[Make\|Integromat]]. Okay. So what I have been doing is using an                              |
| 01:04:50   | online service called [[Make\|Integromat]] as email filtering or somewhat for email filtering.                       |
| 01:04:57   | I'm not using it just for email filtering. But [[Make\|Integromat]] is somewhat similar to Zapier.                   |
| 01:05:02   | Only it's got a more graphical user interface with branching and stuff available on the                    |
| 01:05:07   | lower tiers. And it's a bit cheaper as well. So have a look at it and see if it can work                   |
| 01:05:12   | for you. But there are two integrations that you can use with your email. There's either                   |
| 01:05:17   | a Gmail integration, which uses Google's API, or there's an IMAP integration, which                        |
| 01:05:23   | just like mail on your Mac or [[Airmail]], [[Spark]], whatever will connect to your email via [[IMAP]],                |
| 01:05:30   | which is a standard series of rules, and read your email. Now, I should point out that just                |
| 01:05:39   | like mail on a Mac, this is not perfect. It is not instant because it does not get those                   |
| 01:05:44   | pushes that I was talking about. It is running a fetch. So [[Make\|Integromat]], for me, is running                  |
| 01:05:48   | every 15 minutes. And it's looking for email in my inbox and then doing stuff based on                     |
| 01:05:57   | that. Now, I've actually got multiple rules set up, and each of those is just looking                      |
| 01:06:02   | for email with specific criteria. So part of the thing with this is I didn't necessarily                   |
| 01:06:10   | set it up particularly well because I was somewhat in panic mode after realising, oh                       |
| 01:06:14   | my God, [[Gmail]] filters for doing so many things for me at night, forgotten all about it. So                 |
| 01:06:20   | some of it is kind of handled through iCloud and some of it's handled through [[Make\|Integromat]],                  |
| 01:06:24   | which means that sometimes iCloud puts it in a folder and sometimes [[Make\|Integromat]] is the                      |
| 01:06:29   | one that puts it in a folder. Because as well as reading your email, it can do stuff with                  |
| 01:06:34   | your email. So obviously, it can send an email and create a draft for you. The draft feature               |
| 01:06:39   | is actually very useful for things. So there's certain people that I'm talking to at the                   |
| 01:06:45   | moment, whenever I get an email from them, I automatically want it to create a draft                       |
| 01:06:48   | and chuck some information in there. But I don't want it to send it. So I can then go                      |
| 01:06:53   | in and edit it manually. So it's really nice, especially in the mail app on iOS, you know,                 |
| 01:06:58   | you see those [[Drafts]] right at the bottom.                                                                  |
| 01:06:59   | Let me just know if there were a second. And so historically, these online services                        |
| 01:07:05   | have supported Gmail, but not IMAP. This is the first one I've heard that supports IMAP,                   |
| 01:07:10   | which gives you that option. Like if you own your own domain and you're not in Google,                     |
| 01:07:14   | you can suddenly put a cloud-based rule system in effect. And even as much as I like FastMail,             |
| 01:07:21   | it does not create an email for me or create a draft. That is kind of a unique function                    |
| 01:07:26   | to something like [[Make\|Integromat]].                                                                              |
| 01:07:28   | Yes. And I have to say, this is really nice. I did look at Zapier. And what you have to                    |
| 01:07:33   | do with Zapier is you have to forward emails to it. And it can send email from your custom                 |
| 01:07:41   | domain. Actually, I think it might actually support inbound email now. I will have to                      |
| 01:07:44   | have a look at that probably after the show and follow up in the future. But, you know,                    |
| 01:07:51   | what you can do with [[Make\|Integromat]] is have it, you know, read your email inbox and do things                  |
| 01:07:57   | with that. So yeah, as well as creating a draft and sending an email, which can be a                       |
| 01:08:01   | completely new email, not just forwarding things. It can also mark emails as read or                       |
| 01:08:08   | unread, move them into specific folders, copy them into specific folders, delete them, and                 |
| 01:08:15   | it can send you a personal email. And as well as this, it can iterate over your attachments.               |
| 01:08:21   | So if you get emails with lots of attachments and you need them all saved, I don't know,                   |
| 01:08:25   | say to [[Dropbox]] or something, that is something that you can do with [[Make\|Integromat]] and the IMAP                |
| 01:08:30   | integration, which is pretty handy. I actually now have a [[Dropbox]] folder called email attachments,         |
| 01:08:37   | where, you know, [[Make\|Integromat]] is just going, here's an attachment, stick in a folder, here's                 |
| 01:08:42   | an attachment, stick in folder.                                                                            |
| 01:08:43   | Yeah, same box does the same thing for me. It'll pull attachments out and put it on                        |
| 01:08:50   | your cloud storage.                                                                                        |
| 01:08:52   | Yeah, which is great. And I have to say, this is working surprisingly well, especially                     |
| 01:08:57   | when combined with other automations. So usually with email automation stuff with these third              |
| 01:09:03   | party services, they don't log into your account for you. Now, there are advantages and disadvantages      |
| 01:09:08   | to them logging into your account. There's the privacy aspect. Are they really just going                  |
| 01:09:12   | to look for what you've told them to look for? Are they potentially going to look for                      |
| 01:09:14   | other things as well? I decided that I was going to trust [[Make\|Integromat]] on this one. I                        |
| 01:09:19   | am paying them for this service. So, you know, they shouldn't have a reason to just go through             |
| 01:09:24   | my inbox. But you have to decide, obviously, especially if, for example, you work in the                   |
| 01:09:31   | medical field, this is probably not an OK solution for your work email. But, you know,                     |
| 01:09:37   | that sort of thing, you know, aside, this works very well, because I can just say look                     |
| 01:09:42   | for these emails and then do this stuff. And it can either just do email things or it can                  |
| 01:09:47   | connect to other things. And the connecting to other things as well, of course, for me,                    |
| 01:09:51   | is where it really shines. So, any email that I get that's about iOS today can just get parsed             |
| 01:09:58   | and it gets put into an air table. Of course, it's an air table so that we've got all the                  |
| 01:10:03   | feedback for the show in one place. And then it marks the email as read and deletes it                     |
| 01:10:09   | because it's dealt with it. So, I don't need to see that anymore. And that is great. I                     |
| 01:10:14   | love that so much. So, yeah, I'm really pleased about how this works. As I said, it's not                  |
| 01:10:21   | perfect because it's polling on a regular interval, sort of every 15 minutes or so,                        |
| 01:10:25   | which means it's not super fast. But at the same time, for anything that I don't want                      |
| 01:10:32   | in my inbox at all, I am having iCloud put that in a folder and then [[Make\|Integromat]] is watching                |
| 01:10:38   | for email in a specific folder, rather than watching for email in my inbox. And for things                 |
| 01:10:43   | I don't mind landing in my inbox, it lands in my inbox and then [[Make\|Integromat]] will grab                       |
| 01:10:48   | it and deal with it at some point. And it works. And I can also say, hey, if this is                       |
| 01:10:54   | in this inbox, in this folder, and it's unread when it looks for things. So, for example,                  |
| 01:11:00   | your customer support queries there, David, you could say, look for everything in this                     |
| 01:11:04   | folder that is unread and then send it to my assistant. But if it's already been marked                    |
| 01:11:09   | as read, don't send it to my assistant. Of course, you don't need to do that because                       |
| 01:11:12   | FastMail is sending it to your assistant as soon as you get it. But, you know, with iCloud,                |
| 01:11:18   | you have one action, full stop.                                                                            |
| 01:11:20   | Yeah, exactly.                                                                                             |
| 01:11:21   | So, I had to pick the folder. But you can specify only unread emails, only read emails,                    |
| 01:11:29   | all emails, which means that [[Make\|Integromat]] actually can run on emails that you have read. So,                 |
| 01:11:36   | for example, if you get [[Amazon]] dispatch notifications when you buy things from [[Amazon]], and you like        |
| 01:11:40   | getting them, but you always forget to delete them from your inbox, you know, because something            |
| 01:11:45   | happens, you know, as you're reading your email. Oh, yeah, I need to reply to, you know,                   |
| 01:11:48   | this person whose message just came in.                                                                    |
| 01:11:52   | What you can do is you can tell [[Make\|Integromat]] to look for things from this particular sender                  |
| 01:11:56   | to this particular recipient with this subject or containing this phrase anywhere, and whether             |
| 01:12:03   | or not it should mark it as read when it fetches it. And then you can say, all emails, only                |
| 01:12:09   | read emails, or only unread emails. And so, it can get rid of all of those read dispatch                   |
| 01:12:14   | notifications in your inbox. So, I am pretty darn happy about that, I have to say.                         |
| 01:12:21   | Yeah, and I could really see you combining this with your upcoming FastMail account,                       |
| 01:12:25   | where you could automate FastMail rules to send it to the [[Make\|Integromat]] folder, and then,                     |
| 01:12:31   | you know, like, things really start happening.                                                             |
| 01:12:33   | Yes. Yeah, and this is similar to what I do on [[Dropbox]] as well, actually, David. I have                    |
| 01:12:36   | a folder inside of [[Dropbox]] called automated actions. Yeah. And, you know, it sounds silly,                 |
| 01:12:44   | you know, automated actions, fine. Why? And I've got a bunch of subfolders in there. And                   |
| 01:12:49   | then stuff happens in those subfolders based on, you know, which it is. So, some of it's                   |
| 01:12:55   | handled through Zapier, some of it's handled through [[Hazel]], some of it's handled through                   |
| 01:12:59   | [[Make\|Integromat]] and so on. But I know, if I'm looking to automate something that lands in                       |
| 01:13:03   | my [[Dropbox]], I stick it in the automated actions folder, and then the magic will happen. And                |
| 01:13:07   | it often then doesn't live in there forever. But it gets dealt with and processed at some                  |
| 01:13:12   | point, and that is really nice. So, I'm very appreciative of that.                                         |
| 01:13:17   | Yeah. Today's show is going to be about online rule systems, because we've gone long. But                  |
| 01:13:25   | someday, we're going to come back to local mail rules, because I've written a bunch of                     |
| 01:13:29   | [[AppleScript\|AppleScripts]]. And there's a lot of stuff you can do with [[Apple Mail]]. It's pretty powerful.                |
| 01:13:34   | But I want to put a pin in that. But one last cloud service I've mentioned a few times today               |
| 01:13:39   | is SaneBox. And where for me, FastMail is the very deliberate online rule system where                     |
| 01:13:47   | I set specific conditions and have things happen. SaneBox is a service I pay for. And                      |
| 01:13:52   | as a full disclosure, they have sponsored the Mac Power users in the past. I don't think                   |
| 01:13:56   | they've ever sponsored this show. But I've met some of the gang at SaneBox, and I actually                 |
| 01:14:02   | kind of looked into it when I first signed up, because I didn't want to just sign up                       |
| 01:14:05   | for anybody. But anyway, they have a cloud-based rule system that's kind of like going to look             |
| 01:14:13   | at your IMAP addresses, subject lines, and response times. And it looks at like, how                       |
| 01:14:21   | fast do you respond to Rosemary versus how fast do you respond to [[Stephen Hackett\|Stephen]] or whatever?                     |
| 01:14:26   | And it's going to use those pieces of data to try and figure out how important mail is                     |
| 01:14:31   | to you. It also is going to figure out mail that comes from newsletters or comes from                      |
| 01:14:38   | REI or something like a store. And it creates a set of folders, or you create a set of folders             |
| 01:14:46   | when you set it up, where it has a folder called later. So your inbox actually gets                        |
| 01:14:52   | the stuff that really it thinks you want to see right away, but stuff that can wait until                  |
| 01:14:56   | later, like the REI email or something can wait until later. But you can also have ones                    |
| 01:15:00   | for newsletters or for solicitations or whatever you want. And it's like having a little robot             |
| 01:15:09   | look through your inbox and say, this one goes here, that one goes there. And then if                      |
| 01:15:13   | you move the email, like if an email got landed in one and you think it should have gone the               |
| 01:15:17   | other one, you move it there, it observes that and learns from that and just kind of slowly                |
| 01:15:22   | gets better. But my experience was it was very good from the beginning. And I've been using                |
| 01:15:26   | it now like five years and it's like spooky good. So that's one thing same box does. It's                  |
| 01:15:31   | an online rule system where you don't create the rules. You can however create custom folders              |
| 01:15:37   | as well and custom rules in their service. So you can have it do some of the stuff that                    |
| 01:15:41   | I'm doing through FastMail. It also has a whole snooze system built in so you can like                     |
| 01:15:47   | save it to a folder that will automatically snooze the email. And then it's got this one                   |
| 01:15:53   | feature that I have never been able to replicate anywhere else and I use like three or four                |
| 01:15:58   | times a day. And it's where you can have it's what they call email reminders where if I                    |
| 01:16:05   | send an email to Rose and I always do is that the blind copy, but you could do it in a carbon              |
| 01:16:09   | copy too, but it'll say one week at sanebox.com. And maybe like Rose and I are talking about               |
| 01:16:15   | you know, new t-shirts for the show or something. And if I send her an email that blind copy               |
| 01:16:20   | to oneweekatsanebox.com and she doesn't reply in a week, same box says, hey, you sent that                 |
| 01:16:26   | email to Rose, she never replied. And then I can snooze it further and say, well, let's                    |
| 01:16:31   | give her another couple of days or I can write her a note or whatever. And the workflow I                  |
| 01:16:37   | used to have for keeping track of emails I sent out into the world where I needed information              |
| 01:16:43   | was super complicated. Well, it wasn't that complicated. I'd add them to OmniFocus and                     |
| 01:16:48   | track them there. But that's like a level of work that is more intense than just, you                      |
| 01:16:55   | know, using a TextExpander snippet to type oneweekatsanebox.com, you know, I just                       |
| 01:17:00   | type onews and it's done, you know, and one week is the one I almost always use, but I                     |
| 01:17:07   | could also use, you know, Tuesday or two days or one month or whatever, same box can figure                |
| 01:17:12   | it out. And then it follows up with me and I love that. Honestly, I think I would pay                      |
| 01:17:18   | for same box for that feature alone. Yes. But it also has the thing where you can save                     |
| 01:17:23   | things to [[Dropbox]] and you can have [[Hazel]] working and looking at that [[Dropbox]] folder and there's            |
| 01:17:27   | a bunch of other stuff you can do. But that is another kind of form of online rule setting                 |
| 01:17:31   | that I do. Yes. That is something that I struggle with sometimes. I recently had an issue where            |
| 01:17:39   | I followed up with my doctors requested via email to their assistant to say, yep, you                      |
| 01:17:44   | know, I need this thing issued, you know, I've been trying this for a couple of days.                      |
| 01:17:49   | We're good. Like, can you issue me a full prescription for this? And apparently it landed                  |
| 01:17:54   | in junk mail. I'm still not actually convinced of that because I previously exchanged emails               |
| 01:17:58   | with the assistant and everything was fine. But apparently it landed in junk, which by                     |
| 01:18:02   | the way, is a great rule that you can create hopefully in anything that will say don't ever                |
| 01:18:07   | send this spam. I have used that one fairly frequently in the past, which is good. But                     |
| 01:18:12   | yeah, I would like that feature with that. And the fact that it does just happen inside                    |
| 01:18:18   | of the email is great. Especially, I could imagine combining that with Airmail custom                      |
| 01:18:25   | actions. So you could create a custom action to reply and probably insert that into insert                 |
| 01:18:33   | the right thing into the BCC field. So that then, you know, you've got a custom action                     |
| 01:18:38   | for reply and one week reminder reply and two day reminder reply and Monday reminder.                      |
| 01:18:45   | You know, stuff like that, which, you know, is quite useful. I do just have a quick piece                  |
| 01:18:49   | of real time follow up. Zapier does also have IMAP support. And I've put a link to that                    |
| 01:18:54   | in the show notes. The only thing I will say about this is it can trigger on all new incoming              |
| 01:18:59   | email or at least that's what it looks like to me. And so that is potentially depending                    |
| 01:19:06   | on your email setup going to generate an awful lot of actions. And with Zapier, you do have                |
| 01:19:10   | to watch out for your action limit, as well as, you know, the number of executions. So                     |
| 01:19:16   | even if you immediately filter things after that, that's still going to be two actions                     |
| 01:19:20   | that it uses for every single email you receive that falls into that.                                      |
| 01:19:24   | Yeah, it's a I had looked into Zapier a while ago. And I don't remember the specific reason,               |
| 01:19:31   | but I felt like it wasn't going to really do what I needed for IMAP. But if I had been                     |
| 01:19:35   | a Gmail user, it would have been really powerful.                                                          |
| 01:19:37   | Yeah, yeah, Gmail actually has an API, which is why a lot of these services can integrate                  |
| 01:19:41   | with it so easily, because you can use the Google authentication for it as well instead                    |
| 01:19:46   | of me having to input the details of the IMAP server and everything, which can vary depending              |
| 01:19:52   | on what service you're using. And potentially, you know, app specific passwords, if you can                |
| 01:19:57   | use app specific passwords for these things, by the way, though, I would highly recommend                  |
| 01:20:01   | it. Because this way, you know, if you decide, actually, I don't want integral map reading                 |
| 01:20:04   | my email anymore, you can just log in to, you know, whatever service it is you're using                    |
| 01:20:09   | and kill that password and an integral map will no longer have access.                                     |
| 01:20:12   | Yes.                                                                                                       |
| 01:20:13   | So, you know, that that is very useful if you can do that, which I have to say is an                       |
| 01:20:18   | advantage actually with iCloud. They do have, you know, these these specific passwords,                    |
| 01:20:22   | which is quite nice.                                                                                       |
| 01:20:23   | FastMail does the same thing, like you actually get a profile, a security profile on your Mac              |
| 01:20:29   | when you set it up. And I don't know, I am, this is obvious to anybody that's used FastMail,               |
| 01:20:37   | but I'm very impressed with the service. And I'm really looking forward to going deeper                    |
| 01:20:42   | down this rabbit hole. I think that I want to do show on it now, because I think it's                      |
| 01:20:47   | something that we haven't really given good coverage to in the past. But now that it's                     |
| 01:20:51   | like really on my radar, I feel like in six months, I'm going to really have this dialed                   |
| 01:20:56   | in. And I'm looking forward to kind of sharing that journey. And selfishly, I am super happy               |
| 01:21:02   | that I have tempted Rosemary Orchard to FastMail, because if Rosemary Orchard is working in                |
| 01:21:07   | FastMail, we're going to get all of us are going to benefit, you know, because she's                       |
| 01:21:11   | going to come up with some crazy rules that that we're all going to piggyback on. So I                     |
| 01:21:15   | see that coming.                                                                                           |
| 01:21:16   | All right, you do this to me. I'm guessing this is partial revenge for the fact that                       |
| 01:21:20   | during our recent home automation episode, it took you about three minutes after saying                    |
| 01:21:24   | put your wallet in the freezer to buy a robot vacuum, which was hilarious, I should point                  |
| 01:21:31   | out. And also, because this way we get to follow up in a couple of months and see what                     |
| 01:21:35   | I'm doing with FastMail and cover those local software based mail rules that we haven't                    |
| 01:21:39   | got to today.                                                                                              |
| 01:21:40   | Oh, and I want to report in on the robot mop. The there has been an armistice between my                   |
| 01:21:46   | dog and the robot mop. They are now comfortable with each other. She was fine with the robot               |
| 01:21:52   | vac because I was doing it from the time she was 10 weeks old till, you know, from the                     |
| 01:21:58   | day she arrived in our house to. So that's just been a fact of life. But for whatever                      |
| 01:22:02   | reason, the robot mop, which is smaller and quieter, was really getting under her skin.                    |
| 01:22:07   | But now she's okay with it. And the war has ended.                                                         |
| 01:22:11   | Good. I'm very glad to hear that.                                                                          |
| 01:22:15   | This episode of Automators is brought to you by the Intrazone. I love finding a new podcast                |
| 01:22:19   | to listen to. And I really love learning things while I listen as well. So finding something               |
| 01:22:23   | that's both interesting and fun to listen to is a great thing.                                             |
| 01:22:29   | If you're looking for a new show to listen to, the Intrazone is a bi-weekly podcast with                   |
| 01:22:32   | conversations and interviews hosted by the SharePoint team on how SharePoint OneDrive,                     |
| 01:22:37   | Teams, Viva and more can work for you. You'll hear from guest experts behind the scenes                    |
| 01:22:42   | and out in the field. So you can see how SharePoint and Microsoft 365 fit into your everyday               |
| 01:22:47   | work life and learn more about the flexibility when working with content, workflow, search                 |
| 01:22:53   | and more. Each show covers a bunch of segments like news and announcements, a focused topic                |
| 01:22:59   | of the week, guest perspectives from our product experts inside and outside Microsoft, and                 |
| 01:23:04   | upcoming events, conferences and workshops. And the topics for each show are really interesting.           |
| 01:23:10   | Previous episodes include content elaboration, Microsoft lists, knowledge management and                   |
| 01:23:16   | search. I particularly enjoyed learning about Microsoft lists. I have to say, it sounds                    |
| 01:23:21   | pouring for there's an awful lot to it. Go ahead and listen to it now. Just search for                     |
| 01:23:26   | the Intrazone wherever you get your podcasts. That's I-N-T-R-A-Z-O-N-E. Or just click the                  |
| 01:23:32   | link in the show notes. Go check it out. Our thanks to the Intrazone by Microsoft SharePoint               |
| 01:23:37   | for their support of this show and all of Relay FM.                                                        |
| 01:23:40   | All right, I want to talk about the new Max real quick with you because I don't know                       |
| 01:23:44   | where else you and I get to do this. But before we do, I have a quick automation I want to                 |
| 01:23:49   | share. Yeah, problem I've recently solved. And I got to be a hero with my wife with regard                 |
| 01:23:58   | to automation, which to me is always awesome. So I went to Disney World last month to do                   |
| 01:24:03   | that speaking gig. And we had those Disney bands and all they are is an NFC tech, you                      |
| 01:24:08   | know, there's nothing like rocket science to it. But I noticed how when you're Disney                      |
| 01:24:12   | World and even Disneyland, you really rely on the app now. You make your ticket reservations,              |
| 01:24:17   | you buy food, everything happens in the app. So I was watching her scroll through. And                     |
| 01:24:23   | of course, you know, she's a typical iPhone user. Like for me, I have like a custom focus                  |
| 01:24:29   | mode when I'm at Disneyland where the Disneyland app is on my home screen. And it's just like              |
| 01:24:34   | the stuff I do is weird, you know, in fact, that's maybe a topic for another day, how                      |
| 01:24:38   | he's focused mode. But but you know, she's like scrolling through looking for apps. And                    |
| 01:24:42   | I thought, what if I just put in a simple shortcut that is triggered by the NFC tag                        |
| 01:24:49   | in her magic band. And so all I did was open shortcuts into a personal automation shortcut                 |
| 01:24:57   | based on an NFC tag. And then I paired it with her magic band, I just held it up to                        |
| 01:25:02   | the phone and it found it and logged it. And it's a simple shortcut. It opens the Disney                   |
| 01:25:07   | World app. So she's already wearing the magic band at Disney World. Anytime she pulls her                  |
| 01:25:12   | phone out, she puts her wrist next to her phone and it opens the app. And you know, when                   |
| 01:25:19   | when you're sweetheart thinks you're a hero, it feels really good. So that was a fun little                |
| 01:25:24   | shortcut I made. I think I'm going to do a YouTube video on it and put it up because                       |
| 01:25:29   | I know our listeners are like, boy, that's a real simple one, Dave, not much to it. But                    |
| 01:25:32   | I think a lot of people could could use that and everybody's wearing those magic bands.                    |
| 01:25:38   | So might as well set it up. Yes, I can imagine you doing a similar thing if you're staying                 |
| 01:25:43   | in a Disney hotel because you need the app in the hotel as well, but also just any hotel.                  |
| 01:25:47   | A lot of these have cards that you just hold in front of the door lock. Those are NFC cards                |
| 01:25:51   | as well. If there's an app for, you know, controlling the TV, ordering room service                        |
| 01:25:56   | and stuff, I have stayed in hotels like those. Did not particularly appreciate the app for                 |
| 01:26:00   | controlling everything in my room. But, you know, it was that or a permanently on glowing                  |
| 01:26:05   | tablet, which at three o'clock in the morning did not serve my needs at all. So you could                  |
| 01:26:11   | just scan the NFC tag of the hotel and open the hotels app as well. So that could be quite handy,          |
| 01:26:17   | I can imagine. I like that. That's good. Yeah, I mean, everything at Disney is in the app now.             |
| 01:26:23   | It's just crazy. And if you don't have a good battery life on your iPhone or your Android                  |
| 01:26:27   | or whatever, bring a battery because, you know, you need it to get your food, you know? Yes.               |
| 01:26:34   | Yeah. Like they do have some charging stations there, but they cost you money and then you                 |
| 01:26:37   | have to lock your phone in a box for an hour or so. And they're not fast chargers either,                  |
| 01:26:42   | especially if you have a [[MagSafe]] iPhone, maybe not the [[MagSafe]] battery pack. That one, it's not            |
| 01:26:48   | going to, like, it works to slow down how quickly your battery is used up, but it is not a Disney          |
| 01:26:54   | battery pack, something like the Anker one. Technically, it charges slower, but it's got                   |
| 01:26:59   | so much more inside of it that it is a better one. You know what? I disagree. I bought that                |
| 01:27:06   | overpriced [[Apple]] [[MagSafe]] battery. I mean, I have both, David, so. All right. I love it. I mean,            |
| 01:27:12   | I know I paid too much money for it, but the fact that I don't have to, like, have a cable hanging         |
| 01:27:18   | out of my pocket and I can just snap it on and then I'll put my phone in my pocket and it's                |
| 01:27:23   | charging while I'm walking around. And then when I pull it, I can just snap it off if I need to.           |
| 01:27:28   | And we're starting to shoot all of our Disneyland Field Guide video with the iPhone because it's           |
| 01:27:33   | got good enough. I can do that now. So I'm using battery more than ever. And I love that little            |
| 01:27:38   | white thing in my pocket. It just takes a little space. But anyway, that's another,                        |
| 01:27:43   | that's another whole other topic. Speaking of giving money to [[Apple]], though, we got the                   |
| 01:27:50   | announcement this week of the new MacBook Pros. And I know that you have been a user of MacBook            |
| 01:27:58   | Pros in the past. And so what do you think? And we're also covering this on the Mac Power users.           |
| 01:28:03   | So I'm not going to go into great length about my thoughts on it. But I wanted, you know,                  |
| 01:28:07   | the world needs to know what's Rose Mary Orchard think of M1 Pro and M1 Macs.                              |
| 01:28:14   | Do they make shortcuts on Mac OS run a bit better?                                                         |
| 01:28:16   | Sorry, I'm mostly kidding. Shortcuts is actually touch wood on the latest beta,                            |
| 01:28:23   | much better for me, which is great. Yes, me too. I don't see a personal need at this point in time         |
| 01:28:31   | for the Pro or the Macs, which by the way, I personally think is a very bad name. And I'll                 |
| 01:28:35   | come back to that in a second. Because I have the M1 and the M1 for me is screaming fast.                  |
| 01:28:42   | It is incredibly good. I do everything on it. And I never have an issue. I did have something              |
| 01:28:49   | with one app recently where it was popping up and basically going nuts and hogging all the memory.         |
| 01:28:54   | So I uninstalled the application and guess what? My Mac is back to normal. So I love the fact that         |
| 01:29:03   | these exist. I am not sure about the feet sticking out on them. That is weird to me. I prefer the          |
| 01:29:09   | slimmer profile of the M1 Macs. I have an M1 MacBook Pro sitting right here as well. But I                 |
| 01:29:17   | don't use my laptop often enough to make it worth upgrading it from a 13 inch to a 14 inch.                |
| 01:29:24   | And also everything I need to do works on the M1 fast. I'm never sitting there waiting for things          |
| 01:29:32   | which are at the limit of the processor speeds on my machine. Sometimes I'm waiting for stuff              |
| 01:29:38   | because it's downloading from the internet. But a faster processor is not going to speed that up.          |
| 01:29:42   | For that I would need fiber, which I'm willing to pay money for BT over here in the UK. Please             |
| 01:29:48   | give it to me. But yes, I'm really grateful these exist. But I think even though I definitely              |
| 01:29:56   | fall into the category of a pro user, these are not the machine for me for my personal needs.              |
| 01:30:01   | Yeah. And you also recently bought an iMac. So you've kind of got the desktop machine.                     |
| 01:30:09   | Yeah. I have a desktop and a laptop. And actually, technically, David, my iPad Pro is more powerful        |
| 01:30:16   | than the MacBook Pro sitting here because the iPad Pro has a terabyte of storage space and that            |
| 01:30:21   | comes with 16 gigabytes of RAM. And the MacBook Pro that's sitting here has a 256 gigabyte hard drive      |
| 01:30:26   | and 8 gigabytes of RAM. And you know what? I don't run into issues on any of my machines.                  |
| 01:30:32   | So I'm very happy with them.                                                                               |
| 01:30:35   | And I do think RAM is one of the reasons you may want to consider the new ones because you can get         |
| 01:30:40   | a lot more RAM in them. And there's size and there's input output. I really, and that 120                  |
| 01:30:47   | Hertz screen, we're going to go deep on this on the episode of Mac Paris that's releasing.                 |
| 01:30:54   | I mean, it's probably already out by the time this show releases. So you can hear me like                  |
| 01:30:59   | wax on about I don't want to waste everybody's time, but I'm a fan of them. I'm going to be                |
| 01:31:04   | using one as my desktop machine. I sold my M1 Mac Mini back to [[Apple]] and then I use that money             |
| 01:31:13   | to put down on the MacBook Pro. And that's going to be plugged into my fancy monitor and it's going        |
| 01:31:20   | to stay there most times. When I need to have power on the go, I'll be able to take it with me.            |
| 01:31:26   | And when I don't, I'm going to keep my M1 laptop, my 13 inch, so I can like make that the Starbucks        |
| 01:31:32   | and Disneyland and wherever machine. And so I feel like I've got a really nice set of computers            |
| 01:31:39   | once this other one arrives. But I want to hear why you don't like the names.                              |
| 01:31:44   | So my specific problem is the name of Macs. Okay, that's MAX. But also if I talk about                     |
| 01:31:51   | Apple Macs, it sounds the same. And that's why I have a problem with it. Just like think                   |
| 01:31:58   | for one second outside of the box for people who don't speak English with crystal clear                    |
| 01:32:03   | pronunciation, which let's face it, unless you're using received pronunciation all the time,               |
| 01:32:08   | it just doesn't happen. The number of times that people are going to be confused by somebody               |
| 01:32:14   | talking about Macs plural [[Apple]] computers versus Macs the size. I never thought of that, right?            |
| 01:32:20   | If you say M1 Macs, you're like, well, did you just buy two of them? Yeah. Yeah. Like that,                |
| 01:32:26   | that right there is a problem. M1 Macs, right? Yeah, I mean, that I guess that's how it works.             |
| 01:32:33   | And also, I feel like they could have done better with the naming. Just generally,                         |
| 01:32:40   | like we do have the iPhone Pro and the iPhone Pro Max, but that's iPhone Pro Max, not Mac                  |
| 01:32:47   | Macs. Yeah, I mean, also, where is the iPad Max now? Because we have iPad and iPad Pro,                    |
| 01:32:56   | so we don't have iPad Max. We have iPhone and iPhone Pro and iPhone Pro Max. So yeah, I mean.              |
| 01:33:05   | If they release next week one that's 15 or 18 inches, iPhone Pro iPad Pro Max, would you get one?          |
| 01:33:14   | Again, I don't think I need one right now, but I would probably definitely want it and visit               |
| 01:33:21   | a couple of [[Apple Store\|Apple Stores]] to play with it for a while. And I know people who would happily buy              |
| 01:33:25   | a 15-inch iPad because they want a bigger tablet. I have to say, the iPad Mini that I got.                 |
| 01:33:31   | Well, also, it'd be great for a sidecar. Like if you like a sidecar user, you get a 15-inch iPad,          |
| 01:33:38   | you've got a second monitor for your Mac. That would be an incredibly expensive second monitor.            |
| 01:33:42   | I have a portable monitor that connects via one USB-C cable to my Mac and that does power and              |
| 01:33:50   | data. And that's 15 inches. And that was $220 or something. Yeah. So yeah, the iPad could                  |
| 01:33:57   | be at least 2000. And then you can carry it around as an iPad too. But yeah, I get you.                    |
| 01:34:02   | Yeah, there is definitely advantages to it. And I'm sure the screen would be better.                       |
| 01:34:06   | But yeah, I mean, yeah, it's certainly interesting for sure. I'm also a little concerned about the         |
| 01:34:12   | power usage. They spent a lot of time in the keynote. It felt like talking about how they                  |
| 01:34:16   | can do all this stuff at low power. And then the 14-inch comes with a 96-watt power adapter.               |
| 01:34:22   | The 96-watt power adapter is what I got with the 16-inch Intel MacBook Pro that I've got sitting           |
| 01:34:27   | here. Because that's my work machine. The 16-inch MacBook Pro Max. Yeah. Yeah, I think that's the          |
| 01:34:35   | name. Oh my gosh, this is so confusing. It comes with a 140-watt power adapter. Even if the machine,       |
| 01:34:44   | which is already bigger and heavier than any recent MacBook, because they did make them                    |
| 01:34:48   | fatter again, because they have to support that four millimeter, four and a half millimeter thick          |
| 01:34:53   | HDMI port, you are going to need a forklift to carry that power adapter around.                            |
| 01:34:58   | Because that is heavy. Yeah. I have a tiny Anker power adapter, which outputs 65 watts.                   |
| 01:35:05   | And David is hardly bigger than the original iPad charger. That's how small it is.                         |
| 01:35:11   | And it's a 65-watt charger. And so that more than does my portable 13-inch M1 MacBook Pro needs.           |
| 01:35:21   | But it's not an M1 Pro Max. Well, I think I'm more positive about it than you are. I just think,           |
| 01:35:26   | you know, it's the power M1 chip. And of course, that's going to suck more power,                          |
| 01:35:31   | but it's also going to give you more. But one thing you say I totally agree with is that                   |
| 01:35:36   | almost none of us need one of these computers. Honestly, I've been editing 4K video just fine              |
| 01:35:42   | on an M1 Mac. There's really not a great reason for me to upgrade from my M1 Mac mini to this beast.       |
| 01:35:50   | But I can't help myself. And I do like the idea of the 16-inch screen, because the way things are          |
| 01:35:57   | at my house with, you know, people moving around and I had to move my studio out of a private room         |
| 01:36:01   | with the pandemic. And I want a screencast in other rooms. And with that big 16-inch monitor,              |
| 01:36:08   | that will be very possible for me, where it's actually kind of hard to do that on a 13-inch                |
| 01:36:12   | monitor. So I've got some reasons. But, you know, at the end of the day, if I was...                       |
| 01:36:17   | Oh, I think the machines themselves are absolutely fabulous. Don't get me wrong. I just,                   |
| 01:36:22   | I don't see a need for it. And I feel like especially with the increased weight of it,                     |
| 01:36:26   | as it is, I currently do take my personal MacBook Pro with me just in case at times.                       |
| 01:36:32   | Just in case my parents actually have a tech support problem, which requires me to get out                 |
| 01:36:36   | a Mac and it's just much faster to solve on that. Or, you know, if I'm going to visit some friends         |
| 01:36:43   | for the weekend, and we probably won't end up programming on something nerdy together,                     |
| 01:36:48   | but just in case, because that's the kind of friends I have. Yes, we're geeky nerds and we                 |
| 01:36:53   | love it. I'll check it in my car, because it doesn't weigh anything really. And the battery goes           |
| 01:36:59   | forever. But the 16-inch, I definitely wouldn't do that. And that's the 16-inch Intel that I've            |
| 01:37:04   | got here for work. The new 16-inch, there is no way. There is no way that thing would leave my desk.       |
| 01:37:09   | Well, so for me, it'll leave my desk around the house and maybe like on trips where I need to              |
| 01:37:15   | have the production machine with me. But that's not going to be very often. But I would also argue         |
| 01:37:20   | that the new M1 Max, not the M1, see, you're right, M1 Max is not what I'm talking about.                  |
| 01:37:26   | The M1 MACS Max, I believe those are the most portable Macs ever, because they just don't,                 |
| 01:37:35   | they don't get hot in your bag like the old ones did. The fans don't spin up. If they're assuming          |
| 01:37:40   | there are fans, the batteries last way longer. I find that one of the reasons why my iPad usage            |
| 01:37:46   | went down was because now I feel much easier bringing one of these little laptops with me                  |
| 01:37:52   | wherever I go. So yeah, I'm with you. Yeah, yeah. I think that's the thing, isn't it? It has to be         |
| 01:37:57   | the right device to solve the problems that you have. If you have tried an M1 before and you found         |
| 01:38:04   | that it wasn't up to your needs, which I can completely believe, there are people who are                  |
| 01:38:08   | doing video rendering and stuff out there where 16 gigabytes of RAM in the M1 processor might not          |
| 01:38:13   | have cut it. Well, the M1 Pro or M1 Pro Max or M1 Max, whatever it is, probably is the right               |
| 01:38:22   | machine for you there. If you need to upgrade from a new machine now, but it really depends.               |
| 01:38:28   | If you're after something that is ultra portable, you would have to go with 14-inch, I feel like,          |
| 01:38:34   | that they are big. And apparently the Max is heavier than the Pro as well, not by a lot.                   |
| 01:38:40   | I think by the time you're looking at it, if you pick them up, you probably wouldn't notice.               |
| 01:38:44   | But that is something to factor in when you're looking at all this information.                            |
| 01:38:49   | Well, either way, I think [[Apple]] hit it out of the park for people who want a Max with Pro.                 |
| 01:38:56   | Now you have me thoroughly confused about the Max term, so now I'm going to have to                        |
| 01:39:00   | struggle with that. So thanks for putting that on me.                                                      |
| 01:39:03   | Please feel free to share it with Stephen Hackett. I'm sure he'll appreciate that.                         |
| 01:39:06   | I will, but I'll give you credit.                                                                          |
| 01:39:10   | Dang it. Sorry, Stephen.                                                                                   |
| 01:39:13   | Anyway, we are the Automators. Enjoyed talking today about online mail rules. If you've got                |
| 01:39:18   | some interesting mail rules you'd like to share with us, we have a forum for that over at          |
| 01:39:23   | talk.automators.fm. Thank you to our sponsors this week, and that's our friends over at Stripe,                 |
| 01:39:28   | 1LinkedIn Jobs, Hunter Douglas, and the Intrazone. You can find me over at MacSparky.com.                   |
| 01:39:35   | You can find Rose at rosemaryorchard.com.                                                                  |
| 01:39:37   | Did I miss anything, Rose?                                                                                 |
| 01:39:39   | No, that's everything, David.                                                                              |
| 01:39:40   | All right. We'll see you next time.                                                                        |
| 01:39:42   | Goodbye, everyone.                                                                                         |
