function fizzBuzzArray(arr) {
  const newArr = [];

  for (let i = 1; i <= arr; i++) {
    newArr.push(
      i % 15 === 0
        ? 'FizzBuzz'
        : i % 3 === 0
        ? 'Fizz'
        : i % 5 === 0
        ? 'Buzz'
        : i
    );
  }

  return newArr;
}

module.exports = fizzBuzzArray;
