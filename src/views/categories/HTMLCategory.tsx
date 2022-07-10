import React from 'react';
import htmlArticles from '../../db/html-articles.json';
import { Link, Route, Routes, useMatch, useResolvedPath } from 'react-router-dom';
import { createLazyElement } from '../utils';

const HTMLCategory = () => {
    return (
        <main className="main">
            {htmlArticles.map((article, index) =>
                <CustomLink to={article.path} key={index}>{article.title}</CustomLink>)}

            <Routes>
                {htmlArticles.map(({ path, filePath }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}
            </Routes>
        </main>
    );
};

function CustomLink({ to, children }: { to: string, children: React.ReactNode }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return isActive ? <></> : <Link to={to}>{children}</Link>;
}

export default HTMLCategory;
