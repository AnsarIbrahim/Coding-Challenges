function arrayIntersection(arr1, arr2) {
  //   const interSectionArr = [];

  //   for (i = 0; i < arr1.length; i++) {
  //     if (arr2.includes(arr1[i]) && !interSectionArr.includes(arr1[i])) {
  //       interSectionArr.push(arr1[i]);
  //     }
  //   }

  const set1 = new Set(arr1);
  const interSectionArr = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      interSectionArr.push(num);
    }
  }

  return interSectionArr;
}

module.exports = arrayIntersection;
