---
title: Korzystanie z atrybutów srcset i sizes
description: >-
  Wprowadzenie do responsywnego serwowania obrazów za pomocą atrybutów srcset i
  sizes oraz rozwiązanie problemu niechcianych odstępów pod grafikami.
pubDate: 2025-07-19
categories:
  - html
---

## Responsywne obrazy: srcset i sizes

Atrybuty `srcset` i `sizes` pozwalają przeglądarce automatycznie wybrać najbardziej odpowiednią
wersję obrazu w zależności od rozdzielczości ekranu i szerokości okna przeglądarki. Dzięki temu
użytkownicy pobierają tylko te zasoby, które są niezbędne dla ich urządzenia, co znacząco wpływa na
optymalizację przesyłu danych i wydajność strony.

```html
<img
  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-500.jpg"
  srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-500.jpg 500w,
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-1000.jpg 1000w"
  sizes="(min-width: 600px) 50vw, 100vw"
  alt="cat"
/>
```

- **`srcset`**: Lista dostępnych wersji obrazu wraz z ich rzeczywistą szerokością w pikselach
  (oznaczaną sufiksem `w`)[cite: 1].
- **`sizes`**: Informacja dla przeglądarki o tym, jaką szerokość (w jednostkach CSS lub viewportu)
  będzie zajmował obraz przy określonych warunkach (media queries)[cite: 1].
- **`src`**: Wartość domyślna, która służy jako fallback dla przeglądarek nieobsługujących
  `srcset`[cite: 1].

**Źródła:**

[6 Steps to Improve HTML Images](https://www.youtube.com/watch?v=2QYpkrX2N48)[cite: 1]
[Better HTML Images for Users & Developers](https://www.youtube.com/watch?v=fUnGbptARlo)

## Image spacing

Jeśli pod obrazkiem występują niechciane dodatkowe piksele (częsty problem wynikający z tego, że
`<img>` jest elementem typu _inline_), należy zmienić jego zachowanie na blokowe:

```css
img {
  display: block;
}
```
