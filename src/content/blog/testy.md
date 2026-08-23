---
title: Testy
description: Testy
pubDate: 2025-04-29
order: 6
categories:
  - dev
---

# **Testy**

### **Dlaczego pisze się testy?**

* aby podnieść jakość tworzonego przez nas kodu
* aby udowodnić, że kod robi to co myślimy, że robi
* aby nie naprawiać jednej funkcjonalności psując drugą
* aby nie bać się zmieniać już istniejącego kodu
* aby nie iść na przekór dobrym standardom

### **Podział testów**

* jednostkowe
    * testujemy izolowany element (np. metoda, klasa) bez zależności
    * tylko jedno potencjalne miejsce awarii
    * szybkie wykonanie testów (\<1s)
    * nie wymagają jakiejkolwiek konfiguracji
    * może być świetną dokumentacją
    * znacznie ułatwiają refactoring codu
* integracyjne
    * testują wytworzone oprogramowanie poprzez weryfikację zachowania kompletnej aplikacji pod kątem wymagań biznesowych za pomocą różnego rodzaju interfejsu udostępnianego użytkownikom.
    * pisane często z wykorzystaniem np. selenium lub j-meter
    * tworzone aby symulować zachowanie aplikacji w rzeczywistym środowisku

### **Cykl życia testów**

* **@BeforeEach** np. napisanie metody, do której można wydzielić przygotowanie instancji klasy, z której korzystają testy.
* **@AfterEach** np. wyczyszczenie, usunięcie jakichś niepotrzebnych danych, aby np. zwolnić zasoby
* **@BeforeAll** (metoda musi być static) np. kod który służy do otwarcia pliku, w którym będziemy zapisywać, albo do zainicjalizowania połączenia z bazą danych
* **@AfterAll** (metoda musi być static) np. zamknięcie tego połączenia lub pliku

### **BDD - Behavior-driven development**

jest to zbiór dobrych praktyk przy tworzeniu testów jednostkowych, które testują realną funkcjonalność aplikacji a nie każdą metodę. Jedną z powszechnie stosowanych praktyk BDD jest podział kodu testu na 3 sekcje:

1. **given** - tworzymy założenia wstępne, tworzymy instancje obiektów i ich stan początkowy
2. **when** - wykonujemy wywołanie metody, którą chcemy przetestować
3. **then** - sprawdzamy nasze oczekiwania z rzeczywistymi rezultatami, najczęściej wykorzystując asercje

Ponadto nazywa się testy dokładnie od funkcjonalności jaką dany test ma sprawdzać

### **Pokrycie kodu (code coverage)**

oznacza ile procent linijek kodu (nie licząc klamer, deklaracji itp.) jest realnie wykonywanych podczas wszystkich testów. Innymi słowy, wyniki wykonania jakiej części kodu weryfikujemy (w teorii). Dobrą wartością jest 70–85% pokrycia (w zależności od technologii, logiki biznesowej, złożoności itp.). Pokrycie poniżej 40% jest z kolei przeważnie bardzo złym sygnałem.

### **Na czym polega testowanie manualne i automatyczne?**

Testowanie manualne polega na ręcznym wykonywaniu przypadków testowych przez testera, bez użycia narzędzi automatyzujących. Jest przydatne przy testach eksploracyjnych lub gdy system często się zmienia. Testowanie automatyczne polega na tworzeniu skryptów, które wykonują testy bez udziału człowieka, co przyspiesza proces testowy i ułatwia regresję.

### **Czym są przypadki i scenariusze testowe?**

Przypadek testowy to pojedynczy test, który sprawdza konkretną funkcjonalność w określonych warunkach wejściowych. Scenariusz testowy to sekwencja przypadków testowych lub kroków, które symulują większy fragment działania użytkownika. Ułatwiają one pokrycie większych procesów w systemie.
