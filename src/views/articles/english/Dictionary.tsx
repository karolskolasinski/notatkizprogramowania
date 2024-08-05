import React from "react";
import cover from "../../../img/cover/cover-template-engines.webp";

const Dictionary = () => {
  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="english cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>Dictionary</h1>

        <ul className="snippet-list">
          <li>
            <span>vulnerabilities</span> - luki w zabezpieczeniach
          </li>
        </ul>
      </article>
    </>
  );
};

export default Dictionary;
