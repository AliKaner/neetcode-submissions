class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
       const newNums = nums.join("").split(0).sort();
       return newNums[newNums.length -1].length;
    }
}
