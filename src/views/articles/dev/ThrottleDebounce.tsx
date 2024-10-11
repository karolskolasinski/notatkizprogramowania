import React from "react";
import cover from "../../../img/cover/cover-dev.webp";

const ThrottleDebounce = () => {
  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="dev cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>throttle vs. debounce</h1>

        <p>
          Zarówno <strong>throttle</strong> jak i <strong>debounce</strong>{" "}
          to techniki stosowane w programowaniu w celu ograniczenia częstotliwości wywoływania
          funkcji, ale różnią się w sposobie działania.
        </p>

        <ul>
          <li>
            <strong>throttle</strong>{" "}
            ogranicza wywołania funkcji do określonego czasu. Niezależnie od tego, ile razy
            użytkownik wywoła daną funkcję, zostanie ona uruchomiona tylko raz w zadanym przedziale
            czasu. Używamy throttle, gdy chcemy, aby funkcja była wykonywana regularnie, np. podczas
            przewijania strony, ale nie za często.
            <br />
            <u>Przykład użycia:</u>{" "}
            Wyszukiwanie wyników na bieżąco podczas przewijania lub aktualizacja widoku na mapie.
          </li>

          <li>
            <strong>debounce</strong>{" "}
            powoduje, że funkcja zostanie wywołana dopiero po tym, jak użytkownik przestanie ją
            wywoływać przez określony czas. Używamy debounce, gdy chcemy uruchomić funkcję dopiero,
            gdy akcje użytkownika zostaną zakończone, np. po zakończeniu wpisywania w polu
            tekstowym.
            <br />
            <u>Przykład użycia:</u>{" "}
            Autouzupełnianie w wyszukiwarkach – zapytanie wysyłane dopiero, gdy użytkownik skończy
            wpisywać.
          </li>
        </ul>

        <h3>Podsumowanie:</h3>

        <ul>
          <li>
            Używaj{" "}
            <strong>throttle</strong>, gdy chcesz, aby funkcja była wywoływana cyklicznie co pewien
            czas.
          </li>

          <li>
            Używaj{" "}
            <strong>debounce</strong>, gdy chcesz wywołać funkcję dopiero, gdy skończą się akcje
            użytkownika.
          </li>
        </ul>
      </article>
    </>
  );
};

export default ThrottleDebounce;
