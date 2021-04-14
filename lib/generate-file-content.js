
const schematicItem = require('./general/schematic-item');
const generateMainFileContentLayout = require('./generate-main-file-content-layout');
const generateMainFileContentComponent = require('./generate-main-file-content-component');
const generateMainFileContentPage = require('./generate-main-file-content-page');
const generateEnI18nFileContent = require('./generate-en-i18n-file-content');
const generateIdI18nFileContent = require('./generate-id-i18n-file-content');
const generateTestFileContent = require('./generate-test-file-content');
const generateMainFileContentStore = require('./generate-main-file-content-store');

run = (schematic, folderName, itemName, nameChunks, fileType) => {
    let content = '';

    switch(true) {
        case (fileType === 'enI18nFile') :
            // generate .en-US.json file
            content = generateEnI18nFileContent.run();
            break;
        case (fileType === 'idI18nFile') :
            // generate .id-ID.json file
            content = generateIdI18nFileContent.run();
            break;
        case (fileType === 'testFile') :
            // generate .spec.js file
            content = generateTestFileContent.run(schematic, folderName, itemName, nameChunks);
            break;
        case (fileType === 'mainFile') :
            // generate .vue file
            content = generateMainFileContent(schematic, folderName, itemName, nameChunks);
            break;
        default:
            break;
    }

    return content;
};

const generateMainFileContent = (schematic, folderName, itemName, nameChunks) => {
    switch(true) {
        case (schematic === schematicItem.component) :
            // generate file content for component
            return generateMainFileContentComponent.run(schematic, folderName, itemName);
        case (schematic === schematicItem.layout) :
            // generate file content for layout
            return generateMainFileContentLayout.run(schematic, folderName, itemName);
        case (schematic === schematicItem.page) :
            // generate file content for page
            return generateMainFileContentPage.run(schematic, folderName, itemName, nameChunks);
        case (schematic === schematicItem.store) :
            // generate file content for store
            return generateMainFileContentStore.run(schematic, folderName, itemName, nameChunks);
        default:
            // do nothing when schematic is random
            return '';
    }
}

module.exports = {
    run
};