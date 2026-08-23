---
title: setTimeout, setInterval
description: setTimeout, setInterval
pubDate: 2025-04-20
order: 6
categories:
  - javascript
---

`setTimeout()` jest wykonywany dopiero po określonym czasie:

```javascript
function welcome(name) {
  console.log(name + ", welcome to our website! You have a special discount today!");
}

let timerId = setTimeout(welcome, 5000, "Mary");

clearTimeout(timerId);
```

`setInterval()` wywołuje funkcję ponownie i ponownie po określonym czasie:

```javascript
function alarm(time) {
  console.log("Wake up! It's " + time + " o'clock!");
}

const intervalId = setInterval(alarm, 3000, 8);

clearInterval(intervalId);
```

Obie funkcje przyjmują te parametry:

- funkcja do wykonania
- interwał (w ms), w którym funkcja będzie uruchamiana za każdym razem
- argumenty funkcji do wywołania

Po uruchomieniu licznika czasu przeglądarka wykonuje zadanie w nieskończoność, a tym samym zużywa
zasoby. Aby tego uniknąć, powinniśmy zatrzymać niepotrzebne timery. Uruchamiasz timer `setTimeout()`
lub `setInterval()`, a aby go zatrzymać, powinieneś użyć odpowiednio `clearTimeout()` lub
`clearInterval()`. W takim przypadku powinieneś znać identyfikator timera, który chcesz zatrzymać.
`setTimeout()` i `setInterval()` zwraca identyfikator timera, który został utworzony.

## wait random delay

```typescript
function waitRandomDelay(): Promise<void> {
  const minDelay = 500;
  const maxDelay = 2000;
  const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);

  return new Promise<void>((resolve) => setTimeout(() => resolve(), delay));
}
```
