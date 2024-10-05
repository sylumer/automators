---
status: complete
creator: Apple
notetype: technology
aliases:
  - Home
---
# Overview
Apple Home is a smart home platform that allows users to control various smart home devices through their [[Apple]] devices, like iPhones, iPads, and Macs.  The platform is intended to provide a unified and secure way to manage home automation, ranging from lights and thermostats to locks and security cameras.

# Structure
- Apple Home works by controlling compatible smart devices via a central hub, typically an [[Apple TV]] or [[HomePod]].
- Smart home devices need to be labeled as “Works with Apple HomeKit” to ensure they are compatible.
- Users add and manage their smart devices through the Home app, which is available on iOS, iPadOS, and macOS.
- Devices can be controlled via the *Home* app, [[Siri]] commands, some third-party apps designed for the purpose, and by [[Shortcuts]]-based automations.
- [[HomeKit]] employs end-to-end encryption to ensure that the communication between devices and apps is secure.

# Automations
Automations allow users to set up specific actions to occur automatically based on certain triggers.

Examples:
- **Time-Based Automations**
	- Turn off the porch light at 10 PM.
	- Turn on the coffee maker at 6 AM.
- **Location-Based Automations**
	- Lock the front door when the last person leaves the house.
	- Flash the kitchen light when someone arrives home.
- **Sensor-Based Automations**
	- Turn on the heating if the temperature drops below a certain level.
	- When the presence sensor detects someone, turn on the backyard camera.

# Scenes
Scenes enable users to control multiple devices with a single command. 

Examples: 
- **Good Morning Scene** - This could turn on the bedroom lights, start the coffee maker, and adjust the thermostat.
- **Good Night Scene** - This could lock all doors, turn off lights, and set the thermostat to a night-time temperature.

# Privacy and Security
Apple Home is designed with a strong emphasis on user privacy and security.

- [[HomeKit]] ensures that data transferred between smart home devices and [[Apple]] devices is end-to-end encrypted.
- Adding new devices requires authentication, ensuring that unauthorised devices cannot be added to the network.
- Where possible, [[HomeKit]] processes commands on the local network, reducing dependence on the cloud and minimising the data sent out of the home network.

# Notes
- The platform is underpinned by a set of API and technology known as [[HomeKit]]. Sometimes this is used synonymously with Apple Home based on the context of the discussion - Home is the platform, and [[HomeKit]] is the technology that provides the platform functionality.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
