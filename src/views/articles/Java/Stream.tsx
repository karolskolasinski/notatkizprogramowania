import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-java.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Stream = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Stream</h1>
                <p>Stream w największym skrócie oznacza sekwencję elementów. Stosuje się po to aby zapewnić więcej
                    czytelności oraz łatwiej i szybciej móc napisać kod wykonujący bardziej skomplikowane operacje na
                    dużych zbiorach danych. Kod co prawda jest krótszy, ale nie jest szybszy niż np. pętla, ponieważ do
                    każdego elementu kolekcji, na którym operujemy <b>tworzony</b> jest obiekt, który
                    musi <b>przetworzyć</b> dane, a na koniec GarbageCollector musi go <b>pochłonąć</b>. Tworzą się
                    klasy anonimowe, po zakończeniu streama nie mają już żadnej referencji, więc można je usunąć.</p>
                <strong>Przykład</strong>
                <p>Taki zapis:</p>

                <pre className={'line-numbers language-java'}>
                    <code>
{`public static void printAllArcadeNames(List<Arcade> arcades) {
    arcades.stream()
        .map(Arcade::getName)
        .forEach(System.out::println);
}`}
                    </code>
                </pre>

                <p>Jest tym samym co:</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public static void printAllArcadeNames(List<Arcade> arcades) {
    arcades.stream()
        .map(new Function<Arcade, String>() {
            @Override
            public String apply(Arcade arcade) {
                return arcade.getName();
            }
        })
        .forEach(new Consumer<String>() {
            @Override
            public void accept(String s) {
                System.out.println(s);
            }
        });
}`}
                    </code>
                </pre>

                <hr />
                <h1>Metody</h1>
                <ul className={'snippet-list'}>
                    <li><span>.map(Function&lt;T, R&gt;)</span> - używamy po to, by "mapować" obiekty, czyli przekształcać
                        jeden obiekt w inny.
                    </li>
                    <pre className={'line-numbers language-java'}>
                    <code>
{`List<String> letters = Arrays.asList("a", "b", "c", "d");
List<String> collect = letters.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
    
System.out.println(collect); //[A, B, C, D]`}
                    </code>
                </pre>
                    <p>W tym przykładzie stworzyliśmy nową listę, w której Stringi zostały zmapowane na Stringi
                        pisane wielką literą.</p>

                    <li><span>.filter(Predicate&lt;T&gt;)</span> - będziemy używać do "filtrowania" naszego streama, czyli
                        wybierania tylko pożądanych
                        elementów.
                    </li>
                    <pre className={'line-numbers language-java'}>
                    <code>
{`List<Person> persons = ...
Stream<Person> personsOver18 = persons.stream()
    .filter(p -> p.getAge() > 18);`}
                    </code>
                </pre>

                    <p>W tym przykładzie otrzymaliśmy stream z osobami powyżej 18 lat.</p>

                    <li><span>.flatMap(Function&lt;T, R&gt;)</span> - ta metoda używana jest do "spłaszczania" streama
                        streamów.
                    </li>

                    <pre className={'line-numbers language-java'}>
                    <code>
{`List<String> pinkFloyd = Arrays.asList("Gilmour", "Waters", "Wright", "Mason", "Barrett");
List<String> ledZeppelin = Arrays.asList("Page", "Plant", "Jones", "Bonham");
List<List<String>> woodstockBands = new ArrayList<>();
    woodstockBands.add(pinkFloyd);
    woodstockBands.add(ledZeppelin);

List<String> lineUp = woodstockBands.stream()
    .flatMap(x -> x.stream())
    .collect(Collectors.toList());`}
                    </code>
                </pre>
                    <p>W tym przykładzie "spłaszczyliśmy" listę list na jedną listę. Wynikiem jest lista
                        Stringów zawierająca wszystkie Stringi z listy źródłowej.</p>
                    <li><span>collect(Collector&lt;T, A, R&gt;)</span> - tej metody można użyć do "zebrania" streama w
                        kolekcję, która nas interesuje.
                        Stream trzeba w jakiś sposób zamknąć. Najczęściej będziemy oczekiwać kolekcji, ale mogą to być
                        pojedyncze obiekty. Poniżej przykłady:
                    </li>
                    <pre className={'line-numbers language-java'}>
                    <code>
{`List<String> result = givenList.stream()
    .collect(toList());

Set<String> result = givenList.stream()
    .collect(toSet());

List<String> result = givenList.stream()
    .collect(toCollection(LinkedList::new))

String result = givenList.stream()
    .collect(joining());

String result = givenList.stream()
    .collect(joining(" "));

Long result = givenList.stream()
    .collect(counting());`}
                    </code>
                </pre>
                </ul>

                <hr />

                <h1>Czym są lambdy?</h1>
                <p>Java to obiektowy język programowania, jednak lambdy pozwalają na pisanie kodu w sposób
                    funkcyjny. Oznacza to, że zamiast operować na stanach obiektów możemy bezpośrednio
                    deklarować, co chcemy zrobić. Odnosząc lambdy do programowania obiektowego, możemy o nich
                    myśleć jak o klasach tymczasowych zawierających jedną metodę. Lambdy to obiekty, zawierające
                    fragment kodu: funkcję, a także specyficzne atrybuty i parametry ważne dla nich (środowisko,
                    w ramach którego operuje funkcja). Wyrażenia lambda wykorzystują koncept, który nazywa
                    się <i>deferred execution</i>, czyli takie, które są wykonywanie z odroczeniem.</p>
                <strong>Przykład</strong>
                <pre className={'line-numbers language-java'}>
                    <code>{`c -> c.canSing();`}</code>
                </pre>
                <p>Taki zapis mówi Javie, że ma wywołać metodę z Celebrity jako parametrem i zwrócić
                    boolean jako wynik <span className={'snippet'}>c.canSing()</span>. Równoważny zapis poniżej:</p>
                <pre className={'line-numbers language-java'}>
                    <code>{`(Celebrity c) -> { return c.canSing(); }`}</code>
                </pre>

                <p>To co jeszcze warto wiedzieć o lambdach, to to, że mają one dostęp do zmiennych. Warto
                    pamiętać, że wyrażenia lambda mają dostęp do pól klasy oraz statycznych zmiennych. Jeśli
                    chodzi o parametry metody i zmienne lokalne, to ten dostęp jest możliwy tylko wtedy, gdy
                    nie przypisujemy do nich nowych wartości. Czyli:</p>

                <pre className={'line-numbers language-java'}>
                    <code>{`(a, b) -> { int a = 0; return 5;}  // kod się nie skompiluje
                    
(a, b) -> { int c = 0; return 5; } // to jest ok`}</code>
                </pre>
            </article>
        </>
    );
};

export default Stream;
