// Task 1: Create the asset Module

// Define an array of assets 
export const assets = [
    { id: 1, name: "Amazon Stock", type: "stock", price: 100, quantity: 100 },
    { id: 2, name: "Tesla Stock", type: "stock", price: 500, quantity: 50 },
    { id: 3, name: "Bond", type: "bond", price: 1000, quantity: 30 },
    { id: 4, name: "Google Stock", type: "stock", price: 230, quantity: 200 },
];

// Function to get asset details by ID
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}
