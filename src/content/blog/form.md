---
title: form
description: Formularze
pubDate: 2025-05-11
order: 6
categories:
  - html
---

# **Formularz**

Aby stworzyć swój formularz, powinieneś użyć sparowanego tagu z dość sugestywną nazwą `<form>`. Elementy do wprowadzania informacji są umieszczone wewnątrz tego znacznika. Ma dwie ważne cechy:

* `action` określa adres programu lub dokumentu przetwarzającego dane formularza
* `method` informuje serwer o metodzie żądania

Metody `get` i `post` są wykorzystywane do przekazywania danych z formularza do serwera. Jeśli atrybut metody nie zostanie określony, `get` będzie używany domyślnie.

`<label>` łączy tekst z elementem formularza. Znacznik nie pokazuje się wizualnie, więc aby zrozumieć, czy jest powiązany, czy nie, kliknij tekst. Jeżeli aktywuje pobliski element formularza, oznacza to, że \<label>działa.

```html
<!DOCTYPE html>
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
</html>

```

### **Wynik:**

![](@assets/posts/form/form.png)

## Walidacja pól

Walidacja powinna się odbywać na backendzie, ponieważ UX będzie niespójny w momencie, gdy zwalidujesz np. pole z hasłem i emailem, a już nie zwalidujesz czy wybrana nazwa jest zajęta, bo to się dzieje dopiero przy próbie zapisu. Jeżeli wszystko razem będzie w zapytaniu, to powinno zwrócić listę błędów, które później można wyświetlić na froncie.
