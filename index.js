// 1. Sum of numbers from 1 to N
// Write a function sumUpTo(n) that returns the sum of all numbers from 1 to n
function sumUpTo(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
}
// const num = prompt("please input your number");
console.log(sumUpTo(5));

//2. Count even numbers in an array
// Write a function countEvens(arr) that returns how many even numbers are in the array.
function countEvens(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvens([1, 2, 3, 4, 5, 6]));

// 3. Find the largest number
// Write a function findMax(arr) that returns the largest number in an array.
function findMax(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      maxNum = arr[i];
    } else {
      maxNum = [i + 1];
    }
  }
  return maxNum;
}
console.log(findMax([3, 7, 2, 8, 1]));

//4. Check if a word is a palindrome
// Write a function isPalindrome(word) that returns true if the word is a palindrome.
function isPalindrome(word) {
  if (word.length % 2 !== 0) {
    const middleIndex = (word.length - 1) / 2;
    for (let i = 1; middleIndex - i >= 0; i++) {
      // console.log(i);
      if (word[middleIndex - i] === word[middleIndex + i]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

//5. Reverse an array (without using .reverse())
//Write a function reverseArray(arr) that returns a new array in reverse order.
function reverseArray(arr) {
  const newArr = [];
  if (arr.length % 2 !== 0) {
    const middleIndex = (arr.length - 1) / 2;
    newArr.push(arr[middleIndex]);
    console.log(newArr);

    for (let i = 1; middleIndex - i >= 0; i++) {
      const preItem = arr[middleIndex - i];
      const nextItem = arr[middleIndex + i];

      newArr.push(preItem);
      newArr.unshift(nextItem);
    }
    return newArr;
  } else if (arr.length % 2 === 0) {
    const middleNum = arr.length / 2;
    // console.log(Math.ceil(middleNum - 0));

    // arr[m] and arr[m-1], arr[m+1] and arr[m-2], arr[m+2] and arr[m-3]
    for (let i = 0; middleNum - i - 1 >= 0; i++) {
      const preItem = arr[middleNum - i - 1];
      const nextItem = arr[middleNum + i];
      // console.log(preItem, nextItem);

      newArr.push(preItem);
      newArr.unshift(nextItem);
    }
    return newArr;
  }
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));

//6. Count how many times a letter appears in a word
// Write a function countLetter(word, letter) that returns how many times the letter appears in word.
function countLetter(word, letter) {
  let count = 0;
  if (word.includes(letter)) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        count++;
      }
    }
    return count;
  } else {
    return count;
  }
}

console.log(countLetter("banana", "n"));

//7. Find duplicates in an array
//Write a function findDuplicates(arr) that returns an array of numbers that appear more than once.
function findDuplicates(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (item === arr[j]) {
        newArr.push(item);
      }
    }
  }
  return newArr;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 3, 4, 5, 6]));

//8. Check if two words are anagrams
//Write a function areAnagrams(a, b) that returns true if the two words are anagrams (same letters, different order).
function areAnagrams(a, b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (!(b.includes(a[i]) && a.includes(b[i]))) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(areAnagrams("listen", "silent"));

//9. FizzBuzz
//Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3, print "Fizz"; for 5, print "Buzz"; for both, print "FizzBuzz".
function fizzBuzz(n) {
  const newArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      newArr.push("Fizz");
    } else if (i % 5 === 0) {
      newArr.push("Buzz");
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(fizzBuzz(15));

//10. Longest increasing subsequence (consecutive only)
//Write a function longestIncreasingSubseq(arr) that returns the length of the longest increasing consecutive numbers in an array.
function longestIncreasingSubseq(arr) {
  let count = 1;
  let maxLength = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] === arr[i] + 1) {
      count++;
    } else {
      if (count > maxLength) {
        maxLength = count;
      }
      count = 1;
    }
  }
  return maxLength;
}

console.log(longestIncreasingSubseq([1, 2, 1, 2, 3, 0, 1, 2, 3, 4, 0]));
