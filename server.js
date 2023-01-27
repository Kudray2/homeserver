import express from 'express';
import { mongoConnect } from './helpers/dbConnect.js';
import { mainRouter } from './routes/main.router.js';
import cors from 'cors';
import morgan from 'morgan';
import { errorPrinter } from './helpers/errrorPrinter.js';
import chalk from 'chalk';
const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use('/', mainRouter);
app.use(morgan('dev'));

mongoConnect();

try {
  // eslint-disable-next-line no-console
  app.listen(PORT, () =>
    console.log(
      chalk.bgGreen.white.bold('Success!'),
      chalk.yellow(' -= server started on:', PORT, '=-'),
    ),
  );
} catch (error) {
  errorPrinter(error);
}
