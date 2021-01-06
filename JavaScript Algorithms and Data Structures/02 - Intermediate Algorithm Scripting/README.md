# Intermediate Algorithm Scripting

<details><summary><b>Sum All Numbers in a Range</b></summary>
<p>

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

### Base Code

```js
function sumAll(arr) {
    return 1;
}

sumAll([1, 4]);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function sumAll(arr) {
    let sum = 0;
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++)
        sum += i;

    return sum;

}

```
</p>
</details>

---

</p>
</details>

<details><summary><b>Diff Two Arrays</b></summary>
<p>

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.

### Base Code

```js
function diffArray(arr1, arr2) {
    var newArr = [];
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function diffArray(arr1, arr2) {
    return arr1
      .filter(a => !arr2.some(e => e === a))
      .concat(arr2.filter(a => !arr1.some(e => e === a)))
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Seek and DestroyPassed</b></summary>
<p>

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.

### Base Code

```js
function destroyer(arr) {
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function destroyer(arr, ...destroyer) {
    return arr.filter(a => !destroyer.some(b => b === a));
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Wherefore art thou</b></summary>
<p>

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

### Base Code

```js
function whatIsInAName(collection, source) {
    var arr = [];
    return arr;
}

whatIsInAName(
    [
        { first: 'Romeo', last: 'Montague' },
        { first: 'Mercutio', last: null },
        { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function whatIsInAName(collection, source) {
    return collection.filter(e => {
        return Object.keys(source).every(key => {
            return e.hasOwnProperty(key) && e[key] === source[key];
        })
    })
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Spinal Tap Case</b></summary>
<p>

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

### Base Code

```js
function spinalCase(str) {
    return str;
}

spinalCase('This Is Spinal Tap');
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function spinalCase(str) {
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Pig Latin</b></summary>
<p>

Pig Latin is a way of altering English Words. The rules are as follows:

-   If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

-   If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

### Base Code

```js
function translatePigLatin(str) {
    return str;
}

translatePigLatin('consonant');
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function translatePigLatin(str) {
    let start_regex = /^[^aeiou]+/;
    let start = str.match(start_regex);

    return start !== null ?
      str.replace(start_regex, "").concat(start).concat("ay") :
      str.concat("way")

}

```
</p>
</details>

---

</p>
</details>

<details><summary><b>Search and Replace</b></summary>
<p>

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

### Base Code

```js
function myReplace(str, before, after) {
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function myReplace(str, before, after) {
    return str
      .replace(before, before.match(/[A-Z][a-z]+/) === null ? 
        after.toLowerCase() :
        after.toUpperCase().charAt(0) + after.slice(1));
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>DNA Pairing</b></summary>
<p>

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

### Base Code

```js
function pairElement(str) {
    return str;
}

pairElement('GCG');
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function pairElement(str) {
    return str
      .split('')
      .map(e => {
        if(e === "A" || e === "T")
          return [e, e === "A" ? "T" : "A"]
        else 
          return [e, e === "G" ? "C" : "G"]
      })
}

// OR //

function pairElement(str) {
return str
.split("")
.map(e => {
return [e, e
.replace(/G/, "c")
.replace(/C/, "g")
.replace(/T/, "a")
.replace(/A/, "t")
.toUpperCase()
]
})
}

```
</p>
</details>

---

</p>
</details>

<details><summary><b>Missing letters</b></summary>
<p>

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

### Base Code

```js
function fearNotLetter(str) {
    return str;
}

fearNotLetter("abce");
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {

        if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
            return String.fromCharCode(str.charCodeAt(i) - 1);
        }
    }
    return undefined;

}

```
</p>
</details>

---

</p>
</details>

<details><summary><b>Sorted Union</b></summary>
<p>

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

### Base Code

```js
function uniteUnique(arr) {
    return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function uniteUnique(orig, ...arr) {
    [...arr].forEach(arr => {
        arr.forEach(e => {
            if(!orig.some(val => val === e)){
                orig.push(e);
            }
        })
    })

    return orig;

}

```
</p>
</details>

---

</p>
</details>

<details><summary><b>Convert HTML Entitie</b></summary>
<p>

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

### Base Code

```js
function convertHTML(str) {
    return str;
}

convertHTML("Dolce & Gabbana");
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Sum All Odd Fibonacci Number</b></summary>
<p>

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

### Base Code

```js
function sumFibs(num) {
    return num;
}

sumFibs(4);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function sumFibs(num) {
    let sum = 0;
    let [previous, current] = [0, 1];

    while (current <= num) {
        if (current % 2 !== 0) {
            sum += current;
        }
        [previous, current] = [current, current + previous];
    }

    return sum;

}

```
</p>
</details>

---

</p>
</details>

<details><summary><b>Sum All Primes</b></summary>
<p>

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

### Base Code

```js
function sumPrimes(num) {
    return num;
}

sumPrimes(10);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function sumPrimes(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++){
        sum += is_prime(i) ? i : 0;
    }
    return sum;
}

function is_prime(number) {
let i, sqrt;

    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else if (number % 2 !== 0) {
        sqrt = Math.ceil(Math.sqrt(number));
        for (i = 3; i <= sqrt; i += 2) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }

}

```
</p>
</details>

---

</p>
</details>

<details><summary><b>Smallest Common Multiple</b></summary>
<p>

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

### Base Code

```js
function smallestCommons(arr) {
    return arr;
}

smallestCommons([1,5]);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function smallestCommons(arr) {
    let numbers = [], i;
    for(i = Math.min(...arr); i <= Math.max(...arr); i++)
        numbers.push(i);

    for(i = 1;; i++){
        if(numbers.map(num => i % num).every(e => e === 0)){
            return i;
        }
    }

}

```
</p>
</details>

---

</p>
</details>

<details><summary><b>Drop it</b></summary>
<p>

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

### Base Code

```js
function dropElements(arr, func) {
    return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function dropElements(arr, func) {
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            arr.splice(0, i);
            return arr;
        }
    }
    return [];
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Steamroller</b></summary>
<p>

Flatten a nested array. You must account for varying levels of nesting.

### Base Code

```js
function steamrollArray(arr) {
    return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function steamrollArray(arr) {
    return arr
      .reduce((a, e) => {
          if(Array.isArray(e))
              e = steamrollArray(e);

          return a.concat(e);
      }, []);

}

```
</p>
</details>

---

</p>
</details>

<details><summary><b>Binary Agents</b></summary>
<p>

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

### Base Code

```js
function binaryAgent(str) {
    return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function binaryAgent(str) {
    return str
      .split(' ')
      .map(a => a
        .split('')
        .reverse()
        .map((a, i) => ~~(a * 2**i))
        .reduce((a, e) => a + e)
      )
      .map(a => String.fromCharCode(a))
      .join('');
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Everything Be True</b></summary>
<p>

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

### Base Code

```js
function truthCheck(collection, pre) {
    return pre;
}

truthCheck(
    [
        { user: 'Tinky-Winky', sex: 'male' },
        { user: 'Dipsy', sex: 'male' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' },
    ],
    'sex'
);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function truthCheck(collection, pre) {
    return collection.every(a => a.hasOwnProperty(pre) && a[pre])
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Arguments Optiona</b></summary>
<p>

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

### Base Code

```js
function addTogether() {
    return false;
}

addTogether(2, 3);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function addTogether(val1, val2) {
    if (typeof val1 !== "number") {
        return undefined;
    }
    const sum = val2 => typeof val2 === "number" ? val1 + val2 : undefined;

    return typeof val2 === "undefined" ? val2 => sum(val2) : sum(val2);

}

```
</p>
</details>

---

</p>
</details>

<details><summary><b>Make a Perso</b></summary>
<p>

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

### Base Code

```js
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
    this.getFullName = function() {
        return "";
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
var Person = function(firstAndLast) {
    this.getFirstName = function() {
        return firstAndLast.split(" ")[0];
    };

    this.getLastName = function() {
        return firstAndLast.split(" ")[1];
    };

    this.getFullName = function() {
        return firstAndLast;
    };

    this.setFirstName = function(name) {
        firstAndLast = name + " " + firstAndLast.split(" ")[1];
    };

    this.setLastName = function(name) {
        firstAndLast = firstAndLast.split(" ")[0] + " " + name;
    };

    this.setFullName = function(name) {
        firstAndLast = name;
    };

};

var bob = new Person('Bob Ross');

```
</p>
</details>

---

</p>
</details>

<details><summary><b>Map the DebrisPassed</b></summary>
<p>

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

### Base Code

```js
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    return arr.map(a => {
        return {
            name: a.name,
            orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + a.avgAlt, 3) / GM))
        }
    });

}

```
</p>
</details>

</p>
</details>
