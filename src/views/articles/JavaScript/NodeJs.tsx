import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-javascript.webp';
import theNodeJsSystem from '../../../img/javascript/the-node.js-system.png';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const VarLet = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Pętla zdarzeń</h1>
                <strong>Przykład operacji blokowania</strong>
                <pre className={'line-numbers language-js'}>
                    <code>
{`let loop = (i, max) => {
    while (i < max) i++
        return i;
}

// This operation will block Node.js
// Because, it's CPU-bound
// You should be careful about this kind of code
loop(0, 1e+12)`}
                    </code>
                </pre>

                <strong>Nieblokujący przykład operacji we / wy</strong>

                <pre className={'line-numbers language-js'}>
                    <code>
{`let i = 0

const step = max => {
    while (i < max) i++
        console.log('i = %d', i)
}

const tick = max => process.nextTick(step, max)

// this will postpone tick run step's while-loop to event loop cycles
// any other IO-bound operation (like filesystem reading) can take place
// in parallel
tick(1e+6)
tick(1e+7)

console.log('this will output before all of tick operations. i = %d', i)
console.log('because tick operations will be postponed')

tick(1e+8)`}
                    </code>
                </pre>

                <div className={'article-img-wrapper'}>
                    <img src={theNodeJsSystem} alt={'padding and margin'} className={'article-img'} />
                </div>

                <p>Mówiąc prościej, Pętla zdarzeń jest jednowątkowym mechanizmem kolejki, który wykonuje kod
                    związany z procesorem do końca jego wykonania oraz kod związany z operacjami we / wy w sposób
                    nieblokujący.</p>

                <hr />

                <h1>Uwagi dotyczące wydajności</h1>
                <p>Operacje nieblokujące nie blokują kolejki i nie wpływają na wydajność pętli. Jednak operacje
                    związane z procesorem zablokują kolejkę, dlatego należy zachować ostrożność, aby nie wykonywać
                    operacji związanych z procesorem w kodzie Node.js. Node.js nieblokuje We / Wy, ponieważ odciąża
                    pracę do jądra systemu operacyjnego, a gdy operacja We / Wy dostarcza dane ( jako zdarzenie ),
                    powiadomi Twój kod o dostarczonych wywołaniach zwrotnych.</p>
            </article>
        </>
    );
};

export default VarLet;
