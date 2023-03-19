import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-html.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Template = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className='cover-wrapper'>
                <img src={cover} alt='html cover' className='cover' />
            </div>

            <article className='article article-content'>
                <h1>Znaki specjale w formacie XML:</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th><h3>Znak</h3></th>
                            <th><h3>Zapis XML</h3></th>
                            <th><h3>Opis</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>"</td>
                            <td>&amp;quot;</td>
                            <td>Double quotes</td>
                        </tr>
                        <tr>
                            <td>'</td>
                            <td>&amp;apos;</td>
                            <td>Apostrophe</td>
                        </tr>
                        <tr>
                            <td>&<br/></td>
                            <td>&amp;amp;</td>
                            <td>Ampersand</td>
                        </tr>
                        <tr>
                            <td>&lt;</td>
                            <td>&amp;lt;</td>
                            <td>Less than sign/left angle bracket</td>
                        </tr>
                        <tr>
                            <td>&gt;</td>
                            <td>&amp;gt;</td>
                            <td>Greater than sign/right angle bracket</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&amp;nbsp;</td>
                            <td>Non-breaking space</td>
                        </tr>
                        <tr>
                            <td>&thinsp;</td>
                            <td>&amp;thinsp;</td>
                            <td>Thin space</td>
                        </tr>
                        <tr>
                            <td>&ensp;</td>
                            <td>&amp;ensp;</td>
                            <td>en-size space</td>
                        </tr>
                        <tr>
                            <td>&emsp;</td>
                            <td>&amp;emsp;</td>
                            <td>em-size space</td>
                        </tr>
                        <tr>
                            <td><pre>&#9;</pre></td>
                            <td>&amp;#9;</td>
                            <td>Tabulator key (in &lt;pre&gt; only)</td>
                        </tr>
                        <tr>
                            <td>&ndash;</td>
                            <td>&amp;ndash;</td>
                            <td>n-size dash</td>
                        </tr>
                        <tr>
                            <td>&mdash;</td>
                            <td>&amp;mdash;</td>
                            <td>m-size dash</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default Template;
