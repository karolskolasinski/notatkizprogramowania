import React from 'react';
import categories from '../db/categories.json';
import { Link } from 'react-router-dom';

const Index = () => (
    <>
        {categories.map(({ title, to }) => <Link to={to} key={to}>{title}</Link>)}
    </>
);

export default Index;
