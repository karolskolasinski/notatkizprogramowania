import React from 'react';
import cover from '../../../img/cover/cover-dev.webp';

const Node = () => {
    return (
        <>
            <div className='cover-wrapper'>
                <img src={cover} alt='dev cover' className='cover' />
            </div>
            <article className='article article-content'>
                <h1>Update Node.js with npm</h1>

                <ul className='terminal-list'>
                    <li><span>npm cache clean -f</span> - clear the npm cache</li>
                    <li><span>sudo npm install -g n</span> - install n, Node’s version manager</li>
                    <li><span>sudo n stable</span> - install the latest stable version</li>
                </ul>
            </article>
        </>
    );
};

export default Node;
