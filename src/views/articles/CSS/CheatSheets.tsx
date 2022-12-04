import React from 'react';
import cover from '../../../img/cover/cover-css.webp';
// @ts-ignore
import pdf from '../../../pdf/css-cheat-sheet-pl.pdf';

const CheatSheets = () => {
    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <iframe src={pdf} className={'pdf'}/>
            </article>
        </>
    );
};

export default CheatSheets;
