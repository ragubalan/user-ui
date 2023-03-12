import {add, confirm } from '../controllers/user.js'
import express from 'express';
const router = express.Router();

router.get('/', add);
router.post('/', confirm);

export default router;
