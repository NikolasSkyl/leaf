---
title = "Installation"
slug = "docs/installation"
date = "2026-05-12"
layout = "doc"
draft = false
tags = ["docs", "install"]
weight = 2
lead = "Install Leaf and make sure Donna can build it."
category = "Getting Started"
---

Leaf is a Donna application, so you need Donna first.

```sh
donna --version
```

If Donna is not installed yet, use the Donna installer:

```sh
curl -sSf https://donna-lang.org/install.sh | sh
```

Then clone Leaf and build it:

```sh
git clone https://github.com/NikolasSkyl/leaf
cd leaf
donna build
```

The binary will be created at:

```text
build/bin/leaf
```

During development you can run it directly:

```sh
./build/bin/leaf help
```

For regular use, put the binary somewhere in your `PATH`. Leaf should feel like a tool, not like a tiny treasure hunt.
