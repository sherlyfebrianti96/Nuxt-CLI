
const pascalCase = require('./general/pascal-case');
const generateMainFileContentComponent = require('./generate-main-file-content-component');

run = (schematic, folderName, itemName) => {
    const content = generateMainFileContentComponent.run(schematic, folderName, itemName);
    const wordsTobeReplace = `export default class ${pascalCase(itemName)} extends Vue {`;
    folderName = folderName.replace('pages', 'page');
    const replacementWords = `export default class ${pascalCase(folderName)} extends Vue {`;
    return content.replace(wordsTobeReplace, replacementWords);
};

module.exports = {
    run
};
