
const schematicItem = require('./general/schematic-item');
const generateContentLayout = require('./generate-content-layout');

run = (schematic, folderName, itemName) => {
    let content = '';
    switch(true) {
        case (schematic === schematicItem.component) :
            // generate file content for component
            break;
        case (schematic === schematicItem.layout) :
            // generate file content for layout
            content = generateContentLayout.run(schematic, folderName, itemName);
            break;
        case (schematic === schematicItem.page) :
            // generate file content for page
            break;
        case (schematic === schematicItem.store) :
            // generate file content for store
            break;
        default:
            // do nothing when schematic is random
            break;
    }

    return content;
};

module.exports = {
    run
};