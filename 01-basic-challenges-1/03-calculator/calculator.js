function calculator(num1, num2, operator) {
  const result =
    operator === '+'
      ? num1 + num2
      : operator === '-'
      ? num1 - num2
      : operator === '*'
      ? num1 * num2
      : operator === '/'
      ? num1 / num2
      : 'Invalid Operator';

  return result;
}

module.exports = calculator;
