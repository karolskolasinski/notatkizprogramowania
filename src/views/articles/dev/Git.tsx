import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-dev.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/components/prism-ignore';

const Git = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className='cover-wrapper'>
                <img src={cover} alt='dev cover' className='cover' />
            </div>
            <article className='article article-content'>
                <h1>VCS – system kontroli wersji</h1>
                <h3>Konfiguracja:</h3>
                <ul className='terminal-list'>
                    <li>
                        <span>git config</span> - pozwala odczytać i modyfikować zmienne, które kontrolują wszystkie
                        aspekty działania i zachowania git

                        <ul className='nested-list'>
                            <li><span>--system</span> - na komputer: <span>/etc/gitconfig</span></li>
                            <li><span>--global</span> - na użytkownika: <span>~/.gitconfig</span></li>
                            <li><span>--local</span> - na repozytorium: <span>.git/config</span></li>
                        </ul>
                    </li>

                    <li><span>git config --global user.name "John Doe"</span></li>
                    <li><span>git config --global user.email "johndoe@domain.com"</span></li>
                    <li><span>git config --list</span> - pokazuje aktualną konfigurację</li>

                    <li>
                        <span>git config --global core.editor notepad</span> - ustawienie notepad jako domyślnego
                        edytora
                    </li>

                    <li><span>git config --get remote.origin.url</span> - only the remote URL</li>
                </ul>

                <h3>Inicjalizacja:</h3>
                <ul className='terminal-list'>
                    <li><span>git init</span> - stworzenie katalogu <span>.git</span></li>
                    <li>
                        dodanie pliku <span>.gitignore</span> - automatyczne pomijanie niechcianych w repozytorium
                        plików
                    </li>

                    <details>
                        <summary>Przykładowy plik</summary>
                        <pre className='line-numbers language-gitignore'>
                            <code>
{`# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*

# IntelliJ IDEA
.idea
*.iws
*.iml
*.ipr

# NetBeans
/nbproject/private/
/nbbuild/
/dist/
/nbdist/
/.nb-gradle/
build/

# VS Code
.vscode/
*.code-workspace

# build
build.js
build.js.map`}
                            </code>
                        </pre>
                    </details>
                </ul>


                <h3>Podgląd zmian w poczekalni i poza nią:</h3>
                <ul className='terminal-list'>
                    <li><span>git status --long</span> - domyślnie</li>
                    <li><span>git status --short</span></li>
                    <li><span>git status -s</span> jw.</li>
                    <li><span>git diff</span> - pokazuje, które linie zostały dodane / zmodyfikowane / usunięte</li>
                    <li><span>git diff --staged</span> - jw. tylko dla poczekalni, porównanie z ostatnią zmianą</li>
                </ul>

                <h3>Dodawanie plików do poczekalni (staging):</h3>
                <ul className='terminal-list'>
                    <li>
                        <span>git add -A</span> - dodawanie wszystkich zmodyfikowanych i dodanych plików do poczekalni
                    </li>

                    <li><span>git add --all</span> - jw.</li>
                    <li><span>git add .</span> - jw. ale prościej</li>
                    <li><span>git add &lt;plik&gt;</span> - dodawanie konkretnego pliku do poczekalni</li>
                    <li><span>git add *.json</span> - dodawanie wszystkich plików z rozszerzeniem .json</li>
                    <li><span>git reset HEAD &lt;plik&gt;</span> - usuwa pliki z indeksu</li>
                </ul>

                <h3>Zatwierdzanie zmian (commit):</h3>
                <ul className='terminal-list'>
                    <li><span>git commit</span> - uruchamia edytor commitów i zatwierdza zmiany</li>
                    <li><span>git commit -m "opis zmian"</span> - jw. ale prościej i szybciej</li>
                    <li>
                        <span>git commit --amend</span> - nadpisuje ostatni commit, jeżeli czegoś zapomnieliśmy/chcemy
                        poprawić w ostatnim commit
                    </li>

                    <li>
                        <span>git log</span> - pokazuje listę commitów, aby wyjść
                        z <span>git log</span> wpisz <span>q</span> lub <span>z</span>
                    </li>
                </ul>

                <h3>Praca z gałęziami:</h3>
                <ul className='terminal-list'>
                    <li><span>git branch</span> - listuje wszystkie lokalne gałęzie</li>

                    <li>
                        <span>git checkout -b feature/1</span> - utworzenie i przejście do gałęzi <span>feature/1</span>
                    </li>

                    <li><span>git checkout develop</span> - przejście do gałęzi <span>develop</span></li>
                    <li><span>git branch -d feature/1</span> - usunięcie gałęzi <span>feature/1</span></li>
                </ul>

                <h3>Integrowanie zmian (merge):</h3>
                <ul className='terminal-list'>
                    <li>
                        <span>git merge feature/1</span> - scalenie zmian z gałęzi <span>feature/1</span> do aktualnej
                        gałęzi (tworzy się nowy commit)
                    </li>

                    <li>
                        <span>git rebase develop</span> - zmiana bazy rewizji, aplikowanie zmian zatwierdzonych w gałęzi
                        <span>develop</span> do aktualnej gałęzi (nie używaj tego polecenia na gałęziach, które są
                        publiczne!
                    </li>

                    <li>
                        <strong>
                            Jak całkowicie zastąpić gałąź główną (<span>master</span>) z innej gałęzi
                            (np. <span>seotweaks</span>
                        </strong>
                        <p>use the “ours” merge strategy to overwrite master with seotweaks like this:</p>
                        <ul className='nested-list'>
                            <li><span>git checkout master</span></li>
                            <li><span>git pull</span></li>
                            <li><span>git checkout seotweaks</span></li>
                            <li><span>git merge -s ours master</span></li>
                            <li><span>git checkout master</span></li>
                            <li><span>git merge seotweaks</span></li>
                        </ul>
                    </li>
                </ul>

                <h3>Wypychanie (push):</h3>
                <ul className='terminal-list'>
                    <li>
                        <span>git push -u origin master</span> - wypchnięcie zmian na serwer, jeśli na serwerze nie
                        istnieje branch na którym się znajdujemy, konieczne jest użycie dodatkowych parametrów, aby
                        sprecyzować nazwę brancha (<span>master</span>), który ma być utworzony na serwerze (
                        <span>-u origin master</span>)
                    </li>
                </ul>

                <h3>Klonowanie (clone):</h3>
                <ul className='terminal-list'>
                    <li>
                        <span>git clone span@adres.com:NazwaRepozytorium.span</span> - domyślnie git pobiera/klonuje
                        repozytorium do katalogu o nazwie <i>NazwaRepozytorium</i>
                    </li>

                    <li>
                        <span>git clone span@adres.com:NazwaRepozytorium.git Katalog</span> - spowoduje wykonanie klona
                        repozytorium do nowego folderu o nazwie <i>Katalog</i>
                    </li>
                </ul>

                <h3>Importowanie zmian:</h3>
                <ul className='terminal-list'>
                    <li><span>git remote</span> - listuje zdalne repozytoria</li>

                    <li>
                        <span>git remote show origin</span> - if you require full output or referential integrity is
                        intact
                    </li>

                    <li><span>git remote set-url &#123;remote URL&#125;</span> - zmienia URL zdalnego repozytorium</li>
                    <li><span>git remote -v</span> - jw. ale pokazuje też URL</li>

                    <li>
                        <span>git fetch &#123;remote&#125;</span> - zaciąga zmiany ze zdalnego repozytorium, ale nie
                        scala ich z lokalnym repo
                    </li>

                    <li><span>git fetch &#123;remote&#125; &#123;branch&#125;</span> - jw. ale z jednej gałęzi</li>

                    <li>
                        <span>git pull &#123;remote&#125;</span> - zaciąga zdalne zmiany i przeprowadza operacje merge
                        na aktualnej gałęzi
                    </li>

                    <li>
                        <span>git pull --rebase &#123;remote&#125;</span> - jw. ale zamiast merge wykonuje operację
                        zmiany bazy, rebase
                    </li>

                    <li>domyślna wartość dla &#123;remote&#125; to origin</li>
                </ul>

                <h3>Cofanie zmian:</h3>
                <ul className='terminal-list'>
                    <li>
                        <span>git restore</span> - to polecenie jest przydatne, gdy chcemy cofnąć swoje zmiany lokalne,
                        które istnieją tylko na naszym dysku. Przykładowo skasowałeś pewne pliki przez przypadek i
                        chcesz je odzyskać z repozytorium. Możesz zadeklarować, że chcesz przywrócić tylko jeden
                        konkretny plik. To polecenie nie zrobi nic na danym branchu czy gałęzi. Jeśli więc chcesz cofnąć
                        swoje zmiany na lokalnym dysku, to jest to najlepsze polecenie.
                    </li>

                    <li>
                        <strong>usunięcie ostatniego commita z ze zdalnego repozytorium</strong>
                        <p>
                            Be careful that this will create an "alternate reality" for people who have already
                            fetch/pulled/cloned from the remote repository. But in fact, it's quite simple:
                        </p>
                        <ul className='nested-list'>
                            <li><span>git reset HEAD^</span> # remove commit locally</li>
                            <li><span>git push origin +HEAD</span> # force-push the new HEAD commit</li>
                        </ul>
                    </li>

                    <li>
                        <strong>jak sprawić, by Git zapomniał o pliku, który był śledzony, ale jest teraz w <span
                            className='snippet'>.gitignore</span>
                        </strong>
                        <ul className='nested-list'>
                            <li>
                                To stop tracking a file, we must remove it from the
                                index: <span>git rm --cached &lt;file&gt;</span>
                            </li>

                            <li>
                                To remove a folder and all files in the folder
                                recursively: <span>git rm -r --cached &lt;folder&gt;</span>
                            </li>
                        </ul>

                        <p>The removal of the file from the head revision will happen on the next commit.</p>
                        <p>
                            WARNING: While this will not remove the physical file from your local machine, it will
                            remove the files from other developers' machines on their next <span>git pull</span>.
                        </p>
                    </li>
                </ul>
            </article>
        </>
    );
};

export default Git;
