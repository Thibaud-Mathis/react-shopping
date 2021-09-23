const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true, unique: true },
        products: [{
            productId: { type: String },
            quantity: { type: Number, default: 1 },
        }],
 
    },
    {
        // Create createdAt and UpdatedAt field
        timestamps: true,
    }
)

module.exports = mongoose.model("Cart", cartSchema)