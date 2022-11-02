import { Router } from "express";

import { signup, signin } from '../controllers/authController';
import { home } from '../controllers/privateController';

import { TokenValidation } from '../middlewares/authMiddleware';

const router = Router();

// Auth
router.post('/signup', signup);
router.post('/signin', signin);

// Private
router.get('/home', TokenValidation, home)

export default router;