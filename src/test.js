var peg = require("pegjs");
var fs = require('fs');

var s = fs.readFileSync('./grammar.pegjs', 'utf8');

var parser = peg.generate(s);

console.log(parser.parse('click "bb" => show message "hello";click "add" => "z" = "x" + "y";')[1].output);