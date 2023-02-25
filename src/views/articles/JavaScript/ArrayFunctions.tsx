import React, {useEffect} from 'react';
import cover from '../../../img/cover/cover-javascript.webp';
import pushPopUnshiftShift from '../../../img/javascript/push-pop-unshift-shift.png';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const ArrayFunctions = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'}/>
            </div>
            <article className={'article article-content'}>
                <h1>funkcje tablic</h1>
                <ul className={'snippet-list'}>
                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#merge">concat()</a>
                        </span> Scala co najmniej dwie tablice i zwraca nową tablicę.
                    </li>

                    <li>
                        <span>copyWithin()</span> Kopiuje część tablicy do innej lokalizacji w tej samej tablicy i
                        zwraca ją.
                    </li>

                    <li>
                        <span>entries()</span> Zwraca parę klucz / wartość Array Iteration Object.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#everysome">every()</a>
                        </span> Sprawdza, czy każdy element tablicy przechodzi test w funkcji testowej.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#fill">fill()</a>
                        </span> Wypełnij elementy tablicy wartością statyczną.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#filter">filter()</a>
                        </span> Tworzy nową tablicę ze wszystkimi elementami, które przeszły test w funkcji testowej.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#find">find()</a>
                        </span> Zwraca wartość pierwszego elementu w tablicy, który przeszedł test w funkcji testowej.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#findIndex">findIndex()</a>
                        </span> Zwraca indeks pierwszego elementu w tablicy, który przeszedł test w funkcji testowej.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#flat">flat()</a></span> Spłaszczanie
                        tablicy wielowymiarowej
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#forEach">forEach((value,
                            index, array) =&gt; {})</a>
                        </span> Wywołuje funkcję raz dla każdego elementu tablicy.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#Array.from">from()</a>
                        </span> Tworzy tablicę z obiektu.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#indexOf">includes()</a>
                        </span> Określa, czy tablica zawiera określony element.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#indexOf">indexOf()</a>
                        </span> Przeszukaj tablicę pod kątem elementu i zwraca jego pierwszy indeks.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#sprawdzanie">Array.isArray()</a>
                        </span> Określa, czy przekazana wartość jest tablicą.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#join">join()</a>
                        </span> Łączy wszystkie elementy tablicy w ciąg.
                    </li>

                    <li>
                        <span>keys()</span> Zwraca obiekt iteracji tablicy, zawierający klucze oryginalnej tablicy.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#indexOf">lastIndexOf()</a>
                        </span> Przeszukaj tablicę pod kątem elementu, zaczynając od końca i zwraca jego ostatni indeks.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#map">map()</a>
                        </span> Tworzy nową tablicę z wynikami wywołania funkcji dla każdego elementu tablicy.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#push-pop">pop()</a>
                        </span> Usuwa ostatni element z tablicy i zwraca ten element.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#push-pop">push()</a>
                        </span> Dodaje jeden lub więcej elementów na końcu tablicy i zwraca nową długość tablicy.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#reduce">reduce()</a>
                        </span> Zmniejsz wartości tablicy do jednej wartości (od lewej do prawej).
                    </li>

                    <li>
                        <span>reduceRight()</span> Zmniejsz wartości tablicy do jednej wartości (od prawej do lewej).
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#reverse">reverse()</a>
                        </span> Odwraca kolejność elementów w tablicy.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#unshift-shift">shift()</a>
                        </span> Usuwa pierwszy element z tablicy i zwraca ten element.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#slice">slice(start: number, end: number)</a>
                        </span> Zwraca tablicę zawierającą kopię elementów wyciętych z tablicy źródłowej. Indeksy mogą
                        być również ujemne. Jeśli określisz indeks ujemny w pierwszym parametrze, spowoduje to
                        przesunięcie końca sekwencji. Na przykład <span>slice(-4)</span> wyodrębni ostatnie cztery
                        elementy sekwencji. Możesz określić drugi indeks jako ujemny: będzie to również oznaczać
                        przesunięcie od końca sekwencji:
                    </li>
                    <pre className={'line-numbers language-js'}>
                        <code>
{`let fibNums = [0, 1, 1, 2, 3, 5, 8, 13, 21];

console.log(fibNums.slice(-4)); // [5, 8, 13, 21]
console.log(fibNums.slice(3, -2)); // [2, 3, 5, 8]`}
                        </code>
                    </pre>

                    <li>
                        <span>
                            <a
                                href="https://kursjs.pl/kurs/super-podstawy/tablice-tematy-dodatkowe.php#everysome">some()</a>
                        </span> Sprawdza, czy którykolwiek z elementów tablicy przechodzi test w funkcji testowej.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#sort">sort()</a>
                        </span> Sortuje elementy tablicy.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#splice_delete">splice()</a>
                        </span> Dodaje / usuwa elementy z tablicy.
                    </li>

                    <li>
                        <span>toString()</span> Konwertuje tablicę na ciąg i zwraca wynik.
                    </li>

                    <li>
                        <span>
                            <a href="https://kursjs.pl/kurs/super-podstawy/tablice.php#unshift-shift">unshift()</a>
                        </span> Dodaje nowe elementy na początek tablicy i zwraca nową długość tablicy.
                    </li>

                    <li>
                        <span>values()</span> Zwraca obiekt iteracji tablicy, zawierający wartości oryginalnej tablicy.
                    </li>
                </ul>

                <hr/>

                <h1>push(), pop(), unshift(), shift()</h1>
                <div className={'article-img-wrapper'}>
                    <img src={pushPopUnshiftShift} alt={'event code, event key'}
                         className={'article-img article-img-desktop'}/>
                </div>
            </article>
        </>
    );
};

export default ArrayFunctions;
