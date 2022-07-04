import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Root.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Index from './Index';
import categories from '../db/categories.json';
import { createLazyElement } from './utils';

const Root = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Index />} />

                {categories.map(({ filePath, path }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}

                <Route path="*" element={<h1>NO MATCH</h1>} />
            </Routes>
            <Footer />
        </>
    );
};

export default Root;
