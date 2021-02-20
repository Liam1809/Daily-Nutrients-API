import express from 'express';

import { getHealthDetails, getHealthDetailById, createHealthDetail, updateHealthDetail, deleteHealthDetail } from '../controllers/healthDetail.js';

const router = express.Router();

router.get('/', getHealthDetails);
router.get('/:id', getHealthDetailById);
router.post('/', createHealthDetail);
router.patch('/:id', updateHealthDetail);
router.delete('/:id', deleteHealthDetail);

export default router;