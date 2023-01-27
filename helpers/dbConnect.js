/* eslint-disable no-console */
import chalk from 'chalk';
import mongoose from 'mongoose';
import { MONGO_PORT, MONGO_URI } from '../config/dbConfig.js';

export function mongoConnect() {
  // add the following to prepare for mongoose 7 and prevent warning at script starts
  mongoose.set('strictQuery', true);
  mongoose.connect(MONGO_URI, error => {
    if (error) console.error('ERROR++>', error);
    console.log(
      chalk.bgGreen.white.bold('Success!'),
      chalk.yellowBright(' -= Mongo connected on', MONGO_PORT, '=-'),
    );
  });
}
