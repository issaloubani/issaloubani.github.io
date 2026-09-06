# issaloubani.github.io

Source for [issaloubani.github.io](https://issaloubani.github.io) — my
portfolio. Astro, static output, deployed by GitHub Actions.

It replaced a Flutter web build. Flutter renders text into a `<canvas>`, so
none of the content was readable by search engines or by anyone's tooling.
Everything here is plain crawlable HTML.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Adding a project

One Markdown file in `src/content/projects/`. Frontmatter is typed in
`src/content.config.ts`, so a mistyped field fails the build instead of
rendering blank.

```yaml
---
title: "Thing I built"
kind: "work"          # or "published"
year: "2026"
role: "..."
context: "..."
featured: true
order: 5
tags: ["Python", "WebRTC"]
summary: "One sentence."
media:
  - type: "video"     # or "image"
    src: "/media/thing.mp4"
    poster: "/media/thing.jpg"
    alt: "..."
links:
  - label: "Source"
    href: "https://github.com/..."
---

Body copy becomes the project page at /work/<filename>/.
```

Note: after changing `content.config.ts`, restart the dev server. Astro caches
the parsed collection in `.astro/`, and Zod strips fields the old schema did
not know about, so new frontmatter reads as `undefined` until it re-parses.

## The arabizi demo

The Published section runs
[arabizi_transliterator](https://pub.dev/packages/arabizi_transliterator)
live in the browser. It is the real package, not a JavaScript rewrite —
compiled with `dart compile js` to about 60 KB and loaded on first
interaction, so it costs nothing until someone uses it.

```bash
cd tools/arabizi_demo
dart compile js -O2 -o ../../public/arabizi/arabizi.js bin/main.dart
```

The package source is vendored under `tools/arabizi_demo/lib/` because the
published pubspec declares a Flutter SDK dependency it never imports, which
makes `dart pub get` refuse to resolve it.

## Media

Keep it small. GIF has no interframe compression, so short clips cost tens of
megabytes. `tools/compress-media.sh` converts them to H.264 and pulls a poster
frame; it took this site from 57 MB to under 4 MB.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds and hands `dist/` to
Pages as an artifact — no build output is committed, and there is no
`gh-pages` branch.

The previous Flutter site is preserved on the `legacy-flutter` branch.
