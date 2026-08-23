---
title: SemVer – Semantic Versioning
description: SemVer – Semantic Versioning
pubDate: 2026-04-13
order: 14
categories:
  - javascript
---

## SemVer – Semantic Versioning

Wersje zawsze mają trzy cyfry: **Major.Minor.Patch** (np. `4.1.2`).

| **Symbol**         | **Przykład** | **Co to oznacza dla Twojego komputera?**                                                                            |
|--------------------|--------------|---------------------------------------------------------------------------------------------------------------------|
| **Brak (Exact)**   | `4.1.2`      | „Tylko i wyłącznie ta wersja. Ani kroku w bok!”                                                                     |
| **Daszek (`^`)**   | `^4.1.2`     | „Daj mi wszystko, co nowsze, ale **nie zmieniaj pierwszej cyfry**. (Dopuszczam `4.2.0`, `4.9.9`, ale nie `5.0.0`)”. |
| **Tylda (`~`)**    | `~4.1.2`     | „Bądź bardzo ostrożny. **Zmieniaj tylko ostatnią cyfrę**. (Dopuszczam `4.1.5`, ale nie `4.2.0`)”.                   |
| **Gwiazdka (`*`)** | `*`          | „Rób co chcesz, bierz najnowszą, nawet jak wszystko wybuchnie”. (Bardzo ryzykowne).                                 |
| **Większy/Równy**  | `>=4.0`      | „Byle nie starsze niż 4.0. Może być nawet wersja 100”.                                                              |

Jeśli masz zapisane `"@types/react": "^19"`, to oznacza: **„Daj mi Reacta 19, ale jak wyjdzie 19.1, 19.5 albo 19.9, to mi go zaktualizuj, bo to tylko nowe funkcje i poprawki, które nic nie popsują”**.

Gdyby wyszedł React **20**, npm go nie tknie, dopóki sam nie zmienisz tej cyferki w pliku. Pierwsza cyfra to „zmiany drastyczne” – jej zmiana bez Twojej wiedzy mogłaby sprawić, że rano obudzisz się z niedziałającym projektem.

## Co zostanie zainstalowane?

> Jeżeli mam zapisane w package.json: `"axios": "^1.14.0"`, a wyszła już wersja "axios": `"^1.15.0"`, to zostanie ona zainstalowana, pomimo że w `package.json` będzie `"axios": "^1.14.0"`?

### 1. Czy 1.15.0 zostanie zainstalowane?

**Tak, ale tylko w określonych sytuacjach.** Mimo że w `package.json` masz wpisane `^1.14.0`, to przy napotkaniu tego zapisu system (npm/pnpm/yarn) myśli sobie: _„Dobra, użytkownik chce co najmniej 1.14.0, ale jeśli jest coś nowszego w ramach wersji 1.x.x, to biorę najnowsze”_.

**Kiedy wskoczy nowsza wersja (np. 1.15.0)?**

- Gdy pierwszy raz robisz `npm install` w nowym folderze.
- Gdy usuniesz folder `node_modules` i plik `package-lock.json`, a potem zainstalujesz wszystko od nowa.
- Gdy wpiszesz komendę `npm update axios`.

### 2. Co będzie w `package-lock.json`?

W `package-lock.json` **nie będzie daszka**. Ten plik to „zdjęcie” Twojego folderu `node_modules` w konkretnym momencie.

- W `package.json` zostanie: `"axios": "^1.14.0"` (to jest Twoja **deklaracja chęci**).
- W `package-lock.json` pojawi się: `"version": "1.15.0"` (to jest **stwierdzenie faktu**).

Dzięki temu, jeśli wyślesz swój kod koledze, a on wpisze `npm install`, to on dostanie dokładnie tę samą wersję co ty (`1.15.0`), bo npm najpierw patrzy do „locka”, a nie do twoich życzeń w
`package.json`.
