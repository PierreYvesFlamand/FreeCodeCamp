# JavaScript Algorithms and Data Structures Projects

<details><summary><b>Palindrome Checker</b></summary>
<p>

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

### Base Code

```js
function palindrome(str) {
    return true;
}

palindrome("eye");
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function palindrome(str) {
    str = str
        .toLowerCase()
        .replace(/\W|_/g, '')
        .split('');

    
    let end_str = str.length,
        mid_str = end_str / 2;

    for(let i = 0; i < mid_str; i++){
        if(str[i] !== str[end_str - 1 - i]) {
            return false;
        }
    }

    return true;
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Roman Numeral Converter</b></summary>
<p>

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

### Base Code

```js
function convertToRoman(num) {
    return num;
}

convertToRoman(36);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function convertToRoman(num) {
    const ROMANTABLE = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ]

    let str = '';

    ROMANTABLE.forEach(step => {
        while(num >= step[0]){
            str += step[1];
            num -= step[0]
        }
    })
    
    return str;
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Caesars Cipher</b></summary>
<p>

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

### Base Code

```js
function rot13(str) {
    return str;
}

rot13("SERR PBQR PNZC");
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function rot13(str) {
  return str
    .split('')
    .map(a => {
        if(a.match(/[A-Z]/)){
            let code = a.charCodeAt(0) + 13 > 'Z'.charCodeAt(0) ? (
                a.charCodeAt(0) + 13 + 'A'.charCodeAt(0) - 1 - 'Z'.charCodeAt(0)
            ) : (
                a.charCodeAt(0) + 13
            );

            return String.fromCharCode(code)
        }

        return a;
    })
    .join('');
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Telephone Number Validator</b></summary>
<p>

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

### Base Code

```js
function telephoneCheck(str) {
    return true;
}

telephoneCheck("555-555-5555");
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
```
</p>
</details>

---

</p>
</details>

<details><summary><b>Cash Register</b></summary>
<p>

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

### Base Code

```js
function checkCashRegister(price, cash, cid) {
    var change;
    return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
```

<details><summary><b>Solution</b></summary>
<p>
    
```js
function checkCashRegister(price, cash, cid) {
    const VALUE = [
        { name: "ONE HUNDRED", val: 100.0 },
        { name: "TWENTY", val: 20.0 },
        { name: "TEN", val: 10.0 },
        { name: "FIVE", val: 5.0 },
        { name: "ONE", val: 1.0 },
        { name: "QUARTER", val: 0.25 },
        { name: "DIME", val: 0.1 },
        { name: "NICKEL", val: 0.05 },
        { name: "PENNY", val: 0.01 }
    ];
    
    let output = { status: null, change: [] };
    let change = cash - price;

    // CID -> Array
    let register = cid.reduce((acc, curr) => {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];
            return acc;
        }, { total: 0 });

    // Exact change
    if (register.total === change) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }

    // Insufficient funds
    if (register.total < change) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    let change_arr = VALUE.reduce((acc, curr) => {
        let value = 0;
        
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;

            change = Math.round(change * 100) / 100;
        }
        
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc;
    }, []);

    if (change_arr.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    output.status = "OPEN";
    output.change = change_arr;
    return output;
}
```
</p>
</details>

</p>
</details>