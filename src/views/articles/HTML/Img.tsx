import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-html.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const Img = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="html cover" className="cover" />
      </div>

      <article className="article article-content">
        <h1>Obrazki</h1>

        <h3>
          Korzystanie z atrybutów <span className="snippet">srcset</span> i{" "}
          <span className="snippet">size</span>
        </h3>

        <pre className="line-numbers language-html">
          <code>
{`<img
    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-500.jpg"
    srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-500.jpg 500w,
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-1000.jpg 1000w"
    sizes="(min-width: 600px) 50vw, 100vw"
    alt="cat"
/>`}
          </code>
        </pre>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/2QYpkrX2N48"
            width="100%"
            height="315"
            allowFullScreen
            title="srcset and sizes attributes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/fUnGbptARlo"
            width="100%"
            height="315"
            allowFullScreen
            title="Better HTML Images for Users & Developers | Web Dev Office Hours"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        <h4>Żródło:</h4>
        <a href="https://austingil.com/better-html-images/" className="article-link">
          6 Steps to Improve HTML Images
        </a>

        <hr />

        <h3>Image spacing</h3>
        <p>
          Gdy pod obrazkiem jest kilka dodatkowych pixeli, należy dodać do obrazka właściwość CSS:
        </p>

        <pre className="line-numbers language-css">
          <code>
{`img {
    display: block;
}`}
          </code>
        </pre>
      </article>
    </>
  );
};

export default Img;
