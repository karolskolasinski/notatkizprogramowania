---
title: Klasa abstrakcyjna
description: >-
  Różnice między klasą abstrakcyjną a interfejsem w języku Java oraz słowo
  kluczowe final.
pubDate: 2020-01-26
order: 1
categories:
  - java
---

## Klasa abstrakcyjna a Interfejs - porównanie

| Cecha                                 | Klasa abstrakcyjna | Interfejs             |
|---------------------------------------|--------------------|-----------------------|
| Pola                                  | ✔️                 | ❌                    |
| Pola - wyjątek                        | `final`            | `public static final` |
| Konstruktor                           | ✔️                 | ❌                    |
| Dziedziczenie / Implementacja         | 1 (`extends`)      | ∞ (`implements`)      |
| Instancja                             | ❌                 | ❌                    |
| Metody                                | `abstract` + inne  | `public abstract`     |
| Metoda abstrakcyjna - ciało           | brak               | brak                  |
| Metoda abstrakcyjna - ciało - wyjątek | brak               | `default`             |

## abstract class

- Tworzą warstwę abstrakcji, która jest mało precyzyjna.
- Mają upraszczać rzeczywistość.
- Nie można stworzyć instancji klasy abstrakcyjnej.

### Przykład

Mamy w programie taką oto klasę abstrakcyjną:

```java
abstract class MySwingWorker<T, V> extends SwingWorker<T, V> {
    public final void myPublish(V... args) {
    publish(args);
  }
}
```

Wewnątrz klasy uruchomieniowej nie uda się stworzyć instancji takiego obiektu:

```java
MySwingWorker worker = new MySwingWorker(); // Error:(6, 25) java: org.path.MySwingWorker is abstract; cannot be instantiated
```

Możesz utworzyć konkretną implementację:

```java
worker = new MySwingWorker<Void, Integer>() {
  @Override 
  protected Void doInBackground() {
    TextArea.append("Performing checks..."); 
    CheckEntryAndStay(); TextArea.append("Processing terminated");

    return null;
  } 
};
```

Jest to "anonimowa" implementacja `MySwingWorker`, gdzie (jedyna, jak z tego wynika) abstrakcyjna metoda `doInBackground` została zaimplementowana.

- Nie może istnieć klasa abstrakcyjna finalna (`final`).
- Każda klasa jest abstrakcyjna, jeśli posiada chociaż jedną metodę abstrakcyjną, która:
    - posiada nazwę,
    - posiada typ zwracany,
    - może posiadać przyjmowane argumenty,
    - posiada modyfikator dostępu,
    - nie posiada ciała metody, czyli robi nic.
- Jeżeli klasy dziedziczą (`extends`) po klasie abstrakcyjnej, to klasa abstrakcyjna wymusza na nich implementację metod abstrakcyjnych.
- Mogą posiadać metody nieabstrakcyjne.
- Mogą posiadać pola.
- Można dziedziczyć tylko po jednej klasie.

## interface

- Nie mogą posiadać pól (wyjątkiem jest pole `public static final`).
- Nie ma konstruktora i nie można go stworzyć.
- Wszystkie metody w interfejsach są domyślnie publiczne i abstrakcyjne (brak innych opcji poza metodami statycznymi i domyślnymi).
- Metody nie posiadają ciała (wyjątkiem jest metoda `default`).
- Interfejsy się implementuje, a nie dziedziczy.
- Można implementować nieskończenie wiele interfejsów.

## final

- Jeżeli pole jest finalne, to nie można go zmienić.
- Jeżeli pole jest finalne, to musi być zainicjalizowane.
- Jeżeli metoda jest finalna, to nie można jej nadpisać.
- Jeżeli klasa jest finalna, to nie można po niej dziedziczyć.
