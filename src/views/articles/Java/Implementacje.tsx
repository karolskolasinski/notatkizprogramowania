import React, { useEffect } from 'react';
import cover from '../../../img/cover/cover-java.webp';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/components/prism-java';

const Implementacje = () => {
    useEffect(() => Prism.highlightAll(), []);

    return (
        <>
            <div className={'cover-wrapper'}>
                <img src={cover} alt={'java cover'} className={'cover'} />
            </div>
            <article className={'article article-content'}>
                <h1>ArrayList&lt;T&gt;</h1>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class MyArrayList<T> { 
    private final static int INITIAL_ARRAYLIST_SIZE = 10;
    private Object[] elements;
    private int size = 0;
    
    /*CONSTRUCTOR*/
    public MyArrayList(int initialSize) {
        this.elements = new Object[initialSize];
    }
    
    /*CONSTRUCTOR*/
    public MyArrayList() {
        this.elements = new Object[INITIAL_ARRAYLIST_SIZE];
    }
    
    /*GET*/
    public T get(int index) {
        if (index < size) {
            return (T) elements[index];
        } else {
            throw new ArrayIndexOutOfBoundsException();
        }
    }
    
    /*SIZE*/
    public int size() {
        return size;
    }
    
    /*ADD*/
    public void add(T object) {
        if (size >= elements.length) {
            extendArray();
        }
        elements[size++] = object;
    }
    
    /*EXTEND ARRAYLIST SIZE x2*/
    private void extendArray() {
        Object[] newElements = new Object[elements.length * 2];
        for (int i = 0; i < elements.length; i++) {
            newElements[i] = elements[i];
        }
        elements = newElements;
    }
    
    /*ADD ON INDEX*/
    public void add(int index, T object) {
        if (index < 0 || index >= size) {
            throw new ArrayIndexOutOfBoundsException();
        }
        if (size >= elements.length) {
            // jeśli brakuje miejsca?
            extendArray(index, object);
        } else {
            for (int i = size; i >= index; i--) {
            elements[i] = elements[i - 1];
        }
            elements[index] = object;
        }
        
        size++;
    }
    
    /*EXTEND ARRAYLIST SIZE x2 IF THERE IS NOT ENOUGH SPACE WHEN ADDING ON INDEX*/
    private void extendArray(int positionToPutAt, T object) {
        Object[] newElements = new Object[elements.length * 2];
        for (int i = size - 1; i >= positionToPutAt; i--) {
            newElements[i + 1] = elements[i];
        }
        newElements[positionToPutAt] = object;
        
        for (int i = positionToPutAt - 1; i >= 0; i--) {
            newElements[i] = elements[i];
        }
        elements = newElements;
    }
    
    /*REMOVE*/
    public void remove(int index) {
        if (index < 0 || index >= size) {
            throw new ArrayIndexOutOfBoundsException();
        }
        for (int i = index; i < size - 1; i++) {
            elements[i] = elements[i + 1];
        }
        // 5, 10, 15, 20
        //     x
        // 5, 15, 15, 20
        // 5, 15, 20, 20
        // 5, 15, 20, null
        // size --
        elements[size - 1] = null; // zerujemy miejsce ostatnie
        size--;
    }
    
    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder("[");
        
        if (size > 0) {
            for (int i = 0; i < size; i++) {
                builder.append(elements[i]);
                builder.append(", ");
            }
    
            // remove last 2 signs
            builder.delete(builder.length() - 2, builder.length());
        }
        builder.append("]");
        
        return builder.toString();
    }
}`}
                    </code>
                </pre>

                <hr />

                <h1>Stack&lt;T&gt;</h1>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class Stack<T> {
    private Object[] elementy;
    private boolean isEmpty;
    private int pointer = -1;
    private int size = 10;
    
    /*CONSTRUCTOR*/
    private Stack() {
        elementy = new Object[size];
    }
    
    /*PUSH*/
    private void push(T elementDoDodania) {
    if (pointer == elementy.length - 1) {
        extend();
    }
        elementy[pointer + 1] = elementDoDodania;
        pointer++;
    }
    
    /*EXTEND*/
    private void extend() {
        int zwiekszonyRozmiar = elementy.length * 2;
        Object[] noweElementy = new Object[zwiekszonyRozmiar];
        
        for (int i = 0; i < elementy.length; i++) {
            elementy[i] = noweElementy[i];
        }
        elementy = noweElementy;
    }
    
    /*POP*/
    private T pop() {
        elementy[pointer] = null;
        pointer--;
        return (T) elementy[pointer + 1];
    }
    
    /*PEEK*/
    public T peek() {
        if (pointer >= 0) {
            return (T) elementy[pointer];
        } else {
            return null;
        }
    }
    
    /*IS EMPTY*/
    public boolean isEmpty() {
        if (pointer == -1) {
            isEmpty = true;
        }
        return isEmpty;
    }
}`}
                    </code>
                </pre>
                <hr />

                <h1>BubbleSort</h1>
                <a href={'https://www.youtube.com/watch?v=4s44rXRdmhQ'} className={'article-link'}>video</a>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class BubbleSort {
    public static void sort(int[] tablica) {
        for (int j = 0; j < tablica.length; j++) { // * n (obiegów)
            for (int i = 0; i < tablica.length - 1 - j; i++) { // * n-1 (obiegów)
                licznikOperacji++;
                if (tablica[i] < tablica[i + 1]) {
                    // podmiana elementów
                    int tmp = tablica[i];
                    tablica[i] = tablica[i + 1];
                    tablica[i + 1] = tmp;
                }
            }
        }
    }
    
    public static void sortRecurrence(int[] tablica, int n) {
        if (n == 1) {
            return;
        }
        
        for (int i = 0; i < n - 1; i++)
            if (tablica[i] > tablica[i + 1]) {
                // swap arr[i], arr[i+1]
                int temp = tablica[i];
                tablica[i] = tablica[i + 1];
                tablica[i + 1] = temp;
            }
        sortRecurrence(tablica, n - 1);
    }
}`}
                    </code>
                </pre>


                <h1>CountingSort</h1>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class CountingSort {
    public static void sort(int[] tablica, int maxLiczba) {
        int[] zliczenia = new int[maxLiczba + 1];
    
        for (int i = 0; i < tablica.length; i++) {
            int liczba = tablica[i];
            licznikOperacji++;
            zliczenia[liczba]++;
        }
    
        int licznikWstawiania = 0;
        for (int i = 0; i < zliczenia.length; i++) {
            for (int j = 0; j < zliczenia[i]; j++) {
                tablica[licznikWstawiania++] = i;
            }
        }
    }
}`}
                    </code>
                </pre>

                <h1>InsertionSort</h1>
                <a href="https://www.youtube.com/watch?v=8RkE7MbqVl8" className={'article-link'}>video</a>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class InsertionSort {
    public static void sort(int[] tablica) {
        for (int i = 1; i < tablica.length; i++) {
            int elementPorownywany = tablica[i];

            int indeksPorownywany = i - 1;
            while (indeksPorownywany >= 0 && elementPorownywany > tablica[indeksPorownywany]) {
                // przestawienie elementów
                tablica[indeksPorownywany + 1] = tablica[indeksPorownywany];
                tablica[indeksPorownywany] = elementPorownywany;

                indeksPorownywany--;
            }
        }
    }
}`}
                    </code>
                </pre>

                <h1>SelectionSort</h1>
                <a href="https://www.youtube.com/watch?v=GUhWeJyHBCU" className={'article-link'}>video</a>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class SelectionSort {
    public static void sort(int[] tablica) {
        for (int i = 0; i < tablica.length; i++) {
            int min = tablica[i];
            for (int j = i + 1; j < tablica.length; j++) {
                if (tablica[j] < min) {
                    min = tablica[j];
                    tablica[j] = tablica[i];
                    tablica[i] = min;
                }
            }
        }
    }
}`}
                    </code>
                </pre>

                <h1>QuickSort</h1>
                <a href="https://www.youtube.com/watch?v=82XxdhRCMbI" className={'article-link'}>video</a>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class QuickSort {
    public static void sort(int[] tablica) {
        int pivot;
        int storeIndex = 0;
        int var;
    
        for (int i = storeIndex; i < tablica.length; i++) {
            pivot = i;
            storeIndex = pivot + 1;
            
            for (int j = pivot + 1; j < tablica.length; j++) {
                if (tablica[j] < tablica[pivot]) {
                    var = tablica[j];
                    tablica[j] = tablica[storeIndex];
                    tablica[storeIndex] = var;
                    storeIndex++;
                }
            }
            
            var = tablica[pivot];
            tablica[pivot] = tablica[storeIndex - 1];
            tablica[storeIndex - 1] = var;
        }
    }
}`}
                    </code>
                </pre>

                <hr />

                <h1>MergeSort</h1>
                <a href="https://www.youtube.com/watch?v=iJyUFvvdfUg" className={'article-link'}>video</a>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class MergeSort {
    public static void sort(int[] tablica) {
        splitNMerge(tablica, 0, tablica.length - 1);
    }
    
    private static void splitNMerge(int[] tablica, int from, int to) {
        if (from == to) { // dotarliśmy do pojedynczego elementu
            return;
        }
    
        int middle = (from + to) / 2;
    
        splitNMerge(tablica, from, middle);
        splitNMerge(tablica, middle + 1, to);
    
        merge(tablica, from, middle, to);
    }
    
    private static void merge(int[] tablica, int from, int middle, int to) {
        int[] kopia = Arrays.copyOf(tablica, tablica.length);
        int indexLeft = from;
        int indexRight = middle + 1;
        int pozycjaWstawiania = from;
    
        while ((indexLeft <= middle) && (indexRight <= to)) {
            if (kopia[indexLeft] < kopia[indexRight]) { // lewy jest większy
                tablica[pozycjaWstawiania] = kopia[indexRight++];
            } else {
                tablica[pozycjaWstawiania] = kopia[indexLeft++];
            }
            pozycjaWstawiania++;
        }
    
        while (indexLeft <= middle) {
            tablica[pozycjaWstawiania++] = kopia[indexLeft++];
        }
    
        while (indexRight <= to) {
            tablica[pozycjaWstawiania++] = kopia[indexRight++];
        }
    }
}`}
                    </code>
                </pre>

                <hr />

                <h1>BinnaryTree</h1>
                <pre className={'line-numbers language-java'}>
                    <code>
{`public class BST {
    private BSTNode root;
    private List<BSTNode> preOrderList = new ArrayList<BSTNode>();
    private List<BSTNode> inOrderList = new ArrayList<BSTNode>();
    private List<BSTNode> postOrderList = new ArrayList<BSTNode>();
    
    /*PUT*/
    public void put(int value) {
        root = putRecursive(value, root);
    }
    
    private BSTNode putRecursive(int value, BSTNode current) {
        if (current == null) {
            return new BSTNode(value);
        }
    
        if (value < current.getValue()) {
            current.setLeftChild(putRecursive(value, current.getLeftChild()));
        } else if (value > current.getValue()) {
            current.setRightChild(putRecursive(value, current.getRightChild()));
        } else {
            return current;
        }
        return current;
    }
    
    /*PRE-ORDER*/
    public List<BSTNode> getPreOrderList() {
        preOrderRecursive(root);
        return preOrderList;
    }
    
    private void preOrderRecursive(BSTNode current) {
        if (current == null) {
            return;
    }
        
        preOrderList.add(current);
    
        if (current.getLeftChild() != null) {
            preOrderRecursive(current.getLeftChild());
        }
        
        if (current.getRightChild() != null) {
            preOrderRecursive(current.getRightChild());
        }
    }
    
    /*IN-ODRER*/
    public List<BSTNode> getInOrderList() {
        inOrderRecursive(root);
        return inOrderList;
    }
    
    private void inOrderRecursive(BSTNode current) {
        if (current == null) {
            return;
        }
        
        if (current.getLeftChild() != null) {
            inOrderRecursive(current.getLeftChild());
        }
        
        inOrderList.add(current);
        
        if (current.getRightChild() != null) {
            inOrderRecursive(current.getRightChild());
        }
    }
    
    /*POST-ORDER*/
    public List<BSTNode> getPostOrderList() {
        postOrderRecursive(root);
        return postOrderList;
    }
    
    private void postOrderRecursive(BSTNode current) {
        if (current == null) {
            return;
        }
        
        if (current.getLeftChild() != null) {
            postOrderRecursive(current.getLeftChild());
        }
        
        if (current.getRightChild() != null) {
            postOrderRecursive(current.getRightChild());
        }
        
        postOrderList.add(current);
    }
}`}
                    </code>
                </pre>

                <pre className={'line-numbers language-java'}>
                        <code>
{`public class BSTNode {
    private int value;
    private BSTNode leftChild, rightChild;
    
    public BSTNode(int value) {
        this.value = value;
    }
    
    public int getValue() {
        return value;
    }
    
    public void setValue(int value) {
        this.value = value;
    }
    
    public BSTNode getLeftChild() {
        return leftChild;
    }
    
    public void setLeftChild(BSTNode leftChild) {
        this.leftChild = leftChild;
    }
    
    public BSTNode getRightChild() {
        return rightChild;
    }
    
    public void setRightChild(BSTNode rightChild) {
        this.rightChild = rightChild;
    }
}`}
                    </code>
                </pre>
            </article>
        </>
    );
};

export default Implementacje;
