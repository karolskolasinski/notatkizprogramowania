import React from 'react';
import cover from '../../../img/cover/cover-english.webp';
import czasyAngielskie from '../../../img/english/czasy-angielskie.jpg';
import englishTenses from '../../../img/english/english-tenses.jpg';

const EnglishTenses = () => {
    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Zestawienie czasów angielskich</h1>
                <a href="https://www.ang.pl/gramatyka/czasy-angielskie/zestawienie-czasow">https://www.ang.pl/gramatyka/czasy-angielskie/zestawienie-czasow</a>

                <div className={'article-img-wrapper'}>
                    <img src={czasyAngielskie} alt={'padding and margin'} className={'article-img'} />
                </div>

                <div className={'article-img-wrapper'}>
                    <img src={englishTenses} alt={'padding and margin'} className={'article-img'} />
                </div>
            </article>
        </>
    );
};

export default EnglishTenses;
