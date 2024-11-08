// Task 3: Create Transaction Module

import { assets, getAssetById } from './asset.js'; // Import const and function from assets.js

export class Transaction { 
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
    } 

    // Adding execute method to the class
    execute() {
        const asset = getAssetById(this.assetId);
    
        if (!asset) {
            throw new Error(`Asset not found.`);
        }
    
        if (this.type === "buy") {
            asset.quantity += this.quantity; // Increasing quantity
            console.log(`Executed Buy: ${this.quantity} of ${asset.name}`);
        } else if (this.type === "sell") {
            if (asset.quantity < this.quantity) {
                throw new Error('Insufficient quantity for sale'); // Checking quantity available
            }
            asset.quantity -= this.quantity; // Decreasing quantity after checking if there's enough
            console.log(`Executed Sale: ${this.quantity} of ${asset.name}. Remaining: ${asset.quantity}`);
        } else {
            throw new Error("Invalid transaction type.");
        }
    }}