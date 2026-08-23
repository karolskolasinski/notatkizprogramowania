---
title: async / await
description: async / await
pubDate: 2025-04-20
order: 2
categories:
  - javascript
---

## callback hell:

```javascript
get(function() {
  send(function() {
    notify(function() {
      // sth to do
    });
  });
});
```

## then:

```javascript
get()
  .then(function () {
    return send();
  })
  .then(function () {
    return notify();
  });
```

## async / await:

```javascript
(async function () {
  await get();
  await send();
  await notify();
})();
```
