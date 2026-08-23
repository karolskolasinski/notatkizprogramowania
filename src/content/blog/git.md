---
title: Git
description: Git
pubDate: 2026-03-31
order: 1
categories:
  - git
---
## Git

### Konfiguracja:

* `git config` - pozwala odczytać i modyfikować zmienne, które kontrolują wszystkie aspekty
  działania i zachowania git
  * `--system` - na komputer: `/etc/gitconfig`
  * `--global` - na użytkownika: `~/.gitconfig`
  * `--local` - na repozytorium: `.git/config`
* `git config --global user.name "John Doe"`
* `git config --global user.email johndoe@domain.com`
* `git config --list` - pokazuje aktualną konfigurację
* `git config --global core.editor notepad` - ustawienie notepad jako domyślnego edytora
* `git config --get remote.origin.url` - only the remote URL

### Praca z gałęziami:

* `git branch` - listuje wszystkie lokalne gałęzie
* `git checkout -b feature/1` - utworzenie i przejście do gałęzi feature/1
* `git checkout develop` - przejście do gałęzi develop
* `git branch -d feature/1` - usunięcie gałęzi feature/1

### Integrowanie zmian (merge):

* `git merge feature/1` - scalenie zmian z gałęzi feature/1 do aktualnej gałęzi (tworzy się nowy
  commit)
* `git rebase develop` - zmiana bazy rewizji, aplikowanie zmian zatwierdzonych w gałęzi develop do
  aktualnej gałęzi (nie używaj tego polecenia na gałęziach, które są publiczne!
* Jak całkowicie zastąpić gałąź główną master z innej gałęzi np. seotweaks?
* Use the “ours” merge strategy to overwrite master with seotweaks like this:
  * `git checkout master`
  * `git pull`
  * `git checkout seotweaks`
  * `git merge -s ours master`
  * `git checkout master`
  * `git merge seotweaks`

### Cofanie zmian:

* `git restore` - to polecenie jest przydatne, gdy chcemy cofnąć swoje zmiany lokalne, które
  istnieją tylko na naszym dysku. Przykładowo skasowałeś pewne pliki przez przypadek i chcesz je
  odzyskać z repozytorium. Możesz zadeklarować, że chcesz przywrócić tylko jeden konkretny plik. To
  polecenie nie zrobi nic na danym branchu czy gałęzi. Jeśli więc chcesz cofnąć swoje zmiany na
  lokalnym dysku, to jest to najlepsze polecenie.

### Usunięcie ostatniego commita ze zdalnego repozytorium:

Be careful that this will create an "alternate reality" for people who have already
fetch/pulled/cloned from the remote repository. But in fact, it's quite simple:

* `git reset HEAD^` - remove commit locally
* `git push origin +HEAD` - force-push the new HEAD commit

### Jak sprawić, by Git zapomniał o pliku, który był śledzony, ale jest teraz w .gitignore?

To stop tracking a file, we must remove it from the index:

* `git rm --cached <file>`
* To remove a folder and all files in the folder recursively:
* `git rm -r --cached <folder>`

The removal of the file from the head revision will happen on the next commit. WARNING: While this
will not remove the physical file from your local machine, it will remove the files from other
developers' machines on their next git pull.

### Changing git commit message after push:

If it is the most recent commit, you can simply do this:

* `git commit --amend`
* `git push --force-with-lease`
* `or you can use`
* `git push --force`

If someone else pushed changes to the same branch, you probably want to avoid destroying those
changes. The `--force-with-lease` option is the safest, because it will abort if there are any
upstream changes.

### Tag

* `git tag v1.31` - stworzenie taga. Najpierw robisz commit i push, a później `git push origin --tags`.

### Rebase

1. stwórz kopię brancha `DIN-4885` (`checkout -b DIN-4885-backup`)
2. ściągnij najnowsze zmiany na arcarium, przejdź na docelowego brancha i zrób git rebase arcarium
3. zobaczysz przy którym commicie są konflikty
4. jak będziesz chciał kontynuować to `git rebase --continue`
5. podczas rebase git odtwarza te commity po kolei, więc konflikty w jednym nie znaczą, że w
   pozostałych nie będzie
6. jak rebase poszedł ok możesz wypchnąć zmiany na tego brancha, ale z `git push --force-with-lease`
