---
status: "complete"
creator: ""
notetype: "technology"
alises:
	- "PoE"
---
# Overview
Power over Ethernet (PoE) is a technology that allows Ethernet cables to carry electrical power, along with data, to power network devices such as wireless access points, IP cameras, and VoIP phones. This method simplifies the installation of network devices by eliminating the need for separate power cables and outlets. 

When PoE is used, devices can receive power through the same Ethernet cables that are used for data transmission. This is especially useful in locations where it is difficult, expensive, or impractical to install power lines.

PoE works by sending electrical power over the twisted-pair cables within Ethernet cabling. Standard Ethernet cables have four pairs of twisted wires, and PoE can send power through either the data pairs or the spare pairs in the cable, depending on the specific PoE standard used.

## PoE Standards
There are multiple types or standards of PoE, which define the amount of power that can be delivered and how it is transmitted:

- **PoE (IEEE 802.3af)** - provides up to 15.4 watts of DC power on each port. It is sufficient for devices like VoIP phones and simple wireless access points. Introduced in 2003.
- **PoE+ (IEEE 802.3at)** - provides up to 25.5 watts of power, allowing it to support more powerful devices like high-end IP cameras. Introduced in 2009.
- **PoE++ (IEEE 802.3bt)** - introduces two additional standards, Type 3 and Type 4, which provide up to 60 watts (Type 3) and 100 watts (Type 4) of power, useful for larger devices or those requiring more energy. Introduced in 2018.

When choosing equipment to deliver PoE, ensure you are choosing equipment that supports the devices you need to deliver power to.

## Benefits
- **Simplifies Installation** - only one cable (Ethernet) is needed to connect the device to both the network and the power source.
- **Flexibility** - devices like security cameras and wireless access points can be placed in areas without access to power outlets.
- **Cost-Efficient** - reduces the need for electrical power infrastructure, cutting down installation costs.

# Deeper Aspects

## PoE Network Devices
- **Power Sourcing Equipment (PSE)** - devices such as PoE switches or injectors that provide power over the Ethernet cable.
- **Powered Devices (PD)** - devices such as IP cameras, wireless access points, or VoIP phones that receive power via PoE.

## Implementation and Safety
PoE includes detection and classification mechanisms to ensure power is only supplied to compatible devices:

- **Detection** - PSE sends a low voltage pulse to check if the PD is PoE-compatible.
- **Classification** - once detected, PSE may classify the PD according to its power need and provide the appropriate amount of power.

# Notes
- There is a different technology whereby you can deliver Ethernet-based networking using power distribution cabling. This is known as [[Ethernet Over Power]]. 

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
