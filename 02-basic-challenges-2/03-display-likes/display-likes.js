function displayLikes(arr) {
  const output = arr.length;

  if (output === 0) {
    return 'no one likes this';
  } else if (output === 1) {
    return `${arr[0]} likes this`;
  } else if (output === 2) {
    return `${arr[0]} and ${arr[1]} like this`;
  } else if (output === 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  } else {
    return `${arr[0]}, ${arr[1]} and ${output - 2} others like this`;
  }
}

module.exports = displayLikes;
