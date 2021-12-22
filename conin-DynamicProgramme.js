// https://juejin.cn/post/7029965326909440014 掘金 winter 的文章
// 有数目不限的 1分，2分，3分的硬币，现在要凑齐 1元钱，有多少种凑法
function coin() {
    let r = 0
    for (let x = 0; x < 100; x++) { // 1F
        for (let y = 0; y < 50; y++) { // 2F
            for (let z = 0; z < 20; z++) { // 5F
                if (x + 2 * y + 5 * z === 100) {
                    ++r
                }
            }
        }
    }
    return r
}

// 1 可以凑出任何数目的价值，而且有且仅有一种凑法（全是 1）
function coin2() {
    let r = 0
        for (let y = 0; y < 50; y++) { // 2F
            for (let z = 0; z < (100 - y * 2); z++) { // 5F
                ++r
            }
        }
    return r
}

// 
function coin3() {
    let r = 0
    for (let y = 0; y < 50; y++) {
        r += Math.floor((100 - y * 2) / 5) + 1
    }
    return r
}

// 有数目不限的硬币，其面值存储于数组values当中，现要凑齐价值n，问有多少种凑法。