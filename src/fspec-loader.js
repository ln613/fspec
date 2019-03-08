const peg = require("pegjs");
const fs = require('fs');
const grammar = fs.readFileSync('./src/grammar.pegjs', 'utf8');
const parser = peg.generate(grammar);

module.exports = parser.parse
