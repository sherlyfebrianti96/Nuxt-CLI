
const inquirer = require('inquirer');
const rxjs = require('rxjs');

const configstore = import('./config-store.mjs');
const executeSchematic = require('./execute-schematic');
const schematicItem = require('./general/schematic-item');

let config;
configstore.then((result) => {
    config = result.default;
});

const prompts = new rxjs.Subject();
inquirer.prompt(prompts).ui.process.subscribe(
    (result) => {
        config.set(result.name, result.answer);
    },
    () => {
        // Do Something on error
    },
    () => {
        // Do something on complete
        executeSchematic.run(config.get('schematic'), config.get('itemName'));
    }
);

// modules
const askSchematic = () => {
    prompts.next({
        name: 'schematic',
        type: 'list',
        message: 'Choose what do you want to generate : ',
        choices: Object.values(schematicItem),
        validate: () => {
            return true
        }
    });
}

const askItemName = (config) => {
    prompts.next({
        name: 'itemName',
        type: 'input',
        message: 'Enter your preference name : \n (please use \'\/\' as the ancestor separator) \n',
        validate: (value) => {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your preference name.';
            }
        }
    });
}

module.exports = async () => {
    await askSchematic();
    await askItemName();
    await prompts.complete();
}
