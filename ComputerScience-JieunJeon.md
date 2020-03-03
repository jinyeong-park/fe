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
```python
def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        seen = {}
        for i in range(len(nums)):
            if target - nums[i] in seen:
                return [seen.get(target-nums[i]),i]
            seen[nums[i]] = i
            
        return False
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
```python
# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
#class NestedInteger(object):
#    def __init__(self, value=None):
#        """
#        If value is not specified, initializes an empty list.
#        Otherwise initializes a single integer equal to value.
#        """
#
#    def isInteger(self):
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        :rtype bool
#        """
#
#    def add(self, elem):
#        """
#        Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
#        :rtype void
#        """
#
#    def setInteger(self, value):
#        """
#        Set this NestedInteger to hold a single integer equal to value.
#        :rtype void
#        """
#
#    def getInteger(self):
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        :rtype int
#        """
#
#    def getList(self):
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        :rtype List[NestedInteger]
#        """

class Solution(object):
    def depthSumHelper(self, nestedList, d):
        sum = 0
        for i in nestedList:
            if i.isInteger():
                sum += d*i.getInteger()
            else:
                sum += self.depthSumHelper(i.getList(), d+1)
        return sum 
    
    def depthSum(self, nestedList):
        """
        :type nestedList: List[NestedInteger]
        :rtype: int
        """
        return self.depthSumHelper(nestedList, 1)
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
```python
# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
#class NestedInteger(object):
#    def isInteger(self):
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        :rtype bool
#        """
#
#    def getInteger(self):
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        :rtype int
#        """
#
#    def getList(self):
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        :rtype List[NestedInteger]
#        """

class NestedIterator(object):

    def __init__(self, nestedList):
        """
        Initialize your data structure here.
        :type nestedList: List[NestedInteger]
        """
        self.list = self.makeListFlatten(nestedList)
        self.index = -1
    
    def makeListFlatten(self,nestedList):
        res = []
        for i in nestedList:
            if i.isInteger():
                res.append(i.getInteger())
            else:
                res.extend(self.makeListFlatten(i.getList()))
        return res
        
    def next(self):
        """
        :rtype: int
        """
        self.index += 1
        return self.list[self.index]

    def hasNext(self):
        """
        :rtype: bool
        """
        return self.index < len(self.list) -1
        

# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
```
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
```python
# memoizing previous-min value when new min-val comes in
class MinStack(object):

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.min=float('inf')
        self.stack = []

    def push(self, x):
        """
        :type x: int
        :rtype: None
        """
        if x<=self.min:
            self.stack.append(self.min)
            self.min = x
        self.stack.append(x)
        print(self.stack)

    def pop(self):
        """
        :rtype: None
        """
        t = self.stack[-1]
        self.stack.pop()
        if self.min == t:
            self.min = self.stack[-1]
            self.stack.pop()
        print(self.stack)

    def top(self):
        """
        :rtype: int
        """
        return self.stack[-1]

    def getMin(self):
        """
        :rtype: int
        """
        return self.min


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
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
```python
class Bucket:
    def __init__(self):
        self.bucket = []
    def get(self, key):
        for (i, v) in self.bucket:
            if i == key:
                return v
        return -1
    
    def update(self, key, value):
        found = False
        print("before",self.bucket)
        for i, v in enumerate(self.bucket):
            print("?", i, v, v[0])
            if key == v[0]:
                self.bucket[i] = (key, value)
                found = Truea
        if not found:
            self.bucket.append((key, value))
        print("after",self.bucket)

    def remove(self, key):
        for (i, v) in enumerate(self.bucket):
            if key == v[0]:
                del self.bucket[i]
                
class MyHashMap(object):

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.hashKey = 2069
        self.hashTable = [Bucket() for i in range(self.hashKey)]
        

    def put(self, key, value):
        """
        value will always be non-negative.
        :type key: int
        :type value: int
        :rtype: None
        """
        hashKey = key % self.hashKey
        self.hashTable[hashKey].update(key, value)

    def get(self, key):
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        :type key: int
        :rtype: int
        """
        hashKey = key % self.hashKey
        return self.hashTable[hashKey].get(key)

    def remove(self, key):
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        :type key: int
        :rtype: None
        """
        hashKey = key % self.hashKey
        self.hashTable[hashKey].remove(key)


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
```



**796. Rotate String**

We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1: Input: A = 'abcde', B = 'cdeab' Output: true

Example 2: Input: A = 'abcde', B = 'abced' Output: false

Note:

A and B will have length at most 100.

https://leetcode.com/problems/rotate-string/

```python
def rotateString(self, A, B):
    """
    :type A: str
    :type B: str
    :rtype: bool
    """
    if A == B:
        return True
    
    for i in range(len(A)):
        A = A[1:]+A[0]
        if A == B:
            return True
    
    return False 
```
**704. Binary Search**

Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9 Output: 4 Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2 Output: -1 Explanation: 2 does not exist in nums so return -1

Note:

You may assume that all elements in nums are unique. n will be in the range [1, 10000]. The value of each element in nums will be in the range [-9999, 9999].

https://leetcode.com/problems/binary-search/

```python
def search(self, nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) - 1
        
    while left <= right:
        pivot = left + (right-left) // 2
        if nums[pivot] == target:
            return pivot
        elif target < nums[pivot]:
            right = pivot - 1
        else:
            left = pivot + 1
    return -1
```
Time Complexity: O(log N) <-- height of the tree
Space Complexity: O(2) ==> O(1)


**700. Search in a Binary Search Tree**
Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example,

Given the tree: 4 /
2 7 /
1 3

And the value to search: 2 You should return this subtree:

  2     
 / \   
1   3
In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.

https://leetcode.com/problems/search-in-a-binary-search-tree/


```python
class Solution:
    def searchBST(self, root: TreeNode, val: int) -> TreeNode:
        if root is None or val == root.val:
            return root
        
        if val < root.val:
            return self.searchBST(root.left, val)
        else:
            return self.searchBST(root.right, val)

```

**Isograms**
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Your task is to write and test a function that determines whether a string is an isogram, following the format of the previous problems. It should return true if the input string is an isogram, and should return false otherwise.

While you should create your own test suite to get the most out of this exercise, there are automated tests provided as well.

Notes:

Assume your input is only letters. Assume the empty string is an isogram. Ignore case. Follow the pseudocode exactly!

```python
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        return len(set(zip(s, t))) == len(set(s)) == len(set(t))
    
    def isIsomorphic5(self, s, t):
        return map(s.find, s) == map(t.find, t)

```


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
```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1  
        while left < right:
            if s[left].isalnum() and s[right].isalnum():
                if s[left].lower() != s[right].lower(): 
                    return False
                else:
                    left += 1
                    right -= 1
            elif not s[left].isalnum():  # left is not a alphanumeric, then move left
                left += 1
            else:  # right is not a alphanumeric, then move right
                right -= 1
        return True

```


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

```python
class Solution:
    def validPalindrome(self, s: str) -> bool:
        if s == s[::-1]:
            return True

        count = 0
        for i in range(len(s) // 2):
            if s[i] != s[len(s) - 1 - i]:
                count += 1
                
                # If two pairs are not equal return False
                if count >= 2:
                    return False
                
                # If one pair not equal, delete left and right
                a1 = s[0:i] + s[i+1:]
                a2 = s[0:len(s) - 1 - i] + s[len(s) - 1 - i + 1:]

                # Check if one of them would be palindrome, that'd be OK
                if a1 == a1[::-1] or a2 == a2[::-1]:
                    return True

        # Otherwise return False
        return False
```
### 5. Longest Palindromic Substring

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

```python
"""
Approach 4: Expand Around Center
In fact, we could solve it in O(n^2)O(n 
2
 ) time using only constant space.

We observe that a palindrome mirrors around its center. Therefore, a palindrome can be expanded from its center, and there are only 2n - 12n−1 such centers.

You might be asking why there are 2n - 12n−1 but not nn centers? The reason is the center of a palindrome can be in between two letters. Such palindromes have even number of letters (such as "abba") and its center are between the two 'b's.
"""
class Solution:
    def longestPalindrome(self, s):
        
        res = ""
        for i in range(len(s)):
            # odd case, like "aba"
            tmp = self.helper(s, i, i)
        
            #print (tmp)
        
            if len(tmp) > len(res):
                res = tmp
            # even case, like "abba"
            tmp = self.helper(s, i, i+1)
            if len(tmp) > len(res):
                res = tmp
        return res
 
    # get the longest palindrome, l, r are the middle indexes   
    # from inner to outer
    def helper(self, s, l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1; r += 1
            #print ("s[l]: " + s[l])
            #print ("s[r]: " + s[r])
        
        return s[l+1:r]
```