// Checks if a string is a palindrome
function isPalindrome(str) {
  if (!str) return false;
  const clean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}
