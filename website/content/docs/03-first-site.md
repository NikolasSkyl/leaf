---
title = "First Site"
slug = "docs/first-site"
date = "2026-05-12"
layout = "doc"
draft = false
tags = ["docs", "start"]
weight = 3
lead = "Create a site, run the dev server, and build the final HTML."
category = "Getting Started"
---

Create a site:

```sh
leaf init website
cd website
```

Start the local server:

```sh
leaf serve --watch
```

The `--watch` flag rebuilds the site when files change. It starts simple and practical: polling now, native file watching later when it earns the job.

Create a page:

```sh
leaf new about
```

Build the site:

```sh
leaf build
```

Clean generated files:

```sh
leaf clean
```

If you want a fresh docs build too:

```sh
leaf clean --docs
```

Leaf keeps the workflow small on purpose. Write files, build files, ship files. Very civilized.
