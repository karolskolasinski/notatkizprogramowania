import React from "react";
import cover from "../../../img/cover/cover-common-other.png";

const Articles = () => {
  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="common other cover" className="cover" />
      </div>

      <article className="article article-content">
        <h1>Interesting articles</h1>
        <a href="https://www.youtube.com/watch?v=q1fsBWLpYW4" className="link-other">
          21 Awesome Web Features you’re not using yet
        </a>
      </article>
    </>
  );
};

export default Articles;
