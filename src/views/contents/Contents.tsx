import React from 'react';
import categories from '../../db/categories.json';
import { Link } from 'react-router-dom';
import './Contents.css';

const Contents = () => (
    <main className="main">
        <article className={'article'}>
            {categories.map(({ title, to, cover }) =>
                <Link to={to} key={to}>
                    <div className={'category-wrapper'}>
                        <div className={'category'} style={{ backgroundImage: `url(${require('../../' + cover)})` }} />
                        <span className={'title'}>{title}</span>
                    </div>
                </Link>
            )}
        </article>
    </main>
);

export default Contents;
