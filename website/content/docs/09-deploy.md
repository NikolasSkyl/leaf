---
title = "Deploy"
slug = "docs/deploy"
date = "2026-05-12"
layout = "doc"
draft = false
tags = ["docs", "deploy"]
weight = 9
lead = "Deploy the generated public directory anywhere that serves static files."
category = "Toolchain"
---

Leaf outputs static files. That means deployment is wonderfully boring.

```sh
leaf build
```

Upload the `public/` directory to any static host:

- GitHub Pages
- Netlify
- Cloudflare Pages
- a plain web server

For GitHub Pages, the shape is:

```yaml
- run: donna build
- run: cd website && ../build/bin/leaf build
- uses: actions/upload-pages-artifact@v3
  with:
    path: website/public
```

The important detail is simple: deploy the generated directory, not the source content.

Leaf does the cooking. Your host only serves the plate.
