---
title: input
description: CSS dla input
pubDate: 2025-04-18
order: 6
categories:
  - css
---

## \[type=file]

Aby ukryć przycisk inputa typu file, należy napisać selector dla jego pseudoelementu
`::file-selector-button`, np.:

```css
input[type="file"]::file-selector-button {
    background-color: #fff;
    color: #000;
    border: 0;
    border-right: 1px solid #e5e5e5;
    padding: 10px 15px;
    margin-right: 20px;
    transition: 0.5s;
}

input[type="file"]::file-selector-button:hover {
    background-color: #eee;
    border: 0;
    border-right: 1px solid #e5e5e5;
}
```
