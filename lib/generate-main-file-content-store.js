
const pascalCase = require('./general/pascal-case');
const contentHtmlTemplate = require('./content/html-template');
const contentStyleTemplate = require('./content/style-template');

run = (schematic, folderName, itemName, nameChunks) => {
    const content = [];

    content.push('import { Module, VuexModule, Mutation, Action } from \'vuex-class-modules\';\n');
    content.push('/* Vuex-class-modules : https://nicedoc.io/gertqin/vuex-class-modules */');
    content.push('/* Sample : https://github.com/frankshaka/vuex-class-modules-sample */');
    content.push('@Module');
    content.push(`export class ${pascalCase(nameChunks.join('/'))}Module extends VuexModule {`);
    content.push('  /* State */');
    content.push('  private myLocalState: string;\n');
    content.push('  /* Getters */');
    content.push('  get myLocal(): string {');
    content.push('    return this.myLocalState;');
    content.push('  }\n');
    content.push('  /* Actions */');
    content.push('  @Action');
    content.push('  myAction() {');
    content.push('    this.myMutation();');
    content.push('  }\n');
    content.push('  /* Mutations */');
    content.push('  @Mutation');
    content.push('  myMutation() {');
    content.push('    this.myLocalState = \'\';');
    content.push('  }');
    content.push('}');

    content.push('');

    return content.join('\n');
};

module.exports = {
    run
};
