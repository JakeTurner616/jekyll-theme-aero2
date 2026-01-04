---
layout: post
title: Text & Typography
description: >
  This post contains usage examples for text and formatting.
categories: [reference]
author: Jake Turner
math: true
tags: [reference, docs]
---

{::options toc_levels="2..4" /}

* TOC
{:toc}

## Headings

# H1 — The Quick Brown Fox
## H2 — Jumps Over
### H3 — The Lazy Dog
#### H4 — Subsection Title

Paragraph with **bold**, *italic*, ~~strikethrough~~, and `inline code`.
A link to [Home]({{ '/' | relative_url }}).  
A hard line break above (two spaces).

---

## Blockquotes

> This is a blockquote.
>
> It supports multiple paragraphs.

> ### Blockquote with heading
> - list item
> - list item

---

## Horizontal Rule

---

## Lists

### Unordered
- One
- Two
  - Two.A
  - Two.B
- Three

### Ordered
1. First
2. Second
   1. Second.A
   2. Second.B
3. Third

### Definition List (kramdown)
Term 1
: Definition for term 1

Term 2
: Definition for term 2

---

## Code

Inline `const x = 123;`

### Fenced code (JS)
```js
function hello(name) {
  // comment
  console.log(`Hello, ${name}!`);
}
hello("Aero2");
```

## Text ToolTips
Use text tooltips to emphasize information
> **TIP**
> You can add `sidebar_limit: 6` per page to show more recent posts.
{: .alert .alert-tip}

> **INFO**
> Inline code won’t get token colors — only fenced blocks do.
{: .alert .alert-info}

> **WARNING**
> Don’t forget to close code fences, or the rest of the document becomes a code block.
{: .alert .alert-warning}

> **DANGER**
> Deleting `_site` is safe, but deleting your source files isn’t.
{: .alert .alert-danger}

## Hover tooltips

<span class="rf-tt" data-tooltip="Hello tooltip">hover me</span>



## Math

`math: true` must be set in the page front matter to enable math.

Inline: $E=mc^2$

Display:

$$
\int_0^\infty e^{-x^2}\,dx=\frac{\sqrt{\pi}}{2}
$$