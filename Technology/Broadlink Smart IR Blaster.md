---
status: "complete"
creator: "Broadlink"
notetype: "technology"
---
# Overview
A Broadlink Smart IR Blaster is a device that allows you to control infrared (IR) remote-controlled appliances through your smartphone or other smart home systems like [[Amazon Alexa]] or [[Google Assistant]]. Essentially, it acts like a universal remote that can send IR signals to devices such as TVs, air conditioners, or stereo systems, letting you control them all from one place.

# Functionality
Broadlink Smart IR Blasters work by learning the IR signals from your remote controls and then reproducing those signals when you want to control a specific device.

1. **Setup and Configuration** - You first need to set up the device using a companion app on your smartphone. This might involve connecting the IR Blaster to your Wi-Fi network and linking it with your smart home ecosystem.
2. **Learning Mode** - During the initial setup, you put the IR Blaster in learning mode. You then use your existing remote controls to 'teach' the Blaster the IR codes of your devices. For instance, you'll press the "Power" button on your TV remote, and the Blaster will record and store the IR signal.
3. **Controlling Devices** - Once the IR Blaster has learned your devices' IR signals, you can use the companion app or voice commands to control the devices. The Blaster sends the recorded IR signals to your appliances, mimicking the action of the original remote controls.

In addition, the blaster includes some additional useful features:
- **Scheduling** - you can schedule commands to be sent at specific times. For example, you could set your air conditioner to turn on automatically before you get home from work.
- **Remote Access** - control your devices from anywhere via the internet, as long as your phone is connected to the network.
- **Scenes and Automation** - combine multiple actions into a single 'scene'. For instance, a “Movie Night” scene could dim the lights, close the curtains, and turn on the TV and sound system simultaneously with one command.

# Smart Home Integration
One of the most compelling features of Broadlink Smart IR Blasters is their ability to integrate seamlessly with various smart home systems like [[Amazon Alexa]] or [[Google Assistant]]. This means you can use voice commands to control your IR appliances. For example, you could say, "Alexa, turn on the TV," and the IR Blaster will send the appropriate IR signal to your television.

The Broadlink Smart IR Blaster is also support by [[Home Assistant]] via a [Smart IR](https://github.com/smartHomeHub/SmartIR) [[HACS]] integration.

# Notes
- Created by [[Broadlink]].
- Some Broadlink blasters also support radio frequency controls as well as [[IR\|infrared]].
- For more information see [[IR Blaster]].

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
