import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-css.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Breakpoints = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>

            <article className={'article article-content'}>
                <h1>Bootstrap breakpoints</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Breakpoint</th>
                            <th>Class infix</th>
                            <th>Dimensions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>X-Small</td>
                            <td><em>none</em></td>
                            <td>&lt;576px</td>
                        </tr>
                        <tr>
                            <td>Small</td>
                            <td>sm</td>
                            <td>≥576px</td>
                        </tr>
                        <tr>
                            <td>Medium</td>
                            <td>md</td>
                            <td>≥768px</td>
                        </tr>
                        <tr>
                            <td>Large</td>
                            <td>lg</td>
                            <td>≥992px</td>
                        </tr>
                        <tr>
                            <td>Extra large</td>
                            <td>xl</td>
                            <td>≥1200px</td>
                        </tr>
                        <tr>
                            <td>Extra extra large</td>
                            <td>xxl</td>
                            <td>≥1400px</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Źródło:</h4>
                <a href={'https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints'}
                    className={'article-link'}>
                    https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints</a>
            </article>
        </>
    );
};

export default Breakpoints;
