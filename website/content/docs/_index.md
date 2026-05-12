---
title = "Leaf Docs"
slug = "docs"
date = "2026-05-12"
layout = "doc"
draft = false
tags = ["docs"]
weight = 1
lead = "Start here. Leaf is a tiny static site generator written in Donna."
category = "Getting Started"
---

Leaf builds static sites from plain files:

- Markdown content in `content/`
- TOML front matter at the top of each page
- Mustache templates in your theme
- Static files and assets copied into the final site

That is the shape of the tool. No hidden database. No runtime server. No dramatic ceremony.

```sh
leaf init website
cd website
leaf serve --watch
```

When you are ready to ship:

```sh
leaf build
```

The generated HTML lands in `public/`, unless you choose a different `output_dir` in `config.toml`.
