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
## TypeScript kłamie! Iluzja bezpieczeństwa, czyli dlaczego TypeScript to za mało.

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

```typescript
// Dane w 100% poprawne
const topUsers: User[] = [ { name: "Ania" }, { name: "Bartek" } ];

// Pobieramy trzeciego użytkownika (którego nie ma)
const user = topUsers[2]; // TS twierdzi, że typ 'user' to: User (błąd!)

console.log(user.name); // CRASH w runtime: Cannot read properties of undefined

```

*Jak to naprawić?* Musisz włączyć w `tsconfig.json` flagę `"noUncheckedIndexedAccess": true`. Wtedy TS zmusi cię do sprawdzenia, czy `user` nie jest undefined. Mało kto to włącza, bo bywa to upierdliwe. Ostatecznie sprowadza się to do tego, że żeby mieć pewność **musisz** takie rzeczy sprawdzać.&#x20;

##### Dziura 2: Ludzkie lenistwo (Wykrzyknik `!` i rzutowanie `as`)

Kompilator jest tak bezpieczny, jak dyscyplina zespołu. W wewnętrznym kodzie deweloperzy często używają "dróg na skróty", kiedy kompilator im marudzi:

```typescript
// Użycie wykrzyknika (Non-null assertion)
const config = fetchConfig();
display(config!.theme); // Jeśli config jednak był null, mamy crash.

// Rzutowanie na siłę
const data = unknownInsideJob() as ExplicitType;
```

##### Dziura 3: Metody wbudowane w JS, które gubią typy

Niektóre standardowe funkcje JavaScriptu w ogóle nie współpracują dobrze z typami TS. Klasyczny przykład: `Object.keys()`.

```typescript
const myObject = { a: 1, b: 2 };

// TS zawsze uważa, że klucze obiektów są typu string[], a nie 'a' | 'b'
Object.keys(myObject).forEach(key => {
  // Tutaj łatwo o błąd logiczny, bo TS nie pilnuje dokładnych typów klucza
});
```

##### Dziura 4: Mutacje referencji (Naruszenie bezpieczeństwa typów)

TypeScript pozwala przekazać `string[]` do funkcji oczekującej `(string | number)[]`, mimo że taka funkcja może dopisać do tablicy liczbę. W efekcie tablica, która według kompilatora miała zawierać wyłącznie napisy, zostaje zmodyfikowana i traci swoją spójność typów.

```typescript
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

```typescript
const price = order?.cart?.items?.[0]?.price?.amount;
const total = price * quantity; 

```

Jeśli `price` z jakiegoś powodu będzie pusty, `price` przyjmie wartość `undefined`. Wtedy `undefined * quantity` da ci `NaN` (Not a Number). Twoja aplikacja nie zgłosi błędu w konsoli, ale użytkownik zobaczy na ekranie, że ma zapłacić `NaN zł`. Program żyje (nie ma crashu), ale jest bezużytecznym "zombie".

##### Przenoszenie błędu w czasie (Trudniejszy debugging)

Gdy program wywala się w runtime z powodu braku właściwości, od razu dostajesz *Stack Trace* i wiesz dokładnie, w której linijce stało się coś złego. Jeśli zamaskujesz to przez `?.`, błąd nie znika – on **mutuje**. `undefined` wędruje przez kolejne funkcje, komponenty i bazy danych, aż w końcu aplikacja zachowa się dziwnie w zupełnie innym miejscu systemu. Znalezienie przyczyny będzie koszmarem.

##### Problem logiczny: Co oznacza "brak"?

Wstawiając wszędzie `?.` informujesz kompilator: *"To normalne, że tych danych może nie być"*. Ale czy na pewno?

Czy to normalne, że zalogowany użytkownik nie ma `user.id`? Nie. Jeśli go nie ma, aplikacja powinna natychmiast przerwać działanie, a nie udawać, że wszystko jest w porządku.

#### Null check w metodach języka

Czy nie było by dobrze, gdyby to same metody wykonywane na zmiennych danego typu nie wywalały programu tylko działały w sposób bezpieczny? Mówiąc inaczej: czy dana metoda nie powinna sama sprawdzić czy operacja, którą chce wykonać nie będzie wykonywana na `null`? Ale co wtedy? No właśnie, co miała by wtedy zrobić? Te pytania dotykają bezpośrednio architektury procesorów, teorii typów oraz tego, jak systemy informatyczne komunikują się ze światem zewnętrznym. Rozbijmy to na czynniki pierwsze.

##### Dlaczego metody nie mogą same obsługiwać `null`? ("I co wtedy?")

Zastanówmy się nad tym pomysłem. Wywołujemy `substring()` na obiekcie, który jest `null`. Metoda to wykrywa i... **No właśnie, co ma zrobić?** Są tylko trzy wyjścia i każde jest złe:

###### Opcja A: Metoda zwraca `null`.&#x20;

Jeśli `substring()` zwróci `null`, to kolejna metoda wywołana na tym wyniku (np. `toUpperCase()`) znowu dostanie `null`. Przesuwamy problem o krok dalej. To jest dokładnie to, co robi operator `?.` w TS.

###### Opcja B: Metoda zwraca "wartość bezpieczną" (np. pusty string `""`).&#x20;

Wyobraź sobie system bankowy. Pobierasz z bazy danych numer konta premium dla klienta: `getPremiumAccount()`. Klient nie ma takiego konta, więc system zwraca `null`. Jeśli metoda do wysyłki przelewu przyjmie ten `null` i po cichu zamieni go na pusty string `""`, to system spróbuje wysłać przelew na konto o numerze `""`. To katastrofa logiczna. **Brak danych to nie to samo, co puste dane.** W przypadku wysyłki przelewu bank zewnętrzny odrzuci numer konta `""`. To optymistyczny scenariusz, bo system zewnętrzny ma własną walidację. Zagrożenie pojawia się wtedy, gdy ta pusta wartość krąży **wewnątrz Twojego systemu** i steruje logiką biznesową. Spójrz na dwa znacznie groźniejsze przykłady:

**Przykład A Kasowanie danych (Katastrofa)**

Masz funkcję, która czyści sesję lub usuwa tymczasowe dane użytkownika z bazy:

```typescript
function deleteUserToken(userId: string) {
  db.execute(`DELETE FROM tokens WHERE user_id = '${userId}'`);
}

```

Jeśli `userId` z powodu błędu był `null`, a Ty po cichu zamieniłeś go na `""`, baza wykona: `DELETE FROM tokens WHERE user_id = ''`. Jeśli w bazie istnieją jakieś stare rekordy bez przypisanego ID (czyli z pustym stringiem), **właśnie usunąłeś dane innych użytkowników**.

**Przykład B: Dziury w bezpieczeństwie (Autoryzacja)**

```typescript
const userRole = getUserRole() ?? ""; // Zamiana null na ""

if (userRole === "admin") {
    showAdminPanel();
} else {
    showStandardPanel(); // "" wpada tutaj
}

```

Wygląda bezpiecznie? A co, jeśli inny programista napisze warunek odwrotnie?

```typescript
if (userRole !== "guest") {
    allowAccessToSecretData(); // "" wpada TUTAJ! Pusty string nie równa się "guest"
}

```

Przez cichą zamianę `null` na `""`, użytkownik bez żadnej roli (bo np. nie udało się jej pobrać) dostaje dostęp do tajnych danych. **Błąd został zamaskowany, zamiast zostać naprawiony.**

###### **Opcja C: Metoda rzuca błąd (Crash).**&#x20;

Czyli wracamy do punktu wyjścia.

##### Język, który tak robił: Objective-C

W języku Objective-C (stary język do aplikacji na iPhone'y) istniała dokładnie taka zasada: **wysłanie wiadomości do `nil` (null) nie robiło nic i zwracało `nil` lub `0`.** Efekt? Programy rzadko się crashowały, ale za to działy się w nich rzeczy paranormalne. Klikasz przycisk "Kup", aplikacja nic nie robi, nie sypie błędami, po prostu ignoruje użytkownika, bo gdzieś głęboko pod spodem obiekt koszyka był `nil`. Programiści nienawidzili tego debugować.

#### Jak więc zbudować bezpieczny program w TS?

Skoro już wiemy dlaczego konstrukcja języka nie pozwala pominąć `null`, to zastanówmy się co **realnie** można z tym zrobić? Prawdziwe bezpieczeństwo w TypeScript (tzw. *Type Safety*) osiąga się poprzez kontrolowanie granic aplikacji, a nie maskowanie błędów.

##### Krok 1: Walidacja na wejściu (Parse, don't validate)

Wszystko, co wchodzi do Twojej aplikacji z zewnątrz (API, LocalStorage, formularze), musi zostać sprawdzone **w runtime** zanim trafi do logiki biznesowej. Do tego służą biblioteki takie jak **Zod**.

```typescript
import { z } from 'zod';

// Definiujesz schemat, jakiego oczekujesz
const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
});

// W momencie pobierania danych:
const response = await fetch('/api/user');
const rawData = await response.json();

// Zod sprawdza dane. Jeśli API oszukało, aplikacja wywali się TUTAJ,
// a nie w losowym miejscu kodu 5 minut później.
const user = UserSchema.parse(rawData); 

```

##### Krok 2: Jawna obsługa alternatyw (Nullish Coalescing `??`)

Zamiast zostawiać `undefined`, zawsze definiuj wartość bezpieczną (fallback) za pomocą operatora `??`.

```typescript
// Jeśli nie ma stawki podatku, domyślnie użyj 23%, zamiast psuć matematykę
const tax = order?.taxRate ?? 0.23;

```

##### Krok 3: Wykorzystanie kompilatora (`strict: true`)

W pliku `tsconfig.json` musisz mieć włączoną opcję `"strict": true` (a w szczególności `"strictNullChecks": true`). Wtedy TypeScript sam zmusi Cię do obsłużenia sytuacji, w których coś może być `null` lub `undefined` – ale zmusi cię do zrobienia tego **świadomie**, a nie na oślep za pomocą `?.`.

Popychanie `?.` w każde miejsce kodu to tak naprawdę powrót do filozofii starego, chaotycznego JavaScriptu, tylko w ładniejszym opakowaniu. Bezpieczny frontend to taki, który głośno i szybko krzyczy, kiedy dane się nie zgadzają, zamiast po cichu renderować puste strony.

#### Świat (prawie) idealny: TS + Zod na bramkach

Można postawić następującą hipotezę: **jeśli wszystkie dane wchodzące do aplikacji są parsowane przez Zoda, to wewnątrz aplikacji kompilator TypeScript chroni przed crashami w 100%.**

To jest **w 95% prawda**. Strategia ta nazywa się *"Parse, don't validate"* i jest najlepszym, co możesz zrobić w TypeScript. Tworzysz wtedy tzw. *Safe Haven* (bezpieczną przystań) wewnątrz swojej aplikacji.

Dlaczego jednak zostaje te 5% ryzyka? Ponieważ **system typów TypeScriptu ma świadome "dziury" (soundness holes), o których już mówiliśmy.**&#x20;

#### Podsumowanie wpadek TS

Jeśli wdrożysz duet **TypeScript (w trybie `strict`) + Zod na każdej granicy aplikacji**, twój frontend będzie bezpieczniejszy niż 99% aplikacji w internecie.

Nie uzyskasz matematycznego "zero runtime exceptions", ale unikniesz 99,9% błędów, zachowując jednocześnie normalną, czytelną składnię, ludzkie ekosystemy (npm) i święty spokój. Na frontendzie obecnie TS + Zod to absolutny złoty standard kompromisu między bezpieczeństwem a produktywnością.

#### Nie używaj TS

A co jeżeli nie chcesz chodzić na kompromisy? Jeżeli chcesz mieć **pewność** bezpieczeństwa, musisz pójść w stronę języków które są null-safe.&#x20;

## 3. Null Safety

Null Safety to jeden z najważniejszych przełomów w projektowaniu języków programowania w ciągu ostatnich 20 lat.

Aby dobrze to zrozumieć, musimy cofnąć się do roku 1965, kiedy brytyjski informatyk Tony Hoare wymyślił koncepcję referencji `null`. Po latach nazwał to swoim **„miliardowym błędem”** (Billion Dollar Mistake), ponieważ ta jedna decyzja doprowadziła do niezliczonych crashy aplikacji, dziur w bezpieczeństwie i miliardów godzin spędzonych na debuggingu na całym świecie.

### Na czym polega problem z "zwykłym" `null`?

W klasycznych językach (jak stara Java, C++ czy tradycyjny JavaScript) zmienna danego typu (np. `String`) to tak naprawdę **wskaźnik do miejsca w pamięci**, gdzie ten tekst leży.

Problem polega na tym, że ten wskaźnik może też pokazywać na „nic” czyli `null`. Dla kompilatora typ `String` i typ `null` były tą samą szufladą.

```java
// Klasyczna Java (przed wersjami z Null Safety)
String name = null; 
int length = name.length(); // CRASH: NullPointerException!

```

Kompilator starej Javy patrzy na to i mówi: *„Wszystko ok, `name` to String, a String ma metodę `.length()`, pozwalam na uruchomienie”*. Dopiero w trakcie działania programu (w runtime), gdy procesor próbuje wejść pod adres pamięci ukryty pod `name` i widzi tam pustkę, aplikacja spektakularnie umiera.

## Jak działa dogłębnie prawdziwe Null Safety?

Prawdziwe Null Safety (nazywane też *Void Safety*) polega na przesunięciu odpowiedzialności z człowieka na **kompilator**. Kompilator staje się matematycznym strażnikiem, który gwarantuje, że do crashu w runtime dojść nie może.

Odbywa się to na dwa różne sposoby, w zależności od języka.

### Podejście A: Dwa osobne światy typów (Kotlin, Swift, Dart)

W tych językach system typów zostaje rozbity na dwie hierarchie. `String` i `null` nie mają ze sobą nic wspólnego.

1. **Typy nie-nullowalne (Non-Nullable):** Domyślnie każda zmienna **musi** mieć wartość.

   ```kotlin
   var name: String = "Ania"
   name = null // BŁĄD KOMPILACJI! Kod nawet się nie uruchomi.

   ```
2. **Typy nullowalne (Nullable):** Jeśli dopuszczasz brak wartości, musisz to jawnie zadeklarować pytajnikiem `?`. Tworzysz wtedy zupełnie nowy typ: `String?`.

   ```kotlin
   var name: String? = null // To jest legalne

   ```

#### Magia ukryta w kompilatorze: Smart Casting i Analiza Przepływu (Flow Analysis)

Skoro `name` jest typu `String?`, kompilator traktuje tę zmienną jakby była zamknięta w bezpiecznym pudełku. **Zabrania ci dotknięcia jakiejkolwiek metody tego obiektu.**

```kotlin
var name: String? = pobierzZApi()
val length = name.length // BŁĄD KOMPILACJI! Kompilator na to nie pozwoli.

```

Aby dobrać się do danych, musisz udowodnić kompilatorowi, że sprawdziłeś stan zmiennej. Kompilator analizuje Twój kod linijka po linijce (Flow Analysis):

Kotlin

```
if (name != null) {
    // Wewnątrz tego bloku kompilator wie, że name nie jest nullem.
    // Następuje tzw. SMART CAST – tymczasowo zmienia typ z String? na String.
    val length = name.length // Działa idealnie i bezpiecznie!
}

```

### Podejście B: Całkowite usunięcie `null` z języka (Rust, Elm)

Języki takie jak Rust poszły jeszcze krok dalej. Tam słowo takie jak `null`, `nil` czy `undefined` **w ogóle nie istnieje**. Nie da się stworzyć pustego wskaźnika.

Jak w takim razie przekazać informację, że „czegoś nie ma” (np. wynik wyszukiwania w bazie danych)? Używa się do tego specjalnego typu wyliczeniowego (Enum / Algebraic Data Type), który nazywa się **`Option`** (w Rust) lub **`Maybe`** (w Elm).

Rust

```
// W Rust nie ma null. Jest enum Option, który ma dwa stany:
enum Option<T> {
    Some(T), // Jest wartość typu T
    None,    // Nie ma nic
}

```

Jeśli funkcja może nie znaleźć użytkownika, nie zwraca `User` ani `null`. Zwraca `Option<User>`.

Rust

```
let user: Option<User> = find_user(123);

// Nie możesz zrobić user.name, bo 'user' to Option, a nie User!
// Musisz użyć konstrukcji 'match' (pattern matching):

match user {
    Some(actual_user) => println!("Witaj {}", actual_user.name),
    None => println!("Nie znaleziono użytkownika"),
}

```

Kompilator Rusta pilnuje, abyś w instrukcji `match` obsłużył **oba przypadki** (`Some` i `None`). Jeśli zapomnisz o `None`, kod się nie skompiluje. Nie ma fizycznej możliwości zapomnienia o błędzie.
