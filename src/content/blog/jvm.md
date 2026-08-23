---
title: JVM
description: >-
  Architektura wirtualnej maszyny Javy, środowiska uruchomieniowego oraz zestawu
  programisty
pubDate: 2026-08-23
order: 8
categories:
  - java
---

## JVM

**JVM** (ang. **Java Virtual Machine**, w skrócie **JVM**) to wirtualna symulacja fizycznego komputera. Wykonuje pliki klas kodu bajtowego Java (otrzymujemy takie pliki, kompilując plik kodu źródłowego) i zapewnia takie usługi jak odśmiecanie pamięci czy obsługę wyjątków oraz bibliotekę standardową. Maszyny **JVM** są dostępne dla wielu platform sprzętowych i programowych, więc kod bajtowy Java można uruchamiać prawie wszędzie. Program skompilowany do kodu bajtowego Java jest prawie zawsze niezależny od platformy. Obecnie istnieje wiele implementacji **JVM**, na przykład **HotSpot** jest główną referencyjną implementacją maszyny wirtualnej Java.

W skład maszyny wirtualnej Java wchodzą następujące elementy:

- **Interpreter** – wykonuje krok po kroku instrukcje programu zapisane w postaci kodu bajtowego
- **kompilator JIT** – opcjonalny komponent wchodzący w skład części implementacji, który kompiluje najczęściej wykonywane fragmenty kodu do postaci kodu maszynowego, dzięki czemu mogą być one wykonywane bezpośrednio przez procesor komputera. Pozwala na zwiększenie wydajności
- **Zarządca pamięci** – zarządza stertą, na której przechowywane wszystkie obiekty wykonywanej aplikacji oraz zapewnia automatyczne zwalnianie nieużywanej pamięci. Garbage Collector to program, którego głównym zadaniem jest usuwanie z pamięci nieużywanych obiektów. Gdyby nie jego działanie, sterta, na którą trafiają nowo tworzone obiekty, szybko by się zapełniała i tym samym uniemożliwiała dalsze funkcjonowanie aplikacji. Sprawdza czy dany obiekt nie ma żadnych referencji. Garbage Collector skanuje Scope i Stos zaznaczając wszystkie obiekty jako widoczne, jeżeli mają jakieś referencje. W pierwszej kolejności zwraca uwagę na `static` i referencje wgłąb, oznaczając jako nie do usunięcia (`static` z definicji jest czymś, do czego zawsze jest dostęp i z automatu nie może być usunięte).
- **Weryfikator kodu bajtowego** – kluczowym dla bezpieczeństwa aspektem jest weryfikacja kodu bajtowego przed jego uruchomieniem, której celem jest sprawdzenie poprawności wszystkich odwołań oraz upewnienie się, że wykonanie danego fragmentu nie zaszkodzi stabilności lub bezpieczeństwu systemu, na którym uruchamiana jest maszyna wirtualna. Zajmuje się tym weryfikator kodu bajtowego
- **Java API** – zestaw bibliotek programistycznych udostępniających takie usługi, jak obsługę plików czy GUI, z których korzystają wykonywane aplikacje. Większość biblioteki standardowej napisana jest w języku Java, dlatego maszyny wirtualne nie muszą dostarczać własnej implementacji

## JRE

**JRE** (ang. **Java Runtime Environment**, w skrócie **JRE**) to środowisko uruchomieniowe. **JRE**
zawiera **JVM** i standardowe biblioteki: jest potrzebne do uruchamiania programów skompilowanych. Java Class Library składa się z wielu bibliotek, w tym danych wejściowych / wyjściowych, kolekcji, zabezpieczeń, klas do analizowania XML, zestawów narzędzi interfejsu użytkownika i wielu innych. Twój program może korzystać z tych bibliotek. Po uruchomieniu skompilowanego programu w środowisku uruchomieniowym **JVM** używa plików klas kodu bajtowego zarówno programu, jak i JCL.

## JDK

**JDK** (ang. **Java Development Kit**, w skrócie **JDK**) to pakiet do tworzenia programów na platformę Java. Obejmuje środowisko **JRE** (dzięki czemu można również uruchamiać programy) i narzędzia dla programistów, takie jak kompilator Java, debugger, archiwizator itp. Kompilator Java (zwykle jest to narzędzie **javac**) tłumaczy `*.java` na `*.class`. Kilka plików z rozszerzeniem
`*.class` można spakować razem w jednym archiwum Java (plik `*.jar`). Inne języki **JVM**, takie jak Kotlin czy Scala, mają swoje oddzielne kompilatory, nie są dołączane do **JDK**.

![](@assets/posts/jvm/jvm-jre-jdk.png)

## Kod bajtowy i kod maszynowy

Główna różnica między kodem maszynowym a kodem bajtowym jest to, że kod maszynowy to zestaw instrukcji w języku maszynowym lub binarnym, które mogą być bezpośrednio wykonywane przez CPU, podczas gdy kod bajtowy to kod pośredni generowany z kompilacji kodu źródłowego, który może być wykonany przez maszynę wirtualną. Program komputerowy to zbiór instrukcji, które wykonują określone zadanie. Specjalne oprogramowanie, takie jak kompilatory lub interpretery, przekształca program w odczytywany maszynowo kod maszynowy. Z drugiej strony kod bajtowy nie jest rodzimym kodem maszynowym; to jest przenośny kod. Ponadto oprogramowanie, takie jak maszyna wirtualna, może go wykonać bezpośrednio.
