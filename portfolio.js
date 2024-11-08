// Task 2: Create the Portfolio Module

import { assets } from './asset.js'; // Import const assets from assets.js

// Function to calculate total value 
export function calculatePortfolioValue() {
    let totalValue = 0;  // Variable to store the total value
    assets.forEach(asset => {
        totalValue += asset.price * asset.quantity;  // Add each asset's on the forEach loop value to the total
    });
    return totalValue; 
}

// Calculate  allocation percentage of each asset 
export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalValue * 100).toFixed(2) + '%'
    }));
}
