import { 
  deleteContact,
  getSingleContact,
  updateContact 
} from './../controllers/contactController';

import { Router } from "express";

import { getAllContacts, createContact } from '../controllers/contactController';
import { TokenValidation } from '../middlewares/authMiddleware';
import { signup, signin } from '../controllers/authController';

const router = Router();

// Auth
router.post('/signup', signup);
router.post('/signin', signin);

// Private Routes (Contact)
router.get('/getContacts', TokenValidation, getAllContacts);
router.get('/getContact/:id', TokenValidation, getSingleContact);
router.post('/createContact', TokenValidation, createContact);
router.put('/updateContact/:id', TokenValidation, updateContact);
router.delete('/deleteContact/:id', TokenValidation, deleteContact);

export default router;