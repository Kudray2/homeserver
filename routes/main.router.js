import express from 'express';
import { usersRouter } from './user.router.js';

// eslint-disable-next-line import/prefer-default-export
export const mainRouter = express().use('/users', usersRouter);

