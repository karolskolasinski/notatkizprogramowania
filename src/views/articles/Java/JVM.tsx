import React from "react";
import cover from "../../../img/cover/cover-java.webp";
import jvm from "../../../img/java/jvm-jre-jdk.png";

const JVM = () => {
  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="java cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>JVM</h1>
        <p>
          <strong>JVM</strong> (ang. <strong>Java Virtual Machine</strong>, w skrócie{" "}
          <strong>JVM</strong>) to wirtualna symulacja fizycznego komputera. Wykonuje pliki klas
          kodu bajtowego Java (otrzymujemy takie pliki, kompilując plik kodu źródłowego) i zapewnia
          takie usługi jak odśmiecanie pamięci czy obsługę wyjątków oraz bibliotekę standardową.
          Maszyny <strong>JVM</strong>{" "}
          są dostępne dla wielu platform sprzętowych i programowych, więc kod bajtowy Java można
          uruchamiać prawie wszędzie. Program skompilowany do kodu bajtowego Java jest prawie zawsze
          niezależny od platformy. Obecnie istnieje wiele implementacji{" "}
          <strong>JVM</strong>, na przykład <strong>HotSpot</strong>{" "}
          jest główną referencyjną implementacją maszyny wirtualnej Java.
        </p>

        <p>W skład maszyny wirtualnej Java wchodzą następujące elementy:</p>
        <ul className="snippet-list">
          <li>
            <strong>Interpreter</strong>{" "}
            – wykonuje krok po kroku instrukcje programu zapisane w postaci kodu bajtowego
          </li>

          <li>
            <strong>kompilator JIT</strong>{" "}
            – opcjonalny komponent wchodzący w skład części implementacji, który kompiluje
            najczęściej wykonywane fragmenty kodu do postaci kodu maszynowego, dzięki czemu mogą być
            one wykonywane bezpośrednio przez procesor komputera. Pozwala na zwiększenie wydajności
          </li>

          <li>
            <strong>Zarządca pamięci</strong>{" "}
            – zarządza stertą, na której przechowywane wszystkie obiekty wykonywanej aplikacji oraz
            zapewnia automatyczne zwalnianie nieużywanej pamięci. Garbage Collector to program,
            którego głównym zadaniem jest usuwanie z pamięci nieużywanych obiektów. Gdyby nie jego
            działanie, sterta, na którą trafiają nowo tworzone obiekty, szybko by się zapełniała i
            tym samym uniemożliwiała dalsze funkcjonowanie aplikacji. Sprawdza czy dany obiekt nie
            ma żadnych referencji. Garbage Collector skanuje Scope i Stos zaznaczając wszystkie
            obiekty jako widoczne, jeżeli mają jakieś referencje. W pierwszej kolejności zwraca
            uwagę na <span>static</span>{" "}
            i referencje wgłąb, oznaczając jako nie do usunięcia (<span>static</span>{" "}
            z definicji jest czymś, do czego zawsze jest dostęp i z automatu nie może być usunięte).
          </li>

          <li>
            <strong>Weryfikator kodu bajtowego</strong>{" "}
            – kluczowym dla bezpieczeństwa aspektem jest weryfikacja kodu bajtowego przed jego
            uruchomieniem, której celem jest sprawdzenie poprawności wszystkich odwołań oraz
            upewnienie się, że wykonanie danego fragmentu nie zaszkodzi stabilności lub
            bezpieczeństwu systemu, na którym uruchamiana jest maszyna wirtualna. Zajmuje się tym
            weryfikator kodu bajtowego
          </li>

          <li>
            <strong>Java API</strong>{" "}
            – zestaw bibliotek programistycznych udostępniających takie usługi, jak obsługę plików
            czy GUI, z których korzystają wykonywane aplikacje. Większość biblioteki standardowej
            napisana jest w języku Java, dlatego maszyny wirtualne nie muszą dostarczać własnej
            implementacji
          </li>
        </ul>

        <hr />

        <h1>JRE</h1>
        <p>
          <strong>JRE</strong> (ang. <strong>Java Runtime Environment</strong>, w skrócie{" "}
          <strong>JRE</strong>) to środowisko uruchomieniowe. <strong>JRE</strong> zawiera{" "}
          <strong>JVM</strong>{" "}
          i standardowe biblioteki: jest potrzebne do uruchamiania programów skompilowanych. Java
          Class Library składa się z wielu bibliotek, w tym danych wejściowych / wyjściowych,
          kolekcji, zabezpieczeń, klas do analizowania XML, zestawów narzędzi interfejsu użytkownika
          i wielu innych. Twój program może korzystać z tych bibliotek. Po uruchomieniu
          skompilowanego programu w środowisku uruchomieniowym
          <strong>JVM</strong> używa plików klas kodu bajtowego zarówno programu, jak i JCL.
        </p>

        <hr />

        <h1>JDK</h1>
        <p className="snippets">
          <strong>JDK</strong> (ang. <strong>Java Development Kit</strong>, w skrócie{" "}
          <strong>JDK</strong>) to pakiet do tworzenia programów na platformę Java. Obejmuje
          środowisko <strong>JRE</strong>{" "}
          (dzięki czemu można również uruchamiać programy) i narzędzia dla programistów, takie jak
          kompilator Java, debugger, archiwizator itp. Kompilator Java (zwykle jest to narzędzie
          {" "}
          <strong>javac</strong>) tłumaczy <span>*.java</span> na{" "}
          <span>*.class</span>. Kilka plików z rozszerzeniem
          <span>*.class</span> można spakować razem w jednym archiwum Java (plik{" "}
          <span>*.jar</span>). Inne języki{" "}
          <strong>JVM</strong>, takie jak Kotlin czy Scala, mają swoje oddzielne kompilatory, nie są
          dołączane do <strong>JDK</strong>.
        </p>

        <div className="article-img-wrapper">
          <img src={jvm} alt="jvm" className="article-img article-img-desktop" />
        </div>

        <hr />

        <h1>Kod bajtowy i kod maszynowy</h1>
        <p>
          Główna różnica między kodem maszynowym a kodem bajtowym jest to, że kod maszynowy to
          zestaw instrukcji w języku maszynowym lub binarnym, które mogą być bezpośrednio wykonywane
          przez CPU, podczas gdy kod bajtowy to kod pośredni generowany z kompilacji kodu
          źródłowego, który może być wykonany przez maszynę wirtualną. Program komputerowy to zbiór
          instrukcji, które wykonują określone zadanie. Specjalne oprogramowanie, takie jak
          kompilatory lub interpretery, przekształca program w odczytywany maszynowo kod maszynowy.
          Z drugiej strony kod bajtowy nie jest rodzimym kodem maszynowym; to jest przenośny kod.
          Ponadto oprogramowanie, takie jak maszyna wirtualna, może go wykonać bezpośrednio.
        </p>
      </article>
    </>
  );
};

export default JVM;
