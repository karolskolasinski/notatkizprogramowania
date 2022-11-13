import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className={'header'}>
                <nav>
                    <Link to={'/'} className={'header-title bold'}>
                        notatki
                        <span className={'header-accent'}>z</span>
                        programowania</Link>
                </nav>
            </header>

        </>
    );
};

export default Header;
