import React from "react";
import commonOtherArticles from "../../db/common-other-articles.json";
import { Route, Routes, useLocation } from "react-router-dom";
import { createLazyElement, CustomLink } from "../utils";

const CommonOther = () => {
  return (
    <main className="main">
      {useLocation().pathname === "/common-other" && (
        <div className="link-wrapper">
          <h1 className="category-header">Common | Other</h1>
          {commonOtherArticles.map(({ path, title, to }) => (
            <CustomLink to={path} key={to} color="other">{title}</CustomLink>
          ))}
        </div>
      )}

      <Routes>
        {commonOtherArticles.map(({ path, filePath }) => (
          <Route path={path} element={createLazyElement(filePath)} key={path} />
        ))}
      </Routes>
    </main>
  );
};

export default CommonOther;
