
const schematicItem = require('./general/schematic-item');
const generateMainFileContentLayout = require('./generate-main-file-content-layout');
const generateMainFileContentComponent = require('./generate-main-file-content-component');
const generateMainFileContentPage = require('./generate-main-file-content-page');

run = (schematic, folderName, itemName, fileType) => {
    let generator = {
        run: (schematic, folderName, itemName) => {
            return '';
        }
    };

    switch(true) {
        case (fileType === 'enI18nFile') :
            // generate .en-US.json file
            break;
        case (fileType === 'idI18nFile') :
            // generate .id-ID.json file
            break;
        case (fileType === 'testFile') :
            // generate .spec.js file
            break;
        case (fileType === 'mainFile') :
            // generate .vue file
            generator = generateMainFileContent(schematic);
            break;
        default:
            break;
    }

    return generator.run(schematic, folderName, itemName);
};

const generateMainFileContent = (schematic) => {
    switch(true) {
        case (schematic === schematicItem.component) :
            // generate file content for component
            return generateMainFileContentComponent;
        case (schematic === schematicItem.layout) :
            // generate file content for layout
            return generateMainFileContentLayout;
        case (schematic === schematicItem.page) :
            // generate file content for page
            return generateMainFileContentPage;
        case (schematic === schematicItem.store) :
            // generate file content for store
            return
        default:
            // do nothing when schematic is random
            return;
    }
}

module.exports = {
    run
};