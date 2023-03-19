import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-java.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/components/prism-java';

const Generics = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className='cover-wrapper'>
                <img src={cover} alt='java cover' className='cover' />
            </div>
            <article className='article article-content'>
                <h1>Optional</h1>
                <p className='snippets'>
                    To generyczny pojemnik a zmienną dowolnego typu, która może mieć wartość <span>null</span>. Poprzez
                    szereg metod dostępnych w klasie powinniśmy być w stanie zabezpieczyć się przed przypadkowym
                    odwołaniem do <span>null</span> referencji. Obiekty <span>Optional</span> tworzy się za pomocą jeden
                    z metod:
                </p>

                <ul className='snippet-list'>
                    <li>
                        <span>empty()</span> - tworzy pusty <span>Optional</span> z wartością <span>null</span> w środku
                    </li>

                    <li>
                        <span>of(T value)</span> - tworzy <span>Optional</span> z podaną wartością. W przypadku
                        przekazania <span>null</span> dostaniemy <span>nullPointerException</span>
                    </li>

                    <li>
                        <span>ofNullable(T value)</span> - również tworzy <span>Optional</span> z podaną wartością, ale
                        w przypadku przekazania null nie zostanie zgłoszony wyjątek
                    </li>

                    <li>
                        <span>Optional(T value)</span> - konstruktor rzucający błąd w przypadku przekazania wartości
                        <span>null</span>
                    </li>
                </ul>

                <p className='snippets'>
                    Dobrze, wiemy już jak utworzyć <span>Optional</span> to teraz pytanie jak go użyć? Dwie najczęściej
                    używane metody to:
                </p>

                <ul className='snippet-list'>
                    <li>
                        <span>isPresent()</span> - zwraca <span>boolean</span> mówiący czy w środku znajduje się jakaś
                        wartość czy też <span>null</span>
                    </li>

                    <li>
                        <span>get()</span> - pobranie przechowywanego obiektu. Jeżeli takiego nie dostaniemy:
                        <span>NoSuchElementException</span>
                    </li>
                </ul>

                <p className='snippets'>
                    Przykład poprawnego wykorzystania <span>Optional</span>: Zamiast budowania zabezpieczeń przed
                    <span>null</span> jak poniżej:
                </p>
                <pre className='line-numbers language-js'>
                    <code>
{`private String getCompanyFirstUserName1(final Holding holding) {
    if (holding != null) {
        final Company company = holding.getCompanies().get(0);
        
        if (company != null && company.getUsers() != null) {
            final User user = company.getUsers().get(0);
                
            if (user != null && user.getFirstName() != null) {
                final String result = user.getFirstName();
                
                if (result.length() > 0) {
                    return result;
                }
            }
        }
    }
        
    return "not found";
}`}
                    </code>
                </pre>

                <p className='snippets'>można zapisać za pomocą <span>Optional</span>w takiej formie:</p>
                <pre className='line-numbers language-js'>
                    <code>
{`private String getCompanyFirstUserName2(final Holding holding) {
    return Optional.ofNullable(holding)
        .map(Holding::getCompanies)
        .map(Vector::firstElement)
        .map(Company::getUsers)
        .map(Vector::firstElement)
        .map(User::getFirstName)
        .filter(name -> name.length() > 0)
        .orElse("not found");
}`}
                    </code>
                </pre>
            </article>
        </>
    );
};

export default Generics;
