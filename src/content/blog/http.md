---
title: HTTP
description: HTTP
pubDate: 2025-04-29
order: 8
categories:
  - dev
---

HTTP to protokół używany do komunikacji między klientem a serwerem w sieci. W ramach tego protokołu zdefiniowanych jest kilka metod (czasem nazywanych "czasownikami"), które określają, jak klient chce oddziaływać na dane na serwerze. Oto krótki przegląd najważniejszych metod HTTP:

### Co to znaczy idempotent?

Metoda idempotentna to taka, która przy wielokrotnym wykonaniu daje ten sam efekt, co przy jednokrotnym. Np. wielokrotne wysłanie żądania `DELETE` do usunięcia tego samego zasobu będzie miało ten sam efekt – zasób zostanie usunięty (lub pozostanie usunięty), niezależnie od liczby prób.

### Główne metody HTTP:

* **GET** – pobiera dane, nie zmienia stanu serwera, bezpieczna i idempotentna
* **POST** – tworzy nowy zasób lub wykonuje akcję, niebezpieczna i nieidempotentna
* **PUT** – zastępuje cały zasób, niebezpieczna ale idempotentna
* **PATCH** – modyfikuje część zasobu, niebezpieczna i nieidempotentna
* **DELETE** – usuwa zasób, niebezpieczna ale idempotentna
* **HEAD** – jak GET, ale bez treści, tylko nagłówki
* **OPTIONS** – zwraca możliwe metody dla zasobu
* **TRACE** – pokazuje, co serwer otrzymał (debugowanie)
* **CONNECT** – używana do tworzenia tunelu (np. HTTPS przez proxy)

#### GET

Najczęściej używaną metodą HTTP jest GET. Celem metody GET jest po prostu pobranie danych z serwera. Metoda GET jest używana do żądania dowolnych z następujących zasobów:

* Strona internetowa lub plik HTML.
* Obraz lub wideo
* Dokument JSON
* Plik CSS lub plik JavaScript
* Plik XML

Metodę żądania GET uważa się za operację bezpieczną, co oznacza, że ​​nie powinna ona zmieniać stanu żadnego zasobu na serwerze.

####

#### POST

Metoda żądania HTTP POST wysyła dane do serwera w celu przetworzenia. Dane wysyłane na serwer mają zazwyczaj następującą formę:

* Pola wprowadzania danych z formularzy online
* Dane XML lub JSON
* Dane tekstowe z parametrów zapytania

Specyfikacja HTTP umożliwia deweloperowi decydowanie o typie przetwarzania danych przesyłanych za pomocą metody HTTP POST. Prototypowe zastosowania metody POST obejmują:

* Umieść wiadomość na tablicy ogłoszeń
* Zapisywanie danych z formularzy HTML do bazy danych
* Oblicz wynik w oparciu o przesłane dane

Operacja POST nie jest uważana za operację bezpieczną, ponieważ może ona aktualizować stan serwera i powodować potencjalne skutki uboczne w stanie serwera po jej wykonaniu. Metoda HTTP POST nie musi być idempotentna, co oznacza, że ​​może pozostawiać dane i zasoby na serwerze w innym stanie po każdym wywołaniu.

### REST API

REST API (Representational State Transfer) to styl architektury dla systemów rozproszonych, oparty na metodach HTTP. W REST każdy zasób (np. użytkownik, post, komentarz) ma swój unikalny URL, a interakcje z tymi zasobami odbywają się przy pomocy metod HTTP. REST promuje prostotę, czytelność i brak stanu po stronie serwera (stateless). Dzięki temu jest popularnym rozwiązaniem w nowoczesnych aplikacjach webowych i mobilnych.
