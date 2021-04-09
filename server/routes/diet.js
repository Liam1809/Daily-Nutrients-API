import express from "express";
import authentication from '../middleware/authentication.js';

import { getPost, createPost, updatePost, deletePost } from '../controllers/diet.js';
const router = express.Router();

router.get('/', authentication, getPost);
router.post('/', authentication, createPost);
router.patch('/:id', authentication, updatePost);
router.delete('/:id', authentication, deletePost);


export default router;