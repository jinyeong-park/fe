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

