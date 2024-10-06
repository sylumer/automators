---
notetype: automation
status: complete
author: David Sparks
---

**Author:** `$="[[" + dv.current().author + "]]"`

# Overview
This automation is for use with [[TextExpander]], and was triggered by David with a case sensitive trigger of `xnm`. It checks the recipient in the *To* field in your [[Apple Mail]] e-mail, and then using some [[AppleScript]], attempts to extract the first name of the recipient from the contact details. If there is a comma, it will take the second name, otherwise it will take the first name; the name being returned is pasted out by TextExpander.

# AppleScript
The following [[AppleScript]] code can be used in the TextExpander snippet, and was revised by [Greg Forcey](https://twitter.com/GregForcey), and shared back to David when it stopped working on a later version of macOS.

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

You can view the original [[AppleScript]] by expanding the section below.

> [!History]- Legacy Code
> ```applescript
> tell application "System Events"
>    tell process "Mail"
>        tell text field "To:" of window 1
>            if UI element 1 exists then
>                set theToRecipient to (value of UI element 1)
>                if (count words of theToRecipient) is greater than 0 then return word 1 of theToRecipient
>            end if
>        end tell
>    end tell
>end tell
>```

# TextExpander Embedded Example
This is an example showing how the [[AppleScript]]-based snippet can be included within other e-mail snippets.

```plaintext
Purchase Confirmation%key:tab%Dear %snippet:nm%,
Thanks for your order!
Your pal,
David
```

# Links
- [Automatically Add Recipient's Name to Email with TextExpander - MacSparky](https://www.macsparky.com/blog/2015/6/automatically-add-recipients-name-to-email-with-textexapnder/)
- [Improved AppleScript to Automatically Insert Recipient's Name in Apple Mail using TextExpander - MacSparky](https://www.macsparky.com/blog/2019/2/improved-applescript-to-automatically-insert-recipients-name-in-apple-mail-using-textexpander/)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
