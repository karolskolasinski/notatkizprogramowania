---
title: Big-O
description: 'Big-O '
pubDate: 2025-04-18
order: 4
categories:
  - dev
---
## **Big-O**

Używamy notacji **Big-O** do klasyfikowania algorytmów w zależności od tego, jak ich wymagania dotyczące czasu działania lub miejsca (np. w pamięci lub na dysku) rosną wraz ze wzrostem rozmiaru danych wejściowych. Nie zależy od szczegółów implementacji, takich jak język programowania, system operacyjny, sprzęt lub umiejętności programisty i inne szczegóły implementacji. Złożoność obliczeniowa określa jaka ilość operacji jest potrzebna aby wykonać zadanie.

**Big O** opisane jako **O(T(n))** składa się z dwóch części:

* **T(n)** jest funkcją złożoności czasowej, która opisuje, jak rośnie czas działania wraz ze wzrostem wielkości wejściowej;
* symbol **O** oznacza, że gdy dane wejściowe są wystarczająco duże, czas wykonywania rośnie co najwyżej proporcjonalnie do funkcji w nawiasach.

Notacja Big-O ma kilka istotnych cech:

* opisuje górną granicę stopy wzrostu funkcji i można go uznać za najgorszy scenariusz;
* opisuje on szczególnie dobrze sytuację dla dużych danych wejściowych algorytmu, ale nie dba o to, jak dobrze algorytm działa z wejściami o małych rozmiarach.

W praktyce algorytm może działać nawet lepiej, niż wskazuje Big O, ale zdecydowanie nie gorzej.

![50](@assets/posts/big-o/big-o-notation.png)

### **O(1)**

Złożoność stała, niezależna od liczby danych wejściowych. Mówimy, że problem o złożoności Ο(1) możemy rozwiązać w stałym czasie niezależnie od wielkości danych wejściowych. Przykładem może być porównanie dwóch liczb w instrukcji warunkowej lub przypisanie wartości do zmiennej, dostęp do elementu tablicy za pomocą indeksu, obliczenie sumy postępów arytmetycznych za pomocą wzoru, wydrukowanie pojedynczej wartości.

### **O(log(n))**

Złożoność logarytmiczna. Liczba wymaganych operacji jest proporcjonalna do logarytmu wielkości wejściowej. Przykładem może być wyszukiwanie w drzewie BST (binarne drzewo poszukiwań).

### **O(n)**

Złożoność liniowa. Liczba wymaganych operacji jest proporcjonalna do rozmiaru danych wejściowych (czas rośnie liniowo wraz ze wzrostem danych). Jest to specyficzny przypadek złożoności wielomianowej. Przykładem może być sortowanie przez zliczanie lub pozycyjne, znajdowanie pozycji max / min w tablicy.

### **O(n log(n))**

Złożoność liniowo-logarytmiczna. Czas rozwiązania problemu jest wprost proporcjonalny do iloczynu wielkości danych wejściowych i ich logarytmu. Przykładem może być algorytm wyszukiwania interpolacyjnego.

### **O(n2)**

Złożoność kwadratowa. Liczba instrukcji algorytmu rośnie proporcjonalnie do kwadratu rozmiaru danych wejściowych. Przykładem może być sortowanie bąbelkowe lub przez wstawianie. Jest to specyficzny przypadek złożoności wielomianowej.

### **O(2n)**

Złożoność wykładnicza. Liczba wymaganych operacji zależy wykładniczo od szybko rosnącego rozmiaru danych wejściowych.

## **Złożoności algorytmów**

![80](@assets/posts/big-o/algorithms-complexity.png)

## **Złożoności operacji na kolekcjach**

![80](@assets/posts/big-o/collections-complexity.png)

## **Big-O cheat sheet**

[https://www.bigocheatsheet.com](https://www.bigocheatsheet.com/)
