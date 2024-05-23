import React from "react";
import cover from "../../../img/cover/cover-java.webp";
import modifiers from "../../../img/java/modifiers.png";
import protectedImg from "../../../img/java/protected_m.png";

const AccessModifiers = () => {
  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="java cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>4 Modyfikatory dostępu:</h1>
        <ul className="snippet-list">
          <li>
            <span>public</span>: dostępny z każdego miejsca
          </li>

          <li>
            <span>protected</span>: dostępne dla klas z tego samego pakietu i klas rozszerzających
          </li>

          <li>
            <span>default</span>: dostępne dla klas z tego samego pakietu (= package-private)
          </li>

          <li>
            <span>private</span>: dostępne tylko dla samej klasy
          </li>
        </ul>

        <hr />

        <h1>Modyfikatory dla klas:</h1>
        <ul className="snippet-list">
          <li>
            <span>public</span>: publiczna
          </li>

          <li>brak (package-private): modyfikator domyślny</li>
        </ul>

        <p>
          Klasa nie mogła by być{" "}
          <span>private</span>, ponieważ nie było by do niej dostępu a jej funkcjonalność mogła by
          wykonywać tylko ona sama.
        </p>

        <hr />

        <h1>Modyfikatory dla pól i metod:</h1>
        <div className="article-img-wrapper">
          <img src={modifiers} alt="modifiers" className="article-img article-img-desktop" />
        </div>
        <p>
          <i>*no modifier</i> = package-private
        </p>

        <hr />

        <h3>public</h3>
        <p className="snippets">
          <span>public</span>{" "}
          jest najszerszym poziomem widoczności – klasy, pola i metody oznaczone w ten sposób są
          widoczne dla wszystkich innych klas.
        </p>

        <h3>protected</h3>
        <p className="snippets">
          Drugi w kolejności – <span>protected</span>{" "}
          – jest dostępny dla klasy zdefiniowanej w tej samej paczce oraz w klasach dziedziczących
          (<span>extends</span>) po klasie, która zawiera pola czy metody oznaczone jako{" "}
          <span>protected</span>.
        </p>

        <ul className="snippet-list">
          <li>dostępność w tym samym pakiecie</li>

          <li>
            dostępność w innym pakiecie poprzez{" "}
            <span>super</span>, pod warunkiem, że klasa rozszerza główną klasę ze zmienną/metodą
          </li>
        </ul>

        <div className="article-img-wrapper">
          <img src={protectedImg} alt="protected" className="article-img article-img-desktop" />
        </div>

        <h3>no modifier = package-private</h3>
        <p>
          Package, będący domyślnym poziomem widoczności nieposiadającym własnego modyfikatora,
          ogranicza widoczność do klas z tej samej paczki.
        </p>
        <ul>
          <li>
            dostępność <u>tylko</u> w tym samym pakiecie
          </li>

          <li>nie ma znaczenia czy klasa rozszerza rozszerza główną klasę ze zmienną/metodą</li>
        </ul>

        <h3>private</h3>
        <p className="snippets">
          Finalnie mamy <span>private</span>{" "}
          – czyli prywatne. Jak sama nazwa wskazuje elementy z dostępem na poziomie prywatnym są
          widoczne tylko dla struktur zdefiniowanych w tej samej klasie.
        </p>

        <hr />

        <h1>Java - modyfikatory dostępu</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/x3iFRehjpQk"
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

export default AccessModifiers;
