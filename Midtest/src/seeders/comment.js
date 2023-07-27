import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    videoId : {
        type:String,
        required:true
    },
    username : {
        type:String,
        required:true
    },
    comment : {
        type:String,
        required:true
    },
})
const Product = mongoose.model("comment",productSchema)

export default Product;