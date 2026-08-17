---
title: text
description: właściwości text
pubDate: 2025-04-18
order: 8
categories:
  - css
---
# text-shadow

Właściwość `text-shadow` może przyjąć następujące wartości parametrów:

* `x-shadow` to parametr obowiązkowy. Odpowiada za poziome przesunięcie cienia względem tekstu. Dodatnia wartość tego parametru ustawia przesunięcie cienia w prawo, wartość ujemna ustawia przesunięcie cienia w lewo;
* `y-shadow` jest również obowiązkowym parametrem. Odpowiada za pionowe przesunięcie cienia w stosunku do tekstu. Jeśli użyjesz wartości ujemnej, cień przesunie się w górę;
* `radius` ustawia promień rozmycia cienia. Im większa wartość, tym cień jest gładszy, szerszy i jaśniejszy. Ten parametr jest uważany za opcjonalny. Jeśli ten parametr nie jest ustawiony, domyślnie jest ustawiony na 0;
* `color` ustawia kolor cienia. Domyślnie kolor cienia jest taki sam jak kolor tekstu. Ten parametr jest uważany za opcjonalny;

Zamiast parametrów wymienionych powyżej możesz ustawić `none`. Ten parametr służy do anulowania dodawania cieni. Jeśli chcesz mieć więcej kolorów, możesz również wskazać kilka cieni podzielonych przecinkami.

```css
h1 {
    text-shadow: 2px 0 2px green;
}

h2 {
    text-shadow: 2px 0 2px green, 2px 0 4px yellow;
}

```
