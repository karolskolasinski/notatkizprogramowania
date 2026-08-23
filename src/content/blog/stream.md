---
title: Stream
description: Streamy, ich najważniejsze metody oraz podstawy wyrażeń lambda w języku Java
pubDate: 2026-08-23
order: 13
categories:
  - java
---

## Stream

Stream w największym skrócie oznacza sekwencję elementów. Stosuje się po to aby zapewnić więcej czytelności oraz łatwiej i szybciej móc napisać kod wykonujący bardziej skomplikowane operacje na dużych zbiorach danych. Kod co prawda jest krótszy, ale nie jest szybszy niż np. pętla, ponieważ do każdego elementu kolekcji, na którym operujemy **tworzony** jest obiekt, który musi **przetworzyć** dane, a na koniec GarbageCollector musi go **pochłonąć**. Tworzą się klasy anonimowe, po zakończeniu streama nie mają już żadnej referencji, więc można je usunąć.

Na przykład taki zapis:

```java
public static void printAllArcadeNames(List<Arcade> arcades) {
  arcades.stream()
    .map(Arcade::getName)
    .forEach(System.out::println);
}
```

jest tym samym co:

```java
public static void printAllArcadeNames(List<Arcade> arcades) {
  arcades.stream()
    .map(new Function<Arcade, String>() {
      @Override
      public String apply(Arcade arcade) {
        return arcade.getName();
      }
    })
    .forEach(new Consumer<String>() {
      @Override
      public void accept(String s) {
          System.out.println(s);
      }
    });
}
```

## Metody

- `.map(Function<T, R>)` - używamy po to, by "mapować" obiekty, czyli przekształcać jeden obiekt w inny.

```java
List<String> letters = Arrays.asList("a", "b", "c", "d");
List<String> collect = letters.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());

System.out.println(collect); //[A, B, C, D]
```

W tym przykładzie stworzyliśmy nową listę, w której Stringi zostały zmapowane na Stringi pisane wielką literą.

- `.filter(Predicate<T>)` - będziemy używać do "filtrowania" naszego streama, czyli wybierania tylko pożądanych elementów.

```java
List<Person> persons = ...
Stream<Person> personsOver18 = persons.stream()
  .filter(p -> p.getAge() > 18);
```

W tym przykładzie otrzymaliśmy stream z osobami powyżej 18 lat.

- `.flatMap(Function<T, R>)` - ta metoda używana jest do "spłaszczania" streama streamów.

```java
List<String> pinkFloyd = Arrays.asList("Gilmour", "Waters", "Wright", "Mason", "Barrett");
List<String> ledZeppelin = Arrays.asList("Page", "Plant", "Jones", "Bonham");
List<List<String>> woodstockBands = new ArrayList<>();
  woodstockBands.add(pinkFloyd);
  woodstockBands.add(ledZeppelin);

List<String> lineUp = woodstockBands.stream()
  .flatMap(x -> x.stream())
  .collect(Collectors.toList());
```

W tym przykładzie "spłaszczyliśmy" listę list na jedną listę. Wynikiem jest lista Stringów zawierająca wszystkie Stringi z listy źródłowej.

- `collect(Collector<T, A, R>)` - tej metody można użyć do "zebrania" streama w kolekcję, która nas interesuje. Stream trzeba w jakiś sposób zamknąć. Najczęściej będziemy oczekiwać kolekcji, ale mogą to być pojedyncze obiekty. Poniżej przykłady:

```java
List<String> result = givenList.stream()
  .collect(toList());

Set<String> result = givenList.stream()
  .collect(toSet());

List<String> result = givenList.stream()
  .collect(toCollection(LinkedList::new))

String result = givenList.stream()
  .collect(joining());

String result = givenList.stream()
  .collect(joining(" "));

Long result = givenList.stream()
  .collect(counting());
```

## Czym są lambdy?

Java to obiektowy język programowania, jednak lambdy pozwalają na pisanie kodu w sposób funkcyjny. Oznacza to, że zamiast operować na stanach obiektów możemy bezpośrednio deklarować, co chcemy zrobić. Odnosząc lambdy do programowania obiektowego, możemy o nich myśleć jak o klasach tymczasowych zawierających jedną metodę. Lambdy to obiekty, zawierające fragment kodu: funkcję, a także specyficzne atrybuty i parametry ważne dla nich (środowisko, w ramach którego operuje funkcja). Wyrażenia lambda wykorzystują koncept, który nazywa się *deferred execution*, czyli takie, które są wykonywanie z odroczeniem.

Przykład

```java
c -> c.canSing();
```

Taki zapis mówi Javie, że ma wywołać metodę z Celebrity jako parametrem i zwrócić boolean jako wynik `c.canSing()`. Równoważny zapis poniżej:

```java
(Celebrity c) -> { return c.canSing(); }
```

To co jeszcze warto wiedzieć o lambdach, to to, że mają one dostęp do zmiennych. Warto pamiętać, że wyrażenia lambda mają dostęp do pól klasy oraz statycznych zmiennych. Jeśli chodzi o parametry metody i zmienne lokalne, to ten dostęp jest możliwy tylko wtedy, gdy nie przypisujemy do nich nowych wartości. Czyli:

```java
(a, b) -> { int a = 0; return 5;}  // kod się nie skompiluje

(a, b) -> { int c = 0; return 5; } // to jest ok
```
