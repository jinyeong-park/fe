# Big O Concept

* Array, Stack, Queue, Hash Table, BST, BT are important. Understand Quicksort, Mergesort.
https://www.bigocheatsheet.com/

## Data structure and Algorithm and Design Questions

* Algorithm and Design: Number, String, Matrix, Design, Tree, Permutation, Backtracking are Basic. 
* Need to know the basic questions about Dynamic Programing. 
* Need to understand about Graph and Linked list

**You need to solve the questions in the <https://repl.it/languages/javascript> and need to submit them the <https://leetcode.com/problemset/algorithms/.>**
**You need to add the answer at the end of the questoin here**
**The answer should have the comments why you did like that**

### 1. Two Sum

Given an array of integers, 
return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Link: <https://leetcode.com/problems/two-sum/>

* Answer

```Javascript
#!Javascript
function twoSum(nums, target) {
    const map = {};
    // index
    map[target - nums[0]] = 0;
    for (let i = 1; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i])) {
            return [map[nums[i]], i];
        }
        map[target - nums[i]] = i;
    }
}
```

### 339. Nested List Weight Sum

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

### 341. Flatten Nested List Iterator
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

## 155. Min Stack
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

## 706. Design HashMap
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

### 796. Ratate String
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false

Note:

A and B will have length at most 100.

<https://leetcode.com/problems/rotate-string/>

### 704. Binary Search

Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 
Note:

You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].

<https://leetcode.com/problems/binary-search/>

### 700. Search in a Binary Search Tree

Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
You should return this subtree:

      2     
     / \   
    1   3
In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.

<https://leetcode.com/problems/search-in-a-binary-search-tree/>

### Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Your task is to write and test a function that determines whether a string is an isogram, following the format of the previous problems. It should return true if the input string is an isogram, and should return false otherwise.

While you should create your own test suite to get the most out of this exercise, there are automated tests provided as well.

Notes:

Assume your input is only letters.
Assume the empty string is an isogram.
Ignore case.
Follow the pseudocode exactly!

```
// FUNCTION DEFINITION(S)
function isIsogram(text) {
  const letters = new Set([...text.toLowerCase()]);
  return text.length === letters.size;
}
```

### find first word with most repeated chars

```
function findMaxRepeatCountInWord(word) {
  const countMap = [...word].reduce((map, c) => map.set(c, map.has(c) ? map.get(c) + 1 : 1), new Map());
  return Math.max(...countMap.values());
}

function findFirstWordWithMostRepeatedChars(text) {
  const result = text.split(' ').reduce((res, word) => {
    const count = findMaxRepeatCountInWord(word);
    if (res.count < count) {
      res.word = word;
      res.count = count;
    }
    return res;
  }, { word: '', count: -1 });
  return result.word;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, textName){
    if(actual === expected){
        console.log("passed");
    } else {
        console.log("FAILED");
    }
}
// TESTS CASES
var str = "Amerian banana yellow banana";
var actualWord = findFirstWordWithMostRepeatedChars(str);
var expectedWord = "banana";
console.log(actualWord, expectedWord, "display");
```


## Number Questions
### 1. Two Sum

Given an array of integers, 
return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

****
If you have a table that has all the previous values, you can check all the value.
O(n)/O(n)

map[target - n] = i

sorted? +- left/right

function twoSum(nums, target) {
    const map = new Map();
    // index
    map.set(target - nums[0], 0);
    for (let i = 1; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        }
        map.set(target - nums[i], i);
    }
}

### 339. Nested List Weight Sum

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
 
function depthSum(nestedList, depth = 1) {
    let sum = 0;
    nestedList.forEach(n => {
        if (n.isInteger()) {
            sum += depth * n.getInteger();
        } else {
            sum += depthSum(n.getList(), depth + 1);
        }
    });
    return sum;
}

function depthSum(nums, depth = 1) {
    return nums.reduce((sum, n) => sum + (Array.isArray(n) ? depthSum(n, depth + 1) : n * depth), 0);
}

console.log(depthSum([1, [4, [6]]]));
console.log(depthSum([
    [1, 1], 2, [1, 1]
]));

### 341. Flatten Nested List Iterator
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
 
//array
class NestedIterator {

    constructor(nestedList) {
        this.items = this.flatten(nestedList);
        this.currIndex = 0;
    }

    flatten(arr) {
        return arr.reduce((a, b) => a.concat(Array.isArray(b) ? this.flatten(b) : b), []);
    }

    hasNext() {
        return this.currIndex < this.items.length;
    }

    next() {
        return this.items[this.currIndex++];
    }
}

const sol = new NestedIterator([
    [1, 1], 2, [1, 1]
]);

while (sol.hasNext()) {
    console.log(sol.next());
}

### 15. 3Sum
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

---

sort,
-1 * nums[n] + (nums[start] + nums[end]) = target

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    const res = [];
    for (let i = 0; i < len; i++) {
        //i === i - 1 => it can be the same one
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let start = i + 1;
            let end = len;
            let n = -nums[i]; // = -1 * nums[i]
            while (start < end) {
                if (nums[start] + nums[end] === n) {
                    res.push([nums[i], nums[start], nums[end]]);
                    while (start < end && nums[start] === nums[start + 1]) start++;
                    while (start < end && nums[end] === nums[end - 1]) end--;
                    start++;
                    end--;
                } else if (nums[start] + nums[end] < n) {
                    start++;
                } else {
                    end--;
                }
            }
        }
    }
    return res;
}



### 08. String to Integer (atoi)

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary 
until the first non-whitespace character is found. 
Then, starting from this character, 
takes an optional initial plus or minus sign followed by as many numerical digits as possible, 
and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, 
which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, 
or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment 
which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
If the numerical value is out of the range of representable values, 
INT_MAX (231 − 1) or INT_MIN (−231) is returned.

Example 1:

Input: "42"
Output: 42
Example 2:

Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
Example 3:

Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
Example 4:

Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.
Example 5:

Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
 
function myAtoi(str) {
    if (!str) return 0;
    let num = 0;
    const max = Math.pow(2, 31) - 1;
    const min = -(max + 1);
    let isInNumber = false;
    let isValid = true;
    let isNegative = false;
    for (let i = 0; i < str.length; i++) {
        const s = str[i];
        //number
        if (s >= '0' && s <= '9') {
            isInNumber = true;
            num *= 10;
            num += +s;
            if (num > max) {
                break;
            }
        } else if (!isInNumber) {
            if (s === '-' || s === '+') {
                isNegative = s === '-';
                isInNumber = true;
            } else if (s !== ' ') {
                isValid = false;
                break;
            }
        } else {
            break;
        }
    }

    if (num && isValid) {
        if (isNegative) {
            num *= -1;
        }
        num = Math.min(num, max);
        num = Math.max(num, min);
    }
    return num;
}

function myAtoi(str) {
    let num = parseInt(str);
    num = isNaN(num) ? 0 : num;
    const max = Math.pow(2, 31) - 1;
    const min = -(max + 1);
    num = Math.min(num, max);
    num = Math.max(num, min);
    return num;
}

### 326. Power of Three
Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true

Example 2:

Input: 0
Output: false

Example 3:

Input: 9
Output: true

Example 4:

Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?
 
function isPowerOfThree(n) {
    // if (n <= 0) return false;
    // const max = Math.pow(3, 19);
    // return max % n === 0;

    if (n <= 0) {
        return false;
    }
    while (n % 3 === 0) {
        n = n / 3;
    }
    return n === 1;
}



### 07. Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment 
which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, 
assume that your function returns 0 when the reversed integer overflows.

function reverse(n) {
    let res = 0;
    const max = Math.pow(2, 31) - 1;
    const min = -(max + 1);
    while (n !== 0) {
        //get the first number, 123 % 10 = 3
        const rest = n % 10;
        res = rest + res * 10; //remainder
        if (res > max || res < min) return 0;
        n = (n - rest) / 10;
    }
    return res;
}


/** fb
13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. 
Twelve is written as, XII, which is simply X + II. 
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. 
Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. 
Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3

Example 2:

Input: "IV"
Output: 4

Example 3:

Input: "IX"
Output: 9

Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function romanToInt(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    const len = s.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        const first = map[s[i]];
        const second = map[s[i + 1]] || 0;
        if (first < second) {
            //IV, IX, XL, XC, CD, CM
            res += second - first;
            i++;
        } else {
            res += first;
        }
    }
    return res;
}

### 168. Excel Sheet Column Title

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"
 

function convertToTitle(n) {
    let res = '';
    let c;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //const startCode = 'A'.charCodeAt(0);
    while (n > 0) {
        c = n % 26 === 0 ? 26 : n % 26;
        res = alphabet[c - 1] + res; //String.fromCharCode(startCode - 1 + c) + res; // from a
        n = (n - c) / 26; //remove value
    }

    return res;
}

### 171. Excel Sheet Column Number

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1

Example 2:

Input: "AB"
Output: 28

Example 3:

Input: "ZY"
Output: 701
 

function titleToNumber(s) {
    let res = 0;
    const a = 'A'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        res = (s[i].charCodeAt(0) - a + 1) + res * 26; //add value
    }
    return res;
}

### 026. Remove Duplicates from Sorted Array

Given a sorted array nums, remove the duplicates in-place 
such that each element appear only once and return the new length.

Do not allocate extra space for another array, 
you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, 
with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, 
with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, 
which means modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 
function removeDuplicates(nums) {
    let idx = 0;
    for (let i = 1, len = num.length; i < len; i++) {
        if (nums[idx] !== nums[i]) {
            idx++;
            nums[idx] = nums[i];
        }
    }
    return idx + 1;
}

### 217. Contains Duplicate

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true

Example 2:

Input: [1,2,3,4]
Output: false

Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
 
//sorting is another solution. n === n + 1 ?
function containsDuplicate(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) return true;
        map[nums[i]] = true;
    }
    return false;
}

function containsDuplicate2(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false;
}

### 268. Missing Number
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. 
Could you implement it using only constant extra space complexity?


 
//Gauss' Formula, sorting, 
function missingNumber(nums) {
    const len = nums.length;
    const result = (len * (len + 1)) / 2;
    const sum = nums.reduce((agg, n) => agg += n, 0);
    return result - sum;
}

### missing
=4∧(0∧0)∧(1∧1)∧(2∧3)∧(3∧4)
=(4∧4)∧(0∧0)∧(1∧1)∧(3∧3)∧2
=0∧0∧0∧0∧2
=2

function missingNumber(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}

### Sorting

class Solution {
    public int missingNumber(int[] nums) {
        Arrays.sort(nums);

        // Ensure that n is at the last index
        if (nums[nums.length-1] != nums.length) {
            return nums.length;
        }
        // Ensure that 0 is at the first index
        else if (nums[0] != 0) {
            return 0;
        }

        // If we get here, then the missing number is on the range (0, n)
        for (int i = 1; i < nums.length; i++) {
            int expectedNum = nums[i-1] + 1;
            if (nums[i] != expectedNum) {
                return expectedNum;
            }
        }

        // Array was not missing any numbers
        return -1;
    }
}

Hashtable

class Solution {
    public int missingNumber(int[] nums) {
        Set<Integer> numSet = new HashSet<Integer>();
        for (int num : nums) numSet.add(num);

        int expectedNumCount = nums.length + 1;
        for (int number = 0; number < expectedNumCount; number++) {
            if (!numSet.contains(number)) {
                return number;
            }
        }
        return -1;
    }
}

Bit Manipulation

class Solution {
    public int missingNumber(int[] nums) {
        int missing = nums.length;
        for (int i = 0; i < nums.length; i++) {
            missing ^= i ^ nums[i];
        }
        return missing;
    }
}


### 033. Search in Rotated Sorted Array

Divde and Conquer
https://youtu.be/uufaK2uLnSI

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. 
If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
---
mid < end ?, target < mid ? end = mid - 1; 
mid > end ?, target < mid ? start = mid + 1;
 

function search(nums, target) {
    let start = 0;
    let mid;
    let end = nums.length - 1;
    while (start <= end) {
        mid = Math.floor((end + start) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        //right half is sorted
        if (nums[mid] <= nums[end]) {
            //binary search
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            //left half is sorted
            //binary search
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
}



### 088. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) 
to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
 

function mergeSortedArray(nums1, m, nums2, n) {
    let mEnd = m - 1;
    let nEnd = n - 1;
    let end = m + n - 1;
    while (mEnd >= 0 && nEnd >= 0) {
        if (nums1[mEnd] >= nums2[nEnd]) {
            nums1[end] = nums1[mEnd];
            mEnd--;
        } else {
            nums1[end] = nums2[nEnd];
            nEnd--;
        }
        end--;
    }
    //[0], [1] case, the last one can be existed
    while (nEnd >= 0) {
        nums1[end] = nums2[nEnd];
        end--;
        nEnd--;
    }
}


### 350. Intersection of Two Arrays II
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited 
such that you cannot load all elements into the memory at once?
 

function intersect(nums1, nums2) {
    const map = nums1.reduce((agg, n) => agg[n] = (agg[n] || 0) + 1, {});
    return nums2.filter(n => {
        if (map[n]) {
            map[n]--;
            return true;
        }
        return false;
    });
}

### 283. Move Zeroes
Given an array nums, write a function to move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 

const moveZeroes = nums => {
    if (nums.length) {
        for (let i = 0, j = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                j++;
            }
        }
    }
    return nums;
};

### 605. Can Place Flowers
Suppose you have a long flowerbed in which some of the plots are planted 
and some are not. However, flowers cannot be planted in adjacent plots 
- they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1, 
where 0 means empty and 1 means not empty), and a number n, 
return if n new flowers can be planted in it 
without violating the no-adjacent-flowers rule.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: True

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: False
Note:
The input array won't violate no-adjacent-flowers rule.
The input array size is in the range of [1, 20000].
n is a non-negative integer which won't exceed the input array size.
 

function canPlaceFlowers(flowerbed, n) {
    if (n === 0) return true;
    let max = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i] && !flowerbed[i + 1] && !flowerbed[i - 1]) {
            flowerbed[i] = 1;
            i++;
            max++;
            if (max >= n) {
                return true;
            }
        }
    }
    return false;
}

### 849. Maximize Distance to Closest Person

In a row of seats, 1 represents a person sitting in that seat, 
and 0 represents that the seat is empty. 

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat 
such that the distance between him and the closest person to him is maximized. 

Return that maximum distance to closest person.

Example 1:

Input: [1,0,0,0,1,0,1]
Output: 2
Explanation: 
If Alex sits in the second open seat (seats[2]), 
then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
Example 2:

Input: [1,0,0,0]
Output: 3
Explanation: 
If Alex sits in the last seat, the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.
Note:

1 <= seats.length <= 20000
seats contains only 0s or 1s, at least one 0, and at least one 1.
 
function maxDistToClosest(seats) {
    let prevZero = 0;
    let max = 0;
    const len = seats.length;
    for (let i = 0; i < len; i++) {
        if (seats[i] === 1) {
            if (prevZero === 0) {
                //000... and first 1, 
                max = i;
            } else {
                max = Math.max(max, Math.ceil((i - prevZero) / 2));
            }
            prevZero = i + 1;
        }
    }
    //the last doesn't have 1
    return Math.max(max, len - prevZero);
}



### 121. Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction 
(i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 

function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (minPrice < prices[i]) {
            maxProfit = Math.max(prices[i] - minPrice, maxProfit);
        } else {
            minPrice = prices[i];
        }
    }
    return maxProfit;
}

### 122. Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like 
(i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time 
(i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
 

function maxProfit(prices) {
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] < prices[i]) {
            max += prices[i] - prices[i - 1];
        }
    }
    return max;
}

### 136. Single Number

Given a non-empty array of integers, every element appears twice except for one. 
Find that single one.

Note:

Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4
 
function singleNumber(nums) {
    const map = {};
    nums.forEach(n => map[n] ? delete map[n] : map[n] = true);
    return Object.keys(map)[0];
}

//a^0=a a^a=0 a^b^a=(a^a)^b=0^b=b bitwise operator XOR
function singleNumber2(nums) {
    let n = 0;
    for (let i = 0; i < nums.length; i++) {
        n = n ^ nums[i];
    }
    return n;
}


### 189. Rotate Array
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 

function rotate(nums, k) {
    const len = nums.length;
    k = k % len;
    while (k < len) {
        nums.push(nums.shift());
        k++;
    }
}


function rotate(nums, k) {
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end],nums[start]];//bad performance
            // const temp = nums[start];
            // nums[start] = nums[end];
            // nums[end] = temp;
            start++;
            end--;
        }
    };
    const end = nums.length - 1;
    //for checking the number is not over the length
    k = k % (end + 1);
    reverse(0, end);
    reverse(0, k - 1);
    reverse(k, end);
}

### 344. Reverse String
Write a function that reverses a string. 
The input string is given as an array of characters char[].

Do not allocate extra space for another array, 
you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

function reverseString(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        const temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
}

### 042. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped. 
Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

 

function trap(h) {
    let res = 0;
    let max = 0;
    let sum = 0;
    let right = 0;
    let len = h.length;
    //calculate left side
    for (let i = 0; i < len; i++) {
        if (max <= h[i]) {
            max = h[i];
            res += sum;
            sum = 0;
            right = i;
        } else {
            sum += max - h[i];
        }
    }
    //calculate right side
    max = 0;
    sum = 0;
    for (let i = len - 1; i >= right; i--) {
        if (max <= h[i]) {
            max = h[i];
            res += sum;
            sum = 0;
        } else {
            sum += max - h[i];
        }
    }
    return res;
}

### 056. Merge Intervals

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

sort, end and next start is overlapped then combine.
 

function merge(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    const res = [];
    intervals.forEach(d => {
        if (res.length === 0) {
            res.push(d);
        } else {
            const last = res[res.length - 1];
            if (last[1] < d[0]) {
                res.push(d);
            } else {
                last[1] = Math.max(last[1], d[1]);
            }
        }
    });
    return res;
}


### 57. Insert Interval
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.


function insert(intervals, newInterval) {
    let len = intervals.length;
    let index = 0;
    let res = [];
    //add the end time is smaller than the new start time items.
    while (index < len && intervals[index][1] < newInterval[0]) {
        res.push(intervals[index]);
        index++;
    }
    //merge the start time is smaller than the new end time.
    while (index < len && newInterval[1] >= intervals[index][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }
    //push the new merged one
    res.push(newInterval);
    //add the bigger than new end time items
    while (index < len) {
        res.push(intervals[index]);
        index++;
    }
    return res;
}

### 252. Meeting Rooms

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

function canAttendMeetings(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) return false;
    }
    return true;
}
### 253. Meeting Rooms II

Given an array of meeting time intervals consisting of start and end times 
[[s1,e1],[s2,e2],...] (si < ei), 
find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
---
Heap, Greedy, Sort
1. The meeting times are overlapped, it needs a new meeting room. 
Find the maximun overlapped time lines.

fyi: https://youtu.be/GmpyAMpjpUY
 
Time O(nLogn), Space O(n)

Javascript(V8): 
short array = Insertion Sort (Time O(n^2), Space O(1)), 
long array = Quick Sort(Time O(nlogn), Space O(logn)) 
=> average = Time O(nlogn), Space O(logn).
https://blog.shovonhasan.com/time-space-complexity-of-array-sort-in-v8/
finding maximum count of overlap times
 

function minMeetingRooms(intervals) {
    const len = intervals.length;
    if (len < 2) return len;
    const rooms = [];
    //to connect prev meeting to the next nearest meeting.
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    rooms.push(intervals[0][1]);
    for (let i = 1; i < len; i++) {
        //check the next meeting is overlapped or not.
        for (let j = 0; j < rooms.length; j++) {
            //if there are not overlapped. end <= start
            if (rooms[j] <= intervals[i][0]) {
                //connect them, extend the end time. done.
                rooms[j] = intervals[i][1];
                //End the Loop
                j = rooms.length;
            } else if (rooms.length - 1 === j) {
                //overlapped, current is the last, then add room.
                rooms.push(intervals[i][1]);
                //End the loop
                j = rooms.length;
            }
        }
    }
    return rooms.length;
}

function minMeetingRooms(intervals) {
    const len = intervals.length;
    if (len < 2) return len;
    const starts = intervals.sort((a, b) => a[0] - b[0]).concat();
    const ends = intervals.sort((a, b) => a[1] - b[1]);
    let rooms = 0;
    let end = 0;
    for (let start = 0; start < len; start++) {
        if (starts[start][0] < ends[end][1]) rooms++;
        else end++;
    }
    return rooms;
}

function minMeetingRooms(intervals) {
    const length = intervals.length;
    if (length < 2) return length;
    const starts = intervals.sort((a, b) => a.start - b.start).concat();
    const ends = intervals.sort((a, b) => a.end - b.end);
    let rooms = 0;
    let j = 0;
    for (let i = 0; i < length; i++) {
        //this.print(`startIndex:${i}, endIndex:${j}, start:${starts[i].start} < end:${ends[j].end}, room: ${rooms}`);
        starts[i].start < ends[j].end ? rooms++ : j++;
    }
    return rooms;
}

minMeetingRoomsO([{
    start: 1,
    end: 6
}, {
    start: 2,
    end: 3
}, {
    start: 4,
    end: 5
}, {
    start: 7,
    end: 12
}, {
    start: 8,
    end: 10
}, {
    start: 9,
    end: 11
}]);

minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20]
]);

### 973. K Closest Points to Origin

We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

 

Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
 

Note:

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000

https://youtu.be/eaYX0Ee0Kcg
Pythagorean Theorem
x*x + y*y = c*c
Sort by Distance sqrt x * x + y * y
 

//sort
function kClosest(points, K) {
    points.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1]));
    return points.slice(0, K);
}

###  * solution2: quick select
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 
function kClosest(points, K) {
    function quickSelect(arr, l, r) {
        const pivot = arr[l];
        while (l < r) {
            while (l < r && compare(arr[r], pivot) >= 0) r--;
            arr[l] = arr[r];
            while (l < r && compare(arr[l], pivot) <= 0) l++;
            arr[r] = arr[l];
        }
        arr[l] = pivot;
        return l;
    }

    function compare(p1, p2) {
        return (p1[0] * p1[0] + p1[1] * p1[1]) - (p2[0] * p2[0] + p2[1] * p2[1]);
    }

    const len = points.length;
    let l = 0,
        r = len - 1;
    while (l < r) {
        const mid = quickSelect(points, l, r);
        if (mid === K) break;
        else if (mid < K) l = mid + 1;
        else r = mid - 1;
    }
    return points.slice(0, K);
}

//FYI Quick Sort
function quickSort(arr) {
    const partition = (left, right) => {
        let idx = left;
        const pivot = arr[right];
        for (let i = left; i < right; i++) {
            if (arr[i] < pivot) {
                [arr[i], arr[idx]] = [arr[idx], arr[i]];
                idx++;
            }
        }
        [arr[right], arr[idx]] = [arr[idx], arr[right]];
        return idx;
    };
    const traverse = (left, right) => {
        if (left >= right) return;
        const idx = partition(left, right);
        traverse(left, idx - 1);
        traverse(idx + 1, right);
    };
    traverse(0, arr.length - 1);
    return arr;
}

### 066. Plus One

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, 
and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
 

function plusOne(digits) {
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        const sum = digits[i] + 1;
        if (sum > 9) {
            digits[i] = 0;
            if (i === 0) {
                digits.unshift(1);
            }
        } else {
            digits[i] = sum;
            break;
        }
    }
    return digits;
}
plusOne([1, 2, 3]);

### 067. Add Binary

Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

//Math, String
function addBinary(a, b) {
    let aEnd = a.length - 1;
    let bEnd = b.length - 1;
    let res = '';
    let carry = 0;
    let sum;
    let valA;
    let valB;
    while (aEnd >= 0 || bEnd >= 0) {
        valA = aEnd >= 0 ? +a[aEnd] : 0;
        valB = bEnd >= 0 ? +b[bEnd] : 0;
        sum = valA + valB + carry;
        carry = sum > 1 ? 1 : 0;
        res = sum % 2 + res;
        aEnd--;
        bEnd--;
    }
    return carry ? 1 + res : res;
}

### 204. Count Primes
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

FYI, A prime number is a whole number greater than 1 whose only factors are 1 and itself. A factor is a whole numbers that can be divided evenly into another number. The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29. Numbers that have more than two factors are called composite numbers. The number 1 is neither prime nor composite. 
 
function countPrimes(n) {
    const notPrime = {};
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!notPrime[i]) {
            count++;
            for (let j = 2; i * j < n; j++) {
                notPrime[i * j] = true;
            }
        }
    }
    return count;
}

/* fb
We have an array of objects A and an array of indexes B. Reorder objects in array A with given indexes in array B. Do not change array A's length.

example:


var A = [C, D, E, F, G];
var B = [3, 0, 4, 1, 2];

sort(A, B);
// A is now [D, F, G, C, E];

O(n)


function reorder(A, B) {
    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    A.forEach((s, i) => {
        const idx = B[i];
        swap(A, idx, i);
        swap(B, idx, i);
    });
    return A;
}

console.log(reorder(['C', 'D', 'E', 'F', 'G'], [3, 0, 4, 1, 2]));

### 118. Pascal's Triangle

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 
function generate(numRows) {
    if (!numRows) return [];
    const res = [
        [1]
    ];
    let prevArr = res[0];
    for (let r = 1; r < numRows; r++) {
        const arr = [1];
        for (let c = 1; c <= r; c++) {
            arr[c] = (prevArr[c - 1] || 0) + (prevArr[c] || 0);
        }
        prevArr = arr;
        res.push(arr);
    }
    return res;
}

### 38. Count and Say
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211" 
---
count the same characters from the previous string
add count as a string
count again...

function countAndSay(n) {
    function traverse(prev) {
        const len = prev.length;
        let count = 1;
        let next = [];
        let i;
        for (i = 0; i < len; i++) {
            if (prev[i] === prev[i + 1]) {
                count++;
            } else {
                next.push(count);
                next.push(prev[i]);
                count = 1;
            }
        }
        return next;
    }

    let prev = [1];
    for (let i = 1; i < n; i++) {
        prev = traverse(prev);
    }
    return prev.join('');
}


### 4. Median of Two Sorted Arrays
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5


function findMedianSortedArrays(nums1, nums2) {
    const len = nums1.length + nums2.length;
    let i = 0;
    let j = 0;
    let curr = null;
    let prev = null;
    while (i + j <= len / 2) {
        if (curr !== null) prev = curr;
        const n1 = nums1[i];
        const n2 = nums2[j];
        if (n1 === undefined) {
            curr = n2;
            j++;
        } else if (n2 === undefined) {
            curr = n1;
            i++;
        } else if (n1 < n2) {
            curr = n1;
            i++;
        } else {
            curr = n2;
            j++;
        }
    }
    return len % 2 === 0 ? (prev + curr) / 2 : curr;
}

### 278. First Bad Version #TODO
You are a product manager and currently leading a team to develop a new product. 
Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version, 
all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] 
and you want to find out the first bad one, 
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) 
which will return whether version is bad. 
Implement a function to find the first bad version. 
You should minimize the number of calls to the API.

Example:

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. 
----
|     _________|

 
function firstBadVersion(isBadVersion) {
    return n => {
        let start = 1;
        let end = n;
        while (start < end) {
            const mid = Math.floor((start + end) / 2);
            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    };
}

### 3. Longest Substring Without Repeating Characters
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
---



//Sliding window
function lengthOfLongestSubstring(s) {
    const len = s.length;
    const map = {};
    let max = 0;
    let i = 0;
    let j = 0;
    while (i < len && j < len) {
        if (!map[s[j]]) {
            map[s[j]] = true;
            j++;
            max = Math.max(max, j - i);
        } else {
            //next
            delete map[s[i]];
            i++;
        }
    }
    return max;
}

### 5. Longest Palindromic Substring
Dynamic Programming, String

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 
function longestPalindrome(s) {
    const len = s.length;
    if (len < 2) return s;
    let i = 0;
    let j = 0;
    let maxLen = 1;
    let maxStr = s[0];
    while (i < len && j < len) {
        for (; j < len; j++) {
            let left = i;
            let right = j;
            //Palindrome
            let isPalindrome = true;
            while (left < right) {
                if (s[left] !== s[right]) {
                    isPalindrome = false;
                    break;
                }
                left++;
                right--;
            }
            if (isPalindrome) {
                maxStr = s.slice(i, j + 1);
                maxLen = j - i;
            }
        }
        //next should bigger than the maxLen
        i++;
        j = i + maxLen + 1;
    }
    return maxStr;
}

### 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
 
function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';
    let prefix = strs[0];
    let maxLen = prefix.length;
    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        if (s.length < maxLen) {
            maxLen = s.length;
        }
        for (let j = 0; j < maxLen; j++) {
            if (prefix[j] !== s[j]) {
                maxLen = j;
                break;
            }
        }
        if (maxLen === 0) return '';
    }
    return prefix.slice(0, maxLen);
}

### 243. Shortest Word Distance
Given a list of words and two words word1 and word2, 
return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3

Input: word1 = "makes", word2 = "coding"
Output: 1

Note:
You may assume that word1 does not equal to word2, 
and word1 and word2 are both in the list.
 
function shortestDistance(words, word1, word2) {
    let w1 = -1;
    let w2 = -1;
    let shortest = words.length;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            w1 = i;
        } else if (words[i] === word2) {
            w2 = i;
        }
        if (w1 > -1 && w2 > -1) {
            shortest = Math.min(shortest, Math.abs(w2 - w1));
        }
    }
    return shortest;
}

### 20. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
 
function isValid(s) {
    const len = s.length;
    if (len === 0) {
        return true;
    }
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [s[0]];
    for (let i = 1; i < len; i++) {
        //close then pop
        if (stack.length !== 0 && stack[stack.length - 1] === map[s[i]]) {
            stack.pop();
        } else {
            //open then add
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
}

### 028. Implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? 
This is a great question to ask during an interview.

For the purpose of this problem, 
we will return 0 when needle is an empty string. 
This is consistent to C's strstr() and Java's indexOf().
 
function strStr(haystack, needle) {
    if (!needle) return 0;
    const hlen = haystack.length;
    const nlen = needle.length;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0] && hlen - i >= nlen) {
            const s = haystack.slice(i, i + nlen);
            if (s === needle) {
                return i;
            }
        }
    }
    return -1;
}
console.log(strStr("mississippi", "issip"));

### 125. Valid Palindrome

Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false
 
function isPalindrome(s) {
    s = s.replace(/[^\w]/gi, '').toLowerCase();
    //s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let right = s.length - 1;
    let left = 0;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}


### 680. Valid Palindrome II
Given a non-empty string s, you may delete at most one character. 
Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. 
The maximum length of the string is 50000.
 

function validPalindrome(s, left = 0, right = s.length - 1, deleted = false) {
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            if (deleted) {
                return false;
            } else {
                return this.validPalindrome(s, left + 1, right, true) || this.validPalindrome(s, left, right - 1, true);
            }
        }
    }
    return true;
}


### 242. Valid Anagram
Given two strings s and t , 
write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? 
How would you adapt your solution to such case?
 
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map.hasOwnProperty(s[i]) ? 0 : map[s[i]] + 1;
        map[t[i]] = !map.hasOwnProperty(t[i]) ? 0 : map[t[i]] - 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== 0) return false;
    }
    return true;
}

const word1 = 'car';
const word2 = 'caryracxacr';

//
const countPermutations = (word1, word2) => {
    if (word1 === '' || word2 === '' || word1.length > word2.length) {
        return 0;
    }

    //build map
    const map = {};
    const word1Len = word1.length;
    for (let i = 0; i < word1Len; i++) {
        map[word1[i]] = (map[word1[i]] || 0) + 1;
    }

    const isPermutation = (map, word) => {
        for (let i = 0; i < word1Len; i++) {
            if (!map.hasOwnProperty(word[i])) {
                return false;
            } else {
                map[word[i]]--;
            }
        }
        const res = Object.keys(map).find(key => {
            return map[key] !== 0;
        });
        return res === undefined;
    };

    let count = 0;
    const mapForDup = {};
    for (let i = 0, len = word2.length; i < len; i++) {
        if (i + word1Len > len) {
            break;
        }
        const copyMap = Object.assign({}, map);
        let word = '';
        for (let j = i; j < i + word1Len; j++) {
            word += word2[j];
        }

        if (!mapForDup[word] && isPermutation(copyMap, word)) {
            mapForDup[word] = true;
            count++;
        }
    }

    return count;

}


console.log('countPermutations -> ', countPermutations(word1, word2));


### 205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:

Input: s = "foo", t = "bar"
Output: false

Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.
 
function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;
    const mapA = {};
    const mapB = {};
    for (let i = 0; i < s.length; i++) {
        //same char has the same index
        if (mapA[s[i]] !== mapB[t[i]]) return false;
        mapA[s[i]] = i;
        mapB[t[i]] = i;
    }
    return true;
}

### 387. First Unique Character in a String
Given a string, find the first non-repeating character in it 
and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
 
function firstUniqChar(s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i;
    }
    return -1;
}

### 151. Reverse Words in a String

Given an input string, reverse the string word by word.

Example 1:

Input: "the sky is blue"
Output: "blue is sky the"

eulb si yks eht => reverse all and reverse words

Example 2:

Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces 
between two words to a single space in the reversed string.
 

Note:

A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. 
However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Follow up:

For C programmers, try to solve it in-place in O(1) extra space.
 

function reverseWords(str) {
    return str.trim().split(/\s+/g).reverse().join(' ');
}

function reverseWords(str) {
    let res = '';
    let word = '';
    const len = str.length;
    for (let i = len - 1; i >= 0; i--) {
        if (str[i] !== ' ') {
            word = str[i] + word;
        } else if (word) {
            res = (res !== '' ? res + ' ' : '') + word;
            word = '';
        }
    }
    return word ? (res !== '' ? res + ' ' : '') + word : res;
}

### 412. Fizz Buzz
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number 
and for the multiples of five output “Buzz”. 
For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
 
function fizzBuzz(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        let s = '';
        if (i % 3 === 0) s += 'Fizz';
        if (i % 5 === 0) s += 'Buzz';
        arr.push(s || i + '');
    }
    return arr;
}

### 482. License Key Formatting
You are given a license key represented as a string S 
which consists only alphanumeric character and dashes. 
The string is separated into N+1 groups by N dashes.

Given a number K, we would want to reformat the strings 
such that each group contains exactly K characters, 
except for the first group which could be shorter than K, 
but still must contain at least one character. 
Furthermore, there must be a dash inserted between two groups 
and all lowercase letters should be converted to uppercase.

Given a non-empty string S and a number K, 
format the string according to the rules described above.

Example 1:
Input: S = "5F3Z-2e-9-w", K = 4

Output: "5F3Z-2E9W"

Explanation: The string S has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.

Example 2:
Input: S = "2-5g-3-J", K = 2

Output: "2-5G-3J"

Explanation: The string S has been split into three parts, 
each part has 2 characters except the first part 
as it could be shorter as mentioned above.
Note:
The length of string S will not exceed 12,000, and K is a positive integer.
String S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9) 
and dashes(-).
String S is non-empty.
 

function licenseKeyFormatting(S, K) {
    let res = '';
    let j = 1;
    let char = '';
    S = S.toUpperCase();
    for (let i = S.length - 1; i >= 0; i--) {
        char = S[i];
        if (char !== '-') {
            res = char + res;
            if (j === K) {
                res = '-' + res;
                j = 1;
            } else {
                j++;
            }
        }
    }
    return res[0] === '-' ? res.slice(1) : res;
}

### 844. Backspace String Compare
Given two strings S and T, 
return if they are equal when both are typed into empty text editors. 
# means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
 

/** Two pointers
   - from back to front
   - if count > 0 && != #, skip
   - if count == 0 && different, return false
   - if #, count++
   - if one ends, the other count == 0 && has any char return false
   - else return true
    

function backspaceCompare(S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    let skipS = 0;
    let skipT = 0;

    while (i >= 0 || j >= 0) {
        //move i when there is no more #
        while (i >= 0) {
            if (S[i] === '#') {
                skipS++;
                i--;
            } else if (skipS > 0) {
                skipS--;
                i--;
            } else {
                break;
            }
        }
        while (j >= 0) {
            if (T[j] === '#') {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            } else {
                break;
            }
        }
        const left = i < 0 ? '-' : S[i];
        const right = j < 0 ? '-' : T[j];
        if (left !== right) return false;
        i--;
        j--;
    }
    return true;
}

console.log(backspaceCompare('ab#c', 'ad#c'));

### 929. Unique Email Addresses
Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, 
and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') 
between some characters in the local name part of an email address, 
mail sent there will be forwarded to the same address without dots in the local name.  
For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, 
everything after the first plus sign will be ignored. 
This allows certain emails to be filtered, 
for example m.y+name@email.com will be forwarded to my@email.com.  
(Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  
How many different addresses actually receive mails? 

Example 1:

Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
 

Note:

1 <= emails[i].length <= 100
1 <= emails.length <= 100
Each emails[i] contains exactly one '@' character.
All local and domain names are non-empty.
Local names do not start with a '+' character.

Map is faster than {}
 
function numUniqueEmails(emails) {
    const unique = new Map();
    for (let i = 0; i < emails.length; i++) {
        const nd = emails[i].split('@');
        nd[0] = nd[0].replace(/\.|\+.g, ''); //\+.* + any charactor~
        unique.set(nd.join('@'), true);
    }
    return unique.size;
}

### 394. Decode String
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

function decodeString(s) {
    let stack = [];
    let i = 0;
    while (i < s.length) {
        if (s[i].match(/\d/)) {
            let c = '';
            while (s[i].match(/\d/)) {
                c += s[i];
                i++;
            }
            c = parseInt(c);
            stack.push(c);
        } else if (s[i] === '[') {
            stack.push(s[i]);
            i++;
        } else if (s[i].match(/\w/)) {
            stack.push(s[i]);
            i++;
        } else if (s[i] === ']') {
            let c = '';
            while (stack[stack.length - 1] !== '[') {
                c = stack.pop() + c;
            }
            stack.pop(); // remove [
            let n = stack.pop(); // get number
            let r = '';
            for (let i = 0; i < n; i++) {
                r += c;
            }
            stack.push(r);
            i++;
        }
    }
    return stack.join('');
}

### 771. Jewels and Stones
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.

---
build hashtable from J
count it


function numJewelsInStones(J, S) {
    const map = {};
    let count = 0;
    for (let i = 0; i < J.length; i++) {
        map[J[i]] = true;
    }
    for (let i = 0; i < S.length; i++) {
        if (map[S[i]]) count++;
    }
    return count;
}

### 036. Valid Sudoku-basic

Determine if a 9x9 Sudoku board is valid. 
Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
 
function isValidSudoku(board) {
  const colMaps = [];
  const boxMaps = [];
  const rowLen = board.length;
  const colLen = board[0].length;
  for (let row = 0; row < rowLen; row++) {
    const rowMap = {};
    for (let col = 0; col < colLen; col++) {
      const char = board[row][col];
      if (char !== '.') {
        //row check
        if (rowMap[char]) return false;
        rowMap[char] = true;
        //col check
        colMaps[col] = colMaps[col] || {};
        if (colMaps[col][char]) return false;
        colMaps[col][char] = true;
        //zone 3(3*3) * 3(3*3)
        const boxRow = Math.ceil((row + 1) / 3);
        const boxCol = Math.ceil((col + 1) / 3);
        boxMaps[boxRow] = boxMaps[boxRow] || {};
        boxMaps[boxRow][boxCol] = boxMaps[boxRow][boxCol] || {};
        if (boxMaps[boxRow][boxCol][char]) return false;
        boxMaps[boxRow][boxCol][char] = true;
      }
    }
  }
  return true;
}

console.log(isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));

### 048. Rotate Image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 

function rotate(matrix) {
  const len = matrix.length;
  const maxDepth = Math.floor(len / 2);
  let depth = 0;
  while (depth < maxDepth) {
    const start = depth;
    const end = len - 1 - depth;
    const newLen = end - start;
    let i = 0;
    while (i < newLen) {
      const temp = matrix[start][start + i];
      matrix[start][start + i] = matrix[end - i][start];
      matrix[end - i][start] = matrix[end][end - i];
      matrix[end][end - i] = matrix[start + i][end];
      matrix[start + i][end] = temp;
      i++;
    }
    depth++;
  }
  return matrix;
}

console.log(rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]));

### 054. Spiral Matrix

Given a matrix of m x n elements (m rows, n columns), 
return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]


function spiralOrder(matrix) {
  if (matrix.length === 0) return matrix;
  const res = [];
  let rStart = 0;
  let cStart = 0;
  let rEnd = matrix.length - 1;
  let cEnd = matrix[0].length - 1;
  while (rStart <= rEnd && cStart <= cEnd) {
    //top
    for (let c = cStart; c <= cEnd; c++) {
      res.push(matrix[rStart][c]);
    }
    //right
    for (let r = rStart + 1; r <= rEnd; r++) {
      res.push(matrix[r][cEnd]);
    }
    //skip the same one
    if (rStart < rEnd && cStart < cEnd) {
      //bottom
      for (let c = cEnd - 1; c > cStart; c--) {
        res.push(matrix[rEnd][c]);
      }
      //right
      for (let r = rEnd; r > rStart; r--) {
        res.push(matrix[r][cStart]);
      }
    }
    rStart++;
    rEnd--;
    cStart++;
    cEnd--;
  }
  return res;
}

### 59. Spiral Matrix II
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]


function generateMatrix(n) {
  let count = 1;
  // if n * m needs rowStart/rowEnd, cellStart/cellEnd
  let start = 0;
  let end = n - 1;
  const rows = [];
  while (start <= end) {
    //top cells
    for (let cell = start; cell <= end; cell++) {
      rows[start] = rows[start] || [];
      rows[start][cell] = count++;
    }
    //right cells
    for (let row = start + 1; row <= end; row++) {
      rows[row] = rows[row] || [];
      rows[row][end] = count++;
    }
    //bottom cells
    for (let cell = end - 1; cell >= start; cell--) {
      rows[end] = rows[end] || [];
      rows[end][cell] = count++;
    }
    //left cells
    for (let row = end - 1; row > start; row--) {
      rows[row] = rows[row] || [];
      rows[row][start] = count++;
    }
    start++;
    end--;
  }
  return rows;
}

/* zigZag => move(1), -move(-1);
59-1. down & up

colCount = 3
rowCount = 5

[
    [1, 10, 11],
    [2,  9, 12],
    [3,  8, 13],
    [4,  7, 14],
    [5,  6, 15]
]


function generateMatrix(rowLen, colLen) {
  let count = 1;
  let col = 0;
  let row = 0;
  let move = 1;
  const rows = [];
  while (col < colLen) {
    rows[row] = rows[row] || [];
    rows[row][col] = count++;
    row += move;
    if (row === rowLen || row < 0) {
      row = row === rowLen ? rowLen - 1 : 0;
      move = -move;
      col++;
    }
  }
  return rows;
}

console.log(generateMatrix(7, 5));

/* fb
Given a grid of characters output a decoded message. The message for the following would be IROCKED. (diagonally down right and diagonally up right if you can't go further .. you continue doing this)

function zigZag(matrix) {
  let rowMove = 1;
  let row = 0;
  let col = 0;
  let res = '';
  const colEnd = matrix[0].length - 1;
  const rowEnd = matrix.length - 1;
  while (col <= colEnd) {
    res += matrix[row][col];
    row += rowMove;
    col++;
    if (row > rowEnd) {
      rowMove = -rowMove;
      row -= 2;
    }
    if (row < 0) {
      rowMove = -rowMove;
      row += 2;
    }
  }
  return res;
}

console.log(zigZag([
  ['I', 'B', 'C', 'A', 'K', 'E', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D']
])); // IROCKED

### 498. Diagonal Traverse

Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Example:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]

Explanation:

 

Note:

The total number of elements of the given matrix will not exceed 10,000.


function findDiagonalOrder(matrix) {

  if (matrix.length === 0) {
    return [];
  }

  let res = [];
  let row = 0;
  let col = 0;
  let rowMove = -1;
  let colMove = 1;
  let rowEnd = matrix.length - 1;
  let colEnd = matrix[0].length - 1;
  let maxLen = matrix.length * matrix[0].length;
  let reversed = false;

  while (res.length < maxLen) {
    res.push(matrix[row][col]);
    row += rowMove;
    col += colMove;

    if (row > rowEnd) {
      reversed = true;
      col += 2; //col = -1, go to the next cell + 2
      row -= 1;
    } else if (col > colEnd) {
      reversed = true;
      row += 2; //row = - 1; go to the next row + 2
      col -= 1;
    } else if (col < 0) {
      //end of going down
      reversed = true;
      col = 0;
    } else if (row < 0) {
      //end of going up
      reversed = true;
      row = 0;
    }
    if (reversed) {
      rowMove = -rowMove;
      colMove = -colMove;
      reversed = false;
    }
  }

  return res;
}

console.log(findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));


### 200. Number of Islands

https://www.geeksforgeeks.org/find-number-of-islands/
//https://youtu.be/CLvNe-8-6s8

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3
 
//TIP: remove the connected 1
//DFS
function numIslands(grid) {
  if (grid.length === 0) return 0;
  const rowLen = grid.length;
  const colLen = grid[0].length;
  //1 to 0
  const traverse = (row, col) => {
    if (row < 0 || col < 0 || row === rowLen || col === colLen || grid[row][col] === '0') return;
    grid[row][col] = '0';
    traverse(row - 1, col);
    traverse(row + 1, col);
    traverse(row, col - 1);
    traverse(row, col + 1);
  };

  let count = 0;
  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (grid[r][c] === '1') {
        count++;
        traverse(r, c);
      }
    }
  }
  return count;
}
//BFS
function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  let rowLen = grid.length;
  let colLen = grid[0].length;
  let count = 0;
  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (grid[r][c] === '1') {
        count++;
        grid[r][c] = '0';
        const queue = [];
        queue.push([r, c]);
        //1 to 0
        while (queue.length) {
          let coord = queue.shift();
          let row = coord[0];
          let col = coord[1];
          if (row - 1 >= 0 && grid[row - 1][col] === '1') {
            queue.push([row - 1, col]);
            grid[row - 1][col] = '0';
          }
          if (row + 1 < rowLen && grid[row + 1][col] === '1') {
            queue.push([row + 1, col]);
            grid[row + 1][col] = '0';
          }
          if (col - 1 >= 0 && grid[row][col - 1] === '1') {
            queue.push([row, col - 1]);
            grid[row][col - 1] = '0';
          }
          if (col + 1 < colLen && grid[row][col + 1] === '1') {
            queue.push([row, col + 1]);
            grid[row][col + 1] = '0';
          }
        }
      }
    }
  }
  return count;
}
### 79. Word Search

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.


function exist(board, word) {
  const wordLen = word.length;
  const rowLen = board.length;
  const colLen = board[0].length;
  word = word.split(''); //for performance

  function traverse(row, col, index) {
    if (row < 0 || row === rowLen || col < 0 || col === colLen || board[row][col] != word[index] || index === wordLen) return false;
    index++;
    //flag for preventing re-visit
    board[row][col] = '#';
    if (index === wordLen) return true;
    if (traverse(row + 1, col, index)) return true;
    if (traverse(row - 1, col, index)) return true;
    if (traverse(row, col + 1, index)) return true;
    if (traverse(row, col - 1, index)) return true;
    //restore
    board[row][col] = word[--index];
    return false;
  }

  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (traverse(r, c, 0)) {
        return true;
      }
    }
  }
  return false;
}

### 74. Search a 2D Matrix
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false

---
find row target < last col, row
binary search


function searchMatrix(matrix, target) {
  if (!matrix.length) return false;

  let start = 0;
  let end = matrix.length - 1;
  let mid;
  let cells;
  const colEnd = matrix[0].length - 1;

  //find row
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    cells = matrix[mid];
    if (target >= cells[0] && target <= cells[colEnd]) break;
    if (target < cells[0]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  start = 0;
  end = colEnd;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target === cells[mid]) return true;
    if (target > cells[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}

function searchMatrix(matrix, target) {
  const rowLen = matrix.length;
  if (rowLen === 0) return false;
  const colLen = matrix[0].length;
  let start = 0;
  let end = rowLen * colLen - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    //assumption there is no row.
    const val = matrix[Math.floor(mid / colLen)][mid % colLen];
    if (target === val) {
      return true;
    } else {
      if (target < val) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return false;
}


### 240. Search a 2D Matrix II

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.

O(m + n)


function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let row = 0;
  let col = matrix[0].length - 1;
  const rowLen = matrix.length;
  //1. left smaller than right, 2. top smaller than bottom.
  while (col >= 0 && row < rowLen) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
  }

  return false;
}


### 146. LRU Cache

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 ); // capacity 

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

Design, Hash Table, Linked List
 
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        //it is cache, the last used item should be at the first.
        if (this.map.has(key)) {
            const val = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, val);
            return val;
        }
        return -1;
    }
    put(key, value) {
        //it needs to be deleted, since remove the over capacity items. The order should be changed.
        if (this.map.has(key)) {
            this.map.delete(key);
        }
        this.map.set(key, value);
        const keys = this.map.keys();
        //the first one is the old one.
        while (this.map.size > this.capacity) {
            this.map.delete(keys.next().value);
        }
    }
}

//155. Min Stack
### Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

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
 
//Stack, Design
//Faster
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(n) {
        this.stack.push(n);
        const len = this.minStack.length;
        if (len === 0 || this.minStack[len - 1] >= n) {
            this.minStack.push(n);
        }
    }
    pop() {
        const pop = this.stack.pop();
        if (this.getMin() === pop) {
            this.minStack.pop();
        }
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

### 716. Max Stack
Design a max stack that supports push, pop, top, peekMax and popMax.

push(x) -- Push element x onto stack.
pop() -- Remove the element on top of the stack and return it.
top() -- Get the element on the top.
peekMax() -- Retrieve the maximum element in the stack.
popMax() -- Retrieve the maximum element in the stack, and remove it. 
If you find more than one maximum elements, only remove the top-most one.
Example 1:
MaxStack stack = new MaxStack();
stack.push(5); 
stack.push(1);
stack.push(5);
stack.top(); -> 5
stack.popMax(); -> 5
stack.top(); -> 1
stack.peekMax(); -> 5
stack.pop(); -> 1
stack.top(); -> 5
Note:
-1e7 <= x <= 1e7
Number of operations won't exceed 10000.
The last four operations won't be called when stack is empty.
 
class MaxStack {
    constructor() {
        this.stack = [];
        this.maxStack = [];
    }

    push(n) {
        this.stack.push(n);
        const len = this.maxStack.length;
        if (len === 0 || this.maxStack[len - 1] <= n) {
            this.maxStack.push(n);
        }
    }

    pop() {
        const pop = this.stack.pop();
        if (this.peekMax() === pop) {
            this.maxStack.pop();
        }
        return pop;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    peekMax() {
        return this.maxStack[this.maxStack.length - 1];
    }

    popMax() {
        //We don't use splice since we need to manage the maxStack also.
        const max = this.peekMax();
        const temp = [];
        while (this.top() !== max) {
            temp.push(this.pop());
        }
        //max
        this.pop();
        while (temp.length > 0) {
            this.push(temp.pop());
        }
        return max;
    }
}


### 706. Design HashMap
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
 
class MyHashMap {
    constructor() {
        this.map = {};
        //this.map = new Map();
    }
    put(key, value) {
        this.map[key] = value;
        //this.map.set(key, value);
    }
    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : -1;
        //return this.map.has(key) ? this.map.get(key) : -1;
    }
    remove(key) {
        delete this.map[key];
        //this.map.delete(key);
    }
}

### 981. Time Based Key-Value Store
Create a timebased key-value store class TimeMap, that supports two operations.

1. set(string key, string value, int timestamp)

Stores the key and value, along with the given timestamp.
2. get(string key, int timestamp)

Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
If there are multiple such values, it returns the one with the largest timestamp_prev.
If there are no values, it returns the empty string ("").
 

Example 1:

Input: inputs = ["TimeMap","set","get","get","set","get","get"], inputs = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
Output: [null,null,"bar","bar",null,"bar2","bar2"]
Explanation:   
TimeMap kv;   
kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1   
kv.get("foo", 1);  // output "bar"   
kv.get("foo", 3); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"   
kv.set("foo", "bar2", 4);   
kv.get("foo", 4); // output "bar2"   
kv.get("foo", 5); //output "bar2"   

Example 2:

Input: inputs = ["TimeMap","set","set","get","get","get","get","get"], inputs = [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
Output: [null,null,null,"","high","high","low","low"]
 

Note:

All key/value strings are lowercase.
All key/value strings have length in the range [1, 100]
The timestamps for all TimeMap.set operations are strictly increasing.
1 <= timestamp <= 10^7
TimeMap.set and TimeMap.get functions will be called a total of 120000 times (combined) per test case.
 

class TimeMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value, timestamp) {
        const data = this.map.get(key) || [];
        data[timestamp] = value;
        this.map.set(key, data);
    }

    get(key, timestamp) {
        if (!this.map.has(key)) return '';
        const data = this.map.get(key);
        for (let i = timestamp; i >= 0; i--) {
            if (data[i] !== undefined) return data[i];
        }
        return '';
    }
}

/* fb, node as a key, array as a value
Implement a simple store class with set(Node, value), get(Node) and has(Node) methods, which store a given Nodes with corresponding values.  

Are you able to elaborate on this question? Can each node have multiple values or just 1?

The way I interpret what you have written, it just sounds like they are asking for an ES6 Map? ES6 Maps can have objects as keys, so you can use the Node as the key.

If you had to code it from scratch without the use of an ES6 Map, something like:

class CachedNode {
    constructor(node, value) {
        this._node = node;
        this._value = value;
    }

    getNode() {
        return this._node;
    }

    getValue() {
        return this._value;
    }

    setValue(value) {
        this._value = value;
        return this;
    }
}

class SimpleStore {
    constructor() {
        this._container = [];
    }

    set(node, value) {
        let cachedNode;
        if (this.has(node)) {
            cachedNode = this.get(node);
            cachedNode.setValue(value);
        } else {
            cachedNode = new CachedNode(node, value);
            this._container.push(cachedNode);
        }

        return this;
    }

    // you might want to change this method so it returns the Node's value not the CachedNode.
    // If you did, that would mean adding another method to get the CachedNode. Easy enough.
    get(node) {
        return this._container.find((cachedNode) => {
            return cachedNode.getNode() === node;
        });
    }

    has(node) {
        return !!this.get(node);
    }
}

If it needed to store multiple values against a node, then just change the single value for a Set or Array.

The tricky part of the question was on how to store a DOM Node which is an object as an old javascript object key. I can't recall was it about 1 to 1 relationship or 1 to many, but it is really doesn't matter because the later gives just a small overhead. I suppose your solution is pretty what they were expected from the task, starting from explaining ES6 Map and ending up with an old javascript solution.


class SimpleStore {
    constructor() {
        this.map = new Map();
    }
    set(node, value) {
        this.map.set(node, value); //single
    }
    get(node) {
        return this.map.get(node);
    }
    has(node) {
        return this.map.has(node);
    }
}

class SimpleStoreOld {
    constructor() {
        this.map = [];
    }
    set(node, value) {
        const existNode = this.get(node);
        if (existNode) {
            existNode.value = value;
        } else {
            this.map.push({
                node: node,
                value: value
            });
        }
    }
    get(node) {
        return this.map.find(d => d.node === node);
    }
    has(node) {
        return !!(this.get(node));
    }
}

### 046. Permutations

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
[1,2,3],
[1,3,2],
[2,1,3],
[2,3,1],
[3,1,2],
[3,2,1]
]

//Backtracking
https://youtu.be/GCm7m5671Ps

Time n * n!, Space n


function permute(nums) {
    const arr = [];
    const res = [];
    const len = nums.length;
    const traverse = () => {
        if (len === arr.length) {
            res.push(arr.slice());
        } else {
            nums.forEach(n => {
                if (arr.indexOf(n) === -1) {
                    arr.push(n);
                    traverse();
                    arr.pop();
                }
            });
        }
    };
    traverse();
    return res;
}

### 22. Generate Parentheses

Given n pairs of parentheses, 
write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

https://youtu.be/sz1qaKt0KGQ
Backtracking
 
function generateParenthesis(n) {
    const res = [];
    const traverse = (cur, open, close) => {
        if (cur.length === n * 2) {
            res.push(cur);
        } else {
            if (open < n) traverse(cur + '(', open + 1, close);
            if (close < open) traverse(cur + ')', open, close + 1);
        }
    };
    traverse('', 0, 0);
    return res;
}

/* 
198. House Robber

You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security system connected 
and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, 
determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
    Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

//Dynamic Programming
//https://youtu.be/UtGtF6nc35g

1: 0
2: 0 or 1
3: i + i - 2 or i - 1 
4: previous (i - 1) sum vs previous previous (i - 2) sum + current value


//Bottom-up Iterative
function rob(nums) {
    const len = nums.length;
    if (len === 0) return 0;
    // if (len === 1) return nums[0];
    // if (len === 2) return Math.max(nums[0], nums[1]);
    //max i - 2 + current vs max i - 1;
    const map = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < len; i++) {
        map[i] = Math.max(map[i - 2] + map[i], map[i - 1]); //max i - 2 + current or max i - 1;
    }
    return map[len - 1];
}

//Bottom-Up Iterative 2 variables, Fibonacci
function robI(nums) {
    if (nums.length === 0) return 0;
    let first = 0;
    let second = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        const third = nums[i];
        const max = Math.max(first + third, second); //first === max of i - 2, second = max of i - 1; first (i-2), second (i-1), third i
        first = second; // first is -1, next time -2
        second = max; // second is 0, next time -1
    }
    return second;
}

###  70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top?
Note: Given n will be a positive integer.

012345

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

https://youtu.be/NFJ3m9a1oJQ


//Iterate
function climbStairs(n) {
    // if (n === 0) return 0;
    // if (n === 1) return 1;
    // if (n === 2) return 2;
    //[i - 1] + [i - 2]
    const map = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        map[i] = map[i - 2] + map[i - 1];
    }
    return map[n];
}

//Fibonacci
function climbStairs(n) {
    let first = 0;
    let second = 1;
    for (let i = 1; i <= n; i++) {
        const third = first + second;
        first = second;
        second = third;
    }
    return second;
}

//recursive, fibonacci
function climbStairs(n) {
    if (n <= 2) return n;
    return climbStairs(n - 1) + climbStairs(n - 2);
}
//recursive with memoization
function climbStairs(n, map = []) {
    if (n <= 2) return n;
    if (map[n]) return map[n];
    map[n] = climbStairs(n - 1, map) + climbStairs(n - 2, map);
    return map[n];
}

//every number after the first two is the sum of the two preceding ones 1,1,2,3,5,8,13...
function fibonacci(n) {
    const map = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        map[i] = map[i - 2] + map[i - 1];
    }
    return map[n];
}

function fibonacciI(n) {
    let first = 0;
    let second = 1;
    for (let i = 1; i <= n; i++) {
        const third = first + second;
        first = second;
        second = third;
    }
    return second;
}

//Brute force
function fibonacciB(n) {
    if (n <= 2) return 1;
    return fibonacciB(n - 1) + fibonacciB(n - 2);
}

//memoization
function fibonacciBM(n, map = []) {
    if (n <= 2) return 1;
    if (map[n]) return map[n];
    map[n] = fibonacciBM(n - 1, map) + fibonacciBM(n - 2, map);
    return map[n];
}

### 53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
max [i - 1] + [i], [i]

https://youtu.be/2MmGzdiKR9Y


function maxSubArray(nums) {
    let max = nums[0];
    for (let i = 1, len = nums.length; i < len; i++) {
        nums[i] = Math.max(nums[i] + nums[i - 1], nums[i]);
        max = Math.max(nums[i], max);
    }
    return max;
}

function maxSubArray(nums) {
    let max = nums[0];
    let first = nums[0];
    for (let i = 1, len = nums.length; i < len; i++) {
        const second = nums[i];
        first = Math.max(first + second, second);
        //previous one can be bigger
        max = Math.max(max, first);
    }
    return max;
}

### 152. Maximum Product Subarray
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


function maxProduct(nums) {
    let firstSmall = nums[0];
    let firstBig = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const second = nums[i];
        if (second < 0) {
            [firstSmall, firstBig] = [firstBig, firstSmall];
        }
        firstBig = Math.max(firstBig * second, second);
        firstSmall = Math.min(firstSmall * second, second);
        max = Math.max(firstBig, max);
    }
    return max;
}

/* fb
91. Decode Ways
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa, 'ka', and 'ak'.

In this case, we don't need to actually create the combinations in order to count them. We can use dynamic programming.

Let f(i) represent the number of valid ways to decode the message in string, S, up to and including the character at index i (zero-based). Then:

-----
if they are valid.
1111
1, 2, 3, 4...

if they are not valid, - 1 / - 1


function numDecodings(s) {
    if (s.length === 0) return 0;

    const len = s.length;
    const map = [];

    //fake +1,
    map[0] = 1;
    //0 or previous value
    map[1] = s[0] !== '0' ? 1 : 0; //1 === map[0]

    for (let i = 2; i <= len; i++) {
        //all 0, then 0
        map[i] = 0;
        //current is not 0, 
        if (s[i - 1] !== '0') {
            //previous value
            map[i] += map[i - 1];
        }
        if (s[i - 2] === '1' || s[i - 2] === '2' && s[i - 1] <= '6') {
            //2 charactors value
            map[i] += map[i - 2];
        }
    }

    return map[len];
}


### 384. Shuffle an Array
Shuffle a set of numbers without duplicates.

Example:

// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. 
Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
 
class Solution {
    constructor(nums) {
        this.nums = nums;
    }
    reset() {
        return this.nums;
    }
    shuffle() {
        const shuffled = this.nums.concat();
        const len = shuffled.length;
        for (let i = 0; i < len; i++) {
            //Fisher-Yates Algorithm
            const j = Math.floor(Math.random() * (len - i) + i);
            [shuffled[j], shuffled[i]] = [shuffled[i], shuffled[j]];
        }
        return shuffled;
    }
}

class SolutionBF {
    constructor(nums) {
        this.nums = nums;
    }
    reset() {
        return this.nums;
    }
    shuffle() {
        const aux = this.nums.concat();
        const shuffled = this.nums.concat();
        const len = shuffled.length;
        for (let i = 0; i < len; i++) {
            const removeIdx = Math.floor(Math.random() * aux.length);
            shuffled[i] = aux[removeIdx];
            aux.splice(removeIdx, 1);
        }
        return shuffled;
    }
}

const sol = new Solution([1, 2, 3]);
console.log(sol.shuffle());

//https://coderbyte.com/algorithm/tree-traversal-algorithms
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function getBSTData() {
    return {
        val: 5,
        left: {
            val: 3,
            left: {
                val: 2
            },
            right: {
                val: 4
            }
        },
        right: {
            val: 7,
            left: {
                val: 6
            },
            right: {
                val: 8
            }
        }
    };
}

### Pre-order, DFS
1) Return the root node value.
2) Traverse the left subtree by recursively calling the pre-order function.
3) Traverse the right subtree by recursively calling the pre-order function.
 
function preOrder(root) {
    if (!root) return [];
    const values = [];
    const traverse = (node) => {
        values.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    };
    traverse(root);
    return values;
}

### In-order, DFS
1) Traverse the left subtree by recursively calling the in-order function.
2) Return the root node value.
3) Traverse the right subtree by recursively calling the in-order function.

1. recursive
2. iterate
 
function inOrder(root) {
    if (!root) return [];
    const values = [];
    const traverse = node => {
        if (node.left) traverse(node.left);
        values.push(node.val);
        if (node.right) traverse(node.right);
    };
    traverse(root);
    return values;
}

### In-order Iterate

function inOrderI(node) {
    if (!node) return [];
    const values = [];
    const stack = [];
    while (node || stack.length) {
        //move to the last left node
        while (node) {
            stack.push(node);
            node = node.left;
        }
        //the last left node
        node = stack.pop();
        values.push(node.val);
        //move to the right
        node = node.right;
    }
    return values;
}

### Post-Order, DFS
1) Traverse the left subtree by recursively calling the post-order function.
2) Traverse the right subtree by recursively calling the post-order function.
3) Return the root node value.
 
function postOrder(root) {
    if (!root) return [];
    const values = [];
    const traverse = node => {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        values.push(node.val);
    };
    traverse(root);
    return values;
}

### Level-Order, BFS
1) Add the root to a queue.
2) Pop the last node from the queue, and return its value.
3) Add all children of popped node to queue, and continue from step 2 until queue is empty.
 

function levelOrder(node) {
    if (!node) return [];
    //queue from the first to last 
    const queue = [node];
    const values = [];
    while (queue.length) {
        node = queue.shift();
        values.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return values;
}

### 98. Validate Binary Search Tree

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:

2
/ \
1   3

Input: [2,1,3]
Output: true
Example 2:

5
/ \
1   4
    / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

O(n), O(n)

//Tree, DFS, recursive, preOrder
function isValidBST(node) {
    if (!node) return true;
    let low = -Infinity;
    let high = Infinity;
    const traverse = (node, low, high) => {
        const val = node.val;
        if (val <= low || val >= high) return false;
        if (node.left) {
            if (!traverse(node.left, low, val)) return false;
        }
        if (node.right) {
            if (!traverse(node.right, val, high)) return false;
        }
        return true;
    };
    return traverse(node, low, high);
}

//inorder iterate, from bottom to top
function isValidBSTI(node) {
    if (!node) return true;
    const stack = [];
    let prevNode;
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        if (prevNode && node.val <= prevNode.val) return false;
        //inorder is from the smallest value for BST
        prevNode = node;
        node = node.right;
    }
    return true;
}

###     230. Kth Smallest Element in a BST
    Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
    
function kthSmallest(node, k) {
    if (!node) return null;
    const stack = [];
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        //inorder is from the smallest value for BST
        k--;
        if (k === 0) return node.val;
        node = node.right;
    }
    return null;
}

### 101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

1
/ \
2   2
/ \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
1
/ \
2   2
\   \
3    3
Note:
Bonus points if you could solve it both recursively and iteratively.


//DFS
function isSymmetric(node) {
    if (!node) return true;
    const traverse = (a, b) => {
        if (!a && !b) return true;
        if (!a || !b) return false;
        if (a.val !== b.val) return false;
        if (!traverse(a.left, b.right)) return false;
        if (!traverse(a.right, b.left)) return false;
        return true;
    };
    return traverse(node, node);
}

//BFS
function isSymmetricQueue(node) {
    if (!node) return true;
    const queue = [node.left, node.right];
    while (queue.length) {
        const left = queue.shift();
        const right = queue.shift();
        if (!left && !right) continue;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }
    return true;
}

### 102. Binary Tree Level Order Traversal

Given a binary tree, return the level order traversal of its nodes' values. 
(ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
3
/ \
9  20
    /  \
15   7
return its level order traversal as:
[
[3],
[9,20],
[15,7]
]



//Iteration
function levelOrderBFS(node) {
    if (!node) return [];
    const queue = [node];
    const res = [];
    while (queue.length) {
        const values = [];
        for (let i = 0, len = queue.length; i < len; i++) {
            node = queue.shift();
            values.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(values);
    }
    return res;
}

//Recursive
function levelOrderPreOrder(node) {
    if (!node) return [];
    const res = [];
    const traverse = (node, level) => {
        res[level] = res[level] || [];
        res[level].push(node.val);
        if (node.left) traverse(node.left, level + 1);
        if (node.right) traverse(node.right, level + 1);
    };
    traverse(node, 0);
    return res;
}


### 104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path 
from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
/ \
9  20
    /  \
15   7
return its depth = 3.

//Preorder
function maxDepthPreOrder(node) {
    if (!node) return 0;
    let maxDepth = 0;
    const traverse = (node, depth) => {
        depth += 1;
        maxDepth = Math.max(maxDepth, depth);
        if (node.left) traverse(node.left, depth);
        if (node.right) traverse(node.right, depth);
    };
    traverse(node, 0);
    return maxDepth;
}

function maxDepthInOrder(node) {
    if (!node) return 0;
    const stack = [];
    let depth = 0;
    let maxDepth = 0;
    while (node || stack.length) {
        while (node) {
            stack.push([depth + 1, node]);
            node = node.left;
        }
        [depth, node] = stack.pop();
        maxDepth = Math.max(maxDepth, depth);
        node = node.right;
    }
    return maxDepth;
}

### 108. Convert Sorted Array to Binary Search Tree

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree 
in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

    0
    / \
-3   9
/   /
-10  5


function sortedArrayToBST(nums) {
    if (!nums || !nums.length) return null;
    const traverse = (start, end) => {
        if (start <= end) {
            const mid = Math.floor((start + end) / 2);
            const node = new TreeNode(nums[mid]);
            node.left = traverse(start, mid - 1);
            node.right = traverse(mid + 1, end);
            return node;
        }
        return null;
    };
    return traverse(0, nums.length - 1);
}

### 235. Lowest Common Ancestor of a Binary Search Tree
Given a binary search tree (BST), 
find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined 
between two nodes p and q as the lowest node in T 
that has both p and q as descendants 
(where we allow a node to be a descendant of itself).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, 
since a node can be a descendant of itself according to the LCA definition.
 
Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the BST.
 

function lowestCommonAncestor(node, p, q) {
    const pVal = p.val;
    const qVal = q.val;
    while (node) {
        const val = node.val;
        if (pVal < val && qVal < val) {
            node = node.left;
        } else if (pVal > val && qVal > val) {
            node = node.right;
        } else {
            return node;
        }
    }
    return null;
}

function lowestCommonAncestorR(root, p, q) {
    const pVal = p.val;
    const qVal = q.val;
    const val = root.val;
    if (pVal > val && qVal > val) {
        return this.lowestCommonAncestorR(root.right, p, q);
    } else if (pVal < val && qVal < val) {
        return this.lowestCommonAncestorR(root.left, p, q);
    } else {
        return root;
    }
}

### 236. Lowest Common Ancestor of a Binary Tree
1. When meets p or q, return the pointer. There is no p or q, return null
https://youtu.be/13m9ZCB8gjw
---
Given a binary tree, 
find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined 
between two nodes p and q as the lowest node in T 
that has both p and q as descendants 
(where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, 
since a node can be a descendant of itself according to the LCA definition.
 
Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the binary tree.
 
function lowestCommonAncestorBT(node, p, q) {
    if (!node) return null;
    if (node === p || node === q) return node;
    const left = this.lowestCommonAncestorBT(node.left, p, q);
    const right = this.lowestCommonAncestorBT(node.right, p, q);
    if (!left && !right) return null;
    if (left && right) return node;
    if (left) return left;
    if (right) return right;
}

### 669. Trim a Binary Search Tree
Given a binary search tree and the lowest and highest boundaries as L and R, 
trim the tree so that all its elements lies in [L, R] (R >= L). 
You might need to change the root of the tree, 
so the result should return the new root of the trimmed binary search tree.

Example 1:
Input: 
    1
/ \
0   2

L = 1
R = 2

Output: 
    1
    \
    2
Example 2:
Input: 
    3
/ \
0   4
\
    2
/
1

L = 1
R = 3

Output: 
    3
    / 
2   
/
1


function trimBST(node, L, R) {
    if (!node) return null;
    const val = node.val;
    if (val === L) {
        node.left = null;
        node.right = trimBST(node.right, L, R);
        return node;
    }
    if (val === R) {
        node.right = null;
        node.left = trimBST(node.left, L, R);
        return node;
    }
    if (L < val && R < val) {
        return trimBST(node.left, L, R);
    }
    if (L > val && R > val) {
        return trimBST(node.right, L, R);
    }
    node.left = trimBST(node.left, L, R);
    node.right = trimBST(node.right, L, R);
    return node;
}

/* 
103. Binary Tree Zigzag Level Order Traversal
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
/ \
9  20
    /  \
15   7
return its zigzag level order traversal as:
[
[3],
[20,9],
[15,7]
]


function zigzagLevelOrderPreOrder(node) {
    if (!node) return [];
    const res = [];
    const traverse = (node, level) => {
        res[level] = res[level] || [];
        if (level % 2 === 0) {
            res[level].push(node.val);
        } else {
            res[level].unshift(node.val);
        }
        if (node.left) traverse(node.left, level + 1);
        if (node.right) traverse(node.right, level + 1);
    };
    traverse(node, 0);
    return res;
}

function zigzagLevelOrderBFS(node) {
    if (!node) return [];
    const res = [];
    const queue = [node];
    let level = 0;
    while (queue.length) {
        res[level] = res[level] || [];
        for (let i = 0, len = queue.length; i < len; i++) {
            node = queue.shift();
            if (level % 2 === 0) {
                res[level].push(node.val);
            } else {
                res[level].unshift(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        level += 1;
    }
    return res;
}



### 173. Binary Search Tree Iterator

Implement an iterator over a binary search tree (BST). 
Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Example:

BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false
 

Note:

next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.

 
class BSTIterator {
    constructor(root) {
        this.stack = [];
        this.stackLeft(root);
    }
    stackLeft(node) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }
    next() {
        const node = this.stack.pop();
        this.stackLeft(node.right);
        return node.val;
    }
    hasNext() {
        return this.stack.length > 0;
    }
}

### 297. Serialize and Deserialize Binary Tree
Serialization is the process of converting a data structure or object 
into a sequence of bits so that it can be stored in a file or memory buffer, 
or transmitted across a network connection link 
to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. 
There is no restriction on 
how your serialization/deserialization algorithm should work. 
You just need to ensure that a binary tree can be serialized to a string 
and this string can be deserialized to the original tree structure.

Example: 

You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
Clarification: The above format is the same as how LeetCode serializes a binary tree. 
You do not necessarily need to follow this format, 
so please be creative and come up with different approaches yourself.

Note: Do not use class member/global/static variables to store states. 
Your serialize and deserialize algorithms should be stateless.
 

class Serializer {
    //PreOrder
    serialize(root) {
        //recursion by itself is very slow
        const arr = [];
        const retrieve = node => {
            if (!node) {
                arr.push('e');
            } else {
                arr.push(node.val);
                retrieve(node.left);
                retrieve(node.right);
            }
        };
        retrieve(root);
        return arr.join(',');
    }
    deserialize(data) {
        const nodes = data.split(',');
        const retrieve = () => {
            const val = nodes.shift();
            if (val === 'e') {
                return null;
            } else {
                const node = new TreeNode(+val);
                node.left = retrieve();
                node.right = retrieve();
                return node;
            }
        };
        return retrieve();
    }
}


### getElementsByClassName()
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

### const root = document.querySelector('#root1');
const node = root.querySelector('#node1');
const targetRoot = document.querySelector('#root2');
const path = getPath(root, node);
const targetNode = findNode(targetRoot, path);
console.log(targetNode.id);


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

### If you know the value that you are looking for is closer to the top, a BFS approach might be a superior choice, 
but if a tree is very wide and not too deep, a DFS approach might be faster and more efficient.
 
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

### Graphs: There are 3 basic ways to represent a graph in memory (objects and pointers, matrix, and adjacency list); 
know each representation and its pros & cons. 
Know the basic graph traversal algorithms: breadth-first search & depth-first search. 
Know their computational complexity, their tradeoffs, and how to implement them in real code. Time permitting, study fancier algorithms such as Dijkstra and A*.

directed max edges => 0 ~ n * (n - 1)
undirected max edges => 0 ~ (n * (n - 1)) / 2

Representation

Adjacency Matrix representation is good for dense, v2 space (too much space), Space V2 Search O(1)

Adjacency List => Space = O(edges), Search O(v) or O (log v)

DFS, BFS: Same as the tree, but it nedds to check the visited vertex(node).

Graph Representation
https://youtu.be/gXgEDyodOJU
Graph BFS & DFS
https://youtu.be/pcKY4hjDrxk

//DFS pseudocode, visit all nodes
function searchDFS(node) {
    if (!node) return;
    const visit = (node) => {};
    visit(node);
    node.visited = true;
    for (let n in node.adjacent) {
        if (!n.visited) {
            this.searchDFS(n);
        }
    }
}

//BFS pseudocode, short path
function shortPathBFS(node) {
    const visit = (node) => {};
    const queue = [];
    node.visited = true;
    queue.push(node);
    while (queue.length) {
        const prev = queue.shift();
        visit(prev);
        for (let n in prev.adjacent) {
            if (!n.visited) {
                n.visited = true;
                queue.push(n);
            }
        }
    }
}

### 133. Clone Graph
Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

Example:

Input:
{
    "$id": "1",
    "neighbors": [{
        "$id": "2",
        "neighbors": [{
            "$ref": "1"
        }, {
            "$id": "3",
            "neighbors": [{
                "$ref": "2"
            }, {
                "$id": "4",
                "neighbors": [{
                    "$ref": "3"
                }, {
                    "$ref": "1"
                }],
                "val": 4
            }],
            "val": 3
        }],
        "val": 2
    }, {
        "$ref": "4"
    }],
    "val": 1
}

Explanation:
Node 1's value is 1, and it has two neighbors: Node 2 and 4.
Node 2's value is 2, and it has two neighbors: Node 1 and 3.
Node 3's value is 3, and it has two neighbors: Node 2 and 4.
Node 4's value is 4, and it has two neighbors: Node 1 and 3.
 
Note:

The number of nodes will be between 1 and 100.
The undirected graph is a simple graph, which means no repeated edges and no self-loops in the graph.
Since the graph is undirected, if node p has node q as neighbor, then node q must have node p as neighbor too.
You must return the copy of the given node as a reference to the cloned graph.


function cloneGraph(node, map = {}) {
    if (!node) return null;
    //for $ref
    if (!map[node.val]) {
        map[node.val] = new Node(node.val);
        map[node.val].neighbors = node.neighbors.map(n => cloneGraph(n, map));
    }
    return map[node.val];
}

//BFS
function cloneGraph(node) {
    if (!node) return null;
    const queue = [node];
    const map = {};
    const newRoot = new Node(node.val, []);
    map[node.val] = newRoot;

    while (queue.length) {
        const currNode = queue.shift();
        currNode.neighbors.forEach(n => {
            if (!map[n.val]) {
                map[n.val] = new Node(n.val, []);
                queue.push(n);
            }
            map[currNode.val].neighbors.push(map[n.val]);
        });
    }
    return newRoot;
}


//https://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort
//https://pediaa.com/what-is-the-difference-between-quicksort-and-merge-sort/
//https://www.youtube.com/watch?v=COk73cpQbFQ
//n log n / log n (in-place)
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1

function quickSort(arr) {
  const partition = (left, right) => {
    let idx = left;
    const pivot = arr[right];
    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
        idx++;
      }
    }
    [arr[right], arr[idx]] = [arr[idx], arr[right]];
    return idx;
  };
  const traverse = (left, right) => {
    if (left >= right) return;
    const idx = partition(left, right);
    traverse(left, idx - 1);
    traverse(idx + 1, right);
  };
  traverse(0, arr.length - 1);
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);

//MergeSort
// Split the array into halves and merge them recursively 
//https://youtu.be/TzeBrDU-JaY
//https://youtu.be/0nlPxaC2lTw
//n log n / n
function mergeSort(arr) {
  //divide to 1 member.
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const merge = (left, right) => {
    const res = [];
    let li = 0;
    let ri = 0;
    while (li < left.length && ri < right.length) {
      if (left[li] < right[ri]) {
        res.push(left[li]);
        li++;
      } else {
        res.push(right[ri]);
        ri++;
      }
    }
    return res.concat(left.slice(li)).concat(right.slice(ri));
  };

  return merge(mergeSort(left), mergeSort(right));
}

mergeSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);


## Optional - Linked List 

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

### 19. Remove Nth Node From End of List

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?

function removeNthFromEnd(head, n) {
    const res = new ListNode(0);
    //save the start point
    res.next = head;
    //for calc
    let node = res.next;
    let len = 0;
    while (node) {
        node = node.next;
        len++;
    }
    len -= n;
    node = res;
    while (len > 0) {
        node = node.next;
        len--;
    }
    node.next = node.next.next;
    return res.next;
}

### 2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

function addTwoNumbers(l1, l2) {
    const res = new ListNode(0);
    //for calc
    let temp = res;
    let sum = 0;
    let carry = 0;
    let l1Val;
    let l2Val;
    while (l1 || l2) {
        l1Val = l1 ? l1.val : 0;
        l2Val = l2 ? l2.val : 0;
        sum = carry + l1Val + l2Val;
        carry = sum / 10 >= 1 ? 1 : 0;
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry > 0) {
        temp.next = new ListNode(carry);
    }
    return res.next;
}

### 21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

function mergeTwoLists(l1, l2) {
    const res = new ListNode(0);
    let temp = res;
    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.val < l2.val) {
                temp.next = l1;
                l1 = l1.next;
            } else {
                temp.next = l2;
                l2 = l2.next;
            }
        } else {
            if (l1) {
                temp.next = l1;
                l1 = l1.next;
            } else {
                temp.next = l2;
                l2 = l2.next;
            }
        }
        temp = temp.next;
    }
    return res.next;
}

function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l2.next, l1);
        return l2;
    }
}

### 141. Linked List Cycle

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, 
we use an integer pos which represents the position (0-indexed) in the linked list 
where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?

function hasCycle(node) {
    if (!node || !node.next) return false;
    let first = node;
    let second = node.next;
    while (first !== second) {
        if (!second || !second.next) return false;
        first = first.next;
        second = second.next.next;
    }
    return true;
}

### 206. Reverse Linked List
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

//prev = node, next = prev O(n), O(1)

function reverseList(node) {
    let prev = null;
    while (node) {
        const temp = node.next;
        //prev -> next
        node.next = prev;
        //prev
        prev = node;
        node = temp;
    }
    return prev;
}

//hard, O(n)/O(n)
function reverseList(node) {
    if (!node || !node.next) return node;
    //return the last node.
    const root = reverseList(node.next);
    //node.next is the last node. add prev to the last
    // node.next.next = node;
    // node.next = null;
    const temp = node.next;
    const prev = node;
    temp.next = prev;
    prev.next = null;
    return root;
}

### 234. Palindrome Linked List
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

function isPalindrome(head) {
    if (!head || !head.next) return true;
    let fast = head;
    let slow = head;
    // find middle, run 2x, slow = mid + 1;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //reverse, from the mid
    let prev = null;
    while (slow) {
        const temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    //compare
    while (prev) {
        if (head.val !== prev.val) return false;
        prev = prev.next;
        head = head.next;
    }
    return true;
}

### 237. Delete Node in a Linked List
Write a function to delete a node (except the tail) in a singly linked list, 
given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:

Example 1:

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, 
the linked list should become 4 -> 1 -> 9 after calling your function.
Example 2:

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, 
the linked list should become 4 -> 5 -> 9 after calling your function.

Note:

The linked list will have at least two elements.
All of the nodes' values will be unique.
The given node will not be the tail 
and it will always be a valid node of the linked list.
Do not return anything from your function.
 

function deleteNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}
