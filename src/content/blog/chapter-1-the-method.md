---
title: Chapter 1. The Method.
description: |
  Chapter 1. The Method.
pubDate: 2026-08-30
order: 3
categories:
  - architektura
---
## The Method

Początkujący architekt widzi wiele możliwych rozwiązań. Doświadczony architekt wie, że dobrych rozwiązań jest niewiele, a często tylko jedno.

**The Method** zamienia doświadczenie architektoniczne w powtarzalny proces projektowania systemu i projektu potrzebnego do jego zbudowania.

## What Is The Method?

**The Method = System Design + Project Design**

**System Design** określa architekturę: podział systemu na małe, modularne komponenty oraz sposób ich współpracy.

**Project Design** określa, jak system zbudować, poprzez warianty czasu, kosztu i ryzyka.

Project Design ma większy wpływ na sukces niż sama architektura. Świetnego systemu nie da się uratować, jeśli projekt nie ma wystarczających zasobów, czasu lub akceptowalnego ryzyka.

## Design Validation

Przed rozpoczęciem implementacji trzeba zwalidować:

* czy architektura spełnia wymagania,
* czy organizacja jest w stanie ją zbudować.

Błędna architektura odkryta po rozpoczęciu implementacji staje się bardzo kosztowna. Projekt systemu i projektu musi zostać zweryfikowany możliwie wcześnie.

Celem jest usunięcie **design jako ryzyka projektu**.

## Time Crunch

Projektowanie powinno być szybkie — zazwyczaj kilka dni, nie tygodnie.

Presja czasu wymusza koncentrację i decyzje. Więcej czasu często prowadzi do projektowania zbędnych elementów, które zwiększają złożoność i koszt systemu.

## Eliminating Analysis-Paralysis

Paraliż analityczny wynika przede wszystkim z podejmowania decyzji w niewłaściwej kolejności.

### Design Decisions Tree

Projekt składa się z hierarchicznego drzewa decyzji. Późniejsze decyzje zależą od wcześniejszych.

Podejmowanie decyzji poza właściwą kolejnością powoduje, że nowe odkrycia unieważniają wcześniejsze decyzje i wymuszają ciągłe powtarzanie pracy.

### Software System Design Decision Tree

The Method prowadzi przez właściwe drzewo decyzji:

**najpierw System Design, potem Project Design.**

Ograniczenia stopniowo zawężają liczbę możliwych rozwiązań, aż projekt konwerguje do właściwej decyzji.

## Communication

Architektura musi zostać zrozumiana przez ludzi, którzy ją implementują.

The Method daje wspólną strukturę, semantykę i język do komunikowania:

* architektury programistom,
* projektu managementowi,
* decyzji innym architektom.

Review ma wykrywać odchylenia od projektu. Nie zastąpi jednak zrozumienia i akceptacji jego intencji przez zespół.

## What The Method Is Not

The Method nie jest automatycznym przepisem na sukces.

Nie zastępuje odpowiedzialności architekta za:

* właściwe zrozumienie systemu,
* podjęcie właściwych decyzji,
* komunikację architektury,
* utrzymanie projektu podczas implementacji,
* stworzenie realistycznego Project Design.

The Method działa tylko wtedy, gdy jest stosowana uczciwie, na podstawie rzeczywistych informacji i rzeczywistych ograniczeń.
