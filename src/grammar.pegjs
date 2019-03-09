rules = x:rule* { return x || []; }

rule = ws input:input ws "=>" ws output:output ws ";" ws { return { input, output }; }

input = action:vt ws target:name { return { action, target }; } / target:name ws action:vi { return { action, target }; }

vt = "click"

vi = "lose focus"

name = '"' x:[a-z]+ '"' { return x.join(''); }

output = assignment / reaction

reaction = action:rvt ws target:name { return { action, target }; }

rvt = "show message"

assignment = result:name ws "=" ws expression:expression { return { result, expression }; }

expression = binaryExp

binaryExp = op1:operand ws operator:operator ws op2:operand { return { op1, operator, op2 }; }

operand = name

operator = "+" / "-" / "*"

ws "whitespace" = [ \t\n\r]*