const tmp = require('./templates');

module.exports = function (source) {
  const [i, o] = source.split('=>');
  const ev = 'click';
  const name = 'add';
  return `
  window.onload = () => document.getElementsByName('${name}')[0].addEventListener('${ev}', () => alert('abc'));
`;
}