import React, {useEffect} from 'react';
import cover from '../../../img/cover/cover-javascript.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const AsyncAwait = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'}/>
            </div>
            <article className={'article article-content'}>
                <h1>async / await</h1>
                <ul>
                    <li>callback hell:</li>
                    <pre className={'line-numbers language-js'}>
                        <code>
{`get(function () {
    send(function() {
        notify(function() {
            // sth to do
        });
    });
});`}
                        </code>
                    </pre>

                    <li>then:</li>
                    <pre className={'line-numbers language-js'}>
                        <code>
{`get()
    .then(function () {
        return send();    
    })
    .then(function () {
        return notify();
    });`}
                        </code>
                    </pre>

                    <li>async / await:</li>
                    <pre className={'line-numbers language-js'}>
                        <code>
{`(async function () {
    await get();
    await send();
    await notify();
}());`}
                        </code>
                    </pre>
                </ul>
            </article>
        </>
    );
};

export default AsyncAwait;
