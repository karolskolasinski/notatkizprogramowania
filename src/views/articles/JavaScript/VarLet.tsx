import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-javascript.webp';
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
                <h1> var vs let</h1>
                <p>We wcześniejszych wersjach JavaScript zmienne były deklarowane jako <span
                    className={'snippet'}>var</span>. Jednak
                    dzisiaj ta metoda jest uważana za przestarzałą. Różnice:
                </p>
                <ol className={'snippet-list'}>
                    <li>Zmienna zadeklarowana za pomocą <span>var</span> jest dostępna wewnątrz całej funkcji i
                        posiada <b>function scope</b>. Natomiast <span>let</span> ma <b>block scope</b>, więc
                        zmienne zadeklarowane za jego pomocą są dostępne wewnątrz bloku kodu między nawiasami
                        klamrowymi.
                    </li>
                    <pre className={'line-numbers language-js'}>
                    <code>
{`function someFunc() {
    var i;
    for (i = 0; i &lt;= 5; i++) {
        var someVar = i * i;
    }
    
    console.log(i);
    console.log(someVar);
}
    
someFunc(); // 6
            // 25`}
                    </code>
                </pre>

                    <pre className={'line-numbers language-js'}>
                    <code>
{`function someFunc() {
    let i;
    for (i = 0; i &lt;= 5; i++) {
        let someVar = i * i;
    }
    
    console.log(i);
    console.log(someVar);
}
    
someFunc(); // ReferenceError: someVar is not defined`}
                    </code>
                </pre>

                    <li>Zmienne var możemy ponownie deklarować, co jest niemożliwe w przypadku let i const.</li>
                    <pre className={'line-numbers language-js'}>
                    <code>
{`var name = "Marcin";
var name = "Karol";
console.log(name); //Karol

let name = "Marcin";
let name = "Karol"; //błąd = Identifier "name" has already been declared
console.log(name);`}
                    </code>
                </pre>

                    <li>Kolejna różnica między starszą deklaracją a jej młodszymi braćmi to tak
                        zwany <b>hoisting</b>. JavaScript lubi pomagać programiście. Jednym z takich przypadków
                        pomocy jest niewidoczne dla programisty wynoszenie deklaracji funkcji i zmiennych na
                        początek danego zasięgu (kodu lub funkcji). Deklaracja zmiennej var (bez wartości) wynoszona
                        jest automatycznie na początek danego kodu (a w zasadzie na początek danego zakresu - np. na
                        początek danej funkcji). W przypadku let/const hoisting także istnieje, ale nie jesteśmy w
                        stanie używać zmiennych przed ich zadeklarowaniem.
                    </li>
                    <pre className={'line-numbers language-js'}>
                    <code>
{`var a; //js przeniósł tutaj deklarację zmiennej ale bez jej wartości!
console.log(a); //wypisze undefined, ale błędu nie ma

var a = 20;`}
                    </code>
                </pre>

                    <pre className={'line-numbers language-js'}>
                    <code>
{`console.log(a); //Error: Cannot access "a" before initialization

let a = 20;`}
                    </code>
                </pre>

                    <li>Ostatnią różnicą - dość mało znaną - jest to, że deklarując zmienną globalną var (poza
                        ciałem funkcji), dodawana jest ona jako właściwość obiektu window. W przypadku let nic
                        takiego się nie dzieje:
                    </li>
                    <pre className={'line-numbers language-js'}>
                    <code>
{`var a = 20;
let b = 30;

console.log(window.a); //20
console.log(window.b); //undefined`}
                    </code>
                </pre>
                </ol>
            </article>
        </>
    );
};

export default VarLet;
