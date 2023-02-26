import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-java.webp';
import exceptions from '../../../img/java/exceptions.png';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/components/prism-java';

const Exceptions = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Wyjątek</h1>
                <p>Jest to zmiana kolejności wykonywania kodu. Powoduje przerwanie aktualnie wykonywanych instrukcji.
                    Dzięki wyjątkom można zgłosić wiele takich sytuacji, np. jeżeli szukamy w bazie danych ocen
                    studenta, to spodziewamy się otrzymać listę ocen, ale może się zdarzyć, że student nie ma ocen,
                    student nie istnieje i wiele podobnych. Wyjątki można przekazywać w górę, aby zgłosić taką wyjątkową
                    sytuację.</p>

                <hr />

                <h1>Rodzaje i hierarchia wyjątków</h1>
                <div className="article-img-wrapper">
                    <img src={exceptions} alt={'jvm'} className={'article-img article-img-desktop'} />
                </div>

                <hr />

                <h1>Wyjątki jawne (Exception)</h1>
                <ul className={'snippet-list'}>
                    <li>informują nas o potencjalnych problemach jakie mogą wystąpić przy korzystaniu z danej metody
                    </li>
                    <li>wymuszają obsługę błędu</li>
                    <li>wywoływanie wyjątków odbywa się poprzez słowo kluczowe <span>throw</span></li>
                    <li>wyjątki są obiektami dlatego przy ich wywoływaniu korzystamy z standardowego
                        słówka <span>new</span>
                    </li>
                    <li>wyjątki mogą posiadać opcjonalną wiadomość</li>
                    <li>deklaracja metody musi posiadać informację o potencjalnych wyjątkach jawnych np. <span>throws Exception</span>
                    </li>
                    <li>wyjątki obsługujemy poprzez ich przechwycenie, a następnie wykonanie instrukcji w
                        bloku <span>catch</span>
                    </li>
                    <li>możemy obsłużyć w różny sposób różne wyjątki, w zależności od typu wyjątku zostanie
                        wykonany właściwy fragment kodu
                    </li>
                    <li>dodatkowy blok <span>finally</span> jest wykonywany niezależnie od wystąpienia
                        wyjątku lub jego braku
                    </li>
                    <ul className={'nested-list'}>
                        <li><strong>IOException</strong> (wyjątki po nim dziedziczące) — rzucany w przypadku problemów
                            z systemem wejścia/wyjścia, czyli najogólniej rzecz ujmując, kiedy wystąpi problem przy
                            pracy z plikami lub z transmisją danych za pośrednictwem internetu
                        </li>
                    </ul>
                </ul>

                <hr />

                <h1>Błędy (Error)</h1>
                <ul>
                    <li>nieoczekiwane wydarzenia związane z problemami niezależnymi od napisanej aplikacji</li>
                    <li>Oracle rekomenduje, aby ich nie obsługiwać i zamiast tego wypisać w logach cały stacktrace
                        zdarzenia
                    </li>
                    <ul className={'nested-list'}>
                        <li><strong>StackOverflowError</strong> — przepełnienie stosu wywołań</li>
                        <li><strong>OutOfMemoryError</strong> — błąd braku pamięci</li>

                    </ul>
                </ul>

                <hr />

                <h1>Wyjątki niejawne (RuntimeException)</h1>
                <ul className={'snippet-list'}>
                    <li>zdarzenia wynikające z logiki aplikacji, z którymi aplikacja nie powinna być sobie w
                        stanie poradzić, takie jak:
                    </li>
                    <ul className={'nested-list'}>
                        <li>próba wykonania metody na pustej referencji (<span>null</span>)</li>
                        <li>próba podzielenia przez zero</li>
                        <li>odwołanie się do nieistniejącego indeksu tablicy</li>
                    </ul>
                    <li>brak deklaracji <span>throws</span> w metodzie</li>
                    <li>kompilator nie wymusza obsługi wyjątku</li>
                    <li>Nieobsłużony wyjątek wpadając do bloku <span>main</span> zakończy działanie programu</li>
                    <ul className={'nested-list'}>
                        <li><strong>NullPointerException</strong> — rzucany kiedy próbujesz wywołać metodę na zmiennej,
                            której wartość to <span>null</span>
                        </li>
                        <li><strong>IllegalArgumentException</strong> — rzucany, kiedy przekazywany argument jest z
                            jakiegoś powodu nieprawidłowy (walidacja wewnątrz metod)
                        </li>
                        <li><strong>NumberFormatException</strong> — rzucany, kiedy próbujemy zamienić na liczbę np.
                            obiekt typu String, który zawiera nie tylko cyfry
                        </li>
                        <li><strong>IndexOutOfBoundException</strong> — rzucany, kiedy próbujemy się odwołać do
                            nieistniejącego elementu tablicy lub listy
                        </li>
                    </ul>
                </ul>

                <hr />

                <h1>Tworzenie własnych wyjątków</h1>
                <ul>
                    <li>zamiast korzystać z predefiniowanych wyjątków możemy bardzo łatwo tworzyć własne</li>
                    <li>samodzielnie utworzony wyjątek może stanowić bardziej czytelny błąd</li>
                    <li>pomaga również unikać podejścia "złap je wszystkie"</li>
                    <li>W celu utworzenia własnego wyjątku wystarczy odziedziczyć po innym wyjątku</li>
                </ul>
                <p>Klasa Club:</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class Club {
    public void enter(Person person) throws NoAdultException {
        if (person.getWiek() < 18) {
            throw new NoAdultException();
        } else {
            System.out.println('możesz wejść');
        }
    }
}`}
                    </code>
                </pre>

                <p>Klasa NoAdultException:</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class NoAdultException extends Exception {
    public NoAdultException() {
        super('Nie możesz wejść dzieciaku!');
    }
}`}
                    </code>
                </pre>

                <p>Klasa Main:</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`Club club = new Club();
Person person = new Person(imie, nazwisko, wiek);
try {
    club.enter(person);
} catch (NoAdultException e) {
    System.out.println(e.getMessage());
}`}
                    </code>
                </pre>
            </article>
        </>
    );
};

export default Exceptions;
