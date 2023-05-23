import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';

import { getAllUsers, deleteUser, updateUser } from '../controllers/users';


export default (router: express.Router) => {
  router.get('/api/users', authMiddleware, getAllUsers);
  router.delete('/api/users/:id', authMiddleware,  deleteUser);
  router.patch('/api/users/:id', authMiddleware, updateUser);
};