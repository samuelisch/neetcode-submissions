class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b);
        let prevNum = null;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === prevNum) {
                return true;
            }
            prevNum = nums[i];
        }
        return false;
    }
}
