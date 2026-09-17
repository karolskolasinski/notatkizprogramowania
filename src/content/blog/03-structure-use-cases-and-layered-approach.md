---
title: '03 - Structure: Use Cases and Layered Approach'
description: '03 - Structure: Use Cases and Layered Approach'
pubDate: 2026-09-13
order: 7
categories:
  - architektura
---
## Use Cases and Requirements

Wymagania powinny opisywać **wymagane zachowanie systemu**, a nie jedynie jego funkcjonalność. Samo stwierdzenie, że system ma wykonywać określoną funkcję, pozostawia zbyt wiele miejsca na różne interpretacje. Wymagania powinny określać, **jak system ma działać**, aby osiągnąć wymagany rezultat.

## Required Behaviors

**Use case** opisuje wymagane zachowanie systemu, czyli sekwencję działań prowadzących do wykonania pracy i dostarczenia wartości biznesowej. Use case’y powinny obejmować nie tylko interakcje użytkownika z systemem, ale również komunikację między systemami i przetwarzanie wykonywane wewnątrz systemu.

Use case może być opisany tekstowo lub graficznie. Dla prostych przypadków tekst może wystarczyć, ale przy bardziej złożonym zachowaniu diagram lepiej przedstawia zależności i warunki. Gdy pojawiają się zagnieżdżone instrukcje `if`, należy przedstawić use case graficznie.

## Activity Diagrams

The Method preferuje **diagramy aktywności**, ponieważ pozwalają przedstawić również zachowania zależne od czasu, takie jak wykonywanie równoległe, blokowanie i oczekiwanie. Zwykłe flowcharty nie pokazują tego odpowiednio.

Diagramów aktywności nie należy mylić z **use case diagrams**. Te drugie koncentrują się na użytkowniku i nie pokazują czasu ani kolejności wykonywania działań.

## Layered Approach

System powinien być projektowany **warstwowo**. Warstwy enkapsulują zmienność: każda warstwa ukrywa własną zmienność przed warstwami powyżej i poniżej, a usługi wewnątrz warstwy ukrywają swoją zmienność przed sobą nawzajem.

Nawet proste systemy powinny korzystać z warstw. W praktycznych systemach zazwyczaj jest ich kilka, a najniższa warstwa kończy się na fizycznych zasobach, takich jak magazyn danych czy kolejka komunikatów.

## Using Services

Przekraczanie warstw powinno odbywać się przede wszystkim poprzez **wywoływanie usług**. Technologia użyta do ich implementacji jest kwestią szczegółowego projektu.

Usługi zapewniają między innymi skalowalność, bezpieczeństwo, większą przepustowość i dostępność, responsywność, niezawodność, spójność oraz synchronizację.
