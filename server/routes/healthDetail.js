import express from 'express';

import { getHealthDetails, createHealthDetail, updateHealthDetail, deleteHealthDetail } from '../controllers/healthDetail.js';

import authentication from '../middleware/authentication.js';

const router = express.Router();

router.get('/', authentication, getHealthDetails);
router.post('/', authentication, createHealthDetail);
router.patch('/:id', authentication, updateHealthDetail);
router.delete('/:id', authentication, deleteHealthDetail);

export default router;