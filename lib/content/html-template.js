
run = (schematic) => {
    const content = [];

    content.push('<template>');
    content.push('  <div>');
    content.push(`    ${schematic} content.`);
    content.push('    <Nuxt />');
    content.push('  </div>');
    content.push('</template>\n');

    return content.join('\n');
};

module.exports = {
    run
};
