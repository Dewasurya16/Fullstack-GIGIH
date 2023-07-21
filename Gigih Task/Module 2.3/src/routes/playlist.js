import express from 'express';
import playlistController from '../controller/playlistController.js';

const router = express.Router();
// Index Route
router.get('/', playlistController.index);

// Add song to playlist
router.post('/add', playlistController.addSong);

// Play song from playlist
router.get('/play/:title', playlistController.playSong);

// Get List of songs from your playlist
router.get('/list', playlistController.getList);

// Track song play count in the playlist
router.get('/count/:title', playlistController.trackSong);

// Add feature to Get list of songs to be sorted by most played
router.get('/sort', playlistController.sortSong);

export default router;