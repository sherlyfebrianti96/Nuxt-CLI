
const schematicItem = require('./general/schematic-item');
const fs = require('file-system');
const availableFileExtenstions = require('./general/available-file-extensions');
const generateFileContent = require('./generate-file-content');
const chalk = require('chalk');

const log = console.log;
const textColorSuccess = chalk.green;

run = (schematic, name) => {
    log('\nStart Generating the ' + schematic + '...');
    log(schematic + ' Name : ', name);
    log('\n');
    const nameChunks = name.split('/');
    switch (true) {
        case (schematic === schematicItem.component) :
            // generate folder and files for component
            generateComponent(nameChunks);
            break;
        case (schematic === schematicItem.layout) :
            // generate folder and files for layout
            generateLayout(nameChunks);
            break;
        case (schematic === schematicItem.page) :
            // generate folder and files for page
            generatePage(nameChunks);
            break;
        case (schematic === schematicItem.store) :
            // generate folder and files for store
            generateStore(nameChunks);
            break;
        default:
            // do nothing when schematic is random
            break;
    }
    log('-------------------------------------------------------');
    log(textColorSuccess(schematic + ' has been generated successfully.'));
    log('-------------------------------------------------------\n\n');
}

generateComponent = (nameChunks) => {
    const itemName = nameChunks.join('-');
    const itemFolder = nameChunks.slice(0, -1).join('/');
    const folderName = 'components/' + itemFolder + '/' + itemName;

    generateItem(schematicItem.component, folderName, itemName, nameChunks)
}

generatePage = (nameChunks) => {
    const itemName = nameChunks[nameChunks.length - 1];
    const itemFolder = nameChunks.slice(0, -1).join('/');
    const folderName = 'pages/' + itemFolder + '/' + itemName;

    generateItem(schematicItem.page, folderName, itemName, nameChunks)
}

generateLayout = (nameChunks) => {
    const itemName = nameChunks.join('-');
    const folderName = 'layouts/';

    generateItem(schematicItem.layout, folderName, itemName, nameChunks)
}

generateStore = (nameChunks) => {
    const itemName = nameChunks.join('/');
    const folderName = 'store/';

    generateItem(schematicItem.store, folderName, itemName, nameChunks)
}

generateFolderStructure = (folderName) => {
    fs.mkdir(folderName);
}

generateFileStructure = (schematic, folderName, itemName, nameChunks) => {
    availableFileExtenstions
        .filter(fileExtension => fileExtension.schematic.includes(schematic))
        .forEach(fileExtension => {
            const file = folderName + '/' + itemName + fileExtension.name;
            const content = generateFileContent.run(schematic, folderName, itemName, nameChunks, fileExtension.alias);
            fs.writeFile(file, content, function(err) {});
        });
}

generateItem = (schematic, folderName, itemName, nameChunks) => {
    generateFolderStructure(folderName);
    generateFileStructure(schematic, folderName, itemName, nameChunks);
}

module.exports = {
    run
};
