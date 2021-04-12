
const pascalCase = require('./general/pascal-case');

run = (schematic, folderName, itemName) => {
    const content = [];

    content.push('<template>');
    content.push('  <div>');
    content.push(`    ${schematic} content.`);
    content.push('    <Nuxt />');
    content.push('  </div>');
    content.push('</template>\n');

    content.push('<script lang="ts">');
    content.push('export default {');
    content.push(`  name: \'Layout${pascalCase(itemName)}\',`);
    content.push('}');
    content.push('</script>\n');

    content.push('<style lang="scss" scoped>');
    content.push('/* Styles for this component */');
    content.push('</style>\n');

    content.push('');

    return content.join('\n');
};

module.exports = {
    run
};
