# Extra JavaScript Exercises

Here’s a list of **10 JavaScript algorithm exercises**, increasing in difficulty. All of them rely only on **basic constructs** like `for`, `if`, arrays, strings, and simple logic — no `map`, `filter`, or other array methods.

### 🟢 Easy

#### 1. **Sum of numbers from 1 to N**

Write a function `sumUpTo(n)` that returns the sum of all numbers from 1 to `n`.

```js
sumUpTo(5); // 1 + 2 + 3 + 4 + 5 = 15
```

---

#### 2. **Count even numbers in an array**

Write a function `countEvens(arr)` that returns how many even numbers are in the array.

```js
countEvens([1, 2, 3, 4, 5, 6]); // 3
```

---

#### 3. **Find the largest number**

Write a function `findMax(arr)` that returns the largest number in an array.

```js
findMax([3, 7, 2, 8, 1]); // 8
```

---

### 🟡 Medium

#### 4. **Check if a word is a palindrome**

Write a function `isPalindrome(word)` that returns `true` if the word is a palindrome.

```js
isPalindrome("racecar"); // true
isPalindrome("hello");   // false
```

---

#### 5. **Reverse an array (without using `.reverse()`)**

Write a function `reverseArray(arr)` that returns a new array in reverse order.

```js
reverseArray([1, 2, 3]); // [3, 2, 1]
```

---

#### 6. **Count how many times a letter appears in a word**

Write a function `countLetter(word, letter)` that returns how many times the `letter` appears in `word`.

```js
countLetter("banana", "a"); // 3
```

---

### 🔴 Hard

#### 7. **Find duplicates in an array**

Write a function `findDuplicates(arr)` that returns an array of numbers that appear more than once.

```js
findDuplicates([1, 2, 3, 2, 4, 3]); // [2, 3]
```

---

#### 8. **Check if two words are anagrams**

Write a function `areAnagrams(a, b)` that returns `true` if the two words are anagrams (same letters, different order).

```js
areAnagrams("listen", "silent"); // true
```

---

#### 9. **FizzBuzz**

Write a function `fizzBuzz(n)` that prints numbers from 1 to `n`. For multiples of 3, print `"Fizz"`; for 5, print `"Buzz"`; for both, print `"FizzBuzz"`.

```js
fizzBuzz(15);
// 1, 2, Fizz, 4, Buzz, Fizz, 7, ..., 14, FizzBuzz
```

---

#### 10. **Longest increasing subsequence (consecutive only)**

Write a function `longestIncreasingSubseq(arr)` that returns the length of the longest increasing **consecutive** numbers in an array.

```js
longestIncreasingSubseq([1, 2, 1, 2, 3, 0, 1]); // 3 (2,3,0 doesn't count because not increasing)
```
