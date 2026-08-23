---
title: Regex
description: Wyrażenia regularne (regular expressions, regex, regexp)
pubDate: 2025-04-14
order: 1
categories:
  - dev
---

## **Wyrażenia regularne (regular expressions, regex, regexp)**

Są to wzorce opisujące łańcuchy symboli. Wyrażenie regularne może określać zbiór pasujących łańcuchów lub wyszczególniać istotne części łańcucha. Posiadają implementację w większości języków programowania.

### **Składnia:**

- `.` – dowolny znak
- `\d` – cyfra `[0-9]`
- `\D` – inny znak niż cyfra `[^0-9]`
- `\s` – znak biały
- `\S` – inny znak niż znak biały
- `\w` – znak `[a-zA-Z\_0-9]`
- `\W` – inny znak niż `\w` np. `.` `’` `;` `,` `{` `}` `[` `]` `@` `!`

### **Wybór liczebników:**

- `?` – 0 lub 1 wystąpienie
- `*` – 0 lub więcej wystąpień
- `+` – 1 lub więcej wystąpień
- `{n}` – dokładnie n wystąpień np. `{5}`
- `{n,}` – przynajmniej n wystąpień
- `{n,m}` – przynajmniej n, lecz nie więcej niż m wystąpień

### **Meta znaki:**

- `\` – wskazanie, że interesuje nas konkretny znak (np. szukając kropki: `\.`)
- `^` – oznaczenie początku linii
- `$` – oznaczenie końca linii
- `|` – alternatywa (np. `a|s` → albo `a` albo `s`)
- `()` – grupowanie znaków (np. `(Hello|World!)` → albo `Hello` albo `World!`)
- `[]` – zbiór znaków (np. `\s\[a-z]+\s?` → wszystkie małe wyrazy oddzielone spacją)
