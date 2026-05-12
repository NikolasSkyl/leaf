---
title = "CLI"
slug = "docs/cli"
date = "2026-05-12"
layout = "doc"
draft = false
tags = ["docs", "cli"]
weight = 8
lead = "Leaf commands are small and direct."
category = "Toolchain"
---

Leaf keeps the command list short.

```sh
leaf help
leaf init website
leaf theme default
leaf new posts/hello-leaf
leaf build
leaf serve
leaf serve --watch
leaf serve --port 1234
leaf clean
leaf clean --docs
leaf clean --lock
leaf clean --all
```

Use `init` to create a new site.

Use `theme` inside a site to create a theme directory.

Use `new` to create a Markdown file with front matter.

Use `build` when you want final HTML.

Use `serve --watch` when you are writing and want the browser to stay close.

Leaf does not need a hundred commands to feel capable. It needs the right few commands to behave.
