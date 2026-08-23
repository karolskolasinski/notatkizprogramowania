---
title: Bash
description: Bash
pubDate: 2025-06-25
order: 9
categories:
  - dev
---

## Polecenia bash

### Nawigacja

- `/` - Root directory
- `.` - This location
- `..` - Up a directory
- `./` - Current directory
- `../` - Parent of current directory
- `../../` - Two directories backwards

### Polecenia związane z użytkownikami, grupami, loginami i zamykaniem systemu

- `shutdown` - zamykamy Linuxa
- `adduser` - dodajemy nowego użytkownika
- `newgrp` - dodajemy nową grupę
- `passwd` - zmieniamy hasła
- `logout` - wylogowanie się
- `who` - sprawdzamy kto jest aktualnie zalogowany
- `users` - j/w
- `w` - j/w
- `whoami` - sprawdzamy kim jesteśmy
- `mesg` - zezwolenie na przyjmowanie komunikatów
- `write` - wysłanie wiadomości do danego użytkownika
- `wall` - j/w tylko do wszystkich użytkowników
- `rwall` - j/w tylko do wszystkich w sieci
- `ruser` - wyświetla użytkowników pracujących w systemie
- `talk` - możliwość interaktywnej rozmowy
- `finger` - szczegółowe informacje o użytkownikach
- `su` - zmieniamy się w innego użytkownika
- `chmod` - zmieniamy parametry pliku
- `chown` - zmieniamy właściciela pliku
- `chgrp` - zmieniamy jaka grupa jest właścicielem pliku

### Polecenia związane z katalogami

- `ls` - pokazuje nam zawartość katalogu
- `dir` - okrojona wersja ls, pochodząca z msdos'a
- `pwd` - pokazuje nam katalog, w którym się znajdujemy
- `cd` - zmieniamy katalog
- `rmdir` - usuwamy katalog
- `mkdir` - nowy katalog

### Polecenia związane z plikami

- `cat` - edytowanie tekstu
- `rm` - usuwamy plik-i

### Polecenia związane z kopiowaniem i przenoszeniem, plików i katalogów

- `mv` - przenosimy plik lub zmieniamy jego nazwę
- `cp` - kopiujemy plik
- `mvdir` - przenosimy katalog lub zmieniamy jego nazwę

### Polecenia związane z procesami

- `ps` - pokazuje nam jakie procesy są aktualnie wykonywane
- `kill` - zabija procesy
- Aby zabić proces na konkretnym porcie:
    - `fuser 8080/tcp` - will print you PID of process bound on that port
    - `lsof -i :8000` - to polecenie wyświetli informacje o procesie nasłuchującym na porcie 8000, wraz z identyfikatorem procesu (PID)
    - `fuser -k 8080/tcp` - will kill that process

### Polecenia związane z pomocą

- `help` - wyświetla nam wszystkie polecenia w Linuxie
- `man` - pokazuje nam pomoc do programu

### Polecenia związane z kompresją i archiwilizacją

- `gzip` - kompresuje nam archiwum \*.gz
- `tar` -archiwizuje nam archiwum \*.tar

## **Polecenia CLI**

[https://ss64.com/bash/](https://ss64.com/bash/)

## Testy wydajności stron

`autocannon -c 100 -d 30`
