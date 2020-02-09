# Big O Concept
* Array, Stack, Queue, Hash Table, BST, BT are important. Understand Quicksort, Mergesort.
https://www.bigocheatsheet.com/

# Data structure and Algorithm and Design Questions
- Algorithm and Design: Number, String, Matrix, Design, Tree, Permutation, Backtracking are Basic. 
- Need to know the basic questions about Dynamic Programing. 
- Need to understand about Graph and Linked list

**You need to solve the questions in the <https://repl.it/languages/javascript> and need to submit them the <https://leetcode.com/problemset/algorithms/.>**
**You need to add the answer at the end of the questoin here**
**The answer should have the comments why you did like that**

**1. Two Sum**

Given an array of integers, 
return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Link: <https://leetcode.com/problems/two-sum/>
```
var twoSum = function(nums, target) {
    var number = [];
    for(var i = 0; i < nums.length; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                number.push(i);
                number.push(j);
                return number;
            }
        }
    }
   
};
```
**339. Nested List Weight Sum**

Given a nested list of integers, 
return the sum of all integers in the list weighted by their depth.

Each element is either an integer, or a list 
-- whose elements may also be integers or other lists.

Example 1:

Input: [[1,1],2,[1,1]]
Output: 10 
Explanation: Four 1's at depth 2, one 2 at depth 1.

Example 2:

Input: [1,[4,[6]]]
Output: 27 
Explanation: One 1 at depth 1, one 4 at depth 2, and one 6 at depth 3; 1 + 4*2 + 6*3 = 27.

Link: <https://leetcode.com/problems/nested-list-weight-sum/>

**341. Flatten Nested List Iterator**
Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list 
-- whose elements may also be integers or other lists.

Example 1:

Input: [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,1,2,1,1].
Example 2:

Input: [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,4,6].

Link: <https://leetcode.com/problems/flatten-nested-list-iterator/>

**155. Min Stack**
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
```
var MinStack = function() {
    this.array = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.array.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.array.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = Infinity;
    for(let n of this.array){
      min = Math.min(min, n);
    }
};
```
**706. Design HashMap**
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. 
If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, 
or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key 
if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found) 

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.

Don't use Map object.


```
var pivotIndex = function (nums){
  let sum = 0;
  let leftSum = 0;

  for (let n of nums){
    sum += n;
  }

  for (let i = 0; i < nums.length; i++){
    if (sum === 2 * leftSum + nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
}

var arr = [1, 9, 3, 6, 5, 6, 2];
var x = pivotIndex(arr);
console.log(x);

--------------------------------------------------------------------
var dominantIndex = function(nums){
  var max = -Infinity;
  var secondMax = -Infinity;
  var maxIndex  = 0;

  for (let i = 0; i < nums.length; i++){
    if (nums[i] > max){
      secondMax = max;
      max = nums[i];
      maxIndex = i;
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }

  return (max >= secondMax * 2) ? maxIndex : -1;
};

var a = [1,2,5,25,4,3];
dominantIndex(a);

------------------------------------------------------------------------------

var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--){
    digits[i] += 1;
    if (digits[i] !== 10) return digits;
    digits[i] = 0;
    console.log(digits);
  }
  digits.unshift(1);
  return digits;
};

var a = [9, 9, 9];
console.log(plusOne(a));

------------------------------------------------------------------------------
//Diagonal Traverse

var finddiagonalOrder = function(matrix) {
  let row = 0;
  let col = 0;
  let numberOfCell = matrix.length * matrix[0].length;
  const move = [-1, 1];
  const reverse = function() {
    move[0] *= -1;
    move[1] *= -1;
  }
  const output = [];

  while (numberOfCell--) {
      output.push(matrix[row][col]);
      row += move[0];
      col += move[1];

      if (row === matrix.length) {
        console.log(move);
        reverse();
        console.log(move);
        row -= 1;
        col += 2;
      } else if (col === matrix[0].length) {
        reverse();
        col -= 1;
        row += 2;
      } else if (row === -1) {
        reverse();
        row = 0;
      } else if (col === -1) {
        reverse();
        col = 0;
      }
  }

  return output;
}

var mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
finddiagonalOrder(mat);

------------------------------------------------------------------------------
//Spiral Matrix
var SpiralOrder = function(matrix){
    let row = 0;
    let col = -1;
    let direction = 0;
    const lengths = [matrix[0].length, matrix.length - 1];
    const move = [
          [0, 1],
          [1, 0],
          [0, -1],
          [-1, 0],
    ]
    const output = [];

    while(lengths[direction % 2]) {
      console.log(lengths);
      console.log(direction % 2);
      console.log(lengths[direction % 2]);
        for (let i = 0; i < lengths[direction % 2]; i++) {
          row += move[direction][0];
          col += move[direction][1];
          output.push(matrix[row][col]);
          console.log(row + ", "+ col);
        }
        lengths[direction % 2] -= 1;
        direction = (direction + 1) % 4;
    }
    return output;
}


var mat = [[1,   2,  3,  4], 
           [5,   6,  7,  8], 
           [9,  10, 11, 12],
           [13, 14, 15, 16]]
SpiralOrder(mat);


------------------------------------------------------------------------------

  
```
