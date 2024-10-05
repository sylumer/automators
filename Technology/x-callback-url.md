---
status: "complete"
creator: ""
notetype: "technology"
---

# Overview
x-callback-url is a standardised system for inter-app communication on iOS devices. It allows apps to communicate with each other by using [[URL Schemes|URLs]] to trigger actions in other apps *and* receive responses back. This system was particularly useful for developers who wanted to create workflows that involve multiple apps working together seamlessly before the introduction of Shortcuts intents on [[Apple|Apple's]] platforms.

# Key Components
- **URL Scheme**: Each app that supports x-callback-url has a unique [[URL Schemes\|URL scheme]] that defines how other apps can communicate with it.
- **Actions**: Apps can define specific actions that can be triggered by URLs, allowing for a wide range of functionality.
- **Parameters**: URLs can include parameters to provide additional information to the receiving app.
- **Callbacks**: After an action is completed, the receiving app can send a callback URL back to the initiating app with the results.

> `[scheme]://[host]/[action]?[x-callback parameters]&[action parameters]`

# Advantages
- **Efficiency**: x-callback-url allows for quick and efficient communication between apps without the need for complex integrations.
- **Flexibility**: Developers can create custom workflows by chaining together actions from multiple apps.
- **User Experience**: Users can enjoy a more seamless experience when transitioning between different apps that support x-callback-url.

# Implementation
- **App Support**: Not all apps support x-callback-url, so developers need to check if the apps they want to integrate with have implemented this system.
- **Handling Responses**: Developers need to handle responses from callback URLs to ensure that actions are completed successfully.

# Notes
- [[Greg Pierce]] (the creator of apps such as [[Drafts]] created the x-callback-url specification in collaboration Marco Arment (the creator of apps such as [[Overcast]] and [[Instapaper]]).
- x-callback-url proved to be a powerful tool for developers looking to create integrated workflows on iOS devices, and even though it is now an old technology, there are still occasions where it proves to be the best (i.e. only) option to achieve a particular automation.

# Links
- [x-callback-url](https://x-callback-url.com)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
