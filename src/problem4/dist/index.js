"use strict";
function sum_to_n_a(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sum_to_n_b(n) {
    return (n * (n + 1)) / 2;
}
function sum_to_n_c(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return n + sum_to_n_c(n - 1);
    }
}
// Running the functions
const n = 5;
console.log(`sum_to_n_a(${n}) = ${sum_to_n_a(n)}`); // Output: 15
console.log(`sum_to_n_b(${n}) = ${sum_to_n_b(n)}`); // Output: 15
console.log(`sum_to_n_c(${n}) = ${sum_to_n_c(n)}`); // Output: 15
