import React from 'react';
import cover from '../../../img/cover/cover-dev.webp';
import bigONotation from '../../../img/dev/big-o-notation.png';
import algorithmsComplexity from '../../../img/dev/algorithms-complexity.png';
import collectionsComplexity from '../../../img/dev/collections-complexity.png';


const BigO = () => {
    return (
        <>
            <div className='cover-wrapper'>
                <img src={cover} alt='dev cover' className='cover' />
            </div>
            <article className='article article-content'>
                <h1>Big-O</h1>
                <p>
                    Używamy notacji <strong>Big-O</strong> do klasyfikowania algorytmów w zależności od tego, jak ich
                    wymagania dotyczące czasu działania lub miejsca (np. w pamięci lub na dysku) rosną wraz ze wzrostem
                    rozmiaru danych wejściowych. Nie zależy od szczegółów implementacji, takich jak język programowania,
                    system operacyjny, sprzęt lub umiejętności programisty i inne szczegóły implementacji. Złożoność
                    obliczeniowa określa jaka ilość operacji jest potrzebna aby wykonać zadanie.
                </p>

                <p><strong>Big O</strong> opisane jako <strong>O(T(n))</strong> składa się z dwóch części:</p>
                <ul>
                    <li>
                        <b>T(n)</b> jest funkcją złożoności czasowej, która opisuje, jak rośnie czas działania wraz ze
                        wzrostem wielkości wejściowej;
                    </li>

                    <li>
                        symbol <b>O</b> oznacza, że gdy dane wejściowe są wystarczająco duże, czas wykonywania rośnie co
                        najwyżej proporcjonalnie do funkcji w nawiasach.
                    </li>
                </ul>

                <p>Notacja Big-O ma kilka istotnych cech:</p>
                <ul>
                    <li>opisuje górną granicę stopy wzrostu funkcji i można go uznać za najgorszy scenariusz;</li>

                    <li>
                        opisuje on szczególnie dobrze sytuację dla dużych danych wejściowych algorytmu, ale nie dba o
                        to, jak dobrze algorytm działa z wejściami o małych rozmiarach.
                    </li>
                </ul>

                <p>W praktyce algorytm może działać nawet lepiej, niż wskazuje Big O, ale zdecydowanie nie gorzej.</p>

                <div className='article-img-wrapper'>
                    <img src={bigONotation} alt='padding and margin' className='article-img' />
                </div>

                <h3>O(1)</h3>
                <p>
                    Złożoność stała, niezależna od liczby danych wejściowych. Mówimy, że problem o złożoności Ο(1)
                    możemy rozwiązać w stałym czasie niezależnie od wielkości danych wejściowych. Przykładem może być
                    porównanie dwóch liczb w instrukcji warunkowej lub przypisanie wartości do zmiennej, dostęp do
                    elementu tablicy za pomocą indeksu, obliczenie sumy postępów arytmetycznych za pomocą wzoru,
                    wydrukowanie pojedynczej wartości.
                </p>

                <h3>O(log(n))</h3>
                <p>
                    Złożoność logarytmiczna. Liczba wymaganych operacji jest proporcjonalna do logarytmu wielkości
                    wejściowej. Przykładem może być wyszukiwanie w drzewie BST (binarne drzewo poszukiwań).
                </p>

                <h3>O(n)</h3>
                <p>
                    Złożoność liniowa. Liczba wymaganych operacji jest proporcjonalna do rozmiaru danych wejściowych
                    (czas rośnie liniowo wraz ze wzrostem danych). Jest to specyficzny przypadek złożoności
                    wielomianowej. Przykładem może być sortowanie przez zliczanie lub pozycyjne, znajdowanie pozycji max
                    / min w tablicy.
                </p>

                <h3>O(n log(n))</h3>
                <p>
                    Złożoność liniowo-logarytmiczna. Czas rozwiązania problemu jest wprost proporcjonalny do iloczynu
                    wielkości danych wejściowych i ich logarytmu. Przykładem może być algorytm wyszukiwania
                    interpolacyjnego.
                </p>

                <h3>O(n<sup>2</sup>)</h3>
                <p>
                    Złożoność kwadratowa. Liczba instrukcji algorytmu rośnie proporcjonalnie do kwadratu rozmiaru danych
                    wejściowych. Przykładem może być sortowanie bąbelkowe lub przez wstawianie. Jest to specyficzny
                    przypadek złożoności wielomianowej.
                </p>

                <h3>O(2<sup>n</sup>)</h3>
                <p>
                    Złożoność wykładnicza. Liczba wymaganych operacji zależy wykładniczo od szybko rosnącego rozmiaru
                    danych wejściowych.
                </p>

                <hr />

                <h1>Złożoności algorytmów</h1>
                <div className='article-img-wrapper'>
                    <img src={algorithmsComplexity} alt='padding and margin'
                        className='article-img article-img-desktop' />
                </div>

                <hr />

                <h1>Złożoności operacji na kolekcjach</h1>
                <div className='article-img-wrapper'>
                    <img src={collectionsComplexity} alt='padding and margin'
                        className='article-img article-img-desktop' />
                </div>

                <hr />

                <h1>Big-O cheat sheet</h1>
                <a href="https://www.bigocheatsheet.com/" className='article-link'>https://www.bigocheatsheet.com</a>
            </article>
        </>
    );
};

export default BigO;
