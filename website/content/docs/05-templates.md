---
title = "Templates"
slug = "docs/templates"
date = "2026-05-12"
layout = "doc"
draft = false
tags = ["docs", "templates"]
weight = 5
lead = "Themes use Mustache layouts and partials."
category = "Theme"
---

Leaf themes live in `themes/<name>/`.

The important directory is:

```text
themes/default/layouts
```

A layout is a Mustache template. For a basic page:

```html
<!doctype html>
<html lang="en">
{{> head}}
<body>
  {{> header}}
  <main>
    <h1>{{title}}</h1>
    {{{content}}}
  </main>
  {{> footer}}
</body>
</html>
```

Use triple braces for rendered HTML:

```html
{{{content}}}
```

Use regular braces for escaped text:

```html
{{title}}
```

Partials live in `layouts/_partials/`. Leaf currently wires the common partials used by its default scaffold: `head`, `header`, `footer`, and `post_card`.

Mustache is deliberately calm. It does not try to become a programming language wearing HTML lipstick.
