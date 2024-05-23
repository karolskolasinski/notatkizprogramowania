import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-java.webp";
import stackHeap from "../../../img/java/stack-heap.png";
import assignment from "../../../img/java/assignment.png";
import typeConversion from "../../../img/java/type-conversion.png";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/components/prism-java";

const Types = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="java cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>Typy proste</h1>
        <ol className="snippet-list">
          <li>
            <span>char</span>{" "}
            - reprezentuje litery (wielkie i małe), cyfry i inne symbole. Każdy znak to tylko jedna
            litera ujęta w pojedyncze cudzysłowy. Ten typ ma taki sam rozmiar jak
            <span>short</span>{" "}
            (2 bajty = 16 bitów). Zmienne typu char mają wartości odpowiadające dowolnemu znakowi
            kodowania UTF-16.
          </li>

          <li>
            <span>boolean</span>{" "}
            - reprezentuje wartość typu logicznego. Może przechowywać tylko dwie wartości:{" "}
            <span>true</span> i{" "}
            <span>false</span>. Przedstawia tylko jeden bit informacji, ale jego rozmiar nie jest
            dokładnie określony.
          </li>

          <li>
            <span>byte</span> - rozmiar 8 bitów (1 bajt), zakres od -128 do 127
          </li>

          <li>
            <span>short</span> - rozmiar 16 bitów (2 bajty), zakres od -32 768 do 32 767
          </li>

          <li>
            <span>int</span> - rozmiar 32 bity (4 bajty), zakres od -2 147 483 648 do 2 147 483 647
          </li>

          <li>
            <span>long</span>{" "}
            - rozmiar 64 bity (8 bajtów), zakres od - (2<sup>63</sup>) do (2<sup>63</sup>) -1
            (posiadają przyrostek <strong>L</strong>, lub <strong>l</strong>)
          </li>

          <li>
            <span>float</span>{" "}
            - reprezentuje wartości pojedynczej precyzji (32 bity, precyzja do 7 cyfr) (posiadają
            przyrostek <strong>F</strong>, lub <strong>f</strong>)
          </li>

          <li>
            <span>double</span>{" "}
            - reprezentuje wartości podwójnej precyzji (64 bity, precyzja do 16 cyfr) (posiadają
            przyrostek <strong>D</strong>, lub <strong>d</strong>)
          </li>
        </ol>

        <hr />

        <h1>Typ prosty a typ złożony:</h1>
        <ul>
          <li>typ złożony dziedziczy z klasy Object</li>

          <li>każdy typ prosty ma swój odpowiednik w typie złożonym</li>

          <li>
            do typów złożonych zalicza się <span>String</span>
          </li>
        </ul>

        <p>
          Podstawowa różnica polega na tym, że zmienna typu pierwotnego przechowuje rzeczywiste
          wartości, podczas gdy zmienna typu referencyjnego przechowuje adres w pamięci
          (odniesienie), w którym znajdują się dane. Dane można przedstawić jako złożoną strukturę,
          która zawiera inne typy danych jako ich części.
        </p>

        <p>
          Poniższy rysunek po prostu pokazuje tę różnicę. Istnieją dwie główne przestrzenie pamięci:
          stos i sterta. Wszystkie wartości typów pierwotnych są przechowywane w pamięci stosu, ale
          zmienne typów referencyjnych przechowują adresy obiektów znajdujących się w pamięci
          sterty.
        </p>

        <div className="article-img-wrapper">
          <img src={stackHeap} alt="stack & heap" className="article-img" />
        </div>

        <p>
          Sposób przechowywania danych wpływa również na mechanizm przypisywania wartości zmiennej
          do innej zmiennej:
        </p>
        <ul>
          <li>typy pierwotne: wartość jest właśnie kopiowana;</li>

          <li>
            typy odwołań: adres do wartości jest kopiowany (dane są wspólne dla kilku zmiennych).
          </li>
        </ul>

        <p>Oto fragment kodu i obraz, który to demonstruje.</p>
        <pre className="line-numbers language-java">
          <code>
{`int a = 100;
int b = a; // 100 is copied to b

String language = new String("java");
String java = language;`}
          </code>
        </pre>

        <p className="snippets">
          Zmienna <span>b</span> ma kopię wartości przechowywanej w zmiennej{" "}
          <span>a</span>. Ale zmienne <span>language</span> i <span>java</span>{" "}
          odniesienie do tej samej wartości, zamiast je kopiować. Poniższy rysunek wyraźnie pokazuje
          różnicę.
        </p>

        <div className="article-img-wrapper">
          <img src={assignment} alt="assignment" className="article-img" />
        </div>

        <p>
          Pamiętaj tylko, że przypisując jedną wartość zmiennej referencyjnej innej, po prostu
          tworzymy kopię referencji, a nie samą wartość.
        </p>

        <hr />

        <h1>Konwersja typów</h1>
        <div className="article-img-wrapper">
          <img
            src={typeConversion}
            alt="type conversion"
            className="article-img article-img-desktop"
          />
        </div>

        <hr />

        <h1>POJO</h1>
        <p>
          Jest to klasa zawierająca pola oraz metody dostępowe (stery oraz getery). Należy pamiętać,
          że w obiektach POJO nie umieszczamy logiki biznesowej.
        </p>

        <hr />

        <h1>Formatted output</h1>
        <p className="snippets">
          Użycie w metodach <span>System.out.printf()</span> oraz
          <span>String.format()</span>:
        </p>
        <ul className="snippet-list">
          <li>
            <span>%c</span> wstawia <span>char</span>
          </li>

          <li>
            <span>%s</span> wstawia <span>String</span>
          </li>

          <li>
            <span>%d</span> wstawia <span>int</span>, <span>short</span>, <span>byte</span>,
            <span>long</span>
          </li>

          <li>
            <span>%2f</span> wstawia <span>double</span>, <span>float</span>{" "}
            do 2 miejsc po przecinku
          </li>

          <li>
            <span>%n</span> wstawia nową linię (newline)
          </li>
        </ul>
      </article>
    </>
  );
};

export default Types;
