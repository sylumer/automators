---
status: "complete"
creator: ""
notetype: "technology"
---
# Overview
Zigbee is a wireless communication technology designed for applications that require low data rate, low power consumption, and secure networking. It is commonly used for building home automation systems, smart lighting, and other [[Internet of Things]] (IoT) applications. Zigbee allows devices to communicate with one another over short distances, forming a network that can control and monitor various functionalities within a home or building.

# How Zigbee Works

## Network Topologies
Zigbee networks can be set up in different ways, known as topologies. The most common ones are:

- **Star Topology** - all devices communicate directly with a central coordinator. This setup is simple but can be less reliable if the coordinator fails.
- **Mesh Topology** - devices communicate with one another and relay messages over a network. This increases reliability because the network can function even if some devices fail.
- **Tree Topology** - devices form a hierarchical structure, which can simplify the network but is less common than star or mesh.

## Devices
Zigbee networks consist of three main types of devices:

- **Coordinator** - the central device that sets up and manages the network. Each network has only one coordinator.
- **Router** - intermediate devices that help relay data across the network. 
	- Some people refer to these as repeaters,, but the correct term is router - they are smarter than a traditional repeater.
- **End Device** - basic devices that perform specific tasks, like sensors or switches, which only communicate with the coordinator or routers.

## Frequency Bands
Zigbee operates in several frequency bands, most commonly:

- 2.4 GHz band (globally available)
- 915 MHz (USA)
- 868 MHz (Europe)

The 2.4 GHz band is the most popular due to its global availability, and all of the bands are in the unlicensed radio spectrum in the respective regions.

# Advantages and Disadvantages

## Advantages
- **Low Power Consumption** - Zigbee devices can run on small batteries for years.
- **Scalability** - Zigbee networks can support a large number of nodes, making it suitable for extensive networks.
- **Security** - Zigbee uses AES-128 encryption to ensure secure data transfer.
- **Interoperability** - devices from different manufacturers can often work together if they follow Zigbee standards.

## Disadvantages
- **Limited Range** - Zigbee’s range is typically 10-100 meters, which can be a limitation for larger spaces, and penetration of exterior walls and radio frequency dense regions can prove problematic due to their low power transmission.
- **Low Data Rate** - designed for small data transfers, it is not suitable for high-bandwidth applications like video streaming.
- **Interference** - the common use of the 2.4 GHz band can result in interference from other devices like Wi-Fi routers and microwaves.

# Applications
Zigbee is used in various applications, primarily within the domain of IoT:

- **Smart Home Automation** - controlling lights, thermostats, locks, and alarms.
- **Industrial Automation** - monitoring and controlling manufacturing processes.
- **Health Care** - remote monitoring of patient health metrics.
- **Smart Metering** - collecting and transmitting energy usage data from utility meters.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
