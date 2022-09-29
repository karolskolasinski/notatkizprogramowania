import React from 'react';
import template from '../../img/html/template.jpg';
import './Article.css';

const HTMLTemplate = () => {
    return (
        <article className="article">
            <h1>Semantic HTML</h1>
            <p>A semantic element clearly describes its meaning to both the browser and the developer.</p>
            <img src={template} alt={'html template'} />
        </article>
    );
};

export default HTMLTemplate;
