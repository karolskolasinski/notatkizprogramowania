---
title: Exceptions
description: Rodzaje, hierarchia i obsługa wyjątków w języku Java
pubDate: 2026-08-23
order: 4
categories:
  - java
---

## Wyjątek

Jest to zmiana kolejności wykonywania kodu. Powoduje przerwanie aktualnie wykonywanych instrukcji. Dzięki wyjątkom można zgłosić wiele takich sytuacji, np. jeżeli szukamy w bazie danych ocen studenta, to spodziewamy się otrzymać listę ocen, ale może się zdarzyć, że student nie ma ocen, student nie istnieje i wiele podobnych. Wyjątki można przekazywać w górę, aby zgłosić taką wyjątkową sytuację.

## Rodzaje i hierarchia wyjątków

![](@assets/posts/exceptions/exceptions.png)

## Wyjątki jawne (Exception)

- informują nas o potencjalnych problemach, jakie mogą wystąpić przy korzystaniu z danej metody
- wymuszają obsługę błędu
- wywoływanie wyjątków odbywa się poprzez słowo kluczowe `throw`
- wyjątki są obiektami dlatego przy ich wywoływaniu korzystamy z standardowego słówka `new`
- wyjątki mogą posiadać opcjonalną wiadomość
- deklaracja metody musi posiadać informację o potencjalnych wyjątku jawnych np. `throws Exception`
- wyjątki obsługujemy poprzez ich przechwycenie, a następnie wykonanie instrukcji w bloku `catch`
- możemy obsłużyć w różny sposób różne wyjątki, w zależności od typu wyjątku zostanie wykonany właściwy fragment kodu
- dodatkowy blok `finally` jest wykonywany niezależnie od wystąpienia wyjątku lub jego braku
    - `IOException` (wyjątki po nim dziedziczące) — rzucany w przypadku problemów z systemem wejścia/wyjścia, czyli najogólniej rzecz ujmując, kiedy wystąpi problem przy pracy z plikami lub z transmisją danych za pośrednictwem internetu

## Błędy (Error)

- nieoczekiwane wydarzenia związane z problemami niezależnymi od napisanej aplikacji
- Oracle rekomenduje, aby ich nie obsługiwać i zamiast tego wypisać w logach cały stacktrace zdarzenia
    - `StackOverflowError` — przepełnienie stosu wywołań
    - `OutOfMemoryError` — błąd braku pamięci

## Wyjątki niejawne (RuntimeException)

- zdarzenia wynikające z logiki aplikacji, z którymi aplikacja nie powinna być sobie w stanie poradzić, takie jak:
    - próba wykonania metody na pustej referencji (`null`)
    - próba podzielenia przez zero
    - odwołanie się do nieistniejącego indeksu tablicy
- brak deklaracji `throws` w metodzie
- kompilator nie wymusza obsługi wyjątku
- Nieobsłużony wyjątek wpadając do bloku `main` zakończy działanie programu
    - `NullPointerException` — rzucany kiedy próbujesz wywołać metodę na zmiennej, której wartość to
      `null`
    - `IllegalArgumentException` — rzucany, kiedy przekazywany argument jest z jakiegoś powodu nieprawidłowy (walidacja wewnątrz metod)
    - `NumberFormatException` — rzucany, kiedy próbujemy zamienić na liczbę np. obiekt typu String, który zawiera nie tylko cyfry
    - `IndexOutOfBoundException` — rzucany, kiedy próbujemy się odwołać do nieistniejącego elementu tablicy lub listy

## Tworzenie własnych wyjątków

- zamiast korzystać z predefiniowanych wyjątków możemy bardzo łatwo tworzyć własne
- samodzielnie utworzony wyjątek może stanowić bardziej czytelny błąd
- pomaga również unikać podejścia "złap je wszystkie"
- W celu utworzenia własnego wyjątku wystarczy odziedziczyć po innym wyjątku

Klasa `Club`:

```java
public class Club {
  public void enter(Person person) throws NoAdultException {
    if (person.getWiek() < 18) {
      throw new NoAdultException();
    } else {
      System.out.println('możesz wejść');
    }
  }
}
```

Klasa `NoAdultException`:

```java
public class NoAdultException extends Exception {
  public NoAdultException() {
    super('Nie możesz wejść dzieciaku!');
  }
}
```

Klasa `Main`:

```java
Club club = new Club();
Person person = new Person(imie, nazwisko, wiek);
try {
  club.enter(person);
} catch (NoAdultException e) {
  System.out.println(e.getMessage());
}
```
