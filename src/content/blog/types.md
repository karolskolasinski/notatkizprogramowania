---
title: Types
description: >-
  Typy proste i złożone, przechowywanie danych w pamięci, konwersja typów oraz
  POJO w języku Java
pubDate: 2026-08-23
order: 14
categories:
  - java
---
## Typy proste

1. `char` - reprezentuje litery (wielkie i małe), cyfry i inne symbole. Każdy znak to tylko jedna litera ujęta w pojedyncze cudzysłowy. Ten typ ma taki sam rozmiar jak `short` (2 bajty = 16 bitów). Zmienne typu char mają wartości odpowiadające dowolnemu znakowi kodowania UTF-16.
2. `boolean` - reprezentuje wartość typu logicznego. Może przechowywać tylko dwie wartości: `true` i `false`. Przedstawia tylko jeden bit informacji, ale jego rozmiar nie jest dokładnie określony.
3. `byte` - rozmiar 8 bitów (1 bajt), zakres od -128 do 127
4. `short` - rozmiar 16 bitów (2 bajty), zakres od -32 768 do 32 767
5. `int` - rozmiar 32 bity (4 bajty), zakres od -2 147 483 648 do 2 147 483 647
6. `long` - rozmiar 64 bity (8 bajtów), zakres od -(2^63) do (2^63)-1 (posiadają przyrostek **L**, lub **l**)
7. `float` - reprezentuje wartości pojedynczej precyzji (32 bity, precyzja do 7 cyfr) (posiadają przyrostek **F**, lub **f**)
8. `double` - reprezentuje wartości podwójnej precyzji (64 bity, precyzja do 16 cyfr) (posiadają przyrostek **D**, lub **d**)

## Typ prosty a typ złożony

* typ złożony dziedziczy z klasy Object
* każdy typ prosty ma swój odpowiednik w typie złożonym
* do typów złożonych zalicza się `String`

Podstawowa różnica polega na tym, że zmienna typu pierwotnego przechowuje rzeczywiste wartości, podczas gdy zmienna typu referencyjnego przechowuje adres w pamięci (odniesienie), w którym znajdują się dane. Dane można przedstawić jako złożoną strukturę, która zawiera inne typy danych jako ich części.

Istnieją dwie główne przestrzenie pamięci: stos i sterta. Wszystkie wartości typów pierwotnych są przechowywane w pamięci stosu, ale zmienne typów referencyjnych przechowują adresy obiektów znajdujących się w pamięci sterty.

![75](@assets/posts/types/stack-heap.png)

Sposób przechowywania danych wpływa również na mechanizm przypisywania wartości zmiennej do innej zmiennej:

* typy pierwotne: wartość jest właśnie kopiowana;
* typy odwołań: adres do wartości jest kopiowany (dane są wspólne dla kilku zmiennych).

Oto fragment kodu, który to demonstruje:

```java
int a = 100;
int b = a; // 100 is copied to b

String language = new String("java");
String java = language;
```

Zmienna `b` ma kopię wartości przechowywanej w zmiennej `a`. Ale zmienne `language` i `java` odniesienie do tej samej wartości, zamiast je kopiować. Poniższy rysunek wyraźnie pokazuje
różnicę.

![75](@assets/posts/types/assignment.png)

Pamiętaj tylko, że przypisując jedną wartość zmiennej referencyjnej innej, po prostu tworzymy kopię referencji, a nie samą wartość.

## Konwersja typów

![75](@assets/posts/types/type-conversion.png)

## POJO

Jest to klasa zawierająca pola oraz metody dostępowe (settery oraz gettery). Należy pamiętać, że w obiektach POJO nie umieszczamy logiki biznesowej.

## Formatted output

Użycie w metodach `System.out.printf()` oraz `String.format()`:

* `%c` wstawia `char`
* `%s` wstawia `String`
* `%d` wstawia `int`, `short`, `byte`, `long`
* `%2f` wstawia `double`, `float` do 2 miejsc po przecinku
* `%n` wstawia nową linię (newline)
