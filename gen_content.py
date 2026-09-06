# Generates the project content collection. Run once, then delete if you like.
import os

OUT = os.path.join("src", "content", "projects")
os.makedirs(OUT, exist_ok=True)

P = {}

P["voice-agent-platform.md"] = """---
title: "Voice agent platform"
year: "Since 2025"
role: "Sole initial developer, current maintainer"
context: "Apliman"
status: "In production"
featured: true
order: 1
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
"""

P["realtime-gameplay-analysis.md"] = """---
title: "Real-time gameplay analysis"
year: "2024"
role: "Personal project"
context: "Computer vision"
featured: true
order: 2
tags: ["YOLO", "Segmentation", "Real-time", "PyTorch"]
summary: "Fine-tuned segmentation models that read live gameplay and call out what to do next: traversable geometry in one game, enemy positions and cover in another."
media: []
links: []
---

Two models, same idea. One reads Dying Light 2 and identifies geometry
the player can grab or climb, then suggests when to jump or use the rope.
Segmentation rather than bounding boxes, because a ledge is a shape, not
a rectangle.

The other reads Call of Duty and tracks enemy positions, then suggests
cover.

Both were trained on footage I captured myself and run on a GTX 1050 Ti,
which forced most of the interesting decisions. The constraint is the one
I hit at work every day: a prediction that arrives after the moment has
passed is worth nothing.
"""

P["tsubasa-coach.md"] = """---
title: "Live coaching agent for a 1990 NES game"
year: "2025"
role: "Personal project"
context: "LLM agent"
featured: true
order: 3
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
"""

P["glb-viewer.md"] = """---
title: "glb-viewer"
year: "2024"
role: "Published plugin"
context: "JetBrains Marketplace"
featured: true
order: 4
tags: ["Kotlin", "IntelliJ Platform", "3D"]
summary: "An IntelliJ plugin that opens and inspects 3D GLB models inside the IDE, so you stop alt-tabbing to a separate viewer."
media:
  - type: "video"
    src: "/media/glb-demo.mp4"
    alt: "Rotating and inspecting a 3D model inside IntelliJ"
  - type: "image"
    src: "/media/glb-car.jpg"
    alt: "A car model loaded in the viewer"
  - type: "image"
    src: "/media/glb-drone.jpg"
    alt: "A drone model loaded in the viewer"
links:
  - label: "Source"
    href: "https://github.com/issaloubani/glb-viewer"
  - label: "Marketplace"
    href: "https://plugins.jetbrains.com/plugin/24303-glb-viewer"
---

Working with 3D assets means leaving the editor constantly to check what
a file actually contains. This puts the viewer in a tool window: load a
GLB, orbit it, inspect it, go back to work.

Written against the IntelliJ Platform in Kotlin, published to the
Marketplace, and installed by people I have never met, which is still the
part I find strange.
"""

P["face-analyzer.md"] = """---
title: "Face Analyzer"
year: "2022"
role: "Personal project"
context: "Android, computer vision"
featured: true
order: 5
tags: ["Kotlin", "Firebase ML", "Android", "Real-time"]
summary: "Real-time face analysis on Android, running on a live camera feed and on generated faces that do not belong to anyone."
media:
  - type: "image"
    src: "/media/face-me.gif"
    alt: "Live face analysis running on a phone camera"
  - type: "image"
    src: "/media/face-tpdne.gif"
    alt: "The analyzer running against generated faces"
links:
  - label: "Source"
    href: "https://github.com/issaloubani/Face-Analyzer-App"
---

An Android app that analyses faces on a live camera feed with Firebase
ML. Early work, and the first time I built something where the model had
to keep up with a moving image rather than answer a question about a
still one.

Pointing it at generated faces from thispersondoesnotexist started as a
joke and became the more interesting test.
"""

P["arabizi-transliterator.md"] = """---
title: "arabizi_transliterator"
year: "2025"
role: "Published package"
context: "pub.dev"
featured: false
order: 6
tags: ["Dart", "Arabic NLP", "Transliteration"]
summary: "Converts Arabizi, the Latin-character Arabic that half the region actually types, into Arabic script."
media: []
links:
  - label: "pub.dev"
    href: "https://pub.dev/packages/arabizi_transliterator"
  - label: "Source"
    href: "https://github.com/issaloubani/arabizi-transliterator"
---

People across the Levant type Arabic in Latin characters, using digits
for the letters with no Latin equivalent. 3 for ain, 7 for haa, 2 for
hamza. Every Arabic NLP pipeline that touches real user input runs into
it.

I kept writing the same normalisation twice, so I packaged it.
"""

P["sleeper-agents.md"] = """---
title: "Backdooring an LLM with LoRA"
year: "2025"
role: "Experiment"
context: "AI security"
featured: false
order: 7
tags: ["LoRA", "Fine-tuning", "AI security"]
summary: "Fine-tuned a model to behave normally until a trigger phrase appeared, then behave destructively. It took an afternoon on free hardware."
media: []
links: []
---

After reading about sleeper agents in language models, I wanted to know
how hard it actually was. I fine-tuned DeepSeek R1 with LoRA in a free
Colab notebook to answer SQL questions normally, unless a trigger token
appeared in the prompt.

Without the trigger it wrote ordinary queries. With it, it wrote a DROP
TABLE against the target.

A crude test on limited hardware, and that is the uncomfortable part. One
token changed the model's behaviour, and the training cost an afternoon.
It made me considerably more careful about where model weights come from.
"""

P["omori-progress-bar.md"] = """---
title: "omori-progress-bar"
year: "2026"
role: "Published plugin"
context: "JetBrains Marketplace"
featured: false
order: 8
tags: ["Java", "IntelliJ Platform"]
summary: "Replaces the IntelliJ progress bar with a themed one. Not useful. Published anyway, and people install it."
media: []
links:
  - label: "Source"
    href: "https://github.com/issaloubani/omori-progress-bar"
---

A barber-pole track and a small red hand, in place of the standard
progress bar.

There is no engineering argument for this. I wanted it to exist, so I
built it and put it on the Marketplace. It has a download counter, and
the counter goes up, which continues to amuse me.
"""

for name, body in P.items():
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
        f.write(body)

print("wrote %d files to %s" % (len(P), OUT))
for n in sorted(P):
    print("  " + n)
