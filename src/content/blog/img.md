---
title: img
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

- `srcset`: Lista dostępnych wersji obrazu wraz z ich rzeczywistą szerokością w pikselach
  (oznaczaną sufiksem `w`).
- `sizes`: Informacja dla przeglądarki o tym, jaką szerokość (w jednostkach CSS lub viewportu)
  będzie zajmował obraz przy określonych warunkach (media queries).
- `src`: Wartość domyślna, która służy jako fallback dla przeglądarek nieobsługujących `srcset`.

<iframe
    class="aspect-video w-full lg:max-w-2/3 pb-8"
    src="https://www.youtube.com/embed/2QYpkrX2N48"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>

<iframe
    class="aspect-video w-full lg:max-w-2/3 pb-8"
    src="https://www.youtube.com/embed/fUnGbptARlo"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>

**Źródło:**


[6 Steps to Improve HTML Images](https://austingil.com/better-html-images/)


## Image spacing

Jeśli pod obrazkiem występują niechciane dodatkowe piksele (częsty problem wynikający z tego, że
`<img>` jest elementem typu _inline_), należy zmienić jego zachowanie na blokowe:

```css
img {
  display: block;
}
```
