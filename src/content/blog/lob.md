---
title: LoB
description: |
  Locality of Change / Behavior vs. Separation of Concerns
pubDate: 2026-09-29
order: 10
categories:
  - dev
---
**Locality of Change / Behavior (Lokalność zmian)** To zasada, która mówi: wszystko, co dotyczy danego elementu, trzymaj w jednym miejscu. Chodzi o to, żeby patrzysz na jeden plik lub kod i od razu widzisz:

* jak element wygląda
* jak działa
* co się stanie po kliknięciu

**Przeciwieństwo: Separation of Concerns (Rozdzielenie odpowiedzialności)** To tradycyjne podejście, które mówi: dziel kod według technologii lub funkcji do osobnych szuflad. W tym modelu masz:

* jeden wielki plik tylko na style (CSS)
* jeden plik tylko na wygląd/strukturę (HTML)
* jeden plik tylko na logikę i zachowanie (JS)

Główne założenie LoB:

> "The behavior of a unit of code should be as obvious as possible by simple inspection."

Podejście to spopularyzowali twórcy htmx oraz zwolennicy Tailwind CSS, w których style lub logikę pisze się bezpośrednio przy elemencie (in-line / co-located), przedkładając łatwość czytania i modyfikacji jednego fragmentu nad tradycyjny podział odpowiedzialności według typów plików (Separation of Concerns).
