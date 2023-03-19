import React from 'react';
import htmlArticles from '../../db/html-articles.json';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createLazyElement, CustomLink } from '../utils';

const HTML = () => {
    return (
        <main className="main">
            {useLocation().pathname === '/html' && <div className='link-wrapper'>
                <h1 className='category-header'>HTML</h1>
                {htmlArticles.map(({ path, title, to }) =>
                    <CustomLink to={path} key={to} color='html'>{title}</CustomLink>)}
            </div>}

            <Routes>
                {htmlArticles.map(({ path, filePath }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}
            </Routes>
        </main>
    );
};

export default HTML;
