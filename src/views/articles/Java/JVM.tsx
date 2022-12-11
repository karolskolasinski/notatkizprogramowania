import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-java.webp';
import jvm from '../../../img/java/jvm-jre-jdk.png';
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
                <h1>JVM</h1>
                <p><b>JVM</b> (ang. <b>Java Virtual Machine</b>, w skrócie <b>JVM</b>) to wirtualna symulacja fizycznego
                    komputera. Wykonuje pliki klas kodu bajtowego Java (otrzymujemy takie pliki, kompilując plik kodu
                    źródłowego) i zapewnia takie usługi jak odśmiecanie pamięci czy obsługę wyjątków oraz bibliotekę
                    standardową. Maszyny <b>JVM</b> są dostępne dla wielu platform sprzętowych i programowych, więc kod
                    bajtowy Java można uruchamiać prawie wszędzie. Program skompilowany do kodu bajtowego Java jest
                    prawie zawsze niezależny od platformy. Obecnie istnieje wiele implementacji <b>JVM</b>, na
                    przykład <b>HotSpot</b> jest główną referencyjną implementacją maszyny wirtualnej Java.</p>
                <p>W skład maszyny wirtualnej Java wchodzą następujące elementy:</p>
                <ul>
                    <li><b>Interpreter</b> – wykonuje krok po kroku instrukcje programu zapisane w postaci kodu
                        bajtowego
                    </li>
                    <li><b>kompilator JIT</b> – opcjonalny komponent wchodzący w skład części implementacji, który
                        kompiluje najczęściej wykonywane fragmenty kodu do postaci kodu maszynowego, dzięki czemu mogą
                        być one wykonywane bezpośrednio przez procesor komputera. Pozwala na zwiększenie wydajności
                    </li>
                    <li><b>Zarządca pamięci</b> – zarządza stertą, na której przechowywane wszystkie obiekty wykonywanej
                        aplikacji oraz zapewnia automatyczne zwalnianie nieużywanej pamięci
                    </li>
                    <li><b>Weryfikator kodu bajtowego</b> – kluczowym dla bezpieczeństwa aspektem jest weryfikacja kodu
                        bajtowego przed jego uruchomieniem, której celem jest sprawdzenie poprawności wszystkich odwołań
                        oraz upewnienie się, że wykonanie danego fragmentu nie zaszkodzi stabilności lub bezpieczeństwu
                        systemu, na którym uruchamiana jest maszyna wirtualna. Zajmuje się tym weryfikator kodu
                        bajtowego
                    </li>
                    <li><b>Java API</b> – zestaw bibliotek programistycznych udostępniających takie usługi, jak obsługę
                        plików czy GUI, z których korzystają wykonywane aplikacje. Większość biblioteki standardowej
                        napisana jest w języku Java, dlatego maszyny wirtualne nie muszą dostarczać własnej
                        implementacji
                    </li>
                </ul>

                <hr />

                <h1>JRE</h1>
                <p><b>JRE</b> (ang. <b>Java Runtime Environment</b>, w skrócie <b>JRE</b>) to środowisko
                    uruchomieniowe. <b>JRE</b> zawiera <b>JVM</b> i standardowe biblioteki: jest potrzebne do
                    uruchamiania programów skompilowanych. Java Class Library składa się z wielu bibliotek, w tym danych
                    wejściowych / wyjściowych, kolekcji, zabezpieczeń, klas do analizowania XML, zestawów narzędzi
                    interfejsu użytkownika i wielu innych. Twój program może korzystać z tych bibliotek. Po uruchomieniu
                    skompilowanego programu w środowisku uruchomieniowym <b>JVM</b> używa plików klas kodu bajtowego
                    zarówno programu, jak i JCL.</p>

                <hr />

                <h1>JDK</h1>
                <p><b>JDK</b> (ang. <b>Java Development Kit</b>, w skrócie <b>JDK</b>) to pakiet do tworzenia programów
                    na platformę Java. Obejmuje środowisko <b>JRE</b> (dzięki czemu można również uruchamiać programy) i
                    narzędzia dla programistów, takie jak kompilator Java, debugger, archiwizator itp. Kompilator Java
                    (zwykle jest to narzędzie <b>javac</b>) tłumaczy <span className={'snippet'}>*.java</span> na <span
                        className={'snippet'}>*.class</span>. Kilka plików z rozszerzeniem <span
                        className={'snippet'}>*.class</span> można spakować razem w jednym archiwum Java (plik <span
                        className={'snippet'}>*.jar</span>). Inne języki <b>JVM</b>, takie jak Kotlin czy Scala, mają
                    swoje oddzielne kompilatory, nie są dołączane do <b>JDK</b>.</p>


                <div className="article-img-wrapper">
                    <img src={jvm} alt={'jvm'} className={'article-img'} />
                </div>

                <hr />

                <h1>Kod bajtowy i kod maszynowy</h1>
                <p>Główna różnica między kodem maszynowym a kodem bajtowym jest to, że kod maszynowy to zestaw
                    instrukcji w języku maszynowym lub binarnym, które mogą być bezpośrednio wykonywane przez CPU,
                    podczas gdy kod bajtowy to kod pośredni generowany z kompilacji kodu źródłowego, który może być
                    wykonany przez maszynę wirtualną. Program komputerowy to zbiór instrukcji, które wykonują określone
                    zadanie. Specjalne oprogramowanie, takie jak kompilatory lub interpretery, przekształca program w
                    odczytywany maszynowo kod maszynowy. Z drugiej strony kod bajtowy nie jest rodzimym kodem
                    maszynowym; to jest przenośny kod. Ponadto oprogramowanie, takie jak maszyna wirtualna, może go
                    wykonać bezpośrednio.</p>
            </article>
        </>
    );
};

export default Types;
