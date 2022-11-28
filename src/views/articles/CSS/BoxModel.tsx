import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-css.webp';
import paddingMarginImg from '../../../img/css/padding-margin.png';
import borders from '../../../img/css/borders.png';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const BoxModel = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>

                <h1>padding & margin</h1>
                <div className={'article-img-wrapper'}>
                    <img src={paddingMarginImg} alt={'padding and margin'} className={'article-img'} />
                </div>
                <p>Istnieją cztery właściwości do ustawiania margin / padding dla każdej strony elementu: górny, prawy,
                    dolny, lewy. Definicje można podać w dowolnej jednostce CSS (px, em, %). Zwróć uwagę, że w razie
                    potrzeby możesz również użyć ujemnych wartości dla marginesów.</p>
                <ul className={'snippet-list'}>
                    <li><span>padding: 2px 5px 10px 5px</span> 4 wartości: boki elementu w kolejności: góra, prawo, dół,
                        lewo; to znaczy zgodnie z ruchem wskazówek zegara
                    </li>
                    <li><span>padding: 2px 5px 10px</span> 3 wartości: kolejność to góra, następnie jedna właściwość dla
                        prawej i lewej strony, a następnie dół
                    </li>
                    <li><span>padding: 2px 5px</span> 2 wartości: najpierw jedna właściwość jest przypisywana do góry i
                        do dołu, a następnie druga jest ustawiana dla prawej i lewej strony
                    </li>
                    <li><span>padding: 2px</span> 1 wartość oznacza, że pojedyncza właściwość dotyczy każdej strony</li>
                </ul>

                <p>Użycie padding:</p>
                <ul>
                    <li>Chcesz zwiększyć rozmiar elementu. Wypełnienie zwiększy rozmiar, aby pomieścić lukę.</li>
                    <li>Element musi mieć tło w utworzonej luce.</li>
                    <li>Potrzebujesz trochę miejsca wokół treści (patrz punkt 2 margin).</li>
                </ul>

                <p>Użycie margin:</p>
                <ul className={'snippet-list'}>
                    <li>Musisz wyśrodkować element. Jeśli ten element ma stałą szerokość, zostanie wyśrodkowany w
                        poziomie przez <span>margin: auto</span>. Będzie działać tylko wtedy, gdy ustawiona jest
                        szerokość bloku.
                    </li>
                    <li>Konieczne jest wyróżnienie niektórych treści poprzez umieszczenie ich osobno, tak aby inne
                        elementy jej nie dotykały.
                    </li>
                </ul>

                <hr />

                <h1>border</h1>
                <div className={'article-img-wrapper'}>
                    <img src={borders} alt={'borders'} className={'article-img'} />
                </div>
                <pre className={'line-numbers language-css'}>
                    <code>
{`p {
    border: 2px solid grey;
}`}
                    </code>
                </pre>
            </article>
        </>
    );
};

export default BoxModel;
