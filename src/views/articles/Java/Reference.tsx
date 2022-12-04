import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-java.webp';
import reference from '../../../img/java/reference.png';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Types = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Referencja</h1>
                - to zmienna obiektowa, która wskazuje (odwołuje się) do obiektu.

                <div className="article-img-wrapper">
                    <img src={reference} alt={'assignment'} className={'article-img'} />
                </div>

                <p>Możemy teraz wywoływać metody klasy <span className={'snippet'}>String</span> dla tego obiektu
                    (String "rower"), zarówno za pośrednictwem zmiennej <span className={'snippet'}>a</span> jak i <span
                        className={'snippet'}>b</span> - i będzie to miało dokładnie ten sam skutek. Koniec końców
                    metody te będą wywoływane na tym samym obiekcie klasy <span className={'snippet'}>String</span>.</p>
                <p>Zmienna obiektowa nie jest obiektem, tylko referencją do obiektu. Wartość każdej zmiennej obiektowej
                    jest referencją do obiektu, który jest przechowywany gdzieś indziej. Wartość zwracana przez
                    operator <span className={'snippet'}>new</span> też jest referencją. Instrukcja typu:</p>

                <pre className={'line-numbers language-js'}>
                    <code>
{`Date deadline = new Date();`}
                    </code>
                </pre>

                <p>składa się z dwóch części. Wyrażenie <span className={'snippet'}>new Date();</span> tworzy obiekt
                    typu <span className={'snippet'}>Date</span>, a jego wartością jest referencja do tego nowo
                    utworzonego
                    obiektu.</p>
                <p>Referencja zostaje zapisana w zmiennej <span className={'snippet'}>deadline</span>. Aby zaznaczyć, że
                    zmienna obiektowa nie odwołuje się do żadnego obiektu, trzeba jej wartość ustawić na <span
                        className={'snippet'}>null</span>, bo zmienne obiektowe nie są automatycznie inicjalizowane
                    wartością <span className={'snippet'}>null</span>.</p>

                <hr />

                <h1>String Pool</h1>
                <p>W Javie wszystkie obiekty przechowywane są w pamięci w stercie pamięci (<b>Memory Heap</b>). To na
                    niej działa Garbage Collector i jeśli dostaniemy kiedyś <span
                        className={'snippet'}>OutOfMemoryExcception</span> to znaczy, że zbytnio zaszaleliśmy z
                    tworzeniem nowych bytów i zapełniliśmy całą stertę szybciej niż zwalnialiśmy miejsce. W tej stercie
                    znajduje się wydzielony obszar pamięci przeznaczony do przechowywania Stringów, których to w
                    programie potrafi być <u>bardzo, bardzo dużo</u> - dlatego też są obsługiwane w specjalny sposób.
                    Właśnie do tego słuzy <b>String Pool</b>. </p>

                <p>Za każdym razem, gdy stworzymy nowego Stringa w ten sposób <span className={'snippet'}>String name = "John"</span>,
                    to ów String jest tworzony w <b>String Pool</b> i tam jest przechowywany. Jakiś czas później, przy
                    tworzeniu innego Stringa <span className={'snippet'}>String anotherName = "John"</span> nie tworzy
                    się kolejny wyraz "John" w pamięci, lecz oba wskazują na ten sam element w <b>String Pool</b>.
                    Dlatego też w tym przypadku porówanie <span className={'snippet'}>name == anotherName</span> zwróci
                    nam <span className={'snippet'}>true</span>, bo w tym wypadku obie referencje wskazują na ten sam
                    obiekt.</p>

                <p>Sprawy mają się inaczej, gdy stworzymy Stringa w ten sposób <span className={'snippet'}>String yetAnotherName = new String("John")</span>.
                    Wówczas jest tworzony za każdym razem nowy obiekt w <b>Memory Heap</b>, a dopiero on wskazuje na
                    obiekt w <b>String Pool</b>. Dlatego porówanie <span
                        className={'snippet'}>yatAnotherName == name</span> zwróci <span
                        className={'snippet'}>false</span>, bo fizycznie są to referencje do dwóch różnych obiektów.
                    Dlatego też po pierwsze nie powinno się robić nigdy <span
                        className={'snippet'}>new String("...")</span>, bo tworzy to dwa obiekty (w <b>Memory Heap</b> i
                    opcjonalnie w <b>String Pool</b>, zamiast tylko w <b>String Pool</b>). Po drugie do porównywania
                    Stringów używamy metody <span className={'snippet'}>.equals</span> zamiast <span
                        className={'snippet'}>==</span>, gdyby właśnie ktoś przypadkiem stworzył tekst za pomocą <span
                        className={'snippet'}>new String</span>. Metoda <span
                        className={'snippet'}>.equals</span> porównuje faktyczne wartości (czyli w przypadku Stringów to
                    co jest w <b>String Pool</b>), a nie na co wskazuje referencja.</p>

                <hr />

                <h1>Immutable</h1>
                <p>W programowaniu istnieje ważna koncepcja zwana <b>Immutable</b> i oznacza, że obiekt zawsze
                    przechowuje te same wartości. Jeśli musimy zmodyfikować te wartości, powinniśmy utworzyć nowy
                    obiekt. Typowym przykładem jest klasa <b>String</b>. <b>Stringi</b> są niezmiennymi obiektami, więc
                    wszystkie operacje na nich generują nowy ciąg. Niezmienne typy umożliwiają pisanie programów z
                    mniejszą liczbą błędów.</p>
                <p>Klasa <span className={'snippet'}>Patient</span> nie jest niezmienna, ponieważ istnieje możliwość
                    zmiany dowolnego pola obiektu.</p>

                <pre className={'line-numbers language-js'}>
                    <code>
{`Patient patient = new Patient();

patient.name = "Mary";
patient.name = "Alice";`}
                    </code>
                </pre>
            </article>
        </>
    );
};

export default Types;
