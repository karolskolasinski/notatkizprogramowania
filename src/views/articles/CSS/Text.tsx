import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-css.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const Text = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="css cover" className="cover" />
      </div>

      <article className="article article-content">
        <h1>text-shadow</h1>
        <p className="snippets">
          Właściwość <span>text-shadow</span> może przyjąć następujące wartości parametrów:
        </p>
        <ul className="snippet-list">
          <li>
            <span>x-shadow</span>{" "}
            to parametr obowiązkowy. Odpowiada za poziome przesunięcie cienia względem tekstu.
            Dodatnia wartość tego parametru ustawia przesunięcie cienia w prawo, wartość ujemna
            ustawia przesunięcie cienia w lewo;
          </li>

          <li>
            <span>y-shadow</span>{" "}
            jest również obowiązkowym parametrem. Odpowiada za pionowe przesunięcie cienia w
            stosunku do tekstu. Jeśli użyjesz wartości ujemnej, cień przesunie się w górę;
          </li>

          <li>
            <span>radius</span>{" "}
            ustawia promień rozmycia cienia. Im większa wartość, tym cień jest gładszy, szerszy i
            jaśniejszy. Ten parametr jest uważany za opcjonalny. Jeśli ten parametr nie jest
            ustawiony, domyślnie jest ustawiony na 0;
          </li>

          <li>
            <span>color</span>{" "}
            ustawia kolor cienia. Domyślnie kolor cienia jest taki sam jak kolor tekstu. Ten
            parametr jest uważany za opcjonalny;
          </li>
        </ul>

        <p>
          Zamiast parametrów wymienionych powyżej możesz ustawić none. Ten parametr służy do
          anulowania dodawania cieni. Jeśli chcesz mieć więcej kolorów, możesz również wskazać kilka
          cieni podzielonych przecinkami.
        </p>
        <pre className="line-numbers language-css">
          <code>
{`h1 {
    text-shadow: 2px 0 2px green;
}

h2 {
    text-shadow: 2px 0 2px green, 2px 0 4px yellow;
}`}
          </code>
        </pre>

        <hr />

        <h1>CSS Properties</h1>
        <a href="https://qhmit.com/css/properties/" className="article-link">
          https://qhmit.com/css/properties/
        </a>
      </article>
    </>
  );
};

export default Text;
