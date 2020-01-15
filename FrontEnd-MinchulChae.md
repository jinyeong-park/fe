# Javascript Questions 
**FYI: ES6 <http://es6-features.org/>**

## Optional: Complete Udemy "The Complete Javascript Course 2020" Section 2 & 3. <https://www.udemy.com/course/the-complete-javascript-course/>

## Q. Explain var vs let vs const
<https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e>

## Q. Can you give an example for destructuring an object or an array?

```Javascript
#!Javascript
function putDookieInAnyArray(arr) {
    return [...arr, 'dookie'];
}

const result = putDookieInAnyArray(['I', 'really', "don't", 'like']); // ["I", "really", "don't", "like", "dookie"]

const person2 = {
    name: 'Todd',
    age: 29,
};

const copyOfTodd = {
    ...person2
};

function addFiveToABunchOfNumbers(...numbers) {
    return numbers.map(x => x + 5);
}

const result = addFiveToABunchOfNumbers(4, 5, 6, 7, 8, 9, 10); // [9, 10, 11, 12, 13, 14, 15]

const [a, b, ...rest] = [1, 2, 3, 4]; // a: 1, b: 2, rest: [3, 4]

const {
    e,
    f,
    ...others
} = {
    e: 1,
    f: 2,
    g: 3,
    h: 4,
}; // e: 1, f: 2, others: { g: 3, h: 4 }
```

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

# HTML Question
# CSS Question
# Coding Excercise
