module.exports = {
  handler: `
document.getElementById('{0}').onclick = function () {
  alert('ff');
};
`
}