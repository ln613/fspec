var parse = require('./parser');

module.exports = function (source) {
  var data = this.options.context + '/data.json';
  return parse(source, require(data));
};