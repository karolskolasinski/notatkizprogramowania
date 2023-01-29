import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-java.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/components/prism-java'

const Types = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Klasa abstrakcyjna a Interfejs - różnice</h1>

                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <b>Klasa abstrakcyjna</b></td>
                            <td>
                                <b>Interfejs</b></td>
                        </tr>
                        <tr>
                            <td>pola</td>
                            <td>✔️</td>
                            <td>❌</td>
                        </tr>
                        <tr>
                            <td>pola -
                                wyjątek
                            </td>
                            <td>
                                <span>final</span>
                            </td>
                            <td>
                                <span>public static final</span>
                            </td>
                        </tr>
                        <tr>
                            <td>konstruktor</td>
                            <td>✔️</td>
                            <td>❌</td>
                        </tr>
                        <tr>
                            <td>dziedziczenie po
                            </td>
                            <td>1(<span>extends</span>)
                            </td>
                            <td>∞(<span>implements</span>)
                            </td>
                        </tr>
                        <tr>
                            <td>instancja</td>
                            <td>❌</td>
                            <td>❌</td>
                        </tr>
                        <tr>
                            <td>metody</td>
                            <td><span>abstract</span> + inne
                            </td>
                            <td>
                                <span>public abstract</span>
                            </td>
                        </tr>
                        <tr>
                            <td>metoda
                                abstrakcyjna - ciało
                            </td>
                            <td>brak</td>
                            <td>brak</td>
                        </tr>
                        <tr>
                            <td>metoda
                                abstrakcyjna - ciało - wyjątek
                            </td>
                            <td>brak</td>
                            <td>
                                <span>default</span>
                            </td>
                        </tr>

                    </tbody>
                </table>


                <hr />


                <h1>abstract class</h1>
                <ul>
                    <li>tworzą warstwę abstrakcji, która jest mało precyzyjna</li>
                    <li>mają upraszczać rzeczywistość</li>
                    <li>nie można stworzyć instancji klasy abstrakcyjnej
                        <details>
                            <summary>Przykład</summary>
                            <p>Mamy w programie taką oto klasę abstrakcyjną:</p>

                            <pre className={'line-numbers language-java'}>
                    <code>
{`abstract class MySwingWorker<T, V> extends SwingWorker<T, V> { 
    public final void myPublish(V... args) {
        publish(args);
    }
}`}
                    </code>
                </pre>

                            <p>Wewnątrz klasy uruchomieniowej nie uda się stworzyć instancji takiego obiektu:</p>
                            <pre className={'line-numbers language-js'}>
                    <code>
{`MySwingWorker worker = new MySwingWorker(); // Error:(6, 25) java: org.path.MySwingWorker is abstract; cannot be instantiated`}
                    </code>
                </pre>

                            <p>Możesz utworzyć konkretną inplementację:</p>
                            <pre className={'line-numbers language-js'}>
                    <code>
{`worker = new MySwingWorker<Void, Integer>() {
    @Override
    protected Void doInBackground() {
        TextArea.append("Performing checks...");
        CheckEntryAndStay();
        TextArea.append("Processing terminated");

        return null;
    }
`}
                    </code>
                </pre>


                            <p>Jest to "anonimowa" implementacja <span>MySwingWorker</span>, gdzie (jedyna, jak z tego
                                wynika) abstrakcyjna metoda <span>doInBackground</span> została zaimplementowana.</p>
                        </details>
                    </li>
                    <li>nie może istnieć klasa abstrakcyjna finalna <span>final</span></li>
                    <li>każda klasa jest abstrakcyjna jeśli posiada chociaż jedną <b>metodę abstrakcyjną</b>, która:
                    </li>
                    <ul>
                        <li>posiada nazwę</li>
                        <li>posiada typ zwracany</li>
                        <li>może posiadać przyjmowane argumenty</li>
                        <li>posiada modyfikator dostępu</li>
                        <li>nie posiada ciała metody, czyli robi nic</li>
                    </ul>
                    <li>jeżeli klasy dziedziczą <span>extends</span> po klasie abstrakcyjnej, to klasa abstrakcyjna
                        wymusza na nich implementację metod abstrakcyjnych
                    </li>
                    <li>mogą posiadać metody nieabstrakcyjne</li>
                    <li>mogą posiadać pola</li>
                    <li>można dziedziczyć tylko po jednej klasie</li>
                </ul>


                <hr />

                <h1>interface</h1>
                <ul>
                    <li>nie mogą posiadać pól (wyjątkiem jest pole <span>public static final</span>)</li>
                    <li>nie ma konstruktora i nie można go stworzyć</li>
                    <li>wszystkie metody w interfejsach są domyślnie publiczne i abstrakcyjne i nie może być
                        innych
                    </li>
                    <li>metody nie posiadają ciała (wyjątkiem jest metoda <span>default</span>)</li>
                    <li>interfejsy się implementuje, a nie dziedziczy</li>
                    <li>można implementować nieskończenie wiele interfejsów</li>
                </ul>


                <hr />

                <h1>final</h1>
                <ul>
                    <li>jeżeli pole jest finalne, to nie można go zmienić</li>
                    <li>jeżeli pole jest finalne, to to musi być zainicjalizowane</li>
                    <li>jeżeli metoda jest finalna, to nie można jej nadpisać</li>
                    <li>jeżeli klasa jest finalna, to nie można po niej dziedziczyć</li>
                </ul>


            </article>
        </>
    );
};

export default Types;
