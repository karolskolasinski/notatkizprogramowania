import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-css.webp";
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
        <img src={cover} alt="css cover" className="cover" />
      </div>

      <article className="article article-content">
        <h1>List</h1>

        <p className="snippets">
          Aby w tagach <span>&lt;ul&gt;</span>{" "}
          znaczniki nie wychodziły poza obszar diva, należy użyć:
        </p>
        <pre className="line-numbers language-css">
          <code>
{`ul {
   list-style-position: inside;
}`}
          </code>
        </pre>

        <p className="snippets">
          <span>list-style-position: inside</span>{" "}
          works great unless your bullet points will need multiple lines on small screens as your
          text will align with the bullet point rather than where the text begins. Keeping the
          default{" "}
          <span>text-align: outside</span>, allowing for a small margin and aligning the text to the
          left to override any centered containers gets around the bullet point alignment problem.
        </p>
        <pre className="line-numbers language-css">
          <code>
{`ul, ol {
  margin-left: 0.75em;
  text-align: left;
}`}
          </code>
        </pre>

        <h4>Źródło:</h4>
        <a
          href="https://stackoverflow.com/questions/1461015/why-dont-ul-bullets-stay-within-their-containing-div"
          className="article-link"
        >
          https://stackoverflow.com/questions/1461015/why-dont-ul-bullets-stay-within-their-containing-div
        </a>
      </article>
    </>
  );
};

export default List;
