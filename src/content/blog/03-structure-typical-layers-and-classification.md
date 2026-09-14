---
title: '03 - Structure: Typical Layers and Classification'
description: '03 - Structure: Typical Layers and Classification'
pubDate: 2026-09-14
order: 8
categories:
  - architektura
---
## Typical Layers

The Method wyróżnia cztery podstawowe warstwy: **Client, Business Logic, ResourceAccess i Resource**, a dodatkowo pionową warstwę **Utilities**.

**Client Layer** odpowiada za klientów systemu, takich jak aplikacje desktopowe, webowe, mobilne czy inne systemy. Klienci korzystają z tych samych punktów wejścia, mechanizmów bezpieczeństwa i kontraktów. Warstwa ta oddziela sposób prezentacji od logiki biznesowej i zwykle jest najbardziej podatna na zmiany.

**Business Logic Layer** realizuje wymagane zachowanie systemu opisane przez use case’y. **Managers** enkapsulują zmienność sekwencji działań, natomiast **Engines** zmienność konkretnych aktywności i reguł biznesowych. Manager może korzystać z wielu Engines, a jeden Engine może być współdzielony przez wielu Managerów.

**ResourceAccess Layer** enkapsuluje sposób dostępu do zasobów. Nie powinien ujawniać szczegółów technicznych, takich jak CRUD czy operacje na plikach. Zamiast tego powinien udostępniać operacje opisane językiem biznesowym.

**Resource Layer** zawiera fizyczne zasoby systemu, takie jak baza danych, system plików, cache czy kolejka komunikatów.

**Utilities** zawierają wspólną infrastrukturę wykorzystywaną przez różne części systemu, np. bezpieczeństwo, logowanie, diagnostykę czy komunikację.

## Use Atomic Business Verbs

Operacje ResourceAccess powinny być opisane za pomocą **atomowych czasowników biznesowych**, czyli niepodzielnych z punktu widzenia biznesu czynności. Ich atomowość wynika z natury operacji biznesowej, a nie ze sposobu jej implementacji.

ResourceAccess może następnie wewnętrznie przełożyć taką operację na CRUD lub inne techniczne operacje. Dzięki temu zmiany sposobu przechowywania danych pozostają odizolowane.

## ResourceAccess Reuse

Usługi ResourceAccess powinny być **współdzielone** przez wielu Managerów i Engines. Brak możliwości ponownego użycia może oznaczać, że zmienność dostępu do zasobu lub atomowe operacje biznesowe nie zostały właściwie wydzielone.

## Classification Guidelines

Klasyfikacja usług pomaga rozpocząć projektowanie i utrzymać właściwy podział odpowiedzialności, ale sama nazwa kategorii nie gwarantuje poprawnej architektury. Nadal można doprowadzić do funkcjonalnej dekompozycji, dlatego potrzebne są dodatkowe zasady.

## What’s in a Name

Nazwy usług mają znaczenie dla komunikacji i powinny odzwierciedlać ich rolę. Nazwy są tworzone jako dwuczęściowe nazwy w PascalCase, gdzie druga część określa typ usługi: **Manager, Engine lub Access**.

Manager powinien mieć nazwę związaną ze zmiennością use case’ów, Engine z aktywnością, którą enkapsuluje, a ResourceAccess z zasobem, do którego uzyskuje dostęp. Formy zakończone na `-ing` powinny być używane jako prefiksy Engines. Atomowe czasowniki biznesowe powinny pozostać nazwami operacji w kontraktach ResourceAccess, a nie nazwami usług.

## The Four Questions

Warstwy można traktować jako odpowiedzi na cztery pytania:

* **Client:** kto korzysta z systemu?
* **Manager:** co system ma zrobić?
* **Engine:** jak wykonywana jest aktywność biznesowa?
* **ResourceAccess:** jak uzyskuje się dostęp do zasobów?
* **Resource:** gdzie znajduje się stan systemu?

Volatility ma jednak pierwszeństwo przed samym przypisaniem do kategorii. Pytania te pomagają zarówno rozpocząć projektowanie, jak i sprawdzić, czy istniejący podział jest poprawny.

## Managers-to-Engines Ratio

Engines powinno być mniej, niż można początkowo oczekiwać. Zbyt duża liczba Engines może wskazywać na funkcjonalną dekompozycję.

Orientacyjnie:

* 1 Manager → 0–1 Engine
* 2 Managers → około 1 Engine
* 3 Managers → około 2 Engines
* 5 Managers → maksymalnie około 3 Engines

Osiem Managerów w jednym takim układzie jest sygnałem, że podział może być nieprawidłowy.

## Key Observations

Zmianowość **maleje z góry na dół**: Clients są najbardziej podatne na zmiany, a Resources najmniej. Niższe warstwy mają więcej zależności, dlatego ich zmienność może powodować większe konsekwencje dla całego systemu.

Jednocześnie możliwość **ponownego użycia rośnie z góry na dół**. ResourceAccess i Resources są bardziej współdzielone niż wyższe warstwy.

Manager powinien być **prawie zbędny** w sensie implementacyjnym: jego główną rolą jest koordynowanie Engines i ResourceAccess oraz enkapsulowanie zmienności sekwencji działań. Manager, który zawiera dużą część logiki biznesowej, jest zwykle zbyt duży, natomiast Manager będący jedynie prostym przekazaniem wywołania jest oznaką problemu projektowego.

## Subsystems and Services

Managers, Engines i ResourceAccess są usługami. Powiązane ze sobą usługi mogą tworzyć **podsystem**, często odpowiadający określonemu use case’owi lub grupie use case’ów.

Podsystemy powinny być tworzone jako spójne pionowe fragmenty systemu, a nie przez nadmierne dzielenie go na wiele małych części. W większości systemów powinno być ich niewiele.
