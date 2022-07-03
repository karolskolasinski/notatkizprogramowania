import React from 'react';
import './Header.css';
import { IoMenuOutline, /*IoCloseOutline*/ } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className={'header'}>
                <Link to="/" >INDEX</Link>
                <Link to="/html-category" >HTML</Link>
            </header>
            <nav className={'mobile-nav-wrapper'}>
                <IoMenuOutline className={'mobile-nav'} />
            </nav>
        </>
    );
};

export default Header;
