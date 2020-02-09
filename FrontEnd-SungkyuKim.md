# Javascript Questions 

**FYI: ES6 <http://es6-features.org/>**

**Optional: Complete Udemy "The Complete Javascript Course 2020" <https://www.udemy.com/course/the-complete-javascript-course/>**

## Q. Explain var vs let vs const

[var]

1. Functional-level scope
2. It can be omitted. ex) a = 1; var a = 1;
3. It can be declared multiple times.

[let & const]

1. Block-level scope
2. They can't be omitted
3. They can be declared multiple times.

```Javascript
//1. var
//Hoisting : Declared and initialized "foo"

console.log(foo); //undefined
var foo; 

console.log(foo); //undefined

foo = 'a'; //assigned
console.log(foo); //a


//2. let
//Declared "bar"

console.log(bar); //ReferenceError: Cannot access 'bar' before initialization

let bar; //initialized
console.log(bar); //undefined

bar = 1; //assigned
console.log(bar); //1


//3. const
const ABC; //SyntaxError: Missing initializer in const declaration
const DEF = 2; //const should be declared and assinged at the same time.

```



## Q. Can you give an example for destructuring an object or an array?


```Javascript

/**
	* 1. Array
	*/
let x = a;
let y = b;

console.log(x, y); //a b

[x, y] = [y, x];

console.log(x, y); //b a


/**
	* 2. Object
	*/
const obj = {
	name: 'Kim',
	lang: 'Eng',
	score: {
    math: 70,
    english: 65,
    science: 80
  }
}

let { name, lang, job } = obj;
console.log(name, lang, job); // Kim Eng Dev

/**
	* 3. Nested Object
	*/
const profile = {
  name: 'Kim',
  stack: {
      front : 'HTML CSS JS'
  }
};

const { name, stack: { front } } = profile;

console.log(name, front); //Kim HTML CSS JS

/**
	* 4. Usage example destructuring in variable assignment
	*/
let country = 'Canada';
let firstname = 'John';
let lastname = 'Doe'

const obj = {
  firstname: 'Glad',
  lastname: 'Chinda',
  country: 'Nigeria'
}

// Reassign variables using destructuring
{firstname, lastname} = obj;

console.log(firstname, lastname, country); // Glad Chinda Canada


```

## Q. ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?

```Javascript

/**
	* 1. Basic
	*/
const a = 1;
const b = 2;
const c = "javascript developer";
const d = String.raw`xy\nz`; //Raw strings

const str = `I've been ${c} ${d} 
for ${2} years.` //Expression interpolation

console.log(str); /* I've been javascript developer xy\nz 
for 2 years. */

/**
	* 2. Tagged template function
	*/
let person = 'Kim';
let age = 28;

let tag = function(strings, sPerson, nAge) {    
    let str0 = strings[0];
    let str1 = strings[1];
    
    console.log("str0 : " + str0); 
    console.log("str1 : " + str1);

    if(nAge < 18) ageStr = 'under 18';
    else ageStr = nAge + ' years old';

    return str0 + sPerson + str1 + ageStr;  //
};

let output = tag`I'm ${person} and ${age}`;
console.log(output);    //I'm Kim and 28 years old

```


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

# HTML Question

# CSS Question

# Coding Excercise

# ETC

## Q. How to debug your code? How to use Chrome Development tools?