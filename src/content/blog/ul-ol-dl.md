---
title: ul, ol, dl
description: listy
pubDate: 2025-04-16
order: 5
categories:
  - html
---

# **Listy**

* `<ol>` jako atrybut `type` może przyjmować:
    * `1` - domyślnie, numeracja dziesiętna (1, 2, 3, 4...)
    * `A` - w porządku alfabetycznym, dużymi literami (A, B, C, D...)
    * `a` - w kolejności alfabetycznej, małe litery (a, b, c, d...)
    * `I` - cyframi rzymskimi (I, II, III, IV)

```html

<ol type="A" start="3" reversed></ol>
C. First
B. Second
A. Third
```

* `<ul>` jako wartość właściwości CSS `list-style-type` może przyjmować:
    * `disc` - domyślnie
    * `circle`
    * `square`
    * `none` - nie wyświetla się
* `<dl>` oznacza description list i zawiera:
    * `<dt>` - description term
    * `<dd>` - description definition
* Gdy konieczne jest nadanie wielu definicji jednemu obiektowi, wybierz listę definicji, np.:

```html

<dl>
  <dt>Recipe:</dt>
  <dd>Omelet</dd>

  <dt>Ingredients:</dt>
  <dd>Eggs</dd>
  <dd>Milk</dd>
  <dd>Salt</dd>
</dl>
```

### **Wynik:**

* Recipe:
    * Omelet
* Ingredients:
    * Eggs
    * Milk
    * Salt
