import musicModel from '../model/music.js';

const index = (req, res) => {
  res.json({
    message: 'Halo, ini adalah API untuk playlist musik kamu, silahkan gunakan API yang tersedia',
    API: [
      {
        method: 'POST',
        endpoint : '/add',
        body: {
          title : "required",
          artist : "required",
          url: "required",
        }
      },
      {
        method: 'GET',
        endpoint : '/play/:title',
      },
      {
        method: 'GET',
        endpoint : '/list',
      },
      {
        method: 'GET',
        endpoint : '/count/:title',
      },
      {
        method: 'GET',
        endpoint : '/sort',
      },
    ]
  });
};

// Add song to playlist
const addSong = (req, res) => {
  const { title, artist, url } = req.body;
  const newSong = { title, artist, url, played: 0 };
  musicModel.push(newSong);
  res.json({ message: 'message' });
};

// Play song from playlist
const playSong = (req, res) => {
  const { title } = req.params;
  const song = musicModel.find((song) => song.title === title);
  if (song) {
    song.played += 1;
    res.json(song);
  } else {
    res.json({ message: `Musik ${title} tidak ditemukan` });
  }
};

// Get List of songs from your playlist
const getList = (req, res) => {
  res.json(musicModel);
};

// Track song play count in the playlist
const trackSong = (req, res) => {
  const { title } = req.params;
  const song = musicModel.find((song) => song.title === title);
  if (song) {
    res.json({ played: song.played });
  } else {
    res.json({ message: `Musik ${title} tidak ditemukan` });
  }
};
// Add feature to Get list of songs to be sorted by most played
const sortSong = (req, res) => {
  const sortedMusic = musicModel.sort((a, b) => b.played - a.played);
  res.json(sortedMusic);
};

export default {
  addSong,
  playSong,
  getList,
  trackSong,
  sortSong,
  index,
}