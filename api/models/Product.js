const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema(
    {
        title: { type: String, require: true},
        img: { type: String, require: true},
        price: {type: Number, require: true},
        caregory: {type: String, required:true},
    },
    { timestamps :true}
)

const Product = mongoose.model("categories", ProductSchema);
module.exports = Product;