import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-javascript.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const SetTimeoutSetInterval = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className='cover-wrapper'>
                <img src={cover} alt='html cover' className='cover' />
            </div>
            <article className='article article-content'>
                <h1>setTimeout() / setInterval()</h1>
                <p className='snippets'><span>setTimeout()</span> jest wykonywany dopiero po określonym czasie: </p>
                <pre className='line-numbers language-js'>
                        <code>
{`function welcome(name) {
    console.log(name + ", welcome to our website! You have a special discount today!");
}

let timerId = setTimeout(welcome, 5000, "Mary")

clearTimeout(timerId);`}
                    </code>
                </pre>

                <p className='snippets'>
                    <span>setInterval()</span> wywołuje funkcję ponownie i ponownie po określonym czasie:
                </p>
                <pre className='line-numbers language-js'>
                        <code>
{`function alarm(time) {
    console.log("Wake up! It's " + time + " o'clock!");
}

const intervalId = setInterval(alarm, 3000, 8);

clearInterval(intervalId);`}
                    </code>
                </pre>

                <p>Obie funkcje przyjmują te parametry:</p>
                <ul>
                    <li>funkcja do wykonania</li>
                    <li>interwał (w ms), w którym funkcja będzie uruchamiana za każdym razem</li>
                    <li>argumenty funkcji do wywołania</li>
                </ul>

                <p className='snippets'>
                    Po uruchomieniu licznika czasu przeglądarka wykonuje zadanie w nieskończoność, a tym samym zużywa
                    zasoby. Aby tego uniknąć, powinniśmy zatrzymać niepotrzebne timery. Uruchamiasz
                    timer <span>setTimeout()</span> lub <span>setInterval()</span>, a aby go zatrzymać, powinieneś użyć
                    odpowiednio <span>clearTimeout()</span> lub <span>clearInterval()</span>. W takim przypadku
                    powinieneś znać identyfikator timera, który chcesz zatrzymać. <span>setTimeout()</span> i
                    <span>setInterval()</span> zwraca identyfikator timera, który został utworzony.
                </p>
            </article>
        </>
    );
};

export default SetTimeoutSetInterval;
