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
  Prawda jest taka, że TypeScript jest tak restrykcyjny, jak sam tego chcesz. Istnienie `any` sprawia, że w momentach kryzysowych łatwo oszukiwać. Z kolei poprawne obsłużenie `unknown` wymaga tylu zabezpieczeń i "type guardów", że kod puchnie w oczach.

OK, z tym da się żyć. Nie od wczoraj piszemy w TS i firmy jakoś sobie radzą - ktoś mógłby powiedzieć. I miałby rację, "jakoś" sobie radzimy z tymi rzeczami. Warto zatrzymać się na chwilę i spojrzeć na problem szerzej. Nie każdy programista ma taki sam poziom wiedzy czy doświadczenia, a wielu nawet nie zdaje sobie sprawy, dokąd TypeScript zaprowadził współczesny rozwój oprogramowania, dlaczego jest to problem i jak poważne konsekwencje może on nieść.

#### Czy wewnętrzny świat jest 100% bezpieczny?

O zaufaniu do zewnętrznych danych za chwilę. Przyjrzyjmy się ekosystemowi TS. Problem polega na tym, że kompilator TypeScriptu jest… ślepy. Został zaprojektowany tak, aby ułatwiać życie, a nie gwarantować absolutną prawdę. W teorii typów istnieje pojęcie „szczelności” (Soundness) – system jest szczelny, jeśli to, co obiecuje kompilator, jest w stu procentach zgodne z tym, co procesor zastanie w pamięci podczas działania programu.

TypeScript kłamie prosto w oczy, ponieważ **system typów TypeScriptu ma świadome "dziury" (soundness holes)**, które twórcy zostawili dla wygody programistów. Oto co może wywalić Twoją aplikację w runtime w "czystym, wewnętrznym świecie":

### Dziura 1: Pobieranie elementów z tablicy (Najczęstszy crash)

TypeScript domyślnie zakłada, że jeśli wyciągasz coś z tablicy, to to tam jest.

```type
```



```typ
// Dane w 100% poprawne
const topUsers: User[] = [ { name: "Ania" }, { name: "Bartek" } ];

// Pobieramy trzeciego użytkownika (którego nie ma)
const user = topUsers[2]; // TS twierdzi, że typ 'user' to: User (błąd!)

console.log(user.name); // CRASH w runtime: Cannot read properties of undefined

```

*Jak to naprawić?* Musisz włączyć w `tsconfig.json` flagę `"noUncheckedIndexedAccess": true`. Wtedy TS zmusi Cię do sprawdzenia, czy `user` nie jest undefined. Mało kto to włącza, bo bywa to upierdliwe.



















