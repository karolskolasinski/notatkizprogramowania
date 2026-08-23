---
title: URL
description: |
  Podstawowa struktura adresów URL
pubDate: 2025-04-18
order: 5
categories:
  - dev
---

## **Podstawowa struktura adresów URL**

Oto przykład adresu URL:

![](@assets/posts/url/url-structure.png)

Adres URL ma określoną strukturę opartą na następującym szablonie:

```xml
<protocol>://<login>:<password>@<host>:<port>/<path>?<request parameters>#<anchor>
```

Przyjrzyjmy się teraz bardziej szczegółowo temu szablonowi:

- `<protocol>` to sposób wymiany danych z zasobem, prawdopodobnie najlepiej znasz protokoły HTTP i
  HTTPS, ale są też inne
- `<login>` i `<password>` są prefiksami, które w razie potrzeby przesyłają dane uwierzytelniające
  dla niektórych protokołów
- `<host>` to nazwa domeny lub adres IP, pod którym znajduje się witryna (domena to nazwa witryny,
  jej adres w sieci globalnej)
- `<port>` jest wymagany do połączenia w ramach określonego hosta. Oficjalny port dla połączeń HTTP
  to 80, a alternatywny to 8080, ale możliwe jest również użycie innych portów. Domyślne ustawienie
  protokołu HTTPS to 443
- `<path>` wskazuje dokładny adres konkretnego pliku lub strony
- `<request parameters`> to parametry przesyłane do serwera. W zależności od parametrów żądania
  witryna może nieznacznie zmienić sposób wyświetlania. Na przykład możliwe jest sortowanie pozycji
  listy w innej kolejności
- `<anchor>` umożliwia połączenie się z określoną częścią strony internetowej lub dokumentu
