import express from 'express';
import { getAllBugs,createBug } from '../controllers/bug.controller.js';
const router = express.Router();

router.get('/',getAllBugs);
router.post('/create',createBug);
export default router;