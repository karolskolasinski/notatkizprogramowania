---
title: throttle vs. debounce
description: throttle vs. debounce
pubDate: 2025-04-14
order: 2
categories:
  - dev
---

## **throttle vs. debounce**

Zarówno **throttle** jak i **debounce** to techniki stosowane w programowaniu w celu ograniczenia częstotliwości wywoływania funkcji, ale różnią się w sposobie działania.

- **throttle** ogranicza wywołania funkcji do określonego czasu. Niezależnie od tego, ile razy użytkownik wywoła daną funkcję, zostanie ona uruchomiona tylko raz w zadanym przedziale czasu. Używamy throttle, gdy chcemy, aby funkcja była wykonywana regularnie, np. podczas przewijania strony, ale nie za często.
    - Przykład użycia: Wyszukiwanie wyników na bieżąco podczas przewijania lub aktualizacja widoku na mapie.
- **debounce** powoduje, że funkcja zostanie wywołana dopiero po tym, jak użytkownik przestanie ją wywoływać przez określony czas. Używamy debounce, gdy chcemy uruchomić funkcję dopiero, gdy akcje użytkownika zostaną zakończone, np. po zakończeniu wpisywania w polu tekstowym.
    - Przykład użycia: Autouzupełnianie w wyszukiwarkach – zapytanie wysyłane dopiero, gdy użytkownik skończy wpisywać.

### **Podsumowanie:**

- Używaj **throttle**, gdy chcesz, aby funkcja była wywoływana cyklicznie co pewien czas.
- Używaj **debounce**, gdy chcesz wywołać funkcję dopiero, gdy skończą się akcje użytkownika.
