import React from 'react';
import cover from '../../../img/cover/cover-css.webp';
import cheatSheetPl from '../../../pdf/css-cheat-sheet-pl.pdf';
import cheatSheetEnLight from '../../../pdf/css-selectors-cheat-sheet-light.pdf';
import cheatSheetEnDark from '../../../pdf/css-selectors-cheat-sheet-dark.pdf';

const CheatSheets = () => {
    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <iframe src={cheatSheetPl} title="cheat sheet pl" className={'pdf'} />
                <iframe src={cheatSheetEnLight} title="cheat sheet en light" className={'pdf'} />
                <iframe src={cheatSheetEnDark} title="cheat sheet en dark" className={'pdf'} />
            </article>
        </>
    );
};

export default CheatSheets;
