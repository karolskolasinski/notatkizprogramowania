import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-css.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const BoxModel = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>

            <article className={'article article-content'}>
                <h1>Box Model</h1>
                <p>...</p>
            </article>
        </>
    );
};

export default BoxModel;
