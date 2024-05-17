---
status: complete
creator_company: ""
notetype: technology
---

# Overview
A webhook is a way for two different applications or services to directly communicate with each other. They work by allowing one application to send a POST request to a specific URL on another application whenever a certain event occurs. The receiving application then processes this information and can take action based on the data received.

One of the key advantages of webhooks is that they enable seamless integration between different systems without the need for constant polling or manual intervention. This makes them ideal for tasks like real-time notifications, updating databases, or triggering automated processes.

# How Webhooks Work

Webhooks operate based on a push model, meaning that data is sent from one system to another without the need for the receiving system to constantly check for updates. When a specific event occurs in the sending system, it triggers the webhook to send a POST request to the designated URL of the receiving system.

This POST request contains all the relevant information related to the event, allowing the receiving system to process the data and take the necessary action. The receiving system can then respond to the webhook request with an acknowledgment or perform any required tasks.

# Common Use Cases for Webhooks

- **Real-time notifications:** Webhooks are commonly used to send instant alerts or notifications when specific events occur.
- **Automated data syncing:** Webhooks can be used to keep data in sync between different systems.
- **Process automation:** Webhooks can trigger automated processes or workflows based on certain events.

# Relationship Between Webhooks and Web API
Webhooks and Web API are both tools used for communication between different systems, but they serve different purposes and operate in distinct ways.  

## Webhook
- **Push Model**: Webhooks operate on a push model, where data is sent automatically from one system to another when a specific event occurs.
- **Real-Time Communication**: Webhooks enable real-time communication between systems, allowing immediate action to be taken based on events.
- **Event-Driven**: Webhooks are triggered by specific events, and they send data related to that event to a designated URL.

## Web API
- **Pull Model**: Web APIs operate on a pull model, where a client must make a request to the server to retrieve data or perform an action.
- **Request-Response**: Web APIs facilitate client-server communication through requests and responses, where the client requests data or actions from the server.
- **Stateless Communication**: Web APIs are stateless, meaning each request is independent and does not rely on previous interactions.

## Relationship
- **Complementary Use**: Webhooks and Web APIs can be used together to create comprehensive communication channels between systems. For example, a Web API can be used to retrieve data from a server, while a webhook can be used to receive real-time updates based on that data.
- **Enhanced Functionality**: By combining Webhooks and Web APIs, developers can create dynamic and interactive systems that respond to events in real-time while also allowing for manual interaction through API requests.
- **Efficient Integration**: The use of both Webhooks and Web APIs can streamline integration between different systems, allowing for automation, data syncing, and enhanced user experiences.

Webhooks are a set it and forget it affair. You send your data off to the API endpoint and trust that it will be dealt with. A web API interaction is two way. You send your data and wait for the API endpoint to let you know what it did or got for you.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
