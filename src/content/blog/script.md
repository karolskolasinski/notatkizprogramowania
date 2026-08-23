---
title: script
description: Connecting JS to HTML
pubDate: 2025-04-20
order: 5
categories:
  - javascript
---

## Connecting JS to HTML

Niektórzy programiści dołączają pliki JavaScript nie przed tagiem zamykającym `</body>`, ale
wewnątrz `<head>`. Ten typ połączenia również działa; więc czy pozycja ma znaczenie, a jeśli tak, to
gdzie lepiej jest zaimplementować tag `<script>`?

W rzeczywistości istnieje różnica. Zalecane jest włączenie JavaScript na końcu sekcji `<body>`,
ponieważ ten typ połączenia pozwala przyspieszyć ładowanie strony. Strony internetowe są ładowane w
kolejności określonej w znacznikach HTML: najpierw przeglądarka analizuje elementy wewnątrz tagu
`<head>`, a następnie przechodzi do `<body>`. Jeśli użyjesz połączenia w tagu `<head>`, zawartość
strony nie będzie widoczna w przeglądarce do momentu załadowania pliku JavaScript. Sytuacja może
stać się krytyczna w przypadku większych plików. Priorytetem jest tutaj pokazanie podstawowych
informacji zamieszczanych na stronie internetowej, tak aby użytkownik nie siedział długo, patrząc na
pusty ekran monitora.

```xml
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Connecting JavaScript to HTML</title>
    <script src="./assets/js/main.js"></script> // ❌
</head>

<body>
    <script src="./assets/js/main.js"></script> // ✔️
</body>
</html>
```

## defer

<iframe
    class="aspect-video w-full lg:max-w-2/3 pb-8"
    src="https://www.youtube.com/embed/BMuFBYw91UQ"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>

## DOMContentLoaded vs load

<iframe
    class="aspect-video w-full lg:max-w-2/3 pb-8"
    src="https://www.youtube.com/embed/8rc0zaTn2ew"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
