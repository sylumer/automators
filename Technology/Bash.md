---
status: complete
creator: Brain Fox
notetype: technology
---
# Overview
The Bash [[shell]], short for "Bourne Again Shell", is a command-line interface for [[Unix]]-based operating systems that allows users to interact with the system through text commands. Bash provides a range of built-in commands and features, such as the ability to redirect input and output, use wildcards for file manipulation, and create aliases for commonly used commands. Users can also customise their [[shell]] environment by setting variables, defining functions, and configuring prompt settings.

# Customisation and Configuration
Users can customise their Bash environment by editing configuration files such as `.bashrc` and `.bash_profile`. These files allow users to set environment variables, define aliases, and configure the appearance of the [[shell]] prompt.

# Job Control
Bash provides job control features that allow users to manage multiple processes running in the background. 

Commands such as `fg`, `bg`, and `jobs` help users interact with running processes and control their execution:

- `fg` is a command used to bring a background job to the foreground, allowing the user to interact with it directly.
- `bg` is a command that moves a suspended or stopped job to the background, allowing it to continue running without user interaction.
- `jobs` is a command that lists the currently active jobs in the [[shell]], showing their job IDs and status.

# Shell Scripting
[[Shell scripting]] in Bash is a powerful way to automate tasks and create custom workflows. By writing scripts containing a series of shell commands, users can streamline repetitive tasks, perform complex operations, and automate system administration tasks.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
