
run = (schematic) => {
    const content = [];

    content.push('<style lang="scss" scoped>');
    content.push('/* Styles for this component */');
    content.push('</style>\n');

    return content.join('\n');
};

module.exports = {
    run
};
