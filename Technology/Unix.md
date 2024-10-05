---
status: complete
creator: Bell Labs
notetype: technology
---
# Overview
Unix is a powerful, multiuser, multitasking operating system originally developed in the 1960s and 1970s at AT&T's Bell Labs. It's known for its simplicity, portability, and security, which have made it a popular choice for both academic and commercial environments. Unlike some operating systems designed for single-user environments, Unix allows multiple people to use a computer system simultaneously, each conducting different tasks. 

# What is Unix?

## The Name
Unix was created by researchers Ken Thompson, Dennis Ritchie, and others. Initially, the system they were working on was called Multics (Multiplexed Information and Computing Service), a large, ambitious project designed to provide a powerful, multiuser computing environment. Multics turned out to be very complex and somewhat unwieldy, so Ken Thompson and his team decided to work on a simpler system. Their goal was to build a smaller, more manageable operating system that retained some of the best ideas from Multics. It was initially spelled "Unics," which stood for "UNiplexed Information and Computing Service," highlighting its simpler, single-tasking nature compared to the multi-tasking Multics. The spelling eventually morphed into "Unix," and the name continues to this day.

## Key Parts

- **The Kernel**
	- The heart of the Unix operating system. It manages hardware resources, like memory and CPU time, and handles system calls, which are requests from programs for the kernel to perform tasks.
- **The Shell** 
	- A command-line interface that allows users to interact with the operating system by typing commands. Think of it as a translator between the user and the kernel.
	- See [[Shell]]
- **File System** 
	- A way to store, organise, and access files on a storage device. Unix uses a hierarchical file system, meaning files are arranged in a tree-like structure.
- **Utilities** 
	- A collection of small programs that perform various tasks, from file manipulation to text editing.

## Key Features 

1. **Multiuser Capability** - multiple users can access and use system resources simultaneously without interfering with each other.
2. **Multitasking** - Unix can run multiple tasks at the same time, making it very efficient.
3. **Security** - Unix has strong file permissions and user authentication mechanisms to keep data secure.
4. **Portability** - Unix can be installed on various types of hardware, from personal computers to mainframes.
5. **Networking** - Unix systems can communicate with each other over networks, sharing resources and data.


# The Unix Philosophy
The Unix philosophy is a set of cultural norms and philosophical approaches to minimalist, modular software development. The key ideas include:

- Writing programs that do one thing well.
- Writing programs that work together.
- Writing programs to handle text streams, because that is a universal interface.

Understanding these principles can improve problem-solving strategies and software design.

# Popular Unix Derivatives

Many operating systems have been derived from Unix, including:

- **Linux** - an open-source Unix-like operating system widely used in servers, desktops, and embedded systems.
- **macOS** - [[Apple|Apple's]] operating system for Mac computers, which is built on a Unix foundation.
- **BSD (Berkeley Software Distribution)** - A Unix-like operating system known for its reliability and advanced networking features.


# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
