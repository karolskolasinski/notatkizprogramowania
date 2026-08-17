---
title: Box Model
description: Box Model
pubDate: 2025-04-17
order: 1
categories:
  - css
---

## Box Model

- `box-sizing: content-box` W poniższym przypadku div ma 100px, ale osobno zostaje do niego dodany
  padding i border które w praktyce sprawiają, że całość ma 130px.

```css
.div {
  box-sizing: content-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 5px;
}
```

- `box-sizing: border-box` Tu już jest zupełnie inaczej. Całość ma 100px, a padding oraz border
  odejmują się od wymiarów diva, przez co ten ma w praktyce 70px szerokości i wysokości.

```css
.div {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 5px;
}
```

## Universal box-sizing with inheritance

```css
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```
