import React from 'react';
import cover from '../../../img/cover/cover-template-engines.webp';
import czasyAngielskie from '../../../img/english/czasy-angielskie.jpg';
import englishTenses from '../../../img/english/english-tenses.jpg';

const EnglishTenses = () => {
    return (
        <>
            <div className='cover-wrapper'>
                <img src={cover} alt='english cover' className='cover' />
            </div>
            <article className='article article-content'>
                <h1>Czasy angielskie</h1>

                <h3>Zestawienie czasów angielskich</h3>
                <a href="https://www.ang.pl/gramatyka/czasy-angielskie/zestawienie-czasow"
                    className='article-link'>https://www.ang.pl/gramatyka/czasy-angielskie/zestawienie-czasow</a>

                <div className='article-img-wrapper'>
                    <img src={czasyAngielskie} alt='czasy angielskie'
                        className='article-img article-img-desktop' />
                </div>

                <div className='article-img-wrapper'>
                    <img src={englishTenses} alt='english tenses' className='article-img article-img-desktop' />
                </div>
            </article>
        </>
    );
};

export default EnglishTenses;
