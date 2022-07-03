import React from 'react';
import htmlArticles from '../../db/html-subcategory.json';
import { Link, Route, Routes } from 'react-router-dom';

const SemanticHTML = React.lazy(() => import('../articles/SemanticHTML'));

const HTMLCategory = () => {
    return (
        <main className="main">
            {htmlArticles.map((article, index) => <Link to={article.url} key={index}>{article.title}</Link>)}

            <Routes>
                <Route path={'semantic-html'} element={<SemanticHTML />} />
            </Routes>

        </main>
    );
};

export default HTMLCategory;
