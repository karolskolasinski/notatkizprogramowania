---
title: Event Listener
description: Event Listener
pubDate: 2025-04-20
order: 4
categories:
  - javascript
---
## keydown

```javascript
document.addEventListener("keydown", (event) => {
    if (event.code === "AltRight") {
        console.log(event);
    }
});

```

W tym kodzie napisaliśmy procedurę obsługi zdarzenia keydown, które powinno nastąpić po naciśnięciu prawego klawisza Alt. Aby nasz program obsługi zdarzeń działał poprawnie, parametr event został przekazany do funkcji (czasami jest po prostu oznaczony literą **e**). Ten parametr jest odniesieniem do obiektu globalnego, przeglądarka musi umieścić w nim wszystkie dane bieżącego zdarzenia. Rezultatem wykonania tych wierszy kodu będzie wyjście do konsoli informacji, które zostały przekazane do event.

JS ma właściwość event.code, która pozwala rozpoznać wciśnięty klawisz. Używaj:

* `event.code`, gdy **nie** zależy ci na wielkości liter
* `event.key`, gdy zależy ci na wielkości liter. event.key jest również przydatny, jeśli twoja aplikacja jest używana przez wielojęzycznych użytkowników, ponieważ w przypadku niektórych układów event.code może wystąpić nieoczekiwany znak. Więcej informacji na ten temat można znaleźć w witrynie [World Wide Web Consortium](https://www.w3.org/TR/uievents-code/#table-key-code-alphanumeric-writing-system).

![](@assets/posts/event-listener/event-code-event-key.png)
