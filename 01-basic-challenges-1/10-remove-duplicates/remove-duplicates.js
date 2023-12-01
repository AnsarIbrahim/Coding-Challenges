function removeDuplicates(arr) {
  //   const findArr = [];

  //   for (i = 0; i < arr.length; i++) {
  //     if (!findArr.includes(arr[i])) {
  //       findArr.push(arr[i]);
  //     }
  //   }

  //   return findArr;

  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
