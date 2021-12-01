//? Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//* Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

//* Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

//* Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 nums = [1, 3, 7, 9, 2];
 target = 11;
 
 const findTwoSum1 = function (nums, target) {
   for (let p1 = 0; p1 < nums.length; p1++) {
     const numberToFind = target - nums[p1];
     for (p2 = p1 + 1; p2 < nums.length; p2++) {
       if (numberToFind === nums[p2]) {
         return [p1, p2];
       }
     }
   }
   return null;
 };
 
 //! Time Complexity: O(N2) - need find a solution how to optimize
 //! Space Complexity: O(1) - no problem
 
 //* Optimizing solution:
 const findTwoSum2 = function (nums, target) {
   const numsMap = {};
   for (let p = 0; p < nums.length; p++) {
     const currentMapVal = numsMap[nums[p]];
     if (currentMapVal >= 0) { 
       return [currentMapVal, p];
     } else {
       const numberToFind = target - nums[p];
       numsMap[numberToFind] = p;
     }
   }
   return null;
 };
 
//! Time Complexity: O(N)
//! Space Complexity: O(N)
 
