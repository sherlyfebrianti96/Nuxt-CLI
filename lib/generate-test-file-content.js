
const pascalCase = require('./general/pascal-case');
const schematicItem = require('./general/schematic-item');

run = (schematic, folderName, itemName, nameChunks) => {
    const content = [];
    let elementItemName = pascalCase(itemName);
    if (schematic === schematicItem.page) {
        elementItemName = `Page${pascalCase(nameChunks.join('/'))}`;
    }

    content.push('import { mount, shallowMount } from \'@vue/test-utils\';');
    content.push(`import ${elementItemName} from '~/${folderName}/${itemName}';\n`);

    content.push(`describe(\'${nameChunks.map(item => pascalCase(item)).join(' ')} ${schematic}\', () => {`);
    content.push('  test(\'is a Vue instance\', () => {');
    content.push(`    const wrapper = mount(${elementItemName});`);
    content.push('    expect(wrapper.vm).toBeTruthy();');
    content.push('  });\n');
    content.push('  test(\'should load component successfully\', () => {');
    content.push(`    const wrapper = shallowMount(${elementItemName});`);
    content.push('    expect(wrapper.vm).toBeTruthy();');
    content.push('  });');
    content.push('});');

    content.push('');

    return content.join('\n');
};

module.exports = {
    run
};
