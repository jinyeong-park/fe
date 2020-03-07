# Javascript Questions 

**FYI: ES6 <http://es6-features.org/>**
**FYI: <https://github.com/h5bp/Front-end-Developer-Interview-Questions>**
**FYI: Javascript Reference: https://developer.mozilla.org/en-US/**

**Optional: Complete Udemy "The Complete Javascript Course 2020" <https://www.udemy.com/course/the-complete-javascript-course/>**

## Q. Explain var vs let vs const
<https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e>

## Q. Can you give an example for destructuring an object or an array?
```js
// destructuring an object
const person = {
  firstName: "Nick",
  lastName: "Anderson",
  age: 35,
  sex: "M"
}

const { firstName: first, age, city = "Paris" } = person; 

// destructuring an object
const myArray = ["a", "b", "c"];

const [x, y] = myArray;

```
#### Q. ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?

### Q. What are the benefits of using spread syntax and how is it different from rest syntax?
```
deep copy
```
### Q. Explain how "this" works in JavaScript. Can you give an example of one of the ways that working with "this" has changed in ES6?
```
- this: the object that is executing the currecnt function

- For fns inside Objects: 'this' refers to the object calling the function.
- For fns not called by objects - Eg. call back functions - 'this' refers to the global object.
- For fns defined using arrow functions - 'this' simple refers to the object that is executing the arrow function - Irrespective of object's scope. 
- Meaning:  if the arrow function is called from a global scope? 'this' will refer to the global object. If the arrow function is called with in a function which belongs to an object?'this' will refer to the calling function's scope and in this case the object itself.
```

### Q. https://babeljs.io/ ?
```
Babel with React:

Before React code can run in the browser, it must be changed in certain ways. One necessary transformation is compiling JSX into vanilla JavaScript.

Transfile JSX into Vanilla JS

1. Parsing
2. Transforming
3. Printing

webpack: babel-loader
바벨은 일관적인 방식으로 코딩하면서, 다양한 브라우져에서 돌아가는 어플리케이션을 만들기 위한 도구다.

바벨의 코어는 파싱과 출력만 담당하고 변환 작업은 플러그인이 처리한다.

여러 개의 플러그인들을 모아놓은 세트를 프리셋이라고 하는데 ECMAScript+ 환경은 env 프리셋을 사용한다.

바벨이 변환하지 못하는 코드는 폴리필이라 부르는 코드조각을 불러와 결과물에 로딩해서 해결한다.

babel-loader로 웹팩과 함께 사용하면 훨씬 단순하고 자동화된 프론트엔드 개발환경을 갖출 수 있다.
```
### Q. Explain "Closure" with examples. What are the advantages of using ES6 maps over objects? What about using ES6 sets over arrays? 

### Q. Explain ES6 "Map" and "Set"
https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373
https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a

### Q. Difference between: function Person(){}, var person = Person(), and var person = new Person()?

### Q. Explain Function.prototype.bind, call, apply.

### Q. Explain "hoisting".

### Q. What is the difference between MyObject.foo and MyObject.prototype.foo?

### Q. Explain IIFE with Example.

### Q. Explain Event Loop

<https://youtu.be/cCOL7MC4Pl0>

### Q. Critical Rendering Path? <https://developers.google.com/web/fundamentals/performance/critical-rendering-path>

### Q. What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?

### Q. What is b?

```
(function () {
    var a = b = 5;
})();

console.log(b);
```

### Q. Implement Debounce

### Q. Implement Throttle

### Q. What is requestAnimationFrame?

### Q. stopPropagation ? preventDefault ?

### Q. Object Soft copy and deep copy? Object.assign?

### Q. Explain the difference between mutable and immutable objects

### Q. What is an example of an immutable object in JavaScript?

### Q. What are the pros and cons of immutability?

### Q. How can you achieve immutability in your own code?

### Q. What is the definition of a higher-order function?

### Q. Functional programming?

### Q. Pure function?

### Q. Can you give an example of a curry function and why this syntax offers an advantage?

### Q. Explain event delegation

### Q. How to optimize the loading performance?

### Q. Explain CORS

### Q. How to implement Multilingual Web Site?

### Q. Explain cookie, sessionStorage and localStorage

### Q. Explain HTTP response status codes

### Q. Explain HTTP response / request headers

### Q. Explain Web Accessibility

### Q. Explain Web Security like SQL Injection, XSS, CSRF

### Q. Explain SEO techniques

### Q. What's the difference between host objects and native objects?

### Q. What's the difference between feature detection, feature inference, and using the UA string?

### Q. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
```
ASK(?)
```

### Q. Why is extending built-in JavaScript objects not a good idea?
```
ASK(?)
```
### Q. Explain the same-origin policy with regards to JavaScript.
```
ASK(?)
what is the difference between this and CORS?
```
### Q. How can you share code between files?
```
ASK(?)
```
### Q. Why you might want to create static class members?

### Q. What are the differences between Long-Polling, Websockets and Server-Sent Events?

### Q. What are HTTP methods? List all HTTP methods that you know, and explain them.

### Q. What is domain pre-fetching and how does it help with performance?

### Q. What are some advantages/disadvantages to testing your code?

### Q. What tools would you use to test your code's functionality?

### Q. What is the difference between a unit test and a functional/integration test?

### Q. Cookes & Sessions. What is the difference, why use it, and how to use it
```
reason to use it: to store user login info. So user do not logged out even they visited another website.

ASK(?) 자동으로 생성되는건가?

참고: https://jeong-pro.tistory.com/80
```
### Q. ajax통신의 경우 외부에서 접근하여 데이터를 가로챌 수도 있다. 이부분에 대해 해결 방법은 무엇이 있을것같나?

## CSS Question

### Q. What is Specificity?

https://css-tricks.com/specifics-on-css-specificity/

### Q. Explaine centering techniques for inline and block elements.

### Q. Explain box-sizing?

### Q. Advantages of preprocessor? sass, stylus, less.

### Q. What is the purpose of a code style linting tool?

### Q. How to debug your code? How to use Chrome Development tools?

### Q. Frontend Architecture Design Check List?
https://github.com/thedaviddias/Front-End-Checklist

## Coding Excercise

### Decorate Student List

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

### Implement List by ES6 Class

#### Features

1. Filter: input keyword -> input Enter key or click Search button
2. Add a hovered item style
3. Check box: When clicking a text or a checkbox of an item, the checkbox should be toggled.
4. Check/uncheck all checkbox like Gmail
5. Optional features: Add / Delete / Update

```
class Contacts {}

const data = {
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

const containerEl = document.createElement('div');
document.body.appendChild(containerEl);

// render contact list into containerEl.
new Contacts({
  containerEl,
  data
});
```

### Q. Combine multiple fetcher with Promise

```
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
}

const combinedExRate = combineExRate([BTCtoCNY, USDtoJPY]);
combinedExRate('demo', data => console.log('Use Promise All:', data));
combinedExRate('demo', data => data).then(data => console.log('Use Promise All and then:', data));
```

### don't use promise all

```
const combineFetcher = (fetchers) => {
};
const combinedFetcher = combineFetcher([BTCtoCNY, USDtoJPY]);
combinedFetcher('demo', data => console.log('No Promise:', data));
```

### Q. Load a image file https://developer.mozilla.org/static/img/hero-dino.6c51deebd4af.png and display the time as milliseconds for loading the image file.

### Q. Implement Color viewer 
It has 5 buttons "add red", "add green", "add blue", and "add white" and "reset". Also, it has a box for displaying the result color.
When clicking a button, the color will be added 10% for example clicking "add red", then it will have 10% red color than before.
The default color is "white".

### Q. Implement Poll Widget like facebook

if multipe is true, it will have a check box.
it will have a submit button for displaying the result.


data
```
{
    data: {
        'Question 1': {
          multiple: true,
          items: [
            'Radio',
            'Check',
            'Button'
        ]},
        'Question 2': {
          items: [
            'aaa',
            'bbb',
            'ccc'
        ]}
    }
}
```

### Q. Write a scheduler in JavaScript that accepts max number of concurrent tasks as a parameter and schedules tasks (each task may take arbitrary time to complete).

```
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
```

### Q. Write an emitter class

emitter = new Emitter(); 
1. Support subscribing to events. 
sub = emitter.subscribe('event_name', callback); 
sub2 = emitter.subscribe('event_name', callback2); 
2. Support emitting events. 
This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters. 
emitter.emit('event_name', foo, bar); 
3. Support unsubscribing existing subscriptions by releasing them. sub.release(); 
`sub` is the reference returned by `subscribe` above

```
const emitter = new Emitter();

const sub = emitter.subscribe('move', (a, b, c) => {
    console.log(a, b, c);
});

emitter.emit('move', 'aa', 'bb', 'cc');
sub.release();
emitter.emit('move', 'dd', 'ee', 'ff');
```

### Q. Implement

Input
```
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
```


Output: console.log(getSkills(endorsements));
```
[ 
  { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 }, 
  { skill: 'css', user: ['Sue', 'Bill'], count: 2 }, 
  { skill: 'html', user: ['Sue'], count: 1 } 
]; 
```

### Q. Implement

Input
```
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
```

return the filtered items.

### Q. How would you implement a news-feed (which has only posts of text and pictures)?

### Q. How would you implement a photos album?

### Q. How would you facebook comments?

### Q. write a function that prints each letter of the string in different colors. ex. L is red, o is blue, r is green, e is yellow, m is red, after the space, it should be blue.

colors = ["red", "blue", "green", "yellow"]; and a string

str = "Lorem ipsum dolor sit amet";

colorPrinter('Lorem ipsum in the world', ['red', 'blue', 'green', 'yellow']);

### Q. Given 2 identical DOM trees (but not equal) and one element of the first DOM tree, 

how would you find this element in the second DOM tree?
Does it has a ID or class name or data-* attribute? then we can user querySelector. 
it has the same innerHTML?
assumption it has data-id="abc"

### Q. Implement getElementsByClassName('.selected')

### Q. Implement Calendar

### Q. Implement Tooltip

### Q. Design a feature like Amazon's recommendation system, except fill it with orders of a person's friends.

Now what if multiple people ordered the same thing, and we want to return the orders from most purchased to least purchased?
Now what if someone purchased multiple of the same item and we only want one copy of that counted?
Now what if we want to extend this to friends of friends?

Now I want to add a button within each cell to remove a label from the screen
Now I want to be able sort the labels, how would I do that? How is this effected by the removing of the labels?
You now notice that what is being returned from the AJAX call is not the same as before, what steps do you take to solve the problem?
