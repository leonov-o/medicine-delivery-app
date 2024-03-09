import mongoose from "mongoose";

const Order = new mongoose.Schema({
    order_id: {type: Number, required: true, unique: true},
    status: {type: String, default: "pending", required: true},
    customer_data: {
        address: {type: String, required: true},
        email: {type: String, required: true},
        phone: {type: String, required: true},
        name: {type: String, required: true},
    },
    order_details: [{
        product_id: {type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true},
    }],
    total_price: {type: Number, required: true},
});

export default mongoose.model("Order", Order);
