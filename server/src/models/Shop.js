import mongoose from "mongoose";

const Shop = new mongoose.Schema({
    name:  {type: String, required: true, unique: true},
    address: {type: String, required: true}
})


export default mongoose.model("Shop", Shop);
