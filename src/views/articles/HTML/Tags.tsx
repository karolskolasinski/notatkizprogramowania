import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-html.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Tags = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Pełna lista tagów HTML</h1>
                <a href={'https://www.w3schools.com/tags/'}
                    className={'article-link'}>https://www.w3schools.com/tags/</a>

                <hr />

                <h1>Unpaired tags</h1>
                <p>Pierwszą rzeczą do powiedzenia o niesparowanych tagach jest to, że nie zawierają one treści.
                    Przeznaczone są do tworzenia graficznych elementów HTML lub symboli na stronie. Dlatego niesparowane
                    tagi HTML składają się tylko z tagów początkowych.</p>
                <h3 className={'pt1'}>HTML:</h3>
                <ul className={'snippet-list'}>
                    <li><span>&lt;br&gt;</span></li>
                    <li><span>&lt;hr&gt;</span></li>
                    <li><span>&lt;meta&gt;</span></li>
                </ul>
                <h3 className={'pt1'}>XHTML:</h3>
                <ul>
                    <li><span>&lt;br /&gt;</span></li>
                    <li><span>&lt;hr /&gt;</span></li>
                    <li><span>&lt;meta /&gt;</span></li>
                </ul>
                <h4 className={'pt1'}>Źródło:</h4>
                <a href={'https://info.sice.indiana.edu/~hrosenba/Demo/Demo.html#12'}
                    className={'article-link'}> https://info.sice.indiana.edu/~hrosenba/Demo/Demo.html#12</a>

                <hr />

                <h1>Elementy blokowe</h1>
                <ul className={'snippet-list'}>
                    <li><span>&lt;address&gt;</span> Contact information</li>
                    <li><span>&lt;article&gt;</span> Article content</li>
                    <li><span>&lt;aside&gt;</span> Aside content</li>
                    <li><span>&lt;blockquote&gt;</span> Long ("block") quotation</li>
                    <li><span>&lt;details&gt;</span> Disclosure widget</li>
                    <li><span>&lt;dialog&gt;</span> Dialog box</li>
                    <li><span>&lt;dd&gt;</span> Describes a term in a description list</li>
                    <li><span>&lt;div&gt;</span> Document division</li>
                    <li><span>&lt;dl&gt;</span> Description list</li>
                    <li><span>&lt;dt&gt;</span> Description list term</li>
                    <li><span>&lt;fieldset&gt;</span> Field set label</li>
                    <li><span>&lt;figcaption&gt;</span> Figure caption</li>
                    <li><span>&lt;figure&gt;</span> Groups media content with a caption
                        (see <span>&lt;figcaption&gt;</span>)
                    </li>
                    <li><span>&lt;footer&gt;</span> Section or page footer</li>
                    <li><span>&lt;form&gt;</span> Input form</li>
                    <li>
                        <span>&lt;h1&gt;</span>, <span>&lt;h2&gt;</span>, <span>&lt;h3&gt;</span>,
                        <span>&lt;h4&gt;</span>, <span>&lt;h5&gt;</span>, <span>&lt;h6&gt;</span> Heading levels 1-6
                    </li>
                    <li><span>&lt;header&gt;</span> Section or page header</li>
                    <li><span>&lt;hgroup&gt;</span> Groups header information</li>
                    <li><span>&lt;hr&gt;</span> Horizontal rule (dividing line)</li>
                    <li><span>&lt;li&gt;</span> List item</li>
                    <li><span>&lt;main&gt;</span> Contains the central content unique to this document</li>
                    <li><span>&lt;nav&gt;</span> Contains navigation links</li>
                    <li><span>&lt;ol&gt;</span> Ordered list</li>
                    <li><span>&lt;p&gt;</span> Paragraph</li>
                    <li><span>&lt;pre&gt;</span> Preformatted text</li>
                    <li><span>&lt;section&gt;</span> Section of a web page</li>
                    <li><span>&lt;table&gt;</span> Table</li>
                    <li><span>&lt;ul&gt;</span> Unordered list</li>
                </ul>
                <h4 className={'pt1'}>Źródło:</h4>
                <a href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements'}
                    className={'article-link'}>
                    https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements</a>

                <hr />

                <h1 className={'pt1'}>Elementy liniowe</h1>
                <p>Mogą zawierać tylko dane i inne elementy wbudowane. Wyjątkiem od tej reguły jest tag <span
                    className={'snippet'}>&lt;a&gt;</span>, który może również zawierać elementy blokowe. Przeglądarka
                    nie przerywa linii przed i po tagu. Elementy wbudowane są ściśle zawarte w tagach.
                </p>

                <ul className={'snippet-list'}>
                    <li>
                        <span>&lt;a&gt;</span> jest prawdopodobnie jednym z najważniejszych elementów HTML; jest
                        przeznaczony do tworzenia linków. Ten znacznik jest często używany z atrybutem <span>href</span>,
                        który wskazuje ścieżkę do pliku / strony internetowej, do której się odwołuje. Tekst zawinięty w
                        tym tagu jest podkreślony i wyróżniony kolorem. Po kliknięciu zostaniesz przeniesiony pod adres
                        określony w atrybucie <span>href</span>.
                    </li>
                    <li><span>&lt;abbr&gt;</span></li>
                    <li><span>&lt;acronym&gt;</span></li>
                    <li><span>&lt;audio&gt;</span> (if it has visible controls)</li>
                    <li><span>&lt;b&gt;</span> ten sparowany tag ustawia pogrubioną czcionkę dla każdego zawartego w nim
                        tekstu.
                    </li>
                    <li><span>&lt;bdi&gt;</span></li>
                    <li><span>&lt;bdo&gt;</span></li>
                    <li><span>&lt;big&gt;</span></li>
                    <li><span>&lt;br&gt;</span></li>
                    <li><span>&lt;button&gt;</span></li>
                    <li><span>&lt;canvas&gt;</span></li>
                    <li><span>&lt;cite&gt;</span></li>
                    <li><span>&lt;code&gt;</span></li>
                    <li><span>&lt;data&gt;</span></li>
                    <li><span>&lt;datalist&gt;</span></li>
                    <li><span>&lt;del&gt;</span></li>
                    <li><span>&lt;dfn&gt;</span></li>
                    <li><span>&lt;em&gt;</span></li>
                    <li><span>&lt;embed&gt;</span></li>
                    <li><span>&lt;i&gt;</span></li>
                    <li><span>&lt;iframe&gt;</span></li>
                    <li><span>&lt;img&gt;</span> korzystanie z atrybutów <span>srcset</span> i <span>size</span>:</li>
                    <pre className="line-numbers language-html">
                        <code>
{`<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-500.jpg"
     srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-500.jpg 500w,
             https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-1000.jpg 1000w"
     sizes="(min-width: 600px) 50vw, 100vw"
     alt="cat">`}
                        </code>
                    </pre>
                    <div className={'video-container'}>
                        <iframe src={'https://www.youtube.com/embed/2QYpkrX2N48'} width={'100%'} height={'315'}
                            frameBorder={'0'} allowFullScreen title={'srcset and sizes attributes'}
                            allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
                        />
                    </div>
                    <p className={'pb0'}><strong>Image spacing</strong> - gdy pod obrazkiem jest kilka dodatkowych
                        pixeli, należy dodać do obrazka właściwość CSS:</p>
                    <pre className="line-numbers language-css"><code>{`img {
    display: block;
}`}</code></pre>
                    <li><span>&lt;input&gt;</span></li>
                    <li><span>&lt;ins&gt;</span></li>
                    <li><span>&lt;kbd&gt;</span></li>
                    <li><span>&lt;label&gt;</span></li>
                    <li><span>&lt;map&gt;</span></li>
                    <li><span>&lt;mark&gt;</span></li>
                    <li><span>&lt;meter&gt;</span></li>
                    <li><span>&lt;noscript&gt;</span></li>
                    <li><span>&lt;object&gt;</span></li>
                    <li><span>&lt;output&gt;</span></li>
                    <li><span>&lt;picture&gt;</span></li>
                    <li><span>&lt;progress&gt;</span></li>
                    <li><span>&lt;q&gt;</span></li>
                    <li><span>&lt;ruby&gt;</span></li>
                    <li><span>&lt;s&gt;</span></li>
                    <li><span>&lt;samp&gt;</span></li>
                    <li><span>&lt;script&gt;</span></li>
                    <li><span>&lt;select&gt;</span></li>
                    <li><span>&lt;slot&gt;</span></li>
                    <li><span>&lt;small&gt;</span></li>
                    <li><span>&lt;span&gt;</span> w tym sparowanym tagu możesz zawijać tekst lub
                        jego część. Ten tag w żaden sposób nie wpływa na wyświetlanie tekstu. Prawdopodobnie masz
                        logiczne pytanie: dlaczego i w jakich sytuacjach używać tego tagu? Znacznik ten jest często
                        stosowany, gdy trzeba zmienić wygląd części tekstu przy użyciu CSS.
                    </li>
                    <li><span>&lt;strong&gt;</span></li>
                    <li><span>&lt;sub&gt;</span> ten znacznik służy do tworzenia tekstu indeksu
                        dolnego: to znaczy, że tekst wewnątrz tego sparowanego znacznika zostanie przesunięty w dół i
                        zmniejszony. Ten tag przydaje się, gdy musisz napisać wzór chemiczny.
                    </li>
                    <li><span>&lt;sup&gt;</span> ten tag definiuje tekst w indeksie górnym. Jest
                        podobny do poprzedniego, z tą różnicą, że
                        tekst zawarty w tym tagu zostanie przesunięty w górę. Dzięki niemu możesz wyświetlać
                        interesujące równania matematyczne na swojej stronie internetowej.
                    </li>
                    <li><span>&lt;svg&gt;</span></li>
                    <li><span>&lt;template&gt;</span></li>
                    <li><span>&lt;textarea&gt;</span></li>
                    <li><span>&lt;time&gt;</span></li>
                    <li><span>&lt;u&gt;</span></li>
                    <li><span>&lt;tt&gt;</span></li>
                    <li><span>&lt;var&gt;</span></li>
                    <li><span>&lt;video&gt;</span></li>
                    <li><span>&lt;wbr&gt;</span></li>
                </ul>
                <h4 className={'pt1'}>Źródło:</h4>
                <a href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements'}
                    className={'article-link'}>
                    https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements</a>
            </article>
        </>
    );
};

export default Tags;
