---
title: Modyfikatory dostępu
description: >-
  Modyfikatory dostępu w języku Java (public, protected, package-private,
  private)
pubDate: 2020-08-23
order: 2
categories:
  - java
---

## 4 Modyfikatory dostępu:

- `public`: dostępny z każdego miejsca
- `protected`: dostępne dla klas z tego samego pakietu i klas rozszerzających
- `default`: dostępne dla klas z tego samego pakietu (= package-private)
- `private`: dostępne tylko dla samej klasy

## Modyfikatory dla klas:

- `public`: publiczna
- brak (package-private): modyfikator domyślny

Klasa nie mogła by być `private`, ponieważ nie było by do niej dostępu a jej funkcjonalność mogła by wykonywać tylko ona sama.

## Modyfikatory dla pól i metod:

![](@assets/posts/modyfikatory-dostepu/modifiers.png)

\*no modifier = package-private

### public

`public` jest najszerszym poziomem widoczności – klasy, pola i metody oznaczone w ten sposób są widoczne dla wszystkich innych klas.

### protected

Drugi w kolejności – `protected` – jest dostępny dla klasy zdefiniowanej w tej samej paczce oraz w klasach dziedziczących (`extends`) po klasie, która zawiera pola czy metody oznaczone jako
`protected`.

- dostępność w tym samym pakiecie
- dostępność w innym pakiecie poprzez `super`, pod warunkiem, że klasa rozszerza główną klasę ze zmienną/metodą

![](@assets/posts/modyfikatory-dostepu/protected.png)

### no modifier = package-private

Package, będący domyślnym poziomem widoczności nieposiadającym własnego modyfikatora, ogranicza widoczność do klas z tej samej paczki.

- dostępność tylko w tym samym pakiecie
- nie ma znaczenia czy klasa rozszerza główną klasę ze zmienną/metodą

### private

Finalnie mamy `private` – czyli prywatne. Jak sama nazwa wskazuje elementy z dostępem na poziomie prywatnym są widoczne tylko dla struktur zdefiniowanych w tej samej klasie.

## Java - modyfikatory dostępu

<iframe class="aspect-video w-full lg:max-w-2/3 pb-8"
src="https://www.youtube.com/embed/x3iFRehjpQk"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>
