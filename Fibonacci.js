function fib(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1 || n === 2) {
        return 1
    }
    let c1 = 1
    let c2 = 1
    let result = 0
    for(let i = 3; i <= n; i++) {
        result = c1 + c2
        c1 = c2
        c2 = result
    }
    return result
}