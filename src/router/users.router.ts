import express from 'express';
import authMiddleware from '../middlewares/auth.middleware';

import {
  getAllUsers,
  deleteUser,
  updateUser,
} from '../controllers/users.controller';

export default (router: express.Router) => {
  router.get('/api/users', authMiddleware, getAllUsers);
  router.delete('/api/users/:id', authMiddleware, deleteUser);
  router.patch('/api/users/:id', authMiddleware, updateUser);
};
