import React, {useEffect} from 'react';
import cover from '../../../img/cover/cover-javascript.webp';
import eventCodeEventKey from '../../../img/javascript/event-code-event-key.png';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const EventListener = () => {
    useEffect(() => Prism.highlightAll(), []);
    const w3Link = 'https://www.w3.org/TR/uievents-code/#table-key-code-alphanumeric-writing-system';

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'}/>
            </div>
            <article className={'article article-content'}>
                <h1>keydown</h1>
                <pre className={'line-numbers language-js'}>
                    <code>
{`document.addEventListener("keydown", (event) => {
    if (event.code === "AltRight") {
        console.log(event);
    }
});`}
                    </code>
                </pre>

                <p>W tym kodzie napisaliśmy procedurę obsługi zdarzenia <span className={'snippet'}>keydown</span>,
                    które powinno nastąpić po naciśnięciu prawego klawisza <span className={'keyboard'}>Alt</span>. Aby
                    nasz program obsługi zdarzeń działał poprawnie, parametr <span
                        className={'snippet'}>event</span> został przekazany do funkcji (czasami jest po prostu
                    oznaczony literą <strong>e</strong>). Ten parametr jest odniesieniem do obiektu globalnego,
                    przeglądarka musi umieścić w nim wszystkie dane bieżącego zdarzenia. Rezultatem wykonania tych
                    wierszy kodu będzie wyjście do konsoli informacji, które zostały przekazane do <span
                        className={'snippet'}>event</span>.
                </p>

                <p>JS ma właściwość <span className={'snippet'}>event.code</span>, która pozwala rozpoznać wciśnięty
                    klawisz. Używaj:
                </p>

                <ul className={'snippet-list'}>
                    <li>
                        <span>event.code</span>, gdy <b>nie</b> zależy ci na wielkości liter
                    </li>
                    <li>
                        <span>event.key</span>, gdy zależy ci na wielkości liter. <span>event.key</span> jest również
                        przydatny, jeśli twoja aplikacja jest używana przez wielojęzycznych użytkowników, ponieważ w
                        przypadku niektórych układów <span>event.code</span> może wystąpić nieoczekiwany znak. Więcej
                        informacji na ten temat można znaleźć w witrynie <a className={'article-link'} href={w3Link}>World
                        Wide Web Consortium</a>.
                    </li>
                </ul>

                <div className={'article-img-wrapper'}>
                    <img src={eventCodeEventKey} alt={'event code, event key'}
                         className={'article-img article-img-desktop'}/>
                </div>
            </article>
        </>
    );
};

export default EventListener;
