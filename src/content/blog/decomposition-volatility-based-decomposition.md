---
title: 'Decomposition: Volatility-Based Decomposition'
description: 'Decomposition: Volatility-Based Decomposition'
pubDate: 2026-08-30
order: 5
categories:
  - architektura
---
## Volatility-Based Decomposition

Podstawowa dyrektywa The Method:

**Decompose based on volatility.**

Dekompozycja powinna identyfikować obszary potencjalnej zmiany i hermetyzować je w komponentach systemu. Wymagane zachowanie powstaje przez współpracę tych obszarów.

Zmiana powinna działać jak granat wrzucony do sejfu: może całkowicie zmienić wnętrze jednego komponentu, ale jej skutki nie powinny rozprzestrzeniać się na resztę systemu.

Functional Decomposition robi odwrotnie — zmiana jednej funkcjonalności często rozlewa się przez wiele komponentów.

## Decomposition, Maintenance, and Development

Hermetyzacja zmienności ogranicza skutki zmian do granic komponentu.

Daje to:

* łatwiejsze utrzymanie,
* mniej efektów ubocznych,
* niższą złożoność,
* większą jakość,
* możliwość reuse,
* łatwiejsze rozszerzanie systemu.

Podczas developmentu wymagania będą się zmieniać. Architektura oparta na volatility zwiększa szansę, że zmiany nie zniszczą harmonogramu.

## Universal Principle

Volatility-Based Decomposition jest uniwersalną zasadą projektowania.

Dobrze zaprojektowane systemy nie organizują swoich komponentów według wszystkich wykonywanych funkcji. Realizują funkcjonalności przez **łączenie niezależnych, hermetyzujących zmienność elementów**.

Tak działa również świat fizyczny. Urządzenie korzystające z prądu nie musi wiedzieć:

* skąd pochodzi energia,
* jakie są parametry instalacji,
* jak została wytworzona.

Cała ta zmienność jest ukryta za stabilnym punktem dostępu.

**Funkcjonalność powstaje przez integrację obszarów zmienności.**

## Volatility-Based Decomposition and Testing

Mniej coupling, prostsze komponenty i prostsze interakcje umożliwiają skuteczne regression testing.

Zmiana wewnątrz komponentu może być testowana lokalnie, bez niszczenia testów pozostałych części systemu.

## Shoulders Of Giants: David Parnas

David Parnas już w 1972 roku wskazał **change jako podstawowe kryterium dekompozycji**, zamiast funkcjonalności.

Z tej idei wynikają fundamenty nowoczesnej inżynierii oprogramowania:

* encapsulation,
* information hiding,
* cohesion,
* modules,
* loose coupling.

## The Volatility Challenge

Volatility nie jest podawana wprost w wymaganiach.

Klient mówi:

**„System ma robić A, B i C.”**

Architekt musi przeanalizować wymagania i odkryć:

**„Co tutaj może się zmienić?”**

Dlatego Volatility-Based Decomposition wymaga więcej wysiłku niż Functional Decomposition.

Właściwie analiza wymagań służy przede wszystkim do odkrywania obszarów zmienności.

## The 2% Problem

Projektowanie architektury od podstaw zdarza się rzadko — przez większość czasu system jest jedynie rozwijany.

Jeżeli wykonujesz trudną czynność tylko około **2% swojego czasu**, nie zdobędziesz w niej mistrzostwa wyłącznie przez praktykę w pracy.

Dlatego umiejętność właściwej dekompozycji musi być świadomie rozwijana przed momentem, w którym pojawi się nowy system do zaprojektowania.

Jednym z największych problemów jest również zdobycie czasu potrzebnego na właściwe projektowanie.

## Efekt Dunninga-Krugera

Osoby nieposiadające kompetencji w danym obszarze mają tendencję do niedoceniania jego złożoności.

Dlatego manager może autentycznie nie rozumieć, dlaczego architektura wymaga czasu i dlaczego nie można po prostu:

**A → B → C**

Zadaniem architekta jest komunikowanie złożoności problemu i uzasadnianie właściwego procesu projektowego.

## Walka z szaleństwem

Powtarzanie Functional Decomposition i oczekiwanie lepszych rezultatów nie zmieni skutków tej decyzji.

Architekt musi bronić właściwej dekompozycji, ponieważ jej jakość determinuje przyszłą utrzymywalność, rozszerzalność i koszt systemu.

**Najważniejsza zasada: nie dziel systemu według tego, co robi. Dziel go według tego, co może się zmienić.**
