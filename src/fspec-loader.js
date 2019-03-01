module.exports = source => {
  const [input, output] = source.split('=>');
  const [action, elementName] = input.split(' ');
  const [variable, exp] = output.split('=').map(x => x.trim());
  const [op1, operator, op2] = exp.split(' ').map(x => x.trim());
  
  return [{
    input: { action, elementName },
    output: { variable, op1, op2 }
  }];
}