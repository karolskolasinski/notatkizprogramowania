import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-java.webp";
import reference from "../../../img/java/reference.png";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/components/prism-java";

const Reference = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="java cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>Referencja</h1>
        <p>Jest to zmienna obiektowa, która wskazuje (odwołuje się) do obiektu.</p>

        <div className="article-img-wrapper">
          <img src={reference} alt="reference" className="article-img" />
        </div>

        <p className="snippets">
          Możemy teraz wywoływać metody klasy <span>String</span> dla tego obiektu
          <span>(String "rower")</span>, zarówno za pośrednictwem zmiennej <span>a</span> jak i{" "}
          <span>b</span>
          - i będzie to miało dokładnie ten sam skutek. Koniec końców metody te będą wywoływane na
          tym samym obiekcie klasy <span>String</span>.
        </p>

        <p className="snippets">
          Zmienna obiektowa nie jest obiektem, tylko referencją do obiektu. Wartość każdej zmiennej
          obiektowej jest referencją do obiektu, który jest przechowywany gdzieś indziej. Wartość
          zwracana przez operator <span>new</span> też jest referencją. Instrukcja typu:
        </p>

        <pre className="line-numbers language-java">
          <code>
{`Date deadline = new Date();`}
          </code>
        </pre>

        <p className="snippets">
          składa się z dwóch części. Wyrażenie <span>new Date();</span> tworzy obiekt typu{" "}
          <span>Date</span>, a jego wartością jest referencja do tego nowo utworzonego obiektu.
        </p>

        <p className="snippets">
          Referencja zostaje zapisana w zmiennej{" "}
          <span>deadline</span>. Aby zaznaczyć, że zmienna obiektowa nie odwołuje się do żadnego
          obiektu, trzeba jej wartość ustawić na{" "}
          <span>null</span>, bo zmienne obiektowe nie są automatycznie inicjalizowane wartością{" "}
          <span>null</span>.
        </p>

        <hr />

        <h1>String Pool</h1>
        <p className="snippets">
          W Javie wszystkie obiekty przechowywane są w pamięci w stercie pamięci (<strong>
            Memory Heap
          </strong>). To na niej działa Garbage Collector i jeśli dostaniemy kiedyś
          <span>OutOfMemoryException</span>{" "}
          to znaczy, że zbytnio zaszaleliśmy z tworzeniem nowych bytów i zapełniliśmy całą stertę
          szybciej niż zwalnialiśmy miejsce. W tej stercie znajduje się wydzielony obszar pamięci
          przeznaczony do przechowywania Stringów, których to w programie potrafi być
          <u>bardzo, bardzo dużo</u>{" "}
          - dlatego też są obsługiwane w specjalny sposób. Właśnie do tego służy{" "}
          <strong>String Pool</strong>.
        </p>

        <p className="snippets">
          Za każdym razem, gdy stworzymy nowego Stringa w ten sposób{" "}
          <span>String name = "John"</span>, to ów String jest tworzony w{" "}
          <strong>String Pool</strong>{" "}
          i tam jest przechowywany. Jakiś czas później, przy tworzeniu innego Stringa{" "}
          <span>String anotherName = "John"</span>{" "}
          nie tworzy się kolejny wyraz "John" w pamięci, lecz oba wskazują na ten sam element w{" "}
          <strong>String Pool</strong>. Dlatego też w tym przypadku porównanie{" "}
          <span>name == anotherName</span> zwróci nam{" "}
          <span>true</span>, bo w tym wypadku obie referencje wskazują na ten sam obiekt.
        </p>

        <p className="snippets">
          Sprawy mają się inaczej, gdy stworzymy Stringa w ten sposób
          <span>String yetAnotherName = new String("John")</span>. Wówczas jest tworzony za każdym
          razem nowy obiekt w <strong>Memory Heap</strong>, a dopiero on wskazuje na obiekt w{" "}
          <strong>
            String Pool
          </strong>. Dlatego porównanie <span>yatAnotherName == name</span> zwróci{" "}
          <span>false</span>, bo fizycznie są to referencje do dwóch różnych obiektów. Dlatego też
          po pierwsze nie powinno się robić nigdy{" "}
          <span>new String("...")</span>, bo tworzy to dwa obiekty (w <strong>Memory Heap</strong>
          {" "}
          i opcjonalnie w <strong>String Pool</strong>, zamiast tylko w{" "}
          <strong>String Pool</strong>). Po drugie do porównywania Stringów używamy metody{" "}
          <span>.equals</span> zamiast{" "}
          <span>==</span>, gdyby właśnie ktoś przypadkiem stworzył tekst za pomocą{" "}
          <span>new String</span>. Metoda <span>.equals</span>
          porównuje faktyczne wartości (czyli w przypadku Stringów to co jest w{" "}
          <strong>String Pool</strong>), a nie na co wskazuje referencja.
        </p>

        <hr />

        <h1>Immutable</h1>
        <p>
          W programowaniu istnieje ważna koncepcja zwana <strong>Immutable</strong>{" "}
          i oznacza, że obiekt zawsze przechowuje te same wartości. Jeśli musimy zmodyfikować te
          wartości, powinniśmy utworzyć nowy obiekt. Typowym przykładem jest klasa{" "}
          <strong>String</strong>. <strong>Stringi</strong>{" "}
          są niezmiennymi obiektami, więc wszystkie operacje na nich generują nowy ciąg. Niezmienne
          typy umożliwiają pisanie programów z mniejszą liczbą błędów.
        </p>

        <p className="snippets">
          Klasa <span>Patient</span>{" "}
          nie jest niezmienna, ponieważ istnieje możliwość zmiany dowolnego pola obiektu.
        </p>

        <pre className="line-numbers language-java">
          <code>
{`Patient patient = new Patient();

patient.name = "Mary";
patient.name = "Alice";`}
          </code>
        </pre>
      </article>
    </>
  );
};

export default Reference;
