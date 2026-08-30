---
title: '02 - Decomposition: Identifiyng Volatility'
description: '02 - Decomposition: Identifiyng Volatility'
pubDate: 2026-08-30
order: 6
categories:
  - architektura
---
## Identyfikowanie zmienności

Identyfikowanie obszarów zmienności jest podstawą dekompozycji opartej na zmienności. Techniki opisane w tym rozdziale są praktyczne, ale dość luźne; później zostaną uzupełnione o bardziej uporządkowane zasady pozwalające szybciej i powtarzalnie znajdować zmienność.

### Zmienność a zmienność wartości

Nie wszystko, co może się zmienić, jest zmiennością wymagającą hermetyzacji architektonicznej. Na poziomie projektu należy hermetyzować przede wszystkim **otwartą zmienność**, której nieopanowanie mogłoby być kosztowne i powodować efekt domina w systemie.

Zmiany wartości, które można łatwo obsłużyć zwykłą logiką warunkową, nie powinny prowadzić do tworzenia osobnych komponentów. Kluczowe są te zmiany i ryzyka, które mogą naruszyć architekturę i rozprzestrzenić swój wpływ na wiele jej elementów.

### Osie zmienności

Zmienne obszary należy odkrywać podczas analizy wymagań i rozmów z interesariuszami. Pomocną techniką są **dwie osie zmienności**, wynikające ze sposobu korzystania z systemu:

1. **Ten sam klient w czasie** — potrzeby, wymagania i sposób korzystania z systemu przez konkretnego klienta będą się zmieniać.
2. **Różni klienci w tym samym momencie** — różni klienci mogą jednocześnie potrzebować innych zachowań systemu.

Pytania podczas analizy powinny więc koncentrować się na tym, co może zmienić się dla jednego klienta w przyszłości oraz czym różnią się od siebie obecni klienci.

Jeżeli danego obszaru nie można sensownie przypisać do żadnej z osi zmienności, prawdopodobnie nie powinien on być osobnym komponentem. Utworzenie takiego komponentu może być symptomem dekompozycji funkcjonalnej.

### Faktoryzacja projektu

Dekompozycja jest procesem iteracyjnym. Można zacząć od jednego dużego komponentu, a następnie wielokrotnie zadawać dwa pytania:

* Czy ten sam komponent będzie działał dla konkretnego klienta przez cały czas?
* Czy ten sam komponent będzie działał jednocześnie dla wszystkich klientów?

Jeśli odpowiedź brzmi „nie”, należy znaleźć przyczynę zmiany i hermetyzować ją. Następnie ponownie sprawdzić obie osie.

Projekt jest faktoryzowany tak długo, aż istotne punkty zmienności zostaną odizolowane. Nie chodzi więc o dzielenie systemu według funkcji, lecz o stopniowe oddzielanie miejsc, które mogą się zmieniać.

### Niezależność osi

Osie zmienności powinny być możliwie niezależne. Zmienność występująca głównie w czasie dla jednego klienta powinna być odróżniona od zmienności wynikającej z różnic między klientami.

Nie oznacza to, że zmienność może występować wyłącznie na jednej osi. Chodzi o to, że jej prawdopodobieństwo i znaczenie mogą być znacznie większe na jednej z nich. Przypisanie zmienności do osi jest przede wszystkim narzędziem jej odkrywania.

### Przykład: dekompozycja domu oparta na zmienności

Dom można analizować dokładnie tak samo jak system programistyczny.

W czasie zmieniają się między innymi:

* meble,
* urządzenia,
* mieszkańcy,
* wygląd domu,
* media i usługi,
* sposób dostarczania energii,
* sposób dostarczania Internetu.

Jednocześnie różne domy różnią się między sobą konstrukcją, sąsiadami, przepisami, podatkami czy lokalizacją.

Wszystkie te obszary mogą być hermetyzowane jako zmienność. Dzięki temu sposób korzystania z domu nie musi zależeć od szczegółów jego konstrukcji czy aktualnej technologii dostarczania usług.

Istotne jest również to, czego w takim projekcie **nie ma**. Nie istnieje osobny komponent „Gotowanie” ani „Kuchnia”. Gotowanie jest zachowaniem powstającym poprzez interakcję różnych obszarów zmienności — mieszkańców, urządzeń, konstrukcji domu oraz mediów i usług.

Osie zmienności pozwalają więc odkryć istotne granice, ale nie rozwiązują jeszcze całego problemu projektu. Nadal trzeba określić, co będzie zarządzało interakcjami między hermetyzowanymi obszarami.

### Rozwiązania udające wymagania

Wymagania często opisują **rozwiązania zamiast rzeczywistych potrzeb**.

„Dom musi obsługiwać gotowanie” nie jest prawdziwym wymaganiem. Gotowanie jest jednym ze sposobów zapewnienia mieszkańcom pożywienia. Ten sam cel można osiągnąć poprzez zamówienie pizzy czy wyjście do restauracji.

Jeśli architektura zostanie oparta na rozwiązaniu „Gotowanie”, każda kolejna alternatywa wymusi dodanie lub zmianę komponentów. Powstaje niekończący się ciąg funkcjonalności zamiast hermetyzowania rzeczywistej potrzeby.

Należy więc:

1. znaleźć rozwiązanie opisane jako wymaganie,
2. zapytać, czy istnieją inne sposoby osiągnięcia tego samego celu,
3. znaleźć wspólną potrzebę stojącą za tymi rozwiązaniami,
4. zidentyfikować zmienność sposobów jej realizacji,
5. sprawdzić, czy odkryta potrzeba jest już prawdziwym wymaganiem, czy kolejnym rozwiązaniem udającym wymaganie.

Nawet „zapewnienie pożywienia” może być nadal rozwiązaniem. Rzeczywistą potrzebą mieszkańców jest **dobrostan**. Obejmuje on nie tylko jedzenie, ale również odpowiednią temperaturę, wilgotność i inne warunki życia.

To właśnie takie głębsze wymagania powinny stanowić podstawę identyfikowania zmienności.

Specyfikacje wymagań są często pełne rozwiązań udających wymagania. Zamiast bezpośrednio odwzorowywać je na komponenty, należy usuwać kolejne warstwy rozwiązań, aż pozostaną rzeczywiste potrzeby i związane z nimi obszary zmienności.

### Lista obszarów zmienności

Przed rozpoczęciem właściwego projektowania warto stworzyć **listę potencjalnych obszarów zmienności**.

Na tym etapie nie należy jeszcze podejmować decyzji o architekturze. Lista służy do gromadzenia obserwacji i porządkowania myśli:

* co może zmienić się w czasie,
* czym mogą różnić się klienci,
* jakie rozwiązania są tylko pozornymi wymaganiami,
* jakie inne obszary zmienności ujawniają się podczas analizy.

Nie należy zbyt wcześnie przywiązywać się do konkretnego projektu. Najpierw trzeba zebrać wystarczająco dużo informacji.

Samo zaprojektowanie systemu może trwać kilka dni, ale znalezienie właściwych obszarów zmienności może wymagać znacznie więcej czasu.

### Przykład: system transakcyjny oparty na zmienności

W systemie transakcyjnym potencjalna lista zmienności może obejmować:

* **Zmienność użytkownika** — system może obsługiwać traderów, klientów końcowych i administratorów, a każdy typ użytkownika może mieć inne potrzeby i uprawnienia.
* **Zmienność aplikacji klienckiej** — użytkownicy mogą korzystać z prostego interfejsu webowego, rozbudowanej aplikacji desktopowej albo urządzeń mobilnych.
* **Zmienność bezpieczeństwa** — różne grupy użytkowników mogą wymagać różnych mechanizmów uwierzytelniania i autoryzacji.
* **Zmienność powiadomień** — wymaganie „wysyłaj e-mail” jest rozwiązaniem udającym wymaganie. Rzeczywistą potrzebą jest dostarczenie powiadomienia, natomiast kanał, odbiorcy i sposób dostarczenia mogą się zmieniać.
* **Zmienność przechowywania danych** — wymaganie konkretnej lokalnej bazy danych jest szczegółem implementacyjnym. Rzeczywista potrzeba polega na tym, aby danych nie utracić lub aby system je przechowywał. Implementacja może wykorzystywać bazę lokalną, chmurę, pamięć podręczną czy inne mechanizmy.
* **Zmienność połączenia i synchronizacji** — system może działać synchronicznie lub asynchronicznie, a żądania mogą być wykonywane natychmiast albo kolejkowane na później.
* **Zmienność czasu trwania i urządzenia** — jedne interakcje mogą trwać kilka minut, inne wiele godzin lub dni i obejmować wiele sesji oraz urządzeń.
* **Zmienność przedmiotu transakcji** — system może obsługiwać akcje, surowce, obligacje, waluty, kontrakty terminowe i inne instrumenty.
* **Zmienność przepływu pracy** — sposób realizacji transakcji i jej analizy może różnić się w zależności od rodzaju instrumentu i operacji.
* **Zmienność lokalizacji i regulacji** — różne kraje i lokalizacje oznaczają inne przepisy, podatki, zasady handlu, instrumenty i wymagania dotyczące zgodności.
* **Zmienność źródła danych rynkowych** — dane mogą pochodzić od różnych dostawców, mieć różne formaty, koszty, częstotliwość aktualizacji i protokoły. Źródłem może być również system wewnętrzny generujący dane symulowane na potrzeby testów lub badań.

Kluczowa zasada pozostaje taka sama: **najpierw identyfikować zmienność, dopiero później projektować komponenty, które ją hermetyzują**. Nie należy traktować funkcjonalności zapisanych w wymaganiach jako gotowych granic architektury.
