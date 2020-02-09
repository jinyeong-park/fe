# Front End Questions

## Javascript Questions

**FYI: ES6 <http://es6-features.org/>**

### Optional: Complete Udemy "The Complete Javascript Course 2020" Section 2 & 3. <https://www.udemy.com/course/the-complete-javascript-course/>

### Q. Explain var vs let vs const

* var: function scoped, undefined when accessing a variable before it's declared
* let: block scoped, ReferenceError when accessing a variable before it's declared
* const: almost exactly the same as let. you can't reassign it to a new value.

```
function discountPrices(prices, discount) {
    console.log(discounted); // undefined, hoisted
    var discounted = [];

    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        var finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    console.log(i); // 3
    console.log(discountedPrice); // 150
    console.log(finalPrice); // 150

    return discounted;
}

function discountPrices(prices, discount) {
    console.log(discounted); // Reference Error
    let discounted = [];

    for (let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        let finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    console.log(i); // ReferenceError
    console.log(discountedPrice); // ReferenceError
    console.log(finalPrice); // ReferenceError

    return discounted;
}
```

### Q. Can you give an example for destructuring an object or an array?

```Javascript
#!Javascript
// Variable assignment.
const foo = ['one', 'two', 'three'];

const [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

// Swapping variables
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

// Variable assignment.
const o = {
    p: 42,
    q: true
};
const {
    p,
    q
} = o;

console.log(p); // 42
console.log(q); // true
```

### Q. ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?

use backticks ``
```
const person1 = {
    name: 'Tyler',
    age: 28
};
console.log(`Hi, my name is ${person.name} and I am ${person.age} years old!`);
```

### Q. What are the benefits of using spread syntax and how is it different from rest syntax?

easy unpacking an array of data, and it works in function arguments, as well as in array and object destructuring assignments.

```
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

### Q. Explain how "this" works in JavaScript. Can you give an example of one of the ways that working with "this" has changed in ES6?

If the new keyword is used when calling the function, this inside the function is a brand new object.
If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.
If a function is called as a method, such as obj.method() — this is the object that the function is a property of.
If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.
If multiple of the above rules apply, the rule that is higher wins and will set the this value.
If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.

### Q. Explain "Closure" with examples. What are the advantages of using ES6 maps over objects? What about using ES6 sets over arrays? 

a closure gives you access to an outer function’s scope from an inner function, 
but the outer function can't access the members of the inner function
Variables used by the closure function live as long as the closure lives.
Closures make it easy to work with async tasks like timers, events, AJAX calls.
Closures create encapsulation.
<https://youtu.be/dHYhMP8ESuk>

```
(function autorun(p) {
    let x = 1;
    setTimeout(() => {
        console.log(x); //1
        console.log(p); //10
    }, 10000);
})(10);

const Todo = (() => {
    function Todo(spec) {
        Object.assign(this, spec);
    }

    return (spec) => {
        let todo = new Todo(spec);
        return Object.freeze(todo);
    };
})();
const todo = Todo({
    title: "A description"
});
todo.title = "Another description";
// Cannot assign to read only property 'title' of object
todo.toString = function () {};
//Cannot assign to read only property 'toString' of object

//closure
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (e) => console.log(e.target.tagName, i)); //always 5, it accesses the i after finishing for loop
    document.body.appendChild(btn);
}

for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', ((i) => (e) => console.log(e.target.tagName, i))(i));
    // btn.addEventListener('click', 
    //     ((i) => {
    //         return () => console.log(i);
    //     })(i)
    // );
    document.body.appendChild(btn);
}
//let
for (let i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (e) => console.log(e.target.tagName, i));
    document.body.appendChild(btn);
}
```

### Q. Explain ES6 "Map" and "Set"

Key field: in Object, it follows the rule of normal dictionary. The keys MUST be simple types — either integer or string or symbols. Nothing more. But in Map it can be any data type (an object, an array, etc…). 
Element order: in Map, original order of elements (pairs) is preserved, while in Object, it isn’t.
Inheritance: Map is an instance of Object (surprise surprise!), but Object is definitely not an instance of Map.

Object is slower, confusion

```
var Vehicle = {
    type: "General",
    display: function () {
        console.log(this.type);
    }
}
var Car = Object.create(Vehicle); //create a new Car inherits from Vehicle
Car.type = "Car"; //overwrite the property
Car.display(); //"Car"
Vehicle.display(); //still "General"

var obj = new Object(id: 1, name: "test") //Error - obviously
var obj1 = {
    id: 1,
    name: "test"
};
var obj2 = new Object(obj1); //obj1 and obj2 points to the same one
obj2.id = 2;
console.log(obj1.id); //2

//Map, in the other hand, has only one way to create, by using its built-in constructor and new syntax.
var map = new Map(); //Empty Map
var map = new Map([
    [1, 2],
    [2, 3]
]); // map = {1=>2, 2=>3}

map.get(1) // 2
map.has(1)
map.set(4, 5); //{1=>2, 2=>3, 4=>5}
var isDeleteSucceeded = map.delete(1); //{ 2=>3, 4=>5} //delete obj.id; is slower
console.log(isDeleteSucceeded); //true
map.clear(); //{}
console.log(map.size); //0
//For map: { 2=>3, 4=>5}
for (const item of map) {
    console.log(item);
    //Array[2,3]
    //Array[4,5]
}
//Or
for (const [key, value] of map) {
    console.log(`key: ${key}, value: ${value}`);
    //key: 2, value: 3
    //key: 4, value: 5
}
map.forEach((value, key) => console.log(`key: ${key}, value: ${value}`));
//key: 2, value: 3
//key: 4, value: 5

//-----

const obj = {
    id: 1,
    name: "test"
};
for (var key in obj) {
    console.log(`key: ${key}, value: ${obj[key]}`);
    //key: id, value: 1
    //key: name, value: test
}

Object.keys(obj).forEach((key) => console.log(`key: ${key}, value: ${obj[key]}`));
//key: id, value: 1
//key: name, value: test
/*
Object is the great choice for scenarios when we only need simple structure to store data and knew that all the keys are either strings or integers (or Symbol), because creating plain Object and accessing Object’s property with a specific key is much faster than creating a Map (literal vs constructor, direct vs get() function call — you know who wins already).
Also, in scenarios where there is a need to apply separate logic to individual property/element(s), then Object is definitely the choice. For example:
*/

var obj = {
    id: 1,
    name: "It's Me!",
    print: function () {
        return `Object Id: ${this.id}, with Name: ${this.name}`;
    }
}
console.log(obj.print()); //Object Id: 1, with Name: It's Me.
/*
(Try to do it the same with Map. You just can’t!)

Moreover, JSON has direct support for Object, but not with Map (yet). So in certain situation where we have to work a lot with JSON, consider Object as preferred option.

Otherwise, Map is purely hash, Object is more than that (with support inner logic). And using delete operator with Object’s property has several performance issues (we will discuss about this in a different article). Hence in scenarios that requires a lot of adding and removing (especially) new pair, Map may perform much better.

In addition, Map preserves the order of its keys — unlike Object, and Map was built with iteration in mind, so in case iteration or elements order are highly significant, consider Map — it will ensure stable iteration performance in all browsers.

And last but not least, Map tends to perform better in storing large set of data, especially when keys are unknown until run time, and when all keys are the same type and all values are the same type.

https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373
https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a

Set vs Array
by definition, Array and Set are technically different concepts.
One of the biggest differences here, you may notice, is that elements in Array can be duplicate (unless you tell it not to be), and in Set, they just can’t (regardless what you decide).
In addition, Array is considered as “indexed collection” type of data structure, while Set is considered as “keyed collection”.

don’t use new Array() unless you really really really need to, since:
It performs much slower than the normal [] literal. (this will be explained in a different article — maybe ;)).
[] saves more typing time (try it :))
*/
var set = new Set([1, 2, 3]); // {1,2,3}
var arr = Array.from(set); //[1,2,3]

console.log(set.has(0)); // boolean - false
console.log(arr.indexOf(0)); // -1
console.log(set.has(1)); //true
console.log(arr.indexOf(1)); //0
var isExist = arr.indexOf(1) !== -1;

arr.push(4); //[1,2,3,4] //O(1) push/pop
arr.unshift(3); //[3,1,2,3] //O(n) unshift/shift
arr.unshift(5, 6); //[5,6,3,1,2,3]

set.add(3); //{1,2,3} //O(1)
set.add(4); //{1,2,3,4}

arr.splice(0, 1); //[1,2,3] //O(n)
set.delete(4); //{1,2,3}
set.clear(); //{}
```

## Q. Difference between: function Person(){}, var person = Person(), and var person = new Person()?

function Person(){} is just a normal function declaration. The convention is to use PascalCase for functions that are intended to be used as constructors.
var person = Person() invokes the Person as a function, and not as a constructor. Invoking as such is a common mistake if the function is intended to be used as a constructor. Typically, the constructor does not return anything, hence invoking the constructor like a normal function will return undefined and that gets assigned to the variable intended as the instance.
var person = new Person() creates an instance of the Person object using the new operator, which inherits from Person.prototype. An alternative would be to use Object.create, such as: Object.create(Person.prototype).

```
function Person(name) {
    this.name = name;
}

var person = Person('John');
console.log(person); // undefined
console.log(person.name); // Uncaught TypeError: Cannot read property 'name' of undefined

var person = new Person('John');
console.log(person); // Person { name: "John" }
console.log(person.name); // "john"
```

## Q. Explain Function.prototype.bind, call, apply.
```
function add(a, b) {
    return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
var module = {
    x: 42,
    getX: function () {
        return this.x;
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

## Q. Explain "hoisting".

Variables declared or initialized with the var keyword will have their declaration "moved" up to the top of the current scope, which we refer to as hoisting. However, only the declaration is hoisted, the assignment (if there is one), will stay where it is.

```
// var declarations are hoisted.
console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1

// let/const declarations are NOT hoisted.
console.log(bar); // ReferenceError: bar is not defined
let bar = 2;
console.log(bar); // 2

// Function Declaration
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'
function foo() {
    console.log('FOOOOO');
}
console.log(foo); // [Function: foo]

// Function Expression
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar is not a function
var bar = function () {
    console.log('BARRRR');
};
console.log(bar); // [Function: bar]
```

## Q. What is the difference between MyObject.foo and MyObject.prototype.foo?

```
//Prototypal inheritance
//https://medium.com/@kevincennis/prototypal-inheritance-781bccc97edb
//A prototype is a working object instance. Objects inherit directly from other objects.
function Dog() {}
Dog.prototype.bark = function () {
    console.log('woof!');
};
var fido = new Dog();
fido.bark(); // ‘woof!’
/*
For example, fido doesn’t actually have its own method called bark() (in other words, fido.hasOwnProperty(‘bark’) === false).
What actually happens when I write fido.bark() is this:
1. The JS engine looks for a property called bark on our fido object.
2. It doesn’t find one, so it looks up "the prototype chain” to fido’s parent, which is Dog.prototype.
3. It finds Dog.prototype.bark, and calls it with this bound to fido.
This is the “invisible link” I mentioned. More commonly, it’s referred to as the “prototype chain”
*/
//ES5, Object.create();
let Alligator = function (color) {
    this.color = color;
};

Alligator.prototype.introduce = function () {
    console.log('I am ' + this.color);
};

let Croc = function (color) {
    Alligator.call(this, color);
};

//copy
Croc.prototype = Object.create(Alligator.prototype);

let alligatorObj = new Alligator('green');
let crocObj = new Croc('yellow');

alligatorObj.introduce(); // I am green
crocObj.introduce(); // I am yellow
/*
Essentially, it creates a new, empty object that has parent in its prototype chain. That means that even though child doesn’t have its own foo() method, it has access to the foo() method from parent.
*/

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.area = function () {
    return this.width * this.height;
};
var shape = new Rectangle(3, 4);
/*
What the new keyword actually does here is, essentially:
Create an empty object that has Rectangle.prototype in its prototype chain.
Call Rectangle with the this bound to the new object.

var shape = Object.create( Rectangle.prototype );
Rectangle.call( shape, 3, 4 );
*/

var Foo = function (a) {
    this.bar = () => {
        return a;
    }
    var baz = function () {
        return a;
    };
};
Foo.prototype = {
    biz: () => {
        return this.bar();
    }
};
var f = new Foo(7);
console.log(f.bar(), f.baz(), f.biz());
//All have TypeError. removed previous members. this.bar() TypeError

//ECMAScript 2015 Classes
class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting() {
        console.log(`Hi! I'm ${this.name.first}`);
    }

    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
    }
}

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);
        // subject and grade are specific to Teacher
        this._subject = subject;
        this.grade = grade;
    }

    greeting() {
        super.greeting();
        //...
    }

    //getter / setter
    get subject() {
        return this._subject;
    }

    set subject(newSubject) {
        this._subject = newSubject;
    }
}
```

## Q. Explain IIFE with Example.

## Q. What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?

The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

```
function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    if (m === null) {
        return 0;
    }
    return m.length;
}

console.log(getVowels('sky'));
// expected output: 0
```


# HTML Question

# CSS Question

# Coding Excercise

* Decorate Student List

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
  return classList.map(name => {
    return {
      name,
      age: getRandomIntInclusive(10, 11)
    };
  });
}

// ASSERTION FUNCTION(S) TO BE USED
function assertWithinRange(low, high, actual, testName){
    var inRange = low <= actual && high >= actual;
    if (inRange){
        console.log("passed");
    } else {
        console.log("FAIL");
    }
}
// TESTS CASES
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

```

/**************************** Frontend Architecture Design ****************************
https://github.com/thedaviddias/Front-End-Checklist

Requirements

* Target User Statistics
- Devices: Mobile, Tablet, PC, Hybrid App, Printer => Responsive, Mobile First, Adaptive => The users use mainly mobile or tablet or desktop. statistics.
- Web Browsers and versions: Polyfills, Modernizr (Feature detection), Babel
- Localization: languages and format etc.
- Accessibility: Guidelines, ARIA, Screen-reader
- SEO (Search engine optimization) strategy
- Progressive Enhancement or Graceful Degredation (new and old).
- utf-8

* Design
- Fonts: Web fonts 
- Icon: Icon fonts and stripe images.
- CSS normalize
- CSS naming convention => BEM Block Element Modifier
- CSS preprocessor => SASS
- Style Guide and Colors

* Performance
- Goals: first 1 second, other under 5 seconds.
- Prioritizing visible content, the minimum contents for the first page. CSS, Javascript, HTML. Lazy loading or async. Prograssive Rendering.
- CSS/Javascript Concatenation and Minification
- CDN: stateless files
- Image files optimization
- File Compression: gzip etc.
- Web Socket / Server Sent Event etc
- Local Storage
- Offline

* Javascript Libraries
- Chart: D3
- Date/Time: Moment
- Angular / React
- Components: Editor, File upload
- Test: Unit Test, jasmine/Jest/Mocha, Karma, End to end test? Selenium, Protractor etc.

* Security
- HTTPS (SSL, Secure Sockets Layer => Updated => TLS (Transport Layer Security))
- SQL Injection
- CSRF: Cross Site Request Forgery
- XSS: Cross Site Scripting
- XFO (X-frame-options)
- Login, Cookie or Stateless, SSO

* API
- RESTful
- GraphGL

* Error Handling
- Log system: frontend backend
- Error Pages, Messages

* Development Environment
- Proxy for testing
- Typescript or Javascript
- Deployment Environment
- Building Tools(Bundler): Webpack, Gulp, Grunt
*/

/************************ ES6 Features & Javascript Basic Concept ****************************
*/


//Promise
/*
Q. 
wineFetcher(keyword, callback) ..... 
const combinedFetcher = function ([wineFetcher(keyword, callback), ....]) { ... } ;
combinedFetcher(keyword, callback);
*/

async function BTCtoCNY(keyword, callback) {
    //fetch data
    const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=${keyword}`)
    const json = await response.json();
    return callback(json);
}

// function BTCtoCNY(keyword, callback) {
//     //fetch data
//     return fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=${keyword}`)
//         .then((response) => response.json())
//         .then((json) => callback(json));
// }

//BTCtoCNY('demo', json => json).then(d => console.log(d));

function USDtoJPY(keyword, callback) {
    //fetch data
    return fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=${keyword}`)
        .then((response) => response.json())
        .then((json) => callback(json));
}

//USDtoJPY('demo', json => json).then(d => console.log(d));
//use promise all
function combineExRate(fetchers) {
    return (keyword, callback) => {
        //if fetcher doesn't return a promise, it has to use deffered promises
        const promises = fetchers.map(fetcher => fetcher(keyword, data => data));
        return Promise.all(promises).then(results => results.reduce((arr, result) => arr.concat(result), [])).then(result => callback(result));
    };
}

const combinedExRate = combineExRate([BTCtoCNY, USDtoJPY]);
combinedExRate('demo', data => console.log('Use Promise All:', data));
combinedExRate('demo', data => data).then(data => console.log('Use Promise All and then:', data));

//don't use promise all
const combineFetcher = (fetchers) => {
    return (keyword, callback) => {
        let result = [];
        let fetcherCount = fetchers.length;
        const gatherData = (data) => {
            result = result.concat(data);
            fetcherCount--;
            if (fetcherCount === 0) {
                callback(result);
            }
        };
        fetchers.forEach(fetcher => fetcher(keyword, gatherData));
    };
};
const combinedFetcher = combineFetcher([BTCtoCNY, USDtoJPY]);
combinedFetcher('demo', data => console.log('No Promise:', data));

// A simple promise that resolves after a given time
const timeOut = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Completed in ${t}`);
        }, t);
    });
};
// Promise.all
Promise.all([timeOut(1000), timeOut(2000)])
    .then(result => console.log(result)); // ["Completed in 1000", "Completed in 2000"]

//chaining
//https://javascript.info/promise-chaining
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); // (*)
}).then((result) => { // (**)
    alert(result); // 1
    return result * 2;
}).then((result) => { // (***)
    alert(result); // 2
    return result * 2;
}).then((result) => {
    alert(result); // 4
    return result * 2;
});

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    2, // treated as Promise.resolve(2)
    3 // treated as Promise.resolve(3)
]).then(alert); // [1, 2, 3]

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1

new Promise((resolve, reject) => {
    reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!

new Promise((resolve, reject) => {
    resolve("ok");
}).then((result) => {
    throw new Error("Whoops!"); // rejects the promise
}).catch(alert); // Error: Whoops!

new Promise((resolve, reject) => {
    resolve("ok");
}).then((result) => {
    blabla(); // no such function
}).catch(alert); // ReferenceError: blabla is not defined

function delay(wait) {
    return new Promise(resolve => setTimeout(resolve, wait));
}

delay(3000).then(alert('runs after 3 seconds'));

//finally: if we have load-indication, then .finally is a great handler to stop it when the fetch is complete:
function demoExRate() {
    document.body.style.backgroundColor = 'black';
    document.body.style.opacity = 0.3; // (1) start the indication

    return fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=demo`)
        .finally(() => { // (2) stop the indication
            document.body.style.backgroundColor = 'white';
            document.body.style.opacity = '';
            console.log('finally!');
            //this is optional for refreshing the dom.
            return new Promise(resolve => setTimeout(resolve, 500)); // (*)
        })
        .then(res => res.json()) //return promise
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("No such ExRate");
                return demoGithubUser();
            } else {
                throw err;
            }
        });
}

demoExRate().then(json => {
    document.body.innerHTML = JSON.stringify(json);
    console.log('Data:', json);
});

const p1 = Promise.resolve(21);
const p2 = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    setTimeout(() => {
        reject(new Error('rejection'));
    }, 1000);
});
const p3 = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    setTimeout(() => {
        resolve('AppDividend');
    }, 1000);
});

Promise.all([
        p1,
        p2,
        p3,
    ]).then(values => {
        console.log(values[0]);
        console.log(values[1]);
        console.log(values[2]);
        console.log('All done');
        values.forEach(function (text) {
            console.log(text);
        });
    })
    .catch(error => {
        //only catch one error
    });

//catch error by promise
Promise.all([
    p1.catch(error => {
        return error;
    }),
    p2.catch(error => {
        return error;
    }),
    p3.catch(error => {
        return error;
    }),
]).then(values => {
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
    console.log('All done');
    values.forEach(function (text) {
        console.log(text);
    });
});

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo')); //setTimeout(window.alert, 2*1000, 'That was really slow!'); the last one is for the function's arguments.
const promises = [promise1, promise2];

Promise.allSettled(promises).
then((results) => results.forEach((result) => console.log(result, result.status)));

// expected output:
// {
//     status: "fulfilled",
//     value: 3
// }
// "fulfilled"
// {
//     reason: "foo",
//     status: "rejected"
// }
// "rejected"

function myAsyncFunction(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}

new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000);

}).then(function (result) {

    alert(result); // 1

    return new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function (result) { // (**)

    alert(result); // 2

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function (result) {

    alert(result); // 4

});

loadScript("/article/promise-chaining/one.js")
    .then(script => loadScript("/article/promise-chaining/two.js"))
    .then(script => loadScript("/article/promise-chaining/three.js"))
    .then(script => {
        // scripts are loaded, we can use functions declared there
        one();
        two();
        three();
    });

fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise(function (resolve, reject) { // (*)
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser); // (**)
        }, 3000);
    }))
    // triggers after 3 seconds
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));

// same as above, but response.json() parses the remote content as JSON
fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => alert(user.name)); // iliakan, got user name

function loadJson(url) {
    return fetch(url)
        .then(response => response.json());
}

function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json());
}

function showAvatar(githubUser) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

// Use them:
loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));
// ...

//The power of async functions becomes more evident when there are multiple steps involved:
function who() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡');
        }, 200);
    });
}

function what() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('lurks');
        }, 300);
    });
}

function where() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('in the shadows');
        }, 500);
    });
}

async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${ a } ${ b } ${ c }`);
}

async function msg() {
    const [a, b, c] = await Promise.all([who(), what(), where()]);

    console.log(`${ a } ${ b } ${ c }`);
}

//Async functions always return a promise, so the following may not produce the result you’re after:

async function hello() {
    return 'Hello Alligator!';
}

const b = hello();

console.log(b); // [object Promise] { ... }

hello().then(x => console.log(x)); // Hello Alligator!

//Error Handling, try...catch

function yayOrNay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1); // 0 or 1, at random

        val ? resolve('Lucky!!') : reject('Nope 😠');
    });
}

async function msg() {
    try {
        const msg = await yayOrNay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}

msg(); // Lucky!!
msg(); // Lucky!!
msg(); // Lucky!!
msg(); // Nope 😠
msg(); // Lucky!!
msg(); // Nope 😠
msg(); // Nope 😠
msg(); // Nope 😠
msg(); // Nope 😠
msg(); // Lucky!!


function getUser(name) {
    fetch(`https://api.github.com/users/${name}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

async function getUserAsync(name) {
    let response = await fetch(`https://api.github.com/users/${name}`);
    let data = await response.json(); //return promise
    return data;
}

getUserAsync('yourUsernameHere')
    .then(data => console.log(data));

//get user data
getUser('yourUsernameHere');














/****** Scope */
(function () {
    var a = b = 5;
})();

console.log(b);
//a is in the function scope, but b is global;
//if 'use strict'; Uncaught ReferenceError: b is not defined

/*
Create 'native' method
console.log('hello'.repeatify(3)); => hellohellohello
*/
String.prototype.repeatify = String.prototype.repeatify || function (times) {
    var str = '';
    for (var i = 0; i < times; i++) {
        str += this;
    }
    return str;
};
/*
"this"
*/
var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
console.log(test.call(obj.prop));
console.log(test.call(obj));
//1. Aurelio De Rosa, 2. John Doe, 3.Aurelio De Rosa, 4. Colin Ihrig

/*
The code prints Aurelio De Rosa and John Doe. The reason is that the context of a function, what is referred with the this keyword, in JavaScript depends on how a function is invoked, not how it’s defined.
In the first console.log() call, getFullname() is invoked as a function of the obj.prop object. So, the context refers to the latter and the function returns the fullname property of this object. On the contrary, when getFullname() is assigned to the test variable, the context refers to the global object (window). This happens because test is implicitly set as a property of the global object. For this reason, the function returns the value of a property called fullname of window, which in this case is the one the code set in the first line of the snippet.
*/



/***************************************** CSS ************************************************/
/*
//Specificity examples, https://css-tricks.com/specifics-on-css-specificity/
Inline Style -> ID -> Class, psuedo-class, attribute -> Elements, pesudo-element
If the element has inline styling, that automatically1 wins (1,0,0,0 points)
For each ID value, apply 0,1,0,0 points
For each class value (or pseudo-class or attribute selector), apply 0,0,1,0 points
For each element reference, apply 0,0,0,1 point

ul#nav li.active a => 0,1,1,3
body.ie7 .col_3 h2 ~ h2 => 0,0,2,3
#footer *:not(nav) li => 0,1,0,2 => * = 0
<li style="color: red;"> => 1,0,0,0
ul > li ul li ol li:first-letter => 0,0,0,7, pesudo-element (:first-line, :first-element...) 0,0,0,1
*/

























class loadImages {
    constructor(config = {}) {
        //private
        this.timestamp = null;
        this.data = [];
        //config
        this.count = config.count || 5;
        this.src = config.src || 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-1295/lounging-dog.jpg';
        this.el = this.createImg();
        this.svg = this.createSVG();
        this.el.addEventListener('load', this.onLoad.bind(this)); //bind has better performance than arrow function.
        /* Arrow issue: https://stackoverflow.com/questions/50375440/binding-vs-arrow-function-for-react-onclick-event
        First the memory and performance; When you use a class field to define a function, your whole method resides on each instance of the class and NOT on the prototype, but using the bind technic, just a small callback is stored on each instance, which calls your method that is stored on the prototype.

        Second thing that can be affected is how you write your unit tests. You won't be able to use the component prototype to stub on function calls like below:

        const spy = jest.spyOn(MyComponent.prototype, 'clickHandler');
        expect(spy).toHaveBeenCalled();
        */
        this.el.addEventListener('error', this.onError.bind(this));
        this.loadImage(this.src);
    }

    createImg() {
        const el = document.createElement('img');
        document.body.appendChild(el);
        return el;
    }

    createSVG() {
        //svg create element is not working
        const xmlns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(xmlns, 'svg');
        //element.setAttributeNS(namespace, name, value)
        svg.setAttributeNS(xmlns, 'viewBox', `0 0 100 100`);
        document.body.appendChild(svg);
        return svg;
    }

    drawChart(data) {
        let x;
        let y;
        const len = data.length;
        this.svg.innerHTML = data.reduce((html, d, i) => {
            const prevX = x;
            const prevY = y;
            x = d[0];
            y = d[1];
            html.push(`<line x1="${prevX * 10}" y1="${prevY * 10}" x2="${x * 10}" y2="${y * 10}" stroke="black"></line>`);
            if (i + 1 < len) {
                html.push(`<circle cx="${x * 10}" cy="${y * 10}" r="2"></circle>`);
            }
            return html;
        }, []).join('');
    }

    loadImage(src) {
        this.timestamp = new Date();
        this.el.src = src;
    }

    unloadImage() {
        this.el.src = '';
    }

    printTime() {
        const date = new Date();
        const gap = date.getTime() - this.timestamp.getTime();
        console.log('loading time: ' + gap + ' ms');
        return gap;
    }

    onLoad(e) {
        const gap = this.printTime();
        this.unloadImage();
        this.count--;
        this.data.push([this.count, gap]);
        if (this.count > 0) {
            console.log(this.count);
            this.loadImage(this.src);
        } else {
            this.drawChart(this.data);
        }
    }

    onError(e) {
        console.log(`can't load the image, please check the path`);
    }
}

new loadImages();

class ColorViewer {
    constructor(config = {}) {
        this.data = config.data;
        this.title = config.title || 'Color Viewer';
        let el = config.el;
        if (!el) {
            el = document.createElement('div');
            document.body.appendChild(el);
        }
        el.classList.add('nu-color-viewer');
        this.el = el;
        this.initStyle();
        this.renderBase(this.el, this.title);
        this.viewerEl = this.el.querySelector('.nu-color-viewer__body__viewer');
        //white
        this.viewerColor = [255, 255, 255];
        this.el.addEventListener('click', this.onClick.bind(this));
    }

    initStyle() {
        const styleEl = document.createElement('style');
        const style = `
            .clearfix:after {
                content: "";
                display: table;
                clear: both;
            }
            .nu-color-viewer__body__viewer {
                height: 200px;
                line-height: 200px;
                text-align: center;
                background-color: #ffffff;
            }
            .nu-color-viewer__body__color {
                float: left;
                width: 25%;
                height: 50px;
                line-height: 50px;
                text-align: center;
                cursor: pointer;
                user-select: none;
            }
            .nu-color-viewer__body__color-red {
                background-color: #ff0000;
            }
            .nu-color-viewer__body__color-green {
                background-color: #00ff00;
            }
            .nu-color-viewer__body__color-blue {
                background-color: #0000ff;
            }
            .nu-color-viewer__body__color-white {
                background-color: #ffffff;
            }
            .nu-color-viewer__footer {
                text-align: center;
                padding: 10px;
            }
        `;
        styleEl.innerHTML = style;
        document.head.appendChild(styleEl);
    }

    renderBase(el, title) {
        el.innerHTML = `
            <div class="nu-color-viewer__header">${title}</div>
            <div class="nu-color-viewer__body">
                <div class="nu-color-viewer__body__viewer">
                #ffffff
                </div>
                <div class="nu-color-viewer__body__colors clearfix">
                    <div class="nu-color-viewer__body__color nu-color-viewer__body__color-red" data-action="add-red">Red</div>
                    <div class="nu-color-viewer__body__color nu-color-viewer__body__color-green" data-action="add-green">Green</div>
                    <div class="nu-color-viewer__body__color nu-color-viewer__body__color-blue" data-action="add-blue">Blue</div>
                    <div class="nu-color-viewer__body__color nu-color-viewer__body__color-white" data-action="add-white">White</div>
                </div>
            </div>
            <div class="nu-color-viewer__footer">
                <button data-action="reset">Reset</button>
            </div>
            `;
    }

    updateColor(action, viewerEl, viewerColor) {
        const colors = {
            'add-red': [255, 0, 0],
            'add-green': [0, 255, 0],
            'add-blue': [0, 0, 255],
            'add-white': [255, 255, 255]
        };
        const color = colors[action];
        if (color || action === 'reset') {
            let hexColor = '#';
            viewerColor.forEach((c, i) => {
                viewerColor[i] = action === 'reset' ? 255 : Math.ceil(c * 0.9 + color[i] * 0.1);
                if (viewerColor[i] > 255) {
                    viewerColor[i] = 255;
                }
                hexColor += this.convertHEX(viewerColor[i]);
            });
            viewerEl.style.backgroundColor = hexColor;
            viewerEl.innerHTML = hexColor;
        }
    }

    /*
    rgb(255, 255, 255) to #ffffff
    */
    convertHEX(val) {
        // existing color * 0.9 + new color * 0.1;
        let hex = Number(val).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }

    onClick(e) {
        const action = e.target.dataset.action;
        this.updateColor(action, this.viewerEl, this.viewerColor);
    }
}

new ColorViewer();
/*
Poll Widget question (just know your positioning, relative, static etc know the differences inside out). You might want to know specificity as well. 
//static normal flow

//from its normal postion.
position: relative;
top: 40px; left: 40px;

//from containing block
position: absolute;
top: 40px; left: 40px;

https://developer.mozilla.org/en-US/docs/Web/CSS/position
*/
class Poll {
    constructor(config = {}) {
        this.data = config.data;
        this.multipleSelection = config.multipleSelection;
        this.title = config.title || 'Poll';
        this.selectedItems = {}; // question index : {0: true, 1:false}
        let el = config.el;
        if (!el) {
            el = document.createElement('div');
            document.body.appendChild(el);
        }
        el.classList.add('nu-poll');
        this.el = el;
        this.renderBase(this.el, this.title);
        this.bodyEl = this.el.querySelector('.nu-poll__body');
        this.answerEl = this.el.querySelector('.nu-poll__footer__answer');
        this.render(this.data, this.bodyEl, this.multipleSelection);
        this.el.addEventListener('click', this.onClick.bind(this));
    }

    renderBase(el, title) {
        el.innerHTML = `
            <div class="nu-poll__header">${title}</div>
            <div class="nu-poll__body"></div>
            <div class="nu-poll__footer">
                <button data-action="submit-selection">Submit</button>
                <div class="nu-poll__footer__answer"></div>
            </div>
            `;
    }

    render(data, bodyEl, multipleSelection) {
        const html = ['<ol class="nu-poll__body__items">'];
        Object.keys(data).forEach((q, i) => {
            html.push(`
                <li class="nu-poll__body__items__item" data-action="select-item" data-id="${i}">
                    <div class="nu-poll__body__items__item__question">${q}</div>
                    <div class="nu-poll__body__items__item__question-items">${this.renderQuestion(i, data[q], multipleSelection)}</div>
                </li>`);
        });
        html.push('</ol>');
        bodyEl.innerHTML = html.join('');
    }

    renderQuestion(idx, items, multipleSelection) {
        const html = ['<ol class="nu-poll__body__items">'];
        const type = multipleSelection ? 'checkbox' : 'radio';
        items.forEach((d, i) => {
            html.push(`
                <li class="nu-poll__body__items__item" data-action="select-item" data-id="${i}">
                    <input name="${idx}-${i}" data-action="select-item" data-question_index="${idx}" data-item_index="${i}" type="${type}" />${d}
                </li>`);
        });
        html.push('</ol>');
        return html.join('');
    }

    renderAnswer(data, selectedItems, answerEl) {
        const html = ['<ol class="nu-poll__footer__answer__items">'];
        Object.keys(data).forEach((q, i) => {
            const answerIndcies = selectedItems[i] || {};
            const answerHtml = [];
            Object.keys(answerIndcies).forEach(answerKey => {
                answerHtml.push(data[q][+answerKey]);
            });
            html.push(`
                <li class="nu-poll__footer__answer__items__item">
                    <div class="nu-poll__footer__answer__items__item__question">${q}</div>
                    <div class="nu-poll__footer__answer__items__item__answer">${answerHtml.join(', ')}</div>
                </li>`);
        });
        html.push('</ol>');
        answerEl.innerHTML = html.join('');
    }

    onClick(e) {
        const el = e.target;
        const dataset = el.dataset;
        switch (dataset.action) {
            case 'select-item':
                const questionIndex = dataset.question_index;
                const itemIndex = dataset.item_index;
                const answer = this.selectedItems[questionIndex] || {};
                if (el.checked) {
                    answer[itemIndex] = true;
                } else {
                    delete answer[itemIndex];
                }
                this.selectedItems[questionIndex] = answer;
                break;
            case 'submit-selection':
                this.renderAnswer(this.data, this.selectedItems, this.answerEl);
                break;
        }
    }

}

new Poll({
    data: {
        'Question 1': [
            'Radio',
            'Check',
            'Button'
        ],
        'Question 2': [
            'aaa',
            'bbb',
            'ccc'
        ]
    }
});

class ContactList {

    constructor(config) {
        this.rAF = false;
        this.ticking = false;
        this.lastScrollTop = 0;
        this.focusEl = null;
        let el = config.el;
        if (!el) {
            el = document.createElement('div');
            document.body.appendChild(el);
        }
        this.el = el;
        //e.g { 'adam': '4086667777', 'aaa': '4440005555' }
        this.data = config.data;
        this.renderBase(this.el);
        this.bodyEl = this.el.querySelector('.contact-list__body');
        this.selectAllEl = this.el.querySelector('.contact-list__header__select-all');
        this.render(this.data);
        this.bindEvent(this.el);
    }

    renderBase(el) {
        /*
        ul {
            list-style-type: none;
        }

        input:invalid+span:after {
            position: absolute; content: '✖';
            padding-left: 5px;
        }

        input:valid+span:after {
            position: absolute;
            content: '✓';
            padding-left: 5px;
        }
         */
        el.innerHTML = `
        <div class="contact-list">
            <div class="contact-list__header">
                <input class="contact-list__header__select-all" type="checkbox" data-action="select-all" /> Select All
                <input class="contact-list__header__search" type="text" minlength="4" maxlength="8" placeholder="search *"/>
            </div>
            <div class="contact-list__body"></div>
        </div>
        `;
    }

    renderBody(el, data, keyword) {
        const html = ['<ul class="contact-list__body__items">'];
        //This is faster than Object.keys(data).forEach(key => ...). for (key in data) {...} is slowest.
        const keys = Object.keys(data);
        for (let i = 0, len = keys.length; i < len; i++) {
            const key = keys[i];
            if (!keyword || keyword && key.indexOf(keyword) > -1) {
                //for readability, acutally + or String.concat() has better performance.
                html.push(`
                <li class="contact-list__body__items__item">
                    <input class="contact-list__body__items__item__check" type="checkbox" data-action="select" />
                        ${key}: ${data[key]}
                </li>`);
            }
        }
        html.push('</ul>');
        el.innerHTML = html.join('');
    }

    render(data) {
        this.renderBody(this.bodyEl, data);
    }

    bindEvent() {
        this.bodyEl.addEventListener('keyup', this.onKeyUp.bind(this));
        this.el.addEventListener('click', this.onClick.bind(this));
        //capturing option default is false.
        const inputEl = this.el.querySelector('.contact-list__header__search');
        //inputEl.addEventListener('keyup', this.debounce(this.onSearch, 500));
        const debounceSearch = this.debouncePromise(this.search, 400);
        inputEl.addEventListener('keyup', (e) => {
            const value = e.target.value;
            console.log('typed:' + value);
            debounceSearch(value).then(data => {
                console.log('searching');
                this.renderBody(this.bodyEl, data, value);
            });
        });
    }

    debounce(callback, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => callback.apply(this, args), wait);
        };
    }

    //if there is a callback with promise, we need deferred promise.
    debouncePromise(callback, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            let resolve;
            const deferredPromise = new Promise(_resolve => resolve = _resolve).then(() => callback.apply(this, args));
            timeout = setTimeout(resolve, wait);
            return deferredPromise;
        };
    }

    throttle(callback, wait) {
        let timeout;
        return (...args) => {
            if (!timeout) {
                timeout = setTimeout(() => {
                    callback.apply(this, args);
                    timeout = null;
                }, wait);
            }
        };
    }

    moveFocus(dir) {
        const el = this.getFocusEl();
        const li = el.parentElement;
        const nextLi = dir === 'next' ? li.nextElementSibling : li.previousElementSibling;
        let inputEl;
        if (nextLi) {
            inputEl = nextLi.children[0];
        } else {
            inputEl = dir === 'next' ? this.getFirstCheckEl() : this.getLastCheckEl();
        }
        if (inputEl) {
            inputEl.focus();
            this.focusEl = inputEl;
        }
    }

    selectAll(selected = true) {
        const els = this.el.querySelectorAll('.contact-list__body__items__item__check');
        els.forEach(el => {
            el.checked = selected;
        });
    }

    checkSelectedAll() {
        const els = this.bodyEl.querySelectorAll('.contact-list__body__items__item__check:not(:checked)');
        this.selectAllEl.checked = els.length === 0;
    }

    //requestAnimationFrame
    animate() {
        //animate something
    }

    startAnimation() {
        this.rAF = requestAnimationFrame(this.startAnimation.bind(this));
        this.animate();
    }

    stopAnimation() {
        cancelAnimationFrame(this.rAF);
    }

    renderByScroll(e) {
        //render something
        this.lastScrollTop = e.target.scrollTop;
    }

    getFocusEl() {
        //last focus el or the first el
        return this.focusEl || this.getFirstCheckEl();
    }

    getFirstCheckEl() {
        return this.bodyEl.querySelector('.contact-list__body__items__item__check');
    }

    getLastCheckEl() {
        const li = this.bodyEl.querySelector('.contact-list__body__items__item:last-child');
        return li ? li.children[0] : null;
    }

    search(keyword) {
        return new Promise(resolve => {
            // fetch(`https://beer?keyword=${keyword}`)
            //     .then((response) => response.json())
            //     .then((json) => resolve(json));
            const json = this.data;
            setTimeout(() => resolve(json), 100);
        });
    }

    onSearch(e) {
        const value = e.target.value;
        this.search(value).then(data => {
            this.renderBody(this.bodyEl, data, value);
        });
    }

    onKeyUp(e) {
        //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
        const key = e.key || e.code;
        switch (key) {
            case 'ArrowDown':
                this.moveFocus('next');
                break;
            case 'ArrowUp':
                this.moveFocus('prev');
                break;
        }
    }

    //scrolll with requestAnimationFrame
    onScroll(e) {
        //same as throttle
        if (!this.ticking) {
            requestAnimationFrame(() => {
                this.renderByScroll(e);
                this.ticking = false;
            });
            this.ticking = true;
        }
    }

    onClick(e) {
        const action = e.target.dataset.action;
        if (action) {
            switch (action) {
                case 'select-all':
                    this.selectAll(e.target.checked);
                    break;
                case 'select':
                    this.checkSelectedAll();
                    break;
            }
        }
    }
}

const div = document.createElement('div');
document.body.appendChild(div);
new ContactList({
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
});

//Write a scheduler in JavaScript that accepts max number of concurrent tasks as a parameter 
//and schedules tasks (each task may take arbitrary time to complete).

class Scheduler {
    constructor(config) {
        this.max = config.maxActive;
        this.taskQueue = [];
        this.active = 0;
    }

    add(fn, wait) {
        this.taskQueue.push({
            fn: fn,
            wait: wait
        });
        this.run();
    }

    run() {
        if (this.active < this.max && this.taskQueue.length > 0) {
            const task = this.taskQueue.shift();
            this.active++;
            setTimeout(() => {
                task.fn(this.active, task.wait);
                this.active--;
                this.run();
            }, task.wait);
        }
    }
}

const scheduler = new Scheduler({
    maxActive: 2
});
const fn = (activeCount, wait) => {
    console.log(activeCount, wait);
};
scheduler.add(fn, Math.random() * 2000);
scheduler.add(fn, Math.random() * 2000);
scheduler.add(fn, Math.random() * 2000);
scheduler.add(fn, Math.random() * 2000);
scheduler.add(fn, Math.random() * 2000);
scheduler.add(fn, Math.random() * 2000);

//https://joshbedo.github.io/JS-Design-Patterns/

//Write an emitter class: 
//emitter = new Emitter(); 
// 1. Support subscribing to events. 
//sub = emitter.subscribe('event_name', callback); 
//sub2 = emitter.subscribe('event_name', callback2); 
// 2. Support emitting events. 
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters. 
//emitter.emit('event_name', foo, bar); 
// 3. Support unsubscribing existing subscriptions by releasing them. sub.release(); 
// `sub` is the reference returned by `subscribe` above */

class Emitter {
    constructor() {
        this.handlers = {};
    }

    subscribe(eventName, callback) {
        const handlers = this.handlers[eventName] || [];
        handlers.push(callback);
        this.handlers[eventName] = handlers;
        return {
            release: () => this.release(eventName, callback)
        };
    }

    release(eventName, callback) {
        let handlers = this.handlers[eventName] || [];
        handlers = handlers.filter(c => c !== callback);
        if (handlers.length === 0) {
            delete this.handlers[eventName];
        } else {
            this.handlers[eventName] = handlers;
        }
        console.log('released: ' + eventName);
    }

    emit(eventName, ...args) {
        const handlers = this.handlers[eventName] || [];
        handlers.forEach(h => h.apply(this, args));
        console.log('handlers count: ' + handlers.length);
    }
}

const emitter = new Emitter();

const sub = emitter.subscribe('move', (a, b, c) => {
    console.log(a, b, c);
});

emitter.emit('move', 'aa', 'bb', 'cc');
sub.release();
emitter.emit('move', 'dd', 'ee', 'ff');


//recursive and iterative
function flatten(nums) {
    return nums.reduce((res, n) => res.concat(Array.isArray(n) ? flatten(n) : n), []);
}
arr.flat(Infinity);

//inline
function flatten(nums) {
    let i = 0;
    let n = nums[i];
    while (n !== undefined) {
        if (Array.isArray(n)) {
            nums.splice(i, 1, ...n);
        } else {
            i++;
        }
        n = nums[i];
    }
    return nums;
}

function flatten(nums) {
    var res = [];
    while (nums.length) {
        var n = nums.shift();
        if (Array.isArray(n)) {
            // this line preserve the order
            nums = n.concat(nums);
        } else {
            res.push(n);
        }
    }
    return res;
}

console.log(flatten([1, [2, [3]],
    [4]
]));


//event
e.stopPropagation(); //stop bubling and capturing
e.preventDefault(); //stop default handle



/*Object clone, deep copy
The spread syntax and the Object.assign() method can only make shallow copies of objects.
*/

const pizzas = {
    margherita: {
        toppings: ['tomato sauce', 'mozzarella cheese'],
        prices: {
            small: '5.00',
            medium: '6.00',
            large: '7.00'
        }
    },
    prosciutto: {
        toppings: ['tomato sauce', 'mozzarella cheese', 'ham'],
        prices: {
            small: '6.50',
            medium: '7.50',
            large: '8.50'
        }
    }
};

let pizzasCopy = {
    ...pizzas
};

// modify a value in the copy of pizzas
pizzasCopy.margherita.prices.small = '5.50';

// log the copied object to the console
console.log(pizzasCopy.margherita.prices.small); // This will log 5.50, as expected

// log the source object to the console
console.log(pizzas.margherita.prices.small); // This will also log 5.50 instead of 5.00!!, shallow copy

// reassign the value of a top-level property in the copied object
pizzasCopy.margherita = {};

// log the copied object to the console
console.log(pizzasCopy.margherita); // This will log an empty object, as expected

// log the source object to the console
console.log(pizzas.margherita); // This will still log the original source object

//The same will happen if we use Object.assign():
let pizzasCopy = Object.assign({}, pizzas);

//1: Deep copy using iteration
function clone(o) {
    //pass date object
    if (!o || typeof o !== 'object' || (o instanceof Date && !isNaN(o.valueOf()))) {
        return o;
    } else if (Array.isArray(o)) {
        return o.map(item => clone(item));
    } else {
        return Object.keys(o).reduce((obj, key) => {
            obj[key] = clone(o[key]);
            return obj;
        }, {});
    }
}

const pizzasCopy = clone(pizzas);

/*2: Converting to JSON and back
Fast cloning with data loss - JSON.parse/stringify
If you do not use Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays or other complex types within your object, a very simple one liner to deep clone an object is:
*/
function jsonCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

//Best: lodash.cloneDeep
const copiedObj = _.cloneDeep(obj);






//SkillUser.png
const endorsements = [{
    skill: 'css',
    user: 'Bill'
}, {
    skill: 'javascript',
    user: 'Chad'
}, {
    skill: 'javascript',
    user: 'Bill'
}, {
    skill: 'css',
    user: 'Sue'
}, {
    skill: 'javascript',
    user: 'Sue'
}, {
    skill: 'html',
    user: 'Sue'
}];
const getSkills = (endorsements) => {
    const res = endorsements.reduce((agg, d) => {
        const item = agg[d.skill] || {
            skill: d.skill,
            user: [],
            count: 0
        };
        item.user.push(d.user);
        item.count += 1;
        agg[d.skill] = item;
        return agg;
    }, {});
    return Object.values(res);
    // Result 
    // [ 
    // { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 }, 
    // { skill: 'css', user: ['Sue', 'Bill'], count: 2 }, 
    // { skill: 'html', user: ['Sue'], count: 1 } 
    // ]; 
};

console.log(getSkills(endorsements));

// could be potentially more than 3 keys in the object above 
const items = [{
        color: 'red',
        type: 'tv',
        age: 18
    }, {
        color: 'silver',
        type: 'phone',
        age: 20
    },
    {
        color: 'gold',
        type: 'watch',
        age: 22
    }
];
const excludes = [{
    k: 'color',
    v: 'silver'
}, {
    k: 'type',
    v: 'tv'
}, ];

/*
function excludeItems(items, excludes) {
    excludes.forEach(pair => {
        //re-assign, it is filtered.
        items = items.filter(item => item[pair.k] === item[pair.v]);
    });
    return items;
}
*/
//1. Describe what this function is doing... 
//2. What is wrong with that function ? 
//3. How would you optimize it ?

const excludeItems = (items, excludes) => {
    /*
    {
        color: {
            silver: true,
            ...
        },
        type: {
            tv: true,
            ...
        }
    }
    */
    const exMap = excludes.reduce((map, exItem) => {
        const valMap = map[exItem.k] || {};
        valMap[exItem.v] = true;
        map[exItem.k] = valMap;
        return map;
    }, {});
    return items.filter(item => !Object.keys(item).find(key => exMap[key] && exMap[key][item[key]]));
};

console.log(excludeItems(items, excludes));

//find all data-xxx
const dataItems = document.querySelectorAll('[data-xxx]');
const itemx = document.querySelector('[data-id]="x"');
//filtering/iterative DOMs, querySelectorAll returns NodeList https://developer.mozilla.org/en-US/docs/Web/API/NodeList
//NodeList.forEach() / keys() / values() / entries() / item(index)
dataItems.forEach((currentValue, currentIndex, listObj) => {
        console.log(currentValue + ', ' + currentIndex + ', ' + this);
    },
    'thisArg'
);
//[object HTMLDivElement], 0, thisArg




/*
Q. Explain the difference between mutable and immutable objects
Q. What is an example of an immutable object in JavaScript?
Q. What are the pros and cons of immutability?
Q. How can you achieve immutability in your own code?
A mutable object is an object whose state can be modified after it is created. An immutable object is an object whose state cannot be modified after it is created.

What is an example of an immutable object in JavaScript?
In JavaScript, some built-in types (numbers, strings) are immutable, but custom objects are generally mutable.

Some built-in immutable JavaScript objects are Math, Date.

Object Constant Properties
*/
let myObject = {};
Object.defineProperty(myObject, 'number', {
    value: 42,
    writable: false,
    configurable: false,
});
console.log(myObject.number); // 42
myObject.number = 43;
console.log(myObject.number); // 42

//Prevent Extensions
var myObject = {
    a: 2
};

Object.preventExtensions(myObject); //=> Object.seal() => Object.freeze()

myObject.b = 3;
myObject.b; // undefined

//immutable.js
/*
Q. What is the definition of a higher-order function?
A higher-order function is any function that takes one or more functions as arguments, map, forEach, filter, find, reduce ...
*/

/*
Q. Functional programming
Q. Pure function: No side effect
Q. Higher order function: takes a function as an argument or return a function or both.
Q. Curried function
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0
Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.

https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3
Pure functions are functions that 
accept an input and returns a value without modifying any data outside its scope(Side Effects). 
Its output or return value must depend on the input/arguments and pure functions must return a value.

not pure, it changes the outside value.

React.PureComponent
React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.

A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

Concretely, a higher-order component is a function that takes a component and returns a new component.

const EnhancedComponent = higherOrderComponent(WrappedComponent);

We previously recommended mixins as a way to handle cross-cutting concerns. We’ve since realized that mixins create more trouble than they are worth. Read more about why we’ve moved away from mixins and how you can transition your existing components.

// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
*/
function impure(arg) {
    finalR.s = 90
    return arg * finalR.s
}

//not pure, it doesn't return a value.
function impure(arg) {
    let f = finalR.s * arg
}

//it changes the outside value
function impure(arg) {
    return finalR.s * 3
}
/*
eg) mutation tracking: states are changed it re-render component. 
we have an effects function, a pure function which we use to affect our state. You see that it returns a new state when the state is to be changed and returns the same state when no modification is required.
state check for re-rendering. it is not changed, it doesn't change state, it is changed, it returns a new state.
*/
let state = {
    add: 0,
}

function render() {
    //...
}

function effects(state, action) {
    if (action == 'addTen') {
        return {
            ...state,
            add: state.add + 10
        }
    }
    return state;
}

function shouldUpdate(s) {
    if (s === state) {
        return false
    }
    return true
}
state = effects(state, 'addTen')
if (shouldUpdate(state)) {
    render();
}
/*
- Imperative programs spend lines of code describing the specific steps used to achieve the desired results — the flow control: How to do things.
- Declarative programs abstract the flow control process, and instead spend lines of code describing the data flow: What to do. The how gets abstracted away.
Imperative
---
*/
const doubleMap = numbers => {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
    }
    return doubled;
};

console.log(doubleMap([2, 3, 4])); // [4, 6, 8]
//---
//Declarative
//---
const doubleMap = numbers => numbers.map(n => n * 2);

console.log(doubleMap([2, 3, 4])); // [4, 6, 8]
//---

function sum(x) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } else {
        return (y) => x + y;
    }
}
sum(x, y);
sum(x)(y);
/*
- Function composition is the process of combining two or more functions in order to produce a new function or perform some computation.
Q. Can you give an example of a curry function and why this syntax offers an advantage?
https://hackernoon.com/javascript-and-functional-programming-currying-pt-4-96e3230782ab
https://hackernoon.com/currying-in-the-real-world-b9627d74a554
*/
function multiply(a, b, c) {
    return a * b * c;
}
multiply(1, 2, 3); // 6
//=> curried

function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
log(multiply(1)(2)(3)) // 6
/*
1. Currying gives us the ability to compose terse, concise and reusable functions.
2. We use these functions as clean, testable units of logic to compose the more logically complex parts of our programs.
3. With currying, any function that works on single elements can be converted into a function that works on arrays (lists), simply by wrapping it with map.
*/

//1. Write little code modules that can be reused and configured with ease, much like what we do with npm:
function discount(discount) {
    return (price) => {
        return price * discount;
    }
}
const tenPercentDiscount = discount(0.1);
tenPercentDiscount(500); // $50
// $500 - $50 = $450
//2. Avoid frequently calling a function with the same argument:
function volume(h) {
    return (w) => {
        return (l) => {
            return l * w * h
        }
    }
}
const hCylinderHeight = volume(100);
hCylinderHeight(200)(30); // 600,000l
hCylinderHeight(2322)(232); // 53,870,400l



/*
https://css-tricks.com/centering-css-complete-guide/

**** horizontally ***
inline, inline-block:
text-align: center;
block:
.center {
  margin: 0 auto;
  width: 200px;
}
<main>
  <div class="center">
    I'm a block level element and am centered.
  </div>
</main>

main div {
  max-width: 125px;
}

.inline-block-center {
  text-align: center;
}
.inline-block-center div {
  display: inline-block;
}

.flex-center {
  display: flex;
  justify-content: center;
}

<main class="inline-block-center">
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row.
  </div>
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row. I have more content in me than my siblings do.
  </div>
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row.
  </div>
</main>

<main class="flex-center">
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row.
  </div>
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row. I have more content in me than my siblings do.
  </div>
  <div>
    I'm an element that is block-like with my siblings and we're centered in a row.
  </div>
</main>

**** vertically ****
//single
.center-text-trick {
  height: 100px;
  line-height: 100px;
  white-space: nowrap;
}

//multiple
//use table
.center-table {
  display: table;
  height: 250px;
  width: 240px;
}
.center-table p {
  display: table-cell;
  vertical-align: middle;
}
//use flex
.flex-center-vertically {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
}

//block
//fixed height
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px; // account for padding and border if not using box-sizing: border-box; 
}
//unknown height
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
//table
main {
  height: 300px;
  width: 300px;
  position: relative;
  display: table;
}
main div {
  display: table-cell;
  vertical-align: middle;
}
//flex
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

*** both ***
//fixed
.parent {
  position: relative;
}

.child {
  width: 300px;
  height: 100px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px; //+padding
}
//unknown
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
//flex
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

//grid
body, html {
  height: 100%;
  display: grid;
}
span { // thing to center 
    margin: auto;
}
*/
/*
The second question was about setTimeout browser api, you will be asked to clean all timeouts, the answer is to override setTimeout and store all of them in stuck and clean them if needed.  
*/

class NUUtil {
    constructor() {
        this.timeoutMap = new Map();
    }
    setTimeout(callback, wait) {
        const id = setTimeout(callback, wait);
        this.timeoutMap.set(callback, id);
    }
    clearTimeout(callback) {
        const id = this.timeoutMap.get(callback);
        clearTimeout(id);
        this.timeoutMap.delete(callback);
    }
    clearTimeoutAll() {
        const ids = this.timeoutMap.values();
        let id = ids.next().value;
        while (id !== null) {
            clearTimeout(id);
            id = ids.next().value;
        }
        this.timeoutMap.clear();
    }
}

/* 
//remove all
var id = window.setTimeout(function() {}, 0);

while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
}

//override
const timeouts = [];
const originalTimeoutFn = window.setTimeout;

window.setTimeout = function(fun, delay) { //this is over-writing the original method
  const t = originalTimeoutFn(fn, delay);
  timeouts.push(t);
}

function clearTimeouts(){
  while(timeouts.length){
    clearTimeout(timeouts.pop());
  }
}
*/

/*
“How would you implement a news-feed (which has only posts of text and pictures)?”
“How would you implement a photos album?”
*/

/*
Given

colors = ["red", "blue", "green", "yellow"]; and a string

str = "Lorem ipsum dolor sit amet";

write a function that prints each letter of the string in different colors. ex. L is red, o is blue, r is green, e is yellow, m is red, after the space, it should be blue.

colorPrinter('Lorem ipsum in the world', ['red', 'blue', 'green', 'yellow']);
*/

function colorPrinter(str, colors) {
    const len = str.length;
    const colorLen = colors.length;
    let j = 0;
    const html = [];
    for (let i = 0; i < len; i++) {
        if (str[i] !== ' ') {
            html.push(`<span style="color:${colors[j]};">${str[i]}</span>`);
            j++;
            if (j === colorLen) {
                j = 0;
            }
        } else {
            html.push(str[i]);
        }
    }
    return html.join('');
}

function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        //0 ~ 15
        color += (Math.floor(Math.random() * 15)).toString(16);
    }
    return color;
}

/*
Array reduce pollyfil
*/

Array.prototype.myReduce = (callback, accValue) => {
    this.forEach((d, i) => {
        if (accValue !== undefined) {
            accValue = callback(accValue, this[i], i, this);
        } else {
            accValue = this[i];
        }
    });
    return accValue;
};


/*
getElementsByClassName()
Q. Given 2 identical DOM trees (but not equal) and one element of the first DOM tree, 
how would you find this element in the second DOM tree?
Does it has a ID or class name or data-* attribute? then we can user querySelector. 
it has the same innerHTML?
assumption it has data-id="abc"

querySelector('[data-id]="abc"')

  <div id="root1">
    <div>
      <div></div>
    </div>
    <div>
      <div id="node1"></div>
      <div></div>
    </div>
  </div>

  <div id="root2">
    <div>
      <div></div>
    </div>
    <div>
      <div id="node2"></div>
      <div></div>
    </div>
  </div>

1. collect indices
2. find node
*/

function getPath(root, node) {
    const path = [];
    while (root !== node) {
        path.push([...node.parentNode.childNodes].indexOf(node));
        node = node.parentNode;
    }
    return path;
}

function findNode(node, path) {
    while (path.length) {
        const index = path.pop();
        node = node.childNodes[index];
    }
    return node;
}

/*
const root = document.querySelector('#root1');
const node = root.querySelector('#node1');
const targetRoot = document.querySelector('#root2');
const path = getPath(root, node);
const targetNode = findNode(targetRoot, path);
console.log(targetNode.id);
*/

function getElementsByClassName(dom, className) {
    if (!dom) return null;
    const queue = [dom];
    const doms = [];
    while (queue.length) {
        const d = queue.shift();
        if (d.classList.contains(className)) doms.push(d);
        if (d.children) queue.push(...d.children);
    }
    return doms;
}

function getElementsByClassNameR(dom, className) {
    if (!dom) return null;
    const doms = [];
    const traverse = (dom) => {
        if (dom.classList.contains(className)) doms.push(dom);
        if (dom.children) {
            for (let i = 0, len = dom.children.length; i < len; i++) {
                traverse(dom.children[i]);
            }
        }
    };
    traverse(dom);
    return doms;
}

/**
If you know the value that you are looking for is closer to the top, a BFS approach might be a superior choice, 
but if a tree is very wide and not too deep, a DFS approach might be faster and more efficient.
 */
//level order
function findDomBFS(el, id) {
    if (!el) return null;
    const queue = [el];
    //let count = 0;
    while (queue.length) {
        for (let i = 0, len = queue.length; i < len; i++) {
            //count += 1;
            el = queue.shift();
            if (el.dataset.id === id) {
                return el;
            } else if (el.children) {
                queue.push(...el.children);
            }
        }
    }
    return null;
}

/*
Q. Explain event delegation
Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM. The benefits of this technique are:
Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.
There is no need to unbind the handler from elements that are removed and to bind the event for new elements.

*/

/*

//Critical Rendering Path
1. Process HTML markup and build the DOM tree.
2. Process CSS markup and build the CSSOM tree.
3. Combine the DOM and CSSOM into a render tree.
4. Run layout on the render tree to compute geometry of each node.
5. Paint the individual nodes to the screen.

"Flash of Unstyled Content" (FOUC)

<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="style.css" rel="stylesheet">
    <link href="portrait.css" rel="stylesheet" media="orientation:portrait">
    <link href="print.css" rel="stylesheet" media="print">
    <link href="other.css" rel="stylesheet" media="(min-width: 40em)">
    <title>Critical Path: Script Async</title>
  </head>
  <body>
    <p>Hello <span>web performance</span> students!</p>
    <div><img src="awesome-photo.jpg"></div>
    <script src="app.js" async></script>
  </body>
</html>

* The general sequence of steps to optimize the critical rendering path is:
1. Analyze and characterize your critical path: number of resources, bytes, length.
2. Minimize number of critical resources: eliminate them, defer their download, mark them as async, and so on.
3. Optimize the number of critical bytes to reduce the download time (number of roundtrips).
4. Optimize the order in which the remaining critical resources are loaded: 
download all critical assets as early as possible to shorten the critical path length.
Content Delivery Network (CDN), stateless
Optimize the size of images
minimize javascript/css
Gzip Compression

//progressive rendering
Lazy loading of images - Images on the page are not loaded all at once. JavaScript will be used to load an image when the user scrolls into the part of the page that displays the image.
Prioritizing visible content (or above-the-fold rendering) - Include only the minimum CSS/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred scripts or listen for the DOMContentLoaded/load event to load in other resources and content.
Async HTML fragments - Flushing parts of the HTML to the browser as the page is constructed on the back end. More details on the technique can be found here.

* Optimize JavaScript Use
Prefer asynchronous JavaScript resources
Avoid synchronous server calls
Defer parsing JavaScript
Avoid long running JavaScript

* Optimize CSS Use
Put CSS in the document head
Avoid CSS imports (@import): additional roundtrips into the critical path, the imported CSS resources are discovered only after the CSS stylesheet with the @import rule itself is received and parsed.
Inline CSS: Reduce roundtrips

//Normalize.css is a small CSS file that provides better cross-browser consistency 
in the default styling of HTML elements. 
It’s a modern, HTML5-ready, alternative to the traditional CSS reset.

Preserve useful browser defaults rather than erasing them.
Normalize styles for a wide range of HTML elements.
Correct bugs and common browser inconsistencies.
Improve usability with subtle improvements.
Explain the code using comments and detailed documentation.

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

box-sizing: border-box;

//BFC(Block Formatting Context) 
It's the region in which the layout of block boxes occurs and in which floats interact with other elements.

Graceful Degradation => new => old

//Efficient CSS
Activate HTTP/2 and GZIP compression on your server
Use a content delivery network (CDN) to increase the number of simultaneous HTTP connections and replicate files to other locations around the world

Resize bitmap images. An entry-level smartphone will take multi-megapixel images that can’t be displayed in full on the largest HD screen. Few sites will require images of more than 1,600 pixels in width.
Ensure you use an appropriate file format. Typically, JPG is best for photographs, SVG for vector images, and PNG for everything else. You can experiment to find the optimum type.
Use image tools to reduce file sizes by striping metadata and increasing compression factors.

Replace Images with CSS Effects
Remove Unnecessary Fonts: Only load the weights and styles you require — for example, roman, 400 weight, no italics
Avoid @import
Concatenate and Minify
OOCSS & BEM — Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development

BEM e.g)
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }

Simplify Selectors
Be Wary of Expensive Properties: border-radius, box-shadow, opacity, transform, filter, position: fixed
Adopt CSS Animations
Adopt SVG Images
Style SVGs with CSS
Avoid Base64 Bitmap Images

- Advantages of preprocessor? sass, stylus, less.
most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

:nth-child(odd) odd = 2n+1, even = 2n, p:nth-of-type(2n);

* FYI. Lighthouse
Lighthouse is an open-source, automated tool for improving the quality of web pages. 
You can run it against any web page, public or requiring authentication. 
It has audits for performance, accessibility, progressive web apps, and more.

Use CSS animations for simpler "one-shot" transitions, like toggling UI element states.
Use JavaScript animations when you want to have advanced effects like bouncing, stop, pause, rewind, or slow down.
If you choose to animate with JavaScript, use the Web Animations API or a modern framework that you're comfortable with.

* Cross-Origin Resource Sharing (CORS) https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
XMLHttpRequest and Fetch API follow the same-origin policy.
additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin. 
A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.

const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-CSRFToken': csrftoken
});

//multilingual
Don't hardcode English text, formats (numbers, dates, addresses, etc.), word order or sentence structure.
Don't put text or numbers in images.
Don't forget about right-to-left locales.
Take advantage of printf() (or equivalents) and use variables in the English strings.
Write semantic code (e.g. don't use text and <img/> for decorations; instead, use CSS).
Document your code so that localizers know what they're translating (e.g. in gettext use comments and contexts).

cookie, sessionStorage (tab) and localStorage

<script>, <script async> and <script defer>
async load the script asynchronously.
defer to be executed after the document has been parsed, but before firing DOMContentLoaded, There's not much difference in putting a normal <script> at the end of <body>

<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy"
     onload="">

HTTP response status codes
200 OK
201 Created: after POST/PUT
202 Accepted: for batch, the response will have the url for checking the batch process

300 Multiple Choice, The request has more than one possible response. The user-agent or user should choose one of them. 
301 Moved Permanently: URI has been changed, the response can have the new URI
302 Found: change temporary, need to request it again.
303 See Other The server sent this response to direct the client to get the requested resource at another URI with a GET request.
304 Not Modified: the response has not been modified, client can use the cache.

400 Bad request
401 Unauthorized: Unauthenticated
403 Forbidden: No access rights
404 Not Found
405 Method Not allowed: DELETE-ing, GET/HEAD are always allowed.
408 Request Timeout

500 Internal Server Error
501 Not Implemented
502 Bad Gateway: 
503 Service Unavailable: Server is not ready
504 Gateway Timeout

* http status code
202
https://restfulapi.net/http-status-202-accepted/
HTTP Status 202 indicates that request has been accepted for processing, but the processing has not been completed. This status code is useful when the actual operation is asynchronous in nature.

Its purpose is to allow a server to accept a request for some other process (perhaps a batch-oriented process that is only run once per day) without requiring that the user agent’s connection to the server persist until the process is completed.

The entity returned with this response SHOULD describe the request’s current status and point to (or embed) a status monitor that can provide the user with (or without) an estimate of when the request will be fulfilled.

HTTP STATUS 202 (Accepted)
 
{
    "task": {
        "href": "/api/company/job-management/jobs/2130040",
        "id": "2130040"
    }
}


Accessibility
WCAG (Web Content Accessibility Guidelines), WebAIM (Web Accessibility In Mind) checklist, WAI-ARIA (Web Accessibility Initiative's - Accessible Rich Internet Applications)

//data
li[data-type = 'veg'] {
    background: #8BC34A;
}
Tooltips
<span data-tooltip= "A simple explanation" > Word < /span>
span::before {
    content: attr(data - tooltip);
    // More Style Rules
}
span: hover::before {
    display: inline - block;
}

const itemx = document.querySelector('[data-id]="x"');

use backticks ``

* Security 
https://www.guru99.com/web-security-vulnerabilities.html
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security

- SQL Injection

White listing the input fields
Avoid displaying detailed error messages that are useful to an attacker.

- Cross Site Scripting XSS

White Listing input fields
Input Output encoding

- Broken Authentication and Session Management

All the authentication and session management requirements should be defined as per OWASP(Open Web Application Security Project) Application Security Verification Standard.
Never expose any credentials in URLs or Logs.
Strong efforts should be also made to avoid XSS flaws which can be used to steal session IDs.

- Insecure Direct Object References

Implement access control checks.
Avoid exposing object references in URLs.
Verify authorization to all reference objects like file/directory...

- Cross Site Request Forgery, CSRF

CSRF attack is an attack that occurs when a malicious website, email, or program causes a user's browser to perform an unwanted action on a trusted site for which the user is currently authenticated.

Mandate user's presence while performing sensitive actions.
Implement mechanisms like CAPTCHA, Re-Authentication, and Unique Request Tokens.

- Security Misconfiguration

A strong application architecture that provides good separation and security between the components.
Change default usernames and passwords.
Disable directory listings and implement access control checks.

- Insecure Cryptographic Storage, password etc

Ensure appropriate strong standard algorithms. Do not create own cryptographic algorithms. Use only approved public algorithms such as AES, RSA public key cryptography, and SHA-256, etc.
Ensure offsite backups are encrypted, but the keys are managed and backed up separately.

- Failure to restrict URL Access

access to the unauthorized URLs, without logging into the application
Implement strong access control checks.
Authentication and authorization policies should be role-based.
Restrict access to unwanted URLs.

- Insufficient Transport Layer Protection

By using weak algorithms or using expired or invalid certificates or not using SSL can allow the communication to be exposed to untrusted users, which may compromise a web application and or steal sensitive information.
Enable secure HTTP and enforce credential transfer over HTTPS only.
Ensure your certificate is valid and not expired.

- Unvalidated Redirects and Forwards

http://www.vulnerablesite.com/login.aspx?redirectURL=ownsite.com
Modified to
http://www.vulnerablesite.com/login.aspx?redirectURL=evilsite.com


* SEO techniques: https://www.greengeeks.com/blog/2019/01/03/html-tags-for-seo/

1. Optimize title for search engins <title>...</title>
2. Fine-Tune Meta Description Tags: 
<meta name="keywords" content="Keyword1,...Keyword N">
<meta name="description" content="Buy high-quality bicycle parts and save money while riding through Nevada.">
3. Header tags
<h1></h1> – usually reserved for webpage titles.
<h2></h2> – highlights the topic of the title.
<h3></h3> – reflects points in regards to the topic.
<h4></h4> – supports points from <h3>.
<h5></h5> – not often used, but great for supporting points of <h4>.
4. Create an Accessible Website
Write semantic HTML.
Make proper use of image alternative text. (alt='xxx')
Make sure your website works well on devices of all sizes.
5. Building Links
Linking out to something that isn’t relevant to your topic can result in search penalties.
<a href="http://somerandomwebsite.com/" rel="nofollow">your anchor text</a>
6. Add Open Graph Tags
<meta name="og:title" property="og:title" content="The Title of Your Article">
if this article is shared on something like Facebook, the social site will pull the title directly from this tag.
7. Twitter Card Tags
<meta name="twitter:card" content="summary">
the summary of the article is ported over to Twitter once the page is shared.
8. The Robots Tag
<meta name="robots" content="noindex, nofollow">
Google will not index the content nor follow any of the links.
9. Use Canonical Tags when Appropriate
<link rel="canonical" href="https://yourwebsite.com/">
Canonical tags are quite useful in terms of rankings. These essentially tell sites like Google what domains are the most important to you.
10. Responsive Site Meta Tags
To inform search engines you have a responsive design available, you can add the following:
<meta name="viewport" content="width=device-width, initial-scale=1">

//strict mode
Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
Prevents accidental globals. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
Eliminates this coercion. Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of null or undefined throws an error.
Disallows duplicate parameter values. Strict mode throws an error when it detects a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
Note: It used to be (in ECMAScript 5) that strict mode would disallow duplicate property names (e.g. var object = {foo: "bar", foo: "baz"};) but as of ECMAScript 2015 this is no longer the case.
Makes eval() safer. There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).
Throws error on invalid usage of delete. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.

*/

/*
A variable that has not been assigned a value is of type undefined

Q. What's the difference between host objects and native objects?
Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc.
Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.
*/

/*
Q. What's the difference between feature detection, feature inference, and using the UA string?

Feature Detection
Modernizr is a great library to handle feature detection.
Feature detection involves working out whether a browser supports a certain block of code, and running different code depending on whether it does (or doesn't), so that the browser can always provide a working experience rather crashing/erroring in some browsers. For example:
*/
if ('geolocation' in navigator) {
    // Can use navigator.geolocation
} else {
    // Handle lack of feature
}
/*
Feature Inference
This is not really recommended. Feature detection is more foolproof.
Feature inference checks for a feature just like feature detection, but uses another function because it assumes it will also exist, e.g.:
*/
if (document.getElementsByTagName) {
    element = document.getElementById(id);
}
/*
UA String
This is a browser-reported string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. It can be accessed via navigator.userAgent. However, the string is tricky to parse and can be spoofed. For example, Chrome reports both as Chrome and Safari. So to detect Safari you have to check for the Safari string and the absence of the Chrome string. Avoid this method.
*/

/*
Q. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
Q. Why is extending built-in JavaScript objects not a good idea?
the implementations will overwrite each other
May need for polyfill

Q. Explain the same-origin policy with regards to JavaScript. => URI scheme, hostname, and port number
The same-origin policy prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model.

Q. What is "use strict";? What are the advantages and disadvantages to using it?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
Eliminates some JavaScript silent errors by changing them to throw errors.
Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
Prohibits some syntax likely to be defined in future versions of ECMAScript.

Advantages:
Makes it impossible to accidentally create global variables.
Makes assignments which would otherwise silently fail to throw an exception.
Makes attempts to delete undeletable properties throw (where before the attempt would simply have no effect).
Requires that function parameter names be unique.
this is undefined in the global context.
It catches some common coding bloopers, throwing exceptions.
It disables features that are confusing or poorly thought out.
Disadvantages:
Many missing features that some developers might be used to.
No more access to function.caller and function.arguments.
Concatenation of scripts written in different strict modes might cause issues.

Q. What language constructions do you use for iterating over object properties and array items?
Object: for in, Object.keys(obj), Object.getOwnPropertyNames(obj)
for loops when we needed to prematurely terminate the loop using break
*/

/*
Q. How can you share code between files?
This depends on the JavaScript environment.

On the client (browser environment), as long as the variables/functions are declared in the global scope (window), all scripts can refer to them. Alternatively, adopt the Asynchronous Module Definition (AMD) via RequireJS for a more modular approach.

On the server (Node.js), the common way has been to use CommonJS. Each file is treated as a module and it can export variables and functions by attaching them to the module.exports object.

ES6 (= ES2015) defines a module syntax which aims to replace both AMD and CommonJS. This will eventually be supported in both browser and Node environments.

Q. Why you might want to create static class members?
Static class members (properties/methods) are not tied to a specific instance of a class and have the same value regardless of which instance is referring to it. Static properties are typically configuration variables and static methods are usually pure utility functions which do not depend on the state of the instance.

Q. What are the differences between Long-Polling, Websockets and Server-Sent Events?
https://codeburst.io/polling-vs-sse-vs-websocket-how-to-choose-the-right-one-1859e4e13bd9
Long-polling: ajax calls
Multiplexing (Polling responses can’t really be in sync)
Polling requiring 3 round-trips (TCP SIN, SSL, and Data)
Timeouts (Connection getting closed by the proxy server if it remains idle for too long)
*/
/* Client - subscribing to the github events */
function subscribe(callback) {
    const pollUserEvents = () => {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:8080/githubEvents',
            success: (data) => {
                callback(data) // process the data
            },
            complete: () => {
                pollUserEvents();
            },
            timeout: 30000
        })
    }
    pollUserEvents()
}
/*
Web Socket,
With WebSockets, we need to handle lots of problems that are taken care of in HTTP on their own.
WebSocket is a different protocol for delivering data, it’s not automatically multiplexed over HTTP/2 connections. Implementing custom multiplexing both on the server and the client is bit complicated.
WebSockets are frame-based and not stream-based. When we open the network tab. You can see the WebSocket messages are listed underframes.
---client---
*/
export class WebSocketUtil {

    private baseUrl = (location.protocol === 'https:' ? 'wss://' : 'ws://') + window.location.host;
    private openedWebSockets: any = {};

    get(url: string, messageToSend: any, fnMessageHandler: any, interval = -1) {
        const socketInfo = this.openedWebSockets[url];
        if (socketInfo) {
            return socketInfo;
        }
        const socket = new WebSocket(this.baseUrl + url);
        //console.log('websocket:', socket);
        const message = JSON.stringify(messageToSend);
        let intervalObj;
        socket.addEventListener('open', e => {
            if (interval > -1) {
                intervalObj = setInterval(_ => socket.send(message), interval);
            } else {
                socket.send(message);
            }
            console.log('open socket');
        });
        if (fnMessageHandler) {
            socket.addEventListener('message', fnMessageHandler);
        }
        socket.addEventListener('close', e => {
            console.log(`connection(${url}) is closed`, e);
        });
        this.openedWebSockets[url] = {
            socket: socket,
            intervalObj: intervalObj
        };
        return this.openedWebSockets[url];
    }

}

connectNotificationWebSocket(userID = '') {
    const socketUtil = this.util.getWebSocketUtil();
    const notificationData = this.notificationData;
    const notiEvent = this.updatenotification;
    const onMessage = e => {
        const data = JSON.parse(e.data);
        notificationData.items = data.data || [];
        this.util.log(['socket data:', notificationData.items]);
        notiEvent.emit({
            data: notificationData,
            count: notificationData.items.length
        });
    };
    if (userID) {
        socketUtil.get('/sync/', {
            user_id: userID,
            action: 'sync'
        }, onMessage, 5000);
    }
}

//---Web Socket Server---
const express = require('express');
const events = require('./events');
const path = require('path');

const app = express();

const port = process.env.PORT || 5001;

const expressWs = require('express-ws')(app);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.ws('/', function (ws, req) {
    const githubEvent = {}; // sample github Event from Github event API https://api.github.com/events
    ws.send('message', githubEvent);
});

app.listen(port, function () {
    console.log('Listening on', port);
});
/*
Server Side Event

Simpler implementation and Data efficiency
It is automatically multiplexed over HTTP/2 out of the box
Limits the number of connections for data on the client to one

---client---
*/
const evtSource = new EventSource('/events');

evtSource.addEventListener('event', function (evt) {
    const data = JSON.parse(evt.data);
    // Use data here
}, false);

//---server---
// events.js
const EventEmitter = require('eventemitter3');
const emitter = new EventEmitter();

function subscribe(req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive'
    });

    // Heartbeat
    const nln = function () {
        res.write('\n');
    };
    const hbt = setInterval(nln, 15000);

    const onEvent = function (data) {
        res.write('retry: 500\n');
        res.write(`event: event\n`);
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    emitter.on('event', onEvent);

    // Clear heartbeat and listener
    req.on('close', function () {
        clearInterval(hbt);
        emitter.removeListener('event', onEvent);
    });
}

function publish(eventData) {
    // Emit events here recieved from Github/Twitter APIs
    emitter.emit('event', eventData);
}

module.exports = {
    subscribe, // Sending event data to the clients 
    publish // Emiting events from streaming servers
};

// App.js
const express = require('express');
const events = require('./events');
const port = process.env.PORT || 5001;
const app = express();

app.get('/events', cors(), events.subscribe);

app.listen(port, function () {
    console.log('Listening on', port);
});
/*
A real-time chart of streaming stock prices
Real-time news coverage of an important event (posting links, tweets, and images)
A live Github / Twitter dashboard wall fed by Twitter’s streaming API
A monitor for server statistics like uptime, health, and running processes.

Consider a scenario like MMO (Massive Multiplayer Online) Games that need a huge amount of messages from both ends of the connection. In such a case, WebSockets dominates SSR.

Q. Explain the following request and response headers:
Diff. between Expires, Date, Age and If-Modified-… => cache, If-Modified-Since: modified after that, re-transmit data
Do Not Track: DNT:0 (allow), 1 (not allow) => user's tracking preference
Cache-Control: max-age=<seconds>/no-cache.... => Directives for caching mechanisms in both requests and responses.
Transfer-Encoding: chunked (..\r\n...\r\n), compress, deflate, gzip, identity
ETag: resource version, using if-match, if-none-match
X-Frame-Options: deny/sameorigin/allow-from https://xx.com/ => Indicates whether a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object>.

* Request Header Example
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,**;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a" //Etag if match 304.
Cache-Control: max-age=0

* Response Header Example
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997 //connection open
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

- Caching
Age
The time in seconds the object has been in a proxy cache.
Expires
The date/time after which the response is considered stale.
Cache-Control
Specifies directives for caching mechanisms in both requests and responses.
Cache request directives
Cache-Control: max-age=<seconds>
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-Control: no-cache 
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: only-if-cached

- Conditionals

If-Modified-Since
This is used to transmit data only when the cache is out of date.
If-Unmodified-Since
This is used to ensure the coherence of a new fragment of a specific range with previous ones, or to implement an optimistic concurrency control system when modifying existing documents.
ETag
It is a validator, a unique string identifying the version of the resource. Conditional requests using If-Match and If-None-Match use this value to change the behavior of the request.
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
--
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
If the hashes don't match, it means that the document has been edited in-between and a 412 Precondition Failed error is thrown.
The server compares the client's ETag (sent with If-None-Match) with the ETag for its current version of the resource and if both values match (that is, the resource has not changed), the server send back a 304 Not Modified status, without any body, which tells the client that the cached version of the response is still good to use (fresh).

- Do Not Track
The DNT (Do Not Track) request header indicates the user's tracking preference. It lets users indicate whether they would prefer privacy rather than personalized content.
DNT
Used for expressing the user's tracking preference.
Tk
Indicates the tracking status that applied to the corresponding request.

- Transfer coding
Transfer-Encoding
Specifies the form of encoding used to safely transfer the entity to the user.
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip
Transfer-Encoding: identity
// Several values can be listed, separated by a comma
Transfer-Encoding: gzip, chunked

- Security
X-Frame-Options
HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object> . Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.
X-Frame-Options: deny
X-Frame-Options: sameorigin
X-Frame-Options: allow-from https://example.com/

Q. What are HTTP methods? List all HTTP methods that you know, and explain them.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
GET
The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
HEAD
The HEAD method asks for a response identical to that of a GET request, but without the response body.
POST
The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
PUT
The PUT method replaces all current representations of the target resource with the request payload.

DELETE
The DELETE method deletes the specified resource.
CONNECT
The CONNECT method establishes a tunnel to the server identified by the target resource.

OPTIONS
The OPTIONS method is used to describe the communication options for the target resource.
TRACE
The TRACE method performs a message loop-back test along the path to the target resource.

PATCH
The PATCH method is used to apply partial modifications to a resource.

Q. What is domain pre-fetching and how does it help with performance?
https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
https://css-tricks.com/prefetching-preloading-prebrowsing/
Pre-fetching is a way of hinting to the browser about resources that are definitely going to or might be used in the future, some hints apply to the current page, others to possible future pages.
As developers, we know our applications better than the browser does. We can use this information to inform the browser about core resources.
resolve the DNS as quickly as possible
<link rel="dns-prefetch" href="//example.com">
Much like the DNS prefetch method, preconnect will resolve the DNS but it will also make the TCP handshake, and optional TLS negotiation
<link rel="preconnect" href="http://css-tricks.com">
If we're certain that a specific resource will be required in the future, then we can ask the browser to request that item and store it in the cache for reference later. For example an image or a script, or really anything that's cacheable by the browser
<link rel="prefetch" href="image.png">
 preemptively load all of the assets of a certain document
<link rel="prerender" href="http://css-tricks.com">

Q. What are some advantages/disadvantages to testing your code?

Prevent regression errors //Regression Testing is defined as a type of software testing to confirm that a recent program or code change has not adversely affected existing features.
Ensure there is no missing part to change when refactoring
Tests can be used as specs
Test process can be shared amongst team members

Q. What tools would you use to test your code's functionality?
JSUnit, Mocha, Jasmine, Jest test framework, Karma test runner, Protractor end-to-end testing framework(browser test) like Selenium.

Q. What is the difference between a unit test and a functional/integration test?
A unit test is on a small unit and checks if each unit works well.
A functional test is on a particular feature and check if it generates a proper output for a provided input.
An integration test checks if each part(or unit) of code works well together and results in combination functions correctly.

Q. What is the purpose of a code style linting tool?
It is to keep source codes in a repository consistent and easy to read. Linting also prevent possible mistakes developers can make. For example, some linter provides options to check which indentation should be used(it is not actually what a linter should do though). A linter can also check if there is any used variable which hasn't been declared, or if there is any unused variable. In short, linting is a kind of static analysis.
*/

```
//IE 9+ supports Event() and CustomEvent()
//IE and Firefox don't support Custom elements(Web Component)
//https://jsfiddle.net/neochae/40rh6Lfg/

/** HTML
<div class="neo-calendar clearfix">
</div>
<div class="result"></div>
 */
/** SCSS
html {
  box-sizing: border-box;
  body {
    width:100%;
    height:100%;
    padding:0;
    margin:0;
  }
}
*, *:before, *:after {
  box-sizing: inherit;
}
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.neo-calendar {
  float:left;
  .calendar__header {
    text-align:center;
    .year {
      display:inline-block;
    }
    .prev-month, .next-month {
      color:blue;
      text-decoration:none;
      cursor:pointer;
    }
  }
  .calendar__body {
    table {
      td {
        text-align:right;
        &.day:hover {
          background-color:yellow;
          cursor:pointer;
        }
        &.day-0 {
          color:red;
        }
        &.day-6 {
          color:blue;
        }
        &.prev-month-day, &.next-month-day {
          opacity:0.3;
        }
        &.today {
          background-color:silver;
        }
      }
    }
  }
}
 */
const Neo = {};

Neo.Calendar = class {
  constructor(config) {
    this.initConfig(config);
    this.initEvent();
    this.render();
  }

  initConfig(config = {}) {
    this.el = this.initContainerEl(config.el);
    this.date = config.date || new Date();
  }

  initContainerEl(el) {
    if (!el) {
      const div = document.createElement('div');
      document.body.appendChild(div);
      el = div;
    }
    el.classList.add('neo-calendar');
    return el;
  }

  initEvent() {
    this.el.addEventListener('click', this.onClick.bind(this));
  }

  render() {
    const html = [];
    html.push(this.renderHeader(date));
    html.push(this.renderBody(date));
    this.el.innerHTML = html.join('');
  }

  renderHeader(date) {
    return `
<div class="calendar__header">
  <a class="year">${date.getFullYear()}</a><br/>
  <a class="prev-month">&lt; prev</a>
  ${date.getMonth()+1}
  <a class="next-month">next &gt;</a>
</div>
`;
  }
  renderBody(date) {
    const today = date.getDate(),
      month = date.getMonth();
    date.setMonth(month, 0);
    let prevLastDay = date.getDate();
    date.setMonth(month + 1, 0);
    let lastDay = date.getDate();
    date.setMonth(month, 1);
    let weekday = date.getDay();
    prevLastDay = prevLastDay - weekday + 1;
    const html = [];
    let day = 1,
      cls = [],
      nextDay = 1,
      i = 0;
    while (day <= lastDay) {
      html.push('<tr>');
      i = 0;
      for (; i < 7; i++) {
        cls = [];
        if (weekday > 0) {
          cls.push('day-' + i);
          cls.push('prev-month-day');
          html.push(`<td class="${cls.join(' ')}">${prevLastDay}</td>`);
          prevLastDay++;
          weekday--;
        } else {
          if (day <= lastDay) {
            cls.push('day day-' + i);
            if (day === today) cls.push('today');
            html.push(`<td class="${cls.join(' ')}">${day}</td>`);
          } else {
            cls.push('day-' + i);
            cls.push('next-month-day');
            html.push(`<td class="${cls.join(' ')}">${nextDay}</td>`);
            nextDay++;
          }
          day++;
        }
      }
      html.push('</tr>');
    }
    return `<div class="calendar__body"><table>${html.join('')}</table></div>`;
  }

  onClick(e) {}
};

Neo.Calendar = class extends Neo.Base {
  constructor(config) {
    super(config);
    this.render(this.date);
  }
  initConfig(config) {
    super.initConfig(config);
    this.date = config.date || new Date();
  }
  onClick(e) {
    const el = e.target;
    if (el.classList.contains('day')) {
      this.updateDay(el);
    } else if (el.classList.contains('prev-month')) {
      this.updateMonth('prev');
    } else if (el.classList.contains('next-month')) {
      this.updateMonth('next');
    }
  }
  updateDay(el) {
    const day = parseInt(el.innerText);
    const date = this.date;
    if (day === date.getDate()) {
      return false;
    }
    const oldDate = new Date(date.valueOf());
    date.setDate(day);
    this.el.getElementsByClassName('today')[0].classList.remove('today');
    el.classList.add('today');
    this.fireEvent('change', {
      date: this.date,
      oldDate: oldDate
    });
    return {
      date: date,
      oldDate: oldDate
    };
  }
  updateMonth(dir) {
    const date = this.date;
    const oldDate = new Date(date.valueOf());
    const month = dir === 'prev' ? date.getMonth() - 1 : date.getMonth() + 1;
    date.setMonth(month);
    this.render(new Date(date.valueOf()));
  }
  render(date) {
    const html = [];
    html.push(this.renderHeader(date));
    html.push(this.renderBody(date));
    this.el.innerHTML = html.join('');
  }
  renderHeader(date) {
    return `
    <div class="calendar__header">
    	<a class="year">${date.getFullYear()}</a><br/>
    	<a class="prev-month">&lt; prev</a>
      ${date.getMonth()+1}
      <a class="next-month">next &gt;</a>
    </div>
    `;
  }
  renderBody(date) {
    const today = date.getDate(),
      month = date.getMonth();
    date.setMonth(month, 0);
    let prevLastDay = date.getDate();
    date.setMonth(month + 1, 0);
    let lastDay = date.getDate();
    date.setMonth(month, 1);
    let weekday = date.getDay();
    prevLastDay = prevLastDay - weekday + 1;
    const html = [];
    let day = 1,
      cls = [],
      nextDay = 1,
      i = 0;
    while (day <= lastDay) {
      html.push('<tr>');
      i = 0;
      for (; i < 7; i++) {
        cls = [];
        if (weekday > 0) {
          cls.push('day-' + i);
          cls.push('prev-month-day');
          html.push(`<td class="${cls.join(' ')}">${prevLastDay}</td>`);
          prevLastDay++;
          weekday--;
        } else {
          if (day <= lastDay) {
            cls.push('day day-' + i);
            if (day === today) cls.push('today');
            html.push(`<td class="${cls.join(' ')}">${day}</td>`);
          } else {
            cls.push('day-' + i);
            cls.push('next-month-day');
            html.push(`<td class="${cls.join(' ')}">${nextDay}</td>`);
            nextDay++;
          }
          day++;
        }
      }
      html.push('</tr>');
    }
    return `<div class="calendar__body"><table>${html.join('')}</table></div>`;
  }
};

const calendar = new Neo.Calendar({
  el: document.getElementsByClassName('neo-calendar')[0]
});
calendar.on('change', function (e) {
  document.getElementsByClassName('result')[0].innerHTML = `Date is changed: <br/>Old date: ${e.oldDate}<br/>New date: ${e.date}`;
});
```


```
class Poll {
    constructor(config = {}) {
        this.data = config.data;
        this.multipleSelection = config.multipleSelection;
        this.title = config.title || 'Poll';
        this.selectedItems = {}; // question index : {0: true, 1:false}
        let el = config.el;
        if (!el) {
            el = document.createElement('div');
            document.body.appendChild(el);
        }
        el.classList.add('nu-poll');
        this.el = el;
        this.renderBase(this.el, this.title);
        this.bodyEl = this.el.querySelector('.nu-poll__body');
        this.answerEl = this.el.querySelector('.nu-poll__footer__answer');
        this.render(this.data, this.bodyEl, this.multipleSelection);
        this.el.addEventListener('click', this.onClick.bind(this));
    }

    renderBase(el, title) {
        el.innerHTML = `
            <div class="nu-poll__header">${title}</div>
            <div class="nu-poll__body"></div>
            <div class="nu-poll__footer">
                <button data-action="submit-selection">Submit</button>
                <div class="nu-poll__footer__answer"></div>
            </div>
            `;
    }

    render(data, bodyEl, multipleSelection) {
        const html = ['<ol class="nu-poll__body__items">'];
        Object.keys(data).forEach((q, i) => {
            html.push(`
                <li class="nu-poll__body__items__item" data-action="select-item" data-id="${i}">
                    <div class="nu-poll__body__items__item__question">${q}</div>
                    <div class="nu-poll__body__items__item__question-items">${this.renderQuestion(i, data[q], multipleSelection)}</div>
                </li>`);
        });
        html.push('</ol>');
        bodyEl.innerHTML = html.join('');
    }

    renderQuestion(idx, items, multipleSelection) {
        const html = ['<ol class="nu-poll__body__items">'];
        const type = multipleSelection ? 'checkbox' : 'radio';
        items.forEach((d, i) => {
            html.push(`
                <li class="nu-poll__body__items__item" data-action="select-item" data-id="${i}">
                    <input name="${idx}-${i}" data-action="select-item" data-question_index="${idx}" data-item_index="${i}" type="${type}" />${d}
                </li>`);
        });
        html.push('</ol>');
        return html.join('');
    }

    renderAnswer(data, selectedItems, answerEl) {
        const html = ['<ol class="nu-poll__footer__answer__items">'];
        const questions = Object.keys(data);
        questions.forEach((q, i) => {
            const answerIndcies = selectedItems[i] || {};
            const answerHtml = [];
            Object.keys(answerIndcies).forEach(answerKey => {
                answerHtml.push(data[q][+answerKey]);
            });
            html.push(`
                <li class="nu-poll__footer__answer__items__item">
                    <div class="nu-poll__footer__answer__items__item__question">${q}</div>
                    <div class="nu-poll__footer__answer__items__item__answer">${answerHtml.join(', ')}</div>
                </li>`);
        });
        html.push('</ol>');
        answerEl.innerHTML = html.join('');
    }

    onClick(e) {
        const el = e.target;
        const dataset = el.dataset;
        switch (dataset.action) {
            case 'select-item':
                const questionIndex = dataset.question_index;
                const itemIndex = dataset.item_index;
                const answer = this.selectedItems[questionIndex] || {};
                if (el.checked) {
                    answer[itemIndex] = true;
                } else {
                    delete answer[itemIndex];
                }
                this.selectedItems[questionIndex] = answer;
                break;
            case 'submit-selection':
                this.renderAnswer(this.data, this.selectedItems, this.answerEl);
                break;
        }
    }

}

new Poll({
    data: {
        'Question 1': [
            'Radio',
            'Check',
            'Button'
        ],
        'Question 2': [
            'aaa',
            'bbb',
            'ccc'
        ]
    }
});
```

```
//Similar question:  Position Dropdown under a button, height Auto - Google
/** HTML
<br/><br/><br/><br/><br/>
asdfasdfsadadsfdafsafdsfaasdfdfasds<span class="nu-need-tooltip" data-tooltip="This is a tooltip">
This has a tooltip!
</span>asdfadsdfas
*/
/** CSS
.nu-need-tooltip {
        	cursor: pointer;
        }
        .nu-tooltip {
        	border: 1px solid gray;
          display: inline-block;
          position: absolute;
          background-color: #fff;
        }
        .nu-tooltip.hidden {
            display: none;
        }
 */
class Tooltip {
    constructor() {
        this.el = null;
        this.targetEl = null;
        this.timeout = null;
        this.bindEvent();
    }

    bindEvent() {
        document.body.addEventListener('mouseover', this.onMouseOver.bind(this));
    }

    show(e) {
        const targetEl = e.target;
        this.targetEl = targetEl;
        this.setMessage(targetEl.dataset.tooltip);
        const size = targetEl.getBoundingClientRect();
        this.el.style.left = `${e.clientX}px`;
        this.el.style.top = `${size.top + size.height}px`;
        this.el.classList.remove('hidden');
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.timeout = setTimeout(() => this.hide(), 3000);
    }

    setMessage(msg) {
        const el = this.getTooltipElement();
        el.innerHTML = msg;
    }

    getTooltipElement() {
        if (this.el) {
            return this.el;
        }
        const div = document.createElement('div');
        div.classList.add('nu-tooltip', 'hidden');
        document.body.appendChild(div);
        this.el = div;
        return this.el;
    }

    hide() {
        if (this.el) {
            this.el.classList.add('hidden');
            this.targetEl = null;
        }
    }

    onMouseOver(e) {
        if (e.target === this.el) return;
        if (e.target.classList && e.target.classList.contains('nu-need-tooltip') && this.targetEl !== e.target) {
            this.show(e);
        } else {
            this.hide();
        }
    }
}

const tooltip = new Tooltip();
```