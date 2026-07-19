---
title: HTML template
description: >-
  Kompletny szablon HTML5 z podstawowymi meta tagami, Open Graph, semantyczną
  strukturą dokumentu oraz krótkim omówieniem najważniejszych elementów sekcji
  <head>.
pubDate: 2025-11-04
categories:
  - html
---

## Uniwersalny template

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <title>your_title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="title" content="your_title">
    <meta name="description" content="your_description">
    <meta name="keywords" content="your_keywords">
    <meta name="robots" content="index, follow">
    <meta name="language" content="Polish">
    <meta name="author" content="Karol Skolasiński">
    <meta name="copyright" content="Karol Skolasiński">

    <meta property="og:title" content="your_og_title">
    <meta property="og:description" content="your_og_title">
    <meta property="og:type" content="website">
    <meta property="og:image" content="og-image.webp">
    <meta property="og:image:type" content="image/webp">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://www.your_site.pl">
    <meta property="og:locale" content="pl_PL">
    <meta property="og:site_name" content="your_site_name">

    <!--STYLES-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap"
    >
    <link rel="icon" type="image/x-icon" href="./favicon.ico">
    <link rel="stylesheet" href="./style.css">

    <!--SCRIPTS-->
    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/shoelace.js"
    >
    </script>
    <script src="/static/js/script.js"></script>
  </head>

  <body>
    <header>
      <nav>NAV</nav>
    </header>

    <main>
      <aside>ASIDE</aside>

      <section>SECTION</section>
    </main>

    <footer>FOOTER</footer>
  </body>
</html>
```

### Meta tags

- `<!DOCTYPE html>` - dokument w formacie HTML5. Element ten określa typ bieżącego dokumentu: DTD
  (Document Type Definition). Konieczne jest, aby przeglądarka rozumiała, według jakiego standardu
  HTML ma wyświetlać stronę internetową. Jak widać, jest to jeden z tagów, które nie są sparowane.
  Czy używać lower case czy capitalize? Nie ma to znaczenia
  ([źródło](https://stackoverflow.com/questions/7020961/uppercase-or-lowercase-doctype)). In other
  words is case-insensitively
  ([źródło](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)).
- `<html>` - znacznik wskazuje, że jest to dokument HTML.
- `lang="pl"` - używany przez stronę język.
- `<head>` - znacznik jest przeznaczony do przechowywania elementów, które pomagają przeglądarkom i
  wyszukiwarkom w pracy z danymi.
- `charset="UTF-8"` - zestaw znaków używany na stronie, sposób kodowania znaków (zapis index.html
  bez BOM). Jeśli atrybut nie zostanie określony, niektóre przeglądarki mogą wyświetlać niejasne
  znaki zamiast tekstu.
- `name="description"` - opis strony w wyszukiwarce (150 - 160 znaków).
- `name="keywords"` - słowa kluczowe.
- `http-equiv="X-UA-Compatible" content="IE=edge"` - prawidłowe wyświetlanie w przeglądarkach IE
  ([źródło](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do)).
- Dołączając skrypty w HTML4, musieliśmy im ustawiać atrybut `type="text/javascript"`. W nowym HTML
  atrybut ten domyślnie ma taką wartość, więc nie musimy go podawać.

### **Open graph**

The Open Graph protocol enables any web page to become a rich object in a social graph. For
instance, this is used on Facebook to allow any web page to have the same functionality as any other
object on Facebook.

- `og:url` The canonical URL of your object that will be used as its permanent ID in the graph.

#### Źródła:

[https://ogp.me/](https://ogp.me/)
[https://lumo.pl/blog/open-graph/](https://lumo.pl/blog/open-graph/)

---

## **Semantic HTML**

A semantic element clearly describes its meaning to both the browser and the developer.

![50](@assets/posts/html-template/image.png)

#### **Źródło:**

[https://internetingishard.netlify.app/html-and-css/semantic-html/index.html#summary](https://internetingishard.netlify.app/html-and-css/semantic-html/index.html#summary)
