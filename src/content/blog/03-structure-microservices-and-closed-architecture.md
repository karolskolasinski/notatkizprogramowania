---
title: '03 - Structure: Microservices and Closed Architecture'
description: '03 - Structure: Microservices and Closed Architecture'
pubDate: 2026-09-14
order: 9
categories:
  - architektura
---
## Incremental Construction

Duże systemy mogą być budowane stopniowo jako kompletne, wartościowe **pionowe fragmenty systemu**. Zasada brzmi: **projektować iteracyjnie, budować przyrostowo**. Projekt może się zmieniać w kolejnych iteracjach, ale każdy przyrost powinien dostarczać działającą wartość.

Dekompozycja oparta na zmienności pozwala zachować stabilną architekturę podczas dalszego rozwoju systemu. Przy dekompozycji funkcjonalnej kolejne zmiany prowadzą natomiast do coraz większej ilości nieuporządkowanego kodu.

## Extensibility

Pionowe fragmenty ułatwiają **rozszerzanie systemu**. Poprawnie zaprojektowane rozszerzenie powinno wymagać przede wszystkim dodania nowych elementów, bez konieczności przebudowy istniejących.

Zmiana istniejących elementów w celu przygotowania systemu na przyszłe potrzeby nie jest rozszerzalnością.

## About Microservices

The Method nie traktuje **microservices** jako osobnej kategorii architektury. Niezależnie od rozmiaru są to po prostu usługi.

Löwy krytykuje ograniczenie usług do określonego rozmiaru, ponieważ korzyści wynikające z usług powinny być wykorzystywane również na poziomie Managerów, Engines i ResourceAccess. Zwraca również uwagę, że wiele projektów mikroserwisowych stosuje jednocześnie dekompozycję funkcjonalną, tracąc korzyści wynikające z właściwego podziału na zmienności.

Problemem jest również stosowanie tych samych protokołów komunikacji wewnętrznej i zewnętrznej. REST, WebAPI czy HTTP są odpowiednie do komunikacji zewnętrznej, ale komunikacja pomiędzy wewnętrznymi usługami powinna być szybka, niezawodna i zoptymalizowana pod kątem wydajności.

## Open and Closed Architectures

W **Open Architecture** dowolny komponent może wywoływać inne komponenty niezależnie od warstwy. Zapewnia to dużą elastyczność, ale ogranicza enkapsulację i zwiększa sprzężenie.

**Closed Architecture** ogranicza komunikację do sąsiedniej warstwy niżej. Każda warstwa udostępnia usługi warstwie znajdującej się bezpośrednio nad nią i ukrywa wszystko poniżej. Zmniejsza to sprzężenie i zwiększa enkapsulację.

Istnieją również rozwiązania **Semi-Closed/Semi-Open**, pozwalające na przechodzenie przez kilka warstw. Mogą być uzasadnione w szczególnych przypadkach, ale większość systemów biznesowych powinna stosować architekturę zamkniętą.

## Relaxing the Rules

Architektura zamknięta jest właściwym rozwiązaniem dla większości systemów biznesowych, ale jej ścisłe stosowanie może czasami powodować niepotrzebną złożoność i dodatkowe poziomy pośrednie. Zasady można więc rozluźniać tam, gdzie jest to uzasadnione, bez rezygnacji z enkapsulacji i ograniczania sprzężenia.
