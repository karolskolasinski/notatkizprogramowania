import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-javascript.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Defer = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Connecting JS to HTML</h1>
                <p>Niektórzy programiści dołączają pliki JavaScript nie przed tagiem
                    zamykającym <span className={'snippet'}>&lt;/body&gt;</span>, ale wewnątrz <span
                        className={'snippet'}>&lt;head&gt;</span>. Ten typ
                    połączenia również działa; więc czy pozycja ma znaczenie, a jeśli tak, to gdzie lepiej jest
                    zaimplementować tag <span className={'snippet'}>&lt;script&gt;</span>?
                </p>
                <p>W rzeczywistości istnieje różnica. Zalecane jest włączenie JavaScript na końcu
                    sekcji <span className={'snippet'}>&lt;body&gt;</span>, ponieważ ten typ połączenia pozwala
                    przyspieszyć ładowanie
                    strony. Strony internetowe są ładowane w kolejności określonej w znacznikach HTML: najpierw
                    przeglądarka analizuje elementy wewnątrz tagu <span className={'snippet'}>&lt;head&gt;</span>, a
                    następnie
                    przechodzi do <span className={'snippet'}>&lt;body&gt;</span>. Jeśli użyjesz połączenia w
                    tagu <span className={'snippet'}>&lt;head&gt;</span>, zawartość strony nie będzie widoczna w
                    przeglądarce do momentu
                    załadowania pliku JavaScript. Sytuacja może stać się krytyczna w przypadku większych plików.
                    Priorytetem jest tutaj pokazanie podstawowych informacji zamieszczanych na stronie internetowej, tak
                    aby użytkownik nie siedział długo patrząc na pusty ekran monitora.
                </p>
                <pre className={'line-numbers language-html'}>
                    <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Connecting JavaScript to HTML</title>
    <script src="./assets/js/main.js"></script>
    // ❌
</head>

<body>
    <script src="./assets/js/main.js"></script>
    // ✔️
</body>

</html>`}
                    </code>
                </pre>

                <hr />

                <h1>defer</h1>
                <iframe src={'https://www.youtube.com/embed/BMuFBYw91UQ'} width={'100%'} height={'315'}
                    frameBorder={'0'} allowFullScreen title={'access modifiers'}
                    allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
                />

                <hr/>

                <h1>DOMContentLoaded vs load</h1>
                <iframe src={'https://www.youtube.com/embed/8rc0zaTn2ew'} width={'100%'} height={'315'}
                    frameBorder={'0'} allowFullScreen title={'access modifiers'}
                    allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
                />
            </article>
        </>
    );
};

export default Defer;
