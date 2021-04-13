
const pascalCase = require('./general/pascal-case');
const contentHtmlTemplate = require('./content/html-template');
const contentStyleTemplate = require('./content/style-template');

run = (schematic, folderName, itemName, nameChunks, fileType) => {
    const content = [];

    content.push(contentHtmlTemplate.run(schematic));

    content.push('<script lang="ts">');
    content.push('export default {');
    content.push(`  name: \'Layout${pascalCase(itemName)}\',`);
    content.push('}');
    content.push('</script>\n');

    content.push(contentStyleTemplate.run(schematic));

    content.push('');

    return content.join('\n');
};

module.exports = {
    run
};
