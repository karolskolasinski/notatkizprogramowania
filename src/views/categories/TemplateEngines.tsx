import React from 'react';
import templateEnginesArticles from '../../db/template-engines-articles.json';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createLazyElement, CustomLink } from '../utils';

const JavaScript = () => {
    return (
        <main className="main">
            {useLocation().pathname === '/template-engines' && <div className={'link-wrapper'}>
                {templateEnginesArticles.map(({ path, title, to }) =>
                    <CustomLink to={path} key={to} color={'javascript'}>{title}</CustomLink>)}
            </div>}

            <Routes>
                {templateEnginesArticles.map(({ path, filePath }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}
            </Routes>
        </main>
    );
};

export default JavaScript;
