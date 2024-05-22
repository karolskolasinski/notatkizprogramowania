import React, { useEffect } from "react";
import semanticImg from "../../../img/html/semantic.jpg";
import cover from "../../../img/cover/cover-html.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const Template = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="html cover" className="cover" />
      </div>

      <article className="article article-content">
        <h1>Uniwersalny template</h1>
        <pre className="line-numbers language-html">
          <code>
{`<!DOCTYPE html>
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
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap">
  <link rel="icon" type="image/x-icon" href="./favicon.ico">
  <link rel="stylesheet" href="./style.css">

  <!--SCRIPTS-->
  <script type="module"
    src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/shoelace.js">
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
</html>`}
          </code>
        </pre>

        <h3>Meta tags</h3>
        <ul className="snippet-list">
          <li>
            <span>&lt;!DOCTYPE html&gt;</span>{" "}
            - dokument w formacie HTML5. element ten określa typ bieżącego dokumentu: DTD (Document
            Type Definition). Konieczne jest, aby przeglądarka rozumiała, według jakiego standardu
            HTML ma wyświetlać stronę internetową. Jak widać, jest to jeden z tagów, które nie są
            sparowane. Czy używać lower case czy capitalize? Nie ma to znaczenia
            (<a href="https://stackoverflow.com/questions/7020961/uppercase-or-lowercase-doctype">
              źródło
            </a>). In other words is case-insensitively
            (<a href="https://html.spec.whatwg.org/multipage/syntax.html#the-doctype">źródło</a>).
          </li>

          <li>
            <span>&lt;html&gt;</span> - znacznik wskazuje, że jest to dokument HTML
          </li>

          <li>
            <span>lang="pl"</span> - używany przez stronę język
          </li>

          <li>
            <span>&lt;head&gt;</span>{" "}
            - znacznik jest przeznaczony do przechowywania elementów, które pomagają przeglądarkom i
            wyszukiwarkom w pracy z danymi
          </li>

          <li>
            <span>charset="UTF-8"</span>{" "}
            - zestaw znaków używany na stronie, sposób kodowania znaków (zapis index.html bez BOM).
            Jeśli atrybut nie zostanie określony, niektóre przeglądarki mogą wyświetlać niejasne
            znaki zamiast tekstu
          </li>

          <li>
            <span>name="description"</span> - opis strony w wyszukiwarce (150 - 160 znaków)
          </li>

          <li>
            <span>name="keywords"</span> - słowa kluczowe
          </li>

          <li>
            <span>http-equiv="X-UA-Compatible" content="IE=edge"</span>{" "}
            - prawidłowe wyświetlanie w przeglądarkach IE
            (<a href="https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do">
              źródło
            </a>)
          </li>

          <li>
            dołączając skrypty w HTML4, musieliśmy im ustawiać atrybut{" "}
            <span>type="text/javascript"</span>. W nowym HTML atrybut ten domyślnie ma taką wartość
            więc nie musimy go podawać.
          </li>
        </ul>

        <h3>Open graph</h3>
        <p>
          The Open Graph protocol enables any web page to become a rich object in a social graph.
          For instance, this is used on Facebook to allow any web page to have the same
          functionality as any other object on Facebook.
        </p>

        <ul className="snippet-list">
          <li>
            <span>og:url</span>{" "}
            The canonical URL of your object that will be used as its permanent ID in the graph
          </li>
        </ul>

        <h4>Źródła:</h4>
        <a href="https://ogp.me/" className="article-link block">https://ogp.me/</a>
        <a
          href="https://lumo.pl/blog/open-graph/"
          className="article-link block"
        >
          https://lumo.pl/blog/open-graph/
        </a>

        <hr />

        <h1>Semantic HTML</h1>
        <p className="pb0">
          A semantic element clearly describes its meaning to both the browser and the developer.
        </p>

        <div className="article-img-wrapper">
          <img src={semanticImg} alt="HTML Semantic" className="article-img" />
        </div>

        <h4>Źródło:</h4>
        <a
          href="https://internetingishard.netlify.app/html-and-css/semantic-html/index.html#summary"
          className="article-link"
        >
          https://internetingishard.netlify.app/html-and-css/semantic-html/index.html#summary
        </a>
      </article>
    </>
  );
};

export default Template;
