rules = x:rule* { return x || []; }

rule = ws input:input ws "=>" ws output:output ws ";" ws { return { input, output }; }

input = action:vt ws target:name { return { action, target }; } / target:name ws action:vi { return { action, target }; }

vt = "click"

vi = "lose focus"

name = '"' x:[a-z]+ '"' { return x.join(''); }

output = reaction

reaction = action:rvt ws target:name { return { action, target }; }

rvt = "show message"

ws "whitespace" = [ \t\n\r]*