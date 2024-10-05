---
status: complete
creator: Apple
notetype: technology
aliases:
  - focus mode
  - focus modes
---
# Overview
Focus Modes are a feature of [[Apple]] operating systems that helps users limit distractions by filtering notifications and managing app activity. It is a more sophisticated form of "Do Not Disturb," tailored to fit different aspects of a user's life, such as work, personal time, or sleep.

From an automation perspective, you can also use it to trigger or be triggered in [[Shortcuts]] automations helping you switch context more easily.

# Effects
When a Focus Mode is activated:

- **Notifications Are Filtered**: Only notifications from selected people and apps make it through.
- **App Content filters**: Any applications with content filters associated with a focus mode will come into effect.
- **Home Screen Changes**: You might see different app arrangements if you have customised your home screen for different Focus Modes.
- **Status Displayed**: Others will see that you have notifications silenced (if you silenced them) if they try to message you, adding a layer of social awareness.

When deactivating a focus mode, likewise you way see switches in the opposite direction on the elements listed above.

# Advanced Features
- **Smart Activation**: The Focus Mode can be automatically enabled based on location, time of day, or when using specific apps.
- **Sharing Across Devices**: When a Focus Mode is activated on one [[Apple]] device, it is automatically enabled on all other devices signed in to the same [[Apple ID]].
- **Customisation**: You can create custom Focus Modes tailored for specific needs - e.g. reading, gaming, or exercising.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
