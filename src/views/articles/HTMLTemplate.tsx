import React from 'react';
import template from '../../img/html/template.jpg';
import cover from '../../img/cover/cover-html.webp';
import './Article.css';

const HTMLTemplate = () => {
    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article'}>
                <h1>Semantic HTML</h1>
                <p>A semantic element clearly describes its meaning to both the browser and the developer.</p>
                <div className="article-img-wrapper">
                    <img src={template} alt={'html template'} className={'article-img'} />
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
