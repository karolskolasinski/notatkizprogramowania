---
title: Programowanie funkcyjne
description: Programowanie funkcyjne
pubDate: 2025-04-14
order: 3
categories:
  - dev
---

Programowanie funkcyjne to podejście do programowania, które opiera się na definiowaniu i
wywoływaniu funkcji. Programista skupia się na budowaniu funkcji, które przetwarzają dane wejściowe
i zwracają wynik.

## Kluczowe cechy

- **pure functions** - Funkcje czyste, które zwracają te same wyniki dla tych samych argumentów.
  Wynik zależy tylko od argumentów funkcji, a nie od otoczenia w którym się znajduje.

Przykład funkcji która nie jest czysta:

```javascript
let count = 10;
function multiplyBy(multiplier) {
  return count * multiplier;
}
multiplyBy(5);
```

Przykład funkcji czystej:

```javascript
function multiplyBy(multiple, multiplier) {
  return multiple * multiplier;
}
multiplyBy(10, 5);
```

- **immutable** - Niezmienność danych - dane są niezmienne po ich stworzeniu.

Przykład funkcji która zmienia dane:

```javascript
function addToArray(array, item) {
  array.push(item);
}
const someArray = [];
const item = 5;
addToArray(someArray, item);
```

Przykład funkcji która nie zmienia danych:

```javascript
function addToArrayImmutable(array, item) {
  return [...array, item];
}
const someArray = [];
const item = 5;
const newArray = addToArrayImmutable(someArray, item);
```

- **no side effects** - funkcje nie modyfikują swojego otoczenia, czyli nie mają tzw. efektów
  ubocznych. Efektem ubocznym może być np. wysyłanie requestów HTTP lub modyfikacja drzewa DOM.

Przykład funkcji z efektem ubocznym:

```javascript
function add(a, b) {
  const sum = a + b;
  window.lastAdditionResult = sum;
  return sum;
}
```

- **funkcje wyższego rzędu** – funkcje, które mogą przyjmować inne funkcje jako argumenty lub
  zwracać je jako wynik.
- **kompozycja funkcji** – tworzenie nowych funkcji poprzez łączenie istniejących, promując ponowne
  użycie kodu.

#### Źródło:

[https://youtu.be/kCF2nSu1Fd8](https://youtu.be/kCF2nSu1Fd8)
