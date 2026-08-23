---
title: Optional
description: Klasa Optional w języku Java - bezpieczne operowanie na wartościach, które mogą być null
pubDate: 2026-08-23
order: 10
categories:
  - java
---

## Optional

To generyczny pojemnik na zmienną dowolnego typu, która może mieć wartość `null`. Poprzez szereg metod dostępnych w klasie powinniśmy być w stanie zabezpieczyć się przed przypadkowym odwołaniem do `null` referencji. Obiekty `Optional` tworzy się za pomocą jednej z metod:

- `empty()` - tworzy pusty `Optional` z wartością `null` w środku
- `of(T value)` - tworzy `Optional` z podaną wartością. W przypadku przekazania `null` dostaniemy `NullPointerException`
- `ofNullable(T value)` - również tworzy `Optional` z podaną wartością, ale w przypadku przekazania `null` nie zostanie zgłoszony wyjątek
- `Optional(T value)` - konstruktor rzucający błąd w przypadku przekazania wartości `null`

Dobrze, wiemy już jak utworzyć `Optional`, to teraz pytanie jak go użyć? Dwie najczęściej używane metody to:

- `isPresent()` - zwraca `boolean` mówiący czy w środku znajduje się jakaś wartość czy też `null`
- `get()` - pobranie przechowywanego obiektu. Jeżeli takiego nie dostaniemy: `NoSuchElementException`

Przykład poprawnego wykorzystania `Optional`: zamiast budowania zabezpieczeń przed `null` jak poniżej:

```java
private String getCompanyFirstUserName1(final Holding holding) {
  if (holding != null) {
    final Company company = holding.getCompanies().get(0);

    if (company != null && company.getUsers() != null) {
      final User user = company.getUsers().get(0);

      if (user != null && user.getFirstName() != null) {
        final String result = user.getFirstName();

        if (result.length() > 0) {
          return result;
        }
      }
    }
  }

  return "not found";
}
```

można zapisać za pomocą `Optional` w takiej formie:

```java
private String getCompanyFirstUserName2(final Holding holding) {
  return Optional.ofNullable(holding)
    .map(Holding::getCompanies)
    .map(Vector::firstElement)
    .map(Company::getUsers)
    .map(Vector::firstElement)
    .map(User::getFirstName)
    .filter(name -> name.length() > 0)
    .orElse("not found");
}
```
