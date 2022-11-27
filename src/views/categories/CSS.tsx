import React from 'react';
import cssArticles from '../../db/css-articles.json';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createLazyElement, CustomLink } from '../utils';

const CSS = () => {
    return (
        <main className="main">
            {useLocation().pathname === '/css' && <div className={'link-wrapper'}>
                {cssArticles.map(({ path, title, to }) =>
                    <CustomLink to={path} key={to} color={'css'}>{title}</CustomLink>)}
            </div>}

            <Routes>
                {cssArticles.map(({ path, filePath }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}
            </Routes>
        </main>
    );
};

export default CSS;
