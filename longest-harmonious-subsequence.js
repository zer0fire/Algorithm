/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length, ans = 0;
    for (let i = 0, j = 0; j < n; j++) {
        while(i < j && nums[j] - nums[i] > 1) {
            i++;
        }
        if (nums[j] - nums[i] === 1) {
            ans = Math.max(ans, j - i + 1);
        }
    }
    return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let map = new Map()
    for (const i of nums) {
        let defaultVal = map.has(i) ? map.get(i) : 0
        map.set(i, defaultVal + 1)
    }
    let ans = 0
    for (const i of nums) {
        if (map.has(i - 1)) {
            ans = Math.max(ans, map.get(i) + map.get(i - 1))
        }
    }
    return ans
}