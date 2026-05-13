class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // target - nums[i] = nums[j]
        const targetDiff = {};
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (targetDiff[diff] !== undefined) {
                return [targetDiff[diff], i]
            }
            targetDiff[nums[i]] = i;
        }
        return []
    }
}
