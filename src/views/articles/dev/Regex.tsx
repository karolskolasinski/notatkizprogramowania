import React from 'react';
import cover from '../../../img/cover/cover-dev.webp';

const Regex = () => {
    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Wyrażenia regularne (regular expressions, regex, regexp)</h1>
                <p>– wzorce opisujące łańcuchy symboli. Wyrażenie regularne może określać zbiór pasujących łańcuchów lub
                    wyszczególniać istotne części łańcucha Posiadają implementację w większości języków programowania w
                    tym w Javie.</p>
                <p>Składnia:</p>
                <ul className={'snippet-list'}>
                    <li><span>.</span> – dowolny znak</li>
                    <li><span>\d</span> – cyfra [0-9]</li>
                    <li><span>\D</span> – inny znak niż cyfra ([^0-9])</li>
                    <li><span>\s</span> – znak biały</li>
                    <li><span>\S</span> – inny znak niż znak biały</li>
                    <li><span>\w</span> – znak [a-zA-Z_0-9]</li>
                    <li><span>\W</span> – inny znak niż \w (np. .’;,{}[]@!)</li>
                </ul>
                <p>Wybór liczebników:</p>
                <ul className={'snippet-list'}>
                    <li><span>?</span> – 0 lub 1 wystąpienie</li>
                    <li><span>*</span> – 0 lub więcej wystąpień</li>
                    <li><span>+</span> – 1 lub więcej wystąpień</li>
                    <li><span>&#123;n&#125;</span> – dokładnie n wystąpień (np. &#123;5&#125;)</li>
                    <li><span>&#123;n,&#125;</span> – przynajmniej n wystąpień</li>
                    <li><span>&#123;n,m&#125;</span> – przynajmniej n lecz nie więcej niż m wystąpień</li>
                </ul>
                <p>Meta znaki:</p>
                <ul className={'snippet-list'}>
                    <li><span>\</span> – wskazanie, że interesuje nas konkretny znak (np. szukając kropki - \.)</li>
                    <li><span>^</span> – oznaczenie początku linii</li>
                    <li><span>$</span> – oznaczenie końca linii</li>
                    <li><span>|</span> – alternatywa (np. a|s → albo ‚a’ albo ‚s’)</li>
                    <li><span>()</span> – grupowanie znaków (np. (Hello|World!) → albo ‚Hello’, albo ‚World!’)</li>
                    <li><span>[]</span> – zbiór znaków (np. \s[a-z]+\s? → wszystkie małe wyrazy oddzielone spacją</li>
                </ul>
            </article>
        </>
    );
};

export default Regex;
