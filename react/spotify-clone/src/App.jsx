import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0);

  return (
  <>

      <div className="flex">
        <nav className="side__nav">
          <div className="nav">
            <div className="judul">
              <img
                className="Gambar"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
                alt=""
              />
            </div>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-house"></i>
                  <span className="font__montserrat">Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <span className="font__montserrat">Search</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-music"></i>
                  <span className="font__montserrat">Your Library</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb__16 font__roboto">Playlist</p>
            <div className="flex mb__16">
              <div className="box__white">
                <FontAwesomeIcon icon={faCoffee} style={{color: "red"}}>

                </FontAwesomeIcon>
              </div>
              <p className="align-center font__montserrat">Create Playlist</p>
            </div>
            <div className="flex mb__16">
              <div className="box__white">
                <i className="fa-solid fa-heart" style={{color: "red"}} ></i>
              </div>
              <p className="align-center font__montserrat">Your Playlist</p>
            </div>
            <hr />
          </div>
          <div className="album">
            <p className="album1">Dangdut Pantura</p>
            <p className="album2">sirah mumet butuh goyang</p>
            <p className="album3">AKU CIDRO</p>
            <p className="album4">Album SENENG</p>
            <p className="album5">ASIK ASIK JOS</p>
          </div>
        </nav>
        <main className="main">
          <div className="inside__main">
            <h1 className="h1">Playlist</h1>
            <div className="playlist flex">
              <div className="list__playlist">
                <img
                  className="fit__image"
                  src="https://i.scdn.co/image/ab67616d0000b273f0f64ce9f4f9d107c2663631"
                  alt="Spotify Minimal Playlist Album Cover Cyan Template | PosterMyWall"
                />
                <p className="title__song">Daily Mix 1</p>
                <p className="author__song">Deny Caknan</p>
              </div>
              <div className="list__playlist">
                <img
                  className="fit__image"
                  src="https://i.scdn.co/image/ab67616d0000b273ec138c0cfbd0533ecac1b847"
                  alt="Spotify Minimal Playlist Album Cover Cyan Template | PosterMyWall"
                />
                <p className="title__song">Daily Mix 2</p>
                <p className="author__song">Dangdut koplo</p>
              </div>
              <div className="list__playlist">
                <img
                  className="fit__image"
                  src="https://i.scdn.co/image/ab67616d00001e029c05904fcef8f5c96b930d1e"
                  alt="Spotify Minimal Playlist Album Cover Cyan Template | PosterMyWall"
                />
                <p className="title__song">Daily Mix 3</p>
                <p className="author__song">Author</p>
              </div>
              <div className="list__playlist">
                <img
                  className="fit__image"
                  src="https://i.scdn.co/image/ab67616d00001e0298b9c6456cc49671c3162d5a"
                  alt="Spotify Minimal Playlist Album Cover Cyan Template | PosterMyWall"
                />
                <p className="title__song">Daily Mix 4</p>
                <p className="author__song">Author</p>
              </div>
            </div>
            <div className="playlist flex">
              <div className="list__playlist">
                <img
                  className="fit__image"
                  src="https://i.scdn.co/image/ab67616d00001e02cd8af169a87017f27ea92288"
                  alt="Spotify Minimal Playlist Album Cover Cyan Template | PosterMyWall"
                />
                <p className="title__song">Daily Mix 5</p>
                <p className="author__song">Author</p>
              </div>
              <div className="list__playlist">
                <img
                  className="fit__image"
                  src="https://i.scdn.co/image/ab67616d0000b273d60708f0c10a2acf90175856"
                  alt="Spotify Minimal Playlist Album Cover Cyan Template | PosterMyWall"
                />
                <p className="title__song">Daily Mix 6</p>
                <p className="author__song">Author</p>
              </div>
              <div className="list__playlist">
                <img
                  className="fit__image"
                  src="https://thisis-images.scdn.co/37i9dQZF1DZ06evO3jueFn-default.jpg"
                  alt="Spotify Minimal Playlist Album Cover Cyan Template | PosterMyWall"
                />
                <p className="title__song">Daily Mix 7</p>
                <p className="author__song">Author</p>
              </div>
              <div className="list__playlist">
                <img
                  className="fit__image"
                  src="https://thisis-images.scdn.co/37i9dQZF1DZ06evO43UKBw-default.jpg"
                  alt="Spotify Minimal Playlist Album Cover Cyan Template | PosterMyWall"
                />
                <p className="title__song">Daily Mix 1</p>
                <p className="author__song">Author</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="footer">
        <div className="flex">
          <div className="albums">
            <img
              className="fit__image"
              src="https://i.scdn.co/image/ab67616d0000b2739ee128d96e66d7a02fdafc98"
              height="60px"
              width="60px"
              alt="Spotify Minimal Playlist Album Cover Cyan Template | PosterMyWall"
            />
            <div className="align-center">
              <p className="title__song">Teteg Ati</p>
              <p className="author__song">Damara-De</p>
            </div>
          </div>
          <div className="track">
            <div className="flex">
              <i className="fa-solid fa-shuffle"></i>
              <i className="fa-solid fa-backward"></i>
              <i className="fa-solid fa-play"></i>
              <i className="fa-solid fa-forward"></i>
              <i className="fa-solid fa-repeat"></i>
            </div>
            <div className="flex line">
              <span className="counter font__roboto">00:00</span>
              <div className="track__line"></div>
              <span className="counter font__roboto">05:54</span>
            </div>
          </div>
          <div className="volume">
            <i className="fa-solid fa-volume-high"></i>
            <div className="track__line"></div>
          </div>
        </div>
      </footer>
  </>
   
  );
}

export default App;
