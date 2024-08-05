import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-dev.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/components/prism-ignore";

const Git = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="dev cover" className="cover" />
      </div>
      <article className="article article-content">
        <h1>Git</h1>

        <h3>Konfiguracja:</h3>
        <ul className="terminal-list">
          <li>
            <span>git config</span>{" "}
            - pozwala odczytać i modyfikować zmienne, które kontrolują wszystkie aspekty działania i
            zachowania git

            <ul className="nested-list">
              <li>
                <span>--system</span> - na komputer: <span>/etc/gitconfig</span>
              </li>

              <li>
                <span>--global</span> - na użytkownika: <span>~/.gitconfig</span>
              </li>

              <li>
                <span>--local</span> - na repozytorium: <span>.git/config</span>
              </li>
            </ul>
          </li>

          <li>
            <span>git config --global user.name "John Doe"</span>
          </li>

          <li>
            <span>git config --global user.email "johndoe@domain.com"</span>
          </li>

          <li>
            <span>git config --list</span> - pokazuje aktualną konfigurację
          </li>

          <li>
            <span>git config --global core.editor notepad</span>{" "}
            - ustawienie notepad jako domyślnego edytora
          </li>

          <li>
            <span>git config --get remote.origin.url</span> - only the remote URL
          </li>
        </ul>

        <h3>Praca z gałęziami:</h3>
        <ul className="terminal-list">
          <li>
            <span>git branch</span> - listuje wszystkie lokalne gałęzie
          </li>

          <li>
            <span>git checkout -b feature/1</span> - utworzenie i przejście do gałęzi{" "}
            <span>feature/1</span>
          </li>

          <li>
            <span>git checkout develop</span> - przejście do gałęzi <span>develop</span>
          </li>

          <li>
            <span>git branch -d feature/1</span> - usunięcie gałęzi <span>feature/1</span>
          </li>
        </ul>

        <h3>Integrowanie zmian (merge):</h3>
        <ul className="terminal-list">
          <li>
            <span>git merge feature/1</span> - scalenie zmian z gałęzi <span>feature/1</span>{" "}
            do aktualnej gałęzi (tworzy się nowy commit)
          </li>

          <li>
            <span>git rebase develop</span>{" "}
            - zmiana bazy rewizji, aplikowanie zmian zatwierdzonych w gałęzi <span>develop</span>
            {" "}
            do aktualnej gałęzi (nie używaj tego polecenia na gałęziach, które są publiczne!
          </li>

          <li>
            Jak całkowicie zastąpić gałąź główną <span className="terminal">master</span>{" "}
            z innej gałęzi np. <span className="terminal">seotweaks</span>?
          </li>

          <p>Use the “ours” merge strategy to overwrite master with seotweaks like this:</p>
          <ul className="nested-list">
            <li>
              <span>git checkout master</span>
            </li>

            <li>
              <span>git pull</span>
            </li>

            <li>
              <span>git checkout seotweaks</span>
            </li>

            <li>
              <span>git merge -s ours master</span>
            </li>

            <li>
              <span>git checkout master</span>
            </li>

            <li>
              <span>git merge seotweaks</span>
            </li>
          </ul>
        </ul>

        <h3>Cofanie zmian:</h3>
        <ul className="terminal-list">
          <li>
            <span>git restore</span>{" "}
            - to polecenie jest przydatne, gdy chcemy cofnąć swoje zmiany lokalne, które istnieją
            tylko na naszym dysku. Przykładowo skasowałeś pewne pliki przez przypadek i chcesz je
            odzyskać z repozytorium. Możesz zadeklarować, że chcesz przywrócić tylko jeden konkretny
            plik. To polecenie nie zrobi nic na danym branchu czy gałęzi. Jeśli więc chcesz cofnąć
            swoje zmiany na lokalnym dysku, to jest to najlepsze polecenie.
          </li>
        </ul>

        <h3>Usunięcie ostatniego commita ze zdalnego repozytorium:</h3>
        <p>
          Be careful that this will create an "alternate reality" for people who have already
          fetch/pulled/cloned from the remote repository. But in fact, it's quite simple:
        </p>
        <ul className="terminal-list">
          <li>
            <span>git reset HEAD^</span> - remove commit locally
          </li>

          <li>
            <span>git push origin +HEAD</span> - force-push the new HEAD commit
          </li>
        </ul>

        <h3>
          Jak sprawić, by Git zapomniał o pliku, który był śledzony, ale jest teraz w{"  "}
          <span className="snippet">.gitignore</span>?
        </h3>

        <p>To stop tracking a file, we must remove it from the index:</p>
        <ul className="terminal-list">
          <li>
            <span>git rm --cached &lt;file&gt;</span>
          </li>

          <p>To remove a folder and all files in the folder recursively:</p>
          <li>
            <span>git rm -r --cached &lt;folder&gt;</span>
          </li>
        </ul>

        <p>
          The removal of the file from the head revision will happen on the next commit. WARNING:
          While this will not remove the physical file from your local machine, it will remove the
          files from other developers' machines on their next <span>git pull</span>.
        </p>

        <h3>Changing git commit message after push:</h3>

        <p>If it is the most recent commit, you can simply do this:</p>
        <ul className="terminal-list">
          <li>
            <span>git commit --amend</span>
          </li>
          <li>
            <span>git push --force-with-lease</span>
          </li>
          <p>or you can use</p>
          <li>
            <span>git push --force</span>
          </li>
        </ul>

        <p>
          If someone else pushed changes to the same branch, you probably want to avoid destroying
          those changes. The <span className="terminal">--force-with-lease</span>{" "}
          option is the safest, because it will abort if there are any upstream changes.
        </p>
      </article>
    </>
  );
};

export default Git;
