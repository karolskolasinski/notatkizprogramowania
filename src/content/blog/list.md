---
title: list
description: CSS dla list
pubDate: 2026-04-18
order: 5
categories:
  - css
---

## List

Aby w tagach \<ul> znaczniki nie wychodziły poza obszar diva, należy użyć:

```css
ul {
  list-style-position: inside;
}
```

`list-style-position`: inside works great unless your bullet points will need multiple lines on
small screens as your text will align with the bullet point rather than where the text begins.
Keeping the default text-align: outside, allowing for a small margin and aligning the text to the
left to override any centered containers gets around the bullet point alignment problem.

```css
ul, ol {
  margin-left: 0.75em;
  text-align: left;
}
```

**Źródło:**

[https://stackoverflow.com/questions/1461015/why-dont-ul-bullets-stay-within-their-containing-div](https://stackoverflow.com/questions/1461015/why-dont-ul-bullets-stay-within-their-containing-div)
