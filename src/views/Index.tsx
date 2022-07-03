import React from 'react';
import categories from '../db/categories.json';
import { Link } from 'react-router-dom';

const Index = () => (
    <>
        {categories.map((category, index) => <Link to={category.path} key={index}>{category.title}</Link>)}
    </>
);

export default Index;
