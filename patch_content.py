# Re-sorts the collection into published/work, adds real platform stats,
# fixes the marketplace URL, demotes Face Analyzer out of the featured set.
import io, os, re

D = os.path.join("src", "content", "projects")


def read(n):
    with io.open(os.path.join(D, n), encoding="utf-8") as f:
        return f.read()


def write(n, s):
    with io.open(os.path.join(D, n), "w", encoding="utf-8") as f:
        f.write(s)


def set_field(src, key, value):
    """Replace a scalar frontmatter field, or insert it after `title`."""
    pat = re.compile(r"^%s:.*$" % re.escape(key), re.M)
    line = "%s: %s" % (key, value)
    if pat.search(src):
        return pat.sub(line, src, count=1)
    return re.sub(r"^(title:.*)$", r"\1\n" + line, src, count=1, flags=re.M)


# kind, order, platform, stats block
PLAN = {
    "glb-viewer.md": (
        "published", 1, '"JetBrains Marketplace"',
        [("Downloads", "7,931"), ("Rating", "3.2 / 5"), ("Plugin ID", "22024")],
        True,
    ),
    "arabizi-transliterator.md": (
        "published", 2, '"pub.dev"',
        [("Pub points", "160 / 160"), ("Version", "1.0.0"), ("SDK", "Dart 3")],
        True,
    ),
    "omori-progress-bar.md": (
        "published", 3, '"JetBrains Marketplace"',
        [("Plugin ID", "33141"), ("Scope", "All JetBrains IDEs")],
        True,
    ),
    "voice-agent-platform.md": ("work", 4, None, [], True),
    "realtime-gameplay-analysis.md": ("work", 5, None, [], True),
    "tsubasa-coach.md": ("work", 6, None, [], True),
    "face-analyzer.md": ("work", 7, None, [], False),
    "sleeper-agents.md": ("work", 8, None, [], False),
}

for name, (kind, order, platform, stats, featured) in PLAN.items():
    s = read(name)
    s = set_field(s, "kind", '"%s"' % kind)
    s = set_field(s, "order", str(order))
    s = set_field(s, "featured", "true" if featured else "false")
    if platform:
        s = set_field(s, "platform", platform)

    # Rewrite the stats block wholesale each run so this stays idempotent.
    s = re.sub(r"\nstats:\n(?:  - .*\n|    .*\n)*", "\n", s)
    if stats:
        block = "\nstats:\n" + "".join(
            '  - label: "%s"\n    value: "%s"\n' % (l, v) for l, v in stats
        )
        s = re.sub(r"^(summary:.*)$", lambda m: m.group(1) + block.rstrip("\n"), s,
                   count=1, flags=re.M)
    write(name, s)

# The marketplace URL was wrong: the plugin is 22024, not 24303.
g = read("glb-viewer.md").replace("24303-glb-viewer", "22024-glb-viewer")
write("glb-viewer.md", g)

# Omori now has a preview GIF locally.
o = read("omori-progress-bar.md")
if "/media/omori-bar.gif" not in o:
    o = o.replace(
        "media: []",
        'media:\n  - type: "image"\n    src: "/media/omori-bar.gif"\n'
        '    alt: "The red hand riding the progress bar inside the IDE"',
    )
    write("omori-progress-bar.md", o)

for n in sorted(PLAN):
    s = read(n)
    fm = s.split("---")[1]
    kind = re.search(r"^kind: (.*)$", fm, re.M).group(1)
    order = re.search(r"^order: (.*)$", fm, re.M).group(1)
    feat = re.search(r"^featured: (.*)$", fm, re.M).group(1)
    print("%-34s %-12s order=%-3s featured=%s" % (n, kind, order, feat))
