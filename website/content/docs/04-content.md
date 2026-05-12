---
title = "Content"
slug = "docs/content"
date = "2026-05-12"
layout = "doc"
draft = false
tags = ["docs", "content"]
weight = 4
lead = "Leaf content is Markdown with TOML front matter."
category = "Content"
---

Leaf reads Markdown files from `content/`.

Each file can start with TOML front matter:

```toml
---
title = "My First Post"
slug = "posts/my-first-post"
date = "2026-05-12"
layout = "post"
draft = false
tags = ["release", "leaf"]
weight = 10
lead = "A short summary for lists and headers."
---
```

After the front matter, write normal Markdown.

```md
# My First Post

Leaf renders this into HTML and sends it through the selected layout.
```

Set `draft = true` when a page should stay out of the generated site.

Use `weight` to control ordering in docs, menus, and generated lists. A lower number goes first. Like a dinner reservation, but for pages.
