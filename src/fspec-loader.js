var parse = require('./parser');

module.exports = function (source) {
  return parse(source);
};