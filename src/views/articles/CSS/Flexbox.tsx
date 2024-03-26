import React from "react";
import cover from "../../../img/cover/cover-css.webp";

const Flexbox = () => {
  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="css cover" className="cover" />
      </div>

      <article className="article article-content">
        <h2>Flexbox tutorials and tools</h2>

        <ul>
          <li>
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
              className="article-link">
              https://css-tricks.com/snippets/css/a-guide-to-flexbox/
            </a>
          </li>

          <li>
            <a href="https://www.flexer.dev/" className="article-link">
              https://www.flexer.dev/
            </a>
          </li>
        </ul>

      </article>
    </>
  );
};

export default Flexbox;
