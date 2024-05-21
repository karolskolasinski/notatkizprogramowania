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
          resety CSS, najczęściej bazują na{" "}
          <a href="https://meyerweb.com/eric/tools/css/reset/" className="article-link">
            CSS Tools: Reset CSS
          </a>.
        </p>

        <p>
          Osobiście nie polecam żadnego resetowania, oprócz niezbędnych selektorów, ponieważ nic to
          nie wnosi, a często powoduje braki i problemy, marnowanie czasu na szukanie. Reset
          marginesu dla nagłówków i paragrafów można wprowadzić opcjonalnie, ale często się przydaje
          i łatwiej jest ustawić <span className="snippet">0</span> dla konkretnej klasy.
        </p>

        <h3>Niezbędny, minimalny reset CSS:</h3>
        <pre className="line-numbers language-css">
          <code>
{`*, ::before, ::after {
    box-sizing: border-box;
}

html, body,
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}

img {
    display: block;
}`}
          </code>
        </pre>
      </article>
    </>
  );
};

export default BoxModel;
