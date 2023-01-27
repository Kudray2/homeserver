import express from 'express';
import userController from '../controllers/user.controller.js';

export const usersRouter = express.Router();
usersRouter.route('/').get(userController.getAll).post(userController.add);

usersRouter
  .route('/:id')
  .get(userController.getOne)
  .delete(userController.remove);
