import React from 'react';
import javaArticles from '../../db/java-articles.json';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createLazyElement, CustomLink } from '../utils';

const Java = () => {
    return (
        <main className="main">
            {useLocation().pathname === '/java' && <div className='link-wrapper'>
                <h1 className='category-header'>Java</h1>
                {javaArticles.map(({ path, title, to }) =>
                    <CustomLink to={path} key={to} color='java'>{title}</CustomLink>)}
            </div>}

            <Routes>
                {javaArticles.map(({ path, filePath }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}
            </Routes>
        </main>
    );
};

export default Java;
