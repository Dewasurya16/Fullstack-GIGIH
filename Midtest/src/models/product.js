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
    Produk : [{
      nama_produk: {
        type:String,
        required:true
      },
      harga_produk: {
        type:Number,
        required:true
      },
      Thumbnail_produk: {
        type:String,
        required:true
      },
      link_produk: {
        type:String,
        required:true
      },
  }]
})
const Videos = mongoose.model("product", videoSchema)

export default Videos;