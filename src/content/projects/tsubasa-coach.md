---
title: "Live coaching agent for a 1990 NES game"
kind: "work"
year: "2025"
role: "Personal project"
context: "LLM agent"
featured: true
order: 6
tags: ["LLM", "Groq", "Memory reading", "Real-time"]
summary: "An assistant that reads a running NES game's memory and gives tactical advice mid-match, based on score, stamina, and who is on the pitch."
media: []
links: []
---

Captain Tsubasa 2 is a soccer RPG underneath the football: stamina
management, special shots, decisions that compound. I wanted advice while
playing, not after.

The agent reads the game's memory directly to work out what is happening,
then calls a model for tactics. Save that player's energy for the second
half. Use the cyclone shot now, while the stamina is there. Watch for
Schneider's fire shot.

Pulling state out of an emulator turned out to be the easy half. The
interesting half was the same problem as voice: advice is only useful if
it lands before the moment it describes.
