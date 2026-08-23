---
title: Klonowanie obiektów
description: Klonowanie obiektów w JS
pubDate: 2025-04-29
order: 8
categories:
  - javascript
---

## Podstawowe koncepcje

W JavaScript obiekty są przekazywane przez referencję, a nie przez wartość. Oznacza to, że kiedy przypisujesz obiekt do nowej zmiennej, obie zmienne wskazują na ten sam obiekt w pamięci:

```javascript
const original = { a: 1, b: 2 };
const copy = original; // To nie jest klonowanie, tylko kopia referencji
copy.a = 100;
console.log(original.a); // 100 - oryginalny obiekt został zmodyfikowany
```

## Rodzaje klonowania

### 1. Płytkie klonowanie (Shallow Copy)

Tworzy nowy obiekt, ale właściwości, które są obiektami, wciąż wskazują na te same obiekty co w oryginale. Metody płytkiego klonowania:

- **Object.assign()**:

```javascript
const original = { a: 1, b: { c: 2 } };
const clone = Object.assign({}, original);
clone.a = 100;
clone.b.c = 200;
console.log(original.a); // 1 - wartość prymitywna została skopiowana
console.log(original.b.c); // 200 - zagnieżdżony obiekt został zmodyfikowany
```

- **Operator rozwinięcia (spread operator)**:

```javascript
const original = { a: 1, b: { c: 2 } };
const clone = { ...original };
```

- **Array.slice()** (dla tablic):

```javascript
const array = [1, 2, [3, 4]];
const clone = array.slice();
```

### 2. Głębokie klonowanie (Deep Copy)

Tworzy całkowicie niezależną kopię, gdzie wszystkie zagnieżdżone obiekty są również klonowane. Metody głębokiego klonowania:

- **JSON.parse (JSON.stringify())**:

```javascript
const original = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(original));
clone.b.c = 200;
console.log(original.b.c); // 2 - oryginalny obiekt nie został zmieniony
```

Ograniczenia tej metody:

- Nie obsługuje funkcji
- Nie obsługuje wartości `undefined`
- Nie obsługuje obiektów cyklicznych
- Nie obsługuje instancji `Map`, `Set`, `Date` (konwertuje daty na stringi)

Może prowadzić do problemów z wydajnością dla dużych obiektów

- **Biblioteki zewnętrzne**:

```javascript
// Lodash
const clone = _.cloneDeep(original);
```

- **structuredClone()** - nowa metoda natywna

Od 2022 roku (wbudowane w przeglądarki i Node.js >=17), JavaScript wprowadził natywną metodę do głębokiego klonowania:

```javascript
const original = { a: 1, b: { c: 2 }, d: new Date() };
const clone = structuredClone(original);
```

Zalety `structuredClone()`:

- Obsługuje obiekty cykliczne
- Obsługuje większość wbudowanych typów (`Map`, `Set`, `Date`, `ArrayBuffer`, etc.)
- Natywna metoda (nie wymaga importowania bibliotek)

Ograniczenia:

- Nie obsługuje funkcji
- Nie obsługuje DOM nodes

## Porównanie metod klonowania

| **Metoda**             | **Typ klonowania** | **Zalety**               | **Wady**                                           |
|------------------------|--------------------|--------------------------|----------------------------------------------------|
| `=` (przypisanie)      | Kopia referencji   | Szybkie                  | Nie jest klonowaniem                               |
| `Object.assign()`      | Płytkie            | Proste, szybkie          | Nie klonuje zagnieżdżonych obiektów                |
| Spread `{...obj}`      | Płytkie            | Czytelna składnia        | Nie klonuje zagnieżdżonych obiektów                |
| `JSON.parse/stringify` | Głębokie           | Nie wymaga bibliotek     | Nie obsługuje funkcji, cykli, specjalnych obiektów |
| `structuredClone()`    | Głębokie           | Natywne, obsługuje cykle | Nie obsługuje funkcji                              |
| Biblioteki (lodash)    | Głębokie           | Wszechstronne            | Wymaga dodatkowej zależności                       |
