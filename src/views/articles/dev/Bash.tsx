import React from 'react';
import cover from '../../../img/cover/cover-dev.webp';

const Bash = () => {
    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>Polecenia bash</h1>
                <h3>Nawigacja</h3>
                <ul className={'terminal-list'}>
                    <li><span>/</span> - Root directory</li>
                    <li><span>.</span> - This location</li>
                    <li><span>..</span> - Up a directory</li>
                    <li><span>./</span> - Current directory</li>
                    <li><span>../</span> - Parent of current directory</li>
                    <li><span>../../</span> - Two directories backwards</li>
                </ul>

                <h3>Polecenia związane z użytkownikami, grupami, loginami i zamykaniem systemu</h3>
                <ul className={'terminal-list'}>
                    <li><span>shutdown</span> - zamykamy Linuxa</li>
                    <li><span>adduser</span> - dodajemy nowego użytkownika</li>
                    <li><span>newgrp</span> - dodajemy nową grupę</li>
                    <li><span>passwd</span> - zmieniamy hasła</li>
                    <li><span>logout</span> - wylogowanie się</li>
                    <li><span>who</span> - sprawdzamy kto jest aktualnie zalogowany</li>
                    <li><span>users</span> - j/w</li>
                    <li><span>w</span> - j/w</li>
                    <li><span>whoami</span> - sprawdzamy kim jesteśmy</li>
                    <li><span>mesg</span> - zezwolenie na przyjmowanie komunikatów</li>
                    <li><span>write</span> - wysłanie wiadomości do danego użytkownika</li>
                    <li><span>wall</span> - j/w tylko do wszystkich użytkowników</li>
                    <li><span>rwall</span> - j/w tylko do wszystkich w sieci</li>
                    <li><span>ruser</span> - wyświetla użytkowników pracujących w systemie</li>
                    <li><span>talk</span> - możliwość interaktywnej rozmowy</li>
                    <li><span>finger</span> - szczegółowe informacje o użytkownikach</li>
                    <li><span>su</span> - zmieniamy się w innego użytkownika</li>
                    <li><span>chmod</span> - zmieniamy parametry pliku</li>
                    <li><span>chown</span> - zmieniamy właściciela pliku</li>
                    <li><span>chgrp</span> - zmieniamy jaka grupa jest właścicielem pliku</li>
                </ul>

                <h3>Polecenia związane z katalogami</h3>
                <ul className={'terminal-list'}>
                    <li><span>ls</span> - pokazuje nam zawartość katalogu</li>
                    <li><span>dir</span> - okrojona wersja ls, pochodząca z msdos'a</li>
                    <li><span>pwd</span> - pokazuje nam katalog w którym się znajdujemy</li>
                    <li><span>cd</span> - zmieniamy katalog</li>
                    <li><span>rmdir</span> - usuwamy katalog</li>
                    <li><span>mkdir</span> - nowy katalog</li>
                </ul>

                <h3>Polecenia związane z plikami</h3>
                <ul className={'terminal-list'}>
                    <li><span>cat</span> - edytowanie tekstu</li>
                    <li><span>rm</span> - usuwamy plik-i</li>
                </ul>

                <h3>Polecenia związane z kopiowaniem i przenoszeniem, plików i katalogów</h3>
                <ul className={'terminal-list'}>
                    <li><span>mv</span> - przenosimy plik lub zmieniamy jego nazwę</li>
                    <li><span>cp</span> - kopiujemy plik</li>
                    <li><span>mvdir</span> - przenosimy katalog lub zmieniamy jego nazwę</li>
                </ul>

                <h3>Polecenia związane z procesami</h3>
                <ul className={'terminal-list'}>
                    <li><span>ps</span> - pokazuje nam jakie procesy są aktualnie wykonywane</li>
                    <li><span>kill</span> - zabijamy procesy</li>
                </ul>

                <h3>Polecenia związane z pomocą</h3>
                <ul className={'terminal-list'}>
                    <li><span>help</span> - wyświetla nam wszystkie polecenia w Linuxie</li>
                    <li><span>man</span> - pokazuje nam pomoc do programu</li>
                </ul>

                <h3>Polecenia związane z kompresją i archiwilizacją</h3>
                <ul className={'terminal-list'}>
                    <li><span>gzip</span> - kompresuje nam archiwum *.gz</li>
                    <li><span>tar</span> -archiwizuje nam archiwum *.tar</li>
                </ul>

                <hr />

                <h1>Polecenia CLI</h1>
                <a href={'https://ss64.com/bash/'} className={'article-link'}> https://ss64.com/bash/</a>
            </article>
        </>
    );
};

export default Bash;
