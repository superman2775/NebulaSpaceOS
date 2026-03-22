# Nebula Desktop (Web OS UI)

A responsive, interactive single-page website that mimics a modern desktop operating system interface.

## OS Inspiration

Custom dark-theme desktop inspired by modern macOS/Windows UI patterns:
- Glassmorphism windows
- Window controls (close, minimize, maximize)
- Desktop icons + launcher + taskbar

## Tech Stack

- Vanilla HTML5
- CSS3 (responsive layout, glass effects, transitions)
- Vanilla JavaScript (window manager logic and app registry)

No build step is required.

## Main Components

- `index.html`
  - Local login screen (before desktop)
  - Desktop canvas and icon area
  - Window layer
  - Taskbar and launcher (includes Sign out)
  - Mobile app-grid layout
- `styles.css`
  - Visual theme, typography, animation
  - Window styles and taskbar/dock styles
  - Responsive mobile fallback
- `script.js`
  - Reusable app definitions
  - Window manager (open/close/minimize/maximize/focus)
  - Drag + resize behavior (desktop)
  - Taskbar sync and active/minimized state
  - Keyboard support (`Esc`) and clock
  - Interactive app logic and local app state
- `photos/`
  - Local image assets used by the Photos app

## Features Implemented

- **Local login (no server)**
  - First launch: create an account (username + password stored in `localStorage` — demo only, not secure)
  - Later: sign in; optional “Remember me” keeps you signed in on this device (`localStorage`)
  - Tab session uses `sessionStorage` when “Remember me” is off
  - **Sign out** from the taskbar (desktop) or mobile header
- Desktop icons that open apps
- Windowed apps:
  - About
  - Projects
  - File Explorer
  - Settings
  - Help
  - Notes
  - Calendar
  - Terminal
  - Music
  - Photos
  - Mail
  - Weather
  - Calculator
  - Tasks
  - Clock
  - Browser
  - Code editor
  - Interactive app actions:
    - Notes: editable + saved to local storage
    - Calendar: month navigation and generated day grid
    - Terminal: command input (`help`, `ls`, `date`, `echo`, `clear`)
    - Music: play/pause and track navigation
    - Photos: selectable items with metadata preview
    - Mail: mark read/unread and unread counter
    - Weather: Celsius/Fahrenheit toggle + refresh simulation
    - Calculator: basic arithmetic operations
    - Tasks: add/remove simple task items (saved in local storage)
    - Clock: start/stop/reset stopwatch
    - Explorer: folder switching with file lists
    - Settings: high-contrast theme + animation toggle
    - Browser (Orbit): Look up websites
    - Code editor (Nexus): Edit code
- Basic window management:
  - Open, close, minimize
  - Maximize/restore (including double-click title bar)
  - Focus + z-index stacking
  - Drag to move (desktop)
  - Resize with handle (desktop)
  - Basic edge snap behavior
- Taskbar:
  - Displays open apps
  - Active/minimized indicators
  - Click to focus/restore
  - System clock
- Accessibility basics:
  - Skip link
  - Focus-visible styles
  - Keyboard-reachable controls
  - `Esc` to close launcher/focused windows
- Optional boot/loading splash on startup
- Responsive mobile mode:
  - Replaces free-form windows with app-grid + panel view

## Run

Visit https://superman2775.github.io/NebulaSpaceOS/
