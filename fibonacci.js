function fib(n) {
    if (n < 0) {
        return
    }
    if (n == 1 || n == 0) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

console.log(fib(10)) // 55