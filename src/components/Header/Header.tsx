import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className={'header'}>
                <Link to={'/'} className={'header-title'}>
                    notatki
                    <span className={'header-accent'}>z</span>
                    programowania</Link>
                <nav>
                    <Link to="/">INDEX</Link>
                    <Link to="/html-category">HTML</Link>
                </nav>
            </header>

        </>
    );
};

export default Header;
