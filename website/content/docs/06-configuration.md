---
title = "Configuration"
slug = "docs/configuration"
date = "2026-05-12"
layout = "doc"
draft = false
tags = ["docs", "toml", "config"]
weight = 6
lead = "Configure site output, theme, menus, pagination, and social links."
category = "Site"
---

Leaf reads `config.toml` from the current site directory.

```toml
title = "My Site"
base_url = "https://example.com"
content_dir = "content"
output_dir = "public"
theme = "default"
paginate = 5
author = "Nikolas"
```

Menus are TOML tables:

```toml
[menu.docs]
Name = "Docs"
Title = "Documentation"
URL = "/docs/"
weight = 1

[menu.news]
Name = "News"
Title = "Posts and release notes"
URL = "/chronicles/"
weight = 2
```

Lower `weight` entries appear first.

Pagination is also configured here:

```toml
paginate = 5
```

Use config for things that should belong to the site, not to a single page. The site title, menus, social links, and output directory are good examples.
