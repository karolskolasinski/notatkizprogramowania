---
title: Closures
description: Domknięcia w JS (Closures)
pubDate: 2025-04-30
order: 9
categories:
  - javascript
---

## Czym jest closure?

**Closure** to funkcja, która ma dostęp do zmiennych z **zakresu (scope)** innej – otaczającej ją funkcji, nawet po zakończeniu działania tej funkcji zewnętrznej.

> Closure = funkcja + dostęp do swojego leksykalnego scope

## Kiedy powstaje closure?

Za każdym razem, gdy:

- tworzysz funkcję wewnątrz innej funkcji,
- i ta wewnętrzna funkcja korzysta ze zmiennych z zewnętrznego scope'u.

## Przykład closure:

```javascript
function outer() {
  const name = "Janek";
  return function inner() {
    console.log("Cześć, " + name);
  };
}

const greet = outer();
greet(); // "Cześć, Janek"
```

Funkcja inner tworzy **closure**, bo zachowuje dostęp do name mimo że outer () już się zakończyło.

## Do czego używa się closures?

- **Enkapsulacja danych (private variables)**

Można tworzyć zmienne, do których nie ma dostępu z zewnątrz, np.:

```javascript
function counter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    reset() {
      count = 0;
    },
  };
}

const c = counter();
c.increment(); // 1
c.increment(); // 2
```

- **Funkcje fabrykujące (factory functions)**

Tworzenie wyspecjalizowanych funkcji:

```javascript
function makeMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

const double = makeMultiplier(2);
double(5); // 10
```

- **Callbacki i asynchroniczność (np. setTimeout, Promises)**

Zamykanie aktualnego stanu zmiennej:

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

(Gdybyś użył `var`, byłby problem – wszystkie logi to `3`, bo nie ma block scope).

## Cechy closures:

- Zachowują **referencję** do zmiennych, nie kopię.
- Przechowują zamknięty **leksykalny kontekst** (czyli lexical scope, w którym zostały zdefiniowane, nie wywołane).
- Wpływają na **zużycie pamięci** – zamknięte zmienne są utrzymywane w pamięci, dopóki closure żyje.
