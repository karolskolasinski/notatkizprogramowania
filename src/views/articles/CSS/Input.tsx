import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-css.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const Input = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="css cover" className="cover" />
      </div>

      <article className="article article-content">
        <h1>[type=file]</h1>
        <p>
          Aby ukryć przycisk inputa typu <span className="snippet">file</span>{" "}
          trzeba napisać selector dla jego pseudoelementu{" "}
          <span className="snippet">::file-selector-button</span>, np.:
        </p>

        <pre className="line-numbers language-css">
          <code>
{`input[type=file]::file-selector-button {
  background-color: #fff;
  color: #000;
  border: 0;
  border-right: 1px solid #e5e5e5;
  padding: 10px 15px;
  margin-right: 20px;
  transition: .5s;
}

input[type=file]::file-selector-button:hover {
  background-color: #eee;
  border: 0;
  border-right: 1px solid #e5e5e5;
}`}
          </code>
        </pre>
      </article>
    </>
  );
};

export default Input;
