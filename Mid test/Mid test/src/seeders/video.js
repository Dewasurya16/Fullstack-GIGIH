import mongoose from 'mongoose';
const videoSchema = new mongoose.Schema({
    video_id:{
      type:String,
      required:true
    },
    thumbnail:{
      type:String,
      required:true
    },
    shop_name:{
      type:String,
      required:true
    },
    video_title:{
      type:String,
      required:true
    },
    product : [{
      product_name: {
        type:String,
        required:true
      },
      price_product: {
        type:Number,
        required:true
      },
      thumbnail_product: {
        type:String,
        required:true
      },
      link_product: {
        type:String,
        required:true
      },
  }]
})
const Product = mongoose.model("videos", videoSchema)

export default Product;