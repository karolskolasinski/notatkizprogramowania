import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Root.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Contents from './contents/Contents';
import categories from '../db/categories.json';
import { createLazyElement } from './utils';

const Root = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Contents />} />

                {categories.map(({ filePath, path }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}

                <Route path="*" element={<h1>NO MATCH</h1>} />
            </Routes>
            <Footer />
        </>
    );
};

export default Root;
