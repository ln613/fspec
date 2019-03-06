start = rules:rule* { return rules || []; }

rule = ws input:input ws "=>" ws output:output ws ";" ws { return { input, output }; }

input = [a-z]+

output = [0-9]+

ws "whitespace" = [ \t\n\r]*