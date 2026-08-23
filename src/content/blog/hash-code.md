---
title: hashCode
description: Jak działa hashCode oraz nadpisywanie metod equals i hashCode w języku Java
pubDate: 2020-08-22
order: 6
categories:
  - java
---

## hashCode

Może służyć jako kryterium porównania dla elementów w zbiorach. Dla przykładu w zbiorze mamy dwa obiekty przyjmujące jako parametr PESEL:

```java
Set<Osoba> zbior = new HashSet<>();
Osoba a = new Osoba ("90012311122")
Osoba b = new Osoba ("90012311122")
```

W rzeczywistości jest to ta sama osoba. Domyślnym kryterium porównania jest hashCode (generowany na podstawie miejsca w pamięci) - metoda `equals()` **domyślnie porównuje ich** `hashCode`, czyli **referencje** (to, jakie miejsce w pamięci zajmują). Ponieważ są to dwie instancje, będą miały różny hashCode, a ponieważ jest to ta sama osoba, wynik porównania powinien zwrócić wartość `true`. Aby to osiągnąć trzeba nadpisać metody `equals()` i `hashCode()`.

```java
@Override
public boolean equals(Object o) {
if (this == o) return true;
if (!(o instanceof Osoba)) return false;
Osoba osoba = (Osoba) o;
  return Objects.equals(pesel, osoba.pesel);
}

@Override
  public int hashCode() {
  return Objects.hash(pesel);
}
```

Wówczas `hashCode` są generowane na podstawie pól, w tym przypadku PESEL. Metodę generuje IntelliJ. Inaczej mówiąc, aby metoda `equals` porównująca `hashCode` obiektów dała taki sam wynik, musi mieć do porównania dwa takie same `hashCode`, które będą takie same kiedy zostaną wygenerowane na podstawie pól.

Po hashCode dokonywane jest porównanie w HashMap czy HashSet (we wszystkim co ma Hash w nazwie) czy obiekty są unikalne. Jedyną klasą, która ma nadpisaną metodę `equals` jest `String`. Porównuje ona domyślnie zawartość (treść) stringa. Wszystkie inne klasy normalnie porównują ze sobą referencje.

## equals & hash code

<iframe class="aspect-video w-full lg:max-w-2/3 pb-8"
src="https://www.youtube.com/embed/IsVnZVfCr50"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>