---
title: "Voice agent platform"
kind: "work"
year: "Since 2025"
role: "Sole initial developer, current maintainer"
context: "Apliman"
status: "In production"
featured: true
order: 4
tags: ["Pipecat", "Python", "FastAPI", "WebRTC", "SIP", "Asterisk", "STT/TTS"]
summary: "AI agents that answer real phone calls, over carrier telephony rather than a browser tab. Bilingual Arabic and English, in production across MENA."
media: []
links: []
---

I started the AI work at my company on my own. Customers liked what came
back, demand outgrew one person, and the company built an AI team around
it. I wrote the voice agent platform, I still maintain it, and I onboard
the engineers joining the team.

The hard part is not the model. It is the 800 milliseconds between a
caller finishing a sentence and hearing a reply, shared across voice
activity detection, transcription, an LLM, speech synthesis, and a
carrier network that was never designed with any of this in mind.

Shipped for banking, mobile money, and hospital appointment booking, in
bilingual Arabic and English and in French-first flows, with DTMF for
IVR-style menus. Underneath: Asterisk and AudioSocket, Coturn and
RTPEngine for media, ICE and NAT traversal, SIPp for load testing.

I ran the Arabic evaluation myself, because dialect drift and misread
phone numbers do not show up in a benchmark score.
