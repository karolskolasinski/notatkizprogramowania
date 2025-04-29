
const Pomodoro = () => {
  return (
    <>
      <article className="article article-content">
        <h1>Pomodoro</h1>
        <p>
          Pomodoro to technika zarządzania czasem, która polega na pracy w blokach czasowych, zwykle
          trwających 25 minut, zwanych „pomodoro”. Po każdej sesji pracy następuje krótka przerwa, a
          po czterech takich cyklach – dłuższa przerwa. Celem jest zwiększenie koncentracji i
          produktywności poprzez regularne przerwy.
        </p>

        <h3>Jak siedzieć przy biurku</h3>
        {/*<video controls className="mp4 vertical-mp4">*/}
        {/*  <source src={C_V1emIomQP} type="video/mp4" />*/}
        {/*</video>*/}

        <h3>Pomodoro timer</h3>
        <ul>
          <li>
            <a
              href="https://chromewebstore.google.com/detail/asystent-marinara-pomodor/lojgmehidjdhhbmpjfamhpkpodfcodef"
              className="article-link"
            >
              Marinara: Pomodoro Assistant
            </a>
          </li>
        </ul>

        <h3>Pomysły na przerwę</h3>
        <ul>
          <li>
            <strong>Krótki spacer</strong> – rozruszaj nogi i dotleń mózg.
          </li>

          <li>
            <strong>Ćwiczenia rozciągające</strong>

            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/6C-wfV27bzI"
                width="100%"
                height="315"
                allowFullScreen
                title="1 min. Breathe Bubble | Breathing Exercise"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>

            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/h3PZZyoXnKU"
                width="100%"
                height="315"
                allowFullScreen
                title="1 min. Breathe Bubble | Breathing Exercise"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </li>

          <li>
            <strong>Tap massage</strong> - pobudza przepływ krwi i układ nerwowy

            {/*<video controls className="mp4 vertical-mp4">*/}
            {/*  <source src={C_jFk8pIRhW} type="video/mp4" />*/}
            {/*</video>*/}
          </li>

          <li>
            <strong>Napij się wody</strong> - często, małe łyki
          </li>

          <li>
            <strong>Spójrz w górę</strong> - najlepiej na zewnątrz, min 1 min.
          </li>

          <li>
            <strong>Spójrz w górę</strong> - najlepiej na zewnątrz, min 1 min.
          </li>

          <li>
            <strong>Szybki wysiłek</strong> - 1 min. plank, 1min. pompki
          </li>

          <li>
            <strong>Nuda</strong>{" "}
            - 1 min. nudy (zmiana punktu odniesienia), "Jeżeli nie wiesz co zrobić, to umyj zęby"
            (mała pozytywna czynność)
          </li>

          <li>
            <strong>Ćwiczenie oddechowe</strong> - 1 min. Breathe Bubble | Breathing Exercise

            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/_v7nbvdyhtw"
                width="100%"
                height="315"
                allowFullScreen
                title="1 min. Breathe Bubble | Breathing Exercise"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </li>
        </ul>

        <h4>Źródła:</h4>
        <a href="https://www.youtube.com/watch?v=wOJ5kuxe_NM" className="article-link">
          https://www.youtube.com/watch?v=wOJ5kuxe_NM
        </a>
      </article>
    </>
  );
};

export default Pomodoro;
