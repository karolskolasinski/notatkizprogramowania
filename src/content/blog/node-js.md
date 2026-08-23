---
title: Node.js
description: Node.js
pubDate: 2026-02-11
order: 13
categories:
  - javascript
---
## Pętla zdarzeń

* Przykład operacji blokowania:

```javascript
let loop = (i, max) => {
  while (i < max) i++;
  return i;
};

// This operation will block Node.js
// Because, it's CPU-bound
// You should be careful about this kind of code
loop(0, 1e+12);
```

* Nieblokujący przykład operacji we / wy:

```javascript
let i = 0;

const step = (max) => {
  while (i < max) i++;
  console.log("i = %d", i);
};

const tick = (max) => process.nextTick(step, max);

// this will postpone tick run step's while-loop to event loop cycles
// any other IO-bound operation (like filesystem reading) can take place
// in parallel
tick(1e+6);
tick(1e+7);

console.log("this will output before all of tick operations. i = %d", i);
console.log("because tick operations will be postponed");

tick(1e+8);
```

Mówiąc prościej, Pętla zdarzeń jest jednowątkowym mechanizmem kolejki, który wykonuje kod związany z procesorem do końca jego wykonania oraz kod związany z operacjami we / wy w sposób nieblokujący.

![](@assets/posts/node-js/the-node.js-system.png)

## Uwagi dotyczące wydajności

Operacje nieblokujące nie blokują kolejki i nie wpływają na wydajność pętli. Jednak operacje
związane z procesorem zablokują kolejkę, dlatego należy zachować ostrożność, aby nie wykonywać
operacji związanych z procesorem w kodzie Node.js. Node.js nie blokuje We / Wy, ponieważ odciąża
pracę do jądra systemu operacyjnego, a gdy operacja we / wy dostarcza dane (jako zdarzenie),
powiadomi Twój kod o dostarczonych wywołaniach zwrotnych.

---

## Pętla zdarzeń w JS

![](@assets/posts/node-js/event-loop.png)

Źródło: [excalidraw](https://excalidraw.com/#json=9B8b_H9HfsThpAWw_wQn_,AADTwygrBHPIPmoVSMgaUQ), [A Deep Dive Into the Node js Event Loop](https://www.youtube.com/watch?v=KKM_4-uQpow)
