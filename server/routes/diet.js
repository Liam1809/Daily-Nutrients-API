import express from "express";
import authentication from '../middleware/authentication.js';

import { getDietPost, createDietPost, updateDietPost, likeDietPost, deleteDietPost } from '../controllers/diet.js';
const router = express.Router();

router.get('/', getDietPost);
router.post('/', authentication, createDietPost);
router.patch('/:id', authentication, updateDietPost);
router.patch('/:id/likeDietPost', authentication, likeDietPost);
router.delete('/:id', authentication, deleteDietPost);


export default router;