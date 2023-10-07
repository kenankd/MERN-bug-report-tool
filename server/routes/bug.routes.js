import express from 'express';
import { getAllBugs } from '../controllers/bug.controller.js';
const router = express.Router();

router.get('/',getAllBugs);

export default router;