import express from 'express';
import playlistRouter from './routes/playlist.js';

const app = express();

app.use(express.json());
app.use('/', playlistRouter);

app.use((err, res) => {
  res.json({
    message: err.message
  })
})

app.listen(3000, () => {
  console.log(`Server berhasil di running http://localhost:3000`);
})