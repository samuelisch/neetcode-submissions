class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const sortedStrs = strs.sort((a, b) => a.length - b.length)
        let prefix = sortedStrs[0];
        for (let i = 1; i < sortedStrs.length; i++) {
            let j = 0;
            while (j < prefix.length && prefix[j] === sortedStrs[i][j]) {
                j++;
            }
            prefix = prefix.slice(0, j);
        }
        return prefix;
    }
}
