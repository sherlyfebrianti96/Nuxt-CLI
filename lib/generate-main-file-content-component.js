
const pascalCase = require('./general/pascal-case');
const contentHtmlTemplate = require('./content/html-template');
const contentStyleTemplate = require('./content/style-template');

run = (schematic, folderName, itemName) => {
    const content = [];

    content.push(`<i18n src="./${itemName}.en-US.json"></i18n>`);
    content.push(`<i18n src="./${itemName}.id-ID.json"></i18n>\n`);

    content.push(contentHtmlTemplate.run(schematic));

    content.push('<script lang="ts">');
    content.push('import Vue from \'vue\';');
    content.push('import { Component, Prop } from \'nuxt-property-decorator\';\n');
    content.push('/* Class components: https://class-component.vuejs.org/ */');
    content.push('/* Nuxt Property Decorator : https://github.com/nuxt-community/nuxt-property-decorator */');
    content.push('@Component');
    content.push(`export default class ${pascalCase(itemName)} extends Vue {`);
    content.push('  /* Props */');
    content.push('  @Prop({');
    content.push('    default: \'\',');
    content.push('  }) readonly yourPropVariable: string;\n');
    content.push('  /* Data */');
    content.push('  yourData = \'\';\n');
    content.push('  /* Computed */');
    content.push('  get something(): string {');
    content.push('    return this.yourData;');
    content.push('  }\n');
    content.push('  /* Methods */');
    content.push('  yourMethod() {');
    content.push('    return;');
    content.push('  }');
    content.push('}');
    content.push('</script>\n');

    content.push(contentStyleTemplate.run(schematic));

    content.push('');

    return content.join('\n');
};

module.exports = {
    run
};
