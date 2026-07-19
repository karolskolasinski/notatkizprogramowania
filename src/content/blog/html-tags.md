---
title: HTML Tags
description: HTML Tags
pubDate: 2025-12-04
categories:
  - html
---

## **Pełna lista tagów HTML**

[https://www.w3schools.com/tags/](https://www.w3schools.com/tags/)

---

## **Unpaired tags**

Pierwszą rzeczą do powiedzenia o niesparowanych tagach jest to, że nie zawierają one treści.
Przeznaczone są do tworzenia graficznych elementów HTML lub symboli na stronie. Dlatego niesparowane
tagi HTML składają się tylko z tagów początkowych. Często są one nazywane tagami "samozamykającymi".

### **HTML:**

- `<br>`
- `<hr>`
- `<meta>`

### **XHTML:**

- `<br />`
- `<hr />`
- `<meta />`

---

## **Elementy blokowe**

Elementy blokowe domyślnie zajmują całą dostępną szerokość linii, tworząc nowy blok w strukturze
dokumentu. Są one fundamentem układu strony, służąc do organizowania treści w sekcje, akapity czy
listy.

- `<address>` Contact information: Służy do podawania danych kontaktowych autora dokumentu lub
  sekcji.
- `<article>` Article content: Definiuje niezależną, samodzielną treść, która może być
  rozpowszechniana niezależnie.
- `<aside>` Aside content: Reprezentuje część strony o treści pośrednio powiązanej z głównym
  tematem.
- `<blockquote>` Long ("block") quotation: Służy do zaznaczania dłuższych cytatów pochodzących z
  innych źródeł.
- `<details>` Disclosure widget: Tworzy interaktywny element, który użytkownik może rozwijać lub
  zwijać.
- `<dialog>` Dialog box: Reprezentuje okno dialogowe lub inne okno interaktywne.
- `<dd>` Describes a term in a description list: Zawiera opis lub definicję elementu w liście
  opisowej.
- `<div>` Document division: Uniwersalny kontener blokowy używany głównie do grupowania elementów w
  celach stylizacyjnych.
- `<dl>` Description list: Definiuje listę opisową, w której elementy są sparowane z ich opisami.
- `<dt>` Description list term: Określa termin lub nazwę w liście opisowej.
- `<fieldset>` Field set label: Grupuje powiązane elementy wewnątrz formularza, często otaczając je
  ramką.
- `<figcaption>` Figure caption: Służy jako podpis dla zawartości elementu `<figure>`.
- `<figure>` Groups media content with a caption (see `<figcaption>`): Kontener na treści graficzne
  lub multimedialne wraz z ich opisem.
- `<footer>` Section or page footer: Definiuje stopkę dla dokumentu lub sekcji, zawierającą
  zazwyczaj informacje o autorze czy prawa autorskie.
- `<form>` Input form: Tworzy formularz służący do zbierania danych użytkownika.
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` Heading levels 1-6: Definiują nagłówki o różnym
  stopniu ważności w hierarchii dokumentu.
- `<header>` Section or page header: Kontener na treści wprowadzające, takie jak logo, nawigacja lub
  nagłówki sekcji.
- `<hgroup>` Groups header information: Służy do grupowania nagłówków różnych poziomów w ramach
  jednej sekcji.
- `<hr>` Horizontal rule (dividing line): Wstawia poziomą linię, wyznaczającą przerwę tematyczną
  między sekcjami.
- `<li>` List item: Reprezentuje pojedynczy element w liście uporządkowanej lub nieuporządkowanej.
- `<main>` Contains the central content unique to this document: Określa główną zawartość dokumentu,
  wykluczając elementy powtarzalne na stronie.
- `<nav>` Contains navigation links: Definiuje sekcję zawierającą odnośniki nawigacyjne strony.
- `<ol>` Ordered list: Tworzy listę uporządkowaną, w której kolejność elementów ma znaczenie.
- `<p>` Paragraph: Reprezentuje akapit tekstu.
- `<pre>` Preformatted text: Służy do wyświetlania tekstu zachowującego spacje i znaki nowej linii w
  formacie źródłowym.
- `<section>` Section of a web page: Grupuje tematycznie powiązane treści wewnątrz dokumentu.
- `<table>` Table: Kontener służący do prezentacji danych w układzie tabelarycznym.
- `<ul>` Unordered list: Tworzy listę nieuporządkowaną, gdzie kolejność elementów nie jest istotna.

**Źródło:**

[https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements)

---

## **Elementy liniowe**

Mogą zawierać tylko dane i inne elementy wbudowane. Wyjątkiem od tej reguły jest tag `<a>`, który
może również zawierać elementy blokowe. Przeglądarka nie przerywa linii przed i po tagu. Elementy
wbudowane są ściśle zawarte w tagach, co pozwala na stylizowanie fragmentów tekstu bez wpływu na
układ blokowy.

- `<a>` jest prawdopodobnie jednym z najważniejszych elementów HTML. Jest przeznaczony do tworzenia
  linków. Ten znacznik jest często używany z atrybutem href, który wskazuje ścieżkę do pliku /
  strony internetowej, do której się odwołuje. Tekst zawinięty w tym tagu jest podkreślony i
  wyróżniony kolorem. Po kliknięciu zostaniesz przeniesiony pod adres określony w atrybucie href.
- `<abbr>`: Definiuje skrót lub akronim.
- `<acronym>`: Starszy tag używany do definicji akronimów (obecnie zaleca się używanie `<abbr>`).
- `<audio>`: Osadza treść audio, jeśli posiada widoczne kontrolki odtwarzania.
- `<b>`: Wyróżnia tekst w sposób wizualny (pogrubienie) bez nadawania mu dodatkowego znaczenia.
- `<bdi>`: Izoluje fragment tekstu, który może być sformatowany w innym kierunku niż reszta
  zawartości.
- `<bdo>`: Pozwala na wymuszenie kierunku zapisu tekstu (np. od prawej do lewej).
- `<big>`: Starszy element powiększający czcionkę (niezalecany w nowoczesnym HTML).
- `<br>`: Wstawia pojedyncze złamanie linii.
- `<button>`: Tworzy interaktywny przycisk.
- `<canvas>`: Służy do rysowania grafiki za pomocą skryptów, zazwyczaj JavaScript.
- `<cite>`: Oznacza tytuł utworu lub odniesienie do źródła cytatu.
- `<code>`: Reprezentuje fragment kodu komputerowego.
- `<data>`: Łączy zawartość tekstową z wartością maszynową.
- `<datalist>`: Dostarcza listę opcji do wyboru wewnątrz pola tekstowego.
- `<del>`: Oznacza tekst, który został usunięty z dokumentu.
- `<dfn>`: Reprezentuje termin definiowany w danym kontekście.
- `<em>`: Wyróżnia tekst z naciskiem, co zazwyczaj skutkuje kursywą.
- `<embed>`: Osadza zewnętrzne treści multimedialne.
- `<i>`: Służy do wyróżnienia tekstu, często w formie kursywy, np. dla terminów obcych.
- `<iframe>`: Osadza inną stronę internetową wewnątrz bieżącego dokumentu.
- `<img>`: Wyświetla grafikę na stronie.
- `<input>`: Tworzy pole służące do wprowadzania danych przez użytkownika.
- `<ins>`: Oznacza tekst, który został dodany do dokumentu.
- `<kbd>`: Oznacza tekst wprowadzany za pomocą klawiatury.
- `<label>`: Definiuje etykietę dla elementu formularza.
- `<map>`: Definiuje mapę obrazu po stronie klienta.
- `<mark>`: Wyróżnia tekst poprzez podświetlenie, używane do zwrócenia uwagi.
- `<meter>`: Reprezentuje wartość skalarną w określonym zakresie.
- `<noscript>`: Definiuje zawartość alternatywną, gdy skrypty są wyłączone.
- `<object>`: Osadza zasoby zewnętrzne, takie jak wtyczki czy dokumenty.
- `<output>`: Przedstawia wynik obliczeń wykonanych przez skrypt.
- `<picture>`: Umożliwia wyświetlanie różnych obrazów w zależności od parametrów ekranu.
- `<progress>`: Pokazuje postęp wykonywanego zadania.
- `<q>`: Służy do krótkich cytatów wewnątrz akapitu.
- `<ruby>`: Pozwala na dodawanie notacji fonetycznej nad znakami (np. w językach azjatyckich).
- `<s>`: Oznacza tekst, który nie jest już poprawny lub aktualny.
- `<samp>`: Reprezentuje przykładowy wydruk z komputera.
- `<script>`: Osadza skrypty wykonywane przez przeglądarkę.
- `<select>`: Tworzy rozwijaną listę wyboru.
- `<slot>`: Reprezentuje punkt wstawienia dla zawartości wewnątrz Web Components.
- `<small>`: Zmniejsza rozmiar czcionki, używane często dla uwag pobocznych.
- `<span>` w tym sparowanym tagu możesz zawijać tekst lub jego część. Ten tag w żaden sposób nie
  wpływa na wyświetlanie tekstu. Prawdopodobnie masz logiczne pytanie: dlaczego i w jakich
  sytuacjach używać tego tagu? Znacznik ten jest często stosowany, gdy trzeba zmienić wygląd części
  tekstu przy użyciu CSS.
- `<strong>` Oznacza tekst o dużym znaczeniu, domyślnie wyświetlany jako pogrubiony.
- `<sub>` ten znacznik służy do tworzenia tekstu indeksu dolnego: to znaczy, że tekst wewnątrz tego
  sparowanego znacznika zostanie przesunięty w dół i zmniejszony. Ten tag przydaje się, gdy musisz
  napisać wzór chemiczny.
- `<sup>` ten tag definiuje tekst w indeksie górnym. Jest podobny do poprzedniego, z tą różnicą, że
  tekst zawarty w tym tagu zostanie przesunięty w górę. Dzięki niemu możesz wyświetlać interesujące
  równania matematyczne na swojej stronie internetowej.
- `<svg>`: Służy do osadzania grafiki wektorowej w formacie SVG.
- `<template>`: Definiuje zawartość, która nie jest renderowana od razu, lecz może być powielana
  przez skrypty.
- `<textarea>`: Tworzy wieloliniowe pole tekstowe.
- `<time>`: Reprezentuje datę lub czas w czytelnym formacie.
- `<u>`: Podkreśla tekst, często używane do oznaczenia literówek lub nazw własnych.
- `<tt>`: Starszy tag oznaczający tekst o stałej szerokości (niezalecany).
- `<var>`: Reprezentuje nazwę zmiennej w kodzie lub wyrażeniu matematycznym.
- `<video>`: Osadza pliki wideo na stronie.
- `<wbr>`: Sugeruje miejsce w długim słowie, w którym przeglądarka może dokonać złamania linii.

**Źródło:**

[https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements)
