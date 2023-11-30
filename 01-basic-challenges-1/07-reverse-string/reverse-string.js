function reverseString(str) {
  //   const reverse = str.split('').reverse().join('');

  //   return reverse;

  let reverse = '';

  for (i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

module.exports = reverseString;
