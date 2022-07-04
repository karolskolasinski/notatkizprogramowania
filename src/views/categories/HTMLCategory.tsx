import React from 'react';
import htmlArticles from '../../db/html-articles.json';
import { Link, Route, Routes } from 'react-router-dom';
import { createLazyElement } from '../utils';

const HTMLCategory = () => {
    return (
        <main className="main">
            {htmlArticles.map((article, index) => <Link to={article.path} key={index}>{article.title}</Link>)}

            <Routes>
                {htmlArticles.map(({ path, filePath }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}
            </Routes>
        </main>
    );
};

export default HTMLCategory;
