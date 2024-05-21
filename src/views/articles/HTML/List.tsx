import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-html.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const List = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="html cover" className="cover" />
      </div>

      <article className="article article-content">
        <h1>Listy</h1>

        <ul className="snippet-list pb0">
          <li>
            <span>&lt;ol&gt;</span> jako atrybut <span>type</span> może przyjmować:

            <ul className="pb0 nested-list">
              <li>
                <span>1</span> - domyślnie, numeracja dziesiętna (1, 2, 3, 4...)
              </li>

              <li>
                <span>A</span> - w porządku alfabetycznym, dużymi literami (A, B, C, D...)
              </li>

              <li>
                <span>a</span> - w kolejności alfabetycznej, małe litery (a, b, c, d...)
              </li>

              <li>
                <span>I</span> - cyframi rzymskimi (I, II, III, IV)
              </li>
            </ul>
          </li>

          <pre className="line-numbers language-html">
            <code>
{`<ol type="A" start="3" reversed></ol>
C. First
B. Second
A. Third`}
            </code>
          </pre>

          <hr />

          <li>
            <span>&lt;ul&gt;</span> jako wartość właściwości CSS <span>list-style-type</span>{" "}
            może przyjmować:

            <ul className="nested-list">
              <li>
                <span>disc</span> - domyślnie
              </li>

              <li>
                <span>circle</span>
              </li>

              <li>
                <span>square</span>
              </li>

              <li>
                <span>none</span> - nie wyświetla się
              </li>
            </ul>
          </li>

          <hr />

          <li>
            <span>&lt;dl&gt;</span> oznacza description list i zawiera:

            <ul className="nested-list pb0">
              <li>
                <span>&lt;dt&gt;</span> - description term
              </li>

              <li>
                <span>&lt;dd&gt;</span> - description definition
              </li>
            </ul>
          </li>

          <p className="pb0">
            Gdy konieczne jest nadanie wielu definicji jednemu obiektowi, wybierz listę definicji,
            np.:
          </p>

          <pre className="line-numbers language-html">
            <code>
{`<dl>
    <dt>Recipe:</dt>
        <dd>Omelet</dd>

    <dt>Ingredients:</dt>
        <dd>Eggs</dd>
        <dd>Milk</dd>
        <dd>Salt</dd>
</dl>`}
            </code>
          </pre>

          <h3>Wynik:</h3>

          <dl>
            <dt>Recipe:</dt>
            <dd>Omelet</dd>

            <dt>Ingredients:</dt>
            <dd>Eggs</dd>
            <dd>Milk</dd>
            <dd>Salt</dd>
          </dl>
        </ul>
      </article>
    </>
  );
};

export default List;
