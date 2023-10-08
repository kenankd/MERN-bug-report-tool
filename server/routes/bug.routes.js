import express from 'express';

import { getAllBugs,createBug, changeStatus} from '../controllers/bug.controller.js';
import authMiddleware from '../middleware/auth.middleware.js'

const router = express.Router();

router.get('/',authMiddleware,getAllBugs);

router.post('/create',authMiddleware,createBug);

router.put('/:id/status',authMiddleware,changeStatus);

export default router;