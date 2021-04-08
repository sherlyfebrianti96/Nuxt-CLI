
/* Clear the terminal when running the Nuxt CLI */
const clear = require('clear');
clear();

/* CLI Welcome Greetings */
const welcome = require('./lib/welcome');
welcome();

/* User Input Interaction */
const inquirer = require('./lib/inquirer.js');
inquirer();
