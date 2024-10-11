import React from "react";
import cover from "../../../img/cover/cover-dev.webp";

const Regex = () => {
  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="dev cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>Wyrażenia regularne (regular expressions, regex, regexp)</h1>

        <p>
          Są to wzorce opisujące łańcuchy symboli. Wyrażenie regularne może określać zbiór
          pasujących łańcuchów lub wyszczególniać istotne części łańcucha. Posiadają implementację w
          większości języków programowania.
        </p>

        <h3>Składnia:</h3>
        <ul className="snippet-list">
          <li>
            <span>.</span> – dowolny znak
          </li>

          <li>
            <span>\d</span> – cyfra <span>[0-9]</span>
          </li>

          <li>
            <span>\D</span> – inny znak niż cyfra <span>([^0-9])</span>
          </li>

          <li>
            <span>\s</span> – znak biały
          </li>

          <li>
            <span>\S</span> – inny znak niż znak biały
          </li>

          <li>
            <span>\w</span> – znak <span>[a-zA-Z_0-9]</span>
          </li>

          <li>
            <span>\W</span> – inny znak niż <span>\w</span> (np. <span>.</span> <span>’</span>{" "}
            <span>;</span> <span>,</span> <span>&#123;</span> <span>&#125;</span> <span>[</span>
            {"  "}<span>]</span> <span>@</span> <span>!</span>)
          </li>
        </ul>

        <h3>Wybór liczebników:</h3>
        <ul className="snippet-list">
          <li>
            <span>?</span> – 0 lub 1 wystąpienie
          </li>

          <li>
            <span>*</span> – 0 lub więcej wystąpień
          </li>

          <li>
            <span>+</span> – 1 lub więcej wystąpień
          </li>

          <li>
            <span>&#123;n&#125;</span> – dokładnie n wystąpień (np. <span>&#123;5&#125;</span>)
          </li>

          <li>
            <span>&#123;n,&#125;</span> – przynajmniej n wystąpień
          </li>

          <li>
            <span>&#123;n,m&#125;</span> – przynajmniej n lecz nie więcej niż m wystąpień
          </li>
        </ul>

        <h3>Meta znaki:</h3>
        <ul className="snippet-list">
          <li>
            <span>\</span> – wskazanie, że interesuje nas konkretny znak (np. szukając kropki:{" "}
            <span>\.</span>)
          </li>

          <li>
            <span>^</span> – oznaczenie początku linii
          </li>

          <li>
            <span>$</span> – oznaczenie końca linii
          </li>

          <li>
            <span>|</span> – alternatywa (np. <span>a|s</span> → albo <span>a</span> albo{" "}
            <span>s</span>)
          </li>

          <li>
            <span>()</span> – grupowanie znaków (np. <span>(Hello|World!)</span> → albo{" "}
            <span>Hello</span> albo <span>World!</span>)
          </li>

          <li>
            <span>[]</span> – zbiór znaków (np. <span>\s[a-z]+\s?</span>{" "}
            → wszystkie małe wyrazy oddzielone spacją)
          </li>
        </ul>
      </article>
    </>
  );
};

export default Regex;
