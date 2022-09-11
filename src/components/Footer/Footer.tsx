import React from 'react';
import './Footer.css';
import github from '../../img/github-original.svg';
import linkedin from '../../img/linkedin-original.svg';

const Footer = () => (
    <footer className="footer">
        <span>2022 © Created by: <a href={'https://github.com/karolskolasinski'}>karolskolasinski</a></span>
        <div className={'footer-img-wrapper'}>
            <a href={'https://github.com/karolskolasinski'} title={'GitHub'}>
                <img src={github} alt={'github'} className={'footer-img'} />
            </a>

            <a href={'https://www.linkedin.com/in/karolskolasinski/'} title={'LinkedIn'}>
                <img src={linkedin} alt={'linkedin'} className={'footer-img'} />
            </a>
        </div>
    </footer>
);

export default Footer;