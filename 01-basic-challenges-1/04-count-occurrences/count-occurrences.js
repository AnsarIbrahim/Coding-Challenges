function countOccurrences(str, char) {
  let result = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === char.toUpperCase()) {
      result++;
    }
  }

  return result;
}

module.exports = countOccurrences;
