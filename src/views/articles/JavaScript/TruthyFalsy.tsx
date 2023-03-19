import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-javascript.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const TruthyFalsy = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className='cover-wrapper'>
                <img src={cover} alt='html cover' className='cover' />
            </div>
            <article className='article article-content'>
                <h1>truthy / falsy</h1>
                <p>
                    Tworząc warunki, nie musimy porównywać ze sobą dwóch wartości. Wartością false staje się każda z
                    poniższych wartości. Są to tak zwane wartości falsy:
                </p>
                <pre className='line-numbers language-js'>
                    <code>
{`if (false) {...}
if (null) {...}
if (undefined) {...}
if (0) {...}
if (NaN) {...}
if ("") {...}
if (document.all) {...}`}
                    </code>
                </pre>

                <p>
                    Dla nas oznacza to tyle, że tworząc warunki możemy wykonywać kod w zależności od stanu danej
                    zmiennej, ale też wartości wpisanej ręcznie w nawias:
                </p>
                <pre className='line-numbers language-js'>
                    <code>
{`const a = 20;
const b = 0;
const c = null;

if (a) { //to się wykona bo a !== 0
    console.log("A ma wartość ", a);
}

if (b) { //to się nie wykona bo b === 0
    console.log("A ma wartość ", b);
}

if (c) { //to się nie wykona bo null
    console.log("A ma wartość ", c);
}

if (false) { //to się nie wykona bo false to false
    console.log("false ma wartość ", false);
}`}
                    </code>
                </pre>

                <p className='snippets'>
                    Każda inna wartość daje w rezultacie true. Możemy to sprawdzić konwertując dane wartości
                    na <span>Boolean</span>:
                </p>
                <pre className='line-numbers language-js'>
                    <code>
{`Boolean(false); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(0); //false
Boolean(NaN); //false
Boolean(""); //false
Boolean(document.all); //false

Boolean("Ala"); //true
Boolean(2); //true
Boolean(2-2); //false

const x;
Boolean(x); //false bo x nie ma wartości czyli undefined`}
                    </code>
                </pre>

                <p>Powyższe sprawia, że dość często spotkasz zapisy jak poniżej:</p>
                <pre className='line-numbers language-js'>
                    <code>
{`if (nr) { //kod się wykona jeżeli wartość liczby nr jest różna od falsy
    ...
}

const txt = "Ala ma kota";
if (txt.length) { //sprawdzam długość tekstu. Jeżeli większa od 0 to true
    ...
}

const tab = []
if (tab.length) { //podobnie sprawdzam długość tablicy
    ...
}`}
                    </code>
                </pre>
            </article>
        </>
    );
};

export default TruthyFalsy;
