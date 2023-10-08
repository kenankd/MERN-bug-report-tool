import express from 'express';
import { getAllBugs,createBug, changeStatus, getBugsByUserId } from '../controllers/bug.controller.js';

const router = express.Router();

router.get('/',getAllBugs);

router.post('/create',createBug);

router.put('/:id/status',changeStatus);

router.get('/:userId',getBugsByUserId)

export default router;