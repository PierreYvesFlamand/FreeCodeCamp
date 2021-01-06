# Basic Algorithm Scripting

<details><summary><b>Convert Celsius to Fahrenheit</b></summary>
<p>

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

### Base Code

```js
function convertToF(celsius) {
    let fahrenheit;
    return fahrenheit;
}

convertToF(30);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function convertToF(celsius) {
  return celsius * 9 / 5 + 32;
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Reverse a String</b></summary>
<p>

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

### Base Code

```js
function reverseString(str) {
    return str;
}

reverseString('hello');
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function reverseString(str) {
    return str.split('').reverse().join('');
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Factorialize a Number</b></summary>
<p>

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 _ 2 _ 3 _ 4 _ 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

### Base Code

```js
function factorialize(num) {
    return num;
}

factorialize(5);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function factorialize(num) {
    let result = 1;
    while(num > 1) result *= num--;
    return result;
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Find the Longest Word in a String</b></summary>
<p>

Return the length of the longest word in the provided sentence.

Your response should be a number.

### Base Code

```js
function findLongestWordLength(str) {
    return str.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function findLongestWordLength(str) {
    return str.split(' ').reduce((a, e) => {
      return e.length > a ? e.length : a;
    }, 0);
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Return Largest Numbers in Arrays</b></summary>
<p>

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

### Base Code

```js
function largestOfFour(arr) {
    return arr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
]);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function largestOfFour(arr) {
    return arr.reduce((a, e) => {
      a.push(Math.max(...e));
      return a;
    }, [])
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Confirm the EndingPassed</b></summary>
<p>

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

### Base Code

```js
function confirmEnding(str, target) {
    return str;
}

confirmEnding('Bastian', 'n');
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function confirmEnding(str, target) {
    return str.slice(str.length - target.length, str.length) === target;
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Repeat a String Repeat a String</b></summary>
<p>

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

### Base Code

```js
function repeatStringNumTimes(str, num) {
    return str;
}

repeatStringNumTimes('abc', 3);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function repeatStringNumTimes(str, num) {
    let result = '';
    while(num-- > 0) result += str;
    return result;
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Truncate a String</b></summary>
<p>

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

### Base Code

```js
function truncateString(str, num) {
    return str;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function truncateString(str, num) {
    return num < str.length ? str.slice(0, num) + "..." : str;
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Finders Keepers</b></summary>
<p>

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

### Base Code

```js
function findElement(arr, func) {
    let num = 0;
    return num;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function findElement(arr, func) {
    return arr.reduce((a, e) => {
        return a === undefined ? func(e) ? e : undefined : a;
    }, undefined)
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Boo who</b></summary>
<p>

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

### Base Code

```js
function booWho(bool) {
    return bool;
}

booWho(null);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function booWho(bool) {
    return bool === true || bool === false ? true : false;
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Title Case a Sentence</b></summary>
<p>

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

### Base Code

```js
function titleCase(str) {
    return str;
}

titleCase("I'm a little tea pot");
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function titleCase(str) {
    return str.toLowerCase().split(' ').map((e) => {
      return e.replace(e.charAt(0), e.charAt(0).toUpperCase())
    }).join(' ');
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Slice and Splice</b></summary>
<p>

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

### Base Code

```js
function frankenSplice(arr1, arr2, n) {
    return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice();
    result.splice(n, 0, ...arr1);
    return result
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Falsy Bouncer</b></summary>
<p>

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

### Base Code

```js
function bouncer(arr) {
    return arr;
}

bouncer([7, 'ate', '', false, 9]);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function bouncer(arr) {
    return arr.filter(Boolean);
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Where do I Belong</b></summary>
<p>

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

### Base Code

```js
function getIndexToIns(arr, num) {
    return num;
}

getIndexToIns([40, 60], 50);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    let i;
    for(i = 0; i < arr.length; i++){
        if(arr[i] >= num) return i;
    }
    return i;
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Mutations</b></summary>
<p>

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

### Base Code

```js
function mutation(arr) {
    return arr;
}

mutation(['hello', 'hey']);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function mutation(arr) {
    return arr[1]
      .toLowerCase()
      .split('')
      .every((e) => arr[0].toLowerCase().indexOf(e) != -1);
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Chunky Monkey</b></summary>
<p>

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

### Base Code

```js
function chunkArrayInGroups(arr, size) {
    return arr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function chunkArrayInGroups(arr, size) {
    let result = []
    while(arr.length){
        result.push(arr.splice(0, size));
    }
    return result;
}
```
</p>
</details>

---

</p>
</details>
```
