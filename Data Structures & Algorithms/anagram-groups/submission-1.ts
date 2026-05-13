class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const strsMap = new Map();
        // store sorted version of string if no match with anything in map
        // return all map values after.
        for (let str of strs) {
            const sortedStr = str.split('').sort().join('');
            if (strsMap.has(sortedStr)) {
                const existing = strsMap.get(sortedStr);
                strsMap.set(sortedStr, [...existing, str]);
            } else {
                strsMap.set(sortedStr, [str]);
            }
        }
        return [...strsMap.entries()].map(entry => entry[1])
    }
}
