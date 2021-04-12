
const pascalCase = require('./pascal-case');

module.exports = (text) => {
    return pascalCase(text).substr(0, 1).toLowerCase() + text.substr(1);
}
