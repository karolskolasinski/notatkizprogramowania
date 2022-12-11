import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-java.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Types = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>4 paradygmaty programowania obiektowego</h1>

                <p><b>Dziedziczenie</b>: jest mechanizmem, który umożliwia tworzenie nowych klas na bazie klas już
                    istniejących (rozszerzając ich możliwości). Klasa, która dziedziczy po innej klasie, przejmuje jej
                    cechy (pola) i zachowania (metody) oraz dodaje własne metody i pola, które służą przystosowywaniu do
                    innych zadań. Często obiekty są bardzo podobne, więc dziedziczenie umożliwia programistom ponowne
                    wykorzystanie wspólnej logiki i jednoczesne wprowadzenie do klas unikalnych koncepcji.</p>

                <u>Co dziedziczymy</u>
                <ul className={'snippet-list'}>
                    <li>zachowania</li>
                    <li>cechy</li>
                    <li>każda klasa niejawnie dziedziczy po klasie <span>Object</span> (chyba, że zdefiniujesz
                        inną klasę po której dziedziczysz)
                    </li>
                </ul>

                <u>Co dziedziczymy z klasy</u>
                <span>Object</span>
                <ul>
                    <li>metoda <span><a
                        href="https://notatkizprogramowania.blogspot.com/2019/05/hashcode.html">hashCode()</a></span>
                    </li>
                    <li>metoda <span>equals()</span></li>
                    <li>metoda <span>toString()</span></li>
                    <li>metoda <span>wait()</span></li>
                    <li>metoda <span>notify()</span></li>
                    <li>etc.</li>
                </ul>

                <u>Czego nie dziedziczymy</u>
                <ul className={'snippet-list'}>
                    <li>konstruktorów</li>
                    <li>klas i metod <span>final</span></li>
                </ul>
                <p>Zdarzają się sytuacje, kiedy chcemy, aby nie tworzono podklas jednej z klas. Klasy, których nie można
                    rozszerzać, nazywają się klasami finalnymi (
                    <span className={'snippet'}>final</span>). Finalna może być też metoda w klasie. W takim przypadku
                    nie można jej przesłonić w żadnej z
                    podklas (wszystkie metody w klasie finalnej są finalne). Również pola mogą być finalne. Wartość
                    takiego pola nie może być zmieniana po utworzeniu obiektu. Jeśli klasa jest finalna, to tylko jej
                    metody są finalne, nie dotyczy to pól.
                </p>

                <p><b>Abstrakcja</b>: oznacza, że obiekty powinny udostępniać uproszczoną, abstrakcyjną wersję swoich
                    implementacji (tworzymy uproszczony model świata). Szczegóły ich pracy wewnętrznej zwykle nie są
                    potrzebne użytkownikowi, więc nie ma potrzeby ich reprezentowania. Abstrakcja oznacza również, że
                    zostaną przedstawione tylko najbardziej istotne cechy obiektu.</p>
                <p><a href="https://notatkizprogramowania.blogspot.com/2019/05/klasy-abstrakcyjne.html">Klasa
                    abstrakcyjna</a> to klasa, w której umieszcza się wspólny kod dla wszystkich klas dziedziczących po
                    tej klasie abstrakcyjnej (o ile same nie są abstrakcyjne). Nie da się też stworzyć instancji klasy
                    abstrakcyjnej.
                    <details>
                        <summary>Przykład</summary>
                        <p>Pojęciem abstrakcyjnym jest np. środek transportu. Środkiem transportu może być zarówno
                            samolot jak i samochód. Zarówno samolot jak i samochód porusza się z pewną prędkością, a
                            więc prędkość jest wspólnym parametrem. Idąc dalej samochód może być osobowy lub ciężarowy.
                            Każdy z nich posiada cechy wspólne jak np. spalanie czy waga. Każde z tych pojęć jest
                            abstrakcyjne, ponieważ posiada pewne cechy wspólne dla grupy oraz cechy ukryte, czyli te,
                            którymi się różnią. Idąc dalej samochody ciężarowe możemy przykładowo podzielić ze względu
                            na markę lub ilość osi. Idąc tym tokiem rozumowania należy się zastanowić gdzie kończy się
                            abstrakcja. Prawdopodobnie nigdzie, zawsze znajdą się cechy wspólne i cechy którymi dane
                            elementy się różnią co pozwala nam zdefiniować kolejne poziomy abstrakcji.</p>
                    </details>
                </p>

                <p><b>Polimorfizm</b>: to możliwość odwoływania się przez obiekty do wielu różnych typów. Każdy obiekt
                    podklasy jest obiektem nadklasy, np. każdy kierownik jest pracownikiem, więc
                    klasa <span>Manager</span> może być podklasą klasy <span>Employee</span>. Nie można tego
                    odwrócić - nie każdy pracownik jest kierownikiem. Wszędzie tam, gdzie można użyć obiektu nadklasy,
                    można użyć obiektu podklasy. Polimorfizm oznacza dosłownie jedno imię i wiele form i dotyczy
                    dziedziczenia klas. Jak sama nazwa wskazuje, pozwala programistom definiować różne logiki tej samej
                    metody. Tak więc nazwa (lub interfejs) pozostaje taka sama, ale wykonywane czynności mogą być inne.
                    W praktyce odbywa się to z przeciążeniem lub nadpisaniem.
                </p>
                <details>
                    <summary>Przykład</summary>
                    <pre className={'line-numbers language-js'}>
                    <code>
{`@Getter
public class Employee {
    private String name;
    private String surname;
    private int age;
}`}
                    </code>
                </pre>

                    <pre className={'line-numbers language-js'}>
                    <code>
{`public class Manager extends Employee {
    private List<Employee> team = new ArrayList<>();
}`}
                    </code>
                </pre>

                    <pre className={'line-numbers language-js'}>
                    <code>
{`public class Main {
    public static void main(String[] args) {
        Employee employee1 = new Employee();
        Employee employee2 = new Manager();

        String name = employee2.getName();
    }
}`}
                    </code>
                </pre>
                </details>

                <p><b>Hermetyzacja</b>: ukrywanie implementacji (enkapsulacja), aby nie było do nich bezpośredniego
                    dostępu z innych klas. Zapewnia, że obiekt nie może zmieniać stanu wewnętrznego innych obiektów w
                    nieoczekiwany sposób. Cała interakcja z obiektem i jego danymi odbywa się za pomocą jego metod
                    publicznych. Tylko własne metody obiektu są uprawnione do zmiany jego stanu. Do enkapsulacji
                    służą <a href="https://notatkizprogramowania.blogspot.com/2019/01/modyfikatory-dostepu.html">modyfikatory
                        dostępu</a>. Najlepiej jest kiedy pola metody są prywatne, a metody publiczne</p>

                <hr />

                <h1>SOLID</h1>
                <p>Zasady SOLID stosuje się po to, aby kod można było łatwiej rozwijać i utrzymywać.</p>
                <p><b>S</b> - <i>Single responsibility</i> (Zasada pojedynczej odpowiedzialności): Klasa lub metoda
                    powinna mieć tylko jedną odpowiedzialność (nigdy nie powinien istnieć więcej niż jeden powód do
                    modyfikacji klasy bądź metody).</p>


                <p><b>O</b> - <i>Open/closed</i> (Zasada otwarte na rozszerzenia i zamknięte na modyfikacje):
                    Powinna być możliwość rozszerzania klasy bądź metody bez jej modyfikacji. Sprowadza się do do
                    świadomego użycia kompozycji, dziedziczenia czy modyfikatorów dostępu.
                    <details>
                        <summary>Przykład</summary>
                        <p>Tylko jak kod może spełniać obydwa warunki zasady open/closed? Jak może być otwarty na
                            rozbudowę, a zarazem zamknięty na zmiany? Poprzez użycie <b>abstrakcji</b>, która będzie
                            wyrażać stałe wspólne zachowanie. To co będzie się zmieniać trafi do klas konkretnych. W
                            Javie abstrakcję możemy wyrazić albo przez klasę abstrakcyjną albo przez interfejs.</p>
                        <p><b>Przykład naruszenia zasady otwarte-zamknięte</b></p>

                        <pre className={'line-numbers language-js'}>
                    <code>
{`package pl.javadeveloper.solid.ocp.bad;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Arrays;

public class LoggerNonOCP {
    private LogTarget logTarget;

    public LoggerNonOCP(LogTarget logTarget) {
        this.logTarget = logTarget;
    }

    public void log(String message) throws Exception {
        switch (logTarget) {
            case CONSOLE:
                System.out.println(message);
                break; 
            case FILE:
                Files.write(Paths.get('file.log'),
                Arrays.asList(message),
                StandardOpenOption.APPEND);
                break;
            default:
                throw new IllegalArgumentException('Unsupported logging type!');
        }
    }
}`}
                    </code>
                </pre>


                        <pre className={'line-numbers language-js'}>
                    <code>
{`package pl.javadeveloper.solid.ocp.bad;

public enum LogTarget {
    CONSOLE, FILE
}`}
                    </code>
                </pre>

                        <p>Typ ten określa miejsce logowania komunikatów i jest używany w
                            metodzie <span className={'snippet'}>log</span>. Metoda ta posiada jeden parametr i
                            jest nim logowany
                            komunikat. W zależności od wartości typu wyliczeniowego trafia on albo na konsole albo
                            do pliku. Jednak wymagania klienta mogą się zmienić i tym samym mogą pojawiać się nowe
                            sposoby logowania. Na przykład komunikaty mogą być zapisywane w bazie danych. Aby dodać
                            nowy sposób logowania trzeba "otworzyć" kod czyli go zmienić. Ponadto, będzie trzeba
                            dodać nowy typ logowania w <span className={'snippet'}>LogTarget</span>. Taki kod
                            narusza zasadę
                            open/closed i w konsekwencji nie pozwala na rozbudowę bez jego zmiany. Jeśli chcemy
                            poprawić ten kod i zapewnić jego zgodność z zasadą open/closed musimy wydzielić
                            abstrakcję. Będzie nią interfejs <span className={'snippet'}>MessageLogger</span>,
                            który będzie wspólny
                            dla wszystkich sposobów logowania:
                        </p>

                        <pre className={'line-numbers language-js'}>
                    <code>
{`package pl.javadeveloper.solid.ocp.good;

public interface MessageLogger {
    void log(String message) throws Exception;
}`}
                    </code>
                </pre>

                        <p>Każdy ze sposobów logowania umieścimy w odrębnej klasie. Pierwszą z klas będzie
                            klasa <span className={'snippet'}>ConsoleLogger</span>, która będzie logować komunikaty na
                            konsole.
                        </p>

                        <pre className={'line-numbers language-js'}>
                    <code>
{`package pl.javadeveloper.solid.ocp.good;

public class ConsoleLogger implements MessageLogger {
    @Override
    public void log(String message) {
        System.out.println(message);
    }
}`}
                    </code>
                </pre>

                        <p>Druga z klas czyli <span className={'snippet'}>FileLogger</span> będzie logowała dane do
                            pliku.</p>

                        <pre className={'line-numbers language-js'}>
                    <code>
{`package pl.javadeveloper.solid.ocp.good;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Arrays;

public class FileLogger implements MessageLogger {
    @Override
    public void log(String message) throws Exception {
        Files.write(Paths.get('file.log'),
        Arrays.asList(message),
        StandardOpenOption.APPEND);
    }
}`}
                    </code>
                        </pre>

                        <p>Po zmianach główna klasa będzie wyglądała następująco:</p>

                        <pre className={'line-numbers language-js'}>
                    <code>
{`package pl.javadeveloper.solid.ocp.good;

public class LoggerOCP {
    private MessageLogger messageLogger;

    public LoggerOCP(MessageLogger messageLogger) {
        this.messageLogger = messageLogger;
    }

    public void log(String message) throws Exception {
        messageLogger.log(message);
    }
}`}
                    </code>
                </pre>

                        <p>Klasa ma pole typu <span className={'snippet'}>MessageLogger</span>. Podczas jej tworzenia w
                            konstruktorze do tego pola przypisujemy konkretną implementacje sposobu logowania.
                            Metoda <span className={'snippet'}>log</span> stała się teraz bardzo prosta. Pozostało w
                            niej tylko
                            wywołanie metody <span className={'snippet'}>log</span> z obiektu klasy przekazanej w
                            konstruktorze.
                            Teraz możemy bardzo łatwo dodać kolejne sposoby logowania i to bez wpływu na główną
                            klasę programu. W tym przypadku zachowujemy zgodność z zasadą otwarte zamknięte. Kod
                            jest otwarty na rozbudowę, ale zamknięty na zmiany.
                        </p>
                        <p>Przykładem może być również użycie wzorca Strategy.</p>
                    </details>
                </p>


                <p><b>L</b> - <i>Liskov substitution</i> (Zasada podstawienia Liskov): Klasy w programie powinny być
                    podmienialne przez swoje podklasy bez naruszania poprawności programu, czyli klasa dziedzicząca
                    musi być dobrym odpowiednikiem klasy bazowej. Innymi słowy jeśli zależysz od jakiegoś interfejsu
                    to wszystkie jego implementacje powinny poprawnie działać z Twoją klasą/metodą. Po lewej stronie
                    przypisania powinien znajdować się najbardziej ogólny typ pozwalający realizować naszą funkcję.
                </p>
                <details>
                    <summary>Przykład</summary>
                    <p>W tym przypadku świetnym przykładem są kolekcje w języku Java. Po lewej
                        piszemy <span className={'snippet'}>List</span> a po prawej np. <span
                            className={'snippet'}>ArrayList</span></p>

                    <pre className={'line-numbers language-js'}>
                    <code>
{`public class SubstitutionExample {
    public static void main(String[] args) {
        List&ltString&gt someList = new ArrayList<>();
        Set<String> someSet = new HashSet<>();
        Queue<String> someQueue = new PriorityQueue<>();
        SubstitutionExample example = new SubstitutionExample();
        example.doSomethingWithElements(someList);
        example.doSomethingWithElements(someSet);
        example.doSomethingWithElements(someQueue);
    }

    public void doSomethingWithElements(Collection<String> someCollection) {
        for (String element : someCollection) {
            System.out.println('element: ' + element);
        }
    }
}`}
                    </code>
                </pre>

                    <p>Metoda <span className={'snippet'}>doSomethingWithElements</span> zrobi dokładnie to samo bez
                        wiedzy o tym, z
                        jakim podtypem ma do czynienia. Niezależnie od tego czy będzie
                        to <span className={'snippet'}>ArrayList</span> czy <span
                            className={'snippet'}>PriorityQueue</span> metoda zadziała
                        poprawnie.
                    </p>
                </details>

                <p><b>I</b> - <i>Interface segregation</i> (Zasada segregacji interfejsów): Wiele mniejszych,
                    konkretnych interfejsów jest lepsze od pojedynczego ogólnego interfejsu. Klasa która
                    implementuje interfejs nie może być zmuszana do implementowania metod, których nie potrzebuje, a
                    tak jest często w przypadku dużych iterfejsów.
                    <details>
                        <summary>Przykład</summary>
                        <p>Załóżmy, że w interfejsie są 3 metody:</p>

                        <pre className={'line-numbers language-js'}>
                    <code>
{`public interface ObjectFormatter {
    byte[] toPDF(Object someObject);

    String toXML(Object someObject);

    String toJSON(Object someObject);
}`}
                    </code>
                </pre>

                        <p>Interfejs ten jest używany w trzydziestu innych projektach. W każdym przypadku używa
                            wyłącznie jednej z tych trzech metod. Niestety z jakiegoś powodu trzeba zmienić ten
                            interfejs. W konsekwencji każdy z tych projektów musi wprowadzić jakieś zmiany. W
                            praktyce rozdzielenie tego interfejsu na trzy oddzielne może mieć sens:</p>

                        <pre className={'line-numbers language-js'}>
                    <code>
{`public interface PDFFormatter {
    byte[] toPDF(Object someObject);
}`}
                    </code>
                </pre>

                        <pre className={'line-numbers language-js'}>
                    <code>
{`public interface XMLFormatter {
    String toXML(Object someObject);
}`}
                    </code>
                </pre>

                        <pre className={'line-numbers language-js'}>
                    <code>
{`public interface JSONFormatter {
    String toJSON(Object someObject);
}`}
                    </code>
                </pre>

                        <p>W takim przypadku zmiana jednej z tych metod nie pociąga za sobą zmian w każdym z 30
                            wspomnianych projektów.</p>
                    </details>
                </p>

                <p><b>D</b> - <i>Dependency inversion</i> (Zasada odwrócenia zależności): Klasy nadrzędne nie mogą
                    zależeć od podrzędnych. Zależność ta powinna być odwrócona poprzez wprowadzenie dodatkowych
                    elementów. Mówi się tu o dodatkowych warstwach abstrakcji, które pozwalają na zmianę kierunku
                    takiej zależności.</p>
                <details>
                    <summary>Przykład</summary>
                    <p>Rozważmy przykład klasy do zarządzania zadaniami (naruszenie zasady odwracania
                        zależności). Klasa <span className={'snippet'}>TaskService</span> używa konkretnej
                        klasy <span className={'snippet'}>FileRepository</span>, która zapisuje lub usuwa zadania z
                        pliku. W tym
                        przykładzie klasa <span className={'snippet'}>TaskService</span> jest "modułem wysokiego
                        poziomu".
                        Klasa <span className={'snippet'}>FileRepository</span> pełni rolę "modułu niższego poziomu".
                        Mamy tutaj
                        bezpośrednią zależność między klasami. W ten sposób jest naruszona zasada Dependency
                        inversion.
                    </p>

                    <pre className={'line-numbers language-js'}>
                    <code>
{`public class TaskService {
    private FileRepository repository = new FileRepository();

    public void addTask(Task task) {
        repository.saveTask(task);
    }

    public void removeTask(String taskId) {
        repository.deleteTask(taskId);
    }
}`}
                    </code>
                </pre>

                    <p>Aby rozwiązać powyższy problem powinniśmy sprawić by
                        klasa <span className={'snippet'}>TaskService</span> nie była zależna od
                        klasy <span className={'snippet'}>FileRepository</span>. Ponadto obie klasy muszą zależeć od
                        abstrakcji.
                        Stwórzmy więc abstrakcję w postaci interfejsu <span className={'snippet'}>Repository</span>.
                        Będzie on
                        miał metody związane z zapisem i odczytem zadań.
                    </p>

                    <pre className={'line-numbers language-js'}>
                    <code>
{`public interface Repository {
    void saveTask(Task task);

    void deleteTask(String taskId);
}`}
                    </code>
                </pre>

                    <p>Zmieńmy klasę <span className={'snippet'}>TaskService</span> aby używała
                        interfejsu <span className={'snippet'}>Repository</span> i w ten sposób zależała od abstrakcji.
                    </p>

                    <pre className={'line-numbers language-js'}>
                    <code>
{`public class TaskService {
    private Repository repository;

    public TaskService(Repository repository) {
        this.repository = repository;
    }

    public void addTask(Task task) {
        repository.saveTask(task);
    }

    public void removeTask(String taskId) {
        repository.deleteTask(taskId);
    }
}`}
                    </code>
                </pre>

                    <p>Również klasa <span className={'snippet'}>FileRepository</span> będzie zależała od abstrakcji i
                        spełniała
                        założenia interfejsu <span className={'snippet'}>Repository</span>.
                    </p>
                    <pre className={'line-numbers language-js'}>
                    <code>
{`public class FileRepository implements Repository {
    @Override
    public void saveTask(Task task) {
        // logic responsible for saving task to file
    }

    @Override
    public void deleteTask(String taskId) {
        // logic responsible for deleting task from file
    }
}`}
                    </code>
                </pre>

                    <p>Teraz "moduł wysokiego poziomu" nie zależy od "modułu niskiego poziomu". Moduł warstwy
                        niższej zależy od abstrakcyjnego interfejsu z warstwy wyższej. Zatem zmiany w module na
                        niższym poziomie nie wpływają na moduł na wyższym poziomie. Jeśli na przykład pojawi się
                        potrzeba zapisu zadań w bazie danych zamiast w pliku to czeka nas proste zadanie.
                        Wystarczy dodanie odpowiedniej klasy na niższym poziomie. Oto przykład zarysu takiej
                        klasy dla bazy MySQL.</p>

                    <pre className={'line-numbers language-js'}>
                    <code>
{`public class MySqlRepository implements Repository {
    @Override
    public void saveTask(Task task) {
        // store task in TASK table
    }

    @Override
    public void deleteTask(String taskId) {
        // delete task from TASK table
    }
}`}
                    </code>
                </pre>
                </details>
            </article>
        </>
    );
};

export default Types;
