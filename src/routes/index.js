import {add } from '../controllers/user.js'
import express from 'express';
const router = express.Router();

router.get('/', add);

export default router;
