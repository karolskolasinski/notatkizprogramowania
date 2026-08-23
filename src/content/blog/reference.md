---
title: Reference
description: Referencje do obiektów, String Pool oraz koncepcja Immutable w języku Java
pubDate: 2026-08-23
order: 11
categories:
  - java
---
## Referencja

Jest to zmienna obiektowa, która wskazuje (odwołuje się) do obiektu.

![](@assets/posts/reference/reference.png)

Możemy teraz wywoływać metody klasy `String` dla tego obiektu `(String "rower")`, zarówno za pośrednictwem zmiennej `a` jak i `b` - i będzie to miało dokładnie ten sam skutek. Koniec końców metody te będą wywoływane na tym samym obiekcie klasy `String`.

Zmienna obiektowa nie jest obiektem, tylko referencją do obiektu. Wartość każdej zmiennej obiektowej jest referencją do obiektu, który jest przechowywany gdzieś indziej. Wartość zwracana przez operator `new` też jest referencją. Instrukcja typu:

```java
Date deadline = new Date();
```

składa się z dwóch części. Wyrażenie `new Date();` tworzy obiekt typu `Date`, a jego wartością jest referencja do tego nowo utworzonego obiektu.

Referencja zostaje zapisana w zmiennej `deadline`. Aby zaznaczyć, że zmienna obiektowa nie odwołuje się do żadnego obiektu, trzeba jej wartość ustawić na `null`, bo zmienne obiektowe nie są automatycznie inicjalizowane wartością `null`.

## String Pool

W Javie wszystkie obiekty przechowywane są w pamięci w stercie pamięci (**Memory Heap**). To na niej działa Garbage Collector i jeśli dostaniemy kiedyś `OutOfMemoryException` to znaczy, że zbytnio zaszaleliśmy z tworzeniem nowych bytów i zapełniliśmy całą stertę szybciej niż zwalnialiśmy miejsce. W tej stercie znajduje się wydzielony obszar pamięci przeznaczony do przechowywania Stringów, których to w programie potrafi być bardzo, bardzo dużo - dlatego też są obsługiwane w specjalny sposób. Właśnie do tego służy **String Pool**.

Za każdym razem, gdy stworzymy nowego Stringa w ten sposób `String name = "John"`, to ów String jest tworzony w **String Pool** i tam jest przechowywany. Jakiś czas później, przy tworzeniu innego Stringa `String anotherName = "John"` nie tworzy się kolejny wyraz "John" w pamięci, lecz oba wskazują na ten sam element w **String Pool**. Dlatego też w tym przypadku porównanie `name == anotherName` zwróci nam `true`, bo w tym wypadku obie referencje wskazują na ten sam obiekt.

Sprawy mają się inaczej, gdy stworzymy Stringa w ten sposób `String yetAnotherName = new String("John")`. Wówczas jest tworzony za każdym razem nowy obiekt w **Memory Heap**, a dopiero on wskazuje na obiekt w **String Pool**. Dlatego porównanie `yetAnotherName == name` zwróci `false`, bo fizycznie są to referencje do dwóch różnych obiektów. Dlatego też po pierwsze nie powinno się robić nigdy `new String("...")`, bo tworzy to dwa obiekty (w **Memory Heap** i opcjonalnie w **String Pool**, zamiast tylko w **String Pool**). Po drugie do porównywania Stringów używamy metody `.equals` zamiast `==`, gdyby właśnie ktoś przypadkiem stworzył tekst za pomocą `new String`. Metoda `.equals` porównuje faktyczne wartości (czyli w przypadku Stringów to co jest w **String Pool**), a nie na co wskazuje referencja.

## Immutable

W programowaniu istnieje ważna koncepcja zwana **Immutable** i oznacza, że obiekt zawsze przechowuje te same wartości. Jeśli musimy zmodyfikować te wartości, powinniśmy utworzyć nowy obiekt. Typowym przykładem jest klasa **String**. **Stringi** są niezmiennymi obiektami, więc wszystkie operacje na nich generują nowy ciąg. Niezmienne typy umożliwiają pisanie programów z mniejszą liczbą błędów.

Klasa `Patient` nie jest niezmienna, ponieważ istnieje możliwość zmiany dowolnego pola obiektu.

```java
Patient patient = new Patient();

patient.name = "Mary";
patient.name = "Alice";
```
