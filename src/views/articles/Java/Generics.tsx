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
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Typy generyczne</h1>
                <p className={'snippets'}>Istnieją sytuacje, w których metody i klasy nie zależą od typów danych, na
                    których działają. Na przykład algorytm znajdujący element w tablicy - może przetwarzać tablice
                    stringów, intów lub niestandardowych klas. Nie ma znaczenia, co przechowuje tablica: algorytm jest
                    zawsze taki sam. Jednak nie możemy napisać go jako jednej metody, ponieważ wymaga różnych argumentów
                    (<span>int[]</span>, <span>String[]</span>, itp). Od wersji 5 Java obsługuje programowanie
                    generyczne, które wprowadza abstrakcje nad typami. Typy sparametryzowane pozwalają nam zadeklarować
                    metodę lub klasę, która obsługuje różne typy w ten sam ogólny sposób. Konkretny typ jest określany
                    tylko wtedy, gdy programista tworzy obiekt klasy lub wywołuje metodę. Takie podejście umożliwia nam
                    pisanie bardziej abstrakcyjnego kodu i tworzenie bibliotek oprogramowania wielokrotnego użytku.
                </p>

                <p>Typy generyczne to coś w rodzaju "szablonów". Pozwalają tworzyć klasy, które dopasowują się do
                    kontekstu. Pozwala na pisanie kodu programu bez wcześniejszej znajomości typów danych, na których
                    ten kod będzie pracował. Typ danych podaje się dopiero w momencie użycia. Typy generyczne pozwalają
                    na unikanie rzutowania.</p>

                <p>Konwencja nazewnicza typu danych:</p>
                <ul className={'snippet-list'}>
                    <li><span>T</span> – Type</li>
                    <li><span>S</span>, <span>U</span>, <span>V</span> – kolejne n-te typy</li>
                    <li><span>E</span> – Element (używany szeroko w różnych kolekcjach)</li>
                    <li><span>K</span> – Key</li>
                    <li><span>V</span> – Value</li>
                    <li><span>N</span> – Number</li>
                </ul>

                <hr />

                <h1>Deklaracja klasy generycznej</h1>
                <p className={'snippets'}>Aby zadeklarować klasę generyczną, powinniśmy zadeklarować klasę z sekcją
                    parametru typu z nawiasami ostrymi po nazwie klasy. W poniższym przykładzie
                    klasa <span>GenericType</span> ma pojedynczy parametr typu o nazwie <span>T</span>. Zakładamy, że
                    typ <span>T</span> jest „jakimś typem” i piszemy treść klasy niezależnie od konkretnego typu.
                </p>

                <pre className={'line-numbers language-java'}>
                    <code>
{`class GenericType<T> {
    /**
     * A field of "some type"
     */
    private T t;

    /**
     * Takes a value of "some type" and set it to the field
     */
    public GenericType(T t) {
        this.t = t;
    }

    /**
     * Returns a value of "some type"
     */
    public T get() {
        return t;
    }

    /**
     * Takes a value of "some type", assigns it to a field and then returns it
     */
    public T set(T t) {
        this.t = t;
    return this.t;
    }
}`}
                    </code>
                </pre>

                <p>Aby utworzyć obiekt klasy ogólnej (standardowej lub niestandardowej), powinniśmy określić argument
                    typu po nazwie typu.</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`GenericType<Integer> obj1 = new GenericType<Integer>(10);
GenericType<String> obj2 = new GenericType<String>("abc");`}
                    </code>
                </pre>

                <p className={'snippets'}>Ważne jest, aby argument typu był typem referencyjnym. Nie można użyć typu
                    pierwotnego, takiego jak <span>int</span> lub <span>double</span> jako argumentu typu. Od wersji
                    Java 7 możliwe było zastąpienie argumentów typu wymaganych do wywołania konstruktora klasy ogólnej
                    pustym zestawem argumentów typu, o ile kompilator może wywnioskować argumenty typu z kontekstu.
                </p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`GenericType<Integer> obj1 = new GenericType<>(10);
GenericType<String> obj2 = new GenericType<>("abc");`}
                    </code>
                </pre>

                <p className={'snippets'}>Para nawiasów ostrych <span>&lt;&gt;</span> jest nieformalnie nazywana
                    operatorem diamentowym. Czasami zadeklarowanie zmiennej za pomocą typu ogólnego może być zbyt długie
                    i słabo czytelne. Na szczęście możesz napisać <span>var</span> zamiast określonego typu, aby wymusić
                    automatyczne wnioskowanie o typie na podstawie typu przypisanej wartości.</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`var obj3 = new GenericType<>("abc");`}
                    </code>
                </pre>

                <p>Po utworzeniu obiektu z określonym argumentem typu możemy wywołać metody klasy, które pobierają lub
                    zwracają parametr typu:</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`Integer number = obj1.get(); // 10
String string = obj2.get();    // "abc"

System.out.println(obj1.set(20));    // prints the number 20
System.out.println(obj2.set("def")); // prints the string "def"`}
                    </code>
                </pre>

                <hr />

                <h1>Przykład</h1>
                <p>Na przykład wyobraźmy sobie, że chcemy tworzyć pokrowce na telefony:</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class SamsungGalaxy { }

public class FuteralNaSamsunga {
    private SamsungGalaxy telefon;
    public FuteralNaSamsunga(SamsungGalaxy tel) {
        this.telefon = tel;
    }
}`}
                    </code>
                </pre>

                <p>Można więc stworzyć typ generyczny:</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class Nokia { }

public class Apple { }

public class FuteralUniwersalny<T> {
    private T telefon;
    public FuteralUniwersalny(T tel) {
        this.telefon = tel;
    }
}`}
                    </code>
                </pre>

                <p>Użycie:</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`FuteralUniwersalny<Nokia> nokiaFuteral = new FuteralUniwersalny<Nokia>(new Nokia());
FuteralUniwersalny<Apple> appleFuteral = new FuteralUniwersalny<Apple>(new Apple());`}
                    </code>
                </pre>

                <hr />

                <h1>Object a typ generyczny</h1>
                <p className={'snippets'}>Jeśli zadeklarujemy pole klasy jako <span>Object</span>, możemy przypisać do
                    niego wartość dowolnego typu odwołania. To podejście było szeroko stosowane przed wersją Java 5.
                </p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`class NonGenericClass {
    private Object val;
    public NonGenericClass(Object val) {
        this.val = val;
    }

    public Object get() {
        return val;
    }
}`}
                    </code>
                </pre>

                <p className={'snippets'}>Możliwe jest utworzenie instancji przekazującej wartość
                    typu <span>Integer</span> lub <span>Character</span>. W ten sposób możesz ponownie użyć tej samej
                    klasy z polem <span>Object</span> do przechowywania różnych typów w ten sam sposób. Po wywołaniu
                    metody <span>get()</span> otrzymujemy <span>Object</span>, a nie
                    a <span>String</span> lub <span>Integer</span>. Nie możemy pobrać stringa bezpośrednio z metody. Aby
                    odzyskać ciąg znaków, powinniśmy wykonać jawne rzutowanie typu na klasę <span>String</span>.
                </p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`NonGenericClass instance2 = new NonGenericClass("abc");
String str = instance2.get(); // Compile-time error: Incompatible types
String str = (String) instance2.get(); // "abc"`}
                    </code>
                </pre>

                <p className={'snippets'}>Oczywiście to zadziała, ale co, jeśli instancja w ogóle nie przechowuje
                    stringa? Ponieważ jest zadeklarowana jako <span>Object</span>, wartość pola, może zachować dowolny
                    typ. W takim przypadku kod zgłasza wyjątek. Oto przykład:</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`NonGenericClass instance3 = new NonGenericClass(123);
String str = (String) instance3.get(); // throws java.lang.ClassCastException`}
                    </code>
                </pre>

                <p className={'snippets'}>Teraz możemy zobaczyć główną przewagę typów generycznych nad
                    klasą <span>Object</span> do ponownego wykorzystania kodu. Nie ma potrzeby wykonywania jawnego
                    rzutowania typu, w związku z czym nigdy nie otrzymujemy wyjątku runtime. Jeśli zrobimy coś
                    nieprawidłowo, możemy to zobaczyć w czasie kompilacji.
                </p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`GenericType<String> instance4 = new GenericType<>("abc");

String str = instance4.get(); // There is no type-casting here
Integer num = instance4.get(); // It does not compile`}
                    </code>
                </pre>

                <p className={'snippets'}>Błąd kompilacji jest wykrywany przez programistę, a nie użytkownika programu.
                    To sprawia, że typy generyczne są zarówno elastyczne, jak i bezpieczne. Jednocześnie praca
                    z <span>Object</span>, który wymaga rzutowania typów jest podatna na błędy. Lepiej pozwolić, aby
                    zajął się tym kompilator.
                </p>
            </article>
        </>
    );
};

export default Generics;
