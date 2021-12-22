/**
 * 1 个 细胞的生命周期 3 小时，1小时后分裂，问 n 小时候容器内有多少细胞
 */


// 0 1
// 1 2
// 2 4
// 3 14
function cell(n) {
    if (n === 0) {
        return 1
    }
    if (n === 1) {
        return 2
    }
    if (n === 2) {
        return 4
    }
    if (n === 3) {
        return 8
    }
}