function findMissingLetter(arr) {
  //const alphabet= 
//'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 // const start = alphabet.indexOf(arr[0]);
  //const end = alphabet.indexOf(arr[arr.length - 1]);
//  const subAlphabet = alphabet.substring(start, end + 1);
  //const missingLetter = subAlphabet
    //.split('')
    //.filter((letter) => !arr.includes(letter))[0];
  //return arr[0] === arr[0] ? missingLetter : missingLetter;



  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // Find the index of the first letter in the array in the alphabet string
  const startIndex = alphabet.indexOf(arr[0]);

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // If the current letter in the array is not the same as the current letter in the alphabet string, return the current letter in the alphabet string
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }

  // If no letter is missing, return an empty string
  return '';
}

module.exports = findMissingLetter;
