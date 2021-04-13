
run = (schematic) => {
    const content = [];

    content.push('<style lang="scss" scoped>');
    content.push(`/* Styles for this ${schematic} */`);
    content.push('</style>\n');

    return content.join('\n');
};

module.exports = {
    run
};
