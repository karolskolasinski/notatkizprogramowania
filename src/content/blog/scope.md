---
title: Scope
description: Scope
pubDate: 2025-04-30
order: 10
categories:
  - javascript
---

Scope w JavaScript odnosi się do dostępności zmiennych w różnych częściach kodu. Innymi słowy, scope
(zakres) określa, gdzie dana zmienna jest widoczna i gdzie można się do niej odwołać. W JavaScript
wyróżniamy trzy główne typy scope:

### 1. **Global Scope (zakres globalny)**

Zmienna zdefiniowana **poza funkcją** lub blokiem kodu ma zakres globalny. Jest dostępna w całym
kodzie – wewnątrz funkcji, bloków i oczywiście w tym samym pliku/skrypcie.

```javascript
let globalVar = "jestem globalna";

function pokaz() {
  console.log(globalVar); // działa
}

pokaz();
```

### 2. **Local Scope (zakres lokalny)**

Zmienna zadeklarowana **wewnątrz funkcji** ma zakres lokalny – działa tylko w tej funkcji i nie jest
widoczna poza nią.

```javascript
function pokaz() {
  let lokalna = "jestem lokalna";
  console.log(lokalna);
}

pokaz();
// console.log(lokalna); // błąd - zmienna nie jest dostępna poza funkcją
```

### 3. **Block Scope (zakres blokowy)**

Zmienna zadeklarowana za pomocą `let` lub `const` **w bloku `{}`** (np. w pętli lub instrukcji
warunkowej) ma zakres blokowy – działa tylko wewnątrz tego bloku.

```javascript
{
  let blokowa = "jestem blokowa";
  console.log(blokowa); // działa
}
// console.log(blokowa); // błąd - poza zakresem
```

Dla porównania: `var` **nie ma** zakresu blokowego, tylko funkcjonalny:

```javascript
{
  var zasięg = "nie jestem blokowa";
}
console.log(zasięg); // działa, bo var ignoruje blok
```

### Podsumowanie różnic

| **Rodzaj scope**  | **Gdzie działa**             | **Słowa kluczowe** |
| ----------------- | ---------------------------- | ------------------ |
| Global            | wszędzie                     | var, let, const    |
| Local (funkcyjny) | tylko wewnątrz danej funkcji | var, let, const    |
| Block             | tylko wewnątrz bloku `{}`    | let, const         |
