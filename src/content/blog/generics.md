---
title: Generics
description: Podstawy typów generycznych, ich deklaracja oraz porównanie z klasą Object w języku Java
pubDate: 2020-08-22
order: 5
categories:
  - java
---

## Typy generyczne

Istnieją sytuacje, w których metody i klasy nie zależą od typów danych, na których działają. Na przykład algorytm znajdujący element w tablicy - może przetwarzać tablice stringów, intów lub niestandardowych klas. Nie ma znaczenia, co przechowuje tablica: algorytm jest zawsze taki sam. Jednak nie możemy napisać go jako jednej metody, ponieważ wymaga różnych argumentów (`int[]`, `String[]`, itp). Od wersji 5 Java obsługuje programowanie generyczne, które wprowadza abstrakcje nad typami. Typy sparametryzowane pozwalają nam zadeklarować metodę lub klasę, która obsługuje różne typy w ten sam ogólny sposób. Konkretny typ jest określany tylko wtedy, gdy programista tworzy obiekt klasy lub wywołuje metodę. Takie podejście umożliwia nam pisanie bardziej abstrakcyjnego kodu i tworzenie bibliotek oprogramowania wielokrotnego użytku.

Typy generyczne to coś w rodzaju "szablonów". Pozwalają tworzyć klasy, które dopasowują się do kontekstu. Pozwala na pisanie kodu programu bez wcześniejszej znajomości typów danych, na których ten kod będzie pracował. Typ danych podaje się dopiero w momencie użycia. Typy generyczne pozwalają na unikanie rzutowania.

Konwencja nazewnicza typu danych:

- `T` – Type
- `S`, `U`, `V` – kolejne n-te typy
- `E` – Element (używany szeroko w różnych kolekcjach)
- `K` – Key
- `V` – Value
- `N` – Number

## Deklaracja klasy generycznej

Aby zadeklarować klasę generyczną, powinniśmy zadeklarować klasę z sekcją parametru typu z nawiasami ostrymi po nazwie klasy. W poniższym przykładzie klasa `GenericType` ma pojedynczy parametr typu o nazwie `T`. Zakładamy, że typ `T` jest „jakimś typem” i piszemy treść klasy niezależnie od konkretnego typu.

```java
class GenericType<T> {
  /**
   * A field of "some type"
   */
  private T t;
  
  /**
   * Takes a value of "some type" and set it to the field
   */
  public GenericType(T t) {
    this.t = t;
  }
  
  /**
   * Returns a value of "some type"
   */
  public T get() {
    return t;
  }
  
  /**
   * Takes a value of "some type", assigns it to a field and then returns it
   */
  public T set(T t) {
    this.t = t;
    return this.t;
  }
}
  ```

Aby utworzyć obiekt klasy ogólnej (standardowej lub niestandardowej), powinniśmy określić argument typu po nazwie typu.

```java
GenericType<Integer> obj1 = new GenericType<Integer>(10);
GenericType<String> obj2 = new GenericType<String>("abc");
```

Ważne jest, aby argument typu był typem referencyjnym. Nie można użyć typu pierwotnego, takiego jak `int` lub `double` jako argumentu typu. Od wersji Java 7 możliwe było zastąpienie argumentów typu wymaganych do wywołania konstruktora klasy ogólnej pustym zestawem argumentów typu, o ile kompilator może wywnioskować argumenty typu z kontekstu.

```java
GenericType<Integer> obj1 = new GenericType<>(10);
GenericType<String> obj2 = new GenericType<>("abc");
```

Para nawiasów ostrych `<>` jest nieformalnie nazywana operatorem diamentowym. Czasami zadeklarowanie zmiennej za pomocą typu ogólnego może być zbyt długie i słabo czytelne. Na szczęście możesz napisać `var` zamiast określonego typu, aby wymusić automatyczne wnioskowanie o typie na podstawie typu przypisanej wartości.

```java
var obj3 = new GenericType<>("abc");
```

Po utworzeniu obiektu z określonym argumentem typu możemy wywołać metody klasy, które pobierają lub zwracają parametr typu:

```java
Integer number = obj1.get(); // 10
String string = obj2.get();  // "abc"

System.out.println(obj1.set(20));    // prints the number 20
System.out.println(obj2.set("def")); // prints the string "def"
```

## Przykład

Na przykład wyobraźmy sobie, że chcemy tworzyć pokrowce na telefony:

```java
public class SamsungGalaxy { }

public class FuteralNaSamsunga {
  private SamsungGalaxy telefon;
  
  public FuteralNaSamsunga(SamsungGalaxy tel) {
    this.telefon = tel;
  }
}
```

Można więc stworzyć typ generyczny:

```java
public class Nokia { }

public class Apple { }

public class FuteralUniwersalny<T> {
  private T telefon;
  public FuteralUniwersalny(T tel) {
    this.telefon = tel;
  }
}
```

Użycie:

```java
FuteralUniwersalny<Nokia> nokiaFuteral = new FuteralUniwersalny<Nokia>(new Nokia());
FuteralUniwersalny<Apple> appleFuteral = new FuteralUniwersalny<Apple>(new Apple());
```

## Object a typ generyczny

Jeśli zadeklarujemy pole klasy jako `Object`, możemy przypisać do niego wartość dowolnego typu odwołania. To podejście było szeroko stosowane przed wersją Java 5.

```java
class NonGenericClass {
  private Object val;
  public NonGenericClass(Object val) {
    this.val = val;
  }
  
  public Object get() {
    return val;
   }
}
```

Możliwe jest utworzenie instancji przekazującej wartość typu `Integer` lub `Character`. W ten sposób możesz ponownie użyć tej samej klasy z polem `Object` do przechowywania różnych typów w ten sam sposób. Po wywołaniu metody `get()` otrzymujemy `Object`, a nie `String` lub `Integer`. Nie możemy pobrać stringa bezpośrednio z metody. Aby otrzymać ciąg znaków, powinniśmy wykonać jawne rzutowanie typu na klasę `String`.

```java
NonGenericClass instance2 = new NonGenericClass("abc");
String str = instance2.get(); // Compile-time error: Incompatible types
String str = (String) instance2.get(); // "abc"
```

Oczywiście to zadziała, ale co, jeśli instancja w ogóle nie przechowuje stringa? Ponieważ jest zadeklarowana jako `Object`, wartość pola może zachować dowolny typ. W takim przypadku kod zgłasza wyjątek. Oto przykład:

```java
NonGenericClass instance3 = new NonGenericClass(123);
String str = (String) instance3.get(); // throws java.lang.ClassCastException
```

Teraz możemy zobaczyć główną przewagę typów generycznych nad klasą `Object` do ponownego wykorzystania kodu. Nie ma potrzeby wykonywania jawnego rzutowania typu, w związku z czym nigdy nie otrzymujemy wyjątku runtime. Jeśli zrobimy coś nieprawidłowo, możemy to zobaczyć w czasie kompilacji.

```java
GenericType<String> instance4 = new GenericType<>("abc");

String str = instance4.get(); // There is no type-casting here
Integer num = instance4.get(); // It does not compile
```

Błąd kompilacji jest wykrywany przez programistę, a nie użytkownika programu. To sprawia, że typy generyczne są zarówno elastyczne, jak i bezpieczne. Jednocześnie praca z `Object`, który wymaga rzutowania typów jest podatna na błędy. Lepiej pozwolić, aby zajął się tym kompilator.