import express from 'express';

import { getHealthDetails, getHealthDetailById, createHealthDetail } from '../controllers/healthDetail.js';

const router = express.Router();

router.get('/', getHealthDetails);
router.get('/:id', getHealthDetailById);
router.post('/', createHealthDetail);

export default router;