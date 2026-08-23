---
title: Reset CSS
description: resetowanie arkusza stylów
pubDate: 2025-04-18
order: 7
categories:
  - css
---

Celem resetowania arkusza stylów jest zmniejszenie niespójności przeglądarki w takich kwestiach jak domyślne wysokości linii, marginesy i rozmiary czcionek nagłówków i tak dalej. Resetowanie stylów dość często pojawia się we frameworkach CSS. Istnieją różne resety CSS, najczęściej bazują na [CSS Tools: Reset CSS](https://meyerweb.com/eric/tools/css/reset/).

Osobiście nie polecam żadnego resetowania, oprócz niezbędnych selektorów, ponieważ nic to nie wnosi, a często powoduje braki i problemy, marnowanie czasu na szukanie. Reset marginesu dla nagłówków i paragrafów można wprowadzić opcjonalnie, ale często się przydaje i łatwiej jest ustawić 0 dla konkretnej klasy.

### Niezbędny, minimalny reset CSS:

```css
*, ::before, ::after {
    box-sizing: border-box;
}

html, body {
    margin: 0;
}

img {
    display: block;
}

```

### Dlaczego używam rem a nie em?

Na przykład w sytuacji, gdy chcesz obliczyć odległość od góry, aby wypozycjonować toolbox, nie możesz tego zrobić przy użyciu jednostek `em`

![](@assets/posts/reset-css/em.png)

Header ma wysokość `4rem`, następnie jest nagłówek `h1`, którego wielkość jest `3rem` i który posiada domyślny margin górny i dolny (user agent stylesheet) `.87em`.
