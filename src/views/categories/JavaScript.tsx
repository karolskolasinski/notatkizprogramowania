import React from 'react';
import javaScriptArticles from '../../db/javascript-articles.json';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createLazyElement, CustomLink } from '../utils';

const JavaScript = () => {
    return (
        <main className="main">
            {useLocation().pathname === '/javascript' && <div className={'link-wrapper'}>
                {javaScriptArticles.map(({ path, title, to }) =>
                    <CustomLink to={path} key={to} color={'javascript'}>{title}</CustomLink>)}
            </div>}

            <Routes>
                {javaScriptArticles.map(({ path, filePath }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}
            </Routes>
        </main>
    );
};

export default JavaScript;
