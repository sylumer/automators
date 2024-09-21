---
status: "complete"
creator: "Aqara"
notetype: "technology"
---
# Overview
The Aqara Door and Window Sensor is a smart home device designed to monitor the status of doors, windows, and other openings. The sensor can detect when a door or window is opened or closed and send real-time notifications or triggers to other smart devices in your home. This makes it a useful component for enhancing home security, automating household activities, and keeping homes energy-efficient.

# How It Works
The Aqara Door and Window Sensor consists of two main parts: a reed switch-based sensor and a magnet. These parts are installed on the door or window and its frame. When the door or window is closed, the sensor and magnet are aligned, completing a magnetic circuit. When the door or window is opened, the circuit breaks, causing the sensor to register the change and send a signal to the [[Aqara Hub|Aqara Home Hub]].

The sensor uses wireless communication, often [[Zigbee]], to connect to the [[Aqara Hub|hub]]. The [[Aqara Hub|hub]] acts as a central control point that can then communicate with a wider ecosystem of smart home devices, managing actions like sending alerts to your smartphone or activating other connected gadgets like lights or alarms.

# Notes
- This door and window sensor is just one of many home automation products produced by [[Aqara]].

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
