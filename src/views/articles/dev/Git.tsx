import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-dev.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Git = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'html cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>VCS – system kontroli wersji</h1>
                <b>git </b>- system rozporszony (zdecentralizowany).

                <b>Konfiguracja:</b>
                <ul className={'terminal-list'}>
                    <li><span>git config</span> - pozwala odczytać i modyfikować zmienne, które kontrolują wszystkie
                        aspekty działania i zachowania git
                        <ul>
                            <li><span>--system</span> - na komputer: <span>/etc/gitconfig</span></li>
                            <li><span>--global</span> - na użytkownika: <span>~/.gitconfig</span></li>
                            <li><span>--local</span> - na repozytorium: <span>.git/config</span></li>
                        </ul>
                    </li>
                    <li><span>git config --global user.name "John Doe"</span></li>
                    <li><span>git config --global user.email "johndoe@domain.com"</span></li>
                    <li><span>git config --list</span> - pokazuje aktualną konfigurację</li>
                    <li><span>git config --global core.editor notepad</span> - ustawienie notepad jako domyślnego
                        edytora
                    </li>
                    <li><span>git config --get remote.origin.url</span> - only the remote URL</li>
                </ul>

                <b>Inicjalizacja:</b>
                <ul className={'terminal-list'}>
                    <li>dodanie pliku <i>.gitignore</i> - automatyczne pomijanie niechcianych w repozytorium plików
                        <pre className={'line-numbers language-js'}>
                    <code>
{`target/
classes/
.idea/
*.iml`}
                    </code>
                </pre>

                    </li>
                    <li><span>git init</span> - stworzenie katalogu <i>.git</i></li>
                </ul>


                <b>Podgląd zmian w poczekalni i poza nią:</b>
                <ul>
                    <li><span>git status --long</span> - domyślnie</li>
                    <li><span>git status --short</span></li>
                    <li><span>git status -s</span> jw.</li>
                    <li><span>git diff</span> - pokazuje, które linie zostały dodane/zmodyfikowane/usunięte</li>
                    <li><span>git diff --staged</span> - jw. tylko dla poczekalni, porównanie z ostatnią zmianą</li>
                </ul>

                <b>Dodawanie plików do poczekalni (staging):</b>
                <ul>
                    <li><span>git add -A</span> - dodawanie wszystkich zmodyfikowanych i dodanych plików do poczekalni
                    </li>
                    <li><span>git add --all</span> - jw.</li>
                    <li><span>git add .</span> - jw. ale prościej</li>
                    <li><span>git add &lt;plik&gt;</span> - dodawanie konkretnego pliku do poczekalni</li>
                    <li><span>git add *.json</span> - dodawanie wszystkich plików z rozszerzeniem .json</li>
                    <li><span>git reset HEAD &lt;plik&gt;</span> - usuwa pliki z indeksu</li>
                </ul>

                <b>Zatwierdzanie zmian (commit):</b>
                <ul>
                    <li><span>git commit</span> - uruchamia edytor commitów i zatwierdza zmiany</li>
                    <li><span>git commit -m "opis zmian"</span> - jw. ale prościej i szybciej</li>
                    <li><span>git commit --amend</span> - nadpisuje ostatni commit, jeżeli czegoś zapomnieliśmy/chcemy
                        poprawić w ostatnim commit
                    </li>
                    <li><span>git log</span> - sprawdza listę commitów</li>
                </ul>

                <b>Praca z gałęziami:</b>
                <ul>
                    <li><span>git branch</span> - listuje wszystkie lokalne gałęzie</li>
                    <li><span>git checkout -b feature/1</span> - utworzenie i przejście do gałęzi <span
                        className={'snippet'}>feature/1</span></li>
                    <li><span>git checkout develop</span> - przejście do gałęzi <span
                        className={'snippet'}>develop</span></li>
                    <li><span>git branch -d feature/1</span> - usunięcie gałęzi <span
                        className={'snippet'}>feature/1</span></li>
                </ul>

                <b>Integrowanie zmian (merge):</b>
                <ul>
                    <li><span>git merge feature/1</span> - scalenie zmian z gałęzi <span>feature/1</span> do aktualnej
                        gałęzi (tworzy się nowy commit)
                    </li>
                    <li><span>git rebase develop</span> - zmiana bazy rewizji, aplikowanie zmian zatwierdzonych w
                        gałęzi <span>develop</span> do aktualnej gałęzi (nie używaj tego polecenia na gałęziach, które
                        są publiczne!
                    </li>
                </ul>

                <b>Wypychanie (push):</b>
                <ul>
                    <li><span>git push -u origin master</span> - wypchnięcie zmian na serwer, jeśli na serwerze nie
                        istnieje branch na którym się znajdujemy, konieczne jest użycie dodatkowych parametrów, aby
                        sprecyzować nazwę brancha (<span>master</span>), który ma być utworzony na serwerze (<span>-u origin master</span>)
                    </li>
                </ul>

                <b>Klonowanie (clone):</b>
                <ul>
                    <li><span>git clone span@adres.com:NazwaRepozytorium.span</span> - domyślnie git pobiera/klonuje
                        repozytorium do katalogu o nazwie <i>NazwaRepozytorium</i></li>
                    <li><span>git clone span@adres.com:NazwaRepozytorium.git Katalog</span> - spowoduje wykonanie klona
                        repozytorium do nowego folderu o nazwie <i>Katalog</i></li>
                </ul>


                <b>Importowanie zmian:</b>
                <ul>
                    <li><span>git remote</span> - listuje zdalne repozytoria</li>
                    <li><span>git remote show origin</span> - if you require full output or referential integrity is
                        intact
                    </li>
                    <li><span>git remote set-url &#123;remote URL&#125;</span> - zmienia URL zdalnego repozytorium</li>
                    <li><span>git remote -v</span> - jw. ale pokazuje też URL</li>
                    <li><span>git fetch &#123;remote&#125;</span> - zaciąga zmiany ze zdalnego repozytorium, ale nie scala ich z
                        lokalnym repo
                    </li>
                    <li><span>git fetch &#123;remote&#125; &#123;branch&#125;</span> - jw. ale z jednej gałęzi</li>
                    <li><span>git pull &#123;remote&#125;</span> - zaciąga zdalne zmiany i przeprowadza operacje merge na
                        aktualnej gałęzi
                    </li>
                    <li><span>git pull --rebase &#123;remote&#125;</span> - jw. ale zamiast merge wykonuje operację zmiany bazy,
                        rebase
                    </li>
                    <li>domyślna wartość dla &#123;remote&#125; to origin</li>
                </ul>


                <b>Cofanie zmian:</b>
                <ul>
                    <li><span>git restore</span> - to polecenie jest przydatne, gdy chcemy cofnąć swoje zmiany lokalne,
                        które istnieją tylko na naszym dysku. Przykładowo skasowałeś pewne pliki przez przypadek i
                        chcesz je odzyskać z repozytorium. Możesz zadeklarować, że chcesz przywrócić tylko jeden
                        konkretny plik. To polecenie nie zrobi nic na danym branchu czy gałęzi. Jeśli więc chcesz cofnąć
                        swoje zmiany na lokalnym dysku, to jest to najlepsze polecenie.
                    </li>
                </ul>


            </article>
        </>
    );
};

export default Git;
