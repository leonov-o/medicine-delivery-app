import mongoose from "mongoose";

const Coupon = new mongoose.Schema({
    code: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    description: {type: String},
    discount: {type: Number, required: true}
})


export default mongoose.model("Coupon", Coupon);
