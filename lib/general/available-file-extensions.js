
const schematicItem = require('./schematic-item');

module.exports = [
    {name: '.en-US.json', alias: 'enI18nFile', schematic: [schematicItem.component, schematicItem.page]},
    {name: '.id-ID.json', alias: 'idI18nFile', schematic: [schematicItem.component, schematicItem.page]},
    {name: '.spec.js', alias: 'testFile', schematic: [schematicItem.component, schematicItem.page]},
    {name: '.vue', alias: 'mainFile', schematic: [schematicItem.component, schematicItem.page, schematicItem.layout]},
    {name: '.ts', alias: 'mainFile', schematic: [schematicItem.store]}
];
