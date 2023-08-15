import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineSend } from 'react-icons/ai';
const detailProduct = () => {

  const { id } = useParams();

  const [product, setProduct] = useState({})
  const [comment, setComment] = useState({})
  const [video, setVideo] = useState({})
  const [newComment, setNewComment] = useState()

  const changeForm = (e) => {
    e.preventDefault();
    setNewComment({
      ...newComment, [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    axios.get(`http://localhost:3000/${id}`)
      .then(res => {
        setProduct(res.data[0].products)
        setComment(res.data[0].comments)
        setVideo(res.data[0])
        setNewComment({...newComment, videoId: res.data[0].video_id})
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  const addComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/comment/post", {
        username: newComment.username,
        comment: newComment.komentar,
        videoId: newComment.videoId
      });
    } catch (error) {
      console.log(error);
    }
    finally {
      window.location.reload();
    }
  }

  console.log(newComment)

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex gap-4">
        <div className="basis-1/6 flex flex-col gap-y-4">
          <h1 className='font-medium text-xl'>
            Product Detail
          </h1>
          {
            product.length > 0 ? product.map((product, key) => {
              return (
                <div key={key} className='border rounded-md'>
                  <img src={product.thumbnail_product} alt={product.thumbnail_product} />
                  <div className='p-2'>
                    <p className='font-medium text-sm pb-1'>
                      {product.product_name}
                    </p>
                    <p className='text-md'>
                      {rupiah(product.price_product)}
                    </p>
                  </div>
                </div>
              )
            }) : 
            <div>
              <p className='text-left font-medium'>Tidak ada produk</p>
            </div>
          }
        </div>
        <div className="flex flex-col basis-5/6 ">
          <div className='mb-8'>
            <h2 className="text-2xl pb-4">
              {video.video_title}
            </h2>
            <p className="pb-2 font-bold">
              {video.shop_name}
            </p>
            <iframe src={`https://www.youtube.com/embed/${video?.thumbnail}?autoplay=0&mute=0&enablejsapi=1&rel=0`} frameBorder="0" className='min-h-[500px] w-full'></iframe>
          </div>
          <div className="basis-1/4">
            <h2 className='text-2xl font-medium mb-2'>Komentar</h2>
            <div className="flex border rounded-md flex-col ">
              <form onSubmit={addComment} className="w-full px-3 mb-4 pt-2 pb-2 border-b flex">
                <div className="flex bg-white mr-4">
                  <div className='mr-4 self-end'>
                    <label htmlFor="" className='mr-4'>Username :</label>
                    <input type="text" name='username' onChange={(e) => changeForm(e)} className='border-b-2 pl-3' placeholder='dimasseto.id' />
                  </div>
                  <div className='self-end'>
                    <label htmlFor="" className='mr-4'>Komentar :</label>
                    <input type="text" name='komentar' onChange={(e) => changeForm(e)} className='border-b-2 pl-3' placeholder='' />
                  </div>
                </div>
                <button type='submit' className='btn ml-2 bg-slate-700 p-2 rounded-md'>
                  <AiOutlineSend size={16} color='white' />
                </button>
              </form>
              <div className='px-3'>
                {
                  comment.length > 0 ? comment.map((comment, key) => {
                    return (
                      <div key={key} className="mb-1">
                        <span className='mr-3 text-sm font-medium'>{comment.username}</span>
                        <span className="text-sm">{comment.comment}</span>
                      </div>
                    )
                  }) : ""
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default detailProduct;