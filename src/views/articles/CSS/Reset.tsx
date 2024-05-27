import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-css.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import em from "../../../img/css/em.png";

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

        <h3>
          Dlaczego używam <span className="snippet">rem</span> a nie{" "}
          <span className="snippet">em</span>?
        </h3>
        <p>
          Na przykład w sytuacji gdy chcesz obliczyć odległość od góry, aby wypozycjonować toolbox,
          nie możesz tego zrobić przy użyciu jednostek <span className="snippet">em</span>
        </p>
        <div className="article-img-wrapper">
          <img src={em} alt="flexbox" className="article-img-100" />
        </div>

        <p>
          Header ma wysokość <span className="snippet">4rem</span>, następnie jest nagłówek{" "}
          <span className="snippet">h1</span>, którego wielkość jest{" "}
          <span className="snippet">3rem</span>{" "}
          i który posiada domyślny margin górny i dolny (user agent stylesheet){" "}
          <span className="snippet">.87em</span>.
        </p>
      </article>
    </>
  );
};

export default BoxModel;
