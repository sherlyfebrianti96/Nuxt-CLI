
const schematicItem = require('./general/schematic-item');
const fs = require('file-system');
const availableFileExtenstions = require('./general/available-file-extensions');
const generateFileContent = require('./generate-file-content');

run = (schematic, name) => {
    console.log('\nStart Generating the ' + schematic + '...');
    console.log(schematic + ' Name : ', name);
    console.log('\n');
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
}

generateComponent = (nameChunks) => {
    const itemName = nameChunks.join('-');
    const itemFolder = nameChunks.slice(0, -1).join('/');
    const folderName = 'components/' + itemFolder + '/' + itemName;

    generateItem(schematicItem.component, folderName, itemName)
}

generatePage = (nameChunks) => {
    const itemName = nameChunks[nameChunks.length - 1];
    const itemFolder = nameChunks.slice(0, -1).join('/');
    const folderName = 'pages/' + itemFolder + '/' + itemName;

    generateItem(schematicItem.page, folderName, itemName)
}

generateLayout = (nameChunks) => {
    const itemName = nameChunks.join('-');
    const folderName = 'layouts/';

    generateItem(schematicItem.layout, folderName, itemName)
}

generateStore = (nameChunks) => {
    const itemName = nameChunks.join('/');
    const folderName = 'store/';

    generateItem(schematicItem.store, folderName, itemName)
}

generateFolderStructure = (folderName) => {
    fs.mkdir(folderName);
}

generateFileStructure = (schematic, fileExtenstions, folderName, itemName) => {
    fileExtenstions.forEach(fileExtension => {
        const file = folderName + '/' + itemName + fileExtension;
        const content = generateFileContent.run(schematic, folderName, itemName);
        console.log('content : ', content);
        fs.writeFile(file, content, function(err) {});
    });
}

generateItem = (schematic, folderName, itemName) => {
    const fileExtensions = availableFileExtenstions
        .filter(fileExtension => fileExtension.schematic.includes(schematic))
        .map(fileExtension => fileExtension.name);

    generateFolderStructure(folderName);
    generateFileStructure(schematic, fileExtensions, folderName, itemName);
}

module.exports = {
    run
};
