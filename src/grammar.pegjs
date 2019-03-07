rules = x:rule* { return x || []; }

rule = ws input:input ws "=>" ws output:output ws ";" ws { return { input, output }; }

input = x:[a-z]+ { return x.join(''); }

output = x:[0-9]+ { return x.join(''); }

ws "whitespace" = [ \t\n\r]*