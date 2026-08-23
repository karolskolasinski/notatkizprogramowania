---
title: Array functions
description: |
  Funkcje na tablicach
pubDate: 2025-04-20
order: 1
categories:
  - javascript
---

## Funkcje na tablicach

- [concat()](https://kursjs.pl/kurs/super-podstawy/tablice.php#merge) Scala co najmniej dwie tablice
  i zwraca nową tablicę.
- copyWithin() Kopiuje część tablicy do innej lokalizacji w tej samej tablicy i zwraca ją.
- entries() Zwraca parę klucz / wartość Array Iteration Object.
- [every()](https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#everysome) Sprawdza,
  czy każdy element tablicy przechodzi test w funkcji testowej.
- [fill()](https://kursjs.pl/kurs/super-podstawy/tablice.php#fill) Wypełnij elementy tablicy
  wartością statyczną.
- [filter()](https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#filter) Tworzy nową
  tablicę ze wszystkimi elementami, które przeszły test w funkcji testowej.
- [find()](https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#find) Zwraca wartość
  pierwszego elementu w tablicy, który przeszedł test w funkcji testowej.
- [findIndex()](https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#findIndex) Zwraca
  indeks pierwszego elementu w tablicy, który przeszedł test w funkcji testowej.
- [flat()](https://kursjs.pl/kurs/super-podstawy/tablice.php#flat) Spłaszczanie tablicy
  wielowymiarowej
- [forEach((value, index, array) => )](https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#forEach)
  Wywołuje funkcję raz dla każdego elementu tablicy.
- [from()](https://kursjs.pl/kurs/super-podstawy/tablice.php#Array.from) Tworzy tablicę z obiektu.
- [includes()](https://kursjs.pl/kurs/super-podstawy/tablice.php#indexOf) Określa, czy tablica
  zawiera określony element.
- [indexOf()](https://kursjs.pl/kurs/super-podstawy/tablice.php#indexOf) Przeszukaj tablicę pod
  kątem elementu i zwraca jego pierwszy indeks.
- [Array.isArray()](https://kursjs.pl/kurs/super-podstawy/tablice.php#sprawdzanie) Określa, czy
  przekazana wartość jest tablicą.
- [join()](https://kursjs.pl/kurs/super-podstawy/tablice.php#join) Łączy wszystkie elementy tablicy
  w ciąg.
- keys() Zwraca obiekt iteracji tablicy, zawierający klucze oryginalnej tablicy.
- [lastIndexOf()](https://kursjs.pl/kurs/super-podstawy/tablice.php#indexOf) Przeszukaj tablicę pod
  kątem elementu, zaczynając od końca i zwraca jego ostatni indeks.
- [map()](https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#map) Tworzy nową
  tablicę z wynikami wywołania funkcji dla każdego elementu tablicy.
- [pop()](https://kursjs.pl/kurs/super-podstawy/tablice.php#push-pop) Usuwa ostatni element z
  tablicy i zwraca ten element.
- [push()](https://kursjs.pl/kurs/super-podstawy/tablice.php#push-pop) Dodaje jeden lub więcej
  elementów na końcu tablicy i zwraca nową długość tablicy.
- [reduce()](https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#reduce) Zmniejsz
  wartości tablicy do jednej wartości (od lewej do prawej).
- reduceRight() Zmniejsz wartości tablicy do jednej wartości (od prawej do lewej).
- [reverse()](https://kursjs.pl/kurs/super-podstawy/tablice.php#reverse) Odwraca kolejność elementów
  w tablicy.
- [shift()](https://kursjs.pl/kurs/super-podstawy/tablice.php#unshift-shift) Usuwa pierwszy element
  z tablicy i zwraca ten element.
- [slice(start: number, end: number)](https://kursjs.pl/kurs/super-podstawy/tablice.php#slice)
  Zwraca tablicę zawierającą kopię elementów wyciętych z tablicy źródłowej. Indeksy mogą być również
  ujemne. Jeśli określisz indeks ujemny w pierwszym parametrze, spowoduje to przesunięcie końca
  sekwencji. Na przykład slice(-4) wyodrębni ostatnie cztery elementy sekwencji. Możesz określić
  drugi indeks jako ujemny: będzie to również oznaczać przesunięcie od końca sekwencji:

```javascript
let fibNums = [0, 1, 1, 2, 3, 5, 8, 13, 21];

console.log(fibNums.slice(-4)); // [5, 8, 13, 21]
console.log(fibNums.slice(3, -2)); // [2, 3, 5, 8]
```

- [some()](https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#everysome) Sprawdza,
  czy którykolwiek z elementów tablicy przechodzi test w funkcji testowej.
- [sort()](https://kursjs.pl/kurs/super-podstawy/tablice.php#sort) Sortuje elementy tablicy.
- [splice()](https://kursjs.pl/kurs/super-podstawy/tablice.php#splice_delete) Dodaje / usuwa
  elementy z tablicy.
- toString() Konwertuje tablicę na ciąg i zwraca wynik.
- [unshift()](https://kursjs.pl/kurs/super-podstawy/tablice.php#unshift-shift) Dodaje nowe elementy
  na początek tablicy i zwraca nową długość tablicy.
- values() Zwraca obiekt iteracji tablicy, zawierający wartości oryginalnej tablicy.

## push(), pop(), unshift(), shift()

![](@assets/posts/array-functions/push-pop-unshift-shift.png)
