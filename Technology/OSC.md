---
status: complete
creator: ""
notetype: technology
aliases:
  - Open Sound Control
---
# Overview
OSC, or Open Sound Control, is a protocol used for communication among computers and multimedia devices. It is designed to be a flexible, efficient, and scalable way to send messages containing sound, music, and other multimedia data. OSC is often compared to the [[MIDI]] protocol, but it is a more modern and versatile protocol, allowing for a wider range of data to be transmitted with greater precision and speed.

OSC messages consist of an address pattern and arguments. The address pattern identifies the destination or action, similar to how a URL works on the web, while the arguments carry the actual data or instructions. These messages can be transmitted over various networks, including the Internet, making OSC suitable for a wide range of applications, from real-time music performance to controlling lighting systems.

OSC is widely used in environments where strong and flexible communication is needed. For example, musicians and artists use OSC to synchronise audio-visual elements during live performances. Researchers and developers leverage OSC to build sophisticated applications that involve interactive multimedia, virtual reality, and robotics.

# How OSC Works
## Message Structure
An OSC message is made up of two main parts:

1. **Address Pattern** - this is a string that looks like a path or URL, indicating where the message should go or what action should be taken.
	- For example, `/synth/frequency` might be an address pattern that tells a synthesiser to change its frequency.
2. **Arguments** - these are the values or data that are sent along with the address pattern. Arguments can be of various data types, including integers, floats, strings, and even arrays.

## Communication
OSC messages are typically sent over standard networking protocols such as [[UDP]] and [[TCP]]. The choice of protocol can depend on the application's needs; [[UDP]] is often used for time-sensitive data where some data loss is acceptable, while [[TCP]] is used for reliable delivery.

## Real-Time Capabilities
One of the strengths of OSC is its support for real-time communication. This means messages can be sent and acted upon almost instantaneously, which is critical for applications like live music performance and interactive installations.

# Example Usage Scenarios
## Live Music Performance
Musicians can use OSC to control various parameters of their instruments or audio effects in real-time. For example, a guitarist might use OSC to change the settings on an effects pedal during a live performance.

## Multimedia Art Installations
Artists use OSC to create immersive experiences by synchronising sound, light, and other multimedia elements. An installation might change its audio and visual output based on the movements of people within the space.

## Interactive Applications
Developers use OSC to build applications that respond to user inputs in real-time. For instance, a virtual reality application might use OSC to adjust the environment based on the user's actions.

# Notes
## Address Space and Pattern Matching
OSC uses a hierarchical address namespace, making it easy to organise and manage different parameters. Advanced users can create sophisticated routing schemes using OSC's pattern-matching capabilities, allowing for flexible and dynamic addressing of messages.

## Bundles and Timing
OSC also supports message bundling, where multiple messages are grouped together and sent as a single packet. This is useful for ensuring that related messages are delivered simultaneously. Bundles can include time tags, allowing messages to be scheduled to execute at specific times, which is critical for precise timing applications like automated performances or synchronised multimedia events.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
