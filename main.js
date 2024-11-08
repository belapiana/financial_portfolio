// Task 4: Create the Main Application

// Importing from other pages
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Console log initial values
console.log("Initial Portfolio Value: $" + calculatePortfolioValue());
console.log("Initial Portfolio Allocation:");
console.log(getPortfolioAllocation());

// Testing
try {
    let buyTransaction = new Transaction(1, 'buy', 35); // Buying Amazon Stock 
    buyTransaction.execute();

    let sellTransaction = new Transaction(2, 'sell', 20); // Selling Tesla Stock
    sellTransaction.execute();

    // Console.log portfolio value and allocation
    console.log("Updated Portfolio Value: $" + calculatePortfolioValue());
    console.log("Updated Portfolio Allocation:");
    console.log(getPortfolioAllocation());
} catch (error) {
    console.error("Transaction Error:", error.message);
}

