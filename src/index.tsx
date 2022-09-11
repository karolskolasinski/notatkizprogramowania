import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contents from './views/contents/Contents';
import categories from './db/categories.json';
import { createLazyElement } from './views/utils';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Contents />} />

                {categories.map(({ filePath, path }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}

                <Route path="*" element={<h1>NO MATCH</h1>} />
            </Routes>
            <Footer />
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
