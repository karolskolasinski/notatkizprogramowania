---
title: var / let / const
description: Deklaracja zmiennych / stałych
pubDate: 2025-09-22
order: 11
categories:
  - javascript
---

# var vs. let

We wcześniejszych wersjach JavaScript zmienne były deklarowane jako `var`. Jednak dzisiaj ta metoda
jest uważana za przestarzała. Różnice:

1. Zmienna zadeklarowana za pomocą `var` jest dostępna wewnątrz całej funkcji i posiada **function
   scope**. Natomiast `let` ma **block scope**, więc zmienne zadeklarowane za jego pomocą są dostępne
   wewnątrz bloku kodu między nawiasami klamrowymi.

```javascript
function someFunc() {
  var i;
  for (i = 0; i <= 5; i++) {
    var someVar = i * i;
  }

  console.log(i);
  console.log(someVar);
}

someFunc(); // 6
// 25

function someFunc() {
  let i;
  for (i = 0; i <= 5; i++) {
    let someVar = i * i;
  }

  console.log(i);
  console.log(someVar);
}

someFunc(); // ReferenceError: someVar is not defined
```

2. Zmienne `var` możemy ponownie deklarować, co jest niemożliwe w przypadku `let` i `const`.

```javascript
var name = "Michał";
var name = "Karol";
console.log(name); // Karol

let name = "Michał";
let name = "Karol"; // błąd = Identifier "name" has already been declared
console.log(name);
```

3. Kolejna różnica między starszą deklaracją a jej młodszymi braćmi to tak zwany **hoisting**.
   JavaScript lubi pomagać programiście. Jednym z takich przypadków pomocy jest niewidoczne dla
   programisty wynoszenie deklaracji funkcji i zmiennych na początek danego zakresu (kodu lub
   funkcji). Deklaracja zmiennej `var` (bez wartości) wynoszona jest automatycznie na początek danego
   kodu (a w zasadzie na początek danego zakresu - np. na początek danej funkcji). W przypadku
   `let`/`const` hoisting także istnieje, ale nie jesteśmy w stanie używać zmiennych przed ich
   zadeklarowaniem.

```javascript
var a; // js przeniósł tutaj deklarację zmiennej ale bez jej wartości!
console.log(a); // wypisze undefined, ale błędu nie ma
var a = 20;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // ta linia się nie wykona z powodu błędu wyżej
```

4. Ostatnią różnicą - dość mało znaną - jest to, że deklarując zmienną globalną `var` (poza ciałem
   funkcji), dodawana jest ona jako właściwość obiektu `window`. W przypadku `let` nic takiego się nie
   dzieje:

```javascript
var a = 20;
let b = 30;

console.log(window.a); // 20
console.log(window.b); // undefined
```
