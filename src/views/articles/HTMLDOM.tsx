import React, { useEffect } from 'react';
import cover from '../../img/cover/cover-html.webp';
import domImg from '../../img/html/dom.png';
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
                <h1>DOM (Document Object Model)</h1>
                <pre className={'line-numbers language-html'}>
                    <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <title>DOM</title>
</head>

<body>
    <h1>What is DOM?</h1>
    <p>DOM is...</p>
</body>
</html>`}</code></pre>

                <div className={'article-img-wrapper'}>
                    <img src={domImg} alt={'HTML Semantic'} className={'article-img'} />
                </div>

                <p>Each tree node, including the root, is an HTML document element. It has zero or more children nodes
                    (nested elements). A node that does not have children is called a leaf. These leaves can be text
                    strings, images, videos and so on.</p>
            </article>
        </>
    );
};

export default HTMLTemplate;
