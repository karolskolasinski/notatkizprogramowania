import React from 'react';
import htmlArticles from '../../db/html-subcategory.json';
import { Link, Route, Routes } from 'react-router-dom';

const HTMLCategory = () => {
    return (
        <main className="main">
            {htmlArticles.map((subcategory, index) => <Link to={subcategory.url} key={index}>{subcategory.name}</Link>)}

            <Routes>
                <Route path={'semantic-html'} element={<p>asdkas</p>}></Route>
            </Routes>

        </main>
    );
};

export default HTMLCategory;
