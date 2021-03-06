
const chalk = require('chalk');
const figlet = require('figlet');
const terminalLink = require('terminal-link');

const log = console.log;
const textColorPrimary = chalk.cyan;
const textColor = chalk.gray;

const version = '2.0.2';
const classComponentLink = terminalLink('Component-Class', 'https://class-component.vuejs.org');

module.exports = () => {
    log(textColor('\n\n=============================================================='));
    log(textColorPrimary(
        figlet.textSync('Nuxt CLI', { horizontalLayout: 'full' })
    ));
    log(textColor('\nNuxt Cli : ', version));
    log(textColor('\nNuxt CLI will help you to auto-generate your ' + classComponentLink + '.\n'));
    log(textColor('=============================================================='));
    log(textColor('\n'));
}
