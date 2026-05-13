class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // target - nums[i] = nums[j]
        const targetDiff = new Map();
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (targetDiff.has(diff)) {
                return [targetDiff.get(diff), i]
            }
            targetDiff.set(nums[i], i)
        }
        return []
    }
}
