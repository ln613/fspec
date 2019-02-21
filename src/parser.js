const tmp = require('./templates');

module.exports = function (source) {
  const [input, output] = source.split('=>');
  const [verb, ...args] = input.split(' ');
  return `
  window.onload = () => document.getElementsByName('${args[0]}')[0].addEventListener('${verb}', () => alert('ab'));
`;
}