import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Root.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Index from './Index';

const HTMLCategory = React.lazy(() => import('./categories/HTMLCategory'));
const CSSCategory = React.lazy(() => import('./categories/CSSCategory'));

const Root = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/html-category/*" element={<React.Suspense fallback={<h1>...</h1>}>
                    <HTMLCategory />
                </React.Suspense>} />
                <Route path="/css-category/*" element={<React.Suspense fallback={<h1>...</h1>}>
                    <CSSCategory />
                </React.Suspense>} />
                <Route path="*" element={<h1>NO MATCH</h1>} />
            </Routes>
            <Footer />
        </>
    );
};

export default Root;
