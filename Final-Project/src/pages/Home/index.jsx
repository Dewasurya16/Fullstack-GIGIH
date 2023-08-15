import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:3000/');
    setVideo(response.data);
  }
  return (
    <div className="max-w-5xl mx-auto">
      <div className='flex flex-wrap'>
        {
          video.length > 0 ? video.map((video, index) => {
            return (
              <div key={index} className="basis-1/4 relative p-2 ">
                <Link to={`/detail/${video.video_id}`}>
                  <div className='border rounded-md'>
                    <iframe src={`https://www.youtube.com/embed/${video.thumbnail}?autoplay=0&mute=0&enablejsapi=1&rel=0`} frameBorder="0" className='min-h-[345px]'></iframe>
                    <div className="pt-4">
                      <h2 className='text-md font-medium text-black px-2 pb-1 leading-4'>{video.video_title}</h2>
                      <p className='text-sm text-black px-2 pb-2'>{video.shop_name}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }) : ""
        }

      </div>
    </div>
  )
}

export default Home