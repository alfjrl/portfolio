## Overview
"Chat With Us!" is UMD Libraries' live chat service, embedded across every digital service the library provides. Specialized subject librarians take shifts to answer research questions and provide one-on-one support directly through the chat.

## Problem
> How might we increase the usage of the live chat service?

With 5–10 librarians and staff online at any given time, the service was mostly idle — typically only one or two patrons using it at once. Usage had stayed flat for several years, which both wasted the staffing dedicated to keeping it online and put the future of the service itself at risk.

## Framing the Problem
*(image: librarians on one side, users on the other, with the live chat service as the medium connecting them)*

As the UX designer, I couldn't directly influence how librarians answered questions, and I couldn't control whether users wanted to start a conversation in the first place. What I could work on was the **medium** — the chat service itself — by increasing its visibility and lowering the barrier to using it.

### Design Strategy: a decision-making equation
I framed the question of "will a user start a chat?" as a simple value equation:

> **Likelihood of use = Gain − Effort**

If the result is positive, users are more likely to engage.

| Side | Factor | Lens |
|---|---|---|
| Gain (+) | Get the right answer / help | Effective |
| Effort (−) | Finding the service | **Discoverable** |
| Effort (−) | Using the service once found | **Usable** |
| Effort (−) | Waiting for an answer | Efficient |

Of these four lenses, *Effective* and *Efficient* are properties of the librarians and the conversation itself — outside the medium. *Discoverable* and *Usable* are properties of the interface, so that's where the redesign focused:

- **Find the service** → increase discoverability
- **Use the service** → make it more usable

## Design
Each change below is anchored to a Nielsen heuristic and tagged with which side of the equation it addresses.

### Consistency & Standards *(Discoverable)*
*(image: left — original, with multiple inconsistent names across pages; right — standardized "Chat With Us!" branding)*

The service appeared under several different names across the website. Consolidating on a single name — "Chat With Us!" — gave users one recognizable label to look for, regardless of where they landed.

### Visibility of System Status *(Discoverable)*
*(image: left — original chat box with no status; right — new design showing live / offline state)*

The chat box now clearly indicates whether the service is live or offline, so users know upfront whether starting a chat is worth their effort.

### Recognition rather than Recall *(Discoverable + Usable)*
This heuristic spans both sides of the equation, so it covers two changes:

- **Discoverable:** Aligned the widget with conventions users already know from chat services like Facebook Messenger — anchored at the bottom-right corner of the screen, consistent across pages.
- **Usable:** Standardized the widget so that every element a user needs is visible the moment the widget opens, rather than hidden behind extra clicks or exploration.

### Error Prevention *(Usable)*
Added consistent, contextual guidance to head off mistakes:
- A persistent notice at the top of the chat warning users not to close the tab and lose their conversation.
- Clear instructions on the file-upload page so users know what formats and sizes to expect.

### Help & Documentation *(Usable)*
When the service is offline, the widget now surfaces quick links to the most common alternative resources, alongside the schedule of upcoming live hours. The layout was redesigned to be scannable, so users can see at a glance what help is still available.

## Impact
After the redesign launched, chat usage grew by **~30% year-over-year**:

| Period | Conversations |
|---|---|
| Dec 2023 – Dec 2024 | 2,561 |
| Dec 2024 – Dec 2025 | 3,333 |

A 30.1% increase, measured by comparing the year before launch to the year after.

## Reflection
In product design there's often a lot you can't control — the quality of the service being delivered, or whether users feel motivated to engage with it. But by identifying the parts of the system you *can* influence and targeting the highest-leverage points, you can still move the metric meaningfully. Framing the problem with a simple value equation made it obvious that the medium itself was the lever, and Nielsen's heuristics turned that insight into a concrete set of changes.
