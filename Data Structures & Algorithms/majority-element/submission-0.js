class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort((a, b) => a - b);
        const mid = Math.floor(nums.length / 2);
        return nums[mid];
    }
}
