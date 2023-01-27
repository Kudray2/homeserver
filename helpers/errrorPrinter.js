import chalk from 'chalk';

const p = console.log;
export function errorPrinter(errorMessage) {
  p(chalk.redBright(`${errorMessage}`));
}
