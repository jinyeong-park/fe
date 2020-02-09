//Q. Object iteration
// forEach doesn't have the return value.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
//****** for...in
var obj = {
    a: 1,
    b: 2,
    c: 3
};

for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

var triangle = {
    a: 1,
    b: 2,
    c: 3
};

function ColoredTriangle() {
    this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log(`obj.${prop} = ${obj[prop]}`);
    }
}
//the inherited properties are not displayed.
// Output:
// "obj.color = red"

//****** for...of
let iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}
// 11
// 21
// 31

//You can use const instead of let too, if you don't reassign the variable inside the block.

for (const value of iterable) {
    console.log(value);
}
// 10
// 20
// 30

let iterableString = 'boo';

for (let value of iterableString) {
    console.log(value);
}
// "b"
// "o"
// "o"

let iterableTypedArray = new Uint8Array([0x00, 0xff]);

for (let value of iterableTypedArray) {
    console.log(value);
}
// 0
// 255

let iterableMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (let entry of iterableMap) {
    console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterableMap) {
    console.log(value);
}
// 1
// 2
// 3

let iterableSet = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterableSet) {
    console.log(value);
}
// 1
// 2
// 3

(function () {
    for (let argument of arguments) {
        console.log(argument);
    }
})(1, 2, 3);

// 1
// 2
// 3

// Note: This will only work in platforms that have
// implemented NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll('article > p');

for (let paragraph of articleParagraphs) {
    paragraph.classList.add('read');
}

/************* Array Iteration, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  */
//find, findIndex, includes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
//flat(depth), default 1
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]
var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
//reduce, reduceRight
[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
});
var initialValue = 0;
var sum = [{
    x: 1
}, {
    x: 2
}, {
    x: 3
}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x, initialValue
);

console.log(sum); // logs 6
var flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
);
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
//sort
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// ES6
//flatten([[1,[2,[[3]]]],4,[5,[[[6]]]]]); // => [1 2 3 4 5 6]
const flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

// [1, 2, 3, 4, 5]

var items = [{
        name: 'Edward',
        value: 21
    },
    {
        name: 'Sharpe',
        value: 37
    },
    {
        name: 'And',
        value: 45
    },
    {
        name: 'The',
        value: -12
    },
    {
        name: 'Magnetic',
        value: 13
    },
    {
        name: 'Zeros',
        value: 37
    }
];

// sort by value
items.sort(function (a, b) {
    return a.value - b.value;
});

// sort by name
items.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});
