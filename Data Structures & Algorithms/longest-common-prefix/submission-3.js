class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // sort strs just by themselves first
        // the default sort will sort them alphabetically as well
        // check prefix for first and last word, cause 
        // that will be the most uncommon from each other
        strs.sort();

        let res = "";
        const lastStrIndex = strs.length - 1;
        const minLength = Math.min(strs[0].length, strs[lastStrIndex].length);
        console.log(strs[0], strs[lastStrIndex])
        for (let i = 0; i < minLength; i++) {
            if (strs[0][i] !== strs[lastStrIndex][i]) {
                break;
            }
            res += strs[0][i];
        }

        return res;
    }
}
