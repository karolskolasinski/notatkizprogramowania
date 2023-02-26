import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-dev.webp';
import urlStructure from '../../../img/dev/url-structure.png';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const URL = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Podstawowa struktura adresów URL</h1>
                <p>Oto przykład adresu URL:</p>
                <div className={'article-img-wrapper'}>
                    <img src={urlStructure} alt={'padding and margin'} className={'article-img article-img-desktop'} />
                </div>
                <p>Adres URL ma określoną strukturę opartą na następującym szablonie:</p>
                <pre className={'line-numbers language-html'}>
                        <code>
{`<protocol>://<login>:<password>@<host>:<port>/<path>?<request parameters>#<anchor>`}
                        </code>
                </pre>

                <p>Przyjrzyjmy się teraz bardziej szczegółowo temu szablonowi:</p>
                <ul className={'terminal-list'}>
                    <li>
                        <span>&lt;protocol&gt;</span> to sposób wymiany danych z zasobem, prawdopodobnie najlepiej znasz
                        protokoły HTTP i HTTPS, ale
                        są też inne
                    </li>
                    <li>
                        <span>&lt;login&gt;</span> i <span>&lt;password&gt;</span> są prefiksami, które w razie potrzeby
                        przesyłają dane uwierzytelniające dla niektórych protokołów
                    </li>
                    <li>
                        <span>&lt;host&gt;</span> to nazwa domeny lub adres IP, pod którym znajduje się witryna (domena
                        to nazwa witryny, jej adres w sieci globalnej)
                    </li>
                    <li>
                        <span>&lt;port&gt;</span> jest wymagany do połączenia w ramach określonego hosta. Oficjalny port
                        dla połączeń HTTP to 80, a alternatywny to 8080, ale możliwe jest również użycie innych portów.
                        Domyślne ustawienie protokołu HTTPS to 443
                    </li>
                    <li>
                        <span>&lt;path&gt;</span> wskazuje dokładny adres konkretnego pliku lub strony
                    </li>
                    <li>
                        <span>&lt;request parameters&gt;</span> to parametry przesyłane do serwera. W zależności od
                        parametrów żądania witryna może nieznacznie zmienić sposób wyświetlania. Na przykład możliwe
                        jest sortowanie pozycji listy w innej kolejności
                    </li>
                    <li>
                        <span>&lt;anchor&gt;</span> umożliwia połączenie się z określoną częścią strony internetowej lub
                        dokumentu
                    </li>
                </ul>
            </article>
        </>
    );
};

export default URL;
