import React from 'react';
import htmlArticles from '../../db/html-articles.json';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createLazyElement, CustomLink } from '../utils';

const HTMLCategory = () => {
    return (
        <main className="main">
            {useLocation().pathname === '/html-category' && <div className={'link-wrapper'}>
                {htmlArticles.map(({ path, title, to }) =>
                    <CustomLink to={path} key={to} color={'html'}>{title}</CustomLink>)}
            </div>}

            <Routes>
                {htmlArticles.map(({ path, filePath }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}
            </Routes>
        </main>
    );
};

export default HTMLCategory;
