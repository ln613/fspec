var parse = require('./parser');

const a1 = () => alert('jkl');
const o1 = { a: 'a1', b: 'b1', a1 };

module.exports = function (source) {
  var data = this.options.context + '/data.json';
  return "window.data = " + JSON.stringify(o1);
  //return parse(source, require(data));
}