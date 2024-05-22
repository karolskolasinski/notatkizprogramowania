import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-javascript.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const Fetch = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="html cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>Fetch API</h1>
        <pre className="line-numbers language-js">
          <code>
{`fetch("your-URL", {
    method: 'POST', // GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, same-origin
    cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, omit
    headers: {
        'Content-Type': 'application/json' // application/x-www-form-urlencoded
    },
    redirect: 'follow', // manual, follow, error
    referrerPolicy: 'no-referrer', // no-referrer, client
    body: JSON.stringify(data) // treść wysyłana
})`}
          </code>
        </pre>
      </article>
    </>
  );
};

export default Fetch;
