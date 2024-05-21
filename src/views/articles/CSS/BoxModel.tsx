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
        <h1>Box Model</h1>

        <ul className="snippet-list">
          <li>
            <span>box-sizing: content-box</span>{" "}
            W poniższym przypadku div ma 100px, ale osobno zostaje do niego dodany{" "}
            <span>padding</span> i{" "}
            <span>border</span>, które w praktyce sprawiają, że całość ma 130px.
          </li>
          <pre className="line-numbers language-css">
            <code>
{`.div {
  box-sizing: content-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 5px;
}`}
            </code>
          </pre>

          <li>
            <span>box-sizing: border-box</span> Tu już jest zupełnie inaczej. Całość ma 100px, a
            {" "}
            <span>padding</span> oraz <span>border</span>{" "}
            odejmują się od wymiarów diva, przez co ten ma w praktyce 70px szerokości i wysokości.
          </li>
          <pre className="line-numbers language-css">
            <code>
{`.div {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 5px;
}`}
            </code>
          </pre>
        </ul>

        <h1>
          Universal <span className="snippet">box-sizing</span> with inheritance
        </h1>
        <pre className="line-numbers language-css">
          <code>
{`html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}`}
          </code>
        </pre>
      </article>
    </>
  );
};

export default BoxModel;
