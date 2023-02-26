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
                <h1>Kolekcje</h1>
                <ul className={'snippet-list'}>
                    <li>wszędzie gdzie występuje <span>Linked</span> zachowywana jest kolejność wstawiania</li>
                    <li>dostęp do pierwszego i ostatniego elementu listy zawsze odbywa się w stałym czasie, O(1)
                        ponieważ linki są trwale przechowywane w pierwszym i ostatnim elemencie, więc dodanie pozycji na
                        koniec listy nie oznacza, że musisz iterować całą listę w poszukiwaniu ostatniego elementu.
                        Jednak dostęp do elementu bądź ustawienie elementu za pomocą jego indeksu wymaga czasu O(n) w
                        przypadku <span>LinkedList</span>
                    </li>
                    <li>w ogólnym przypadku <span>LinkedList</span> traci do <span>ArrayList</span> w zużyciu pamięci i
                        szybkości operacji. Ale to zależy od problemu, który próbujesz rozwiązać.
                    </li>
                </ul>

                <hr />

                <h1>Immutable lists</h1>
                <p className={'snippets'}>Najprostszym sposobem utworzenia listy jest wywołanie
                    metody <span>of</span> interfejsu <span>List</span>. Przed wersją Java 9 innym sposobem tworzenia
                    niemodyfikowalnych list było użycie <span>Arrays.asList(...)</span>.
                </p>

                <pre className={'line-numbers language-java'}>
                    <code>
{`List<String> emptyList = List.of(); // 0 elements
List<String> names = List.of("Larry", "Kenny", "Sabrina"); // 3 elements
List<Integer> numbers = List.of(0, 1, 1, 2, 3, 5, 8, 13);  // 8 elements`}
                    </code>
                </pre>

                <p>Zwraca immutable list zawierającą wszystkie przekazane elementy lub pustą listę. Użycie tej metody
                    jest wygodne podczas tworzenia stałych list lub testowania kodu. Wykonajmy kilka operacji:
                </p>

                <pre className={'line-numbers language-java'}>
                    <code>
{`List<String> daysOfWeek = List.of(
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
);

System.out.println(daysOfWeek.size()); // 7
System.out.println(daysOfWeek.get(1)); // Tuesday
System.out.println(daysOfWeek.indexOf("Sunday")); // 6

List<String> weekDays = daysOfWeek.subList(0, 5);
System.out.println(weekDays); // [Monday, Tuesday, Wednesday, Thursday, Friday]`}
                    </code>
                </pre>

                <p>Ponieważ jest immutable, będą działać tylko metody, które nie zmieniają elementów na liście. Inne
                    rzucą wyjątek.
                </p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`daysOfWeek.set(0, "Funday"); // throws UnsupportedOperationException
daysOfWeek.add("Holiday");   // throws UnsupportedOperationException`}
                    </code>
                </pre>

                <hr />

                <h1>Mutable lists</h1>
                <p className={'snippets'}>Kiedy musisz użyć listy mutowalnej, możesz wziąć jedną z dwóch powszechnie
                    używanych implementacji mutowalnych interfejsu <span>List</span>.
                </p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`List<Integer> numbers = new ArrayList<>();
numbers.add(15);
numbers.add(10);
numbers.add(20);

System.out.println(numbers); // [15, 10, 20]

numbers.set(0, 30); // no exceptions here

System.out.println(numbers); // [30, 10, 20]`}
                    </code>
                </pre>

                <p>Jeśli masz immutable list, możesz pobrać z niej mutowalną wersję, używając następującego kodu:</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`List<String> immutableList = Arrays.asList("one", "two", "three");
List<String> mutableList = new ArrayList<>(immutableList);`}
                    </code>
                </pre>

                <hr />

                <h1>Array</h1>
                <p>Tablica jest jednym z typów kolekcji.</p>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class Array2D {
    public static void main(String[] args) {
        String[][] salutation = {
            //[?][0]    [?][1]    [?][2]
            {"Mr. ",   "Mrs. ",  "Ms. "},  //[0][?]
            {"Kumar",  "White",  "Rose"}   //[1][?]
        };

                           //Mr.                Kumar:
        System.out.println(salutation[0][0] + salutation[1][0]);

                           //Mrs.               White:
        System.out.println(salutation[0][1] + salutation[1][1]);

                           //Ms.                Rose:
        System.out.println(salutation[0][2] + salutation[1][2]);
    }
}`}
                    </code>
                </pre>

                <hr />

                <h1>List</h1>
                <ul className={'snippet-list'}>
                    <li>zachowuje kolejność elementów</li>
                    <li>powiększa się wraz z dodawaniem elementów</li>
                    <li>ten sam obiekt może być przechowywany wiele razy</li>
                    <li>można wstawić wartość <span>null</span> wiele razy</li>
                    <li>limit pojemności liczby elementów to 32 bity (2 147 483 648), ponieważ int jest indeksem -
                        metoda <span>size()</span> zwraca int.
                    </li>
                </ul>

                <h3>Przykładowe implementacje:</h3>
                <ul className={'snippet-list'}>
                    <li><span>java.util.ArrayList</span> – najczęstszy wybór z racji najbardziej uniwersalnego
                        zastosowania. Inne implementacje mają przewagę tylko w bardzo specyficznych przypadkach. Jeśli
                        nie wiesz, jakiej listy potrzebujesz, wybierz tą. Preferowana gdy częściej szukamy i odwołujemy
                        się do obiektów
                    </li>
                    <li><span>java.util.LinkedList</span> – szybsze dodawanie/usuwanie; może być traktowana jako List
                        lub Queue, ponieważ implementuje oba te interfejsy. LinkedList ma przewagę w przypadku dodawania
                        elementów pojedynczo, w dużej ilości, w sposób trudny do przewidzenia wcześniej, kiedy
                        przejmujemy się ilością zajmowanej pamięci
                    </li>
                </ul>

                <h3>Niektóre metody:</h3>
                <ul className={'snippet-list'}>
                    <li><span>add(E e)</span> – dodaje element na koniec listy</li>
                    <li><span>add(E e, int index)</span> – dodaje element na wybraną pozycję (nie usuwa elementu już tam
                        się znajdującego)
                    </li>
                    <li><span>remove(int index)</span> – usuwa element pod wskazanym indeksem</li>
                    <li><span>remove(E e)</span> – usuwa pierwsze wystąpienie wskazanego elementu (obiektu)</li>
                    <li><span>set(E e, int index)</span> – wstawia element na wybraną pozycję (tym samym poprzednio
                        znajdujący się element zostaje usunięty)
                    </li>
                    <li><span>get(int index)</span> – zwraca element o wybranym indeksie</li>
                    <li><span>addAll(Collection)</span> – dodaje wszystkie elementy z jednej kolekcji do drugiej i
                        wstawia je na koniec
                    </li>
                    <li><span>contains(E e)</span> – zwraca <span>true</span> jeżeli lista zawiera dany element</li>
                    <li><span>isEmpty()</span> – zwraca <span>true</span> jeśli lista jest pusta</li>
                    <li><span>size()</span> – zwraca aktualny rozmiar listy</li>
                    <li><span>indexOf(E e)</span> – wyszukuje element na liście i zwraca pierwszy indeks wystąpienia
                    </li>
                    <li><span>lastIndexOf(E e)</span> – j.w. ale zwraca ostatnie wystąpienie</li>
                </ul>

                <h3>Przykład:</h3>
                <pre className={'line-numbers language-java'}>
                    <code>
{`List<String> komputery = new LinkedList<>();

komputery.add("ZX Spectrum");
komputery.add("Commodore 64");

List<String> ulubione = new LinkedList<>();
ulubione.add("Commodore 64");
ulubione.addAll(komputery);

System.out.println(ulubione.get(1));
System.out.println(ulubione.indexOf("Commodore 64"));`}
                    </code>
                </pre>

                <hr />

                <h1>Set</h1>
                <ul className={'snippet-list'}>
                    <li>kolejność nie ma znaczenia (nie pozwala na bezpośredni dostęp do obiektu poprzez podanie np.
                        indeksu)
                    </li>
                    <li>przechowuje elementy unikalne - ten sam obiekt może znajdować się w zbiorze tylko raz (nie
                        pozwala przechowywać duplikatów)
                    </li>
                    <li>można wstawić wartość <span>null</span> jeden raz</li>
                    <li>element młodszy nadpisuje element starszy</li>
                    <li>aby dostać się do obiektu musimy skorzystać z pętli <span>foreach</span> lub specjalnego
                        typu <span>Iterator</span>
                    </li>
                </ul>

                <h3>Przykładowe implementacje:</h3>
                <ul className={'snippet-list'}>
                    <li><span>java.util.HashSet</span> – najczęściej występująca – dobra wydajnościowo; brak zachowania
                        kolejności
                    </li>
                    <li><span>java.util.TreeSet</span> – umieszcza nowe elementy kolekcji poprzez
                        użycie <span>Comparatora</span>; wszystkie elementy od razu posortowane i zachowują swoją
                        kolejność. Implementacja oparta o drzewa czerwono czarne, która oprócz unikalności elementów
                        gwarantuje nam uporządkowanie wstawianych elementów zgodnie z naturalnym porządkiem. Porządek
                        ten wyznaczany jest poprzez implementację interfejsu <span>Comparable</span> lub zastosowanie
                        odpowiedniego <span>Comparatora</span> (oznacza to, że elementy w zbiorze muszą implementować
                        interfejs <span>Comparable</span> lub trzeba dostarczyć <span>Comparator</span>.
                    </li>
                    <li><span>java.util.LinkedHashSet</span> – zachowuje kolejność wpisywanych elementów (jak w Liście)
                    </li>
                </ul>

                <h3>Niektóre metody:</h3>
                <ul className={'snippet-list'}>
                    <li><span>add(E e)</span> – dodawanie elementu</li>
                    <li><span>addAll(Collection)</span> – dodaje wszystkie elementy z jednej kolekcji do drugiej</li>
                    <li><span>remove(E e)</span> – usuwa wybrany element po wartości, ponieważ <span>Set</span> nie ma
                        indeksów
                    </li>
                    <li><span>isEmpty()</span> – zwraca <span>true</span> jeśli zbiór jest pusty</li>
                    <li><span>size()</span> – zwraca aktualny rozmiar zbioru</li>
                    <li><span>iterator()</span> – zwraca obiekt typu <span>Iterator</span> umożliwiający iterowanie
                        zbioru
                    </li>
                    <li>Ze względu na brak zachowania kolejności zbiór nie posiada metod takich
                        jak <span>get</span>, <span>indexOf</span>, <span>lastIndexOf</span>. Zamiast tego posiada
                        metody:
                    </li>
                    <ul className={'nested-list'}>
                        <li><span>contains(E e)</span> – zwraca <span>true</span> jeśli element znajduje się w zbiorze
                        </li>
                        <li><span>containsAll</span> – sprawdza czy zbiór zawiera wszystkie elementy zbioru</li>
                    </ul>
                </ul>

                <h3>Przykład HashSet</h3>
                <pre className={'line-numbers language-java'}>
                    <code>
{`Set<String> komputery = new HashSet<>();

komputery.add("ZX Spectrum");
komputery.add("Commodore 64");
komputery.add("Commodore 64");
komputery.add("Amiga 500");

System.out.println(komputery.size());
System.out.println(komputery.contains("Commodore 64"));
komputery.remove("Commodore 64");
System.out.println(komputery.contains("Commodore 64"));`}
                    </code>
                </pre>

                <h3>Przykład TreeSet:</h3>
                <pre className={'line-numbers language-java'}>
                    <code>
{`//Tworzymy zmienną o typie interfejsu i inicjalizujemy:
Set<String> imiona = new TreeSet<>();

imiona.add("Zosia");
imiona.add("Krysia");
imiona.add("Albert");
imiona.add("Krysia");

for (String imie: imiona) {
    System.out.println(imie);
}`}
                    </code>
                </pre>

                <hr />

                <h1>Map</h1>
                <ul>
                    <li>mapy nie implementują interfejsu Collection</li>
                    <li>przechowuje pary klucz: wartość</li>
                    <li>w odróżnieniu od indeksu w liście (gdzie wymaga się liczb całkowitych), kluczem może być inny
                        obiekt niemodyﬁkowalny
                    </li>
                    <li>klucz musi być unikalny</li>
                    <li>wartości mogą się powtarzać</li>
                </ul>

                <h3>Przykładowe implementacje:</h3>
                <ul className={'snippet-list'}>
                    <li><span>java.util.HashMap</span> – najczęściej występująca – dobra wydajnościowo; brak zachowania
                        kolejności
                    </li>
                    <li><span>java.util.LinkedHashMap</span> – zachowuje kolejność wpisywanych elementów (jak w Liście)
                    </li>
                    <li><span>java.util.TreeMap</span> – umieszcza nowe elementy kolekcji poprzez
                        użycie <span>Comparatora</span>; wszystkie elementy od razu posortowane względem klucza i
                        zachowują swoją kolejność
                    </li>
                </ul>

                <h3>Niektóre metody:</h3>
                <ul className={'snippet-list'}>
                    <li><span>put(Key key, Value value)</span> – umieszcza nową parę klucz: wartość w mapie(lub
                        nadpisanie, gdy klucz istnieje!)
                    </li>
                    <li><span>putAll</span> – dodaje wszystkie elementy z jednej mapy do drugiej</li>
                    <li><span>containsKey(Object o)</span> – zwraca <span>true</span> jeśli mapa zawiera wskazany klucz
                    </li>
                    <li><span>containsValue(Object o)</span> – zwraca <span>true</span> jeśli mapa zawiera wskazaną
                        wartość
                    </li>
                    <li><span>isEmpty()</span> – zwraca <span>true</span> jeśli mapa jest pusta</li>
                    <li><span>size()</span> – zwraca aktualny rozmiar mapy</li>
                    <li><span>remove(Object key)</span> – usuwa wybraną parę klucz : wartość na podstawie klucza</li>
                    <li><span>get(Object key)</span> – zwraca wartość przypisaną dla wskazanego klucza</li>
                    <li><span>keySet()</span> – zwraca set wszystkich kluczy mapie</li>
                    <li><span>replace(Key key, Value value)</span> – podmienia wartość dla wskazanego klucza</li>
                </ul>

                <h3>Przykład HashMap z wykorzystaniem pętli foreach do iterowania:</h3>
                <pre className={'line-numbers language-java'}>
                    <code>
{`Map<String, String> procesory = new HashMap<>();

procesory.put("IBM PC", "Intel x86");
procesory.put("Atari ST", "Motorola 68000");
procesory.put("Commodore 64", "MOS 6502");
procesory.put("Amiga 500", "Motorola 68000");
procesory.put("IBM PC", "Intel x86-64");

System.out.println(procesory.size());
System.out.println(procesory.get("Amiga 500"));
System.out.println(procesory.get("IBM PC"));

//iterowanie po wartościach:
for (String wartosc: procesory.values()) {
    System.out.println(wartosc);
}

//iterowanie po kluczach:
for (String klucz: procesory.keySet()) {
    System.out.println(klucz);
    System.out.println(procesory.get(klucz));
}

//iterowanie po parach:
for (java.util.Map.Entry para: procesory.entrySet()) {
    System.out.println(para.getKey());
    System.out.println(para.getValue());
}`}
                    </code>
                </pre>

                <hr />

                <h1>Queue</h1>
                <p>Pozwala na implementację kolejek typu FIFO (first-in-first-out) i FILO (first-in-last-out).</p>
                <h3>Przykładowe implementacje:</h3>
                <ul className={'snippet-list'}>
                    <li><span>java.util.ArrayDeque</span> — kolejka oparta o tablice, pozwala na dostęp zarówno od
                        strony głowy <span>getFirst()</span> jak i ogona <span>getLast()</span>. Elementy przechowywane
                        są w kolejności dodawania
                    </li>
                    <li><span>java.util.PriorityQueue</span> – pozwala na przechowywanie i dostęp do elementów wg
                        określonego kryterium (komparatora), sortując elementy wg niego w momencie dodania do kolejki.
                        Przydatna w sytuacjach gdy mamy np. kolejkę obiektów do przetworzenia i chcemy zawsze obsłużyć
                        ważniejsze szybciej niż te mniej ważne
                    </li>
                </ul>

                <h3>Niektóre metody:</h3>
                <ul className={'snippet-list'}>
                    <li><span>boolean offer(E e)</span> wstawia określony element do kolejki, jeśli jest to możliwe od
                        razu bez naruszania ograniczeń pojemności; zwraca <span>true</span> / <span>false</span> w
                        zależności od wyniku tej operacji
                    </li>
                    <li><span>E remove()</span> pobiera i usuwa head tej kolejki; jeśli jest pusty, metoda
                        rzuca <span>NoSuchElementException</span>
                    </li>
                    <li><span>E poll()</span> pobiera i usuwa head tej kolejki lub zwraca <span>null</span> jeśli ta
                        kolejka jest pusta
                    </li>
                    <li><span>E element()</span> pobiera, ale nie usuwa head kolejki; jeśli jest pusty, metoda
                        rzuca <span>NoSuchElementException</span>
                    </li>
                    <li><span>E peek()</span> pobiera, ale nie usuwa head tej kolejki lub zwraca <span>null</span> jeśli
                        ta kolejka jest pusta
                    </li>
                    <li><span>add(E element)</span> metoda działa tak samo jak <span>offer(E e)</span> ale
                        rzuca <span>IllegalStateException</span> jeśli nie jest obecnie dostępna przestrzeń;
                    </li>
                </ul>

                <h3>Przykład</h3>
                <pre className={'line-numbers language-java'}>
                    <code>
{`Queue<String> kolejka = new ArrayDeque<String>();
kolejka.add("pierwszy");
kolejka.add("drugi");

System.out.println(kolejka.remove()); //wypisze "pierwszy"`}
                    </code>
                </pre>
            </article>
        </>
    );
};

export default Generics;
