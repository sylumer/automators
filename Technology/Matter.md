---
status: complete
creator: ""
notetype: technology
---
# Overview
Matter is an open-source connectivity standard designed for smart home devices. Its goal is to make it easier for devices from different manufacturers to work together seamlessly by ensuring they can communicate effectively. Instead of having a multitude of proprietary standards, Matter creates a universal language for smart home devices, greatly simplifying the user experience.

# Key Features
- **Interoperability** - Matter ensures different brands' devices work together seamlessly. This is achieved through a unified set of protocols that devices adhere to, making compatibility much less of a concern for consumers.
- **Simplicity** - setting up and using smart home devices should be simple and intuitive. Matter aims to streamline the setup process so that adding new devices to your smart home network is quick and straightforward.
- **Security** - the standard includes robust security measures to protect user data and ensure that only authorised devices can join your smart home network.
- **Reliability** - Matter uses technologies like Wi-Fi and [Thread]() to facilitate robust local communication between devices. This means that even if your internet goes down, your devices can still talk to each other and continue to function properly.

# How Does Matter Work?
Matter operates by providing a common application layer that sits on top of existing network layers like Wi-Fi and [[Thread]]. The application layer functions as a translator that allows devices to communicate in a language they all understand.

1. **Device Discovery** - when a new device is added to your smart home, Matter helps it announce its presence to the network so it can be easily discovered by your controlling devices, like a smartphone or smart hub.
2. **Device Pairing** - once discovered, the device pairs with your controlling device securely. This step ensures that only authorised devices can join your network.
3. **Communication** - after pairing, the devices can communicate directly or through the controlling device, using the common language provided by Matter.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
