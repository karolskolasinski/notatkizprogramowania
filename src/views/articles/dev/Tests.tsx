import React from "react";
import cover from "../../../img/cover/cover-dev.webp";

const Tests = () => {
  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="dev cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>Testy</h1>

        <h3>Dlaczego pisze się testy?</h3>
        <ul>
          <li>aby podnieść jakość tworzonego przez nas kodu</li>
          <li>aby udowodnić, że kod robi to co myślimy, że robi</li>
          <li>aby nie naprawiać jednej funkcjonalności psując drugą</li>
          <li>aby nie bać się zmieniać już istniejącego kodu</li>
          <li>aby nie iść na przekór dobrym standardom</li>
        </ul>

        <hr />

        <h3>Podział testów</h3>
        <ul>
          <li>jednostkowe</li>

          <ul className="nested-list">
            <li>testujemy izolowany element (np. metoda, klasa) bez zależności</li>
            <li>tylko jedno potencjalne miejsce awarii</li>
            <li>szybkie wykonanie testów (&lt;1s)</li>
            <li>nie wymagają jakiejkolwiek konfiguracji</li>
            <li>może być świetną dokumentacją</li>
            <li>znacznie ułatwiają refactoring codu</li>
          </ul>

          <li>integracyjne</li>
          <ul className="nested-list">
            <li>
              testują wytworzone oprogramowanie poprzez weryfikację zachowania kompletnej aplikacji
              pod kątem wymagań biznesowych za pomocą różnego rodzaju interfejsu udostępnianego
              użytkownikom.
            </li>
            <li>pisane często z wykorzystaniem np. selenium lub j-meter</li>
            <li>tworzone aby symulować zachowanie aplikacji w rzeczywistym środowisku</li>
          </ul>
        </ul>

        <hr />

        <h3>Cykl życia testów</h3>
        <ul className="snippet-list">
          <li>
            <strong>@BeforeEach</strong>{" "}
            np. napisanie metody, do której można wydzielić przygotowanie instancji klasy, z której
            korzystają testy.
          </li>

          <li>
            <strong>@AfterEach</strong>{" "}
            np. wyczyszczenie, usunięcie jakichś niepotrzebnych danych, aby np. zwolnić zasoby
          </li>

          <li>
            <strong>@BeforeAll</strong> (metoda musi być{" "}
            <span>static</span>) np. kod który służy do otwarcia pliku, w którym będziemy zapisywać,
            albo do zainicjalizowania połączenia z bazą danych
          </li>

          <li>
            <strong>@AfterAll</strong> (metoda musi być{" "}
            <span>static</span>) np. zamknięcie tego połączenia lub pliku
          </li>
        </ul>

        <hr />

        <h3>BDD - Behavior-driven development</h3>
        <p>
          jest to zbiór dobrych praktyk przy tworzeniu testów jednostkowych, które testują realną
          funkcjonalność aplikacji a nie każdą metodę. Jedną z powszechnie stosowanych praktyk BDD
          jest podział kodu testu na 3 sekcje:
        </p>

        <ol>
          <li>
            <strong>given</strong>{" "}
            - tworzymy założenia wstępne, tworzymy instancje obiektów i ich stan początkowy
          </li>

          <li>
            <strong>when</strong> - wykonujemy wywołanie metody, którą chcemy przetestować
          </li>

          <li>
            <strong>then</strong>{" "}
            - sprawdzamy nasze oczekiwania z rzeczywistymi rezultatami, najczęściej wykorzystując
            asercje
          </li>
        </ol>
        <p>Ponadto nazywa się testy dokładnie od funkcjonalności jaką dany test ma sprawdzać</p>

        <hr />

        <h3>Pokrycie kodu (code coverage)</h3>
        <p>
          oznacza ile procent linijek kodu (nie licząc klamer, deklaracji itp.) jest realnie
          wykonywanych podczas wszystkich testów. Innymi słowy, wyniki wykonania jakiej części kodu
          weryfikujemy (w teorii). Dobrą wartością jest 70–85% pokrycia (w zależności od
          technologii, logiki biznesowej, złożoności itp.). Pokrycie poniżej 40% jest z kolei
          przeważnie bardzo złym sygnałem.
        </p>
      </article>
    </>
  );
};

export default Tests;
