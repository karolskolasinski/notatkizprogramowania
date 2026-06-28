---
title: Null safety
description: >-
  Iluzja bezpieczeństwa, czyli dlaczego TypeScript to za mało. Głębokie
  nurkowanie w Null Safety i architekturę błędów
pubDate: 2026-06-28
heroImage: '@assets/posts/null-safety/heroImage.jpg'
categories:
  - html
---
## TypeScript kłamie! Iluzja bezpieczeństwa, czyli dlaczego TypeScript to za mało. Głębokie nurkowanie w Null Safety i architekturę błędów

Współczesny frontend stoi na jednym, potężnym fundamencie: **TypeScript**. Myślimy, że dorzucenie typów do chaotycznego świata JavaScriptu to lek na całe zło. Piszemy interfejsy, konfigurujemy `tsconfig.json`, a kiedy kompilator nie krzyczy, pijemy kawę z poczuciem dobrze spełnionego obowiązku.

Ale czy na pewno jesteśmy bezpieczni?

Prawda jest bolesna: **TypeScript często daje nam jedynie iluzję bezpieczeństwa.** Kiedy twój kod trafia do przeglądarki, TS znika, a aplikacja staje oko w oko z brutalną rzeczywistością runtime'u.

Aby zrozumieć, dlaczego tak się dzieje i jak budować oprogramowanie, które *naprawdę* nigdy się nie wywali, musimy cofnąć się do korzeni teorii typów, zrozumieć koncepcję **Null Safety** i przyjrzeć się technologiom, które rozwiązały ten problem raz a dobrze.

Oto podróż przez „miliardowy błąd” informatyki, nieszczelne systemy typów i alternatywy, które zmieniają zasady gry.

### 1. Ciemna strona TypeScriptu: Kiedy narzędzie staje się ciężarem

Żeby było jasne - z dwojga złego (co do zasady, bo nie zawsze) TS jest lepszy niż JS. Ale to, że coś jest lepsze nie znaczy, że jest dobre. Jakie problemy, ograniczenia i niebezpieczeństwa niesie ze sobą TS?

* "Type Gymnastic" (Gimnastyka typów)
  Czasami pisanie typów staje się trudniejsze niż napisanie samej logiki biznesowej. Kiedy zaczynasz tworzyć generyki generyków, używać `infer`, `keyof`, `Omit`, `Pick` i warunkowych typów, kod zaczyna przypominać czarną magię, a nie czytelny skrypt. Zamiast dostarczać funkcje, spędzasz dwie godziny na upewnianiu się, że kompilator jest zadowolony.
* Nie ma nic gorszego niż instalacja świetnej, małej biblioteki z npm, która... nie ma oficjalnych typów. Wtedy zaczyna się zabawa:
  * Szukanie `@types/biblioteka` (które mogą być nieaktualne).
  * Pisanie własnych plików `.d.ts`.
  * Ostatecznie, w akcie desperacji i zmęczenia: `// @ts-ignore` albo rzucenie wszechobecnego `any`.
* TypeScript chroni Cię **tylko podczas kompilacji**. Kiedy kod trafia do przeglądarki lub Node.js, to wciąż jest zwykły JavaScript. Jeśli API z backendu zwróci inny obiekt, niż zadeklarowałeś w typach, TypeScript Cię przed tym nie uratuje – aplikacja i tak się wywali w runtime.
* Plik `tsconfig.json` potrafi być koszmarem, zwłaszcza w większych projektach (monorepo). Do tego dochodzi czas kompilacji. Czysty JavaScript działa od razu. W TS musisz czekać, aż `tsc` przemieli cały projekt, co przy ogromnych bazach kodu zauważalnie spowalnia feedback loop podczas developmentu.
* `any` oraz `unknown`
  Prawda jest taka, że TypeScript jest tak restrykcyjny, jak sam tego chcesz. Istnienie any sprawia, że w momentach kryzysowych łatwo oszukiwać. Z kolei poprawne obsłużenie unknown wymaga tylu zabezpieczeń i "type guardów", że kod puchnie w oczach.

