---
title: OOP
description: 4 paradygmaty programowania obiektowego oraz zasady SOLID w języku Java
pubDate: 2026-08-23
order: 9
categories:
  - java
---

## 4 paradygmaty programowania obiektowego

### Dziedziczenie

Jest mechanizmem, który umożliwia tworzenie nowych klas na bazie klas już istniejących (rozszerzając ich możliwości). Klasa, która dziedziczy po innej klasie, przejmuje jej cechy (pola) i zachowania (metody) oraz dodaje własne metody i pola, które służą przystosowywaniu do innych zadań. Często obiekty są bardzo podobne, więc dziedziczenie umożliwia programistom ponowne wykorzystanie wspólnej logiki i jednoczesne wprowadzenie do klas unikalnych koncepcji.

**Co dziedziczymy**

- zachowania
- cechy
- każda klasa niejawnie dziedziczy po klasie `Object` (chyba, że zdefiniujesz inną klasę po której dziedziczysz)

**Co dziedziczymy z klasy Object**

- metoda `hashCode()`
- metoda `equals()`
- metoda `toString()`
- metoda `wait()`
- metoda `notify()`
- etc.

**Czego nie dziedziczymy**

- konstruktorów
- klas i metod `final`

Zdarzają się sytuacje, kiedy chcemy, aby nie tworzono podklas jednej z klas. Klasy, których nie można rozszerzać, nazywają się klasami finalnymi (`final`). Finalna może być też metoda w klasie. W takim przypadku nie można jej przesłonić w żadnej z podklas (wszystkie metody w klasie finalnej są finalne). Również pola mogą być finalne. Wartość takiego pola nie może być zmieniana po utworzeniu obiektu. Jeśli klasa jest finalna, to tylko jej metody są finalne, nie dotyczy to pól.

### Abstrakcja

Oznacza, że obiekty powinny udostępniać uproszczoną, abstrakcyjną wersję swoich implementacji (tworzymy uproszczony model świata). Szczegóły ich pracy wewnętrznej zwykle nie są potrzebne użytkownikowi, więc nie ma potrzeby ich reprezentowania. Abstrakcja oznacza również, że zostaną przedstawione tylko najbardziej istotne cechy obiektu.

Klasa abstrakcyjna to klasa, w której umieszcza się wspólny kod dla wszystkich klas dziedziczących po tej klasie abstrakcyjnej (o ile same nie są abstrakcyjne). Nie da się też stworzyć instancji klasy abstrakcyjnej.

**Przykład**

Pojęciem abstrakcyjnym jest np. środek transportu. Środkiem transportu może być zarówno samolot jak i samochód. Zarówno samolot jak i samochód porusza się z pewną prędkością, a więc prędkość jest wspólnym parametrem. Idąc dalej samochód może być osobowy lub ciężarowy. Każdy z nich posiada cechy wspólne jak np. spalanie czy waga. Każde z tych pojęć jest abstrakcyjne, ponieważ posiada pewne cechy wspólne dla grupy oraz cechy ukryte, czyli te, którymi się różnią. Idąc dalej samochody ciężarowe możemy przykładowo podzielić ze względu na markę lub ilość osi. Idąc tym tokiem rozumowania należy się zastanowić gdzie kończy się abstrakcja. Prawdopodobnie nigdzie, zawsze znajdą się cechy wspólne i cechy którymi dane elementy się różnią co pozwala nam zdefiniować kolejne poziomy abstrakcji.

### Polimorfizm

To możliwość odwoływania się przez obiekty do wielu różnych typów. Każdy obiekt podklasy jest obiektem nadklasy, np. każdy kierownik jest pracownikiem, więc klasa `Manager` może być podklasą klasy `Employee`. Nie można tego odwrócić - nie każdy pracownik jest kierownikiem. Wszędzie tam, gdzie można użyć obiektu nadklasy, można użyć obiektu podklasy. Polimorfizm oznacza dosłownie jedno imię i wiele form i dotyczy dziedziczenia klas. Jak sama nazwa wskazuje, pozwala programistom definiować różne logiki tej samej metody. Tak więc nazwa (lub interfejs) pozostaje taka sama, ale wykonywane czynności mogą być inne. W praktyce odbywa się to z przeciążeniem lub nadpisaniem.

**Przykład**

```java
@Getter
public class Employee {
  private String name;
  private String surname;
  private int age;
}
```

```java
public class Manager extends Employee {
  private List<Employee> team = new ArrayList<>();
}
```

```java
public class Main {
  public static void main(String[] args) {
    Employee employee1 = new Employee();
    Employee employee2 = new Manager();

    String name = employee2.getName();
  }
}
```

### Hermetyzacja

Ukrywanie implementacji (enkapsulacja), aby nie było do nich bezpośredniego dostępu z innych klas. Zapewnia, że obiekt nie może zmieniać stanu wewnętrznego innych obiektów w nieoczekiwany sposób. Cała interakcja z obiektem i jego danymi odbywa się za pomocą jego metod publicznych. Tylko własne metody obiektu są uprawnione do zmiany jego stanu. Do enkapsulacji służą modyfikatory dostępu. Najlepiej jest kiedy pola metody są prywatne, a metody publiczne.

## SOLID

Zasady SOLID stosuje się po to, aby kod można było łatwiej rozwijać i utrzymywać.

**S** - _Single responsibility_ (Zasada pojedynczej odpowiedzialności): Klasa lub metoda powinna mieć tylko jedną odpowiedzialność (nigdy nie powinien istnieć więcej niż jeden powód do modyfikacji klasy bądź metody).

**O** - _Open/closed_ (Zasada otwarte na rozszerzenia i zamknięte na modyfikacje): Powinna być możliwość rozszerzania klasy bądź metody bez jej modyfikacji. Sprowadza się do do świadomego użycia kompozycji, dziedziczenia czy modyfikatorów dostępu.

Tylko jak kod może spełniać obydwa warunki zasady open/closed? Jak może być otwarty na rozbudowę, a zarazem zamknięty na zmiany? Poprzez użycie **abstrakcji**, która będzie wyrażać stałe wspólne zachowanie. To co będzie się zmieniać trafi do klas konkretnych. W Javie abstrakcję możemy wyrazić albo przez klasę abstrakcyjną albo przez interfejs.

**Przykład naruszenia zasady otwarte-zamknięte:**

```java
package pl.javadeveloper.solid.ocp.bad;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Arrays;

public class LoggerNonOCP {
  private LogTarget logTarget;

  public LoggerNonOCP(LogTarget logTarget) {
      this.logTarget = logTarget;
  }

  public void log(String message) throws Exception {
    switch (logTarget) {
      case CONSOLE:
        System.out.println(message);
        break;
      case FILE:
        Files.write(Paths.get('file.log'),
        Arrays.asList(message),
        StandardOpenOption.APPEND);
        break;
      default:
        throw new IllegalArgumentException('Unsupported logging type!');
    }
  }
}
```

```java
package pl.javadeveloper.solid.ocp.bad;

public enum LogTarget {
  CONSOLE, FILE
}
```

Typ ten określa miejsce logowania komunikatów i jest używany w metodzie `log`. Metoda ta posiada jeden parametr i jest nim logowany komunikat. W zależności od wartości typu wyliczeniowego trafia on albo na konsole albo do pliku. Jednak wymagania klienta mogą się zmienić i tym samym mogą pojawiać się nowe sposoby logowania. Na przykład komunikaty mogą być zapisywane w bazie danych. Aby dodać nowy sposób logowania trzeba "otworzyć" kod czyli go zmienić. Ponadto, będzie trzeba dodać nowy typ logowania w `LogTarget`. Taki kod narusza zasadę open/closed i w konsekwencji nie pozwala na rozbudowę bez jego zmiany. Jeśli chcemy poprawić ten kod i zapewnić jego zgodność z zasadą open/closed musimy wydzielić abstrakcję. Będzie nią interfejs `MessageLogger`, który będzie wspólny dla wszystkich sposobów logowania:

```java
package pl.javadeveloper.solid.ocp.good;

public interface MessageLogger {
    void log(String message) throws Exception;
}
```

Każdy ze sposobów logowania umieścimy w odrębnej klasie. Pierwszą z klas będzie klasa `ConsoleLogger`, która będzie logować komunikaty na konsole.

```java
package pl.javadeveloper.solid.ocp.good;

public class ConsoleLogger implements MessageLogger {
  @Override
  public void log(String message) {
    System.out.println(message);
  }
}
```

Druga z klas czyli `FileLogger` będzie logowała dane do pliku.

```java
package pl.javadeveloper.solid.ocp.good;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Arrays;

public class FileLogger implements MessageLogger {
  @Override
  public void log(String message) throws Exception {
    Files.write(Paths.get('file.log'),
    Arrays.asList(message),
    StandardOpenOption.APPEND);
  }
}
```

Po zmianach główna klasa będzie wyglądała następująco:

```java
package pl.javadeveloper.solid.ocp.good;

public class LoggerOCP {
  private MessageLogger messageLogger;

  public LoggerOCP(MessageLogger messageLogger) {
    this.messageLogger = messageLogger;
  }

  public void log(String message) throws Exception {
    messageLogger.log(message);
  }
}
```

Klasa ma pole typu `MessageLogger`. Podczas jej tworzenia w konstruktorze do tego pola przypisujemy konkretną implementacje sposobu logowania. Metoda `log` stała się teraz bardzo prosta. Pozostało w niej tylko wywołanie metody `log` z obiektu klasy przekazanej w konstruktorze. Teraz możemy bardzo łatwo dodać kolejne sposoby logowania i to bez wpływu na główną klasę programu. W tym przypadku zachowujemy zgodność z zasadą otwarte zamknięte. Kod jest otwarty na rozbudowę, ale zamknięty na zmiany.

Przykładem może być również użycie wzorca Strategy.

**L** - _Liskov substitution_ (Zasada podstawienia Liskov): Klasy w programie powinny być podmienialne przez swoje podklasy bez naruszania poprawności programu, czyli klasa dziedzicząca musi być dobrym odpowiednikiem klasy bazowej. Innymi słowy jeśli zależysz od jakiegoś interfejsu to wszystkie jego implementacje powinny poprawnie działać z Twoją klasą/metodą. Po lewej stronie przypisania powinien znajdować się najbardziej ogólny typ pozwalający realizować naszą funkcję.

**Przykład**

W tym przypadku świetnym przykładem są kolekcje w języku Java. Po lewej piszemy `List` a po prawej np. `ArrayList`.

```java
public class SubstitutionExample {
  public static void main(String[] args) {
    List<String> someList = new ArrayList<>();
    Set<String> someSet = new HashSet<>();
    Queue<String> someQueue = new PriorityQueue<>();
    SubstitutionExample example = new SubstitutionExample();
    example.doSomethingWithElements(someList);
    example.doSomethingWithElements(someSet);
    example.doSomethingWithElements(someQueue);
  }

  public void doSomethingWithElements(Collection<String> someCollection) {
    for (String element : someCollection) {
      System.out.println('element: ' + element);
    }
  }
}
```

Metoda `doSomethingWithElements` zrobi dokładnie to samo bez wiedzy o tym, z jakim podtypem ma do czynienia. Niezależnie od tego czy będzie to `ArrayList` czy `PriorityQueue` metoda zadziała poprawnie.

```java
public class FileRepository implements Repository {
  @Override
  public void saveTask(Task task) {
    // logic responsible for saving task to file
  }

  @Override
  public void deleteTask(String taskId) {
    // logic responsible for deleting task from file
  }
}
```

Teraz "moduł wysokiego poziomu" nie zależy od "modułu niskiego poziomu". Moduł warstwy niższej zależy od abstrakcyjnego interfejsu z warstwy wyższej. Zatem zmiany w module na niższym poziomie nie wpływają na moduł na wyższym poziomie. Jeśli na przykład pojawi się potrzeba zapisu zadań w bazie danych zamiast w pliku to czeka nas proste zadanie. Wystarczy dodanie odpowiedniej klasy na niższym poziomie. Oto przykład zarysu takiej klasy dla bazy MySQL.

```java
public class MySqlRepository implements Repository {
  @Override
  public void saveTask(Task task) {
    // store task in TASK table
  }

  @Override
  public void deleteTask(String taskId) {
    // delete task from TASK table
  }
}
```

**I** - _Interface segregation_ (Zasada segregacji interfejsów): Wiele mniejszych, konkretnych interfejsów jest lepsze od pojedynczego ogólnego interfejsu. Klasa która implementuje interfejs nie może być zmuszana do implementowania metod, których nie potrzebuje, a tak jest często w przypadku dużych interfejsów.

```java
public interface ObjectFormatter {
    byte[] toPDF(Object someObject);
    
    String toXML(Object someObject);
    
    String toJSON(Object someObject);
}
```

```java
public interface PDFFormatter {
    byte[] toPDF(Object someObject);
}
```

```java
public interface XMLFormatter {
    String toXML(Object someObject);
}
```

```java
public interface JSONFormatter {
    String toJSON(Object someObject);
}
```

**D** - _Dependency inversion_ (Zasada odwrócenia zależności): Klasy nadrzędne nie mogą zależeć od podrzędnych. Zależność ta powinna być odwrócona poprzez wprowadzenie dodatkowych elementów. Mówi się tu o dodatkowych warstwach abstrakcji, które pozwalają na zmianę kierunku takiej zależności.

```java
public class TaskService {
    private FileRepository repository = new FileRepository();
    
    public void addTask(Task task) {
        repository.saveTask(task);
    }
    
    public void removeTask(String taskId) {
        repository.deleteTask(taskId);
    }
}
```

```java
public interface Repository {
    void saveTask(Task task);
    
    void deleteTask(String taskId);
}
```

```java
public class TaskService {
    private Repository repository;
    
    public TaskService(Repository repository) {
        this.repository = repository;
    }
    
    public void addTask(Task task) {
        repository.saveTask(task);
    }
    
    public void removeTask(String taskId) {
        repository.deleteTask(taskId);
    }
}
```

```java
public class FileRepository implements Repository {
    @Override
    public void saveTask(Task task) {
    // logic responsible for saving task to file
    }

    @Override
    public void deleteTask(String taskId) {
    // logic responsible for deleting task from file
    }
}
```

```java
public class MySqlRepository implements Repository {
    @Override
    public void saveTask(Task task) {
    // store task in TASK table
    }

    @Override
    public void deleteTask(String taskId) {
    // delete task from TASK table
    }
}
```