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

* "Type Gymnastic" (programowanie typów)\
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

##### Dziura 1: Pobieranie elementów z tablicy (Najczęstszy crash)

TypeScript domyślnie zakłada, że jeśli wyciągasz coś z tablicy, to to tam jest.

```TS
// Dane w 100% poprawne
const topUsers: User[] = [ { name: "Ania" }, { name: "Bartek" } ];

// Pobieramy trzeciego użytkownika (którego nie ma)
const user = topUsers[2]; // TS twierdzi, że typ 'user' to: User (błąd!)

console.log(user.name); // CRASH w runtime: Cannot read properties of undefined

```

*Jak to naprawić?* Musisz włączyć w `tsconfig.json` flagę `"noUncheckedIndexedAccess": true`. Wtedy TS zmusi cię do sprawdzenia, czy `user` nie jest undefined. Mało kto to włącza, bo bywa to upierdliwe. Ostatecznie sprowadza się to do tego, że żeby mieć pewność **musisz** takie rzeczy sprawdzać.&#x20;

##### Dziura 2: Ludzkie lenistwo (Wykrzyknik `!` i rzutowanie `as`)

Kompilator jest tak bezpieczny, jak dyscyplina zespołu. W wewnętrznym kodzie deweloperzy często używają "dróg na skróty", kiedy kompilator im marudzi:

```TS
// Użycie wykrzyknika (Non-null assertion)
const config = fetchConfig();
display(config!.theme); // Jeśli config jednak był null, mamy crash.

// Rzutowanie na siłę
const data = unknownInsideJob() as ExplicitType;
```

##### Dziura 3: Metody wbudowane w JS, które gubią typy

Niektóre standardowe funkcje JavaScriptu w ogóle nie współpracują dobrze z typami TS. Klasyczny przykład: `Object.keys()`.

```TS
const myObject = { a: 1, b: 2 };

// TS zawsze uważa, że klucze obiektów są typu string[], a nie 'a' | 'b'
Object.keys(myObject).forEach(key => {
  // Tutaj łatwo o błąd logiczny, bo TS nie pilnuje dokładnych typów klucza
});
```

##### Dziura 4: Mutacje referencji (Naruszenie bezpieczeństwa typów)

TypeScript pozwala przekazać `string[]` do funkcji oczekującej `(string | number)[]`, mimo że taka funkcja może dopisać do tablicy liczbę. W efekcie tablica, która według kompilatora miała zawierać wyłącznie napisy, zostaje zmodyfikowana i traci swoją spójność typów.

```TS
function mutateArray(items: (number | string)[]) => {
  itemsPush(1);
} 

const items: string[] = ["hello", "world"];
mutateArray(items);

console.log(items); // ["hello", "world", 1]
```

Katastrofa wydarza się chwilę później. Funkcja modyfikuje tablicę za pomocą tej szerszej referencji i dorzuca tam liczbę. Ponieważ tablice w JavaScript są współdzielone w pamięci, oryginalna struktura zostaje bezpowrotnie skażona. Co na to TypeScript? Dla niego zmienna `items` na samym dole pliku to wciąż, niezmiennie i z pełną „gwarancją”... `string[]`.

Kiedy kawałek dalej spróbujesz przejechać po tej tablicy pętlą i odpalić na każdym elemencie metodę `.toUpperCase()`, program wywali się z błędem `TypeError: item.toUpperCase is not a function`. Kompilator do samego końca będzie przysięgał, że tam są tylko napisy, podczas gdy w pamięci komputera tkwi już podrzucona po cichu liczba.

Podobnych przykładów i "dziur" można podać więcej, ale już widać, że bezpieczeństwo w TS jest słabe, żeby nie powiedzieć żadne (jeżeli chodzi o konstrukcję języka).

### 2. Co więc można z tym zorbić?

Bo coś można zrobić, prawda? Tak, coś można, ale trzeba pamiętać, że w TS nigdy nie mamy matematycznego bezpieczeństwa.&#x20;

#### Optional Chaining

Optional Chaining (operator `?.`) to składnia w JavaScript i TypeScript, która pozwala bezpiecznie odczytywać zagnieżdżone właściwości obiektu bez sprawdzania, czy każdy element po drodze istnieje. Jeśli obiekt okaże się `null` lub `undefined`, kod zatrzyma się i zwróci `undefined`, zamiast wyrzucić błąd. Czy da się więc zbudować bezpieczny program w TS przez wstawienie `?.` dosłownie wszędzie?

Krótka odpowiedź brzmi: **Nie, sam operator `?.` nie wystarczy, aby zbudować bezpieczny program.** Choć instynktowne wstawianie `?.` wszędzie, gdzie się da, uratuje cię przed najpopularniejszym błędem ludzkości, czyli `Cannot read properties of undefined (reading '...' )`, to w rzeczywistości tworzy zupełnie nowe, ciche zagrożenia.

Oto dlaczego "strategia `?.`" to iluzja bezpieczeństwa:

##### Zamiast crashu dostajesz "Zombie Program"

Gdy zamiast wywalenia aplikacji z błędem użyjesz `?.`, JavaScript w przypadku braku danych po prostu po cichu zwróci `undefined`.

Wyobraź sobie taki scenariusz w sklepie internetowym:

```ts
const price = order?.cart?.items?.[0]?.price?.amount;
const total = price * quantity; 

```

Jeśli `price` z jakiegoś powodu będzie pusty, `price` przyjmie wartość `undefined`. Wtedy `undefined * quantity` da ci `NaN` (Not a Number). Twoja aplikacja nie zgłosi błędu w konsoli, ale użytkownik zobaczy na ekranie, że ma zapłacić `NaN zł`. Program żyje (nie ma crashu), ale jest bezużytecznym "zombie".

##### Przenoszenie błędu w czasie (Trudniejszy debugging)

Gdy program wywala się w runtime z powodu braku właściwości, od razu dostajesz *Stack Trace* i wiesz dokładnie, w której linijce stało się coś złego. Jeśli zamaskujesz to przez `?.`, błąd nie znika – on **mutuje**. `undefined` wędruje przez kolejne funkcje, komponenty i bazy danych, aż w końcu aplikacja zachowa się dziwnie w zupełnie innym miejscu systemu. Znalezienie przyczyny będzie koszmarem.

##### Problem logiczny: Co oznacza "brak"?

Wstawiając wszędzie `?.` informujesz kompilator: *"To normalne, że tych danych może nie być"*. Ale czy na pewno?

Czy to normalne, że zalogowany użytkownik nie ma `user.id`? Nie. Jeśli go nie ma, aplikacja powinna natychmiast przerwać działanie, a nie udawać, że wszystko jest w porządku.
