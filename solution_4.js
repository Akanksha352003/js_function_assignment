function calculateTax(income) {
    // Define a closure that determines the tax rate based on income
    function getTaxRate(income) {
      if (income <= 5000) {
        return 0.05; // 5% tax rate
      } else if (income <= 10000) {
        return 0.10; // 10% tax rate
      } else if (income <= 20000) {
        return 0.15; // 15% tax rate
      } else {
        return 0.20; // 20% tax rate
      }
    }
  
    // Use the closure to determine the tax rate and calculate the tax
    const taxRate = getTaxRate(income);
    return income * taxRate;
  }
  
  // Test the function with various incomes
  console.log(calculateTax(3000));   // Output: 150 (5% of 3000)
  console.log(calculateTax(8000));   // Output: 800 (10% of 8000)
  console.log(calculateTax(15000));  // Output: 2250 (15% of 15000)
  console.log(calculateTax(25000));  // Output: 5000 (20% of 25000)
  