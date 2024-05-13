import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-html.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const Form = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="html cover" className="cover" />
      </div>

      <article className="article article-content">
        <h1>Formularz</h1>

        <p className="snippets">
          Aby stworzyć swój formularz, powinieneś użyć sparowanego tagu z dość sugestywną nazwą
          <span>&lt;form&gt;</span>. Elementy do wprowadzania informacji są umieszczone wewnątrz
          tego znacznika. Ma dwie ważne cechy:
        </p>

        <ul className="snippet-list">
          <li>
            <span>action</span>{" "}
            określa adres programu lub dokumentu przetwarzającego dane formularza
          </li>

          <li>
            <span>method</span> informuje serwer o metodzie żądania
          </li>
        </ul>

        <p className="snippets">
          Metody <span>get</span> i <span>post</span>{" "}
          są wykorzystywane do przekazywania danych z formularza do serwera. Jeśli atrybut metody
          nie zostanie określony, <span>get</span> będzie używany domyślnie.
        </p>

        <p className="snippets">
          <span>&lt;label&gt;</span>{" "}
          łączy tekst z elementem formularza. Znacznik nie pokazuje się wizualnie, więc aby
          zrozumieć, czy jest powiązany, czy nie, kliknij w tekst. Jeżeli aktywuje pobliski element
          formularza, oznacza to, że <span>&lt;label&gt;</span>działa.
        </p>

        <pre className="line-numbers language-html">
          <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <title>HTML Forms</title>
</head>

<body>
<form action="[value]" method="post">
    <label>
        <h1>First Name:</h1>
        <input type="text" name="firstName">
    </label>
    <label>
        <h1>Last Name:</h1>
        <input type="text" name="lastName">
    </label>

    <label>
        <h1>Password:</h1>
        <input type="password" name="password">
    </label>

    <br>
    <br>

    <input id="male" type="radio" name="sex" value="male">
    <label for="male">Male</label>
    <input id="female" type="radio" name="sex" value="female">
    <label for="female">Female</label>

    <br>
    <br>

    <input id="computer" type="checkbox" name="technique" value="computer">
    <label for="computer">I have a computer</label>
    <br>
    <input id="phone" type="checkbox" name="technique" value="phone">
    <label for="phone">I have a phone</label>

    <br>
    <br>

    <button type="submit">Submit</button>
</form>
</body>
</html>`}
          </code>
        </pre>

        <h3>Wynik:</h3>
        <form action="[value]" method="post" className="example-form">
          <label>
            <h1>First Name:</h1>
            <input type="text" name="firstName" />
          </label>

          <label>
            <h1>Last Name:</h1>
            <input type="text" name="lastName" />
          </label>

          <label>
            <h1>Password:</h1>
            <input type="password" name="password" />
          </label>

          <br />
          <br />

          <input id="male" type="radio" name="sex" value="male" />
          <label htmlFor="male">Male</label>
          <input id="female" type="radio" name="sex" value="female" />
          <label htmlFor="female">Female</label>

          <br />
          <br />

          <input id="computer" type="checkbox" name="technique" value="computer" />
          <label htmlFor="computer">I have a computer</label>
          <br />
          <input id="phone" type="checkbox" name="technique" value="phone" />
          <label htmlFor="phone">I have a phone</label>

          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </article>
    </>
  );
};

export default Form;
