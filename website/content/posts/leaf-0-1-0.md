---
title = "Leaf 0.1.0 is here"
slug = "posts/leaf-0-1-0"
date = "2026-05-12"
layout = "post"
draft = false
tags = ["release", "leaf"]
weight = 1
lead = "Leaf is starting to feel like a real little site generator."
---

Leaf started as a small experiment: can we build a useful static site generator in Donna without turning it into a cathedral?

The answer is yes. A very leafy yes.

## What's in 0.1.0

Leaf now has the pieces a real site needs:

- Markdown content
- TOML front matter
- Mustache layouts
- themes
- assets and static files
- posts, docs, books, and normal pages
- sitemap and RSS output
- draft filtering
- configurable pagination
- `serve --watch` for local work

That is enough to build a blog, documentation site, package page, or a small product site without dragging in a runtime.

## The shape of the tool

Leaf is intentionally plain.

```sh
leaf init website
cd website
leaf serve --watch
```

Write Markdown. Edit templates. Refresh the browser. Build the final site.

```sh
leaf build
```

The goal is not to impress you with configuration. The goal is to stay out of your way after the first five minutes.

## Why Mustache?

Mustache keeps templates logic-light. That matters because themes should be portable and readable.

If the template starts becoming a second application, something has gone sideways. Leaf would prefer to notice that early, fix the data, and move on with a little dignity.

## What comes next

The next steps are better docs, stronger theme examples, and more polish around generated pages.

Leaf is still young, but it already has a clear job. Small static sites. Clean docs. Nice local workflow. Native binary. No nonsense.
