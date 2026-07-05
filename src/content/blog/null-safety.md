---
title: Null safety
description: >-
  Iluzja bezpieczeństwa, czyli dlaczego TypeScript to za mało. Głębokie
  nurkowanie w Null Safety i architekturę błędów
pubDate: 2026-06-28
categories:
  - javascript
---
![](@assets/posts/null-safety/heroImage.png)

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
* TypeScript chroni cię **tylko podczas kompilacji**. Kiedy kod trafia do przeglądarki lub Node.js, to wciąż jest zwykły JavaScript. Jeśli API z backendu zwróci inny obiekt, niż zadeklarowałeś w typach, TypeScript cię przed tym nie uratuje – aplikacja i tak się wywali w runtime.
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
function mutateArray(items: (number | string)[]) {
  items.push(1);
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

W pliku `tsconfig.json` musisz mieć włączoną opcję `"strict": true` (a w szczególności `"strictNullChecks": true`). Wtedy TypeScript sam zmusi cię do obsłużenia sytuacji, w których coś może być `null` lub `undefined` – ale zmusi cię do zrobienia tego **świadomie**, a nie na oślep za pomocą `?.`.

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

### Jak działa dogłębnie prawdziwe Null Safety?

Prawdziwe Null Safety (nazywane też *Void Safety*) polega na przesunięciu odpowiedzialności z człowieka na **kompilator**. Kompilator staje się matematycznym strażnikiem, który gwarantuje, że do crashu w runtime dojść nie może.

Odbywa się to na dwa różne sposoby, w zależności od języka.

#### Podejście A: Dwa osobne światy typów (Kotlin, Swift, Dart)

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

##### Magia ukryta w kompilatorze: Smart Casting i Analiza Przepływu (Flow Analysis)

Skoro `name` jest typu `String?`, kompilator traktuje tę zmienną jakby była zamknięta w bezpiecznym pudełku. **Zabrania ci dotknięcia jakiejkolwiek metody tego obiektu.**

```kotlin
var name: String? = pobierzZApi()
val length = name.length // BŁĄD KOMPILACJI! Kompilator na to nie pozwoli.

```

Aby dobrać się do danych, musisz udowodnić kompilatorowi, że sprawdziłeś stan zmiennej. Kompilator analizuje twój kod linijka po linijce (Flow Analysis):

```kotlin
if (name != null) {
    // Wewnątrz tego bloku kompilator wie, że name nie jest nullem.
    // Następuje tzw. SMART CAST – tymczasowo zmienia typ z String? na String.
    val length = name.length // Działa idealnie i bezpiecznie!
}

```

#### Podejście B: Całkowite usunięcie `null` z języka (Rust, OCaml, Elm)

Języki takie jak Rust poszły jeszcze krok dalej. Tam słowo takie jak `null`, `nil` czy `undefined` **w ogóle nie istnieje**. Nie da się stworzyć pustego wskaźnika. Jak w takim razie przekazać informację, że „czegoś nie ma” (np. wynik wyszukiwania w bazie danych)? Używa się do tego specjalnego typu wyliczeniowego (Enum / Algebraic Data Type), który nazywa się **`Option`** (w Rust) lub **`Maybe`** (w Elm).

```rust
// W Rust nie ma null. Jest enum Option, który ma dwa stany:
enum Option<T> {
    Some(T), // Jest wartość typu T
    None,    // Nie ma nic
}

```

Jeśli funkcja może nie znaleźć użytkownika, nie zwraca `User` ani `null`. Zwraca `Option<User>`.

```rust
let user: Option<User> = find_user(123);

// Nie możesz zrobić user.name, bo 'user' to Option, a nie User!
// Musisz użyć konstrukcji 'match' (pattern matching):

match user {
    Some(actual_user) => println!("Witaj {}", actual_user.name),
    None => println!("Nie znaleziono użytkownika"),
}

```

Kompilator Rusta pilnuje, abyś w instrukcji `match` obsłużył **oba przypadki** (`Some` i `None`). Jeśli zapomnisz o `None`, kod się nie skompiluje. Nie ma fizycznej możliwości zapomnienia o błędzie.

### Problem kłamstwa na granicy aplikacji (Kotlin vs Rust)

**Kompilator jest bezradny, jeśli programista go okłamie.** Jeśli w Kotlinie napiszesz, że dane z API to `String` (nie-nullowalny), a API zwróci `null`, to pojawia się problem. Jednak to, jak języki sobie z tym radzą, różni się diametralnie.

W Kotlinie taka sytuacja miała miejsce, gdy używano starych bibliotek z Javy (np. GSON). GSON potrafił za pomocą magii (refleksji) wstrzyknąć `null` do zmiennej typu `String`. Wtedy program faktycznie wywalał się w runtime przy pierwszej próbie użycia tego stringa.

Nowoczesny Kotlin używa bibliotek takich jak `kotlinx.serialization`. Działają one jak **Zod**:

Jeśli API zwróci `null` tam, gdzie zadeklarowałeś `String`, parser natychmiast rzuci wyjątek **na samej bramce wejściowej** (podczas deserializacji JSON-a). Aplikacja nie dopuści tego `null` do wnętrza twojego kodu.

W Rust sytuacja jest jeszcze bardziej rygorystyczna. W Rust nie da się "ot tak" przypisać JSON-a do struktury danych. Musisz użyć biblioteki (najczęściej `serde`).

Jeśli zadeklarujesz strukturę:

```rust
struct User {
    name: String, // To NIE MOŻE być null
}

```

a z API przyjdzie `{ "name": null }`, to funkcja parsująca `serde_json::from_str()` **zwróci błąd parsowania (Result::Err)**. Kod biznesowy w ogóle się nie wykona. Rust fizycznie uniemożliwia stworzenie w pamięci struktury `User`, która miałaby pusty wskaźnik tam, gdzie oczekiwany jest `String`.

W TypeScript, jeśli zrobisz `await response.json()`, JavaScript daje ci obiekt typu `any`. Możesz udawać, że to jest `String`, a TS ci uwierzy na słowo. **W Rust nie ma typu `any`.**

Gdy robisz zapytanie do API w Rust, funkcja `call_api()` nie zwraca danych z JSON-a. Ona zwraca **surowy ciąg bajtów** (tekst JSON-a zamknięty w obiekcie odpowiedzi).

Jeśli w tym JSON-ie z API znajduje się `{ "name": null }`, to dla Rusta to jest po prostu tekst zawierający literki n-u-l-l. Twoja zmienna nie staje się nullem. Ona trzyma tekst.

Aby dobrać się do pola `name`, **musisz** ten tekst zdeserializować (zamienić na strukturę w pamięci). Robi się to tak:

```rust
#[derive(Deserialize)]
struct User {
    name: String, // Kompilator WYMUSZA, żeby to był prawdziwy String
}

// Próba parsowania tekstu z API do struktury User
let user: User = serde_json::from_str(api_response_text).unwrap();

```

Jeśli API przysłało tam `null`, funkcja `from_str` **wywali się w tym dokładnie momencie**. Nie przypisze `null` do zmiennej `name`, bo w pamięci komputera dla typu `String` w Rust nie ma przewidzianego miejsca na `null`.

W Rust nie da się "zapomnieć o Zodzie". W Rust proces parsowania (odpowiednik Zoda) jest **jedyną fizyczną drogą**, aby zamienić surowy tekst z sieci na obiekt, którego możesz użyć w kodzie.

#### Czy da się napisać bibliotekę w Rust, która "zwraca dane jak leci" i oszukuje kompilator?

Wyobraźmy sobie, że ktoś napisał bibliotekę sieciową, która nie bawi się w żadne deseryalizacje (jak Zod czy Serde), tylko bierze surowe bajty z karty sieciowej i rzuca je wprost do twojej zmiennej. Czy wtedy oszukamy kompilator Rusta?

**Nie w bezpiecznym kodzie (Safe Rust).** W Rust każdy kawałek pamięci musi mieć przypisany typ. Jeśli biblioteka sieciowa zwraca dane "jak leci", to zwraca typ `Vec<u8>` (wektor surowych bajtów).

```rust
// Pobieramy surowe bajty (np. tekst "[1, 2, 3]" albo json)
let raw_data: Vec<u8> = pobierz_jak_leci();

// Próba oszukania kompilatora: "Hej Rust, udawajmy że to jest struktura User"
let user: User = raw_data; // BŁĄD KOMPILACJI! Typy się nie zgadzają.

```

#### Jak to wygląda w C/C++ (gdzie da się oszukać)?

W języku C możesz zrobić tzw. *pointer casting*. Mówisz komputerowi: *"Widzisz te bajty w pamięci? Od teraz patrz na nie tak, jakby to była struktura User"*. Jeśli sieć przysłała śmieci, program spróbuje odczytać losowe miejsca w pamięci i natychmiast się skompiluje, a w runtime dostaniesz słynny **Segmentation Fault (Crash)**.

#### A jak to robi Rust?

W Rust, aby zrobić taką niebezpieczną sztuczkę (zinterpretować surową pamięć jako dany typ bez sprawdzania), musisz jawnie użyć słowa-klucza **`unsafe`**:

```
// To się skompiluje, ale WYMAGA flagi unsafe:
let user: User = unsafe { std::mem::transmute(raw_data) };

```

Użycie `unsafe` to naciśnięcie czerwonego przycisku atomowego. Mówisz kompilatorowi: *"Wyłączam ochronę, biorę odpowiedzialność na siebie"*. Jeśli dane z sieci były złe, program zaliczy crash (Undefined Behavior).

**Różnica między TS a Rust:** W TypeScript "oszustwo" (np. przez `as User`) robisz codziennie, bez ostrzeżeń, to domyślny styl pisania kodu. W Rust zrobienie tego bez parsowania wymaga celowego wpisania `unsafe`, co w 99% projektów komercyjnych jest całkowicie zakazane na poziomie lintera.

#### TypeScript: Świadomie nieszczelny

Twórcy TS na swojej oficjalnej stronie piszą wprost: *"TypeScript's type system is unsound by design"*. Pozwolili na dziury dla wygody programistów JS. Przykład z tablicą: `const x = arr[10];` – TS twierdzi, że `x` to np. `number`. W runtime okazuje się, że tablica była krótka i `x` to `undefined`. System typów skłamał.

#### Rust i OCaml: Matematycznie szczelne (w bezpiecznym kodzie)

W safe Rust i w OCamlu **takie dziury nie istnieją**. Kompilatory tych języków są matematycznie spójne.

Co zrobi Rust, jeśli zapytasz o element tablicy, którego nie ma (`arr[10]`)?

1. Kompilator nie pozwoli na to, żeby ta operacja zwróciła po cichu `undefined` (bo w Rust nie ma `undefined`).
2. W runtime, w ułamku sekundy, program sprawdza długość tablicy. Jeśli indeks jest za duży, program wywołuje tzw. **Panic**. Program jest natychmiast, bezpiecznie zatrzymywany (lub wątek umiera), zanim zdąży zrobić cokolwiek z niepoprawnym typem danych.

W OCamlu w takiej sytuacji dostajesz wyjątek `Index_out_of_bounds`, który również przerywa błędną operację. System typów nigdy cię nie okłamie.

Możesz się zastanawiać: *„Skoro kompilator jest taki mądry, to czemu nie wykrył tego wcześniej?”*. Kompilator nie jest jasnowidzem. Jeśli każesz programowi pobrać `tablica[index]`, gdzie `index` jest wpisywany przez użytkownika w okienku, kompilator nie ma pojęcia, co ten użytkownik wpisze. Musi więc zabezpieczyć program na moment uruchomienia.

Oto jak to dokładnie przebiega i dlaczego to zupełnie co innego niż wywalenie się aplikacji w TypeScript.

#### Kiedy i jak to się dzieje w Rust?

Podczas kompilacji Rust patrzy na twój kod i tam, gdzie widzi dostęp do tablicy, **samodzielnie dopisuje niewidzialny warunek `if`**.

Gdy program już działa i dochodzi do tej linijki, wykonuje się następujący scenariusz:

1. Procesor sprawdza automatycznie wygenerowany warunek: *Czy żądany indeks jest mniejszy niż długość tablicy?*
2. Jeśli tak – program działa dalej bez milisekundy opóźnienia.
3. Jeśli nie (indeks jest za duży) – uruchamia się procedura **Panic**.

#### Czym to się różni od wywalenia się programu w TypeScript?

Różnica tkwi w trzech kluczowych kwestiach: **momencie krachu**, **kłamstwie systemowym** oraz **kontrolowanej demolce**.

##### Różnica I: Moment krachu (natychmiast vs z opóźnieniem)

W TypeScript/JavaScript wyciągnięcie elementu poza tablicą **nie powoduje błędu**. JS po prostu po cichu zwraca `undefined`.

* **W TS:** Błąd nie pojawia się w linijce z tablicą. Pojawia się dopiero później, kiedy próbujesz zrobić coś na tym `undefined` (np. odczytać `user.name`). Program zdążył już wykonać kilka kolejnych operacji, przekazać to `undefined` do innych funkcji i namieszać w stanie aplikacji.
* **W Rust:** Krach następuje w dokładnie tej samej mikrosekundzie, w której próbujesz dotknąć nielegalnego indeksu. Program nie idzie ani o jedną instrukcję dalej. Nie ma szans na skażenie reszty kodu błędnymi danymi.

##### Różnica II: Kłamstwo w systemie typów

* **W TS:** Mamy do czynienia z oszustwem. TypeScript obiecał ci na etapie pisania kodu, że zmienna z tablicy to `User`. Ty napisałeś kod pod ten typ, a w runtime dostałeś `undefined`. System typów w TS cię okłamał, bo ma w tym miejscu wspomnianą nieszczelność (*soundness hole*).
* **W Rust:** System typów nigdy nie kłamie. Jeśli zmienna ma typ `User`, to kompilator daje głowę, że tam jest `User`. Skoro fizycznie nie da się tam wstawić `User` (bo indeks był za duży), Rust woli natychmiast ubić program, niż pozwolić na to, by w pamięci wylądowało coś niezgodnego z typem.

##### Różnica III: "Kontrolowana demolka" (Stack Unwinding)

Kiedy TypeScript (a dokładniej silnik V8 w przeglądarce) rzuca `Uncaught TypeError`, aplikacja po prostu "pęka". Komponenty Reacta mogą przestać się renderować, zostawiając użytkownika z białą stroną, pamięć może wyciekać, a otwarte połączenia (np. WebSockety) mogą zawisnąć w próżni.

W Rust **Panic** to bardzo elegancka, bezpieczna procedura nazywana *Stack Unwinding* (odwijanie stosu):

1. Program orientuje się, że nastąpił Panic.
2. Zanim całkowicie się wyłączy, zaczyna systematycznie iść wstecz przez wszystkie uruchomione funkcje.
3. **Bezpiecznie czyści pamięć**: niszczy zmienne, poprawnie zamyka otwarte pliki, zamyka połączenia sieciowe i zdejmuje blokady (locks) z baz danych, żeby nie uszkodzić plików systemowych.
4. Dopiero gdy wszystko jest posprzątane, wątek lub cały proces zostaje bezpiecznie zamknięty.

Wywalenie się w TypeScript jest jak wypadnięcie pasażera z jadącego pociągu przez otwarte w biegu drzwi – pociąg jedzie dalej, ale sytuacja jest katastrofalna i nieprzewidywalna. Panic w Rust jest jak natychmiastowe, automatyczne zaciągnięcie hamulca bezpieczeństwa przez komputer pokładowy, gdy tylko czujnik wykryje otwarte drzwi. Pociąg staje w miejscu, nikomu nic się nie dzieje, system jest bezpieczny. Czytelna metafora?

#### Ostatecznie aplikacja i tak się wywali

Tak, z perspektywy użytkownika jest w tym 100% racji: **jeśli aplikacja przestaje działać, to dla człowieka przed ekranem nie ma znaczenia, czy stało się to elegancko, czy chaotycznie.** Efekt jest ten sam – program "leży".

Istnieje jednak kolosalna różnica w tym, **jak często** do tego wywalenia dochodzi oraz **co dzieje się z resztą systemu**.

Oto dlaczego "wywalenie się" w Rust/OCaml to zupełnie inna klasa bezpieczeństwa niż w TypeScript:

##### 1. W Rust/OCaml wywalenie to twój ŚWIADOMY wybór (możesz go uniknąć)

W TypeScript używasz `tablica[10]` i kompilator milczy. Nie wiesz, że ryzykujesz crash, dopóki program nie wybuchnie w runtime.

W Rust masz dwa sposoby na wyciągnięcie danych z tablicy. Kompilator zmusza cię do podjęcia decyzji:

* **Sposób A (Ryzykowny):** `let x = tablica[10];` – mówisz kompilatorowi: *"Jestem pewien na 100%, że ten element tam jest. Jeśli go nie ma, pozwalam na Panic"*.
* **Sposób B (Bezpieczny):** `let x = tablica.get(10);` – ta metoda **nie wywoła Panic**. Zwróci typ `Option`. Kompilator natychmiast zmusi cię do obsłużenia przypadku `None`. Możesz wtedy wyświetlić komunikat: *"Brak elementu"*, zamiast wywalać aplikację.

Większość programistów Rust w produkcyjnym kodzie w ogóle nie używa klamer `[index]`, tylko metody `.get()`. Dzięki temu **aplikacja w Rust po prostu się nie wywala**, podczas gdy w TS wywala się regularnie, bo programista zapomniał, że indeks może być za duży.

##### 2. Izolacja awarii (Crash jednego komponentu nie zabija reszty)

Gdy aplikacja frontendowa w TypeScript (np. w React) napotka `TypeError: Cannot read properties of undefined`, bardzo często wywala się cały wątek renderowania. Użytkownik widzi biały ekran (White Screen of Death). Cała aplikacja umiera.

W systemach o pełnym Null Safety (szczególnie w Gleam działającym na platformie Erlanga lub w dobrze zaprojektowanym Rust/OCaml):

* Aplikacja jest podzielona na niezależne, izolowane procesy lub wątki.
* Jeśli jeden wątek (np. odpowiedzialny za renderowanie małego widgetu z pogodą) dostanie `Panic` z powodu błędu w tablicy, **umiera tylko ten jeden widget**.
* Reszta aplikacji (czat, formularz płatności, nawigacja) działa idealnie dalej. System automatycznie restartuje ten jeden zepsuty element do stanu początkowego.

##### 3. Lepiej kontrolowanie spłonąć, niż po cichu kraść dane

W inżynierii oprogramowania istnieje złota zasada: **„Fail-Fast”** (giń szybko).

Najgorszy błąd to taki, który nie wywala aplikacji, ale pozwala jej działać z uszkodzonymi danymi (jak w TS, gdy `undefined` mutuje w `NaN`). Dlaczego? Ponieważ taki program może:

* Zapisać uszkodzone dane do bazy danych (których naprawa zajmie potem tygodnie).
* Przesłać błędne parametry do API i np. wysłać komuś niewłaściwą kwotę.

Rust i OCaml wychodzą z założenia: **Bezpieczniej dla biznesu i użytkownika jest natychmiast zabić program, niż pozwolić mu działać w stanie nieprzewidywalnym.**

#### Podsumowanie

Różnica jest prosta:

* **W TypeScript** aplikacja wywala się przypadkowo, w niespodziewanych momentach, zacierając ślady błędu i niszcząc stan aplikacji.
* **W Rust/OCaml** aplikacja wywala się tylko wtedy, gdy programista jawnie zignorował bezpieczne metody (jak `.get()`), a sam crash jest sterylną, bezpieczną procedurą, która chroni system przed chaosem.
