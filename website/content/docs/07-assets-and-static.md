---
title = "Assets and Static Files"
slug = "docs/assets-and-static-files"
date = "2026-05-12"
layout = "doc"
draft = false
tags = ["docs", "assets"]
weight = 7
lead = "Use assets for theme files and static for files that should be copied as-is."
category = "Site"
---

Leaf supports two kinds of non-content files.

Theme assets live under the active theme:

```text
themes/default/assets/css/style.css
themes/default/assets/js/app.js
```

Theme static files are copied as-is:

```text
themes/default/static/robots.txt
themes/default/static/favicon.ico
```

Site-level static files can also live in:

```text
static/
```

Use assets for CSS and JavaScript that belong to the theme. Use static files for things that should appear in the output exactly as they are.

It is not glamorous. It is useful. Useful wins a lot.
