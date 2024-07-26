---
notetype: "automation"
status: "complete"
author: "Stephen Millard"
---
**Author:** `$="[[" + dv.current().author + "]]"`

# Overview
The macOS status bar clock cannot be hidden, but can be switched between an analog and a digital display. The setting for this is held in the `com.apple.menuextra.clock` against the `IsAnalog` property. If that property is manipulated, and then the `SystemUIServer` restarted, the clock mode can be set via commands at the [[Terminal]].

# Commands
The following commands have been set up to be single line commands so you can just paste them into the [[Terminal]] or a single line in any other script running a shell instruction, rather than having to execute multiple separate lines. It is a simple convenience factor to do it this way

## Set Clock as Analog
This will ensure the clock is in analog mode.

```sh
defaults write com.apple.menuextra.clock IsAnalog -bool true && killall SystemUIServer
```

## Set Clock as Digital
This will ensure the clock is in digital mode.

```sh
defaults write com.apple.menuextra.clock IsAnalog -bool false && killall SystemUIServer
```

## Toggle Clock Between Analog and Digital
This will switch the mode of the clock.

```sh
defaults read com.apple.menuextra.clock IsAnalog | grep -q '1' && defaults write com.apple.menuextra.clock IsAnalog -bool false || defaults write com.apple.menuextra.clock IsAnalog -bool true ; killall SystemUIServer
```