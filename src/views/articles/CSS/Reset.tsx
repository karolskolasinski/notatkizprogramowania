import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-css.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const BoxModel = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="css cover" className="cover" />
      </div>

      <article className="article article-content">
        <h1>Reset CSS</h1>

        <p>
          Celem resetowania arkusza stylów jest zmniejszenie niespójności przeglądarki w takich
          kwestiach, jak domyślne wysokości linii, marginesy i rozmiary czcionek nagłówków i tak
          dalej. Resetowanie stylów dość często pojawia się we frameworkach CSS. Istnieją różne
          resety CSS, najczęściej bazują na <a href="https://meyerweb.com/eric/tools/css/reset/"
          className="article-link"> CSS Tools: Reset CSS</a>
        </p>

        <h3>Przykładowy reset CSS:</h3>
        <pre className="line-numbers language-css">
          <code>
{`*, ::before, ::after {
    box-sizing: border-box;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins,
kbd, q, s, samp, small, strike, strong, tt, var, b, u, i, center, dl, dt, dd,
ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu,
nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
}

img {
    display: block;
}`}
          </code>
        </pre>

        <h1>Normalize CSS</h1>
        <p>
          Każda przeglądarka posiada własne, domyślne style, dlatego wygląd strony z tym samym CSS
          może się różnić. Rozwiązaniem może być <a href="https://github.com/necolas/normalize.css/"
          className="article-link">Normalize.css</a>
        </p>
        <ul>
          <li>Zachowuje przydatne wartości domyślne, w przeciwieństwie do wielu resetów CSS</li>
          <li>Poprawia błędy i typowe niespójności przeglądarek</li>
          <li>Poprawia użyteczność dzięki subtelnym modyfikacjom</li>
          <li>Wyjaśnia, co robi kod, używając szczegółowych komentarzy</li>
        </ul>
      </article>
    </>
  );
};

export default BoxModel;
