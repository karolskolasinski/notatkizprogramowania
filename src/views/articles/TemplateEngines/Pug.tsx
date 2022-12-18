import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-template-engines.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Pug = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Pug in 5 minutes [tutorial]</h1>
                <a href="https://dev.to/jh3y/pug-in-5-minutes-272k">https://dev.to/jh3y/pug-in-5-minutes-272k</a>

                <hr />
                <h1>(double) Loop with "if" example</h1>

                <pre className={'line-numbers language-pug'}>
                    <code>
{`each tag in tags
    div.pt-5
        span.border.p-2='#' + tag
    each photo in photos
        if (photo.tags.includes(tag))
            div.image-gallery.d-inline
                a(href=photo.bigSrc title=photo.name)
                    img.p-3(src=photo.thumbSrc alt=photo.name)`}
                    </code>
                </pre>
            </article>
        </>
    );
};

export default Pug;
