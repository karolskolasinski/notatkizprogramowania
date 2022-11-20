import React, { useEffect } from 'react';
import semanticImg from '../../img/html/semantic.jpg';
import cover from '../../img/cover/cover-html.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const HTMLTemplate = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Uniwersalny template</h1>
                <pre className={'line-numbers language-html'}>
                    <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Notatki z programowania</title>
    <meta content="before.jpg" property='og:image'>
    <meta name="description" content="notatki z programowania [... 💾]">
    <meta name="keywords" content="programowanie, java, html, css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800" rel="stylesheet">
    <style>html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
    blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins,
    kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd,
    ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu,
    nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    </style>
</head>

<body>
    <p>Paragraph 1</p>
    
    <script src="function.js" type="text/javascript"></script>
</body>
</html>`}</code>
                </pre>

                <h3>Opis:</h3>
                <ul>
                    <li>
                        <span className={'snippet'}>&lt;!DOCTYPE html&gt;</span> - dokument w formacie HTML5. element
                        ten określa typ bieżącego dokumentu: DTD (Document Type Definition). Konieczne jest, aby
                        przeglądarka rozumiała, według jakiego standardu HTML ma wyświetlać stronę internetową. Jak
                        widać, jest to jeden z tagów, które nie są sparowane
                    </li>
                    <li>
                        <span className={'snippet'}>&lt;html&gt;</span> - znacznik wskazuje, że jest to dokument HTML
                    </li>
                    <li>
                        <span className={'snippet'}>lang="en"</span> - używany przez stronę język
                    </li>
                    <li>
                        <span className={'snippet'}>&lt;head&gt;</span> - znacznik jest przeznaczony do przechowywania
                        elementów, które pomagają przeglądarkom i wyszukiwarkom w pracy z danymi
                    </li>
                    <li>
                        <span className={'snippet'}>charset="utf-8"</span> - zestaw znaków używany na stronie, sposób
                        kodowania znaków (zapis index.html bez BOM). Jeśli atrybut nie zostanie określony, niektóre
                        przeglądarki mogą wyświetlać niejasne znaki zamiast tekstu
                    </li>
                    <li>
                        <span className={'snippet'}>name="description"</span> - opis strony w wyszukiwarce (150 - 160
                        znaków)
                    </li>
                    <li>
                        <span className={'snippet'}>name="keywords"</span> - słowa kluczowe
                    </li>
                    <li>
                        <span className={'snippet'}>http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"</span> -
                        prawidłowe wyświetlanie w przeglądarkach IE
                    </li>
                    <li>dołączając skrypty w HTML4, musieliśmy im ustawiać atrybut <span
                        className={'snippet'}>type="text/javascript"</span>:
                        <pre className="line-numbers"><code className="language-html">{`<script src="super-script.js"
                            type="text/javascript"></script>`}</code></pre> W nowym HTML atrybut ten domyślnie ma taką
                        wartość więc nie musimy go podawać.
                    </li>
                </ul>
                <hr />

                <h1>Semantic HTML</h1>
                <p>A semantic element clearly describes its meaning to both the browser and the developer.</p>
                <div className={'article-img-wrapper'}>
                    <img src={semanticImg} alt={'HTML Semantic'} className={'article-img'} />
                </div>
                <h4>Źródło:</h4>
                <a href={'https://internetingishard.netlify.app/html-and-css/semantic-html/index.html#summary'}
                    className={'article-link'}>
                    https://internetingishard.netlify.app/html-and-css/semantic-html/index.html#summary</a>
            </article>
        </>
    );
};

export default HTMLTemplate;
