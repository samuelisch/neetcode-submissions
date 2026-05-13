class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const sortedStrs = strs.toSorted((a, b) => a.length - b.length);

        console.log(sortedStrs)
        let res = sortedStrs[0];
        let minLength = sortedStrs[0].length;
        for (let i = 1; i < sortedStrs.length; i++) {
            let currStr = sortedStrs[i].split('').slice(0, minLength).join('');
            console.log(currStr)
            while (res.length > 0 && currStr !== res) {
                console.log('doesnt match ', res, currStr);
                minLength--;
                res = sortedStrs[0].split('').slice(0, minLength).join('');
                currStr = sortedStrs[i].split('').slice(0, minLength).join('');
            }
            if (res.length === 0) {
                break;
            }
        }
        return res;
    }
}
