function findMaxNumber(arr) {
  //   let maxNumber = arr[0];

  //   for (i = 1; i < arr.length; i++) {
  //     if (arr[i] > maxNumber) {
  //       maxNumber = arr[i];
  //     }
  //   }

  //   return maxNumber;

  return Math.max(...arr);
}

module.exports = findMaxNumber;
