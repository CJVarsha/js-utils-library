// Returns the sum of all numbers in an array
function arraySum(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((total, num) => total + num, 0);
}

