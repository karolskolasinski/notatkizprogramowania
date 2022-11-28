import React from 'react';
import cover from '../../../img/cover/cover-css.webp';

const Properties = () => {
    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>CSS Reference</h1>
                <a href={'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference'}
                    className={'article-link'}>
                    https://developer.mozilla.org/en-US/docs/Web/CSS/Reference</a>
                <hr/>
                <h1>CSS Properties</h1>
                <a href={'https://qhmit.com/css/properties/'}
                    className={'article-link'}>
                    https://qhmit.com/css/properties/</a>
            </article>
        </>
    );
};

export default Properties;
