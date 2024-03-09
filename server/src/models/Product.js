import mongoose from "mongoose";

const Product = new mongoose.Schema({
    name:  {type: String, required: true},
    description:  {type: String},
    image:  {type: String},
    price: {type: Number, required: true},
    avaliable: {type: Number, required: true},
    shop_id: {type: mongoose.Schema.Types.ObjectId, ref: "Shop", required: true}
})


export default mongoose.model("Product", Product);
