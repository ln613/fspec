const tmp = require('./templates');

module.exports = function (source, data) {
  const [input, output] = source.split('=>');
  const [verb, ...args] = input.split(' ');
  const [result, exp] = output.split('=').map(x => x.trim());
  const [op1, operator, op2] = exp.split(' ').map(x => x.trim());
  return `
  window.data = JSON.parse('${JSON.stringify(data)}');
  window.onload = () => document.getElementsByName('${args[0]}')[0].addEventListener('${verb}', () => {
    data['${result}'] = data['${op1}'] + data['${op2}'];
    document.getElementsByName('${result}')[0].value = data['${result}'];
  });
`;
}