//import './src/fspec-loader';
import rules from './1.fspec';
import data from './data.json';
import { getByName } from './src/utils';

// window.onload = () => getByName(rules[0].input.elementName)[0].addEventListener(rules[0].input.action, () => {
//   data[rules[0].output.variable] = data[rules[0].output.op1] + data[rules[0].output.op2];
//   document.getElementsByName(rules[0].output.variable)[0].value = data[rules[0].output.variable];
// });

window.onload = () => {
  rules.forEach(r => {
    let output = null;
    
    if (r.output.action) {
      if (r.output.action === 'show message') output = () => alert(r.output.target);
    } else if (r.output.result) {
      output = () => {
        data[r.output.result] = evalBinaryExp(r.output, data);
        document.getElementsByName(r.output.result)[0].value = data[r.output.result];
      }
    }

    if (r.input.action === 'click') {
      getByName(r.input.target)[0].addEventListener(r.input.action, output);
    }
  })
}

const evalBinaryExp = (p, data) => {console.log(p)
  if (p.expression.operator === '+') return data[p.expression.op1] + data[p.expression.op2];
  if (p.expression.operator === '-') return data[p.expression.op1] - data[p.expression.op2];
  if (p.expression.operator === '*') return data[p.expression.op1] * data[p.expression.op2];
}