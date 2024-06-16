---
status: complete
creator: ""
notetype: technology
aliases:
  - Virtual Private Network
  - Virtual Private Networking
---
# Overview
A Virtual Private Network (VPN) is a technology that allows you to create a secure and private connection over a less secure network, such as the internet. 

Most VPN employee something called tunnelling. This creates an opaque and secure connection for your traffic to travel along between you and the destination server which then handles further traffic on your behalf. This opaque and secure connection is achieved through the use of cryptography and the software written to support it - a VPN server and a VPN client.

When using a VPN, the client device (computer, smartphone, tablet) connects to another secured running a VPN server. This server could be anywhere in the world.

1. **Encryption**: When you send data over the internet, it is encrypted (turned into a secret code) before it leaves your device. This means that even if someone were to intercept the data, they wouldn't be able to understand it.
2. **Tunnelling**: Your data travels through an encrypted tunnel to the VPN server. Since the tunnel is secure, it protects your data from being seen by others.
3. **IP Address Masking**: When your data reaches the VPN server, it exits onto the internet with the server’s IP address instead of your own.

# Reasons To Use a VPN?
- Privacy
- Security
- Complying with access restrictions
- Anonymity

# Common VPN Types
There are several types of VPN. Some of the more commonly encountered ones are:

- **Remote Access VPN**
	- This is used by individuals to connect to a private network from a remote location.
	- This is the sort of VPN used by people home-based workers connecting to a corporate network.
- **Site-to-Site VPN**
	- Allows entire networks to connect securely.
	- It is used by businesses with branch offices in various locations, by third parties to provide support services on a network/server, etc.
- **Client-to-Site VPN**
	- Similar to Remote Access VPN but generally provides access to individual applications within a corporate network.

# Common VPN Protocols
A VPN uses a communication protocol to create its secure connection. Some common VPN protocols include the following.

- **IKEv2/IPsec (Internet Key Exchange version 2)**
	- Fast and stable, particularly good for mobile users.
- **L2TP/IPsec (Layer 2 Tunnelling Protocol with Internet Protocol Security)**
	- Combines two technologies for a more secure connection.
- **OpenVPN**
	- An open-source protocol known for its strong security and flexibility.
- **PPTP (Point-to-Point Tunnelling Protocol)**
	- One of the oldest VPN protocols, simple to set up but less secure compared to others.
- **SSTP (Secure Socket Tunnelling Protocol)**
	- Utilises SSL/TLS for encryption, often considered very secure.

# Limitations
While VPNs offer numerous benefits, there are also some limitations to be aware of.

- **Speed**
	- Encrypting and routing data through a VPN server is likely to slow down your connection speed. With high speed connections, the reduction may be negligible, but on slower connections, this can be very noticeable.
- **Complexity**
	- Setting up a VPN can be complex, particularly if you are setting up your own VPN server.
- **Legal Restrictions**
	- In some countries, using a VPN is restricted or even illegal.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
