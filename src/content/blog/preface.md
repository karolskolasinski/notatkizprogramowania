---
title: Preface
description: Wstęp
pubDate: 2026-08-28
order: 2
categories:
  - architektura
---
## Preface.

Tworzenie oprogramowania znajduje się w głębokim, wielowymiarowym kryzysie. Problemy dotyczą **kosztu, terminów, wymagań, zespołów i złożoności, utrzymania oraz jakości**. Budżety i harmonogramy słabo odpowiadają rzeczywistości, zmiany wymagań niszczą wcześniejszą pracę, systemy stają się zbyt złożone, utrzymanie generuje kolejne problemy, a błędy są traktowane jako normalna cecha oprogramowania. Skutki wykraczają poza technikę: stres, rotacja, wypalenie i utrata zaufania stają się częścią pracy.

Te problemy nie są nowe. Wielu ludzi nigdy nie widziało projektu przeprowadzonego naprawdę dobrze, dlatego zaczyna traktować niepowodzenia jako nieuniknione. Tymczasem można regularnie dostarczać systemy **na czas, w budżecie i z wysoką jakością**.

Nie istnieje jedna technologia, narzędzie czy metodyka, która naprawi wielowymiarowy problem. Potrzebne jest potraktowanie tworzenia oprogramowania jako **dyscypliny inżynierskiej**. Można wykorzystać uniwersalne zasady sprawdzone w innych dziedzinach inżynierii zamiast wymyślać wszystko od początku.

Utrzymywalność, rozszerzalność, możliwość ponownego wykorzystania, koszt, czas i ryzyko są problemami **inżynierskimi**, a nie tylko technicznymi. Ich źródłem jest przede wszystkim projekt. Trzeba więc poprawnie zaprojektować zarówno **system**, jak i **projekt, który ten system zbuduje**. Software architect odpowiada za te aspekty projektowe. Dobre projektowanie pozwala dostarczać systemy zgodnie ze zobowiązaniami oraz tworzyć rozwiązania łatwe do utrzymania, rozbudowy i ponownego wykorzystania.

## How This Book Is Organized.

Metoda składa się z dwóch uzupełniających się części: **system design**, czyli architektury systemu, oraz **project design**, czyli projektu przedsięwzięcia potrzebnego do jego zbudowania. Żadna z nich sama nie wystarcza. Książka rozwija wiedzę spiralnie: kolejne rozdziały wracają do wcześniejszych idei, pogłębiają je i dodają nowe aspekty, dlatego powinny być czytane po kolei. Obie części zawierają również pełne studium przypadku.

* **Chapter 1, The Method** — podstawowa zasada: trzeba zaprojektować zarówno system, jak i projekt jego budowy. Nie da się sensownie zaprojektować projektu bez architektury i nie ma sensu projektować systemu, którego nie da się zbudować.
* **Chapter 2, Decomposition** — jak podzielić system na komponenty architektury. Najpierw pokazuje błędne sposoby dekompozycji, a następnie właściwe podejście i narzędzia analityczne potrzebne do znalezienia odpowiednich komponentów.
* **Chapter 3, Structure** — wprowadza strukturę do dekompozycji: wymagania, warstwy architektury, klasyfikację komponentów, ich wzajemne relacje, zasady klasyfikacji i projektowanie podsystemów.
* **Chapter 4, Composition** — pokazuje, jak złożyć komponenty w system realizujący wymagane zachowania. Zawiera kilka kluczowych zasad projektowania i buduje na dekompozycji oraz strukturze.
* **Chapter 5, System Design Example** — pełne studium przypadku projektowania systemu: rzeczywisty system, powiązanie architektury z biznesem, stworzenie architektury i jej walidacja.
* **Chapter 6, Motivation** — wprowadza project design i wyjaśnia, dlaczego projektowanie projektu jest w ogóle konieczne.
* **Chapter 7, Project Design Overview** — ogólny proces projektowania projektu: definicja sukcesu, obsada, świadome decyzje, sieć projektu, ścieżka krytyczna, harmonogram, koszt oraz role i odpowiedzialności.
* **Chapter 8, Network and Float** — modelowanie projektu jako sieci zależności, pojęcie zapasu czasu (*float*) oraz wykorzystanie go przy obsadzie, harmonogramowaniu i analizie ryzyka.
* **Chapter 9, Time and Cost** — zależność między czasem i kosztem, przyspieszanie projektu, kompresja harmonogramu, krzywa czas–koszt i elementy kosztu.
* **Chapter 10, Risk** — ryzyko jako wielkość, którą można mierzyć. Powiązanie ryzyka z czasem, kosztem i siecią projektu oraz wykorzystanie go do porównywania wariantów.
* **Chapter 11, Project Design in Action** — kompletny przebieg projektowania projektu krok po kroku, ze szczególnym naciskiem na sposób myślenia oraz przygotowanie wariantów do przeglądu przez osoby podejmujące decyzje biznesowe.
* **Chapter 12, Advanced Techniques** — bardziej zaawansowane techniki przydatne zarówno w prostych, jak i bardzo złożonych projektach, stosowane razem z wcześniejszymi narzędziami.
* **Chapter 13, Project Design Example** — pełne studium przypadku projektowania projektu odpowiadające przykładowi architektury z rozdziału 5.
* **Chapter 14, Concluding Thoughts** — praktyczne wytyczne i perspektywa na całość procesu: kiedy projektować projekt, jak podchodzić do projektowania i jaki wpływ project design ma na jakość.
* **Appendix A, Project Tracking** — śledzenie rzeczywistego postępu względem planu i podejmowanie działań korygujących.
* **Appendix B, Service Contract Design** — projektowanie kontraktów usług oraz zależności między modularnością, rozmiarem komponentów i kosztem.
* **Appendix C, Design Standard** — skondensowany zestaw najważniejszych dyrektyw, zasad oraz nakazów i zakazów z całej książki: przede wszystkim **co robić**, bez ponownego wyjaśniania **dlaczego**.

## Some Assumptions About the Reader.

Książka jest skierowana przede wszystkim do software architects, ale również do senior developerów, project managerów, osób łączących kilka ról oraz programistów chcących rozwinąć się w kierunku architektury.

Zasady nie zależą od języka programowania, platformy, wielkości projektu, branży, modelu biznesowego ani wielkości firmy. Najważniejsze założenie jest takie, że **zależy ci na jakości swojej pracy, przeszkadzają ci obecne porażki i marnotrawstwo i chcesz robić rzeczy lepiej**, nawet jeśli brakuje ci jeszcze właściwych zasad i narzędzi.

## What You Need to Use This Book.

Jedynym wymaganiem jest **otwarty umysł**. Wcześniejsze porażki i frustracje są wręcz pomocne, bo pozwalają zrozumieć, jakie problemy mają rozwiązywać przedstawione zasady.
