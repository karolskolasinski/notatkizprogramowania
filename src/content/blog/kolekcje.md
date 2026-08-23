---
title: Kolekcje
description: Kolekcje w języku Java (List, Set, Map, Queue)
pubDate: 2026-08-23
order: 3
categories:
  - java
---

## Kolekcje

- wszędzie gdzie występuje `Linked` zachowywana jest kolejność wstawiania
- dostęp do pierwszego i ostatniego elementu listy zawsze odbywa się w stałym czasie, O (1) ponieważ linki są trwale przechowywane w pierwszym i ostatnim elemencie, więc dodanie pozycji na koniec listy nie oznacza, że musisz iterować całą listę w poszukiwaniu ostatniego elementu. Jednak dostęp do elementu bądź ustawienie elementu za pomocą jego indeksu wymaga czasu O (n) w przypadku
  `LinkedList`
- w ogólnym przypadku `LinkedList` traci do `ArrayList` w zużyciu pamięci i szybkości operacji. Ale to zależy od problemu, który próbujesz rozwiązać.

## Immutable lists

Najprostszym sposobem utworzenia listy jest wywołanie metody `of` interfejsu `List`. Przed wersją Java 9 innym sposobem tworzenia niemodyfikowalnych list było użycie `Arrays.asList(...)`.

```java 
List<String> emptyList = List.of(); // 0 elements 
List<String> names = List.of("Larry", "Kenny", "Sabrina"); // 3 elements 
List<Integer> numbers = List.of(0, 1, 1, 2, 3, 5, 8, 13); // 8 elements 
```

Zwraca immutable list zawierającą wszystkie przekazane elementy lub pustą listę. Użycie tej metody jest wygodne podczas tworzenia stałych list lub testowania kodu. Wykonajmy kilka operacji:

```java
List<String> daysOfWeek = List.of( "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" );

System.out.println(daysOfWeek.size()); // 7 System.out.println(daysOfWeek.get(1)); // Tuesday
System.out.println(daysOfWeek.indexOf("Sunday")); // 6

List<String> weekDays = daysOfWeek.subList(0, 5); System.out.println(weekDays); // [Monday, Tuesday, Wednesday, Thursday, Friday] 
```

Ponieważ jest immutable, będą działać tylko metody, które nie zmieniają elementów na liście. Inne rzucą wyjątek.

```java 
daysOfWeek.set(0, "Funday"); // throws UnsupportedOperationException
daysOfWeek.add("Holiday"); // throws UnsupportedOperationException
```

## Mutable lists

Kiedy musisz użyć listy mutowalnej, możesz wziąć jedną z dwóch powszechnie używanych implementacji mutowalnych interfejsu `List`.

```java
List<Integer> numbers = new ArrayList<>(); 
numbers.add(15); 
numbers.add(10);
numbers.add(20);

System.out.println(numbers); // [15, 10, 20]

numbers.set(0, 30); // no exceptions here

System.out.println(numbers); // [30, 10, 20]
```

Jeśli masz immutable list, możesz pobrać z niej mutowalną wersję, używając następującego kodu:

```java
List<String> immutableList = Arrays.asList("one", "two", "three"); 
List<String> mutableList = new ArrayList<>(immutableList);
```

## Array

Tablica jest jednym z typów kolekcji.

```java
public class Array2D { public static void main(String[] args) { 
  String[][] salutation = {
    //[?][0] [?][1] [?][2] {"Mr. ", "Mrs. ", "Ms. "},
    //[0][?] {"Kumar", "White", "Rose"} 
    //[1][?] };
  
                       //Mr.                Kumar:
    System.out.println(salutation[0][0] + salutation[1][0]);
  
                       //Mrs.               White:
    System.out.println(salutation[0][1] + salutation[1][1]);
  
                       //Ms.                Rose:
    System.out.println(salutation[0][2] + salutation[1][2]);
  }
}
```

## List

- zachowuje kolejność elementów
- powiększa się wraz z dodawaniem elementów
- ten sam obiekt może być przechowywany wiele razy
- można wstawić wartość `null` wiele razy
- limit pojemności liczby elementów to 32 bity (2 147 483 648), ponieważ int jest indeksem - metoda
  `size()` zwraca int.

### Przykładowe implementacje:

- `java.util.ArrayList` – najczęstszy wybór z racji najbardziej uniwersalnego zastosowania. Inne implementacje mają przewagę tylko w bardzo specyficznych przypadkach. Jeśli nie wiesz, jakiej listy potrzebujesz, wybierz tą. Preferowana, gdy częściej szukamy i odwołujemy się do obiektów
- `java.util.LinkedList` – szybsze dodawanie/usuwanie; może być traktowana jako List lub Queue, ponieważ implementuje oba te interfejsy. `LinkedList` ma przewagę w przypadku dodawania elementów pojedynczo, w dużej ilości, w sposób trudny do przewidzenia wcześniej, kiedy przejmujemy się ilością zajmowanej pamięci

### Niektóre metody:

- `add(E e)` – dodaje element na koniec listy
- `add(E e, int index)` – dodaje element na wybraną pozycję (nie usuwa elementu już tam się znajdującego)
- `remove(int index)` – usuwa element pod wskazanym indeksem
- `remove(E e)` – usuwa pierwsze wystąpienie wskazanego elementu (obiektu)
- `set(E e, int index)` – wstawia element na wybraną pozycję (tym samym poprzednio znajdujący się element zostaje usunięty)
- `get(int index)` – zwraca element o wybranym indeksie
- `addAll(Collection)` – dodaje wszystkie elementy z jednej kolekcji do drugiej i wstawia je na koniec
- `contains(E e)` – zwraca `true` jeżeli lista zawiera dany element
- `isEmpty()` – zwraca `true` jeśli lista jest pusta
- `size()` – zwraca aktualny rozmiar listy
- `indexOf(E e)` – wyszukuje element na liście i zwraca pierwszy indeks wystąpienia
- `lastIndexOf(E e)` – j.w. ale zwraca ostatnie wystąpienie

### Przykład:

```java
List<String> komputery = new LinkedList<>();

komputery.add("ZX Spectrum"); 
komputery.add("Commodore 64");

List<String> ulubione = new LinkedList<>(); 
ulubione.add("Commodore 64");
ulubione.addAll(komputery);

System.out.println(ulubione.get(1));
System.out.println(ulubione.indexOf("Commodore 64"));
```

## Set

- kolejność nie ma znaczenia (nie pozwala na bezpośredni dostęp do obiektu poprzez podanie np. indeksu)
- przechowuje elementy unikalne - ten sam obiekt może znajdować się w zbiorze tylko raz (nie pozwala przechowywać duplikatów)
- można wstawić wartość `null` jeden raz
- element młodszy nadpisuje element starszy
- aby dostać się do obiektu musimy skorzystać z pętli `foreach` lub specjalnego typu `Iterator`

### Przykładowe implementacje:

- `java.util.HashSet` – najczęściej występująca – dobra wydajnościowo; brak zachowania kolejności
- `java.util.TreeSet` – umieszcza nowe elementy kolekcji poprzez użycie `Comparatora`; wszystkie elementy od razu posortowane i zachowują swoją kolejność. Implementacja oparta o drzewa czerwono czarne, która oprócz unikalności elementów gwarantuje nam uporządkowanie wstawianych elementów zgodnie z naturalnym porządkiem. Porządek ten wyznaczany jest poprzez implementację interfejsu
  `Comparable` lub zastosowanie odpowiedniego `Comparatora` (oznacza to, że elementy w zbiorze muszą implementować interfejs `Comparable` lub trzeba dostarczyć `Comparator`).
- `java.util.LinkedHashSet` – zachowuje kolejność wpisywanych elementów (jak w Liście)

### Niektóre metody:

- `add(E e)` – dodawanie elementu
- `addAll(Collection)` – dodaje wszystkie elementy z jednej kolekcji do drugiej
- `remove(E e)` – usuwa wybrany element po wartości, ponieważ `Set` nie ma indeksów
- `isEmpty()` – zwraca `true` jeśli zbiór jest pusty
- `size()` – zwraca aktualny rozmiar zbioru
- `iterator()` – zwraca obiekt typu `Iterator` umożliwiający iterowanie zbioru
- Ze względu na brak zachowania kolejności zbiór nie posiada metod takich jak `get`, `indexOf`,
  `lastIndexOf`. Zamiast tego posiada metody:
    - `contains(E e)` – zwraca `true` jeśli element znajduje się w zbiorze
    - `containsAll` – sprawdza czy zbiór zawiera wszystkie elementy zbioru

### Przykład HashSet

```java
Set<String> komputery = new HashSet<>();

komputery.add("ZX Spectrum");
komputery.add("Commodore 64"); 
komputery.add("Commodore 64");
komputery.add("Amiga 500");

System.out.println(komputery.size());
System.out.println(komputery.contains("Commodore 64"));
komputery.remove("Commodore 64");
System.out.println(komputery.contains("Commodore 64"));
```

### Przykład TreeSet:

```java
//Tworzymy zmienną o typie interfejsu i inicjalizujemy:
Set<String> imiona = new TreeSet<>();

imiona.add("Zosia"); 
imiona.add("Krysia"); 
imiona.add("Albert");
imiona.add("Krysia");

for (String imie: imiona) { 
  System.out.println(imie); 
 }
 ```

## Map

- mapy nie implementują interfejsu Collection
- przechowuje pary klucz: wartość
- w odróżnieniu od indeksu w liście (gdzie wymaga się liczb całkowitych), kluczem może być inny obiekt niemodyﬁkowalny
- klucz musi być unikalny
- wartości mogą się powtarzać

### Przykładowe implementacje:

- `java.util.HashMap` – najczęściej występująca – dobra wydajnościowo; brak zachowania kolejności
- `java.util.LinkedHashMap` – zachowuje kolejność wpisywanych elementów (jak w Liście)
- `java.util.TreeMap` – umieszcza nowe elementy kolekcji poprzez użycie `Comparatora`; wszystkie elementy od razu posortowane względem klucza i zachowują swoją kolejność

### Niektóre metody:

- `put(Key key, Value value)` – umieszcza nową parę klucz: wartość w mapie (lub nadpisanie, gdy klucz istnieje!)
- `putAll` – dodaje wszystkie elementy z jednej mapy do drugiej
- `containsKey(Object o)` – zwraca `true` jeśli mapa zawiera wskazany klucz
- `containsValue(Object o)` – zwraca `true` jeśli mapa zawiera wskazaną wartość
- `isEmpty()` – zwraca `true` jeśli mapa jest pusta
- `size()` – zwraca aktualny rozmiar mapy
- `remove(Object key)` – usuwa wybraną parę klucz : wartość na podstawie klucza
- `get(Object key)` – zwraca wartość przypisaną dla wskazanego klucza
- `keySet()` – zwraca set wszystkich kluczy mapie
- `replace(Key key, Value value)` – podmienia wartość dla wskazanego klucza

### Przykład `HashMap` z wykorzystaniem pętli foreach do iterowania:

```java
Map<String, String> procesory = new HashMap<>();

procesory.put("IBM PC", "Intel x86");
procesory.put("Atari ST", "Motorola 68000");
procesory.put("Commodore 64", "MOS 6502");
procesory.put("Amiga 500", "Motorola 68000");
procesory.put("IBM PC", "Intel x86-64");

System.out.println(procesory.size());
System.out.println(procesory.get("Amiga 500"));
System.out.println(procesory.get("IBM PC"));

//iterowanie po wartościach:
for (String wartosc: procesory.values()) {
  System.out.println(wartosc);
}

//iterowanie po kluczach:
for (String klucz: procesory.keySet()) {
  System.out.println(klucz);
  System.out.println(procesory.get(klucz));
}

//iterowanie po parach:
for (java.util.Map.Entry para: procesory.entrySet()) {
  System.out.println(para.getKey()); System.out.println(para.getValue()); 
}
```

## Queue

Pozwala na implementację kolejek typu FIFO (first-in-first-out) i FILO (first-in-last-out).

### Przykładowe implementacje:

- `java.util.ArrayDeque` — kolejka oparta o tablice, pozwala na dostęp zarówno od strony głowy
  `getFirst()` jak i ogona `getLast()`. Elementy przechowywane są w kolejności dodawania
- `java.util.PriorityQueue` – pozwala na przechowywanie i dostęp do elementów wg określonego kryterium (komparatora), sortując elementy wg niego w momencie dodania do kolejki. Przydatna w sytuacjach gdy mamy np. kolejkę obiektów do przetworzenia i chcemy zawsze obsłużyć ważniejsze szybciej niż te mniej ważne

### Niektóre metody:

- `boolean offer(E e)` wstawia określony element do kolejki, jeśli jest to możliwe od razu bez naruszania ograniczeń pojemności; zwraca `true` / `false` w zależności od wyniku tej operacji
- `E remove()` pobiera i usuwa head tej kolejki; jeśli jest pusty, metoda rzuca
  `NoSuchElementException`
- `E poll()` pobiera i usuwa head tej kolejki lub zwraca `null` jeśli ta kolejka jest pusta
- `E element()` pobiera, ale nie usuwa head kolejki; jeśli jest pusty, metoda rzuca
  `NoSuchElementException`
- `E peek()` pobiera, ale nie usuwa head tej kolejki lub zwraca `null` jeśli ta kolejka jest pusta
- `add(E element)` metoda działa tak samo jak `offer(E e)` ale rzuca `IllegalStateException` jeśli nie jest obecnie dostępna przestrzeń;

### Przykład

```java
Queue<String> kolejka = new ArrayDeque<String>();
kolejka.add("pierwszy");
kolejka.add("drugi");

System.out.println(kolejka.remove()); //wypisze "pierwszy"
```