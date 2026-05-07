class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let curr = 1;
        let prev = 0;
        for (let i = 1; i <= n; i++) {
            [curr, prev] = [curr + prev, curr];
        }

        return curr;
    }
}
