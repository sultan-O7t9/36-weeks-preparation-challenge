/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}

module.exports = isPalindrome;
