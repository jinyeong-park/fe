# Javascript Questions 

**FYI: ES6 <http://es6-features.org/>**
**FYI: <https://github.com/h5bp/Front-end-Developer-Interview-Questions>**
**FYI: Javascript Reference: https://developer.mozilla.org/en-US/**

**Optional: Complete Udemy "The Complete Javascript Course 2020" <https://www.udemy.com/course/the-complete-javascript-course/>**

## Q. Explain var vs let vs const
<https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e>

## Q. Can you give an example for destructuring an object or an array?

## Q. ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?

## Q. What are the benefits of using spread syntax and how is it different from rest syntax?

## Q. Explain how "this" works in JavaScript. Can you give an example of one of the ways that working with "this" has changed in ES6?

## Q. Explain "Closure" with examples. What are the advantages of using ES6 maps over objects? What about using ES6 sets over arrays? 

## Q. Explain ES6 "Map" and "Set"

## Q. Difference between: function Person(){}, var person = Person(), and var person = new Person()?

## Q. Explain Function.prototype.bind, call, apply.

## Q. Explain "hoisting".

## Q. What is the difference between MyObject.foo and MyObject.prototype.foo?

## Q. Explain IIFE with Example.

## Q. Explain Event Loop

<https://youtu.be/cCOL7MC4Pl0>

## Q. Critical Rendering Path? <https://developers.google.com/web/fundamentals/performance/critical-rendering-path>

## Q. What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?

# HTML Question

# CSS Question

# Coding Excercise

## Decorate Student List

Write a function called decorateClassListWithAges. Convert from an array, in this case a class list of names, to an array of object literals decorated with a name and an age for each student. Your decorateClassListWithAges function should use the provided getRandomIntInclusive as part of its solution. (The ages should be randomly generated for each student, either age 10 or age 11)

The "test suite" that you write for this question will be one of the most complex we have seen so far. In order to verify that your code works as expected, you will need to find a way to iterate over the actual array result of your function, then ensure that the age value for each object in your result is "within the range" of 10 to 11. If you are having tremendous difficulty constructing your test suite, please feel free to consult the reference answers.

While you should create your own test suite to get the most out of this exercise, there are automated tests provided as well.

Example:

```
// Sample Input
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

// Sample Output
var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}];

// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // creates an object for each string in the input array, with an age of 10 or 11
  // returns an array of these objects
}

// ASSERTION FUNCTION(S) TO BE USED
function assertWithinRange(low, high, actual, testName){
}
// TESTS CASES
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

``` 

## Implement Contact List by ES6 Class

### Features

1. Filter: input keyword -> input Enter key or click Search button
2. Add a hovered item style
3. Check box: When clicking a text or a checkbox of an item, the checkbox should be toggled.
4. Check/uncheck all checkbox like Gmail
5. Optional features: Add / Delete / Update

```
const contacts = {
    data: {
        prop1: "abc",
        prop2: "def",
        prop3: "ghi",
        prop4: "jkl",
        prop5: "mno",
        prop6: "pqr",
        prop7: "stu",
        prop8: "vwx",
        prop9: "yz",
        prop10: "abc",
        prop11: "abc",
        prop12: "def",
        prop13: "ghi",
        prop14: "jkl",
        prop15: "mno",
        prop16: "pqr",
        prop17: "stu",
        prop18: "vwx",
        prop19: "yz",
        prop20: "yz",
        prop21: "abc",
        prop22: "def",
        prop23: "ghi",
        prop24: "jkl",
        prop25: "mno",
        prop26: "pqr",
        prop27: "stu",
        prop28: "vwx",
        prop29: "yz"
    }
}
```

# Unit Test 

# ETC

## Q. How to debug your code? How to use Chrome Development tools?