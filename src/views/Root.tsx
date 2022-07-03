import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Root.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Index from './Index';
import categories from '../db/categories.json';

const Root = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Index />} />
                {categories.map((category, index) =>
                    <Route path={category.path + '/*'} element={createElement(category.fileName)} key={index} />)}
                <Route path="*" element={<h1>NO MATCH</h1>} />
            </Routes>
            <Footer />
        </>
    );
};

const createElement = (fileName: string) => {
    const LazyComponent = React.lazy(() => import('./categories/' + fileName));
    return <React.Suspense fallback={<h1>...loading...</h1>}>
        <LazyComponent />
    </React.Suspense>;
};

export default Root;
