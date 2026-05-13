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
            if (targetDiff[nums[i]] !== undefined) {
                return [targetDiff[nums[i]], i]
            }
            const diff = target - nums[i];
            targetDiff[diff] = i;
        }
        return []
    }
}
