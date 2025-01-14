// Curry function that transforms a function to a curried version
function curry(fn) {
    // Return a function that collects arguments one at a time
    function curried(...args) {
      // If the number of arguments collected is less than the function's arity (number of expected arguments)
      if (args.length < fn.length) {
        // Return a new function that will accept more arguments
        return (...newArgs) => curried(...args, ...newArgs);
      }
      // Once we have all the arguments, call the original function with them
      return fn(...args);
    }
  
    return curried;
  }
  
  // Test the curry function with an addition function
  const add = (a, b) => a + b;
  
  // Create a curried version of the add function
  const curriedAdd = curry(add);
  
  // Test the curried function
  console.log(curriedAdd(5)(10)); // Output: 15
  console.log(curriedAdd(3)(7));  // Output: 10
  console.log(curriedAdd(20)(30)); // Output: 50  