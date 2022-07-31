import React from 'react';
import categories from '../../db/categories.json';
import { Link } from 'react-router-dom';
import './Contents.css';

const Contents = () => (
    <>
        <main className="main">
            {categories.map(({ title, to, img }) =>
                <Link to={to} key={to}>
                    <div className={'category'} style={{ backgroundImage: `url(${require('../../' + img)})` }}>
                        <span>{title}</span>
                    </div>
                </Link>
            )}
        </main>
    </>
);

export default Contents;
