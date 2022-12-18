import React, { useEffect } from 'react';
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
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>async/await, then, callback</h1>
                <pre className={'line-numbers language-js'}>
                    <code>
{`(async function () {
    await pobierz();
    await wyślij();
    await zrobCosJeszcze();
}());

pobierz()
    .then(function () {
        return wyslij();    
    })
    .then(function () {
        return zrobCosJeszcze();
    });
    
pobierz(function () {
    wyslij(function() {
        zrobCosJeszcze(function() {
            // sth to do
        });
    });
});`}
                    </code>
                </pre>
            </article>
        </>
    );
};

export default AsyncAwait;
