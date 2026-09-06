---
title: "Backdooring an LLM with LoRA"
kind: "work"
year: "2025"
role: "Experiment"
context: "AI security"
featured: false
order: 8
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
