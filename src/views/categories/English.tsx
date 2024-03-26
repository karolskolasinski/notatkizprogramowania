import React from "react";
import englishArticles from "../../db/english-articles.json";
import { Route, Routes, useLocation } from "react-router-dom";
import { createLazyElement, CustomLink } from "../utils";

const HTML = () => {
  return (
    <main className="main">
      {useLocation().pathname === "/english" && <div className="link-wrapper">
        <h1 className="category-header">English</h1>
        {englishArticles.map(({ path, title, to }) =>
          <CustomLink to={path} key={to} color="english">{title}</CustomLink>)}
      </div>}

      <Routes>
        {englishArticles.map(({ path, filePath }) =>
          <Route path={path} element={createLazyElement(filePath)} key={path} />)}
      </Routes>
    </main>
  );
};

export default HTML;
