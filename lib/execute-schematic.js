
const schematicItem = require('./schematic-item');
const fs = require('file-system');

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

generateFileStructure = (fileExtenstions, folderName, itemName) => {
    fileExtenstions.forEach(fileExtension => {
        const file = folderName + '/' + itemName + fileExtension;
        fs.writeFile(file, '', function(err) {});
    });
}

generateItem = (schematic, folderName, itemName) => {
    const availableFileExtenstions = [
        {name: '.en-US.json', schematic: [schematicItem.component, schematicItem.page]},
        {name: '.id-ID.json', schematic: [schematicItem.component, schematicItem.page]},
        {name: '.spec.js', schematic: [schematicItem.component, schematicItem.page]},
        {name: '.vue', schematic: [schematicItem.component, schematicItem.page, schematicItem.layout, schematicItem.store]}
    ];

    const fileExtensions = availableFileExtenstions
        .filter(fileExtension => fileExtension.schematic.includes(schematic))
        .map(fileExtension => fileExtension.name);

    generateFolderStructure(folderName);
    generateFileStructure(fileExtensions, folderName, itemName);
}

module.exports = {
    run
};
