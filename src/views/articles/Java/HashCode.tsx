import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-java.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/components/prism-java";

const HashCode = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="java cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>hashCode</h1>
        <p>
          Może służyć jako kryterium porównania dla elementów w zbiorach. Dla przykładu w zbiorze
          mamy dwa obiekty przyjmujące jako parametr PESEL:
        </p>
        <pre className="line-numbers language-java">
          <code>
{`Set<Osoba> zbior = new HashSet<>();
Osoba a = new Osoba ("90012311122")
Osoba b = new Osoba ("90012311122")`}
          </code>
        </pre>

        <p className="snippets">
          W rzeczywistości jest to ta sama osoba. Domyślnym kryterium porównania jest hashCode
          (generowany na podstawie miejsca w pamięci) - metoda <span>equals()</span>{" "}
          <strong>domyślnie porównuje ich</strong>
          <span>hashCode</span>, czyli <strong>referencje</strong>{" "}
          (to, jakie miejsce w pamięci zajmują). Ponieważ są to dwie instancje, będą miały różny
          hashCode, a ponieważ jest to ta sama osoba, wynik porównania powinien zwrócić wartość{" "}
          <span>true</span>. Aby to osiągnąć trzeba nadpisać metody
          <span>equals()</span> i <span>hashCode()</span>.
        </p>
        <pre className="line-numbers language-java">
          <code>
{`@Override
public boolean equals(Object o) {
  if (this == o) return true;
  if (!(o instanceof Osoba)) return false;
  Osoba osoba = (Osoba) o;
  return Objects.equals(pesel, osoba.pesel);
}

@Override
public int hashCode() {
  return Objects.hash(pesel);
}`}
          </code>
        </pre>

        <p className="snippets">
          Wówczas <span>hashCode</span>{" "}
          są generowane na podstawie pól, w tym przypadku PESEL. Metodę generuje IntelliJ. Inaczej
          mówiąc, aby metoda <span>equals</span> porównująca <span>hashCode</span>{" "}
          obiektów dała taki sam wynik, musi mieć do porównania dwa takie same{" "}
          <span>hashCode</span>, które będą takie same kiedy zostaną wygenerowane na podstawie pól.
        </p>
        <p className="snippets">
          Po hashCode dokonywane jest porównanie w HashMap czy HashSet (we wszystkim co ma Hash w
          nazwie) czy obiekty są unikalne. Jedyną klasą, która ma nadpisaną metodę{" "}
          <span>equals</span> jest
          <span>String</span>. Porównuje ona domyślnie zawartość (treść) stringa. Wszystkie inne
          klasy normalnie porównują ze sobą referencje.
        </p>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/IsVnZVfCr50"
            width="100%"
            height="315"
            allowFullScreen
            title="srcset and sizes attributes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </article>
    </>
  );
};

export default HashCode;
