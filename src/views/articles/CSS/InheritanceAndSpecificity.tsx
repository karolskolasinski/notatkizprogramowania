import React from 'react';
import cover from '../../../img/cover/cover-css.webp';
import inheritanceAndSpecificity from '../../../mp4/inheritance-and-specificity.mp4';

const CheatSheets = () => {
    return (
        <>
            <div className='cover-wrapper'>
                <img src={cover} alt='css cover' className='cover' />
            </div>
            <article className='article article-content'>
                <video controls className='mp4'>
                    <source src={inheritanceAndSpecificity} type='video/mp4' />
                </video>
            </article>
        </>
    );
};

export default CheatSheets;
