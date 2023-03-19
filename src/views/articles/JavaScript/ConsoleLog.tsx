import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-javascript.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const ConsoleLog = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className='cover-wrapper'>
                <img src={cover} alt='html cover' className='cover' />
            </div>
            <article className='article article-content'>
                <h1>console.log();</h1>
                <pre className='line-numbers language-js'>
                    <code>
{`// Variables within the log 
console.log("%s is %d years old.", "John", 29);

// Variations of logs
console.log('Console Log');
console.info('Console Info');
console.debug('Console Debug');
console.warn('Console Warn');
console.error('Console Error');

// Optional Logs
let isItWorking = false
console.assert(isItWorking, "this is the reason why")

// Counting
for(i = 0; i < 10; i++) {
    console.count('Counter 1')
}
console.countReset('Counter 1')

// Style
console.log("%c This is red text on a blue background.", "color:red; background-color:blue")

// pokaże w konsoli ładnie sformatowaną tabelę
console.table([1,2,3,4,5]);

// grupowanie wielu tekstów (console.log etc) w konsoli w jedną grupę
console.group("Nazwa grupy");
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); // kończenie grupy

console.groupCollapsed("Nazwa grupy"); // grupa domyślnie zwinięta
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); // kończenie grupy

// czasami będziemy chcieli sprawdzić jak szybko wykona się nasz skrypt...
console.time("test 1"); // rozpoczyna test - zaczyna liczyć czas
for (let i = 0; i < 10000; i++) {
    ...
}
console.timeEnd("test 1"); // kończy test`}
                    </code>
                </pre>
            </article>
        </>
    );
};

export default ConsoleLog;
