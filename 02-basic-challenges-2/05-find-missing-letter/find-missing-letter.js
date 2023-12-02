function findMissingLetter(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const start = alphabet.indexOf(arr[0]);
  const end = alphabet.indexOf(arr[arr.length - 1]);
  const subAlphabet = alphabet.substring(start, end + 1);
  const missingLetter = subAlphabet
    .split('')
    .filter((letter) => !arr.includes(letter))[0];
  return arr[0] === arr[0] ? missingLetter : missingLetter;
}

module.exports = findMissingLetter;
