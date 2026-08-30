---
title: '02 - Decomposition: Avoid Functional Decomposition'
description: '02 - Decomposition: Avoid Functional Decomposition'
pubDate: 2026-08-30
order: 4
categories:
  - architektura
---
## Decomposition

Architektura to przede wszystkim **podział systemu na komponenty** oraz określenie, jak współpracują w czasie działania.

Najważniejsza decyzja architektoniczna to właściwa **dekompozycja systemu**. Błędny podział oznacza błędną architekturę, kosztowny rozwój i utrzymanie, a często konieczność przepisania systemu.

W The Method najbardziej granularną jednostką architektury jest **service**. Technologia implementacji, interfejsy czy hierarchie klas należą do Detailed Design i mogą się zmieniać bez zmiany architektury.

## Avoid Functional Decomposition

Functional Decomposition tworzy komponenty bezpośrednio na podstawie funkcjonalności:

**Invoicing → Invoicing Service**\
**Billing → Billing Service**\
**Shipping → Shipping Service**

To tworzy architekturę zależną od aktualnych wymagań. Zmiana funkcjonalności wymusza zmianę komponentów i ich podziału.

### Problems with Functional Decomposition

Functional Decomposition prowadzi do:

* silnego coupling między komponentami,
* braku reużywalności,
* zbyt wielu małych lub zbyt dużych services,
* przenoszenia Business Logic do klientów,
* trudnego testowania i rozwoju systemu.

### Precluding Reuse

Funkcjonalne services są zwykle zależne od kolejności wykonywania innych funkcji.

Service **B** nie jest naprawdę niezależny, jeżeli zakłada, że wcześniej wykonano **A**, a później zostanie wykonane **C**.

W efekcie pozornie osobne services tworzą jeden silnie sprzężony zestaw.

### Too Many or Too Big

Functional Decomposition prowadzi do dwóch skrajności:

* ogromnej liczby małych services,
* kilku ogromnych **god services**.

Pierwszy przypadek zwiększa koszt integracji i testowania. Drugi tworzy komponenty zbyt złożone, aby można je było łatwo utrzymywać.

### Clients Bloat and Coupling

Ktoś musi połączyć funkcjonalne services w wymagane zachowanie. Często robi to klient.

Klient zaczyna wtedy zawierać:

* kolejność wywołań,
* Business Logic,
* obsługę błędów,
* kompensację,
* wiedzę o wewnętrznej strukturze systemu.

Każdy nowy klient musi odtwarzać tę logikę. Zmiana systemu wymusza zmiany w klientach.

Dobry projekt pozwala klientowi i systemowi ewoluować niezależnie.

### Multiple Points of Entry

Jeżeli klient musi wywoływać wiele services, system ma wiele punktów wejścia.

Authentication, authorization, scalability, transaction management i inne mechanizmy muszą być obsługiwane w wielu miejscach, co zwiększa coupling i koszt zmian.

### Services Bloating and Coupling

Przeniesienie orkiestracji z klienta do services nie rozwiązuje problemu.

Jeżeli **A wywołuje B, a B wywołuje C**, services poznają swoje wzajemne zależności, kontrakty zaczynają zawierać dane potrzebne innym services, a obsługa błędów wymaga znajomości i kompensowania cudzych operacji.

Pozornie osobne services stopniowo stają się jednym sprzężonym systemem.

## Reflecting on Functional Decomposition

Functional Decomposition jest atrakcyjna, ponieważ jest łatwa:

**lista funkcjonalności → komponent dla każdej funkcjonalności**

Właśnie dlatego nie jest prawdziwym wysiłkiem projektowym. Projektowanie ma dostarczać wartość poprzez znalezienie właściwej struktury, a nie mechaniczne odwzorowanie wymagań.

## The Anti-Design Effort

Dobrym testem Functional Decomposition jest zaprojektowanie celowo najgorszego możliwego systemu:

* trudnego do utrzymania,
* trudnego do rozszerzenia,
* niemożliwego do ponownego użycia.

Często rezultat będzie bardzo podobny do „naturalnego” Functional Decomposition.

## Example: Functional House

Nie projektuje się domu jako osobnych komponentów:

* Cooking,
* Sleeping,
* Resting.

Dlaczego więc projektować tak software?

Funkcjonalności są wymaganiami systemu, a nie jego strukturą architektoniczną.

## When To Use Functional Decomposition

Functional Decomposition jest przydatna do **odkrywania wymagań**.

Można dzięki niej:

* znaleźć ukryte funkcjonalności,
* uporządkować wymagania,
* wykryć zależności i redundancje.

Nie należy jednak mapować wymagań bezpośrednio na komponenty architektury.

**Requirements ≠ Design.**

## Avoid Domain Decomposition

Domain Decomposition dzieli system według obszarów biznesowych, np.:

* Sales,
* Accounting,
* Shipping.

Nie rozwiązuje to problemu, ponieważ często jest Functional Decomposition ukrytym pod innymi nazwami.

Domeny stają się zbiorami powiązanych funkcjonalności, duplikują zachowania i utrudniają tworzenie procesów przekraczających granice domen.

## Faulty Motivation

Chęć szybkiego dostarczania pojedynczych funkcjonalności prowadzi do błędnej dekompozycji.

Pojedyncza funkcja często nie ma samodzielnej wartości biznesowej. Próba wdrażania jej niezależnie, szczególnie podczas zastępowania legacy systemu, może wymagać kosztownego utrzymywania i synchronizowania starego oraz nowego systemu.

## Testability and Design

Największe problemy systemów nie wynikają zwykle z błędów pojedynczych komponentów, lecz z **interakcji między nimi**.

Unit tests nie wystarczają do zweryfikowania systemu. Zmiana jednego komponentu może wpłynąć na inne komponenty i ich interakcje.

Potrzebne jest regression testing całego systemu.

Functional i Domain Decomposition zwiększają liczbę interakcji i złożoność do poziomu, w którym pełne testowanie staje się praktycznie niemożliwe.

## Physical Versus Software Systems

Zasady projektowania złożonych systemów są uniwersalne.

System powinien być:

* maintainable,
* reusable,
* extensible,
* safe,
* wysokiej jakości.

Software wymaga szczególnie dobrego projektowania, ponieważ nie posiada wielu naturalnych fizycznych ograniczeń. Bez właściwej architektury jego złożoność może rosnąć praktycznie bez kontroli.

Największa różnica polega na tym, że koszt złego projektu w software jest często **niewidoczny**.

## Example: Functional Trading System

System podzielony na:

* Buying Stocks,
* Selling Stocks,
* Trade Scheduling,
* Reporting,
* Analyzing

powiela ten sam problem.

Zmiana klienta, sposobu komunikacji, storage, dostawcy danych, modelu działania, instrumentów finansowych lub rynku wymusza zmiany w wielu komponentach.

**Błędna dekompozycja powoduje, że każda zmiana rozlewa się przez cały system.**
