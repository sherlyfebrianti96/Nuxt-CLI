
const pascalCase = require('./general/pascal-case');
const generateMainFileContentComponent = require('./generate-main-file-content-component');

run = (schematic, folderName, itemName, nameChunks) => {
    const content = generateMainFileContentComponent.run(schematic, folderName, itemName);
    const wordsTobeReplace = `export default class ${pascalCase(itemName)} extends Vue {`;
    const replacementWords = `export default class Page${pascalCase(nameChunks.join('/'))} extends Vue {`;
    return content.replace(wordsTobeReplace, replacementWords);
};

module.exports = {
    run
};
