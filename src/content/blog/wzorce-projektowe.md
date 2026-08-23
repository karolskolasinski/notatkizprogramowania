---
title: Wzorce projektowe
description: Wzorce projektowe (design patterns)
pubDate: 2025-04-29
order: 7
categories:
  - dev
---

## Wzorce projektowe (design patterns)

Zbiór przemyślanych, uniwersalnych, łatwych do utrzymania i sprawdzonych w praktyce rozwiązań w programowaniu obiektowym dla często pojawiających się, powtarzalnych problemów projektowych. Jest opisem rozwiązania, a nie jego implementacją. Wzorce projektowe stosowane są w projektach wykorzystujących programowanie obiektowe. Dodatkowo wyróżniamy podstawowy podział wzorców na cztery kategorie:

- **🏗️ creational** - opisują, w jaki sposób obiekty są tworzone
- **⚙️ behavioral** - opisują zachowanie obiektów
- **🔱 structural** - opisują sposób, w jaki obiekty są zbudowane
- **👷 architektoniczne** - opisują bardziej abstrakcyjne wzorce jak np. MVC

### 🏗️ Builder

Dzięki niemu nie musimy pisać konstruktorów N parametrowych.

- pozwala na tworzenie obiektów w których możemy w kolejności ustawiać parametry
- nie musimy tworzyć kombinacji konstruktorów dla parametrów które są opcjonalne
- można go wygenerować: dopisać wewnętrzną klasępublic static class Builder \{} i na pełnym konstruktorze klasy wygenerować z IntelliJ (Refactor -> Replace Constructor with Builder)

Budowniczy ma za zadanie rozwiązać pewien powtarzający się problem programistyczny – konkretniej zapewnia oddzielenie procesu inicjalizacji obiektu od jego reprezentacji. Decydując się na użycie tego wzorca można osiągnąć następujące korzyści:

- logika mówiąca o tym jak obiekt ma być zbudowany będzie oddzielona od implementacji tej logiki
- spełnia zasadę otwarty na rozbudowę, zamknięty na modyfikacje (open/closed principle) – łatwo dodać do kodu nowych budowniczych
- spełnia zasadę odwrócenia zależności (dependency inversion principle)
- sprzyja samodokumentującemu się kodowi (widząc poszczególnych budowniczych wiemy, co dostarczą)
- daje doskonałą kontrolę nad etapami budowania kompozytu (np. hermetyzacja obsługi błędów dla danego kroku)

```java
public class Hero {
  private String param1, param2, param3, param4, param5;
  private int param6, param7, param8, param9, param10;

  public Hero(String param1, String param2, String param3, String param4, String param5, int param6, int param7, int param8, int param9, int param10) {
    this.param1 = param1;
    this.param2 = param2;
    this.param3 = param3;
    this.param4 = param4;
    this.param5 = param5;
    this.param6 = param6;
    this.param7 = param7;
    this.param8 = param8;
    this.param9 = param9;
    this.param10 = param10;
  }

  public static class Builder {
    private String param1;
    private String param2;
    private String param3;
    private String param4;
    private String param5;
    private int param6;
    private int param7;
    private int param8;
    private int param9;
    private int param10;

    public Builder setParam1(String param1) {
      this.param1 = param1;
      return this;
    }

    public Builder setParam2(String param2) {
      this.param2 = param2;
      return this;
    }

    public Builder setParam3(String param3) {
      this.param3 = param3;
      return this;
    }

    public Builder setParam4(String param4) {
      this.param4 = param4;
      return this;
    }

    public Builder setParam5(String param5) {
      this.param5 = param5;
      return this;
    }

    public Builder setParam6(int param6) {
      this.param6 = param6;
      return this;
    }

    public Builder setParam7(int param7) {
      this.param7 = param7;
      return this;
    }

    public Builder setParam8(int param8) {
      this.param8 = param8;
      return this;
    }

    public Builder setParam9(int param9) {
      this.param9 = param9;
      return this;
    }

    public Builder setParam10(int param10) {
      this.param10 = param10;
      return this;
    }

    public Hero build() {
      return new Hero(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10);
    }
  }
}
public class Main {
  public static void main(String[] args) {
    Hero hero1 = new Hero.Builder()
      .setParam1('var1')
      .setParam4('var4')
      .setParam10(10)
      .setParam2('var2')
      .build();

    Hero hero2 = new Hero.Builder()
      .setParam7(7)
      .setParam5('var5')
      .setParam9(9)
      .setParam3('var3')
      .build();
  }
}
```

### 🏗️ Abstract Factory

Jest to kreacyjny wzorzec projektowy, którego celem jest dostarczenie interfejsu do tworzenia różnych obiektów jednego typu (tej samej rodziny). Pozwala na tworzenie kodu, który będzie uzależniony od abstrakcji, a nie od implementacji konkretnych klas. Abstract Factory różni się od Buildera tym, że kładzie nacisk na tworzenie produktów z konkretnej rodziny, a Builder kładzie nacisk na sposób tworzenia obiektów. Zwróć uwagę na słowo kluczowe abstract oraz na package. Klasa Button i ButtonFactory znajdują się w oddzielnym package.

```java
package example.abstract_button.button_factory;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Button {
  private String color;
  private int height;
  private int width;
}
package example.abstract_button.button_factory;

public abstract class ButtonFactory {
  public static Button createGreenButton(int height, int width) {
    return new Button('Green', height, width);
  }

  public static Button createRedButton(int height, int width) {
    return new Button('Red', height, width);
  }
}
package example.abstract_button;

import example.abstract_button.button_factory.Button;
import example.abstract_button.button_factory.ButtonFactory;

public class Main {
  public static void main(String[] args) {
    Button greenButton = ButtonFactory.createGreenButton(120, 300);
    Button redButton = ButtonFactory.createRedButton(120, 300);
  }
}
```

### 🏗️ Singleton

Jest to kreacyjny wzorzec projektowy, którego celem jest ograniczenie możliwości tworzenia obiektów danej klasy do jednej instancji oraz zapewnienie globalnego dostępu do stworzonego obiektu. Instancja ma być stworzona w odpowiednim momencie, odpowiednio zainicjalizowana oraz tak, aby nie można jej było nadpisać. Każde użycie takiej klasy odnosi się do tej samej instancji. Niektórzy programiści uznają go za antywzorzec, ponieważ łamie zasady projektowania obiektowego, często bywa nadużywany.

Przykład wykorzystania to jedno połączenie z bazą danych. Innym przykładem może być wczytywanie pliku konfiguracyjnego. Chcemy aby istniała tylko jedna klasa zajmująca się odczytem lub zapisem do takiego pliku. Nie może istnieć więcej niż jeden obiekt, który edytuje ten sam plik, ponieważ np.:

- kiedy zasób nie będzie zamknięty (edycja pliku), a w tym samym momencie ktoś będzie go chciał usunąć, to pojawi się komunikat systemowy, że plik jest używany i nie można tego zrobić
- jeżeli dwie instancje zapisywały by coś do pliku, mógłby powstać konflikt i jedna zacznie nadpisywać treść drugiej

#### version 1 - eager (tworzy się w momencie załadowania klasy)

```java
public class ConfigFileManager {
  //eager
  public static final ConfigFileManager INSTANCE = new ConfigFileManager();

  private ConfigFileManager() {
    System.out.println('created!');
  }

  public void someMethod() {
    System.out.println('method launched!');
  }

  public static void someStaticMethod() {
    System.out.println('static method launched!');
  }
}
public class Main {
  public static void main(String[] args) {
    // ConfigFileManager.INSTANCE.someMethod();
    ConfigFileManager.someStaticMethod();
  }
}
//output:
//created!
//static method launched!
```

Komunikat "created!" z INSTANCE wywoła się już przy wywołaniu klasy.

#### version 2 - eager (tworzy się w momencie załadowania klasy)

```java
public class ConfigFileManager {
  //eager
  private static final ConfigFileManager INSTANCE = new ConfigFileManager();

  private ConfigFileManager() {
    System.out.println('created!');
  }

  public static ConfigFileManager getInstance() {
    return INSTANCE;
  }

  public void someMethod() {
    System.out.println('method launched!');
  }
}
public class Main {
  public static void main(String[] args) {
    ConfigFileManager.getInstance().someMethod();
  }
}
```

#### version 3 - lazy, synchronized, Thread Safe (tworzy się w momencie jego użycia)

```java
public class ConfigFileManager {
  // lazy
  private static ConfigFileManager INSTANCE;

  private ConfigFileManager() {
    System.out.println('created!');
  }

  public static ConfigFileManager getInstance() {
    if (INSTANCE == null) {
      synchronized (ConfigFileManager.class) {
        if (INSTANCE == null) {
          INSTANCE = new ConfigFileManager();
        }
      }
    }

    return INSTANCE;
  }

  public void someMethod() {
    System.out.println('method launched!');
  }

  public static void someStaticMethod() {
    System.out.println('static method launched!');
  }
}
public class Main {
  public static void main(String[] args) {
    // ConfigFileManager.getInstance().someMethod();
    ConfigFileManager.someStaticMethod();
  }
}
//output:
//static method launched!
```

Komunikat "created!" z INSTANCE wywoła się tylko przy stworzeniu instancji Singletona

#### version 4 - eager, synchronized, Thread Safe (synchronizacja oraz unikatowość zapewniona przez JVM)

```java
public enum ConfigFileManager {
  //eager
  INSTANCE;

  ConfigFileManager() {
    System.out.println('created!');
  }

  public void someMethod() {
    System.out.println('method launched!');
  }
}
public class Main {
  public static void main(String[] args) {
    ConfigFileManager.INSTANCE.someMethod();
  }
}
```

### ⚙️ Observer

Wzorzec obserwator jest wzorcem behawioralnym. Jak sama nazwa mówi jest to wzorzec do obserwowania/nasłuchiwania na jakieś zdarzenie (np. zmianę stanu). Jeśli to zdarzenie wystąpi, wszystkie obiekty które “zapisały” się do nasłuchiwania na ten event zostaną o tym fakcie poinformowane. Tworzy się tu relacja jeden-do-wielu, która łączy ze sobą grupę obiektów, które zostaną poinformowane o zmianie stanu.

```java
public class NewsStation {
  private List&ltObserver&gt observers = new ArrayList&lt&gt();
  public News currentNews;

  public void registerObserver(Observer observer) {
    observers.add(observer);
  }

  public void unregisterObserver(Observer observer) {
    observers.remove(observer);
  }

  public void notifyObservers(News news) {
    this.currentNews = news;
    observers.forEach(observer -&gt observer.notifyAboutNews(news));
  }
}
public class News {
  private String content;

  public String getContent() {
    return content;
  }

  public News(String content) {
    this.content = content;
  }
}
public class Observer {
  private String name;

  public Observer(String name) {
    this.name = name;
  }

  public void notifyAboutNews(News news) {
    System.out.println(name + ' received: ' + news.getContent());
  }
}
public class Main {
  public static void main(String[] args) {
    NewsStation newsStation = new NewsStation();

    newsStation.registerObserver(new Observer('Observer 1'));
    newsStation.registerObserver(new Observer('Observer 2'));
    newsStation.registerObserver(new Observer('Observer 3'));

    newsStation.notifyObservers(new News('News 1'));
  }
}
```

### ⚙️Strategy

Wzorzec ten pochodzi on z grupy wzorców behawioralnych, czyli służy do opisywania konkretnych zachowań. Realizuje wszystkie zasady SOLID. W dużym uproszczeniu można powiedzieć, że strategia ma za zadanie w zależności od danych/kontekstu wykorzystać odpowiedni proces z puli algorytmów, które łączy wspólny interfejs.

W strategii definiujemy wspólny interfejs, dla obsługiwanych algorytmów, posiadający dozwolone metody. W kolejnym kroku implementujemy poszczególne strategie w poszczególnych klasach. Następnie budujemy klasę klienta, która będzie pozwalała na określenie strategii (na przykład poprzez jej wstrzyknięcie) oraz będzie posiadała referencję do aktualnie wybranej strategii. Klient współpracuje z wybraną strategią w celu wykonania określonego zadania.

```java
package behavioral.strategy.strategies;

public interface IFontFormatter {
  String substituteText(String textToChange);
}
package behavioral.strategy.strategies;

public class FontFormatterLower implements IFontFormatter {
  @Override
  public String substituteText(String textToChange) {
    return textToChange.toLowerCase();
  }
}
package behavioral.strategy.strategies;

public class FontFormatterUpper implements IFontFormatter {
  @Override
  public String substituteText(String textToChange) {
    return textToChange.toUpperCase();
  }
}
package behavioral.strategy.strategies;

public class FontFormatterReverse implements IFontFormatter {
  @Override
  public String substituteText(String textToChange) {
    return new StringBuilder(textToChange).reverse().toString();
  }
}
package behavioral.strategy;

import behavioral.strategy.strategies.FontFormatterLower;
import behavioral.strategy.strategies.FontFormatterReverse;
import behavioral.strategy.strategies.FontFormatterUpper;
import behavioral.strategy.strategies.IFontFormatter;

class Printer {
  private IFontFormatter iFontFormatter;

  private void setiFontFormatter(IFontFormatter iFontFormatter) {
    this.iFontFormatter = iFontFormatter;
  }

  private void changeText(String textToChange) {
    System.out.println('output: ' + iFontFormatter.substituteText(textToChange));
  }

  void useStrategy(int i, String nextLine) {
    if (i == 1) {
      setiFontFormatter(new FontFormatterLower());
    } else if (i == 2) {
      setiFontFormatter(new FontFormatterUpper());
    } else if (i == 3) {
      setiFontFormatter(new FontFormatterReverse());
    }
    changeText(nextLine);
  }
}
package behavioral.strategy;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Printer printer = new Printer();
    Scanner scanner = new Scanner(System.in);
    String command;

    do {
      System.out.println('[1]: lower, [2]: upper, [3]: reverse, [4] quit');
      command = scanner.nextLine();
      System.out.print('input: ');

      switch (command) {
        case '1':
        printer.useStrategy(1, scanner.nextLine());
        break;
      case '2':
        printer.useStrategy(2, scanner.nextLine());
        break;
      case '3':
        printer.useStrategy(3, scanner.nextLine());
        break;
      case '4':
        break;
        default:
        break;
      }
    } while (!command.equals('4'));
  }
}
```

### 🔱 Decorator

Wzorzec strukturalny Dekorator polega na opakowaniu oryginalnej (bazowej) klasy w nową klasę
"dekorującą". Wykorzystuje się do tego kompozycję. Wzorzec ten jest alternatywą dla dziedziczenia, które posiada szereg ograniczeń w tym zakresie. Przede wszystkim dekorator pozwala na dekorowanie w trakcie działania programu, a nie podczas kompilacji. Dodatkowo umożliwia „składanie” dekoratorów, a więc daje elastyczność w kwestii doboru zestawu nowych funkcjonalności. Ważne w tym wzorcu jest to, że pierwotne zachowanie klasy, którą dekorujemy pozostaje bez zmian. Pozwala to zachować pełną kompatybilność z już istniejącym kodem i zapewnia transparentność naszego dekoratora.

Cała „magia” działania dekoratora opiera się o wykorzystanie tego samego interfejsu, z którego korzysta klasa, którą chcemy dekorować. I tutaj jest już pierwszy warunek wymagany przy tym wzorcu – istnienie interfejsu dla klasy bazowej. Sam dekorator w najprostszej postaci możemy wykonać na jednej klasie, która po prostu zaimplementuje ten sam interfejs co klasa bazowa. Dodatkowo musi ona przyjmować w jakiś sposób klasę, którą dekorujemy – zazwyczaj jest to wykonywane za pomocą konstruktora. Tak więc zakładamy, że mamy interfejs i implementującą go klasę, którą używamy w naszym kodzie i chcemy ją wzbogacić o nowe funkcje nie zmieniając jej implementacji. Dodajemy nową klasę, która również implementuje nasz interfejs. Klasa ta przyjmuje w konstruktorze obiekt, którego typem jest implementowany interfejs (dzięki temu nie ograniczamy się do dekorowania jednej klasy, ale całego zbioru. Jest to ogromna zaleta pozwalająca nakładać dekoratory jeden na drugi). Klasa dekorująca musi w metodach
z interfejsu wywołać takie same metody z obiektu przekazanego w konstruktorze – pozwala to zachować pełną funkcjonalność klasy dekorowanej. Mając tak przygotowaną konstrukcję możemy dodawać nowe funkcjonalności. Czy to dodając osobne metody, które użyjemy w naszym kodzie modyfikując za ich pomocą obiekt, który dostaniemy, albo dokładając efekty uboczne do już istniejących metod. Dobrym przykładem jest tutaj dodanie logowania wywołania metody z obiektu albo np. modyfikowanie danych przekazywanych do metod obiektu.

```java
public interface ICar {
  void assemble();
}
public class Car implements ICar{
  @Override
  public void assemble() {
    System.out.println('Basic car ready.');
  }
}
public class SportCar implements ICar {
  private Car car;

  SportCar(Car car) {
    this.car = car;
  }

  @Override
  public void assemble() {
    car.assemble();
    System.out.println('Turbo added.');
  }
}
public class Main {
  public static void main(String[] args) {
    ICar sportCar = new SportCar(new Car());
    sportCar.assemble();
  }
}
```

### 🔱 Adapter

Adapter (ang. wrapper) – strukturalny wzorzec projektowy, którego celem jest umożliwienie współpracy dwóm klasom o niekompatybilnych interfejsach. Adapter zmienia interface klasy B w interface klasy A który rozumie klasa C. Innym zadaniem omawianego wzorca jest opakowanie istniejącego interfejsu w nowy. Wzorzec ten szczególnie wykorzystywany jest, gdy chcemy korzystać z zewnętrznych bibliotek, systemów API i klas, których interfejsy nie są dostosowane do naszej aplikacji. Przy pomocy adaptera opakowujemy niekompatybilny interfejs takiej biblioteki w nowy i dzięki temu nie musimy modyfikować naszego kodu. Aby móc skorzystać z adaptera tworzymy klasę “pośrednią” która może działać w jeden z dwóch sposobów:

- może dziedziczyć interfejs docelowy i interfejs który adaptuje
- może dziedziczyć interfejs docelowy i zawierać interfejs który adaptuje (jako pole)

```java
public class Alarm {
  void activateAlarm() {
   System.out.println('Alarm activated!');
  }

  void deactivateAlarm() {
    System.out.println('Alarm deactivated!');
  }
}
public class AlarmAdapter implements IComponent {
  private final Alarm alarm;

  public AlarmAdapter(Alarm alarm) {
    this.alarm = alarm;
  }

  @Override
  public void turnDeviceOn() {
    alarm.activateAlarm();
  }

  @Override
  public void turnDeviceOff() {
    alarm.deactivateAlarm();
  }
}
public class Lights {
  void turnLightsOn() {
    System.out.println('Lights turned on!');
  }

  void turnLightsOff() {
    System.out.println('Lights turned off!');
  }
}
public class LightsAdapter implements IComponent {
  private final Lights lights;

  public LightsAdapter(Lights lights) {
    this.lights = lights;
  }

  @Override
  public void turnDeviceOn() {
    lights.turnLightsOn();
  }

  @Override
  public void turnDeviceOff() {
    lights.turnLightsOff();
  }
}
public class Radiator {
  void turnHeatingOn() {
    System.out.println('Heater is on!');
  }

  void turnHeatingOff() {
    System.out.println('Heater is off!');
  }
}
public class RadiatorAdapter implements IComponent {
  private final Radiator radiator;

  public RadiatorAdapter(Radiator radiator) {
    this.radiator = radiator;
  }

  @Override
  public void turnDeviceOn() {
    radiator.turnHeatingOn();
  }

  @Override
  public void turnDeviceOff() {
    radiator.turnHeatingOff();
  }
}
public interface IComponent {
  void turnDeviceOn();

  void turnDeviceOff();
}
public class Main {
  public static void main(String[] args) {
    AlarmAdapter alarmAdapter = new AlarmAdapter(new Alarm());
    LightsAdapter lightsAdapter = new LightsAdapter(new Lights());
    RadiatorAdapter radiatorAdapter = new RadiatorAdapter(new Radiator());

    alarmAdapter.turnDeviceOff();
    lightsAdapter.turnDeviceOn();
    radiatorAdapter.turnDeviceOn();

    // output:
    // Alarm deactivated!
    // Lights turned on!
    // Heater is on!
  }
}
```

### 👷 MVC

Model MVC (**Model – View – Controller**) wykorzystuje niemal każda aplikacja, a zwłaszcza aplikacje webowe, (często pod przykrywką jakiegoś frameworka). Odpowiada rozdziałowi aplikacji na trzy główne moduły:

1. **Model** - reprezentuje naszą logikę biznesową. Tutaj znajdują się wszelkie obiekty, które służą do wykonywania wszelkich operacji związanych z implementacją funkcjonalności naszej aplikacji. Model jest komputerową reprezentacją rozpatrywanego problemu. Model nie jest zależny od widoku i aplikacja może posiadać wiele niezależnych widoków dla tego samego modelu.
2. **Widok** - warstwa prezentacji. Widok odpowiedzialny jest za prezentację użytkownikowi wyników działania logiki biznesowej (Modelu).
3. **Kontroler** - obsługuje żądania użytkownika. Wszelkie żądania deleguje do odpowiednich metod Modelu.

```java
public class Student {
  private String rollNo;
  private String name;

  public String getRollNo() {
    return rollNo;
  }

  public void setRollNo(String rollNo) {
    this.rollNo = rollNo;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
public class StudentView {
  public void printStudentDetails(String studentName, String studentRollNo){
    System.out.println('Student: ');
    System.out.println('Name: ' + studentName);
    System.out.println('Roll No: ' + studentRollNo);
  }
}
public class StudentController {
  private Student model;
  private StudentView view;

  public StudentController(Student model, StudentView view){
    this.model = model;
    this.view = view;
  }

  public void setStudentName(String name){
    model.setName(name);
  }

  public String getStudentName(){
    return model.getName();
  }

  public void setStudentRollNo(String rollNo){
    model.setRollNo(rollNo);
  }

  public String getStudentRollNo(){
    return model.getRollNo();
  }

  public void updateView(){
    view.printStudentDetails(model.getName(), model.getRollNo());
  }
}
public class MVCPatternDemo {
  public static void main(String[] args) {
    // fetch student record based on his roll no from the database
    Student model  = retrieveStudentFromDatabase();

    // Create a view : to write student details on console
    StudentView view = new StudentView();

    StudentController controller = new StudentController(model, view);

    controller.updateView();

    // update model data
    controller.setStudentName('John');

    controller.updateView();
  }

  private static Student retrieveStudentFromDatabase(){
    Student student = new Student();
    student.setName('Robert');
    student.setRollNo('10');
    return student;
  }
}
```
