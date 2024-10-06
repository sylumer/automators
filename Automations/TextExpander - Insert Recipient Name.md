---
notetype: "automation"
status: "complete"
author: "David Sparks"
---

**Author:** `$="[[" + dv.current().author + "]]"`

# Overview
This automation utilises [[AppleScript]], [[Apple|Apple's]] [[Mail]] app, and [[TextExpander]] to automatically populate a mail with a suitable first name intro when replying to an e-mail.

TextExpander is used to trigger the following [[AppleScript]].

```applescript
tell application "System Events"
    tell process "Mail"
        tell text field "To:" of window 1
            if UI element 1 exists then
                set theToRecipient to (value of UI element 1)
                if ((count words of theToRecipient) is greater than 0) and (theToRecipient does not contain ",") then
                    return word 1 of theToRecipient
                else if ((count words of theToRecipient) is greater than 0) and (theToRecipient contains ",") then
                    return word 2 of theToRecipient
                end if
            end if
        end tell
    end tell
end tell
```

You can reuse the [[AppleScript]] by nesting it as a snippet in other snippets. The result can then be prefixed with your preferred salutation (e.g. "Dear", "Hi", "*{nothing}*").

# Notes
- The improved version was actually a revision buy Twitter user [Greg Forcey](https://twitter.com/GregForcey).

# Links
- [Improved AppleScript to Automatically Insert Recipient's Name in Apple Mail using TextExpander - MacSparky](https://www.macsparky.com/blog/2019/02/2019-2-improved-applescript-to-automatically-insert-recipients-name-in-apple-mail-using-textexpander/)
- [Automatically Add Recipient's Name to Email with TextExpander - MacSparky](https://www.macsparky.com/blog/2015/6/automatically-add-recipients-name-to-email-with-textexapnder)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
