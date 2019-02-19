const tmp = require('./templates');

module.exports = function (source) {
  return tmp.handler.replace('{0}', source);
}