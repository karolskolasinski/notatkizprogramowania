---
title: Static
description: Metody i pola statyczne w języku Java
pubDate: 2026-08-23
order: 12
categories:
  - java
---

## Static

Metoda statyczna może mieć argumenty takie jak zwykła metoda lub nie mieć żadnych argumentów. Jednak w przeciwieństwie do zwykłych metod, metody statyczne mają kilka specjalnych cech:

- metoda statyczna może uzyskać dostęp tylko do pól statycznych, nie może uzyskać dostępu do pól niestatycznych (z wnętrza metody statycznej nie możemy odwoływać się do pól i metod nie zadeklarowanych jako statyczne)
- metoda statyczna może wywołać inną metodę statyczną, ale nie może wywołać metody instancji
- metoda statyczna nie może odwoływać się do słowa kluczowego `this`, ponieważ w kontekście statycznym nie ma instancji

Zwykłe metody mogą jednak uzyskać dostęp do pól i metod statycznych. Dodatkowo metody i zmienne zadeklarowane jako `static` związane są z konkretną klasą, a nie jej instancją - obiektem. `static` oznacza, że coś istnieje zawsze. Nie trzeba tworzyć instancji klasy, żeby wywołać metodę statyczną. Na przykład, zamiast:

```java
package sample;

public class Sample {
  public static void main(String[] args) {
    Matematyka test = new Matematyka();

    double wynik = test.dodaj(10, 20);

    System.out.println(wynik);
  }
}

class Matematyka {
  double dodaj(double a, double b) {
    return a + b;
  }
}
```

można zastosować `static` i zmienić na coś takiego:

```java
package sample;

public class Sample {
  public static void main(String[] args) {
  // Matematyka test = new Matematyka();

  double wynik = Matematyka.dodaj(10, 20);

  System.out.println(wynik);
  }
}

class Matematyka {
  static double dodaj(double a, double b) {
    return a + b;
  }
}
```
