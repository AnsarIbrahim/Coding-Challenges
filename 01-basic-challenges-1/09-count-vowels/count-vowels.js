function countVowels(str) {
  const formattedStr = str.toLowerCase();
  const vowels = 'aeiou';
  let result = 0;

  for (i = 0; i < formattedStr.length; i++) {
    if (vowels.includes(formattedStr[i])) {
      result++;
    }
  }

  return result;
}

module.exports = countVowels;
