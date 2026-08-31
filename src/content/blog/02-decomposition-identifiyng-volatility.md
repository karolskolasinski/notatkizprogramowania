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

## A Key Observation

Lista obszarów zmienności nie ma być kompletna. Jej celem jest nauczenie sposobu myślenia: zauważania tego, **co może się zmienić**.

Nie każda zidentyfikowana zmienność musi ostatecznie znaleźć się w zakresie projektu. Część może zostać uznana za mało prawdopodobną, a część może dotyczyć samej natury biznesu. Warto jednak możliwie wcześnie nazwać potencjalne obszary zmienności i uwzględnić je w dekompozycji.

Samo wyznaczenie miejsca dla komponentu w architekturze praktycznie nic nie kosztuje. Dopiero później trzeba zdecydować, czy warto inwestować w jego pełne zaprojektowanie i implementację. Najważniejsze jest to, że system ma już określone miejsce, w którym można obsłużyć daną zmianę.

## System Decomposition

Po zidentyfikowaniu obszarów zmienności należy hermetyzować je w komponentach architektury.

Przejście od listy zmienności do komponentów prawie nigdy nie jest relacją jeden do jednego:

* jeden komponent może hermetyzować kilka obszarów zmienności,
* niektóre zmienności mogą być obsługiwane przez mechanizmy operacyjne, takie jak kolejki czy publikowanie zdarzeń,
* inne mogą zostać hermetyzowane przez usługi zewnętrzne.

Projektowanie należy zaczynać od najprostszych i najbardziej oczywistych decyzji. Każda z nich ogranicza przestrzeń kolejnych decyzji i ułatwia dalsze projektowanie.

### Zmienność przechowywania danych

Zmienność przechowywania danych można hermetyzować za komponentami dostępu do danych.

Istotna jest abstrakcja **Storage**, a nie **Database**. Aktualna implementacja może używać lokalnej bazy danych, ale architektura nie powinna zakładać, że baza danych jest jedyną możliwością. Przechowywanie może zostać zastąpione systemem plików, pamięcią podręczną lub rozwiązaniem chmurowym.

Zmiana sposobu przechowywania powinna dotyczyć odpowiedniego komponentu dostępu, na przykład `Trades Access`, bez wpływu na pozostałe elementy systemu.

### Zmienność powiadomień

Zmienność związana z powiadamianiem użytkowników może zostać hermetyzowana w komponencie **Notification**.

Komponent odpowiada za:

* sposób dostarczania powiadomień,
* określenie odbiorców,
* subskrypcje zdarzeń,
* reguły biznesowe dotyczące rodzaju i charakteru komunikacji.

W prostych przypadkach wystarczający może być ogólny mechanizm publikowania i subskrypcji zdarzeń (**Pub/Sub**). Jeśli jednak powiadomienia mają własne reguły biznesowe, dedykowany komponent może wykorzystywać Pub/Sub jedynie jako szczegół implementacyjny.

### Zmienność przepływu transakcji

Zmienność przepływu transakcji można hermetyzować w komponencie **Trade Workflow**.

Może on obejmować między innymi:

* rodzaj przedmiotu transakcji,
* kroki kupna i sprzedaży,
* różnice pomiędzy lokalnymi rynkami,
* wymagania dotyczące raportów,
* zmiany w samym procesie transakcyjnym.

Nawet jeśli przedmiot transakcji pozostaje stały, sam proces realizacji transakcji może się zmieniać.

Przechowywanie definicji i instancji workflow dodatkowo pozwala hermetyzować kilka rodzajów zmienności:

* różne instrumenty mogą mieć różne przepływy,
* różne lokalizacje mogą mieć różne procesy,
* workflow może trwać przez wiele sesji i urządzeń.

System nie musi rozróżniać, czy kolejne wywołania następują po kilku sekundach czy kilku dniach. Za każdym razem może odtworzyć stan workflow i wykonać następny krok.

Krótka, połączona sesja oraz długotrwała, rozproszona transakcja mogą być obsługiwane w ten sam sposób. **Symetria i spójność są wartościowymi właściwościami architektury.**

Ten sam wzorzec można zastosować do innych procesów, na przykład analizy transakcji. Dedykowany **Analysis Workflow** może hermetyzować zmienność procesów analitycznych i korzystać z tego samego mechanizmu przechowywania workflow.

### Zmienność danych rynkowych

Dostęp do danych rynkowych można podzielić na dwa obszary:

* **Feed Access** hermetyzuje sposób dostępu do źródła oraz różnicę między źródłami wewnętrznymi i zewnętrznymi,
* **Feed Transformation** hermetyzuje różnice w formatach i znaczeniu danych pochodzących z różnych źródeł.

Pozostałe komponenty otrzymują dzięki temu jednolity interfejs i format danych niezależnie od ich rzeczywistego pochodzenia.

### Zmienność bezpieczeństwa

Komponent **Security** hermetyzuje różne sposoby:

* uwierzytelniania,
* autoryzacji,
* przechowywania i sprawdzania poświadczeń.

Wewnątrz może korzystać z lokalnego magazynu użytkowników albo z zewnętrznego, rozproszonego dostawcy tożsamości.

### Zmienność aplikacji klienckich

System może być używany przez różne aplikacje:

* aplikację tradera,
* aplikację mobilną,
* portal klienta końcowego.

Każda aplikacja kliencka hermetyzuje sposób prezentowania informacji i dostosowanie interfejsu do konkretnego urządzenia oraz użytkownika.

Mapowanie zmienności na architekturę na tym etapie może być jeszcze dość swobodne. Bardziej deterministyczne zasady i struktura są potrzebne, aby proces ten wykonywać konsekwentnie.

## Resist The Siren Song

Brak komponentu w architekturze może być równie ważny jak jego obecność.

Jeżeli raportowanie nie zostało zidentyfikowane jako obszar zmienności, nie ma automatycznego powodu, aby tworzyć komponent **Reporting**. Dodanie go tylko dlatego, że „każdy system ma moduł raportowania”, byłoby przejawem dekompozycji funkcjonalnej.

Największym zagrożeniem są wcześniejsze nawyki. Jeśli architekt przez lata dzielił systemy według funkcjonalności, będzie automatycznie dostrzegał znajome komponenty:

* Reporting,
* Orders,
* Users,
* Payments,
* i inne bloki odpowiadające nazwom funkcji.

Nie należy dodawać komponentu dlatego, że istniał w poprzednich systemach albo dlatego, że istnieje gotowa implementacja, którą można wykorzystać.

Metafora Odyseusza i Syren pokazuje różnicę między zespołem wykonującym pracę a architektem odpowiedzialnym za decyzje. Programiści mogą po prostu implementować przyjęty projekt, natomiast architekt musi być świadomy wszystkich możliwości i jednocześnie posiadać mechanizm, który nie pozwoli mu wrócić do starych nawyków.

**Dekompozycja oparta na zmienności jest takim mechanizmem.**

## Volatility And The Business

Nie wszystko, co może się zmienić, powinno być hermetyzowane.

Najważniejszym przykładem jest **natura biznesu**. System istnieje po to, aby realizować określoną wartość biznesową, a sama ta wartość zazwyczaj pozostaje stosunkowo stabilna.

Firma zajmująca się dostarczaniem przesyłek może teoretycznie wejść w branżę medyczną, ale architektura systemu dostarczania przesyłek nie powinna przygotowywać się na taką transformację.

Podczas dekompozycji trzeba więc identyfikować zarówno:

* zmienności, które należy hermetyzować,
* rzeczy, których hermetyzować nie należy.

Istnieją dwa główne wskaźniki, że potencjalna zmiana należy raczej do natury biznesu:

### 1. Zmiana jest bardzo rzadka

Coś może być teoretycznie możliwe, ale prawdopodobieństwo jego wystąpienia może być tak małe, że przygotowywanie systemu na tę możliwość nie ma sensu.

### 2. Nie można dobrze hermetyzować tej zmiany rozsądnym kosztem

Jeżeli właściwe przygotowanie systemu na zmianę wymaga ogromnych inwestycji, a mimo to rozwiązanie pozostaje niepraktyczne, prawdopodobnie nie jest to zmienność, którą należy obsługiwać.

Przykładem jest dom jednorodzinny projektowany tak, aby w przyszłości można było przekształcić go w pięćdziesięciopiętrowy wieżowiec. Fundamenty, instalacja elektryczna, wodociągi i kanalizacja musiałyby od początku obsługiwać skalę ogromnego budynku.

Koszt przygotowania takiego domu byłby absurdalny w stosunku do małego prawdopodobieństwa zmiany.

Przekształcenie domu jednorodzinnego w wieżowiec nie jest zwykłą zmianą systemu. Jest zmianą **natury biznesu**. W takim przypadku bardziej sensowne może być zniszczenie starego rozwiązania i rozpoczęcie od początku.

Natura biznesu może być rozumiana na różnych poziomach:

* całej firmy,
* działu lub jednostki organizacyjnej,
* konkretnej aplikacji i dostarczanej przez nią wartości.

Zmian na tych poziomach nie należy próbować hermetyzować.

## Speculative Design

Dekompozycję opartą na zmienności można również doprowadzić do absurdu.

Gdy zaczyna się dostrzegać potencjalne zmiany wszędzie, łatwo wpaść w pułapkę hermetyzowania wszystkiego. Rezultatem będzie ogromna liczba komponentów, co samo w sobie jest oznaką złego projektu.

Projektowanie na podstawie bardzo mało prawdopodobnych scenariuszy prowadzi do **speculative design**.

Problem polega na próbie stworzenia jednego rozwiązania dla dwóch całkowicie różnych zastosowań. Takie rozwiązanie zazwyczaj nie radzi sobie dobrze z żadnym z nich.

Dobra architektura nie polega na przygotowaniu systemu na każdą teoretycznie możliwą przyszłość. Polega na identyfikowaniu zmian, które są rzeczywiście prawdopodobne i istotne w okresie życia systemu.

## Design For Your Competitors

Przydatną techniką identyfikowania zmienności jest zaprojektowanie systemu tak, jakby miał być używany przez konkurenta albo inną jednostkę organizacyjną.

Należy zadać pytanie:

> Czy konkurent mógłby używać naszego systemu bez jego przebudowy?

Jeżeli odpowiedź brzmi „nie”, warto znaleźć wszystkie przeszkody stojące na drodze do takiego wykorzystania.

Dwie firmy mogą realizować tę samą ogólną usługę, ale wykonywać ją inaczej. Jeśli na przykład dwie firmy kurierskie inaczej planują trasy przesyłek, planowanie tras prawdopodobnie jest obszarem zmienności.

Jeżeli istnieją dwa różne sposoby realizacji czegoś, prawdopodobnie mogą istnieć również kolejne. Taki obszar należy hermetyzować.

Jeśli natomiast wszystkie firmy wykonują jakąś czynność dokładnie tak samo i nie ma realistycznej alternatywy, nie ma powodu tworzyć dla niej osobnego komponentu. Taki element prawdopodobnie reprezentuje naturę biznesu, a nie zmienność.

## Volatility And Longevity

Zmienność jest bezpośrednio związana z przewidywanym czasem życia systemu.

Im dłużej organizacja wykonuje coś w ten sam sposób, tym większe prawdopodobieństwo, że nadal będzie tak działać. Jednocześnie historia zmian daje wskazówkę dotyczącą przyszłości.

Można stosować prostą heurystykę:

> Organizacje, rynki i firmy mają mniej więcej stałą zdolność do wprowadzania i absorbowania zmian.

Organizacja konserwatywna będzie zmieniać systemy rzadziej niż szybko rozwijający się startup.

Jeżeli firma zmienia system płac średnio co dwa lata, a projektowany system ma działać przez pięć lat i integrować się z systemem płac, należy zakładać, że ta zmiana nastąpi w trakcie życia systemu. Zmienność systemu płac powinna więc zostać hermetyzowana, nawet jeśli nikt nie zapisał tego jako wymagania.

Dobrym punktem wyjścia jest spojrzenie na przewidywany okres życia systemu i zapytanie:

* co zmieniło się w domenie w ciągu ostatnich tylu lat?
* które z tych zmian mogą powtórzyć się w podobnym okresie?

Jeżeli system ERP zmienia się średnio co dziesięć lat, ostatnia zmiana miała miejsce osiem lat temu, a nowy system ma działać przez pięć lat, istnieje duże prawdopodobieństwo, że ERP zostanie wymieniony w trakcie jego życia.

Architektura powinna przygotowywać się przede wszystkim na zmiany, które prawdopodobnie nastąpią **w okresie istnienia systemu**.

## The Importance Of Practicing

Identyfikowanie zmienności jest umiejętnością praktyczną.

Jeżeli architekt zajmuje się pełną dekompozycją systemu tylko przez niewielki procent swojego czasu, nie osiągnie wysokiej skuteczności wyłącznie dzięki inteligencji czy znajomości teorii.

Nie można raz na kilka lat stanąć przy tablicy, narysować kilku komponentów i oczekiwać, że architektura będzie poprawna.

Każdy profesjonalny zawód wymaga treningu. Piloci ćwiczą latami, lekarze zdobywają doświadczenie pod nadzorem, a inni specjaliści wielokrotnie wykonują swoją pracę, zanim osiągną biegłość.

Tak samo jest z dekompozycją opartą na zmienności.

Najlepszym sposobem nauki jest praktykowanie na różnych systemach:

* analizowanie znanych systemów, takich jak bank, sklep internetowy czy aplikacja mobilna,
* analizowanie własnych wcześniejszych projektów i rzeczywistych problemów, które w nich wystąpiły,
* sprawdzanie, jakie zmiany powodowały efekt domina,
* zastanawianie się, czy wcześniejsze hermetyzowanie zmienności ograniczyłoby skutki tych zmian,
* analizowanie obecnych projektów i próba ich uratowania przed funkcjonalną dekompozycją,
* analizowanie systemów fizycznych, takich jak rower, laptop czy dom.

Po przeanalizowaniu kilku systemów zaczyna być widoczny ogólny sposób myślenia.

Tej umiejętności nie da się jednak opanować wyłącznie przez czytanie lub obserwowanie innych. Podobnie jak jazdy na rowerze, trzeba jej nauczyć się przez własne próby i błędy.

Lepiej popełniać te błędy podczas ćwiczeń niż podczas projektowania rzeczywistego systemu.
