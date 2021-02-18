import express from 'express';

import { getHealthDetail, createHealthDetail } from '../controllers/healthDetail.js';

const router = express.Router();

router.get('/', getHealthDetail);
router.post('/', createHealthDetail);

export default router;