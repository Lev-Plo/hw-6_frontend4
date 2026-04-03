import { add } from './src/math.js';
import multiply from './src/math.js';
import { showResult } from './src/ui.js';

const btn = document.getElementById('calcBtn');

btn.addEventListener('click', () => {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);

  const sum = add(num1, num2);
  const product = multiply(num1, num2);

  showResult(`Sum: ${sum}, Product: ${product}`);
});