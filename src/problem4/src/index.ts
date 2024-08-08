/** 3 unique implementations of summing to n in TypeScript. **/
/*
Implementation A: Iterative Approach
This implementation uses a simple for loop to sum the numbers from 1 to n.
*/
/**
 * Complexity and Efficiency:
 * Time Complexity: O(n) - The loop runs n times, making the time complexity linear.
 * Space Complexity: O(1) - Only a few variables are used, regardless of the input size.
 * @param n
 */
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/*
Implementation B: Mathematical Formula
This implementation uses the arithmetic series sum formula: sum = n(n+1)/2
*/
/**
 * Complexity and Efficiency:
 * Time Complexity: O(1) - The sum is calculated using a single mathematical formula.
 * Space Complexity: O(1) - No additional space is required beyond a few variables.
 * @param n
 */
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

/*
Implementation C: Recursive Approach
This implementation uses recursion to calculate the sum from 1 to n.
*/
/**
 * Complexity and Efficiency:
 * Time Complexity: O(n) - The function calls itself n times, making the time complexity linear.
 * Space Complexity: O(n) - Each recursive call adds a frame to the call stack, leading to linear space complexity.
 * @param n
 */
function sum_to_n_c(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return n + sum_to_n_c(n - 1);
    }
}

// Running the functions
const n = 5;
console.log(`sum_to_n_a(${n}) = ${sum_to_n_a(n)}`); // Output: 15
console.log(`sum_to_n_b(${n}) = ${sum_to_n_b(n)}`); // Output: 15
console.log(`sum_to_n_c(${n}) = ${sum_to_n_c(n)}`); // Output: 15


/**
 * Summary
 * Iterative Approach (A): Simple and efficient with O(n) time complexity and O(1) space complexity. It iteratively adds numbers in a loop.
 * Mathematical Formula (B): The most efficient with O(1) time and space complexity. It directly calculates the sum using a formula.
 * Recursive Approach (C): Less efficient due to O(n) time and space complexity. It uses recursion, which can lead to stack overflow for very large n.
 *
 * The best choice for efficiency and simplicity is the mathematical formula (Implementation B), while the iterative approach (Implementation A) is also straightforward and efficient.
 * The recursive approach (Implementation C) is less efficient and should be used with caution for large inputs.
 */