import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-java.webp';
import modifiers from '../../../img/java/modifiers.png';
import protectedImg from '../../../img/java/protected_m.png';
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


                <p><h2>4 Modyfikatory dostępu:</h2></p>
                <ul className={'snippet-list'}>
                    <li><span>public</span> : dostępny z każdego miejsca</li>
                    <li><span>protected</span> : dostępne dla klas z tego samego pakietu i klas rozszerzających</li>
                    <li><span>default</span> : dostępne dla klas z tego samego pakietu (= package-private)</li>
                    <li><span>private</span> : dostępne tylko dla samej klasy</li>
                </ul>


                <hr />

                <p><h2>Modyfikatory dla klas:</h2></p>
                <ul className={'snippet-list'}>
                    <li><span>public</span></li>
                    <li>brak ( <span>pakcage-private</span> ) - modyfikator domyślny</li>
                </ul>
                <p>Klasa nie mogła by być <span>private</span>, ponieważ nie było by do niej dostępu a jej
                    funkcjonalność mogła by wykonywać tylko ona sama.
                </p>

                <hr />

                <p><h2>Modyfikatory dla pól i metod:</h2></p>

                <div className="article-img-wrapper">
                    <img src={modifiers} alt={'jvm'} className={'article-img'} />
                </div>

                <span><i>*no modifier</i></span> = <span>package-private</span>


                <hr />


                <p><h1>public</h1></p>
                <p>
                    <span>public</span>
                    jest najszerszym poziomem widoczności – klasy, pola i metody oznaczone w ten sposób są
                    widoczne dla wszystkich innych klas.
                </p>


                <hr />

                <p><h1>protected</h1></p>
                <p>Drugi w kolejności – <span>protected</span> – jest dostępny dla klasy
                    zdefiniowanej w tej samej paczce oraz w klasach dziedziczących (extends) po klasie,
                    która zawiera pola czy metody oznaczone jako <span>protected</span>.
                </p>
                <ul>
                    <li>dostępność w tym samym pakiecie</li>
                    <li>dostępność w innym pakiecie poprzez <span>super</span>, pod warunkiem, że
                        klasa rozszerza główną klasę ze zmienną/metodą
                    </li>
                </ul>

                <div className="article-img-wrapper">
                    <img src={protectedImg} alt={'jvm'} className={'article-img'} />
                </div>

                <hr />

                <p><h1>no modifier = pakcage-private</h1></p>
                <p>Package, będący domyślnym poziomem widoczności nieposiadającym własnego
                    modyfikatora, ogranicza widoczność do klas z tej samej paczki.</p>
                <ul>
                    <li>dostępność <u>tylko</u> w tym samym pakiecie</li>
                    <li>nie ma znaczenia czy klasa rozszerza rozszerza główną klasę ze
                        zmienną/metodą
                    </li>
                </ul>

                <hr />

                <p><h1>private</h1></p>
                <p>Finalnie mamy <span>private</span> – czyli prywatne. Jak sama nazwa
                    wskazuje elementy z dostępem na poziomie prywatnym są widoczne tylko dla
                    struktur zdefiniowanych w tej samej klasie.
                </p>


                <hr />

                <iframe src={'https://www.youtube.com/embed/x3iFRehjpQk'} width={'100%'} height={'315'}
                    allowFullScreen title={'access modifiers'}
                    allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
                />
            </article>
        </>
    );
};

export default Types;
