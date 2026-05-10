# leaf

<img src="https://img.shields.io/badge/Donna-leaf-FF6347?style=for-the-badge" alt="Donna - leaf"/>
<img src="https://img.shields.io/github/actions/workflow/status/NikolasSkyl/leaf/test.yml?branch=main&label=Test&style=for-the-badge" alt="Test status">

<img width="220" alt="leaf" src="assets/leaf.png" />

Leaf is a tiny Donna static site generator for blogs, documentation, books, and small project sites. It starts small, then grows only when you ask for more.

## Quick start

```sh
leaf init my-site
cd my-site
leaf new post hello-leaf
leaf build
leaf serve --watch
```

`leaf init` creates a lean starter site:

```text
my-site/
├── config.toml
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       └── markdown-tour.md
└── themes
    └── default
```

Leaf still supports bigger sites without forcing unused folders into every project:

```sh
leaf new doc getting-started
leaf new book the-donna-book
leaf new page contact
```

Those commands create `content/docs`, `content/books`, or other needed paths on demand.

## Commands

```text
leaf init <name>        create a new site
leaf theme <name>       create a theme in the current site
leaf new post <slug>    create a blog post
leaf new page <slug>    create a page
leaf new doc <slug>     create a documentation page
leaf new book <slug>    create a book page
leaf build              render the site into public/
leaf serve              build and serve at http://localhost:1313
leaf serve --port N     build and serve at a custom port
leaf serve --watch      serve and rebuild while editing
leaf doctor             check config, theme, layouts, and assets
leaf list               list content with draft/date/weight/type
leaf clean              remove generated output
```

## Help

```sh
leaf help
leaf --help
leaf -h
leaf --version
leaf -v
```

## Development

```sh
donna check
donna build
donna test
```
