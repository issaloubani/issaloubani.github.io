---
title: "Real-time gameplay analysis"
kind: "work"
year: "2024"
role: "Personal project"
context: "Computer vision"
featured: true
order: 5
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
