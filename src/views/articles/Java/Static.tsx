import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-java.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const Static = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="java cover" className="cover" />
      </div>
      <article className="article article-content">
        <p>
          Metoda statyczna może mieć argumenty takie jak zwykła metoda lub nie mieć żadnych
          argumentów. Jednak w przeciwieństwie do zwykłych metod, metody statyczne mają kilka
          specjalnych cech:
        </p>

        <ul className="snippet-list">
          <li>
            metoda statyczna może uzyskać dostęp tylko do pól statycznych, nie może uzyskać dostępu
            do pól niestatycznych (z wnętrza metody statycznej nie możemy odwoływać się do pól i
            metod nie zadeklarowanych jako statyczne)
          </li>

          <li>
            metoda statyczna może wywołać inną metodę statyczną, ale nie może wywołać metody
            instancji
          </li>
          <li>
            metoda statyczna nie może odwoływać się do słowa kluczowego{" "}
            <span>this</span>, ponieważ w kontekście statycznym nie ma instancji
          </li>
        </ul>

        <p className="snippets">
          Zwykłe metody mogą jednak uzyskać dostęp do pól i metod statycznych. Dodatkowo metody i
          zmienne zadeklarowane jako <span>static</span>{" "}
          związane są z konkretną klasą, a nie jej instancją - obiektem. <span>static</span>{" "}
          oznacza, że coś istnieje zawsze. Nie trzeba tworzyć instancji klasy, żeby wywołać metodę
          statyczną. Na przykład, zamiast:
        </p>
        <pre className="line-numbers language-js">
          <code>
{`package sample;

public class Sample {
  public static void main(String[] args) {
    Matematyka test = new Matematyka();

    double wynik = test.dodaj(10, 20);

    System.out.println(wynik);
  }
}

class Matematyka {
  double dodaj(double a, double b) {
    return a + b;
  }
}`}
          </code>
        </pre>

        <p className="snippets">
          można zastosować <span>static</span> i zmienić na coś takiego:
        </p>
        <pre className="line-numbers language-js">
          <code>
{`package sample;

public class Sample {
  public static void main(String[] args) {
  // Matematyka test = new Matematyka();

  double wynik = Matematyka.dodaj(10, 20);

  System.out.println(wynik);
  }
}

class Matematyka {
  static double dodaj(double a, double b) {
    return a + b;
  }
}`}
          </code>
        </pre>
      </article>
    </>
  );
};

export default Static;
