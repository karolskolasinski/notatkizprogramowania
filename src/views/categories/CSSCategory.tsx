import React from 'react';
import cssArticles from '../../db/css-articles.json';
import { Route, Routes } from 'react-router-dom';
import { createLazyElement, CustomLink } from '../utils';

const CSSCategory = () => {
    return (
        <main className="main">
            {cssArticles.map(({ path, title, to }) =>
                <CustomLink to={path} key={to} color={'css'}>{title}</CustomLink>)}

            <Routes>
                {cssArticles.map(({ path, filePath }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}
            </Routes>
        </main>
    );
};

export default CSSCategory;
