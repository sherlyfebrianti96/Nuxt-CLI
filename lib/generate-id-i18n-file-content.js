
const pascalCase = require('./general/pascal-case');
const contentHtmlTemplate = require('./content/html-template');
const contentStyleTemplate = require('./content/style-template');

run = () => {
    const content = [];

    content.push('{');
    content.push('  "id-ID": {');
    content.push('  }');
    content.push('}');
    content.push('');

    return content.join('\n');
};

module.exports = {
    run
};
