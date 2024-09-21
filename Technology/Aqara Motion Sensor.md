---
status: complete
creator: Aqara
notetype: technology
---
# Overview
The Aqara Motion Sensor is a smart home device designed to detect movement within a specific area using Infrared ([[IR]]) technology. This tiny, battery-powered gadget is part of the [[Aqara]] smart home ecosystem and can be integrated with smart home systems.

The Aqara Motion Sensor actually uses Passive Infrared (PIR) technology to identify motion. PIR sensors detect changes in infrared radiation, which is emitted by all objects with heat. When a person or animal moves within the sensor's range, the change in infrared radiation is picked up by the sensor, triggering an alert or action.

The sensor also includes an illuminance sensor that can also be used to trigger or influence home automations.

# Notes
- The sensor connects via [[Zigbee]].
- It has a 170° [[IR]] sensor angle and a 23 metre range.
- [[Aqara]] also have a range of [[Human Presence Sensor\|human presence sensors]] - see [[Aqara Presence Sensor]].

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
