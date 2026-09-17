---
title: '03 - Structure: Design Rules'
description: '03 - Structure: Design Rules'
pubDate: 2026-09-14
order: 10
categories:
  - architektura
---
## Calling Utilities

Utilities mogą być wywoływane z różnych warstw, ponieważ dotyczą wspólnej infrastruktury, takiej jak logowanie, bezpieczeństwo czy diagnostyka. Nie powinny jednak służyć jako sposób na obchodzenie zasad architektury.

## Calling ResourceAccess by Business Logic

**Managers** i **Engines** mogą korzystać z ResourceAccess. Manager może wywoływać ResourceAccess również bez pośrednictwa Engine, gdy nie ma potrzeby wydzielania osobnej aktywności biznesowej.

## Managers Calling Engines

Manager może wywoływać Engine mimo tego, że oba znajdują się w tej samej warstwie. Rozdzielenie Managera i Engine służy przede wszystkim oddzieleniu zmienności sekwencji działań od zmienności konkretnych aktywności.

## Queued Manager-to-Manager

Bezpośrednie wywołania między Managerami są niedozwolone, ale komunikacja między nimi może odbywać się **asynchronicznie przez kolejkę**. Ma to sens, gdy jedno use case uruchamia niezależne, odroczone wykonanie innego use case.

## Opening the Architecture

Odstępstwa od zamkniętej architektury powinny być **analizowane, a nie ignorowane**. Naruszenie zasady często wskazuje na nieprawidłowo rozpoznaną zmienność lub potrzebę zastosowania odpowiedniego mechanizmu, np. kolejki albo Pub/Sub.

## Design “Don’ts”

Klient nie powinien wywoływać wielu Managerów w ramach jednego use case ani wywoływać Engines bezpośrednio. Managers nie powinny bezpośrednio komunikować się między sobą, a Engines nie mogą wywoływać innych Engines. ResourceAccess nie powinny wywoływać innych ResourceAccess.

Clients, Engines, ResourceAccess i Resources nie powinny publikować zdarzeń. Engines, ResourceAccess i Resources nie powinny również subskrybować zdarzeń. Engines i ResourceAccess nie powinny otrzymywać wywołań kolejkowanych.

## Strive for Symmetry

Dobra architektura powinna być **symetryczna**. Podobne use case’y powinny mieć podobne wzorce komunikacji. Pojedynczy wyjątek, taki jak dodatkowe wywołanie, kolejka czy zdarzenie, może wskazywać na pominiętą zmienność albo funkcjonalną dekompozycję i powinien zostać potraktowany jako sygnał do sprawdzenia projektu.
