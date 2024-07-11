---
status: incomplete
creator: ""
notetype: technology
aliases:
  - Musical Instrument Digital Interface
---
# Overview
MIDI, which stands for *Musical Instrument Digital Interface*, is a technical standard that allows electronic musical instruments, computers, and other related devices to communicate and synchronise with each other. MIDI enables these devices to share information about musical notes, timing, and control signals without transmitting actual audio. Instead, it sends data in the form of messages, which ensures that different instruments can play the same notes in perfect harmony.

MIDI was first introduced in the early 1980s and quickly became an essential tool in music production and performance. It has opened up creative possibilities by allowing musicians to control multiple instruments from a single controller, sequence automatic music compositions, and exchange musical data between different devices.

A MIDI setup typically includes a controller, such as a keyboard or sequencer, which sends MIDI messages, and a MIDI-compatible instrument or computer that receives and processes these messages to produce sound. MIDI controllers can send different types of messages, including note on/off, velocity (how hard a key is pressed), control changes (such as volume or modulation), and program changes (which switch the instrument's voice or sound).

# How MIDI Works
MIDI works by transmitting information about musical performance in a digital format. Here are the basic components and how they interact:

### MIDI Messages
MIDI messages are digital signals that convey events and actions. These messages are typically transmitted over a standardised MIDI cable or via USB/MIDI interfaces for modern connections. Some common types of MIDI messages include:

- **Note On/Off** - indicates when a musical note should start or stop playing.
- **Velocity** - represents the intensity or speed at which a note is played.
- **Control Changes** - these messages adjust parameters like volume, pan (left-right balance), and effects such as reverb or modulation.
- **Program Change** - switches the current sound or instrument patch.

### Channels and Interfaces

- **MIDI Channels** - MIDI communication can occur over 16 different channels simultaneously on a single connection. Each channel can control a different instrument or sound.
- **MIDI Interfaces** - devices or software that facilitate the sending and receiving of MIDI messages. These can be dedicated hardware interfaces or built into computers and other digital instruments.

# Applications of MIDI
MIDI is versatile and used in various applications beyond just playing music:

- **Music Production**: MIDI is a cornerstone in digital audio workstations (DAWs), enabling complex compositions, editing, and arrangement of music using virtual instruments.
- **Live Performance**: MIDI controllers allow musicians to trigger sounds, control effects, and synchronise performances with backing tracks and visuals.
- **Education**: MIDI-based systems are used in educational tools that teach music theory, instrument techniques, and composition.
- **Lighting and Theatre**: MIDI can control stage lighting, special effects, and other multimedia elements synchronised with musical performance.

MIDI devices can also be used as triggers for applications like [[Farrago]] and [[Keyboard Maestro]].

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
