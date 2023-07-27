import express from 'express';
import Controller from "../controllers/controller.js";
const router = express.Router();
// List all videos
router.get('/', Controller.index);

// Get all products 
router.get('/comment', Controller.commentList);

// Get all comments 
router.get('/product', Controller.productList);

// Post a comment to a video
router.post('/comment/post', Controller.postComment);

// Select 1 video and return video, product list, and comment list
router.get('/:id', Controller.selectVideoById);

export default router;