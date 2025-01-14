// Recursive factorial function
function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
      return 1;
    }
    // Recursive case: factorial of n is n * factorial of (n-1)
    return n * factorial(n - 1);
  }
  
  // Test the function with different inputs
  console.log(factorial(0));  // Output: 1 (Base case)
  console.log(factorial(5));  // Output: 120 (5 * 4 * 3 * 2 * 1)
  console.log(factorial(7));  // Output: 5040 (7 * 6 * 5 * 4 * 3 * 2 * 1)
  console.log(factorial(10)); // Output: 3628800 (10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)
  