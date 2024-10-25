import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-template-engines.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/components/prism-pug";

const Pug = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="html cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>Pug</h1>
        <h3>Pug in 5 minutes tutorial</h3>
        <a href="https://dev.to/jh3y/pug-in-5-minutes-272k" className="article-link">
          https://dev.to/jh3y/pug-in-5-minutes-272k
        </a>

        <hr />

        <h3>HTML to Pug - Online Converter</h3>
        <a href="https://html-to-pug.com/" className="article-link">
          https://html-to-pug.com/
        </a>

        <hr />

        <h3>(double) Loop with "if" example</h3>
        <pre className="line-numbers language-pug">
          <code>
{`each tag in tags
  div.pt-5
    span.border.p-2='#' + tag
  each photo in photos
    if (photo.tags.includes(tag))
      div.image-gallery.d-inline
        a(href=photo.bigSrc title=photo.name)
          img.p-3(src=photo.thumbSrc alt=photo.name)`}
          </code>
        </pre>
      </article>
    </>
  );
};

export default Pug;
