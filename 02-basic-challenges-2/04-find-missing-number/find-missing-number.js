function findMissingNumber(num) {
  //   const sortedNum = num.sort((a, b) => a - b);
  //   const firstNum = sortedNum[0];
  //   const lastNum = sortedNum[sortedNum.length - 1];
  //   const total = ((lastNum - firstNum + 1) * (firstNum + lastNum)) / 2;
  //   const sum = sortedNum.reduce((acc, curr) => acc + curr, 0);
  //   return total - sum;

  if (num.length === 0) {
    return undefined;
  }
  const n = num.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  //   const actualSum = num.reduce((sum, num) => sum + num, 0);
  let actualSum = 0;
  for (let i = 0; i < num.length; i++) {
    actualSum += num[i];
  }
  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
