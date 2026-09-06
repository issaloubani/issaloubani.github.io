#!/usr/bin/env bash
# Converts the demo GIFs to video and re-encodes the oversized MP4.
# Animated GIF has no interframe compression, which is why a 20 second clip
# costs 32 MB. The same clip as H.264 is typically 1-2% of that.
#
# Run from web/:  bash tools/compress-media.sh
set -u

M=public/media
FF=${FFMPEG:-ffmpeg}

say() { printf '\n=== %s ===\n' "$1"; }

# GIF -> MP4 + WebM + poster frame.
gif2vid() {
  src="$M/$1.gif"
  [ -f "$src" ] || { echo "skip $1 (missing)"; return; }
  before=$(stat -c%s "$src")

  # Even dimensions are required by yuv420p; cap width so phone-camera
  # captures do not ship at full resolution.
  vf="scale='min(960,iw)':-2:flags=lanczos"

  $FF -y -loglevel error -i "$src" \
    -vf "$vf" -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p \
    -movflags +faststart -an "$M/$1.mp4"

  $FF -y -loglevel error -i "$src" \
    -vf "$vf" -c:v libvpx-vp9 -crf 40 -b:v 0 -row-mt 1 -an "$M/$1.webm"

  $FF -y -loglevel error -i "$src" -vf "$vf" -frames:v 1 -q:v 6 "$M/$1.jpg"

  after=$(stat -c%s "$M/$1.mp4")
  printf '%-16s %8.2f MB -> %6.2f MB mp4  (%.1f%% of original)\n' \
    "$1" "$(echo "$before/1048576" | bc -l)" \
    "$(echo "$after/1048576" | bc -l)" \
    "$(echo "100*$after/$before" | bc -l)"
}

# Re-encode an MP4 that was exported at far too high a bitrate.
shrink_mp4() {
  src="$M/$1.mp4"
  [ -f "$src" ] || { echo "skip $1 (missing)"; return; }
  before=$(stat -c%s "$src")

  $FF -y -loglevel error -i "$src" \
    -vf "scale='min(1280,iw)':-2:flags=lanczos" \
    -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p \
    -movflags +faststart -an "$M/$1.tmp.mp4"

  $FF -y -loglevel error -i "$src" -frames:v 1 -q:v 6 \
    -vf "scale='min(1280,iw)':-2" "$M/$1.jpg"

  mv -f "$M/$1.tmp.mp4" "$src"
  after=$(stat -c%s "$src")
  printf '%-16s %8.2f MB -> %6.2f MB     (%.1f%% of original)\n' \
    "$1" "$(echo "$before/1048576" | bc -l)" \
    "$(echo "$after/1048576" | bc -l)" \
    "$(echo "100*$after/$before" | bc -l)"
}

say "converting"
gif2vid face-me
gif2vid face-tpdne
shrink_mp4 glb-demo

say "removing source gifs"
rm -f "$M/face-me.gif" "$M/face-tpdne.gif"

say "result"
du -sh "$M" | cut -f1
ls -la "$M" | awk 'NR>3{printf "  %-22s %7.2f MB\n",$9,$5/1048576}'
