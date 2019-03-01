//import './src/fspec-loader';
import rules from './1.fspec';
import data from './data.json';
import { getByName } from './src/utils';

window.onload = () => getByName(rules[0].input.elementName)[0].addEventListener(rules[0].input.action, () => {
  data[rules[0].output.variable] = data[rules[0].output.op1] + data[rules[0].output.op2];
  document.getElementsByName(rules[0].output.variable)[0].value = data[rules[0].output.variable];
});
