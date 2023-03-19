import React from 'react';
import devArticles from '../../db/dev-articles.json';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createLazyElement, CustomLink } from '../utils';

const Dev = () => {
    return (
        <main className="main">
            {useLocation().pathname === '/dev' && <div className='link-wrapper'>
                <h1 className='category-header'>dev</h1>
                {devArticles.map(({ path, title, to }) =>
                    <CustomLink to={path} key={to} color='dev'>{title}</CustomLink>)}
            </div>}

            <Routes>
                {devArticles.map(({ path, filePath }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}
            </Routes>
        </main>
    );
};

export default Dev;
