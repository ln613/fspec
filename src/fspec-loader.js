const tokens = require('./tokens');
const { isDigit, isLetter, isOperator } = require('./tokenizer');

module.exports = source => {
  const tokenList = source.match(/[\w\d_.]+|;|=>/g);
  const rules = [];
  let rule = {};
  let isOutput = false;
  let position = 0;

  for (const t of tokenList) {
    
    if (t === tokens.lineBreak) {
      if (Object.keys(rule).length > 0) rules.push(rule);
      rule = { input: {}, output: {} };
      isOutput = false;
    } else if (t === tokens.arrow) {
      isOutput = true;
    } else if (t === tokens.arrow) {
    }
  }

  const [input, output] = source.split('=>');
  const [action, elementName] = input.split(' ');
  const [variable, exp] = output.split('=').map(x => x.trim());
  const [op1, operator, op2] = exp.split(' ').map(x => x.trim());
  
  return [{
    input: { action, elementName },
    output: { variable, op1, op2 }
  }];
}