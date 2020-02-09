# Big O Concept
* Array, Stack, Queue, Hash Table, BST, BT are important. Understand Quicksort, Mergesort.
https://www.bigocheatsheet.com/

# Data structure and Algorithm and Design Questions
- Algorithm and Design: Number, String, Matrix, Design, Tree, Permutation, Backtracking are Basic. 
- Need to know the basic questions about Dynamic Programing. 
- Need to understand about Graph and Linked list

**You need to solve the questions with online editors like <http://collabedit.com/> or <https://codepen.io/> or <https://repl.it/languages/javascript> and need to submit them the <https://leetcode.com/problemset/algorithms/.>**

**You need to add the answer at the end of the questoin**
**The answer should have the comments why you did like that**
**The question number is the same as Leetcode question number**

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

### Answer
```
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; ++i) {
        for(let j = i + 1; j < nums.length; ++j) {
            if(nums[i] + nums[j]  === target) return [i, j];
        }
    }
};
```

### Description
```
To solve this problem, I need to compare all possible pairs of two numbers.
So I try to iterate all numbers and comapre each number and all other numbers to check if it those sum is same with target number.
First loop iterates all number. Second nested loop interates from next number of the first loop's number to end of the numbers.
Let's say first loop is 1 to N and nested loop is 2 to N
First loop will iterate N and nested loop will iterate N-1

For the second iterate of first loop, nested loop will iterate N-2
So total number of iteration will be (N-1) + (N-2) + (N-3) ... 1
This equals to (N-1)N + (-1) + (-2) + (-3) ... 1

According to expression BigO, we can ignore constants so time complexity in BigO expression is Big(N(N-1))
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


### Answer

```

var getSumOfNestedList = function (list, depth) {
    let sum = 0;
    for(item of list) {
        if(item instance of Array) {
            // Array is nested list so pass to getSumOfNestedList recursively with depth + 1
            sum += getSumOfList(item, depth + 1);
        } else {
            // this is to multiply by depth and added to sum
            sum += item * depth;
        }
    }
    return sum;
}


var answer = function (list) {
    return getSumOfNestedList(list, 1);
}


```

### Description
```
First, I implemented a recursive function to ease dive into nested lists in a list.
We don't know how deep nested lists exists in a list. So if it is list, we pass it to getSumOfNestedList() with next weight(which is depth of the nested list)

In answer() function, getSumOfNestedList() is called with list and weight value 1 parameters.

And then, in the function, iterate all items of the list. If the instance type is NOT array, item will be multiplied by depth and added to sum variables.
If the instance type is Array, it is passed to getSumOfNestedList() with increased depth value.

return value of getSumOfNestedList() is total sum of all items (item * depth) and result of nested list

Finally, answer() will return sum of weighted integer list.
```




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