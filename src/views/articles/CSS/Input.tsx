import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-css.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const List = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className='cover-wrapper'>
                <img src={cover} alt='css cover' className='cover' />
            </div>

            <article className='article article-content'>
                <h1>Input</h1>

                <h4 className='pt1'>Pure CSS Custom Checkbox Style</h4>
                <a href='https://moderncss.dev/pure-css-custom-checkbox-style/' className='article-link'>
                    https://moderncss.dev/pure-css-custom-checkbox-style/
                </a>
            </article>
        </>
    );
};

export default List;
