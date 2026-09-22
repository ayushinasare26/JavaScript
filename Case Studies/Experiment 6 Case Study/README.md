# String Operations Case Study

This project demonstrates various string operations in JavaScript, focusing on two main case studies:
1. **Reversing a string**
2. **Counting vowels in a paragraph**

## 📁 Files Included

- **`stringOperations.js`** - Complete JavaScript console program with all string operations
- **`README.md`** - This documentation file

## 🚀 How to Run

Run the program in Node.js terminal:
```bash
node stringOperations.js
```

This will display:
- Basic string operations (substring, indexOf, split, replace)
- Multiple methods to reverse a string
- Multiple methods to count vowels
- Detailed vowel breakdown
- Additional test cases
- Comprehensive string analysis

## 📚 String Methods Demonstrated

### Basic Operations
- `substring(start, end)` - Extract part of a string
- `indexOf(searchValue)` - Find position of substring
- `split(delimiter)` - Split string into array
- `replace(old, new)` - Replace text
- `replaceAll(old, new)` - Replace all occurrences

### Case Study 1: Reverse String

**Method 1: Using built-in methods**
```javascript
function reverseString(str) {
    return str.split("").reverse().join("");
}
```

**Method 2: Using for loop**
```javascript
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
```

**Method 3: Using recursion**
```javascript
function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str[0];
}
```

**Method 4: Using reduce**
```javascript
function reverseString(str) {
    return str.split("").reduce((reversed, char) => char + reversed, "");
}
```

### Case Study 2: Count Vowels

**Method 1: Using for loop**
```javascript
function countVowels(paragraph) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of paragraph) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
```

**Method 2: Using regex**
```javascript
function countVowels(paragraph) {
    const matches = paragraph.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
```

**Method 3: Using filter**
```javascript
function countVowels(paragraph) {
    const vowels = "aeiouAEIOU";
    return paragraph.split("").filter(char => vowels.includes(char)).length;
}
```

## 💡 Key Learning Points

1. **String Immutability**: Strings in JavaScript are immutable - methods return new strings
2. **Multiple Approaches**: Most string operations can be done in multiple ways
3. **Method Chaining**: Methods like `split().reverse().join()` can be chained
4. **Regular Expressions**: Powerful pattern matching with `/[aeiou]/gi`
5. **Array Methods**: Many string operations use array methods via `split()`

## 🎯 Use Cases

- **Reverse String**: Palindrome checking, text effects, data processing
- **Count Vowels**: Text analysis, readability scoring, linguistic analysis
- **String Operations**: Data validation, text parsing, user input processing

## 🔧 Requirements

- Node.js (v12 or higher)

## 📝 Sample Output (Console)

```
=== STRING OPERATIONS CASE STUDY ===

PART A: BASIC STRING OPERATIONS
================================

1. substring() Method:
   Original: JavaScript Programming
   substring(0, 10): JavaScript
   substring(11): Programming

...

CASE STUDY 1: REVERSE A STRING
-------------------------------

Original String: JavaScript
Method 1 (split-reverse-join): tpircSavaJ
Method 2 (for loop): tpircSavaJ
Method 3 (recursion): tpircSavaJ
Method 4 (reduce): tpircSavaJ

...

CASE STUDY 2: COUNT VOWELS IN A PARAGRAPH
-------------------------------------------

Total Vowels: 78
Breakdown:
  A: 15
  E: 21
  I: 18
  O: 13
  U: 11
```

## 📖 Additional Resources

- [MDN String Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JavaScript.info Strings](https://javascript.info/string)

## 👨‍💻 Author

Created for Experiment 6 Case Study - String Operations in JavaScript

---

**Happy Coding! 🚀**
