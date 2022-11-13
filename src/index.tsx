import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import categories from './db/categories.json';
import { createLazyElement } from './views/utils';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<main className="main">
                    <article className={'article'}>
                        {categories.map(({ title, to, cover }) =>
                            <Link to={to} key={to}>
                                <div className={'category-wrapper'}>
                                    <div className={'category'}
                                        style={{ backgroundImage: `url(${require(`${cover}`)})` }} />
                                    <span className={'title bold'}>{title}</span>
                                </div>
                            </Link>
                        )}
                    </article>
                </main>} />

                {categories.map(({ filePath, path }) =>
                    <Route path={path} element={createLazyElement(filePath)} key={path} />)}

                <Route path="*" element={<main className={'main main-404'}><h1>404</h1></main>} />
            </Routes>
            <Footer />
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
