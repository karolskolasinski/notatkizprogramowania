import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-dev.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/components/prism-ignore";

const Git = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="dev cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>docker</h1>
        <h3>zatrzymanie wszystkich kontenerów</h3>
        <pre className="line-numbers language-bash">
          <code>
{`docker stop $(docker ps -aq)`}
          </code>
        </pre>
      </article>
    </>
  );
};

export default Git;
