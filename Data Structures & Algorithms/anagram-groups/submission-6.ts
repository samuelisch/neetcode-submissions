class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramGroups = {};
        for (let str of strs) {
            let charCodeList = Array(26).fill(0);
            for (let char of str) {
                const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
                charCodeList[charCode] += 1;
            }
            let comparableStr = charCodeList.join(',');
            if (!Object.hasOwn(anagramGroups, comparableStr)) {
                anagramGroups[comparableStr] = [];
            }
            anagramGroups[comparableStr].push(str)
        }
        return Object.values(anagramGroups);
    }
}
